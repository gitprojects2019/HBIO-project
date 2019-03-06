import { PlayerlistComponent } from './playerlist/playerlist.component';
import { PlayerDetailsComponent } from './player-details/player-details.component'
import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';




const routes: Route[] = [
  {
    path: 'player', children: [
      { path: 'playerList', component: PlayerlistComponent },
      { path: 'playerDetails', component: PlayerDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class playerRoutes {

}
