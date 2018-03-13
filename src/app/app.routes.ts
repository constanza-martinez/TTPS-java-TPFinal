import { RouterModule, Routes } from '@angular/router';
import { NgModule }             from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { LoginGuard } from './login.guard';
import { NoLoginGuard } from './no-login.guard';

const app_routes: Routes = [
    {path:'home',component: HomeComponent},
    {path:'about',component: AboutComponent},
    {path:'login',component: LoginComponent, canActivate: [NoLoginGuard]},
    {path:'register',component: RegisterComponent, canActivate: [NoLoginGuard]},
    {path:'prueba',component: PruebaComponent},
    {path:'**', pathMatch: 'full', redirectTo: 'home'}
];

export const app_routing = RouterModule.forRoot(app_routes);

