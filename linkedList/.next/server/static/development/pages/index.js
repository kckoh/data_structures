module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ListNode.js":
/*!********************************!*\
  !*** ./components/ListNode.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class ListNode {
  constructor(d) {
    this.data = d;
    this.next = null;
  }

  appendToTail(d) {
    var end = new ListNode(d);
    var n = this;

    while (n.next != null) {
      n = n.next;
    }

    n.next = end;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ListNode);

/***/ }),

/***/ "./components/SumLists.js":
/*!********************************!*\
  !*** ./components/SumLists.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListNode.js */ "./components/ListNode.js");

var n1 = new _ListNode_js__WEBPACK_IMPORTED_MODULE_0__["default"](7);
var n2 = new _ListNode_js__WEBPACK_IMPORTED_MODULE_0__["default"](5);
var temp;
var n3 = new _ListNode_js__WEBPACK_IMPORTED_MODULE_0__["default"](0);
n3.appendToTail(0);
n3.appendToTail(0);
n1.appendToTail(1);
n1.appendToTail(6);
n2.appendToTail(9);
n2.appendToTail(2);

do {
  temp = n1.data + n2.data;

  if (temp >= 10) {
    temp = temp % 10;
    n3.next.data = 1;
  }

  if (n3.data == 0) {
    n3.data = temp;
  } else {
    n3.data += temp;
  }

  console.log(n3.data);
  n1 = n1.next;
  n2 = n2.next;
  n3 = n3.next;
} while (n1 != null);

console.log();

/***/ }),

/***/ "./components/linkedList.js":
/*!**********************************!*\
  !*** ./components/linkedList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class LinkedList {
  constructor(node) {
    this.value = node;
    this.next = null;
  }

  addNode(node) {
    //recursive way to addNode
    if (this.next != null) {
      this.next.addNode(node);
    } else {
      this.next = new LinkedList(node);
    }
  }

  deleteNode(head, target) {
    var headCopy = head;

    if (headCopy.value == target) {
      return head.next;
    }

    while (headCopy.next != null) {
      if (headCopy.value == target) {
        headCopy.next = headCopy.next.next;
        return head;
      }

      headCopy = headCopy.next;
    }

    return head;
  }

  transverse() {
    var array = [];
    array.push(this.value);
    var copyNext = this.next;

    while (copyNext != null) {
      array.push(copyNext.value);
      copyNext = copyNext.next;
    }

    console.log(array);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LinkedList);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_linkedList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/linkedList.js */ "./components/linkedList.js");
/* harmony import */ var _components_ListNode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ListNode.js */ "./components/ListNode.js");
/* harmony import */ var _components_SumLists_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SumLists.js */ "./components/SumLists.js");
var _jsxFileName = "/workspace/data_structures/linkedList/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const node = new _components_ListNode_js__WEBPACK_IMPORTED_MODULE_2__["default"](1);

const Index = () => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, "Hello Next.js"));

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /workspace/data_structures/linkedList/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map