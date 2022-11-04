import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

@Injectable()
export class LoginService{
    token: string | null;

    constructor(private router: Router){}

    login(email: string, password: string){
        let auth = getAuth(); 
        signInWithEmailAndPassword(auth, email, password)
        .then( resp =>{
            auth.currentUser?.getIdToken().then(
                tokenRes =>{
                    this.token = tokenRes;
                    this.router.navigate(['/']);
                }
            )
        })
    }

    getIdToken(){
        return this.token;
    }

    isAutenticado(){
        return this.token != null;
    }

    logOut(){
        getAuth().signOut().then(() => {
            this.token = null;
            this.router.navigate(['login']);
        }).catch(error => console.error("Error logout: "+error));
    }
}