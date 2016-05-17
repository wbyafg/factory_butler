/* @flow weak */
import BaseStore from '../BaseStore.jsx';
import ProductService from '../Services/ProductServices.jsx';
class ProductStore extends BaseStore {

    constructor() {
        super();
        this.subscribe(() => this._registerToActions.bind(this));
	    this._products = null;
    }

    get products() {
	    return this._products;
    }
    _saveProducts(products){
        this._products = products;
    }

    _registerToActions(action) {
        switch(action.actionType) {
            case "LOAD_PRODUCTS":
                this._saveProducts(action.data);
                this.emitChange();
                break;
            case "SAVE_PRODUCT":
                ProductService.getProduct();
                break;
            default:
                break;
        };
    }
}

export default new ProductStore();
