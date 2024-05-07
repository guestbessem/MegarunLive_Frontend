import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScriptTransformerComponent } from './script-transformer/script-transformer.component';
import {ScriptTransformerRoutingModule} from "./script-transformer-routing.module";
import {MatTabsModule} from "@angular/material/tabs";
import {MatNativeDateModule} from "@angular/material/core";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatDividerModule} from "@angular/material/divider";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatTreeModule} from "@angular/material/tree";
import { UploadZipComponent } from './upload-zip/upload-zip.component';
import {SharedModule} from "../shared/shared.module";
import {CreateUserRoutingModule} from "../features/create-user/create-user.routing.module";
import {MatStepperModule} from '@angular/material/stepper';



@NgModule({
  declarations: [
    ScriptTransformerComponent,
    UploadZipComponent
  ],
  imports: [MatStepperModule,
    CommonModule,ScriptTransformerRoutingModule,MatTabsModule,
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
export class ScriptTransformerModule { }
