import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationRequest} from "../../shared/model/authentication-request";
import {SecurityService} from "../../core/service/security.service";
import {AlertService} from "../../core/service/alert.service";
import {setAuthorizationToken} from "../../shared/connection/auth";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public requestLogin: AuthenticationRequest;

    constructor(
        private router: Router,
        private securityService: SecurityService,
        private alertService: AlertService
    ) {
        this.requestLogin = {
            login: '',
            password: ''
        }
    }

    public ngOnInit(): void {
    }

    public handleLogin(): void {
        this.securityService
            .signIn(this.requestLogin)
            .subscribe(data => {
                    setAuthorizationToken(data.token);
                    this.router.navigate(['/dashboard']);
                },
                httpError => {
                    this.alertService.error(httpError.error.message)
                    console.log(httpError)
                });
    }
}
