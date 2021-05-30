import { createReducer, on, Action } from '@ngrx/store';
import { saveFilters } from './application.action';

export interface FilterState {
  showFilter: string[];
}

export const filterReducer = createReducer<FilterState>(
  { showFilter: ['Area 2'] }, // TODO: Change this to initialState
  on(saveFilters, (state, action) => {
    console.warn('Original state: ' + JSON.stringify(state));
    return {
      ...state,
      showFilter: action.savedFilters
    };
  })
);

export function reducer(state: FilterState | undefined, action: Action) {
  return filterReducer(state, action);
}
