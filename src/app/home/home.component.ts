import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user$: Observable<firebase.User>;

  constructor(private authService: AuthService) { 
    this.user$ = authService.user$;

    this.user$.subscribe((user) => {
      if (!user) {
        console.log(user);
        this.authService.logout();
      }
    })
   }

  ngOnInit() {
  }

}
