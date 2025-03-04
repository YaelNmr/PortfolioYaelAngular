import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  url="https://backendyael.onrender.com/autenticacion/login"          //"https://localhost:8080/autenticacion/login"
 
  currentUserSubject: BehaviorSubject<any>

  constructor(private http:HttpClient) { 
    console.log("El servico de autenticación esta corriendo");
    this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')|| '{}'))
  }

    IniciarSesion(credenciales:any):Observable<any>
    {
      return this.http.post(this.url, credenciales).pipe(map(datos=>{
        sessionStorage.setItem('currentUser', JSON.stringify(datos));
        return datos;
      }))

    }
}
