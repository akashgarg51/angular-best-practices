import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {AdminHomeComponent} from "./admin/admin-home/admin-home.component";
import {FirstComponent} from "./first.component";
import {NotFound404PageComponent} from "./NotFound404-page.component";

const routes: Routes = [
  {
    path: 'admin-home',
    loadChildren: './admin/admin.module#AdminModule'
  },
  { path: '', component: FirstComponent },
  { path: '**', component: NotFound404PageComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false } )],
  exports: [RouterModule],
})
export class AppRoutingModule {}
