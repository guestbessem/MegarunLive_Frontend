import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateUserComponent} from "./create-user/create-user.component";
import {LayoutComponent} from "../../shared/layout/layout.component";
import {AccountPageComponent} from "../account/account-page/account-page.component";

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
        component: CreateUserComponent,
    }]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreateUserRoutingModule{ }
