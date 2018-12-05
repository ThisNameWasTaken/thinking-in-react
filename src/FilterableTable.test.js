import React from 'react';
import ReactDOM from 'react-dom';
import FilterableTable from './FilterableTable';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FilterableTable />, div);
  ReactDOM.unmountComponentAtNode(div);
});
