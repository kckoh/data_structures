webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/linkedList.js":
/*!**********************************!*\
  !*** ./components/linkedList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");



var LinkedList =
/*#__PURE__*/
function () {
  function LinkedList(node) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LinkedList);

    this.value = node;
    this.next = null;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LinkedList, [{
    key: "addNode",
    value: function addNode(node) {
      //recursive way to addNode
      if (this.next != null) {
        this.next.addNode(node);
      } else {
        this.next = new LinkedList(node);
      }
    }
  }, {
    key: "deleteNode",
    value: function deleteNode(head, target) {
      var headCopy = head;
      var copyNext = this.next;

      while (copyNext != null) {}
    }
  }, {
    key: "transverse",
    value: function transverse() {
      var array = [];
      array.push(this.value);
      var copyNext = this.next;

      while (copyNext != null) {
        array.push(copyNext.value);
        copyNext = copyNext.next;
      }

      console.log(array);
    }
  }]);

  return LinkedList;
}();

/* harmony default export */ __webpack_exports__["default"] = (LinkedList);

/***/ })

})
//# sourceMappingURL=index.js.d499842bd685528719bc.hot-update.js.map