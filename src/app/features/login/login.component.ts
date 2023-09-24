import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationRequest, emptyAuthenticationRequest} from "../../shared/model/authentication-request";
import {SecurityService} from "../../core/service/security.service";
import {AlertService} from "../../core/service/alert.service";
import {setAuthorizationToken} from "../../shared/connection/auth";
import {catchError} from "rxjs";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    public requestLogin: AuthenticationRequest;

    constructor(
        private router: Router,
        private securityService: SecurityService,
        private alertService: AlertService
    ) {
        this.requestLogin = emptyAuthenticationRequest();
    }

    public handleLogin(): void {
        this.securityService
            .signIn(this.requestLogin)
            .pipe(
                catchError(httpError => {
                    this.alertService.error(httpError.error.message);
                    throw httpError;
                })
            )
            .subscribe(data => {
                setAuthorizationToken(data.token);
                this.router.navigate(['/dashboard']);
            });
    }
}
