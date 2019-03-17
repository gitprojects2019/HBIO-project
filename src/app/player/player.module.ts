import { PlayerDetailsComponent } from './player-details/player-details.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { playerRoutes } from './player.route';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayerlistComponent } from './playerlist/playerlist.component';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material'; 
import {MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSortModule, } from '@angular/material/sort';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatProgressSpinnerModule} from '@angular/material';



@NgModule({
  declarations: [
    PlayerlistComponent,
    PlayerDetailsComponent
  ],
  imports: [
    CommonModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    playerRoutes,
    RouterModule
  ],
  exports: [RouterModule]
})
export class PlayerModule { }
