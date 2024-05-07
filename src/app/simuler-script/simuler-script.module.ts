import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimulerScriptComponent } from './simuler-script/simuler-script.component';
import {MatStepperModule} from "@angular/material/stepper";
import {MatTabsModule} from "@angular/material/tabs";
import {MatNativeDateModule} from "@angular/material/core";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatDividerModule} from "@angular/material/divider";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatTreeModule} from "@angular/material/tree";
import {SharedModule} from "../shared/shared.module";
import {SimulerScriptRoutingModule} from "./simuler-script-routing.module";



@NgModule({
  declarations: [
    SimulerScriptComponent
  ],
  imports: [
    MatStepperModule,
    CommonModule,SimulerScriptRoutingModule,MatTabsModule,
    CommonModule,MatNativeDateModule,
    MatProgressBarModule,
    MatDividerModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,MatTreeModule, CommonModule,
    SharedModule
  ]
})
export class SimulerScriptModule { }
