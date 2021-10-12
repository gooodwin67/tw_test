import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store';

//console.log(store)
let rerender = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App store = {store}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
store.subscribe(rerender)
rerender();



