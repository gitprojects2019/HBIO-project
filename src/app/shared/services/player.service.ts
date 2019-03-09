import { PlayerDetails } from '../../model/players';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()

export class PlayerService {

  getPlayers(): Observable<PlayerDetails[]>{
    return of(this.ListOfPlayers());
  }
  

  ListOfPlayers() : PlayerDetails[]{
    return [
      // { Id: '1', Name: 'Supriyo', RegistrationId: '1WSX', GovernmentId: 'G122', GovernmentIdType:'Voter Id', DateOfBirth: '11/08/1989',Age:'20', Weight: '70',ContactNumber:'22222222',State:'Maharashtra', District: 'Pune', Gender:'Male', TournamentName:'HBIO',TournamentDate: '12/12/1989' },
      // { Id: '2', Name: 'Amrita', RegistrationId: '1WSX', GovernmentId: 'G122', GovernmentIdType:'Voter Id', DateOfBirth: '11/08/1989',Age:'20', Weight: '70',ContactNumber:'22222222',State:'Maharashtra', District: 'Pune', Gender:'Male', TournamentName:'HBIO',TournamentDate: '12/12/1989' },
      // { Id: '3', Name: 'Karan', RegistrationId: '1WSX', GovernmentId: 'G122', GovernmentIdType:'Voter Id', DateOfBirth: '11/08/1989',Age:'20', Weight: '70',ContactNumber:'22222222',State:'Maharashtra', District: 'Pune', Gender:'Male', TournamentName:'HBIO',TournamentDate: '12/12/1989' },
      // { Id: '4', Name: 'Sam', RegistrationId: '1WSX', GovernmentId: 'G122', GovernmentIdType:'Voter Id', DateOfBirth: '11/08/1989',Age:'20', Weight: '70',ContactNumber:'22222222',State:'Maharashtra', District: 'Pune', Gender:'Male', TournamentName:'HBIO',TournamentDate: '12/12/1989' },
      // { Id: '5', Name: 'Rudyard', RegistrationId: '1WSX', GovernmentId: 'G122', GovernmentIdType:'Voter Id', DateOfBirth: '11/08/1989',Age:'20', Weight: '70',ContactNumber:'22222222',State:'Maharashtra', District: 'Pune', Gender:'Male', TournamentName:'HBIO',TournamentDate: '12/12/1989' }
    ];
  }

  
  
}
