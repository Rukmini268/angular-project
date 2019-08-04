import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MoreComponent } from './more/more.component';
import { PlayerService } from './player.service';


@NgModule({
  declarations: [
    AppComponent,
    MoreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
