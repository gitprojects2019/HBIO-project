import { PlayerlistComponent } from './playerlist/playerlist.component';
import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Route[] = [
    { path : 'play'  , children: [
        {path: '', component : PlayerlistComponent}
    ]

    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class playerRoutes {
    
}