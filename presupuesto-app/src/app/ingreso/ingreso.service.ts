import { Ingreso } from "./ingreso.model";

export class IngresoServicio{
    ingresos: Ingreso[] =[
        new Ingreso("Salario", 4000),
        new Ingreso("Venta carro", 8000),
    ]

    eliminar(ingreso: Ingreso){
        //recibir el indice
        const indice: number = this.ingresos.indexOf(ingreso);
        this.ingresos.splice(indice,1)
    }
}