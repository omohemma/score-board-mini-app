import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ScoreProvider } from './context/scores.context';

import App from './App';

import './style.css'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ScoreProvider>
      <App />
    </ScoreProvider>
  </StrictMode>
);
