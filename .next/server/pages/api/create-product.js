module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/create-product.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/session.js":
/*!************************!*\
  !*** ./lib/session.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return withSession; });
/* harmony import */ var next_iron_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-iron-session */ "next-iron-session");
/* harmony import */ var next_iron_session__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_iron_session__WEBPACK_IMPORTED_MODULE_0__);
// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions

function withSession(handler) {
  return Object(next_iron_session__WEBPACK_IMPORTED_MODULE_0__["withIronSession"])(handler, {
    password: process.env.SECRET_COOKIE_PASSWORD,
    cookieName: "next-iron-session/examples/next.js",
    cookieOptions: {
      // the next line allows to use the session in non-https environements like
      // Next.js dev mode (http://localhost:3000)
      secure: false
    }
  });
}

/***/ }),

/***/ "./pages/api/create-product.ts":
/*!*************************************!*\
  !*** ./pages/api/create-product.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/session */ "./lib/session.js");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);


const ProductSchema = new mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  category: {
    type: mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.SchemaTypes.ObjectId,
    ref: "Category"
  },
  brand: String,
  image: String,
  price: Number,
  rating: Number,
  numReviews: Number,
  countInStock: Number
});
mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connect("mongodb+srv://komsomolradio:irkytsk87@cluster0.melez.gcp.mongodb.net/vercel-amazemo?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
let Product;

try {
  // Trying to get the existing model to avoid OverwriteModelError
  Product = mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.model("Product");
} catch {
  Product = mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.model("Product", ProductSchema);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_session__WEBPACK_IMPORTED_MODULE_0__["default"])(async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    await newProduct.save();
    return res.status(201).json(newProduct);
  } catch (e) {
    return res.json({
      message: "Failed to create product",
      ok: false
    });
  }
}));

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "next-iron-session":
/*!************************************!*\
  !*** external "next-iron-session" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-iron-session");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL3Nlc3Npb24uanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2NyZWF0ZS1wcm9kdWN0LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1pcm9uLXNlc3Npb25cIiJdLCJuYW1lcyI6WyJ3aXRoU2Vzc2lvbiIsImhhbmRsZXIiLCJ3aXRoSXJvblNlc3Npb24iLCJwYXNzd29yZCIsInByb2Nlc3MiLCJlbnYiLCJTRUNSRVRfQ09PS0lFX1BBU1NXT1JEIiwiY29va2llTmFtZSIsImNvb2tpZU9wdGlvbnMiLCJzZWN1cmUiLCJQcm9kdWN0U2NoZW1hIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwidW5pcXVlIiwiY2F0ZWdvcnkiLCJTY2hlbWFUeXBlcyIsIk9iamVjdElkIiwicmVmIiwiYnJhbmQiLCJpbWFnZSIsInByaWNlIiwiTnVtYmVyIiwicmF0aW5nIiwibnVtUmV2aWV3cyIsImNvdW50SW5TdG9jayIsImNvbm5lY3QiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ1c2VGaW5kQW5kTW9kaWZ5IiwiUHJvZHVjdCIsIm1vZGVsIiwicmVxIiwicmVzIiwibmV3UHJvZHVjdCIsImJvZHkiLCJzYXZlIiwic3RhdHVzIiwianNvbiIsImUiLCJtZXNzYWdlIiwib2siXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRWUsU0FBU0EsV0FBVCxDQUFxQkMsT0FBckIsRUFBOEI7QUFDM0MsU0FBT0MseUVBQWUsQ0FBQ0QsT0FBRCxFQUFVO0FBQzlCRSxZQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxzQkFEUTtBQUU5QkMsY0FBVSxFQUFFLG9DQUZrQjtBQUc5QkMsaUJBQWEsRUFBRTtBQUNiO0FBQ0E7QUFDQUMsWUFBTTtBQUhPO0FBSGUsR0FBVixDQUF0QjtBQVNELEM7Ozs7Ozs7Ozs7OztBQ2JEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBLE1BQU1DLGFBQWEsR0FBRyxJQUFJQywrQ0FBUSxDQUFDQyxNQUFiLENBQW9CO0FBQ3hDQyxNQUFJLEVBQUU7QUFBRUMsUUFBSSxFQUFFQyxNQUFSO0FBQWdCQyxZQUFRLEVBQUUsSUFBMUI7QUFBZ0NDLFVBQU0sRUFBRTtBQUF4QyxHQURrQztBQUV4Q0MsVUFBUSxFQUFFO0FBQUVKLFFBQUksRUFBRUgsK0NBQVEsQ0FBQ1EsV0FBVCxDQUFxQkMsUUFBN0I7QUFBdUNDLE9BQUcsRUFBRTtBQUE1QyxHQUY4QjtBQUd4Q0MsT0FBSyxFQUFFUCxNQUhpQztBQUl4Q1EsT0FBSyxFQUFFUixNQUppQztBQUt4Q1MsT0FBSyxFQUFFQyxNQUxpQztBQU14Q0MsUUFBTSxFQUFFRCxNQU5nQztBQU94Q0UsWUFBVSxFQUFFRixNQVA0QjtBQVF4Q0csY0FBWSxFQUFFSDtBQVIwQixDQUFwQixDQUF0QjtBQVdBZCwrQ0FBUSxDQUFDa0IsT0FBVCxDQUNFLGlIQURGLEVBRUU7QUFDRUMsaUJBQWUsRUFBRSxJQURuQjtBQUVFQyxvQkFBa0IsRUFBRSxJQUZ0QjtBQUdFQyxrQkFBZ0IsRUFBRTtBQUhwQixDQUZGO0FBU0EsSUFBSUMsT0FBSjs7QUFFQSxJQUFJO0FBQ0Y7QUFFQUEsU0FBTyxHQUFHdEIsK0NBQVEsQ0FBQ3VCLEtBQVQsQ0FBZSxTQUFmLENBQVY7QUFDRCxDQUpELENBSUUsTUFBTTtBQUNORCxTQUFPLEdBQUd0QiwrQ0FBUSxDQUFDdUIsS0FBVCxDQUFlLFNBQWYsRUFBMEJ4QixhQUExQixDQUFWO0FBQ0Q7O0FBRWNWLDJIQUFXLENBQUMsT0FBT21DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUM3QyxRQUFNQyxVQUFVLEdBQUcsSUFBSUosT0FBSixDQUFZRSxHQUFHLENBQUNHLElBQWhCLENBQW5COztBQUNBLE1BQUk7QUFDRixVQUFNRCxVQUFVLENBQUNFLElBQVgsRUFBTjtBQUNBLFdBQU9ILEdBQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCSixVQUFyQixDQUFQO0FBQ0QsR0FIRCxDQUdFLE9BQU9LLENBQVAsRUFBVTtBQUNWLFdBQU9OLEdBQUcsQ0FBQ0ssSUFBSixDQUFTO0FBQUVFLGFBQU8sRUFBRSwwQkFBWDtBQUF1Q0MsUUFBRSxFQUFFO0FBQTNDLEtBQVQsQ0FBUDtBQUNEO0FBQ0YsQ0FSeUIsQ0FBMUIsRTs7Ozs7Ozs7Ozs7QUNsQ0EscUM7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvYXBpL2NyZWF0ZS1wcm9kdWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvY3JlYXRlLXByb2R1Y3QudHNcIik7XG4iLCIvLyB0aGlzIGZpbGUgaXMgYSB3cmFwcGVyIHdpdGggZGVmYXVsdHMgdG8gYmUgdXNlZCBpbiBib3RoIEFQSSByb3V0ZXMgYW5kIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgIGZ1bmN0aW9uc1xyXG5pbXBvcnQgeyB3aXRoSXJvblNlc3Npb24gfSBmcm9tIFwibmV4dC1pcm9uLXNlc3Npb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhTZXNzaW9uKGhhbmRsZXIpIHtcclxuICByZXR1cm4gd2l0aElyb25TZXNzaW9uKGhhbmRsZXIsIHtcclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5TRUNSRVRfQ09PS0lFX1BBU1NXT1JELFxyXG4gICAgY29va2llTmFtZTogXCJuZXh0LWlyb24tc2Vzc2lvbi9leGFtcGxlcy9uZXh0LmpzXCIsXHJcbiAgICBjb29raWVPcHRpb25zOiB7XHJcbiAgICAgIC8vIHRoZSBuZXh0IGxpbmUgYWxsb3dzIHRvIHVzZSB0aGUgc2Vzc2lvbiBpbiBub24taHR0cHMgZW52aXJvbmVtZW50cyBsaWtlXHJcbiAgICAgIC8vIE5leHQuanMgZGV2IG1vZGUgKGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMClcclxuICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB3aXRoU2Vzc2lvbiBmcm9tIFwiLi4vLi4vbGliL3Nlc3Npb25cIjtcclxuXHJcbmltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IFByb2R1Y3RTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICBuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZSB9LFxyXG4gIGNhdGVnb3J5OiB7IHR5cGU6IG1vbmdvb3NlLlNjaGVtYVR5cGVzLk9iamVjdElkLCByZWY6IFwiQ2F0ZWdvcnlcIiB9LFxyXG4gIGJyYW5kOiBTdHJpbmcsXHJcbiAgaW1hZ2U6IFN0cmluZyxcclxuICBwcmljZTogTnVtYmVyLFxyXG4gIHJhdGluZzogTnVtYmVyLFxyXG4gIG51bVJldmlld3M6IE51bWJlcixcclxuICBjb3VudEluU3RvY2s6IE51bWJlcixcclxufSk7XHJcblxyXG5tb25nb29zZS5jb25uZWN0KFxyXG4gIFwibW9uZ29kYitzcnY6Ly9rb21zb21vbHJhZGlvOmlya3l0c2s4N0BjbHVzdGVyMC5tZWxlei5nY3AubW9uZ29kYi5uZXQvdmVyY2VsLWFtYXplbW8/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCIsXHJcbiAge1xyXG4gICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4gICAgdXNlRmluZEFuZE1vZGlmeTogZmFsc2UsXHJcbiAgfVxyXG4pO1xyXG5cclxubGV0IFByb2R1Y3Q7XHJcblxyXG50cnkge1xyXG4gIC8vIFRyeWluZyB0byBnZXQgdGhlIGV4aXN0aW5nIG1vZGVsIHRvIGF2b2lkIE92ZXJ3cml0ZU1vZGVsRXJyb3JcclxuXHJcbiAgUHJvZHVjdCA9IG1vbmdvb3NlLm1vZGVsKFwiUHJvZHVjdFwiKTtcclxufSBjYXRjaCB7XHJcbiAgUHJvZHVjdCA9IG1vbmdvb3NlLm1vZGVsKFwiUHJvZHVjdFwiLCBQcm9kdWN0U2NoZW1hKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFNlc3Npb24oYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgY29uc3QgbmV3UHJvZHVjdCA9IG5ldyBQcm9kdWN0KHJlcS5ib2R5KTtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgbmV3UHJvZHVjdC5zYXZlKCk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24obmV3UHJvZHVjdCk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5qc29uKHsgbWVzc2FnZTogXCJGYWlsZWQgdG8gY3JlYXRlIHByb2R1Y3RcIiwgb2s6IGZhbHNlIH0pO1xyXG4gIH1cclxufSk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtaXJvbi1zZXNzaW9uXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=