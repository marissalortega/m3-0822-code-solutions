import React from 'react';
import * as ReactDOM from 'react-dom/client';

const newElement = React.createElement(
  'h1',
  [null],
  ['Hello, React!']
);

console.log('newElement:', newElement);

const container = document.querySelector('#root');

const root = ReactDOM.createRoot(container);

root.render(newElement);
