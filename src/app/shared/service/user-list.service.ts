import {Injectable} from '@angular/core';
import {BehaviorSubject, catchError, Observable} from 'rxjs';
import {AccountUser} from '../model/account-user';
import {AccountUserService} from '../../core/service/account-user.service';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  private userListSubject = new BehaviorSubject<AccountUser[]>([]);
  public userList$ = this.userListSubject.asObservable();

  constructor(private accountUserService: AccountUserService) {
    this.findAll();
  }

  public setUserList(users: AccountUser[]): void {
    this.userListSubject.next(users);
  }

  getUserList(): Observable<AccountUser[]> {
    return this.userList$;
  }

  public findAll() {
    this.accountUserService.findAll()
      .pipe(
        catchError(httpError => {
            console.error('Erro ao buscar dados:', httpError);
            throw httpError;
          }
        ))
      .subscribe(data => {
        this.setUserList(data);
      });
  }
}
