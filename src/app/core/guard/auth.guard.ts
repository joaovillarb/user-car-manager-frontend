import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {TokenService} from "../service/token.service";
import {AlertService} from "../service/alert.service";

export const authGuard: CanActivateFn = (route, state) => {

    const service = inject(TokenService);

    if (service.isAuthenticated()) {
        return true;
    }

    const router = inject(Router);
    const alertService = inject(AlertService);
    alertService.error("Access Denied");
    router.navigate(['/home']);
    return false;
};
