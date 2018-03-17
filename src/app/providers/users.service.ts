import { Injectable } from '@angular/core';
import { Repository } from 'typeorm/repository/Repository';
import User from '../../entity/User';
import { getConnection, getRepository } from 'typeorm';
import Room from '../../entity/Room';

@Injectable()
export class UsersService {

  private repository: Repository<User>;

  constructor() {
    this.repository = getConnection().getRepository(User);
  }

  async getHeroesByRoom(room: Room) {
    return await this.repository.find({ roomId: room.id, isHero: true });
  }

}
