import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx"
import { Electiva } from '../interface/electiva'
import {  HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class SecretaryService {
  API_URI = 'http://localhost:8080/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  cerrarSesion(){
//    console.log("en cerrar sesion");
    return this.http.get(this.API_URI + 'logout');
  }
}
