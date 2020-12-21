import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AppServiceService } from './service/app-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private appService: AppServiceService, private router: Router){ }

  canActivate(): boolean{
    if(this.appService.loggedIn()){
      return true;
    }else{
      this.router.navigate(["/sign-in"]);
      return false;

    }
  }
}
