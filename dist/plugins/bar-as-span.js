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
/******/ 	return __webpack_require__(__webpack_require__.s = "./plugins/bar-as-span.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./plugins/bar-as-span.js":
/*!********************************!*\
  !*** ./plugins/bar-as-span.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var taucharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! taucharts */ "taucharts");
/* harmony import */ var taucharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(taucharts__WEBPACK_IMPORTED_MODULE_0__);

var utils = taucharts__WEBPACK_IMPORTED_MODULE_0___default.a.api.utils;
function BarAsSpan(settings) {
    var xDim0 = settings.x0;
    var yDim0 = settings.y0;
    var collapse = (settings.collapse != null ? settings.collapse : true);
    var transformX0 = function (model) {
        return {
            y0: function y0(dataRow) {
                return model.scaleY.value(dataRow[xDim0]);
            }
        };
    };
    var transformY0 = function (model) {
        return {
            y0: function y0(dataRow) {
                return model.scaleY.value(dataRow[yDim0]);
            }
        };
    };
    var adjustValueScale = function (model) {
        var data = model.data();
        if (data.length === 0) {
            return {};
        }
        var yScale = model.scaleY;
        var minY = Number.MAX_VALUE;
        var maxY = Number.MIN_VALUE;
        var dim0 = (model.flip ? xDim0 : yDim0);
        var dim = yScale.dim;
        data.forEach(function (d) {
            var y0 = d[dim0];
            var y = d[dim];
            var min = (y0 < y ? y0 : y);
            var max = (y > y0 ? y : y0);
            minY = (min < minY ? min : minY);
            maxY = (max > maxY ? max : maxY);
        });
        yScale.fixup(function (yScaleConfig) {
            var newConf = {};
            if (!yScaleConfig.hasOwnProperty('max') || yScaleConfig.max < maxY) {
                newConf.max = maxY;
            }
            if (!yScaleConfig.hasOwnProperty('min') || yScaleConfig.min > minY) {
                newConf.min = minY;
            }
            return newConf;
        });
        return {};
    };
    // Todo: Categories names can repeat among facets.
    var totalLines = {};
    var totalLinesPerFacet = {};
    var transformMultiline = function (model) {
        var data = model.data().slice();
        var xScale = model.scaleX;
        var yScale = model.scaleY;
        if (data.length === 0 || !xScale.discrete) {
            return {};
        }
        var dim0 = (model.flip ? xDim0 : yDim0);
        var dim = yScale.dim;
        data.sort(utils.createMultiSorter(function (a, b) { return (a[dim0] - b[dim0]); }, function (a, b) { return (a[dim] - b[dim]); }));
        var catDim = xScale.dim;
        var categories = xScale.domain();
        var categoryLines = categories.reduce(function (map, c) {
            map[c] = [];
            return map;
        }, {});
        var itemLine = new Map();
        var collapseIteratee = function (d) {
            var cat = d[catDim];
            var lines = categoryLines[cat];
            var lineNum = lines.findIndex(function (l) {
                return (l[l.length - 1][dim] <= d[dim0]);
            });
            if (lineNum < 0) {
                lineNum = lines.length;
                lines.push([]);
            }
            lines[lineNum].push(d);
            itemLine.set(d, lineNum);
        };
        var expandIteratee = function (d) {
            var cat = d[catDim];
            var lines = categoryLines[cat];
            var lineNum = lineNum = lines.length;
            lines.push([]);
            lines[lineNum].push(d);
            itemLine.set(d, lineNum);
        };
        data.forEach(collapse ? collapseIteratee : expandIteratee);
        Object.keys(categoryLines).forEach(function (key) {
            totalLines[key] = categoryLines[key];
        });
        xScale.fixup(function (xScaleConfig) {
            var newConf = {};
            var totalRows = xScale.domain().reduce(function (sum, cat) {
                return (sum + totalLines[cat].length);
            }, 0);
            xScale.domain().forEach(function (cat) {
                totalLinesPerFacet[cat] = totalRows;
            });
            newConf.ratio = function (cat) {
                return (totalLines[cat].length / totalLinesPerFacet[cat]);
            };
            return newConf;
        });
        return {
            xi: function (row) {
                var cat = row[catDim];
                var catHeight = xScale.stepSize(cat);
                var top = (model.xi(row) - catHeight / 2);
                var lineHeight = (catHeight / totalLines[cat].length);
                var lineIndex = itemLine.get(row);
                return (top + lineHeight * (lineIndex + 0.5));
            }
        };
    };
    return {
        onSpecReady: function (chart, specRef) {
            chart.traverseSpec(specRef, function (unit, parentUnit) {
                if (unit.type === 'ELEMENT.INTERVAL') {
                    unit.transformModel = [
                        (unit.flip ? transformX0 : transformY0),
                        transformMultiline
                    ];
                    unit.adjustScales = [
                        adjustValueScale
                    ];
                    unit.guide.enableColorToBarPosition = false;
                    unit.guide.label = (unit.guide.label || {});
                    unit.guide.label.position = (unit.guide.label.position || (unit.flip ? [
                        'inside-start-then-outside-end-horizontal',
                        'hide-by-label-height-horizontal'
                    ] : [
                        'inside-start-then-outside-end-vertical'
                    ]));
                }
            });
        }
    };
}
taucharts__WEBPACK_IMPORTED_MODULE_0___default.a.api.plugins.add('bar-as-span', BarAsSpan);
/* harmony default export */ __webpack_exports__["default"] = (BarAsSpan);


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