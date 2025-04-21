import React from 'react';
import ReactDOM from 'react-dom/client';
import Basket from './components/Basket';
import { RootState } from "hostApp/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Basket products={RootState}/>
);

