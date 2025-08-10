import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthgoogleService } from './authgoogle.service';
import { UserEntity } from './landingpage/user.model';

export const authGuard: CanActivateFn = (route, state) => {

  const loginService: AuthgoogleService = inject(AuthgoogleService);
  const router: Router = inject(Router);

  const loggedUser: UserEntity = loginService.getLoggedUser();

  if(loggedUser) {
    return true
  }

  router.navigate([''])
  
  return false;
};
