import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { map, Observable } from "rxjs";
import { Cliente } from "../modelo/cliente.modelo";

@Injectable()
export class ClienteServicio{
    
    clientesColeccion?: AngularFirestoreCollection<Cliente>;
    clienteDoc?: AngularFirestoreDocument<Cliente>;
    clientes?: Observable<Cliente[]>;
    cliente?: Observable<Cliente>;

    constructor(private db: AngularFirestore){
        //REcuperando la coleccion de clientes de firestore
        this.clientesColeccion = db.collection('clientes',ref => ref.orderBy('apellido','asc'));
    }

    getClientes(): Observable<Cliente[]> | undefined{
        this.clientes = this.clientesColeccion?.snapshotChanges().pipe(
            map(cambios => {
                return cambios.map(accion => {
                    const datos = accion.payload.doc.data() as Cliente;
                    datos.id = accion.payload.doc.id;
                    return datos;
                })
            })
        );
        return this.clientes
    }
}