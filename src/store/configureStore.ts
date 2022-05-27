import createSagaMiddleware from 'redux-saga';
import {configureStore} from '@reduxjs/toolkit';
import {appReducer} from '.';
import {rootSaga} from './sagas';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: appReducer,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);
