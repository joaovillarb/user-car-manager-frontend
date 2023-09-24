import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {PersistUserComponent} from "./persist-user/persist-user.component";
import {Operation} from "../../shared/model/operation";
import {emptyAccountUser} from "../../shared/model/account-user";
import {FindUserComponent} from "./find-user/find-user.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public matDialog: MatDialog) {
  }

  createNewUser() {
    this.matDialog.open(PersistUserComponent, {
      data: {
        accountUser: emptyAccountUser(),
        operation: Operation.Create
      }
    });
  }

  findById() {
    this.matDialog.open(FindUserComponent);
  }
}
