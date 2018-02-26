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
    console.log('la');
    console.log(getConnection());
       this.repository = getConnection().getRepository(AppPreferences);
       // this.get();
   
  }

  public get = (): Promise<AppPreferences> => {

   // const _this = this;

    return this.repository.findOne({ id: 1 });
      /* .then(response => {
        console.log(response);
        if (response instanceof AppPreferences) {
          _this.preferences = response;
        }
      })
      .catch(error => {
        console.error(error);
      }) */
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

    return new Promise<boolean>(resolve => {
      this.get().then(response => {
        console.log(response);
        if (response instanceof AppPreferences) {
          this.preferences = response;
          console.log(response);
          resolve(!response.firstInstall);
          console.log(this.router);
          this.router.navigate(['first-install']);
        }else{
          resolve(true);
        }
      })
      .catch(error => {
        console.error(error);
      })
        
     /*  if(this.preferences.firstInstall === true){
        this.router.navigate(['/first-install']);
        return resolve(false);
      } */

  //  return resolve(true);
    });
   
  }

}
