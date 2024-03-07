import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App/>}></Route> 
    <Route path='*'element={<NotFound/>}></Route>
        </Routes>
    </BrowserRouter> 
  </React.StrictMode>
);
 
reportWebVitals();
