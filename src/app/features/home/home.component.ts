import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {PersistUserComponent} from "./persist-user/persist-user.component";
import {Operation} from "../../shared/model/operation";
import {emptyAccountUser} from "../../shared/model/account-user";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    constructor(public dialog: MatDialog) {
    }

    openDialog() {
        const dialogRef = this.dialog.open(PersistUserComponent, {
            data: {
                accountUser: emptyAccountUser(),
                operation: Operation.Create
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }

    openDialogFindById() {
//todo: implementar
    }
}
