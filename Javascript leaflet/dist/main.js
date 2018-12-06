/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./csvtoarray.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./csvtoarray.js":
/*!***********************!*\
  !*** ./csvtoarray.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { convertCSVToArray } = __webpack_require__(/*! convert-csv-to-array */ \"./node_modules/convert-csv-to-array/lib/index.js\");\r\nconst converter = __webpack_require__(/*! convert-csv-to-array */ \"./node_modules/convert-csv-to-array/lib/index.js\");\r\n\r\nconst array = convertCSVToArray(text, {\r\nheader: false,\r\n  type: 'array',\r\n  separator: ';'\r\n});\r\n\r\nalert(array[array.length-1]);\r\n\n\n//# sourceURL=webpack:///./csvtoarray.js?");

/***/ }),

/***/ "./node_modules/convert-csv-to-array/lib/helpers/check-if-valid.js":
/*!*************************************************************************!*\
  !*** ./node_modules/convert-csv-to-array/lib/helpers/check-if-valid.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.checkIfValid = void 0;\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar checkIfValid = function checkIfValid(data, _ref) {\n  var separator = _ref.separator;\n\n  if (typeof data !== 'string') {\n    throw new Error(\"data has to be typeof: \".concat(_typeof(''), \" but got typeof: \").concat(_typeof(data)));\n  } else if (!data.includes(separator)) {\n    throw new Error(\"data does not include separator: \".concat(separator));\n  }\n};\n\nexports.checkIfValid = checkIfValid;\n\n//# sourceURL=webpack:///./node_modules/convert-csv-to-array/lib/helpers/check-if-valid.js?");

/***/ }),

/***/ "./node_modules/convert-csv-to-array/lib/index.js":
/*!********************************************************!*\
  !*** ./node_modules/convert-csv-to-array/lib/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = exports.convertCSVToArray = void 0;\n\nvar _checkIfValid = __webpack_require__(/*! ./helpers/check-if-valid */ \"./node_modules/convert-csv-to-array/lib/helpers/check-if-valid.js\");\n\nvar _convertCsvToArrayOfArrays = __webpack_require__(/*! ./modules/convert-csv-to-array-of-arrays */ \"./node_modules/convert-csv-to-array/lib/modules/convert-csv-to-array-of-arrays.js\");\n\nvar _convertCsvToArrayOfObjects = __webpack_require__(/*! ./modules/convert-csv-to-array-of-objects */ \"./node_modules/convert-csv-to-array/lib/modules/convert-csv-to-array-of-objects.js\");\n\nvar convertCSVToArray = function convertCSVToArray(data) {\n  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n      header = _ref.header,\n      type = _ref.type,\n      separator = _ref.separator;\n\n  var thisOptions = {\n    header: header || true,\n    type: type || 'object',\n    separator: separator || ','\n  };\n  (0, _checkIfValid.checkIfValid)(data, thisOptions);\n\n  if (thisOptions.type === 'object') {\n    return (0, _convertCsvToArrayOfObjects.convertCSVToArrayOfObjects)(data, thisOptions);\n  }\n\n  return (0, _convertCsvToArrayOfArrays.convertCSVToArrayOfArrays)(data, thisOptions);\n};\n\nexports.convertCSVToArray = convertCSVToArray;\nvar _default = convertCSVToArray;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/convert-csv-to-array/lib/index.js?");

/***/ }),

/***/ "./node_modules/convert-csv-to-array/lib/modules/convert-csv-to-array-of-arrays.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/convert-csv-to-array/lib/modules/convert-csv-to-array-of-arrays.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.convertCSVToArrayOfArrays = void 0;\n\nvar _convertStringToNumber = __webpack_require__(/*! convert-string-to-number */ \"./node_modules/convert-string-to-number/lib/index.js\");\n\nvar convertCSVToArrayOfArrays = function convertCSVToArrayOfArrays(data, _ref) {\n  var header = _ref.header,\n      separator = _ref.separator;\n  var csv = data;\n  var array = [];\n  var rows = csv.split('\\n');\n  rows.forEach(function (row, idx) {\n    var values = row.split(separator);\n    var checkedAndConvertedValues = [];\n\n    if (rows.length - 1 !== idx && (!header && idx !== 0 || header)) {\n      values.forEach(function (value) {\n        var convertedToNumber = (0, _convertStringToNumber.convertStringToNumber)(value);\n        var thisValue = Number.isNaN(convertedToNumber) ? value : convertedToNumber;\n        checkedAndConvertedValues.push(thisValue);\n      });\n      array.push(checkedAndConvertedValues);\n    }\n  });\n  return array;\n};\n\nexports.convertCSVToArrayOfArrays = convertCSVToArrayOfArrays;\n\n//# sourceURL=webpack:///./node_modules/convert-csv-to-array/lib/modules/convert-csv-to-array-of-arrays.js?");

/***/ }),

/***/ "./node_modules/convert-csv-to-array/lib/modules/convert-csv-to-array-of-objects.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/convert-csv-to-array/lib/modules/convert-csv-to-array-of-objects.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.convertCSVToArrayOfObjects = void 0;\n\nvar _convertStringToNumber = __webpack_require__(/*! convert-string-to-number */ \"./node_modules/convert-string-to-number/lib/index.js\");\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar convertCSVToArrayOfObjects = function convertCSVToArrayOfObjects(data, _ref) {\n  var header = _ref.header,\n      separator = _ref.separator;\n  var csv = data;\n  var rows = csv.split('\\n');\n  var array = [];\n  var headerRow;\n  var headerObj;\n  var content = [];\n  rows.forEach(function (row, idx) {\n    if (idx === 0) {\n      headerRow = row.split(separator);\n\n      if (header) {\n        array.push(headerRow);\n      }\n\n      headerRow.forEach(function (headerItem) {\n        headerObj = Object.assign({}, headerObj, _defineProperty({}, headerItem, undefined));\n      });\n    } else if (rows.length - 1 !== idx) {\n      var values = row.split(separator);\n      values.forEach(function (value, i) {\n        var convertedToNumber = (0, _convertStringToNumber.convertStringToNumber)(value);\n        var thisValue = Number.isNaN(convertedToNumber) ? value : convertedToNumber;\n        headerObj = Object.assign({}, headerObj, _defineProperty({}, headerRow[i], thisValue));\n      });\n      content.push(headerObj);\n    }\n  });\n  array.push.apply(array, content);\n  return array;\n};\n\nexports.convertCSVToArrayOfObjects = convertCSVToArrayOfObjects;\n\n//# sourceURL=webpack:///./node_modules/convert-csv-to-array/lib/modules/convert-csv-to-array-of-objects.js?");

/***/ }),

/***/ "./node_modules/convert-string-to-number/lib/helpers/check-if-valid.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/convert-string-to-number/lib/helpers/check-if-valid.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.checkIfValid = void 0;\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar checkIfValid = function checkIfValid(value) {\n  if (typeof value !== 'string') {\n    throw new Error(\"value has to be typeof: 'string' but got typeof: '\".concat(_typeof(value), \"'\"));\n  }\n};\n\nexports.checkIfValid = checkIfValid;\n\n//# sourceURL=webpack:///./node_modules/convert-string-to-number/lib/helpers/check-if-valid.js?");

/***/ }),

/***/ "./node_modules/convert-string-to-number/lib/index.js":
/*!************************************************************!*\
  !*** ./node_modules/convert-string-to-number/lib/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = exports.convertStringToNumber = void 0;\n\nvar _checkIfValid = __webpack_require__(/*! ./helpers/check-if-valid */ \"./node_modules/convert-string-to-number/lib/helpers/check-if-valid.js\");\n\nvar convertStringToNumber = function convertStringToNumber(value) {\n  (0, _checkIfValid.checkIfValid)(value);\n\n  if (Number.isNaN(Number(value))) {\n    // if not a number\n    return NaN;\n  }\n\n  var float = parseFloat(value); // check if integer\n\n  if (float % 1 === 0) {\n    var int = parseInt(value, 10);\n    return int;\n  }\n\n  return float;\n};\n\nexports.convertStringToNumber = convertStringToNumber;\nvar _default = convertStringToNumber;\nexports.default = _default;\n\n//# sourceURL=webpack:///./node_modules/convert-string-to-number/lib/index.js?");

/***/ })

/******/ });