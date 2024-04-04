import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {checkoutSlice} from './reducers/checkout.slice';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

const reducer = {
  [checkoutSlice.name]: checkoutSlice.reducer,
};

const rootReducer = combineReducers(reducer);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
