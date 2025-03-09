import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store'; // Ensure you have a Redux store file
import App from './App';
import reportWebVitals from './reportWebVitals';

import '../src/assets/css/animate.css';
import '../src/assets/css/owl.carousel.min.css';
import '../src/assets/css/owl.theme.default.min.css';
import '../src/assets/css/magnific-popup.css';
import '../src/assets/css/bootstrap-datepicker.css';
import '../src/assets/css/jquery.timepicker.css';
import '../src/assets/css/flaticon.css';
import '../src/assets/css/style.css';
import '../src/assets/scss/style.scss';
import '../src/assets/css/bootstrap/bootstrap-grid.css';
import '../src/assets/css/bootstrap/bootstrap-reboot.css';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

