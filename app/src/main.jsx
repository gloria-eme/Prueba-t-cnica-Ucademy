import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './routs/404';
import Login from './routs/Login';
import Home from './routs/home';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Login />} />
            <Route path="home" element={<Home />} />
            {/* <Route path="series" element={<Series />} />
          <Route path="series/:id" element={<Serie />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<Movie />} /> */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
   
  </React.StrictMode>,
);
