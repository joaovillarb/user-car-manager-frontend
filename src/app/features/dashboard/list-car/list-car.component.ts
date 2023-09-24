import {Component, OnInit} from '@angular/core';
import {AlertService} from "../../../core/service/alert.service";
import {MatDialog} from "@angular/material/dialog";
import {catchError} from "rxjs";
import {Operation} from "../../../shared/model/operation";
import {CarService} from "../../../core/service/car.service";
import {CarListService} from "../../../shared/service/car-list.service";
import {Car} from "../../../shared/model/car";
import {PersistCarComponent} from "../persist-car/persist-car.component";

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent implements OnInit {

  carList: Car[] = [];

  constructor(private carService: CarService,
              private alertService: AlertService,
              private carListService: CarListService,
              private matDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.carListService
      .getCarList()
      .subscribe(cars => {
        this.carList = cars;
      });
  }

  public delete(car: Car): void {
    if (!car.active) {
      this.alertService.error("Carro já está inativo!");
      return;
    }

    this.carService
      .remove(car.id!)
      .pipe(catchError(httpError => {
        this.alertService.error(httpError.error.message);
        throw httpError;
      }))
      .subscribe(() => {
        this.alertService.success("Carro inativado com sucesso!");
        car.active = false;
      });
  }

  public edit(car: Car): void {
    this.matDialog
      .open(PersistCarComponent, {
        data: {
          entity: car,
          operation: Operation.Update
        }
      });
  }

  public reactivate(car: Car): void {
    if (car.active) {
      this.alertService.error("Carro já está ativo!");
      return;
    }

    car.active = true;
    this.carService
      .patch(car)
      .pipe(catchError(httpError => {
        this.alertService.error(httpError.error.message);
        throw httpError;
      }))
      .subscribe(() => {
        this.alertService.success("Carro reativado com sucesso!");
      });
  }

  public refresh() {
    this.carListService.findAll();
  }
}
