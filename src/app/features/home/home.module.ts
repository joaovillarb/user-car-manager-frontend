import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home.component";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FlexModule} from "@angular/flex-layout";
import {PersistUserComponent} from './persist-user/persist-user.component';
import {ListUserComponent} from './list-users/list-user.component';
import {MatTableModule} from "@angular/material/table";
import {MatTabsModule} from "@angular/material/tabs";
import {MatDialogModule} from "@angular/material/dialog";
import {MatRippleModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
    declarations: [HomeComponent, PersistUserComponent, ListUserComponent],
    imports: [
        CommonModule,
        MatInputModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        FlexModule,
        MatTableModule,
        MatTabsModule,
        MatDialogModule,
        MatRippleModule,
        MatIconModule
    ],
    exports: [HomeComponent],
})
export class HomeModule {
}
