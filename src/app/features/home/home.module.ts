import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home.component";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FlexModule} from "@angular/flex-layout";


@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        MatInputModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        FlexModule
    ],
    exports: [HomeComponent],
})
export class HomeModule {
}
