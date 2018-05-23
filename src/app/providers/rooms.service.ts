import { Injectable } from '@angular/core';
import { getConnection, Repository } from 'typeorm';
import Room from '../../entity/Room';
import * as os from 'os';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class RoomsService {

  private repository: Repository<Room>;
  public rooms: Array<Room>;
  public knowRooms: Array<string> = ['winamax', 'pokerstars', 'test'];

  constructor() {
    this.repository = getConnection().getRepository(Room);
    this.get();

  }

  private get = () => {
    this.repository.find()
      .then(response => {
        if (response.length) {
          this.rooms = response;

          for (const room of this.rooms) {
            const i = this.knowRooms.indexOf(room.name.toLowerCase());

            if (i >= 0) {
              this.knowRooms.splice(i, 1);
            }
          }
        }
      });
  }


  private validateRoomFolder = (roomName: string, roomPath: string): boolean | Room => {
    switch (roomName) {
      case 'pokerstars':
        return this.isValidPokerstarsPath(roomPath);
      case 'winamax':
      //  return this.isValidWinamaxPath(roomPath);
      default:
        return false;
    }
  }

  private isValidPokerstarsPath = (roomPath: string): boolean | Room => {
    const pathArray: Array<string> = roomPath.split(path.sep);
    let rpath: string;

    for (let i = pathArray.length - 1; i >= 0; i--) {
      /*  if(pathArray[i] === 'HandHistory'){
         rpath = pathArray.join(path.sep);
         break;
       } */

      if (pathArray[i] === 'PokerStars.FR') {
        rpath = pathArray.join(path.sep);
        break;
      }

      pathArray.pop();
    }

    return false;
  }


}
