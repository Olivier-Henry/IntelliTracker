import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatButtonModule,
  MatToolbarModule, 
  MatGridListModule, 
  MatCardModule, 
  MatIconModule,
  MatChipsModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ],
})
export class AppMaterialModule { }
