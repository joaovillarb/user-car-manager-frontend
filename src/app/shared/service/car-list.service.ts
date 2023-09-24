import {Injectable} from '@angular/core';
import {BehaviorSubject, catchError, Observable} from 'rxjs';
import {Car} from "../model/car";
import {CarService} from "../../core/service/car.service";

@Injectable({
  providedIn: 'root'
})
export class CarListService {
  private carListSubject = new BehaviorSubject<Car[]>([]);
  public carList$ = this.carListSubject.asObservable();

  constructor(private carService: CarService) {
    this.findAll();
  }

  public setCarList(users: Car[]): void {
    this.carListSubject.next(users);
  }

  getCarList(): Observable<Car[]> {
    return this.carList$;
  }

  public findAll() {
    this.carService
      .findAll()
      .pipe(
        catchError(httpError => {
            console.error('Erro ao buscar dados:', httpError);
            throw httpError;
          }
        ))
      .subscribe(data => {
        this.setCarList(data);
      });
  }
}
