/**
 * @flow weak
 */

import ProductActions from '../Actions/ProductAction.jsx';
import {PRODUCT_URL} from '../Constants/BackendServerConfig.js';
import { removeNulls } from '../RestUtils/ObjectUtils.jsx';
import { save, update, fetch, remove, prepare } from '../RestUtils/RESTUtils.jsx';

class ProductService {

    getProduct(){
        const url = PRODUCT_URL;
        const prom = prepare(url)()(fetch);
        prom.then(resp => ProductActions.loadProducts(resp));
    }
    saveProduct(data){
    	const url = PRODUCT_URL;
        const prom = prepare(url)(JSON.stringify(data))(save);
        prom.then(resp => ProductActions.saveProduct(resp));
    }
    updateProduct(data){
    	const url = PRODUCT_URL;
        const prom = prepare(url)(JSON.stringify(data))(update);
        prom.then(resp => ProductActions.saveProduct(resp));
    }

}

export default new ProductService();
