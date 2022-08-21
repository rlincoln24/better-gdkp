import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiscordAuthService } from '../Shared/discord-auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(public discordAuth: DiscordAuthService, private router: Router) { }

  ngOnInit(): void {
    if (!this.discordAuth.token) {
      this.router.navigate(['']);
    }
    if (!this.discordAuth.userProfileData) {
      this.discordAuth.getUserProfileData();
    }
    console.log('User Profile: ', this.discordAuth.userProfileData)
  }

}
