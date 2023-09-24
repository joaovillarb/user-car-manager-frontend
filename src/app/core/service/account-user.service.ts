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

    public create(accountUser: AccountUser): Observable<AccountUser> {
        return this.http.post<AccountUser>(
            'http://localhost:8080/api/users',
            accountUser
        );
    }
}
