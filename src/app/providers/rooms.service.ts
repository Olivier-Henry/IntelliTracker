import { Injectable } from '@angular/core';
import { getConnection, Repository } from 'typeorm';
import Room from '../../entity/Room';

@Injectable()
export class RoomsService {

  private repository: Repository<Room>;
  public rooms: Array<Room>;
  public knowRooms:Array<string> = ['winamax', 'pokerstars', 'test'];

  constructor() {
    this.repository = getConnection().getRepository(Room);
    this.get();
  }

  private get = () => {
     this.repository.find()
      .then(response => {
        if(response.length){
          this.rooms = response;
          
          for(let room of this.rooms){
            let i = this.knowRooms.indexOf(room.name.toLowerCase());

            if(i >= 0){
              this.knowRooms.splice(i,1);
            }
          }
        }
      });
  }

  public validateRoomFolder = (roomName: string, path: string): boolean => {

    return false;
  }

}
