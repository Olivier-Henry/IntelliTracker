import { HomeComponent } from './components/home/home.component';
import { FirstInstallComponent } from './components/first-install/first-install.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreferencesService } from './providers/preferences.service';

const routes: Routes = [
    {
        path: 'first-install',
        component: FirstInstallComponent,
    },
    {
        path: '',
        component: HomeComponent,
        canActivate: [PreferencesService],
    }


];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing: false })],
    exports: [RouterModule],
    providers: [
        PreferencesService
    ]
})
export class AppRoutingModule { }
