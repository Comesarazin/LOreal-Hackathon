(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tom_select_dist_css_tom_select_default_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tom-select/dist/css/tom-select.default.css */ "./node_modules/tom-select/dist/css/tom-select.default.css");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'symfony--ux-autocomplete--autocomplete': Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-autocomplete/dist/controller.js */ "./node_modules/@symfony/ux-autocomplete/dist/controller.js")),
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }













function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);
  var _super = _createSuper(_default);
  function _default() {
    _classCallCheck(this, _default);
    return _super.apply(this, arguments);
  }
  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__.Controller);


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap.js */ "./assets/bootstrap.js");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _images_logo_ConsumerPrediction_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/logo_ConsumerPrediction.png */ "./assets/images/logo_ConsumerPrediction.png");

/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)


__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
var html;
html = "<img src=\"".concat(_images_logo_ConsumerPrediction_png__WEBPACK_IMPORTED_MODULE_2__, "\" alt=\"logo\">");

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nHookWebpackError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: expected \"{\".\n   ╷\n77 │ @import \"wcs\";\r\n   │              ^\n   ╵\n  assets\\styles\\app.scss 77:14  root stylesheet\n    at tryRunOrWebpackError (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\webpack\\lib\\HookWebpackError.js:88:9)\n    at __webpack_require_module__ (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\webpack\\lib\\Compilation.js:5058:12)\n    at __webpack_require__ (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\webpack\\lib\\Compilation.js:5015:18)\n    at C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\webpack\\lib\\Compilation.js:5086:20\n    at symbolIterator (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\neo-async\\async.js:3485:9)\n    at done (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\neo-async\\async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\tapable\\lib\\Hook.js:18:14)\n    at C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\webpack\\lib\\Compilation.js:4993:43\n    at symbolIterator (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\neo-async\\async.js:3482:9)\n    at timesSync (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\neo-async\\async.js:2297:7)\n    at Object.eachLimit (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\neo-async\\async.js:3463:5)\n    at C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\webpack\\lib\\Compilation.js:4958:16\n    at symbolIterator (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\neo-async\\async.js:3485:9)\n    at timesSync (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\neo-async\\async.js:2297:7)\n    at Object.eachLimit (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\neo-async\\async.js:3463:5)\n    at C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\webpack\\lib\\Compilation.js:4926:15\n    at symbolIterator (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\neo-async\\async.js:3485:9)\n    at done (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\neo-async\\async.js:3527:9)\n    at C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\webpack\\lib\\Compilation.js:4873:8\n    at C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\webpack\\lib\\Compilation.js:3352:32\n    at C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\webpack\\lib\\HookWebpackError.js:68:3\n    at Hook.eval [as callAsync] (eval at create (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Cache.store (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\webpack\\lib\\Cache.js:107:20)\n    at ItemCacheFacade.store (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\webpack\\lib\\CacheFacade.js:137:15)\n    at C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\webpack\\lib\\Compilation.js:3352:11\n    at C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\webpack\\lib\\Cache.js:93:5\n    at Hook.eval [as callAsync] (eval at create (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at Cache.get (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\webpack\\lib\\Cache.js:75:18)\n    at ItemCacheFacade.get (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\webpack\\lib\\CacheFacade.js:111:15)\n    at Compilation._codeGenerationModule (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\webpack\\lib\\Compilation.js:3322:9)\n    at codeGen (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\webpack\\lib\\Compilation.js:4861:11)\n    at symbolIterator (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\neo-async\\async.js:3482:9)\n    at timesSync (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\neo-async\\async.js:2297:7)\n    at Object.eachLimit (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\neo-async\\async.js:3463:5)\n    at C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\webpack\\lib\\Compilation.js:4891:14\n    at processQueue (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\webpack\\lib\\util\\processAsyncTree.js:55:4)\n    at process.processTicksAndRejections (node:internal/process/task_queues:77:11)\n-- inner error --\nError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: expected \"{\".\n   ╷\n77 │ @import \"wcs\";\r\n   │              ^\n   ╵\n  assets\\styles\\app.scss 77:14  root stylesheet\n    at Object.<anonymous> (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\css-loader\\dist\\cjs.js??ruleSet[1].rules[4].oneOf[1].use[1]!C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\resolve-url-loader\\index.js??ruleSet[1].rules[4].oneOf[1].use[2]!C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\sass-loader\\dist\\cjs.js??ruleSet[1].rules[4].oneOf[1].use[3]!C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\assets\\styles\\app.scss:1:7)\n    at C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\webpack\\lib\\javascript\\JavascriptModulesPlugin.js:441:11\n    at Hook.eval [as call] (eval at create (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\tapable\\lib\\HookCodeFactory.js:19:10), <anonymous>:7:1)\n    at Hook.CALL_DELEGATE [as _call] (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\tapable\\lib\\Hook.js:14:14)\n    at C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\webpack\\lib\\Compilation.js:5060:39\n    at tryRunOrWebpackError (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\webpack\\lib\\HookWebpackError.js:83:7)\n    at __webpack_require_module__ (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\webpack\\lib\\Compilation.js:5058:12)\n    at __webpack_require__ (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\webpack\\lib\\Compilation.js:5015:18)\n    at C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\webpack\\lib\\Compilation.js:5086:20\n    at symbolIterator (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\neo-async\\async.js:3485:9)\n    at done (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\neo-async\\async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\tapable\\lib\\Hook.js:18:14)\n    at C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\webpack\\lib\\Compilation.js:4993:43\n    at symbolIterator (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\neo-async\\async.js:3482:9)\n    at timesSync (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\neo-async\\async.js:2297:7)\n    at Object.eachLimit (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\neo-async\\async.js:3463:5)\n    at C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\webpack\\lib\\Compilation.js:4958:16\n    at symbolIterator (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\neo-async\\async.js:3485:9)\n    at timesSync (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\neo-async\\async.js:2297:7)\n    at Object.eachLimit (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\neo-async\\async.js:3463:5)\n    at C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\webpack\\lib\\Compilation.js:4926:15\n    at symbolIterator (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\neo-async\\async.js:3485:9)\n    at done (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\neo-async\\async.js:3527:9)\n    at C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\webpack\\lib\\Compilation.js:4873:8\n    at C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\webpack\\lib\\Compilation.js:3352:32\n    at C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\webpack\\lib\\HookWebpackError.js:68:3\n    at Hook.eval [as callAsync] (eval at create (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Cache.store (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\webpack\\lib\\Cache.js:107:20)\n    at ItemCacheFacade.store (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\webpack\\lib\\CacheFacade.js:137:15)\n    at C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\webpack\\lib\\Compilation.js:3352:11\n    at C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\webpack\\lib\\Cache.js:93:5\n    at Hook.eval [as callAsync] (eval at create (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at Cache.get (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\webpack\\lib\\Cache.js:75:18)\n    at ItemCacheFacade.get (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\webpack\\lib\\CacheFacade.js:111:15)\n    at Compilation._codeGenerationModule (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\webpack\\lib\\Compilation.js:3322:9)\n    at codeGen (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\webpack\\lib\\Compilation.js:4861:11)\n    at symbolIterator (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\neo-async\\async.js:3482:9)\n    at timesSync (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\neo-async\\async.js:2297:7)\n    at Object.eachLimit (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\neo-async\\async.js:3463:5)\n    at C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\webpack\\lib\\Compilation.js:4891:14\n    at processQueue (C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\webpack\\lib\\util\\processAsyncTree.js:55:4)\n    at process.processTicksAndRejections (node:internal/process/task_queues:77:11)\n\nGenerated code for C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\css-loader\\dist\\cjs.js??ruleSet[1].rules[4].oneOf[1].use[1]!C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\resolve-url-loader\\index.js??ruleSet[1].rules[4].oneOf[1].use[2]!C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\node_modules\\sass-loader\\dist\\cjs.js??ruleSet[1].rules[4].oneOf[1].use[3]!C:\\Users\\Julie\\Wild_Code_School\\Hackaton-2\\glam-squad\\back-php\\assets\\styles\\app.scss\n1 | throw new Error(\"Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nSassError: expected \\\"{\\\".\\n   ╷\\n77 │ @import \\\"wcs\\\";\\r\\n   │              ^\\n   ╵\\n  assets\\\\styles\\\\app.scss 77:14  root stylesheet\");");

/***/ }),

/***/ "./assets/images/logo_ConsumerPrediction.png":
/*!***************************************************!*\
  !*** ./assets/images/logo_ConsumerPrediction.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/logo_ConsumerPrediction.e066bb05.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_symfony_ux-autocomple-acc701"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Qm9EO0FBQ3BELGlFQUFlO0FBQ2YsNENBQTRDLDJNQUFnRjtBQUM1SCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIK0M7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0VBQUE7RUFBQTtFQUFBO0lBQUE7SUFBQTtFQUFBO0VBQUE7SUFBQTtJQUFBLE9BVUksbUJBQVU7TUFDTixJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsV0FBVyxHQUFHLG1FQUFtRTtJQUNsRztFQUFDO0VBQUE7QUFBQSxFQUh3QkYsMkRBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYZjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDMkI7QUFHOEI7QUFFekRJLG1CQUFPLENBQUMsb0VBQVcsQ0FBQztBQUVwQixJQUFJQyxJQUFJO0FBQ1JBLElBQUksd0JBQWdCRixnRUFBSSxxQkFBZTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCcUI7O0FBRTVEO0FBQ08sSUFBTUksR0FBRyxHQUFHRCwwRUFBZ0IsQ0FBQ0YseUlBSW5DLENBQUM7O0FBRUY7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJpbXBvcnQgJ3RvbS1zZWxlY3QvZGlzdC9jc3MvdG9tLXNlbGVjdC5kZWZhdWx0LmNzcyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gICdzeW1mb255LS11eC1hdXRvY29tcGxldGUtLWF1dG9jb21wbGV0ZSc6IGltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovICdAc3ltZm9ueS91eC1hdXRvY29tcGxldGUvZGlzdC9jb250cm9sbGVyLmpzJyksXG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xyXG5cclxuLypcclxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXHJcbiAqXHJcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXHJcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxyXG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxyXG4gKlxyXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XHJcbiAgICBjb25uZWN0KCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0ICcuL2Jvb3RzdHJhcC5qcyc7XHJcbi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XHJcblxyXG5cclxuaW1wb3J0IGxvZ28gIGZyb20gJy4vaW1hZ2VzL2xvZ29fQ29uc3VtZXJQcmVkaWN0aW9uLnBuZyc7XHJcblxyXG5yZXF1aXJlKCdib290c3RyYXAnKTtcclxuXHJcbmxldCBodG1sO1xyXG5odG1sID0gYDxpbWcgc3JjPVwiJHtsb2dvfVwiIGFsdD1cImxvZ29cIj5gO1xyXG5cclxuXHJcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xyXG5cclxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcclxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxyXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxyXG4gICAgdHJ1ZSxcclxuICAgIC9cXC5banRdc3g/JC9cclxuKSk7XHJcblxyXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxyXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XHJcbiJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiZWxlbWVudCIsInRleHRDb250ZW50IiwibG9nbyIsInJlcXVpcmUiLCJodG1sIiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsImNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9