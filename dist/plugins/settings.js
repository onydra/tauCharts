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
/******/ 	return __webpack_require__(__webpack_require__.s = "./plugins/settings.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./plugins/settings.js":
/*!*****************************!*\
  !*** ./plugins/settings.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var taucharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! taucharts */ "taucharts");
/* harmony import */ var taucharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(taucharts__WEBPACK_IMPORTED_MODULE_0__);

var utils = taucharts__WEBPACK_IMPORTED_MODULE_0___default.a.api.utils;
function ChartSettings(xSettings) {
    var pluginSettings = utils.defaults(xSettings || {}, {
        show: true,
        modes: [
            'normal',
            'entire-view',
            'fit-width',
            'fit-height',
            'minimal'
        ]
    });
    return {
        init: function (chart) {
            if (pluginSettings.show) {
                pluginSettings.selectedMode = chart.getSpec().settings.fitModel;
                var panel = chart.insertToHeader(this.template({
                    modes: pluginSettings.modes.map(function (x) {
                        var selected = (pluginSettings.selectedMode === x) ? 'selected' : '';
                        return '<option ' + selected + ' value="' + x + '">' + x + '</option>';
                    })
                }));
                panel.addEventListener('change', function (e) {
                    var target = e.target;
                    if (target.classList.contains('i-role-fit-model')) {
                        pluginSettings.selectedMode = target.value;
                        chart.getSpec().settings.fitModel = pluginSettings.selectedMode;
                        chart.refresh();
                    }
                }, false);
            }
        },
        template: utils.template([
            '<div class="tau-chart__chartsettingspanel">',
            '    <div>',
            '        <span>View Mode:&nbsp;</span>',
            '        <select class="i-role-fit-model tau-chart__select">',
            '        <%= modes %> />',
            '        </select>',
            '    </div>',
            '</div>'
        ].join(''))
    };
}
taucharts__WEBPACK_IMPORTED_MODULE_0___default.a.api.plugins.add('settings', ChartSettings);
/* harmony default export */ __webpack_exports__["default"] = (ChartSettings);


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