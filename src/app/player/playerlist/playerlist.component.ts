
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { IPlayerDetails } from './../../model/players';
import { PlayerDataService } from 'src/app/shared/services/player-data.service';

@Component({
  selector: 'app-playerlist',
  templateUrl: './playerlist.component.html',
  styleUrls: ['./playerlist.component.css'],
  providers: [PlayerDataService]
})


export class PlayerlistComponent implements OnInit {


  displayedColumns: string[] = [
    "Id",
    "FirstName",
    "MiddleName",
    "LastName",
    "RegistrationId",
    "GovernmentId",
    "GovernmentIdType",
    "DateOfBirth",
    "Age",
    "Weight",
    "ContactNumber",
    "Country",
    "State",
    "District",
    "Gender",
    "TournamentName",
    "TournamentDate",
    "TournamentPlace"
    ];
  dataSource:any ;


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _playerlistService : PlayerDataService) { }

  playerlist : IPlayerDetails []; 
  // dataSource : IPlayerDetails []
  ngOnInit() {
   
    this._playerlistService.getPlayers().subscribe(p => this.playerlist = p);
    console.log(this.playerlist);
    this.dataSource= new MatTableDataSource<IPlayerDetails>(this.playerlist);
	  this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  
}


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
}


  
  
  
  
}
