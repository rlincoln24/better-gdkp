import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GdkpEventComponent } from './gdkp-event/gdkp-event.component';
import { GdkpApiService } from './Shared/gdkp-api.service';

@NgModule({
  declarations: [
    AppComponent,
    GdkpEventComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GdkpApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
