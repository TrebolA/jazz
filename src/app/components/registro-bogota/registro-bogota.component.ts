import { Component, OnInit } from '@angular/core';
import { RegistroBogotaService } from "../../services/registro-bogota.service"

@Component({
  selector: 'app-registro-bogota',
  templateUrl: './registro-bogota.component.html',
  styleUrls: ['./registro-bogota.component.css']
})
export class RegistroBogotaComponent implements OnInit {

  constructor(private registroService: RegistroBogotaService) { }

  ngOnInit() {
  }

  addRegistro(pNombre, pApellido, pCorreo, pCelular, pTerminos, pPolitica){
    this.registroService.addRegistro(
      pNombre.value, pApellido.value, pCorreo.value, pCelular.value, pTerminos.value, pPolitica.value
    ).subscribe(
      response => {
        alert('se creo')
      },
      error => console.log('error', error)
      
    );
  }

}
