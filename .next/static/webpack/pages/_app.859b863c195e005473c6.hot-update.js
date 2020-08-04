webpackHotUpdate_N_E("pages/_app",{

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
    var nextState = _objectSpread(_objectSpread({}, state), action.payload); // if (state.count) nextState.count = state.count; // preserve count value on client side navigation


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvc3RvcmUudHMiXSwibmFtZXMiOlsiYmluZE1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlIiwicmVxdWlyZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJjb21iaW5lZFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJwcm9kdWN0cyIsImNhcnQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSFlEUkFURSIsIm5leHRTdGF0ZSIsInBheWxvYWQiLCJsZW5ndGgiLCJjYXJ0SXRlbXMiLCJDb29raWUiLCJnZXRKU09OIiwiaW5pdFN0b3JlIiwiY3JlYXRlU3RvcmUiLCJ0aHVua01pZGRsZXdhcmUiLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTtBQUNBOztDQUVBOztBQUNBO0FBRUE7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxVQUFELEVBQWdCO0FBQ3JDLFlBQTJDO0FBQUEsbUJBQ1RDLG1CQUFPLENBQUMsa0ZBQUQsQ0FERTtBQUFBLFFBQ2pDQyxtQkFEaUMsWUFDakNBLG1CQURpQzs7QUFFekMsV0FBT0EsbUJBQW1CLENBQUNDLHFEQUFlLE1BQWYsc0dBQW1CSCxVQUFuQixFQUFELENBQTFCO0FBQ0Q7O0FBQ0QsU0FBT0cscURBQWUsTUFBZixzR0FBbUJILFVBQW5CLEVBQVA7QUFDRCxDQU5EOztBQVFBLElBQU1JLGVBQWUsR0FBR0MsNkRBQWUsQ0FBQztBQUN0Q0MsVUFBUSxFQUFSQSx5REFEc0M7QUFFdENDLE1BQUksRUFBSkEscURBQUlBO0FBRmtDLENBQUQsQ0FBdkM7O0FBS0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ2pDLE1BQUlBLE1BQU0sQ0FBQ0MsSUFBUCxLQUFnQkMsMERBQXBCLEVBQTZCO0FBQzNCLFFBQU1DLFNBQVMsbUNBQ1ZKLEtBRFUsR0FFVkMsTUFBTSxDQUFDSSxPQUZHLENBQWYsQ0FEMkIsQ0FLM0I7OztBQUNBLFFBQUlMLEtBQUssQ0FBQ0gsUUFBTixDQUFlQSxRQUFmLENBQXdCUyxNQUE1QixFQUFvQ0YsU0FBUyxDQUFDUCxRQUFWLEdBQXFCRyxLQUFLLENBQUNILFFBQTNCO0FBRXBDLFFBQUlHLEtBQUssQ0FBQ0YsSUFBTixDQUFXUyxTQUFYLENBQXFCRCxNQUF6QixFQUNFRixTQUFTLENBQUNOLElBQVYsQ0FBZVMsU0FBZixHQUEyQlAsS0FBSyxDQUFDRixJQUFOLENBQVdTLFNBQXRDO0FBQ0YsV0FBT0gsU0FBUDtBQUNELEdBWEQsTUFXTztBQUNMLFdBQU9ULGVBQWUsQ0FBQ0ssS0FBRCxFQUFRQyxNQUFSLENBQXRCO0FBQ0Q7QUFDRixDQWZEOztBQWlCQSxJQUFNTSxTQUFTLEdBQUdDLGdEQUFNLENBQUNDLE9BQVAsQ0FBZSxXQUFmLEtBQStCLEVBQWpELEMsQ0FDQTs7QUFFQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCLFNBQU9DLHlEQUFXLENBQUNaLE9BQUQsRUFBVVQsY0FBYyxDQUFDLENBQUNzQixtREFBRCxDQUFELENBQXhCLENBQWxCO0FBQ0QsQ0FGRDs7QUFJTyxJQUFNQyxPQUFPLEdBQUdDLHdFQUFhLENBQUNKLFNBQUQsQ0FBN0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC44NTliODYzYzE5NWUwMDU0NzNjNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IEhZRFJBVEUsIGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXRodW5rXCI7XHJcbi8vIGltcG9ydCBjb3VudCBmcm9tIFwiLi9jb3VudC9yZWR1Y2VyXCI7XHJcbi8vIGltcG9ydCB0aWNrIGZyb20gXCIuL3RpY2svcmVkdWNlclwiO1xyXG5pbXBvcnQgcHJvZHVjdHMgZnJvbSBcIi4vcHJvZHVjdHMvcmVkdWNlclwiO1xyXG4vLyBpbXBvcnQgcHJvZHVjdERldGFpbHMgZnJvbSBcIi4vcHJvZHVjdERldGFpbHMvcmVkdWNlclwiO1xyXG5pbXBvcnQgY2FydCBmcm9tIFwiLi9jYXJ0L3JlZHVjZXJcIjtcclxuaW1wb3J0IHsgc29tZSwgaXNFbXB0eSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IENvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG5jb25zdCBiaW5kTWlkZGxld2FyZSA9IChtaWRkbGV3YXJlKSA9PiB7XHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgY29uc3QgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpO1xyXG4gICAgcmV0dXJuIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpKTtcclxuICB9XHJcbiAgcmV0dXJuIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKTtcclxufTtcclxuXHJcbmNvbnN0IGNvbWJpbmVkUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgcHJvZHVjdHMsXHJcbiAgY2FydCxcclxufSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBpZiAoYWN0aW9uLnR5cGUgPT09IEhZRFJBVEUpIHtcclxuICAgIGNvbnN0IG5leHRTdGF0ZSA9IHtcclxuICAgICAgLi4uc3RhdGUsIC8vIHVzZSBwcmV2aW91cyBzdGF0ZVxyXG4gICAgICAuLi5hY3Rpb24ucGF5bG9hZCwgLy8gYXBwbHkgZGVsdGEgZnJvbSBoeWRyYXRpb25cclxuICAgIH07XHJcbiAgICAvLyBpZiAoc3RhdGUuY291bnQpIG5leHRTdGF0ZS5jb3VudCA9IHN0YXRlLmNvdW50OyAvLyBwcmVzZXJ2ZSBjb3VudCB2YWx1ZSBvbiBjbGllbnQgc2lkZSBuYXZpZ2F0aW9uXHJcbiAgICBpZiAoc3RhdGUucHJvZHVjdHMucHJvZHVjdHMubGVuZ3RoKSBuZXh0U3RhdGUucHJvZHVjdHMgPSBzdGF0ZS5wcm9kdWN0cztcclxuXHJcbiAgICBpZiAoc3RhdGUuY2FydC5jYXJ0SXRlbXMubGVuZ3RoKVxyXG4gICAgICBuZXh0U3RhdGUuY2FydC5jYXJ0SXRlbXMgPSBzdGF0ZS5jYXJ0LmNhcnRJdGVtcztcclxuICAgIHJldHVybiBuZXh0U3RhdGU7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBjb21iaW5lZFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgY2FydEl0ZW1zID0gQ29va2llLmdldEpTT04oXCJjYXJ0SXRlbXNcIikgfHwgW107XHJcbi8vIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgY2FydDogeyBjYXJ0SXRlbXMgfSB9O1xyXG5cclxuY29uc3QgaW5pdFN0b3JlID0gKCkgPT4ge1xyXG4gIHJldHVybiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBiaW5kTWlkZGxld2FyZShbdGh1bmtNaWRkbGV3YXJlXSkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGluaXRTdG9yZSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=