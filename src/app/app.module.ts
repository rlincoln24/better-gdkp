import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GdkpEventComponent } from './gdkp-event/gdkp-event.component';
import { GdkpApiService } from './Shared/gdkp-api.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { DiscordRedirectComponent } from './Shared/discord-redirect/discord-redirect.component'
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { DiscordAuthService } from './Shared/discord-auth.service';
import { UserProfileComponent } from './user-profile/user-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    GdkpEventComponent,
    NavBarComponent,
    DiscordRedirectComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    HttpClientModule,
    OAuthModule.forRoot()
    
  ],
  providers: [GdkpApiService, DiscordAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
