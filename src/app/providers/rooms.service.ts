import { Injectable } from '@angular/core';
import { getConnection, Repository } from 'typeorm';
import Room from '../../entity/Room';

@Injectable()
export class RoomsService {

  private repository: Repository<Room>;
  public rooms: Array<Room>;
  private knowRooms:Array<string> = ['winamax', 'pokerstars'];

  constructor() {
    this.repository = getConnection().getRepository(Room);
    this.get();
  }

  private get = () => {
     this.repository.find()
      .then(response => {
        if(response.length){
          this.rooms = response;
          console.log(response);
        }
      });
  }

}
