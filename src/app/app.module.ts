import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; //Bootstrap para Angular

//clases
import { Usuario } from './clases/usuario';
import { Proyecto } from './clases/proyecto';


//servicios
import { UsuarioService } from './services/usuario/usuario.service';
import { StorageService } from './services/storage/storage.service';
import { AuthorizationInterceptorService } from './services/authorization-interceptor.service';
import { ProyectoService } from './services/proyecto/proyecto.service';

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
import { ModalProyectoComponent } from './components/modal-proyecto/modal-proyecto.component';




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
    ModalProyectoComponent,
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpModule,
    HttpClientModule,
    FormsModule,
    FlashMessagesModule,
    NgbModule.forRoot(),
  ],

  //cargar los servicios acá
  providers: [  
              UsuarioService,
              ProyectoService,
              LoginGuard,
              NoLoginGuard,
              StorageService,
              FlashMessagesService,
              {
                provide: HTTP_INTERCEPTORS,
                useClass: AuthorizationInterceptorService,
                multi: true,
              },
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
