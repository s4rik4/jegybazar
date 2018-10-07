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
      console.log('be vagyunk e lépve', this.isLoggedin);
      this._router.navigate(['/user']);
    }
    return false;
  }
  register(param?: UserModel) {
    if (param){
      this._user = new UserModel(param);
    } else {
      this._user = new UserModel(UserModel.exampleUser);
    }
    this.isLoggedin = true;
    this._router.navigate(['/user']);
    console.log('be vagyunk e lépve', this.isLoggedin);
  }
  logout() {
    delete(this._user);
    this.isLoggedin = false;
    console.log('be vagyunk e lépve', this.isLoggedin);
    this._router.navigate(['/home']);
  }
}
