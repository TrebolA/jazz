import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable({
  providedIn: 'root'
})
export class RegistroMedellinService {

  private registrosUrl: string = 'http://127.0.0.1:8000/medellin/';

  constructor(private http: HttpClient) { }

  addRegistro(pNombre: String, pApellido: String, pCorreo: String, pCelular: number, pTerminos: boolean, pPolitica: boolean): Observable<any>{
    let registro = {
      "nombre": pNombre,
      "apellido": pApellido,
      "correo": pCorreo,
      "celular": pCelular,
      "terminos": pTerminos,
      "politica": pPolitica
    }

    return this.http.post(this.registrosUrl, registro);
  }
}
