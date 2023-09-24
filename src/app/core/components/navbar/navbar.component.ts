import {Component} from '@angular/core';
import {TokenService} from "../../service/token.service";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

    constructor(private tokenService: TokenService) {
    }

    public isAuthenticated(): boolean {
        return this.tokenService.isAuthenticated()
    }

    public logout(): void {
        this.tokenService.removeToken()
    }
}
