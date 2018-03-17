import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../../providers/rooms.service';
import Room from '../../../entity/Room';

@Component({
  selector: 'app-first-install',
  templateUrl: './first-install.component.html',
  styleUrls: ['./first-install.component.scss']
})
export class FirstInstallComponent implements OnInit {

  constructor(private roomService: RoomsService) {}

  ngOnInit() {
    console.log('init');
  }

}
