import axios from 'axios';
import when from 'when';

export default class RequestBuilder {

    constructor(method, url) {
        this._requestParams = {
            method,
            url
            // crossOrigin: true
        };
    }

    addHeader(headers) {
        this._requestParams.headers = headers;
        return this;
    }

    addType(type) {
        this._requestParams.type = type;
        return this;
    }

    addData(data) {
        if (this._requestParams.method === 'GET') {
            this._requestParams.params = data;
        } else {
            this._requestParams.data = data;
        }
        return this;
    }

    add(name, value) {
        this._requestParams[name] = value;
        return this;
    }

    static get(url) {
        return new RequestBuilder('GET', url);
    }

    static post(url) {
        return new RequestBuilder('POST', url);
    }

    static put(url) {
        return new RequestBuilder('PUT', url);
    }

    static delete(url) {
        return new RequestBuilder('DELETE', url);
    }

    build() {
        return (when(axios(this._requestParams)));
    }

};
