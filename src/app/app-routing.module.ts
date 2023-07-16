import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateComponent } from './students/create/create.component';
import { ListComponent } from './students/list/list.component';
import { LoginComponent } from './students/login/login/login.component';

const routes: Routes = [
  {path: 'student-list',component:ListComponent},
  {path: 'student-create' ,component:CreateComponent},
  {path: 'student-edit/:id',component:CreateComponent},
  {path: 'student-login', component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
