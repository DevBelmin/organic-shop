import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AppUser } from '../models/app-users';
import { Observable } from 'rxjs';

//import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User) {
    
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

  isAdmin(userId : string) {
    this.db.object('/users/' + userId).valueChanges().subscribe(user => {
      return true;
    })
  }

  get(uid: string) : Observable<any> {
    return this.db.object('/users/' + uid).valueChanges();
  }

}
