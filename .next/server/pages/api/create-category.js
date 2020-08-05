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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/create-category.ts");
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

/***/ "./pages/api/create-category.ts":
/*!**************************************!*\
  !*** ./pages/api/create-category.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/session */ "./lib/session.js");


const CategorySchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  products: [{
    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.SchemaTypes.ObjectId,
    ref: "Product"
  }]
});
mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect("mongodb+srv://komsomolradio:irkytsk87@cluster0.melez.gcp.mongodb.net/vercel-amazemo?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
let Category;

try {
  // Trying to get the existing model to avoid OverwriteModelError
  Category = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model("Category");
} catch {
  Category = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model("Category", CategorySchema);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_session__WEBPACK_IMPORTED_MODULE_1__["default"])(async (req, res) => {
  const category = new Category({
    name: req.body.name
  });

  try {
    const savedCategory = await category.save();
    return res.status(201).json(savedCategory);
  } catch (e) {
    return res.status(500).json(e);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL3Nlc3Npb24uanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2NyZWF0ZS1jYXRlZ29yeS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtaXJvbi1zZXNzaW9uXCIiXSwibmFtZXMiOlsid2l0aFNlc3Npb24iLCJoYW5kbGVyIiwid2l0aElyb25TZXNzaW9uIiwicGFzc3dvcmQiLCJwcm9jZXNzIiwiZW52IiwiU0VDUkVUX0NPT0tJRV9QQVNTV09SRCIsImNvb2tpZU5hbWUiLCJjb29raWVPcHRpb25zIiwic2VjdXJlIiwiQ2F0ZWdvcnlTY2hlbWEiLCJtb25nb29zZSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ1bmlxdWUiLCJwcm9kdWN0cyIsIlNjaGVtYVR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJjb25uZWN0IiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwidXNlRmluZEFuZE1vZGlmeSIsIkNhdGVnb3J5IiwibW9kZWwiLCJyZXEiLCJyZXMiLCJjYXRlZ29yeSIsImJvZHkiLCJzYXZlZENhdGVnb3J5Iiwic2F2ZSIsInN0YXR1cyIsImpzb24iLCJlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVlLFNBQVNBLFdBQVQsQ0FBcUJDLE9BQXJCLEVBQThCO0FBQzNDLFNBQU9DLHlFQUFlLENBQUNELE9BQUQsRUFBVTtBQUM5QkUsWUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsc0JBRFE7QUFFOUJDLGNBQVUsRUFBRSxvQ0FGa0I7QUFHOUJDLGlCQUFhLEVBQUU7QUFDYjtBQUNBO0FBQ0FDLFlBQU07QUFITztBQUhlLEdBQVYsQ0FBdEI7QUFTRCxDOzs7Ozs7Ozs7Ozs7QUNiRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSxNQUFNQyxjQUFjLEdBQUcsSUFBSUMsK0NBQVEsQ0FBQ0MsTUFBYixDQUFvQjtBQUN6Q0MsTUFBSSxFQUFFO0FBQUVDLFFBQUksRUFBRUMsTUFBUjtBQUFnQkMsWUFBUSxFQUFFLElBQTFCO0FBQWdDQyxVQUFNLEVBQUU7QUFBeEMsR0FEbUM7QUFFekNDLFVBQVEsRUFBRSxDQUFDO0FBQUVKLFFBQUksRUFBRUgsK0NBQVEsQ0FBQ1EsV0FBVCxDQUFxQkMsUUFBN0I7QUFBdUNDLE9BQUcsRUFBRTtBQUE1QyxHQUFEO0FBRitCLENBQXBCLENBQXZCO0FBS0FWLCtDQUFRLENBQUNXLE9BQVQsQ0FDRSxpSEFERixFQUVFO0FBQ0VDLGlCQUFlLEVBQUUsSUFEbkI7QUFFRUMsb0JBQWtCLEVBQUUsSUFGdEI7QUFHRUMsa0JBQWdCLEVBQUU7QUFIcEIsQ0FGRjtBQVNBLElBQUlDLFFBQUo7O0FBRUEsSUFBSTtBQUNGO0FBRUFBLFVBQVEsR0FBR2YsK0NBQVEsQ0FBQ2dCLEtBQVQsQ0FBZSxVQUFmLENBQVg7QUFDRCxDQUpELENBSUUsTUFBTTtBQUNORCxVQUFRLEdBQUdmLCtDQUFRLENBQUNnQixLQUFULENBQWUsVUFBZixFQUEyQmpCLGNBQTNCLENBQVg7QUFDRDs7QUFFY1YsMkhBQVcsQ0FBQyxPQUFPNEIsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQzdDLFFBQU1DLFFBQVEsR0FBRyxJQUFJSixRQUFKLENBQWE7QUFBRWIsUUFBSSxFQUFFZSxHQUFHLENBQUNHLElBQUosQ0FBU2xCO0FBQWpCLEdBQWIsQ0FBakI7O0FBQ0EsTUFBSTtBQUNGLFVBQU1tQixhQUFhLEdBQUcsTUFBTUYsUUFBUSxDQUFDRyxJQUFULEVBQTVCO0FBQ0EsV0FBT0osR0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJILGFBQXJCLENBQVA7QUFDRCxHQUhELENBR0UsT0FBT0ksQ0FBUCxFQUFVO0FBQ1YsV0FBT1AsR0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJDLENBQXJCLENBQVA7QUFDRDtBQUNGLENBUnlCLENBQTFCLEU7Ozs7Ozs7Ozs7O0FDMUJBLHFDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2FwaS9jcmVhdGUtY2F0ZWdvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9jcmVhdGUtY2F0ZWdvcnkudHNcIik7XG4iLCIvLyB0aGlzIGZpbGUgaXMgYSB3cmFwcGVyIHdpdGggZGVmYXVsdHMgdG8gYmUgdXNlZCBpbiBib3RoIEFQSSByb3V0ZXMgYW5kIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgIGZ1bmN0aW9uc1xyXG5pbXBvcnQgeyB3aXRoSXJvblNlc3Npb24gfSBmcm9tIFwibmV4dC1pcm9uLXNlc3Npb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhTZXNzaW9uKGhhbmRsZXIpIHtcclxuICByZXR1cm4gd2l0aElyb25TZXNzaW9uKGhhbmRsZXIsIHtcclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5TRUNSRVRfQ09PS0lFX1BBU1NXT1JELFxyXG4gICAgY29va2llTmFtZTogXCJuZXh0LWlyb24tc2Vzc2lvbi9leGFtcGxlcy9uZXh0LmpzXCIsXHJcbiAgICBjb29raWVPcHRpb25zOiB7XHJcbiAgICAgIC8vIHRoZSBuZXh0IGxpbmUgYWxsb3dzIHRvIHVzZSB0aGUgc2Vzc2lvbiBpbiBub24taHR0cHMgZW52aXJvbmVtZW50cyBsaWtlXHJcbiAgICAgIC8vIE5leHQuanMgZGV2IG1vZGUgKGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMClcclxuICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuaW1wb3J0IHdpdGhTZXNzaW9uIGZyb20gXCIuLi8uLi9saWIvc2Vzc2lvblwiO1xyXG5jb25zdCBDYXRlZ29yeVNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gIG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlIH0sXHJcbiAgcHJvZHVjdHM6IFt7IHR5cGU6IG1vbmdvb3NlLlNjaGVtYVR5cGVzLk9iamVjdElkLCByZWY6IFwiUHJvZHVjdFwiIH1dLFxyXG59KTtcclxuXHJcbm1vbmdvb3NlLmNvbm5lY3QoXHJcbiAgXCJtb25nb2RiK3NydjovL2tvbXNvbW9scmFkaW86aXJreXRzazg3QGNsdXN0ZXIwLm1lbGV6LmdjcC5tb25nb2RiLm5ldC92ZXJjZWwtYW1hemVtbz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIixcclxuICB7XHJcbiAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbiAgICB1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZSxcclxuICB9XHJcbik7XHJcblxyXG5sZXQgQ2F0ZWdvcnk7XHJcblxyXG50cnkge1xyXG4gIC8vIFRyeWluZyB0byBnZXQgdGhlIGV4aXN0aW5nIG1vZGVsIHRvIGF2b2lkIE92ZXJ3cml0ZU1vZGVsRXJyb3JcclxuXHJcbiAgQ2F0ZWdvcnkgPSBtb25nb29zZS5tb2RlbChcIkNhdGVnb3J5XCIpO1xyXG59IGNhdGNoIHtcclxuICBDYXRlZ29yeSA9IG1vbmdvb3NlLm1vZGVsKFwiQ2F0ZWdvcnlcIiwgQ2F0ZWdvcnlTY2hlbWEpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU2Vzc2lvbihhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBjb25zdCBjYXRlZ29yeSA9IG5ldyBDYXRlZ29yeSh7IG5hbWU6IHJlcS5ib2R5Lm5hbWUgfSk7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHNhdmVkQ2F0ZWdvcnkgPSBhd2FpdCBjYXRlZ29yeS5zYXZlKCk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24oc2F2ZWRDYXRlZ29yeSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKGUpO1xyXG4gIH1cclxufSk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtaXJvbi1zZXNzaW9uXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=