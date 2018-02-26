import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import 'polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

//angular MDC web
import { AppMaterialModule } from './material.module';


// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ElectronService } from './providers/electron.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FirstInstallComponent } from './components/first-install/first-install.component';
import { PreferencesService } from 'app/providers/preferences.service';

import DatabaseConnection from '../utils/DatabaseConnection';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function DatabaseConnectionFactory(databaseConnection: DatabaseConnection){
  return () => databaseConnection.connect();
}

@NgModule({
  declarations: [
    AppComponent,
    FirstInstallComponent,
    HomeComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    AppMaterialModule
  ],
  providers: [
    DatabaseConnection,
    {
      provide: APP_INITIALIZER,
      useFactory: DatabaseConnectionFactory,
      deps: [DatabaseConnection],
      multi: true
    },
    ElectronService, 
    PreferencesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
