import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthGuard } from './auth.guard';
import * as moment from 'moment';
import { AuthenticationService } from '../services/auth.service';
import { NotificationService } from '../services/notification.service';

describe('AuthGuard', () => {
    let router: Router;
    let authService: AuthenticationService;
    let notificationService: NotificationService;
    let routeSnapshot: ActivatedRouteSnapshot;
    let routerStateSnapshot: RouterStateSnapshot;

    beforeEach(() => {
        router = jasmine.createSpyObj('Router', ['navigate']);
        authService = jasmine.createSpyObj('AuthenticationService', ['getCurrentUser']);
        notificationService = jasmine.createSpyObj('NotificationService', ['openSnackBar']);
        routeSnapshot = jasmine.createSpyObj('ActivatedRouteSnapshot', ['']);
        routerStateSnapshot = jasmine.createSpyObj('RouterStateSnapshot', { url: '' });
    });

    it('create an instance', () => {
        const guard = new AuthGuard(router, notificationService, authService);
        expect(guard).toBeTruthy();
    });

    it('returns false if user is null', () => {
        spyOn(authService, 'getCurrentUser').and.returnValue(null);
        const guard = new AuthGuard(router, notificationService, authService);

        const result = guard.canActivate(routeSnapshot, routerStateSnapshot);

        expect(result).toBe(false);
    });

    it('redirects to login if user is null', () => {
        spyOn(authService, 'getCurrentUser').and.returnValue(null);
        const guard = new AuthGuard(router, notificationService, authService);

        guard.canActivate(routeSnapshot, routerStateSnapshot);

        expect(router.navigate).toHaveBeenCalledWith(['auth/login']);
    });

    it('does not display expired notification if user is null', () => {
        spyOn(authService, 'getCurrentUser').and.returnValue(null);
        const guard = new AuthGuard(router, notificationService, authService);

        guard.canActivate(routeSnapshot, routerStateSnapshot);

        expect(notificationService.openSnackBar).not.toHaveBeenCalled();
    });

    it('redirects to login if user session has expired', () => {
        const user = { expiration: moment().subtract(1, 'minutes').toDate() };
        spyOn(authService, 'getCurrentUser').and.returnValue(user);
        const guard = new AuthGuard(router, notificationService, authService);

        guard.canActivate(routeSnapshot, routerStateSnapshot);

        expect(router.navigate).toHaveBeenCalledWith(['auth/login']);
    });

    it('displays notification if user session has expired', () => {
        const user = { expiration: moment().subtract(1, 'seconds').toDate() };
        spyOn(authService, 'getCurrentUser').and.returnValue(user);
        const guard = new AuthGuard(router, notificationService, authService);

        guard.canActivate(routeSnapshot, routerStateSnapshot);

        expect(notificationService.openSnackBar).toHaveBeenCalledWith('Your session has expired');
    });

    it('returns true if user session is valid', () => {
        const user = { expiration: moment().add(1, 'minutes').toDate() };
        spyOn(authService, 'getCurrentUser').and.returnValue(user);
        const guard = new AuthGuard(router, notificationService, authService);

        const result = guard.canActivate(routeSnapshot, routerStateSnapshot);

        expect(result).toBe(true);
    });
});
