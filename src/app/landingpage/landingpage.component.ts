import { Component } from '@angular/core';
import { UserEntity } from './user.model';
import { Router } from '@angular/router';
import { AuthgoogleService } from '../authgoogle.service';

@Component({
  selector: 'app-landingpage',
  standalone: false,
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

  user: UserEntity | undefined;

  public constructor(
    private router: Router,
    private loginService: AuthgoogleService
  ) {}

  public navigate(): void {
    this.router.navigate(['/paginas/galeria']);
  }

  public loginByGoogle(): void {
    this.loginService.login();
  }

  public isLoggedIn(): boolean {
    const dataGoogle = this.loginService.getLoggedUser();
    console.log(" dados do Google: ", dataGoogle);
    this.user = dataGoogle;
    return !!this.user;
  }
}
