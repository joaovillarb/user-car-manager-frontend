import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthenticationRequest} from "../model/authentication-request";
import {Observable} from "rxjs";
import {AuthenticationResponse} from "../model/authentication-response";

@Injectable({
    providedIn: 'root'
})
export class SecurityService {

    constructor(private http: HttpClient) {
    }

    public signIn(authenticationRequest: AuthenticationRequest): Observable<AuthenticationResponse> {
        return this.http.post<AuthenticationResponse>(
            'http://localhost:8080/api/signin',
            authenticationRequest
        );
    }
}
