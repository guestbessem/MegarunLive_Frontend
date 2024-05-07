import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NGXLogger } from 'ngx-logger';
import { NotificationService } from 'src/app/core/services/notification.service';
import {UtilisateurService} from "../service/utilisateur.service";
import {Utilisateur} from "../utilisateur";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  errorMessage:any=null;
utilisateurs : any;
pageSize:number=10;
page:number=1;
  collectionSize:number =0;
  userForm: any;
  constructor(
    private logger: NGXLogger,
    private notificationService: NotificationService,
    private titleService: Title,private service:UtilisateurService,private router: Router
  ) { }

  ngOnInit() {
    this.titleService.setTitle('angular-material-template - Users');
    this.refreshUtilisateurs();
  }
  refreshUtilisateurs(){
    this.service.getAllUtilisateurs().subscribe((data)=>{this.utilisateurs=data; this.collectionSize=this.utilisateurs?.length;});

  }
  Delete(utilisateur: any){
    console.log("current user: "+sessionStorage.getItem('currentUser'))
    if(utilisateur.email==sessionStorage.getItem('currentUser')){
      this.errorMessage="L'utilisateur courant ne peut pas être supprimé"
    }
    else{
      this.errorMessage=null;
    this.service.deleteUtilisateur(utilisateur).subscribe(
        () => {

          this.refreshUtilisateurs()
          // Le utilisateur a été supprimé avec succès
        },
        (error) => {
          console.log(error);
          // Gérer les erreurs liées à la suppression du utilisateur
        }
    ); } }

  update(utilisateur:any): void {
    console.log("cin "+utilisateur.cin)
    this.router.navigate(["/update" ,{userCin: utilisateur.cin,userRole: utilisateur.role,userNom: utilisateur.nom,email: utilisateur.email,userPrenom: utilisateur.prenom,pwd:utilisateur.password}]);

  }

  }