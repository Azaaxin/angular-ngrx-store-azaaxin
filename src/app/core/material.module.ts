import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

const modules = [
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
];

@NgModule({
  imports: [modules],
  exports: [modules]
  
})
export class MaterialModule {}
