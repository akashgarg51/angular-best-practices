import {Component, ViewEncapsulation} from "@angular/core";

@Component({
  selector: 'first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FirstComponent {
  name = 'Demo App';

  constructor() {}
}
