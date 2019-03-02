import { PlayerlistComponent } from './playerlist/playerlist.component';
import { PalyerDetailsComponent } from './palyer-details/palyer-details.component'
import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';



const routes: Route[] = [
  {
    path: 'player', children: [
      { path: 'playerList', component: PlayerlistComponent },
      { path: 'playerDetails', component: PalyerDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class playerRoutes {

}
