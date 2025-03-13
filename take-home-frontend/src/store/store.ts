import { all, fork } from 'redux-saga/effects';
import { configureStore } from '@reduxjs/toolkit';
import rootSaga from './sagas';

import createSagaMiddleware from 'redux-saga';
import userReducer from './userSplice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
