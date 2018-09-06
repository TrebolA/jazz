import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegistroBogotaComponent } from './components/registro-bogota/registro-bogota.component';
import { RegistroMedellinComponent } from './components/registro-medellin/registro-medellin.component';

import { RegistroBogotaService } from "./services/registro-bogota.service"
import { RegistroMedellinService } from "./services/registro-medellin.service"

@NgModule({
  declarations: [
    AppComponent,
    RegistroBogotaComponent,
    RegistroMedellinComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    RegistroBogotaService,
    RegistroMedellinService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
