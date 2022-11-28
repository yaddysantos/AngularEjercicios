import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelo/cliente.modelo';
import { ClienteServicio } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  ListaClientes: Cliente[];
  constructor(private clientesServicio: ClienteServicio) { }

  ngOnInit(): void {
    this.clientesServicio.getClientes()?.subscribe(
      clientes => {
        this.ListaClientes = clientes
      }
    )
  }

  getSaldoTotal(){
    let saldoTotal: number = 0;
    if(this.ListaClientes){
      this.ListaClientes.forEach(cliente => {
        saldoTotal += cliente.saldo;
      })
    }
    return saldoTotal
  }
}
