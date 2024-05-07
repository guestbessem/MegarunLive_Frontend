import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "../shared/layout/layout.component";
import {AccountPageComponent} from "../features/account/account-page/account-page.component";
import {CompareComponent} from "./compare/compare.component";
import {DisplayComponent} from "./display/display.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: CompareComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EarComparatorRoutingModule { }
