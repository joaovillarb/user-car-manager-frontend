import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TokenService {

    constructor() {
    }

    public haveAcess(): boolean {
        return localStorage.getItem('token') != null;
    }
}
