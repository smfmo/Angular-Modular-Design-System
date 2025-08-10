import { Injectable, inject, signal } from '@angular/core';
import { OAuthService, AuthConfig } from 'angular-oauth2-oidc';
import { auth } from './auth.config';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthgoogleService {

  private oauthService: OAuthService = inject(OAuthService);
  private router: Router = inject(Router);
  user = signal<any>(null);

  public constructor() {
    this.initConfiguration();
  }

  public initConfiguration(): void {
    this.oauthService.configure(auth);
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      if(this.oauthService.hasValidIdToken()) {
        this.user.set(this.oauthService.getIdentityClaims());
      }
    });
  }

  public login(): void {
    this.oauthService.initImplicitFlow();
  }

  public logout(): void {
    this.oauthService.revokeTokenAndLogout();
    this.oauthService.logOut();
    this.user.set(null);
    this.router.navigate(['']);
  }

  public getLoggedUser() {
    return this.user()
  }
}
