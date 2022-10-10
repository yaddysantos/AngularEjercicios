import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoServicio } from './ingreso.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  //Acceder al arreglo de cada uno de los elementos de ingreso
  ingresos: Ingreso[]=[];
  
  constructor(private ingresServicio: IngresoServicio) { }

  ngOnInit(): void {
    this.ingresos = this.ingresServicio.ingresos;
  }

  eliminarRegistro(ingreso: Ingreso){
    this.ingresServicio.eliminar(ingreso);
  }
}
