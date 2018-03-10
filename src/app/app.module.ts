import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 

import { Usuario } from './clases/usuario';


//servicios
import { UsuarioService } from './services/usuario/usuario.service';
import { StorageService } from './services/storage/storage.service';

//rutas
import {  app_routing } from "./app.routes";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { HomeUserComponent } from './components/home-user/home-user.component';
import { LoginGuard } from './login.guard';
import { NoLoginGuard } from './no-login.guard';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    PruebaComponent,
    HomeUserComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpModule,
    HttpClientModule,
    FormsModule,
    //NgbModule.forRoot()
  ],
  providers: [UsuarioService, LoginGuard, NoLoginGuard,StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
