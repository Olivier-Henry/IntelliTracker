import { Injectable } from '@angular/core';
import { getConnection, Repository } from 'typeorm';
import AppPreferences from '../../entity/AppPreferences';
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import { setTimeout } from 'timers';


@Injectable()
export class PreferencesService implements CanActivate {

  public preferences: AppPreferences;
  private repository: Repository<AppPreferences>;

  constructor(private router:Router) {
       this.repository = getConnection().getRepository(AppPreferences);
  }

  public get = (): Promise<AppPreferences> => {
    return this.repository.findOne({ id: 1 });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

    return new Promise<boolean>(resolve => {
      this.get().then(response => {
        if (response instanceof AppPreferences) {
          this.preferences = response;
          resolve(!response.firstInstall);
          this.router.navigate(['first-install']);
        }else{
          resolve(true);
        }
      })
      .catch(error => {
        console.error(error);
      })
        
    });
   
  }

}
