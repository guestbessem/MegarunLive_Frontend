import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "../shared/layout/layout.component";
import {AfficherHistoriqueSimulationsComponent} from "./afficher-historique-simulations/afficher-historique-simulations.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: AfficherHistoriqueSimulationsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AffichierRoutingModule { }
