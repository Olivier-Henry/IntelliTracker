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
    @Inject(MAT_DIALOG_DATA) public data: any, private bankrollService:BankrollService) { }

  ngOnInit() {
    this.data.heroes.then((result) => {
      this.heroes = result;

      for(let hero of this.heroes){

        this.bankrollService.getByHero(hero).then(result=> {
          if(result instanceof Bankroll){
            this.bankrolls.push(result);
            return;
          }

          let bankroll = new Bankroll();
          bankroll.user = hero;
          bankroll.date = new Date();
          this.bankrolls.push(bankroll);
        
        });

       
      }

    });
  }

  controlDecimals($event){
    $event.target.value = parseFloat($event.target.value).toFixed(2);
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
