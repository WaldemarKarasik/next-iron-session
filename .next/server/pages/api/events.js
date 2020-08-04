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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/events.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/fetchJson.js":
/*!**************************!*\
  !*** ./lib/fetchJson.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fetchJson; });
async function fetchJson(...args) {
  try {
    const response = await fetch(...args); // if the server replies, there's always some data in json
    // if there's a network error, it will throw at the previous line

    const data = await response.json();

    if (response.ok) {
      return data;
    }

    const error = new Error(response.statusText);
    error.response = response;
    error.data = data;
    throw error;
  } catch (error) {
    if (!error.data) {
      error.data = {
        message: error.message
      };
    }

    throw error;
  }
}

/***/ }),

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

/***/ "./pages/api/events.js":
/*!*****************************!*\
  !*** ./pages/api/events.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/session */ "./lib/session.js");
/* harmony import */ var _lib_fetchJson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/fetchJson */ "./lib/fetchJson.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_session__WEBPACK_IMPORTED_MODULE_0__["default"])(async (req, res) => {
  const user = req.session.get("user");

  if (!(user === null || user === void 0 ? void 0 : user.isLoggedIn)) {
    res.status(401).end();
    return;
  }

  const url = `https://api.github.com/users/${user.login}/events`;

  try {
    // we check that the user exists on GitHub and store some data in session
    const events = await Object(_lib_fetchJson__WEBPACK_IMPORTED_MODULE_1__["default"])(url);
    res.json(events);
  } catch (error) {
    const {
      response: fetchResponse
    } = error;
    res.status((fetchResponse === null || fetchResponse === void 0 ? void 0 : fetchResponse.status) || 500).json(error.data);
  }
}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2ZldGNoSnNvbi5qcyIsIndlYnBhY2s6Ly8vLi9saWIvc2Vzc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZXZlbnRzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtaXJvbi1zZXNzaW9uXCIiXSwibmFtZXMiOlsiZmV0Y2hKc29uIiwiYXJncyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsIm9rIiwiZXJyb3IiLCJFcnJvciIsInN0YXR1c1RleHQiLCJtZXNzYWdlIiwid2l0aFNlc3Npb24iLCJoYW5kbGVyIiwid2l0aElyb25TZXNzaW9uIiwicGFzc3dvcmQiLCJwcm9jZXNzIiwiZW52IiwiU0VDUkVUX0NPT0tJRV9QQVNTV09SRCIsImNvb2tpZU5hbWUiLCJjb29raWVPcHRpb25zIiwic2VjdXJlIiwicmVxIiwicmVzIiwidXNlciIsInNlc3Npb24iLCJnZXQiLCJpc0xvZ2dlZEluIiwic3RhdHVzIiwiZW5kIiwidXJsIiwibG9naW4iLCJldmVudHMiLCJmZXRjaFJlc3BvbnNlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBZSxlQUFlQSxTQUFmLENBQXlCLEdBQUdDLElBQTVCLEVBQWtDO0FBQy9DLE1BQUk7QUFDRixVQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLEdBQUdGLElBQUosQ0FBNUIsQ0FERSxDQUdGO0FBQ0E7O0FBQ0EsVUFBTUcsSUFBSSxHQUFHLE1BQU1GLFFBQVEsQ0FBQ0csSUFBVCxFQUFuQjs7QUFFQSxRQUFJSCxRQUFRLENBQUNJLEVBQWIsRUFBaUI7QUFDZixhQUFPRixJQUFQO0FBQ0Q7O0FBRUQsVUFBTUcsS0FBSyxHQUFHLElBQUlDLEtBQUosQ0FBVU4sUUFBUSxDQUFDTyxVQUFuQixDQUFkO0FBQ0FGLFNBQUssQ0FBQ0wsUUFBTixHQUFpQkEsUUFBakI7QUFDQUssU0FBSyxDQUFDSCxJQUFOLEdBQWFBLElBQWI7QUFDQSxVQUFNRyxLQUFOO0FBQ0QsR0FmRCxDQWVFLE9BQU9BLEtBQVAsRUFBYztBQUNkLFFBQUksQ0FBQ0EsS0FBSyxDQUFDSCxJQUFYLEVBQWlCO0FBQ2ZHLFdBQUssQ0FBQ0gsSUFBTixHQUFhO0FBQUVNLGVBQU8sRUFBRUgsS0FBSyxDQUFDRztBQUFqQixPQUFiO0FBQ0Q7O0FBQ0QsVUFBTUgsS0FBTjtBQUNEO0FBQ0YsQzs7Ozs7Ozs7Ozs7O0FDdEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVlLFNBQVNJLFdBQVQsQ0FBcUJDLE9BQXJCLEVBQThCO0FBQzNDLFNBQU9DLHlFQUFlLENBQUNELE9BQUQsRUFBVTtBQUM5QkUsWUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsc0JBRFE7QUFFOUJDLGNBQVUsRUFBRSxvQ0FGa0I7QUFHOUJDLGlCQUFhLEVBQUU7QUFDYjtBQUNBO0FBQ0FDLFlBQU07QUFITztBQUhlLEdBQVYsQ0FBdEI7QUFTRCxDOzs7Ozs7Ozs7Ozs7QUNiRDtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRWVULDJIQUFXLENBQUMsT0FBT1UsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQzdDLFFBQU1DLElBQUksR0FBR0YsR0FBRyxDQUFDRyxPQUFKLENBQVlDLEdBQVosQ0FBZ0IsTUFBaEIsQ0FBYjs7QUFFQSxNQUFJLEVBQUNGLElBQUQsYUFBQ0EsSUFBRCx1QkFBQ0EsSUFBSSxDQUFFRyxVQUFQLENBQUosRUFBdUI7QUFDckJKLE9BQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLEdBQWhCO0FBQ0E7QUFDRDs7QUFFRCxRQUFNQyxHQUFHLEdBQUksZ0NBQStCTixJQUFJLENBQUNPLEtBQU0sU0FBdkQ7O0FBRUEsTUFBSTtBQUNGO0FBQ0EsVUFBTUMsTUFBTSxHQUFHLE1BQU0vQiw4REFBUyxDQUFDNkIsR0FBRCxDQUE5QjtBQUNBUCxPQUFHLENBQUNqQixJQUFKLENBQVMwQixNQUFUO0FBQ0QsR0FKRCxDQUlFLE9BQU94QixLQUFQLEVBQWM7QUFDZCxVQUFNO0FBQUVMLGNBQVEsRUFBRThCO0FBQVosUUFBOEJ6QixLQUFwQztBQUNBZSxPQUFHLENBQUNLLE1BQUosQ0FBVyxDQUFBSyxhQUFhLFNBQWIsSUFBQUEsYUFBYSxXQUFiLFlBQUFBLGFBQWEsQ0FBRUwsTUFBZixLQUF5QixHQUFwQyxFQUF5Q3RCLElBQXpDLENBQThDRSxLQUFLLENBQUNILElBQXBEO0FBQ0Q7QUFDRixDQWxCeUIsQ0FBMUIsRTs7Ozs7Ozs7Ozs7QUNIQSw4QyIsImZpbGUiOiJwYWdlcy9hcGkvZXZlbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvZXZlbnRzLmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hKc29uKC4uLmFyZ3MpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCguLi5hcmdzKTtcclxuXHJcbiAgICAvLyBpZiB0aGUgc2VydmVyIHJlcGxpZXMsIHRoZXJlJ3MgYWx3YXlzIHNvbWUgZGF0YSBpbiBqc29uXHJcbiAgICAvLyBpZiB0aGVyZSdzIGEgbmV0d29yayBlcnJvciwgaXQgd2lsbCB0aHJvdyBhdCB0aGUgcHJldmlvdXMgbGluZVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xyXG4gICAgZXJyb3IuZGF0YSA9IGRhdGE7XHJcbiAgICB0aHJvdyBlcnJvcjtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgaWYgKCFlcnJvci5kYXRhKSB7XHJcbiAgICAgIGVycm9yLmRhdGEgPSB7IG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfTtcclxuICAgIH1cclxuICAgIHRocm93IGVycm9yO1xyXG4gIH1cclxufVxyXG4iLCIvLyB0aGlzIGZpbGUgaXMgYSB3cmFwcGVyIHdpdGggZGVmYXVsdHMgdG8gYmUgdXNlZCBpbiBib3RoIEFQSSByb3V0ZXMgYW5kIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgIGZ1bmN0aW9uc1xyXG5pbXBvcnQgeyB3aXRoSXJvblNlc3Npb24gfSBmcm9tIFwibmV4dC1pcm9uLXNlc3Npb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhTZXNzaW9uKGhhbmRsZXIpIHtcclxuICByZXR1cm4gd2l0aElyb25TZXNzaW9uKGhhbmRsZXIsIHtcclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5TRUNSRVRfQ09PS0lFX1BBU1NXT1JELFxyXG4gICAgY29va2llTmFtZTogXCJuZXh0LWlyb24tc2Vzc2lvbi9leGFtcGxlcy9uZXh0LmpzXCIsXHJcbiAgICBjb29raWVPcHRpb25zOiB7XHJcbiAgICAgIC8vIHRoZSBuZXh0IGxpbmUgYWxsb3dzIHRvIHVzZSB0aGUgc2Vzc2lvbiBpbiBub24taHR0cHMgZW52aXJvbmVtZW50cyBsaWtlXHJcbiAgICAgIC8vIE5leHQuanMgZGV2IG1vZGUgKGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMClcclxuICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB3aXRoU2Vzc2lvbiBmcm9tIFwiLi4vLi4vbGliL3Nlc3Npb25cIjtcclxuaW1wb3J0IGZldGNoSnNvbiBmcm9tIFwiLi4vLi4vbGliL2ZldGNoSnNvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFNlc3Npb24oYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgY29uc3QgdXNlciA9IHJlcS5zZXNzaW9uLmdldChcInVzZXJcIik7XHJcblxyXG4gIGlmICghdXNlcj8uaXNMb2dnZWRJbikge1xyXG4gICAgcmVzLnN0YXR1cyg0MDEpLmVuZCgpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHt1c2VyLmxvZ2lufS9ldmVudHNgO1xyXG5cclxuICB0cnkge1xyXG4gICAgLy8gd2UgY2hlY2sgdGhhdCB0aGUgdXNlciBleGlzdHMgb24gR2l0SHViIGFuZCBzdG9yZSBzb21lIGRhdGEgaW4gc2Vzc2lvblxyXG4gICAgY29uc3QgZXZlbnRzID0gYXdhaXQgZmV0Y2hKc29uKHVybCk7XHJcbiAgICByZXMuanNvbihldmVudHMpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zdCB7IHJlc3BvbnNlOiBmZXRjaFJlc3BvbnNlIH0gPSBlcnJvcjtcclxuICAgIHJlcy5zdGF0dXMoZmV0Y2hSZXNwb25zZT8uc3RhdHVzIHx8IDUwMCkuanNvbihlcnJvci5kYXRhKTtcclxuICB9XHJcbn0pO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWlyb24tc2Vzc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9