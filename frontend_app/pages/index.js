/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export default class extends React.Component {

  render() {
  	var products = [
  {
      id: 1,
      name: "Product1",
      price: 120
  },{
      id: 2,
      name: "Product2",
      price: 80
  },{
      id: 3,
      name: "Product3",
      price: 207
  },{
      id: 6,
      name: "Product4",
      price: 100
  },{
      id: 5,
      name: "Product5",
      price: 150
  },{
      id: 6,
      name: "Product1",
      price: 160
  }
];
    return (
      <div>
        <h1>Home Page</h1>
        <BootstrapTable data={products} striped={true} hover={true}>
	      <TableHeaderColumn isKey={true} dataField="id">Product ID</TableHeaderColumn>
	      <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
	      <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
	  </BootstrapTable>
      </div>
    );
  }

}
