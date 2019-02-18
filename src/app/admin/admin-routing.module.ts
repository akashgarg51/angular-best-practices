import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AdminHomeComponent} from './admin-home/admin-home.component';

const routes: Routes = [{
 //   path: 'admin-home',  component: AdminHomeComponent
    path: '',
    children: [
        {
            path: '',
            component: AdminHomeComponent
        }
    ]
  }];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})

export class AdminRoutingModule {}
