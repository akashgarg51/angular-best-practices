import {NgModule} from "@angular/core";
import {PaginatorComponent} from "./paginator/paginator.component";
import {DropdownModule} from "primeng/primeng";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule
  ],
  exports: [
    PaginatorComponent
  ],
  providers: []
})
export class SharedModule {}
