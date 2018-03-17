import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../../providers/rooms.service';
import Room from '../../../entity/Room';
import { MatDialog } from '@angular/material';
import { InitHeroDialogComponent } from '../init-hero-dialog/init-hero-dialog.component';

@Component({
  selector: 'app-first-install',
  templateUrl: './first-install.component.html',
  styleUrls: ['./first-install.component.scss'],
})
export class FirstInstallComponent implements OnInit {

  constructor(private roomService: RoomsService, public dialog:MatDialog) {}

  openDialog(): void{
      let dialogRef = this.dialog.open(InitHeroDialogComponent,{
      });
  }

  ngOnInit() {
   
  }

}
