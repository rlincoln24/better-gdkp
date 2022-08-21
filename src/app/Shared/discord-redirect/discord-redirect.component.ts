import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiscordAuthService } from '../discord-auth.service';



@Component({
  selector: 'app-discord-redirect',
  templateUrl: './discord-redirect.component.html',
  styleUrls: ['./discord-redirect.component.css']
})
export class DiscordRedirectComponent implements OnInit {

  constructor(private route: ActivatedRoute, public discordAuth: DiscordAuthService, private router: Router) { }

  ngOnInit(): void {
    if (typeof this.discordAuth.token === 'undefined' || !this.discordAuth.token) {
      this.getToken();
    }    
    this.router.navigate(['']);
  }

  getToken() {    
    this.route.queryParams.subscribe(params => {
      this.discordAuth.getToken(params.code)
    })
  }

  printUserInfo() {
    if (typeof this.discordAuth.token != 'undefined' && this.discordAuth.token && !this.discordAuth.userProfileData) {
      this.discordAuth.getUserProfileData();
    }
    console.log('User Profile Data: ', this.discordAuth.userProfileData)
  }
}
