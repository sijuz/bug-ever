import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProviderRpcClient } from 'everscale-inpage-provider';

const provider = new ProviderRpcClient()

provider.getAccountsByCodeHash({ codeHash: 'e5bc183e3bbc2ef49d380edca5640e3f72fca6416310e9a258dbb53949177784' })

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
