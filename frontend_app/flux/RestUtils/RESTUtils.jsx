/* @flow weak */
/*
 * currying functions to do server calls
 */
import Cookies from 'js-cookie';
import RequestBuilder from './RequestBuilder.jsx';
import {toCamelCase, toSnakeCase} from './ObjectUtils.jsx';

var buildHeader = () => {
    var jwtToken = Cookies.get('af-jwt');

    if (jwtToken) {
        return {
            'X-CSRFToken': Cookies.get('csrftoken'),
            'Authorization': 'JWT ' + jwtToken,
            'Content-Type': 'application/json'
        };
    } else {
        return {
            'X-CSRFToken': Cookies.get('csrftoken'),
            'Content-Type': 'application/json'
        };
    }
};

var _buildRequest = url => data => request =>
	request(url).
	addHeader(buildHeader()).
        addType('json').
        add('CrossOrigin', true).
        addData(data).
        build().then(response => response.data);

var save = RequestBuilder.post;
var update = RequestBuilder.put;
var fetch = RequestBuilder.get;
var remove = RequestBuilder.delete;

var prepare = url => _buildRequest(url);

var convertAndPrepare  = url => data => request => {
    var dataStr = JSON.stringify(toSnakeCase(data));
    return _buildRequest(url)(dataStr)(request).
                              then(resp => toCamelCase(resp));
};

export default {
    save, update, fetch, remove, prepare, convertAndPrepare
};
