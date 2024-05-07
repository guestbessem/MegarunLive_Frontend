import { Injectable, Inject } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { delay, map } from 'rxjs/operators';
import {of, EMPTY, Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {
    SERVER_URL: string = "http://localhost:8088/api/auth";

    constructor(private http: HttpClient,
                @Inject('LOCALSTORAGE') private localStorage: Storage) {
    }

    getToken() {
        return sessionStorage.getItem("app.token");
    }

    getHeader() {
        let headers = new HttpHeaders();
        console.log("token " + this.getToken());
        headers = headers.append("Authorization", "Bearer " + this.getToken());
        return headers;
    }
    

    isLoggedIn(): boolean {
        return sessionStorage.getItem("app.token") != null;
    }

   
    login(username: string, password: string): Observable<any> {
        const loginData = { username, password };
        return this.http.post(`${this.SERVER_URL}/signin`, loginData, { headers: this.getHeader() });
    }
    
    
    

    logout() {
        sessionStorage.removeItem("app.token");
        sessionStorage.removeItem("app.roles");
        sessionStorage.removeItem("currentUser");

    }

    isUserInRole(roleFromRoute: string) {

        const role = sessionStorage.getItem("app.role");
             if (role === roleFromRoute) {
                    return true;
                }
        return false;
    }
    getCurrentUser(): any {
        // TODO: Enable after implementation
        // return JSON.parse(this.localStorage.getItem('currentUser'));
     sessionStorage.getItem("currentUser");

    }

    passwordResetRequest(email: string) {
        return of(true).pipe(delay(1000));
    }

    changePassword(email: string, currentPwd: string, newPwd: string) {
        return of(true).pipe(delay(1000));
    }

    passwordReset(email: string, token: string, password: string, confirmPassword: string): any {
        return of(true).pipe(delay(1000));
    }
}
