import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/internal/Observable';
import { UserService } from '../services/user.service';
import { AppUser } from '../models/app-users';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user$: Observable<firebase.User>;
  appUser: AppUser;

  constructor(private authService: AuthService) {
    this.user$ = this.authService.user$;
    this.authService.appUser$.subscribe(appUser => this.appUser = appUser);
   }

  ngOnInit() {
  }

  logOut() {
    this.authService.logout();
  }

}
