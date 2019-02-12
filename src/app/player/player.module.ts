import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerlistComponent } from './playerlist/playerlist.component';

@NgModule({
  declarations: [PlayerlistComponent],
  imports: [
    CommonModule
  ],
  exports:[PlayerModule]
})
export class PlayerModule { }
