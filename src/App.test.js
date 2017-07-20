import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { renderComponent } from './tests/test_helper.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  renderComponent(App, div);
});
