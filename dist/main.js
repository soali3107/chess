!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=2)}([function(t,e,n){},function(t,e){},function(t,e,n){"use strict";n.r(e);n(0);function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.color=e,this.board=n,this.position=r,this.status=!1,this.movePosition=this.movePosition.bind(this)}var e,n,o;return e=t,(n=[{key:"movePosition",value:function(t){this.position=[t[0],t[1]]}},{key:"validMoves",value:function(){}},{key:"isMovedIntoCheck",value:function(t){}}])&&r(e.prototype,n),o&&r(e,o),t}();function i(t,e,n){for(var r=[],o=0;o<t.length;o++){var i=t[o],c=[e[0]+i[0],e[1]+i[1]];n.isValidPosition(c,n.rows[e[0]][e[1]].color)&&r.push(c)}return r}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?f(t):e}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(p,t);var e,n,r,o,c=(e=p,function(){var t,n=l(e);if(a()){var r=l(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return u(this,t)});function p(t,e,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,p),(r=c.call(this,t,e,n)).status=!0,r.moveDirections=r.moveDirections.bind(f(r)),r}return n=p,(r=[{key:"symbol",value:function(){return"white"===this.color?"./assets/kw.svg":"./assets/kb.svg"}},{key:"moveDirections",value:function(){return i([[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1],[0,-1],[1,-1]],this.position,this.board)}}])&&s(n.prototype,r),o&&s(n,o),p}(o);function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?d(t):e}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function w(t){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(s,t);var e,n,r,o,c=(e=s,function(){var t,n=w(e);if(m()){var r=w(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return v(this,t)});function s(t,e,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(r=c.call(this,t,e,n)).status=!1,r.moveDirections=r.moveDirections.bind(d(r)),r}return n=s,(r=[{key:"symbol",value:function(){return"white"===this.color?"./assets/nw.svg":"./assets/nb.svg"}},{key:"moveDirections",value:function(){return i([[1,2],[2,1],[1,-2],[2,-1],[-1,2],[-2,1],[-1,-2],[-2,-1]],this.position,this.board)}}])&&b(n.prototype,r),o&&b(n,o),s}(o),P=[[1,0],[0,1],[-1,0],[0,-1]],k=[[1,1],[1,-1],[-1,-1],[-1,1]];function S(t,e,n){for(var r=[],o=0;o<t.length;o++)r=j(r,_(t[o][0],t[o][1],e,n));return r}function _(t,e,n,r){var o=[],i=!1,c=n;for(c=[c[0]+t,c[1]+e];r.isValidPosition(c,r.rows[n[0]][n[1]].color)&&("white"!==r.rows[c[0]][c[1]].color&&"black"!==r.rows[c[0]][c[1]].color||(i=!0),o.push(c),c=[c[0]+t,c[1]+e],!i););return o}function j(t,e){for(var n=0;n<e.length;n++)t.push(e[n]);return t}function D(t){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function R(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function E(t,e){return!e||"object"!==D(e)&&"function"!=typeof e?C(t):e}function C(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function T(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function x(t){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function M(t,e){return(M=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}Object.freeze(P),Object.freeze(k);var B=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&M(t,e)}(c,t);var e,n,r,o,i=(e=c,function(){var t,n=x(e);if(T()){var r=x(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return E(this,t)});function c(t,e,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(r=i.call(this,t,e,n)).status=!1,r.moveDirections=r.moveDirections.bind(C(r)),r}return n=c,(r=[{key:"symbol",value:function(){return"white"===this.color?"./assets/qw.svg":"./assets/qb.svg"}},{key:"moveDirections",value:function(){return S(P.concat(k),this.position,this.board)}}])&&R(n.prototype,r),o&&R(n,o),c}(o);function q(t){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function K(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function L(t,e){return!e||"object"!==q(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function V(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function N(t){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function z(t,e){return(z=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var A=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&z(t,e)}(c,t);var e,n,r,o,i=(e=c,function(){var t,n=N(e);if(V()){var r=N(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return L(this,t)});function c(t,e,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(r=i.call(this,t,e,n)).status=!0,r}return n=c,(r=[{key:"symbol",value:function(){return"white"===this.color?"./assets/rw.svg":"./assets/rb.svg"}},{key:"moveDirections",value:function(){return S(P,this.position,this.board)}}])&&K(n.prototype,r),o&&K(n,o),c}(o);function H(t){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function F(t,e){return!e||"object"!==H(e)&&"function"!=typeof e?G(t):e}function G(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function J(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function Q(t){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function U(t,e){return(U=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var W=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&U(t,e)}(c,t);var e,n,r,o,i=(e=c,function(){var t,n=Q(e);if(J()){var r=Q(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return F(this,t)});function c(t,e,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(r=i.call(this,t,e,n)).status=!1,r.symbol=r.symbol.bind(G(r)),r.moveDirections=r.moveDirections.bind(G(r)),r.moves=S.bind(G(r)),r}return n=c,(r=[{key:"symbol",value:function(){return"white"===this.color?"./assets/bw.svg":"./assets/bb.svg"}},{key:"moveDirections",value:function(){return S(k,this.position,this.board)}}])&&I(n.prototype,r),o&&I(n,o),c}(o);function X(t){return(X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Z(t,e){return!e||"object"!==X(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function $(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function tt(t){return(tt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function et(t,e){return(et=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var nt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&et(t,e)}(c,t);var e,n,r,o,i=(e=c,function(){var t,n=tt(e);if($()){var r=tt(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Z(this,t)});function c(t,e,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(r=i.call(this,t,e,n)).moves=[],r}return n=c,(r=[{key:"symbol",value:function(){return"./assets/empty.png"}},{key:"moveDirections",value:function(){return[]}}])&&Y(n.prototype,r),o&&Y(n,o),c}(o);Object.freeze(nt);var rt=nt;function ot(t){return(ot="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function it(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function ct(t,e){return!e||"object"!==ot(e)&&"function"!=typeof e?st(t):e}function st(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ut(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function ft(t){return(ft=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function at(t,e){return(at=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var lt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&at(t,e)}(c,t);var e,n,r,o,i=(e=c,function(){var t,n=ft(e);if(ut()){var r=ft(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return ct(this,t)});function c(t,e,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(r=i.call(this,t,e,n)).status=!1,r.moveDirections=r.moveDirections.bind(st(r)),r.direction=r.direction.bind(st(r)),r.atStart=r.atStart.bind(st(r)),r.allMoves=r.allMoves.bind(st(r)),r.forwardDirections=r.forwardDirections.bind(st(r)),r.forwardSteps=r.forwardSteps.bind(st(r)),r.sideSteps=r.sideSteps.bind(st(r)),r}return n=c,(r=[{key:"symbol",value:function(){return"white"===this.color?"./assets/pw.svg":"./assets/pb.svg"}},{key:"moveDirections",value:function(){var t=[];this.forwardDirections().length>0&&(t.push(this.forwardDirections()),t.length>0&&this.atStart()&&t.push([this.direction()+this.forwardDirections()[0],this.forwardDirections()[1]]));for(var e=this.sideSteps(),n=0;n<e.length;n++)t.push(e[n]);return t}},{key:"direction",value:function(){return"white"===this.color?-1:1}},{key:"atStart",value:function(){return("white"===this.color?6:1)===this.position[0]}},{key:"allMoves",value:function(){}},{key:"forwardDirections",value:function(){var t=this.direction()+this.position[0],e=[];return t>=0&&t<8?(e=[this.direction()+this.position[0],this.position[1]],"null"===this.board.rows[e[0]][e[1]].color?e:[]):[]}},{key:"forwardSteps",value:function(){var t=[this.position[0],this.position[1]+this.forwardDirections()],e=[this.position[0]+2*this.forwardDirections(),this.position[1]],n=[];return this.board.isEmpty(t)&&this.board.isEmpty(t)&&(n.push(t),this.board.isEmpty(e)&&this.board.isEmpty(e)&&this.atStart()&&n.push(e)),n}},{key:"sideSteps",value:function(){var t="white"===this.color?"black":"white",e=[this.direction()+this.position[0],this.position[1]],n=[],r=[],o=e[1]-1,i=e[1]+1;o>=0&&o<8&&r.push([e[0],o]),i>=0&&i<8&&r.push([e[0],i]);for(var c=0;c<r.length;c++){var s=r[c];this.board.isOnBoard(s)&&this.board.rows[s[0]][s[1]].color===t&&n.push(s)}return n}}])&&it(n.prototype,r),o&&it(n,o),c}(o);n(1);function ht(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var pt=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.rows=[],this.currentPlayer="white";for(var e=0;e<8;e++){this.rows[e]=[];for(var n=0;n<8;n++)this.rows[e][n]=new rt("null",this,[e,n])}this.populateBoard=this.populateBoard.bind(this),this.isEmpty=this.isEmpty.bind(this),this.movePiece=this.movePiece.bind(this),this.findKing=this.findKing.bind(this),this.check=this.check.bind(this),this.checkmate=this.checkmate.bind(this),this.isValidPosition=this.isValidPosition.bind(this),this.position=this.position.bind(this),this.includesPosition=this.includesPosition.bind(this),this.changeCurrentPlayer=this.changeCurrentPlayer.bind(this),this.promotion=this.promotion.bind(this),this.populateBoard()}var e,n,r;return e=t,(n=[{key:"populateBoard",value:function(){for(var t=["black","white"],e=0;e<this.rows.length;e++)for(var n=0;n<this.rows[e].length;n++){var r=[e,n];if(0===e||7===e){var o=this.backRow(n);this.rows[r[0]][r[1]]=new o(t[e%2],this,r)}else 1!==e&&6!==e||(this.rows[r[0]][r[1]]=new lt(t[(e+1)%2],this,r))}}},{key:"backRow",value:function(t){return[A,O,W,B,p,W,O,A][t]}},{key:"isEmpty",value:function(t){return this.isOnBoard()&&"null"===this.rows[t[0]][t[1]].color}},{key:"movePiece",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=this.rows[t[0]][t[1]],r="white"==this.currentPlayer?"black":"white";if(n.color===this.currentPlayer&&this.includesPosition(n.moveDirections(),e)){var o=this.rows[e[0]][e[1]];this.rows[e[0]][e[1]]=n,this.rows[t[0]][t[1]]=new rt("null",this,t),this.rows[e[0]][e[1]].movePosition(e),this.check(this.currentPlayer)&&(this.rows[t[0]][t[1]]=n,this.rows[e[0]][e[1]]=o,this.changeCurrentPlayer()),this.checkmate(r)?console.log(r+" is in  checkmate."):this.check(r)&&console.log(r,"is in check"),this.changeCurrentPlayer()}}},{key:"findKing",value:function(t){for(var e="white"===t?"./assets/kw.svg":"./assets/kb.svg",n=0;n<8;n++)for(var r=0;r<8;r++)if(this.rows[n][r].symbol()==e&&this.rows[n][r].color==t)return[n,r]}},{key:"check",value:function(t){for(var e=this.findKing(t),n="white"==t?"black":"white",r=0;r<8;r++)for(var o=0;o<8;o++)if(this.rows[r][o].color==n&&this.includesPosition(this.rows[r][o].moveDirections(),e))return!0;return!1}},{key:"checkmate",value:function(t){if(this.findKing(t),!this.check(t))return!1;for(var e=0;e<8;e++)for(var n=0;n<8;n++)if(this.rows[e][n].color==t)for(var r=this.rows[e][n],o=r.moveDirections(),i=0;i<o.length;){var c=o[i][0],s=o[i][1],u=this.rows[c][s];if(this.rows[c][s]=r,this.rows[e][n]=new rt("null",this,[e,n]),!this.check(t))return this.rows[e][n]=r,this.rows[c][s]=u,!1;this.rows[e][n]=r,this.rows[c][s]=u,i+=1}return!0}},{key:"isOnBoard",value:function(t){return t[0]<8&&t[0]>=0&&t[1]<8&&t[1]>=0}},{key:"isValidPosition",value:function(t,e){return this.isOnBoard(t)&&this.rows[t[0]][t[1]].color!==e}},{key:"promotion",value:function(t,e){var n=this.rows[t[0]][t[1]];this.rows[t[0]][t[1]]=new e(n.color,this,n.position)}},{key:"position",value:function(t){this.rows[t]}},{key:"includesPosition",value:function(t,e){for(var n=0;n<t.length;n++)if(this.areEqualArrays(t[n],e))return!0;return!1}},{key:"areEqualArrays",value:function(t,e){for(var n=e.length,r=0;r<t.length;r++)t[r]==e[r]&&(n-=1);return 0===n}},{key:"changeCurrentPlayer",value:function(){this.currentPlayer="white"===this.currentPlayer?"black":"white"}}])&&ht(e.prototype,n),r&&ht(e,r),t}();document.querySelector(".reset").addEventListener("click",(function(){bt=new pt;document.getElementsByClassName("chess")[0].innerHTML="",vt()})),document.addEventListener("DOMContentLoaded",(function(){vt()}));var yt=[],bt=new pt;function vt(){console.log(document.getElementsByClassName("chess"));for(var t=document.getElementsByClassName("chess")[0],e=function(e){for(var n=function(n){var r=document.createElement("img");r.className=(e+n)%2==0?"black":"white",r.id="".concat(e).concat(n),r.src=bt.rows[e][n].symbol(),t.appendChild(r),r.onclick=function(r){r.preventDefault;var o=[e,n];if(0===yt.length)yt.push(o);else{bt.movePiece(yt[0],o);var i=bt.rows[o[0]][o[1]];i instanceof lt&&(0===o[0]||7===o[0])&&(i=bt.promotion(o,B)),yt=[],t.innerHTML="",vt()}}},r=0;r<8;r++)n(r)},n=0;n<8;n++)e(n)}}]);
//# sourceMappingURL=main.js.map