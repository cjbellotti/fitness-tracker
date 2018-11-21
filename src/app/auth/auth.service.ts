import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { User } from "./user.model";
import { AuthData } from "./auth-data.module";
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

    authChange = new Subject<boolean>();
    private user : User = null;

    constructor(
        private router : Router
    ) {}

    registerUser(authData : AuthData) {
        this.user = {
            email : authData.email,
            userId : Math.round(Math.random() * 1000).toString()
        }
        this.authSuccessfilly();
    }
    
    login(authData : AuthData) {
        this.user = {
            email : authData.email,
            userId : Math.round(Math.random() * 1000).toString()
        }
        this.authSuccessfilly();
    }

    logout() {
        this.authChange.next(false);
        this.user = null;
        this.router.navigate(['/login'])
    }

    getUser() {
        return {...this.user};
    }

    isAuth() {
        return this.user !== null;
    }

    private authSuccessfilly() {
        this.authChange.next(true);
        this.router.navigate(['/training']);
    }

}