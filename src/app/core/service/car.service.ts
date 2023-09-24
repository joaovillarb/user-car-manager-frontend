import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Car} from "../../shared/model/car";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private readonly baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Car[]> {
    return this.http.get<Car[]>(
      `${this.baseUrl}/cars`
    );
  }

  public create(car: Car): Observable<Car> {
    return this.http.post<Car>(
      `${this.baseUrl}/cars`,
      car
    );
  }

  public update(car: Car): Observable<Car> {
    return this.http.put<Car>(
      `${this.baseUrl}/cars/${car.id}`,
      car
    );
  }

  public remove(id: number): Observable<any> {
    return this.http.delete(
      `${this.baseUrl}/cars/${id}`
    );
  }

  public patch(car: Car): Observable<Car> {
    return this.http.patch<Car>(
      `${this.baseUrl}/cars/${car.id}`,
      car
    );
  }

  public findById(id: number): Observable<Car> {
    return this.http.get<Car>(
      `${this.baseUrl}/cars/${id}`
    );
  }
}
