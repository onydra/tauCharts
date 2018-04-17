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
/******/ 	return __webpack_require__(__webpack_require__.s = "./plugins/geomap-tooltip.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./plugins/geomap-tooltip.js":
/*!***********************************!*\
  !*** ./plugins/geomap-tooltip.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var taucharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! taucharts */ "taucharts");
/* harmony import */ var taucharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(taucharts__WEBPACK_IMPORTED_MODULE_0__);

var utils = taucharts__WEBPACK_IMPORTED_MODULE_0___default.a.api.utils;
function ChartGeoMapTooltip(xSettings) {
    var settings = utils.defaults(xSettings || {}, {});
    var falsyFilter = function () {
        return false;
    };
    var equalFilter = function (data) {
        var str = JSON.stringify(data);
        return function (row) {
            return JSON.stringify(row) === str;
        };
    };
    var plugin = {
        init: function (chart) {
            this._currNode = null;
            this._currData = null;
            this._chart = chart;
            this._tooltip = chart.addBalloon({
                spacing: 3,
                auto: true,
                effectClass: 'fade'
            });
            this._tooltip
                .content(this.template);
            this._tooltip
                .getElement()
                .addEventListener('click', function (e) {
                var target = e.target;
                while (target !== e.currentTarget && target !== null) {
                    if (target.classList.contains('i-role-exclude')) {
                        self._exclude();
                        self._tooltip.hide();
                        self._blurSelection();
                    }
                    target = target.parentNode;
                }
            }, false);
            var self = this;
            var timeoutHide;
            this._showTooltip = function (e) {
                clearTimeout(timeoutHide);
                self._currData = e.data;
                var message = 'No data';
                if (e.data !== null) {
                    message = Object
                        .keys(e.data)
                        .map(function (k) {
                        return self.itemTemplate({ label: k, value: e.data[k] });
                    })
                        .join('');
                }
                var content = self._tooltip.getElement().querySelectorAll('.i-role-content');
                if (content[0]) {
                    content[0].innerHTML = message;
                }
                var exclude = self._tooltip.getElement().querySelectorAll('.i-role-exclude');
                if (exclude[0]) {
                    var allowExclude = e.data && (self._chart.getChartModelData().length > 1);
                    exclude[0].style.visibility = allowExclude ? 'visible' : 'hidden';
                }
                self._tooltip
                    .show(e.event.pageX, e.event.pageY)
                    .updateSize();
            };
            this._hideTooltip = function (immediately) {
                timeoutHide = setTimeout(function () {
                    self._tooltip.hide();
                }, immediately ? 0 : 1000);
            };
            this._tooltip
                .getElement()
                .addEventListener('mouseover', function (e) {
                clearTimeout(timeoutHide);
            }, false);
            this._tooltip
                .getElement()
                .addEventListener('mouseleave', function (e) {
                self._hideTooltip(true);
                self._blurSelection();
            }, false);
        },
        onRender: function () {
            var self = this;
            this._chart
                .select(function (node) {
                return node.config.type === 'COORDS.MAP';
            })
                .forEach(function (node) {
                self._subscribeToPoints(node);
                self._subscribeToArea(node);
            });
        },
        template: [
            '<div class="tau-chart__tooltip__buttons tau-chart__tooltip__clickable">',
            '<div class="tau-chart__tooltip__button i-role-exclude">',
            '<div class="tau-chart__tooltip__button__wrap">',
            '<span class="tau-icon-close-gray"></span>',
            'Exclude',
            '</div>',
            '</div>',
            '</div>',
            '<div class="i-role-content tau-chart__tooltip__content"></div>'
        ].join(''),
        itemTemplate: utils.template([
            '<div class="tau-chart__tooltip__list__item">',
            '<div class="tau-chart__tooltip__list__elem"><%=label%></div>',
            '<div class="tau-chart__tooltip__list__elem"><%=value%></div>',
            '</div>'
        ].join('')),
        _exclude: function () {
            this._chart
                .addFilter({
                tag: 'exclude',
                predicate: (function (element) {
                    return function (row) {
                        return JSON.stringify(row) !== JSON.stringify(element);
                    };
                }(this._currData))
            });
            this._chart.refresh();
        },
        _blurSelection: function () {
            this._chart
                .select(function (node) {
                return node.config.type === 'COORDS.MAP';
            })
                .forEach(function (node) {
                node.fire('highlight-area', falsyFilter);
            });
            this._currNode = null;
            this._currData = null;
        },
        _subscribeToPoints: function (node) {
            var self = this;
            node.on('point-mouseover', function (sender, e) {
                self._showTooltip(e);
            });
            node.on('point-mouseout', function (sender, e) {
                self._hideTooltip();
            });
        },
        _subscribeToArea: function (node) {
            var self = this;
            var isCodeEmpty = !node.getScale('code').dim;
            if (isCodeEmpty) {
                return;
            }
            node.on('area-click', function (sender, e) {
                self._currNode = sender;
                if (!e.data) {
                    self._showTooltip(e);
                    self._hideTooltip(false);
                    self._blurSelection();
                }
                else if (self._currData === e.data) {
                    self._hideTooltip(true);
                    self._blurSelection();
                }
                else {
                    node.fire('highlight-area', equalFilter(e.data));
                    self._showTooltip(e);
                }
            });
        }
    };
    return plugin;
}
taucharts__WEBPACK_IMPORTED_MODULE_0___default.a.api.plugins.add('geomap-tooltip', ChartGeoMapTooltip);
/* harmony default export */ __webpack_exports__["default"] = (ChartGeoMapTooltip);


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