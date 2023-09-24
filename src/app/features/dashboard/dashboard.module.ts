import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from "./dashboard.component";
import {FlexModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {FindCarComponent} from './find-car/find-car.component';
import {ListCarComponent} from './list-car/list-car.component';
import {PersistCarComponent} from './persist-car/persist-car.component';
import {AboutComponent} from './about/about.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatTabsModule} from "@angular/material/tabs";
import {MatRippleModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
    declarations: [DashboardComponent, FindCarComponent, ListCarComponent, PersistCarComponent, AboutComponent],
    imports: [
        CommonModule,
        FlexModule,
        MatButtonModule,
        FormsModule,
        MatCardModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatTableModule,
        MatTabsModule,
        MatRippleModule,
        MatIconModule
    ],
    exports: [DashboardComponent]
})
export class DashboardModule {
}
