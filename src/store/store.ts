import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { setupListeners } from '@reduxjs/toolkit/query';
import { usersApi } from './sercives/usersApi';
import userReducer from './sercives/usersSlice';

export const store = configureStore({
   reducer: {
      userReducer,
      [usersApi.reducerPath]: usersApi.reducer,
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware),
});

setupListeners(store.dispatch);
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
