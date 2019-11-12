import { Component } from '@angular/core';
import { AuthService,SocialUser,GoogleLoginProvider,FacebookLoginProvider,LinkedinLoginProvider  } from "ng4-social-login";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SocialLoginAngular';
  public user: any = SocialUser;
  constructor(private socialAuthService: AuthService){}
  
  facebooklogin(){
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((userData) => {
      this.user = userData;
    });
  }

  googlelogin(){
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData) => {
      this.user = userData;
    });
  }

  linkedinlogin(){
    this.socialAuthService.signIn(LinkedinLoginProvider.PROVIDER_ID).then((userData) => {
      this.user = userData;
    });
  }
}
