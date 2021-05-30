import { createAction, createReducer, on, Action } from '@ngrx/store';
import { Filter } from '../filter/filter.component';
import { saveFilters } from './application.action';

interface State {
  jobStatus: Filter;
}

export interface FilterState {
  showFilter: string[];
}

export const filterReducer = createReducer<FilterState>(
  { showFilter: ['Area 2'] },
  on(saveFilters, (state, action) => {
    console.log('Original state' + JSON.stringify(state));
    return {
      ...state,
      showFilter: state.showFilter
    };
  })
);

export function reducer(state: State | undefined, action: Action) {
  return filterReducer(state, action);
}