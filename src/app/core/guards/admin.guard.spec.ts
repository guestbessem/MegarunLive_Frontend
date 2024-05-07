import { Router } from '@angular/router';
import { AuthenticationService } from '../services/auth.service';
import { AdminGuard } from './admin.guard';

describe('AdminGuard', () => {
    let router: jasmine.SpyObj<Router>;
    let authService: jasmine.SpyObj<AuthenticationService>;

    beforeEach(() => {
        router = jasmine.createSpyObj<Router>('Router', ['navigate']);
        authService = jasmine.createSpyObj<AuthenticationService>('AuthenticationService', ['getCurrentUser']);
    });

    it('creates an instance', () => {
        const guard = new AdminGuard(router, authService);
        expect(guard).toBeTruthy();
    });

    it('returns true if user is admin', () => {
        const user = { isAdmin: true };
        authService.getCurrentUser.and.returnValue(user);
        const guard = new AdminGuard(router, authService);

        const result = guard.canActivate();

        expect(result).toBe(true);
    });

    it('returns false if user is not admin', () => {
        const user = { isAdmin: false };
        authService.getCurrentUser.and.returnValue(user);
        const guard = new AdminGuard(router, authService);

        const result = guard.canActivate();

        expect(result).toBe(false);
        expect(router.navigate).toHaveBeenCalledWith(['/']); // Ensure redirection is tested
    });

    it('redirects to root if user is not an admin', () => {
        const user = { isAdmin: false };
        authService.getCurrentUser.and.returnValue(user);
        const guard = new AdminGuard(router, authService);

        guard.canActivate();

        expect(router.navigate).toHaveBeenCalledWith(['/']);
    });

    it('redirects to root if user does not exist', () => {
        authService.getCurrentUser.and.returnValue(null);
        const guard = new AdminGuard(router, authService);

        guard.canActivate();

        expect(router.navigate).toHaveBeenCalledWith(['/']);
    });
});
