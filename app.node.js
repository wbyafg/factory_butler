module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactDom = __webpack_require__(46);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _fbjsLibExecutionEnvironment = __webpack_require__(18);

  var _coreLocation = __webpack_require__(14);

  var _coreLocation2 = _interopRequireDefault(_coreLocation);

  var _componentsLayout = __webpack_require__(21);

  var _componentsLayout2 = _interopRequireDefault(_componentsLayout);

  var routes = {
    '/404': function _() {
      return __webpack_require__(28);
    }, '/500': function _() {
      return __webpack_require__(29);
    }, '/': function _() {
      return __webpack_require__(30);
    }, '/ingredients': function ingredients() {
      return __webpack_require__(31);
    }, '/product/ProductModal': function productProductModal() {
      return __webpack_require__(16);
    }, '/products': function products() {
      return __webpack_require__(32);
    }, '/sauce': function sauce() {
      return __webpack_require__(33);
    }, '/sauce/SauceModal': function sauceSauceModal() {
      return __webpack_require__(17);
    } }; // Auto-generated on build. See tools/lib/routes-loader.js

  var route = function route(path, callback) {
    var handler, component;
    return regeneratorRuntime.async(function route$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          handler = routes[path] || routes['/404'];
          context$1$0.next = 3;
          return regeneratorRuntime.awrap(handler());

        case 3:
          component = context$1$0.sent;
          context$1$0.next = 6;
          return regeneratorRuntime.awrap(callback(_react2['default'].createElement(
            _componentsLayout2['default'],
            null,
            _react2['default'].createElement(component)
          )));

        case 6:
        case 'end':
          return context$1$0.stop();
      }
    }, null, _this);
  };

  function run() {
    var _this2 = this;

    var container = document.getElementById('app');
    _coreLocation2['default'].listen(function (location) {
      route(location.pathname, function callee$2$0(component) {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              return context$3$0.abrupt('return', _reactDom2['default'].render(component, container, function () {
                // Track the page view event via Google Analytics
                window.ga('send', 'pageview');
              }));

            case 1:
            case 'end':
              return context$3$0.stop();
          }
        }, null, _this2);
      });
    });
  }

  if (_fbjsLibExecutionEnvironment.canUseDOM) {
    // Run the application when both DOM is ready and page content is loaded
    if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
      run();
    } else {
      document.addEventListener('DOMContentLoaded', run, false);
    }
  }

  exports['default'] = { route: route, routes: routes };
  module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

  module.exports = require("react-bootstrap-table");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _flux = __webpack_require__(39);

  var dispatcher = new _flux.Dispatcher({
    logLevel: 'ALL'
  });

  exports['default'] = dispatcher;
  module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

  /*  weak */

  "use strict";

  Object.defineProperty(exports, "__esModule", {
  				value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _lodash = __webpack_require__(44);

  var _lodash2 = _interopRequireDefault(_lodash);

  // recursively modify the keys of a plain object
  var traversal = function traversal(conversion) {
  				//Currying
  				return function (instance) {
  								if (_lodash2["default"].isPlainObject(instance)) {
  												return (0, _lodash2["default"])(instance).mapValues(function (value) {
  																return traversal(conversion)(value);
  												}).mapKeys(function (value, key) {
  																return conversion(key);
  												}).value();
  								} else if (_lodash2["default"].isArray(instance)) {
  												return _lodash2["default"].map(instance, traversal(conversion));
  								} else {
  												return instance;
  								}
  				};
  };

  // recursively modify the values of a plain object
  var recModifyValue = function recModifyValue(conversion) {
  				return function (data) {
  								if (_lodash2["default"].isPlainObject(data)) {
  												return (0, _lodash2["default"])(data).mapValues(function (value) {
  																return recModifyValue(conversion)(value);
  												}).value();
  								} else if (_lodash2["default"].isArray(data)) {
  												return _lodash2["default"].map(data, recModifyValue(conversion));
  								} else {
  												return conversion(data);
  								}
  				};
  };

  var toCamelCase = traversal(_lodash2["default"].camelCase);
  var toSnakeCase = traversal(_lodash2["default"].snakeCase);
  var removeNulls = recModifyValue(function (val) {
  				return val == null ? {} : val;
  });

  var testArray = [{ "id": 8, "key": 7, "sort": -6, "customization": { "config": { "header": { "col2": "Price", "col3": "Change", "col1_sth": "Name" } }, "cd_widget": 1, "title": "Financial Data", "path": "widgets/financial_data/", "component": "FinancialDataWidget", "main_component": "" }, "json_data": null }, { "id": 7, "key": 6, "sort": -7, "customization": { "config": { "header": { "col2_sth": "Price", "col3": "Change", "col1": "Name" } }, "cd_widget": 1, "title": "Financial Data", "path": "widgets/financial_data/", "component": "FinancialDataWidget", "main_component": "" }, "json_data": null }];

  var test = function test() {
  				return console.log(toCamelCase(testArray));
  };

  exports["default"] = {
  				toCamelCase: toCamelCase,
  				toSnakeCase: toSnakeCase,
  				removeNulls: removeNulls,
  				test: test
  };
  module.exports = exports["default"];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

  /**
   *  weak
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
      value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _ActionsIngredientActionJs = __webpack_require__(24);

  var _ActionsIngredientActionJs2 = _interopRequireDefault(_ActionsIngredientActionJs);

  var _ConstantsBackendServerConfigJs = __webpack_require__(8);

  var _RestUtilsObjectUtilsJsx = __webpack_require__(4);

  var _RestUtilsRESTUtilsJsx = __webpack_require__(9);

  var IngredientService = (function () {
      function IngredientService() {
          _classCallCheck(this, IngredientService);
      }

      _createClass(IngredientService, [{
          key: 'getIngredient',
          value: function getIngredient() {
              var url = _ConstantsBackendServerConfigJs.INGREDIENT_URL;
              var prom = (0, _RestUtilsRESTUtilsJsx.prepare)(url)()(_RestUtilsRESTUtilsJsx.fetch);
              prom.then(function (resp) {
                  return _ActionsIngredientActionJs2['default'].loadIngredient(resp);
              });
          }
      }, {
          key: 'saveIngredient',
          value: function saveIngredient(data) {
              var url = _ConstantsBackendServerConfigJs.INGREDIENT_URL;
              var prom = (0, _RestUtilsRESTUtilsJsx.prepare)(url)(JSON.stringify(data))(_RestUtilsRESTUtilsJsx.save);
              prom.then(function (resp) {
                  return _ActionsIngredientActionJs2['default'].saveIngredient(resp);
              });
          }
      }, {
          key: 'updateIngredient',
          value: function updateIngredient(data) {
              var url = _ConstantsBackendServerConfigJs.INGREDIENT_URL;
              var prom = (0, _RestUtilsRESTUtilsJsx.prepare)(url)(JSON.stringify(data))(_RestUtilsRESTUtilsJsx.update);
              prom.then(function (resp) {
                  return _ActionsIngredientActionJs2['default'].saveIngredient(resp);
              });
          }
      }]);

      return IngredientService;
  })();

  exports['default'] = new IngredientService();
  module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

  /**
   *  weak
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
      value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _ActionsSauceActionJs = __webpack_require__(26);

  var _ActionsSauceActionJs2 = _interopRequireDefault(_ActionsSauceActionJs);

  var _ConstantsBackendServerConfigJs = __webpack_require__(8);

  var _RestUtilsObjectUtilsJsx = __webpack_require__(4);

  var _RestUtilsRESTUtilsJsx = __webpack_require__(9);

  var SauceService = (function () {
      function SauceService() {
          _classCallCheck(this, SauceService);
      }

      _createClass(SauceService, [{
          key: 'getSauce',
          value: function getSauce() {
              var url = _ConstantsBackendServerConfigJs.SAUCE_URL;
              var prom = (0, _RestUtilsRESTUtilsJsx.prepare)(url)()(_RestUtilsRESTUtilsJsx.fetch);
              prom.then(function (resp) {
                  return _ActionsSauceActionJs2['default'].loadSauce(resp);
              });
          }
      }, {
          key: 'getSauceIngredient',
          value: function getSauceIngredient(sauceId) {
              var url = _ConstantsBackendServerConfigJs.SAUCE_INGREDIENT_URL + ('?sauce=' + sauceId);
              var prom = (0, _RestUtilsRESTUtilsJsx.prepare)(url)()(_RestUtilsRESTUtilsJsx.fetch);
              prom.then(function (resp) {
                  return _ActionsSauceActionJs2['default'].loadSauceIngredient(resp);
              });
          }
      }, {
          key: 'saveSauce',
          value: function saveSauce(data) {
              var url = _ConstantsBackendServerConfigJs.SAUCE_URL;
              var prom = (0, _RestUtilsRESTUtilsJsx.prepare)(url)(JSON.stringify(data))(_RestUtilsRESTUtilsJsx.save);
              prom.then(function (resp) {
                  return _ActionsSauceActionJs2['default'].saveSauce(resp);
              });
          }
      }, {
          key: 'updateSauce',
          value: function updateSauce(data) {
              var url = _ConstantsBackendServerConfigJs.SAUCE_URL;
              var prom = (0, _RestUtilsRESTUtilsJsx.prepare)(url)(JSON.stringify(data))(_RestUtilsRESTUtilsJsx.update);
              prom.then(function (resp) {
                  return _ActionsSauceActionJs2['default'].saveSauce(resp);
              });
          }
      }, {
          key: 'addSauceIngredient',
          value: function addSauceIngredient(data) {
              var url = _ConstantsBackendServerConfigJs.SAUCE_INGREDIENT_URL;
              var prom = (0, _RestUtilsRESTUtilsJsx.prepare)(url)(JSON.stringify(data))(_RestUtilsRESTUtilsJsx.save);
              prom.then(function (resp) {
                  return _ActionsSauceActionJs2['default'].addSauceIngredient(resp);
              });
          }
      }, {
          key: 'updateSauceIngredient',
          value: function updateSauceIngredient(data) {
              var url = _ConstantsBackendServerConfigJs.SAUCE_INGREDIENT_URL;
              var prom = (0, _RestUtilsRESTUtilsJsx.prepare)(url)(JSON.stringify(data))(_RestUtilsRESTUtilsJsx.update);
              prom.then(function (resp) {
                  return _ActionsSauceActionJs2['default'].updateSauceIngredient(resp);
              });
          }
      }]);

      return SauceService;
  })();

  exports['default'] = new SauceService();
  module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
      value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _events = __webpack_require__(38);

  var _loglevel = __webpack_require__(45);

  var _loglevel2 = _interopRequireDefault(_loglevel);

  var _AppDispatcherJs = __webpack_require__(3);

  var _AppDispatcherJs2 = _interopRequireDefault(_AppDispatcherJs);

  var BaseStore = (function (_EventEmitter) {
      _inherits(BaseStore, _EventEmitter);

      function BaseStore() {
          _classCallCheck(this, BaseStore);

          _get(Object.getPrototypeOf(BaseStore.prototype), 'constructor', this).call(this);

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

      _createClass(BaseStore, [{
          key: 'getCount',
          value: function getCount() {
              return this.count;
          }
      }, {
          key: 'getSearchCount',
          value: function getSearchCount() {
              return this.searchCount;
          }
      }, {
          key: 'getCurrentObjectId',
          value: function getCurrentObjectId() {
              return this.currentObjectId;
          }
      }, {
          key: 'getObjects',
          value: function getObjects() {
              return this.objects;
          }
      }, {
          key: 'subscribe',
          value: function subscribe(actionSubscribe) {
              // console.log(this.constructor.name + ' - subscribe to the dispatcher');
              try {
                  if (actionSubscribe()) this._dispatchToken = _AppDispatcherJs2['default'].register(actionSubscribe());
              } catch (e) {
                  console.error(e.stack);
              }
          }
      }, {
          key: 'emitChange',
          value: function emitChange() {
              // console.log(this.constructor.name + ' - emitChange', this._events);
              this.emit('CHANGE');
          }
      }, {
          key: 'addChangeListener',
          value: function addChangeListener(cb) {
              // log.info(this.constructor.name + ' - addChangeListener ', cb);
              this.on('CHANGE', cb);
          }
      }, {
          key: 'removeChangeListener',
          value: function removeChangeListener(cb) {
              // console.info(this.constructor.name + ' - removeChangeListener', cb);
              this.removeListener('CHANGE', cb);
          }
      }, {
          key: 'getObjectsPaginated',
          value: function getObjectsPaginated(pageNum) {
              console.info(this.constructor.name + ' >>> getObjectsPaginated - ' + pageNum);
              if (this.storedPagination.indexOf(pageNum) > -1) {
                  // console.info('page stored');
                  var start = (pageNum - 1) * this.paginationSize;
                  var end = pageNum * this.paginationSize;
                  return this.objects.slice(start, end);
              } else return null;
          }
      }, {
          key: 'getSearchResultsPaginated',
          value: function getSearchResultsPaginated(pageNum) {
              console.info(this.constructor.name + ' >>> getSearchResultsPaginated - ' + pageNum);
              if (this.searchStoredPagination.indexOf(pageNum) > -1) {
                  // console.info('page stored');
                  var start = (pageNum - 1) * this.paginationSize;
                  var end = pageNum * this.paginationSize;
                  return this.searchResults.slice(start, end);
              } else return null;
          }
      }, {
          key: 'getCurPaginationNum',
          value: function getCurPaginationNum() {
              return this.curPaginationNum;
          }
      }, {
          key: 'getPaginationSize',
          value: function getPaginationSize() {
              return this.paginationSize;
          }
      }, {
          key: 'getStoredPagination',
          value: function getStoredPagination() {
              return this.storedPagination;
          }
      }, {
          key: 'getPaginationCount',
          value: function getPaginationCount() {
              return this.paginationCount;
          }
      }, {
          key: 'getSearchPaginationCount',
          value: function getSearchPaginationCount() {
              return this.searchPaginationCount;
          }
      }, {
          key: 'getCurrentObject',
          value: function getCurrentObject() {
              return this.currentObject;
          }
      }, {
          key: 'getSearchResults',
          value: function getSearchResults() {
              return this.searchResults;
          }
      }, {
          key: 'appendSearchResults',
          value: function appendSearchResults(results) {
              this.searchResults = this.searchResults.concat(results);
              this.searchStoredPagination.push(this.searchCurPaginationNum);
          }
      }, {
          key: 'processFetchedObjects',
          value: function processFetchedObjects(action) {
              this.paginationSize = action.pageSize;

              // var results = action.data.results;
              if (action.keyword) {
                  this.processSearchResults(action);
              } else this.processObjects(action);
          }
      }, {
          key: 'processSearchResults',
          value: function processSearchResults(action) {
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
                  } else {
                      console.warn('same keyword!');
                      this.searchCurPaginationNum = action.currentPage;
                      console.info('current pagination number is is ' + this.searchCurPaginationNum);
                      if (this.searchStoredPagination.indexOf(this.searchCurPaginationNum) > -1) {
                          console.warn('pagination number', this.searchCurPaginationNum, ' already stored, updating');
                          var newObjects = action.data.results;
                          var start = (this.searchCurPaginationNum - 1) * this.paginationSize;
                          var end = this.searchCurPaginationNum * this.paginationSize;
                          for (var i = 0; i < action.data.results.length; i++) {
                              this.searchResults[start + i] = action.data.results[i];
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
      }, {
          key: 'processObjects',
          value: function processObjects(action) {
              console.log('processObjects');
              try {
                  this.count = action.data.count;
                  this.paginationCount = Math.ceil(action.data.count / action.pageSize);
                  this.curPaginationNum = action.currentPage;
                  console.info('current pagination number is is ' + this.curPaginationNum);
                  if (this.storedPagination.indexOf(this.curPaginationNum) > -1) {
                      console.warn('pagination number', this.curPaginationNum, ' already loaded, updating');
                      var newObjects = action.data.results;
                      var start = (this.curPaginationNum - 1) * this.paginationSize;
                      var end = this.curPaginationNum * this.paginationSize;
                      for (var i = 0; i < action.data.results.length; i++) {
                          this.objects[start + i] = action.data.results[i];
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
      }, {
          key: 'processSingleObject',
          value: function processSingleObject(action) {
              this.currentObject = action.data;
              this.emitChange();
          }
      }, {
          key: 'dispatchToken',
          get: function get() {
              // console.log(this.constructor.name + ' - dispatchToken');
              return this._dispatchToken;
          }
      }]);

      return BaseStore;
  })(_events.EventEmitter);

  exports['default'] = BaseStore;
  module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
  	value: true
  });
  var BACKEND_URL_DEV = "http://127.0.0.1:8000";

  exports["default"] = {
  	PRODUCT_URL: BACKEND_URL_DEV + "/inventory/products",
  	INGREDIENT_URL: BACKEND_URL_DEV + "/inventory/ingredients",
  	SAUCE_URL: BACKEND_URL_DEV + "/inventory/sauce",
  	SAUCE_INGREDIENT_URL: BACKEND_URL_DEV + "/inventory/sauce-ingredient",
  	PRODUCT_INGREDIENT_URL: BACKEND_URL_DEV + "/inventory/product-ingredient",
  	PRODUCT_SAUCE_URL: BACKEND_URL_DEV + "/inventory/product-sauce"
  };
  module.exports = exports["default"];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

  /*  weak */
  /*
   * currying functions to do server calls
   */
  'use strict';

  Object.defineProperty(exports, '__esModule', {
      value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _jsCookie = __webpack_require__(43);

  var _jsCookie2 = _interopRequireDefault(_jsCookie);

  var _RequestBuilderJsx = __webpack_require__(27);

  var _RequestBuilderJsx2 = _interopRequireDefault(_RequestBuilderJsx);

  var _ObjectUtilsJsx = __webpack_require__(4);

  var buildHeader = function buildHeader() {
      var jwtToken = _jsCookie2['default'].get('af-jwt');

      if (jwtToken) {
          return {
              'X-CSRFToken': _jsCookie2['default'].get('csrftoken'),
              'Authorization': 'JWT ' + jwtToken,
              'Content-Type': 'application/json'
          };
      } else {
          return {
              'X-CSRFToken': _jsCookie2['default'].get('csrftoken'),
              'Content-Type': 'application/json'
          };
      }
  };

  var _buildRequest = function _buildRequest(url) {
      return function (data) {
          return function (request) {
              return request(url).addHeader(buildHeader()).addType('json').add('CrossOrigin', true).addData(data).build().then(function (response) {
                  return response.data;
              });
          };
      };
  };

  var save = _RequestBuilderJsx2['default'].post;
  var update = _RequestBuilderJsx2['default'].put;
  var fetch = _RequestBuilderJsx2['default'].get;
  var remove = _RequestBuilderJsx2['default']['delete'];

  var prepare = function prepare(url) {
      return _buildRequest(url);
  };

  var convertAndPrepare = function convertAndPrepare(url) {
      return function (data) {
          return function (request) {
              var dataStr = JSON.stringify((0, _ObjectUtilsJsx.toSnakeCase)(data));
              return _buildRequest(url)(dataStr)(request).then(function (resp) {
                  return (0, _ObjectUtilsJsx.toCamelCase)(resp);
              });
          };
      };
  };

  exports['default'] = {
      save: save, update: update, fetch: fetch, remove: remove, prepare: prepare, convertAndPrepare: convertAndPrepare
  };
  module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

  /**
   *  weak
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
      value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _ActionsProductActionJs = __webpack_require__(25);

  var _ActionsProductActionJs2 = _interopRequireDefault(_ActionsProductActionJs);

  var _ConstantsBackendServerConfigJs = __webpack_require__(8);

  var _RestUtilsObjectUtilsJsx = __webpack_require__(4);

  var _RestUtilsRESTUtilsJsx = __webpack_require__(9);

  var ProductService = (function () {
      function ProductService() {
          _classCallCheck(this, ProductService);
      }

      _createClass(ProductService, [{
          key: 'getProduct',
          value: function getProduct() {
              var url = _ConstantsBackendServerConfigJs.PRODUCT_URL;
              var prom = (0, _RestUtilsRESTUtilsJsx.prepare)(url)()(_RestUtilsRESTUtilsJsx.fetch);
              prom.then(function (resp) {
                  return _ActionsProductActionJs2['default'].loadProducts(resp);
              });
          }
      }, {
          key: 'saveProduct',
          value: function saveProduct(data) {
              var url = _ConstantsBackendServerConfigJs.PRODUCT_URL;
              var prom = (0, _RestUtilsRESTUtilsJsx.prepare)(url)(JSON.stringify(data))(_RestUtilsRESTUtilsJsx.save);
              prom.then(function (resp) {
                  return _ActionsProductActionJs2['default'].saveProduct(resp);
              });
          }
      }, {
          key: 'updateProduct',
          value: function updateProduct(data) {
              var url = _ConstantsBackendServerConfigJs.PRODUCT_URL;
              var prom = (0, _RestUtilsRESTUtilsJsx.prepare)(url)(JSON.stringify(data))(_RestUtilsRESTUtilsJsx.update);
              prom.then(function (resp) {
                  return _ActionsProductActionJs2['default'].saveProduct(resp);
              });
          }
      }, {
          key: 'getProductIngredient',
          value: function getProductIngredient(productId) {
              var url = _ConstantsBackendServerConfigJs.PRODUCT_INGREDIENT_URL + ('?product=' + productId);
              var prom = (0, _RestUtilsRESTUtilsJsx.prepare)(url)()(_RestUtilsRESTUtilsJsx.fetch);
              prom.then(function (resp) {
                  return _ActionsProductActionJs2['default'].loadProductIngredient(resp);
              });
          }
      }, {
          key: 'addProductIngredient',
          value: function addProductIngredient(data) {
              var url = _ConstantsBackendServerConfigJs.PRODUCT_INGREDIENT_URL;
              var prom = (0, _RestUtilsRESTUtilsJsx.prepare)(url)(JSON.stringify(data))(_RestUtilsRESTUtilsJsx.save);
              prom.then(function (resp) {
                  return _ActionsProductActionJs2['default'].addProductIngredient(resp);
              });
          }
      }, {
          key: 'updateProductIngredient',
          value: function updateProductIngredient(data) {
              var url = _ConstantsBackendServerConfigJs.PRODUCT_INGREDIENT_URL;
              var prom = (0, _RestUtilsRESTUtilsJsx.prepare)(url)(JSON.stringify(data))(_RestUtilsRESTUtilsJsx.update);
              prom.then(function (resp) {
                  return _ActionsProductActionJs2['default'].updateProductIngredient(resp);
              });
          }
      }, {
          key: 'getProductSauce',
          value: function getProductSauce(productId) {
              var url = _ConstantsBackendServerConfigJs.PRODUCT_SAUCE_URL + ('?product=' + productId);
              var prom = (0, _RestUtilsRESTUtilsJsx.prepare)(url)()(_RestUtilsRESTUtilsJsx.fetch);
              prom.then(function (resp) {
                  return _ActionsProductActionJs2['default'].loadProductSauce(resp);
              });
          }
      }, {
          key: 'addProductSauce',
          value: function addProductSauce(data) {
              var url = _ConstantsBackendServerConfigJs.PRODUCT_SAUCE_URL;
              var prom = (0, _RestUtilsRESTUtilsJsx.prepare)(url)(JSON.stringify(data))(_RestUtilsRESTUtilsJsx.save);
              prom.then(function (resp) {
                  return _ActionsProductActionJs2['default'].addProductSauce(resp);
              });
          }
      }, {
          key: 'updateProductSauce',
          value: function updateProductSauce(data) {
              var url = _ConstantsBackendServerConfigJs.PRODUCT_SAUCE_URL;
              var prom = (0, _RestUtilsRESTUtilsJsx.prepare)(url)(JSON.stringify(data))(_RestUtilsRESTUtilsJsx.update);
              prom.then(function (resp) {
                  return _ActionsProductActionJs2['default'].updateProductSauce(resp);
              });
          }
      }]);

      return ProductService;
  })();

  exports['default'] = new ProductService();
  module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  /*  weak */
  'use strict';

  Object.defineProperty(exports, '__esModule', {
      value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _BaseStoreJsx = __webpack_require__(7);

  var _BaseStoreJsx2 = _interopRequireDefault(_BaseStoreJsx);

  var _ServicesIngredientServicesJs = __webpack_require__(5);

  var _ServicesIngredientServicesJs2 = _interopRequireDefault(_ServicesIngredientServicesJs);

  var IngredientStore = (function (_BaseStore) {
      _inherits(IngredientStore, _BaseStore);

      function IngredientStore() {
          var _this = this;

          _classCallCheck(this, IngredientStore);

          _get(Object.getPrototypeOf(IngredientStore.prototype), 'constructor', this).call(this);
          this.subscribe(function () {
              return _this._registerToActions.bind(_this);
          });
          this._ingredients = null;
      }

      _createClass(IngredientStore, [{
          key: '_saveIngredients',
          value: function _saveIngredients(ingredients) {
              this._ingredients = ingredients;
          }
      }, {
          key: '_registerToActions',
          value: function _registerToActions(action) {
              switch (action.actionType) {
                  case "LOAD_INGREDIENT":
                      console.log('data', typeof action.data);
                      this._saveIngredients(action.data);
                      this.emitChange();
                      break;
                  case "SAVE_INGREDIENT":
                      _ServicesIngredientServicesJs2['default'].getIngredient();
                      this.emitChange();
                      break;
                  default:
                      break;
              };
          }
      }, {
          key: 'ingredients',
          get: function get() {
              return this._ingredients;
          }
      }]);

      return IngredientStore;
  })(_BaseStoreJsx2['default']);

  exports['default'] = new IngredientStore();
  module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

  /*  weak */
  'use strict';

  Object.defineProperty(exports, '__esModule', {
      value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _BaseStoreJsx = __webpack_require__(7);

  var _BaseStoreJsx2 = _interopRequireDefault(_BaseStoreJsx);

  var _ServicesSauceServicesJs = __webpack_require__(6);

  var _ServicesSauceServicesJs2 = _interopRequireDefault(_ServicesSauceServicesJs);

  var SauceStore = (function (_BaseStore) {
      _inherits(SauceStore, _BaseStore);

      function SauceStore() {
          var _this = this;

          _classCallCheck(this, SauceStore);

          _get(Object.getPrototypeOf(SauceStore.prototype), 'constructor', this).call(this);
          this.subscribe(function () {
              return _this._registerToActions.bind(_this);
          });
          this._sauce = null;
          this._sauceIngredient = null;
      }

      _createClass(SauceStore, [{
          key: '_saveSauce',
          value: function _saveSauce(sauce) {
              this._sauce = sauce;
          }
      }, {
          key: '_saveSauceIngredient',
          value: function _saveSauceIngredient(sauceIngredient) {
              this._sauceIngredient = sauceIngredient;
          }
      }, {
          key: '_registerToActions',
          value: function _registerToActions(action) {
              switch (action.actionType) {
                  case "LOAD_SAUCE":
                      this._saveSauce(action.data);
                      this.emitChange();
                      break;
                  case "LOAD_SAUCE_INGREDIENT":
                      this._saveSauceIngredient(action.data);
                      this.emitChange();
                      break;
                  case "SAVE_SAUCE":
                      _ServicesSauceServicesJs2['default'].getSauce();
                      _ServicesSauceServicesJs2['default'].getSauceIngredient(action.data.sauce);
                      this.emitChange();
                      break;
                  case "ADD_SAUCE_INGREDIENT":
                      _ServicesSauceServicesJs2['default'].getSauceIngredient(action.data.sauce);
                      this.emitChange();
                      break;
                  case "UPDATE_SAUCE_INGREDIENT":
                      _ServicesSauceServicesJs2['default'].getSauce();
                      _ServicesSauceServicesJs2['default'].getSauceIngredient(action.data.sauce);
                      this.emitChange();
                      break;
                  default:
                      break;
              };
          }
      }, {
          key: 'sauce',
          get: function get() {
              return this._sauce;
          }
      }, {
          key: 'sauceIngredient',
          get: function get() {
              return this._sauceIngredient;
          }
      }]);

      return SauceStore;
  })(_BaseStoreJsx2['default']);

  exports['default'] = new SauceStore();
  module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];

  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};

  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _fbjsLibExecutionEnvironment = __webpack_require__(18);

  var _historyLibCreateBrowserHistory = __webpack_require__(40);

  var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

  var _historyLibCreateMemoryHistory = __webpack_require__(41);

  var _historyLibCreateMemoryHistory2 = _interopRequireDefault(_historyLibCreateMemoryHistory);

  var _historyLibUseQueries = __webpack_require__(42);

  var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

  var location = (0, _historyLibUseQueries2['default'])(_fbjsLibExecutionEnvironment.canUseDOM ? _historyLibCreateBrowserHistory2['default'] : _historyLibCreateMemoryHistory2['default'])();

  exports['default'] = location;
  module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

  /*  weak */
  'use strict';

  Object.defineProperty(exports, '__esModule', {
      value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _BaseStoreJsx = __webpack_require__(7);

  var _BaseStoreJsx2 = _interopRequireDefault(_BaseStoreJsx);

  var _ServicesProductServicesJs = __webpack_require__(10);

  var _ServicesProductServicesJs2 = _interopRequireDefault(_ServicesProductServicesJs);

  var ProductStore = (function (_BaseStore) {
      _inherits(ProductStore, _BaseStore);

      function ProductStore() {
          var _this = this;

          _classCallCheck(this, ProductStore);

          _get(Object.getPrototypeOf(ProductStore.prototype), 'constructor', this).call(this);
          this.subscribe(function () {
              return _this._registerToActions.bind(_this);
          });
          this._products = null;
          this._productIngredient = null;
          this._productSauce = null;
          this._total = 0;
      }

      _createClass(ProductStore, [{
          key: '_saveProducts',
          value: function _saveProducts(products) {
              this._products = products;
          }
      }, {
          key: '_saveProductIngredient',
          value: function _saveProductIngredient(productIngredient) {
              this._productIngredient = productIngredient;
          }
      }, {
          key: '_saveProductSauce',
          value: function _saveProductSauce(productSauce) {
              this._productSauce = productSauce;
          }
      }, {
          key: '_saveTotal',
          value: function _saveTotal(total) {
              this._total = total;
          }
      }, {
          key: '_registerToActions',
          value: function _registerToActions(action) {
              switch (action.actionType) {
                  case "LOAD_PRODUCTS":
                      this._saveProducts(action.data);
                      this.emitChange();
                      break;
                  case "SAVE_PRODUCT":
                      _ServicesProductServicesJs2['default'].getProduct();
                      this.emitChange();
                      break;
                  case "LOAD_PRODUCT_INGREDIENT":
                      this._saveProductIngredient(action.data);
                      this._saveTotal(action.data.total);
                      this.emitChange();
                      break;
                  case "ADD_PRODUCT_INGREDIENT":
                      _ServicesProductServicesJs2['default'].getProductIngredient(action.data.product);
                      this.emitChange();
                      break;
                  case "UPDATE_PRODUCT_INGREDIENT":
                      _ServicesProductServicesJs2['default'].getProduct();
                      _ServicesProductServicesJs2['default'].getProductIngredient(action.data.product);
                      this.emitChange();
                      break;
                  case "LOAD_PRODUCT_SAUCE":
                      this._saveProductSauce(action.data);
                      this._saveTotal(action.data.total);
                      this.emitChange();
                      break;
                  case "ADD_PRODUCT_SAUCE":
                      _ServicesProductServicesJs2['default'].getProductSauce(action.data.product);
                      this.emitChange();
                      break;
                  case "UPDATE_PRODUCT_SAUCE":
                      _ServicesProductServicesJs2['default'].getProduct();
                      _ServicesProductServicesJs2['default'].getProductSauce(action.data.product);
                      this.emitChange();
                      break;
                  default:
                      break;
              };
          }
      }, {
          key: 'products',
          get: function get() {
              return this._products;
          }
      }, {
          key: 'productIngredient',
          get: function get() {
              return this._productIngredient;
          }
      }, {
          key: 'productSauce',
          get: function get() {
              return this._productSauce;
          }
      }, {
          key: 'total',
          get: function get() {
              return this._total;
          }
      }]);

      return ProductStore;
  })(_BaseStoreJsx2['default']);

  exports['default'] = new ProductStore();
  module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactBootstrap = __webpack_require__(19);

  var _reactBootstrapTable = __webpack_require__(2);

  var _reactSelect = __webpack_require__(20);

  var _reactSelect2 = _interopRequireDefault(_reactSelect);

  var _fluxServicesIngredientServicesJs = __webpack_require__(5);

  var _fluxServicesIngredientServicesJs2 = _interopRequireDefault(_fluxServicesIngredientServicesJs);

  var _fluxStoresIngredientStoreJs = __webpack_require__(11);

  var _fluxStoresIngredientStoreJs2 = _interopRequireDefault(_fluxStoresIngredientStoreJs);

  var _fluxServicesSauceServicesJs = __webpack_require__(6);

  var _fluxServicesSauceServicesJs2 = _interopRequireDefault(_fluxServicesSauceServicesJs);

  var _fluxStoresSauceStoreJs = __webpack_require__(12);

  var _fluxStoresSauceStoreJs2 = _interopRequireDefault(_fluxStoresSauceStoreJs);

  var _fluxServicesProductServicesJs = __webpack_require__(10);

  var _fluxServicesProductServicesJs2 = _interopRequireDefault(_fluxServicesProductServicesJs);

  var _fluxStoresProductStoreJs = __webpack_require__(15);

  var _fluxStoresProductStoreJs2 = _interopRequireDefault(_fluxStoresProductStoreJs);

  var ProductModal = (function (_Component) {
    _inherits(ProductModal, _Component);

    function ProductModal(props, context) {
      _classCallCheck(this, ProductModal);

      _get(Object.getPrototypeOf(ProductModal.prototype), 'constructor', this).call(this, props, context);

      this.state = {
        showModal: false,
        ingredients: [],
        sauce: [],
        total: 0,
        productSauce: [],
        productIngredient: [],
        selectedIngredient: {}
      };
    }

    _createClass(ProductModal, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {

        var selectedProduct = nextProps.selectedProduct ? nextProps.selectedProduct : {};
        var selectedProductProps = this.props.selectedProduct ? this.props.selectedProduct : {};

        if (selectedProduct.id !== selectedProductProps.id) {
          _fluxServicesIngredientServicesJs2['default'].getIngredient();
          _fluxStoresIngredientStoreJs2['default'].addChangeListener(this.onIngredientStoreUpdate.bind(this));

          _fluxServicesSauceServicesJs2['default'].getSauce();
          _fluxStoresSauceStoreJs2['default'].addChangeListener(this.onSauceStoreUpdate.bind(this));

          _fluxServicesProductServicesJs2['default'].getProductIngredient(selectedProduct.id);
          _fluxServicesProductServicesJs2['default'].getProductSauce(selectedProduct.id);
          _fluxStoresProductStoreJs2['default'].addChangeListener(this.onProductStoreUpdated.bind(this));
        }
      }
    }, {
      key: 'onIngredientStoreUpdate',
      value: function onIngredientStoreUpdate() {
        this.setState({
          ingredients: _fluxStoresIngredientStoreJs2['default'].ingredients
        });
      }
    }, {
      key: 'onProductStoreUpdated',
      value: function onProductStoreUpdated() {
        this.setState({
          productIngredient: _fluxStoresProductStoreJs2['default'].productIngredient ? _fluxStoresProductStoreJs2['default'].productIngredient.ingredients : [],
          productSauce: _fluxStoresProductStoreJs2['default'].productSauce ? _fluxStoresProductStoreJs2['default'].productSauce.sauce : [],
          total: _fluxStoresProductStoreJs2['default'].total
        });
      }
    }, {
      key: 'onSauceStoreUpdate',
      value: function onSauceStoreUpdate() {
        this.setState({
          sauce: _fluxStoresSauceStoreJs2['default'].sauce
        });
      }
    }, {
      key: 'calculatePrice',
      value: function calculatePrice() {
        if (this.state.selectedIngredient.unit_price && this.state.ingredientUsage) {
          return parseFloat(this.state.selectedIngredient.unit_price) * parseFloat(this.state.ingredientUsage);
        }
        return '0';
      }
    }, {
      key: 'handleValueChange',
      value: function handleValueChange(name, e) {
        switch (name) {
          case 'selectedIngredient':
            this.state.selectedIngredient = e ? e : {};
            break;
          case 'ingredientUsage':
            this.state.ingredientUsage = e.target.value;
            break;
          default:
            break;
        }
        this.setState(this.state);
      }
    }, {
      key: 'isIngredient',
      value: function isIngredient(data) {
        if (data.weight_volume) {
          // is ingredient
          return true;
        }
        // is sauce
        return false;
      }
    }, {
      key: 'onCellEdited',
      value: function onCellEdited(row, cellName, cellValue) {
        var data = { id: row.id, usage: row.usage, product: row.product };
        if (this.isIngredient(row)) {
          _fluxServicesProductServicesJs2['default'].updateProductIngredient(data);
        } else {
          _fluxServicesProductServicesJs2['default'].updateProductSauce(data);
        }
      }
    }, {
      key: 'handleAddClicked',
      value: function handleAddClicked(e) {
        if (this.isIngredient(this.state.selectedIngredient)) {
          _fluxServicesProductServicesJs2['default'].addProductIngredient({ 'product': this.props.selectedProduct.id, 'ingredient': this.state.selectedIngredient.id, 'usage': this.state.ingredientUsage });
        } else {
          _fluxServicesProductServicesJs2['default'].addProductSauce({ 'product': this.props.selectedProduct.id, 'sauce': this.state.selectedIngredient.id, 'usage': this.state.ingredientUsage });
        }
        this.setState({ selectedIngredient: {}, ingredientUsage: '' });
      }
    }, {
      key: 'renderInputFields',
      value: function renderInputFields() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            _reactBootstrap.Col,
            { xs: 12 },
            _react2['default'].createElement(
              'form',
              { xs: 12 },
              _react2['default'].createElement(
                _reactBootstrap.Row,
                { xs: 12 },
                _react2['default'].createElement(
                  _reactBootstrap.Col,
                  { xs: 8 },
                  _react2['default'].createElement(
                    _reactBootstrap.FormGroup,
                    { controlId: 'ingredient' },
                    _react2['default'].createElement(
                      _reactBootstrap.ControlLabel,
                      null,
                      '食材'
                    ),
                    _react2['default'].createElement(_reactSelect2['default'], {
                      options: this.state.ingredients.concat(this.state.sauce),
                      valueKey: 'id',
                      labelKey: 'name',
                      onChange: this.handleValueChange.bind(this, 'selectedIngredient'),
                      value: this.state.selectedIngredient
                    })
                  )
                ),
                _react2['default'].createElement(
                  _reactBootstrap.Col,
                  { xs: 4 },
                  _react2['default'].createElement(
                    _reactBootstrap.FormGroup,
                    { controlId: 'unit_price' },
                    _react2['default'].createElement(
                      _reactBootstrap.ControlLabel,
                      null,
                      '单位价格'
                    ),
                    _react2['default'].createElement(_reactBootstrap.FormControl, {
                      type: 'text',
                      value: this.state.selectedIngredient.unit_price,
                      onChange: this.handleValueChange.bind(this, 'unitPrice'),
                      disabled: true
                    })
                  )
                )
              ),
              _react2['default'].createElement(
                _reactBootstrap.Row,
                { xs: 12 },
                _react2['default'].createElement(
                  _reactBootstrap.Col,
                  { xs: 4 },
                  _react2['default'].createElement(
                    _reactBootstrap.FormGroup,
                    { controlId: 'ingredient_usage' },
                    _react2['default'].createElement(
                      _reactBootstrap.ControlLabel,
                      null,
                      '用量'
                    ),
                    _react2['default'].createElement(_reactBootstrap.FormControl, {
                      type: 'text',
                      value: this.state.ingredientUsage,
                      onChange: this.handleValueChange.bind(this, 'ingredientUsage'),
                      placeholder: 'Enter text',
                      type: 'number'
                    })
                  )
                ),
                _react2['default'].createElement(
                  _reactBootstrap.Col,
                  { xs: 4 },
                  _react2['default'].createElement(
                    _reactBootstrap.FormGroup,
                    { controlId: 'unit' },
                    _react2['default'].createElement(
                      _reactBootstrap.ControlLabel,
                      null,
                      '单位'
                    ),
                    _react2['default'].createElement(_reactBootstrap.FormControl, {
                      type: 'text',
                      value: this.state.selectedIngredient.unit,
                      onChange: this.handleValueChange.bind(this, 'unit'),
                      disabled: true
                    })
                  )
                ),
                _react2['default'].createElement(
                  _reactBootstrap.Col,
                  { xs: 4 },
                  _react2['default'].createElement(
                    _reactBootstrap.FormGroup,
                    { controlId: 'total' },
                    _react2['default'].createElement(
                      _reactBootstrap.ControlLabel,
                      null,
                      '合计'
                    ),
                    _react2['default'].createElement(_reactBootstrap.FormControl, {
                      type: 'text',
                      value: this.calculatePrice(),
                      onChange: this.handleValueChange.bind(this, 'total'),
                      disabled: true
                    })
                  )
                )
              ),
              _react2['default'].createElement(
                _reactBootstrap.Row,
                { xs: 12 },
                _react2['default'].createElement(
                  _reactBootstrap.Col,
                  { xs: 12 },
                  _react2['default'].createElement(
                    _reactBootstrap.FormGroup,
                    null,
                    _react2['default'].createElement(
                      _reactBootstrap.Button,
                      {
                        onClick: this.handleAddClicked.bind(this),
                        style: { marginTop: '15px', float: 'right', minWidth: '100px' },
                        bsStyle: 'info' },
                      'ADD'
                    )
                  )
                )
              )
            )
          ),
          _react2['default'].createElement(
            _reactBootstrap.Col,
            { xs: 12 },
            _react2['default'].createElement('hr', null)
          )
        );
      }
    }, {
      key: 'renderProductComposition',
      value: function renderProductComposition() {

        var options = {
          // afterInsertRow : this.afterInsertRow.bind(this),
        };

        var cellEditProp = {
          mode: "click",
          blurToSave: false,
          afterSaveCell: this.onCellEdited.bind(this)
        };

        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            _reactBootstrapTable.BootstrapTable,
            {
              data: this.state.productIngredient.concat(this.state.productSauce),
              options: options,
              striped: true,
              hover: true,
              cellEdit: cellEditProp,
              exportCSV: true,
              condensed: true,
              pagination: true,
              deleteRow: true,
              search: true },
            _react2['default'].createElement(
              _reactBootstrapTable.TableHeaderColumn,
              { dataField: 'name', dataAlign: 'center', isKey: true },
              '名称'
            ),
            _react2['default'].createElement(
              _reactBootstrapTable.TableHeaderColumn,
              { dataField: 'unit_price', dataAlign: 'center', editable: false },
              '单位价格(元/g)'
            ),
            _react2['default'].createElement(
              _reactBootstrapTable.TableHeaderColumn,
              { dataField: 'usage', dataAlign: 'center', editable: true },
              '用量'
            ),
            _react2['default'].createElement(
              _reactBootstrapTable.TableHeaderColumn,
              { dataField: 'unit', dataAlign: 'center', editable: false },
              '单位'
            ),
            _react2['default'].createElement(
              _reactBootstrapTable.TableHeaderColumn,
              { dataField: 'total', dataAlign: 'center', editable: false },
              '总价(元)'
            )
          )
        );
      }
    }, {
      key: 'render',
      value: function render() {

        var selectedProduct = this.props.selectedProduct ? this.props.selectedProduct : {};
        var showModal = this.props.showModal ? this.props.showModal : false;
        var onClose = this.props.onClose ? this.props.onClose : null;

        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            _reactBootstrap.Modal,
            { show: showModal, onHide: onClose },
            _react2['default'].createElement(
              _reactBootstrap.Modal.Header,
              { closeButton: true },
              _react2['default'].createElement(
                _reactBootstrap.Modal.Title,
                null,
                selectedProduct.name
              )
            ),
            _react2['default'].createElement(
              _reactBootstrap.Modal.Body,
              null,
              this.renderInputFields(),
              this.renderProductComposition()
            ),
            _react2['default'].createElement(
              _reactBootstrap.Modal.Footer,
              null,
              _react2['default'].createElement(
                'h3',
                null,
                '合计:  ',
                this.state.total,
                '元'
              )
            )
          )
        );
      }
    }]);

    return ProductModal;
  })(_react.Component);

  exports['default'] = ProductModal;
  module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactBootstrap = __webpack_require__(19);

  var _reactBootstrapTable = __webpack_require__(2);

  var _reactSelect = __webpack_require__(20);

  var _reactSelect2 = _interopRequireDefault(_reactSelect);

  var _fluxServicesIngredientServicesJs = __webpack_require__(5);

  var _fluxServicesIngredientServicesJs2 = _interopRequireDefault(_fluxServicesIngredientServicesJs);

  var _fluxStoresIngredientStoreJs = __webpack_require__(11);

  var _fluxStoresIngredientStoreJs2 = _interopRequireDefault(_fluxStoresIngredientStoreJs);

  var _fluxServicesSauceServicesJs = __webpack_require__(6);

  var _fluxServicesSauceServicesJs2 = _interopRequireDefault(_fluxServicesSauceServicesJs);

  var _fluxStoresSauceStoreJs = __webpack_require__(12);

  var _fluxStoresSauceStoreJs2 = _interopRequireDefault(_fluxStoresSauceStoreJs);

  var SauceModal = (function (_Component) {
    _inherits(SauceModal, _Component);

    function SauceModal(props, context) {
      _classCallCheck(this, SauceModal);

      _get(Object.getPrototypeOf(SauceModal.prototype), 'constructor', this).call(this, props, context);

      this.state = {
        showModal: false,
        ingredients: [],
        total: 0,
        actualWeight: 0,
        unitPrice: 0,
        sauceIngredient: [],
        selectedIngredient: {}
      };
    }

    _createClass(SauceModal, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {

        var selectedSauce = nextProps.selectedSauce ? nextProps.selectedSauce : {};
        var selectedSauceProps = this.props.selectedSauce ? this.props.selectedSauce : {};

        if (selectedSauce.id !== selectedSauceProps.id) {
          _fluxServicesIngredientServicesJs2['default'].getIngredient();
          _fluxStoresIngredientStoreJs2['default'].addChangeListener(this.onIngredientStoreUpdate.bind(this));

          _fluxServicesSauceServicesJs2['default'].getSauceIngredient(selectedSauce.id);
          _fluxStoresSauceStoreJs2['default'].addChangeListener(this.onSauceStoreUpdate.bind(this));
        }
      }
    }, {
      key: 'onIngredientStoreUpdate',
      value: function onIngredientStoreUpdate() {
        this.setState({
          ingredients: _fluxStoresIngredientStoreJs2['default'].ingredients
        });
      }
    }, {
      key: 'onSauceStoreUpdate',
      value: function onSauceStoreUpdate() {
        this.setState({
          sauceIngredient: _fluxStoresSauceStoreJs2['default'].sauceIngredient.ingredients,
          total: _fluxStoresSauceStoreJs2['default'].sauceIngredient.total,
          actualWeight: _fluxStoresSauceStoreJs2['default'].sauceIngredient.actual_weight,
          unitPrice: _fluxStoresSauceStoreJs2['default'].sauceIngredient.unit_price
        });
      }
    }, {
      key: 'afterInsertRow',
      value: function afterInsertRow() {}
    }, {
      key: 'calculatePrice',
      value: function calculatePrice() {
        if (this.state.selectedIngredient.price && this.state.selectedIngredient.weight_volume && this.state.ingredientUsage) {
          return parseFloat(this.state.selectedIngredient.price) / parseFloat(this.state.selectedIngredient.weight_volume) * parseFloat(this.state.ingredientUsage);
        }
        return '0';
      }
    }, {
      key: 'handleValueChange',
      value: function handleValueChange(name, e) {
        switch (name) {
          case 'selectedIngredient':
            this.state.selectedIngredient = e ? e : {};
            break;
          case 'ingredientUsage':
            this.state.ingredientUsage = e.target.value;
            break;
          case 'actualWeight':
            this.state.actualWeight = e.target.value;
            break;
          default:
            break;
        }
        this.setState(this.state);
      }
    }, {
      key: 'onCellEdited',
      value: function onCellEdited(row, cellName, cellValue) {
        var data = { id: row.id, usage: row.usage, sauce: row.sauce };
        _fluxServicesSauceServicesJs2['default'].updateSauceIngredient(data);
      }
    }, {
      key: 'onBlurChange',
      value: function onBlurChange(e) {
        var data = {
          id: this.props.selectedSauce.id,
          actual_weight: e.target.value
        };
        _fluxServicesSauceServicesJs2['default'].updateSauce(data);
      }
    }, {
      key: 'handleAddClicked',
      value: function handleAddClicked(e) {
        _fluxServicesSauceServicesJs2['default'].addSauceIngredient({ 'sauce': this.props.selectedSauce.id, 'ingredient': this.state.selectedIngredient.id, 'usage': this.state.ingredientUsage });
        this.setState({ selectedIngredient: {}, ingredientUsage: '' });
      }
    }, {
      key: 'renderInputFields',
      value: function renderInputFields() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            _reactBootstrap.Col,
            { xs: 12 },
            _react2['default'].createElement(
              'form',
              { xs: 12 },
              _react2['default'].createElement(
                _reactBootstrap.Row,
                { xs: 12 },
                _react2['default'].createElement(
                  _reactBootstrap.Col,
                  { xs: 8 },
                  _react2['default'].createElement(
                    _reactBootstrap.FormGroup,
                    { controlId: 'ingredient' },
                    _react2['default'].createElement(
                      _reactBootstrap.ControlLabel,
                      null,
                      '食材'
                    ),
                    _react2['default'].createElement(_reactSelect2['default'], {
                      options: this.state.ingredients,
                      valueKey: 'id',
                      labelKey: 'name',
                      onChange: this.handleValueChange.bind(this, 'selectedIngredient'),
                      value: this.state.selectedIngredient
                    })
                  )
                ),
                _react2['default'].createElement(
                  _reactBootstrap.Col,
                  { xs: 4 },
                  _react2['default'].createElement(
                    _reactBootstrap.FormGroup,
                    { controlId: 'unit_price' },
                    _react2['default'].createElement(
                      _reactBootstrap.ControlLabel,
                      null,
                      '单位价格'
                    ),
                    _react2['default'].createElement(_reactBootstrap.FormControl, {
                      type: 'text',
                      value: this.state.selectedIngredient.unit_price,
                      onChange: this.handleValueChange.bind(this, 'unitPrice'),
                      disabled: true
                    })
                  )
                )
              ),
              _react2['default'].createElement(
                _reactBootstrap.Row,
                { xs: 12 },
                _react2['default'].createElement(
                  _reactBootstrap.Col,
                  { xs: 4 },
                  _react2['default'].createElement(
                    _reactBootstrap.FormGroup,
                    { controlId: 'ingredient_usage' },
                    _react2['default'].createElement(
                      _reactBootstrap.ControlLabel,
                      null,
                      '用量'
                    ),
                    _react2['default'].createElement(_reactBootstrap.FormControl, {
                      type: 'text',
                      value: this.state.ingredientUsage,
                      onChange: this.handleValueChange.bind(this, 'ingredientUsage'),
                      placeholder: 'Enter text',
                      type: 'number'
                    })
                  )
                ),
                _react2['default'].createElement(
                  _reactBootstrap.Col,
                  { xs: 4 },
                  _react2['default'].createElement(
                    _reactBootstrap.FormGroup,
                    { controlId: 'unit' },
                    _react2['default'].createElement(
                      _reactBootstrap.ControlLabel,
                      null,
                      '单位'
                    ),
                    _react2['default'].createElement(_reactBootstrap.FormControl, {
                      type: 'text',
                      value: this.state.selectedIngredient.unit,
                      onChange: this.handleValueChange.bind(this, 'unit'),
                      disabled: true
                    })
                  )
                ),
                _react2['default'].createElement(
                  _reactBootstrap.Col,
                  { xs: 4 },
                  _react2['default'].createElement(
                    _reactBootstrap.FormGroup,
                    { controlId: 'total' },
                    _react2['default'].createElement(
                      _reactBootstrap.ControlLabel,
                      null,
                      '合计'
                    ),
                    _react2['default'].createElement(_reactBootstrap.FormControl, {
                      type: 'text',
                      value: this.calculatePrice(),
                      onChange: this.handleValueChange.bind(this, 'total'),
                      disabled: true
                    })
                  )
                )
              ),
              _react2['default'].createElement(
                _reactBootstrap.Row,
                { xs: 12 },
                _react2['default'].createElement(
                  _reactBootstrap.Col,
                  { xs: 12 },
                  _react2['default'].createElement(
                    _reactBootstrap.FormGroup,
                    null,
                    _react2['default'].createElement(
                      _reactBootstrap.Button,
                      {
                        onClick: this.handleAddClicked.bind(this),
                        style: { marginTop: '15px', float: 'right', minWidth: '100px' },
                        bsStyle: 'info' },
                      'ADD'
                    )
                  )
                )
              )
            )
          ),
          _react2['default'].createElement(
            _reactBootstrap.Col,
            { xs: 12 },
            _react2['default'].createElement('hr', null)
          )
        );
      }
    }, {
      key: 'renderSauceComposition',
      value: function renderSauceComposition() {

        var options = {
          afterInsertRow: this.afterInsertRow.bind(this)
        };
        var cellEditProp = {
          mode: "click",
          blurToSave: false,
          afterSaveCell: this.onCellEdited.bind(this)
        };

        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            _reactBootstrapTable.BootstrapTable,
            {
              data: this.state.sauceIngredient,
              options: options,
              striped: true,
              hover: true,
              exportCSV: true,
              cellEdit: cellEditProp,
              condensed: true,
              pagination: true,
              deleteRow: true,
              search: true },
            _react2['default'].createElement(
              _reactBootstrapTable.TableHeaderColumn,
              { dataField: 'name', dataAlign: 'center', isKey: true },
              '名称'
            ),
            _react2['default'].createElement(
              _reactBootstrapTable.TableHeaderColumn,
              { dataField: 'unit_price', dataAlign: 'center', editable: false },
              '单位价格(元/g)'
            ),
            _react2['default'].createElement(
              _reactBootstrapTable.TableHeaderColumn,
              { dataField: 'usage', dataAlign: 'center', editable: true },
              '用量'
            ),
            _react2['default'].createElement(
              _reactBootstrapTable.TableHeaderColumn,
              { dataField: 'unit', dataAlign: 'center', editable: false },
              '单位'
            ),
            _react2['default'].createElement(
              _reactBootstrapTable.TableHeaderColumn,
              { dataField: 'total', dataAlign: 'center', editable: false },
              '总价(元)'
            )
          )
        );
      }

      // getTotalCost() {
      //   var totalCost = 0
      //   for (var i in this.state.sauceIngredient) {
      //       var ingredient = this.state.sauceIngredient[i]
      //       totalCost += parseFloat(ingredient.total)
      //   }
      //   return `${totalCost}元`
      // }

    }, {
      key: 'renderActualWeight',
      value: function renderActualWeight() {
        return _react2['default'].createElement(_reactBootstrap.FormControl, {
          type: 'text',
          value: this.state.actualWeight,
          onChange: this.handleValueChange.bind(this, 'actualWeight'),
          style: { display: 'inline-block', maxWidth: '150px' },
          onBlur: this.onBlurChange.bind(this)
        });
      }
    }, {
      key: 'render',
      value: function render() {

        var selectedSauce = this.props.selectedSauce ? this.props.selectedSauce : {};
        var showModal = this.props.showModal ? this.props.showModal : false;
        var onClose = this.props.onClose ? this.props.onClose : null;

        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            _reactBootstrap.Modal,
            { show: showModal, onHide: onClose },
            _react2['default'].createElement(
              _reactBootstrap.Modal.Header,
              { closeButton: true },
              _react2['default'].createElement(
                _reactBootstrap.Modal.Title,
                null,
                selectedSauce.name
              )
            ),
            _react2['default'].createElement(
              _reactBootstrap.Modal.Body,
              null,
              this.renderInputFields(),
              this.renderSauceComposition()
            ),
            _react2['default'].createElement(
              _reactBootstrap.Modal.Footer,
              null,
              _react2['default'].createElement(
                'h3',
                null,
                this.state.total,
                '元每',
                this.renderActualWeight(),
                'g   单位价格: ',
                this.state.unitPrice
              )
            )
          )
        );
      }
    }]);

    return SauceModal;
  })(_react.Component);

  exports['default'] = SauceModal;
  module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ },
/* 19 */
/***/ function(module, exports) {

  module.exports = require("react-bootstrap");

/***/ },
/* 20 */
/***/ function(module, exports) {

  module.exports = require("react-select");

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(34);

  var _Navigation = __webpack_require__(23);

  var _Navigation2 = _interopRequireDefault(_Navigation);

  function Layout(_ref) {
    var children = _ref.children;

    return _react2['default'].createElement(
      'div',
      { className: 'Layout' },
      _react2['default'].createElement(_Navigation2['default'], null),
      children
    );
  }

  Layout.propTypes = {
    children: _react.PropTypes.element.isRequired
  };

  exports['default'] = Layout;
  module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(35);

  var _coreLocation = __webpack_require__(14);

  var _coreLocation2 = _interopRequireDefault(_coreLocation);

  function isLeftClickEvent(event) {
    return event.button === 0;
  }

  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }

  var Link = (function (_Component) {
    _inherits(Link, _Component);

    function Link() {
      _classCallCheck(this, Link);

      _get(Object.getPrototypeOf(Link.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Link, [{
      key: 'render',

      // static propTypes = {
      //   to: PropTypes.string.isRequired,
      //   children: PropTypes.element.isRequired,
      //   state: PropTypes.object,
      //   onClick: PropTypes.func,
      // };

      // static handleClick = event => {
      //   let allowTransition = true;
      //   let clickResult;

      //   if (this.props && this.props.onClick) {
      //     clickResult = this.props.onClick(event);
      //   }

      //   if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
      //     return;
      //   }

      //   if (clickResult === false || event.defaultPrevented === true) {
      //     allowTransition = false;
      //   }

      //   event.preventDefault();

      //   if (allowTransition) {
      //     const link = event.currentTarget;
      //     Location.pushState(
      //       this.props && this.props.state || null,
      //       this.props && this.props.to || (link.pathname + link.search));
      //   }
      // };

      value: function render() {
        var _props = this.props;
        var to = _props.to;
        var children = _props.children;

        var props = _objectWithoutProperties(_props, ['to', 'children']);

        return _react2['default'].createElement(
          'a',
          _extends({}, props, { onClick: Link.handleClick.bind(this) }),
          children
        );
      }
    }]);

    return Link;
  })(_react.Component);

  exports['default'] = Link;
  module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(36);

  var _Link = __webpack_require__(22);

  var _Link2 = _interopRequireDefault(_Link);

  function Navigation() {
    return _react2['default'].createElement(
      'ul',
      { className: 'Navigation', role: 'menu' },
      _react2['default'].createElement(
        'li',
        { className: 'Navigation-item' },
        _react2['default'].createElement(
          'a',
          { className: 'Navigation-link', href: '/', onClick: _Link2['default'].handleClick },
          'Home'
        )
      ),
      _react2['default'].createElement(
        'li',
        { className: 'Navigation-item' },
        _react2['default'].createElement(
          'a',
          { className: 'Navigation-link', href: '/ingredients', onClick: _Link2['default'].handleClick },
          'Ingredients'
        )
      ),
      _react2['default'].createElement(
        'li',
        { className: 'Navigation-item' },
        _react2['default'].createElement(
          'a',
          { className: 'Navigation-link', href: '/sauce', onClick: _Link2['default'].handleClick },
          'Sauce'
        )
      ),
      _react2['default'].createElement(
        'li',
        { className: 'Navigation-item' },
        _react2['default'].createElement(
          'a',
          { className: 'Navigation-link', href: '/products', onClick: _Link2['default'].handleClick },
          'Products'
        )
      )
    );
  }

  exports['default'] = Navigation;
  module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

  /*  weak */
  "use strict";

  Object.defineProperty(exports, "__esModule", {
  	value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _AppDispatcherJs = __webpack_require__(3);

  var _AppDispatcherJs2 = _interopRequireDefault(_AppDispatcherJs);

  exports["default"] = {
  	loadIngredient: function loadIngredient(data) {
  		var actionType = "LOAD_INGREDIENT";
  		_AppDispatcherJs2["default"].dispatch({
  			actionType: actionType,
  			data: data
  		});
  	},
  	saveIngredient: function saveIngredient(data) {
  		var actionType = "SAVE_INGREDIENT";
  		_AppDispatcherJs2["default"].dispatch({
  			actionType: actionType,
  			data: data
  		});
  	}
  };
  module.exports = exports["default"];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

  /*  weak */
  "use strict";

  Object.defineProperty(exports, "__esModule", {
  	value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _AppDispatcherJs = __webpack_require__(3);

  var _AppDispatcherJs2 = _interopRequireDefault(_AppDispatcherJs);

  exports["default"] = {
  	loadProducts: function loadProducts(data) {
  		var actionType = "LOAD_PRODUCTS";
  		_AppDispatcherJs2["default"].dispatch({
  			actionType: actionType,
  			data: data
  		});
  	},
  	saveProduct: function saveProduct(data) {
  		var actionType = "SAVE_PRODUCT";
  		_AppDispatcherJs2["default"].dispatch({
  			actionType: actionType,
  			data: data
  		});
  	},
  	loadProductIngredient: function loadProductIngredient(data) {
  		var actionType = "LOAD_PRODUCT_INGREDIENT";
  		_AppDispatcherJs2["default"].dispatch({
  			actionType: actionType,
  			data: data
  		});
  	},
  	addProductIngredient: function addProductIngredient(data) {
  		var actionType = "ADD_PRODUCT_INGREDIENT";
  		_AppDispatcherJs2["default"].dispatch({
  			actionType: actionType,
  			data: data
  		});
  	},
  	updateProductIngredient: function updateProductIngredient(data) {
  		var actionType = "UPDATE_PRODUCT_INGREDIENT";
  		_AppDispatcherJs2["default"].dispatch({
  			actionType: actionType,
  			data: data
  		});
  	},
  	loadProductSauce: function loadProductSauce(data) {
  		var actionType = "LOAD_PRODUCT_SAUCE";
  		_AppDispatcherJs2["default"].dispatch({
  			actionType: actionType,
  			data: data
  		});
  	},
  	addProductSauce: function addProductSauce(data) {
  		var actionType = "ADD_PRODUCT_SAUCE";
  		_AppDispatcherJs2["default"].dispatch({
  			actionType: actionType,
  			data: data
  		});
  	},
  	updateProductSauce: function updateProductSauce(data) {
  		var actionType = "UPDATE_PRODUCT_SAUCE";
  		_AppDispatcherJs2["default"].dispatch({
  			actionType: actionType,
  			data: data
  		});
  	}
  };
  module.exports = exports["default"];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

  /*  weak */
  "use strict";

  Object.defineProperty(exports, "__esModule", {
  	value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _AppDispatcherJs = __webpack_require__(3);

  var _AppDispatcherJs2 = _interopRequireDefault(_AppDispatcherJs);

  exports["default"] = {
  	loadSauce: function loadSauce(data) {
  		var actionType = "LOAD_SAUCE";
  		_AppDispatcherJs2["default"].dispatch({
  			actionType: actionType,
  			data: data
  		});
  	},
  	loadSauceIngredient: function loadSauceIngredient(data) {
  		var actionType = "LOAD_SAUCE_INGREDIENT";
  		_AppDispatcherJs2["default"].dispatch({
  			actionType: actionType,
  			data: data
  		});
  	},
  	saveSauce: function saveSauce(data) {
  		var actionType = "SAVE_SAUCE";
  		_AppDispatcherJs2["default"].dispatch({
  			actionType: actionType,
  			data: data
  		});
  	},
  	addSauceIngredient: function addSauceIngredient(data) {
  		var actionType = "ADD_SAUCE_INGREDIENT";
  		_AppDispatcherJs2["default"].dispatch({
  			actionType: actionType,
  			data: data
  		});
  	},
  	updateSauceIngredient: function updateSauceIngredient(data) {
  		var actionType = "UPDATE_SAUCE_INGREDIENT";
  		_AppDispatcherJs2["default"].dispatch({
  			actionType: actionType,
  			data: data
  		});
  	}
  };
  module.exports = exports["default"];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
      value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _axios = __webpack_require__(37);

  var _axios2 = _interopRequireDefault(_axios);

  var _when = __webpack_require__(47);

  var _when2 = _interopRequireDefault(_when);

  var RequestBuilder = (function () {
      function RequestBuilder(method, url) {
          _classCallCheck(this, RequestBuilder);

          this._requestParams = {
              method: method,
              url: url
              // crossOrigin: true
          };
      }

      _createClass(RequestBuilder, [{
          key: 'addHeader',
          value: function addHeader(headers) {
              this._requestParams.headers = headers;
              return this;
          }
      }, {
          key: 'addType',
          value: function addType(type) {
              this._requestParams.type = type;
              return this;
          }
      }, {
          key: 'addData',
          value: function addData(data) {
              if (this._requestParams.method === 'GET') {
                  this._requestParams.params = data;
              } else {
                  this._requestParams.data = data;
              }
              return this;
          }
      }, {
          key: 'add',
          value: function add(name, value) {
              this._requestParams[name] = value;
              return this;
          }
      }, {
          key: 'build',
          value: function build() {
              return (0, _when2['default'])((0, _axios2['default'])(this._requestParams));
          }
      }], [{
          key: 'get',
          value: function get(url) {
              return new RequestBuilder('GET', url);
          }
      }, {
          key: 'post',
          value: function post(url) {
              return new RequestBuilder('POST', url);
          }
      }, {
          key: 'put',
          value: function put(url) {
              return new RequestBuilder('PUT', url);
          }
      }, {
          key: 'delete',
          value: function _delete(url) {
              return new RequestBuilder('DELETE', url);
          }
      }]);

      return RequestBuilder;
  })();

  exports['default'] = RequestBuilder;
  ;
  module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Not Found'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'The page you\'re looking for was not found.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Error'
          ),
          _react2['default'].createElement(
            'pre',
            null,
            this.props.error ? this.props.error.message + '\n\n' + this.props.error.stack : 'A critical error occurred.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'The Main Course'
          ),
          _react2['default'].createElement(
            'p',
            null,
            '成本计算系统'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

  

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
      value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactBootstrapTable = __webpack_require__(2);

  var _fluxServicesIngredientServicesJs = __webpack_require__(5);

  var _fluxServicesIngredientServicesJs2 = _interopRequireDefault(_fluxServicesIngredientServicesJs);

  var _fluxStoresIngredientStoreJs = __webpack_require__(11);

  var _fluxStoresIngredientStoreJs2 = _interopRequireDefault(_fluxStoresIngredientStoreJs);

  var _default = (function (_React$Component) {
      _inherits(_default, _React$Component);

      function _default(props) {
          _classCallCheck(this, _default);

          _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).call(this, props);
          this.state = {
              ingredients: []
          };
      }

      _createClass(_default, [{
          key: 'componentDidMount',
          value: function componentDidMount() {
              _fluxServicesIngredientServicesJs2['default'].getIngredient();
              _fluxStoresIngredientStoreJs2['default'].addChangeListener(this.onIngredientStoreUpdate.bind(this));
          }
      }, {
          key: 'onIngredientStoreUpdate',
          value: function onIngredientStoreUpdate() {
              this.setState({
                  ingredients: _fluxStoresIngredientStoreJs2['default'].ingredients
              });
          }
      }, {
          key: 'onCellEdited',
          value: function onCellEdited(row, cellName, cellValue) {
              _fluxServicesIngredientServicesJs2['default'].updateIngredient(row);
          }
      }, {
          key: 'afterInsertRow',
          value: function afterInsertRow(row, cellName) {
              _fluxServicesIngredientServicesJs2['default'].saveIngredient(row);
              _fluxServicesIngredientServicesJs2['default'].getIngredient();
          }
      }, {
          key: 'render',
          value: function render() {
              var selectRowProp = {
                  mode: "checkbox", //checkbox for multi select, radio for single select.
                  clickToSelect: true, //click row will trigger a selection on that row.
                  bgColor: "rgb(238, 193, 213)" //selected row background color
              };

              var cellEditProp = {
                  mode: "click",
                  blurToSave: false,
                  afterSaveCell: this.onCellEdited.bind(this)
              };
              var options = {
                  afterInsertRow: this.afterInsertRow.bind(this)
              };

              return _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                      _reactBootstrapTable.BootstrapTable,
                      {
                          data: this.state.ingredients,
                          selectRow: selectRowProp,
                          cellEdit: cellEditProp,
                          options: options,
                          striped: true,
                          hover: true,
                          exportCSV: true,
                          condensed: true,
                          pagination: true,
                          insertRow: true,
                          deleteRow: true,
                          search: true },
                      _react2['default'].createElement(
                          _reactBootstrapTable.TableHeaderColumn,
                          { dataField: 'name', dataAlign: 'center', isKey: true },
                          '名称'
                      ),
                      _react2['default'].createElement(
                          _reactBootstrapTable.TableHeaderColumn,
                          { dataField: 'desc', dataAlign: 'center' },
                          '描述'
                      ),
                      _react2['default'].createElement(
                          _reactBootstrapTable.TableHeaderColumn,
                          { dataField: 'price', dataAlign: 'center', dataSort: true },
                          '价格'
                      ),
                      _react2['default'].createElement(
                          _reactBootstrapTable.TableHeaderColumn,
                          { dataField: 'weight_volume', dataAlign: 'center', dataSort: true },
                          '重量/体积'
                      ),
                      _react2['default'].createElement(
                          _reactBootstrapTable.TableHeaderColumn,
                          { dataField: 'unit', dataAlign: 'center' },
                          '单位(g或ml)'
                      ),
                      _react2['default'].createElement(
                          _reactBootstrapTable.TableHeaderColumn,
                          { dataField: 'unit_price', dataAlign: 'center', editable: false },
                          '单位价格'
                      )
                  )
              );
          }
      }]);

      return _default;
  })(_react2['default'].Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

  

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
      value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactBootstrapTable = __webpack_require__(2);

  var _fluxServicesProductServicesJs = __webpack_require__(10);

  var _fluxServicesProductServicesJs2 = _interopRequireDefault(_fluxServicesProductServicesJs);

  var _fluxStoresProductStoreJs = __webpack_require__(15);

  var _fluxStoresProductStoreJs2 = _interopRequireDefault(_fluxStoresProductStoreJs);

  var _productProductModalJs = __webpack_require__(16);

  var _productProductModalJs2 = _interopRequireDefault(_productProductModalJs);

  var _default = (function (_React$Component) {
      _inherits(_default, _React$Component);

      function _default(props) {
          _classCallCheck(this, _default);

          _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).call(this, props);
          this.state = {
              products: [],
              showModal: false
          };
      }

      _createClass(_default, [{
          key: 'componentDidMount',
          value: function componentDidMount() {
              _fluxServicesProductServicesJs2['default'].getProduct();
              _fluxStoresProductStoreJs2['default'].addChangeListener(this.onProductStoreUpdate.bind(this));
          }
      }, {
          key: 'onProductStoreUpdate',
          value: function onProductStoreUpdate() {
              this.setState({
                  products: _fluxStoresProductStoreJs2['default'].products
              });
          }
      }, {
          key: 'onCellEdited',
          value: function onCellEdited(row, cellName, cellValue) {
              _fluxServicesProductServicesJs2['default'].updateProduct(row);
          }
      }, {
          key: 'afterInsertRow',
          value: function afterInsertRow(row, cellName) {
              _fluxServicesProductServicesJs2['default'].getProduct();
          }
      }, {
          key: 'handleShow',
          value: function handleShow(row) {
              this.setState({
                  showModal: true,
                  selectedProduct: row
              });
          }
      }, {
          key: 'onModalClose',
          value: function onModalClose() {
              this.setState({ showModal: false });
          }
      }, {
          key: 'render',
          value: function render() {
              // var selectRowProp = {
              //     mode: "checkbox",  //checkbox for multi select, radio for single select.
              //     clickToSelect: true,   //click row will trigger a selection on that row.
              //     bgColor: "rgb(238, 193, 213)"   //selected row background color
              // };

              // var cellEditProp = {
              //     mode: "dbclick",
              //     blurToSave: false,
              //     afterSaveCell: this.onCellEdited.bind(this)
              // }
              var options = {
                  afterInsertRow: this.afterInsertRow.bind(this),
                  onRowClick: this.handleShow.bind(this)
              };

              return _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                      _reactBootstrapTable.BootstrapTable,
                      {
                          data: this.state.products,
                          options: options,
                          striped: true,
                          hover: true,
                          exportCSV: true,
                          condensed: true,
                          pagination: true,
                          insertRow: true,
                          deleteRow: true,
                          search: true },
                      _react2['default'].createElement(
                          _reactBootstrapTable.TableHeaderColumn,
                          { dataField: 'name', dataAlign: 'center', isKey: true },
                          '名称'
                      ),
                      _react2['default'].createElement(
                          _reactBootstrapTable.TableHeaderColumn,
                          { dataField: 'desc', dataAlign: 'center' },
                          '描述'
                      ),
                      _react2['default'].createElement(
                          _reactBootstrapTable.TableHeaderColumn,
                          { dataField: 'total', dataAlign: 'center', dataSort: true },
                          '成本(元)'
                      )
                  ),
                  _react2['default'].createElement(_productProductModalJs2['default'], { showModal: this.state.showModal, onClose: this.onModalClose.bind(this), selectedProduct: this.state.selectedProduct })
              );
          }
      }]);

      return _default;
  })(_react2['default'].Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

  

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
      value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactBootstrapTable = __webpack_require__(2);

  var _fluxServicesSauceServicesJs = __webpack_require__(6);

  var _fluxServicesSauceServicesJs2 = _interopRequireDefault(_fluxServicesSauceServicesJs);

  var _fluxStoresSauceStoreJs = __webpack_require__(12);

  var _fluxStoresSauceStoreJs2 = _interopRequireDefault(_fluxStoresSauceStoreJs);

  var _sauceSauceModalJs = __webpack_require__(17);

  var _sauceSauceModalJs2 = _interopRequireDefault(_sauceSauceModalJs);

  var _default = (function (_React$Component) {
      _inherits(_default, _React$Component);

      function _default(props) {
          _classCallCheck(this, _default);

          _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).call(this, props);
          this.state = {
              sauce: [],
              showModal: false
          };
      }

      _createClass(_default, [{
          key: 'componentDidMount',
          value: function componentDidMount() {
              _fluxServicesSauceServicesJs2['default'].getSauce();
              _fluxStoresSauceStoreJs2['default'].addChangeListener(this.onSauceStoreUpdate.bind(this));
          }
      }, {
          key: 'onSauceStoreUpdate',
          value: function onSauceStoreUpdate() {
              this.setState({
                  sauce: _fluxStoresSauceStoreJs2['default'].sauce
              });
          }
      }, {
          key: 'onModalClose',
          value: function onModalClose() {
              this.setState({ showModal: false });
          }
      }, {
          key: 'onCellEdited',
          value: function onCellEdited(row, cellName, cellValue) {
              _fluxServicesSauceServicesJs2['default'].updateSauce(row);
          }
      }, {
          key: 'afterInsertRow',
          value: function afterInsertRow(row, cellName) {
              _fluxServicesSauceServicesJs2['default'].saveSauce(row);
              _fluxServicesSauceServicesJs2['default'].getSauce();
          }
      }, {
          key: 'handleShow',
          value: function handleShow(row) {
              this.setState({
                  showModal: true,
                  selectedSauce: row
              });
          }
      }, {
          key: 'render',
          value: function render() {
              // var selectRowProp = {
              //     mode: "checkbox",  //checkbox for multi select, radio for single select.
              //     clickToSelect: true,   //click row will trigger a selection on that row.
              //     bgColor: "rgb(238, 193, 213)"   //selected row background color
              // };

              // var cellEditProp = {
              //     mode: "click",
              //     blurToSave: false,
              //     afterSaveCell: this.onCellEdited.bind(this)
              // }

              var options = {
                  afterInsertRow: this.afterInsertRow.bind(this),
                  onRowClick: this.handleShow.bind(this)
              };

              return _react2['default'].createElement(
                  'div',
                  null,
                  _react2['default'].createElement(
                      _reactBootstrapTable.BootstrapTable,
                      {
                          data: this.state.sauce,
                          options: options,
                          striped: true,
                          hover: true,
                          exportCSV: true,
                          condensed: true,
                          pagination: true,
                          insertRow: true,
                          deleteRow: true,
                          search: true },
                      _react2['default'].createElement(
                          _reactBootstrapTable.TableHeaderColumn,
                          { dataField: 'name', dataAlign: 'center', isKey: true },
                          '名称'
                      ),
                      _react2['default'].createElement(
                          _reactBootstrapTable.TableHeaderColumn,
                          { dataField: 'desc', dataAlign: 'center' },
                          '描述'
                      ),
                      _react2['default'].createElement(
                          _reactBootstrapTable.TableHeaderColumn,
                          { dataField: 'actual_weight', dataAlign: 'center' },
                          '重量(g)'
                      ),
                      _react2['default'].createElement(
                          _reactBootstrapTable.TableHeaderColumn,
                          { dataField: 'unit_price', dataAlign: 'center' },
                          '单位价格(元/g)'
                      )
                  ),
                  _react2['default'].createElement(_sauceSauceModalJs2['default'], { showModal: this.state.showModal, onClose: this.onModalClose.bind(this), selectedSauce: this.state.selectedSauce })
              );
          }
      }]);

      return _default;
  })(_react2['default'].Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(13)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n/*editor error animate*/\n/*@import \"~toastr/build/toastr.min.css\";*/\n\nhtml, body {\n  margin: 0;\n  padding: 0;\n  background-color: #f7f7f7;\n  color: #333;\n  font-family: 'Roboto','Helvetica',sans-serif;\n}\n\n.Layout {\n  margin: 0 auto;\n}\n\n@media (min-width: 768px) {\n  .Layout {\n    width: calc(768px - 18px);\n  }\n}\n\n@media (min-width: 992px) {\n  .Layout {\n    width: calc(992px - 22px);\n  }\n}\n\n@media (min-width: 1200px) {\n  .Layout {\n    width: calc(1200px - 30px);\n  }\n}\n", ""]);

  // exports


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(13)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n.Link {\n\n}\n", ""]);

  // exports


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(13)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n/*editor error animate*/\n/*@import \"~toastr/build/toastr.min.css\";*/\n\n.Navigation {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 2em 0 5em 0;\n  list-style: none;\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n\n.Navigation-item {\n  padding: 0 2em;\n}\n\n.Navigation-link {\n  padding: 0.5em 1em;\n  color: #21ce99;\n  text-decoration: none;\n  text-transform: uppercase;\n  cursor: pointer\n}\n\n.Navigation-link:hover {\n  border-bottom: 3px solid #21ce99;\n  color: #333;\n}\n\n", ""]);

  // exports


/***/ },
/* 37 */
/***/ function(module, exports) {

  module.exports = require("axios");

/***/ },
/* 38 */
/***/ function(module, exports) {

  module.exports = require("events");

/***/ },
/* 39 */
/***/ function(module, exports) {

  module.exports = require("flux");

/***/ },
/* 40 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 41 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createMemoryHistory");

/***/ },
/* 42 */
/***/ function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ },
/* 43 */
/***/ function(module, exports) {

  module.exports = require("js-cookie");

/***/ },
/* 44 */
/***/ function(module, exports) {

  module.exports = require("lodash");

/***/ },
/* 45 */
/***/ function(module, exports) {

  module.exports = require("loglevel");

/***/ },
/* 46 */
/***/ function(module, exports) {

  module.exports = require("react-dom");

/***/ },
/* 47 */
/***/ function(module, exports) {

  module.exports = require("when");

/***/ }
/******/ ]);