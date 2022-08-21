import { Component, OnInit } from '@angular/core';
import { DiscordAuthService } from '../Shared/discord-auth.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public discordAuthService: DiscordAuthService) { }

  ngOnInit(): void {

  }

  login() {
    this.discordAuthService.login();        
  }
}
