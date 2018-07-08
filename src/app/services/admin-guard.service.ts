import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';
import { UserService } from './user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private userService: UserService) {

   }

  canActivate() : Observable<boolean> {

    return this.authService.appUser$
      .pipe(
        map(appUser => appUser.isAdmin)
      );
  }
}
