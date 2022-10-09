import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { EgresoComponent } from './egreso/egreso.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IngresoServicio } from './ingreso/ingreso.service';
import { EgresoServicio } from './egreso/egreso.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IngresoComponent,
    EgresoComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [IngresoServicio, EgresoServicio],
  bootstrap: [AppComponent]
})
export class AppModule { }
