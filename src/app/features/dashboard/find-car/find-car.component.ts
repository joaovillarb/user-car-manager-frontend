import {Component} from '@angular/core';
import {AlertService} from "../../../core/service/alert.service";
import {MatDialog} from "@angular/material/dialog";
import {catchError} from "rxjs";
import {Operation} from "../../../shared/model/operation";
import {CarService} from "../../../core/service/car.service";
import {PersistCarComponent} from "../persist-car/persist-car.component";

@Component({
  selector: 'app-find-car',
  templateUrl: './find-car.component.html',
  styleUrls: ['./find-car.component.css']
})
export class FindCarComponent {

  public carId: number | null = null;

  constructor(private carService: CarService,
              private alertService: AlertService,
              private matDialog: MatDialog) {
  }

  public find() {
    if (!this.carId) {
      this.alertService.error("Informe o id do carro")
      return;
    }

    this.carService
      .findById(this.carId)
      .pipe(
        catchError(httpError => {
            this.alertService.error(httpError.error.message)
            throw httpError;
          }
        ))
      .subscribe(car => {
        this.matDialog
          .open(PersistCarComponent, {
            data: {
              entity: car,
              operation: Operation.Update
            }
          });
      });
  }
}
