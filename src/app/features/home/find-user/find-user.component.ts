import {Component} from '@angular/core';
import {AccountUserService} from "../../../core/service/account-user.service";
import {catchError} from "rxjs";
import {AlertService} from "../../../core/service/alert.service";
import {MatDialog} from "@angular/material/dialog";
import {PersistUserComponent} from "../persist-user/persist-user.component";
import {Operation} from "../../../shared/model/operation";

@Component({
  selector: 'app-find-user',
  templateUrl: './find-user.component.html',
  styleUrls: ['./find-user.component.css']
})
export class FindUserComponent {

  public userId: number | null = null;

  constructor(private accountUserService: AccountUserService,
              private alertService: AlertService,
              private matDialog: MatDialog) {
  }

  public findUser() {
    if (!this.userId) {
      this.alertService.error("Informe o id do usuário")
      return;
    }

    this.accountUserService.findById(this.userId)
      .pipe(
        catchError(httpError => {
            this.alertService.error(httpError.error.message)
            throw httpError;
          }
        ))
      .subscribe(user => {
        this.matDialog
          .open(PersistUserComponent, {
            data: {
              accountUser: user,
              operation: Operation.Update
            }
          });
      });
  }
}
