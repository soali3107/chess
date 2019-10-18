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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/board */ "./src/scripts/board.js");
// create index.js in /src directory and import style /src / styles / index.scss

 // instance of  board

var a = new _scripts_board__WEBPACK_IMPORTED_MODULE_1__["default"]();
console.log(a); // node file.

/***/ }),

/***/ "./src/scripts/board.js":
/*!******************************!*\
  !*** ./src/scripts/board.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _piece_king__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./piece/king */ "./src/scripts/piece/king.js");
/* harmony import */ var _piece_knight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./piece/knight */ "./src/scripts/piece/knight.js");
/* harmony import */ var _piece_Queen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./piece/Queen */ "./src/scripts/piece/Queen.js");
/* harmony import */ var _piece_rook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./piece/rook */ "./src/scripts/piece/rook.js");
/* harmony import */ var _piece_bishop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./piece/bishop */ "./src/scripts/piece/bishop.js");
/* harmony import */ var _piece_nullpiece__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./piece/nullpiece */ "./src/scripts/piece/nullpiece.js");
/* harmony import */ var _piece_pawn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./piece/pawn */ "./src/scripts/piece/pawn.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import Piece from './piece/piece';








var Board =
/*#__PURE__*/
function () {
  function Board() {
    _classCallCheck(this, Board);

    this.rows = []; // this.noPiece = new NullPiece("null", this); 

    for (var i = 0; i < 8; i++) {
      this.rows[i] = [];

      for (var j = 0; j < 8; j++) {
        this.rows[i][j] = new _piece_nullpiece__WEBPACK_IMPORTED_MODULE_5__["default"]("null", this, [i, j]);
      }
    } // Might need to bind "this"


    this.populateBoard = this.populateBoard.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
    this.position = this.position.bind(this);
    this.populateBoard();
  }

  _createClass(Board, [{
    key: "populateBoard",
    value: function populateBoard() {
      var color = ["White", "Black"];

      for (var i = 0; i < this.rows.length; i++) {
        for (var j = 0; j < this.rows[i].length; j++) {
          var position = [i, j];

          if (i === 0 || i === 7) {
            // this.rows [position[0]][position[1]] = new (this.backRow(j))(color[i % 2], this, position);
            var chessPiece = this.backRow(j);
            this.rows[position[0]][position[1]] = new chessPiece(color[i % 2], this, position);
          } else if (i === 1 || i === 6) {
            this.rows[position[0]][position[1]] = new _piece_pawn__WEBPACK_IMPORTED_MODULE_6__["default"](color[(i + 1) % 2], this, position);
          }
        }
      }
    }
  }, {
    key: "backRow",
    value: function backRow(index) {
      var backPieces = [_piece_rook__WEBPACK_IMPORTED_MODULE_3__["default"], _piece_knight__WEBPACK_IMPORTED_MODULE_1__["default"], _piece_bishop__WEBPACK_IMPORTED_MODULE_4__["default"], _piece_Queen__WEBPACK_IMPORTED_MODULE_2__["default"], _piece_king__WEBPACK_IMPORTED_MODULE_0__["default"]];
      return backPieces[index % 5];
    }
  }, {
    key: "isEmpty",
    value: function isEmpty(pos) {
      return this.isValidPosition && this.rows[pos].color === 'null';
    }
  }, {
    key: "movePos",
    value: function movePos(startPos, endPos) {}
  }, {
    key: "isValidPosition",
    value: function isValidPosition(pos) {
      var bool = true;

      for (var i = 0; i < pos.length; i++) {
        if (pos[i] < 0 || pos[i] > 7) {
          bool = false;
        }
      }

      return bool;
    } //Newmethod

  }, {
    key: "position",
    value: function position(pos) {
      this.rows[pos];
    }
  }]);

  return Board;
}();

/* harmony default export */ __webpack_exports__["default"] = (Board);

/***/ }),

/***/ "./src/scripts/piece/Queen.js":
/*!************************************!*\
  !*** ./src/scripts/piece/Queen.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./piece */ "./src/scripts/piece/piece.js");
/* harmony import */ var _slideable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slideable */ "./src/scripts/piece/slideable.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Queen =
/*#__PURE__*/
function (_Piece) {
  _inherits(Queen, _Piece);

  function Queen(color, board, position) {
    var _this;

    _classCallCheck(this, Queen);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Queen).call(this, color, board, position));
    _this.status = false;
    return _this;
  }

  _createClass(Queen, [{
    key: "symbol",
    value: function symbol() {
      return "QUEEN";
    }
  }, {
    key: "moveDirections",
    value: function moveDirections() {
      return Object(_slideable__WEBPACK_IMPORTED_MODULE_1__["moves"])(_slideable__WEBPACK_IMPORTED_MODULE_1__["AxialDirections"].concat(_slideable__WEBPACK_IMPORTED_MODULE_1__["DiagonalDirections"]));
    }
  }]);

  return Queen;
}(_piece__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Queen);

/***/ }),

/***/ "./src/scripts/piece/bishop.js":
/*!*************************************!*\
  !*** ./src/scripts/piece/bishop.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./piece */ "./src/scripts/piece/piece.js");
/* harmony import */ var _slideable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slideable */ "./src/scripts/piece/slideable.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


 // let piece = NodeRequire './piece';

var Bishop =
/*#__PURE__*/
function (_Piece) {
  _inherits(Bishop, _Piece);

  function Bishop(color, board, position) {
    var _this;

    _classCallCheck(this, Bishop);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Bishop).call(this, color, board, position));
    _this.status = false;
    return _this;
  }

  _createClass(Bishop, [{
    key: "symbol",
    value: function symbol() {
      return "BISHOP";
    }
  }, {
    key: "moveDirections",
    value: function moveDirections() {
      return Object(_slideable__WEBPACK_IMPORTED_MODULE_1__["moves"])(_slideable__WEBPACK_IMPORTED_MODULE_1__["DiagonalDirections"]);
    }
  }]);

  return Bishop;
}(_piece__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Bishop);

/***/ }),

/***/ "./src/scripts/piece/king.js":
/*!***********************************!*\
  !*** ./src/scripts/piece/king.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./piece */ "./src/scripts/piece/piece.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var King =
/*#__PURE__*/
function (_Piece) {
  _inherits(King, _Piece);

  function King(color, board, position) {
    var _this;

    _classCallCheck(this, King);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(King).call(this, color, board, position));
    _this.status = true;
    return _this;
  }

  _createClass(King, [{
    key: "symbol",
    value: function symbol() {
      return "KING";
    }
  }, {
    key: "moveDirections",
    value: function moveDirections() {
      var moves = [[1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1], [1, -1]];
    }
  }]);

  return King;
}(_piece__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (King);

/***/ }),

/***/ "./src/scripts/piece/knight.js":
/*!*************************************!*\
  !*** ./src/scripts/piece/knight.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./piece */ "./src/scripts/piece/piece.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Knight =
/*#__PURE__*/
function (_Piece) {
  _inherits(Knight, _Piece);

  function Knight(color, board, position) {
    var _this;

    _classCallCheck(this, Knight);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Knight).call(this, color, board, position));
    _this.status = false;
    return _this;
  }

  _createClass(Knight, [{
    key: "symbol",
    value: function symbol() {
      return "KNIGHT";
    }
  }, {
    key: "moveDirections",
    value: function moveDirections() {
      var moves = [[1, 2], [2, 1], [1, -2], [2, -1], [-1, 2], [-2, 1], [-1, -2], [-2, -1]];
    }
  }]);

  return Knight;
}(_piece__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Knight);

/***/ }),

/***/ "./src/scripts/piece/nullpiece.js":
/*!****************************************!*\
  !*** ./src/scripts/piece/nullpiece.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./piece */ "./src/scripts/piece/piece.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var NullPiece =
/*#__PURE__*/
function (_Piece) {
  _inherits(NullPiece, _Piece);

  function NullPiece(color, board, position) {
    var _this;

    _classCallCheck(this, NullPiece);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NullPiece).call(this, color, board, position)); // this.board = board;
    // this.position = position;
    // this.color = "none";

    _this.symbol = "null";
    _this.moves = [];
    return _this;
  }

  return NullPiece;
}(_piece__WEBPACK_IMPORTED_MODULE_0__["default"]);

; //Singleton: https://www.sitepoint.com/javascript-design-patterns-singleton/

Object.freeze(NullPiece);
/* harmony default export */ __webpack_exports__["default"] = (NullPiece);

/***/ }),

/***/ "./src/scripts/piece/pawn.js":
/*!***********************************!*\
  !*** ./src/scripts/piece/pawn.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./piece */ "./src/scripts/piece/piece.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Pawn =
/*#__PURE__*/
function (_Piece) {
  _inherits(Pawn, _Piece);

  function Pawn(color, board, position) {
    var _this;

    _classCallCheck(this, Pawn);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Pawn).call(this, color, board, position));
    _this.status = false;
    _this.moveDirections = _this.moveDirections.bind(_assertThisInitialized(_this));
    _this.atStart = _this.atStart.bind(_assertThisInitialized(_this));
    _this.fowardDirections = _this.fowardDirections.bind(_assertThisInitialized(_this));
    _this.fowardSteps = _this.fowardSteps.bind(_assertThisInitialized(_this));
    _this.sideSteps = _this.sideSteps.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Pawn, [{
    key: "symbol",
    value: function symbol() {
      return "PAWN";
    }
  }, {
    key: "moveDirections",
    value: function moveDirections() {
      return this.fowardSteps().concat(this.sideSteps());
    }
  }, {
    key: "atStart",
    value: function atStart() {
      return (this.color === 'White' ? 1 : 6) === this.position[1];
    }
  }, {
    key: "fowardDirections",
    value: function fowardDirections() {
      return this.color === 'White' ? 1 : -1;
    }
  }, {
    key: "fowardSteps",
    value: function fowardSteps() {
      var oneStep = [this.position[0] + this.fowardDirections(), this.position[1]];
      var twoStep = [this.position[0] + 2 * this.fowardDirections(), this.position[1]];
      var steps = [];

      if (this.board.isValidPosition(oneStep) && this.board.isEmpty(oneStep)) {
        steps.push(oneStep);

        if (this.board.isValidPosition(twoStep) && this.board.isEmpty(twoStep) && this.atStart()) {
          steps.push(twoStep);
        }
      }

      return steps;
    }
  }, {
    key: "sideSteps",
    value: function sideSteps() {
      var oppositeColor = this.color === 'White' ? 'Black' : 'White';
      var steps = [];
      var moves = [[this.position[0] + this.fowardDirections, this.position[1] + 1], [this.position[0] + this.fowardDirections, this.position[1] - 1]];

      for (var i = 0; i < moves.length; i++) {
        if (this.board.isValidPosition(moves[i]) && this.board.rows[moves[i]].color === oppositeColor) {
          steps.push(moves[i]);
        }
      }

      return steps;
    }
  }]);

  return Pawn;
}(_piece__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Pawn);

/***/ }),

/***/ "./src/scripts/piece/piece.js":
/*!************************************!*\
  !*** ./src/scripts/piece/piece.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Piece =
/*#__PURE__*/
function () {
  function Piece(color, board, position) {
    _classCallCheck(this, Piece);

    this.color = color;
    this.board = board;
    this.position = position;
    this.status = false;
  }

  _createClass(Piece, [{
    key: "movePiece",
    value: function movePiece(startPos, endPos) {}
  }]);

  return Piece;
}();

/* harmony default export */ __webpack_exports__["default"] = (Piece);

/***/ }),

/***/ "./src/scripts/piece/rook.js":
/*!***********************************!*\
  !*** ./src/scripts/piece/rook.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./piece */ "./src/scripts/piece/piece.js");
/* harmony import */ var _slideable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slideable */ "./src/scripts/piece/slideable.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Rook =
/*#__PURE__*/
function (_Piece) {
  _inherits(Rook, _Piece);

  function Rook(color, board, position) {
    var _this;

    _classCallCheck(this, Rook);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Rook).call(this, color, board, position));
    _this.status = true;
    return _this;
  }

  _createClass(Rook, [{
    key: "symbol",
    value: function symbol() {
      return "ROOK";
    }
  }, {
    key: "moveDirections",
    value: function moveDirections() {
      return Object(_slideable__WEBPACK_IMPORTED_MODULE_1__["moves"])(_slideable__WEBPACK_IMPORTED_MODULE_1__["AxialDirections"]);
    }
  }]);

  return Rook;
}(_piece__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Rook);

/***/ }),

/***/ "./src/scripts/piece/slideable.js":
/*!****************************************!*\
  !*** ./src/scripts/piece/slideable.js ***!
  \****************************************/
/*! exports provided: AxialDirections, DiagonalDirections, moves, growingMoves */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AxialDirections", function() { return AxialDirections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagonalDirections", function() { return DiagonalDirections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moves", function() { return moves; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "growingMoves", function() { return growingMoves; });
// let EXPORTED_VARIABLES = ["AxialDirections", "DiagonalDirections", "moves", "growingMoves"];
var AxialDirections = [[1, 0], [0, 1], [-1, 0], [0, -1]];
var DiagonalDirections = [[1, 1], [1, -1], [-1, -1], [-1, 1]];
Object.freeze(AxialDirections);
Object.freeze(DiagonalDirections);
function moves(directionalArray) {
  var allMoves = [];

  for (var i = 0; i < directionalArray.length; i++) {
    allMoves.push(growingMoves(directionalArray[0], directionalArray[1]));
  }

  return allMoves;
}
function growingMoves(dx, dy) {
  var oneDirectionalMoves = [];
  var currentPosition = this.position;
  currentPosition = [currentPosition[0] + dx, currentPosition[1] + dy];

  while (board.isValidPosition(currentPosition)) {
    return oneDirectionalMoves;
  }
} // export default Slideable;
// import Board from "../board";
// import Piece from './piece';
// class Slideable extends Board{
//     //Axial Directions: Directions of the axis (x- and y-) 
//     constructor(){
//         // super();
//         const AxialDirections = [[1,  0], [0, 1], [-1,  0], [0, -1]];
//         const DiagonalDirections = [[1, 1], [1, -1], [-1, -1], [-1, 1]];
//         Object.freeze(AxialDirections);
//         Object.freeze(DiagonalDirections);
//     }
//     growingMoves(dx, dy){
//         const oneDirectionalMoves = [];
//         let currentPosition = this.position;
//         currentPosition =  [currentPosition[0] + dx, currentPosition[1] + dy];
//         while(super.validPosition(currentPosition)){
//             return oneDirectionalMoves
//         }
//     }
// }

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2JvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3BpZWNlL1F1ZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3BpZWNlL2Jpc2hvcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9waWVjZS9raW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3BpZWNlL2tuaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9waWVjZS9udWxscGllY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvcGllY2UvcGF3bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9waWVjZS9waWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9waWVjZS9yb29rLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3BpZWNlL3NsaWRlYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiYSIsIkJvYXJkIiwiY29uc29sZSIsImxvZyIsInJvd3MiLCJpIiwiaiIsIk51bGxQaWVjZSIsInBvcHVsYXRlQm9hcmQiLCJiaW5kIiwiaXNFbXB0eSIsInBvc2l0aW9uIiwiY29sb3IiLCJsZW5ndGgiLCJjaGVzc1BpZWNlIiwiYmFja1JvdyIsIlBhd24iLCJpbmRleCIsImJhY2tQaWVjZXMiLCJSb29rIiwiS25pZ2h0IiwiQmlzaG9wIiwiUXVlZW4iLCJLaW5nIiwicG9zIiwiaXNWYWxpZFBvc2l0aW9uIiwic3RhcnRQb3MiLCJlbmRQb3MiLCJib29sIiwiYm9hcmQiLCJzdGF0dXMiLCJtb3ZlcyIsIkF4aWFsRGlyZWN0aW9ucyIsImNvbmNhdCIsIkRpYWdvbmFsRGlyZWN0aW9ucyIsIlBpZWNlIiwic3ltYm9sIiwiT2JqZWN0IiwiZnJlZXplIiwibW92ZURpcmVjdGlvbnMiLCJhdFN0YXJ0IiwiZm93YXJkRGlyZWN0aW9ucyIsImZvd2FyZFN0ZXBzIiwic2lkZVN0ZXBzIiwib25lU3RlcCIsInR3b1N0ZXAiLCJzdGVwcyIsInB1c2giLCJvcHBvc2l0ZUNvbG9yIiwiZGlyZWN0aW9uYWxBcnJheSIsImFsbE1vdmVzIiwiZ3Jvd2luZ01vdmVzIiwiZHgiLCJkeSIsIm9uZURpcmVjdGlvbmFsTW92ZXMiLCJjdXJyZW50UG9zaXRpb24iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0NBRUE7O0FBQ0EsSUFBTUEsQ0FBQyxHQUFHLElBQUlDLHNEQUFKLEVBQVY7QUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlILENBQVosRSxDQUNBLGE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7SUFHTUMsSzs7O0FBQ0YsbUJBQWE7QUFBQTs7QUFDVCxTQUFLRyxJQUFMLEdBQVksRUFBWixDQURTLENBRVQ7O0FBQ0EsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLENBQXBCLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTJCO0FBQ3ZCLFdBQUtELElBQUwsQ0FBVUMsQ0FBVixJQUFlLEVBQWY7O0FBQ0EsV0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFpQkEsQ0FBQyxHQUFJLENBQXRCLEVBQXlCQSxDQUFDLEVBQTFCLEVBQTZCO0FBQ3pCLGFBQUtGLElBQUwsQ0FBVUMsQ0FBVixFQUFhQyxDQUFiLElBQWtCLElBQUlDLHdEQUFKLENBQWMsTUFBZCxFQUFzQixJQUF0QixFQUE0QixDQUFDRixDQUFELEVBQUlDLENBQUosQ0FBNUIsQ0FBbEI7QUFDSDtBQUNKLEtBUlEsQ0FTVDs7O0FBRUEsU0FBS0UsYUFBTCxHQUFxQixLQUFLQSxhQUFMLENBQW1CQyxJQUFuQixDQUF3QixJQUF4QixDQUFyQjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxLQUFLQSxPQUFMLENBQWFELElBQWIsQ0FBa0IsSUFBbEIsQ0FBZjtBQUNBLFNBQUtFLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxDQUFjRixJQUFkLENBQW1CLElBQW5CLENBQWhCO0FBQ0EsU0FBS0QsYUFBTDtBQUNIOzs7O29DQUVjO0FBQ1gsVUFBTUksS0FBSyxHQUFJLENBQUMsT0FBRCxFQUFVLE9BQVYsQ0FBZjs7QUFDQSxXQUFJLElBQUtQLENBQUMsR0FBSSxDQUFkLEVBQWlCQSxDQUFDLEdBQUcsS0FBS0QsSUFBTCxDQUFVUyxNQUEvQixFQUF1Q1IsQ0FBQyxFQUF4QyxFQUEyQztBQUN2QyxhQUFJLElBQUlDLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBRyxLQUFLRixJQUFMLENBQVVDLENBQVYsRUFBYVEsTUFBaEMsRUFBd0NQLENBQUMsRUFBekMsRUFBNEM7QUFDeEMsY0FBSUssUUFBUSxHQUFJLENBQUNOLENBQUQsRUFBSUMsQ0FBSixDQUFoQjs7QUFDQSxjQUFJRCxDQUFDLEtBQU0sQ0FBUCxJQUFZQSxDQUFDLEtBQUssQ0FBdEIsRUFBd0I7QUFDcEI7QUFDQSxnQkFBTVMsVUFBVSxHQUFHLEtBQUtDLE9BQUwsQ0FBYVQsQ0FBYixDQUFuQjtBQUNBLGlCQUFLRixJQUFMLENBQVVPLFFBQVEsQ0FBQyxDQUFELENBQWxCLEVBQXVCQSxRQUFRLENBQUMsQ0FBRCxDQUEvQixJQUFzQyxJQUFJRyxVQUFKLENBQWVGLEtBQUssQ0FBQ1AsQ0FBQyxHQUFHLENBQUwsQ0FBcEIsRUFBNkIsSUFBN0IsRUFBbUNNLFFBQW5DLENBQXRDO0FBRUgsV0FMRCxNQU1LLElBQUlOLENBQUMsS0FBSyxDQUFOLElBQVdBLENBQUMsS0FBSyxDQUFyQixFQUF1QjtBQUN4QixpQkFBS0QsSUFBTCxDQUFVTyxRQUFRLENBQUMsQ0FBRCxDQUFsQixFQUF1QkEsUUFBUSxDQUFDLENBQUQsQ0FBL0IsSUFBc0MsSUFBSUssbURBQUosQ0FBU0osS0FBSyxDQUFDLENBQUNQLENBQUMsR0FBRyxDQUFMLElBQVUsQ0FBWCxDQUFkLEVBQTZCLElBQTdCLEVBQW1DTSxRQUFuQyxDQUF0QztBQUNIO0FBQ0o7QUFDSjtBQUNKOzs7NEJBRU9NLEssRUFBTTtBQUNWLFVBQU1DLFVBQVUsR0FBRSxDQUFDQyxtREFBRCxFQUFPQyxxREFBUCxFQUFlQyxxREFBZixFQUF1QkMsb0RBQXZCLEVBQThCQyxtREFBOUIsQ0FBbEI7QUFDQSxhQUFPTCxVQUFVLENBQUNELEtBQUssR0FBRyxDQUFULENBQWpCO0FBQ0g7Ozs0QkFFT08sRyxFQUFLO0FBQ1QsYUFBTyxLQUFLQyxlQUFMLElBQXdCLEtBQUtyQixJQUFMLENBQVVvQixHQUFWLEVBQWVaLEtBQWYsS0FBMEIsTUFBekQ7QUFDSDs7OzRCQUVPYyxRLEVBQVVDLE0sRUFBTyxDQUV4Qjs7O29DQUVlSCxHLEVBQUk7QUFDaEIsVUFBSUksSUFBSSxHQUFHLElBQVg7O0FBQ0EsV0FBSSxJQUFJdkIsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHbUIsR0FBRyxDQUFDWCxNQUF2QixFQUFnQ1IsQ0FBQyxFQUFqQyxFQUFvQztBQUNoQyxZQUFJbUIsR0FBRyxDQUFDbkIsQ0FBRCxDQUFILEdBQVUsQ0FBVixJQUFpQm1CLEdBQUcsQ0FBQ25CLENBQUQsQ0FBSCxHQUFVLENBQS9CLEVBQWlDO0FBQzdCdUIsY0FBSSxHQUFHLEtBQVA7QUFDSDtBQUNKOztBQUNELGFBQVFBLElBQVI7QUFDSCxLLENBRUQ7Ozs7NkJBQ1NKLEcsRUFBSTtBQUNULFdBQUtwQixJQUFMLENBQVVvQixHQUFWO0FBQ0g7Ozs7OztBQUdVdkIsb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUVBO0FBQ0E7O0lBRU1xQixLOzs7OztBQUNGLGlCQUFZVixLQUFaLEVBQW1CaUIsS0FBbkIsRUFBMEJsQixRQUExQixFQUFvQztBQUFBOztBQUFBOztBQUNoQywrRUFBTUMsS0FBTixFQUFhaUIsS0FBYixFQUFvQmxCLFFBQXBCO0FBQ0EsVUFBS21CLE1BQUwsR0FBYyxLQUFkO0FBRmdDO0FBSW5DOzs7OzZCQUNRO0FBQ0wsYUFBTyxPQUFQO0FBQ0g7OztxQ0FFZ0I7QUFDYixhQUFPQyx3REFBSyxDQUFDQywwREFBZSxDQUFDQyxNQUFoQixDQUF1QkMsNkRBQXZCLENBQUQsQ0FBWjtBQUNIOzs7O0VBWmVDLDhDOztBQWVMYixvRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7Q0FFQTs7SUFFTUQsTTs7Ozs7QUFDRixrQkFBWVQsS0FBWixFQUFtQmlCLEtBQW5CLEVBQTBCbEIsUUFBMUIsRUFBb0M7QUFBQTs7QUFBQTs7QUFDaEMsZ0ZBQU1DLEtBQU4sRUFBYWlCLEtBQWIsRUFBb0JsQixRQUFwQjtBQUNBLFVBQUttQixNQUFMLEdBQWMsS0FBZDtBQUZnQztBQUluQzs7Ozs2QkFDUTtBQUNMLGFBQU8sUUFBUDtBQUNIOzs7cUNBRWdCO0FBQ2IsYUFBT0Msd0RBQUssQ0FBQ0csNkRBQUQsQ0FBWjtBQUNIOzs7O0VBWmdCQyw4Qzs7QUFlTmQscUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7O0lBRU1FLEk7Ozs7O0FBQ0YsZ0JBQVlYLEtBQVosRUFBbUJpQixLQUFuQixFQUEwQmxCLFFBQTFCLEVBQW9DO0FBQUE7O0FBQUE7O0FBQ2hDLDhFQUFNQyxLQUFOLEVBQWFpQixLQUFiLEVBQW9CbEIsUUFBcEI7QUFDQSxVQUFLbUIsTUFBTCxHQUFjLElBQWQ7QUFGZ0M7QUFJbkM7Ozs7NkJBQ1E7QUFDTCxhQUFPLE1BQVA7QUFDSDs7O3FDQUVnQjtBQUNiLFVBQU1DLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBRCxFQUFRLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBUixFQUFnQixDQUFDLENBQUQsRUFBSSxDQUFKLENBQWhCLEVBQXdCLENBQUMsQ0FBQyxDQUFGLEVBQUssQ0FBTCxDQUF4QixFQUFpQyxDQUFDLENBQUMsQ0FBRixFQUFLLENBQUwsQ0FBakMsRUFBMEMsQ0FBQyxDQUFDLENBQUYsRUFBSyxDQUFDLENBQU4sQ0FBMUMsRUFBb0QsQ0FBQyxDQUFELEVBQUksQ0FBQyxDQUFMLENBQXBELEVBQTZELENBQUMsQ0FBRCxFQUFJLENBQUMsQ0FBTCxDQUE3RCxDQUFkO0FBRUg7Ozs7RUFiY0ksOEM7O0FBZ0JKWixtRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTs7SUFFTUgsTTs7Ozs7QUFDRixrQkFBWVIsS0FBWixFQUFtQmlCLEtBQW5CLEVBQTBCbEIsUUFBMUIsRUFBb0M7QUFBQTs7QUFBQTs7QUFDaEMsZ0ZBQU1DLEtBQU4sRUFBYWlCLEtBQWIsRUFBb0JsQixRQUFwQjtBQUNBLFVBQUttQixNQUFMLEdBQWMsS0FBZDtBQUZnQztBQUluQzs7Ozs2QkFDUTtBQUNMLGFBQU8sUUFBUDtBQUNIOzs7cUNBRWdCO0FBQ2IsVUFBTUMsS0FBSyxHQUFHLENBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFGLEVBQVUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFWLEVBQWtCLENBQUMsQ0FBRCxFQUFJLENBQUMsQ0FBTCxDQUFsQixFQUEyQixDQUFDLENBQUQsRUFBSSxDQUFDLENBQUwsQ0FBM0IsRUFBb0MsQ0FBQyxDQUFDLENBQUYsRUFBSyxDQUFMLENBQXBDLEVBQTZDLENBQUMsQ0FBQyxDQUFGLEVBQUssQ0FBTCxDQUE3QyxFQUFzRCxDQUFDLENBQUMsQ0FBRixFQUFLLENBQUMsQ0FBTixDQUF0RCxFQUFnRSxDQUFDLENBQUMsQ0FBRixFQUFLLENBQUMsQ0FBTixDQUFoRSxDQUFkO0FBRUg7Ozs7RUFiZ0JJLDhDOztBQWdCTmYscUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTs7SUFFTWIsUzs7Ozs7QUFDRixxQkFBWUssS0FBWixFQUFtQmlCLEtBQW5CLEVBQTBCbEIsUUFBMUIsRUFBbUM7QUFBQTs7QUFBQTs7QUFDL0IsbUZBQU1DLEtBQU4sRUFBYWlCLEtBQWIsRUFBb0JsQixRQUFwQixHQUQrQixDQUUvQjtBQUNBO0FBQ0E7O0FBQ0EsVUFBS3lCLE1BQUwsR0FBYyxNQUFkO0FBQ0EsVUFBS0wsS0FBTCxHQUFjLEVBQWQ7QUFOK0I7QUFPbEM7OztFQVJtQkksOEM7O0FBU3ZCLEMsQ0FFRDs7QUFDQUUsTUFBTSxDQUFDQyxNQUFQLENBQWMvQixTQUFkO0FBQ2VBLHdFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7O0lBRU1TLEk7Ozs7O0FBQ0YsZ0JBQVlKLEtBQVosRUFBbUJpQixLQUFuQixFQUEwQmxCLFFBQTFCLEVBQW9DO0FBQUE7O0FBQUE7O0FBQ2hDLDhFQUFNQyxLQUFOLEVBQWFpQixLQUFiLEVBQW9CbEIsUUFBcEI7QUFDQSxVQUFLbUIsTUFBTCxHQUFjLEtBQWQ7QUFFQSxVQUFLUyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0I5QixJQUFwQiwrQkFBdEI7QUFDQSxVQUFLK0IsT0FBTCxHQUFnQixNQUFLQSxPQUFMLENBQWEvQixJQUFiLCtCQUFoQjtBQUNBLFVBQUtnQyxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQmhDLElBQXRCLCtCQUF4QjtBQUNBLFVBQUtpQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJqQyxJQUFqQiwrQkFBbkI7QUFDQSxVQUFLa0MsU0FBTCxHQUFpQixNQUFLQSxTQUFMLENBQWVsQyxJQUFmLCtCQUFqQjtBQVJnQztBQVNuQzs7Ozs2QkFDUTtBQUNMLGFBQU8sTUFBUDtBQUNIOzs7cUNBRWdCO0FBQ2IsYUFBTyxLQUFLaUMsV0FBTCxHQUFtQlQsTUFBbkIsQ0FBMEIsS0FBS1UsU0FBTCxFQUExQixDQUFQO0FBQ0g7Ozs4QkFFUTtBQUNMLGFBQU8sQ0FBRSxLQUFLL0IsS0FBTCxLQUFlLE9BQWYsR0FBeUIsQ0FBekIsR0FBNkIsQ0FBL0IsTUFBd0MsS0FBS0QsUUFBTCxDQUFjLENBQWQsQ0FBL0M7QUFDSDs7O3VDQUVpQjtBQUNkLGFBQU8sS0FBS0MsS0FBTCxLQUFlLE9BQWYsR0FBeUIsQ0FBekIsR0FBNkIsQ0FBQyxDQUFyQztBQUNIOzs7a0NBRVk7QUFDVCxVQUFJZ0MsT0FBTyxHQUFHLENBQUMsS0FBS2pDLFFBQUwsQ0FBYyxDQUFkLElBQW1CLEtBQUs4QixnQkFBTCxFQUFwQixFQUE2QyxLQUFLOUIsUUFBTCxDQUFjLENBQWQsQ0FBN0MsQ0FBZDtBQUNBLFVBQUlrQyxPQUFPLEdBQUcsQ0FBQyxLQUFLbEMsUUFBTCxDQUFjLENBQWQsSUFBbUIsSUFBSSxLQUFLOEIsZ0JBQUwsRUFBeEIsRUFBaUQsS0FBSzlCLFFBQUwsQ0FBYyxDQUFkLENBQWpELENBQWQ7QUFDQSxVQUFJbUMsS0FBSyxHQUFHLEVBQVo7O0FBQ0EsVUFBRyxLQUFLakIsS0FBTCxDQUFXSixlQUFYLENBQTJCbUIsT0FBM0IsS0FBdUMsS0FBS2YsS0FBTCxDQUFXbkIsT0FBWCxDQUFtQmtDLE9BQW5CLENBQTFDLEVBQXNFO0FBQ2xFRSxhQUFLLENBQUNDLElBQU4sQ0FBV0gsT0FBWDs7QUFDQSxZQUFHLEtBQUtmLEtBQUwsQ0FBV0osZUFBWCxDQUEyQm9CLE9BQTNCLEtBQXVDLEtBQUtoQixLQUFMLENBQVduQixPQUFYLENBQW1CbUMsT0FBbkIsQ0FBdkMsSUFBc0UsS0FBS0wsT0FBTCxFQUF6RSxFQUF3RjtBQUNwRk0sZUFBSyxDQUFDQyxJQUFOLENBQVdGLE9BQVg7QUFDSDtBQUNKOztBQUNELGFBQU9DLEtBQVA7QUFDSDs7O2dDQUVVO0FBQ1AsVUFBSUUsYUFBYSxHQUFJLEtBQUtwQyxLQUFMLEtBQWUsT0FBZixHQUEwQixPQUExQixHQUFxQyxPQUExRDtBQUNBLFVBQUlrQyxLQUFLLEdBQUcsRUFBWjtBQUNBLFVBQUtmLEtBQUssR0FBSSxDQUFFLENBQUMsS0FBS3BCLFFBQUwsQ0FBYyxDQUFkLElBQW1CLEtBQUs4QixnQkFBekIsRUFBNEMsS0FBSzlCLFFBQUwsQ0FBYyxDQUFkLElBQW1CLENBQS9ELENBQUYsRUFBcUUsQ0FBQyxLQUFLQSxRQUFMLENBQWMsQ0FBZCxJQUFtQixLQUFLOEIsZ0JBQXpCLEVBQTJDLEtBQUs5QixRQUFMLENBQWMsQ0FBZCxJQUFtQixDQUE5RCxDQUFyRSxDQUFkOztBQUNBLFdBQUksSUFBSU4sQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHMEIsS0FBSyxDQUFDbEIsTUFBekIsRUFBaUNSLENBQUMsRUFBbEMsRUFBcUM7QUFDakMsWUFBRyxLQUFLd0IsS0FBTCxDQUFXSixlQUFYLENBQTJCTSxLQUFLLENBQUMxQixDQUFELENBQWhDLEtBQXdDLEtBQUt3QixLQUFMLENBQVd6QixJQUFYLENBQWdCMkIsS0FBSyxDQUFDMUIsQ0FBRCxDQUFyQixFQUEwQk8sS0FBMUIsS0FBb0NvQyxhQUEvRSxFQUE2RjtBQUN6RkYsZUFBSyxDQUFDQyxJQUFOLENBQVdoQixLQUFLLENBQUMxQixDQUFELENBQWhCO0FBQ0g7QUFDSjs7QUFDRCxhQUFPeUMsS0FBUDtBQUNIOzs7O0VBbERjWCw4Qzs7QUF1REpuQixtRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDekRNbUIsSzs7O0FBQ0YsaUJBQVl2QixLQUFaLEVBQW1CaUIsS0FBbkIsRUFBMEJsQixRQUExQixFQUFtQztBQUFBOztBQUMvQixTQUFLQyxLQUFMLEdBQVlBLEtBQVo7QUFDQSxTQUFLaUIsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS2xCLFFBQUwsR0FBZUEsUUFBZjtBQUNBLFNBQUttQixNQUFMLEdBQWMsS0FBZDtBQUNIOzs7OzhCQUVTSixRLEVBQVVDLE0sRUFBTyxDQUMxQjs7Ozs7O0FBR1VRLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7O0lBRU1oQixJOzs7OztBQUNGLGdCQUFZUCxLQUFaLEVBQW1CaUIsS0FBbkIsRUFBMEJsQixRQUExQixFQUFtQztBQUFBOztBQUFBOztBQUMvQiw4RUFBTUMsS0FBTixFQUFhaUIsS0FBYixFQUFvQmxCLFFBQXBCO0FBQ0EsVUFBS21CLE1BQUwsR0FBYyxJQUFkO0FBRitCO0FBSWxDOzs7OzZCQUNRO0FBQ0wsYUFBTyxNQUFQO0FBQ0g7OztxQ0FFZTtBQUNaLGFBQVFDLHdEQUFLLENBQUNDLDBEQUFELENBQWI7QUFDSDs7OztFQVpjRyw4Qzs7QUFlSmhCLG1FQUFmLEU7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNYSxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQUQsRUFBUyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVQsRUFBaUIsQ0FBQyxDQUFDLENBQUYsRUFBSyxDQUFMLENBQWpCLEVBQTBCLENBQUMsQ0FBRCxFQUFJLENBQUMsQ0FBTCxDQUExQixDQUF4QjtBQUNBLElBQU1FLGtCQUFrQixHQUFHLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFELEVBQVMsQ0FBQyxDQUFELEVBQUksQ0FBQyxDQUFMLENBQVQsRUFBa0IsQ0FBQyxDQUFDLENBQUYsRUFBSyxDQUFDLENBQU4sQ0FBbEIsRUFBNEIsQ0FBQyxDQUFDLENBQUYsRUFBSyxDQUFMLENBQTVCLENBQTNCO0FBQ1BHLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjTixlQUFkO0FBQ0FLLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSixrQkFBZDtBQUVPLFNBQVNILEtBQVQsQ0FBZWtCLGdCQUFmLEVBQWdDO0FBQ25DLE1BQU1DLFFBQVEsR0FBRSxFQUFoQjs7QUFDQSxPQUFJLElBQUs3QyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHNEMsZ0JBQWdCLENBQUNwQyxNQUFyQyxFQUE2Q1IsQ0FBQyxFQUE5QyxFQUFpRDtBQUM3QzZDLFlBQVEsQ0FBQ0gsSUFBVCxDQUFjSSxZQUFZLENBQUNGLGdCQUFnQixDQUFDLENBQUQsQ0FBakIsRUFBc0JBLGdCQUFnQixDQUFDLENBQUQsQ0FBdEMsQ0FBMUI7QUFDSDs7QUFDRCxTQUFPQyxRQUFQO0FBQ0g7QUFFTSxTQUFTQyxZQUFULENBQXNCQyxFQUF0QixFQUEwQkMsRUFBMUIsRUFBNkI7QUFDaEMsTUFBTUMsbUJBQW1CLEdBQUcsRUFBNUI7QUFDQSxNQUFJQyxlQUFlLEdBQUcsS0FBSzVDLFFBQTNCO0FBQ0E0QyxpQkFBZSxHQUFJLENBQUNBLGVBQWUsQ0FBQyxDQUFELENBQWYsR0FBcUJILEVBQXRCLEVBQTBCRyxlQUFlLENBQUMsQ0FBRCxDQUFmLEdBQXFCRixFQUEvQyxDQUFuQjs7QUFDQSxTQUFNeEIsS0FBSyxDQUFDSixlQUFOLENBQXNCOEIsZUFBdEIsQ0FBTixFQUE2QztBQUN6QyxXQUFPRCxtQkFBUDtBQUNIO0FBQ0osQyxDQUNEO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJOzs7Ozs7Ozs7OztBQ2pEQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBjcmVhdGUgaW5kZXguanMgaW4gL3NyYyBkaXJlY3RvcnkgYW5kIGltcG9ydCBzdHlsZSAvc3JjIC8gc3R5bGVzIC8gaW5kZXguc2Nzc1xuaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCBCb2FyZCBmcm9tICcuL3NjcmlwdHMvYm9hcmQnO1xuLy8gaW5zdGFuY2Ugb2YgIGJvYXJkXG5jb25zdCBhID0gbmV3IEJvYXJkO1xuY29uc29sZS5sb2coYSk7XG4vLyBub2RlIGZpbGUuICIsIi8vIGltcG9ydCBQaWVjZSBmcm9tICcuL3BpZWNlL3BpZWNlJztcblxuaW1wb3J0IEtpbmcgZnJvbSAnLi9waWVjZS9raW5nJztcbmltcG9ydCBLbmlnaHQgZnJvbSAnLi9waWVjZS9rbmlnaHQnO1xuXG5pbXBvcnQgUXVlZW4gZnJvbSAnLi9waWVjZS9RdWVlbic7XG5pbXBvcnQgUm9vayBmcm9tICcuL3BpZWNlL3Jvb2snO1xuaW1wb3J0IEJpc2hvcCBmcm9tICcuL3BpZWNlL2Jpc2hvcCc7XG5cbmltcG9ydCBOdWxsUGllY2UgZnJvbSAnLi9waWVjZS9udWxscGllY2UnO1xuaW1wb3J0IFBhd24gZnJvbSAnLi9waWVjZS9wYXduJztcblxuXG5jbGFzcyBCb2FyZCB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5yb3dzID0gW107XG4gICAgICAgIC8vIHRoaXMubm9QaWVjZSA9IG5ldyBOdWxsUGllY2UoXCJudWxsXCIsIHRoaXMpOyBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspe1xuICAgICAgICAgICAgdGhpcy5yb3dzW2ldID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgIGogIDwgODsgaisrKXtcbiAgICAgICAgICAgICAgICB0aGlzLnJvd3NbaV1bal0gPSBuZXcgTnVsbFBpZWNlKFwibnVsbFwiLCB0aGlzLCBbaSwgal0pOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBNaWdodCBuZWVkIHRvIGJpbmQgXCJ0aGlzXCJcblxuICAgICAgICB0aGlzLnBvcHVsYXRlQm9hcmQgPSB0aGlzLnBvcHVsYXRlQm9hcmQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5pc0VtcHR5ID0gdGhpcy5pc0VtcHR5LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucG9wdWxhdGVCb2FyZCgpO1xuICAgIH1cblxuICAgIHBvcHVsYXRlQm9hcmQoKXtcbiAgICAgICAgY29uc3QgY29sb3IgPSAgW1wiV2hpdGVcIiwgXCJCbGFja1wiXTtcbiAgICAgICAgZm9yKGxldCAgaSAgPSAwOyBpIDwgdGhpcy5yb3dzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCB0aGlzLnJvd3NbaV0ubGVuZ3RoOyBqKyspe1xuICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbiAgPSBbaSwgal07XG4gICAgICAgICAgICAgICAgaWYgKGkgID09PSAwIHx8IGkgPT09IDcpe1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnJvd3MgW3Bvc2l0aW9uWzBdXVtwb3NpdGlvblsxXV0gPSBuZXcgKHRoaXMuYmFja1JvdyhqKSkoY29sb3JbaSAlIDJdLCB0aGlzLCBwb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoZXNzUGllY2UgPSB0aGlzLmJhY2tSb3coaik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm93c1twb3NpdGlvblswXV1bcG9zaXRpb25bMV1dID0gbmV3IGNoZXNzUGllY2UoY29sb3JbaSAlIDJdLCB0aGlzLCBwb3NpdGlvbik7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaSA9PT0gMSB8fCBpID09PSA2KXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3dzW3Bvc2l0aW9uWzBdXVtwb3NpdGlvblsxXV0gPSBuZXcgUGF3bihjb2xvclsoaSArIDEpICUgMl0sIHRoaXMsIHBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiYWNrUm93KGluZGV4KXtcbiAgICAgICAgY29uc3QgYmFja1BpZWNlcz0gW1Jvb2ssIEtuaWdodCwgQmlzaG9wLCBRdWVlbiwgS2luZ107XG4gICAgICAgIHJldHVybiBiYWNrUGllY2VzW2luZGV4ICUgNV1cbiAgICB9XG5cbiAgICBpc0VtcHR5KHBvcykge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkUG9zaXRpb24gJiYgdGhpcy5yb3dzW3Bvc10uY29sb3IgPT09ICAnbnVsbCdcbiAgICB9XG5cbiAgICBtb3ZlUG9zKHN0YXJ0UG9zLCBlbmRQb3Mpe1xuXG4gICAgfVxuXG4gICAgaXNWYWxpZFBvc2l0aW9uKHBvcyl7XG4gICAgICAgIGxldCBib29sID0gdHJ1ZVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcG9zLmxlbmd0aCA7IGkrKyl7XG4gICAgICAgICAgICBpZiAocG9zW2ldIDwgIDAgfHwgICBwb3NbaV0gPiAgNyl7XG4gICAgICAgICAgICAgICAgYm9vbCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAgYm9vbFxuICAgIH1cblxuICAgIC8vTmV3bWV0aG9kXG4gICAgcG9zaXRpb24ocG9zKXtcbiAgICAgICAgdGhpcy5yb3dzW3Bvc11cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkOyIsImltcG9ydCBQaWVjZSBmcm9tICcuL3BpZWNlJztcbmltcG9ydCB7IEF4aWFsRGlyZWN0aW9ucywgRGlhZ29uYWxEaXJlY3Rpb25zLCBtb3ZlcyB9IGZyb20gJy4vc2xpZGVhYmxlJztcblxuY2xhc3MgUXVlZW4gZXh0ZW5kcyBQaWVjZSB7XG4gICAgY29uc3RydWN0b3IoY29sb3IsIGJvYXJkLCBwb3NpdGlvbikge1xuICAgICAgICBzdXBlcihjb2xvciwgYm9hcmQsIHBvc2l0aW9uKTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBmYWxzZTtcblxuICAgIH1cbiAgICBzeW1ib2woKSB7XG4gICAgICAgIHJldHVybiBcIlFVRUVOXCI7XG4gICAgfVxuXG4gICAgbW92ZURpcmVjdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiBtb3ZlcyhBeGlhbERpcmVjdGlvbnMuY29uY2F0KERpYWdvbmFsRGlyZWN0aW9ucykpXG4gICAgfSAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZWVuOyIsImltcG9ydCBQaWVjZSBmcm9tICcuL3BpZWNlJztcbmltcG9ydCB7IERpYWdvbmFsRGlyZWN0aW9ucywgbW92ZXMgfSBmcm9tICcuL3NsaWRlYWJsZSc7XG4vLyBsZXQgcGllY2UgPSBOb2RlUmVxdWlyZSAnLi9waWVjZSc7XG5cbmNsYXNzIEJpc2hvcCBleHRlbmRzIFBpZWNle1xuICAgIGNvbnN0cnVjdG9yKGNvbG9yLCBib2FyZCwgcG9zaXRpb24pIHtcbiAgICAgICAgc3VwZXIoY29sb3IsIGJvYXJkLCBwb3NpdGlvbik7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gZmFsc2U7XG5cbiAgICB9XG4gICAgc3ltYm9sKCkge1xuICAgICAgICByZXR1cm4gXCJCSVNIT1BcIjtcbiAgICB9XG5cbiAgICBtb3ZlRGlyZWN0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIG1vdmVzKERpYWdvbmFsRGlyZWN0aW9ucylcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJpc2hvcDsiLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmNsYXNzIEtpbmcgZXh0ZW5kcyBQaWVjZXtcbiAgICBjb25zdHJ1Y3Rvcihjb2xvciwgYm9hcmQsIHBvc2l0aW9uKSB7XG4gICAgICAgIHN1cGVyKGNvbG9yLCBib2FyZCwgcG9zaXRpb24pO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHRydWU7XG5cbiAgICB9XG4gICAgc3ltYm9sKCkge1xuICAgICAgICByZXR1cm4gXCJLSU5HXCI7XG4gICAgfVxuXG4gICAgbW92ZURpcmVjdGlvbnMoKSB7XG4gICAgICAgIGNvbnN0IG1vdmVzID0gW1sxLDBdLCBbMSwgMV0sIFswLCAxXSwgWy0xLCAxXSwgWy0xLCAwXSwgWy0xLCAtMV0sIFswLCAtMV0sIFsxLCAtMV1dXG4gICAgICAgIFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgS2luZzsiLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmNsYXNzIEtuaWdodCBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb2xvciwgYm9hcmQsIHBvc2l0aW9uKSB7XG4gICAgICAgIHN1cGVyKGNvbG9yLCBib2FyZCwgcG9zaXRpb24pO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IGZhbHNlO1xuXG4gICAgfVxuICAgIHN5bWJvbCgpIHtcbiAgICAgICAgcmV0dXJuIFwiS05JR0hUXCI7XG4gICAgfVxuXG4gICAgbW92ZURpcmVjdGlvbnMoKSB7XG4gICAgICAgIGNvbnN0IG1vdmVzID0gWyBbMSwgMl0sIFsyLCAxXSwgWzEsIC0yXSwgWzIsIC0xXSwgWy0xLCAyXSwgWy0yLCAxXSwgWy0xLCAtMl0sIFstMiwgLTFdIF1cbiAgICAgICAgXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBLbmlnaHQ7IiwiaW1wb3J0IFBpZWNlIGZyb20gJy4vcGllY2UnO1xuXG5jbGFzcyBOdWxsUGllY2UgZXh0ZW5kcyBQaWVjZSAge1xuICAgIGNvbnN0cnVjdG9yKGNvbG9yLCBib2FyZCwgcG9zaXRpb24pe1xuICAgICAgICBzdXBlcihjb2xvciwgYm9hcmQsIHBvc2l0aW9uKTtcbiAgICAgICAgLy8gdGhpcy5ib2FyZCA9IGJvYXJkO1xuICAgICAgICAvLyB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgIC8vIHRoaXMuY29sb3IgPSBcIm5vbmVcIjtcbiAgICAgICAgdGhpcy5zeW1ib2wgPSBcIm51bGxcIjtcbiAgICAgICAgdGhpcy5tb3ZlcyAgPSBbXTtcbiAgICB9XG59O1xuXG4vL1NpbmdsZXRvbjogaHR0cHM6Ly93d3cuc2l0ZXBvaW50LmNvbS9qYXZhc2NyaXB0LWRlc2lnbi1wYXR0ZXJucy1zaW5nbGV0b24vXG5PYmplY3QuZnJlZXplKE51bGxQaWVjZSk7XG5leHBvcnQgZGVmYXVsdCBOdWxsUGllY2U7IiwiaW1wb3J0IFBpZWNlIGZyb20gJy4vcGllY2UnO1xuXG5jbGFzcyBQYXduIGV4dGVuZHMgUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKGNvbG9yLCBib2FyZCwgcG9zaXRpb24pIHtcbiAgICAgICAgc3VwZXIoY29sb3IsIGJvYXJkLCBwb3NpdGlvbik7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5tb3ZlRGlyZWN0aW9ucyA9IHRoaXMubW92ZURpcmVjdGlvbnMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hdFN0YXJ0ICA9IHRoaXMuYXRTdGFydC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmZvd2FyZERpcmVjdGlvbnMgPSB0aGlzLmZvd2FyZERpcmVjdGlvbnMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5mb3dhcmRTdGVwcyA9IHRoaXMuZm93YXJkU3RlcHMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zaWRlU3RlcHMgPSB0aGlzLnNpZGVTdGVwcy5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBzeW1ib2woKSB7XG4gICAgICAgIHJldHVybiBcIlBBV05cIjtcbiAgICB9XG5cbiAgICBtb3ZlRGlyZWN0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm93YXJkU3RlcHMoKS5jb25jYXQodGhpcy5zaWRlU3RlcHMoKSlcbiAgICB9XG5cbiAgICBhdFN0YXJ0KCl7XG4gICAgICAgIHJldHVybiAoIHRoaXMuY29sb3IgPT09ICdXaGl0ZScgPyAxIDogNiApID09PSAgdGhpcy5wb3NpdGlvblsxXVxuICAgIH1cblxuICAgIGZvd2FyZERpcmVjdGlvbnMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sb3IgPT09ICdXaGl0ZScgPyAxIDogLTFcbiAgICB9XG5cbiAgICBmb3dhcmRTdGVwcygpe1xuICAgICAgICBsZXQgb25lU3RlcCA9IFt0aGlzLnBvc2l0aW9uWzBdICsgdGhpcy5mb3dhcmREaXJlY3Rpb25zKCksIHRoaXMucG9zaXRpb25bMV1dO1xuICAgICAgICBsZXQgdHdvU3RlcCA9IFt0aGlzLnBvc2l0aW9uWzBdICsgMiAqIHRoaXMuZm93YXJkRGlyZWN0aW9ucygpLCB0aGlzLnBvc2l0aW9uWzFdXTtcbiAgICAgICAgbGV0IHN0ZXBzID0gW107XG4gICAgICAgIGlmKHRoaXMuYm9hcmQuaXNWYWxpZFBvc2l0aW9uKG9uZVN0ZXApICYmIHRoaXMuYm9hcmQuaXNFbXB0eShvbmVTdGVwKSl7XG4gICAgICAgICAgICBzdGVwcy5wdXNoKG9uZVN0ZXApXG4gICAgICAgICAgICBpZih0aGlzLmJvYXJkLmlzVmFsaWRQb3NpdGlvbih0d29TdGVwKSAmJiB0aGlzLmJvYXJkLmlzRW1wdHkodHdvU3RlcCkgJiYgdGhpcy5hdFN0YXJ0KCkpe1xuICAgICAgICAgICAgICAgIHN0ZXBzLnB1c2godHdvU3RlcClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RlcHNcbiAgICB9XG5cbiAgICBzaWRlU3RlcHMoKXtcbiAgICAgICAgbGV0IG9wcG9zaXRlQ29sb3IgPSAodGhpcy5jb2xvciA9PT0gJ1doaXRlJyA/ICAnQmxhY2snICA6ICdXaGl0ZScpO1xuICAgICAgICBsZXQgc3RlcHMgPSBbXTtcbiAgICAgICAgbGV0ICBtb3ZlcyA9ICBbIFt0aGlzLnBvc2l0aW9uWzBdICsgdGhpcy5mb3dhcmREaXJlY3Rpb25zLCAgdGhpcy5wb3NpdGlvblsxXSArIDFdLCBbdGhpcy5wb3NpdGlvblswXSArIHRoaXMuZm93YXJkRGlyZWN0aW9ucywgdGhpcy5wb3NpdGlvblsxXSAtIDFdXTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG1vdmVzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmKHRoaXMuYm9hcmQuaXNWYWxpZFBvc2l0aW9uKG1vdmVzW2ldKSAmJiB0aGlzLmJvYXJkLnJvd3NbbW92ZXNbaV1dLmNvbG9yID09PSBvcHBvc2l0ZUNvbG9yKXtcbiAgICAgICAgICAgICAgICBzdGVwcy5wdXNoKG1vdmVzW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdGVwc1xuICAgIH1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhd247IiwiY2xhc3MgUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKGNvbG9yLCBib2FyZCwgcG9zaXRpb24pe1xuICAgICAgICB0aGlzLmNvbG9yID1jb2xvcjtcbiAgICAgICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID1wb3NpdGlvbjtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBtb3ZlUGllY2Uoc3RhcnRQb3MsIGVuZFBvcyl7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQaWVjZTsiLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5pbXBvcnQgeyBBeGlhbERpcmVjdGlvbnMsIG1vdmVzIH0gZnJvbSAnLi9zbGlkZWFibGUnO1xuXG5jbGFzcyBSb29rIGV4dGVuZHMgUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKGNvbG9yLCBib2FyZCwgcG9zaXRpb24pe1xuICAgICAgICBzdXBlcihjb2xvciwgYm9hcmQsIHBvc2l0aW9uKTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSB0cnVlO1xuXG4gICAgfVxuICAgIHN5bWJvbCgpIHtcbiAgICAgICAgcmV0dXJuIFwiUk9PS1wiO1xuICAgIH1cblxuICAgIG1vdmVEaXJlY3Rpb25zKCl7XG4gICAgICAgIHJldHVybiAgbW92ZXMoQXhpYWxEaXJlY3Rpb25zKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUm9vazsiLCIvLyBsZXQgRVhQT1JURURfVkFSSUFCTEVTID0gW1wiQXhpYWxEaXJlY3Rpb25zXCIsIFwiRGlhZ29uYWxEaXJlY3Rpb25zXCIsIFwibW92ZXNcIiwgXCJncm93aW5nTW92ZXNcIl07XG5cbmV4cG9ydCBjb25zdCBBeGlhbERpcmVjdGlvbnMgPSBbWzEsIDBdLCBbMCwgMV0sIFstMSwgMF0sIFswLCAtMV1dO1xuZXhwb3J0IGNvbnN0IERpYWdvbmFsRGlyZWN0aW9ucyA9IFtbMSwgMV0sIFsxLCAtMV0sIFstMSwgLTFdLCBbLTEsIDFdXTtcbk9iamVjdC5mcmVlemUoQXhpYWxEaXJlY3Rpb25zKTtcbk9iamVjdC5mcmVlemUoRGlhZ29uYWxEaXJlY3Rpb25zKTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1vdmVzKGRpcmVjdGlvbmFsQXJyYXkpe1xuICAgIGNvbnN0IGFsbE1vdmVzID1bXTtcbiAgICBmb3IobGV0ICBpID0gMDsgaSA8IGRpcmVjdGlvbmFsQXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgICBhbGxNb3Zlcy5wdXNoKGdyb3dpbmdNb3ZlcyhkaXJlY3Rpb25hbEFycmF5WzBdLCBkaXJlY3Rpb25hbEFycmF5WzFdKSkgXG4gICAgfVxuICAgIHJldHVybiBhbGxNb3Zlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdyb3dpbmdNb3ZlcyhkeCwgZHkpe1xuICAgIGNvbnN0IG9uZURpcmVjdGlvbmFsTW92ZXMgPSBbXTtcbiAgICBsZXQgY3VycmVudFBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbjtcbiAgICBjdXJyZW50UG9zaXRpb24gPSAgW2N1cnJlbnRQb3NpdGlvblswXSArIGR4LCBjdXJyZW50UG9zaXRpb25bMV0gKyBkeV07XG4gICAgd2hpbGUoYm9hcmQuaXNWYWxpZFBvc2l0aW9uKGN1cnJlbnRQb3NpdGlvbikpe1xuICAgICAgICByZXR1cm4gb25lRGlyZWN0aW9uYWxNb3Zlc1xuICAgIH1cbn1cbi8vIGV4cG9ydCBkZWZhdWx0IFNsaWRlYWJsZTtcblxuLy8gaW1wb3J0IEJvYXJkIGZyb20gXCIuLi9ib2FyZFwiO1xuLy8gaW1wb3J0IFBpZWNlIGZyb20gJy4vcGllY2UnO1xuXG4vLyBjbGFzcyBTbGlkZWFibGUgZXh0ZW5kcyBCb2FyZHtcbi8vICAgICAvL0F4aWFsIERpcmVjdGlvbnM6IERpcmVjdGlvbnMgb2YgdGhlIGF4aXMgKHgtIGFuZCB5LSkgXG4vLyAgICAgY29uc3RydWN0b3IoKXtcbi8vICAgICAgICAgLy8gc3VwZXIoKTtcblxuLy8gICAgICAgICBjb25zdCBBeGlhbERpcmVjdGlvbnMgPSBbWzEsICAwXSwgWzAsIDFdLCBbLTEsICAwXSwgWzAsIC0xXV07XG4vLyAgICAgICAgIGNvbnN0IERpYWdvbmFsRGlyZWN0aW9ucyA9IFtbMSwgMV0sIFsxLCAtMV0sIFstMSwgLTFdLCBbLTEsIDFdXTtcbi8vICAgICAgICAgT2JqZWN0LmZyZWV6ZShBeGlhbERpcmVjdGlvbnMpO1xuLy8gICAgICAgICBPYmplY3QuZnJlZXplKERpYWdvbmFsRGlyZWN0aW9ucyk7XG4vLyAgICAgfVxuXG5cbi8vICAgICBncm93aW5nTW92ZXMoZHgsIGR5KXtcbi8vICAgICAgICAgY29uc3Qgb25lRGlyZWN0aW9uYWxNb3ZlcyA9IFtdO1xuLy8gICAgICAgICBsZXQgY3VycmVudFBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbjtcbi8vICAgICAgICAgY3VycmVudFBvc2l0aW9uID0gIFtjdXJyZW50UG9zaXRpb25bMF0gKyBkeCwgY3VycmVudFBvc2l0aW9uWzFdICsgZHldO1xuLy8gICAgICAgICB3aGlsZShzdXBlci52YWxpZFBvc2l0aW9uKGN1cnJlbnRQb3NpdGlvbikpe1xuICAgICAgICBcbi8vICAgICAgICAgICAgIHJldHVybiBvbmVEaXJlY3Rpb25hbE1vdmVzXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9