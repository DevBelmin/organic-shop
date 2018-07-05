import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User>;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router, private route: ActivatedRoute) {

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
}