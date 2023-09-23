import {Component} from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

    public isAuthenticated = false;

    public logout(): void {
        // todo
    }
}
