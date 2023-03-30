import { HttpClient } from '@angular/common/http'; //Hacer peticiones y CRUD.
import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs';  //Observable: es para suscribirse a los datos y que reciba respuestas asincrona.

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
                      //http=alias
  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{  //método observable que devuelve datos.
    return this.http.get('./assets/datos/datosproyecto.json');   //retorno de datos utilizando el método GET de HttpClient que llama a la base de datos JSON ó a una URL.
  }
}
