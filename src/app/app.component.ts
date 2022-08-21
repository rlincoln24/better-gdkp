import { Component } from '@angular/core';
import { DiscordAuthService } from './Shared/discord-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'better-gdkp';

  constructor(public discordAuth: DiscordAuthService) {  }

  //access_token?:string = this.discordAuth.token.access_token

  ngOnInit(): void {
    console.log('app module oninit running')
    if (typeof this.discordAuth.token !='undefined' && this.discordAuth.token && !this.discordAuth.userProfileData) {
      this.discordAuth.getUserProfileData
      console.log('Getting discord user profile data...')
    }
  }
}
