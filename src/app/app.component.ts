import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jazz';
  formularioBogota:boolean = false;
  formularioMedellin:boolean = false;

  mostrarFormulario(ciudad: String){
    if(ciudad=="bogota"){
      this.formularioBogota=true;
      this.formularioMedellin=false;
    }
    if(ciudad=="medellin"){
      this.formularioMedellin=true;
      this.formularioBogota=false;
    }
  }
}
