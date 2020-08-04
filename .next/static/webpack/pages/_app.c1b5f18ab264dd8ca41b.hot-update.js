webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/cart/reducer.ts":
/*!*******************************!*\
  !*** ./store/cart/reducer.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reducer; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var cartInitialState = {
  cartItems: []
};
function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : cartInitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "CLIENT_ADD_TO_CART":
      var item = action.payload;
      var product = state.cartItems.find(function (x) {
        return x.product == item.product;
      });

      if (product) {
        return _objectSpread(_objectSpread({}, state), {}, {
          cartItems: state.cartItems.map(function (x) {
            return x.product == product.product ? item : x;
          })
        });
      } else {
        return _objectSpread(_objectSpread({}, state), {}, {
          cartItems: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.cartItems), [item])
        });
      }

    case "CLIENT_REMOVE_FROM_CART":
      return _objectSpread(_objectSpread({}, state), {}, {
        cartItems: state.cartItems.filter(function (item) {
          return item.product !== action.payload;
        })
      });

    default:
      return state;
  }
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./store/store.ts":
/*!************************!*\
  !*** ./store/store.ts ***!
  \************************/
/*! exports provided: wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _products_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products/reducer */ "./store/products/reducer.ts");
/* harmony import */ var _cart_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart/reducer */ "./store/cart/reducer.ts");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_7__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 // import count from "./count/reducer";
// import tick from "./tick/reducer";

 // import productDetails from "./productDetails/reducer";




var bindMiddleware = function bindMiddleware(middleware) {
  if (true) {
    var _require = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js"),
        composeWithDevTools = _require.composeWithDevTools;

    return composeWithDevTools(redux__WEBPACK_IMPORTED_MODULE_2__["applyMiddleware"].apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(middleware)));
  }

  return redux__WEBPACK_IMPORTED_MODULE_2__["applyMiddleware"].apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(middleware));
};

var combinedReducer = Object(redux__WEBPACK_IMPORTED_MODULE_2__["combineReducers"])({
  products: _products_reducer__WEBPACK_IMPORTED_MODULE_5__["default"],
  cart: _cart_reducer__WEBPACK_IMPORTED_MODULE_6__["default"]
});

var reducer = function reducer(state, action) {
  if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__["HYDRATE"]) {
    var nextState = _objectSpread(_objectSpread({}, state), action.payload);

    if (state.count) nextState.count = state.count; // preserve count value on client side navigation

    if (state.products.products.length) nextState.products = state.products;
    if (state.cart.cartItems.length) nextState.cart.cartItems = state.cart.cartItems;
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

var cartItems = js_cookie__WEBPACK_IMPORTED_MODULE_7___default.a.getJSON("cartItems") || []; // const initialState = { cart: { cartItems } };

var initStore = function initStore() {
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(reducer, bindMiddleware([redux_thunk__WEBPACK_IMPORTED_MODULE_4__["default"]]));
};

var wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__["createWrapper"])(initStore);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvY2FydC9yZWR1Y2VyLnRzIiwid2VicGFjazovL19OX0UvLi9zdG9yZS9zdG9yZS50cyJdLCJuYW1lcyI6WyJjYXJ0SW5pdGlhbFN0YXRlIiwiY2FydEl0ZW1zIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIml0ZW0iLCJwYXlsb2FkIiwicHJvZHVjdCIsImZpbmQiLCJ4IiwibWFwIiwiZmlsdGVyIiwiYmluZE1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlIiwicmVxdWlyZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJjb21iaW5lZFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJwcm9kdWN0cyIsImNhcnQiLCJIWURSQVRFIiwibmV4dFN0YXRlIiwiY291bnQiLCJsZW5ndGgiLCJDb29raWUiLCJnZXRKU09OIiwiaW5pdFN0b3JlIiwiY3JlYXRlU3RvcmUiLCJ0aHVua01pZGRsZXdhcmUiLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsZ0JBQWdCLEdBQUc7QUFDdkJDLFdBQVMsRUFBRTtBQURZLENBQXpCO0FBSWUsU0FBU0MsT0FBVCxHQUFtRDtBQUFBLE1BQWxDQyxLQUFrQyx1RUFBMUJILGdCQUEwQjtBQUFBLE1BQVJJLE1BQVE7O0FBQ2hFLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUssb0JBQUw7QUFDRSxVQUFNQyxJQUFJLEdBQUdGLE1BQU0sQ0FBQ0csT0FBcEI7QUFDQSxVQUFNQyxPQUFPLEdBQUdMLEtBQUssQ0FBQ0YsU0FBTixDQUFnQlEsSUFBaEIsQ0FBcUIsVUFBQ0MsQ0FBRDtBQUFBLGVBQU9BLENBQUMsQ0FBQ0YsT0FBRixJQUFhRixJQUFJLENBQUNFLE9BQXpCO0FBQUEsT0FBckIsQ0FBaEI7O0FBRUEsVUFBSUEsT0FBSixFQUFhO0FBQ1gsK0NBQ0tMLEtBREw7QUFFRUYsbUJBQVMsRUFBRUUsS0FBSyxDQUFDRixTQUFOLENBQWdCVSxHQUFoQixDQUFvQixVQUFDRCxDQUFEO0FBQUEsbUJBQzdCQSxDQUFDLENBQUNGLE9BQUYsSUFBYUEsT0FBTyxDQUFDQSxPQUFyQixHQUErQkYsSUFBL0IsR0FBc0NJLENBRFQ7QUFBQSxXQUFwQjtBQUZiO0FBTUQsT0FQRCxNQU9PO0FBQ0wsK0NBQVlQLEtBQVo7QUFBbUJGLG1CQUFTLHlHQUFNRSxLQUFLLENBQUNGLFNBQVosSUFBdUJLLElBQXZCO0FBQTVCO0FBQ0Q7O0FBQ0gsU0FBSyx5QkFBTDtBQUNFLDZDQUNLSCxLQURMO0FBRUVGLGlCQUFTLEVBQUVFLEtBQUssQ0FBQ0YsU0FBTixDQUFnQlcsTUFBaEIsQ0FDVCxVQUFDTixJQUFEO0FBQUEsaUJBQVVBLElBQUksQ0FBQ0UsT0FBTCxLQUFpQkosTUFBTSxDQUFDRyxPQUFsQztBQUFBLFNBRFM7QUFGYjs7QUFNRjtBQUNFLGFBQU9KLEtBQVA7QUF2Qko7QUF5QkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCRDtBQUNBO0NBRUE7QUFDQTs7Q0FFQTs7QUFDQTtBQUVBOztBQUVBLElBQU1VLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsVUFBRCxFQUFnQjtBQUNyQyxZQUEyQztBQUFBLG1CQUNUQyxtQkFBTyxDQUFDLGtGQUFELENBREU7QUFBQSxRQUNqQ0MsbUJBRGlDLFlBQ2pDQSxtQkFEaUM7O0FBRXpDLFdBQU9BLG1CQUFtQixDQUFDQyxxREFBZSxNQUFmLHNHQUFtQkgsVUFBbkIsRUFBRCxDQUExQjtBQUNEOztBQUNELFNBQU9HLHFEQUFlLE1BQWYsc0dBQW1CSCxVQUFuQixFQUFQO0FBQ0QsQ0FORDs7QUFRQSxJQUFNSSxlQUFlLEdBQUdDLDZEQUFlLENBQUM7QUFDdENDLFVBQVEsRUFBUkEseURBRHNDO0FBRXRDQyxNQUFJLEVBQUpBLHFEQUFJQTtBQUZrQyxDQUFELENBQXZDOztBQUtBLElBQU1uQixPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDakMsTUFBSUEsTUFBTSxDQUFDQyxJQUFQLEtBQWdCaUIsMERBQXBCLEVBQTZCO0FBQzNCLFFBQU1DLFNBQVMsbUNBQ1ZwQixLQURVLEdBRVZDLE1BQU0sQ0FBQ0csT0FGRyxDQUFmOztBQUlBLFFBQUlKLEtBQUssQ0FBQ3FCLEtBQVYsRUFBaUJELFNBQVMsQ0FBQ0MsS0FBVixHQUFrQnJCLEtBQUssQ0FBQ3FCLEtBQXhCLENBTFUsQ0FLcUI7O0FBQ2hELFFBQUlyQixLQUFLLENBQUNpQixRQUFOLENBQWVBLFFBQWYsQ0FBd0JLLE1BQTVCLEVBQW9DRixTQUFTLENBQUNILFFBQVYsR0FBcUJqQixLQUFLLENBQUNpQixRQUEzQjtBQUVwQyxRQUFJakIsS0FBSyxDQUFDa0IsSUFBTixDQUFXcEIsU0FBWCxDQUFxQndCLE1BQXpCLEVBQ0VGLFNBQVMsQ0FBQ0YsSUFBVixDQUFlcEIsU0FBZixHQUEyQkUsS0FBSyxDQUFDa0IsSUFBTixDQUFXcEIsU0FBdEM7QUFDRixXQUFPc0IsU0FBUDtBQUNELEdBWEQsTUFXTztBQUNMLFdBQU9MLGVBQWUsQ0FBQ2YsS0FBRCxFQUFRQyxNQUFSLENBQXRCO0FBQ0Q7QUFDRixDQWZEOztBQWlCQSxJQUFNSCxTQUFTLEdBQUd5QixnREFBTSxDQUFDQyxPQUFQLENBQWUsV0FBZixLQUErQixFQUFqRCxDLENBQ0E7O0FBRUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QixTQUFPQyx5REFBVyxDQUFDM0IsT0FBRCxFQUFVVyxjQUFjLENBQUMsQ0FBQ2lCLG1EQUFELENBQUQsQ0FBeEIsQ0FBbEI7QUFDRCxDQUZEOztBQUlPLElBQU1DLE9BQU8sR0FBR0Msd0VBQWEsQ0FBQ0osU0FBRCxDQUE3QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmMxYjVmMThhYjI2NGRkOGNhNDFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYXJ0SW5pdGlhbFN0YXRlID0ge1xyXG4gIGNhcnRJdGVtczogW10sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gY2FydEluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcIkNMSUVOVF9BRERfVE9fQ0FSVFwiOlxyXG4gICAgICBjb25zdCBpdGVtID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIGNvbnN0IHByb2R1Y3QgPSBzdGF0ZS5jYXJ0SXRlbXMuZmluZCgoeCkgPT4geC5wcm9kdWN0ID09IGl0ZW0ucHJvZHVjdCk7XHJcblxyXG4gICAgICBpZiAocHJvZHVjdCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGNhcnRJdGVtczogc3RhdGUuY2FydEl0ZW1zLm1hcCgoeCkgPT5cclxuICAgICAgICAgICAgeC5wcm9kdWN0ID09IHByb2R1Y3QucHJvZHVjdCA/IGl0ZW0gOiB4XHJcbiAgICAgICAgICApLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNhcnRJdGVtczogWy4uLnN0YXRlLmNhcnRJdGVtcywgaXRlbV0gfTtcclxuICAgICAgfVxyXG4gICAgY2FzZSBcIkNMSUVOVF9SRU1PVkVfRlJPTV9DQVJUXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2FydEl0ZW1zOiBzdGF0ZS5jYXJ0SXRlbXMuZmlsdGVyKFxyXG4gICAgICAgICAgKGl0ZW0pID0+IGl0ZW0ucHJvZHVjdCAhPT0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgICApLFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHsgSFlEUkFURSwgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtdGh1bmtcIjtcclxuLy8gaW1wb3J0IGNvdW50IGZyb20gXCIuL2NvdW50L3JlZHVjZXJcIjtcclxuLy8gaW1wb3J0IHRpY2sgZnJvbSBcIi4vdGljay9yZWR1Y2VyXCI7XHJcbmltcG9ydCBwcm9kdWN0cyBmcm9tIFwiLi9wcm9kdWN0cy9yZWR1Y2VyXCI7XHJcbi8vIGltcG9ydCBwcm9kdWN0RGV0YWlscyBmcm9tIFwiLi9wcm9kdWN0RGV0YWlscy9yZWR1Y2VyXCI7XHJcbmltcG9ydCBjYXJ0IGZyb20gXCIuL2NhcnQvcmVkdWNlclwiO1xyXG5pbXBvcnQgeyBzb21lLCBpc0VtcHR5IH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgQ29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbmNvbnN0IGJpbmRNaWRkbGV3YXJlID0gKG1pZGRsZXdhcmUpID0+IHtcclxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICBjb25zdCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7XHJcbiAgICByZXR1cm4gY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpO1xyXG4gIH1cclxuICByZXR1cm4gYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpO1xyXG59O1xyXG5cclxuY29uc3QgY29tYmluZWRSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBwcm9kdWN0cyxcclxuICBjYXJ0LFxyXG59KTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gSFlEUkFURSkge1xyXG4gICAgY29uc3QgbmV4dFN0YXRlID0ge1xyXG4gICAgICAuLi5zdGF0ZSwgLy8gdXNlIHByZXZpb3VzIHN0YXRlXHJcbiAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLCAvLyBhcHBseSBkZWx0YSBmcm9tIGh5ZHJhdGlvblxyXG4gICAgfTtcclxuICAgIGlmIChzdGF0ZS5jb3VudCkgbmV4dFN0YXRlLmNvdW50ID0gc3RhdGUuY291bnQ7IC8vIHByZXNlcnZlIGNvdW50IHZhbHVlIG9uIGNsaWVudCBzaWRlIG5hdmlnYXRpb25cclxuICAgIGlmIChzdGF0ZS5wcm9kdWN0cy5wcm9kdWN0cy5sZW5ndGgpIG5leHRTdGF0ZS5wcm9kdWN0cyA9IHN0YXRlLnByb2R1Y3RzO1xyXG5cclxuICAgIGlmIChzdGF0ZS5jYXJ0LmNhcnRJdGVtcy5sZW5ndGgpXHJcbiAgICAgIG5leHRTdGF0ZS5jYXJ0LmNhcnRJdGVtcyA9IHN0YXRlLmNhcnQuY2FydEl0ZW1zO1xyXG4gICAgcmV0dXJuIG5leHRTdGF0ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGNvbWJpbmVkUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBjYXJ0SXRlbXMgPSBDb29raWUuZ2V0SlNPTihcImNhcnRJdGVtc1wiKSB8fCBbXTtcclxuLy8gY29uc3QgaW5pdGlhbFN0YXRlID0geyBjYXJ0OiB7IGNhcnRJdGVtcyB9IH07XHJcblxyXG5jb25zdCBpbml0U3RvcmUgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGJpbmRNaWRkbGV3YXJlKFt0aHVua01pZGRsZXdhcmVdKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoaW5pdFN0b3JlKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==