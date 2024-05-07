import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdatComponent } from './updat/updat.component';
import {UpdateUsersRoutingModule} from "./update-users-routing.module";
import {SharedModule} from "../shared/shared.module";
import {UsersRoutingModule} from "../features/users/users-routing.module";
import {NgbPaginationModule, NgbTypeaheadModule} from "@ng-bootstrap/ng-bootstrap";
import {MatRadioModule} from "@angular/material/radio";



@NgModule({
  declarations: [
    UpdatComponent,
  ],
  imports: [
    CommonModule,UpdateUsersRoutingModule,  CommonModule,
    SharedModule, NgbPaginationModule, NgbTypeaheadModule, MatRadioModule
  ]
})
export class UpdateUserModule { }
