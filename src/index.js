import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const conatiner = document.querySelector('#root');
const root=createRoot(conatiner);
root.render(<React.StrictMode>
    <App />
</React.StrictMode>)