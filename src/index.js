import { ColorModeScript, ChakraProvider, theme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import App from './App';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import ReactDOM from 'react-dom/client';

import authReducer from './state';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

const persistConfig = { key: 'root', storage, version: 1 };
const persistedReducer = persistReducer(persistConfig, authReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <ColorModeScript />
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App></App>
      </ChakraProvider>
    </Provider>
  </StrictMode>
);
