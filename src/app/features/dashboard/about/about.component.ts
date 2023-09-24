import {Component, OnInit} from '@angular/core';
import {SecurityService} from "../../../core/service/security.service";
import {catchError} from "rxjs";
import {AlertService} from "../../../core/service/alert.service";
import {AccountUser, emptyAccountUser} from "../../../shared/model/account-user";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  accountUser: AccountUser;

  constructor(private securityService: SecurityService,
              private alertService: AlertService) {
    this.accountUser = emptyAccountUser();
  }

  ngOnInit() {
    this.getWhoAmI();
  }

  public getWhoAmI() {
    this.securityService.me()
      .pipe(catchError(httpError => {
        this.alertService.error(httpError.error.message)
        throw httpError;
      }))
      .subscribe(data => {
        this.accountUser = data;
      });
  }

}
