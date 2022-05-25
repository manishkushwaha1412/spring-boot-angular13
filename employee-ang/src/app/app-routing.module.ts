import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DetailsEmployeeComponent } from './components/details-employee/details-employee.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'employee', pathMatch: 'full'
  },
  {
    path: 'employee', component: ListEmployeeComponent
  },
  {
    path: 'employee/:id', component: DetailsEmployeeComponent
  },
  {
    path: 'add', component: AddEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
