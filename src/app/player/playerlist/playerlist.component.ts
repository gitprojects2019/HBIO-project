
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { IPlayerDetails } from './../../model/players';
import { PlayerDataService } from 'src/app/shared/services/player-data.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-playerlist',
  templateUrl: './playerlist.component.html',
  styleUrls: ['./playerlist.component.css'],
  providers: [PlayerDataService]
})


export class PlayerlistComponent implements OnInit {
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  displayedColumns: string[] = [
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
  showLoader : boolean = true ;

  ngOnInit() 
  {
    console.log("Component11 =>" + this.playerlist);
    
    this._playerlistService.getPlayers().subscribe((data: IPlayerDetails[]) => {
      console.log(data);
      this.playerlist = data;
      console.log(this.playerlist);
      setTimeout(() => {
        this.LoadTableData();
      }, 100);
      
    });
  }

  LoadTableData(){
  console.log("Component" + this.playerlist);
  this.dataSource= new MatTableDataSource<IPlayerDetails>(this.playerlist);
  this.dataSource.sort = this.sort;
  this.dataSource.paginator = this.paginator;
  this.showLoader = false;
}
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
  }
}
