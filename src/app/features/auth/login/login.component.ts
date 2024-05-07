import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormControl, Validators, UntypedFormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { MatSnackBar } from "@angular/material/snack-bar";
import { UtilisateurService } from "../../users/service/utilisateur.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    username: string = "";  // Changed from email to username
    password: string = "";
    message: string = "";
    public loginAttempts: number = 0;
    public maxLoginAttempts: number = 3;

    loginForm!: UntypedFormGroup;
    loading!: boolean;

    constructor(
        private router: Router,
        private titleService: Title,
        private notificationService: NotificationService,
        private authService: AuthenticationService, 
        private snackBar: MatSnackBar,
        private userS: UtilisateurService
    ) {}

    ngOnInit() {
        this.titleService.setTitle('Login');
        this.authService.logout();
        this.createForm();
    }

    private createForm() {
        this.loginForm = new UntypedFormGroup({
            username: new UntypedFormControl('', Validators.required),  // Changed from email to username
            password: new UntypedFormControl('', Validators.required),
        });
        this.loginForm.get('username')?.valueChanges
            .subscribe(val => {
                this.username = val;
            });
        this.loginForm.get('password')?.valueChanges
            .subscribe(val => {
                this.password = val;
            });
    }

    public authenticate() {
        console.log("Logging in...");
        this.loading = true;
        this.authService.login(this.username, this.password).subscribe(
            response => {
                console.log("response",response);
                sessionStorage.setItem("currentUser", this.username);
                let tokenStr = response.token;
                sessionStorage.setItem("app.token", tokenStr);
                console.log(tokenStr);
                sessionStorage.setItem("app.role", response.roles);

                this.router.navigateByUrl("/dashboard");
            },
            error => {
                this.notificationService.openSnackBar("Veuillez vérifier votre nom d'utilisateur/mot de passe!");
                this.loading = false;
                this.userS.updateTentative(this.username);
            }
        );
    }

    resetPassword() {
        this.router.navigate(['/auth/password-reset-request']);
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem("username");
        console.log(!(user === null));
        return !(user === null);
    }

    logOut() {
        sessionStorage.removeItem("username");
        this.router.navigate(['/login']);
    }
}
