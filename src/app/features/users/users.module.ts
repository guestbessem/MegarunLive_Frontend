import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {UtilisateurService} from "./service/utilisateur.service";
import {MatRadioModule} from "@angular/material/radio";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        UsersRoutingModule, NgbPaginationModule, NgbTypeaheadModule, MatRadioModule
    ],
  declarations: [UserListComponent], providers:[UtilisateurService]
})
export class UsersModule { }
