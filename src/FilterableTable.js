import React, { Component } from 'react';
import './FilterableTable.scss';

function SearchBox(props) {
  return (
    <div className="search-box">
      <input
        className="search-box__textfield"
        type="text"
        value={props.value}
        placeholder="Search..."
        onChange={props.onChange} />
      <label className="search-box__checkbox">
        <input
          type="checkbox"
          name="stock-only"
          checked={props.showStockedOnly}
          onChange={props.onChange} />
        <span>Show only products in stock</span>
      </label>
    </div>
  );
}

function ProductTableCategory(props) {
  return (
    <tr className="product-table__category">
      <td colSpan="2">{props.value}</td>
    </tr>
  );
}

function ProductTableItem(props) {
  return (
    <tr className={props.value.stocked ? "" : "out-of-stock"}>
      <td>{props.value.name}</td>
      <td>{props.value.price}</td>
    </tr>
  );
}

function ProductTable(props) {
  let productList = [];

  for (const category in props.products) {
    const filteredProducts = props.products[category].filter(product => product.name.match(new RegExp(props.value, 'i')));

    const products = props.showStockedOnly ?
      filteredProducts.filter(product => product.stocked) :
      filteredProducts;

    if (!products.length) {
      continue;
    }

    productList.push(
      <ProductTableCategory
        value={category}
        key={category} />
    );


    products.forEach(product => productList.push(
      <ProductTableItem
        value={product}
        key={product.id} />
    ));
  }

  return (
    <table className="product-table">
      <thead></thead>
      <tbody>
        {productList}
      </tbody>
    </table>
  );
}

class FilterableTable extends Component {
  constructor(props) {
    super(props);

    this.updateSearchBox = this.updateSearchBox.bind(this);

    this.state = {
      filterText: '',
      showStockedOnly: false
    }
  }

  updateSearchBox(event) {
    const input = event.target;

    switch (input.type) {
      case "text":
        this.setState({ filterText: input.value })
        break;

      case "checkbox":
        this.setState({ showStockedOnly: input.checked })
        break;

      default:
        break;
    }
  }

  render() {
    return (
      <div className="filterable-table">
        <SearchBox
          value={this.state.filterText}
          showStockedOnly={this.state.showStockedOnly}
          onChange={this.updateSearchBox} />
        <ProductTable
          products={this.props.products}
          value={this.state.filterText}
          showStockedOnly={this.state.showStockedOnly} />
      </div>
    );
  }
}

export default FilterableTable;
