import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { GlobalState } from './global/global.state';

export const reducers: ActionReducerMap<GlobalState> = {};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
