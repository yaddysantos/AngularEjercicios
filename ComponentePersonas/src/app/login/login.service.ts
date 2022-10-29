import { Injectable } from "@angular/core";
import {getAuth , createUserWithEmailAndPassword} from 'firebase/auth';

@Injectable()
export class LoginService{
    token: string;

    login(email: string, password: string){
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then( resp =>{
            resp.user.getIdToken().then(
                tokenRes =>{
                    this.token = tokenRes;
                }
            );
        })
    }
}