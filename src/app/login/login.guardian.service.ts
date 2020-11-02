import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class LoginGuardian implements CanActivate{

  token = localStorage.getItem('authToken');

  constructor(private router: Router){

  }

  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    console.log(this.token !== 'logout');

    if (this.token !== 'logout'){
      return true;
    }else{
      this.router.navigate(['']);
      return false;
    }
  }
}
