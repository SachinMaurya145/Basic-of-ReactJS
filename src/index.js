import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './componet/Rounting/CommanCom/Pages/Home';
import About from './componet/Rounting/CommanCom/Pages/About';
import Profile from './componet/Rounting/CommanCom/Pages/Profile/Profile';
import Services from './componet/Rounting/CommanCom/Pages/Services';
import Header from './componet/Rounting/CommanCom/Header';
import RouteNotfound from './componet/Rounting/RouteNotfound';
import reportWebVitals from './reportWebVitals';
import CRUDControlledStates from './ControlledCompForm/CRUDControlledStates';
import App from './App';
// import App from './App';

// Define your routes as objects in an array
const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Services /> },
  { path: '/profile/:userId', element: <Profile /> }, // Dynamic route
  { path: '*', element: <RouteNotfound /> },

];

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      {/* <Router>
        <Header />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router> */}
      <App />

    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
