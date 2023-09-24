import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthenticationRequest} from "../../shared/model/authentication-request";
import {Observable} from "rxjs";
import {AuthenticationResponse} from "../../shared/model/authentication-response";
import {AccountUser} from "../../shared/model/account-user";

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private readonly baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {
  }

  public signIn(authenticationRequest: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(
      `${this.baseUrl}/signin`,
      authenticationRequest
    );
  }

  public me(): Observable<AccountUser> {
    return this.http.get<AccountUser>(
      `${this.baseUrl}/me`
    );
  }
}
