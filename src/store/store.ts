import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

import {
  AnyAction,
  combineReducers,
  configureStore,
  Middleware,
  Reducer,
} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';

import tokenReducer from './features/token/tokenSlice.ts';
import userDataReducer from './features/userData/userDataSlice.ts'
import toastVisibleReducer from "./features/booleans/toastVisible.ts";
import instrumentsReducer from './features/instruments/instrumentsSlice.ts'
const reducers = {
  token: tokenReducer,
  userData: userDataReducer,
  toastVisible: toastVisibleReducer,
  instruments: instrumentsReducer

};

const combinedReducer = combineReducers<typeof reducers>(reducers);

const rootReducer: Reducer<ReturnType<typeof combinedReducer>, AnyAction> = (
  state,
  action,
) => {
  if (action.type === 'clearStore/clearStore' && state) {
    // state.auth = defaultAuthState;
    // state.profile = defaultProfileState
  }
  return combinedReducer(state, action);
};


export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({immutableCheck: false}),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof combinedReducer>;
export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
