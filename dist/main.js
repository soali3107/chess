!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=2)}([function(t,e,n){},function(t,e){},function(t,e,n){"use strict";n.r(e);n(0);function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var r=function(){function t(e,n,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.color=e,this.board=n,this.position=o,this.status=!1,this.movePosition=this.movePosition.bind(this)}var e,n,r;return e=t,(n=[{key:"movePosition",value:function(t){this.position=[t[0],t[1]]}},{key:"validMoves",value:function(){}},{key:"isMovedIntoCheck",value:function(t){}}])&&o(e.prototype,n),r&&o(e,r),t}();function i(t,e,n){for(var o=[],r=0;r<t.length;r++){var i=t[r],c=[e[0]+i[0],e[1]+i[1]];n.isValidPosition(c,n.rows[e[0]][e[1]].color)&&o.push(c)}return o}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function u(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?f(t):e}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(p,t);var e,n,o,r,c=(e=p,function(){var t,n=l(e);if(a()){var o=l(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return u(this,t)});function p(t,e,n){var o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,p),(o=c.call(this,t,e,n)).status=!0,o.moveDirections=o.moveDirections.bind(f(o)),o}return n=p,(o=[{key:"symbol",value:function(){return"white"===this.color?"./assets/kw.svg":"./assets/kb.svg"}},{key:"moveDirections",value:function(){return i([[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1],[0,-1],[1,-1]],this.position,this.board)}}])&&s(n.prototype,o),r&&s(n,r),p}(r);function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function v(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?m(t):e}function m(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function w(t){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var k=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(s,t);var e,n,o,r,c=(e=s,function(){var t,n=w(e);if(d()){var o=w(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return v(this,t)});function s(t,e,n){var o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(o=c.call(this,t,e,n)).status=!1,o.moveDirections=o.moveDirections.bind(m(o)),o}return n=s,(o=[{key:"symbol",value:function(){return"white"===this.color?"./assets/nw.svg":"./assets/nb.svg"}},{key:"moveDirections",value:function(){return i([[1,2],[2,1],[1,-2],[2,-1],[-1,2],[-2,1],[-1,-2],[-2,-1]],this.position,this.board)}}])&&b(n.prototype,o),r&&b(n,r),s}(r),P=[[1,0],[0,1],[-1,0],[0,-1]],O=[[1,1],[1,-1],[-1,-1],[-1,1]];function S(t,e,n){for(var o=[],r=0;r<t.length;r++)o=j(o,_(t[r][0],t[r][1],e,n));return o}function _(t,e,n,o){var r=[],i=!1,c=n;for(c=[c[0]+t,c[1]+e];o.isValidPosition(c,o.rows[n[0]][n[1]].color)&&("white"!==o.rows[c[0]][c[1]].color&&"black"!==o.rows[c[0]][c[1]].color||(i=!0),r.push(c),c=[c[0]+t,c[1]+e],!i););return r}function j(t,e){for(var n=0;n<e.length;n++)t.push(e[n]);return t}function D(t){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function R(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function E(t,e){return!e||"object"!==D(e)&&"function"!=typeof e?C(t):e}function C(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function x(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function T(t){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function B(t,e){return(B=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}Object.freeze(P),Object.freeze(O);var M=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&B(t,e)}(c,t);var e,n,o,r,i=(e=c,function(){var t,n=T(e);if(x()){var o=T(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return E(this,t)});function c(t,e,n){var o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(o=i.call(this,t,e,n)).status=!1,o.moveDirections=o.moveDirections.bind(C(o)),o}return n=c,(o=[{key:"symbol",value:function(){return"white"===this.color?"./assets/qw.svg":"./assets/qb.svg"}},{key:"moveDirections",value:function(){return S(P.concat(O),this.position,this.board)}}])&&R(n.prototype,o),r&&R(n,r),c}(r);function N(t){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function K(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function L(t,e){return!e||"object"!==N(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function V(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function q(t){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function z(t,e){return(z=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var A=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&z(t,e)}(c,t);var e,n,o,r,i=(e=c,function(){var t,n=q(e);if(V()){var o=q(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return L(this,t)});function c(t,e,n){var o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(o=i.call(this,t,e,n)).status=!0,o}return n=c,(o=[{key:"symbol",value:function(){return"white"===this.color?"./assets/rw.svg":"./assets/rb.svg"}},{key:"moveDirections",value:function(){return S(P,this.position,this.board)}}])&&K(n.prototype,o),r&&K(n,r),c}(r);function H(t){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function W(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function I(t,e){return!e||"object"!==H(e)&&"function"!=typeof e?U(t):e}function U(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function F(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function G(t){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function J(t,e){return(J=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var Q=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&J(t,e)}(c,t);var e,n,o,r,i=(e=c,function(){var t,n=G(e);if(F()){var o=G(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return I(this,t)});function c(t,e,n){var o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(o=i.call(this,t,e,n)).status=!1,o.symbol=o.symbol.bind(U(o)),o.moveDirections=o.moveDirections.bind(U(o)),o.moves=S.bind(U(o)),o}return n=c,(o=[{key:"symbol",value:function(){return"white"===this.color?"./assets/bw.svg":"./assets/bb.svg"}},{key:"moveDirections",value:function(){return S(O,this.position,this.board)}}])&&W(n.prototype,o),r&&W(n,r),c}(r);function X(t){return(X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Y(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function Z(t,e){return!e||"object"!==X(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function $(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function tt(t){return(tt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function et(t,e){return(et=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var nt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&et(t,e)}(c,t);var e,n,o,r,i=(e=c,function(){var t,n=tt(e);if($()){var o=tt(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return Z(this,t)});function c(t,e,n){var o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(o=i.call(this,t,e,n)).moves=[],o}return n=c,(o=[{key:"symbol",value:function(){return"./assets/empty.png"}},{key:"moveDirections",value:function(){return[]}}])&&Y(n.prototype,o),r&&Y(n,r),c}(r);Object.freeze(nt);var ot=nt;function rt(t){return(rt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function it(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function ct(t,e){return!e||"object"!==rt(e)&&"function"!=typeof e?st(t):e}function st(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ut(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function ft(t){return(ft=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function at(t,e){return(at=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var lt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&at(t,e)}(c,t);var e,n,o,r,i=(e=c,function(){var t,n=ft(e);if(ut()){var o=ft(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return ct(this,t)});function c(t,e,n){var o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(o=i.call(this,t,e,n)).status=!1,o.moveDirections=o.moveDirections.bind(st(o)),o.direction=o.direction.bind(st(o)),o.atStart=o.atStart.bind(st(o)),o.allMoves=o.allMoves.bind(st(o)),o.forwardDirections=o.forwardDirections.bind(st(o)),o.forwardSteps=o.forwardSteps.bind(st(o)),o.sideSteps=o.sideSteps.bind(st(o)),o}return n=c,(o=[{key:"symbol",value:function(){return"white"===this.color?"./assets/pw.svg":"./assets/pb.svg"}},{key:"moveDirections",value:function(){var t=[];this.forwardDirections().length>0&&(t.push(this.forwardDirections()),t.length>0&&this.atStart()&&t.push([this.direction()+this.forwardDirections()[0],this.forwardDirections()[1]]));for(var e=this.sideSteps(),n=0;n<e.length;n++)t.push(e[n]);return t}},{key:"direction",value:function(){return"white"===this.color?-1:1}},{key:"atStart",value:function(){return("white"===this.color?6:1)===this.position[0]}},{key:"allMoves",value:function(){}},{key:"forwardDirections",value:function(){var t=this.direction()+this.position[0],e=[];return t>=0&&t<8?(e=[this.direction()+this.position[0],this.position[1]],"null"===this.board.rows[e[0]][e[1]].color?e:[]):[]}},{key:"forwardSteps",value:function(){var t=[this.position[0],this.position[1]+this.forwardDirections()],e=[this.position[0]+2*this.forwardDirections(),this.position[1]],n=[];return this.board.isEmpty(t)&&this.board.isEmpty(t)&&(n.push(t),this.board.isEmpty(e)&&this.board.isEmpty(e)&&this.atStart()&&n.push(e)),n}},{key:"sideSteps",value:function(){var t="white"===this.color?"black":"white",e=[this.direction()+this.position[0],this.position[1]],n=[],o=[],r=e[1]-1,i=e[1]+1;r>=0&&r<8&&o.push([e[0],r]),i>=0&&i<8&&o.push([e[0],i]);for(var c=0;c<o.length;c++){var s=o[c];this.board.isOnBoard(s)&&this.board.rows[s[0]][s[1]].color===t&&n.push(s)}return n}}])&&it(n.prototype,o),r&&it(n,r),c}(r);n(1);function ht(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var pt=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.rows=[],this.currentPlayer="white";for(var e=0;e<8;e++){this.rows[e]=[];for(var n=0;n<8;n++)this.rows[e][n]=new ot("null",this,[e,n])}this.populateBoard=this.populateBoard.bind(this),this.isEmpty=this.isEmpty.bind(this),this.movePiece=this.movePiece.bind(this),this.findKing=this.findKing.bind(this),this.check=this.check.bind(this),this.checkmate=this.checkmate.bind(this),this.isValidPosition=this.isValidPosition.bind(this),this.position=this.position.bind(this),this.includesPosition=this.includesPosition.bind(this),this.changeCurrentPlayer=this.changeCurrentPlayer.bind(this),this.promotion=this.promotion.bind(this),this.populateBoard()}var e,n,o;return e=t,(n=[{key:"populateBoard",value:function(){for(var t=["black","white"],e=0;e<this.rows.length;e++)for(var n=0;n<this.rows[e].length;n++){var o=[e,n];if(0===e||7===e){var r=this.backRow(n);this.rows[o[0]][o[1]]=new r(t[e%2],this,o)}else 1!==e&&6!==e||(this.rows[o[0]][o[1]]=new lt(t[(e+1)%2],this,o))}}},{key:"backRow",value:function(t){return[A,k,Q,M,p,Q,k,A][t]}},{key:"isEmpty",value:function(t){return this.isOnBoard()&&"null"===this.rows[t[0]][t[1]].color}},{key:"movePiece",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=this.rows[t[0]][t[1]],o="white"==this.currentPlayer?"black":"white";if(n.color===this.currentPlayer&&this.includesPosition(n.moveDirections(),e)){var r=this.rows[e[0]][e[1]];this.rows[e[0]][e[1]]=n,this.rows[t[0]][t[1]]=new ot("null",this,t),this.rows[e[0]][e[1]].movePosition(e),this.check(this.currentPlayer)&&(this.rows[t[0]][t[1]]=n,this.rows[t[0]][t[1]].movePosition(t),this.rows[e[0]][e[1]]=r,this.changeCurrentPlayer()),this.checkmate(o)||this.check(o),this.changeCurrentPlayer()}}},{key:"findKing",value:function(t){for(var e="white"===t?"./assets/kw.svg":"./assets/kb.svg",n=0;n<8;n++)for(var o=0;o<8;o++)if(this.rows[n][o].symbol()==e&&this.rows[n][o].color==t)return[n,o]}},{key:"check",value:function(t){for(var e=this.findKing(t),n="white"==t?"black":"white",o=0;o<8;o++)for(var r=0;r<8;r++)if(this.rows[o][r].color==n&&this.includesPosition(this.rows[o][r].moveDirections(),e))return!0;return!1}},{key:"checkmate",value:function(t){if(this.findKing(t),!this.check(t))return!1;for(var e=0;e<8;e++)for(var n=0;n<8;n++)if(this.rows[e][n].color==t)for(var o=this.rows[e][n],r=o.moveDirections(),i=0;i<r.length;){var c=r[i][0],s=r[i][1],u=this.rows[c][s];if(this.rows[c][s]=o,this.rows[e][n]=new ot("null",this,[e,n]),!this.check(t))return this.rows[e][n]=o,this.rows[c][s]=u,!1;this.rows[e][n]=o,this.rows[c][s]=u,i+=1}return!0}},{key:"isOnBoard",value:function(t){return t[0]<8&&t[0]>=0&&t[1]<8&&t[1]>=0}},{key:"isValidPosition",value:function(t,e){return this.isOnBoard(t)&&this.rows[t[0]][t[1]].color!==e}},{key:"promotion",value:function(t,e){var n=this.rows[t[0]][t[1]];this.rows[t[0]][t[1]]=new e(n.color,this,n.position)}},{key:"position",value:function(t){this.rows[t]}},{key:"includesPosition",value:function(t,e){for(var n=0;n<t.length;n++)if(this.areEqualArrays(t[n],e))return!0;return!1}},{key:"areEqualArrays",value:function(t,e){for(var n=e.length,o=0;o<t.length;o++)t[o]==e[o]&&(n-=1);return 0===n}},{key:"changeCurrentPlayer",value:function(){this.currentPlayer="white"===this.currentPlayer?"black":"white"}}])&&ht(e.prototype,n),o&&ht(e,o),t}();document.addEventListener("DOMContentLoaded",(function(){vt(),document.getElementsByClassName("reset")[0].addEventListener("click",(function(){bt=new pt,yt=[],document.getElementsByClassName("chess")[0].innerHTML="",vt()}))}));var yt=[],bt=new pt;function vt(){var t,e,n=document.getElementsByClassName("chess")[0],o=document.getElementsByClassName("valid")[0];t=document.getElementsByClassName("check")[0],(e=document.getElementsByClassName("turn")[0]).textContent=bt.currentPlayer[0].toUpperCase()+bt.currentPlayer.slice(1)+"'s Turn",console.log(bt.checkmate("white")),console.log(bt.checkmate("black")),console.log("----------"),console.log(bt),bt.checkmate("white")?(t.textContent="White is in checkmate!",e.textContent=""):bt.checkmate("black")?(t.textContent="Black is in checkmate!",e.textContent=""):bt.check("white")?t.textContent="White is in check!":bt.check("black")?t.textContent="Black is in check!":t.textContent="";for(var r=function(t){for(var e=function(e){var r=document.createElement("img");r.className=(t+e)%2==0?"black":"white",r.id="".concat(t).concat(e),r.src=bt.rows[t][e].symbol(),n.appendChild(r),r.onclick=function(r){r.preventDefault;var i=[t,e];if(0===yt.length&&bt.rows[i[0]][i[1]].color===bt.currentPlayer)yt.push(i),o.textContent="Pick where to move ".concat(bt.currentPlayer," piece");else if(0===yt.length)o.textContent="Pick ".concat(bt.currentPlayer," piece to move.");else{bt.movePiece(yt[0],i),o.textContent="Pick ".concat(bt.currentPlayer," piece to move.");var c=bt.rows[i[0]][i[1]];c instanceof lt&&(0===i[0]||7===i[0])&&(c=bt.promotion(i,M)),yt=[],n.innerHTML="",vt()}}},r=0;r<8;r++)e(r)},i=0;i<8;i++)r(i)}}]);
//# sourceMappingURL=main.js.map