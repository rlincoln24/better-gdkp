import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { DiscordRedirectComponent } from "./Shared/discord-redirect/discord-redirect.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";

export const routes: Routes = [
    { path: 'oauth/discord/redirect', component: DiscordRedirectComponent},    
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'profile', component:UserProfileComponent }
]