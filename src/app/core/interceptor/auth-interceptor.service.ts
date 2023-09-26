import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {TokenService} from "../service/token.service";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private tokenService: TokenService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.tokenService.isAuthenticated()) {
      const token = this.tokenService.getToken();

      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });

    }

    return next.handle(request);
  }
}
