import { Component, OnInit } from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../core/services/auth.service";
import {NGXLogger} from "ngx-logger";
import {SpinnerService} from "../../../core/services/spinner.service";
import {NotificationService} from "../../../core/services/notification.service";
import {Utilisateur} from "../../users/utilisateur";
import {NgModel} from "@angular/forms";
import * as Util from "util";
import {UtilisateurService} from "../../users/service/utilisateur.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  user: Utilisateur =new Utilisateur("");
  form!: UntypedFormGroup;
  hideCurrentPassword: boolean;
  hideNewPassword: boolean;
  currentPassword!: string;
  newPassword!: string;
  newPasswordConfirm!: string;
  disableSubmit!: boolean;
  message:string="l'email est obligatoire*";

  constructor(private router:Router, private authService: AuthenticationService,
              private logger: NGXLogger,
              private spinnerService: SpinnerService,
              private notificationService: NotificationService,private userS:UtilisateurService) {
   this.user=new Utilisateur("");
    this.hideCurrentPassword = true;
    this.hideNewPassword = true;
  }

  ngOnInit() {
    this.form = new UntypedFormGroup({
      nom: new UntypedFormControl('', Validators.required),
      password: new UntypedFormControl('', Validators.required),
      prenom: new UntypedFormControl('', Validators.required),
        cin: new UntypedFormControl('', Validators.required),
        role: new UntypedFormControl('', Validators.required),
        email: new UntypedFormControl('', Validators.email)

    });

    this.form.get('password')?.valueChanges
        .subscribe(val => {
          this.user.password = val;
        });
      this.form.get('role')?.valueChanges
          .subscribe(val => {
              this.user.role = val;
          });
      this.form.get('cin')?.valueChanges
          .subscribe(val => {
              this.user.cin = val;
          });
      this.form.get('email')?.valueChanges
          .subscribe(val => {
              this.user.email = val;
          });
      this.form.get('nom')?.valueChanges
          .subscribe(val => {
              this.user.nom = val;
          });
      this.form.get('prenom')?.valueChanges
          .subscribe(val => {
              this.user.prenom = val;
          });

    this.spinnerService.visibility.subscribe((value) => {
      this.disableSubmit = value;
    });
  }
   createUser(){
       console.log(this.user);

           this.userS.createUtilisateur(this.user).subscribe((data) => this.router.navigate(['users']));

   }
}
