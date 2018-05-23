import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import User from '../../../entity/User';
import Bankroll from '../../../entity/Bankroll';
import { BankrollService } from '../../providers/bankroll.service';

@Component({
  selector: 'app-init-hero-dialog',
  templateUrl: './init-hero-dialog.component.html',
  styleUrls: ['./init-hero-dialog.component.scss']
})
export class InitHeroDialogComponent implements OnInit {

  private heroes: Array<User>;
  private bankrolls: Array<Bankroll> = [];

  constructor(public dialogRef: MatDialogRef<InitHeroDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private bankrollService: BankrollService) { }

  ngOnInit() {
    this.data.heroes.then((result) => {
      this.heroes = result;

      for (const hero of this.heroes) {

        this.bankrollService.getByHero(hero).then(bankroll => {
          if (bankroll instanceof Bankroll) {
            this.bankrolls.push(bankroll);
            return;
          }

          bankroll = new Bankroll();
          bankroll.user = hero;
          bankroll.date = new Date();
          this.bankrolls.push(bankroll);

        });


      }

    });
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
