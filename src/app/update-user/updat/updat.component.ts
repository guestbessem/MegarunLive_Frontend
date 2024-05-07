import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap} from "rxjs";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {NGXLogger} from "ngx-logger";
import {SpinnerService} from "../../core/services/spinner.service";
import {Utilisateur} from "../../features/users/utilisateur";
import {UtilisateurService} from "../../features/users/service/utilisateur.service";

@Component({
  selector: 'app-updat',
  templateUrl: './updat.component.html',
  styleUrls: ['./updat.component.css']
})
export class UpdatComponent implements OnInit {
  form!: UntypedFormGroup;
  hideCurrentPassword: boolean | undefined;
  hideNewPassword: boolean | undefined;
  currentPassword!: string;
  newPassword!: string;
  newPasswordConfirm!: string;
  disableSubmit!: boolean;
  userForm: any;
  user:Utilisateur;
  constructor(private router:Router,private route:ActivatedRoute, private service:UtilisateurService, private logger: NGXLogger,
              private spinnerService: SpinnerService,) {
    this.user=new Utilisateur("");
    this.hideCurrentPassword = true;
    this.hideNewPassword = true;
  }

  ngOnInit() {



       this.user=new Utilisateur("");
      this.route.params.subscribe(params => {
          this.user.cin = params['userCin']; // Replace 'paramName' with the name of your parameter
          this.user.password = params['pwd']; // Replace 'paramName' with the name of your parameter
          this.user.nom = params['userNom']; // Replace 'paramName' with the name of your parameter
          this.user.prenom = params['userPrenom']; // Replace 'paramName' with the name of your parameter
          this.user.role = params['userRole']; // Replace 'paramName' with the name of your parameter
          this.user.email = params['email']; // Replace 'paramName' with the name of your parameter

      });
      this.form = new UntypedFormGroup({
          nom: new UntypedFormControl('', Validators.required),
          password: new UntypedFormControl('', Validators.required),
          prenom: new UntypedFormControl('', Validators.required),
          cin: new UntypedFormControl('', Validators.required),
          role: new UntypedFormControl('', Validators.required),
      });
      this.form.setValue({nom: this.user.nom,
          password: this.user.password,
          prenom: this.user.prenom,
          cin: this.user.cin,
          role: this.user.role});

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
  update(){
    this.service.updateUtilisateur(this.user).subscribe(
        updatedUtilisateur => {
          console.log('Utilisateur updated successfully:', updatedUtilisateur);
          this.router.navigate(['users']);
          // Handle success, e.g., display a success message or redirect to another page
        },
        error => {
          console.error('Error occurred while updating Utilisateur:', error);
          // Handle error, e.g., display an error message or perform error handling logic
        }
    );
  }

}
