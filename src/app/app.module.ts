import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GdkpEventComponent } from './gdkp-event/gdkp-event.component';
import { GdkpApiService } from './Shared/gdkp-api.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    GdkpEventComponent,
    NavBarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GdkpApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
