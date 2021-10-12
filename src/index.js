import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store';
import { BrowserRouter } from "react-router-dom";

//console.log(store)
let rerender = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App store = {store}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
store.subscribe(rerender)
rerender();



