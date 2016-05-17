/* @flow weak */

import _ from 'lodash';

// recursively modify the keys of a plain object
var traversal = conversion => { //Currying
    return instance => {
        if (_.isPlainObject(instance)) {
	    return _(instance).
		mapValues(value => traversal(conversion)(value)).
		mapKeys((value, key) => conversion(key)).
		value();
	} else if (_.isArray(instance)) {
	    return _.map(instance, traversal(conversion));
	} else {
	    return instance;
	}
    };
};

// recursively modify the values of a plain object
var recModifyValue = conversion => data => {
    if (_.isPlainObject(data)) {
	return _(data).
	    mapValues(value => recModifyValue(conversion)(value)).
	    value();
    } else if (_.isArray(data)) {
	return _.map(data, recModifyValue(conversion));
    } else {
	return conversion(data);
    }
};

var toCamelCase = traversal(_.camelCase);
var toSnakeCase = traversal(_.snakeCase);
var removeNulls = recModifyValue(val => val==null?{}:val);

var testArray = [{"id":8,"key":7,"sort":-6,"customization":{"config":{"header":{"col2":"Price","col3":"Change","col1_sth":"Name"}},"cd_widget":1,"title":"Financial Data","path":"widgets/financial_data/","component":"FinancialDataWidget","main_component":""},"json_data":null},{"id":7,"key":6,"sort":-7,"customization":{"config":{"header":{"col2_sth":"Price","col3":"Change","col1":"Name"}},"cd_widget":1,"title":"Financial Data","path":"widgets/financial_data/","component":"FinancialDataWidget","main_component":""},"json_data":null}];

var test = () => console.log(toCamelCase(testArray));


export default {
    toCamelCase,
    toSnakeCase,
    removeNulls,
    test
};
