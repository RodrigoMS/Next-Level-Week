import React from 'react';

// Pede para o React se integrar com o dom (HTML)
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  // Renderiza o arquivo App dentro da div root.
  document.getElementById('root')
);