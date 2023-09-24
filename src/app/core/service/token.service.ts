import {Injectable} from '@angular/core';
import {getAuthorizationToken, removeAuthorizationToken} from "../../shared/connection/auth";
import jwt_decode, {JwtPayload} from 'jwt-decode';


@Injectable({
    providedIn: 'root'
})
export class TokenService {

    public isAuthenticated(): boolean {
        const authorizationToken = getAuthorizationToken();

        if (!authorizationToken) {
            return false;
        }

        if (this.isTokenExpired(authorizationToken)) {
            this.removeToken();
            return false;
        }

        return true;
    }

    public isTokenExpired(token: string): boolean {
        const jwtDecodeData: JwtPayload | undefined = jwt_decode(token);

        if (jwtDecodeData && typeof jwtDecodeData.exp === 'number') {
            const currentTime = Math.floor(Date.now() / 1000);
            return jwtDecodeData.exp < currentTime;
        }

        return false;
    }

    public removeToken(): void {
        removeAuthorizationToken()
    }

    public getToken(): string {
        return getAuthorizationToken();
    }
}
