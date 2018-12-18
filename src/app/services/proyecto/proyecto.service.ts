import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Token } from '../../clases/token';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { StorageService } from '../storage/storage.service';
import { Proyecto } from '../../clases/proyecto';

@Injectable()
export class ProyectoService {

	url = 'http://localhost:8080/gestorDeTareas/';

	constructor(private http: HttpClient, private storage: StorageService) { }

	httpOptions = { 
    	headers: new HttpHeaders({
      		'content-type':'application/json',
    	})
  	};

  	getProyectos():Observable<Proyecto[]> {
    	let uri = this.url + 'users/' + this.storage.getLocalStorage('usuario') + '/proyectos';
    	return this.http.get<Proyecto[]>(uri,this.httpOptions);
    }

    setProyecto(proyecto){
    let url = this.url + 'proyectos';
    return this.http.post(url,proyecto,this.httpOptions); 
	}
	
	updateProyecto(proyecto){
		let url = this.url + 'proyecto/'+ proyecto.id;
		return this.http.put(url,proyecto,this.httpOptions);
	}

	deleteProyecto(id){
		let url = this.url + 'proyecto/'+id;
		return this.http.delete(url,this.httpOptions);
	}

}
