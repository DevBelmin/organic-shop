import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';
import { AppUser } from '../models/app-users';
import { switchMap } from 'rxjs/operators';
import { UserService } from './user.service';


import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User>;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router, private route: ActivatedRoute, private userService: UserService) {

    this.user$ = _firebaseAuth.authState;
  }

  signInWithGoogle() {
    
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/'
    localStorage.setItem('returnUrl', returnUrl);

    return this._firebaseAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this._firebaseAuth.auth.signOut();
    this.router.navigate(['login']);
  }

  get appUser$() : Observable<AppUser> {
    return this.user$
      .pipe(
        switchMap(user => {
          if(user) return this.userService.get(user.uid);

          return of(null);
        })
      )
  }
}