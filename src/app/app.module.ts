import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialLoginModule,AuthServiceConfig,GoogleLoginProvider,FacebookLoginProvider,LinkedinLoginProvider } from "ng4-social-login";


const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider:new GoogleLoginProvider('779729393276-593iijib58q1qbajnc6i8t1g69d62ta2.apps.googleusercontent.com')
  },
  {
    id:FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('416899989224941')
  },
  {
    id:LinkedinLoginProvider.PROVIDER_ID,
    provider:new LinkedinLoginProvider('81iz6qw90co4ni')
  }
],false);

export function provideConfig(){
  return config;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule
  ],
  providers: [
    {provide:AuthServiceConfig,useFactory:provideConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
