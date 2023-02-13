import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { jsonplaceholderApi } from './jsonplaceholderApi';

export const store = configureStore({
    reducer: {
        [jsonplaceholderApi.reducerPath]: jsonplaceholderApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jsonplaceholderApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
