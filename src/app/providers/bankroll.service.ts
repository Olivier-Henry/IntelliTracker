import { Injectable } from '@angular/core';
import User from '../../entity/User';
import { Repository } from 'typeorm/repository/Repository';
import Bankroll from '../../entity/Bankroll';
import { getConnection } from 'typeorm';

@Injectable()
export class BankrollService {

  private repository: Repository<Bankroll>;

  constructor() {
    this.repository = getConnection().getRepository(Bankroll);
  }

  async getByHero(user: User) {
    const b = await this.repository.findOne({
      where: { user: user },
      order: { date: 'DESC' }
    });

    if (b instanceof Bankroll) {
      b.amount = this.toUnit(b.amount);

      return b;
    }
  }

  async save(bankrolls: Array<Bankroll>) {

    for (const b of bankrolls) {
      b.amount = this.toCentUnit(b.amount);
      console.log(b.amount);
    }

    await this.repository.save(bankrolls);
  }

  private toCentUnit(amount): number {
    return amount * 100;
  }

  private toUnit(amount): number {
    return amount / 100;
  }

}
