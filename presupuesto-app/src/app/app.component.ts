import { Component } from '@angular/core';
import { Egreso } from './egreso/egreso.model';
import { EgresoServicio } from './egreso/egreso.service';
import { Ingreso } from './ingreso/ingreso.model';
import { IngresoServicio } from './ingreso/ingreso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ingreso: Ingreso[]=[];
  egreso: Egreso[]=[];

  //1.Inyectar dependencia de los servicios
  constructor(private ingresoServicio: IngresoServicio, private egresoServicio: EgresoServicio){
    this.ingreso = ingresoServicio.ingresos;
    this.egreso = egresoServicio.egresos;
  }

  getIngresoTotal(){
    let ingresoTotal: number = 0;
    this.ingreso.forEach( i =>{
      ingresoTotal += i.valor;
    });
    return ingresoTotal;
  }

  getEgresoTotal(){
    let egresoTotal: number = 0;
    this.egreso.forEach( e =>{
      egresoTotal += e.valor;
    });
    return egresoTotal;
  }

  getPorcentajeTotal(){
    return this.getEgresoTotal()/this.getIngresoTotal();
  }

  getPresupuestoTotal(){
    return this.getIngresoTotal() - this.getEgresoTotal();
  }

}
