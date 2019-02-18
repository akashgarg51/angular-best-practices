import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaginatorState } from './paginator';

const defaultRowsPerPageItems: any[] = [
    { label: '50', value: 50 },
    { label: '100', value: 100 },
    { label: '250', value: 250 },
    { label: '500', value: 500 },
    { label: '1000', value: 1000 },
    { label: 'All', value: 0 }
];

@Component({
    selector: 'paginator',
    templateUrl: './paginator.component.html',
    styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit{
    // tslint:disable:variable-name
    _rowsPerPageOptions: number[];
    _totalRecords: number = 0;
    _rowsPerPage: number = 100;

    rowsPerPageItems: any[] = defaultRowsPerPageItems;
    showPageSelectionOverlay: boolean = false;
    pageCount: number = 1;
    inputPage: string = null;
    disableGoButton: boolean = true;
    paginatorState: PaginatorState = null;

    @Input() dropdownScrollHeight: string = '300px';
    @Input() showPageSelectionUp: boolean = false;
    @Input() currentPage: number = 1;

    @Output() onPageChange: EventEmitter<any> = new EventEmitter();

    ngOnInit() {}

    @Input() get rowsPerPageOptions(): number[] {
        return this._rowsPerPageOptions;
    }

    set rowsPerPageOptions(val: number[]) {
        this._rowsPerPageOptions = val;
        if (this._rowsPerPageOptions) {
            this.rowsPerPageItems = [];
            for (const opt of this._rowsPerPageOptions) {
                const dropdownLabel: string = opt === 0 ? 'All' : String(opt);
                this.rowsPerPageItems.push({ label: dropdownLabel, value: opt });
            }
        }
    }

    @Input() get totalRecords(): number {
        return this._totalRecords;
    }

    set totalRecords(val: number) {
        this._totalRecords = val;
        this.updatePageCount();
    }

    @Input() get rowsPerPage(): number {
        return this._rowsPerPage;
    }

    set rowsPerPage(val: number) {
        this._rowsPerPage = val;
        this.updatePageCount();
    }

    constructor() {}

    updatePageCount() {
        const rowsPerPage = this.rowsPerPage === 0 ? this.totalRecords : this.rowsPerPage;
        this.pageCount = Math.ceil(this.totalRecords / rowsPerPage) || 1 ;
        this.pageCount === 1 ? this.currentPage = 1 : null;
    }

    onJumpToClick(event) {
        this.showPageSelectionOverlay = !this.showPageSelectionOverlay;
        event.stopPropagation();
    }

    changePageToPrev() {
        this.currentPage -= 1;
        this.changePage();
    }

    changePageToNext() {
        this.currentPage += 1;
        this.changePage();
    }

    onPageJumpClick() {
        const inputPageNumber = Number.parseInt(this.inputPage);
        if (this.isPageInputValid(inputPageNumber)) {
            this.currentPage = inputPageNumber;
            this.changePage();
        }
    }

    changePageToFirst() {
        this.currentPage = 1;
        this.changePage();
    }

    changePageToLast() {
        this.currentPage = this.pageCount;
        this.changePage();
    }

    changePage() {
        this.paginatorState = {
            pageNumber: this.currentPage,
            pageSize: this.rowsPerPage,
            pageCount: this.pageCount,
            currentPage: this.currentPage
        };
        this.onPageChange.emit(this.paginatorState);
        this.resetPageParams();
    }

    isFirstPage() {
        return this.currentPage === 1;
    }

    isLastPage() {
        return this.currentPage === this.pageCount;
    }

    handleKeyboardEvent = (ev: KeyboardEvent) => {
        ev.stopPropagation();
        ev.preventDefault();

        const inputPageNumber = Number.parseInt(this.inputPage);
        this.isPageInputValid(inputPageNumber) ? this.disableGoButton = false
            : this.disableGoButton = true;

        ev.which === 13 ? this.onPageJumpClick() : null;
    }

    isPageInputValid(inputPageNumber: number) {
        const isValid = !isNaN(inputPageNumber) && inputPageNumber > 0
            && inputPageNumber <= this.pageCount;
        return isValid;
    }

    resetPageParams() {
        this.inputPage = null;
        this.disableGoButton = true;
        this.showPageSelectionOverlay = false;
    }

    onRppChange() {
        this.changePage();
    }

    clickedOutsidePaginator (event) {
        this.showPageSelectionOverlay = false;
    }

}
