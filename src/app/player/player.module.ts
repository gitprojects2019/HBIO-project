import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { playerRoutes } from './player.route';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayerlistComponent } from './playerlist/playerlist.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PlayerlistComponent,
    PlayerDetailsComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    playerRoutes,
    RouterModule
  ],
  exports: [RouterModule]
})
export class PlayerModule { }
