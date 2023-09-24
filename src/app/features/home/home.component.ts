import {Component} from '@angular/core';
import {AccountUser, emptyAccountUser} from "../../shared/model/account-user";
import {AccountUserService} from "../../core/service/account-user.service";
import {AlertService} from "../../core/service/alert.service";
import {NgForm} from '@angular/forms';
import {emptyCar} from "../../shared/model/car";
import {catchError} from "rxjs";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    public accountUser: AccountUser;

    constructor(private accountUserService: AccountUserService,
                private alertService: AlertService,) {
        this.accountUser = emptyAccountUser()
    }

    handleCreateUser(form: NgForm): void {
        console.log(this.accountUser);

        this.accountUserService
            .create(this.accountUser)
            .pipe(
                catchError(httpError => {
                    this.alertService.error(httpError.error.message)
                    throw httpError;
                })
            )
            .subscribe(() => {
                    this.alertService.success("Usuário cadastrado com sucesso!")
                    form.resetForm();
                }
            );
    }

    addCar(): void {
        this.accountUser.cars.push(emptyCar());
    }

    removeCar(index: number): void {
        this.accountUser.cars.splice(index, 1);
    }

}
