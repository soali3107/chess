!function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/dist/",o(o.s=2)}([function(t,e,o){},function(t,e){},function(t,e,o){"use strict";o.r(e);o(0);function n(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var r=function(){function t(e,o,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.color=e,this.board=o,this.position=n,this.status=!1}var e,o,r;return e=t,(o=[{key:"validMoves",value:function(){}},{key:"isMovedIntoCheck",value:function(t){}}])&&n(e.prototype,o),r&&n(e,r),t}();function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var f=function(t){function e(t,o,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(r=c(this,s(e).call(this,t,o,n))).status=!0,r}var o,n,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(e,t),o=e,(n=[{key:"symbol",value:function(){return"white"===this.color?"./assets/kw.svg":"./assets/kb.svg"}},{key:"moveDirections",value:function(){}}])&&u(o.prototype,n),r&&u(o,r),e}(r);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var v=function(t){function e(t,o,n){var r,i,u;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),i=this,(r=!(u=y(e).call(this,t,o,n))||"object"!==l(u)&&"function"!=typeof u?b(i):u).status=!1,r.addition=r.addition.bind(b(r)),r}var o,n,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(e,t),o=e,(n=[{key:"symbol",value:function(){return"white"===this.color?"./assets/nw.svg":"./assets/nb.svg"}},{key:"moveDirections",value:function(){return[[1,2],[2,1],[1,-2],[2,-1],[-1,2],[-2,1],[-1,-2],[-2,-1]].map(addition)}},{key:"addition",value:function(t){return[[this.position[0]+t[0]],[this.position[1]+t[1]]]}}])&&p(o.prototype,n),r&&p(o,r),e}(r),m=[[1,0],[0,1],[-1,0],[0,-1]],w=[[1,1],[1,-1],[-1,-1],[-1,1]];function d(t,e,o){var n=[];console.log("moves2"),console.log(o);for(var r=0;r<t.length;r++)n.push(O(t[0],t[1],e,o));return n}function O(t,e,o,n){var r=[];console.log("Grow");var i=o;for(console.log(n),i=[i[0]+t,i[1]+e];n.isValidPosition(i);)return r}function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function j(t,e){return!e||"object"!==g(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function S(t){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function P(t,e){return(P=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}Object.freeze(m),Object.freeze(w);var k=function(t){function e(t,o,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(r=j(this,S(e).call(this,t,o,n))).status=!1,r}var o,n,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&P(t,e)}(e,t),o=e,(n=[{key:"symbol",value:function(){return"white"===this.color?"./assets/qw.svg":"./assets/qb.svg"}},{key:"moveDirections",value:function(){return d(m.concat(w))}}])&&_(o.prototype,n),r&&_(o,r),e}(r);function E(t){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function D(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function T(t,e){return!e||"object"!==E(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function C(t){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function x(t,e){return(x=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var M=function(t){function e(t,o,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(r=T(this,C(e).call(this,t,o,n))).status=!0,r}var o,n,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&x(t,e)}(e,t),o=e,(n=[{key:"symbol",value:function(){return"white"===this.color?"./assets/rw.svg":"./assets/rb.svg"}},{key:"moveDirections",value:function(){return d(m)}}])&&D(o.prototype,n),r&&D(o,r),e}(r);function R(t){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function B(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function V(t){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function L(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function z(t,e){return(z=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var q=function(t){function e(t,o,n){var r,i,u;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),i=this,(r=!(u=V(e).call(this,t,o,n))||"object"!==R(u)&&"function"!=typeof u?L(i):u).status=!1,r.symbol=r.symbol.bind(L(r)),r.moveDirections=r.moveDirections.bind(L(r)),r.moves=d.bind(L(r)),r}var o,n,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&z(t,e)}(e,t),o=e,(n=[{key:"symbol",value:function(){return"white"===this.color?"./assets/bw.svg":"./assets/bb.svg"}},{key:"moveDirections",value:function(){return console.log("moveD"),console.log(this.board),d(w,this.position,this.board)}}])&&B(o.prototype,n),r&&B(o,r),e}(r);function H(t){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function N(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function G(t,e){return!e||"object"!==H(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function I(t){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function A(t,e){return(A=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var F=function(t){function e(t,o,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(r=G(this,I(e).call(this,t,o,n))).moves=[],r}var o,n,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&A(t,e)}(e,t),o=e,(n=[{key:"symbol",value:function(){return"//:0"}},{key:"moveDirections",value:function(){return[]}}])&&N(o.prototype,n),r&&N(o,r),e}(r);Object.freeze(F);var J=F;function K(t){return(K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Q(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function U(t){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function W(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function X(t,e){return(X=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var Y=function(t){function e(t,o,n){var r,i,u;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),i=this,(r=!(u=U(e).call(this,t,o,n))||"object"!==K(u)&&"function"!=typeof u?W(i):u).status=!1,r.moveDirections=r.moveDirections.bind(W(r)),r.atStart=r.atStart.bind(W(r)),r.fowardDirections=r.fowardDirections.bind(W(r)),r.fowardSteps=r.fowardSteps.bind(W(r)),r.sideSteps=r.sideSteps.bind(W(r)),r}var o,n,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&X(t,e)}(e,t),o=e,(n=[{key:"symbol",value:function(){return"white"===this.color?"./assets/pw.svg":"./assets/pb.svg"}},{key:"moveDirections",value:function(){return console.log("moveDPawn"),this.fowardSteps().concat(this.sideSteps())}},{key:"atStart",value:function(){return("white"===this.color?1:6)===this.position[1]}},{key:"fowardDirections",value:function(){return"white"===this.color?1:-1}},{key:"fowardSteps",value:function(){var t=[this.position[0],this.position[1]+this.fowardDirections()],e=[this.position[0]+2*this.fowardDirections(),this.position[1]],o=[];return this.board.isValidPosition(t)&&this.board.isEmpty(t)&&(o.push(t),this.board.isValidPosition(e)&&this.board.isEmpty(e)&&this.atStart()&&o.push(e)),o}},{key:"sideSteps",value:function(){var t="white"===this.color?"Black":"white",e=[];console.log(this.position);for(var o=this.fowardDirections(),n=[[this.position[0]+o,this.position[1]+1],[this.position[0]+o,this.position[1]-1]],r=0;r<n.length;r++){var i=n[r];console.log(i),this.board.isValidPosition(n[r])&&this.board.rows[i[0]][i[1]].color===t&&e.push(n[r])}return e}}])&&Q(o.prototype,n),r&&Q(o,r),e}(r);o(1);function Z(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var $=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.rows=[];for(var e=0;e<8;e++){this.rows[e]=[];for(var o=0;o<8;o++)this.rows[e][o]=new J("null",this,[e,o])}this.populateBoard=this.populateBoard.bind(this),this.isEmpty=this.isEmpty.bind(this),this.movePiece=this.movePiece.bind(this),this.position=this.position.bind(this),this.populateBoard(),this.currentPlayer="white"}var e,o,n;return e=t,(o=[{key:"populateBoard",value:function(){for(var t=["white","black"],e=0;e<this.rows.length;e++)for(var o=0;o<this.rows[e].length;o++){var n=[e,o];if(0===e||7===e){var r=this.backRow(o);this.rows[n[0]][n[1]]=new r(t[e%2],this,n)}else 1!==e&&6!==e||(this.rows[n[0]][n[1]]=new Y(t[(e+1)%2],this,n))}}},{key:"backRow",value:function(t){return[M,v,q,k,f,q,v,M][t]}},{key:"isEmpty",value:function(t){return this.isValidPosition&&"null"===this.rows[t[0]][t[1]].color}},{key:"movePiece",value:function(t,e){console.log("movePiece");var o=this.rows[t[0]][t[1]];console.log(o),console.log(o.color),console.log(this.currentPlayer),console.log(o.moveDirections()),console.log("HELOOOOOO"),this.rows[e[0]][e[1]]=o,this.rows[t[0]][t[1]]=new J("null",this,t),this.currentPlayer="white"===this.currentPlayer?"black":"white"}},{key:"isValidPosition",value:function(t){for(var e=!0,o=0;o<t.length;o++)(t[o]<0||t[o]>7)&&(e=!1);return e}},{key:"position",value:function(t){this.rows[t]}},{key:"checkMate",value:function(){}}])&&Z(e.prototype,o),n&&Z(e,n),t}();document.addEventListener("DOMContentLoaded",(function t(){var e=document.getElementsByClassName("chess")[0];var o=function(o){for(var n=function(n){var r=document.createElement("img");r.className=(o+n)%2==0?"black":"white",r.id="".concat(o).concat(n),r.src=tt.rows[o][n].symbol(),e.appendChild(r),r.onclick=function(r){r.preventDefault;var i=[o,n];0===et.length?(et.push(i),console.log("click1"),console.log(et)):(console.log("start"),console.log(et[0]),console.log(i),tt.movePiece(et[0],i),et=[],console.log("click2"),console.log(et),e.innerHTML="",t())}},r=0;r<8;r++)n(r)};for(var n=0;n<8;n++)o(n)}));var tt=new $,et=[]}]);
//# sourceMappingURL=main.js.map