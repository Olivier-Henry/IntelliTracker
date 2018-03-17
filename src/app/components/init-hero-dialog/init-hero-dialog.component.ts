import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import User from '../../../entity/User';

@Component({
  selector: 'app-init-hero-dialog',
  templateUrl: './init-hero-dialog.component.html',
  styleUrls: ['./init-hero-dialog.component.scss']
})
export class InitHeroDialogComponent implements OnInit {

  private heroes: User

  constructor(public dialogRef: MatDialogRef<InitHeroDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.data.heroes.then((result) => {
      this.heroes = result;
    });
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
