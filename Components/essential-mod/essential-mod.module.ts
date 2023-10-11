import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { NoPageFoundComponent } from '../no-page-found/no-page-found.component';
import { LogoutComponent } from '../logout/logout.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import {MatButtonModule} from '@angular/material/button';

const mainRoutes:Routes=[
  {path:'' ,component:LoginComponent},
  {path:'login' ,component:LoginComponent},
  {path:'logout', component:LogoutComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'no-page-found', component:NoPageFoundComponent},
  {path:'**', redirectTo:'no-page-found'}, 
]

const modules=[
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule
]

@NgModule({
  declarations: [],
  imports: [
    ...modules,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(mainRoutes)
  ],
  exports:[
    ...modules
  ]
})
export class EssentialModModule { }
