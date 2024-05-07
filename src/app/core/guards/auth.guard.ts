import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import { AuthenticationService } from '../services/auth.service';
import { NotificationService } from '../services/notification.service';

@Injectable()
export class
AuthGuard implements CanActivate {

    constructor(private router: Router,
        private notificationService: NotificationService,
        private authService: AuthenticationService) { }

    public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log(next.routeConfig?.data?.['role']+"  "+this.authService.isUserInRole(next.routeConfig?.data?.['role']));
        if (this.authService.isLoggedIn() && next.routeConfig?.data?.['role']!=undefined && this.authService.isUserInRole(next.routeConfig?.data?.['role'])) {
          console.log("in can activate");  return true;
        }
        if (this.authService.isLoggedIn() && next.routeConfig?.data?.['role']==undefined ) {
            console.log("in can activatem");  return true;
        }else {
           console.log("in can activate else");
            this.router.navigate(['auth/login']);
            return false;
        }
        return true;
    }

}
