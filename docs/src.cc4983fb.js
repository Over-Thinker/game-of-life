parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"yhe3":[function(require,module,exports) {
"use strict";function e(e,r){var t=document.createElement(e);return r&&r(t),t}function r(e){for(;e.lastChild;)e.removeChild(e.lastChild)}function t(e){var r=0,t=e,n={};return[function(){return t},function(e){for(var r in t=e,n)n[r](t)},function(e){return n[r]=e,r++},function(e){delete n[e]}]}Object.defineProperty(exports,"__esModule",{value:!0}),exports.createElement=e,exports.createObserver=t,exports.removeChildren=r;
},{}],"I3Un":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.GameOfLifeEngine=void 0;var t,i=require("noliter");!function(t){t[t.WIDTH=16]="WIDTH",t[t.HEIGHT=16]="HEIGHT",t[t.MARGIN=2]="MARGIN",t.DEAD_COLOR="#FFF",t.SURVIVE_COLOR="#000"}(t||(t={}));var e="#FFF",n=function(i){return(t.MARGIN+t.WIDTH)*i+t.MARGIN},r=function(i){return(t.MARGIN+t.HEIGHT)*i+t.MARGIN},s=function(){function s(t){this.intervalKey=null;var e=i.createElement("canvas"),n=e.getContext("2d");if(!n)throw"Failed to create context";this.canvas=e,this.context=n,this.setLife(t),this.startLife()}return s.prototype.setLife=function(t){this.life=t,this.canvas.width=n(t[0].length),this.canvas.height=r(t.length)},s.prototype.clear=function(){this.context.fillStyle=e,this.context.fillRect(0,0,this.canvas.width,this.canvas.height)},s.prototype.startLife=function(){var t=this;this.intervalKey||(this.drawDots(),this.intervalKey=window.setInterval(function(){t.life=t.life.map(function(i,e){return i.map(function(i,n){return t.nextLife(n,e,i)})}),t.drawDots()},500))},s.prototype.stopLife=function(){null!==this.intervalKey&&(window.clearInterval(this.intervalKey),this.intervalKey=null)},s.prototype.drawDot=function(i,e){this.context.fillRect(n(i),r(e),t.WIDTH,t.HEIGHT)},s.prototype.drawDots=function(){var i=this;this.clear(),this.life.forEach(function(e,n){e.forEach(function(e,r){i.context.fillStyle=e?t.SURVIVE_COLOR:t.DEAD_COLOR,i.drawDot(r,n)})})},s.prototype.isSurvive=function(t,i){return this.life[i]&&this.life[i][t]?1:0},s.prototype.nextLife=function(t,i,e){var n=this.isSurvive(t-1,i-1)+this.isSurvive(t,i-1)+this.isSurvive(t+1,i-1)+this.isSurvive(t-1,i)+this.isSurvive(t+1,i)+this.isSurvive(t-1,i+1)+this.isSurvive(t,i+1)+this.isSurvive(t+1,i+1);return 3===n||e&&2===n?1:0},s}();exports.GameOfLifeEngine=s;
},{"noliter":"yhe3"}],"QCba":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("noliter"),n=require("./engine"),t=new n.GameOfLifeEngine([[]]),r=document.getElementById("patterns"),i=function(){return fetch("./patterns/"+r.value).then(function(e){return e.json()}).then(function(e){var n=e.life;t.stopLife(),t.setLife(n),t.startLife()})};r.addEventListener("change",function(){return i()}),document.body.appendChild(e.createElement("main",function(e){e.appendChild(t.canvas),i()}));
},{"noliter":"yhe3","./engine":"I3Un"}]},{},["QCba"], null)
//# sourceMappingURL=src.cc4983fb.js.map