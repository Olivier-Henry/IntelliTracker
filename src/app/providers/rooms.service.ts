import { Injectable } from '@angular/core';
import { getConnection, Repository } from 'typeorm';
import Room from '../../entity/Room';

@Injectable()
export class RoomsService {

  private repository: Repository<Room>;
  public rooms: Array<Room>;

  constructor() {
    this.repository = getConnection().getRepository(Room);
    this.find();
  }

  private find = () => {
     this.repository.find()
      .then(response => {
        if(response.length){
          this.rooms = response;
        }
      });
  }

}
