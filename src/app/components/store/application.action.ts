import { createAction, props } from '@ngrx/store';

export const saveFilters = createAction(
  '[Store Learning] Saved to checklist array',
  props<{
    savedFilters: string[];
  }>()
);
