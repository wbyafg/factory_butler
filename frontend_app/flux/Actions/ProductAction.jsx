/* @flow weak */
import AppDispatcher from '../AppDispatcher.js';

export default {
	loadProducts: (data) => {
		var actionType = "LOAD_PRODUCTS";
		AppDispatcher.dispatch({
		    actionType,
	            data
		});
    },
    saveProduct: (data) => {
		var actionType = "SAVE_PRODUCT";
		AppDispatcher.dispatch({
		    actionType,
	            data
		});
    },
};
