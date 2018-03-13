import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//clases
import { Usuario } from './clases/usuario';


//servicios
import { UsuarioService } from './services/usuario/usuario.service';
import { StorageService } from './services/storage/storage.service';

//rutas
import {  app_routing } from "./app.routes";

//guards
import { LoginGuard } from './login.guard';
import { NoLoginGuard } from './no-login.guard';


//componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { PruebaComponent } from './components/prueba/prueba.component';





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
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpModule,
    HttpClientModule,
    FormsModule,
  ],

  //cargar los servicios acá
  providers: [  
              UsuarioService,
              LoginGuard,
              NoLoginGuard,
              StorageService,
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
