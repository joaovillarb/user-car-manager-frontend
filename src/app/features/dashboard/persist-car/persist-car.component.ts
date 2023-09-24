import {Component, Inject} from '@angular/core';
import {Operation} from "../../../shared/model/operation";
import {AlertService} from "../../../core/service/alert.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {NgForm} from "@angular/forms";
import {Car} from "../../../shared/model/car";
import {catchError} from "rxjs";
import {CarService} from "../../../core/service/car.service";
import {CarListService} from "../../../shared/service/car-list.service";

export interface DialogData {
  operation: Operation;
  entity: Car;
}

@Component({
  selector: 'app-persist-car',
  templateUrl: './persist-car.component.html',
  styleUrls: ['./persist-car.component.css']
})
export class PersistCarComponent {

  public car: Car;
  public operation?: Operation;
  protected readonly Operation = Operation;

  constructor(
    private carService: CarService,
    private alertService: AlertService,
    private carListService: CarListService,
    @Inject(MAT_DIALOG_DATA) private data: DialogData
  ) {
    this.car = this.data.entity;
    this.operation = this.data.operation;
  }

  public handleSubmit(form: NgForm): void {
    if (this.operation === Operation.Create) {
      this.create(form);
    } else {
      this.update(form);
    }
  }

  private create(form: NgForm): void {
    this.carService
      .create(this.car)
      .pipe(
        catchError(httpError => {
          this.alertService.error(httpError.error.message)
          throw httpError;
        })
      )
      .subscribe(() => {
          this.alertService.success("Carro cadastrado com sucesso!")
          form.resetForm();
          this.carListService.findAll();
        }
      );
  }

  private update(form: NgForm): void {
    this.carService
      .update(this.car)
      .pipe(
        catchError(httpError => {
          this.alertService.error(httpError.error.message)
          throw httpError;
        })
      )
      .subscribe(() => {
          this.alertService.success("Carro cadastrado com sucesso!")
          form.resetForm();
          this.carListService.findAll();
        }
      );
  }
}
