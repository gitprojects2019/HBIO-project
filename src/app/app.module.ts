import { PlayerModule } from './player/player.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TopMenuComponent } from './shared/component/top-menu/top-menu.component';
import { SideMenuComponent } from './shared/component/side-menu/side-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    PlayerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
