import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../../providers/rooms.service';
import Room from '../../../entity/Room';
import { MatDialog } from '@angular/material';
import { InitHeroDialogComponent } from '../init-hero-dialog/init-hero-dialog.component';
import { UsersService } from '../../providers/users.service';
import { BankrollService } from '../../providers/bankroll.service';

@Component({
  selector: 'app-first-install',
  templateUrl: './first-install.component.html',
  styleUrls: ['./first-install.component.scss'],
})
export class FirstInstallComponent implements OnInit {

  private selectedRoom: string;

  constructor(private roomService: RoomsService, 
                public dialog:MatDialog, 
                private userService:UsersService,
                private bankrollService: BankrollService) {}

  openDialog(room: Room): void{
      let dialogRef = this.dialog.open(InitHeroDialogComponent,{
        data: {
          heroes: this.userService.getHeroesByRoom(room) 
        }
      });

      dialogRef.afterClosed().subscribe(result =>{
        if(typeof result !== 'undefined'){
          this.bankrollService.save(result);
        }
      });
  }

  hasSelectedRoom(): boolean{
    return this.selectedRoom === undefined;
  }

  getRoomIcon(): string{
      if(this.selectedRoom){
        return this.selectedRoom + '-logo';
      }
      return 'no-room-logo';
  }

  ngOnInit() {
   
  }

}
