import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { HeadComponent } from './head/head.component';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { filterReducer } from './store/application.reducer';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature('filter', filterReducer)],
  declarations: [FilterComponent, HeadComponent]
})
export class ComponentsModule {}
