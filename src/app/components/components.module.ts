import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { HeadComponent } from './head/head.component';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { filterReducer } from './store/application.reducer';
import { MaterialModule } from '../core/material.module';
import { FormsModule } from '@angular/forms';

const modules = [
  CommonModule, 
  FormsModule, 
  MaterialModule, 
  StoreModule.forFeature('filter', filterReducer)
]
@NgModule({
  imports: modules,
  declarations: [FilterComponent, HeadComponent],
  exports: [FilterComponent, HeadComponent]
})
export class ComponentsModule {}
