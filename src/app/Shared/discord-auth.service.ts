import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { waitForAsync } from '@angular/core/testing';


interface Token {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
}

interface UserProfile {
  accent_color:number
  avatar:string
  avatar_decoration?:string
  banner:string
  banner_color:string
  discriminator:string
  flags:number
  id:string
  locale:string
  mfa_enabled:boolean
  premium_type:number
  public_flags:number
  username:string
}


@Injectable({
  providedIn: 'root'
})
export class DiscordAuthService {

  constructor(private http: HttpClient) { }

  token: Token
  userProfileData: UserProfile

  login() {
    window.location.href = 'https://discord.com/api/oauth2/authorize?response_type=code&client_id=1006917415940128838&scope=identify&state=15773059ghq9183habn&redirect_uri=http%3A%2F%2Flocalhost:4200%2Foauth%2Fdiscord%2Fredirect&prompt=consent'
  }

  getToken(code: string) {
    console.log('Getting token using code')
    this.getDiscordToken(code);    
  }

  getDiscordToken(code: string) {

    const params = new URLSearchParams();
    params.append('client_id', '1006917415940128838');
    params.append('client_secret', 'Ffrj4bTyreTr4JLWJApEdcF-zbvAFJKg');
    params.append('grant_type', 'authorization_code');
    params.append('code', code);
    params.append('redirect_uri', 'http://localhost:4200/oauth/discord/redirect');
    params.append('scope', 'identify');

   var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      })
    };

    this.http.post<Token>('https://discord.com/api/oauth2/token', params, httpOptions).subscribe(
      (data) => {
        this.token = data
      })
  }  

  getUserProfileData() {
    
    console.log('Getting user profile data');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + this.token.access_token
      })
    };

    this.http.get<UserProfile>('https://discord.com/api/users/@me', httpOptions).subscribe(
      (data) => {
        this.userProfileData = data
      })
  }
}

