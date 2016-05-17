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

  var _reactDom = __webpack_require__(37);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _fbjsLibExecutionEnvironment = __webpack_require__(7);

  var _coreLocation = __webpack_require__(3);

  var _coreLocation2 = _interopRequireDefault(_coreLocation);

  var _componentsLayout = __webpack_require__(8);

  var _componentsLayout2 = _interopRequireDefault(_componentsLayout);

  var routes = {
    '/404': function _() {
      return __webpack_require__(17);
    }, '/500': function _() {
      return __webpack_require__(18);
    }, '/about': function about() {
      return __webpack_require__(19);
    }, '/blog': function blog() {
      return __webpack_require__(20);
    }, '/blog/test-article-one': function blogTestArticleOne() {
      return __webpack_require__(21);
    }, '/blog/test-article-two': function blogTestArticleTwo() {
      return __webpack_require__(22);
    }, '/': function _() {
      return __webpack_require__(23);
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
/* 3 */
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

  var _fbjsLibExecutionEnvironment = __webpack_require__(7);

  var _historyLibCreateBrowserHistory = __webpack_require__(30);

  var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

  var _historyLibCreateMemoryHistory = __webpack_require__(31);

  var _historyLibCreateMemoryHistory2 = _interopRequireDefault(_historyLibCreateMemoryHistory);

  var _historyLibUseQueries = __webpack_require__(32);

  var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

  var location = (0, _historyLibUseQueries2['default'])(_fbjsLibExecutionEnvironment.canUseDOM ? _historyLibCreateBrowserHistory2['default'] : _historyLibCreateMemoryHistory2['default'])();

  exports['default'] = location;
  module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _flux = __webpack_require__(29);

  var dispatcher = new _flux.Dispatcher({
    logLevel: 'ALL'
  });

  exports['default'] = dispatcher;
  module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

  /*  weak */

  "use strict";

  Object.defineProperty(exports, "__esModule", {
  				value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _lodash = __webpack_require__(34);

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

  var _ActionsProductActionJsx = __webpack_require__(11);

  var _ActionsProductActionJsx2 = _interopRequireDefault(_ActionsProductActionJsx);

  var _ConstantsBackendServerConfigJs = __webpack_require__(13);

  var _RestUtilsObjectUtilsJsx = __webpack_require__(5);

  var _RestUtilsRESTUtilsJsx = __webpack_require__(14);

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
                  return _ActionsProductActionJsx2['default'].loadProducts(resp);
              });
          }
      }, {
          key: 'saveProduct',
          value: function saveProduct(data) {
              var url = _ConstantsBackendServerConfigJs.PRODUCT_URL;
              var prom = (0, _RestUtilsRESTUtilsJsx.prepare)(url)(JSON.stringify(data))(_RestUtilsRESTUtilsJsx.save);
              prom.then(function (resp) {
                  return _ActionsProductActionJsx2['default'].saveProduct(resp);
              });
          }
      }, {
          key: 'updateProduct',
          value: function updateProduct(data) {
              var url = _ConstantsBackendServerConfigJs.PRODUCT_URL;
              var prom = (0, _RestUtilsRESTUtilsJsx.prepare)(url)(JSON.stringify(data))(_RestUtilsRESTUtilsJsx.update);
              prom.then(function (resp) {
                  return _ActionsProductActionJsx2['default'].saveProduct(resp);
              });
          }
      }]);

      return ProductService;
  })();

  exports['default'] = new ProductService();
  module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ },
/* 8 */
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

  __webpack_require__(24);

  var _Navigation = __webpack_require__(10);

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
/* 9 */
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

  __webpack_require__(25);

  var _coreLocation = __webpack_require__(3);

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
/* 10 */
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

  __webpack_require__(26);

  var _Link = __webpack_require__(9);

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
          { className: 'Navigation-link', href: '/about', onClick: _Link2['default'].handleClick },
          'About'
        )
      )
    );
  }

  exports['default'] = Navigation;
  module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  /*  weak */
  "use strict";

  Object.defineProperty(exports, "__esModule", {
  	value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var _AppDispatcherJs = __webpack_require__(4);

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
  	}
  };
  module.exports = exports["default"];

/***/ },
/* 12 */
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

  var _events = __webpack_require__(28);

  var _loglevel = __webpack_require__(35);

  var _loglevel2 = _interopRequireDefault(_loglevel);

  var _AppDispatcherJs = __webpack_require__(4);

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
/* 13 */
/***/ function(module, exports) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
  	value: true
  });
  var BACKEND_URL_DEV = "http://52.77.143.121:8000";

  exports["default"] = {
  	PRODUCT_URL: BACKEND_URL_DEV + "/inventory/"
  };
  module.exports = exports["default"];

/***/ },
/* 14 */
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

  var _jsCookie = __webpack_require__(33);

  var _jsCookie2 = _interopRequireDefault(_jsCookie);

  var _RequestBuilderJsx = __webpack_require__(15);

  var _RequestBuilderJsx2 = _interopRequireDefault(_RequestBuilderJsx);

  var _ObjectUtilsJsx = __webpack_require__(5);

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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
      value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _axios = __webpack_require__(27);

  var _axios2 = _interopRequireDefault(_axios);

  var _when = __webpack_require__(38);

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
/* 16 */
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

  var _BaseStoreJsx = __webpack_require__(12);

  var _BaseStoreJsx2 = _interopRequireDefault(_BaseStoreJsx);

  var _ServicesProductServicesJsx = __webpack_require__(6);

  var _ServicesProductServicesJsx2 = _interopRequireDefault(_ServicesProductServicesJsx);

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
      }

      _createClass(ProductStore, [{
          key: '_saveProducts',
          value: function _saveProducts(products) {
              this._products = products;
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
                      _ServicesProductServicesJsx2['default'].getProduct();
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
      }]);

      return ProductStore;
  })(_BaseStoreJsx2['default']);

  exports['default'] = new ProductStore();
  module.exports = exports['default'];

/***/ },
/* 17 */
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
/* 18 */
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
/* 19 */
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
            'About Us'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon!'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 20 */
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
            'Blog'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

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
            'Test Article 1'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
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
            'Test Article 2'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
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

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactBootstrapTable = __webpack_require__(36);

  var _fluxServicesProductServicesJsx = __webpack_require__(6);

  var _fluxServicesProductServicesJsx2 = _interopRequireDefault(_fluxServicesProductServicesJsx);

  var _fluxStoresProductStoreJsx = __webpack_require__(16);

  var _fluxStoresProductStoreJsx2 = _interopRequireDefault(_fluxStoresProductStoreJsx);

  var _default = (function (_React$Component) {
      _inherits(_default, _React$Component);

      function _default(props) {
          _classCallCheck(this, _default);

          _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).call(this, props);
          this.state = {
              products: []
          };
      }

      _createClass(_default, [{
          key: 'componentDidMount',
          value: function componentDidMount() {
              _fluxServicesProductServicesJsx2['default'].getProduct();
              _fluxStoresProductStoreJsx2['default'].addChangeListener(this.onProductStoreUpdate.bind(this));
          }
      }, {
          key: 'onProductStoreUpdate',
          value: function onProductStoreUpdate() {
              this.setState({
                  products: _fluxStoresProductStoreJsx2['default'].products.results
              });
              console.log("Products", _fluxStoresProductStoreJsx2['default'].products.results);
          }
      }, {
          key: 'onCellEdited',
          value: function onCellEdited(row, cellName, cellValue) {
              console.log("Save cell '" + cellName + "' with value '" + cellValue + "'");
              console.log("Thw whole row :");
              console.log(row);
              _fluxServicesProductServicesJsx2['default'].updateProduct(row);
          }
      }, {
          key: 'afterInsertRow',
          value: function afterInsertRow(row, cellName) {
              console.log("The new record :");
              console.log(row);
              _fluxServicesProductServicesJsx2['default'].saveProduct(row);
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
                  mode: "dbclick",
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
                          data: this.state.products,
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
                          { dataField: 'product_description', dataAlign: 'center', dataSort: true },
                          'Product ID'
                      ),
                      _react2['default'].createElement(
                          _reactBootstrapTable.TableHeaderColumn,
                          { dataField: 'product_name', isKey: true, dataAlign: 'center', dataSort: true },
                          'Product Name'
                      ),
                      _react2['default'].createElement(
                          _reactBootstrapTable.TableHeaderColumn,
                          { dataField: 'unit_price', dataAlign: 'center' },
                          'Product Price'
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n/*editor error animate*/\n/*@import \"~toastr/build/toastr.min.css\";*/\n\nhtml, body {\n  margin: 0;\n  padding: 0;\n  background-color: #f7f7f7;\n  color: #333;\n  font-family: 'Roboto','Helvetica',sans-serif;\n}\n\n.Layout {\n  margin: 0 auto;\n}\n\n@media (min-width: 768px) {\n  .Layout {\n    width: calc(768px - 18px);\n  }\n}\n\n@media (min-width: 992px) {\n  .Layout {\n    width: calc(992px - 22px);\n  }\n}\n\n@media (min-width: 1200px) {\n  .Layout {\n    width: calc(1200px - 30px);\n  }\n}\n", ""]);

  // exports


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n.Link {\n\n}\n", ""]);

  // exports


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/**\n * React Static Boilerplate\n * https://github.com/koistya/react-static-boilerplate\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\n */\n\n/*\n * Scaffolding\n * -------------------------------------------------------------------------- */\n\n/*\n * Typography\n * -------------------------------------------------------------------------- */\n\n/*\n * Media queries breakpoints\n * -------------------------------------------------------------------------- */\n/*editor error animate*/\n/*@import \"~toastr/build/toastr.min.css\";*/\n\n.Navigation {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 2em 0 5em 0;\n  list-style: none;\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n\n.Navigation-item {\n  padding: 0 2em;\n}\n\n.Navigation-link {\n  padding: 0.5em 1em;\n  color: #21ce99;\n  text-decoration: none;\n  text-transform: uppercase;\n  cursor: pointer\n}\n\n.Navigation-link:hover {\n  border-bottom: 3px solid #21ce99;\n  color: #333;\n}\n\n", ""]);

  // exports


/***/ },
/* 27 */
/***/ function(module, exports) {

  module.exports = require("axios");

/***/ },
/* 28 */
/***/ function(module, exports) {

  module.exports = require("events");

/***/ },
/* 29 */
/***/ function(module, exports) {

  module.exports = require("flux");

/***/ },
/* 30 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 31 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createMemoryHistory");

/***/ },
/* 32 */
/***/ function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ },
/* 33 */
/***/ function(module, exports) {

  module.exports = require("js-cookie");

/***/ },
/* 34 */
/***/ function(module, exports) {

  module.exports = require("lodash");

/***/ },
/* 35 */
/***/ function(module, exports) {

  module.exports = require("loglevel");

/***/ },
/* 36 */
/***/ function(module, exports) {

  module.exports = require("react-bootstrap-table");

/***/ },
/* 37 */
/***/ function(module, exports) {

  module.exports = require("react-dom");

/***/ },
/* 38 */
/***/ function(module, exports) {

  module.exports = require("when");

/***/ }
/******/ ]);