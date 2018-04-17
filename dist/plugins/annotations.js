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
		module.exports = factory(require("d3-color"), require("taucharts"));
	else if(typeof define === 'function' && define.amd)
		define(["d3-color", ], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("d3-color"), require("taucharts")) : factory(root["d3"], root["Taucharts"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_d3_color__, __WEBPACK_EXTERNAL_MODULE_taucharts__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./plugins/annotations.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./plugins/annotations.ts":
/*!********************************!*\
  !*** ./plugins/annotations.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var taucharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! taucharts */ "taucharts");
/* harmony import */ var taucharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(taucharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-color */ "d3-color");
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3_color__WEBPACK_IMPORTED_MODULE_1__);


function template(str, obj) {
    return str.replace(/\{\{\s*(.+?)\s*\}\}/g, function (m, p) { return obj.hasOwnProperty(p) ? obj[p] : ''; });
}
var utils = taucharts__WEBPACK_IMPORTED_MODULE_0___default.a.api.utils;
var pluginsSDK = taucharts__WEBPACK_IMPORTED_MODULE_0___default.a.api.pluginsSDK;
var addToUnits = function (units, newUnit, position) {
    if (position === 'front') {
        units.push(newUnit);
    }
    else {
        // behind by default
        units.unshift(newUnit);
    }
};
var stretchByOrdinalAxis = function (noteItem) {
    return function (model) {
        var res = {};
        var seed = [
            {
                dim: model.scaleX.dim,
                scale: model.scaleY,
                method: 'yi',
                k: -1
            },
            {
                dim: model.scaleY.dim,
                scale: model.scaleX,
                method: 'xi',
                k: 1
            },
            {
                dim: null,
                scale: null,
                method: null,
                k: null
            }
        ].find(function (a) {
            if (Array.isArray(noteItem.dim)) {
                return noteItem.dim.indexOf(a.dim) >= 0;
            }
            return a.dim === noteItem.dim;
        });
        if (seed.method === null) {
            return res;
        }
        var marker = '__pos__';
        var kAxis = seed.k;
        var koeff = { l: -0.5, r: 0.5 };
        var method = seed.method;
        var scale = seed.scale;
        res[method] = (function (row) {
            var k = (koeff[row[marker]] || 0) * kAxis;
            if (scale.discrete) {
                return (model[method](row) + scale.stepSize(row[scale.dim]) * k);
            }
            if (scale.period) {
                var gen = taucharts__WEBPACK_IMPORTED_MODULE_0___default.a.api.tickPeriod.get(scale.period, { utc: scale.utcTime });
                var domain = scale.domain();
                var min = gen.cast(domain[0]);
                while (min < domain[0]) {
                    min = gen.next(min);
                }
                var max = gen.cast(domain[1]);
                var k_1 = ((scale(max) - scale(min)) / (max - min));
                switch (row[marker]) {
                    case 'l': {
                        var overflow = Math.min(0, domain[0] - min);
                        return (scale(min) + k_1 * overflow);
                    }
                    case 'r': {
                        var overflow = Math.max(0, domain[1] - max);
                        return (scale(max) + k_1 * overflow);
                    }
                }
            }
            return model[method](row);
        });
        return res;
    };
};
function annotations(xSettings) {
    var settings = utils.defaults(xSettings || {}, {
        items: [],
        formatters: {},
    });
    var textScaleName = 'annotation_text';
    return {
        init: function (chart) {
            var _this = this;
            this._chart = chart;
            var specRef = chart.getSpec();
            specRef.scales[textScaleName] = { type: 'value', dim: 'text', source: '?' };
            specRef.transformations = specRef.transformations || {};
            var log = function (msg) { return specRef.settings.log(msg, 'LOG'); };
            // NOTE: We need to save rows references to let
            // annotations properly animate during filtering.
            this._dataRefs = {};
            specRef.transformations.dataRange = function (data, metaInfo) {
                var from = metaInfo.from;
                var to = metaInfo.to;
                var primaryScaleInfo = chart.getScaleInfo(metaInfo.primaryScale);
                if ((primaryScaleInfo.period)) {
                    var periodCaster = taucharts__WEBPACK_IMPORTED_MODULE_0___default.a.api.tickPeriod.get(primaryScaleInfo.period, { utc: specRef.settings.utcTime });
                    from = periodCaster.cast(new Date(metaInfo.from));
                    to = periodCaster.cast(new Date(metaInfo.to));
                }
                var isX0OutOfDomain = !primaryScaleInfo.isInDomain(from);
                var isX1OutOfDomain = !primaryScaleInfo.isInDomain(to);
                var isOutOfDomain = (primaryScaleInfo.discrete ?
                    (isX0OutOfDomain || isX1OutOfDomain) :
                    (isX0OutOfDomain && isX1OutOfDomain));
                if (isOutOfDomain) {
                    log('Annotation is out of domain');
                    return [];
                }
                var secondaryScaleInfo = chart.getScaleInfo(metaInfo.secondaryScale);
                var secDomain = secondaryScaleInfo.domain();
                var boundaries = [secDomain[0], secDomain[secDomain.length - 1]];
                var a = primaryScaleInfo.dim;
                var b = secondaryScaleInfo.dim;
                var z = '__pos__';
                var leftBtm = {};
                var leftTop = {};
                var rghtTop = {};
                var rghtBtm = {};
                leftBtm[z] = 'l';
                leftBtm[a] = from;
                leftBtm[b] = boundaries[0];
                leftTop[z] = 'l';
                leftTop[a] = to;
                leftTop[b] = boundaries[0];
                rghtTop[z] = 'r';
                rghtTop[a] = to;
                rghtTop[b] = boundaries[1];
                rghtBtm[z] = 'r';
                rghtBtm[a] = from;
                rghtBtm[b] = boundaries[1];
                var startBound = ((metaInfo.axis === 'y') ? rghtTop : rghtBtm);
                var endBound = ((metaInfo.axis === 'y') ? rghtBtm : rghtTop);
                var format = _this._getFormat(a);
                if (metaInfo.startText) {
                    startBound.text = template(metaInfo.startText, { value: format(startBound[a]) });
                }
                if (metaInfo.endText) {
                    endBound.text = template(metaInfo.endText, { value: format(endBound[a]) });
                }
                return _this._useSavedDataRefs([leftBtm, leftTop, rghtTop, rghtBtm], String([a, from, to]));
            };
            specRef.transformations.dataLimit = function (data, metaInfo) {
                var primary = metaInfo.primaryScale;
                var secondary = metaInfo.secondaryScale;
                var primaryScaleInfo = chart.getScaleInfo(primary);
                var from = ((primaryScaleInfo.period) ?
                    taucharts__WEBPACK_IMPORTED_MODULE_0___default.a.api.tickPeriod.get(primaryScaleInfo.period, { utc: specRef.settings.utcTime })
                        .cast(new Date(metaInfo.from)) :
                    metaInfo.from);
                var isOutOfDomain = (!primaryScaleInfo.isInDomain(from));
                if (isOutOfDomain) {
                    log('Annotation is out of domain');
                    return [];
                }
                var secondaryScaleInfo = chart.getScaleInfo(secondary);
                var secDomain = secondaryScaleInfo.domain();
                var boundaries = [secDomain[0], secDomain[secDomain.length - 1]];
                var src = {};
                var dst = {};
                var a = primaryScaleInfo.dim;
                var b = secondaryScaleInfo.dim;
                var z = '__pos__';
                var format = _this._getFormat(a);
                src[a] = from;
                src[b] = boundaries[0];
                src[z] = 'l';
                if (metaInfo.startText) {
                    src.text = template(metaInfo.startText, { value: format(from) });
                }
                dst[a] = from;
                dst[b] = boundaries[1];
                dst[z] = 'r';
                if (metaInfo.endText) {
                    dst.text = template(metaInfo.endText, { value: format(from) });
                }
                return _this._useSavedDataRefs([src, dst], String([a, b, from]));
            };
            specRef.transformations.lineNoteData = function (data, metaInfo) {
                var xScaleId = metaInfo.xScale;
                var yScaleId = metaInfo.yScale;
                var xScale = chart.getScaleInfo(xScaleId);
                var yScale = chart.getScaleInfo(yScaleId);
                var xPeriod = (xScale.period ?
                    taucharts__WEBPACK_IMPORTED_MODULE_0___default.a.api.tickPeriod.get(xScale.period, { utc: xScale.utcTime }) :
                    null);
                var yPeriod = (yScale.period ?
                    taucharts__WEBPACK_IMPORTED_MODULE_0___default.a.api.tickPeriod.get(yScale.period, { utc: yScale.utcTime }) :
                    null);
                var points = metaInfo.points.map(function (d) {
                    return [
                        xPeriod ? xPeriod.cast(d[0]) : d[0],
                        yPeriod ? yPeriod.cast(d[1]) : d[1]
                    ];
                });
                if (points.some(function (d) { return !xScale.isInDomain(d[0]) || !yScale.isInDomain(d[1]); })) {
                    log('Annotation is out of domain');
                    return [];
                }
                var xDim = xScale.dim;
                var yDim = yScale.dim;
                var formats = [xDim, yDim].map(function (dim) { return _this._getFormat(dim); });
                var linePoints = points.map(function (d, i) {
                    var position = i === 0 ? 'start' : i === points.length - 1 ? 'end' : null;
                    var text = i === 0 ? metaInfo.startText : i === points.length - 1 ? metaInfo.endText : '';
                    return _a = {},
                        _a[xDim] = d[0],
                        _a[yDim] = d[1],
                        _a.text = text ? template(text, { x: formats[0](d[0]), y: formats[1](d[1]) }) : null,
                        _a;
                    var _a;
                });
                return _this._useSavedDataRefs(linePoints, JSON.stringify([xDim, yDim, metaInfo.points]));
            };
        },
        addAreaNote: function (specRef, coordsUnit, noteItem) {
            var log = function (msg) { return specRef.settings.log(msg, 'LOG'); };
            var xScale = specRef.scales[coordsUnit.x];
            var yScale = specRef.scales[coordsUnit.y];
            var axes = ((noteItem.dim === xScale.dim) ?
                ['x', 'y'] :
                ((noteItem.dim === yScale.dim) ?
                    ['y', 'x'] :
                    (null)));
            if (axes === null) {
                log('Annotation doesn\'t match any data field');
                return;
            }
            var from = noteItem.val[0];
            var to = noteItem.val[1];
            var text = noteItem.text;
            var annotatedArea = {
                type: 'ELEMENT.PATH',
                namespace: 'annotations',
                x: coordsUnit.x,
                y: coordsUnit.y,
                color: noteItem.colorScaleName,
                label: textScaleName,
                expression: {
                    inherit: false,
                    operator: 'none',
                    params: [],
                    source: '/'
                },
                transformModel: [stretchByOrdinalAxis(noteItem)],
                transformation: [
                    {
                        type: 'dataRange',
                        args: {
                            axis: axes[0],
                            startText: typeof text === 'string' ? text : text.start,
                            endText: typeof text === 'string' ? '' : text.end,
                            from: from,
                            to: to,
                            primaryScale: coordsUnit[axes[0]],
                            secondaryScale: coordsUnit[axes[1]]
                        }
                    }
                ],
                guide: {
                    animationSpeed: coordsUnit.guide.animationSpeed,
                    showAnchors: 'never',
                    cssClass: 'tau-chart__annotation-area',
                    label: {
                        fontColor: noteItem.color,
                        position: ['r', 'b', 'keep-in-box']
                    }
                }
            };
            addToUnits(coordsUnit.units, annotatedArea, noteItem.position);
        },
        addLineNote: function (specRef, coordsUnit, noteItem) {
            var log = function (msg) { return specRef.settings.log(msg, 'LOG'); };
            var xScale = specRef.scales[coordsUnit.x];
            var yScale = specRef.scales[coordsUnit.y];
            var axes = null;
            var isAxisNote = true;
            var dims;
            if (Array.isArray(noteItem.dim)) {
                isAxisNote = false;
                dims = noteItem.dim;
                if ((dims[0] === xScale.dim && dims[1] === yScale.dim) ||
                    (dims[0] === yScale.dim && dims[1] === xScale.dim)) {
                    axes = ['x', 'y'];
                }
            }
            else {
                if (noteItem.dim === xScale.dim) {
                    axes = ['x', 'y'];
                }
                else if (noteItem.dim === yScale.dim) {
                    axes = ['y', 'x'];
                }
            }
            if (axes === null) {
                log('Annotation doesn\'t match any field');
                return;
            }
            var text = noteItem.text;
            var annotatedLine = {
                type: 'ELEMENT.LINE',
                namespace: 'annotations',
                x: coordsUnit.x,
                y: coordsUnit.y,
                label: textScaleName,
                color: noteItem.colorScaleName,
                expression: {
                    inherit: false,
                    operator: 'none',
                    params: [],
                    source: '/'
                },
                guide: {
                    animationSpeed: coordsUnit.guide.animationSpeed,
                    showAnchors: 'never',
                    widthCssClass: 'tau-chart__line-width-2',
                    cssClass: 'tau-chart__annotation-line',
                    label: {
                        fontColor: noteItem.color,
                        position: (isAxisNote ?
                            ['r', 'b', 'keep-in-box'] :
                            [
                                'auto:avoid-label-edges-overlap',
                                'auto:adjust-on-label-overflow',
                                'keep-in-box'
                            ])
                    },
                    x: {
                        fillGaps: false
                    },
                    y: {
                        fillGaps: false
                    }
                }
            };
            var extension = (isAxisNote ?
                {
                    transformModel: [stretchByOrdinalAxis(noteItem)],
                    transformation: [
                        {
                            type: 'dataLimit',
                            args: {
                                from: noteItem.val,
                                startText: typeof text === 'string' ? '' : text.start,
                                endText: typeof text === 'string' ? text : text.end,
                                primaryScale: coordsUnit[axes[0]],
                                secondaryScale: coordsUnit[axes[1]]
                            }
                        }
                    ],
                } :
                (function () {
                    var points = (dims[0] === xScale.dim ?
                        noteItem.val :
                        noteItem.val.map(function (d) { return d.slice().reverse(); }));
                    return {
                        transformation: [
                            {
                                type: 'lineNoteData',
                                args: {
                                    points: points,
                                    startText: typeof text === 'string' ? '' : text.start,
                                    endText: typeof text === 'string' ? text : text.end,
                                    xScale: coordsUnit.x,
                                    yScale: coordsUnit.y
                                }
                            }
                        ]
                    };
                })());
            Object.assign(annotatedLine, extension);
            addToUnits(coordsUnit.units, annotatedLine, noteItem.position);
        },
        onUnitsStructureExpanded: function () {
            var chart = this._chart;
            var specRef = chart.getSpec();
            var data = chart.getDataSources()['/'].data;
            var annotatedValues = this._getAnnotatedDimValues(settings.items);
            var annotatedDims = Object.keys(annotatedValues);
            annotatedDims.forEach(function (dim) {
                var xScaleId = "x_" + dim;
                var yScaleId = "y_" + dim;
                [xScaleId, yScaleId].forEach(function (scaleId) {
                    if (scaleId in specRef.scales) {
                        var config = specRef.scales[scaleId];
                        var originalValues = data.map(function (row) { return row[dim]; });
                        var isTimeScale = (['period', 'time'].indexOf(config.type) >= 0);
                        var convertedAnnotations = (isTimeScale
                            ? annotatedValues[dim].map(function (x) { return new Date(x); })
                            : annotatedValues[dim]);
                        config.series = utils.unique(originalValues.concat(convertedAnnotations));
                    }
                });
            });
            this._startWatchingDataRefs();
        },
        onRender: function () {
            this._clearUnusedDataRefs();
        },
        onSpecReady: function (chart, specRef) {
            var self = this;
            var units = [];
            chart.traverseSpec(specRef, function (unit) {
                if (unit && (unit.type === 'COORDS.RECT') && (unit.units)) {
                    units.push(unit);
                }
            });
            this._formatters = pluginsSDK.getFieldFormatters(specRef, settings.formatters);
            var log = function (msg) { return specRef.settings.log(msg, 'LOG'); };
            var specApi = pluginsSDK.spec(specRef);
            units.forEach(function (coordsUnit) {
                settings.items
                    .map(function (item, i) {
                    var color = (item.color || '#BD10E0').toLowerCase();
                    var rgbCode = d3_color__WEBPACK_IMPORTED_MODULE_1__["rgb"](color).toString();
                    if ((color !== 'black') && (rgbCode === 'rgb(0, 0, 0)')) {
                        rgbCode = null;
                    }
                    var colorStr = rgbCode || color;
                    var colorScaleName = 'annotation_color_' + i;
                    specApi.addScale(colorScaleName, {
                        type: 'color',
                        source: '?',
                        brewer: [colorStr]
                    });
                    return {
                        dim: item.dim,
                        val: item.val,
                        text: item.text,
                        color: colorStr,
                        position: item.position,
                        colorScaleName: colorScaleName
                    };
                })
                    .forEach(function (item) {
                    if (Array.isArray(item.dim)) {
                        if (Array.isArray(item.val) && item.val.every(Array.isArray)) {
                            self.addLineNote(specRef, coordsUnit, item);
                        }
                        else {
                            // Todo: point annotation.
                            // self.addPointNote(specRef, coordsUnit, item);
                            log('Point annotation is not implemented yet');
                        }
                    }
                    else if (Array.isArray(item.val)) {
                        self.addAreaNote(specRef, coordsUnit, item);
                    }
                    else {
                        self.addLineNote(specRef, coordsUnit, item);
                    }
                });
            });
        },
        _getFormat: function (dim) {
            return (this._formatters[dim] ?
                this._formatters[dim].format :
                function (x) { return String(x); });
        },
        _useSavedDataRefs: function (rows, key) {
            var refs = this._dataRefs;
            var usedKeys = this._usedDataRefsKeys;
            usedKeys.add(key);
            if (key in refs) {
                refs[key].forEach(function (ref, i) { return Object.assign(ref, rows[i]); });
                return refs[key];
            }
            refs[key] = rows;
            return rows;
        },
        _startWatchingDataRefs: function () {
            var refs = this._dataRefs;
            this._initialDataRefsKeys = new Set(Object.keys(refs));
            this._usedDataRefsKeys = new Set();
        },
        _clearUnusedDataRefs: function () {
            var refs = this._dataRefs;
            var initialKeys = this._initialDataRefsKeys;
            var usedKeys = this._usedDataRefsKeys;
            Array.from(initialKeys)
                .filter(function (key) { return !usedKeys.has(key); })
                .forEach(function (key) { return delete refs[key]; });
            this._initialDataRefsKeys = null;
            this._usedDataRefsKeys = null;
        },
        _getDataRowsFromItems: function (items) {
            var createRow = function (dims, vals) {
                return dims.reduce(function (row, dim, i) {
                    row[dim] = vals[i];
                    return row;
                }, {});
            };
            return items.reduce(function (rows, item) {
                if (Array.isArray(item.dim)) {
                    if (Array.isArray(item.val) && item.val.every(Array.isArray)) {
                        item.val.forEach(function (v) {
                            rows.push(createRow(item.dim, v));
                        });
                    }
                    else {
                        // Todo: point annotation.
                    }
                }
                else if (Array.isArray(item.val)) {
                    item.val.forEach(function (v) {
                        rows.push(createRow([item.dim], [v]));
                    });
                }
                else {
                    rows.push(createRow([item.dim], [item.val]));
                }
                return rows;
            }, []);
        },
        _getAnnotatedDimValues: function (items) {
            var rows = this._getDataRowsFromItems(items);
            var values = {};
            rows.forEach(function (row) {
                Object.keys(row).forEach(function (dim) {
                    values[dim] = values[dim] || [];
                    values[dim].push(row[dim]);
                });
            });
            return values;
        },
    };
}
taucharts__WEBPACK_IMPORTED_MODULE_0___default.a.api.plugins.add('annotations', annotations);
/* harmony default export */ __webpack_exports__["default"] = (annotations);


/***/ }),

/***/ "d3-color":
/*!********************************************************************************************!*\
  !*** external {"commonjs":"d3-color","amd":"d3-color","commonjs2":"d3-color","root":"d3"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_d3_color__;

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