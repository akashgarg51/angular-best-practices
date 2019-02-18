import { NgModule } from '@angular/core';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {AdminRoutingModule} from "./admin-routing.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    AdminHomeComponent
  ],
  imports: [
    SharedModule,
    AdminRoutingModule
  ],
  exports: [],
  providers: []
})
export class AdminModule { }
