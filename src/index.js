import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ✅ Import CSS first
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
import './index.scss'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
