import { createAction, createReducer, on } from '@ngrx/store';

export const filterReducer = createReducer(
  { showFilter: ['Area 2'] },
  on(createAction('[Changed Filter]'), state => {
    console.log('Original state' + JSON.stringify(state));
    return {
      ...state,
      showFilter: state.showFilter
    };
  })
);
