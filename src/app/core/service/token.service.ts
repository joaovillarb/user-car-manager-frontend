import {Injectable} from '@angular/core';
import {getAuthorizationToken, hasAuthorizationToken} from "../../shared/connection/auth";
import {clearStorage} from "../../shared/connection/storage-proxy";

@Injectable({
    providedIn: 'root'
})
export class TokenService {

    constructor() {
    }

    public clear(): void {
        clearStorage();
    }

    public haveAccess(): boolean {
        return hasAuthorizationToken()
    }

    public getToken(): string {
        return getAuthorizationToken();
    }
}
