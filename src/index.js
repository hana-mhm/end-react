import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './router';
import { Globalstyle } from './globalStyle';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment>
    <Globalstyle/>
    <Router/>
  </Fragment>
);
 

