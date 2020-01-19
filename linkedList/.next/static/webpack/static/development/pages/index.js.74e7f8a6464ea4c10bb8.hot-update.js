webpackHotUpdate("static/development/pages/index.js",{

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

  console.log(1);
  n1 = n1.next;
  n2 = n2.next;
  n3 = n3.next;
} while (n1.next != null);

console.log(n1);

/***/ })

})
//# sourceMappingURL=index.js.74e7f8a6464ea4c10bb8.hot-update.js.map