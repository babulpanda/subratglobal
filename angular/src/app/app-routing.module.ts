import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path : 'signup', component : SignupComponent},
  {path : '', component: HomeComponent},
  {path : 'home',component: HomeComponent},
  {path : 'login', component : LoginComponent },
  {path : 'admin', loadChildren:()=> import('./admin/admin.module').then(mod=>mod.AdminModule)},
  {path : 'owner', loadChildren:()=> import('./owner/owner.module').then(m=>m.OwnerModule)},
  { path: 'student', loadChildren: () => import('./student/student.module').then(m => m.StudentModule) },
  {path: 'user', loadChildren:()=> import('./user/user.module').then(m=>m.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

