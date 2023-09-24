import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarModule} from "./core/components/navbar/navbar.module";
import {LoginModule} from "./features/login/login.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptorService} from "./core/interceptor/auth-interceptor.service";
import {HomeModule} from "./features/home/home.module";
import {DashboardModule} from "./features/dashboard/dashboard.module";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NavbarModule,
        HomeModule,
        LoginModule,
        DashboardModule,
        HttpClientModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true,
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
