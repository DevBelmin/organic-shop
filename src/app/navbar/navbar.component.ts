import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user$: Observable<firebase.User>;

  constructor(private authService: AuthService) {
    this.user$ = this.authService.user$;
   }

  ngOnInit() {
  }

  logOut() {
    this.authService.logout();
  }

}
