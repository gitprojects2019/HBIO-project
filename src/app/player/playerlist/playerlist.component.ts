import { PlayerDetails } from './../../model/players';
import { PlayerService } from './../../shared/services/player.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playerlist',
  templateUrl: './playerlist.component.html',
  styleUrls: ['./playerlist.component.css']
})
export class PlayerlistComponent implements OnInit {

  constructor(private _playerlistService : PlayerService) { }

  playerlist : PlayerDetails []; 
  displayedColumns: string[] =['Name','RegistrationId','GovernmentId','DateOfBirth','ContactNumber'];
  dataSource=this.playerlist;
  
  ngOnInit() {
    this._playerlistService.getPlayers().subscribe(p => this.playerlist = p);
  }
  
  
  
}
