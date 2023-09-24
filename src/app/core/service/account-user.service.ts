import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {AccountUser} from "../../shared/model/account-user";

@Injectable({
    providedIn: 'root'
})
export class AccountUserService {

    constructor(private http: HttpClient) {
    }

    public findAll(): Observable<AccountUser[]> {
        return this.http.get<AccountUser[]>(
            `${this.baseUrl()}/users`
        );
    }

    public create(accountUser: AccountUser): Observable<AccountUser> {
        return this.http.post<AccountUser>(
            `${this.baseUrl()}/users`,
            accountUser
        );
    }

    public update(accountUser: AccountUser): Observable<AccountUser> {
        return this.http.put<AccountUser>(
            `${this.baseUrl()}/users/${accountUser.id}`,
            accountUser
        );
    }

    private baseUrl() {
        return 'http://localhost:8080/api';
    }
}
