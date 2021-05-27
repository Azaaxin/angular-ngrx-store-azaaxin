import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { FilterComponent } from './filter/filter.component';
import { filterReducer } from './store/application.reducer';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature('filter', filterReducer)],
  declarations: [FilterComponent]
})
export class ComponentsModule {}
