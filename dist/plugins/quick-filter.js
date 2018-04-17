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
		module.exports = factory(require("d3-array"), require("d3-brush"), require("d3-scale"), require("d3-selection"), require("d3-time-format"), require("taucharts"));
	else if(typeof define === 'function' && define.amd)
		define(["d3-array", "d3-brush", "d3-scale", "d3-selection", "d3-time-format", ], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("d3-array"), require("d3-brush"), require("d3-scale"), require("d3-selection"), require("d3-time-format"), require("taucharts")) : factory(root["d3"], root["d3"], root["d3"], root["d3"], root["d3"], root["Taucharts"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_d3_array__, __WEBPACK_EXTERNAL_MODULE_d3_brush__, __WEBPACK_EXTERNAL_MODULE_d3_scale__, __WEBPACK_EXTERNAL_MODULE_d3_selection__, __WEBPACK_EXTERNAL_MODULE_d3_time_format__, __WEBPACK_EXTERNAL_MODULE_taucharts__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./plugins/quick-filter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./plugins/quick-filter.js":
/*!*********************************!*\
  !*** ./plugins/quick-filter.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var taucharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! taucharts */ "taucharts");
/* harmony import */ var taucharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(taucharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-array */ "d3-array");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3_brush__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-brush */ "d3-brush");
/* harmony import */ var d3_brush__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3_brush__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-scale */ "d3-scale");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(d3_scale__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-selection */ "d3-selection");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(d3_selection__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-time-format */ "d3-time-format");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(d3_time_format__WEBPACK_IMPORTED_MODULE_5__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};






var d3 = __assign({}, d3_array__WEBPACK_IMPORTED_MODULE_1__, d3_brush__WEBPACK_IMPORTED_MODULE_2__, d3_scale__WEBPACK_IMPORTED_MODULE_3__, d3_selection__WEBPACK_IMPORTED_MODULE_4__, d3_time_format__WEBPACK_IMPORTED_MODULE_5__);
var utils = taucharts__WEBPACK_IMPORTED_MODULE_0___default.a.api.utils;
var REFRESH_DELAY = 0;
function QuickFilter(xSettings) {
    var log10 = function (x) {
        return Math.log(x) / Math.LN10;
    };
    var createIsRowMatchInterceptor = function (dim, valMin, valMax) {
        return function (row) {
            var d = row[dim];
            return (d < valMin || d > valMax);
        };
    };
    return {
        init: function (chart) {
            this._chart = chart;
            this._currentFilters = {};
            this._data = {};
            this._bounds = {};
            this._filter = {};
            this._container = {};
            this._layout = this._chart.getLayout().layout;
            var self = this;
            var spec = this._chart.getSpec();
            var sources = spec.sources['/'];
            var fields = (xSettings && xSettings.fields || xSettings);
            this._fields = ((Array.isArray(fields) && fields.length > 0) ?
                (fields) :
                (Object.keys(sources.dims)));
            this._applyImmediately = Boolean(xSettings && xSettings.applyImmediately);
            var chartData = self._chart.getChartModelData();
            this._filtersContainer = self._chart.insertToRightSidebar(self._filtersContainer);
            this._filtersContainer.style.maxHeight = '0px';
            self._fields
                .filter(function (dim) {
                var isMeasure = (sources.dims[dim].type === 'measure');
                if (!isMeasure) {
                    spec.settings.log('The [' + dim + '] isn\'t measure so Quick Filter plugin skipped it');
                }
                return isMeasure;
            })
                .forEach(function (dim) {
                self._data[dim] = chartData.map(function (x) {
                    return x[dim];
                });
                self._bounds[dim] = d3.extent(self._data[dim]);
                self._filter[dim] = self._bounds[dim];
                self._filtersContainer.insertAdjacentHTML('beforeend', self._filterWrapper({ name: dim }));
                self._container[dim] = self._filtersContainer.lastChild;
                self._drawFilter(dim);
            });
        },
        onRender: function () {
            this._filtersContainer.style.maxHeight = 'none';
        },
        _filtersContainer: '<div class="tau-chart__filter"></div>',
        _filterWrapper: utils.template('<div class="tau-chart__filter__wrap">' +
            '<div class="tau-chart__legend__title"><%=name%></div>' +
            '</div>'),
        _drawFilter: function (dim) {
            var data = this._data[dim];
            var bounds = this._bounds[dim];
            var filter = this._filter[dim];
            var isDate = (utils.isDate(bounds[0]) || utils.isDate(bounds[1]));
            var self = this;
            var margin = { top: 0, right: 24, bottom: 21, left: 12 };
            var padding = 4;
            var width = 180 - margin.left - margin.right;
            var height = 41 - margin.top - margin.bottom - 2 * padding;
            var brushHeight = 20;
            var x = d3.scaleLinear()
                .domain(bounds)
                .range([0, width]);
            var brush = d3.brushX()
                .extent([[0, 0], [width, brushHeight]])
                .on('start', function () {
                self._layout.style['overflow-y'] = 'hidden';
            })
                .on('brush', (this._applyImmediately ? applyBrush : updateBrush))
                .on('end', function () {
                self._layout.style['overflow-y'] = '';
                applyBrush();
            });
            var svg = d3.select(this._container[dim]).append('svg')
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom + 4)
                .append('g')
                .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
            var rect = svg.append('g').selectAll('rect')
                .data(data)
                .enter().append('rect')
                .attr('transform', function (d) { return 'translate(' + x(d) + ',' + (margin.top + padding) + ')'; })
                .attr('height', height)
                .attr('width', 1);
            var brushg = svg.append('g')
                .attr('class', 'brush')
                .call(brush);
            brushg
                .append('g')
                .attr('class', 'resize e')
                .attr('cursor', 'ew-resize')
                .attr('pointer-events', 'none');
            brushg
                .append('g')
                .attr('class', 'resize w')
                .attr('cursor', 'ew-resize')
                .attr('pointer-events', 'none');
            brushg.selectAll('.resize').append('line')
                .attr('transform', 'translate(0, 0)')
                .attr('x1', 0)
                .attr('x2', 0)
                .attr('y1', 0)
                .attr('y2', height + 2 * padding);
            brushg.selectAll('.resize').append('text')
                .attr('x', 0)
                .attr('y', 2 * (height + padding));
            brushg.selectAll('rect')
                .attr('height', height + 2 * padding);
            var dateText = svg.append('text')
                .attr('x', width / 2)
                .attr('y', 2 * (height + padding))
                .attr('class', 'date-label');
            var count = log10(self._filter[dim][1] - self._filter[dim][0]);
            var xF = Math.round(3 - count);
            var base = Math.pow(10, xF);
            function getFormatters(formatters) {
                var index = formatters
                    .findIndex(function (token) {
                    var f = d3.timeFormat(token);
                    return (f(new Date(bounds[0])) !== f(new Date(bounds[1])));
                });
                index = ((index < 0) ? (formatters.length) : (index));
                return {
                    comm: formatters.slice(0, index),
                    diff: formatters.slice(index)
                };
            }
            var compOrder = ['’%y', '&thinsp;%b', '%d', '%H', ':%M', ':%S'];
            if (isDate) {
                var formatters = getFormatters(compOrder);
                if (formatters.comm.length < 3) {
                    formatters.diff.splice(-3);
                    formatters.diff.reverse();
                    formatters.comm.reverse();
                    // Hide time at all if there're different days
                }
                else {
                    if (formatters.comm.length < 5) {
                        formatters.diff.pop();
                    }
                    // Hide seconds if it's not the same minute
                    formatters.diff = formatters.comm.splice(3, formatters.comm.length - 3).concat(formatters.diff);
                    formatters.comm.reverse();
                    // Move time to diff part if it's the same day
                }
            }
            applyBrush();
            brush.move(brushg, filter.map(x));
            function updateBrush() {
                var d3Event = d3_selection__WEBPACK_IMPORTED_MODULE_4__["event"];
                if (d3Event && Array.isArray(d3Event.selection)) {
                    var selection = d3Event.selection.map(x.invert);
                    filter = selection;
                    self._filter[dim] = selection;
                }
                else {
                    filter = self._filter[dim];
                }
                var filterMin = isDate ? (new Date(filter[0])).getTime() : filter[0];
                var filterMax = isDate ? (new Date(filter[1])).getTime() : filter[1];
                var s = (Math.round(parseFloat(filterMin) * base) / base);
                var e = (Math.round(parseFloat(filterMax) * base) / base);
                var handleW = brushg.select('.handle--w');
                var handleE = brushg.select('.handle--e');
                brushg.select('.resize.w').attr('transform', "translate(" + x(filter[0]) + ",0)");
                brushg.select('.resize.e').attr('transform', "translate(" + x(filter[1]) + ",0)");
                var sTxt = brushg.selectAll('.w text');
                var eTxt = brushg.selectAll('.e text');
                if (isDate) {
                    var comm = d3.timeFormat(formatters.comm.join(''));
                    var diff = d3.timeFormat(formatters.diff.join(''));
                    dateText.html(diff(new Date(s)) + '&thinsp;..&thinsp;' + diff(new Date(e)) +
                        ' <tspan class="common">' + comm(new Date(e)) + '</tspan>');
                }
                else {
                    sTxt.text(s);
                    eTxt.text(e);
                }
            }
            function applyBrush() {
                updateBrush();
                self._applyFilter(dim);
            }
        },
        destroy: function () {
            var filters = this._currentFilters;
            var chart = this._chart;
            Object.keys(filters)
                .forEach(function (id) { return chart.removeFilter(filters[id]); });
            var remove = function (node) { return node && node.parentElement && node.parentElement.removeChild(node); };
            remove(this._filtersContainer);
        },
        _applyFilter: function (dim) {
            var state = this._currentFilters;
            var valMin = this._filter[dim][0];
            var valMax = this._filter[dim][1];
            var isRowMatch = createIsRowMatchInterceptor(dim, valMin, valMax);
            var filterId = state[dim];
            delete state[dim];
            this._chart.removeFilter(filterId);
            state[dim] = this._chart.addFilter({
                tag: 'quick-filter',
                predicate: function (row) {
                    return !isRowMatch(row);
                }
            });
            if (REFRESH_DELAY < 0) {
                this._chart.refresh();
            }
            else {
                if (this._refreshRequestId) {
                    clearTimeout(this._refreshRequestId);
                }
                this._refreshRequestId = setTimeout(function () {
                    this._refreshRequestId = null;
                    this._chart.refresh();
                }.bind(this), REFRESH_DELAY);
            }
        }
    };
}
taucharts__WEBPACK_IMPORTED_MODULE_0___default.a.api.plugins.add('quick-filter', QuickFilter);
/* harmony default export */ __webpack_exports__["default"] = (QuickFilter);


/***/ }),

/***/ "d3-array":
/*!********************************************************************************************!*\
  !*** external {"commonjs":"d3-array","amd":"d3-array","commonjs2":"d3-array","root":"d3"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_d3_array__;

/***/ }),

/***/ "d3-brush":
/*!********************************************************************************************!*\
  !*** external {"commonjs":"d3-brush","amd":"d3-brush","commonjs2":"d3-brush","root":"d3"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_d3_brush__;

/***/ }),

/***/ "d3-scale":
/*!********************************************************************************************!*\
  !*** external {"commonjs":"d3-scale","amd":"d3-scale","commonjs2":"d3-scale","root":"d3"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_d3_scale__;

/***/ }),

/***/ "d3-selection":
/*!********************************************************************************************************!*\
  !*** external {"commonjs":"d3-selection","amd":"d3-selection","commonjs2":"d3-selection","root":"d3"} ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_d3_selection__;

/***/ }),

/***/ "d3-time-format":
/*!**************************************************************************************************************!*\
  !*** external {"commonjs":"d3-time-format","amd":"d3-time-format","commonjs2":"d3-time-format","root":"d3"} ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_d3_time_format__;

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