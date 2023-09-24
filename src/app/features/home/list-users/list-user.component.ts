import {Component, OnInit} from '@angular/core';
import {AccountUser} from "../../../shared/model/account-user";
import {AccountUserService} from "../../../core/service/account-user.service";
import {AlertService} from "../../../core/service/alert.service";
import {catchError} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {PersistUserComponent} from "../persist-user/persist-user.component";
import {Operation} from "../../../shared/model/operation";

@Component({
    selector: 'app-list-users',
    templateUrl: './list-user.component.html',
    styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

    public accountUserList: AccountUser[] = [];

    constructor(private accountUserService: AccountUserService,
                private alertService: AlertService,
                private dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.findAll();
    }
    deleteUser(user: AccountUser): void {
        console.log(`Excluindo usuário: ${user.firstName} ${user.lastName}`);
    }

    editUser(user: AccountUser): void {
        const dialogRef = this.dialog.open(PersistUserComponent, {
            data: {
                accountUser: user,
                operation: Operation.Update
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
        console.log(`Editando usuário: ${user.firstName} ${user.lastName}`);
    }

    refreshUsers() {
        this.findAll();
    }

    private findAll() {
        this.accountUserService.findAll()
            .pipe(
                catchError(httpError => {
                        this.alertService.error(httpError.error.message);
                        throw httpError;
                    }
                ))
            .subscribe(data => {
                    this.accountUserList = data;
                }
            );
    }
}
