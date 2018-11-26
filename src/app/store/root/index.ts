import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { globalReducer } from '../global/global.reducer';
import { RootState } from './root.state';

export const rootReducers: ActionReducerMap<RootState> = {
  global: globalReducer
};

export const metaReducers: MetaReducer<RootState>[] = !environment.production ? [] : [];
