import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private authService: MsalService, private router: Router) { }

    canActivate():
        boolean |
        UrlTree |
        Promise<boolean | UrlTree> |
        Observable<boolean | UrlTree> {
        const isAuth = !!this.authService.getAccount();
        if (isAuth) {
            return true;
        }
        return this.router.createUrlTree([''])
    }
}
