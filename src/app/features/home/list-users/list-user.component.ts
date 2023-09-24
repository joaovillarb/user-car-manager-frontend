import {Component, OnInit} from '@angular/core';
import {AccountUser} from "../../../shared/model/account-user";
import {AccountUserService} from "../../../core/service/account-user.service";
import {AlertService} from "../../../core/service/alert.service";
import {catchError} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {PersistUserComponent} from "../persist-user/persist-user.component";
import {Operation} from "../../../shared/model/operation";
import {UserListService} from "../../../shared/service/user-list.service";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  accountUserList: AccountUser[] = [];

  constructor(private accountUserService: AccountUserService,
              private alertService: AlertService,
              private userListService: UserListService,
              private matDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.userListService
      .getUserList()
      .subscribe(users => {
        this.accountUserList = users;
      });
  }

  public deleteUser(user: AccountUser): void {
    if (!user.active) {
      this.alertService.error("Usuário já está inativo!");
      return;
    }

    this.accountUserService
      .remove(user.id!)
      .pipe(catchError(httpError => {
        this.alertService.error(httpError.error.message);
        throw httpError;
      }))
      .subscribe(() => {
        this.alertService.success("Usuário inativado com sucesso!");
        user.active = false;
      });
  }

  public editUser(user: AccountUser): void {
    this.matDialog
      .open(PersistUserComponent, {
        data: {
          accountUser: user,
          operation: Operation.Update
        }
      });
  }

  public reactivateUser(user: AccountUser): void {
    if (user.active) {
      this.alertService.error("Usuário já está ativo!");
      return;
    }

    user.active = true;
    this.accountUserService
      .patch(user)
      .pipe(catchError(httpError => {
        this.alertService.error(httpError.error.message);
        throw httpError;
      }))
      .subscribe(() => {
        this.alertService.success("Usuário reativado com sucesso!");
      });
  }

  public refreshUsers() {
    this.userListService.findAll();
  }
}
