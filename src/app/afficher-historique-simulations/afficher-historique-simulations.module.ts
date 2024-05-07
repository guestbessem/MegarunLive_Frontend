import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AfficherHistoriqueSimulationsComponent } from './afficher-historique-simulations/afficher-historique-simulations.component';
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
import {NgbPaginationModule, NgbTypeaheadModule} from "@ng-bootstrap/ng-bootstrap";
import {AffichierRoutingModule} from "./affichier-routing.module";



@NgModule({
  declarations: [
    AfficherHistoriqueSimulationsComponent
  ],
  imports: [AffichierRoutingModule,
    MatStepperModule,
    CommonModule,MatTabsModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatDividerModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,MatTreeModule,
    SharedModule,NgbPaginationModule, NgbTypeaheadModule

  ]
})
export class AfficherHistoriqueSimulationsModule { }
