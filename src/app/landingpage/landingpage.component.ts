import { Component } from '@angular/core';
import { UserEntity } from './user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  standalone: false,
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

  user: UserEntity | undefined;

  public constructor(private router: Router) {}

  public navigate(): void {
    this.router.navigate(['/paginas/galeria']);
  }

  public loginByGoogle(): void {

  }

  public isLoggedIn() {
    return !!this.user;
  }

}
