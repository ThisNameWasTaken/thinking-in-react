import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import FilterableTable from './FilterableTable';
import * as serviceWorker from './serviceWorker';

const products = {
    "Sporting Goods": [
        { price: "$49.99", stocked: true, name: "Football", id: 1 },
        { price: "$9.99", stocked: true, name: "Baseball", id: 2 },
        { price: "$29.99", stocked: false, name: "Basketball", id: 3 }
    ],
    "Electronics": [
        { price: "$99.99", stocked: true, name: "iPod Touch", id: 4 },
        { price: "$399.99", stocked: false, name: "iPhone 5", id: 5 },
        { price: "$199.99", stocked: true, name: "Nexus 7", id: 6 }
    ]
};

ReactDOM.render(
    <FilterableTable products={products} />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
