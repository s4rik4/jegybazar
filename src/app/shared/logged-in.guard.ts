import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from './user.service';
import {Location} from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
  constructor(private _userService: UserService,
              private _router: Router,
              private _location: Location) {


  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this._userService.isLoggedin) {
      return true;
    } else {
      // itt annyit csinaltunk, hogy a Location segitsegevel
      // nem elnavigalunk valami fix helyre ha nincs jogunk
      // hanem pusztan helyben maradunk
      // illetve indulasnal alap routeba esunk bele
      // this._router.navigate([this._location.path()]);
      this._location.back();
      return false;
    }
  }
}
