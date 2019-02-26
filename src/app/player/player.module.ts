import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { playerRoutes } from './player.route';


import { PlayerlistComponent } from './playerlist/playerlist.component';

@NgModule({
  declarations: [PlayerlistComponent],
  imports: [
    CommonModule,
    playerRoutes,
    RouterModule
  ],
  exports:[RouterModule]
})
export class PlayerModule { }
