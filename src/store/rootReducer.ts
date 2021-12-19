import { combineReducers } from 'redux';

/** Reducers(s) */
import { companiesReducer } from './modules/companies.store';

export const rootReducer = combineReducers({
  company: companiesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
