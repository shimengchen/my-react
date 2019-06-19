/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import './index.scss';
import App from './App';

/* 热更新 */
if (module.hot) {
    module.hot.accept('./App', () => {
      renderWithHotReload(<App />);
    });
  }
  
  renderWithHotReload(<App />);
  
  function renderWithHotReload(RootElement) {
    // eslint-disable-next-line no-undef
    ReactDOM.render(
      <AppContainer>
        {RootElement}
      </AppContainer>,
      document.getElementById('root')
    );
  }
  
