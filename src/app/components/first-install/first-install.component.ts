import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-install',
  templateUrl: './first-install.component.html',
  styleUrls: ['./first-install.component.scss']
})
export class FirstInstallComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('init');
  }

}
