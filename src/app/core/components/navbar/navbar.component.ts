import {Component} from '@angular/core';
import {TokenService} from "../../service/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private tokenService: TokenService,
              private router: Router) {
  }

  public isAuthenticated(): boolean {
    return this.tokenService.isAuthenticated()
  }

  public logout(): void {
    this.tokenService.removeToken()
    this.router.navigate(['/home']);
  }
}
