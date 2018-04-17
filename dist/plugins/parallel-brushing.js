/*!
 * /*
 * taucharts@2.1.0 (2018-04-17)
 * Copyright 2018 Targetprocess, Inc.
 * Licensed under Apache License 2.0
 * * /
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("taucharts"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("taucharts")) : factory(root["Taucharts"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_taucharts__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./plugins/parallel-brushing.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./plugins/parallel-brushing.js":
/*!**************************************!*\
  !*** ./plugins/parallel-brushing.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var taucharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! taucharts */ "taucharts");
/* harmony import */ var taucharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(taucharts__WEBPACK_IMPORTED_MODULE_0__);

var utils = taucharts__WEBPACK_IMPORTED_MODULE_0___default.a.api.utils;
function ChartParallelBrushing(xSettings) {
    var settings = utils.defaults(xSettings || {}, {
        verbose: false,
        forceBrush: {}
    });
    var plugin = {
        init: function (chart) {
            if (settings.verbose) {
                this.panel = chart.insertToRightSidebar(this.template());
            }
            chart.traverseSpec(chart.getSpec(), function (unit) {
                if (unit && unit.type === 'COORDS.PARALLEL') {
                    unit.guide = unit.guide || {};
                    unit.guide.enableBrushing = true;
                }
            });
            plugin.forceBrush = settings.forceBrush || {};
        },
        onRender: function (chart) {
            var scales = chart.getSpec().scales;
            var toBrush = Object
                .keys(scales)
                .reduce(function (memo, k) {
                var dim = scales[k].dim;
                if (plugin.forceBrush[dim]) {
                    memo[k] = plugin.forceBrush[dim];
                }
                return memo;
            }, {});
            var parallelLines = chart.select(function (node) {
                return node.config.type === 'PARALLEL/ELEMENT.LINE';
            });
            parallelLines.forEach(function (node, i) {
                node.parentUnit.on('brush', function (sender, e) {
                    plugin.forceBrush = {};
                    var predicates = e.map(function (item) {
                        var p = item.dim;
                        var f = item.func;
                        var a = item.args;
                        plugin.forceBrush[p] = a;
                        var r = function () {
                            return true;
                        };
                        if (f === 'between') {
                            r = function (row) {
                                return (row[p] >= a[0]) && (a[1] >= row[p]);
                            };
                        }
                        if (f === 'inset') {
                            r = function (row) {
                                return a.indexOf(row[p]) >= 0;
                            };
                        }
                        return r;
                    });
                    var matches = 0;
                    node.fire('highlight', function (row) {
                        var r = predicates.every(function (func) {
                            return func(row);
                        });
                        matches += (r ? 1 : 0);
                        return r;
                    });
                    if (settings.verbose) {
                        var part = plugin.panel.getElementsByClassName('i-' + i);
                        if (part.length === 0) {
                            var div = document.createElement('div');
                            div.className = ('i-' + i);
                            plugin.panel.appendChild(div);
                            part[0] = div;
                        }
                        part[0].innerHTML = e.reduce(function (s, item) {
                            return (s += '<div>' + item.dim + ': [' + item.args.join(',') + ']' + '</div>');
                        }, '<div>' + 'Matched: ' + matches + '</div>');
                    }
                });
            });
            parallelLines.forEach(function (node) {
                node.parentUnit.fire('force-brush', toBrush);
            });
        },
        template: utils.template('<div class="tau-chart__chart_brushing_panel"></div>')
    };
    return plugin;
}
taucharts__WEBPACK_IMPORTED_MODULE_0___default.a.api.plugins.add('parallel-brushing', ChartParallelBrushing);
/* harmony default export */ __webpack_exports__["default"] = (ChartParallelBrushing);


/***/ }),

/***/ "taucharts":
/*!******************************************************************************************************!*\
  !*** external {"commonjs":"taucharts","commonjs2":"taucharts","umd":"taucharts","root":"Taucharts"} ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_taucharts__;

/***/ })

/******/ });
});