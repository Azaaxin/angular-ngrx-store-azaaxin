import { createAction, props } from '@ngrx/store';

export const saveFilters = createAction(
  '[PERSON_API] Saved to checklist array',
  props<{
    savedFilters: string[];
  }>()
);
