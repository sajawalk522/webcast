import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../src/assets/css/bootstrap.min.css';
import '../src/assets/css/main.css';
import '../src/assets/css/style.css';
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render((
   <Router history="{browserHistory}">
         <div>
            <App />
         </div>
      </Router>
),
    
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
