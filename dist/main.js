!function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/dist/",o(o.s=2)}([function(t,e,o){},function(t,e){},function(t,e,o){"use strict";o.r(e);o(0);function n(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var r=function(){function t(e,o,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.color=e,this.board=o,this.position=n,this.status=!1,this.movePosition=this.movePosition.bind(this)}var e,o,r;return e=t,(o=[{key:"movePosition",value:function(t){this.position=[t[0],t[1]]}},{key:"validMoves",value:function(){}},{key:"isMovedIntoCheck",value:function(t){}}])&&n(e.prototype,o),r&&n(e,r),t}();function i(t,e,o){for(var n=[],r=0;r<t.length;r++){var i=t[r],u=[e[0]+i[0],e[1]+i[1]];o.isValidPosition(u)&&n.push(u)}return n}function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var l=function(t){function e(t,o,n){var r,i,s;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),i=this,(r=!(s=c(e).call(this,t,o,n))||"object"!==u(s)&&"function"!=typeof s?a(i):s).status=!0,r.moveDirections=r.moveDirections.bind(a(r)),r}var o,n,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(e,t),o=e,(n=[{key:"symbol",value:function(){return"white"===this.color?"./assets/kw.svg":"./assets/kb.svg"}},{key:"moveDirections",value:function(){return i([[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1],[0,-1],[1,-1]],this.position,this.board)}}])&&s(o.prototype,n),r&&s(o,r),e}(r);function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var m=function(t){function e(t,o,n){var r,i,u;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),i=this,(r=!(u=b(e).call(this,t,o,n))||"object"!==p(u)&&"function"!=typeof u?h(i):u).status=!1,r.moveDirections=r.moveDirections.bind(h(r)),r}var o,n,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(e,t),o=e,(n=[{key:"symbol",value:function(){return"white"===this.color?"./assets/nw.svg":"./assets/nb.svg"}},{key:"moveDirections",value:function(){return i([[1,2],[2,1],[1,-2],[2,-1],[-1,2],[-2,1],[-1,-2],[-2,-1]],this.position,this.board)}}])&&y(o.prototype,n),r&&y(o,r),e}(r),d=[[1,0],[0,1],[-1,0],[0,-1]],w=[[1,1],[1,-1],[-1,-1],[-1,1]];function g(t,e,o){for(var n=[],r=0;r<t.length;r++)n=P(n,O(t[r][0],t[r][1],e,o));return n}function O(t,e,o,n){var r=[];console.log("Grow");var i=!1,u=o;for(u=[u[0]+t,u[1]+e];n.isValidPosition(u)&&("white"!==n.rows[u[0]][u[1]].color&&"black"!==n.rows[u[0]][u[1]].color||(i=!0),r.push(u),u=[u[0]+t,u[1]+e],!i););return r}function P(t,e){for(var o=0;o<e.length;o++)t.push(e[o]);return t}function _(t){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function j(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function S(t){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function k(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function E(t,e){return(E=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}Object.freeze(d),Object.freeze(w);var D=function(t){function e(t,o,n){var r,i,u;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),i=this,(r=!(u=S(e).call(this,t,o,n))||"object"!==_(u)&&"function"!=typeof u?k(i):u).status=!1,r.moveDirections=r.moveDirections.bind(k(r)),r}var o,n,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&E(t,e)}(e,t),o=e,(n=[{key:"symbol",value:function(){return"white"===this.color?"./assets/qw.svg":"./assets/qb.svg"}},{key:"moveDirections",value:function(){return g(d.concat(w),this.position,this.board)}}])&&j(o.prototype,n),r&&j(o,r),e}(r);function T(t){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function C(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function x(t,e){return!e||"object"!==T(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function M(t){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function R(t,e){return(R=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var V=function(t){function e(t,o,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(r=x(this,M(e).call(this,t,o,n))).status=!0,r}var o,n,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&R(t,e)}(e,t),o=e,(n=[{key:"symbol",value:function(){return"white"===this.color?"./assets/rw.svg":"./assets/rb.svg"}},{key:"moveDirections",value:function(){return g(d,this.position,this.board)}}])&&C(o.prototype,n),r&&C(o,r),e}(r);function B(t){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function q(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function z(t){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function L(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function A(t,e){return(A=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var N=function(t){function e(t,o,n){var r,i,u;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),i=this,(r=!(u=z(e).call(this,t,o,n))||"object"!==B(u)&&"function"!=typeof u?L(i):u).status=!1,r.symbol=r.symbol.bind(L(r)),r.moveDirections=r.moveDirections.bind(L(r)),r.moves=g.bind(L(r)),r}var o,n,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&A(t,e)}(e,t),o=e,(n=[{key:"symbol",value:function(){return"white"===this.color?"./assets/bw.svg":"./assets/bb.svg"}},{key:"moveDirections",value:function(){return g(w,this.position,this.board)}}])&&q(o.prototype,n),r&&q(o,r),e}(r);function G(t){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function H(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function I(t,e){return!e||"object"!==G(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function F(t){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function J(t,e){return(J=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var K=function(t){function e(t,o,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(r=I(this,F(e).call(this,t,o,n))).moves=[],r}var o,n,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&J(t,e)}(e,t),o=e,(n=[{key:"symbol",value:function(){return"./assets/empty.png"}},{key:"moveDirections",value:function(){return[]}}])&&H(o.prototype,n),r&&H(o,r),e}(r);Object.freeze(K);var Q=K;function U(t){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function W(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function X(t){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Y(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Z(t,e){return(Z=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var $=function(t){function e(t,o,n){var r,i,u;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),i=this,(r=!(u=X(e).call(this,t,o,n))||"object"!==U(u)&&"function"!=typeof u?Y(i):u).status=!1,r.moveDirections=r.moveDirections.bind(Y(r)),r.direction=r.direction.bind(Y(r)),r.atStart=r.atStart.bind(Y(r)),r.allMoves=r.allMoves.bind(Y(r)),r.forwardDirections=r.forwardDirections.bind(Y(r)),r.forwardSteps=r.forwardSteps.bind(Y(r)),r.sideSteps=r.sideSteps.bind(Y(r)),r}var o,n,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Z(t,e)}(e,t),o=e,(n=[{key:"symbol",value:function(){return"white"===this.color?"./assets/pw.svg":"./assets/pb.svg"}},{key:"moveDirections",value:function(){var t=[];this.forwardDirections().length>0&&(t.push(this.forwardDirections()),t.length>0&&this.atStart()&&t.push([this.direction()+this.forwardDirections()[0],this.forwardDirections()[1]]));for(var e=this.sideSteps(),o=0;o<e.length;o++)t.push(e[o]);return t}},{key:"direction",value:function(){return"white"===this.color?-1:1}},{key:"atStart",value:function(){return("white"===this.color?6:1)===this.position[0]}},{key:"allMoves",value:function(){}},{key:"forwardDirections",value:function(){var t=[this.direction()+this.position[0],this.position[1]];return"null"===this.board.rows[t[0]][t[1]].color?t:[]}},{key:"forwardSteps",value:function(){var t=[this.position[0],this.position[1]+this.forwardDirections()],e=[this.position[0]+2*this.forwardDirections(),this.position[1]],o=[];return this.board.isValidPosition(t)&&this.board.isEmpty(t)&&(o.push(t),this.board.isValidPosition(e)&&this.board.isEmpty(e)&&this.atStart()&&o.push(e)),o}},{key:"sideSteps",value:function(){for(var t="white"===this.color?"black":"white",e=[this.direction()+this.position[0],this.position[1]],o=[],n=[[e[0],e[1]+1],[e[0],e[1]-1]],r=0;r<n.length;r++){var i=n[r];this.board.rows[i[0]][i[1]].color===t&&o.push(i)}return o}}])&&W(o.prototype,n),r&&W(o,r),e}(r);o(1);function tt(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var et=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.rows=[],this.currentPlayer="white";for(var e=0;e<8;e++){this.rows[e]=[];for(var o=0;o<8;o++)this.rows[e][o]=new Q("null",this,[e,o])}this.populateBoard=this.populateBoard.bind(this),this.isEmpty=this.isEmpty.bind(this),this.movePiece=this.movePiece.bind(this),this.isValidPosition=this.isValidPosition.bind(this),this.position=this.position.bind(this),this.includesPosition=this.includesPosition.bind(this),this.changeCurrentPlayer=this.changeCurrentPlayer.bind(this),this.populateBoard()}var e,o,n;return e=t,(o=[{key:"populateBoard",value:function(){for(var t=["black","white"],e=0;e<this.rows.length;e++)for(var o=0;o<this.rows[e].length;o++){var n=[e,o];if(0===e||7===e){var r=this.backRow(o);this.rows[n[0]][n[1]]=new r(t[e%2],this,n)}else 1!==e&&6!==e||(this.rows[n[0]][n[1]]=new $(t[(e+1)%2],this,n))}}},{key:"backRow",value:function(t){return[V,m,N,D,l,N,m,V][t]}},{key:"isEmpty",value:function(t){return this.isValidPosition&&"null"===this.rows[t[0]][t[1]].color}},{key:"movePiece",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];console.log("movePiece");var o=this.rows[t[0]][t[1]];o.color===this.currentPlayer&&this.includesPosition(o.moveDirections(),e)&&(this.rows[e[0]][e[1]]=o,this.rows[t[0]][t[1]]=new Q("null",this,t),this.changeCurrentPlayer(),this.rows[e[0]][e[1]].movePosition(e))}},{key:"isValidPosition",value:function(t){for(var e=!0,o=0;o<t.length;o++)(t[o]<0||t[o]>7)&&(e=!1);return e&&this.rows[t[0]][t[1]].color!==this.currentPlayer}},{key:"position",value:function(t){this.rows[t]}},{key:"includesPosition",value:function(t,e){for(var o=0;o<t.length;o++)if(console.log(t[o]),this.areEqualArrays(t[o],e))return!0;return!1}},{key:"areEqualArrays",value:function(t,e){for(var o=e.length,n=0;n<t.length;n++)t[n]==e[n]&&(o-=1);return 0===o}},{key:"changeCurrentPlayer",value:function(){this.currentPlayer="white"===this.currentPlayer?"black":"white"}},{key:"checkMate",value:function(){}}])&&tt(e.prototype,o),n&&tt(e,n),t}();document.addEventListener("DOMContentLoaded",(function t(){var e=document.getElementsByClassName("chess")[0];var o=function(o){for(var n=function(n){var r=document.createElement("img");r.className=(o+n)%2==0?"black":"white",r.id="".concat(o).concat(n),r.src=ot.rows[o][n].symbol(),e.appendChild(r),r.onclick=function(r){r.preventDefault;var i=[o,n];0===nt.length?nt.push(i):(console.log("start"),console.log(nt[0]),console.log(i),ot.movePiece(nt[0],i),nt=[],e.innerHTML="",t())}},r=0;r<8;r++)n(r)};for(var n=0;n<8;n++)o(n)}));var ot=new et,nt=[]}]);
//# sourceMappingURL=main.js.map