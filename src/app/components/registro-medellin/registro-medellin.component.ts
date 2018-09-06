import { Component, OnInit } from '@angular/core';
import { RegistroMedellinService } from "../../services/registro-medellin.service"

@Component({
  selector: 'app-registro-medellin',
  templateUrl: './registro-medellin.component.html',
  styleUrls: ['./registro-medellin.component.css']
})
export class RegistroMedellinComponent implements OnInit {

  constructor(private registroService: RegistroMedellinService) { }

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
