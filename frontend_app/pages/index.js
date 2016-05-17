/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import ProductService from '../flux/Services/ProductServices.jsx';
import ProductStore from '../flux/Stores/ProductStore.jsx';
export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        ProductService.getProduct()
        ProductStore.addChangeListener(this.onProductStoreUpdate.bind(this));
    }

    onProductStoreUpdate(){
        this.setState({
            products : ProductStore.products.results
        })
        console.log("Products",ProductStore.products.results)
    }

    onCellEdited(row, cellName, cellValue){
        console.log("Save cell '"+cellName+"' with value '"+cellValue+"'");
        console.log("Thw whole row :");
        console.log(row);
        ProductService.updateProduct(row);
    }

    afterInsertRow(row, cellName){
        console.log("The new record :");
        console.log(row);
        ProductService.saveProduct(row);
    }
    render() {
        var selectRowProp = {
            mode: "checkbox",  //checkbox for multi select, radio for single select.
            clickToSelect: true,   //click row will trigger a selection on that row.
            bgColor: "rgb(238, 193, 213)"   //selected row background color
        };
        
        var cellEditProp = {
            mode: "dbclick",
            blurToSave: false,
            afterSaveCell: this.onCellEdited.bind(this)
        }
        var options = {
            afterInsertRow : this.afterInsertRow.bind(this)
        }

        return (
            <div>
                <BootstrapTable
                    data={this.state.products}
                    selectRow={selectRowProp}
                    cellEdit={cellEditProp}
                    options = {options}
                    striped={true}
                    hover={true}
                    exportCSV ={true}
                    condensed={true}
                    pagination={true}
                    insertRow={true}
                    deleteRow={true}
                    search={true}>

                    <TableHeaderColumn dataField="product_description" dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>
                    <TableHeaderColumn dataField="product_name" isKey={true} dataAlign="center"  dataSort={true}>Product Name</TableHeaderColumn>
                    <TableHeaderColumn dataField="unit_price" dataAlign="center" >Product Price</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
  }

}
