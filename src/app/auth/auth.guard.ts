import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private _authService : AuthService,
        private _router : Router
    ) {}
    canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) {
        if (this._authService.isAuth()) {
            console.log('OK');
            return true;
        } else {
            this._router.navigate(['/login']);
        }
        
    }

}