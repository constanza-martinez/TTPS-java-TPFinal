import { Component, Input } from '@angular/core';
//componente principal, en app.component.html estan cargados los demás componentes de la página
@Component({
  selector: 'app-root', //tag html con el que identifico al componente
  templateUrl: './app.component.html',  //plantilla que pertenece al componente principal
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
