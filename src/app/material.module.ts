import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatButtonModule,
  MatToolbarModule, 
  MatGridListModule, 
  MatCardModule, 
  MatIconModule,
  MatChipsModule 
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule
  ],
})
export class AppMaterialModule { }
