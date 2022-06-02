import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './app';
import { GlobalStyle } from './gobal.style';
import { store } from './Redux/rootreducer';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
);
