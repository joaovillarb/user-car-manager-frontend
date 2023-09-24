import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Operation} from "../../shared/model/operation";
import {PersistCarComponent} from "./persist-car/persist-car.component";
import {emptyCar} from "../../shared/model/car";
import {FindCarComponent} from "./find-car/find-car.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(public matDialog: MatDialog) {
  }

  public createNewCar() {
    this.matDialog.open(PersistCarComponent, {
      data: {
        entity: emptyCar(),
        operation: Operation.Create
      }
    });
  }

  public findById() {
    this.matDialog.open(FindCarComponent);
  }
}
