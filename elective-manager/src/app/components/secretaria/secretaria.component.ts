import { Component, OnInit } from '@angular/core';
import { SecretaryService } from 'src/app/services/secretary.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-secretaria',
  templateUrl: './secretaria.component.html',
  styleUrls: ['./secretaria.component.css']
})
export class SecretariaComponent implements OnInit {

  constructor(private secretary: SecretaryService, private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.secretary.cerrarSesion().subscribe(rest=> (alert(rest)) )
    this.router.navigate(['/signIn']);
  }

  listarElectivas(){
    this.router.navigate(['/secretaria/electivas']);
  }

}
