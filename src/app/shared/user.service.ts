import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {UserModel} from './user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedin = false;
  private _user: UserModel;

  constructor(private _router: Router) {
  }

  login(email: string, password: string) {
    if (email === 'angular' && password === 'angular') {
      this._user = new UserModel(UserModel.exampleUser);
      this.isLoggedin = true;
      console.log(this.isLoggedin);
      this._router.navigate(['/user']);
    }
    return false;
  }

  logout() {
    delete(this._user);
    this.isLoggedin = false;
    console.log(this.isLoggedin);
    this._router.navigate(['/home']);
  }
}
