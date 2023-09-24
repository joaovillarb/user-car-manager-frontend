import {Component, Inject} from '@angular/core';
import {AccountUser} from "../../../shared/model/account-user";
import {AccountUserService} from "../../../core/service/account-user.service";
import {AlertService} from "../../../core/service/alert.service";
import {NgForm} from "@angular/forms";
import {catchError} from "rxjs";
import {emptyCar} from "../../../shared/model/car";
import {Operation} from "../../../shared/model/operation";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

export interface DialogData {
    operation: Operation;
    accountUser: AccountUser;
}

@Component({
    selector: 'app-persist-user',
    templateUrl: './persist-user.component.html',
    styleUrls: ['./persist-user.component.css']
})
export class PersistUserComponent {

    public accountUser: AccountUser;
    public operation?: Operation;
    protected readonly Operation = Operation;

    constructor(private accountUserService: AccountUserService,
                private alertService: AlertService,
                @Inject(MAT_DIALOG_DATA)
                private data: DialogData) {
        this.accountUser = this.data.accountUser;
        this.operation = this.data.operation;
    }

    handleSubmit(form: NgForm): void {
        if (this.operation === Operation.Create) {
            this.create(form);
        } else {
            this.update(form);
        }
    }

    addCar(): void {
        this.accountUser.cars.push(emptyCar());
    }

    removeCar(index: number): void {
        this.accountUser.cars.splice(index, 1);
    }

    private create(form: NgForm): void {
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

    private update(form: NgForm): void {
        this.accountUserService
            .update(this.accountUser)
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
}
