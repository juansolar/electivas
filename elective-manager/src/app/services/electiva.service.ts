import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Electiva } from '../models/electiva';

@Injectable({
  providedIn: 'root'
})
export class ElectivaService {

  selectedElectiva: Electiva;
  electivas: Electiva[];

  readonly URL_API = 'http://localhost:8080';

  constructor(private http: HttpClient) {
    this.selectedElectiva = new Electiva();
  }

  postElectiva(electiva: Electiva) {
    return this.http.post(this.URL_API, electiva);
  }

  getElectivas() {
    return this.http.get(this.URL_API+'/list_electives');
  }

  putElectiva(electiva: Electiva) {
    return this.http.post(this.URL_API+'/create_elective', electiva);
  }

  deleteElectiva(_id: string) {
    return this.http.get(this.URL_API + `/delete_elective/?_id=${_id}`);
  }
}