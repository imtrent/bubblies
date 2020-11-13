import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import { SettingsProvider } from './store/SettingsContext';
import { light } from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <SettingsProvider>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </SettingsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
