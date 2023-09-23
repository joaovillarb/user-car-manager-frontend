import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationRequest} from "../../core/model/authentication-request";
import {SecurityService} from "../../core/service/security.service";
import {AlertService} from "../../core/service/alert.service";

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
        this.requestLogin = new AuthenticationRequest("", "");
    }

    public ngOnInit(): void {
    }

    public onSubmit(): void {
        console.log(this.requestLogin)
        this.securityService
            .signIn(this.requestLogin)
            .subscribe(data => {
                    this.router.navigate(['/dashboard']);
                },
                httpError => {
                    this.alertService.error(httpError.error.message)
                    console.log(httpError)
                });
    }
}
