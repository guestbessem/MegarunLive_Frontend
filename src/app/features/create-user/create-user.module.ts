import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateUserComponent} from "./create-user/create-user.component";
import {SharedModule} from "../../shared/shared.module";
import {CreateUserRoutingModule} from "./create-user.routing.module";
import {UtilisateurService} from "../users/service/utilisateur.service";


@NgModule({
  declarations: [CreateUserComponent],
  imports: [
    CommonModule,
    SharedModule,CreateUserRoutingModule] , providers: [UtilisateurService]
})
export class CreateUserModule { }
