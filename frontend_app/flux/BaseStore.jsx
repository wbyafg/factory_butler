import { EventEmitter } from 'events';
import log from 'loglevel';

import AppDispatcher from './AppDispatcher.js';

export default class BaseStore extends EventEmitter {

    constructor() {
        super();

        this.currentObjectId = -1;
        this.setMaxListeners(200);

        this.objects = [];
        this.currentObject = {};
        
        // this.pagesExpanded = [];
        this.curPaginationNum;
        this.paginationSize;
        this.storedPagination = [];
        this.paginationCount;
        this.count;

        this.searchKeyword;
        this.searchResults = [];
        this.searchCurPaginationNum;
        this.searchStoredPagination = [];
        this.searchPaginationCount;
        this.searchCount;
    }
    getCount() {
        return this.count;
    }
    getSearchCount() {
        return this.searchCount;
    }
    getCurrentObjectId() {
        return this.currentObjectId;
    }
    getObjects() {
        return this.objects;
    }
    subscribe(actionSubscribe) {
        // console.log(this.constructor.name + ' - subscribe to the dispatcher');
        try {
          if (actionSubscribe()) this._dispatchToken = AppDispatcher.register(actionSubscribe());
        } catch (e) {
            console.error(e.stack);
        }
    }

    get dispatchToken() {
        // console.log(this.constructor.name + ' - dispatchToken');
        return this._dispatchToken;
    }

    emitChange() {
        // console.log(this.constructor.name + ' - emitChange', this._events);
        this.emit('CHANGE');
    }

    addChangeListener(cb) {
        // log.info(this.constructor.name + ' - addChangeListener ', cb);
        this.on('CHANGE', cb);
    }

    removeChangeListener(cb) {
        // console.info(this.constructor.name + ' - removeChangeListener', cb);
        this.removeListener('CHANGE', cb);
    }

    getObjectsPaginated(pageNum) {
        console.info(this.constructor.name + ' >>> getObjectsPaginated - '+pageNum);
        if (this.storedPagination.indexOf(pageNum) > -1) {
            // console.info('page stored');
            var start = (pageNum -1 ) * this.paginationSize;
            var end = pageNum * this.paginationSize;
            return this.objects.slice(start, end);
        } else return null;
    }
    getSearchResultsPaginated(pageNum) {
        console.info(this.constructor.name + ' >>> getSearchResultsPaginated - '+pageNum);
        if (this.searchStoredPagination.indexOf(pageNum) > -1) {
            // console.info('page stored');
            var start = (pageNum -1 ) * this.paginationSize;
            var end = pageNum * this.paginationSize;
            return this.searchResults.slice(start, end);
        } else return null;
    }


    getCurPaginationNum() {
        return this.curPaginationNum;
    }
    getPaginationSize() {
        return this.paginationSize;
    }
    getStoredPagination() {
        return this.storedPagination;
    }
    getPaginationCount() {
        return this.paginationCount;
    }
    getSearchPaginationCount() {
        return this.searchPaginationCount;
    }
    getCurrentObject() {
        return this.currentObject;
    }
    getSearchResults() {
        return this.searchResults;
    }
    appendSearchResults(results) {
        this.searchResults = this.searchResults.concat(results);
        this.searchStoredPagination.push(this.searchCurPaginationNum);
    }
    processFetchedObjects(action) {
        this.paginationSize = action.pageSize;

        // var results = action.data.results;
        if (action.keyword) {
            this.processSearchResults(action);
        } else this.processObjects(action);
    }
    processSearchResults(action) {
        try {
            console.log('paginated response for search');
            this.searchCount = action.data.count;
            this.searchPaginationCount = Math.ceil(action.data.count / action.pageSize);
            if (!this.searchKeyword || this.searchKeyword !== action.keyword) {
                console.info('reset the search results');
                this.searchKeyword = action.keyword;
                this.searchResults = [];
                this.searchStoredPagination = [];
                this.searchCurPaginationNum = 1;

                this.appendSearchResults(action.data.results);
            }
            else {
                console.warn('same keyword!');
                this.searchCurPaginationNum = action.currentPage;
                console.info('current pagination number is is '+this.searchCurPaginationNum);
                if (this.searchStoredPagination.indexOf(this.searchCurPaginationNum) > -1) {
                    console.warn('pagination number', this.searchCurPaginationNum, ' already stored, updating');
                    var newObjects = action.data.results;
                    var start = (this.searchCurPaginationNum -1 ) * this.paginationSize;
                    var end = this.searchCurPaginationNum * this.paginationSize;
                    for (var i=0; i < action.data.results.length; i++) {
                        this.searchResults[start+i] =  action.data.results[i];
                    }
                } else {
                    this.appendSearchResults(action.data.results);
                }
            }

            this.emitChange();
        } catch (e) {
            console.error(e.stack);
        }
    }
    processObjects(action) {
        console.log('processObjects');
        try {
            this.count = action.data.count;
            this.paginationCount = Math.ceil(action.data.count / action.pageSize);
            this.curPaginationNum = action.currentPage;
            console.info('current pagination number is is '+this.curPaginationNum);
            if (this.storedPagination.indexOf(this.curPaginationNum) > -1) {
                console.warn('pagination number', this.curPaginationNum, ' already loaded, updating');
                var newObjects = action.data.results;
                var start = (this.curPaginationNum -1 ) * this.paginationSize;
                var end = this.curPaginationNum * this.paginationSize;
                for (var i=0; i < action.data.results.length; i++) {
                    this.objects[start+i] =  action.data.results[i];
                }
            } else {
                this.objects = this.objects.concat(action.data.results);
                console.info('page objects now are ', this.objects);
                this.storedPagination.push(this.curPaginationNum);
                console.log('stored objects are', this.storedPagination);
            }
            this.emitChange();
        } catch (e) {
            console.error(e.stack);
        }
    }
    processSingleObject(action) {
        this.currentObject = action.data;
        this.emitChange();
    }
}

// function executeCallback(cb) {
//     console.info('executeCallback');
//     try {
//         return cb;
//     } catch (e) {
//         console.error(e.stack);
//         return printHelloWorld;
//     }
// }
// function printHelloWorld() {
//     // console.log('printHelloWorld');
// }
