import { PlayerDetails } from './../../model/players';
import { PlayerService } from './../../shared/services/player.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-playerlist',
  templateUrl: './playerlist.component.html',
  styleUrls: ['./playerlist.component.css'],
  providers: [PlayerService]
})


export class PlayerlistComponent implements OnInit {

  constructor(private _playerlistService : PlayerService) { }

  playerlist : PlayerDetails []; 
 
  displayedColumns: string[] = ['Name','RegistrationId','GovernmentId','DateOfBirth','ContactNumber'];
  //columnsToDisplay: string[] = this.displayedColumns.slice();

  dataSource : PlayerDetails[];
  ngOnInit() {
    this._playerlistService.getPlayers().subscribe(p => this.playerlist = p);
    console.log(this.playerlist);
    this.dataSource=this.playerlist;
}

  onRowClicked(row) {
    console.log('Row clicked: ', row);
}

  
  
  
  
}
