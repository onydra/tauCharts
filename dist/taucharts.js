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
		module.exports = factory(require("d3-selection"), require("d3-transition"), require("d3-array"), require("d3-scale"), require("d3-time"), require("d3-shape"), require("d3-color"), require("d3-quadtree"), require("d3-geo"), require("d3-request"), require("topojson-client"), require("d3-axis"), require("d3-brush"), require("d3-format"), require("d3-time-format"));
	else if(typeof define === 'function' && define.amd)
		define(["d3-selection", "d3-transition", "d3-array", "d3-scale", "d3-time", "d3-shape", "d3-color", "d3-quadtree", "d3-geo", "d3-request", "topojson-client", "d3-axis", "d3-brush", "d3-format", "d3-time-format"], factory);
	else if(typeof exports === 'object')
		exports["Taucharts"] = factory(require("d3-selection"), require("d3-transition"), require("d3-array"), require("d3-scale"), require("d3-time"), require("d3-shape"), require("d3-color"), require("d3-quadtree"), require("d3-geo"), require("d3-request"), require("topojson-client"), require("d3-axis"), require("d3-brush"), require("d3-format"), require("d3-time-format"));
	else
		root["Taucharts"] = factory(root["d3"], root["d3"], root["d3"], root["d3"], root["d3"], root["d3"], root["d3"], root["d3"], root["d3"], root["d3"], root["topojson"], root["d3"], root["d3"], root["d3"], root["d3"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_d3_selection__, __WEBPACK_EXTERNAL_MODULE_d3_transition__, __WEBPACK_EXTERNAL_MODULE_d3_array__, __WEBPACK_EXTERNAL_MODULE_d3_scale__, __WEBPACK_EXTERNAL_MODULE_d3_time__, __WEBPACK_EXTERNAL_MODULE_d3_shape__, __WEBPACK_EXTERNAL_MODULE_d3_color__, __WEBPACK_EXTERNAL_MODULE_d3_quadtree__, __WEBPACK_EXTERNAL_MODULE_d3_geo__, __WEBPACK_EXTERNAL_MODULE_d3_request__, __WEBPACK_EXTERNAL_MODULE_topojson_client__, __WEBPACK_EXTERNAL_MODULE_d3_axis__, __WEBPACK_EXTERNAL_MODULE_d3_brush__, __WEBPACK_EXTERNAL_MODULE_d3_format__, __WEBPACK_EXTERNAL_MODULE_d3_time_format__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/tau-tooltip/tooltip.js":
/*!*********************************************!*\
  !*** ./node_modules/tau-tooltip/tooltip.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function webpackUniversalModuleDefinition(root, factory) {
    if (true)
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    else {}
})(this, function () {
    return /******/ (function (modules) {
        /******/ // The module cache
        /******/ var installedModules = {};
        /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/ // Check if module is in cache
            /******/ if (installedModules[moduleId])
                /******/ return installedModules[moduleId].exports;
            /******/ // Create a new module (and put it into the cache)
            /******/ var module = installedModules[moduleId] = {
                /******/ exports: {},
                /******/ id: moduleId,
                /******/ loaded: false
                /******/ 
            };
            /******/ // Execute the module function
            /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/ // Flag the module as loaded
            /******/ module.loaded = true;
            /******/ // Return the exports of the module
            /******/ return module.exports;
            /******/ 
        }
        /******/ // expose the modules object (__webpack_modules__)
        /******/ __webpack_require__.m = modules;
        /******/ // expose the module cache
        /******/ __webpack_require__.c = installedModules;
        /******/ // __webpack_public_path__
        /******/ __webpack_require__.p = "";
        /******/ // Load entry module and return exports
        /******/ return __webpack_require__(0);
        /******/ 
    })([
        /* 0 */
        /***/ (function (module, exports) {
            'use strict';
            Object.defineProperty(exports, '__esModule', {
                value: true
            });
            var classes = function classes(el) {
                return {
                    add: function add(name) {
                        el.classList.add(name);
                    },
                    remove: function remove(name) {
                        el.classList.remove(name);
                    }
                };
            };
            var indexOf = function indexOf(arr, obj) {
                return arr.indexOf(obj);
            };
            /**
             * Globals.
             */
            var win = window;
            var doc = win.document;
            var docEl = doc.documentElement;
            var verticalPlaces = ['top', 'bottom'];
            /**
             * Poor man's shallow object extend.
             *
             * @param {Object} a
             * @param {Object} b
             *
             * @return {Object}
             */
            function extend(a, b) {
                for (var key in b) {
                    // jshint ignore:line
                    a[key] = b[key];
                }
                return a;
            }
            /**
             * Checks whether object is window.
             *
             * @param {Object} obj
             *
             * @return {Boolean}
             */
            function isWin(obj) {
                return obj && obj.setInterval != null;
            }
            /**
             * Returns element's object with `left`, `top`, `bottom`, `right`, `width`, and `height`
             * properties indicating the position and dimensions of element on a page.
             *
             * @param {Element} element
             *
             * @return {Object}
             */
            function position(element) {
                var winTop = win.pageYOffset || docEl.scrollTop;
                var winLeft = win.pageXOffset || docEl.scrollLeft;
                var box = { left: 0, right: 0, top: 0, bottom: 0, width: 0, height: 0 };
                if (isWin(element)) {
                    box.width = win.innerWidth || docEl.clientWidth;
                    box.height = win.innerHeight || docEl.clientHeight;
                }
                else if (docEl.contains(element) && element.getBoundingClientRect != null) {
                    extend(box, element.getBoundingClientRect());
                    // width & height don't exist in <IE9
                    box.width = box.right - box.left;
                    box.height = box.bottom - box.top;
                }
                else {
                    return box;
                }
                box.top = box.top + winTop - docEl.clientTop;
                box.left = box.left + winLeft - docEl.clientLeft;
                box.right = box.left + box.width;
                box.bottom = box.top + box.height;
                return box;
            }
            /**
             * Parse integer from strings like '-50px'.
             *
             * @param {Mixed} value
             *
             * @return {Integer}
             */
            function parsePx(value) {
                return 0 | Math.round(String(value).replace(/[^\-0-9.]/g, ''));
            }
            /**
             * Get computed style of element.
             *
             * @param {Element} element
             *
             * @type {String}
             */
            var style = function style(element, property) {
                return win.getComputedStyle(element)[property];
            };
            /**
             * Returns transition duration of element in ms.
             *
             * @param {Element} element
             *
             * @return {Integer}
             */
            function transitionDuration(element) {
                var duration = String(style(element, transitionDuration.propName));
                var match = duration.match(/([0-9.]+)([ms]{1,2})/);
                if (match) {
                    duration = Number(match[1]);
                    if (match[2] === 's') {
                        duration *= 1000;
                    }
                }
                return 0 | duration;
            }
            transitionDuration.propName = (function () {
                var element = doc.createElement('div');
                var names = ['transitionDuration', 'webkitTransitionDuration'];
                var value = '1s';
                for (var i = 0; i < names.length; i++) {
                    element.style[names[i]] = value;
                    if (element.style[names[i]] === value) {
                        return names[i];
                    }
                }
            })();
            var objectCreate = Object.create;
            /**
             * Tooltip construnctor.
             *
             * @param {String|Element} content
             * @param {Object}         options
             *
             * @return {Tooltip}
             */
            function Tooltip(content, options) {
                if (!(this instanceof Tooltip)) {
                    return new Tooltip(content, options);
                }
                this.hidden = 1;
                this.options = extend(objectCreate(Tooltip.defaults), options);
                this._createElement();
                if (content) {
                    this.content(content);
                }
            }
            /**
             * Creates a tooltip element.
             *
             * @return {Void}
             */
            Tooltip.prototype._createElement = function () {
                this.element = doc.createElement('div');
                this.classes = classes(this.element);
                this.classes.add(this.options.baseClass);
                var propName;
                for (var i = 0; i < Tooltip.classTypes.length; i++) {
                    propName = Tooltip.classTypes[i] + 'Class';
                    if (this.options[propName]) {
                        this.classes.add(this.options[propName]);
                    }
                }
            };
            /**
             * Changes tooltip's type class type.
             *
             * @param {String} name
             *
             * @return {Tooltip}
             */
            Tooltip.prototype.type = function (name) {
                return this.changeClassType('type', name);
            };
            /**
             * Changes tooltip's effect class type.
             *
             * @param {String} name
             *
             * @return {Tooltip}
             */
            Tooltip.prototype.effect = function (name) {
                return this.changeClassType('effect', name);
            };
            /**
             * Changes class type.
             *
             * @param {String} propName
             * @param {String} newClass
             *
             * @return {Tooltip}
             */
            Tooltip.prototype.changeClassType = function (propName, newClass) {
                propName += 'Class';
                if (this.options[propName]) {
                    this.classes.remove(this.options[propName]);
                }
                this.options[propName] = newClass;
                if (newClass) {
                    this.classes.add(newClass);
                }
                return this;
            };
            /**
             * Updates tooltip's dimensions.
             *
             * @return {Tooltip}
             */
            Tooltip.prototype.updateSize = function () {
                if (this.hidden) {
                    this.element.style.visibility = 'hidden';
                    doc.body.appendChild(this.element);
                }
                this.width = this.element.offsetWidth;
                this.height = this.element.offsetHeight;
                if (this.spacing == null) {
                    this.spacing = this.options.spacing != null ? this.options.spacing : parsePx(style(this.element, 'top'));
                }
                if (this.hidden) {
                    doc.body.removeChild(this.element);
                    this.element.style.visibility = '';
                }
                else {
                    this.position();
                }
                return this;
            };
            /**
             * Change tooltip content.
             *
             * When tooltip is visible, its size is automatically
             * synced and tooltip correctly repositioned.
             *
             * @param {String|Element} content
             *
             * @return {Tooltip}
             */
            Tooltip.prototype.content = function (content) {
                if (typeof content === 'object') {
                    this.element.innerHTML = '';
                    this.element.appendChild(content);
                }
                else {
                    this.element.innerHTML = content;
                }
                this.updateSize();
                return this;
            };
            /**
             * Pick new place tooltip should be displayed at.
             *
             * When the tooltip is visible, it is automatically positioned there.
             *
             * @param {String} place
             *
             * @return {Tooltip}
             */
            Tooltip.prototype.place = function (place) {
                this.options.place = place;
                if (!this.hidden) {
                    this.position();
                }
                return this;
            };
            /**
             * Attach tooltip to an element.
             *
             * @param {Element} element
             *
             * @return {Tooltip}
             */
            Tooltip.prototype.attach = function (element) {
                this.attachedTo = element;
                if (!this.hidden) {
                    this.position();
                }
                return this;
            };
            /**
             * Detach tooltip from element.
             *
             * @return {Tooltip}
             */
            Tooltip.prototype.detach = function () {
                this.hide();
                this.attachedTo = null;
                return this;
            };
            /**
             * Pick the most reasonable place for target position.
             *
             * @param {Object} target
             *
             * @return {Tooltip}
             */
            Tooltip.prototype._pickPlace = function (target) {
                if (!this.options.auto) {
                    return this.options.place;
                }
                var winPos = position(win);
                var place = this.options.place.split('-');
                var spacing = this.spacing;
                if (indexOf(verticalPlaces, place[0]) !== -1) {
                    if (target.top - this.height - spacing <= winPos.top) {
                        place[0] = 'bottom';
                    }
                    else if (target.bottom + this.height + spacing >= winPos.bottom) {
                        place[0] = 'top';
                    }
                    switch (place[1]) {
                        case 'left':
                            if (target.right - this.width <= winPos.left) {
                                place[1] = 'right';
                            }
                            break;
                        case 'right':
                            if (target.left + this.width >= winPos.right) {
                                place[1] = 'left';
                            }
                            break;
                        default:
                            if (target.left + target.width / 2 + this.width / 2 >= winPos.right) {
                                place[1] = 'left';
                            }
                            else if (target.right - target.width / 2 - this.width / 2 <= winPos.left) {
                                place[1] = 'right';
                            }
                    }
                }
                else {
                    if (target.left - this.width - spacing <= winPos.left) {
                        place[0] = 'right';
                    }
                    else if (target.right + this.width + spacing >= winPos.right) {
                        place[0] = 'left';
                    }
                    switch (place[1]) {
                        case 'top':
                            if (target.bottom - this.height <= winPos.top) {
                                place[1] = 'bottom';
                            }
                            break;
                        case 'bottom':
                            if (target.top + this.height >= winPos.bottom) {
                                place[1] = 'top';
                            }
                            break;
                        default:
                            if (target.top + target.height / 2 + this.height / 2 >= winPos.bottom) {
                                place[1] = 'top';
                            }
                            else if (target.bottom - target.height / 2 - this.height / 2 <= winPos.top) {
                                place[1] = 'bottom';
                            }
                    }
                }
                return place.join('-');
            };
            /**
             * Position the element to an element or a specific coordinates.
             *
             * @param {Integer|Element} x
             * @param {Integer}         y
             *
             * @return {Tooltip}
             */
            Tooltip.prototype.position = function (x, y) {
                if (this.attachedTo) {
                    x = this.attachedTo;
                }
                if (x == null && this._p) {
                    x = this._p[0];
                    y = this._p[1];
                }
                else {
                    this._p = arguments;
                }
                var target = typeof x === 'number' ? {
                    left: 0 | x,
                    right: 0 | x,
                    top: 0 | y,
                    bottom: 0 | y,
                    width: 0,
                    height: 0
                } : position(x);
                var spacing = this.spacing;
                var newPlace = this._pickPlace(target);
                // Add/Change place class when necessary
                if (newPlace !== this.curPlace) {
                    if (this.curPlace) {
                        this.classes.remove(this.curPlace);
                    }
                    this.classes.add(newPlace);
                    this.curPlace = newPlace;
                }
                // Position the tip
                var top, left;
                switch (this.curPlace) {
                    case 'top':
                        top = target.top - this.height - spacing;
                        left = target.left + target.width / 2 - this.width / 2;
                        break;
                    case 'top-left':
                        top = target.top - this.height - spacing;
                        left = target.right - this.width;
                        break;
                    case 'top-right':
                        top = target.top - this.height - spacing;
                        left = target.left;
                        break;
                    case 'bottom':
                        top = target.bottom + spacing;
                        left = target.left + target.width / 2 - this.width / 2;
                        break;
                    case 'bottom-left':
                        top = target.bottom + spacing;
                        left = target.right - this.width;
                        break;
                    case 'bottom-right':
                        top = target.bottom + spacing;
                        left = target.left;
                        break;
                    case 'left':
                        top = target.top + target.height / 2 - this.height / 2;
                        left = target.left - this.width - spacing;
                        break;
                    case 'left-top':
                        top = target.bottom - this.height;
                        left = target.left - this.width - spacing;
                        break;
                    case 'left-bottom':
                        top = target.top;
                        left = target.left - this.width - spacing;
                        break;
                    case 'right':
                        top = target.top + target.height / 2 - this.height / 2;
                        left = target.right + spacing;
                        break;
                    case 'right-top':
                        top = target.bottom - this.height;
                        left = target.right + spacing;
                        break;
                    case 'right-bottom':
                        top = target.top;
                        left = target.right + spacing;
                        break;
                }
                // Set tip position & class
                this.element.style.top = Math.round(top) + 'px';
                this.element.style.left = Math.round(left) + 'px';
                return this;
            };
            /**
             * Show the tooltip.
             *
             * @param {Integer|Element} x
             * @param {Integer}         y
             *
             * @return {Tooltip}
             */
            Tooltip.prototype.show = function (x, y) {
                x = this.attachedTo ? this.attachedTo : x;
                // Clear potential ongoing animation
                clearTimeout(this.aIndex);
                // Position the element when requested
                if (x != null) {
                    this.position(x, y);
                }
                // Stop here if tip is already visible
                if (this.hidden) {
                    this.hidden = 0;
                    doc.body.appendChild(this.element);
                }
                // Make tooltip aware of window resize
                if (this.attachedTo) {
                    this._aware();
                }
                // Trigger layout and kick in the transition
                if (this.options.inClass) {
                    if (this.options.effectClass) {
                        void this.element.clientHeight;
                    }
                    this.classes.add(this.options.inClass);
                }
                return this;
            };
            Tooltip.prototype.getElement = function () {
                return this.element;
            };
            /**
             * Hide the tooltip.
             *
             * @return {Tooltip}
             */
            Tooltip.prototype.hide = function () {
                if (this.hidden) {
                    return;
                }
                var self = this;
                var duration = 0;
                // Remove .in class and calculate transition duration if any
                if (this.options.inClass) {
                    this.classes.remove(this.options.inClass);
                    if (this.options.effectClass) {
                        duration = transitionDuration(this.element);
                    }
                }
                // Remove tip from window resize awareness
                if (this.attachedTo) {
                    this._unaware();
                }
                // Remove the tip from the DOM when transition is done
                clearTimeout(this.aIndex);
                this.aIndex = setTimeout(function () {
                    self.aIndex = 0;
                    doc.body.removeChild(self.element);
                    self.hidden = 1;
                }, duration);
                return this;
            };
            Tooltip.prototype.toggle = function (x, y) {
                return this[this.hidden ? 'show' : 'hide'](x, y);
            };
            Tooltip.prototype.destroy = function () {
                clearTimeout(this.aIndex);
                this._unaware();
                if (!this.hidden) {
                    doc.body.removeChild(this.element);
                }
                this.element = this.options = null;
            };
            /**
             * git remote add origin https://github.com/TargetProcess/tau-tooltip.git.
             *
             * @return {Void}
             */
            Tooltip.prototype._aware = function () {
                var index = indexOf(Tooltip.winAware, this);
                if (index === -1) {
                    Tooltip.winAware.push(this);
                }
            };
            /**
             * Remove the window resize awareness.
             *
             * @return {Void}
             */
            Tooltip.prototype._unaware = function () {
                var index = indexOf(Tooltip.winAware, this);
                if (index !== -1) {
                    Tooltip.winAware.splice(index, 1);
                }
            };
            /**
             * Handles repositioning of tooltips on window resize.
             *
             * @return {Void}
             */
            Tooltip.reposition = (function () {
                var rAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (fn) {
                    return setTimeout(fn, 17);
                };
                var rIndex;
                function requestReposition() {
                    if (rIndex || !Tooltip.winAware.length) {
                        return;
                    }
                    rIndex = rAF(reposition);
                }
                function reposition() {
                    rIndex = 0;
                    var tip;
                    for (var i = 0, l = Tooltip.winAware.length; i < l; i++) {
                        tip = Tooltip.winAware[i];
                        tip.position();
                    }
                }
                return requestReposition;
            })();
            Tooltip.winAware = [];
            // Bind winAware repositioning to window resize event
            window.addEventListener('resize', Tooltip.reposition);
            window.addEventListener('scroll', Tooltip.reposition);
            /**
             * Array with dynamic class types.
             *
             * @type {Array}
             */
            Tooltip.classTypes = ['type', 'effect'];
            /**
             * Default options for Tooltip constructor.
             *
             * @type {Object}
             */
            Tooltip.defaults = {
                baseClass: 'tooltip',
                typeClass: null,
                effectClass: null,
                inClass: 'in',
                place: 'top',
                spacing: null,
                auto: 0 // Whether to automatically adjust place to fit into window.
            };
            exports.Tooltip = Tooltip;
            /***/ 
        })
        /******/ 
    ]);
});
;


/***/ }),

/***/ "./src/algebra.ts":
/*!************************!*\
  !*** ./src/algebra.ts ***!
  \************************/
/*! exports provided: FramesAlgebra */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FramesAlgebra", function() { return FramesAlgebra; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _unit_domain_period_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unit-domain-period-generator */ "./src/unit-domain-period-generator.ts");


var unify = (function (v) { return _utils_utils__WEBPACK_IMPORTED_MODULE_0__["isDate"](v) ? v.getTime() : v; });
var FramesAlgebra = {
    cross: function (dataFn, dimX, dimY) {
        var data = dataFn();
        var domainX = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["unique"](data.map(function (x) { return x[dimX]; }), unify);
        var domainY = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["unique"](data.map(function (x) { return x[dimY]; }), unify);
        var domX = domainX.length === 0 ? [null] : domainX;
        var domY = domainY.length === 0 ? [null] : domainY;
        return domY.reduce(function (memo, rowVal) {
            return memo.concat(domX.map(function (colVal) {
                var r = {};
                if (dimX) {
                    r[dimX] = unify(colVal);
                }
                if (dimY) {
                    r[dimY] = unify(rowVal);
                }
                return r;
            }));
        }, []);
    },
    cross_period: function (dataFn, dimX, dimY, xPeriod, yPeriod, guide) {
        var data = dataFn();
        var utc = (guide ? guide.utcTime : false);
        var domainX = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["unique"](data.map(function (x) { return x[dimX]; }), unify);
        var domainY = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["unique"](data.map(function (x) { return x[dimY]; }), unify);
        var domX = domainX.length === 0 ? [null] : domainX;
        var domY = domainY.length === 0 ? [null] : domainY;
        if (xPeriod) {
            domX = _unit_domain_period_generator__WEBPACK_IMPORTED_MODULE_1__["UnitDomainPeriodGenerator"].generate(Math.min.apply(Math, domainX), Math.max.apply(Math, domainX), xPeriod, { utc: utc });
        }
        if (yPeriod) {
            domY = _unit_domain_period_generator__WEBPACK_IMPORTED_MODULE_1__["UnitDomainPeriodGenerator"].generate(Math.min.apply(Math, domainY), Math.max.apply(Math, domainY), yPeriod, { utc: utc });
        }
        return domY.reduce(function (memo, rowVal) {
            return memo.concat(domX.map(function (colVal) {
                var r = {};
                if (dimX) {
                    r[dimX] = unify(colVal);
                }
                if (dimY) {
                    r[dimY] = unify(rowVal);
                }
                return r;
            }));
        }, []);
    },
    groupBy: function (dataFn, dim) {
        var data = dataFn();
        var domainX = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["unique"](data.map(function (x) { return x[dim]; }), unify);
        return domainX.map(function (x) {
            return (_a = {}, _a[dim] = unify(x), _a);
            var _a;
        });
    },
    none: function () {
        return [null];
    }
};



/***/ }),

/***/ "./src/api/balloon.js":
/*!****************************!*\
  !*** ./src/api/balloon.js ***!
  \****************************/
/*! exports provided: Balloon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Balloon", function() { return Balloon; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/const.js");
/* harmony import */ var tau_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tau-tooltip */ "./node_modules/tau-tooltip/tooltip.js");
/* harmony import */ var tau_tooltip__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tau_tooltip__WEBPACK_IMPORTED_MODULE_1__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


tau_tooltip__WEBPACK_IMPORTED_MODULE_1__["Tooltip"].defaults.baseClass = _const__WEBPACK_IMPORTED_MODULE_0__["CSS_PREFIX"] + 'tooltip';
var verticalPlaces = ['top', 'bottom'];
function getWindowRect() {
    var win = window;
    var docEl = document.documentElement;
    var top = ((win.pageYOffset || docEl.scrollTop) - docEl.clientTop);
    var left = ((win.pageXOffset || docEl.scrollLeft) - docEl.clientTop);
    var width = (win.innerWidth || docEl.clientWidth);
    var height = (win.innerHeight || docEl.clientHeight);
    var right = (left + width);
    var bottom = (top + height);
    return { top: top, right: right, bottom: bottom, left: left, width: width, height: height };
}
function applyBound(bound, box) {
    return {
        top: box.top + bound,
        right: box.right - bound,
        bottom: box.bottom - bound,
        left: box.left + bound,
        width: box.width - 2 * bound,
        height: box.height - 2 * bound
    };
}
var Balloon = /** @class */ (function (_super) {
    __extends(Balloon, _super);
    function Balloon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Balloon.prototype._pickPlace = function (target) {
        if (!this.options.auto) {
            return this.options.place;
        }
        var winBound = 0 | this.options.winBound;
        var winPos = applyBound(winBound, getWindowRect());
        var place = this.options.place.split('-');
        var spacing = this.spacing;
        if (verticalPlaces.indexOf(place[0]) !== -1) {
            if (target.top - this.height - spacing <= winPos.top) {
                place[0] = 'bottom';
            }
            else if (target.bottom + this.height + spacing >= winPos.bottom) {
                place[0] = 'top';
            }
            switch (place[1]) {
                case 'left':
                    if (target.right - this.width <= winPos.left) {
                        place[1] = 'right';
                    }
                    break;
                case 'right':
                    if (target.left + this.width >= winPos.right) {
                        place[1] = 'left';
                    }
                    break;
                default:
                    if (target.left + target.width / 2 + this.width / 2 >= winPos.right) {
                        place[1] = 'left';
                    }
                    else if (target.right - target.width / 2 - this.width / 2 <= winPos.left) {
                        place[1] = 'right';
                    }
            }
        }
        else {
            if (target.left - this.width - spacing <= winPos.left) {
                place[0] = 'right';
            }
            else if (target.right + this.width + spacing >= winPos.right) {
                place[0] = 'left';
            }
            switch (place[1]) {
                case 'top':
                    if (target.bottom - this.height <= winPos.top) {
                        place[1] = 'bottom';
                    }
                    break;
                case 'bottom':
                    if (target.top + this.height >= winPos.bottom) {
                        place[1] = 'top';
                    }
                    break;
                default:
                    if (target.top + target.height / 2 + this.height / 2 >= winPos.bottom) {
                        place[1] = 'top';
                    }
                    else if (target.bottom - target.height / 2 - this.height / 2 <= winPos.top) {
                        place[1] = 'bottom';
                    }
            }
        }
        return place.join('-');
    };
    return Balloon;
}(tau_tooltip__WEBPACK_IMPORTED_MODULE_1__["Tooltip"]));



/***/ }),

/***/ "./src/api/chart-area.ts":
/*!*******************************!*\
  !*** ./src/api/chart-area.ts ***!
  \*******************************/
/*! exports provided: ChartArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartArea", function() { return ChartArea; });
/* harmony import */ var _data_processor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data-processor */ "./src/data-processor.ts");
/* harmony import */ var _converter_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./converter-helpers */ "./src/api/converter-helpers.ts");


var ChartArea = function (rawConfig) {
    var config = Object(_converter_helpers__WEBPACK_IMPORTED_MODULE_1__["normalizeConfig"])(rawConfig);
    var data = config.data;
    var log = config.settings.log;
    var orientStrategies = {
        horizontal: function (config) {
            return {
                prop: config.x[config.x.length - 1],
                flip: false
            };
        },
        vertical: function (config) {
            return {
                prop: config.y[config.y.length - 1],
                flip: true
            };
        },
        auto: function (config) {
            var xs = config.x;
            var ys = config.y;
            var primaryX = xs[xs.length - 1];
            var secondaryX = xs.slice(0, xs.length - 1);
            var primaryY = ys[ys.length - 1];
            var secondaryY = ys.slice(0, ys.length - 1);
            var colorProp = config.color;
            var rest = secondaryX.concat(secondaryY).concat([colorProp]).filter(function (x) { return x !== null; });
            var variantIndex = -1;
            var variations = [
                [[primaryX].concat(rest), primaryY],
                [[primaryY].concat(rest), primaryX]
            ];
            var isMatchAny = variations.some(function (item, i) {
                var domainFields = item[0];
                var rangeProperty = item[1];
                var r = _data_processor__WEBPACK_IMPORTED_MODULE_0__["DataProcessor"].isYFunctionOfX(data, domainFields, [rangeProperty]);
                if (r.result) {
                    variantIndex = i;
                }
                else {
                    log([
                        'Attempt to find a functional relation between',
                        item[0] + ' and ' + item[1] + ' is failed.',
                        'There are several ' + r.error.keyY + ' values (e.g. ' + r.error.errY.join(',') + ')',
                        'for (' + r.error.keyX + ' = ' + r.error.valX + ').'
                    ].join(' '));
                }
                return r.result;
            });
            var propSortBy;
            var flip = null;
            if (isMatchAny) {
                propSortBy = variations[variantIndex][0][0];
                flip = (variantIndex !== 0);
            }
            else {
                log('All attempts are failed. Gonna transform AREA to general PATH.');
                propSortBy = null;
            }
            return {
                prop: propSortBy,
                flip: flip
            };
        }
    };
    var orient = ((typeof config.flip) !== 'boolean') ?
        ('auto') :
        ((config.flip) ? 'vertical' : 'horizontal');
    var strategy = orientStrategies[orient];
    var propSortBy = strategy(config);
    var elementName = 'ELEMENT.AREA';
    if (propSortBy.prop !== null) {
        config.data = _data_processor__WEBPACK_IMPORTED_MODULE_0__["DataProcessor"].sortByDim(data, propSortBy.prop, config.dimensions[propSortBy.prop]);
        config.flip = propSortBy.flip;
    }
    return Object(_converter_helpers__WEBPACK_IMPORTED_MODULE_1__["transformConfig"])(elementName, config);
};



/***/ }),

/***/ "./src/api/chart-interval.ts":
/*!***********************************!*\
  !*** ./src/api/chart-interval.ts ***!
  \***********************************/
/*! exports provided: ChartInterval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartInterval", function() { return ChartInterval; });
/* harmony import */ var _converter_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./converter-helpers */ "./src/api/converter-helpers.ts");

var disableColorToBarPositionOnceColorAndAxesUseTheSameDim = (function (normConfig) {
    var baseScale = (normConfig.flip ? normConfig.y : normConfig.x);
    var isMatch = (baseScale.indexOf(normConfig.color) >= 0);
    var barGuide = normConfig.guide[normConfig.guide.length - 1];
    if (isMatch && !barGuide.hasOwnProperty('enableColorToBarPosition')) {
        barGuide.enableColorToBarPosition = false;
    }
    return normConfig;
});
var ChartInterval = function (rawConfig) {
    var config = Object(_converter_helpers__WEBPACK_IMPORTED_MODULE_0__["normalizeConfig"])(rawConfig);
    config = disableColorToBarPositionOnceColorAndAxesUseTheSameDim(config);
    return Object(_converter_helpers__WEBPACK_IMPORTED_MODULE_0__["transformConfig"])('ELEMENT.INTERVAL', config);
};



/***/ }),

/***/ "./src/api/chart-line.ts":
/*!*******************************!*\
  !*** ./src/api/chart-line.ts ***!
  \*******************************/
/*! exports provided: ChartLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartLine", function() { return ChartLine; });
/* harmony import */ var _data_processor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data-processor */ "./src/data-processor.ts");
/* harmony import */ var _converter_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./converter-helpers */ "./src/api/converter-helpers.ts");


var ChartLine = function (rawConfig) {
    var config = Object(_converter_helpers__WEBPACK_IMPORTED_MODULE_1__["normalizeConfig"])(rawConfig);
    var data = config.data;
    var log = config.settings.log;
    var lineOrientationStrategies = {
        none: function () { return null; },
        horizontal: function (config) {
            return config.x[config.x.length - 1];
        },
        vertical: function (config) {
            return config.y[config.y.length - 1];
        },
        auto: function (config) {
            var xs = config.x;
            var ys = config.y;
            var primaryX = xs[xs.length - 1];
            var secondaryX = xs.slice(0, xs.length - 1);
            var primaryY = ys[ys.length - 1];
            var secondaryY = ys.slice(0, ys.length - 1);
            var colorProp = config.color;
            var rest = secondaryX.concat(secondaryY).concat([colorProp]).filter(function (x) { return x !== null; });
            var variantIndex = -1;
            var variations = [
                [[primaryX].concat(rest), primaryY],
                [[primaryY].concat(rest), primaryX]
            ];
            var isMatchAny = variations.some(function (item, i) {
                var domainFields = item[0];
                var rangeProperty = item[1];
                var r = _data_processor__WEBPACK_IMPORTED_MODULE_0__["DataProcessor"].isYFunctionOfX(data, domainFields, [rangeProperty]);
                if (r.result) {
                    variantIndex = i;
                }
                else {
                    log([
                        'Attempt to find a functional relation between',
                        item[0] + ' and ' + item[1] + ' is failed.',
                        'There are several ' + r.error.keyY + ' values (e.g. ' + r.error.errY.join(',') + ')',
                        'for (' + r.error.keyX + ' = ' + r.error.valX + ').'
                    ].join(' '));
                }
                return r.result;
            });
            var propSortBy;
            if (isMatchAny) {
                propSortBy = variations[variantIndex][0][0];
            }
            else {
                log([
                    'All attempts are failed.',
                    'Will orient line horizontally by default.',
                    'NOTE: the [scatterplot] chart is more convenient for that data.'
                ].join(' '));
                propSortBy = primaryX;
            }
            return propSortBy;
        }
    };
    var orient = (config.lineOrientation || '').toLowerCase();
    var strategy = lineOrientationStrategies.hasOwnProperty(orient) ?
        lineOrientationStrategies[orient] :
        lineOrientationStrategies.auto;
    var propSortBy = strategy(config);
    if (propSortBy !== null) {
        config.data = _data_processor__WEBPACK_IMPORTED_MODULE_0__["DataProcessor"].sortByDim(data, propSortBy, config.dimensions[propSortBy]);
    }
    return Object(_converter_helpers__WEBPACK_IMPORTED_MODULE_1__["transformConfig"])('ELEMENT.LINE', config);
};



/***/ }),

/***/ "./src/api/chart-map.ts":
/*!******************************!*\
  !*** ./src/api/chart-map.ts ***!
  \******************************/
/*! exports provided: ChartMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartMap", function() { return ChartMap; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");

var ChartMap = function (config) {
    var guide = Object.assign({ sourcemap: config.settings.defaultSourceMap }, config.guide || {});
    guide.size = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["defaults"](guide.size || {}, { min: 1, max: 10 });
    guide.code = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["defaults"](guide.code || {}, { georole: 'countries' });
    var scales = {};
    var scalesPool = function (type, prop, guide) {
        if (guide === void 0) { guide = {}; }
        var key;
        var dim = prop;
        var src;
        if (!prop) {
            key = type + ":default";
            src = '?';
        }
        else {
            key = type + "_" + prop;
            src = '/';
        }
        if (!scales.hasOwnProperty(key)) {
            scales[key] = Object.assign({ type: type, source: src, dim: dim }, guide);
        }
        return key;
    };
    return {
        sources: {
            '?': {
                dims: {},
                data: [{}]
            },
            '/': {
                dims: Object
                    .keys(config.dimensions)
                    .reduce(function (dims, k) {
                    dims[k] = { type: config.dimensions[k].type };
                    return dims;
                }, {}),
                data: config.data
            }
        },
        scales: scales,
        unit: {
            type: 'COORDS.MAP',
            expression: { operator: 'none', source: '/' },
            code: scalesPool('value', config.code, guide.code),
            fill: scalesPool('fill', config.fill, guide.fill),
            size: scalesPool('size', config.size, guide.size),
            color: scalesPool('color', config.color, guide.color),
            latitude: scalesPool('linear', config.latitude, { nice: false }),
            longitude: scalesPool('linear', config.longitude, { nice: false }),
            guide: guide
        },
        plugins: config.plugins || []
    };
};



/***/ }),

/***/ "./src/api/chart-parallel.ts":
/*!***********************************!*\
  !*** ./src/api/chart-parallel.ts ***!
  \***********************************/
/*! exports provided: ChartParallel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartParallel", function() { return ChartParallel; });
var ChartParallel = function (config) {
    var guide = Object.assign({ columns: {} }, config.guide || {});
    var scales = {};
    var scalesPool = function (type, prop, guide) {
        if (guide === void 0) { guide = {}; }
        var key;
        var dim = prop;
        var src;
        if (!prop) {
            key = type + ":default";
            src = '?';
        }
        else {
            key = type + "_" + prop;
            src = '/';
        }
        if (!scales.hasOwnProperty(key)) {
            scales[key] = Object.assign({ type: type, source: src, dim: dim }, guide);
        }
        return key;
    };
    var cols = config.columns.map(function (c) { return scalesPool(config.dimensions[c].scale, c, guide.columns[c]); });
    return {
        sources: {
            '?': {
                dims: {},
                data: [{}]
            },
            '/': {
                dims: Object
                    .keys(config.dimensions)
                    .reduce(function (dims, k) {
                    dims[k] = { type: config.dimensions[k].type };
                    return dims;
                }, {}),
                data: config.data
            }
        },
        scales: scales,
        unit: {
            type: 'COORDS.PARALLEL',
            expression: { operator: 'none', source: '/' },
            columns: cols,
            guide: guide,
            units: [
                {
                    type: 'PARALLEL/ELEMENT.LINE',
                    color: scalesPool('color', config.color, guide.color),
                    columns: cols,
                    expression: { operator: 'none', source: '/' }
                }
            ]
        },
        plugins: config.plugins || []
    };
};



/***/ }),

/***/ "./src/api/chart-scatterplot.ts":
/*!**************************************!*\
  !*** ./src/api/chart-scatterplot.ts ***!
  \**************************************/
/*! exports provided: ChartScatterplot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartScatterplot", function() { return ChartScatterplot; });
/* harmony import */ var _converter_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./converter-helpers */ "./src/api/converter-helpers.ts");

var ChartScatterplot = function (rawConfig) {
    var config = Object(_converter_helpers__WEBPACK_IMPORTED_MODULE_0__["normalizeConfig"])(rawConfig);
    return Object(_converter_helpers__WEBPACK_IMPORTED_MODULE_0__["transformConfig"])('ELEMENT.POINT', config);
};



/***/ }),

/***/ "./src/api/converter-helpers.ts":
/*!**************************************!*\
  !*** ./src/api/converter-helpers.ts ***!
  \**************************************/
/*! exports provided: normalizeConfig, transformConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeConfig", function() { return normalizeConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformConfig", function() { return transformConfig; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");

var convertAxis = function (data) { return (!data) ? null : data; };
var normalizeSettings = function (axis, defaultValue) {
    if (defaultValue === void 0) { defaultValue = null; }
    return (!Array.isArray(axis)) ?
        [axis] :
        (axis.length === 0) ? [defaultValue] : axis;
};
var createElement = function (type, config) {
    return {
        type: type,
        x: config.x,
        y: config.y,
        identity: config.identity,
        size: config.size,
        color: config.color,
        split: config.split,
        label: config.label,
        guide: {
            color: config.colorGuide,
            obsoleteVerticalStackOrder: config.obsoleteVerticalStackOrder,
            size: config.sizeGuide
        },
        flip: config.flip,
        stack: config.stack
    };
};
var status = {
    SUCCESS: 'SUCCESS',
    WARNING: 'WARNING',
    FAIL: 'FAIL'
};
var strategyNormalizeAxis = (_a = {},
    _a[status.SUCCESS] = function (axis) { return axis; },
    _a[status.FAIL] = function (axis, data) {
        throw new Error((data.messages || []).join('\n') ||
            [
                'This configuration is not supported,',
                'See https://api.taucharts.com/basic/facet.html#easy-approach-for-creating-facet-chart'
            ].join(' '));
    },
    _a[status.WARNING] = function (axis, config, guide) {
        var axisName = config.axis;
        var index = config.indexMeasureAxis[0];
        var measure = axis[index];
        var newAxis = axis.filter(function (x) { return x !== measure; });
        newAxis.push(measure);
        var measureGuide = guide[index][axisName] || {};
        var categoryGuide = guide[guide.length - 1][axisName] || {};
        guide[guide.length - 1][axisName] = measureGuide;
        guide[index][axisName] = categoryGuide;
        return newAxis;
    },
    _a);
function validateAxis(dimensions, axis, axisName) {
    return axis.reduce(function (result, item, index) {
        var dimension = dimensions[item];
        if (!dimension) {
            result.status = status.FAIL;
            if (item) {
                result.messages.push("\"" + item + "\" dimension is undefined for \"" + axisName + "\" axis");
            }
            else {
                result.messages.push("\"" + axisName + "\" axis should be specified");
            }
        }
        else if (result.status != status.FAIL) {
            if (dimension.type === 'measure') {
                result.countMeasureAxis++;
                result.indexMeasureAxis.push(index);
            }
            if (dimension.type !== 'measure' && result.countMeasureAxis === 1) {
                result.status = status.WARNING;
            }
            else if (result.countMeasureAxis > 1) {
                result.status = status.FAIL;
                result.messages.push("There is more than one measure dimension for \"" + axisName + "\" axis");
            }
        }
        return result;
    }, {
        status: status.SUCCESS,
        countMeasureAxis: 0,
        indexMeasureAxis: [],
        messages: [],
        axis: axisName
    });
}
function normalizeEncoding(dimensions, dim, encoding) {
    if (dim == null) {
        return dim;
    }
    return String(dim);
}
function normalizeConfig(config) {
    var x = normalizeSettings(config.x);
    var y = normalizeSettings(config.y);
    var maxDeep = Math.max(x.length, y.length);
    var guide = normalizeSettings(config.guide || {}, {});
    var gapsSize = maxDeep - guide.length;
    // feel the gaps if needed
    for (var i = 0; i < gapsSize; i++) {
        guide.push({});
    }
    // cut items
    guide = guide.slice(0, maxDeep);
    var validatedX = validateAxis(config.dimensions, x, 'x');
    var validatedY = validateAxis(config.dimensions, y, 'y');
    x = strategyNormalizeAxis[validatedX.status](x, validatedX, guide);
    y = strategyNormalizeAxis[validatedY.status](y, validatedY, guide);
    var encodings = ['identity', 'color', 'size', 'label', 'split'].reduce(function (map, encoding) {
        var dim = config[encoding];
        var norm = normalizeEncoding(config.dimensions, dim, encoding);
        if (norm != null) {
            map[encoding] = norm;
        }
        return map;
    }, {});
    return Object.assign({}, config, { x: x, y: y, guide: guide }, encodings);
}
function transformConfig(type, config) {
    var x = config.x;
    var y = config.y;
    var guide = config.guide;
    var maxDepth = Math.max(x.length, y.length);
    var spec = {
        type: 'COORDS.RECT',
        unit: []
    };
    var xs = [].concat(x);
    var ys = [].concat(y);
    var gs = [].concat(guide);
    for (var i = maxDepth; i > 0; i--) {
        var currentX = xs.pop();
        var currentY = ys.pop();
        var currentGuide = gs.pop() || {};
        if (i === maxDepth) {
            spec.x = currentX;
            spec.y = currentY;
            spec.unit.push(createElement(type, {
                x: convertAxis(currentX),
                y: convertAxis(currentY),
                identity: config.identity,
                split: config.split,
                color: config.color,
                label: config.label,
                size: config.size,
                flip: config.flip,
                stack: config.stack,
                colorGuide: currentGuide.color,
                obsoleteVerticalStackOrder: currentGuide.obsoleteVerticalStackOrder,
                sizeGuide: currentGuide.size
            }));
            spec.guide = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["defaults"](currentGuide, {
                x: { label: currentX },
                y: { label: currentY }
            });
        }
        else {
            spec = {
                type: 'COORDS.RECT',
                x: convertAxis(currentX),
                y: convertAxis(currentY),
                unit: [spec],
                guide: _utils_utils__WEBPACK_IMPORTED_MODULE_0__["defaults"](currentGuide, {
                    x: { label: currentX },
                    y: { label: currentY }
                })
            };
        }
    }
    config.spec = {
        dimensions: config.dimensions,
        unit: spec
    };
    return config;
}

var _a;


/***/ }),

/***/ "./src/chart-alias-registry.ts":
/*!*************************************!*\
  !*** ./src/chart-alias-registry.ts ***!
  \*************************************/
/*! exports provided: chartTypesRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chartTypesRegistry", function() { return chartTypesRegistry; });
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error */ "./src/error.ts");

var chartTypes = {};
var chartRules = {};
var throwNotSupported = function (alias) {
    var msg = "Chart type " + alias + " is not supported.";
    console.log(msg); // tslint:disable-line
    console.log("Use one of " + Object.keys(chartTypes).join(', ') + "."); // tslint:disable-line
    throw new _error__WEBPACK_IMPORTED_MODULE_0__["TauChartError"](msg, _error__WEBPACK_IMPORTED_MODULE_0__["errorCodes"].NOT_SUPPORTED_TYPE_CHART);
};
var chartTypesRegistry = {
    validate: function (alias, config) {
        if (!chartRules.hasOwnProperty(alias)) {
            throwNotSupported(alias);
        }
        return chartRules[alias].reduce(function (e, rule) { return e.concat(rule(config) || []); }, []);
    },
    get: function (alias) {
        var chartFactory = chartTypes[alias];
        if (typeof chartFactory !== 'function') {
            throwNotSupported(alias);
        }
        return chartFactory;
    },
    add: function (alias, converter, rules) {
        if (rules === void 0) { rules = []; }
        chartTypes[alias] = converter;
        chartRules[alias] = rules;
        return chartTypesRegistry;
    },
    getAllRegisteredTypes: function () {
        return chartTypes;
    }
};



/***/ }),

/***/ "./src/charts/task-runner.ts":
/*!***********************************!*\
  !*** ./src/charts/task-runner.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var TaskRunner = /** @class */ (function () {
    function TaskRunner(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.src, src = _c === void 0 ? null : _c, _d = _b.timeout, timeout = _d === void 0 ? Number.MAX_SAFE_INTEGER : _d, _e = _b.syncInterval, syncInterval = _e === void 0 ? Number.MAX_SAFE_INTEGER : _e, _f = _b.callbacks, callbacks = _f === void 0 ? {} : _f;
        var _this = this;
        this.setTimeoutDuration(timeout);
        this.setSyncInterval(syncInterval);
        this.setCallbacks(callbacks);
        this._running = false;
        this._queue = [];
        this._result = src;
        this._syncDuration = 0;
        this._asyncDuration = 0;
        this._requestedFrameId = null;
        this._visibilityChangeHandler = function () {
            if (!_this._running || !_this._requestedFrameId) {
                return;
            }
            var cancelFrame = _this._getCancelFrameFunction();
            var requestFrame = _this._getRequestFrameFunction();
            cancelFrame(_this._requestedFrameId);
            _this._requestedFrameId = requestFrame(_this._requestedFrameCallback);
        };
        this._tasksCount = 0;
        this._finishedTasksCount = 0;
    }
    TaskRunner.prototype.setTimeoutDuration = function (timeout) {
        TaskRunner.checkType(timeout, 'number', 'timeout');
        this._timeout = timeout;
    };
    TaskRunner.prototype.setSyncInterval = function (syncInterval) {
        TaskRunner.checkType(syncInterval, 'number', 'syncInterval');
        this._syncInterval = syncInterval;
    };
    TaskRunner.prototype.setCallbacks = function (callbacks) {
        TaskRunner.checkType(callbacks, 'object', 'callbacks');
        this._callbacks = Object.assign(this._callbacks || {}, callbacks);
    };
    TaskRunner.prototype.addTask = function (fn) {
        this._queue.push(fn);
        this._tasksCount++;
        return this;
    };
    TaskRunner.prototype.run = function () {
        if (this._running) {
            throw new Error('Task Runner is already running');
        }
        this._running = true;
        TaskRunner.runnersInProgress++;
        document.addEventListener('visibilitychange', this._visibilityChangeHandler);
        this._loopTasks();
    };
    TaskRunner.prototype.isRunning = function () {
        return this._running;
    };
    TaskRunner.prototype._loopTasks = function () {
        var task;
        var duration;
        var frameDuration = 0;
        var isTimeoutReached;
        var isFrameTimeoutReached;
        var syncInterval = (this._syncInterval / TaskRunner.runnersInProgress);
        while (this._running &&
            !(isTimeoutReached = (this._asyncDuration > this._timeout)) &&
            !(isFrameTimeoutReached = (frameDuration > syncInterval)) &&
            (task = this._queue.shift())) {
            duration = this._runTask(task);
            if (duration === null) {
                return;
            }
            this._syncDuration += duration;
            this._asyncDuration += duration;
            frameDuration += duration;
        }
        if (isTimeoutReached &&
            (this._queue.length > 0)) {
            this.stop();
            if (this._callbacks.timeout) {
                this._callbacks.timeout.call(null, this._asyncDuration, this);
            }
        }
        if (!isTimeoutReached &&
            isFrameTimeoutReached &&
            (this._queue.length > 0)) {
            this._requestFrame();
        }
        if (this._queue.length === 0) {
            this.stop();
            if (this._callbacks.done) {
                this._callbacks.done.call(null, this._result, this);
            }
        }
    };
    TaskRunner.prototype._runTask = function (task) {
        var start = performance.now();
        if (this._callbacks.error) {
            try {
                this._result = task.call(null, this._result, this);
            }
            catch (err) {
                this.stop();
                this._callbacks.error.call(null, err, this);
                return null;
            }
        }
        else {
            this._result = task.call(null, this._result, this);
        }
        var end = performance.now();
        var duration = (end - start);
        this._finishedTasksCount++;
        if (this._callbacks.progress) {
            this._callbacks.progress.call(null, (this._finishedTasksCount / this._tasksCount), this);
        }
        return duration;
    };
    TaskRunner.prototype._requestFrame = function () {
        var _this = this;
        var start = performance.now();
        var callback = function () {
            _this._requestedFrameId = null;
            var end = performance.now();
            _this._asyncDuration += (end - start);
            _this._loopTasks();
        };
        var requestFrame = this._getRequestFrameFunction();
        this._requestedFrameCallback = callback;
        this._requestedFrameId = requestFrame(callback);
    };
    TaskRunner.prototype._getRequestFrameFunction = function () {
        var _this = this;
        if (document.hidden) {
            return function (callback) {
                _this._requestedFrameType = 'idle';
                return window.requestIdleCallback(callback, { timeout: 17 });
            };
        }
        return function (callback) {
            _this._requestedFrameType = 'animation';
            return requestAnimationFrame(callback);
        };
    };
    TaskRunner.prototype._getCancelFrameFunction = function () {
        switch (this._requestedFrameType) {
            case 'animation':
                return function (id) { return cancelAnimationFrame(id); };
            case 'idle':
                return function (id) { return window.cancelIdleCallback(id); };
        }
    };
    TaskRunner.prototype.stop = function () {
        if (!this._running) {
            throw new Error('Task Runner is already stopped');
        }
        this._running = false;
        TaskRunner.runnersInProgress--;
        document.removeEventListener('visibilitychange', this._visibilityChangeHandler);
        if (this._requestedFrameId) {
            var cancelFrame = this._getCancelFrameFunction();
            cancelFrame(this._requestedFrameId);
            this._requestedFrameId = null;
        }
    };
    TaskRunner.checkType = function (x, t, name) {
        if (typeof x !== t) {
            throw new Error("Task Runner \"" + name + "\" property is not \"" + t + "\"");
        }
    };
    TaskRunner.runnersInProgress = 0;
    return TaskRunner;
}());
/* harmony default export */ __webpack_exports__["default"] = (TaskRunner);


/***/ }),

/***/ "./src/charts/tau.chart.ts":
/*!*********************************!*\
  !*** ./src/charts/tau.chart.ts ***!
  \*********************************/
/*! exports provided: Chart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return Chart; });
/* harmony import */ var _tau_plot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tau.plot */ "./src/charts/tau.plot.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _chart_alias_registry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chart-alias-registry */ "./src/chart-alias-registry.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Chart = /** @class */ (function (_super) {
    __extends(Chart, _super);
    function Chart(config) {
        var _this = _super.call(this, config) || this;
        if (config.autoResize) {
            Chart.winAware.push(_this);
        }
        return _this;
    }
    Chart.prototype.applyConfig = function (config) {
        var errors = _chart_alias_registry__WEBPACK_IMPORTED_MODULE_2__["chartTypesRegistry"].validate(config.type, config);
        if (errors.length > 0) {
            throw new Error(errors[0]);
        }
        var chartFactory = _chart_alias_registry__WEBPACK_IMPORTED_MODULE_2__["chartTypesRegistry"].get(config.type);
        config = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["defaults"](config, { autoResize: true });
        config.settings = _tau_plot__WEBPACK_IMPORTED_MODULE_0__["Plot"].setupSettings(config.settings);
        config.dimensions = _tau_plot__WEBPACK_IMPORTED_MODULE_0__["Plot"].setupMetaInfo(config.dimensions, config.data);
        _super.prototype.applyConfig.call(this, chartFactory(config));
    };
    Chart.prototype.destroy = function () {
        var index = Chart.winAware.indexOf(this);
        if (index !== -1) {
            Chart.winAware.splice(index, 1);
        }
        _super.prototype.destroy.call(this);
    };
    return Chart;
}(_tau_plot__WEBPACK_IMPORTED_MODULE_0__["Plot"]));
Chart.winAware = [];
Chart.resizeOnWindowEvent = (function () {
    var rIndex;
    function requestReposition() {
        if (rIndex || !Chart.winAware.length) {
            return;
        }
        rIndex = window.requestAnimationFrame(resize);
    }
    function resize() {
        rIndex = 0;
        for (var i = 0, l = Chart.winAware.length; i < l; i++) {
            Chart.winAware[i].resize();
        }
    }
    return requestReposition;
}());
window.addEventListener('resize', Chart.resizeOnWindowEvent);



/***/ }),

/***/ "./src/charts/tau.gpl.ts":
/*!*******************************!*\
  !*** ./src/charts/tau.gpl.ts ***!
  \*******************************/
/*! exports provided: GPL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GPL", function() { return GPL; });
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../event */ "./src/event.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _algebra__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../algebra */ "./src/algebra.ts");
/* harmony import */ var _data_frame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-frame */ "./src/data-frame.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var cast = function (v) { return (_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isDate"](v) ? v.getTime() : v); };
var MixinModel = function (prev) {
    var _this = this;
    Object
        .keys(prev)
        .forEach(function (k) { return _this[k] = prev[k]; });
};
var compose = function (prev, updates) {
    if (updates === void 0) { updates = {}; }
    return (Object.assign(new MixinModel(prev), updates));
};
var evalGrammarRules = function (grammarRules, initialGrammarModel, grammarRegistry) {
    return grammarRules
        .map(function (rule) {
        return ((typeof (rule) === 'string') ? grammarRegistry.get(rule) : rule);
    })
        .filter(function (x) { return x; })
        .reduce(function (prevModel, rule) { return compose(prevModel, rule(prevModel, {})); }, initialGrammarModel);
};
var GPL = /** @class */ (function (_super) {
    __extends(GPL, _super);
    function GPL(config, scalesRegistryInstance, unitsRegistry, grammarRules) {
        var _this = _super.call(this) || this;
        // jscs:disable
        _utils_utils__WEBPACK_IMPORTED_MODULE_1__["defaults"](config.scales, {
            'size_null': { type: 'size', source: '?' },
            'split_null': { type: 'value', source: '?' },
            'label_null': { type: 'value', source: '?' },
            'color_null': { type: 'color', source: '?' },
            'identity_null': { type: 'identity', source: '?' },
            'size:default': { type: 'size', source: '?' },
            'color:default': { type: 'color', source: '?' },
            'split:default': { type: 'value', source: '?' },
            'label:default': { type: 'value', source: '?' },
            'identity:default': { type: 'identity', source: '?' }
        });
        // jscs:enable
        config.settings = (config.settings || {});
        _this.config = config;
        _this.sources = config.sources;
        _this.scales = config.scales;
        _this.unitSet = unitsRegistry;
        _this.grammarRules = grammarRules;
        _this.scalesHub = scalesRegistryInstance;
        _this.transformations = Object.assign(config.transformations || {}, {
            where: function (data, tuple) {
                var predicates = Object.keys(tuple || {}).map(function (k) {
                    return function (row) { return (cast(row[k]) === tuple[k]); };
                });
                return data.filter(function (row) {
                    return predicates.every(function (p) { return p(row); });
                });
            }
        });
        return _this;
    }
    GPL.traverseSpec = function (spec, enter, exit, rootNode, rootFrame) {
        if (rootNode === void 0) { rootNode = null; }
        if (rootFrame === void 0) { rootFrame = null; }
        var queue = [];
        var traverse = function (node, enter, exit, parentNode, currFrame) {
            queue.push(function () {
                enter(node, parentNode, currFrame);
            });
            if (node.frames) {
                node.frames.forEach(function (frame) {
                    (frame.units || []).map(function (subNode) { return traverse(subNode, enter, exit, node, frame); });
                });
            }
            queue.push(function () { return exit(node, parentNode, currFrame); });
        };
        traverse(spec.unit, enter, exit, rootNode, rootFrame);
        return queue;
    };
    GPL.prototype.unfoldStructure = function () {
        this.root = this._expandUnitsStructure(this.config.unit);
        return this.config;
    };
    GPL.prototype.getDrawScenarioQueue = function (root) {
        var _this = this;
        var grammarRules = this.grammarRules;
        var scaleInfoQueue = this._flattenDrawScenario(root, function (parentInstance, unit, rootFrame) {
            // Rule to cancel parent frame inheritance
            var frame = (unit.expression.inherit === false) ? null : rootFrame;
            var scalesFactoryMethod = _this._createFrameScalesFactoryMethod(frame);
            var instance = _this.unitSet.create(unit.type, Object.assign({}, (unit), { options: parentInstance.allocateRect(rootFrame.key) }));
            var initialModel = new MixinModel(instance.defineGrammarModel(scalesFactoryMethod));
            var grammarModel = evalGrammarRules(instance.getGrammarRules(), initialModel, grammarRules);
            evalGrammarRules(instance.getAdjustScalesRules(), grammarModel, grammarRules);
            instance.node().screenModel = instance.createScreenModel(grammarModel);
            return instance;
        });
        var createScales = (function () {
            Object
                .keys(_this.scales)
                .forEach(function (k) { return _this.scalesHub.createScaleInfo(_this.scales[k]).commit(); });
        });
        var updateScalesQueue = this._flattenDrawScenario(root, function (parentInstance, unit, rootFrame) {
            var frame = (unit.expression.inherit === false) ? null : rootFrame;
            var scalesFactoryMethod = _this._createFrameScalesFactoryMethod(frame);
            var instance = _this.unitSet.create(unit.type, Object.assign({}, (unit), { options: parentInstance.allocateRect(rootFrame.key) }));
            var initialModel = new MixinModel(instance.defineGrammarModel(scalesFactoryMethod));
            var grammarModel = evalGrammarRules(instance.getGrammarRules(), initialModel, grammarRules);
            instance.node().screenModel = instance.createScreenModel(grammarModel);
            instance.parentUnit = parentInstance;
            instance.addInteraction();
            return instance;
        });
        return scaleInfoQueue
            .concat(createScales)
            .concat(updateScalesQueue);
    };
    GPL.prototype._flattenDrawScenario = function (root, iterator) {
        var uids = {};
        var scenario = [];
        var stack = [root];
        var put = (function (x) { return stack.unshift(x); });
        var pop = (function () { return stack.shift(); });
        var top = (function () { return stack[0]; });
        var queue = GPL.traverseSpec({ unit: this.root }, 
        // enter
        function (unit, parentUnit, currFrame) {
            unit.uid = (function () {
                var uid = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["generateHash"]((parentUnit ? parentUnit.uid + "/" : '') +
                    JSON.stringify(Object.keys(unit)
                        .filter(function (key) { return typeof unit[key] === 'string'; })
                        .reduce(function (memo, key) { return (memo[key] = unit[key], memo); }, {})) +
                    ("-" + JSON.stringify(currFrame.pipe)));
                if (uids.hasOwnProperty(uid)) {
                    uid += "-" + ++uids[uid];
                }
                else {
                    uids[uid] = 0;
                }
                return uid;
            })();
            unit.guide = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["clone"](unit.guide);
            var instance = iterator(top(), unit, currFrame);
            scenario.push(instance);
            if (unit.type.indexOf('COORDS.') === 0) {
                put(instance);
            }
        }, 
        // exit
        function (unit) {
            if (unit.type.indexOf('COORDS.') === 0) {
                pop();
            }
        }, null, this._datify({
            source: this.root.expression.source,
            pipe: []
        }));
        queue.push(function () { return scenario; });
        return queue;
    };
    GPL.prototype._expandUnitsStructure = function (root, parentPipe) {
        var _this = this;
        if (parentPipe === void 0) { parentPipe = []; }
        var self = this;
        if (root.expression.operator === false) {
            root.frames = root.frames.map(function (f) { return self._datify(f); });
        }
        else {
            var expr = this._parseExpression(root.expression, parentPipe, root.guide);
            root.transformation = root.transformation || [];
            root.frames = expr.exec().map(function (tuple) {
                var flow = (expr.inherit ? parentPipe : []);
                var pipe = (flow)
                    .concat([{ type: 'where', args: tuple }])
                    .concat(root.transformation);
                return self._datify({
                    key: tuple,
                    pipe: pipe,
                    source: expr.source,
                    units: (root.units) ?
                        root.units.map(function (unit) {
                            var clone = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["clone"](unit);
                            // pass guide by reference
                            clone.guide = unit.guide;
                            return clone;
                        }) :
                        []
                });
            });
        }
        root.frames.forEach(function (f) { return (f.units.forEach(function (unit) { return _this._expandUnitsStructure(unit, f.pipe); })); });
        return root;
    };
    GPL.prototype._createFrameScalesFactoryMethod = function (passFrame) {
        var self = this;
        return (function (type, alias, dynamicProps) {
            var key = (alias || type + ":default");
            return self
                .scalesHub
                .createScaleInfo(self.scales[key], passFrame)
                .create(typeof dynamicProps === 'function' ? dynamicProps(self.scales[key]) : dynamicProps);
        });
    };
    GPL.prototype._datify = function (frame) {
        return new _data_frame__WEBPACK_IMPORTED_MODULE_3__["DataFrame"](frame, this.sources[frame.source].data, this.transformations);
    };
    GPL.prototype._parseExpression = function (expr, parentPipe, guide) {
        var _this = this;
        var funcName = expr.operator || 'none';
        var srcAlias = expr.source;
        var bInherit = expr.inherit !== false; // true by default
        var funcArgs = expr.params;
        var frameConfig = {
            source: srcAlias,
            pipe: bInherit ? parentPipe : []
        };
        var dataFn = function () { return _this._datify(frameConfig).part(); };
        var func = _algebra__WEBPACK_IMPORTED_MODULE_2__["FramesAlgebra"][funcName];
        if (!func) {
            throw new Error(funcName + " operator is not supported");
        }
        return {
            source: srcAlias,
            inherit: bInherit,
            func: func,
            args: funcArgs,
            exec: function () { return func.apply(void 0, [dataFn].concat((funcArgs || []), [guide])); }
        };
    };
    return GPL;
}(_event__WEBPACK_IMPORTED_MODULE_0__["Emitter"]));



/***/ }),

/***/ "./src/charts/tau.plot.ts":
/*!********************************!*\
  !*** ./src/charts/tau.plot.ts ***!
  \********************************/
/*! exports provided: Plot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plot", function() { return Plot; });
/* harmony import */ var _api_balloon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/balloon */ "./src/api/balloon.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../event */ "./src/event.ts");
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../plugins */ "./src/plugins.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _utils_utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils-dom */ "./src/utils/utils-dom.ts");
/* harmony import */ var _utils_d3_decorators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/d3-decorators */ "./src/utils/d3-decorators.js");
/* harmony import */ var _grammar_registry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../grammar-registry */ "./src/grammar-registry.ts");
/* harmony import */ var _units_registry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../units-registry */ "./src/units-registry.ts");
/* harmony import */ var _scales_registry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../scales-registry */ "./src/scales-registry.ts");
/* harmony import */ var _scales_factory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../scales-factory */ "./src/scales-factory.ts");
/* harmony import */ var _data_processor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../data-processor */ "./src/data-processor.ts");
/* harmony import */ var _utils_layout_template__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/layout-template */ "./src/utils/layout-template.ts");
/* harmony import */ var _spec_converter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../spec-converter */ "./src/spec-converter.ts");
/* harmony import */ var _spec_transform_auto_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../spec-transform-auto-layout */ "./src/spec-transform-auto-layout.ts");
/* harmony import */ var _spec_transform_calc_size__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../spec-transform-calc-size */ "./src/spec-transform-calc-size.ts");
/* harmony import */ var _spec_transform_apply_ratio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../spec-transform-apply-ratio */ "./src/spec-transform-apply-ratio.ts");
/* harmony import */ var _spec_transform_extract_axes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../spec-transform-extract-axes */ "./src/spec-transform-extract-axes.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../const */ "./src/const.js");
/* harmony import */ var _tau_gpl__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tau.gpl */ "./src/charts/tau.gpl.ts");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! d3-selection */ "d3-selection");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(d3_selection__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! d3-transition */ "d3-transition");
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(d3_transition__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _task_runner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./task-runner */ "./src/charts/task-runner.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};




















var d3 = __assign({}, d3_selection__WEBPACK_IMPORTED_MODULE_19__);


var selectOrAppend = _utils_utils_dom__WEBPACK_IMPORTED_MODULE_4__["selectOrAppend"];
var selectImmediate = _utils_utils_dom__WEBPACK_IMPORTED_MODULE_4__["selectImmediate"];
var Plot = /** @class */ (function (_super) {
    __extends(Plot, _super);
    function Plot(config) {
        var _this = _super.call(this) || this;
        _this._nodes = [];
        _this._svg = null;
        _this._filtersStore = {
            filters: {},
            tick: 0
        };
        _this._layout = Object(_utils_layout_template__WEBPACK_IMPORTED_MODULE_11__["getLayout"])();
        _this.transformers = [
            _spec_transform_apply_ratio__WEBPACK_IMPORTED_MODULE_15__["SpecTransformApplyRatio"],
            _spec_transform_auto_layout__WEBPACK_IMPORTED_MODULE_13__["SpecTransformAutoLayout"]
        ];
        _this.onUnitsStructureExpandedTransformers = [
            _spec_transform_extract_axes__WEBPACK_IMPORTED_MODULE_16__["SpecTransformExtractAxes"],
            _spec_transform_calc_size__WEBPACK_IMPORTED_MODULE_14__["SpecTransformCalcSize"]
        ];
        _this._chartDataModel = (function (src) { return src; });
        _this._reportProgress = null;
        _this._taskRunner = null;
        _this._renderingPhase = null;
        _this.applyConfig(config);
        return _this;
    }
    Plot.prototype.on = function (event, callback, context) {
        return _super.prototype.on.call(this, event, callback, context);
    };
    Plot.prototype.updateConfig = function (config) {
        this.applyConfig(config);
        this.refresh();
    };
    Plot.prototype.applyConfig = function (config) {
        this._filtersStore.filters = {};
        config = this.setupConfigSettings(config);
        this.configGPL = this.createGPLConfig(config);
        this._originData = Object.assign({}, this.configGPL.sources);
        this._liveSpec = this.configGPL;
        this._emptyContainer = config.emptyContainer || '';
        this.setupPlugins(config);
    };
    Plot.prototype.createGPLConfig = function (config) {
        var configGPL;
        if (this.isGPLConfig(config)) {
            configGPL = config;
        }
        else {
            config = this.setupConfig(config);
            configGPL = new _spec_converter__WEBPACK_IMPORTED_MODULE_12__["SpecConverter"](config).convert();
        }
        configGPL = Plot.setupPeriodData(configGPL);
        return configGPL;
    };
    Plot.prototype.isGPLConfig = function (config) {
        return (['sources', 'scales'].filter(function (p) { return config.hasOwnProperty(p); }).length === 2);
    };
    Plot.prototype.setupPlugins = function (config) {
        var plugins = (config.plugins || []);
        if (this._plugins) {
            this._plugins.destroy();
        }
        this._plugins = new _plugins__WEBPACK_IMPORTED_MODULE_2__["Plugins"](plugins, this);
    };
    Plot.prototype.setupConfigSettings = function (config) {
        this._dataRefs = this._dataRefs || (function () {
            var iref = 0;
            return {
                references: new WeakMap(),
                refCounter: (function () { return (++iref); })
            };
        })();
        config.settings = Plot.setupSettings(_utils_utils__WEBPACK_IMPORTED_MODULE_3__["defaults"]((config.settings || {}), this._dataRefs));
        return config;
    };
    Plot.prototype.destroy = function () {
        this.destroyNodes();
        d3.select(this._svg).remove();
        d3.select(this._layout.layout).remove();
        this._cancelRendering();
        _super.prototype.destroy.call(this);
    };
    Plot.prototype.setupChartSourceModel = function (fnModelTransformation) {
        this._chartDataModel = fnModelTransformation;
    };
    Plot.prototype.setupConfig = function (config) {
        if (!config.spec || !config.spec.unit) {
            throw new Error('Provide spec for plot');
        }
        var resConfig = _utils_utils__WEBPACK_IMPORTED_MODULE_3__["defaults"](config, {
            spec: {},
            data: [],
            plugins: [],
            settings: {}
        });
        resConfig.spec.dimensions = Plot.setupMetaInfo(resConfig.spec.dimensions, resConfig.data);
        var log = resConfig.settings.log;
        if (resConfig.settings.excludeNull) {
            this.addFilter({
                tag: 'default',
                src: '/',
                predicate: _data_processor__WEBPACK_IMPORTED_MODULE_10__["DataProcessor"].excludeNullValues(resConfig.spec.dimensions, function (item) { return log([item, 'point was excluded, because it has undefined values.'], 'WARN'); })
            });
        }
        return resConfig;
    };
    Plot.setupPeriodData = function (spec) {
        var tickPeriod = Plot.__api__.tickPeriod;
        var log = spec.settings.log;
        var scales = Object
            .keys(spec.scales)
            .map(function (s) { return spec.scales[s]; });
        scales
            .filter(function (s) { return (s.type === 'period'); })
            .forEach(function (scaleRef) {
            var periodCaster = tickPeriod.get(scaleRef.period, { utc: spec.settings.utcTime });
            if (!periodCaster) {
                log([
                    "Unknown period \"" + scaleRef.period + "\".",
                    "Docs: http://api.taucharts.com/plugins/customticks.html#how-to-add-custom-tick-period"
                ], 'WARN');
                scaleRef.period = null;
            }
        });
        return spec;
    };
    Plot.setupMetaInfo = function (dims, data) {
        var meta = (dims) ? dims : _data_processor__WEBPACK_IMPORTED_MODULE_10__["DataProcessor"].autoDetectDimTypes(data);
        return _data_processor__WEBPACK_IMPORTED_MODULE_10__["DataProcessor"].autoAssignScales(meta);
    };
    Plot.setupSettings = function (configSettings) {
        var globalSettings = Plot.globalSettings;
        var localSettings = Object
            .keys(globalSettings)
            .reduce(function (memo, k) {
            memo[k] = (typeof globalSettings[k] === 'function') ?
                globalSettings[k] :
                _utils_utils__WEBPACK_IMPORTED_MODULE_3__["clone"](globalSettings[k]);
            return memo;
        }, {});
        var r = _utils_utils__WEBPACK_IMPORTED_MODULE_3__["defaults"](configSettings || {}, localSettings);
        if (!Array.isArray(r.specEngine)) {
            r.specEngine = [{ width: Number.MAX_VALUE, name: r.specEngine }];
        }
        return r;
    };
    Plot.prototype.insertToLeftSidebar = function (el) {
        return _utils_utils_dom__WEBPACK_IMPORTED_MODULE_4__["appendTo"](el, this._layout.leftSidebar);
    };
    Plot.prototype.insertToRightSidebar = function (el) {
        return _utils_utils_dom__WEBPACK_IMPORTED_MODULE_4__["appendTo"](el, this._layout.rightSidebar);
    };
    Plot.prototype.insertToFooter = function (el) {
        return _utils_utils_dom__WEBPACK_IMPORTED_MODULE_4__["appendTo"](el, this._layout.footer);
    };
    Plot.prototype.insertToHeader = function (el) {
        return _utils_utils_dom__WEBPACK_IMPORTED_MODULE_4__["appendTo"](el, this._layout.header);
    };
    Plot.prototype.addBalloon = function (conf) {
        return new _api_balloon__WEBPACK_IMPORTED_MODULE_0__["Balloon"]('', conf || {});
    };
    Plot.prototype.destroyNodes = function () {
        this._nodes.forEach(function (node) { return node.destroy(); });
        this._nodes = [];
        this._renderedItems = [];
    };
    Plot.prototype.onUnitDraw = function (unitNode) {
        var _this = this;
        this._nodes.push(unitNode);
        this.fire('unitdraw', unitNode);
        ['click', 'mouseover', 'mouseout']
            .forEach(function (eventName) { return unitNode.on((eventName), function (sender, e) {
            _this.fire("element" + eventName, {
                element: sender,
                data: e.data,
                event: e.event
            });
        }); });
    };
    Plot.prototype.onUnitsStructureExpanded = function (specRef) {
        var _this = this;
        this.onUnitsStructureExpandedTransformers
            .forEach(function (TClass) { return (new TClass(specRef)).transform(_this); });
        this.fire('unitsstructureexpanded', specRef);
    };
    Plot.prototype._getClosestElementPerUnit = function (x0, y0) {
        return this._renderedItems
            .filter(function (d) { return d.getClosestElement; })
            .map(function (item) {
            var closest = item.getClosestElement(x0, y0);
            var unit = item.node();
            return { unit: unit, closest: closest };
        });
    };
    Plot.prototype.disablePointerEvents = function () {
        this._layout.layout.style.pointerEvents = 'none';
    };
    Plot.prototype.enablePointerEvents = function () {
        this._layout.layout.style.pointerEvents = '';
    };
    Plot.prototype._handlePointerEvent = function (event) {
        // TODO: Highlight API seems not consistent.
        // Just predicate is not enough, also
        // need coordinates or event object.
        var svgRect = this._svg.getBoundingClientRect();
        var x = (event.clientX - svgRect.left);
        var y = (event.clientY - svgRect.top);
        var eventType = event.type;
        var isClick = (eventType === 'click');
        var dataEvent = (isClick ? 'data-click' : 'data-hover');
        var data = null;
        var node = null;
        var unit = null;
        var items = this._getClosestElementPerUnit(x, y);
        var nonEmpty = items
            .filter(function (d) { return d.closest; })
            .sort(function (a, b) { return (a.closest.distance === b.closest.distance ?
            (a.closest.secondaryDistance - b.closest.secondaryDistance) :
            (a.closest.distance - b.closest.distance)); });
        if (nonEmpty.length > 0) {
            var largerDistIndex = nonEmpty.findIndex(function (d) { return ((d.closest.distance !== nonEmpty[0].closest.distance) ||
                (d.closest.secondaryDistance !== nonEmpty[0].closest.secondaryDistance)); });
            var sameDistItems = (largerDistIndex < 0 ? nonEmpty : nonEmpty.slice(0, largerDistIndex));
            if (sameDistItems.length === 1) {
                data = sameDistItems[0].closest.data;
                node = sameDistItems[0].closest.node;
                unit = sameDistItems[0].unit;
            }
            else {
                var mx = (sameDistItems.reduce(function (sum, item) { return sum + item.closest.x; }, 0) / sameDistItems.length);
                var my = (sameDistItems.reduce(function (sum, item) { return sum + item.closest.y; }, 0) / sameDistItems.length);
                var angle = (Math.atan2(my - y, mx - x) + Math.PI);
                var index = Math.round((sameDistItems.length - 1) * angle / 2 / Math.PI);
                var closest = sameDistItems[index].closest;
                data = closest.data;
                node = closest.node;
                unit = sameDistItems[index].unit;
            }
        }
        items.forEach(function (item) { return item.unit.fire(dataEvent, { event: event, data: data, node: node, unit: unit }); });
    };
    Plot.prototype._initPointerEvents = function () {
        var _this = this;
        if (!this._liveSpec.settings.syncPointerEvents) {
            this._pointerAnimationFrameId = null;
        }
        var svg = d3.select(this._svg);
        var wrapEventHandler = (this._liveSpec.settings.syncPointerEvents ?
            (function (handler) { return function () { return handler(d3_selection__WEBPACK_IMPORTED_MODULE_19__["event"]); }; }) :
            (function (handler) { return (function () {
                var e = d3_selection__WEBPACK_IMPORTED_MODULE_19__["event"];
                if (_this._pointerAnimationFrameId && e.type !== 'mousemove') {
                    _this._cancelPointerAnimationFrame();
                }
                if (!_this._pointerAnimationFrameId) {
                    _this._pointerAnimationFrameId = requestAnimationFrame(function () {
                        _this._pointerAnimationFrameId = null;
                        handler(e);
                    });
                }
            }); }));
        var handler = (function (e) { return _this._handlePointerEvent(e); });
        svg.on('mousemove', wrapEventHandler(handler));
        svg.on('click', wrapEventHandler(handler));
        svg.on('mouseleave', wrapEventHandler(function (event) {
            if (window.getComputedStyle(_this._svg).pointerEvents !== 'none') {
                _this.select(function () { return true; })
                    .forEach(function (unit) { return unit.fire('data-hover', { event: event, data: null, node: null, unit: null }); });
            }
        }));
    };
    Plot.prototype._cancelPointerAnimationFrame = function () {
        cancelAnimationFrame(this._pointerAnimationFrameId);
        this._pointerAnimationFrameId = null;
    };
    Plot.prototype._setupTaskRunner = function (liveSpec) {
        var _this = this;
        this._resetTaskRunner();
        this._taskRunner = new _task_runner__WEBPACK_IMPORTED_MODULE_21__["default"]({
            timeout: (liveSpec.settings.renderingTimeout || Number.MAX_SAFE_INTEGER),
            syncInterval: (liveSpec.settings.asyncRendering ?
                liveSpec.settings.syncRenderingInterval :
                Number.MAX_SAFE_INTEGER),
            callbacks: {
                done: function () {
                    _this._completeRendering();
                    _this._renderingPhase = null;
                },
                timeout: function (timeout, taskRunner) {
                    _this._displayTimeoutWarning({
                        timeout: timeout,
                        proceed: function () {
                            _this.disablePointerEvents();
                            taskRunner.setTimeoutDuration(Number.MAX_SAFE_INTEGER);
                            taskRunner.run();
                        },
                        cancel: function () {
                            _this._cancelRendering();
                        }
                    });
                    _this.enablePointerEvents();
                    _this.fire('renderingtimeout', timeout);
                },
                progress: function (progress) {
                    var phases = {
                        spec: 0,
                        draw: 1
                    };
                    var p = (phases[_this._renderingPhase] / 2 + progress / 2);
                    _this._reportProgress(p);
                },
                error: (liveSpec.settings.handleRenderingErrors ?
                    (function (err) {
                        _this._cancelRendering();
                        _this._displayRenderingError(err);
                        _this.fire('renderingerror', err);
                        liveSpec.settings.log([
                            "An error occured during chart rendering.",
                            "Set \"handleRenderingErrors: false\" in chart settings to debug.",
                            "Error message: " + err.message
                        ].join(' '), 'ERROR');
                    }) :
                    null)
            }
        });
        return this._taskRunner;
    };
    Plot.prototype._resetTaskRunner = function () {
        if (this._taskRunner && this._taskRunner.isRunning()) {
            this._taskRunner.stop();
            this._taskRunner = null;
        }
    };
    Plot.prototype.renderTo = function (target, xSize) {
        this._resetProgressLayout();
        this.disablePointerEvents();
        this._insertLayout(target, xSize);
        var liveSpec = this._createLiveSpec();
        if (!liveSpec) {
            this._svg = null;
            this._layout.content.innerHTML = this._emptyContainer;
            this.enablePointerEvents();
            return;
        }
        var gpl = this._createGPL(liveSpec);
        var taskRunner = this._setupTaskRunner(liveSpec);
        this._scheduleDrawScenario(taskRunner, gpl);
        this._scheduleDrawing(taskRunner, gpl);
        taskRunner.run();
    };
    Plot.prototype._insertLayout = function (target, xSize) {
        this._target = target;
        this._defaultSize = Object.assign({}, xSize);
        var targetNode = d3.select(target).node();
        if (targetNode === null) {
            throw new Error('Target element not found');
        }
        if (this._layout.layout.parentNode !== targetNode) {
            targetNode.appendChild(this._layout.layout);
        }
        var content = this._layout.content;
        // Set padding to fit scrollbar size
        var s = _utils_utils_dom__WEBPACK_IMPORTED_MODULE_4__["getScrollbarSize"](this._layout.contentContainer);
        this._layout.contentContainer.style.padding = "0 " + s.width + "px " + s.height + "px 0";
        _utils_utils_dom__WEBPACK_IMPORTED_MODULE_4__["setScrollPadding"](this._layout.rightSidebarContainer, 'vertical');
        var size = Object.assign({}, xSize) || {};
        if (!size.width || !size.height) {
            var _a = content.parentElement, scrollLeft = _a.scrollLeft, scrollTop = _a.scrollTop;
            content.style.display = 'none';
            size = _utils_utils__WEBPACK_IMPORTED_MODULE_3__["defaults"](size, _utils_utils_dom__WEBPACK_IMPORTED_MODULE_4__["getContainerSize"](content.parentNode));
            content.style.display = '';
            content.parentElement.scrollLeft = scrollLeft;
            content.parentElement.scrollTop = scrollTop;
            // TODO: fix this issue
            if (!size.height) {
                size.height = _utils_utils_dom__WEBPACK_IMPORTED_MODULE_4__["getContainerSize"](this._layout.layout).height;
            }
        }
        this.configGPL.settings.size = size;
    };
    Plot.prototype._createLiveSpec = function () {
        var _this = this;
        this._liveSpec = _utils_utils__WEBPACK_IMPORTED_MODULE_3__["clone"](_utils_utils__WEBPACK_IMPORTED_MODULE_3__["omit"](this.configGPL, 'plugins'));
        this._liveSpec.sources = this.getDataSources();
        this._liveSpec.settings = this.configGPL.settings;
        this._experimentalSetupAnimationSpeed(this._liveSpec);
        if (this.isEmptySources(this._liveSpec.sources)) {
            return null;
        }
        this._liveSpec = this
            .transformers
            .reduce(function (memo, TransformClass) { return (new TransformClass(memo).transform(_this)); }, this._liveSpec);
        this.destroyNodes();
        this.fire('specready', this._liveSpec);
        return this._liveSpec;
    };
    Plot.prototype._experimentalSetupAnimationSpeed = function (spec) {
        // Determine if it's better to draw chart without animation
        spec.settings.initialAnimationSpeed = (spec.settings.initialAnimationSpeed ||
            spec.settings.animationSpeed);
        var animationSpeed = (spec.settings.experimentalShouldAnimate(spec) ?
            spec.settings.initialAnimationSpeed : 0);
        spec.settings.animationSpeed = animationSpeed;
        var setUnitAnimation = function (u) {
            u.guide = (u.guide || {});
            u.guide.animationSpeed = animationSpeed;
            if (u.units) {
                u.units.forEach(setUnitAnimation);
            }
        };
        setUnitAnimation(spec.unit);
    };
    Plot.prototype._createGPL = function (liveSpec) {
        var gpl = new _tau_gpl__WEBPACK_IMPORTED_MODULE_18__["GPL"](liveSpec, this.getScaleFactory(), _units_registry__WEBPACK_IMPORTED_MODULE_7__["unitsRegistry"], _grammar_registry__WEBPACK_IMPORTED_MODULE_6__["GrammarRegistry"]);
        var structure = gpl.unfoldStructure();
        this.onUnitsStructureExpanded(structure);
        return gpl;
    };
    Plot.prototype._scheduleDrawScenario = function (taskRunner, gpl) {
        var _this = this;
        var d3Target = d3.select(this._layout.content);
        var newSize = gpl.config.settings.size;
        taskRunner.addTask(function () { return _this._renderingPhase = 'spec'; });
        gpl.getDrawScenarioQueue({
            allocateRect: function () { return ({
                slot: (function (uid) { return d3Target.selectAll(".uid_" + uid); }),
                frameId: 'root',
                left: 0,
                top: 0,
                width: newSize.width,
                containerWidth: newSize.width,
                height: newSize.height,
                containerHeight: newSize.height
            }); }
        }).forEach(function (task) { return taskRunner.addTask(task); });
    };
    Plot.prototype._scheduleDrawing = function (taskRunner, gpl) {
        var _this = this;
        var newSize = gpl.config.settings.size;
        taskRunner.addTask(function (scenario) {
            _this._renderingPhase = 'draw';
            _this._renderRoot({ scenario: scenario, newSize: newSize });
            _this._cancelPointerAnimationFrame();
            _this._scheduleRenderScenario(scenario);
        });
    };
    Plot.prototype._resetProgressLayout = function () {
        this._createProgressBar();
        this._clearRenderingError();
        this._clearTimeoutWarning();
    };
    Plot.prototype._renderRoot = function (_a) {
        var _this = this;
        var scenario = _a.scenario, newSize = _a.newSize;
        var d3Target = d3.select(this._layout.content);
        var frameRootId = scenario[0].config.uid;
        var svg = selectOrAppend(d3Target, "svg")
            .attr('width', Math.floor(newSize.width))
            .attr('height', Math.floor(newSize.height));
        if (!svg.attr('class')) {
            svg.attr('class', _const__WEBPACK_IMPORTED_MODULE_17__["CSS_PREFIX"] + "svg");
        }
        this._svg = svg.node();
        this._initPointerEvents();
        this.fire('beforerender', this._svg);
        var roots = svg.selectAll('g.frame-root')
            .data([frameRootId], function (x) { return x; });
        // NOTE: Fade out removed root, fade-in if removing interrupted.
        roots.enter()
            .append('g')
            .classed(_const__WEBPACK_IMPORTED_MODULE_17__["CSS_PREFIX"] + "cell cell frame-root uid_" + frameRootId, true)
            .merge(roots)
            .call(function (selection) {
            selection.classed('tau-active', true);
            Object(_utils_d3_decorators__WEBPACK_IMPORTED_MODULE_5__["d3_transition"])(selection, _this.configGPL.settings.animationSpeed, 'frameRootToggle')
                .attr('opacity', 1);
        });
        roots.exit()
            .call(function (selection) {
            selection.classed('tau-active', false);
            Object(_utils_d3_decorators__WEBPACK_IMPORTED_MODULE_5__["d3_transition"])(selection, _this.configGPL.settings.animationSpeed, 'frameRootToggle')
                .attr('opacity', 1e-6)
                .remove();
        });
    };
    Plot.prototype._scheduleRenderScenario = function (scenario) {
        var _this = this;
        scenario.forEach(function (item) {
            _this._taskRunner.addTask(function () {
                item.draw();
                _this.onUnitDraw(item.node());
                _this._renderedItems.push(item);
            });
        });
    };
    Plot.prototype._completeRendering = function () {
        // TODO: Render panels before chart, to
        // prevent chart size shrink. Use some other event.
        _utils_utils_dom__WEBPACK_IMPORTED_MODULE_4__["setScrollPadding"](this._layout.contentContainer);
        this._layout.rightSidebar.style.maxHeight = (this._liveSpec.settings.size.height + "px");
        this.enablePointerEvents();
        if (this._svg) {
            this.fire('render', this._svg);
        }
        // NOTE: After plugins have rendered, the panel scrollbar may appear, so need to handle it again.
        _utils_utils_dom__WEBPACK_IMPORTED_MODULE_4__["setScrollPadding"](this._layout.rightSidebarContainer, 'vertical');
    };
    Plot.prototype._cancelRendering = function () {
        this.enablePointerEvents();
        this._resetTaskRunner();
        this._cancelPointerAnimationFrame();
    };
    Plot.prototype._createProgressBar = function () {
        var header = d3.select(this._layout.header);
        var progressBar = selectOrAppend(header, "div." + _const__WEBPACK_IMPORTED_MODULE_17__["CSS_PREFIX"] + "progress");
        progressBar.select("div." + _const__WEBPACK_IMPORTED_MODULE_17__["CSS_PREFIX"] + "progress__value").remove();
        var progressValue = progressBar.append('div')
            .classed(_const__WEBPACK_IMPORTED_MODULE_17__["CSS_PREFIX"] + "progress__value", true)
            .style('width', 0);
        this._reportProgress = function (value) {
            requestAnimationFrame(function () {
                progressBar.classed(_const__WEBPACK_IMPORTED_MODULE_17__["CSS_PREFIX"] + "progress_active", value < 1);
                progressValue.style('width', value * 100 + "%");
            });
        };
    };
    Plot.prototype._displayRenderingError = function (error) {
        this._layout.layout.classList.add(_const__WEBPACK_IMPORTED_MODULE_17__["CSS_PREFIX"] + "layout_rendering-error");
    };
    Plot.prototype._clearRenderingError = function () {
        this._layout.layout.classList.remove(_const__WEBPACK_IMPORTED_MODULE_17__["CSS_PREFIX"] + "layout_rendering-error");
    };
    Plot.prototype.getScaleFactory = function (dataSources) {
        if (dataSources === void 0) { dataSources = null; }
        return new _scales_factory__WEBPACK_IMPORTED_MODULE_9__["ScalesFactory"](_scales_registry__WEBPACK_IMPORTED_MODULE_8__["scalesRegistry"].instance(this._liveSpec.settings), dataSources || this._liveSpec.sources, this._liveSpec.scales);
    };
    Plot.prototype.getScaleInfo = function (name, dataFrame) {
        if (dataFrame === void 0) { dataFrame = null; }
        return this
            .getScaleFactory()
            .createScaleInfoByName(name, dataFrame);
    };
    Plot.prototype.getSourceFiltersIterator = function (rejectFiltersPredicate) {
        var _this = this;
        var filters = _utils_utils__WEBPACK_IMPORTED_MODULE_3__["flatten"](Object.keys(this._filtersStore.filters).map(function (key) { return _this._filtersStore.filters[key]; }))
            .filter(function (f) { return !rejectFiltersPredicate(f); })
            .map(function (x) { return x.predicate; });
        return function (row) { return filters.reduce(function (prev, f) { return (prev && f(row)); }, true); };
    };
    Plot.prototype.getDataSources = function (param) {
        var _this = this;
        if (param === void 0) { param = {}; }
        var excludeFiltersByTagAndSource = function (k) {
            return (function (f) { return (param.excludeFilter && param.excludeFilter.indexOf(f.tag) !== -1) || f.src !== k; });
        };
        var chartDataModel = this._chartDataModel(this._originData);
        return Object
            .keys(chartDataModel)
            .filter(function (k) { return k !== '?'; })
            .reduce(function (memo, k) {
            var item = chartDataModel[k];
            var filterIterator = _this.getSourceFiltersIterator(excludeFiltersByTagAndSource(k));
            memo[k] = {
                dims: item.dims,
                data: item.data.filter(filterIterator)
            };
            return memo;
        }, {
            '?': chartDataModel['?']
        });
    };
    Plot.prototype.isEmptySources = function (sources) {
        return !Object
            .keys(sources)
            .filter(function (k) { return k !== '?'; })
            .filter(function (k) { return sources[k].data.length > 0; })
            .length;
    };
    Plot.prototype.getChartModelData = function (param, src) {
        if (param === void 0) { param = {}; }
        if (src === void 0) { src = '/'; }
        var sources = this.getDataSources(param);
        return sources[src].data;
    };
    Plot.prototype.getDataDims = function (src) {
        if (src === void 0) { src = '/'; }
        return this._originData[src].dims;
    };
    Plot.prototype.getData = function (src) {
        if (src === void 0) { src = '/'; }
        return this._originData[src].data;
    };
    Plot.prototype.setData = function (data, src) {
        if (src === void 0) { src = '/'; }
        this._originData[src].data = data;
        this.refresh();
    };
    Plot.prototype.getSVG = function () {
        return this._svg;
    };
    Plot.prototype.addFilter = function (filter) {
        filter.src = filter.src || '/';
        var tag = filter.tag;
        var filters = this._filtersStore.filters[tag] = this._filtersStore.filters[tag] || [];
        var id = this._filtersStore.tick++;
        filter.id = id;
        filters.push(filter);
        return id;
    };
    Plot.prototype.removeFilter = function (id) {
        var _this = this;
        Object.keys(this._filtersStore.filters).map(function (key) {
            _this._filtersStore.filters[key] = _this._filtersStore.filters[key].filter(function (item) { return item.id !== id; });
        });
        return this;
    };
    Plot.prototype.refresh = function () {
        if (this._target) {
            this.renderTo(this._target, this._defaultSize);
        }
    };
    Plot.prototype.resize = function (sizes) {
        if (sizes === void 0) { sizes = {}; }
        this.renderTo(this._target, sizes);
    };
    Plot.prototype.select = function (queryFilter) {
        return this._nodes.filter(queryFilter);
    };
    Plot.prototype.traverseSpec = function (spec, iterator) {
        var traverse = function (node, iterator, parentNode, parentFrame) {
            iterator(node, parentNode, parentFrame);
            if (node.frames) {
                node.frames.forEach(function (frame) {
                    (frame.units || []).map(function (x) { return traverse(x, iterator, node, frame); });
                });
            }
            else {
                (node.units || []).map(function (x) { return traverse(x, iterator, node, null); });
            }
        };
        traverse(spec.unit, iterator, null, null);
    };
    // use from plugins to get the most actual chart config
    Plot.prototype.getSpec = function () {
        return this._liveSpec;
    };
    Plot.prototype.getLayout = function () {
        return this._layout;
    };
    Plot.prototype._displayTimeoutWarning = function (_a) {
        var _this = this;
        var proceed = _a.proceed, cancel = _a.cancel, timeout = _a.timeout;
        var width = 200;
        var height = 100;
        var linesCount = 3;
        var lineSpacing = 1.5;
        var midX = width / 2;
        var fontSize = Math.round(height / linesCount / lineSpacing);
        var getY = function (line) {
            return Math.round(height / linesCount / lineSpacing * line);
        };
        this._layout.content.style.height = '100%';
        this._layout.content.insertAdjacentHTML('beforeend', "\n            <div class=\"" + _const__WEBPACK_IMPORTED_MODULE_17__["CSS_PREFIX"] + "rendering-timeout-warning\">\n            <svg\n                viewBox=\"0 0 " + width + " " + height + "\">\n                <text\n                    text-anchor=\"middle\"\n                    font-size=\"" + fontSize + "\">\n                    <tspan x=\"" + midX + "\" y=\"" + getY(1) + "\">Rendering took more than " + Math.round(timeout) / 1000 + "s</tspan>\n                    <tspan x=\"" + midX + "\" y=\"" + getY(2) + "\">Would you like to continue?</tspan>\n                </text>\n                <text\n                    class=\"" + _const__WEBPACK_IMPORTED_MODULE_17__["CSS_PREFIX"] + "rendering-timeout-continue-btn\"\n                    text-anchor=\"end\"\n                    font-size=\"" + fontSize + "\"\n                    cursor=\"pointer\"\n                    text-decoration=\"underline\"\n                    x=\"" + (midX - fontSize / 3) + "\"\n                    y=\"" + getY(3) + "\">\n                    Continue\n                </text>\n                <text\n                    class=\"" + _const__WEBPACK_IMPORTED_MODULE_17__["CSS_PREFIX"] + "rendering-timeout-cancel-btn\"\n                    text-anchor=\"start\"\n                    font-size=\"" + fontSize + "\"\n                    cursor=\"pointer\"\n                    text-decoration=\"underline\"\n                    x=\"" + (midX + fontSize / 3) + "\"\n                    y=\"" + getY(3) + "\">\n                    Cancel\n                </text>\n            </svg>\n            </div>\n        ");
        this._layout.content
            .querySelector("." + _const__WEBPACK_IMPORTED_MODULE_17__["CSS_PREFIX"] + "rendering-timeout-continue-btn")
            .addEventListener('click', function () {
            _this._clearTimeoutWarning();
            proceed.call(_this);
        });
        this._layout.content
            .querySelector("." + _const__WEBPACK_IMPORTED_MODULE_17__["CSS_PREFIX"] + "rendering-timeout-cancel-btn")
            .addEventListener('click', function () {
            _this._clearTimeoutWarning();
            cancel.call(_this);
        });
    };
    Plot.prototype._clearTimeoutWarning = function () {
        var warning = selectImmediate(this._layout.content, "." + _const__WEBPACK_IMPORTED_MODULE_17__["CSS_PREFIX"] + "rendering-timeout-warning");
        if (warning) {
            this._layout.content.removeChild(warning);
            this._layout.content.style.height = '';
        }
    };
    return Plot;
}(_event__WEBPACK_IMPORTED_MODULE_1__["Emitter"]));



/***/ }),

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/*! exports provided: CSS_PREFIX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSS_PREFIX", function() { return CSS_PREFIX; });
var CSS_PREFIX = 'tau-chart__';


/***/ }),

/***/ "./src/data-frame.ts":
/*!***************************!*\
  !*** ./src/data-frame.ts ***!
  \***************************/
/*! exports provided: DataFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFrame", function() { return DataFrame; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.ts");

var DataFrame = /** @class */ (function () {
    function DataFrame(_a, dataSource, transformations) {
        var key = _a.key, pipe = _a.pipe, source = _a.source, units = _a.units;
        if (transformations === void 0) { transformations = {}; }
        this.key = key;
        this.pipe = pipe || [];
        this.source = source;
        this.units = units;
        this._frame = { key: key, source: source, pipe: this.pipe };
        this._data = dataSource;
        this._pipeReducer = function (data, pipeCfg) { return transformations[pipeCfg.type](data, pipeCfg.args); };
    }
    DataFrame.prototype.hash = function () {
        var x = [this._frame.pipe, this._frame.key, this._frame.source]
            .map(function (x) { return JSON.stringify(x); })
            .join('');
        return _utils_utils__WEBPACK_IMPORTED_MODULE_0__["generateHash"](x);
    };
    DataFrame.prototype.full = function () {
        return this._data;
    };
    DataFrame.prototype.part = function (pipeMapper) {
        if (pipeMapper === void 0) { pipeMapper = (function (x) { return x; }); }
        return this
            ._frame
            .pipe
            .map(pipeMapper)
            .reduce(this._pipeReducer, this._data);
    };
    return DataFrame;
}());



/***/ }),

/***/ "./src/data-processor.ts":
/*!*******************************!*\
  !*** ./src/data-processor.ts ***!
  \*******************************/
/*! exports provided: DataProcessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataProcessor", function() { return DataProcessor; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.ts");

var DataProcessor = {
    isYFunctionOfX: function (data, xFields, yFields) {
        var isRelationAFunction = true;
        var error = null;
        // domain should has only 1 value from range
        try {
            data.reduce(function (memo, item) {
                var fnVar = function (hash, f) {
                    var propValue = item[f];
                    var hashValue = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"](propValue) ? JSON.stringify(propValue) : propValue;
                    hash.push(hashValue);
                    return hash;
                };
                var key = xFields.reduce(fnVar, []).join('/');
                var val = yFields.reduce(fnVar, []).join('/');
                if (!memo.hasOwnProperty(key)) {
                    memo[key] = val;
                }
                else {
                    var prevVal = memo[key];
                    if (prevVal !== val) {
                        error = {
                            type: 'RelationIsNotAFunction',
                            keyX: xFields.join('/'),
                            keyY: yFields.join('/'),
                            valX: key,
                            errY: [prevVal, val]
                        };
                        throw new Error('RelationIsNotAFunction');
                    }
                }
                return memo;
            }, {});
        }
        catch (ex) {
            if (ex.message !== 'RelationIsNotAFunction') {
                throw ex;
            }
            isRelationAFunction = false;
        }
        return {
            result: isRelationAFunction,
            error: error
        };
    },
    excludeNullValues: function (dimensions, onExclude) {
        var fields = Object.keys(dimensions).reduce(function (fields, k) {
            var d = dimensions[k];
            if ((!d.hasOwnProperty('hasNull') || d.hasNull) && ((d.type === 'measure') || (d.scale === 'period'))) {
                // rule: exclude null values of "measure" type or "period" scale
                fields.push(k);
            }
            return fields;
        }, []);
        return function (row) {
            var result = !fields.some(function (f) { return (!row.hasOwnProperty(f) || (row[f] === null)); });
            if (!result) {
                onExclude(row);
            }
            return result;
        };
    },
    autoAssignScales: function (dimensions) {
        var defaultType = 'category';
        var scaleMap = {
            category: 'ordinal',
            order: 'ordinal',
            measure: 'linear'
        };
        var r = {};
        Object.keys(dimensions).forEach(function (k) {
            var item = dimensions[k];
            var type = (item.type || defaultType).toLowerCase();
            r[k] = Object.assign({}, item, {
                type: type,
                scale: item.scale || scaleMap[type],
                value: item.value
            });
        });
        return r;
    },
    autoDetectDimTypes: function (data) {
        var defaultDetect = {
            type: 'category',
            scale: 'ordinal'
        };
        var detectType = function (propertyValue, defaultDetect) {
            var pair = defaultDetect;
            if (_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isDate"](propertyValue)) {
                pair.type = 'measure';
                pair.scale = 'time';
            }
            else if (_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"](propertyValue)) {
                pair.type = 'order';
                pair.scale = 'ordinal';
            }
            else if (Number.isFinite(propertyValue)) {
                pair.type = 'measure';
                pair.scale = 'linear';
            }
            return pair;
        };
        var reducer = function (memo, rowItem) {
            Object.keys(rowItem).forEach(function (key) {
                var val = rowItem.hasOwnProperty(key) ? rowItem[key] : null;
                memo[key] = memo[key] || {
                    type: null,
                    hasNull: false
                };
                if (val === null) {
                    memo[key].hasNull = true;
                }
                else {
                    var typeScalePair = detectType(val, _utils_utils__WEBPACK_IMPORTED_MODULE_0__["clone"](defaultDetect));
                    var detectedType = typeScalePair.type;
                    var detectedScale = typeScalePair.scale;
                    var isInContraToPrev = (memo[key].type !== null && memo[key].type !== detectedType);
                    memo[key].type = isInContraToPrev ? defaultDetect.type : detectedType;
                    memo[key].scale = isInContraToPrev ? defaultDetect.scale : detectedScale;
                }
            });
            return memo;
        };
        return data.reduce(reducer, {});
    },
    sortByDim: function (data, dimName, dimInfo) {
        var rows = data;
        var interceptor = (['period', 'time'].indexOf(dimInfo.scale) >= 0) ?
            (function (x) { return new Date(x); }) :
            (function (x) { return x; });
        var initialIndices = data.reduce((function (map, row, i) {
            map.set(row, i);
            return map;
        }), new Map());
        if ((dimInfo.type === 'measure') || (dimInfo.scale === 'period')) {
            rows = data
                .slice()
                .sort(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createMultiSorter"](function (a, b) { return (interceptor(a[dimName]) - interceptor(b[dimName])); }, function (a, b) { return (initialIndices.get(a) - initialIndices.get(b)); }));
        }
        else if (dimInfo.order) {
            var hashOrder = dimInfo.order.reduce(function (memo, x, i) {
                memo[x] = i;
                return memo;
            }, {});
            var defaultN = dimInfo.order.length;
            var k = "(___" + dimName + "___)";
            rows = data
                .map(function (row) {
                var orderN = hashOrder[row[dimName]];
                orderN = (orderN >= 0) ? orderN : defaultN;
                row[k] = orderN;
                return row;
            })
                .sort(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["createMultiSorter"](function (a, b) { return (a[k] - b[k]); }, function (a, b) { return (initialIndices.get(a) - initialIndices.get(b)); }))
                .map(function (row) {
                delete row[k];
                return row;
            });
        }
        return rows;
    }
};



/***/ }),

/***/ "./src/elements/coords.cartesian.axis.ts":
/*!***********************************************!*\
  !*** ./src/elements/coords.cartesian.axis.ts ***!
  \***********************************************/
/*! exports provided: cartesianAxis, cartesianGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartesianAxis", function() { return cartesianAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartesianGrid", function() { return cartesianGrid; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _utils_utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils-dom */ "./src/utils/utils-dom.ts");
/* harmony import */ var _utils_d3_decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/d3-decorators */ "./src/utils/d3-decorators.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../const */ "./src/const.js");
/* harmony import */ var _utils_utils_draw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils-draw */ "./src/utils/utils-draw.ts");





function identity(x) {
    return x;
}
var epsilon = 1e-6;
function translateX(x) {
    return "translate(" + (x + 0.5) + ",0)";
}
function translateY(y) {
    return "translate(0," + (y + 0.5) + ")";
}
function center(scale) {
    var offset = Math.max(0, scale.bandwidth() - 1) / 2; // Adjust for 0.5px offset.
    if (scale.round()) {
        offset = Math.round(offset);
    }
    return function (d) {
        return (scale(d) + offset);
    };
}
var Orient = {
    'top': 1,
    'right': 2,
    'bottom': 3,
    'left': 4
};
function createAxis(config) {
    var orient = Orient[config.scaleGuide.scaleOrient];
    var scale = config.scale;
    var scaleGuide = config.scaleGuide;
    var labelGuide = scaleGuide.label;
    var _a = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["defaults"])(config, {
        tickSize: 6,
        tickPadding: 3,
        gridOnly: false
    }), ticksCount = _a.ticksCount, tickFormat = _a.tickFormat, tickSize = _a.tickSize, tickPadding = _a.tickPadding, gridOnly = _a.gridOnly;
    var isLinearScale = (scale.scaleType === 'linear');
    var isOrdinalScale = (scale.scaleType === 'ordinal' || scale.scaleType === 'period');
    var isHorizontal = (orient === Orient.top || orient === Orient.bottom);
    var ko = (orient === Orient.top || orient === Orient.left ? -1 : 1);
    var x = (isHorizontal ? 'x' : 'y');
    var y = (isHorizontal ? 'y' : 'x');
    var transform = (isHorizontal ? translateX : translateY);
    var kh = (isHorizontal ? 1 : -1);
    return (function (context) {
        var values;
        if (scale.ticks) {
            values = scale.ticks(ticksCount);
            // Prevent generating too much ticks
            var count = Math.floor(ticksCount * 1.25);
            while ((values.length > count) && (count > 2) && (values.length > 2)) {
                values = scale.ticks(--count);
            }
        }
        else {
            values = scale.domain();
        }
        if (scaleGuide.hideTicks) {
            values = gridOnly ? values.filter((function (d) { return d == 0; })) : [];
        }
        var format = (tickFormat == null ? (scale.tickFormat ? scale.tickFormat(ticksCount) : identity) : tickFormat);
        var spacing = (Math.max(tickSize, 0) + tickPadding);
        var range = scale.range();
        var range0 = (range[0] + 0.5);
        var range1 = (range[range.length - 1] + 0.5);
        var position = (scale.bandwidth ? center : identity)(scale);
        if (scaleGuide.facetAxis) {
            var oldPos_1 = position;
            position = function (d) { return oldPos_1(d) - scale.stepSize(d) / 2; };
        }
        // Todo: Determine if scale copy is necessary. Fails on ordinal scales with ratio.
        // const position = (scale.bandwidth ? center : identity)(scale.copy());
        var transition = (context.selection ? context : null);
        var selection = (transition ? transition.selection() : context);
        // Set default style
        selection
            .attr('fill', 'none')
            .attr('font-size', 10)
            .attr('font-family', 'sans-serif')
            .attr('text-anchor', orient === Orient.right ? 'start' : orient === Orient.left ? 'end' : 'middle');
        function drawDomain() {
            var domainLineData = scaleGuide.hideTicks || scaleGuide.hide ? [] : [null];
            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["take"])(selection.selectAll('.domain').data(domainLineData))
                .then(function (path) {
                if (transition) {
                    path.exit()
                        .transition(transition)
                        .attr('opacity', 0)
                        .remove();
                }
                return path.merge(path.enter().insert('path', '.tick')
                    .attr('class', 'domain')
                    .attr('opacity', 1)
                    .attr('stroke', '#000'));
            })
                .then(function (path) {
                return (transition ?
                    path.transition(transition) :
                    path);
            })
                .then(function (path) {
                path.attr('d', orient === Orient.left || orient == Orient.right ?
                    "M" + ko * tickSize + "," + range0 + "H0.5V" + range1 + "H" + ko * tickSize :
                    "M" + range0 + "," + ko * tickSize + "V0.5H" + range1 + "V" + ko * tickSize);
            });
        }
        function createTicks() {
            return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["take"])(selection
                .selectAll('.tick')
                .data(values, function (x) { return String(scale(x)); })
                .order())
                .then(function (tick) {
                var tickExit = tick.exit();
                var tickEnter = tick.enter().append('g').attr('class', 'tick');
                return {
                    tickExit: tickExit,
                    tickEnter: tickEnter,
                    tick: tick.merge(tickEnter)
                };
            })
                .then(function (result) {
                if (isLinearScale) {
                    var ticks_1 = scale.ticks();
                    var domain = scale.domain();
                    var last = (values.length - 1);
                    var shouldHighlightZero_1 = ((ticks_1.length > 1) &&
                        (domain[0] * domain[1] < 0) &&
                        (-domain[0] > (ticks_1[1] - ticks_1[0]) / 2) &&
                        (domain[1] > (ticks_1[last] - ticks_1[last - 1]) / 2));
                    result.tick
                        .classed('zero-tick', function (d) {
                        return ((d == 0) &&
                            shouldHighlightZero_1);
                    });
                }
                return result;
            })
                .result();
        }
        function updateTicks(ticks) {
            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["take"])(ticks)
                .then(function (_a) {
                var tickEnter = _a.tickEnter, tickExit = _a.tickExit, tick = _a.tick;
                if (!transition) {
                    return { tick: tick, tickExit: tickExit };
                }
                tickEnter
                    .attr('opacity', epsilon)
                    .attr('transform', function (d) {
                    var p = position(d);
                    return transform(p);
                });
                return {
                    tick: tick.transition(transition),
                    tickExit: tickExit.transition(transition)
                        .attr('opacity', epsilon)
                        .attr('transform', function (d) {
                        var p = position(d);
                        if (isFinite(p)) {
                            return transform(p);
                        }
                        return this.getAttribute('transform');
                    })
                };
            })
                .then(function (_a) {
                var tick = _a.tick, tickExit = _a.tickExit;
                tickExit.remove();
                tick
                    .attr('opacity', 1)
                    .attr('transform', function (d) { return transform(position(d)); });
            });
        }
        function drawLines(ticks) {
            var ly = (ko * tickSize);
            var lx = (isOrdinalScale ? (function (d) { return (kh * scale.stepSize(d) / 2); }) : null);
            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["take"])(ticks)
                .then(function (_a) {
                var tick = _a.tick, tickEnter = _a.tickEnter;
                var line = tick.select('line');
                var lineEnter = tickEnter.append('line')
                    .attr('stroke', '#000')
                    .attr(y + "2", ly);
                if (isOrdinalScale) {
                    lineEnter
                        .attr(x + "1", lx)
                        .attr(x + "2", lx);
                }
                return line.merge(lineEnter);
            })
                .then(function (line) {
                if (transition) {
                    return line.transition(transition);
                }
                return line;
            })
                .then(function (line) {
                line
                    .attr(y + "2", ly);
                if (isOrdinalScale) {
                    line
                        .attr(x + "1", lx)
                        .attr(x + "2", lx);
                }
            });
        }
        function drawExtraOrdinalLine() {
            if (!isOrdinalScale || !values || !values.length) {
                return;
            }
            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["take"])(selection.selectAll('.extra-tick-line').data([null]))
                .then(function (extra) {
                return extra.merge(extra.enter().insert('line', '.tick')
                    .attr('class', 'extra-tick-line')
                    .attr('stroke', '#000'));
            })
                .then(function (extra) {
                return (transition ?
                    extra.transition(transition) :
                    extra);
            })
                .then(function (extra) {
                extra
                    .attr(x + "1", range0)
                    .attr(x + "2", range0)
                    .attr(y + "1", 0)
                    .attr(y + "2", ko * tickSize);
            });
        }
        function drawText(ticks) {
            var textAnchor = scaleGuide.textAnchor;
            var ty = (ko * spacing);
            var tdy = (orient === Orient.top ? '0em' : orient === Orient.bottom ? '0.71em' : '0.32em');
            function fixTextPosForVerticalFacets(selection) {
                if (scaleGuide.facetAxis) {
                    return selection
                        .attr('dx', -config.position[0] + 18)
                        .attr('dy', 16);
                }
            }
            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["take"])(ticks)
                .then(function (_a) {
                var tick = _a.tick, tickEnter = _a.tickEnter;
                var text = tick.select('text');
                var textEnter = tickEnter.append('text')
                    .attr('fill', '#000')
                    .attr(y, ty)
                    .attr('dy', tdy);
                rotateText(textEnter);
                fixTextPosForVerticalFacets(textEnter);
                return text.merge(textEnter);
            })
                .then(function (text) {
                text
                    .text(format)
                    .attr('text-anchor', textAnchor);
                fixLongText(text);
                if (isHorizontal && (scale.scaleType === 'time')) {
                    fixHorizontalTextOverflow(text);
                }
                if (isHorizontal && (scale.scaleType === 'time' || scale.scaleType === 'linear')) {
                    fixOuterTicksOverflow(text);
                }
                return text;
            })
                .then(function (text) {
                if (transition) {
                    return text.transition(transition);
                }
                return text;
            })
                .then(function (text) {
                text
                    .attr(y, ty);
                rotateText(text);
                fixTextPosForVerticalFacets(text);
                if (isOrdinalScale && scaleGuide.avoidCollisions) {
                    if (transition) {
                        transition.on('end.fixTickTextCollision', function () { return fixTickTextCollision(ticks.tick); });
                    }
                    else {
                        fixTickTextCollision(ticks.tick);
                    }
                }
            });
        }
        function rotateText(text) {
            var angle = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["normalizeAngle"])(scaleGuide.rotate);
            // Todo: Rotate around rotation point (text anchor?)
            text
                .attr('transform', _utils_utils_draw__WEBPACK_IMPORTED_MODULE_4__["rotate"](angle));
            // Todo: Unpredictable behavior, need review
            if ((Math.abs(angle / 90) % 2) > 0) {
                var kRot = (angle < 180 ? 1 : -1);
                var k = isHorizontal ? 0.5 : -2;
                var sign = (orient === Orient.top || orient === Orient.left ? -1 : 1);
                var dy = (k * (orient === Orient.top || orient === Orient.bottom ?
                    (sign < 0 ? 0 : 0.71) :
                    0.32));
                text
                    .attr('x', 9 * kRot)
                    .attr('y', 0)
                    .attr('dx', isHorizontal ? null : dy + "em")
                    .attr('dy', dy + "em");
            }
        }
        function fixLongText(text) {
            var stepSize = function (d) { return Math.max(scale.stepSize(d), scaleGuide.tickFormatWordWrapLimit); };
            if (scaleGuide.tickFormatWordWrap) {
                Object(_utils_d3_decorators__WEBPACK_IMPORTED_MODULE_2__["wrapText"])(text, stepSize, scaleGuide.tickFormatWordWrapLines, scaleGuide.tickFontHeight, !isHorizontal);
            }
            else {
                Object(_utils_d3_decorators__WEBPACK_IMPORTED_MODULE_2__["cutText"])(text, stepSize);
            }
        }
        function fixHorizontalTextOverflow(text) {
            if (values.length < 2) {
                return;
            }
            var maxTextLn = 0;
            var iMaxTexts = -1;
            var nodes = text.nodes();
            nodes.forEach(function (textNode, i) {
                var textContent = (textNode.textContent || '');
                var textLength = textContent.length;
                if (textLength > maxTextLn) {
                    maxTextLn = textLength;
                    iMaxTexts = i;
                }
            });
            var tickStep = (position(values[1]) - position(values[0]));
            var hasOverflow = false;
            if (iMaxTexts >= 0) {
                var rect = nodes[iMaxTexts].getBoundingClientRect();
                hasOverflow = (tickStep - rect.width) < 8; // 2px from each side
            }
            selection.classed(_const__WEBPACK_IMPORTED_MODULE_3__["CSS_PREFIX"] + "time-axis-overflow", hasOverflow);
        }
        function fixOuterTicksOverflow(text) {
            if (values.length === 0) {
                return;
            }
            var value0 = values[0];
            var value1 = values[values.length - 1];
            var svg = selection.node();
            while (svg && svg.tagName !== 'svg') {
                svg = svg.parentNode;
            }
            var svgRect = svg.getBoundingClientRect();
            var tempLeft = selection
                .append('line')
                .attr('x1', position(value0))
                .attr('x2', position(value0))
                .attr('y1', 0)
                .attr('y2', 1);
            var tempRight = selection
                .append('line')
                .attr('x1', position(value1))
                .attr('x2', position(value1))
                .attr('y1', 0)
                .attr('y2', 1);
            var available = {
                left: (tempLeft.node().getBoundingClientRect().left - svgRect.left),
                right: (svgRect.right - tempRight.node().getBoundingClientRect().right)
            };
            tempLeft.remove();
            tempRight.remove();
            var fixText = function (node, dir, value) {
                var rect = node.getBoundingClientRect();
                var side = (dir > 0 ? 'right' : 'left');
                var tx = position(value);
                var limit = available[side];
                var diff = Math.ceil(rect.width / 2 - limit + 1); // 1px rounding fix
                node.setAttribute('dx', String(diff > 0 ? -dir * diff : 0));
            };
            var tick0 = text.filter(function (d) { return d === value0; }).node();
            var tick1 = text.filter(function (d) { return d === value1; }).node();
            text.attr('dx', null);
            fixText(tick0, -1, value0);
            fixText(tick1, 1, value1);
        }
        function fixTickTextCollision(tick) {
            Object(_utils_d3_decorators__WEBPACK_IMPORTED_MODULE_2__["avoidTickTextCollision"])(tick, isHorizontal);
        }
        function drawAxisLabel() {
            var guide = labelGuide;
            var labelTextNode = Object(_utils_utils_dom__WEBPACK_IMPORTED_MODULE_1__["selectOrAppend"])(selection, "text.label")
                .attr('class', Object(_utils_utils_dom__WEBPACK_IMPORTED_MODULE_1__["classes"])('label', guide.cssClass))
                .attr('transform', _utils_utils_draw__WEBPACK_IMPORTED_MODULE_4__["rotate"](guide.rotate))
                .attr('text-anchor', guide.textAnchor);
            Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["take"])(labelTextNode)
                .then(function (label) {
                if (transition) {
                    return label.transition(transition);
                }
                return label;
            })
                .then(function (label) {
                var ly = (kh * guide.padding);
                var size = Math.abs(range1 - range0);
                var lx = isHorizontal ? size : 0;
                label
                    .attr('x', lx)
                    .attr('y', ly)
                    .attr('text-anchor', 'end');
            });
            var delimiter = ' \u2192 ';
            var textParts = guide.text.split(delimiter);
            for (var i = textParts.length - 1; i > 0; i--) {
                textParts.splice(i, 0, delimiter);
            }
            var tspans = labelTextNode.selectAll('tspan')
                .data(textParts)
                .enter()
                .append('tspan')
                .attr('class', function (d, i) { return i % 2 ?
                ("label-token-delimiter label-token-delimiter-" + i) :
                ("label-token label-token-" + i); })
                .text(function (d) { return d; })
                .exit()
                .remove();
        }
        if (!gridOnly) {
            drawDomain();
        }
        var ticks = createTicks();
        updateTicks(ticks);
        if (!scaleGuide.facetAxis) {
            drawLines(ticks);
        }
        if (isOrdinalScale && gridOnly) {
            drawExtraOrdinalLine();
        }
        if (!gridOnly) {
            drawText(ticks);
            if (!labelGuide.hide) {
                drawAxisLabel();
            }
        }
    });
}
function cartesianAxis(config) {
    return createAxis(config);
}
function cartesianGrid(config) {
    return createAxis({
        scale: config.scale,
        scaleGuide: config.scaleGuide,
        ticksCount: config.ticksCount,
        tickSize: config.tickSize,
        gridOnly: true,
        position: config.position,
    });
}


/***/ }),

/***/ "./src/elements/coords.cartesian.js":
/*!******************************************!*\
  !*** ./src/elements/coords.cartesian.js ***!
  \******************************************/
/*! exports provided: Cartesian */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cartesian", function() { return Cartesian; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/elements/element.ts");
/* harmony import */ var _utils_utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils-dom */ "./src/utils/utils-dom.ts");
/* harmony import */ var _utils_utils_draw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils-draw */ "./src/utils/utils-draw.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../const */ "./src/const.js");
/* harmony import */ var _formatter_registry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../formatter-registry */ "./src/formatter-registry.ts");
/* harmony import */ var _coords_cartesian_axis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coords.cartesian.axis */ "./src/elements/coords.cartesian.axis.ts");
/* harmony import */ var _utils_d3_decorators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/d3-decorators */ "./src/utils/d3-decorators.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








var selectOrAppend = _utils_utils_dom__WEBPACK_IMPORTED_MODULE_1__["selectOrAppend"];
var calcTicks = function (distributionKoeff) {
    var limit = 20;
    var factor = ((distributionKoeff <= limit) ? 1 : 0.75);
    return Math.max(2, Math.round(distributionKoeff * factor));
};
var Cartesian = /** @class */ (function (_super) {
    __extends(Cartesian, _super);
    function Cartesian(config) {
        var _this = _super.call(this, config) || this;
        _this.config = config;
        _this.config.guide = _utils_utils__WEBPACK_IMPORTED_MODULE_3__["defaults"](_this.config.guide || {}, {
            showGridLines: 'xy',
            padding: { l: 50, r: 0, t: 0, b: 50 }
        });
        _this.config.guide.x = _this.config.guide.x || {};
        _this.config.guide.x = _utils_utils__WEBPACK_IMPORTED_MODULE_3__["defaults"](_this.config.guide.x, {
            cssClass: 'x axis',
            textAnchor: 'middle',
            padding: 10,
            hide: false,
            scaleOrient: 'bottom',
            rotate: 0,
            density: 20,
            label: {},
            tickFormatWordWrapLimit: 100
        });
        if (typeof _this.config.guide.x.label === 'string') {
            _this.config.guide.x.label = {
                text: _this.config.guide.x.label
            };
        }
        _this.config.guide.x.label = _utils_utils__WEBPACK_IMPORTED_MODULE_3__["defaults"](_this.config.guide.x.label, {
            text: 'X',
            rotate: 0,
            padding: 40,
            textAnchor: 'middle'
        });
        _this.config.guide.y = _this.config.guide.y || {};
        _this.config.guide.y = _utils_utils__WEBPACK_IMPORTED_MODULE_3__["defaults"](_this.config.guide.y, {
            cssClass: 'y axis',
            textAnchor: 'start',
            padding: 10,
            hide: false,
            scaleOrient: 'left',
            rotate: 0,
            density: 20,
            label: {},
            tickFormatWordWrapLimit: 100
        });
        if (typeof _this.config.guide.y.label === 'string') {
            _this.config.guide.y.label = {
                text: _this.config.guide.y.label
            };
        }
        _this.config.guide.y.label = _utils_utils__WEBPACK_IMPORTED_MODULE_3__["defaults"](_this.config.guide.y.label, {
            text: 'Y',
            rotate: -90,
            padding: 20,
            textAnchor: 'middle'
        });
        var unit = _this.config;
        var guide = unit.guide;
        if (guide.autoLayout === 'extract-axes') {
            var containerHeight = unit.options.containerHeight;
            var diff = (containerHeight - (unit.options.top + unit.options.height));
            guide.x.hide = (guide.x.hide || (Math.floor(diff) > 0));
            guide.y.hide = (guide.y.hide || (Math.floor(unit.options.left) > 0));
        }
        var options = _this.config.options;
        var padding = _this.config.guide.padding;
        _this.L = options.left + padding.l;
        _this.T = options.top + padding.t;
        _this.W = options.width - (padding.l + padding.r);
        _this.H = options.height - (padding.t + padding.b);
        return _this;
    }
    Cartesian.prototype.defineGrammarModel = function (fnCreateScale) {
        var w = this.W;
        var h = this.H;
        this.xScale = fnCreateScale('pos', this.config.x, [0, w]);
        this.yScale = fnCreateScale('pos', this.config.y, function (scaleConfig) { return ['ordinal', 'period'].indexOf(scaleConfig.type) >= 0 ? [0, h] : [h, 0]; });
        this.regScale('x', this.xScale)
            .regScale('y', this.yScale);
        return {
            scaleX: this.xScale,
            scaleY: this.yScale,
            xi: (function () { return w / 2; }),
            yi: (function () { return h / 2; }),
            sizeX: (function () { return w; }),
            sizeY: (function () { return h; })
        };
    };
    Cartesian.prototype.getGrammarRules = function () {
        return [
            function (prevModel) {
                var sx = prevModel.scaleX;
                var sy = prevModel.scaleY;
                return {
                    xi: (function (d) { return (!d ? prevModel.xi(d) : sx(d[sx.dim])); }),
                    yi: (function (d) { return (!d ? prevModel.yi(d) : sy(d[sy.dim])); }),
                    sizeX: (function (d) { return (!d ? prevModel.sizeX(d) : sx.stepSize(d[sx.dim])); }),
                    sizeY: (function (d) { return (!d ? prevModel.sizeY(d) : sy.stepSize(d[sy.dim])); })
                };
            }
        ];
    };
    Cartesian.prototype.createScreenModel = function (grammarModel) {
        return grammarModel;
    };
    Cartesian.prototype.allocateRect = function (k) {
        var _this = this;
        var model = this.screenModel;
        return {
            slot: (function (uid) { return _this.config.options.container.selectAll(".uid_" + uid); }),
            left: (model.xi(k) - model.sizeX(k) / 2),
            top: (model.yi(k) - model.sizeY(k) / 2),
            width: (model.sizeX(k)),
            height: (model.sizeY(k)),
            // TODO: Fix autoLayout.. redundant properties
            containerWidth: this.W,
            containerHeight: this.H
        };
    };
    Cartesian.prototype.drawFrames = function (frames) {
        var node = Object.assign({}, this.config);
        var options = node.options;
        var innerWidth = this.W;
        var innerHeight = this.H;
        node.x = this.xScale;
        node.y = this.yScale;
        node.x.scaleObj = this.xScale;
        node.y.scaleObj = this.yScale;
        node.x.guide = node.guide.x;
        node.y.guide = node.guide.y;
        node.x.guide.label.size = innerWidth;
        node.y.guide.label.size = innerHeight;
        // TODO: Should we modify transform of a container here or create own container?
        (options.container.attr('transform') ?
            Object(_utils_d3_decorators__WEBPACK_IMPORTED_MODULE_7__["d3_transition"])(options.container, this.config.guide.animationSpeed, 'cartesianContainerTransform') :
            options.container)
            .attr('transform', _utils_utils_draw__WEBPACK_IMPORTED_MODULE_2__["translate"](this.L, this.T));
        if (!node.x.guide.hide) {
            var orientX = node.x.guide.scaleOrient;
            var positionX = ((orientX === 'top') ?
                [0, 0 - node.guide.x.padding] :
                [0, innerHeight + node.guide.x.padding]);
            this._drawDimAxis(options.container, node.x, positionX, innerWidth);
        }
        else {
            this._removeDimAxis(options.container, node.x);
        }
        if (!node.y.guide.hide) {
            var orientY = node.y.guide.scaleOrient;
            var positionY = ((orientY === 'right') ?
                [innerWidth + node.guide.y.padding, 0] :
                [0 - node.guide.y.padding, 0]);
            this._drawDimAxis(options.container, node.y, positionY, innerHeight);
        }
        else {
            this._removeDimAxis(options.container, node.y);
        }
        var xdata = frames.reduce(function (memo, f) {
            return memo.concat((f.units || []).map(function (unit) { return unit.uid; }));
        }, []);
        var grid = this._drawGrid(options.container, node, innerWidth, innerHeight, options);
        var xcells = Object(_utils_d3_decorators__WEBPACK_IMPORTED_MODULE_7__["d3_selectAllImmediate"])(grid, '.cell')
            .data(xdata, function (x) { return x; });
        xcells
            .enter()
            .append('g')
            .attr('class', function (d) { return _const__WEBPACK_IMPORTED_MODULE_4__["CSS_PREFIX"] + "cell cell uid_" + d; })
            .merge(xcells)
            .classed('tau-active', true);
        Object(_utils_d3_decorators__WEBPACK_IMPORTED_MODULE_7__["d3_transition"])(xcells, this.config.guide.animationSpeed)
            .attr('opacity', 1);
        Object(_utils_d3_decorators__WEBPACK_IMPORTED_MODULE_7__["d3_transition"])(xcells.exit().classed('tau-active', false), this.config.guide.animationSpeed)
            .attr('opacity', 1e-6)
            .remove();
    };
    Cartesian.prototype._drawDimAxis = function (container, scale, position, size) {
        var formatter = _formatter_registry__WEBPACK_IMPORTED_MODULE_5__["FormatterRegistry"].get(scale.guide.tickFormat, scale.guide.tickFormatNullAlias);
        var axisScale = Object(_coords_cartesian_axis__WEBPACK_IMPORTED_MODULE_6__["cartesianAxis"])({
            scale: scale.scaleObj,
            scaleGuide: scale.guide,
            ticksCount: (formatter ? calcTicks(size / scale.guide.density) : null),
            tickFormat: (formatter || null),
            position: position,
        });
        var animationSpeed = this.config.guide.animationSpeed;
        selectOrAppend(container, this._getAxisSelector(scale))
            .classed('tau-active', true)
            .classed(scale.guide.cssClass, true)
            .call(function (axis) {
            var transAxis = Object(_utils_d3_decorators__WEBPACK_IMPORTED_MODULE_7__["d3_transition"])(axis, animationSpeed, 'axisTransition');
            var prevAxisTranslate = axis.attr('transform');
            var nextAxisTranslate = _utils_utils_draw__WEBPACK_IMPORTED_MODULE_2__["translate"].apply(_utils_utils_draw__WEBPACK_IMPORTED_MODULE_2__, position);
            if (nextAxisTranslate !== prevAxisTranslate) {
                (prevAxisTranslate ? transAxis : axis).attr('transform', _utils_utils_draw__WEBPACK_IMPORTED_MODULE_2__["translate"].apply(_utils_utils_draw__WEBPACK_IMPORTED_MODULE_2__, position));
            }
            transAxis.call(axisScale);
            transAxis.attr('opacity', 1);
        });
    };
    Cartesian.prototype._removeDimAxis = function (container, scale) {
        var axis = Object(_utils_d3_decorators__WEBPACK_IMPORTED_MODULE_7__["d3_selectAllImmediate"])(container, this._getAxisSelector(scale))
            .classed('tau-active', false);
        Object(_utils_d3_decorators__WEBPACK_IMPORTED_MODULE_7__["d3_transition"])(axis, this.config.guide.animationSpeed, 'axisTransition')
            .attr('opacity', 1e-6)
            .remove();
    };
    Cartesian.prototype._getAxisSelector = function (scale) {
        var isHorizontal = (_utils_utils_draw__WEBPACK_IMPORTED_MODULE_2__["getOrientation"](scale.guide.scaleOrient) === 'h');
        return "g." + (isHorizontal ? 'x' : 'y') + ".axis";
    };
    Cartesian.prototype._drawGrid = function (container, node, width, height) {
        var _this = this;
        var grid = selectOrAppend(container, "g.grid")
            .attr('transform', _utils_utils_draw__WEBPACK_IMPORTED_MODULE_2__["translate"](0, 0))
            .call(function (selection) {
            var grid = selection;
            var animationSpeed = _this.config.guide.animationSpeed;
            var linesOptions = (node.guide.showGridLines || '').toLowerCase();
            if (linesOptions.length > 0) {
                var gridLines = selectOrAppend(grid, 'g.grid-lines');
                if ((linesOptions.indexOf('x') > -1)) {
                    var xScale = node.x;
                    var formatter = _formatter_registry__WEBPACK_IMPORTED_MODULE_5__["FormatterRegistry"].get(xScale.guide.tickFormat);
                    var xGridAxis = Object(_coords_cartesian_axis__WEBPACK_IMPORTED_MODULE_6__["cartesianGrid"])({
                        scale: xScale.scaleObj,
                        scaleGuide: xScale.guide,
                        tickSize: height,
                        ticksCount: (formatter ? calcTicks(width / xScale.guide.density) : null)
                    });
                    var xGridLines = selectOrAppend(gridLines, 'g.grid-lines-x');
                    var xGridLinesTrans = Object(_utils_d3_decorators__WEBPACK_IMPORTED_MODULE_7__["d3_transition"])(xGridLines, animationSpeed)
                        .call(xGridAxis);
                }
                if ((linesOptions.indexOf('y') > -1)) {
                    var yScale = node.y;
                    var formatter = _formatter_registry__WEBPACK_IMPORTED_MODULE_5__["FormatterRegistry"].get(yScale.guide.tickFormat);
                    var yGridAxis = Object(_coords_cartesian_axis__WEBPACK_IMPORTED_MODULE_6__["cartesianGrid"])({
                        scale: yScale.scaleObj,
                        scaleGuide: yScale.guide,
                        tickSize: -width,
                        ticksCount: (formatter ? calcTicks(height / yScale.guide.density) : null)
                    });
                    var yGridLines = selectOrAppend(gridLines, 'g.grid-lines-y');
                    var yGridLinesTrans = Object(_utils_d3_decorators__WEBPACK_IMPORTED_MODULE_7__["d3_transition"])(yGridLines, animationSpeed)
                        .call(yGridAxis);
                }
            }
        });
        return grid;
    };
    return Cartesian;
}(_element__WEBPACK_IMPORTED_MODULE_0__["Element"]));



/***/ }),

/***/ "./src/elements/coords.geomap.js":
/*!***************************************!*\
  !*** ./src/elements/coords.geomap.js ***!
  \***************************************/
/*! exports provided: GeoMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoMap", function() { return GeoMap; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "d3-array");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-geo */ "d3-geo");
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3_geo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-request */ "d3-request");
/* harmony import */ var d3_request__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3_request__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-selection */ "d3-selection");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(d3_selection__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var topojson_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! topojson-client */ "topojson-client");
/* harmony import */ var topojson_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(topojson_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_d3_labeler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/d3-labeler */ "./src/utils/d3-labeler.js");
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./element */ "./src/elements/element.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};




var d3 = __assign({}, d3_array__WEBPACK_IMPORTED_MODULE_0__, d3_geo__WEBPACK_IMPORTED_MODULE_1__, d3_request__WEBPACK_IMPORTED_MODULE_2__, d3_selection__WEBPACK_IMPORTED_MODULE_3__);




var avgCharSize = 5.5;
var iterationsCount = 10;
var pointOpacity = 0.5;
var hierarchy = [
    'land',
    'continents',
    'georegions',
    'countries',
    'regions',
    'subunits',
    'states',
    'counties'
];
var GeoMap = /** @class */ (function (_super) {
    __extends(GeoMap, _super);
    function GeoMap(config) {
        var _this = _super.call(this, config) || this;
        _this.config = config;
        _this.config.guide = _utils_utils__WEBPACK_IMPORTED_MODULE_4__["defaults"](_this.config.guide || {}, {
            defaultFill: 'rgba(128,128,128,0.25)',
            padding: { l: 0, r: 0, t: 0, b: 0 },
            showNames: true
        });
        _this.contourToFill = null;
        _this.on('highlight-area', function (sender, e) { return _this._highlightArea(e); });
        _this.on('highlight-point', function (sender, e) { return _this._highlightPoint(e); });
        _this.on('highlight', function (sender, e) { return _this._highlightPoint(e); });
        return _this;
    }
    GeoMap.prototype.defineGrammarModel = function (fnCreateScale) {
        var node = this.config;
        var options = node.options;
        var padding = node.guide.padding;
        var innerWidth = options.width - (padding.l + padding.r);
        var innerHeight = options.height - (padding.t + padding.b);
        // y - latitude
        this.latScale = fnCreateScale('pos', node.latitude, [0, innerHeight]);
        // x - longitude
        this.lonScale = fnCreateScale('pos', node.longitude, [innerWidth, 0]);
        // size
        this.sizeScale = fnCreateScale('size', node.size);
        // color
        this.colorScale = fnCreateScale('color', node.color);
        // code
        this.codeScale = fnCreateScale('value', node.code);
        // fill
        this.fillScale = fnCreateScale('fill', node.fill);
        this.W = innerWidth;
        this.H = innerHeight;
        this.regScale('latitude', this.latScale)
            .regScale('longitude', this.lonScale)
            .regScale('size', this.sizeScale)
            .regScale('color', this.colorScale)
            .regScale('code', this.codeScale)
            .regScale('fill', this.fillScale);
        return {};
    };
    GeoMap.prototype.drawFrames = function (frames) {
        var _this = this;
        var guide = this.config.guide;
        if (typeof (guide.sourcemap) === 'string') {
            d3.json(guide.sourcemap, function (e, topoJSONData) {
                if (e) {
                    throw e;
                }
                _this._drawMap(frames, topoJSONData);
            });
        }
        else {
            this._drawMap(frames, guide.sourcemap);
        }
    };
    GeoMap.prototype._calcLabels = function (topoJSONData, reverseContours, path) {
        var innerW = this.W;
        var innerH = this.H;
        var labelsHashRef = {};
        reverseContours.forEach(function (c) {
            var contourFeatures = topojson_client__WEBPACK_IMPORTED_MODULE_5__["feature"](topoJSONData, topoJSONData.objects[c]).features || [];
            var labels = contourFeatures
                .map(function (d) {
                var info = (d.properties || {});
                var center = path.centroid(d);
                var bounds = path.bounds(d);
                var sx = center[0];
                var sy = center[1];
                var br = bounds[1][0];
                var bl = bounds[0][0];
                var size = br - bl;
                var name = info.name || '';
                var abbr = info.abbr || name;
                var isAbbr = (size < (name.length * avgCharSize));
                var text = isAbbr ? abbr : name;
                var isRef = (size < (2.5 * avgCharSize));
                var r = (isRef ? (innerW - sx - 3 * avgCharSize) : 0);
                return {
                    id: c + "-" + d.id,
                    sx: sx,
                    sy: sy,
                    x: sx + r,
                    y: sy,
                    width: text.length * avgCharSize,
                    height: 10,
                    name: text,
                    r: r,
                    isRef: isRef
                };
            })
                .filter(function (d) { return !Number.isNaN(d.x) && !Number.isNaN(d.y); });
            var anchors = labels.map(function (d) { return ({ x: d.sx, y: d.sy, r: d.r }); });
            Object(_utils_d3_labeler__WEBPACK_IMPORTED_MODULE_6__["d3Labeler"])()
                .label(labels)
                .anchor(anchors)
                .width(innerW)
                .height(innerH)
                .start(iterationsCount);
            labels
                .filter(function (item) { return !item.isRef; })
                .map(function (item) {
                item.x = item.sx;
                item.y = item.sy;
                return item;
            })
                .reduce(function (memo, item) {
                memo[item.id] = item;
                return memo;
            }, labelsHashRef);
            var references = labels.filter(function (item) { return item.isRef; });
            if (references.length < 6) {
                references.reduce(function (memo, item) {
                    memo[item.id] = item;
                    return memo;
                }, labelsHashRef);
            }
        });
        return labelsHashRef;
    };
    GeoMap.prototype._drawMap = function (frames, topoJSONData) {
        var _this = this;
        var self = this;
        var guide = this.config.guide;
        var options = this.config.options;
        var node = this.config.options.container;
        var latScale = this.latScale;
        var lonScale = this.lonScale;
        var sizeScale = this.sizeScale;
        var colorScale = this.colorScale;
        var codeScale = this.codeScale;
        var fillScale = this.fillScale;
        var innerW = this.W;
        var innerH = this.H;
        var contours = hierarchy.filter(function (h) { return (topoJSONData.objects || {}).hasOwnProperty(h); });
        if (contours.length === 0) {
            throw new Error('Invalid map: should contain some contours');
        }
        var contourToFill;
        if (!fillScale.dim) {
            contourToFill = contours[contours.length - 1];
        }
        else if (codeScale.georole) {
            if (contours.indexOf(codeScale.georole) === -1) {
                console.log("There is no contour for georole \"" + codeScale.georole + "\""); // tslint:disable-line
                console.log("Available contours are: " + contours.join(' | ')); // tslint:disable-line
                throw new Error("Invalid [georole]");
            }
            contourToFill = codeScale.georole;
        }
        else {
            console.log('Specify [georole] for code scale'); // tslint:disable-line
            throw new Error('[georole] is missing');
        }
        this.contourToFill = contourToFill;
        var center;
        if (latScale.dim && lonScale.dim) {
            var lats = d3.extent(latScale.domain());
            var lons = d3.extent(lonScale.domain());
            center = [
                ((lons[1] + lons[0]) / 2),
                ((lats[1] + lats[0]) / 2)
            ];
        }
        var d3Projection = this._createProjection(topoJSONData, contours[0], center);
        var path = d3.geoPath().projection(d3Projection);
        var xmap = node
            .selectAll('.map-container')
            .data(["" + innerW + innerH + center + contours.join('-')], function (x) { return x; });
        xmap.exit()
            .remove();
        var merged = xmap.enter()
            .append('g')
            .call(function (selection) {
            var node = selection;
            node.attr('class', 'map-container');
            var labelsHash = {};
            var reverseContours = contours.reduceRight(function (m, t) { return (m.concat(t)); }, []);
            if (guide.showNames) {
                labelsHash = self._calcLabels(topoJSONData, reverseContours, path);
            }
            reverseContours.forEach(function (c, i) {
                var getInfo = function (d) { return labelsHash[c + "-" + d.id]; };
                node.selectAll(".map-contour-" + c)
                    .data(topojson_client__WEBPACK_IMPORTED_MODULE_5__["feature"](topoJSONData, topoJSONData.objects[c]).features || [])
                    .enter()
                    .append('g')
                    .call(function (selection) {
                    var cont = selection;
                    cont.attr('class', "map-contour-" + c + " map-contour-level map-contour-level-" + i)
                        .attr('fill', 'none');
                    cont.append('title')
                        .text(function (d) { return (d.properties || {}).name; });
                    cont.append('path')
                        .attr('d', path);
                    cont.append('text')
                        .attr('class', "place-label-" + c)
                        .attr('transform', function (d) {
                        var i = getInfo(d);
                        return i ? "translate(" + [i.x, i.y] + ")" : '';
                    })
                        .text(function (d) {
                        var i = getInfo(d);
                        return i ? i.name : '';
                    });
                    cont.append('line')
                        .attr('class', "place-label-link-" + c)
                        .attr('stroke', 'gray')
                        .attr('stroke-width', 0.25)
                        .attr('x1', function (d) {
                        var i = getInfo(d);
                        return (i && i.isRef) ? i.sx : 0;
                    })
                        .attr('y1', function (d) {
                        var i = getInfo(d);
                        return (i && i.isRef) ? i.sy : 0;
                    })
                        .attr('x2', function (d) {
                        var i = getInfo(d);
                        return (i && i.isRef) ? (i.x - i.name.length * 0.6 * avgCharSize) : 0;
                    })
                        .attr('y2', function (d) {
                        var i = getInfo(d);
                        return (i && i.isRef) ? (i.y - 3.5) : 0;
                    });
                });
            });
            if (topoJSONData.objects.hasOwnProperty('places')) {
                var placesFeature = topojson_client__WEBPACK_IMPORTED_MODULE_5__["feature"](topoJSONData, topoJSONData.objects.places);
                var labels = placesFeature
                    .features
                    .map(function (d) {
                    var coords = d3Projection(d.geometry.coordinates);
                    return {
                        x: coords[0] + 3.5,
                        y: coords[1] + 3.5,
                        width: d.properties.name.length * avgCharSize,
                        height: 12,
                        name: d.properties.name
                    };
                });
                var anchors = placesFeature
                    .features
                    .map(function (d) {
                    var coords = d3Projection(d.geometry.coordinates);
                    return {
                        x: coords[0],
                        y: coords[1],
                        r: 2.5
                    };
                });
                Object(_utils_d3_labeler__WEBPACK_IMPORTED_MODULE_6__["d3Labeler"])()
                    .label(labels)
                    .anchor(anchors)
                    .width(innerW)
                    .height(innerH)
                    .start(100);
                node.selectAll('.place')
                    .data(anchors)
                    .enter()
                    .append('circle')
                    .attr('class', 'place')
                    .attr('transform', function (d) { return "translate(" + d.x + "," + d.y + ")"; })
                    .attr('r', function (d) { return d.r + "px"; });
                node.selectAll('.place-label')
                    .data(labels)
                    .enter()
                    .append('text')
                    .attr('class', 'place-label')
                    .attr('transform', function (d) { return "translate(" + d.x + "," + d.y + ")"; })
                    .text(function (d) { return d.name; });
            }
        })
            .merge(xmap);
        this.groupByCode = frames.reduce(function (groups, f) {
            return f.part().reduce(function (memo, rec) {
                var key = (rec[codeScale.dim] || '').toLowerCase();
                memo[key] = rec;
                return memo;
            }, groups);
        }, {});
        var toData = this._resolveFeature.bind(this);
        merged.selectAll(".map-contour-" + contourToFill)
            .data(topojson_client__WEBPACK_IMPORTED_MODULE_5__["feature"](topoJSONData, topoJSONData.objects[contourToFill]).features)
            .call(function (selection) {
            selection.classed('map-contour', true)
                .attr('fill', function (d) {
                var row = toData(d);
                return (row === null) ?
                    guide.defaultFill :
                    fillScale(row[fillScale.dim]);
            });
        })
            .on('mouseover', function (d) { return _this.fire('area-mouseover', { data: toData(d), event: d3_selection__WEBPACK_IMPORTED_MODULE_3__["event"] }); })
            .on('mouseout', function (d) { return _this.fire('area-mouseout', { data: toData(d), event: d3_selection__WEBPACK_IMPORTED_MODULE_3__["event"] }); })
            .on('click', function (d) { return _this.fire('area-click', { data: toData(d), event: d3_selection__WEBPACK_IMPORTED_MODULE_3__["event"] }); });
        if (!latScale.dim || !lonScale.dim) {
            return [];
        }
        var update = function (selection) {
            return selection
                .attr('r', function (d) { return sizeScale(d[sizeScale.dim]); })
                .attr('transform', function (_a) {
                var d = _a.data;
                return "translate(" + d3Projection([d[lonScale.dim], d[latScale.dim]]) + ")";
            })
                .attr('class', function (_a) {
                var d = _a.data;
                return colorScale(d[colorScale.dim]);
            })
                .attr('opacity', pointOpacity)
                .on('mouseover', function (_a) {
                var d = _a.data;
                return self.fire('point-mouseover', { data: d, event: d3_selection__WEBPACK_IMPORTED_MODULE_3__["event"] });
            })
                .on('mouseout', function (_a) {
                var d = _a.data;
                return self.fire('point-mouseout', { data: d, event: d3_selection__WEBPACK_IMPORTED_MODULE_3__["event"] });
            })
                .on('click', function (_a) {
                var d = _a.data;
                return self.fire('point-click', { data: d, event: d3_selection__WEBPACK_IMPORTED_MODULE_3__["event"] });
            });
        };
        var updateGroups = function (selection) {
            selection.attr('class', function (f) { return "frame frame-" + f.hash; })
                .call(function (selection) {
                var points = selection
                    .selectAll('circle')
                    .data(function (frame) { return frame.data.map(function (item) { return ({ data: item, uid: options.uid }); }); });
                points
                    .exit()
                    .remove();
                points
                    .call(update);
                points
                    .enter()
                    .append('circle')
                    .call(update);
            });
        };
        var mapper = function (f) { return ({ tags: f.key || {}, hash: f.hash(), data: f.part() }); };
        var frameGroups = merged
            .selectAll('.frame')
            .data(frames.map(mapper), function (f) { return f.hash; });
        frameGroups
            .exit()
            .remove();
        frameGroups
            .enter()
            .append('g')
            .merge(frameGroups)
            .call(updateGroups);
        return [];
    };
    GeoMap.prototype._resolveFeature = function (d) {
        var groupByCode = this.groupByCode;
        var prop = d.properties;
        var codes = ['c1', 'c2', 'c3', 'abbr', 'name'].filter(function (c) {
            return prop.hasOwnProperty(c) &&
                prop[c] &&
                groupByCode.hasOwnProperty(prop[c].toLowerCase());
        });
        var value;
        if (codes.length === 0) {
            // doesn't match
            value = null;
        }
        else if (codes.length > 0) {
            var k = prop[codes[0]].toLowerCase();
            value = groupByCode[k];
        }
        return value;
    };
    GeoMap.prototype._highlightArea = function (filter) {
        var _this = this;
        var node = this.config.options.container;
        var contourToFill = this.contourToFill;
        node.selectAll(".map-contour-" + contourToFill)
            .classed('map-contour-highlighted', function (d) { return filter(_this._resolveFeature(d)); });
    };
    GeoMap.prototype._highlightPoint = function (filter) {
        this.config
            .options
            .container
            .selectAll('circle')
            .classed('map-point-highlighted', function (_a) {
            var d = _a.data;
            return filter(d);
        })
            .attr('opacity', function (_a) {
            var d = _a.data;
            return (filter(d) ? pointOpacity : 0.1);
        });
    };
    GeoMap.prototype._createProjection = function (topoJSONData, topContour, center) {
        // The map's scale out is based on the solution:
        // http://stackoverflow.com/questions/14492284/center-a-map-in-d3-given-a-geojson-object
        var width = this.W;
        var height = this.H;
        var guide = this.config.guide;
        var scale = 100;
        var offset = [width / 2, height / 2];
        var mapCenter = center || topoJSONData.center;
        var mapProjection = guide.projection || topoJSONData.projection || 'mercator';
        var d3Projection = this._createD3Projection(mapProjection, mapCenter, scale, offset);
        var path = d3.geoPath().projection(d3Projection);
        // using the path determine the bounds of the current map and use
        // these to determine better values for the scale and translation
        var bounds = path.bounds(topojson_client__WEBPACK_IMPORTED_MODULE_5__["feature"](topoJSONData, topoJSONData.objects[topContour]));
        var hscale = scale * width / (bounds[1][0] - bounds[0][0]);
        var vscale = scale * height / (bounds[1][1] - bounds[0][1]);
        scale = (hscale < vscale) ? hscale : vscale;
        offset = [
            width - (bounds[0][0] + bounds[1][0]) / 2,
            height - (bounds[0][1] + bounds[1][1]) / 2
        ];
        // new projection
        return this._createD3Projection(mapProjection, mapCenter, scale, offset);
    };
    GeoMap.prototype._createD3Projection = function (projection, center, scale, translate) {
        // TODO: Proper projection mapping.
        var proj = ('geo' + projection.substring(0, 1).toUpperCase() + projection.substring(1));
        var d3ProjectionMethod = d3[proj];
        if (!d3ProjectionMethod) {
            /*tslint:disable */
            console.log("Unknown projection \"" + projection + "\"");
            console.log("See available projection types here: https://github.com/mbostock/d3/wiki/Geo-Projections");
            /*tslint:enable */
            throw new Error("Invalid map: unknown projection \"" + projection + "\"");
        }
        var d3Projection = d3ProjectionMethod();
        var steps = [
            { method: 'scale', args: scale },
            { method: 'center', args: center },
            { method: 'translate', args: translate }
        ].filter(function (step) { return step.args; });
        // because the Albers USA projection does not support rotation or centering
        return steps.reduce(function (proj, step) {
            if (proj[step.method]) {
                proj = proj[step.method](step.args);
            }
            return proj;
        }, d3Projection);
    };
    return GeoMap;
}(_element__WEBPACK_IMPORTED_MODULE_7__["Element"]));



/***/ }),

/***/ "./src/elements/coords.parallel.js":
/*!*****************************************!*\
  !*** ./src/elements/coords.parallel.js ***!
  \*****************************************/
/*! exports provided: Parallel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parallel", function() { return Parallel; });
/* harmony import */ var d3_axis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-axis */ "d3-axis");
/* harmony import */ var d3_axis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3_axis__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3_brush__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-brush */ "d3-brush");
/* harmony import */ var d3_brush__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3_brush__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-selection */ "d3-selection");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3_selection__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./element */ "./src/elements/element.ts");
/* harmony import */ var _utils_utils_draw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils-draw */ "./src/utils/utils-draw.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../const */ "./src/const.js");
/* harmony import */ var _formatter_registry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../formatter-registry */ "./src/formatter-registry.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



var d3 = __assign({}, d3_axis__WEBPACK_IMPORTED_MODULE_0__, d3_brush__WEBPACK_IMPORTED_MODULE_1__, d3_selection__WEBPACK_IMPORTED_MODULE_2__);





var Parallel = /** @class */ (function (_super) {
    __extends(Parallel, _super);
    function Parallel(config) {
        var _this = _super.call(this, config) || this;
        _this.config = config;
        _this.config.guide = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["defaults"](_this.config.guide || {}, {
            padding: { l: 50, r: 50, t: 50, b: 50 },
            enableBrushing: false
        });
        _this.columnsBrushes = {};
        _this.columnsSelections = {};
        _this.on('force-brush', function (sender, e) { return _this._forceBrushing(e); });
        var options = _this.config.options;
        var padding = _this.config.guide.padding;
        _this.L = options.left + padding.l;
        _this.T = options.top + padding.t;
        _this.W = options.width - (padding.l + padding.r);
        _this.H = options.height - (padding.t + padding.b);
        return _this;
    }
    Parallel.prototype.defineGrammarModel = function (fnCreateScale) {
        var cfg = this.config;
        var innerWidth = this.W;
        var innerHeight = this.H;
        this.columnsScalesMap = cfg.columns.reduce(function (memo, xi) {
            memo[xi] = fnCreateScale('pos', xi, [0, innerHeight]);
            return memo;
        }, {});
        var step = innerWidth / (cfg.columns.length - 1);
        var colsMap = cfg.columns.reduce(function (memo, p, i) {
            memo[p] = (i * step);
            return memo;
        }, {});
        this.xBase = (function (p) { return colsMap[p]; });
        this.regScale('columns', this.columnsScalesMap);
        return {};
    };
    Parallel.prototype.allocateRect = function () {
        var _this = this;
        return {
            slot: (function (uid) { return _this.config.options.container.selectAll(".uid_" + uid); }),
            left: 0,
            top: 0,
            width: this.W,
            height: this.H,
            // TODO: Fix autoLayout.. redundant properties
            containerWidth: this.W,
            containerHeight: this.H
        };
    };
    Parallel.prototype.drawFrames = function (frames) {
        var _this = this;
        var cfg = Object.assign({}, this.config);
        var options = cfg.options;
        var updateCellLayers = function (cellId, cell, frame) {
            var layers = cell
                .selectAll(".layer_" + cellId)
                .data(frame.units, function (unit) { return unit.uid; });
            layers
                .exit()
                .remove();
            layers
                .enter()
                .append('g')
                .attr('class', function (unit) { return "layer_" + cellId + " uid_" + unit.uid; });
        };
        var cellFrameIterator = function (cellFrame) {
            updateCellLayers(options.frameId, d3.select(this), cellFrame);
        };
        var grid = this._fnDrawGrid(options.container, cfg, options.frameId, Object
            .keys(this.columnsScalesMap)
            .reduce(function (memo, k) { return memo.concat([_this.columnsScalesMap[k].getHash()]); }, [])
            .join('_'));
        var frms = grid
            .selectAll(".parent-frame-" + options.frameId)
            .data(frames, function (f) { return f.hash(); });
        frms.exit()
            .remove();
        frms.enter()
            .append('g')
            .attr('class', function (d) { return (_const__WEBPACK_IMPORTED_MODULE_6__["CSS_PREFIX"] + "cell cell parent-frame-" + options.frameId + " frame-" + d.hash()); })
            .merge(frms)
            .each(cellFrameIterator);
        var cols = this._fnDrawColumns(grid, cfg);
        if (cfg.guide.enableBrushing) {
            this._enableBrushing(cols);
        }
    };
    Parallel.prototype._fnDrawGrid = function (container, config, frameId, uniqueHash) {
        var grid = container
            .selectAll(".grid_" + frameId)
            .data([uniqueHash], function (x) { return x; });
        grid.exit()
            .remove();
        var merged = grid.enter()
            .append('g')
            .attr('class', "grid grid_" + frameId)
            .attr('transform', _utils_utils_draw__WEBPACK_IMPORTED_MODULE_4__["translate"](this.L, this.T))
            .merge(grid);
        return merged;
    };
    Parallel.prototype._fnDrawColumns = function (grid, config) {
        var colsGuide = config.guide.columns || {};
        var xBase = this.xBase;
        var columnsScalesMap = this.columnsScalesMap;
        var d3Axis = d3.axisLeft();
        var cols = grid
            .selectAll('.column')
            .data(config.columns, function (x) { return x; });
        cols.exit()
            .remove();
        var merged = cols.enter()
            .append('g')
            .attr('class', 'column')
            .attr('transform', function (d) { return _utils_utils_draw__WEBPACK_IMPORTED_MODULE_4__["translate"](xBase(d), 0); })
            .call(function (selection) {
            selection.append('g')
                .attr('class', 'y axis')
                .each(function (d) {
                var propName = columnsScalesMap[d].dim;
                var axisScale = d3Axis.scale(columnsScalesMap[d]);
                var columnGuide = colsGuide[propName] || {};
                var formatter = _formatter_registry__WEBPACK_IMPORTED_MODULE_7__["FormatterRegistry"].get(columnGuide.tickFormat, columnGuide.tickFormatNullAlias);
                if (formatter !== null) {
                    axisScale.tickFormat(formatter);
                }
                d3.select(this).call(axisScale);
            })
                .append('text')
                .attr('class', 'label')
                .attr('text-anchor', 'middle')
                .attr('y', -9)
                .text(function (d) { return ((colsGuide[d] || {}).label || {}).text || columnsScalesMap[d].dim; });
        })
            .merge(cols);
        return merged;
    };
    Parallel.prototype._enableBrushing = function (cols) {
        var _this = this;
        var brushWidth = 16;
        var columnsSelections = this.columnsSelections;
        var columnsScalesMap = this.columnsScalesMap;
        var columnsBrushes = this.columnsBrushes;
        var fireBrushEvents = true;
        var onBrushStartEventHandler = function (e) { return e; };
        var onBrushEndEventHandler = function (e) { return e; };
        var onBrushEventHandler = function () {
            var targetKey = Object.keys(columnsBrushes)
                .find(function (k) { return columnsBrushes[k] === d3_selection__WEBPACK_IMPORTED_MODULE_2__["event"].target; });
            columnsSelections[targetKey] = d3_selection__WEBPACK_IMPORTED_MODULE_2__["event"].selection;
            if (!fireBrushEvents) {
                return;
            }
            var eventBrush = Object
                .keys(columnsBrushes)
                .filter(function (k) { return columnsSelections[k]; })
                .map(function (k) {
                var rng = [];
                if (columnsScalesMap[k].discrete) {
                    var ext_1 = columnsSelections[k];
                    rng = columnsScalesMap[k]
                        .domain()
                        .filter(function (val) {
                        var pos = columnsScalesMap[k](val);
                        return (ext_1[0] <= pos) && (ext_1[1] >= pos);
                    });
                }
                else {
                    var ext = columnsSelections[k].map(columnsScalesMap[k].invert);
                    rng = [ext[0], ext[1]];
                }
                return {
                    dim: columnsScalesMap[k].dim,
                    func: columnsScalesMap[k].discrete ? 'inset' : 'between',
                    args: rng
                };
            });
            _this.fire('brush', eventBrush);
        };
        cols.selectAll('.brush')
            .remove();
        cols.append('g')
            .attr('class', 'brush')
            .each(function (d) {
            var range = columnsScalesMap[d].range();
            columnsBrushes[d] = d3
                .brushY()
                .extent([[0, range[0]], [brushWidth, range[1]]])
                .on('start', onBrushStartEventHandler)
                .on('brush', onBrushEventHandler)
                .on('end', onBrushEndEventHandler);
            d3.select(this)
                .classed("brush-" + _utils_utils__WEBPACK_IMPORTED_MODULE_5__["generateHash"](d), true)
                .call(columnsBrushes[d]);
            fireBrushEvents = false;
            columnsBrushes[d].move(d3.select(this), range);
            fireBrushEvents = true;
        })
            .selectAll('rect')
            .attr('transform', "translate(" + (brushWidth / 2) * -1 + ",0)")
            .attr('width', brushWidth);
        return cols;
    };
    Parallel.prototype._forceBrushing = function (colsBrushSettings) {
        if (colsBrushSettings === void 0) { colsBrushSettings = {}; }
        var columnsBrushes = this.columnsBrushes;
        var columnsScalesMap = this.columnsScalesMap;
        var columnsSelections = this.columnsSelections;
        Object
            .keys(colsBrushSettings)
            .filter(function (k) { return columnsBrushes[k] && columnsScalesMap[k] && colsBrushSettings[k]; })
            .forEach(function (k) {
            var brushExt = colsBrushSettings[k];
            var ext = [];
            if (columnsScalesMap[k].discrete) {
                var positions = brushExt.map(columnsScalesMap[k]).filter(function (x) { return (x >= 0); });
                var stepSize = columnsScalesMap[k].stepSize() / 2;
                ext = [Math.min.apply(Math, positions) - stepSize, Math.max.apply(Math, positions) + stepSize];
            }
            else {
                ext = [brushExt[0], brushExt[1]];
            }
            var hashK = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["generateHash"](k);
            columnsBrushes[k](d3.select(".brush-" + hashK));
            columnsBrushes[k].move(d3.select(".brush-" + hashK), ext.map(columnsScalesMap[k]));
        });
    };
    return Parallel;
}(_element__WEBPACK_IMPORTED_MODULE_3__["Element"]));



/***/ }),

/***/ "./src/elements/decorators/anchors.ts":
/*!********************************************!*\
  !*** ./src/elements/decorators/anchors.ts ***!
  \********************************************/
/*! exports provided: drawAnchors, highlightAnchors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawAnchors", function() { return drawAnchors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highlightAnchors", function() { return highlightAnchors; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../const */ "./src/const.js");
/* harmony import */ var _utils_d3_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/d3-decorators */ "./src/utils/d3-decorators.js");
/* harmony import */ var _utils_utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils-dom */ "./src/utils/utils-dom.ts");
/* harmony import */ var _utils_utils_grammar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/utils-grammar */ "./src/utils/utils-grammar.ts");
/* harmony import */ var _utils_path_svg_brush_line__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/path/svg/brush-line */ "./src/utils/path/svg/brush-line.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};





function drawAnchors(node, model, selection) {
    var shape = model.anchorShape;
    var config = node.config;
    var guide = config.guide;
    var screenModel = node.screenModel;
    var anchorClass = 'i-data-anchor';
    var attr = __assign({}, anchorShapes[shape].getInitialAttrs(node, model), { opacity: (guide.showAnchors === 'hover' ? 0 : 1), fill: function (d) { return screenModel.color(d); }, class: anchorClass });
    var dots = selection
        .selectAll("." + anchorClass)
        .data(function (fiber) { return fiber.filter(_utils_utils_grammar__WEBPACK_IMPORTED_MODULE_3__["isNonSyntheticRecord"]); }, screenModel.id);
    dots.exit()
        .remove();
    dots.call(Object(_utils_d3_decorators__WEBPACK_IMPORTED_MODULE_1__["d3_animationInterceptor"])(guide.animationSpeed, null, attr));
    var allDots = dots.enter()
        .append(anchorShapes[model.anchorShape].element)
        .call(Object(_utils_d3_decorators__WEBPACK_IMPORTED_MODULE_1__["d3_animationInterceptor"])(guide.animationSpeed, { r: 0 }, attr))
        .merge(dots);
    return allDots;
}
function highlightAnchors(node, model, filter) {
    var shape = model.anchorShape;
    var cssClass = 'i-data-anchor';
    var screenModel = node.screenModel;
    var showOnHover = node.config.guide.showAnchors === 'hover';
    var container = node.config.options.container;
    var dots = container
        .selectAll("." + cssClass)
        .call(Object(_utils_d3_decorators__WEBPACK_IMPORTED_MODULE_1__["d3_setAttrs"])(anchorShapes[shape].getHighlightAttrs(node, model, filter)))
        .attr('opacity', (showOnHover ? (function (d) { return filter(d) ? 1 : 0; }) : function () { return 1; }))
        .attr('fill', function (d) { return screenModel.color(d); })
        .attr('class', function (d) { return _utils_utils_dom__WEBPACK_IMPORTED_MODULE_2__["classes"](cssClass, screenModel.class(d)); })
        .classed(_const__WEBPACK_IMPORTED_MODULE_0__["CSS_PREFIX"] + "highlighted", filter);
    return dots;
}
var anchorShapes = {
    'circle': {
        element: 'circle',
        getInitialAttrs: function (node, model) {
            var config = node.config;
            var guide = config.guide;
            var screenModel = node.screenModel;
            return {
                r: (guide.showAnchors === 'hover' ? 0 :
                    (function (d) { return screenModel.size(d) / 2; })),
                cx: function (d) { return model.x(d); },
                cy: function (d) { return model.y(d); },
            };
        },
        getHighlightAttrs: function (node, model, filter) {
            var config = node.config;
            var guide = config.guide;
            var screenModel = node.screenModel;
            var showOnHover = node.config.guide.showAnchors === 'hover';
            var rmin = 4; // Min highlight radius
            var rx = 1.25; // Highlight multiplier
            return {
                r: (showOnHover ?
                    (function (d) { return filter(d) ? Math.max(rmin, (screenModel.size(d) / 2)) : 0; }) :
                    (function (d) {
                        // NOTE: Highlight point with larger radius.
                        var r = screenModel.size(d) / 2;
                        if (filter(d)) {
                            r = Math.max(rmin, Math.ceil(r * rx));
                        }
                        return r;
                    }))
            };
        }
    },
    'vertical-stick': {
        element: 'path',
        getInitialAttrs: function (node, model) {
            var config = node.config;
            var guide = config.guide;
            var screenModel = node.screenModel;
            return {
                'shape-rendering': 'crispEdges',
                d: function (d) {
                    var x = model.x(d);
                    var y = model.y(d);
                    var x0 = model.x0(d);
                    var y0 = model.y0(d);
                    var r = (guide.showAnchors === 'hover' ? 0 : (screenModel.size(d) / 2));
                    var path = Object(_utils_path_svg_brush_line__WEBPACK_IMPORTED_MODULE_4__["getBrushLine"])([
                        { x: x, y: y, size: r },
                        { x: x0, y: y0, size: r }
                    ]);
                    return path;
                }
            };
        },
        getHighlightAttrs: function (node, model, filter) {
            var config = node.config;
            var guide = config.guide;
            var screenModel = node.screenModel;
            var showOnHover = node.config.guide.showAnchors === 'hover';
            var rmin = 4; // Min highlight radius
            var rx = 1.25; // Highlight multiplier
            return {
                d: function (d) {
                    var x = model.x(d);
                    var y = model.y(d);
                    var x0 = model.x0(d);
                    var y0 = model.y0(d);
                    var r = (showOnHover ?
                        (filter(d) ? Math.max(rmin, (screenModel.size(d) / 2)) : 0) :
                        filter(d) ?
                            // Note: Highlight stick with larger width.
                            Math.max(rmin, Math.ceil(screenModel.size(d) / 2 * rx)) :
                            (screenModel.size(d) / 2));
                    var path = Object(_utils_path_svg_brush_line__WEBPACK_IMPORTED_MODULE_4__["getBrushLine"])([
                        { x: x, y: y, size: r },
                        { x: x0, y: y0, size: r }
                    ]);
                    return path;
                }
            };
        }
    }
};


/***/ }),

/***/ "./src/elements/decorators/layer-labels-annealing-simulator.js":
/*!*********************************************************************!*\
  !*** ./src/elements/decorators/layer-labels-annealing-simulator.js ***!
  \*********************************************************************/
/*! exports provided: AnnealingSimulator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnealingSimulator", function() { return AnnealingSimulator; });
var AnnealingSimulator = /** @class */ (function () {
    function AnnealingSimulator(config) {
        this.minError = Number.MAX_VALUE;
        this.items = config.items;
        this.revision = this.items.map(function (row) { return ({ i: row.i, x: row.x, y: row.y }); });
        this.penalties = config.penalties;
        this.transactor = config.transactor;
        this.cooling_schedule = config.cooling_schedule || (function (ti, t0, n) { return (ti - (t0 / n)); });
    }
    AnnealingSimulator.prototype.energy = function (index) {
        return this.penalties.reduce(function (memo, p) { return memo + p(index); }, 0);
    };
    AnnealingSimulator.prototype.move = function (temperature) {
        var i = Math.floor(Math.random() * this.items.length);
        var trans = this.transactor(this.items[i]);
        var prevEnergy = this.energy(i);
        this.items[i] = trans.modify();
        var nextEnergy = this.energy(i);
        var de = nextEnergy - prevEnergy;
        var acceptanceProbability = (de < 0) ? 1 : Math.exp(-de / temperature);
        if (Math.random() >= acceptanceProbability) {
            this.items[i] = trans.revert();
        }
        else if (nextEnergy < this.minError) {
            this.minError = nextEnergy;
            this.revision = this.items.map(function (row) { return ({ i: row.i, x: row.x, y: row.y }); });
        }
    };
    AnnealingSimulator.prototype.start = function (nIterations) {
        // main simulated annealing function
        var ti = 1.0;
        var t0 = 1.0;
        var itemsLength = this.items.length;
        mining: for (var i = 0; i < nIterations; i++) {
            for (var m = 0; m < itemsLength; m++) {
                this.move(ti);
                if (this.minError <= 10) {
                    break mining;
                }
            }
            ti = this.cooling_schedule(ti, t0, nIterations);
        }
        return this.revision;
    };
    return AnnealingSimulator;
}());



/***/ }),

/***/ "./src/elements/decorators/layer-labels-model.ts":
/*!*******************************************************!*\
  !*** ./src/elements/decorators/layer-labels-model.ts ***!
  \*******************************************************/
/*! exports provided: LayerLabelsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerLabelsModel", function() { return LayerLabelsModel; });
var createFunc = (function (x) { return (function () { return x; }); });
var LayerLabelsModel = /** @class */ (function () {
    function LayerLabelsModel(prev) {
        this.model = prev.model;
        this.x = prev.x || createFunc(0);
        this.y = prev.y || createFunc(0);
        this.dx = prev.dx || createFunc(0);
        this.dy = prev.dy || createFunc(0);
        this.w = prev.w || createFunc(0);
        this.h = prev.h || createFunc(0);
        this.hide = prev.hide || createFunc(false);
        this.label = prev.label || createFunc('');
        this.color = prev.color || createFunc('');
        this.angle = prev.angle || createFunc(0);
    }
    LayerLabelsModel.seed = function (model, _a) {
        var fontColor = _a.fontColor, flip = _a.flip, formatter = _a.formatter, labelRectSize = _a.labelRectSize, _b = _a.paddingKoeff, paddingKoeff = _b === void 0 ? 0.5 : _b;
        var x = flip ? model.yi : model.xi;
        var y = flip ? model.xi : model.yi;
        var label = function (row) { return formatter(model.label(row)); };
        return new LayerLabelsModel({
            model: model,
            x: function (row) { return x(row); },
            y: function (row) { return y(row); },
            dy: function (row) { return ((labelRectSize(label(row)).height) * paddingKoeff); },
            w: function (row) { return (labelRectSize(label(row)).width); },
            h: function (row) { return (labelRectSize(label(row)).height); },
            label: label,
            color: (function () { return fontColor; }),
            angle: (function () { return 0; })
        });
    };
    LayerLabelsModel.compose = function (prev, updates) {
        if (updates === void 0) { updates = {}; }
        return (Object
            .keys(updates)
            .reduce(function (memo, propName) {
            memo[propName] = updates[propName];
            return memo;
        }, (new LayerLabelsModel(prev))));
    };
    return LayerLabelsModel;
}());



/***/ }),

/***/ "./src/elements/decorators/layer-labels-penalties.ts":
/*!***********************************************************!*\
  !*** ./src/elements/decorators/layer-labels-penalties.ts ***!
  \***********************************************************/
/*! exports provided: LayerLabelsPenalties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerLabelsPenalties", function() { return LayerLabelsPenalties; });
/* harmony import */ var _utils_utils_draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils-draw */ "./src/utils/utils-draw.ts");

var intersect = function (x1, x2, x3, x4, y1, y2, y3, y4) { return _utils_utils_draw__WEBPACK_IMPORTED_MODULE_0__["isIntersect"](x1, y1, x2, y2, x3, y3, x4, y4); };
var _penalties = {};
var LayerLabelsPenalties = /** @class */ (function () {
    function LayerLabelsPenalties() {
    }
    LayerLabelsPenalties.reg = function (alias, funcPenalty) {
        _penalties[alias] = funcPenalty;
        return this;
    };
    LayerLabelsPenalties.get = function (alias) {
        return _penalties[alias];
    };
    return LayerLabelsPenalties;
}());

LayerLabelsPenalties
    .reg('auto:avoid-label-label-overlap', function (labels, edges, penaltyRate) {
    if (penaltyRate === void 0) { penaltyRate = 1.0; }
    return function (index) {
        var x21 = labels[index].x;
        var y21 = labels[index].y - labels[index].h + 2.0;
        var x22 = labels[index].x + labels[index].w;
        var y22 = labels[index].y + 2.0;
        return labels.reduce(function (sum, labi, i) {
            var k = Number(i !== index);
            var x11 = labi.x;
            var y11 = labi.y - labi.h + 2.0;
            var x12 = labi.x + labi.w;
            var y12 = labi.y + 2.0;
            var x_overlap = Math.max(0, Math.min(x12, x22) - Math.max(x11, x21));
            var y_overlap = Math.max(0, Math.min(y12, y22) - Math.max(y11, y21));
            var overlap_area = x_overlap * y_overlap;
            return sum + (k * (overlap_area * penaltyRate));
        }, 0);
    };
})
    .reg('auto:avoid-label-anchor-overlap', function (labels, edges, penaltyRate) {
    if (penaltyRate === void 0) { penaltyRate = 1.0; }
    return function (index) {
        var lab0 = labels[index];
        var x21 = lab0.x - lab0.w / 2;
        var x22 = lab0.x + lab0.w / 2;
        var y21 = lab0.y - lab0.h / 2 + 2.0;
        var y22 = lab0.y + lab0.h / 2 + 2.0;
        return labels.reduce(function (sum, anchor) {
            var x11 = anchor.x0 - anchor.size / 2;
            var x12 = anchor.x0 + anchor.size / 2;
            var y11 = anchor.y0 - anchor.size / 2;
            var y12 = anchor.y0 + anchor.size / 2;
            var x_overlap = Math.max(0, Math.min(x12, x22) - Math.max(x11, x21));
            var y_overlap = Math.max(0, Math.min(y12, y22) - Math.max(y11, y21));
            var overlap_area = x_overlap * y_overlap;
            return sum + (overlap_area * penaltyRate);
        }, 0);
    };
})
    .reg('auto:avoid-label-edges-overlap', function (labels, edges, penaltyRate) {
    if (penaltyRate === void 0) { penaltyRate = 1.0; }
    return function (index) {
        var label = labels[index];
        var x0 = label.x - label.w / 2;
        var x1 = label.x + label.w / 2;
        var y0 = label.y - label.h / 2;
        var y1 = label.y + label.h / 2;
        return edges.reduce(function (sum, edge) {
            var overlapLeftTopRightBottom = intersect(x0, x1, edge.x0, edge.x1, y0, y1, edge.y0, edge.y1);
            var overlapLeftBottomRightTop = intersect(x0, x1, edge.x0, edge.x1, y1, y0, edge.y0, edge.y1);
            return sum + (Number(overlapLeftTopRightBottom) + Number(overlapLeftBottomRightTop)) * penaltyRate;
        }, 0);
    };
});


/***/ }),

/***/ "./src/elements/decorators/layer-labels-rules.ts":
/*!*******************************************************!*\
  !*** ./src/elements/decorators/layer-labels-rules.ts ***!
  \*******************************************************/
/*! exports provided: LayerLabelsRules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerLabelsRules", function() { return LayerLabelsRules; });
/* harmony import */ var _layer_labels_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layer-labels-model */ "./src/elements/decorators/layer-labels-model.ts");

var rules = {};
var LayerLabelsRules = /** @class */ (function () {
    function LayerLabelsRules() {
    }
    LayerLabelsRules.regRule = function (alias, func) {
        rules[alias] = func;
        return this;
    };
    LayerLabelsRules.getRule = function (alias) {
        return rules[alias];
    };
    return LayerLabelsRules;
}());

var findCutIndex = function (text, labelWidth, availableSpace) {
    return ((availableSpace < labelWidth) ?
        (Math.max(1, Math.floor(availableSpace * text.length / labelWidth)) - 1) :
        (text.length));
};
var cutString = function (str, index) { return ((index === 0) ?
    '' :
    str.slice(0, index).replace(/\.+$/g, '') + '\u2026'); };
var isPositive = function (scale, row) { return scale.discrete || (!scale.discrete && row[scale.dim] >= 0); };
var isNegative = function (scale, row) { return !scale.discrete && row[scale.dim] < 0; };
var getXPad = function (prev, row) { return ((prev.w(row) / 2) + Math.floor(prev.model.size(row) / 5)); };
var getYPad = function (prev, row) { return ((prev.h(row) / 2) + Math.floor(prev.model.size(row) / 5)); };
var alignByX = function (exp) {
    return function (prev) {
        return {
            dx: function (row) {
                var ordinateScale = prev.model.scaleY;
                if ((exp[2] === '+') && !isPositive(ordinateScale, row)) {
                    return prev.dx(row);
                }
                if ((exp[2] === '-') && !isNegative(ordinateScale, row)) {
                    return prev.dx(row);
                }
                var k = (exp[1]);
                var u = (exp[0] === exp[0].toUpperCase()) ? 1 : 0;
                return prev.dx(row) + (k * u * prev.model.size(row) / 2) + (k * getXPad(prev, row));
            }
        };
    };
};
var alignByY = function (exp) {
    return function (prev) {
        return {
            dy: function (row) {
                var ordinateScale = prev.model.scaleY;
                if ((exp[2] === '+') && !isPositive(ordinateScale, row)) {
                    return prev.dy(row);
                }
                if ((exp[2] === '-') && !isNegative(ordinateScale, row)) {
                    return prev.dy(row);
                }
                var k = (exp[1]);
                var u = (exp[0] === exp[0].toUpperCase()) ? 1 : 0;
                return prev.dy(row) + (k * u * prev.model.size(row) / 2) + (k * getYPad(prev, row));
            }
        };
    };
};
LayerLabelsRules
    .regRule('l', alignByX(['l', -1, null]))
    .regRule('L', alignByX(['L', -1, null]))
    .regRule('l+', alignByX(['l', -1, '+']))
    .regRule('l-', alignByX(['l', -1, '-']))
    .regRule('L+', alignByX(['L', -1, '+']))
    .regRule('L-', alignByX(['L', -1, '-']))
    .regRule('r', alignByX(['r', 1, null]))
    .regRule('R', alignByX(['R', 1, null]))
    .regRule('r+', alignByX(['r', 1, '+']))
    .regRule('r-', alignByX(['r', 1, '-']))
    .regRule('R+', alignByX(['R', 1, '+']))
    .regRule('R-', alignByX(['R', 1, '-']))
    .regRule('t', alignByY(['t', -1, null]))
    .regRule('T', alignByY(['T', -1, null]))
    .regRule('t+', alignByY(['t', -1, '+']))
    .regRule('t-', alignByY(['t', -1, '-']))
    .regRule('T+', alignByY(['T', -1, '+']))
    .regRule('T-', alignByY(['T', -1, '-']))
    .regRule('b', alignByY(['b', 1, null]))
    .regRule('B', alignByY(['B', 1, null]))
    .regRule('b+', alignByY(['b', 1, '+']))
    .regRule('b-', alignByY(['b', 1, '-']))
    .regRule('B+', alignByY(['B', 1, '+']))
    .regRule('B-', alignByY(['B', 1, '-']))
    .regRule('rotate-on-size-overflow', function (prev, _a) {
    var data = _a.data;
    var out = (function (row) { return prev.model.size(row) < prev.w(row); });
    var overflowCount = data.reduce(function (memo, row) { return (memo + (out(row) ? 1 : 0)); }, 0);
    var isRot = ((overflowCount / data.length) > 0.5);
    var changes = {};
    if (isRot) {
        var padKoeff = 0.5;
        changes = {
            angle: function () { return -90; },
            w: function (row) { return prev.h(row); },
            h: function (row) { return prev.w(row); },
            dx: function (row) { return (prev.h(row) * padKoeff - 2); },
            dy: function () { return 0; }
        };
    }
    return changes;
})
    .regRule('hide-by-label-height-vertical', function (prev) {
    return {
        hide: function (row) {
            var availableSpace;
            var requiredSpace;
            if (prev.angle(row) === 0) {
                requiredSpace = prev.h(row);
                availableSpace = Math.abs(prev.model.y0(row) - prev.model.yi(row));
            }
            else {
                requiredSpace = prev.w(row);
                availableSpace = prev.model.size(row);
            }
            if (requiredSpace > availableSpace) {
                return true;
            }
            return prev.hide(row);
        }
    };
})
    .regRule('cut-label-vertical', function (prev) {
    return {
        h: function (row) {
            var reserved = prev.h(row);
            if (Math.abs(prev.angle(row)) > 0) {
                var text = prev.label(row);
                var available = Math.abs(prev.model.y0(row) - prev.model.yi(row));
                var index = findCutIndex(text, reserved, available);
                return ((index < text.length) ? available : reserved);
            }
            return reserved;
        },
        w: function (row) {
            var reserved = prev.w(row);
            if (prev.angle(row) === 0) {
                var text = prev.label(row);
                var available = prev.model.size(row);
                var index = findCutIndex(text, reserved, available);
                return ((index < text.length) ? available : reserved);
            }
            return reserved;
        },
        label: function (row) {
            var reserved;
            var available;
            if (prev.angle(row) === 0) {
                reserved = prev.w(row);
                available = prev.model.size(row);
            }
            else {
                reserved = prev.h(row);
                available = Math.abs(prev.model.y0(row) - prev.model.yi(row));
            }
            var text = prev.label(row);
            var index = findCutIndex(text, reserved, available);
            return ((index < text.length) ? cutString(text, index) : text);
        },
        dy: function (row) {
            var prevDy = prev.dy(row);
            if (prev.angle(row) !== 0) {
                var reserved = prev.h(row);
                var available = Math.abs(prev.model.y0(row) - prev.model.yi(row));
                var text = prev.label(row);
                var index = findCutIndex(text, reserved, available);
                return ((index < text.length) ?
                    (available * prevDy / reserved) :
                    (prevDy));
            }
            return prevDy;
        }
    };
})
    .regRule('cut-outer-label-vertical', function (prev) {
    return {
        h: function (row, args) {
            var reserved = prev.h(row);
            if (Math.abs(prev.angle(row)) > 0) {
                var text = prev.label(row);
                var available = (prev.model.y0(row) < prev.model.yi(row) ?
                    (args.maxHeight - prev.model.yi(row)) :
                    (prev.model.yi(row)));
                var index = findCutIndex(text, reserved, available);
                return ((index < text.length) ? available : reserved);
            }
            return reserved;
        },
        w: function (row) {
            var reserved = prev.w(row);
            if (prev.angle(row) === 0) {
                var text = prev.label(row);
                var available = prev.model.size(row);
                var index = findCutIndex(text, reserved, available);
                return ((index < text.length) ? available : reserved);
            }
            return reserved;
        },
        label: function (row, args) {
            var reserved;
            var available;
            if (prev.angle(row) === 0) {
                reserved = prev.w(row);
                available = prev.model.size(row);
            }
            else {
                reserved = prev.h(row);
                available = (prev.model.y0(row) < prev.model.yi(row) ?
                    (args.maxHeight - prev.model.yi(row)) :
                    (prev.model.yi(row)));
            }
            var text = prev.label(row);
            var index = findCutIndex(text, reserved, available);
            return ((index < text.length) ? cutString(text, index) : text);
        },
        dy: function (row, args) {
            var prevDy = prev.dy(row);
            if (prev.angle(row) !== 0) {
                var reserved = prev.h(row);
                var available = (prev.model.y0(row) < prev.model.yi(row) ?
                    (args.maxHeight - prev.model.yi(row)) :
                    (prev.model.yi(row)));
                var text = prev.label(row);
                var index = findCutIndex(text, reserved, available);
                return ((index < text.length) ?
                    (available * prevDy / reserved) :
                    (prevDy));
            }
            return prevDy;
        }
    };
})
    .regRule('from-beginning', function (prev) {
    var y0 = function (row) { return prev.model.y0(row); };
    return (prev.model.flip ? { x: y0 } : { y: y0 });
})
    .regRule('to-end', function (prev) {
    var yi = function (row) { return prev.model.yi(row); };
    return (prev.model.flip ? { x: yi } : { y: yi });
})
    .regRule('towards', function (prev) {
    var getSign = function (prev, row) { return (prev.model.yi(row) - prev.model.y0(row) >= 0 ? 1 : -1); };
    var getPad = (prev.model.flip ? getXPad : getYPad);
    var dy = function (row) { return (getSign(prev, row) * getPad(prev, row)); };
    return (prev.model.flip ? { dx: dy } : { dy: dy });
})
    .regRule('inside-start-then-outside-end-horizontal', function (prev, args) {
    var innerStart = [
        LayerLabelsRules.getRule('from-beginning'),
        LayerLabelsRules.getRule('towards'),
        LayerLabelsRules.getRule('cut-label-horizontal')
    ].reduce(function (p, r) { return _layer_labels_model__WEBPACK_IMPORTED_MODULE_0__["LayerLabelsModel"].compose(p, r(p, args)); }, prev);
    var outerEnd = [
        LayerLabelsRules.getRule('to-end'),
        LayerLabelsRules.getRule('towards'),
        LayerLabelsRules.getRule('cut-outer-label-horizontal')
    ].reduce(function (p, r) { return _layer_labels_model__WEBPACK_IMPORTED_MODULE_0__["LayerLabelsModel"].compose(p, r(p, args)); }, prev);
    var betterInside = function (row) { return (innerStart.label(row).length >= outerEnd.label(row).length); };
    return Object.assign({}, innerStart, ['x', 'dx', 'hide', 'label'].reduce(function (obj, prop) {
        obj[prop] = function (row) { return ((betterInside(row) ? innerStart : outerEnd)[prop](row)); };
        return obj;
    }, {}));
})
    .regRule('inside-start-then-outside-end-vertical', function (prev, args) {
    var innerStart = [
        LayerLabelsRules.getRule('from-beginning'),
        LayerLabelsRules.getRule('towards'),
        LayerLabelsRules.getRule('cut-label-vertical')
    ].reduce(function (p, r) { return _layer_labels_model__WEBPACK_IMPORTED_MODULE_0__["LayerLabelsModel"].compose(p, r(p, args)); }, prev);
    var outerEnd = [
        LayerLabelsRules.getRule('to-end'),
        LayerLabelsRules.getRule('towards'),
        LayerLabelsRules.getRule('cut-outer-label-vertical')
    ].reduce(function (p, r) { return _layer_labels_model__WEBPACK_IMPORTED_MODULE_0__["LayerLabelsModel"].compose(p, r(p, args)); }, prev);
    var betterInside = function (row) { return (innerStart.label(row).length >= outerEnd.label(row).length); };
    return Object.assign({}, innerStart, ['y', 'dy', 'hide', 'label'].reduce(function (obj, prop) {
        obj[prop] = function (row) { return ((betterInside(row) ? innerStart : outerEnd)[prop](row)); };
        return obj;
    }, {}));
})
    .regRule('outside-then-inside-horizontal', function (prev, args) {
    var outer = ['r+', 'l-', 'cut-outer-label-horizontal']
        .map(LayerLabelsRules.getRule)
        .reduce(function (p, r) { return _layer_labels_model__WEBPACK_IMPORTED_MODULE_0__["LayerLabelsModel"].compose(p, r(p, args)); }, prev);
    var inner = ['r-', 'l+', 'hide-by-label-height-horizontal', 'cut-label-horizontal']
        .map(LayerLabelsRules.getRule)
        .reduce(function (p, r) { return _layer_labels_model__WEBPACK_IMPORTED_MODULE_0__["LayerLabelsModel"].compose(p, r(p, args)); }, prev);
    var betterInside = function (row) { return (inner.label(row).length > outer.label(row).length); };
    return Object.assign({}, outer, ['x', 'dx', 'hide', 'label'].reduce(function (obj, prop) {
        obj[prop] = function (row) { return ((betterInside(row) ? inner : outer)[prop](row)); };
        return obj;
    }, {}));
})
    .regRule('outside-then-inside-vertical', function (prev, args) {
    var outer = ['t+', 'b-', 'cut-outer-label-vertical']
        .map(LayerLabelsRules.getRule)
        .reduce(function (p, r) { return _layer_labels_model__WEBPACK_IMPORTED_MODULE_0__["LayerLabelsModel"].compose(p, r(p, args)); }, prev);
    var inner = ['t-', 'b+', 'hide-by-label-height-vertical', 'cut-label-vertical']
        .map(LayerLabelsRules.getRule)
        .reduce(function (p, r) { return _layer_labels_model__WEBPACK_IMPORTED_MODULE_0__["LayerLabelsModel"].compose(p, r(p, args)); }, prev);
    var betterInside = function (row) { return (inner.label(row, args).length > outer.label(row, args).length); };
    return Object.assign({}, outer, ['y', 'dy', 'hide', 'label'].reduce(function (obj, prop) {
        obj[prop] = function (row) { return ((betterInside(row) ? inner : outer)[prop](row, args)); };
        return obj;
    }, {}));
})
    .regRule('hide-by-label-height-horizontal', function (prev) {
    return {
        hide: function (row) {
            if (prev.model.size(row) < prev.h(row)) {
                return true;
            }
            return prev.hide(row);
        }
    };
})
    .regRule('cut-label-horizontal', function (prev) {
    return {
        dx: function (row) {
            var text = prev.label(row);
            var required = prev.w(row);
            var available = Math.abs(prev.model.y0(row) - prev.model.yi(row));
            var index = findCutIndex(text, required, available);
            var prevDx = prev.dx(row);
            return ((index < text.length) ? (available * prevDx / required) : (prevDx));
        },
        w: function (row) {
            var text = prev.label(row);
            var required = prev.w(row);
            var available = Math.abs(prev.model.y0(row) - prev.model.yi(row));
            var index = findCutIndex(text, required, available);
            return ((index < text.length) ? available : required);
        },
        label: function (row) {
            var text = prev.label(row);
            var required = prev.w(row);
            var available = Math.abs(prev.model.y0(row) - prev.model.yi(row));
            var index = findCutIndex(text, required, available);
            return ((index < text.length) ?
                (cutString(text, index)) :
                (text));
        }
    };
})
    .regRule('cut-outer-label-horizontal', function (prev, args) {
    return {
        dx: function (row) {
            var text = prev.label(row);
            var required = prev.w(row);
            var available = (prev.model.y0(row) < prev.model.yi(row) ?
                (args.maxWidth - prev.model.yi(row)) :
                (prev.model.yi(row)));
            var index = findCutIndex(text, required, available);
            var prevDx = prev.dx(row);
            return ((index < text.length) ? (available * prevDx / required) : (prevDx));
        },
        w: function (row) {
            var text = prev.label(row);
            var required = prev.w(row);
            var available = (prev.model.y0(row) < prev.model.yi(row) ?
                (args.maxWidth - prev.model.yi(row)) :
                (prev.model.yi(row)));
            var index = findCutIndex(text, required, available);
            return ((index < text.length) ? available : required);
        },
        label: function (row) {
            var text = prev.label(row);
            var required = prev.w(row);
            var available = (prev.model.y0(row) < prev.model.yi(row) ?
                (args.maxWidth - prev.model.yi(row)) :
                (prev.model.yi(row)));
            var index = findCutIndex(text, required, available);
            return ((index < text.length) ?
                (cutString(text, index)) :
                (text));
        }
    };
})
    .regRule('keep-within-diameter-or-top', function (prev) {
    return {
        dy: function (row) {
            if ((prev.model.size(row) / prev.w(row)) < 1) {
                return (prev.dy(row) - (prev.h(row) / 2) - (prev.model.size(row) / 2));
            }
            return prev.dy(row);
        }
    };
})
    .regRule('keep-in-box', function (prev, _a) {
    var maxWidth = _a.maxWidth, maxHeight = _a.maxHeight;
    return {
        dx: function (row) {
            var dx = prev.dx(row);
            var x = prev.x(row) + dx;
            var w = prev.w(row);
            var l = x - w / 2;
            var r = x + w / 2;
            var dl = 0 - l;
            if (dl > 0) {
                return dx + dl;
            }
            var dr = r - maxWidth;
            if (dr > 0) {
                return dx - dr;
            }
            return dx;
        },
        dy: function (row) {
            var dy = prev.dy(row);
            var y = prev.y(row) + dy;
            var h = prev.h(row);
            var t = y - h / 2;
            var b = y + h / 2;
            var dt = 0 - t;
            if (dt > 0) {
                return 0;
            }
            var db = b - maxHeight;
            if (db > 0) {
                return dy - db;
            }
            return dy;
        }
    };
});


/***/ }),

/***/ "./src/elements/decorators/layer-labels.ts":
/*!*************************************************!*\
  !*** ./src/elements/decorators/layer-labels.ts ***!
  \*************************************************/
/*! exports provided: LayerLabels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerLabels", function() { return LayerLabels; });
/* harmony import */ var _utils_utils_draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils-draw */ "./src/utils/utils-draw.ts");
/* harmony import */ var _utils_utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils-dom */ "./src/utils/utils-dom.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _layer_labels_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layer-labels-model */ "./src/elements/decorators/layer-labels-model.ts");
/* harmony import */ var _layer_labels_rules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layer-labels-rules */ "./src/elements/decorators/layer-labels-rules.ts");
/* harmony import */ var _layer_labels_annealing_simulator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layer-labels-annealing-simulator */ "./src/elements/decorators/layer-labels-annealing-simulator.js");
/* harmony import */ var _layer_labels_penalties__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layer-labels-penalties */ "./src/elements/decorators/layer-labels-penalties.ts");
/* harmony import */ var _formatter_registry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../formatter-registry */ "./src/formatter-registry.ts");








var intersect = function (x1, x2, x3, x4, y1, y2, y3, y4) { return _utils_utils_draw__WEBPACK_IMPORTED_MODULE_0__["isIntersect"](x1, y1, x2, y2, x3, y3, x4, y4); };
var LayerLabels = /** @class */ (function () {
    function LayerLabels(model, isHorizontal, labelGuide, _a) {
        var width = _a.width, height = _a.height, container = _a.container;
        this.container = container;
        this.model = model;
        this.flip = isHorizontal;
        this.w = width;
        this.h = height;
        this.guide = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["defaults"]((labelGuide || {}), {
            fontFamily: 'Helvetica Neue, Segoe UI, Open Sans, Ubuntu, sans-serif',
            fontWeight: 'normal',
            fontSize: 10,
            fontColor: '#000',
            hideEqualLabels: false,
            position: [],
            tickFormat: null,
            tickFormatNullAlias: ''
        });
    }
    LayerLabels.prototype.draw = function (fibers) {
        var self = this;
        var model = this.model;
        var guide = this.guide;
        var seed = _layer_labels_model__WEBPACK_IMPORTED_MODULE_3__["LayerLabelsModel"].seed(model, {
            // fontSize: guide.fontSize,
            fontColor: guide.fontColor,
            flip: self.flip,
            formatter: _formatter_registry__WEBPACK_IMPORTED_MODULE_7__["FormatterRegistry"].get(guide.tickFormat, guide.tickFormatNullAlias),
            labelRectSize: function (str) { return _utils_utils_dom__WEBPACK_IMPORTED_MODULE_1__["getLabelSize"](str, guide); }
        });
        var args = { maxWidth: self.w, maxHeight: self.h, data: fibers.reduce(function (memo, f) { return memo.concat(f); }, []) };
        var fixedPosition = guide
            .position
            .filter(function (token) { return token.indexOf('auto:') === -1; });
        var m = fixedPosition
            .map(_layer_labels_rules__WEBPACK_IMPORTED_MODULE_4__["LayerLabelsRules"].getRule)
            .reduce(function (prev, rule) { return _layer_labels_model__WEBPACK_IMPORTED_MODULE_3__["LayerLabelsModel"].compose(prev, rule(prev, args)); }, seed);
        var readBy3 = function (list, iterator) {
            var l = list.length - 1;
            var r = [];
            for (var i = 0; i <= l; i++) {
                var iPrev = (i === 0) ? i : (i - 1);
                var iCurr = i;
                var iNext = (i === l) ? i : (i + 1);
                r.push(iterator(list[iPrev], list[iCurr], list[iNext]));
            }
            return r;
        };
        var parallel = fibers.reduce(function (memo, f) {
            var absFiber = f.map(function (row) {
                return {
                    data: row,
                    x: m.x(row) + m.dx(row),
                    y: m.y(row) + m.dy(row),
                    w: m.w(row),
                    h: m.h(row, args),
                    hide: m.hide(row),
                    extr: null,
                    size: m.model.size(row),
                    angle: m.angle(row),
                    label: m.label(row),
                    color: m.color(row)
                };
            });
            memo.text = memo.text.concat(absFiber);
            memo.edges = memo.edges.concat(readBy3(absFiber, function (prev, curr, next) {
                if (curr.y === Math.max(curr.y, prev.y, next.y)) {
                    curr.extr = 'min';
                }
                else if (curr.y === Math.min(curr.y, prev.y, next.y)) {
                    curr.extr = 'max';
                }
                else {
                    curr.extr = 'norm';
                }
                return { x0: prev.x, x1: curr.x, y0: prev.y, y1: curr.y };
            }));
            return memo;
        }, { text: [], edges: [] });
        parallel.text = parallel.text
            .filter(function (r) { return r.label; })
            .map(function (r, i) { return Object.assign(r, { i: i }); });
        var tokens = this.guide.position.filter(function (token) { return token.indexOf('auto:avoid') === 0; });
        parallel = ((parallel.text.length > 0) && (tokens.length > 0)) ?
            this.autoPosition(parallel, tokens) :
            parallel;
        var flags = this.guide.position.reduce(function (memo, token) {
            return Object.assign(memo, (_a = {}, _a[token] = true, _a));
            var _a;
        }, {});
        parallel.text = parallel.text = flags['auto:adjust-on-label-overflow'] ?
            this.adjustOnOverflow(parallel.text, args) :
            parallel.text;
        parallel.text = flags['auto:hide-on-label-edges-overlap'] ?
            this.hideOnLabelEdgesOverlap(parallel.text, parallel.edges) :
            parallel.text;
        parallel.text = flags['auto:hide-on-label-label-overlap'] ?
            this.hideOnLabelLabelOverlap(parallel.text) :
            parallel.text;
        parallel.text = flags['auto:hide-on-label-anchor-overlap'] ?
            this.hideOnLabelAnchorOverlap(parallel.text) :
            parallel.text;
        var labels = parallel.text;
        var get = (function (prop) { return (function (__, i) { return labels[i][prop]; }); });
        var xi = get('x');
        var yi = get('y');
        var angle = get('angle');
        var color = get('color');
        var label = get('label');
        var update = function (elements) {
            elements
                .style('fill', color)
                .style('font-size', self.guide.fontSize + "px")
                .style('display', (function (__, i) { return labels[i].hide ? 'none' : null; }))
                .attr('class', 'i-role-label')
                .attr('text-anchor', 'middle')
                .attr('transform', function (d, i) { return "translate(" + xi(d, i) + "," + yi(d, i) + ") rotate(" + angle(d, i) + ")"; })
                .text(label);
        };
        if (guide.hideEqualLabels) {
            labels
                .filter(function (d) { return !d.hide; })
                .filter(function (d, i, visibleLabels) { return ((i < visibleLabels.length - 1) &&
                (d.label === visibleLabels[i + 1].label)); })
                .forEach(function (d) { return d.hide = true; });
        }
        var text = this
            .container
            .selectAll('.i-role-label')
            .data(labels.map(function (r) { return r.data; }));
        text.exit()
            .remove();
        text.call(update);
        text.enter()
            .append('text')
            .call(update);
        return text;
    };
    LayerLabels.prototype.autoPosition = function (parallel, tokens) {
        var calcEllipticXY = function (r, angle) {
            var xReserve = 4;
            var yReserve = 2;
            var a = xReserve + (r.size + r.w) / 2;
            var b = yReserve + (r.size + r.h) / 2;
            return {
                x: (a * Math.cos(angle)),
                y: (b * Math.sin(angle))
            };
        };
        var edges = parallel.edges;
        var labels = parallel.text
            .map(function (r) {
            var maxAngles = {
                max: -Math.PI / 2,
                min: Math.PI / 2,
                norm: (Math.random() * Math.PI * 2)
            };
            var xy = calcEllipticXY(r, maxAngles[r.extr]);
            return {
                i: r.i,
                x0: r.x,
                y0: r.y,
                x: r.x + xy.x,
                y: r.y + xy.y,
                w: r.w,
                h: r.h,
                size: r.size,
                hide: r.hide,
                extr: r.extr
            };
        })
            .filter(function (r) { return !r.hide; });
        var sim = new _layer_labels_annealing_simulator__WEBPACK_IMPORTED_MODULE_5__["AnnealingSimulator"]({
            items: labels,
            transactor: function (row) {
                var prevX = row.x;
                var prevY = row.y;
                return {
                    modify: function () {
                        var maxAngles = {
                            max: -Math.PI,
                            min: Math.PI,
                            norm: Math.PI * 2
                        };
                        var segm = 4;
                        var maxAngle = maxAngles[row.extr];
                        var angle = ((maxAngle / segm) + (Math.random() * (maxAngle * (segm - 2)) / segm));
                        var xy = calcEllipticXY(row, angle);
                        row.x = row.x0 + xy.x;
                        row.y = row.y0 + xy.y;
                        return row;
                    },
                    revert: function () {
                        row.x = prevX;
                        row.y = prevY;
                        return row;
                    }
                };
            },
            penalties: tokens
                .map(function (token) { return _layer_labels_penalties__WEBPACK_IMPORTED_MODULE_6__["LayerLabelsPenalties"].get(token); })
                .filter(function (x) { return x; })
                .map(function (penalty) { return penalty(labels, edges); })
        });
        var bestRevision = sim.start(5);
        parallel.text = bestRevision.reduce(function (memo, l) {
            var r = memo[l.i];
            r.x = l.x;
            r.y = l.y;
            return memo;
        }, parallel.text);
        return parallel;
    };
    LayerLabels.prototype.hideOnLabelEdgesOverlap = function (data, edges) {
        var _this = this;
        var penaltyLabelEdgesOverlap = function (label, edges) {
            var rect = _this.getLabelRect(label);
            return edges.reduce(function (sum, edge) {
                var overlapTop = intersect(rect.x0, rect.x1, edge.x0, edge.x1, rect.y0, rect.y1, edge.y0, edge.y1);
                var overlapBtm = intersect(rect.x0, rect.x1, edge.x0, edge.x1, rect.y1, rect.y0, edge.y0, edge.y1);
                return sum + (Number(overlapTop) + Number(overlapBtm)) * 2;
            }, 0);
        };
        data.filter(function (r) { return !r.hide; })
            .forEach(function (r) {
            if (penaltyLabelEdgesOverlap(r, edges) > 0) {
                r.hide = true;
            }
        });
        return data;
    };
    LayerLabels.prototype.hideOnLabelLabelOverlap = function (data) {
        var _this = this;
        var extremumOrder = { min: 0, max: 1, norm: 2 };
        var collisionSolveStrategies = {
            'min/min': (function (p0, p1) { return p1.y - p0.y; }),
            'max/max': (function (p0, p1) { return p0.y - p1.y; }),
            'min/max': (function () { return -1; }),
            'min/norm': (function () { return -1; }),
            'max/norm': (function () { return -1; }),
            'norm/norm': (function (p0, p1) { return p0.y - p1.y; }) // asc
        };
        var cross = (function (a, b) {
            var ra = _this.getLabelRect(a);
            var rb = _this.getLabelRect(b);
            var k = Number(!a.hide && !b.hide);
            var x_overlap = k * Math.max(0, Math.min(rb.x1, ra.x1) - Math.max(ra.x0, rb.x0));
            var y_overlap = k * Math.max(0, Math.min(rb.y1, ra.y1) - Math.max(ra.y0, rb.y0));
            if ((x_overlap * y_overlap) > 0) {
                var p = [a, b];
                p.sort(function (p0, p1) { return extremumOrder[p0.extr] - extremumOrder[p1.extr]; });
                var r = (collisionSolveStrategies[p[0].extr + "/" + p[1].extr](p[0], p[1]) < 0 ?
                    p[0] :
                    p[1]);
                r.hide = true;
            }
        });
        data.filter(function (r) { return !r.hide; })
            .sort(function (p0, p1) {
            return extremumOrder[p0.extr] - extremumOrder[p1.extr];
        })
            .forEach(function (a) {
            data.forEach(function (b) {
                if (a.i !== b.i) {
                    cross(a, b);
                }
            });
        });
        return data;
    };
    LayerLabels.prototype.getLabelRect = function (a, border) {
        if (border === void 0) { border = 0; }
        return {
            x0: a.x - a.w / 2 - border,
            x1: a.x + a.w / 2 + border,
            y0: a.y - a.h / 2 - border,
            y1: a.y + a.h / 2 + border
        };
    };
    LayerLabels.prototype.getPointRect = function (a, border) {
        if (border === void 0) { border = 0; }
        return {
            x0: a.x - a.size / 2 - border,
            x1: a.x + a.size / 2 + border,
            y0: a.y - a.size / 2 - border,
            y1: a.y + a.size / 2 + border
        };
    };
    LayerLabels.prototype.hideOnLabelAnchorOverlap = function (data) {
        var _this = this;
        var isIntersects = (function (label, point) {
            var labelRect = _this.getLabelRect(label, 2);
            var pointRect = _this.getPointRect(point, 2);
            var x_overlap = Math.max(0, Math.min(pointRect.x1, labelRect.x1) - Math.max(pointRect.x0, labelRect.x0));
            var y_overlap = Math.max(0, Math.min(pointRect.y1, labelRect.y1) - Math.max(pointRect.y0, labelRect.y0));
            return (x_overlap * y_overlap) > 0.001;
        });
        data.filter(function (row) { return !row.hide; })
            .forEach(function (label) {
            var dataLength = data.length;
            for (var i = 0; i < dataLength; i++) {
                var point = data[i];
                if ((label.i !== point.i) && isIntersects(label, point)) {
                    label.hide = true;
                    break;
                }
            }
        });
        return data;
    };
    LayerLabels.prototype.adjustOnOverflow = function (data, _a) {
        var maxWidth = _a.maxWidth, maxHeight = _a.maxHeight;
        return data.map(function (row) {
            if (!row.hide) {
                row.x = Math.min(Math.max(row.x, row.w / 2), (maxWidth - row.w / 2));
                row.y = Math.max(Math.min(row.y, (maxHeight - row.h / 2)), row.h / 2);
            }
            return row;
        });
    };
    return LayerLabels;
}());



/***/ }),

/***/ "./src/elements/element.area.ts":
/*!**************************************!*\
  !*** ./src/elements/element.area.ts ***!
  \**************************************/
/*! exports provided: Area */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Area", function() { return Area; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "d3-color");
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3_color__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection */ "d3-selection");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3_selection__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const */ "./src/const.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _utils_utils_draw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils-draw */ "./src/utils/utils-draw.ts");
/* harmony import */ var _element_path_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./element.path.base */ "./src/elements/element.path.base.js");
/* harmony import */ var _utils_css_class_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/css-class-map */ "./src/utils/css-class-map.ts");
/* harmony import */ var _grammar_registry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../grammar-registry */ "./src/grammar-registry.ts");
/* harmony import */ var _utils_d3_decorators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/d3-decorators */ "./src/utils/d3-decorators.js");
/* harmony import */ var _utils_path_interpolators_interpolators_registry__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/path/interpolators/interpolators-registry */ "./src/utils/path/interpolators/interpolators-registry.ts");
/* harmony import */ var _utils_path_svg_area_path__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/path/svg/area-path */ "./src/utils/path/svg/area-path.ts");
/* harmony import */ var _utils_utils_position__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/utils-position */ "./src/utils/utils-position.ts");
/* harmony import */ var _utils_utils_grammar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/utils-grammar */ "./src/utils/utils-grammar.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var d3 = __assign({}, d3_color__WEBPACK_IMPORTED_MODULE_0__, d3_selection__WEBPACK_IMPORTED_MODULE_1__);











var Area = {
    draw: _element_path_base__WEBPACK_IMPORTED_MODULE_5__["BasePath"].draw,
    highlight: _element_path_base__WEBPACK_IMPORTED_MODULE_5__["BasePath"].highlight,
    highlightDataPoints: _element_path_base__WEBPACK_IMPORTED_MODULE_5__["BasePath"].highlightDataPoints,
    addInteraction: _element_path_base__WEBPACK_IMPORTED_MODULE_5__["BasePath"].addInteraction,
    _sortElements: _element_path_base__WEBPACK_IMPORTED_MODULE_5__["BasePath"]._sortElements,
    init: function (xConfig) {
        var config = _element_path_base__WEBPACK_IMPORTED_MODULE_5__["BasePath"].init(xConfig);
        var enableStack = config.stack;
        config.transformRules = [
            config.flip && _grammar_registry__WEBPACK_IMPORTED_MODULE_7__["GrammarRegistry"].get('flip'),
            config.guide.obsoleteVerticalStackOrder && _grammar_registry__WEBPACK_IMPORTED_MODULE_7__["GrammarRegistry"].get('obsoleteVerticalStackOrder'),
            !enableStack && _grammar_registry__WEBPACK_IMPORTED_MODULE_7__["GrammarRegistry"].get('groupOrderByAvg'),
            Object(_utils_utils_grammar__WEBPACK_IMPORTED_MODULE_12__["useFillGapsRule"])(config),
            enableStack && _grammar_registry__WEBPACK_IMPORTED_MODULE_7__["GrammarRegistry"].get('stack')
        ];
        config.adjustRules = [
            (function (prevModel, args) {
                var isEmptySize = prevModel.scaleSize.isEmptyScale();
                var sizeCfg = _utils_utils__WEBPACK_IMPORTED_MODULE_3__["defaults"]((config.guide.size || {}), {
                    defMinSize: 2,
                    defMaxSize: (isEmptySize ? 6 : 40)
                });
                var params = Object.assign({}, args, {
                    defMin: sizeCfg.defMinSize,
                    defMax: sizeCfg.defMaxSize,
                    minLimit: sizeCfg.minSize,
                    maxLimit: sizeCfg.maxSize
                });
                return _grammar_registry__WEBPACK_IMPORTED_MODULE_7__["GrammarRegistry"].get('adjustStaticSizeScale')(prevModel, params);
            })
        ];
        return config;
    },
    buildModel: function (screenModel) {
        var baseModel = _element_path_base__WEBPACK_IMPORTED_MODULE_5__["BasePath"].baseModel(screenModel);
        var guide = this.node().config.guide;
        var countCss = Object(_utils_css_class_map__WEBPACK_IMPORTED_MODULE_6__["getLineClassesByCount"])(screenModel.model.scaleColor.domain().length);
        var groupPref = _const__WEBPACK_IMPORTED_MODULE_2__["CSS_PREFIX"] + "area area i-role-path " + countCss + " " + guide.cssClass + " ";
        baseModel.groupAttributes = {
            class: function (fiber) { return groupPref + " " + baseModel.class(fiber[0]) + " frame"; }
        };
        var toDirPoint = function (d) { return ({
            id: screenModel.id(d),
            x: baseModel.x(d),
            y: baseModel.y(d)
        }); };
        var toRevPoint = function (d) { return ({
            id: screenModel.id(d),
            x: baseModel.x0(d),
            y: baseModel.y0(d)
        }); };
        var pathAttributes = {
            fill: function (fiber) { return baseModel.color(fiber[0]); },
            stroke: function (fiber) {
                var colorStr = baseModel.color(fiber[0]);
                if (colorStr.length > 0) {
                    colorStr = d3.rgb(colorStr).darker(1);
                }
                return colorStr;
            }
        };
        baseModel.pathAttributesEnterInit = pathAttributes;
        baseModel.pathAttributesUpdateDone = pathAttributes;
        var isPolygon = (Object(_utils_path_interpolators_interpolators_registry__WEBPACK_IMPORTED_MODULE_9__["getInterpolatorSplineType"])(guide.interpolate) === 'polyline');
        baseModel.pathElement = (isPolygon ? 'polygon' : 'path');
        baseModel.anchorShape = 'vertical-stick';
        baseModel.pathTween = {
            attr: (isPolygon ? 'points' : 'd'),
            fn: Object(_utils_d3_decorators__WEBPACK_IMPORTED_MODULE_8__["d3_createPathTween"])((isPolygon ? 'points' : 'd'), (isPolygon ? _utils_path_svg_area_path__WEBPACK_IMPORTED_MODULE_10__["getAreaPolygon"] : _utils_path_svg_area_path__WEBPACK_IMPORTED_MODULE_10__["getSmoothAreaPath"]), [toDirPoint, toRevPoint], screenModel.id, guide.interpolate)
        };
        return baseModel;
    },
    _getBoundsInfo: function (dots) {
        if (dots.length === 0) {
            return null;
        }
        var screenModel = this.node().screenModel;
        var flip = this.node().config.flip;
        var items = dots
            .map(function (node) {
            var data = d3.select(node).data()[0];
            var x = screenModel.x(data);
            var y = screenModel.y(data);
            var y0 = screenModel.y0(data);
            var group = screenModel.group(data);
            var item = { node: node, data: data, x: x, y: y, y0: y0, group: group };
            return item;
        });
        var bounds = items.reduce(function (bounds, _a) {
            var x = _a.x, y = _a.y, y0 = _a.y0;
            bounds.left = Math.min(x, bounds.left);
            bounds.right = Math.max(x, bounds.right);
            bounds.top = Math.min(y, y0, bounds.top);
            bounds.bottom = Math.max(y, y0, bounds.bottom);
            return bounds;
        }, {
            left: Number.MAX_VALUE,
            right: Number.MIN_VALUE,
            top: Number.MAX_VALUE,
            bottom: Number.MIN_VALUE
        });
        var ticks = _utils_utils__WEBPACK_IMPORTED_MODULE_3__["unique"](items.map(flip ?
            (function (item) { return item.y; }) :
            (function (item) { return item.x; }))).sort(function (a, b) { return a - b; });
        var groups = ticks.reduce((function (obj, value) { return (obj[value] = [], obj); }), {});
        items.forEach(function (item) {
            var tick = ticks.find(flip ? (function (value) { return item.y === value; }) : (function (value) { return item.x === value; }));
            groups[tick].push(item);
        });
        // Put placeholders for missing groups at some ticks
        (function () {
            var groupNames = Object.keys(items.reduce(function (map, item) {
                map[item.group] = true;
                return map;
            }, {}));
            // Todo: sort groups by Y (consider missing groups at some ticks)
            var groupIndex = groupNames.reduce(function (map, g, i) {
                map[g] = i;
                return map;
            }, {});
            ticks.forEach(function (tick) {
                var current = groups[tick];
                current.sort(function (a, b) { return groupIndex[a.group] - groupIndex[b.group]; });
                if (current.length < groupNames.length) {
                    for (var i = 0; i < groupNames.length; i++) {
                        var shouldInsert = false;
                        var y = void 0, y0 = void 0;
                        if (i === current.length) {
                            if (i === 0) {
                                y = y0 = 0;
                            }
                            else {
                                y = y0 = current[i - 1].y;
                            }
                            shouldInsert = true;
                        }
                        else if (current[i].group !== groupNames[i]) {
                            y = y0 = current[i].y0;
                            shouldInsert = true;
                        }
                        if (shouldInsert) {
                            var placeholder = {
                                x: tick,
                                y: y,
                                y0: y0,
                                data: null,
                                node: null,
                                group: groupNames[i]
                            };
                            current.splice(i, 0, placeholder);
                        }
                    }
                }
            });
        })();
        if (ticks.length === 1) {
            var tree_1 = {
                start: ticks[0],
                end: ticks[0],
                isLeaf: true,
                items: {
                    start: groups[ticks[0]],
                    end: groups[ticks[0]]
                }
            };
            return { bounds: bounds, tree: tree_1 };
        }
        var split = function (values) {
            if (values.length === 2) {
                var start = values[0], end = values[1];
                return {
                    start: start,
                    end: end,
                    isLeaf: true,
                    items: {
                        start: groups[start],
                        end: groups[end]
                    }
                };
            }
            var midIndex = ((values.length % 2 === 0) ?
                (values.length / 2) :
                ((values.length - 1) / 2));
            var middle = values[midIndex];
            return {
                start: values[0],
                end: values[values.length - 1],
                isLeaf: false,
                left: split(values.slice(0, midIndex + 1)),
                right: split(values.slice(midIndex))
            };
        };
        var tree = split(ticks);
        return { bounds: bounds, tree: tree };
    },
    getClosestElement: function (cursorX, cursorY) {
        if (!this._boundsInfo) {
            return null;
        }
        var _a = this._boundsInfo, bounds = _a.bounds, tree = _a.tree;
        var container = this.node().config.options.container;
        var flip = this.node().config.flip;
        var translate = _utils_utils_draw__WEBPACK_IMPORTED_MODULE_4__["getDeepTransformTranslate"](container.node());
        var maxHighlightDistance = this.node().config.guide.maxHighlightDistance;
        if ((cursorX < bounds.left + translate.x - maxHighlightDistance) ||
            (cursorX > bounds.right + translate.x + maxHighlightDistance) ||
            (cursorY < bounds.top + translate.y - maxHighlightDistance) ||
            (cursorY > bounds.bottom + translate.y + maxHighlightDistance)) {
            return null;
        }
        var cursor = (flip ? (cursorY - translate.y) : (cursorX - translate.x));
        var closestSpan = (function getClosestSpan(span) {
            if (span.isLeaf) {
                return span;
            }
            var mid = span.left.end;
            return getClosestSpan(cursor < mid ? span.left : span.right);
        })(tree);
        var kx = (closestSpan.end === closestSpan.start ?
            0 :
            ((cursor - closestSpan.start) / (closestSpan.end - closestSpan.start)));
        if (kx < 0) {
            kx = 0;
        }
        if (kx > 1) {
            kx = 1;
        }
        var interpolated = (function () {
            var groups = closestSpan.items.start.reduce(function (map, el) {
                map[el.group] = {
                    start: el,
                    end: null,
                    y: null,
                    y0: null
                };
                return map;
            }, {});
            closestSpan.items.end.forEach(function (el) {
                if (groups[el.group] === undefined) {
                    delete groups[el.group];
                    return;
                }
                groups[el.group].end = el;
            });
            Object.keys(groups).forEach(function (key) {
                var g = groups[key];
                if (!g.end) {
                    delete groups[key];
                    return;
                }
                g.y = (g.start.y + kx * (g.end.y - g.start.y));
                g.y0 = (g.start.y0 + kx * (g.end.y0 - g.start.y0));
            });
            return Object.keys(groups).map(function (g) { return groups[g]; })
                .map(function (d) { return ({
                y: d.y,
                y0: d.y0,
                el: (kx < 0.5 ? d.start : d.end)
            }); })
                .filter(function (d) { return d.el.data != null; }); // Filter-out missing groups placeholders
        })();
        var cy = (cursorY - translate.y);
        var cursorOverItems = interpolated
            .filter(function (d) { return (cy >= d.y && cy <= d.y0); });
        var bestMatchItems = (cursorOverItems.length > 0 ?
            cursorOverItems :
            interpolated);
        var bestElements = bestMatchItems.map(function (d) { return d.el; })
            .map(function (el) {
            var x = (el.x + translate.x);
            var y = (el.y + translate.y);
            var distance = Math.abs(flip ? (cursorY - y) : (cursorX - x));
            var secondaryDistance = Math.abs(flip ? (cursorX - x) : (cursorY - y));
            return { node: el.node, data: el.data, distance: distance, secondaryDistance: secondaryDistance, x: x, y: y };
        });
        return Object(_utils_utils_position__WEBPACK_IMPORTED_MODULE_11__["getClosestPointInfo"])(cursorX, cursorY, bestElements);
    }
};



/***/ }),

/***/ "./src/elements/element.generic.cartesian.ts":
/*!***************************************************!*\
  !*** ./src/elements/element.generic.cartesian.ts ***!
  \***************************************************/
/*! exports provided: GenericCartesian */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericCartesian", function() { return GenericCartesian; });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/elements/element.ts");
/* harmony import */ var _grammar_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../grammar-registry */ "./src/grammar-registry.ts");
/* harmony import */ var _utils_d3_decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/d3-decorators */ "./src/utils/d3-decorators.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-selection */ "d3-selection");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(d3_selection__WEBPACK_IMPORTED_MODULE_4__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var GenericCartesian = /** @class */ (function (_super) {
    __extends(GenericCartesian, _super);
    function GenericCartesian(config) {
        var _this = _super.call(this, config) || this;
        _this.config = config;
        _this.config.guide = _utils_utils__WEBPACK_IMPORTED_MODULE_3__["defaults"]((_this.config.guide || {}), {
            animationSpeed: 0,
            enableColorToBarPosition: false
        });
        _this.config.guide.size = (_this.config.guide.size || {});
        var enableStack = _this.config.stack;
        var enableColorPositioning = _this.config.guide.enableColorToBarPosition;
        var defaultDecorators = [
            config.flip && _grammar_registry__WEBPACK_IMPORTED_MODULE_1__["GrammarRegistry"].get('flip'),
            enableStack && _grammar_registry__WEBPACK_IMPORTED_MODULE_1__["GrammarRegistry"].get('stack'),
            enableColorPositioning && _grammar_registry__WEBPACK_IMPORTED_MODULE_1__["GrammarRegistry"].get('positioningByColor')
        ];
        _this.decorators = (_this.config.transformRules || defaultDecorators).concat(config.transformModel || []);
        _this.adjusters = (_this.config.adjustRules || []).concat(config.adjustScales || []);
        return _this;
    }
    GenericCartesian.prototype.defineGrammarModel = function (fnCreateScale) {
        var _this = this;
        var config = this.config;
        this.regScale('x', fnCreateScale('pos', config.x, [0, config.options.width]))
            .regScale('y', fnCreateScale('pos', config.y, [config.options.height, 0]))
            .regScale('y', fnCreateScale('pos', config.y, function (scaleConfig) { return ['ordinal', 'period'].indexOf(scaleConfig.type) >= 0 ?
            [0, config.options.height] :
            [config.options.height, 0]; }))
            .regScale('size', fnCreateScale('size', config.size, {}))
            .regScale('color', fnCreateScale('color', config.color, {}))
            .regScale('split', fnCreateScale('split', config.split, {}))
            .regScale('label', fnCreateScale('label', config.label, {}))
            .regScale('identity', fnCreateScale('identity', config.identity, {}));
        var scaleX = this.getScale('x');
        var scaleY = this.getScale('y');
        var scaleSize = this.getScale('size');
        var scaleLabel = this.getScale('label');
        var scaleColor = this.getScale('color');
        var scaleSplit = this.getScale('split');
        var scaleIdentity = this.getScale('identity');
        var ys = scaleY.domain();
        var min = scaleY.discrete ?
            ys[0] :
            Math.max(0, Math.min.apply(Math, ys)); // NOTE: max also can be below 0
        var y0 = scaleY.value(min) + scaleY.stepSize(min) * 0.5;
        var order = scaleColor.domain();
        var delimiter = '(@taucharts@)';
        var model = {
            data: (function () { return _this.data(); }),
            flip: false,
            scaleX: scaleX,
            scaleY: scaleY,
            scaleSize: scaleSize,
            scaleLabel: scaleLabel,
            scaleColor: scaleColor,
            scaleSplit: scaleSplit,
            scaleIdentity: scaleIdentity,
            color: (function (d) { return scaleColor.value(d[scaleColor.dim]); }),
            label: (function (d) { return scaleLabel.value(d[scaleLabel.dim]); }),
            group: (function (d) { return ("" + d[scaleColor.dim] + delimiter + d[scaleSplit.dim]); }),
            order: (function (group) {
                var color = group.split(delimiter)[0];
                var i = order.indexOf(color);
                return ((i < 0) ? Number.MAX_VALUE : i);
            }),
            size: (function (d) { return (scaleSize.value(d[scaleSize.dim])); }),
            id: (function (row) { return scaleIdentity.value(row[scaleIdentity.dim], row); }),
            xi: (function (d) { return scaleX.value(d[scaleX.dim]); }),
            yi: (function (d) { return scaleY.value(d[scaleY.dim]); }),
            y0: (function () { return y0; })
        };
        // NOTE: Request rows IDs for the first time to prevent
        // cases when plugins request these IDs in different
        // order after updating chart config dynamically.
        model.data().forEach(function (row) { return model.id(row); });
        return model;
    };
    GenericCartesian.prototype.getGrammarRules = function () {
        return this.decorators.filter(function (x) { return x; });
    };
    GenericCartesian.prototype.getAdjustScalesRules = function () {
        return (this.adjusters || []).filter(function (x) { return x; });
    };
    GenericCartesian.prototype.createScreenModel = function (grammarModel) {
        var flip = grammarModel.flip;
        var iff = (function (statement, yes, no) { return statement ? yes : no; });
        return {
            flip: flip,
            id: grammarModel.id,
            x: iff(flip, grammarModel.yi, grammarModel.xi),
            y: iff(flip, grammarModel.xi, grammarModel.yi),
            x0: iff(flip, grammarModel.y0, grammarModel.xi),
            y0: iff(flip, grammarModel.xi, grammarModel.y0),
            size: grammarModel.size,
            group: grammarModel.group,
            order: grammarModel.order,
            label: grammarModel.label,
            color: function (d) { return grammarModel.scaleColor.toColor(grammarModel.color(d)); },
            class: function (d) { return grammarModel.scaleColor.toClass(grammarModel.color(d)); },
            model: grammarModel,
            toFibers: function () {
                var data = grammarModel.data();
                var groups = _utils_utils__WEBPACK_IMPORTED_MODULE_3__["groupBy"](data, grammarModel.group);
                return (Object
                    .keys(groups)
                    .sort(function (a, b) { return grammarModel.order(a) - grammarModel.order(b); })
                    .reduce(function (memo, k) { return memo.concat([groups[k]]); }, []));
            }
        };
    };
    GenericCartesian.prototype.drawFrames = function () {
        var self = this;
        var options = this.config.options;
        var round = (function (x, decimals) {
            var kRound = Math.pow(10, decimals);
            return (Math.round(kRound * x) / kRound);
        });
        var size = (function (d) { return round(self.screenModel.size(d) / 2, 4); });
        var createUpdateFunc = _utils_d3_decorators__WEBPACK_IMPORTED_MODULE_2__["d3_animationInterceptor"];
        var drawPart = function (that, id, props) {
            var speed = self.config.guide.animationSpeed;
            var part = that
                .selectAll("." + id)
                .data(function (row) { return [row]; }, self.screenModel.id);
            part.exit()
                .call(createUpdateFunc(speed, null, { width: 0 }, function (node) { return d3_selection__WEBPACK_IMPORTED_MODULE_4__["select"](node).remove(); }));
            part.call(createUpdateFunc(speed, null, props));
            part.enter()
                .append('rect')
                .style('stroke-width', 0)
                .call(createUpdateFunc(speed, { width: 0 }, props));
        };
        var flip = this.config.flip;
        var x = flip ? 'y' : 'x';
        var y = flip ? 'x' : 'y';
        var y0 = flip ? 'x0' : 'y0';
        var w = flip ? 'height' : 'width';
        var h = flip ? 'width' : 'height';
        var drawElement = function (selection) {
            drawPart(selection, 'lvl-top', (_a = {},
                _a[w] = (function (d) { return size(d); }),
                _a[h] = 1,
                _a[x] = (function (d) { return self.screenModel[x](d) - size(d) / 2; }),
                _a[y] = (function (d) { return self.screenModel[y](d); }),
                _a.fill = (function (d) { return self.screenModel.color(d); }),
                _a.class = (function (d) { return "lvl-top " + self.screenModel.class(d); }),
                _a));
            drawPart(selection, 'lvl-btm', (_b = {},
                _b[w] = (function (d) { return size(d); }),
                _b[h] = 1,
                _b[x] = (function (d) { return self.screenModel[x](d) - size(d) / 2; }),
                _b[y] = (function (d) { return self.screenModel[y0](d); }),
                _b.fill = (function (d) { return self.screenModel.color(d); }),
                _b.class = (function (d) { return "lvl-btm " + self.screenModel.class(d); }),
                _b));
            drawPart(selection, 'lvl-link', (_c = {},
                _c[w] = 0.5,
                _c[h] = (function (d) { return Math.abs(self.screenModel[y](d) - self.screenModel[y0](d)); }),
                _c[x] = (function (d) { return self.screenModel[x](d) - 0.25; }),
                _c[y] = (function (d) { return Math.min(self.screenModel[y](d), self.screenModel[y0](d)); }),
                _c.fill = (function (d) { return self.screenModel.color(d); }),
                _c.class = (function (d) { return "lvl-link " + self.screenModel.class(d); }),
                _c));
            var _a, _b, _c;
        };
        var updateGroups = function (selection) {
            selection.attr('class', "frame-id-" + self.config.uid)
                .call(function (selection) {
                var generic = selection
                    .selectAll('.generic')
                    .data(function (fiber) { return fiber; }, self.screenModel.id);
                generic
                    .exit()
                    .remove();
                generic
                    .call(drawElement);
                generic
                    .enter()
                    .append('g')
                    .attr('class', 'generic')
                    .call(drawElement);
            });
        };
        var groups = _utils_utils__WEBPACK_IMPORTED_MODULE_3__["groupBy"](this.data(), self.screenModel.group);
        var fibers = Object
            .keys(groups)
            .sort(function (a, b) { return self.screenModel.order(a) - self.screenModel.order(b); })
            .reduce(function (memo, k) { return memo.concat([groups[k]]); }, []);
        var frameGroups = options
            .container
            .selectAll(".frame-id-" + self.config.uid)
            .data(fibers);
        frameGroups
            .exit()
            .remove();
        frameGroups
            .call(updateGroups);
        frameGroups
            .enter()
            .append('g')
            .call(updateGroups);
    };
    return GenericCartesian;
}(_element__WEBPACK_IMPORTED_MODULE_0__["Element"]));



/***/ }),

/***/ "./src/elements/element.interval.js":
/*!******************************************!*\
  !*** ./src/elements/element.interval.js ***!
  \******************************************/
/*! exports provided: Interval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interval", function() { return Interval; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/const.js");
/* harmony import */ var _grammar_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../grammar-registry */ "./src/grammar-registry.ts");
/* harmony import */ var _decorators_layer_labels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorators/layer-labels */ "./src/elements/decorators/layer-labels.ts");
/* harmony import */ var _utils_d3_decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/d3-decorators */ "./src/utils/d3-decorators.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _utils_utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/utils-dom */ "./src/utils/utils-dom.ts");
/* harmony import */ var _utils_utils_draw__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/utils-draw */ "./src/utils/utils-draw.ts");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3-selection */ "d3-selection");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(d3_selection__WEBPACK_IMPORTED_MODULE_7__);








var d3Data = (function (node) { return d3_selection__WEBPACK_IMPORTED_MODULE_7__["select"](node).data()[0]; });
var Interval = {
    init: function (xConfig) {
        var config = Object.assign({}, xConfig);
        config.guide = (config.guide || {});
        config.guide = _utils_utils__WEBPACK_IMPORTED_MODULE_4__["defaults"]((config.guide), {
            animationSpeed: 0,
            avoidScalesOverflow: true,
            maxHighlightDistance: 32,
            prettify: true,
            sortByBarHeight: true,
            enableColorToBarPosition: (config.guide.enableColorToBarPosition != null ?
                config.guide.enableColorToBarPosition :
                !config.stack)
        });
        config.guide.size = _utils_utils__WEBPACK_IMPORTED_MODULE_4__["defaults"]((config.guide.size || {}), {
            enableDistributeEvenly: true
        });
        config.guide.label = _utils_utils__WEBPACK_IMPORTED_MODULE_4__["defaults"]((config.guide.label || {}), {
            position: (config.flip ?
                (config.stack ?
                    [
                        'r-',
                        'l+',
                        'hide-by-label-height-horizontal',
                        'cut-label-horizontal'
                    ] :
                    [
                        'outside-then-inside-horizontal',
                        'auto:hide-on-label-label-overlap'
                    ]) :
                (config.stack ?
                    [
                        'rotate-on-size-overflow',
                        't-',
                        'b+',
                        'hide-by-label-height-vertical',
                        'cut-label-vertical',
                        'auto:hide-on-label-label-overlap'
                    ] :
                    [
                        'rotate-on-size-overflow',
                        'outside-then-inside-vertical',
                        'auto:hide-on-label-label-overlap'
                    ]))
        });
        var avoidScalesOverflow = config.guide.avoidScalesOverflow;
        var enableColorPositioning = config.guide.enableColorToBarPosition;
        var enableDistributeEvenly = config.guide.size.enableDistributeEvenly;
        config.transformRules = [
            config.flip && _grammar_registry__WEBPACK_IMPORTED_MODULE_1__["GrammarRegistry"].get('flip'),
            config.guide.obsoleteVerticalStackOrder && _grammar_registry__WEBPACK_IMPORTED_MODULE_1__["GrammarRegistry"].get('obsoleteVerticalStackOrder'),
            config.stack && _grammar_registry__WEBPACK_IMPORTED_MODULE_1__["GrammarRegistry"].get('stack'),
            enableColorPositioning && _grammar_registry__WEBPACK_IMPORTED_MODULE_1__["GrammarRegistry"].get('positioningByColor')
        ]
            .filter(function (x) { return x; });
        config.adjustRules = [
            (enableDistributeEvenly && (function (prevModel, args) {
                var sizeCfg = _utils_utils__WEBPACK_IMPORTED_MODULE_4__["defaults"]((config.guide.size || {}), {
                    defMinSize: config.guide.prettify ? 3 : 0,
                    defMaxSize: config.guide.prettify ? 40 : Number.MAX_VALUE
                });
                var params = Object.assign({}, args, {
                    defMin: sizeCfg.defMinSize,
                    defMax: sizeCfg.defMaxSize,
                    minLimit: sizeCfg.minSize,
                    maxLimit: sizeCfg.maxSize
                });
                return _grammar_registry__WEBPACK_IMPORTED_MODULE_1__["GrammarRegistry"].get('size_distribute_evenly')(prevModel, params);
            })),
            (avoidScalesOverflow &&
                enableDistributeEvenly &&
                (function (prevModel, args) {
                    var params = Object.assign({}, args, {
                        sizeDirection: 'x'
                    });
                    return _grammar_registry__WEBPACK_IMPORTED_MODULE_1__["GrammarRegistry"].get('avoidScalesOverflow')(prevModel, params);
                })),
            (config.stack && _grammar_registry__WEBPACK_IMPORTED_MODULE_1__["GrammarRegistry"].get('adjustYScale'))
        ].filter(function (x) { return x; });
        return config;
    },
    addInteraction: function () {
        var _this = this;
        var node = this.node();
        var createFilter = (function (data, falsy) { return (function (row) { return row === data ? true : falsy; }); });
        node.on('highlight', function (sender, filter) { return _this.highlight(filter); });
        node.on('data-hover', (function (sender, e) { return _this.highlight(createFilter(e.data, null)); }));
    },
    draw: function () {
        var node = this.node();
        var config = node.config;
        var options = config.options;
        // TODO: hide it somewhere
        options.container = options.slot(config.uid);
        var prettify = config.guide.prettify;
        var baseCssClass = "i-role-element i-role-datum bar " + _const__WEBPACK_IMPORTED_MODULE_0__["CSS_PREFIX"] + "bar";
        var screenModel = node.screenModel;
        var d3Attrs = this.buildModel(screenModel, { prettify: prettify, minBarH: 1, minBarW: 1, baseCssClass: baseCssClass });
        var createUpdateFunc = _utils_d3_decorators__WEBPACK_IMPORTED_MODULE_3__["d3_animationInterceptor"];
        var barX = config.flip ? 'y' : 'x';
        var barY = config.flip ? 'x' : 'y';
        var barH = config.flip ? 'width' : 'height';
        var barW = config.flip ? 'height' : 'width';
        var fibers = screenModel.toFibers();
        var data = fibers
            .reduce(function (arr, f) { return arr.concat(f); }, []);
        var barClass = d3Attrs.class;
        var updateAttrs = _utils_utils__WEBPACK_IMPORTED_MODULE_4__["omit"](d3Attrs, 'class');
        var bars = options.container.selectAll('.bar')
            .data(data, screenModel.id);
        bars.exit()
            .classed('tau-removing', true)
            .call(createUpdateFunc(config.guide.animationSpeed, null, (_a = {},
            _a[barX] = function () {
                var d3This = d3_selection__WEBPACK_IMPORTED_MODULE_7__["select"](this);
                var x = d3This.attr(barX) - 0;
                var w = d3This.attr(barW) - 0;
                return x + w / 2;
            },
            _a[barY] = function () {
                return this.getAttribute('data-zero');
            },
            _a[barW] = 0,
            _a[barH] = 0,
            _a), 
        // ((node) => d3.select(node).remove())
        (function (node) {
            // NOTE: Sometimes nodes are removed after
            // they re-appear by filter.
            var el = d3_selection__WEBPACK_IMPORTED_MODULE_7__["select"](node);
            if (el.classed('tau-removing')) {
                el.remove();
            }
        })));
        bars.call(createUpdateFunc(config.guide.animationSpeed, null, updateAttrs));
        var merged = bars.enter()
            .append('rect')
            .call(createUpdateFunc(config.guide.animationSpeed, (_b = {}, _b[barY] = screenModel[barY + "0"], _b[barH] = 0, _b), updateAttrs))
            .merge(bars)
            .attr('class', barClass)
            .attr('data-zero', screenModel[barY + "0"]);
        node.subscribe(new _decorators_layer_labels__WEBPACK_IMPORTED_MODULE_2__["LayerLabels"](screenModel.model, screenModel.model.flip, config.guide.label, options)
            .draw(fibers));
        var sortByWidthThenY = (function (a, b) {
            var dataA = d3Data(a);
            var dataB = d3Data(b);
            var widthA = d3Attrs.width(dataA);
            var widthB = d3Attrs.width(dataB);
            if (widthA === widthB) {
                var yA = d3Attrs.y(dataA);
                var yB = d3Attrs.y(dataB);
                if (yA === yB) {
                    return sortByOrder(a, b);
                }
                return (yA - yB);
            }
            return (widthB - widthA);
        });
        var sortByHeightThenX = (function (a, b) {
            var dataA = d3Data(a);
            var dataB = d3Data(b);
            var heightA = d3Attrs.height(dataA);
            var heightB = d3Attrs.height(dataB);
            if (heightA === heightB) {
                var xA = d3Attrs.x(dataA);
                var xB = d3Attrs.x(dataB);
                if (xA === xB) {
                    return sortByOrder(a, b);
                }
                return (xA - xB);
            }
            return (heightB - heightA);
        });
        var sortByOrder = (function () {
            var order = data.reduce(function (map, d, i) {
                map.set(d, i + 1);
                return map;
            }, new Map());
            return function (a, b) {
                var orderA = (order.get(d3Data(a)) || -1);
                var orderB = (order.get(d3Data(b)) || -1);
                return (orderA - orderB);
            };
        })();
        this._barsSorter = (config.guide.sortByBarHeight ?
            (config.flip ?
                sortByWidthThenY :
                sortByHeightThenX) :
            sortByOrder);
        var elementsOrder = {
            rect: 0,
            text: 1
        };
        this._typeSorter = (function (a, b) { return elementsOrder[a.tagName] - elementsOrder[b.tagName]; });
        this._sortElements(this._typeSorter, this._barsSorter);
        node.subscribe(merged);
        this._boundsInfo = this._getBoundsInfo(merged.nodes());
        var _a, _b;
    },
    buildModel: function (screenModel, _a) {
        var prettify = _a.prettify, minBarH = _a.minBarH, minBarW = _a.minBarW, baseCssClass = _a.baseCssClass;
        var barSize = (function (d) {
            var w = screenModel.size(d);
            if (prettify) {
                w = Math.max(minBarW, w);
            }
            return w;
        });
        var model;
        var value = function (d) { return d[screenModel.model.scaleY.dim]; };
        if (screenModel.flip) {
            var barHeight_1 = (function (d) { return Math.abs(screenModel.x(d) - screenModel.x0(d)); });
            model = {
                y: (function (d) { return screenModel.y(d) - barSize(d) * 0.5; }),
                x: (function (d) {
                    var x = Math.min(screenModel.x0(d), screenModel.x(d));
                    if (prettify) {
                        // decorate for better visual look & feel
                        var h = barHeight_1(d);
                        var dx = value(d);
                        var offset = 0;
                        if (dx === 0) {
                            offset = 0;
                        }
                        if (dx > 0) {
                            offset = (h);
                        }
                        if (dx < 0) {
                            offset = (0 - minBarH);
                        }
                        var isTooSmall = (h < minBarH);
                        return (isTooSmall) ? (x + offset) : (x);
                    }
                    else {
                        return x;
                    }
                }),
                height: (function (d) { return barSize(d); }),
                width: (function (d) {
                    var h = barHeight_1(d);
                    if (prettify) {
                        // decorate for better visual look & feel
                        return (value(d) === 0) ? h : Math.max(minBarH, h);
                    }
                    return h;
                })
            };
        }
        else {
            var barHeight_2 = (function (d) { return Math.abs(screenModel.y(d) - screenModel.y0(d)); });
            model = {
                x: (function (d) { return screenModel.x(d) - barSize(d) * 0.5; }),
                y: (function (d) {
                    var y = Math.min(screenModel.y0(d), screenModel.y(d));
                    if (prettify) {
                        // decorate for better visual look & feel
                        var h = barHeight_2(d);
                        var isTooSmall = (h < minBarH);
                        y = ((isTooSmall && (value(d) > 0)) ? (y - minBarH) : y);
                    }
                    return y;
                }),
                width: (function (d) { return barSize(d); }),
                height: (function (d) {
                    var h = barHeight_2(d);
                    if (prettify) {
                        // decorate for better visual look & feel
                        h = ((value(d) === 0) ? h : Math.max(minBarH, h));
                    }
                    return h;
                })
            };
        }
        return Object.assign(model, {
            class: (function (d) { return baseCssClass + " " + screenModel.class(d); }),
            fill: (function (d) { return screenModel.color(d); })
        });
    },
    _sortElements: function () {
        var sorters = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            sorters[_i] = arguments[_i];
        }
        var container = this.node().config.options.container.node();
        _utils_utils_dom__WEBPACK_IMPORTED_MODULE_5__["sortChildren"](container, _utils_utils__WEBPACK_IMPORTED_MODULE_4__["createMultiSorter"].apply(_utils_utils__WEBPACK_IMPORTED_MODULE_4__, sorters));
    },
    _getBoundsInfo: function (bars) {
        if (bars.length === 0) {
            return null;
        }
        var screenModel = this.node().screenModel;
        var flip = this.node().config.flip;
        var items = bars
            .map(function (node) {
            var data = d3_selection__WEBPACK_IMPORTED_MODULE_7__["select"](node).data()[0];
            var x = screenModel.x(data);
            var x0 = screenModel.x0(data);
            var y = screenModel.y(data);
            var y0 = screenModel.y0(data);
            var w = Math.abs(x - x0);
            var h = Math.abs(y - y0);
            var cx = ((x + x0) / 2);
            var cy = ((y + y0) / 2);
            var invert = (y > y0);
            var box = {
                top: (cy - h / 2),
                right: (cx + w / 2),
                bottom: (cy + h / 2),
                left: (cx - w / 2)
            };
            return { node: node, data: data, cx: cx, cy: cy, box: box, invert: invert };
        });
        var bounds = items.reduce(function (bounds, _a) {
            var box = _a.box;
            bounds.left = Math.min(box.left, bounds.left);
            bounds.right = Math.max(box.right, bounds.right);
            bounds.top = Math.min(box.top, bounds.top);
            bounds.bottom = Math.max(box.bottom, bounds.bottom);
            return bounds;
        }, {
            left: Number.MAX_VALUE,
            right: Number.MIN_VALUE,
            top: Number.MAX_VALUE,
            bottom: Number.MIN_VALUE
        });
        var ticks = _utils_utils__WEBPACK_IMPORTED_MODULE_4__["unique"](items.map(flip ?
            (function (item) { return item.cy; }) :
            (function (item) { return item.cx; }))).sort(function (a, b) { return a - b; });
        var groups = ticks.reduce((function (obj, value) { return (obj[value] = [], obj); }), {});
        items.forEach(function (item) {
            var tick = ticks.find(flip ? (function (value) { return item.cy === value; }) : (function (value) { return item.cx === value; }));
            groups[tick].push(item);
        });
        var split = function (values) {
            if (values.length === 1) {
                return groups[values];
            }
            var midIndex = Math.ceil(values.length / 2);
            var middle = (values[midIndex - 1] + values[midIndex]) / 2;
            return {
                middle: middle,
                lower: split(values.slice(0, midIndex)),
                greater: split(values.slice(midIndex))
            };
        };
        var tree = split(ticks);
        return { bounds: bounds, tree: tree };
    },
    getClosestElement: function (_cursorX, _cursorY) {
        if (!this._boundsInfo) {
            return null;
        }
        var _a = this._boundsInfo, bounds = _a.bounds, tree = _a.tree;
        var container = this.node().config.options.container;
        var flip = this.node().config.flip;
        var translate = _utils_utils_draw__WEBPACK_IMPORTED_MODULE_6__["getDeepTransformTranslate"](container.node());
        var cursorX = (_cursorX - translate.x);
        var cursorY = (_cursorY - translate.y);
        var maxHighlightDistance = this.node().config.guide.maxHighlightDistance;
        if ((cursorX < bounds.left - maxHighlightDistance) ||
            (cursorX > bounds.right + maxHighlightDistance) ||
            (cursorY < bounds.top - maxHighlightDistance) ||
            (cursorY > bounds.bottom + maxHighlightDistance)) {
            return null;
        }
        var measureCursor = (flip ? cursorY : cursorX);
        var valueCursor = (flip ? cursorX : cursorY);
        var isBetween = (function (value, start, end) { return value >= start && value <= end; });
        var closestElements = (function getClosestElements(el) {
            if (Array.isArray(el)) {
                return el;
            }
            return getClosestElements(measureCursor > el.middle ? el.greater : el.lower);
        })(tree)
            .map(function (el) {
            var elStart = (flip ? el.box.left : el.box.top);
            var elEnd = (flip ? el.box.right : el.box.bottom);
            var cursorInside = isBetween(valueCursor, elStart, elEnd);
            if (!cursorInside &&
                (Math.abs(valueCursor - elStart) > maxHighlightDistance) &&
                (Math.abs(valueCursor - elEnd) > maxHighlightDistance)) {
                return null;
            }
            var distToValue = Math.abs(valueCursor - ((el.invert !== flip) ? elEnd : elStart));
            return Object.assign(el, { distToValue: distToValue, cursorInside: cursorInside });
        })
            .filter(function (el) { return el; })
            .sort((function (a, b) {
            if (a.cursorInside !== b.cursorInside) {
                return (b.cursorInside - a.cursorInside);
            }
            return (Math.abs(a.distToValue) - Math.abs(b.distToValue));
        }))
            .map(function (el) {
            var x = (el.cx);
            var y = (el.cy);
            var distance = Math.abs(flip ? (cursorY - y) : (cursorX - x));
            var secondaryDistance = Math.abs(flip ? (cursorX - x) : (cursorY - y));
            return { node: el.node, data: el.data, distance: distance, secondaryDistance: secondaryDistance, x: x, y: y };
        });
        return (closestElements[0] || null);
    },
    highlight: function (filter) {
        var x = 'tau-chart__highlighted';
        var _ = 'tau-chart__dimmed';
        var container = this.node().config.options.container;
        var classed = (_a = {},
            _a[x] = (function (d) { return filter(d) === true; }),
            _a[_] = (function (d) { return filter(d) === false; }),
            _a);
        container
            .selectAll('.bar')
            .call(Object(_utils_d3_decorators__WEBPACK_IMPORTED_MODULE_3__["d3_setClasses"])(classed));
        container
            .selectAll('.i-role-label')
            .call(Object(_utils_d3_decorators__WEBPACK_IMPORTED_MODULE_3__["d3_setClasses"])(classed));
        this._sortElements(function (a, b) { return (filter(d3Data(a)) - filter(d3Data(b))); }, this._typeSorter, this._barsSorter);
        var _a;
    }
};



/***/ }),

/***/ "./src/elements/element.line.js":
/*!**************************************!*\
  !*** ./src/elements/element.line.js ***!
  \**************************************/
/*! exports provided: Line */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return Line; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/const.js");
/* harmony import */ var _element_path_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element.path.base */ "./src/elements/element.path.base.js");
/* harmony import */ var _grammar_registry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../grammar-registry */ "./src/grammar-registry.ts");
/* harmony import */ var _utils_css_class_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/css-class-map */ "./src/utils/css-class-map.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _utils_d3_decorators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/d3-decorators */ "./src/utils/d3-decorators.js");
/* harmony import */ var _utils_path_interpolators_interpolators_registry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/path/interpolators/interpolators-registry */ "./src/utils/path/interpolators/interpolators-registry.ts");
/* harmony import */ var _utils_path_svg_brush_line__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/path/svg/brush-line */ "./src/utils/path/svg/brush-line.ts");
/* harmony import */ var _utils_path_svg_line__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/path/svg/line */ "./src/utils/path/svg/line.ts");
/* harmony import */ var _utils_utils_grammar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/utils-grammar */ "./src/utils/utils-grammar.ts");










var Line = {
    draw: _element_path_base__WEBPACK_IMPORTED_MODULE_1__["BasePath"].draw,
    getClosestElement: _element_path_base__WEBPACK_IMPORTED_MODULE_1__["BasePath"].getClosestElement,
    highlight: _element_path_base__WEBPACK_IMPORTED_MODULE_1__["BasePath"].highlight,
    highlightDataPoints: _element_path_base__WEBPACK_IMPORTED_MODULE_1__["BasePath"].highlightDataPoints,
    addInteraction: _element_path_base__WEBPACK_IMPORTED_MODULE_1__["BasePath"].addInteraction,
    _getBoundsInfo: _element_path_base__WEBPACK_IMPORTED_MODULE_1__["BasePath"]._getBoundsInfo,
    _sortElements: _element_path_base__WEBPACK_IMPORTED_MODULE_1__["BasePath"]._sortElements,
    init: function (xConfig) {
        var config = _element_path_base__WEBPACK_IMPORTED_MODULE_1__["BasePath"].init(xConfig);
        var enableStack = config.stack;
        config.guide = _utils_utils__WEBPACK_IMPORTED_MODULE_4__["defaults"]((config.guide || {}), {
            avoidScalesOverflow: true,
            interpolate: 'linear'
        });
        config.transformRules = [
            config.flip && _grammar_registry__WEBPACK_IMPORTED_MODULE_2__["GrammarRegistry"].get('flip'),
            !enableStack && _grammar_registry__WEBPACK_IMPORTED_MODULE_2__["GrammarRegistry"].get('groupOrderByAvg'),
            Object(_utils_utils_grammar__WEBPACK_IMPORTED_MODULE_9__["useFillGapsRule"])(config),
            enableStack && _grammar_registry__WEBPACK_IMPORTED_MODULE_2__["GrammarRegistry"].get('stack')
        ];
        var avoidScalesOverflow = config.guide.avoidScalesOverflow;
        var isEmptySize = (function (model) { return model.scaleSize.isEmptyScale(); });
        config.adjustRules = [
            (function (prevModel, args) {
                var sizeCfg = _utils_utils__WEBPACK_IMPORTED_MODULE_4__["defaults"]((config.guide.size || {}), {
                    defMinSize: 2,
                    defMaxSize: (isEmptySize(prevModel) ? 6 : 40)
                });
                var params = Object.assign({}, args, {
                    defMin: sizeCfg.defMinSize,
                    defMax: sizeCfg.defMaxSize,
                    minLimit: sizeCfg.minSize,
                    maxLimit: sizeCfg.maxSize
                });
                return _grammar_registry__WEBPACK_IMPORTED_MODULE_2__["GrammarRegistry"].get('adjustStaticSizeScale')(prevModel, params);
            }),
            (avoidScalesOverflow && (function (prevModel, args) {
                if (isEmptySize(prevModel)) {
                    return (function () { return ({}); });
                }
                var params = Object.assign({}, args, {
                    sizeDirection: 'xy'
                });
                return _grammar_registry__WEBPACK_IMPORTED_MODULE_2__["GrammarRegistry"].get('avoidScalesOverflow')(prevModel, params);
            }))
        ].filter(function (x) { return x; });
        return config;
    },
    buildModel: function (screenModel) {
        var config = this.node().config;
        var guide = config.guide;
        var options = config.options;
        var isEmptySize = !screenModel.model.scaleSize.dim; // TODO: empty method for size scale???;
        var widthCss = (isEmptySize ?
            (guide.widthCssClass || Object(_utils_css_class_map__WEBPACK_IMPORTED_MODULE_3__["getLineClassesByWidth"])(options.width)) :
            (''));
        var countCss = Object(_utils_css_class_map__WEBPACK_IMPORTED_MODULE_3__["getLineClassesByCount"])(screenModel.model.scaleColor.domain().length);
        var tag = isEmptySize ? 'line' : 'area';
        var groupPref = "" + _const__WEBPACK_IMPORTED_MODULE_0__["CSS_PREFIX"] + tag + " " + tag + " i-role-path " + widthCss + " " + countCss + " " + guide.cssClass + " ";
        var pathAttributes = isEmptySize ?
            ({
                stroke: function (fiber) { return baseModel.color(fiber[0]); },
                class: 'i-role-datum'
            }) :
            ({
                fill: function (fiber) { return baseModel.color(fiber[0]); }
            });
        var d3LineBuilder = (Object(_utils_path_interpolators_interpolators_registry__WEBPACK_IMPORTED_MODULE_6__["getInterpolatorSplineType"])(guide.interpolate) === 'cubic' ?
            (isEmptySize ? _utils_path_svg_line__WEBPACK_IMPORTED_MODULE_8__["getCurve"] : _utils_path_svg_brush_line__WEBPACK_IMPORTED_MODULE_7__["getBrushCurve"]) :
            (isEmptySize ? _utils_path_svg_line__WEBPACK_IMPORTED_MODULE_8__["getPolyline"] : _utils_path_svg_brush_line__WEBPACK_IMPORTED_MODULE_7__["getBrushLine"]));
        var baseModel = _element_path_base__WEBPACK_IMPORTED_MODULE_1__["BasePath"].baseModel(screenModel);
        var toPoint = isEmptySize ?
            function (d) { return ({
                id: screenModel.id(d),
                x: baseModel.x(d),
                y: baseModel.y(d)
            }); } :
            function (d) { return ({
                id: screenModel.id(d),
                x: baseModel.x(d),
                y: baseModel.y(d),
                size: baseModel.size(d)
            }); };
        baseModel.groupAttributes = {
            class: function (fiber) { return groupPref + " " + baseModel.class(fiber[0]) + " frame"; }
        };
        baseModel.pathElement = 'path';
        baseModel.anchorShape = 'circle';
        baseModel.pathAttributesEnterInit = pathAttributes;
        baseModel.pathAttributesUpdateDone = pathAttributes;
        baseModel.pathTween = {
            attr: 'd',
            fn: Object(_utils_d3_decorators__WEBPACK_IMPORTED_MODULE_5__["d3_createPathTween"])('d', d3LineBuilder, [toPoint], screenModel.id, guide.interpolate)
        };
        return baseModel;
    }
};



/***/ }),

/***/ "./src/elements/element.parallel.line.js":
/*!***********************************************!*\
  !*** ./src/elements/element.parallel.line.js ***!
  \***********************************************/
/*! exports provided: ParallelLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParallelLine", function() { return ParallelLine; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/const.js");
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element */ "./src/elements/element.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-shape */ "d3-shape");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(d3_shape__WEBPACK_IMPORTED_MODULE_3__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var ParallelLine = /** @class */ (function (_super) {
    __extends(ParallelLine, _super);
    function ParallelLine(config) {
        var _this = _super.call(this, config) || this;
        _this.config = config;
        _this.config.guide = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["defaults"](_this.config.guide || {}, {});
        _this.on('highlight', function (sender, e) { return _this.highlight(e); });
        return _this;
    }
    ParallelLine.prototype.defineGrammarModel = function (fnCreateScale) {
        var config = this.config;
        var options = config.options;
        this.color = fnCreateScale('color', config.color, {});
        this.scalesMap = config.columns.reduce(function (memo, xi) {
            memo[xi] = fnCreateScale('pos', xi, [0, options.height]);
            return memo;
        }, {});
        var step = options.width / (config.columns.length - 1);
        var colsMap = config.columns.reduce(function (memo, p, i) {
            memo[p] = (i * step);
            return memo;
        }, {});
        this.xBase = (function (p) { return colsMap[p]; });
        this.regScale('columns', this.scalesMap)
            .regScale('color', this.color);
        return {};
    };
    ParallelLine.prototype.drawFrames = function (frames) {
        var node = this.config;
        var options = this.config.options;
        var scalesMap = this.scalesMap;
        var xBase = this.xBase;
        var color = this.color;
        var d3Line = d3_shape__WEBPACK_IMPORTED_MODULE_3__["line"]();
        var drawPath = function (selection) {
            selection.attr('d', function (row) { return d3Line(node.columns.map(function (p) { return [xBase(p), scalesMap[p](row[scalesMap[p].dim])]; })); });
        };
        var markPath = function (sel) {
            sel.attr('stroke', function (row) { return color.toColor(color(row[color.dim])); });
            sel.attr('class', function (row) { return _const__WEBPACK_IMPORTED_MODULE_0__["CSS_PREFIX"] + "__line line " + color.toClass(color(row[color.dim])) + " foreground"; });
        };
        var updateFrame = function (selection) {
            var backgroundPath = selection
                .selectAll('.background')
                .data(function (f) { return f.part(); });
            backgroundPath
                .exit()
                .remove();
            backgroundPath
                .call(drawPath);
            backgroundPath
                .enter()
                .append('path')
                .attr('class', 'background line')
                .call(drawPath);
            var foregroundPath = selection
                .selectAll('.foreground')
                .data(function (f) { return f.part(); });
            foregroundPath
                .exit()
                .remove();
            foregroundPath
                .call(function (selection) {
                drawPath(selection);
                markPath(selection);
            });
            foregroundPath
                .enter()
                .append('path')
                .call(function (selection) {
                drawPath(selection);
                markPath(selection);
            });
        };
        var part = options.container
            .selectAll('.lines-frame')
            .data(frames, (function (f) { return f.hash(); }));
        part.exit()
            .remove();
        part.call(updateFrame);
        part.enter()
            .append('g')
            .attr('class', 'lines-frame')
            .call(updateFrame);
        this.subscribe(options.container.selectAll('.lines-frame .foreground'));
    };
    ParallelLine.prototype.highlight = function (filter) {
        this.config
            .options
            .container
            .selectAll('.lines-frame .foreground')
            .style('visibility', function (d) { return (filter(d) ? '' : 'hidden'); });
    };
    return ParallelLine;
}(_element__WEBPACK_IMPORTED_MODULE_1__["Element"]));



/***/ }),

/***/ "./src/elements/element.path.base.js":
/*!*******************************************!*\
  !*** ./src/elements/element.path.base.js ***!
  \*******************************************/
/*! exports provided: BasePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePath", function() { return BasePath; });
/* harmony import */ var _decorators_layer_labels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decorators/layer-labels */ "./src/elements/decorators/layer-labels.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const */ "./src/const.js");
/* harmony import */ var _utils_d3_decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/d3-decorators */ "./src/utils/d3-decorators.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _utils_utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils-dom */ "./src/utils/utils-dom.ts");
/* harmony import */ var _utils_utils_draw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/utils-draw */ "./src/utils/utils-draw.ts");
/* harmony import */ var _utils_utils_grammar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/utils-grammar */ "./src/utils/utils-grammar.ts");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3-selection */ "d3-selection");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(d3_selection__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _decorators_anchors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./decorators/anchors */ "./src/elements/decorators/anchors.ts");
/* harmony import */ var _utils_utils_position__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/utils-position */ "./src/utils/utils-position.ts");










var datumClass = "i-role-datum";
var pointPref = _const__WEBPACK_IMPORTED_MODULE_1__["CSS_PREFIX"] + "dot-line dot-line i-role-dot " + datumClass + " " + _const__WEBPACK_IMPORTED_MODULE_1__["CSS_PREFIX"] + "dot";
var BasePath = {
    init: function (xConfig) {
        var config = xConfig;
        config.guide = _utils_utils__WEBPACK_IMPORTED_MODULE_3__["defaults"]((config.guide || {}), {
            animationSpeed: 0,
            cssClass: '',
            maxHighlightDistance: 32,
            widthCssClass: '',
            color: {},
            label: {}
        });
        config.guide.label = _utils_utils__WEBPACK_IMPORTED_MODULE_3__["defaults"](config.guide.label, {
            fontSize: 11,
            hideEqualLabels: true,
            position: [
                'auto:avoid-label-label-overlap',
                'auto:avoid-label-anchor-overlap',
                'auto:avoid-label-edges-overlap',
                'auto:adjust-on-label-overflow',
                'auto:hide-on-label-label-overlap',
                'auto:hide-on-label-edges-overlap'
            ]
        });
        config.guide.color = _utils_utils__WEBPACK_IMPORTED_MODULE_3__["defaults"](config.guide.color || {}, { fill: null });
        if (['never', 'hover', 'always'].indexOf(config.guide.showAnchors) < 0) {
            config.guide.showAnchors = 'hover';
        }
        config.transformRules = [];
        config.adjustRules = [];
        return config;
    },
    baseModel: function (screenModel) {
        var kRound = 10000;
        var baseModel = {
            gog: screenModel.model,
            x: screenModel.x,
            y: screenModel.y,
            x0: screenModel.x0,
            y0: screenModel.y0,
            size: screenModel.size,
            group: screenModel.group,
            order: screenModel.order,
            color: screenModel.color,
            class: screenModel.class,
            groupAttributes: {},
            pathAttributesUpdateInit: {},
            pathAttributesUpdateDone: {},
            pathAttributesEnterInit: {},
            pathAttributesEnterDone: {},
            pathElement: null,
            dotAttributes: {
                r: (function (d) { return (Math.round(kRound * baseModel.size(d) / 2) / kRound); }),
                cx: function (d) { return baseModel.x(d); },
                cy: function (d) { return baseModel.y(d); },
                fill: function (d) { return baseModel.color(d); },
                class: function (d) { return (pointPref + " " + baseModel.class(d)); }
            },
            dotAttributesDefault: {
                r: 0,
                cy: function (d) { return baseModel.y0(d); }
            }
        };
        return baseModel;
    },
    addInteraction: function () {
        var _this = this;
        var node = this.node();
        var config = this.node().config;
        var createFilter = (function (data, falsy) { return (function (row) { return row === data ? true : falsy; }); });
        node.on('highlight', function (sender, filter) { return _this.highlight(filter); });
        node.on('highlight-data-points', function (sender, filter) { return _this.highlightDataPoints(filter); });
        if (config.guide.showAnchors !== 'never') {
            node.on('data-hover', (function (sender, e) { return _this.highlightDataPoints(createFilter(e.data, null)); }));
        }
    },
    draw: function () {
        var node = this.node();
        var config = node.config;
        var guide = config.guide;
        var options = config.options;
        options.container = options.slot(config.uid);
        var screenModel = node.screenModel;
        var model = this.buildModel(screenModel);
        this.domElementModel = model;
        var createUpdateFunc = _utils_d3_decorators__WEBPACK_IMPORTED_MODULE_2__["d3_animationInterceptor"];
        var classToSelector = function (cls) { return cls.split(/\s+/g).map(function (c) { return "." + c; }).join(''); };
        var updateGroupContainer = function (selection) {
            selection.call(Object(_utils_d3_decorators__WEBPACK_IMPORTED_MODULE_2__["d3_setAttrs"])(model.groupAttributes));
            var points = selection
                .selectAll(classToSelector(pointPref))
                .data(function (fiber) { return (fiber.length <= 1) ? fiber : []; }, screenModel.id);
            points
                .exit()
                .call(createUpdateFunc(guide.animationSpeed, null, { r: 0 }, function (node) { return d3_selection__WEBPACK_IMPORTED_MODULE_7__["select"](node).remove(); }));
            points
                .call(createUpdateFunc(guide.animationSpeed, null, model.dotAttributes));
            var merged = points
                .enter()
                .append('circle')
                .call(createUpdateFunc(guide.animationSpeed, model.dotAttributesDefault, model.dotAttributes))
                .merge(points);
            node.subscribe(merged);
            var updatePath = function (selection) {
                if (config.guide.animationSpeed > 0 && !document.hidden) {
                    // HACK: This call fixes stacked area tween (some paths are intersected on
                    // synthetic points). Maybe caused by async call of `toPoint`.
                    selection.attr(model.pathTween.attr, function (d) {
                        return model.pathTween.fn.call(this, d)(0);
                    });
                    Object(_utils_d3_decorators__WEBPACK_IMPORTED_MODULE_2__["d3_transition"])(selection, config.guide.animationSpeed, 'pathTransition')
                        .attrTween(model.pathTween.attr, model.pathTween.fn);
                }
                else {
                    selection.attr(model.pathTween.attr, function (d) {
                        return model.pathTween.fn.call(this, d)(1);
                    });
                }
            };
            var series = selection
                .selectAll(model.pathElement + ":not(.i-data-anchor)")
                .data(function (fiber) { return (fiber.length > 1) ? [fiber] : []; }, getDataSetId);
            series
                .exit()
                .remove();
            series
                .call(createUpdateFunc(guide.animationSpeed, model.pathAttributesUpdateInit, model.pathAttributesUpdateDone, model.afterPathUpdate));
            var allSeries = series
                .enter()
                .append(model.pathElement)
                .call(createUpdateFunc(guide.animationSpeed, model.pathAttributesEnterInit, model.pathAttributesEnterDone, model.afterPathUpdate))
                .merge(series)
                .call(updatePath);
            node.subscribe(merged);
            if (guide.showAnchors !== 'never') {
                var allDots = Object(_decorators_anchors__WEBPACK_IMPORTED_MODULE_8__["drawAnchors"])(node, model, selection);
                node.subscribe(allDots);
            }
        };
        var fullFibers = screenModel.toFibers();
        var pureFibers = fullFibers.map(function (arr) { return arr.filter(_utils_utils_grammar__WEBPACK_IMPORTED_MODULE_6__["isNonSyntheticRecord"]); });
        var frameSelection = options.container.selectAll('.frame');
        // NOTE: If any point from new dataset is equal to a point from old dataset,
        // we assume that path remains the same.
        // TODO: Id of data array should remain the same (then use `fib => self.screenModel.id(fib)`).
        var getDataSetId = (function () {
            var current = (frameSelection.empty() ? [] : frameSelection.data());
            var currentIds = new Map();
            frameSelection.each(function (d) {
                currentIds.set(d, Number(this.getAttribute('data-id')));
            });
            var currentInnerIds = current.reduce(function (map, ds) {
                map.set(ds, ds.map(screenModel.id));
                return map;
            }, new Map());
            var newIds = new Map();
            var notFoundCounter = Math.max.apply(Math, [0].concat(Array.from(currentIds.values())));
            return function (fib) {
                if (newIds.has(fib)) {
                    return newIds.get(fib);
                }
                var fibIds = fib.map(function (f) { return screenModel.id(f); });
                var matching = (Array.from(currentInnerIds.entries()).find(function (_a) {
                    var currIds = _a[1];
                    return fibIds.some(function (newId) {
                        return currIds.some(function (id) { return id === newId; });
                    });
                }) || [null])[0];
                var result;
                if (matching) {
                    result = currentIds.get(matching);
                }
                else {
                    ++notFoundCounter;
                    result = notFoundCounter;
                }
                newIds.set(fib, result);
                return result;
            };
        })();
        this._getDataSetId = getDataSetId;
        var frameBinding = frameSelection
            .data(fullFibers, getDataSetId);
        frameBinding
            .exit()
            .remove();
        frameBinding
            .call(updateGroupContainer);
        frameBinding
            .enter()
            .append('g')
            .attr('data-id', getDataSetId)
            .call(updateGroupContainer);
        frameBinding.order();
        this._boundsInfo = this._getBoundsInfo(options.container.selectAll('.i-data-anchor').nodes());
        node.subscribe(new _decorators_layer_labels__WEBPACK_IMPORTED_MODULE_0__["LayerLabels"](screenModel.model, config.flip, config.guide.label, options).draw(pureFibers));
    },
    _getBoundsInfo: function (dots) {
        if (dots.length === 0) {
            return null;
        }
        var screenModel = this.node().screenModel;
        var flip = this.node().config.flip;
        var items = dots
            .map(function (node) {
            var data = d3_selection__WEBPACK_IMPORTED_MODULE_7__["select"](node).data()[0];
            var x = screenModel.x(data);
            var y = screenModel.y(data);
            return { node: node, data: data, x: x, y: y };
        })
            .filter(function (item) { return !isNaN(item.x) && !isNaN(item.y); });
        var bounds = items.reduce(function (bounds, _a) {
            var x = _a.x, y = _a.y;
            bounds.left = Math.min(x, bounds.left);
            bounds.right = Math.max(x, bounds.right);
            bounds.top = Math.min(y, bounds.top);
            bounds.bottom = Math.max(y, bounds.bottom);
            return bounds;
        }, {
            left: Number.MAX_VALUE,
            right: Number.MIN_VALUE,
            top: Number.MAX_VALUE,
            bottom: Number.MIN_VALUE
        });
        var ticks = _utils_utils__WEBPACK_IMPORTED_MODULE_3__["unique"](items.map(flip ?
            (function (item) { return item.y; }) :
            (function (item) { return item.x; }))).sort(function (a, b) { return a - b; });
        var groups = ticks.reduce((function (obj, value) { return (obj[value] = [], obj); }), {});
        items.forEach(function (item) {
            var tick = ticks.find(flip ? (function (value) { return item.y === value; }) : (function (value) { return item.x === value; }));
            groups[tick].push(item);
        });
        var split = function (values) {
            if (values.length === 1) {
                return groups[values[0]];
            }
            var midIndex = Math.ceil(values.length / 2);
            var middle = (values[midIndex - 1] + values[midIndex]) / 2;
            return {
                middle: middle,
                lower: split(values.slice(0, midIndex)),
                greater: split(values.slice(midIndex))
            };
        };
        var tree = split(ticks);
        return { bounds: bounds, tree: tree };
    },
    getClosestElement: function (cursorX, cursorY) {
        if (!this._boundsInfo) {
            return null;
        }
        var _a = this._boundsInfo, bounds = _a.bounds, tree = _a.tree;
        var container = this.node().config.options.container;
        var flip = this.node().config.flip;
        var translate = _utils_utils_draw__WEBPACK_IMPORTED_MODULE_5__["getDeepTransformTranslate"](container.node());
        var maxHighlightDistance = this.node().config.guide.maxHighlightDistance;
        if ((cursorX < bounds.left + translate.x - maxHighlightDistance) ||
            (cursorX > bounds.right + translate.x + maxHighlightDistance) ||
            (cursorY < bounds.top + translate.y - maxHighlightDistance) ||
            (cursorY > bounds.bottom + translate.y + maxHighlightDistance)) {
            return null;
        }
        var cursor = (flip ? (cursorY - translate.y) : (cursorX - translate.x));
        var items = (function getClosestElements(el) {
            if (Array.isArray(el)) {
                return el;
            }
            return getClosestElements(cursor > el.middle ? el.greater : el.lower);
        })(tree)
            .map(function (el) {
            var x = (el.x + translate.x);
            var y = (el.y + translate.y);
            var distance = Math.abs(flip ? (cursorY - y) : (cursorX - x));
            var secondaryDistance = Math.abs(flip ? (cursorX - x) : (cursorY - y));
            return { node: el.node, data: el.data, distance: distance, secondaryDistance: secondaryDistance, x: x, y: y };
        });
        return Object(_utils_utils_position__WEBPACK_IMPORTED_MODULE_9__["getClosestPointInfo"])(cursorX, cursorY, items);
    },
    highlight: function (filter) {
        var container = this.node().config.options.container;
        var x = 'tau-chart__highlighted';
        var _ = 'tau-chart__dimmed';
        var paths = container.selectAll('.i-role-path');
        var targetFibers = paths.data()
            .filter(function (fiber) {
            return fiber
                .filter(_utils_utils_grammar__WEBPACK_IMPORTED_MODULE_6__["isNonSyntheticRecord"])
                .some(filter);
        });
        var hasTarget = (targetFibers.length > 0);
        paths
            .call(Object(_utils_d3_decorators__WEBPACK_IMPORTED_MODULE_2__["d3_setClasses"])((_a = {},
            _a[x] = (function (fiber) { return hasTarget && targetFibers.indexOf(fiber) >= 0; }),
            _a[_] = (function (fiber) { return hasTarget && targetFibers.indexOf(fiber) < 0; }),
            _a)));
        var classed = (_b = {},
            _b[x] = (function (d) { return filter(d) === true; }),
            _b[_] = (function (d) { return filter(d) === false; }),
            _b);
        container
            .selectAll('.i-role-dot')
            .call(Object(_utils_d3_decorators__WEBPACK_IMPORTED_MODULE_2__["d3_setClasses"])(classed));
        container
            .selectAll('.i-role-label')
            .call(Object(_utils_d3_decorators__WEBPACK_IMPORTED_MODULE_2__["d3_setClasses"])(classed));
        this._sortElements(filter);
        var _a, _b;
    },
    highlightDataPoints: function (filter) {
        var node = this.node();
        var elModel = this.domElementModel;
        var dots = Object(_decorators_anchors__WEBPACK_IMPORTED_MODULE_8__["highlightAnchors"])(node, elModel, filter);
        var container = node.config.options.container;
        // Display cursor line
        var flip = node.config.flip;
        var highlighted = dots.filter(filter);
        var cursorLine = container.select('.cursor-line');
        if (highlighted.empty()) {
            cursorLine.remove();
        }
        else {
            if (cursorLine.empty()) {
                cursorLine = container.append('line');
            }
            var model = node.screenModel.model;
            var x1 = model.xi(highlighted.data()[0]);
            var x2 = model.xi(highlighted.data()[0]);
            var domain = model.scaleY.domain();
            var y1 = model.scaleY(domain[0]);
            var y2 = model.scaleY(domain[1]);
            cursorLine
                .attr('class', 'cursor-line')
                .attr('x1', flip ? y1 : x1)
                .attr('y1', flip ? x1 : y1)
                .attr('x2', flip ? y2 : x2)
                .attr('y2', flip ? x2 : y2);
        }
        this._sortElements(filter);
    },
    _sortElements: function (filter) {
        var container = this.node().config.options.container;
        var pathId = new Map();
        var pathFilter = new Map();
        var getDataSetId = this._getDataSetId;
        container.selectAll('.i-role-path').each(function (d) {
            pathId.set(this, getDataSetId(d));
            pathFilter.set(this, d
                .filter(_utils_utils_grammar__WEBPACK_IMPORTED_MODULE_6__["isNonSyntheticRecord"])
                .some(filter));
        });
        var compareFilterThenGroupId = _utils_utils__WEBPACK_IMPORTED_MODULE_3__["createMultiSorter"](function (a, b) { return (pathFilter.get(a) - pathFilter.get(b)); }, function (a, b) { return (pathId.get(a) - pathId.get(b)); });
        var elementsOrder = {
            line: 0,
            g: 1,
            text: 2
        };
        _utils_utils_dom__WEBPACK_IMPORTED_MODULE_4__["sortChildren"](container.node(), function (a, b) {
            if (a.tagName === 'g' && b.tagName === 'g') {
                return compareFilterThenGroupId(a, b);
            }
            return (elementsOrder[a.tagName] - elementsOrder[b.tagName]);
        });
    }
};



/***/ }),

/***/ "./src/elements/element.path.js":
/*!**************************************!*\
  !*** ./src/elements/element.path.js ***!
  \**************************************/
/*! exports provided: Path */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Path", function() { return Path; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/const.js");
/* harmony import */ var _grammar_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../grammar-registry */ "./src/grammar-registry.ts");
/* harmony import */ var _element_path_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./element.path.base */ "./src/elements/element.path.base.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _utils_css_class_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/css-class-map */ "./src/utils/css-class-map.ts");
/* harmony import */ var _utils_d3_decorators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/d3-decorators */ "./src/utils/d3-decorators.js");






var Path = {
    draw: _element_path_base__WEBPACK_IMPORTED_MODULE_2__["BasePath"].draw,
    getClosestElement: _element_path_base__WEBPACK_IMPORTED_MODULE_2__["BasePath"].getClosestElement,
    highlight: _element_path_base__WEBPACK_IMPORTED_MODULE_2__["BasePath"].highlight,
    highlightDataPoints: _element_path_base__WEBPACK_IMPORTED_MODULE_2__["BasePath"].highlightDataPoints,
    addInteraction: _element_path_base__WEBPACK_IMPORTED_MODULE_2__["BasePath"].addInteraction,
    _getBoundsInfo: _element_path_base__WEBPACK_IMPORTED_MODULE_2__["BasePath"]._getBoundsInfo,
    _sortElements: _element_path_base__WEBPACK_IMPORTED_MODULE_2__["BasePath"]._sortElements,
    init: function (xConfig) {
        var config = _element_path_base__WEBPACK_IMPORTED_MODULE_2__["BasePath"].init(xConfig);
        config.transformRules = [
            config.flip && _grammar_registry__WEBPACK_IMPORTED_MODULE_1__["GrammarRegistry"].get('flip')
        ];
        config.adjustRules = [
            (function (prevModel, args) {
                var isEmptySize = prevModel.scaleSize.isEmptyScale();
                var sizeCfg = _utils_utils__WEBPACK_IMPORTED_MODULE_3__["defaults"]((config.guide.size || {}), {
                    defMinSize: 2,
                    defMaxSize: (isEmptySize ? 6 : 40)
                });
                var params = Object.assign({}, args, {
                    defMin: sizeCfg.defMinSize,
                    defMax: sizeCfg.defMaxSize,
                    minLimit: sizeCfg.minSize,
                    maxLimit: sizeCfg.maxSize
                });
                return _grammar_registry__WEBPACK_IMPORTED_MODULE_1__["GrammarRegistry"].get('adjustStaticSizeScale')(prevModel, params);
            })
        ];
        return config;
    },
    buildModel: function (screenModel) {
        var baseModel = _element_path_base__WEBPACK_IMPORTED_MODULE_2__["BasePath"].baseModel(screenModel);
        var guide = this.node().config.guide;
        var countCss = Object(_utils_css_class_map__WEBPACK_IMPORTED_MODULE_4__["getLineClassesByCount"])(screenModel.model.scaleColor.domain().length);
        var groupPref = _const__WEBPACK_IMPORTED_MODULE_0__["CSS_PREFIX"] + "area area i-role-path " + countCss + " " + guide.cssClass + " ";
        baseModel.groupAttributes = {
            class: function (fiber) { return groupPref + " " + baseModel.class(fiber[0]) + " frame"; }
        };
        var toPoint = function (d) { return ({
            id: screenModel.id(d),
            x: baseModel.x(d),
            y: baseModel.y(d)
        }); };
        var pathPoints = function (x, y) {
            return (function (fiber) { return (fiber.map(function (d) { return [x(d), y(d)].join(','); }).join(' ')); });
        };
        var pathAttributes = {
            fill: function (fiber) { return baseModel.color(fiber[0]); },
            stroke: function (fiber) { return baseModel.color(fiber[0]); }
        };
        baseModel.pathAttributesEnterInit = pathAttributes;
        baseModel.pathAttributesUpdateDone = pathAttributes;
        baseModel.pathElement = 'polygon';
        baseModel.anchorShape = 'circle';
        baseModel.pathTween = {
            attr: 'points',
            fn: Object(_utils_d3_decorators__WEBPACK_IMPORTED_MODULE_5__["d3_createPathTween"])('points', pathPoints(function (d) { return d.x; }, function (d) { return d.y; }), [toPoint], screenModel.id)
        };
        return baseModel;
    }
};



/***/ }),

/***/ "./src/elements/element.point.ts":
/*!***************************************!*\
  !*** ./src/elements/element.point.ts ***!
  \***************************************/
/*! exports provided: Point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/const.js");
/* harmony import */ var _grammar_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../grammar-registry */ "./src/grammar-registry.ts");
/* harmony import */ var _decorators_layer_labels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorators/layer-labels */ "./src/elements/decorators/layer-labels.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _utils_utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils-dom */ "./src/utils/utils-dom.ts");
/* harmony import */ var _utils_utils_draw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/utils-draw */ "./src/utils/utils-draw.ts");
/* harmony import */ var d3_quadtree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3-quadtree */ "d3-quadtree");
/* harmony import */ var d3_quadtree__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(d3_quadtree__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3-selection */ "d3-selection");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(d3_selection__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_d3_decorators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/d3-decorators */ "./src/utils/d3-decorators.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};








var d3 = __assign({}, d3_quadtree__WEBPACK_IMPORTED_MODULE_6__, d3_selection__WEBPACK_IMPORTED_MODULE_7__);

var Point = {
    init: function (xConfig) {
        var config = Object.assign({}, xConfig);
        config.guide = _utils_utils__WEBPACK_IMPORTED_MODULE_3__["defaults"]((config.guide || {}), {
            animationSpeed: 0,
            avoidScalesOverflow: true,
            enableColorToBarPosition: false,
            maxHighlightDistance: 32
        });
        config.guide.size = (config.guide.size || {});
        config.guide.label = _utils_utils__WEBPACK_IMPORTED_MODULE_3__["defaults"]((config.guide.label || {}), {
            position: [
                'auto:avoid-label-label-overlap',
                'auto:avoid-label-anchor-overlap',
                'auto:adjust-on-label-overflow',
                'auto:hide-on-label-label-overlap',
                'auto:hide-on-label-anchor-overlap'
            ]
        });
        var avoidScalesOverflow = config.guide.avoidScalesOverflow;
        var enableColorPositioning = config.guide.enableColorToBarPosition;
        config.transformRules = [
            (function (prevModel) {
                var bestBaseScale = [prevModel.scaleX, prevModel.scaleY]
                    .sort(function (a, b) {
                    var discreteA = a.discrete ? 1 : 0;
                    var discreteB = b.discrete ? 1 : 0;
                    return (discreteB * b.domain().length) - (discreteA * a.domain().length);
                })[0];
                var isHorizontal = (prevModel.scaleY === bestBaseScale);
                return isHorizontal ?
                    _grammar_registry__WEBPACK_IMPORTED_MODULE_1__["GrammarRegistry"].get('flip')(prevModel) :
                    _grammar_registry__WEBPACK_IMPORTED_MODULE_1__["GrammarRegistry"].get('identity')(prevModel);
            }),
            config.stack && _grammar_registry__WEBPACK_IMPORTED_MODULE_1__["GrammarRegistry"].get('stack'),
            enableColorPositioning && _grammar_registry__WEBPACK_IMPORTED_MODULE_1__["GrammarRegistry"].get('positioningByColor')
        ]
            .filter(function (x) { return x; });
        config.adjustRules = [
            (config.stack && _grammar_registry__WEBPACK_IMPORTED_MODULE_1__["GrammarRegistry"].get('adjustYScale')),
            (function (prevModel, args) {
                var isEmptySize = prevModel.scaleSize.isEmptyScale();
                var sizeCfg = _utils_utils__WEBPACK_IMPORTED_MODULE_3__["defaults"]((config.guide.size), {
                    defMinSize: 10,
                    defMaxSize: isEmptySize ? 10 : 40,
                    enableDistributeEvenly: !isEmptySize
                });
                var params = Object.assign({}, args, {
                    defMin: sizeCfg.defMinSize,
                    defMax: sizeCfg.defMaxSize,
                    minLimit: sizeCfg.minSize,
                    maxLimit: sizeCfg.maxSize
                });
                var method = (sizeCfg.enableDistributeEvenly ?
                    _grammar_registry__WEBPACK_IMPORTED_MODULE_1__["GrammarRegistry"].get('adjustSigmaSizeScale') :
                    _grammar_registry__WEBPACK_IMPORTED_MODULE_1__["GrammarRegistry"].get('adjustStaticSizeScale'));
                return method(prevModel, params);
            }),
            (avoidScalesOverflow && (function (prevModel, args) {
                var params = Object.assign({}, args, {
                    sizeDirection: 'xy'
                });
                return _grammar_registry__WEBPACK_IMPORTED_MODULE_1__["GrammarRegistry"].get('avoidScalesOverflow')(prevModel, params);
            }))
        ].filter(function (x) { return x; });
        return config;
    },
    addInteraction: function () {
        var _this = this;
        var node = this.node();
        var createFilter = (function (data, falsy) { return (function (row) { return row === data ? true : falsy; }); });
        node.on('highlight', function (sender, filter) { return _this.highlight(filter); });
        node.on('data-hover', (function (sender, e) { return _this.highlight(createFilter(e.data, null)); }));
    },
    draw: function () {
        var node = this.node();
        var config = node.config;
        var options = config.options;
        // TODO: hide it somewhere
        options.container = options.slot(config.uid);
        var transition = function (sel) {
            return Object(_utils_d3_decorators__WEBPACK_IMPORTED_MODULE_8__["d3_transition"])(sel, config.guide.animationSpeed);
        };
        var prefix = _const__WEBPACK_IMPORTED_MODULE_0__["CSS_PREFIX"] + "dot dot i-role-element i-role-datum";
        var screenModel = node.screenModel;
        var kRound = 10000;
        var circleAttrs = {
            fill: (function (d) { return screenModel.color(d); }),
            class: (function (d) { return prefix + " " + screenModel.class(d); })
        };
        var circleTransAttrs = {
            r: (function (d) { return (Math.round(kRound * screenModel.size(d) / 2) / kRound); }),
            cx: (function (d) { return screenModel.x(d); }),
            cy: (function (d) { return screenModel.y(d); })
        };
        var activeDots = [];
        var updateGroups = function (g) {
            g.attr('class', 'frame')
                .call(function (c) {
                var dots = c
                    .selectAll('circle')
                    .data(function (fiber) { return fiber; }, screenModel.id);
                var dotsEnter = dots.enter().append('circle')
                    .call(Object(_utils_d3_decorators__WEBPACK_IMPORTED_MODULE_8__["d3_setAttrs"])(circleTransAttrs));
                var dotsMerge = dotsEnter
                    .merge(dots)
                    .call(Object(_utils_d3_decorators__WEBPACK_IMPORTED_MODULE_8__["d3_setAttrs"])(circleAttrs));
                transition(dotsMerge)
                    .call(Object(_utils_d3_decorators__WEBPACK_IMPORTED_MODULE_8__["d3_setAttrs"])(circleTransAttrs));
                transition(dots.exit())
                    .attr('r', 0)
                    .remove();
                activeDots.push.apply(activeDots, dotsMerge.nodes());
                node.subscribe(dotsMerge);
            });
            transition(g)
                .attr('opacity', 1);
        };
        var fibers = screenModel.toFibers();
        this._getGroupOrder = (function () {
            var map = fibers.reduce(function (map, f, i) {
                map.set(f, i);
                return map;
            }, new Map());
            return (function (g) { return map.get(g); });
        })();
        var frameGroups = options
            .container
            .selectAll('.frame')
            .data(fibers, function (f) { return screenModel.group(f[0]); });
        var merged = frameGroups
            .enter()
            .append('g')
            .attr('opacity', 0)
            .merge(frameGroups)
            .call(updateGroups);
        this._boundsInfo = this._getBoundsInfo(activeDots);
        transition(frameGroups.exit())
            .attr('opacity', 0)
            .remove()
            .selectAll('circle')
            .attr('r', 0);
        node.subscribe(new _decorators_layer_labels__WEBPACK_IMPORTED_MODULE_2__["LayerLabels"](screenModel.model, screenModel.flip, config.guide.label, options).draw(fibers));
    },
    _getBoundsInfo: function (dots) {
        if (dots.length === 0) {
            return null;
        }
        var screenModel = this.node().screenModel;
        var items = dots
            .map(function (node) {
            var data = d3.select(node).data()[0];
            var x = screenModel.x(data);
            var y = screenModel.y(data);
            var r = screenModel.size(data) / 2;
            return { node: node, data: data, x: x, y: y, r: r };
        })
            .filter(function (item) { return !isNaN(item.x) && !isNaN(item.y); });
        var bounds = items.reduce(function (bounds, _a) {
            var x = _a.x, y = _a.y;
            bounds.left = Math.min(x, bounds.left);
            bounds.right = Math.max(x, bounds.right);
            bounds.top = Math.min(y, bounds.top);
            bounds.bottom = Math.max(y, bounds.bottom);
            return bounds;
        }, {
            left: Number.MAX_VALUE,
            right: Number.MIN_VALUE,
            top: Number.MAX_VALUE,
            bottom: Number.MIN_VALUE
        });
        // NOTE: There can be multiple items at the same point, but
        // D3 quad tree seems to ignore them.
        var coordinates = items.reduce(function (coordinates, item) {
            var c = item.x + "," + item.y;
            if (!coordinates[c]) {
                coordinates[c] = [];
            }
            coordinates[c].push(item);
            return coordinates;
        }, {});
        var tree = d3.quadtree()
            .x(function (d) { return d[0].x; })
            .y(function (d) { return d[0].y; })
            .addAll(Object.keys(coordinates).map(function (c) { return coordinates[c]; }));
        return { bounds: bounds, tree: tree };
    },
    getClosestElement: function (_cursorX, _cursorY) {
        if (!this._boundsInfo) {
            return null;
        }
        var _a = this._boundsInfo, bounds = _a.bounds, tree = _a.tree;
        var container = this.node().config.options.container;
        var translate = _utils_utils_draw__WEBPACK_IMPORTED_MODULE_5__["getDeepTransformTranslate"](container.node());
        var cursorX = (_cursorX - translate.x);
        var cursorY = (_cursorY - translate.y);
        var maxHighlightDistance = this.node().config.guide.maxHighlightDistance;
        if ((cursorX < bounds.left - maxHighlightDistance) ||
            (cursorX > bounds.right + maxHighlightDistance) ||
            (cursorY < bounds.top - maxHighlightDistance) ||
            (cursorY > bounds.bottom + maxHighlightDistance)) {
            return null;
        }
        var items = (tree.find(cursorX, cursorY) || [])
            .map(function (item) {
            var distance = Math.sqrt(Math.pow(cursorX - item.x, 2) +
                Math.pow(cursorY - item.y, 2));
            if (distance > maxHighlightDistance) {
                return null;
            }
            var secondaryDistance = (distance < item.r ? item.r - distance : distance);
            return {
                node: item.node,
                data: item.data,
                x: item.x,
                y: item.y,
                distance: distance,
                secondaryDistance: secondaryDistance
            };
        })
            .filter(function (d) { return d; })
            .sort(function (a, b) { return (a.secondaryDistance - b.secondaryDistance); });
        var largerDistIndex = items.findIndex(function (d) { return ((d.distance !== items[0].distance) ||
            (d.secondaryDistance !== items[0].secondaryDistance)); });
        var sameDistItems = (largerDistIndex < 0 ? items : items.slice(0, largerDistIndex));
        if (sameDistItems.length === 1) {
            return sameDistItems[0];
        }
        var mx = (sameDistItems.reduce(function (sum, item) { return sum + item.x; }, 0) / sameDistItems.length);
        var my = (sameDistItems.reduce(function (sum, item) { return sum + item.y; }, 0) / sameDistItems.length);
        var angle = (Math.atan2(my - cursorY, mx - cursorX) + Math.PI);
        var closest = sameDistItems[Math.round((sameDistItems.length - 1) * angle / 2 / Math.PI)];
        return closest;
    },
    highlight: function (filter) {
        var x = 'tau-chart__highlighted';
        var _ = 'tau-chart__dimmed';
        var container = this.node().config.options.container;
        var classed = (_a = {},
            _a[x] = (function (d) { return filter(d) === true; }),
            _a[_] = (function (d) { return filter(d) === false; }),
            _a);
        container
            .selectAll('.dot')
            .call(Object(_utils_d3_decorators__WEBPACK_IMPORTED_MODULE_8__["d3_setClasses"])(classed));
        container
            .selectAll('.i-role-label')
            .call(Object(_utils_d3_decorators__WEBPACK_IMPORTED_MODULE_8__["d3_setClasses"])(classed));
        this._sortElements(filter);
        var _a;
    },
    _sortElements: function (filter) {
        var _this = this;
        var container = this.node().config.options.container;
        // Sort frames
        var filters = new Map();
        var groups = new Map();
        container
            .selectAll('.frame')
            .each(function (d) {
            filters.set(this, d.some(filter));
            groups.set(this, d);
        });
        var compareFilterThenGroupId = _utils_utils__WEBPACK_IMPORTED_MODULE_3__["createMultiSorter"](function (a, b) { return (filters.get(a) - filters.get(b)); }, function (a, b) { return (_this._getGroupOrder(groups.get(a)) - _this._getGroupOrder(groups.get(b))); });
        _utils_utils_dom__WEBPACK_IMPORTED_MODULE_4__["sortChildren"](container.node(), function (a, b) {
            if (a.tagName === 'g' && b.tagName === 'g') {
                return compareFilterThenGroupId(a, b);
            }
            return a.tagName.localeCompare(b.tagName); // Note: raise <text> over <g>.
        });
        // Raise filtered dots over others
        _utils_utils_draw__WEBPACK_IMPORTED_MODULE_5__["raiseElements"](container, '.dot', filter);
    }
};



/***/ }),

/***/ "./src/elements/element.ts":
/*!*********************************!*\
  !*** ./src/elements/element.ts ***!
  \*********************************/
/*! exports provided: Element */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Element", function() { return Element; });
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../event */ "./src/event.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-selection */ "d3-selection");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3_selection__WEBPACK_IMPORTED_MODULE_2__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



var d3 = __assign({}, d3_selection__WEBPACK_IMPORTED_MODULE_2__);
var Element = /** @class */ (function (_super) {
    __extends(Element, _super);
    // add base behaviour here
    function Element(config) {
        var _this = _super.call(this) || this;
        _this.screenModel = null;
        _this._elementNameSpace = (config.namespace || 'default');
        _this._elementScalesHub = {};
        return _this;
    }
    Element.prototype.regScale = function (paramId, scaleObj) {
        this._elementScalesHub[paramId] = scaleObj;
        return this;
    };
    Element.prototype.getScale = function (paramId) {
        return this._elementScalesHub[paramId] || null;
    };
    Element.prototype.fireNameSpaceEvent = function (eventName, eventData) {
        var namespace = this._elementNameSpace;
        this.fire(eventName + "." + namespace, eventData);
    };
    Element.prototype.subscribe = function (sel, dataInterceptor, eventInterceptor) {
        if (dataInterceptor === void 0) { dataInterceptor = (function (x) { return x; }); }
        if (eventInterceptor === void 0) { eventInterceptor = (function (x) { return x; }); }
        var self = this;
        var last = {};
        [
            {
                event: 'mouseover',
                limit: 0
            },
            {
                event: 'mouseout',
                limit: 0
            },
            {
                event: 'click',
                limit: 0
            },
            {
                event: 'mousemove',
                limit: 'requestAnimationFrame'
            }
        ].forEach(function (item) {
            var eventName = item.event;
            var limit = item.limit;
            var callback = function (d) {
                var eventData = {
                    data: dataInterceptor.call(this, d),
                    event: eventInterceptor.call(this, d3_selection__WEBPACK_IMPORTED_MODULE_2__["event"], d)
                };
                self.fire(eventName, eventData);
                self.fireNameSpaceEvent(eventName, eventData);
            };
            sel.on(eventName, _utils_utils__WEBPACK_IMPORTED_MODULE_1__["throttleLastEvent"](last, eventName, callback, limit));
        });
    };
    Element.prototype.allocateRect = function () {
        return {
            left: 0,
            top: 0,
            width: 0,
            height: 0
        };
    };
    /* eslint-disable */
    Element.prototype.defineGrammarModel = function (fnCreateScale) {
        return {};
    };
    Element.prototype.getGrammarRules = function () {
        return [];
    };
    Element.prototype.getAdjustScalesRules = function () {
        return [];
    };
    Element.prototype.createScreenModel = function (grammarModel) {
        return null;
    };
    Element.prototype.getClosestElement = function (x, y) {
        return null;
    };
    /* eslint-enable */
    Element.prototype.addInteraction = function () {
        // do nothing
    };
    Element.prototype.draw = function () {
        // TODO: expose to explicit call everywhere
        this.config.options.container = this.config.options.slot(this.config.uid);
        this.drawFrames(this.config.frames);
    };
    Element.prototype.data = function () {
        return this
            .config
            .frames
            .reduce((function (data, frame) { return data.concat(frame.part()); }), []);
    };
    Element.prototype.node = function () {
        return this;
    };
    return Element;
}(_event__WEBPACK_IMPORTED_MODULE_0__["Emitter"]));



/***/ }),

/***/ "./src/error.ts":
/*!**********************!*\
  !*** ./src/error.ts ***!
  \**********************/
/*! exports provided: TauChartError, errorCodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TauChartError", function() { return TauChartError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorCodes", function() { return errorCodes; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TauChartError = /** @class */ (function (_super) {
    __extends(TauChartError, _super);
    function TauChartError(message, errorCode, errorArgs) {
        var _this = _super.call(this) || this;
        _this.name = 'TauChartError';
        _this.message = message;
        _this.errorCode = errorCode;
        _this.errorArgs = errorArgs;
        return _this;
    }
    return TauChartError;
}(Error));
var errorCodes = {
    STACKED_FIELD_NOT_NUMBER: 'STACKED_FIELD_NOT_NUMBER',
    NO_DATA: 'NO_DATA',
    NOT_SUPPORTED_TYPE_CHART: 'NOT_SUPPORTED_TYPE_CHART',
    UNKNOWN_UNIT_TYPE: 'UNKNOWN_UNIT_TYPE',
    INVALID_LOG_DOMAIN: 'INVALID_LOG_DOMAIN'
};



/***/ }),

/***/ "./src/event.ts":
/*!**********************!*\
  !*** ./src/event.ts ***!
  \**********************/
/*! exports provided: Emitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Emitter", function() { return Emitter; });
var NULL_HANDLER = {};
var events = {};
/**
 * Creates new type of event or returns existing one, if it was created before.
 * @param {string} eventName
 * @return {function(..eventArgs)}
 */
function createDispatcher(eventName) {
    var eventFunction = events[eventName];
    if (!eventFunction) {
        eventFunction = function () {
            var cursor = this;
            var args;
            var fn;
            var i = 0;
            var queue = [];
            while (cursor = cursor.handler) {
                // callback call
                fn = cursor.callbacks[eventName];
                if (typeof fn === 'function') {
                    if (!args) {
                        // it should be better for browser optimizations
                        // (instead of [this].concat(slice.call(arguments)))
                        args = [this];
                        for (i = 0; i < arguments.length; i++) {
                            args.push(arguments[i]);
                        }
                    }
                    queue.unshift({
                        fn: fn,
                        context: cursor.context,
                        args: args
                    });
                }
                // any event callback call
                fn = cursor.callbacks['*'];
                if (typeof fn === 'function') {
                    if (!args) {
                        // it should be better for browser optimizations
                        // (instead of [this].concat(slice.call(arguments)))
                        args = [this];
                        for (i = 0; i < arguments.length; i++) {
                            args.push(arguments[i]);
                        }
                    }
                    queue.unshift({
                        fn: fn,
                        context: cursor.context,
                        args: [
                            {
                                sender: this,
                                type: eventName,
                                args: args
                            }
                        ]
                    });
                }
            }
            queue.forEach(function (item) { return item.fn.apply(item.context, item.args); });
        };
        events[eventName] = eventFunction;
    }
    return eventFunction;
}
/**
 * Base class for event dispatching. It provides interface for instance
 * to add and remove handler for desired events, and call it when event happens.
 * @class
 */
var Emitter = /** @class */ (function () {
    /**
     * @constructor
     */
    function Emitter() {
        this.handler = null;
        this.emit_destroy = createDispatcher('destroy');
    }
    /**
     * Adds new event handler to object.
     * @param {object} callbacks Callback set.
     * @param {object=} context Context object.
     */
    Emitter.prototype.addHandler = function (callbacks, context) {
        context = context || this;
        // add handler
        this.handler = {
            callbacks: callbacks,
            context: context,
            handler: this.handler
        };
    };
    Emitter.prototype.on = function (name, callback, context) {
        var obj = {};
        obj[name] = callback;
        this.addHandler(obj, context);
        return obj;
    };
    Emitter.prototype.fire = function (name, data) {
        createDispatcher.call(this, name).call(this, data);
    };
    /**
     * Removes event handler set from object. For this operation parameters
     * must be the same (equivalent) as used for addHandler method.
     * @param {object} callbacks Callback set.
     * @param {object=} context Context object.
     */
    Emitter.prototype.removeHandler = function (callbacks, context) {
        var cursor = this;
        var prev;
        context = context || this;
        // search for handler and remove it
        while (prev = cursor, cursor = cursor.handler) {
            if (cursor.callbacks === callbacks && cursor.context === context) {
                // make it non-callable
                cursor.callbacks = NULL_HANDLER;
                // remove from list
                prev.handler = cursor.handler;
                return;
            }
        }
    };
    /**
     * @destructor
     */
    Emitter.prototype.destroy = function () {
        // fire object destroy event handlers
        this.emit_destroy();
        // drop event handlers if any
        this.handler = null;
    };
    return Emitter;
}());
//
// export names
//



/***/ }),

/***/ "./src/formatter-registry.ts":
/*!***********************************!*\
  !*** ./src/formatter-registry.ts ***!
  \***********************************/
/*! exports provided: FormatterRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatterRegistry", function() { return FormatterRegistry; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-format */ "d3-format");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3_format__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-time-format */ "d3-time-format");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3_time_format__WEBPACK_IMPORTED_MODULE_2__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



var d3 = __assign({}, d3_format__WEBPACK_IMPORTED_MODULE_1__, d3_time_format__WEBPACK_IMPORTED_MODULE_2__);
var d3Fromat4S = d3.format('.4s');
var d3Fromat2R = d3.format('.2r');
var d3Fromat1E = d3.format('.1e');
var removeRedundantZeros = (function () {
    var zerosAfterDot = /\.0+([^\d].*)?$/;
    var zerosAfterNotZero = /(\.\d+?)0+([^\d].*)?$/;
    return function (str) { return str
        .replace(zerosAfterDot, '$1')
        .replace(zerosAfterNotZero, '$1$2'); };
})();
var FORMATS_MAP = {
    'x-num-auto': function (x) {
        if (isNaN(x)) {
            return 'NaN';
        }
        var abs = Math.abs(x);
        var result = removeRedundantZeros((abs < 1) ?
            (abs === 0) ?
                '0' :
                (abs < 1e-6) ?
                    d3Fromat1E(x) :
                    d3Fromat2R(x) :
            d3Fromat4S(x));
        return result;
    },
    percent: function (x) {
        var v = parseFloat((x * 100).toFixed(2));
        return v.toString() + '%';
    },
    day: d3.timeFormat('%d-%b-%Y'),
    'day-utc': d3.utcFormat('%d-%b-%Y'),
    'day-short': d3.timeFormat('%d-%b'),
    'day-short-utc': d3.utcFormat('%d-%b'),
    week: d3.timeFormat('%d-%b-%Y'),
    'week-utc': d3.utcFormat('%d-%b-%Y'),
    'week-short': d3.timeFormat('%d-%b'),
    'week-short-utc': d3.utcFormat('%d-%b'),
    month: function (x) {
        var d = new Date(x);
        var m = d.getMonth();
        var formatSpec = (m === 0) ? '%B, %Y' : '%B';
        return d3.timeFormat(formatSpec)(x);
    },
    'month-utc': function (x) {
        var d = new Date(x);
        var m = d.getUTCMonth();
        var formatSpec = (m === 0) ? '%B, %Y' : '%B';
        return d3.utcFormat(formatSpec)(x);
    },
    'month-short': function (x) {
        var d = new Date(x);
        var m = d.getMonth();
        var formatSpec = (m === 0) ? '%b \'%y' : '%b';
        return d3.timeFormat(formatSpec)(x);
    },
    'month-short-utc': function (x) {
        var d = new Date(x);
        var m = d.getUTCMonth();
        var formatSpec = (m === 0) ? '%b \'%y' : '%b';
        return d3.utcFormat(formatSpec)(x);
    },
    'month-year': d3.timeFormat('%B, %Y'),
    'month-year-utc': d3.utcFormat('%B, %Y'),
    quarter: function (x) {
        var d = new Date(x);
        var m = d.getMonth();
        var q = (m - (m % 3)) / 3;
        return 'Q' + (q + 1) + ' ' + d.getFullYear();
    },
    'quarter-utc': function (x) {
        var d = new Date(x);
        var m = d.getUTCMonth();
        var q = (m - (m % 3)) / 3;
        return 'Q' + (q + 1) + ' ' + d.getUTCFullYear();
    },
    year: d3.timeFormat('%Y'),
    'year-utc': d3.utcFormat('%Y'),
    'x-time-auto': null
};
var FormatterRegistry = {
    get: function (formatAlias, nullOrUndefinedAlias) {
        var nullAlias = nullOrUndefinedAlias || '';
        var identity = (function (x) { return String(((x === null) || (typeof x === 'undefined')) ? nullAlias : x); });
        var hasFormat = FORMATS_MAP.hasOwnProperty(formatAlias);
        var formatter = hasFormat ? FORMATS_MAP[formatAlias] : identity;
        if (hasFormat) {
            formatter = FORMATS_MAP[formatAlias];
        }
        if (!hasFormat && formatAlias) {
            formatter = function (v) {
                var f = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["isDate"](v) ? d3.timeFormat(formatAlias) : d3.format(formatAlias);
                return f(v);
            };
        }
        if (!hasFormat && !formatAlias) {
            formatter = identity;
        }
        return formatter;
    },
    add: function (formatAlias, formatter) {
        FORMATS_MAP[formatAlias] = formatter;
    }
};



/***/ }),

/***/ "./src/grammar-registry.ts":
/*!*********************************!*\
  !*** ./src/grammar-registry.ts ***!
  \*********************************/
/*! exports provided: GrammarRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrammarRegistry", function() { return GrammarRegistry; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _unit_domain_period_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unit-domain-period-generator */ "./src/unit-domain-period-generator.ts");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error */ "./src/error.ts");



var rules = {};
var GrammarRegistry = {
    get: function (name) {
        return rules[name];
    },
    reg: function (name, func) {
        rules[name] = func;
        return this;
    }
};
var synthetic = 'taucharts_synthetic_record';
var isNonSyntheticRecord = (function (row) { return row[synthetic] !== true; });
GrammarRegistry
    .reg('identity', function () {
    return {};
})
    .reg('flip', function (model) {
    var baseScale = model.scaleY;
    var valsScale = model.scaleX;
    var k = -0.5;
    var ys = valsScale.domain();
    var min = valsScale.discrete ?
        ys[0] :
        Math.max(0, Math.min.apply(Math, ys)); // NOTE: max also can be below 0
    var y0 = valsScale.value(min) + valsScale.stepSize(min) * k;
    return {
        flip: true,
        scaleX: baseScale,
        scaleY: valsScale,
        xi: (function (d) { return (baseScale.value(d[baseScale.dim])); }),
        yi: (function (d) { return (valsScale.value(d[valsScale.dim])); }),
        y0: (function () { return y0; })
    };
})
    .reg('obsoleteVerticalStackOrder', function () {
    return {
        obsoleteVerticalStackOrder: true,
    };
})
    .reg('positioningByColor', function (model) {
    var method = (model.scaleX.discrete ?
        (function (model) {
            var dataSource = model.data();
            var xColors = dataSource
                .reduce(function (map, row) {
                var x = row[model.scaleX.dim];
                var color = row[model.scaleColor.dim];
                if (!map.hasOwnProperty(x)) {
                    map[x] = [];
                }
                if (map[x].indexOf(color) < 0) {
                    map[x].push(color);
                }
                return map;
            }, {});
            var baseScale = model.scaleX;
            var scaleColor = model.scaleColor;
            var categories = scaleColor.discrete ?
                scaleColor.domain() :
                scaleColor.originalSeries().sort(function (a, b) { return a - b; });
            var categoriesCount = (categories.length || 1);
            var space = (function (d) { return baseScale.stepSize(d[baseScale.dim]) * (categoriesCount / (1 + categoriesCount)); });
            // Sort colors for each X
            var catIndices = categories.reduce(function (map, c, i) {
                map[c] = i;
                return map;
            }, {});
            Object.keys(xColors).forEach(function (x) { return xColors[x].sort(function (a, b) { return catIndices[a] - catIndices[b]; }); });
            return {
                xi: (function (d) {
                    var x = d[model.scaleX.dim];
                    var colors = xColors[x] || [d[model.scaleColor.dim]];
                    var total = colors.length;
                    var index = colors.indexOf(d[model.scaleColor.dim]);
                    var availableSpace = space(d);
                    var middleStep = (availableSpace / (categoriesCount + 1));
                    var absTickStart = (model.xi(d) - (total + 1) * middleStep / 2);
                    var relSegmStart = ((1 + index) * middleStep);
                    return absTickStart + relSegmStart;
                })
            };
        }) :
        (function () { return ({}); }));
    return method(model);
})
    .reg('groupOrderByAvg', function (model) {
    var dataSource = model.data();
    var avg = function (arr) {
        return arr.map(model.yi).reduce((function (sum, i) { return (sum + i); }), 0) / arr.length;
    };
    var groups = dataSource.reduce(function (memo, row) {
        var k = model.group(row);
        memo[k] = memo[k] || [];
        memo[k].push(row);
        return memo;
    }, {});
    var order = Object
        .keys(groups)
        .map(function (k) { return [k, avg(groups[k])]; })
        .sort(function (a, b) { return (a[1] - b[1]); })
        .map(function (r) { return r[0]; });
    return {
        order: (function (group) {
            var i = order.indexOf(group);
            return ((i < 0) ? Number.MAX_VALUE : i);
        })
    };
})
    .reg('stack', function (model) {
    var dataSource = model.data();
    var xScale = model.scaleX;
    var yScale = model.scaleY;
    if (yScale.discrete || (yScale.domain().some(function (x) { return typeof (x) !== 'number'; }))) {
        throw new _error__WEBPACK_IMPORTED_MODULE_2__["TauChartError"]("Stacked field [" + yScale.dim + "] should be a number", _error__WEBPACK_IMPORTED_MODULE_2__["errorCodes"].STACKED_FIELD_NOT_NUMBER, { field: yScale.dim });
    }
    var createFnStack = function (totalState) {
        return (function (d) {
            var x = d[xScale.dim];
            var y = d[yScale.dim];
            var state = ((y >= 0) ? totalState.positive : totalState.negative);
            var prevStack = (state[x] || 0);
            var nextStack = (prevStack + y);
            state[x] = nextStack;
            return { nextStack: nextStack, prevStack: prevStack };
        });
    };
    var stackYi = createFnStack({ positive: {}, negative: {} });
    var stackY0 = createFnStack({ positive: {}, negative: {} });
    var memoize = (function (fn) { return _utils_utils__WEBPACK_IMPORTED_MODULE_0__["memoize"](fn, model.id); });
    var trackedMinY = Number.MAX_VALUE;
    var trackedMaxY = Number.MIN_VALUE;
    var trackAndEval = function (y) {
        trackedMinY = (y < trackedMinY) ? y : trackedMinY;
        trackedMaxY = (y > trackedMaxY) ? y : trackedMaxY;
        return yScale.value(y);
    };
    var nextYi = memoize(function (d) { return trackAndEval(stackYi(d).nextStack); });
    var nextY0 = memoize(function (d) { return trackAndEval(stackY0(d).prevStack); });
    var nextGroup = (function (row) { return (model.group(row) + '/' + ((row[yScale.dim] >= 0) ? 1 : -1)); });
    var groups = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["groupBy"](dataSource, nextGroup);
    var nextData = (Object
        .keys(groups)
        .sort((model.flip || (!model.flip && model.obsoleteVerticalStackOrder) ?
        function (a, b) { return model.order(a) - model.order(b); } :
        function (a, b) { return model.order(b) - model.order(a); }))
        .reduce(function (memo, k) { return memo.concat(groups[k]); }, []));
    nextData.forEach(function (row) {
        nextYi(row);
        nextY0(row);
    });
    yScale.fixup(function (yScaleConfig) {
        var newConf = {};
        if (!yScaleConfig.hasOwnProperty('max') || yScaleConfig.max < trackedMaxY) {
            newConf.max = trackedMaxY;
        }
        if (!yScaleConfig.hasOwnProperty('min') || yScaleConfig.min > trackedMinY) {
            newConf.min = trackedMinY;
        }
        return newConf;
    });
    return {
        group: nextGroup,
        data: function () { return nextData; },
        yi: nextYi,
        y0: nextY0
    };
})
    .reg('size_distribute_evenly', function (model, _a) {
    var minLimit = _a.minLimit, maxLimit = _a.maxLimit, defMin = _a.defMin, defMax = _a.defMax;
    var dataSource = model.data();
    var asc = (function (a, b) { return (a - b); });
    var stepSize = model.scaleX.discrete ? (model.scaleX.stepSize() / 2) : Number.MAX_VALUE;
    var xs = dataSource
        .map(function (row) { return model.xi(row); })
        .sort(asc);
    var prev = xs[0];
    var diff = (xs
        .slice(1)
        .map(function (curr) {
        var diff = (curr - prev);
        prev = curr;
        return diff;
    })
        .filter(function (diff) { return (diff > 0); })
        .sort(asc)
        .concat(Number.MAX_VALUE)[0]);
    var minDiff = Math.min(diff, stepSize);
    var currMinSize = (typeof (minLimit) === 'number') ? minLimit : defMin;
    var curr = {
        minSize: currMinSize,
        maxSize: (typeof (maxLimit) === 'number') ? maxLimit : Math.max(currMinSize, Math.min(defMax, minDiff))
    };
    model.scaleSize.fixup(function (prev) {
        var next = {};
        if (!prev.fixed) {
            next.fixed = true;
            next.minSize = curr.minSize;
            next.maxSize = curr.maxSize;
        }
        else {
            if (prev.maxSize > curr.maxSize) {
                next.maxSize = curr.maxSize;
            }
        }
        return next;
    });
    return {};
})
    .reg('adjustStaticSizeScale', function (model, _a) {
    var minLimit = _a.minLimit, maxLimit = _a.maxLimit, defMin = _a.defMin, defMax = _a.defMax;
    var curr = {
        minSize: (typeof (minLimit) === 'number') ? minLimit : defMin,
        maxSize: (typeof (maxLimit) === 'number') ? maxLimit : defMax
    };
    model.scaleSize.fixup(function (prev) {
        var next = {};
        if (!prev.fixed) {
            next.fixed = true;
            next.minSize = curr.minSize;
            next.maxSize = curr.maxSize;
        }
        return next;
    });
    return {};
})
    .reg('adjustSigmaSizeScale', function (model, _a) {
    var minLimit = _a.minLimit, maxLimit = _a.maxLimit, defMin = _a.defMin, defMax = _a.defMax;
    var dataSource = model.data();
    var asc = (function (a, b) { return (a - b); });
    var xs = dataSource.map((function (row) { return model.xi(row); })).sort(asc);
    var prev = xs[0];
    var diffX = (xs
        .slice(1)
        .map(function (curr) {
        var diff = (curr - prev);
        prev = curr;
        return diff;
    })
        .filter(function (diff) { return (diff > 0); })
        .sort(asc)
        .concat(Number.MAX_VALUE)[0]);
    var stepSize = model.scaleX.discrete ? (model.scaleX.stepSize() / 2) : Number.MAX_VALUE;
    var maxSize = Math.min(diffX, stepSize);
    var currMinSize = (typeof (minLimit) === 'number') ? minLimit : defMin;
    var maxSizeLimit = (typeof (maxLimit) === 'number') ? maxLimit : defMax;
    var sigmoid = function (x) {
        var Ab = (currMinSize + maxSizeLimit) / 2;
        var At = maxSizeLimit;
        var X0 = currMinSize;
        var Wx = 0.5;
        return Math.round(Ab + (At - Ab) / (1 + Math.exp(-(x - X0) / Wx)));
    };
    var curr = {
        minSize: currMinSize,
        maxSize: Math.max(currMinSize, Math.min(maxSizeLimit, sigmoid(maxSize)))
    };
    model.scaleSize.fixup(function (prev) {
        var next = {};
        if (!prev.fixed) {
            next.fixed = true;
            next.minSize = curr.minSize;
            next.maxSize = curr.maxSize;
        }
        else {
            if (prev.maxSize > curr.maxSize) {
                next.maxSize = curr.maxSize;
            }
        }
        return next;
    });
    return {};
})
    .reg('avoidScalesOverflow', function (model, _a) {
    var sizeDirection = _a.sizeDirection;
    // TODO: Don't ignore logarithmic scale,
    // add scale method for extending it's domain.
    var shouldIgnoreScale = function (scale, direction) { return (!scale ||
        scale.discrete ||
        scale.scaleType === 'logarithmic' ||
        sizeDirection.indexOf(direction) < 0); };
    var ignoreX = shouldIgnoreScale(model.scaleX, 'x');
    var ignoreY = shouldIgnoreScale(model.scaleY, 'y');
    if (ignoreX && ignoreY) {
        return {};
    }
    var plannedMinSize;
    var plannedMaxSize;
    model.scaleSize.fixup(function (prev) {
        plannedMinSize = prev.minSize;
        plannedMaxSize = prev.maxSize;
        return prev;
    });
    var border = model.data()
        .reduce(function (memo, row) {
        var s = model.size(row);
        var r = ((s >= plannedMinSize ?
            s :
            (plannedMinSize + s * (plannedMaxSize - plannedMinSize))) / 2);
        var x, y;
        if (!ignoreX) {
            x = model.xi(row);
            memo.left = Math.min(memo.left, x - r);
            memo.right = Math.max(memo.right, x + r);
        }
        if (!ignoreY) {
            y = model.yi(row);
            memo.top = Math.min(memo.top, y - r);
            memo.bottom = Math.max(memo.bottom, y + r);
        }
        return memo;
    }, {
        top: Number.MAX_VALUE,
        right: -Number.MAX_VALUE,
        bottom: -Number.MAX_VALUE,
        left: Number.MAX_VALUE
    });
    var fixScale = function (scale, start, end, flip) {
        var domain = scale.domain();
        var length = Math.abs(scale.value(domain[1]) - scale.value(domain[0]));
        var koeff = ((domain[1] - domain[0]) / length);
        if (length === 0) {
            return 1;
        }
        var _startPad = Math.max(0, (-start));
        var _endPad = Math.max(0, (end - length));
        var startPad = model.flip ? _endPad : _startPad;
        var endPad = model.flip ? _startPad : _endPad;
        var startVal = Number(domain[0]) - ((flip ? endPad : startPad) * koeff);
        var endVal = Number(domain[1]) + ((flip ? startPad : endPad) * koeff);
        scale.fixup(function (prev) {
            var next = {};
            if (!prev.fixedBorders) {
                next.fixed = true;
                next.min = startVal;
                next.max = endVal;
                next.nice = false;
                next.fixedBorders = [start, end];
            }
            else {
                var _a = prev.fixedBorders.slice(), resStart = _a[0], resEnd = _a[1];
                if (resStart > start || resEnd < end) {
                    next.min = Math.min(prev.min, startVal);
                    next.max = Math.max(prev.max, endVal);
                    resStart = Math.min(start, resStart);
                    resEnd = Math.max(end, resEnd);
                }
                next.fixedBorders = [resStart, resEnd];
            }
            return next;
        });
        return (length / (startPad + length + endPad));
    };
    var kx = (ignoreX ? 1 : fixScale(model.scaleX, border.left, border.right, false));
    var ky = (ignoreY ? 1 : fixScale(model.scaleY, border.top, border.bottom, true));
    var linearlyScaledMinSize = Math.min(plannedMinSize * kx, plannedMinSize * ky);
    var linearlyScaledMaxSize = Math.min(plannedMaxSize * kx, plannedMaxSize * ky);
    model.scaleSize.fixup(function () { return ({
        minSize: linearlyScaledMinSize,
        maxSize: linearlyScaledMaxSize
    }); });
    return {};
})
    .reg('fillGaps', function (model, _a) {
    var isStack = _a.isStack, xPeriod = _a.xPeriod, utc = _a.utc;
    var data = model.data();
    var groups = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["groupBy"](data, model.group);
    var fibers = (Object
        .keys(groups)
        .sort(function (a, b) { return model.order(a) - model.order(b); }))
        .reduce(function (memo, k) { return memo.concat([groups[k]]); }, []);
    var dx = model.scaleX.dim;
    var dy = model.scaleY.dim;
    var dc = model.scaleColor.dim;
    var ds = model.scaleSplit.dim;
    var calcSign = (function (row) { return ((row[dy] >= 0) ? 1 : -1); });
    var gen = function (x, sampleRow, sign) {
        var genId = [x, model.id(sampleRow), sign].join(' ');
        return _a = {},
            _a[dx] = x,
            _a[dy] = sign * (1e-10),
            _a[ds] = sampleRow[ds],
            _a[dc] = sampleRow[dc],
            _a[synthetic] = true,
            _a[synthetic + "id"] = genId,
            _a;
        var _a;
    };
    var merge = function (templateSorted, fiberSorted, sign) {
        var groups = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["groupBy"](fiberSorted, function (row) { return row[dx]; });
        var sample = fiberSorted[0];
        return templateSorted.reduce(function (memo, k) { return memo.concat((groups[k] || (gen(k, sample, sign)))); }, []);
    };
    var asc = function (a, b) { return a - b; };
    var getUsualXs = function () { return _utils_utils__WEBPACK_IMPORTED_MODULE_0__["unique"](fibers.reduce(function (memo, fib) { return memo.concat(fib.map(function (row) { return row[dx]; })); }, []))
        .sort(asc); };
    var getPeriodicXs = function () {
        // If there is no data for some period, we should also generate empty data
        var xs = getUsualXs();
        var max = Math.max.apply(Math, xs.map(function (d) { return Number(d); }));
        var domain = model.scaleX.domain();
        var ticks = _unit_domain_period_generator__WEBPACK_IMPORTED_MODULE_1__["UnitDomainPeriodGenerator"]
            .generate(domain[0], domain[1], xPeriod, { utc: utc })
            .filter(function (t) { return t >= domain[0] && t <= domain[1]; });
        var xIndex = 0;
        var missingTicks = [];
        var period = _unit_domain_period_generator__WEBPACK_IMPORTED_MODULE_1__["UnitDomainPeriodGenerator"].get(xPeriod, { utc: utc });
        ticks.forEach(function (t) {
            var tn = Number(t);
            if (tn >= max) {
                return;
            }
            for (var i = xIndex; i < xs.length; i++) {
                if (Number(period.cast(xs[i])) === tn) {
                    xIndex++;
                    return;
                }
            }
            missingTicks.push(t);
        });
        return xs.concat(missingTicks).sort(asc);
    };
    var xs = (xPeriod ? getPeriodicXs() : getUsualXs());
    var nextData = fibers
        .map(function (fib) { return fib.sort(function (a, b) { return model.xi(a) - model.xi(b); }); })
        .reduce((isStack ?
        (function (memo, fib) {
            var bySign = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["groupBy"](fib, function (row) { return String(calcSign(row)); });
            return Object.keys(bySign).reduce(function (memo, s) { return memo.concat(merge(xs, bySign[s], s)); }, memo);
        }) :
        (function (memo, fib) {
            var bySign = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["groupBy"](fib, function (row) { return String(calcSign(row)); });
            var maxX = Math.max.apply(Math, fib.map(function (row) { return row[dx]; }));
            return memo.concat(merge(xs.filter(function (x) { return x <= maxX; }), fib, 0));
        })), []);
    return {
        data: function () { return nextData; },
        size: function (row) { return ((row[synthetic]) ? model.scaleSize(0) : model.size(row)); },
        id: function (row) { return ((row[synthetic]) ? row[synthetic + "id"] : model.id(row)); }
    };
});


/***/ }),

/***/ "./src/plugins-sdk.ts":
/*!****************************!*\
  !*** ./src/plugins-sdk.ts ***!
  \****************************/
/*! exports provided: PluginsSDK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginsSDK", function() { return PluginsSDK; });
/* harmony import */ var _formatter_registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatter-registry */ "./src/formatter-registry.ts");
/* harmony import */ var _plugins_sdk_unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugins-sdk/unit */ "./src/plugins-sdk/unit.js");
/* harmony import */ var _plugins_sdk_spec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugins-sdk/spec */ "./src/plugins-sdk/spec.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.ts");




var customTokens = {};
var PluginsSDK = /** @class */ (function () {
    function PluginsSDK() {
    }
    PluginsSDK.unit = function (unitRef) {
        return new _plugins_sdk_unit__WEBPACK_IMPORTED_MODULE_1__["Unit"](unitRef);
    };
    PluginsSDK.spec = function (specRef) {
        return new _plugins_sdk_spec__WEBPACK_IMPORTED_MODULE_2__["Spec"](specRef);
    };
    PluginsSDK.cloneObject = function (obj) {
        return JSON.parse(JSON.stringify(obj));
    };
    PluginsSDK.depthFirstSearch = function (node, predicate) {
        if (predicate(node)) {
            return node;
        }
        var frames = node.hasOwnProperty('frames') ? node.frames : [{ units: node.units }];
        for (var f = 0; f < frames.length; f++) {
            var children = frames[f].units || [];
            for (var i = 0; i < children.length; i++) {
                var found = PluginsSDK.depthFirstSearch(children[i], predicate);
                if (found) {
                    return found;
                }
            }
        }
    };
    PluginsSDK.traverseSpec = function (spec, iterator) {
        var traverse = function (node, fnIterator, parentNode) {
            fnIterator(node, parentNode);
            (node.units || []).map(function (x) { return traverse(x, fnIterator, node); });
        };
        traverse(spec.unit, iterator, null);
    };
    PluginsSDK.extractFieldsFormatInfo = function (spec) {
        var specScales = spec.scales;
        var isEmptyScale = function (key) {
            return !specScales[key].dim;
        };
        var fillSlot = function (memoRef, config, key) {
            var GUIDE = config.guide || {};
            var scale = specScales[config[key]];
            var guide = GUIDE[key] || {};
            memoRef[scale.dim] = memoRef[scale.dim] || { label: [], format: [], nullAlias: [], tickLabel: [] };
            var label = guide.label;
            var guideLabel = (guide.label || {});
            memoRef[scale.dim].label.push((typeof label === 'string') ?
                (label) :
                (guideLabel._original_text || guideLabel.text));
            var format = guide.tickFormat || guide.tickPeriod;
            memoRef[scale.dim].format.push(format);
            memoRef[scale.dim].nullAlias.push(guide.tickFormatNullAlias);
            // TODO: workaround for #complex-objects
            memoRef[scale.dim].tickLabel.push(guide.tickLabel);
        };
        var configs = [];
        PluginsSDK.traverseSpec(spec, function (node) {
            configs.push(node);
        });
        var summary = configs.reduce(function (memo, config) {
            if (config.type === 'COORDS.RECT' && config.hasOwnProperty('x') && !isEmptyScale(config.x)) {
                fillSlot(memo, config, 'x');
            }
            if (config.type === 'COORDS.RECT' && config.hasOwnProperty('y') && !isEmptyScale(config.y)) {
                fillSlot(memo, config, 'y');
            }
            if (config.hasOwnProperty('color') && !isEmptyScale(config.color)) {
                fillSlot(memo, config, 'color');
            }
            if (config.hasOwnProperty('size') && !isEmptyScale(config.size)) {
                fillSlot(memo, config, 'size');
            }
            if (config.hasOwnProperty('label') && !isEmptyScale(config.label)) {
                fillSlot(memo, config, 'label');
            }
            return memo;
        }, {});
        var choiceRule = function (arr, defaultValue) {
            return arr.filter(function (x) { return x; })[0] || defaultValue;
        };
        return Object
            .keys(summary)
            .reduce(function (memo, k) {
            memo[k] = {};
            memo[k].label = choiceRule(summary[k].label, k);
            var chosenFormat = choiceRule(summary[k].format, null);
            memo[k].nullAlias = choiceRule(summary[k].nullAlias, ("No " + memo[k].label));
            memo[k].tickLabel = choiceRule(summary[k].tickLabel, null);
            // very special case for dates
            var format = (chosenFormat === 'x-time-auto') ?
                (spec.settings.utcTime ? 'day-utc' : 'day') :
                chosenFormat;
            var nonVal = memo[k].nullAlias;
            var fnForm = format ?
                (_formatter_registry__WEBPACK_IMPORTED_MODULE_0__["FormatterRegistry"].get(format, nonVal)) :
                (function (raw) { return (raw == null) ? nonVal : String(raw); });
            memo[k].format = fnForm;
            // TODO: workaround for #complex-objects
            if (memo[k].tickLabel) {
                var kc = k.replace(('.' + memo[k].tickLabel), '');
                memo[kc] = {
                    label: memo[k].label,
                    nullAlias: memo[k].nullAlias,
                    tickLabel: memo[k].tickLabel,
                    format: function (obj) {
                        return fnForm(obj && obj[memo[kc].tickLabel]);
                    },
                    isComplexField: true
                };
                memo[k].parentField = kc;
            }
            return memo;
        }, {});
    };
    PluginsSDK.getFieldFormatters = function (spec, formatters) {
        var info = PluginsSDK.extractFieldsFormatInfo(spec);
        Object.keys(info).forEach(function (k) {
            if (info[k].parentField) {
                delete info[k];
            }
        });
        var toLabelValuePair = function (x) {
            var res = {};
            if (typeof x === 'function' || typeof x === 'string') {
                res = { format: x };
            }
            else if (_utils_utils__WEBPACK_IMPORTED_MODULE_3__["isObject"](x)) {
                res = _utils_utils__WEBPACK_IMPORTED_MODULE_3__["pick"](x, 'label', 'format', 'nullAlias');
            }
            return res;
        };
        Object.keys(formatters).forEach(function (k) {
            var fmt = toLabelValuePair(formatters[k]);
            info[k] = Object.assign(({ label: k, nullAlias: ('No ' + k) }), (info[k] || {}), (_utils_utils__WEBPACK_IMPORTED_MODULE_3__["pick"](fmt, 'label', 'nullAlias')));
            if (fmt.hasOwnProperty('format')) {
                info[k].format = (typeof fmt.format === 'function') ?
                    (fmt.format) :
                    (_formatter_registry__WEBPACK_IMPORTED_MODULE_0__["FormatterRegistry"].get(fmt.format, info[k].nullAlias));
            }
            else {
                info[k].format = (info[k].hasOwnProperty('format')) ?
                    (info[k].format) :
                    (_formatter_registry__WEBPACK_IMPORTED_MODULE_0__["FormatterRegistry"].get(null, info[k].nullAlias));
            }
        });
        var fieldsFormats = Object.keys(info).reduce(function (map, k) {
            var i = info[k];
            map[k] = {
                label: i.label,
                format: i.format
            };
            return map;
        }, {});
        return fieldsFormats;
    };
    PluginsSDK.tokens = function () {
        return {
            reg: function (key, val) {
                customTokens[key] = val;
                return this;
            },
            get: function (key) {
                return customTokens[key] || key;
            }
        };
    };
    PluginsSDK.getParentUnit = function (spec, unit) {
        var parent = null;
        var traverse = function (node, parentNode) {
            if (node.uid === unit.uid) {
                parent = parentNode;
                return true;
            }
            if (node.frames) {
                node.frames.some(function (frame) {
                    return (frame.units || []).some(function (x) { return traverse(x, node); });
                });
            }
            else {
                (node.units || []).some(function (x) { return traverse(x, node); });
            }
            return false;
        };
        traverse(spec.unit, null);
        return parent;
    };
    return PluginsSDK;
}());



/***/ }),

/***/ "./src/plugins-sdk/spec.js":
/*!*********************************!*\
  !*** ./src/plugins-sdk/spec.js ***!
  \*********************************/
/*! exports provided: Spec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spec", function() { return Spec; });
/* harmony import */ var _unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unit */ "./src/plugins-sdk/unit.js");

var Spec = /** @class */ (function () {
    function Spec(specRef) {
        this.specRef = specRef;
    }
    Spec.prototype.value = function () {
        return this.specRef;
    };
    Spec.prototype.unit = function (newUnit) {
        if (newUnit) {
            this.specRef.unit = newUnit;
        }
        return new _unit__WEBPACK_IMPORTED_MODULE_0__["Unit"](this.specRef.unit);
    };
    Spec.prototype.addTransformation = function (name, func) {
        this.specRef.transformations = this.specRef.transformations || {};
        this.specRef.transformations[name] = func;
        return this;
    };
    Spec.prototype.getSettings = function (name) {
        return this.specRef.settings[name];
    };
    Spec.prototype.setSettings = function (name, value) {
        this.specRef.settings = this.specRef.settings || {};
        this.specRef.settings[name] = value;
        return this;
    };
    Spec.prototype.getScale = function (name) {
        return this.specRef.scales[name];
    };
    Spec.prototype.addScale = function (name, props) {
        this.specRef.scales[name] = props;
        return this;
    };
    Spec.prototype.regSource = function (sourceName, sourceObject) {
        this.specRef.sources[sourceName] = sourceObject;
        return this;
    };
    Spec.prototype.getSourceData = function (sourceName) {
        var srcData = this.specRef.sources[sourceName] || { data: [] };
        return srcData.data;
    };
    Spec.prototype.getSourceDim = function (sourceName, sourceDim) {
        var srcDims = this.specRef.sources[sourceName] || { dims: {} };
        return srcDims.dims[sourceDim] || {};
    };
    return Spec;
}());



/***/ }),

/***/ "./src/plugins-sdk/unit.js":
/*!*********************************!*\
  !*** ./src/plugins-sdk/unit.js ***!
  \*********************************/
/*! exports provided: Unit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unit", function() { return Unit; });
var Unit = /** @class */ (function () {
    function Unit(unitRef) {
        this.unitRef = unitRef;
    }
    Unit.prototype.value = function () {
        return this.unitRef;
    };
    Unit.prototype.clone = function () {
        return JSON.parse(JSON.stringify(this.unitRef));
    };
    Unit.prototype.traverse = function (iterator) {
        var fnTraverse = function (node, fnIterator, parentNode) {
            fnIterator(node, parentNode);
            (node.units || []).map(function (x) { return fnTraverse(x, fnIterator, node); });
        };
        fnTraverse(this.unitRef, iterator, null);
        return this;
    };
    Unit.prototype.reduce = function (iterator, memo) {
        var r = memo;
        this.traverse(function (unit, parent) { return (r = iterator(r, unit, parent)); });
        return r;
    };
    Unit.prototype.addFrame = function (frameConfig) {
        this.unitRef.frames = this.unitRef.frames || [];
        frameConfig.key.__layerid__ = ['L', (new Date()).getTime(), this.unitRef.frames.length].join('');
        frameConfig.source = (frameConfig.hasOwnProperty('source') ?
            (frameConfig.source) :
            (this.unitRef.expression.source));
        frameConfig.pipe = frameConfig.pipe || [];
        this.unitRef.frames.push(frameConfig);
        return this;
    };
    Unit.prototype.addTransformation = function (name, params) {
        this.unitRef.transformation = this.unitRef.transformation || [];
        this.unitRef.transformation.push({ type: name, args: params });
        return this;
    };
    Unit.prototype.isCoordinates = function () {
        return ((this.unitRef.type || '').toUpperCase().indexOf('COORDS.') === 0);
    };
    Unit.prototype.isElementOf = function (typeOfCoordinates) {
        if (this.isCoordinates()) {
            return false;
        }
        var xType = (this.unitRef.type || '');
        var parts = (xType.split('/'));
        if (parts.length === 1) {
            parts.unshift('RECT'); // by default
        }
        return (parts[0].toUpperCase() === typeOfCoordinates.toUpperCase());
    };
    return Unit;
}());



/***/ }),

/***/ "./src/plugins.js":
/*!************************!*\
  !*** ./src/plugins.js ***!
  \************************/
/*! exports provided: Plugins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plugins", function() { return Plugins; });
var Plugins = /** @class */ (function () {
    function Plugins(plugins, chart) {
        this.chart = chart;
        this.handlers = new Map();
        this.plugins = plugins.map(this.initPlugin, this);
    }
    Plugins.prototype.initPlugin = function (plugin) {
        var _this = this;
        if (plugin.init) {
            plugin.init(this.chart);
        }
        var handlers = [];
        this.handlers.set(plugin, handlers);
        var addHandler = function (event, handler) {
            handlers.push(_this.chart.on(event, handler, plugin));
        };
        if (plugin.destroy) {
            addHandler('destroy', plugin.destroy.bind(plugin));
        }
        Object
            .keys(plugin)
            .forEach(function (name) {
            if (name.indexOf('on') === 0) {
                var event = name.substr(2).toLowerCase();
                addHandler(event, plugin[name].bind(plugin));
            }
        });
        return plugin;
    };
    Plugins.prototype.destroyPlugin = function (plugin) {
        var _this = this;
        if (plugin.destroy) {
            plugin.destroy();
        }
        this.handlers.get(plugin)
            .forEach(function (handler) {
            _this.chart.removeHandler(handler, plugin);
        });
    };
    Plugins.prototype.destroy = function () {
        var _this = this;
        this.plugins.forEach(function (p) { return _this.destroyPlugin(p); });
    };
    return Plugins;
}());



/***/ }),

/***/ "./src/scales-factory.ts":
/*!*******************************!*\
  !*** ./src/scales-factory.ts ***!
  \*******************************/
/*! exports provided: ScalesFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScalesFactory", function() { return ScalesFactory; });
/* harmony import */ var _data_frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-frame */ "./src/data-frame.ts");

var ScalesFactory = /** @class */ (function () {
    function ScalesFactory(scalesRegistry, sources, scales) {
        this.registry = scalesRegistry;
        this.sources = sources;
        this.scales = scales;
    }
    ScalesFactory.prototype.createScaleInfo = function (scaleConfig, dataFrame) {
        if (dataFrame === void 0) { dataFrame = null; }
        var dim = scaleConfig.dim;
        var src = scaleConfig.source;
        var type = (this.sources[src].dims[dim] || {}).type;
        var data = (this.sources[src].data);
        var frame = dataFrame || (new _data_frame__WEBPACK_IMPORTED_MODULE_0__["DataFrame"]({ source: src }, data));
        scaleConfig.dimType = type;
        return this.registry.create(scaleConfig.type, frame, scaleConfig);
    };
    ScalesFactory.prototype.createScaleInfoByName = function (name, dataFrame) {
        if (dataFrame === void 0) { dataFrame = null; }
        return this.createScaleInfo(this.scales[name], dataFrame);
    };
    return ScalesFactory;
}());



/***/ }),

/***/ "./src/scales-registry.ts":
/*!********************************!*\
  !*** ./src/scales-registry.ts ***!
  \********************************/
/*! exports provided: scalesRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scalesRegistry", function() { return scalesRegistry; });
var ScalesMap = {};
var ConfigMap = {};
var scalesRegistry = {
    reg: function (scaleType, scaleClass, configInterceptor) {
        if (configInterceptor === void 0) { configInterceptor = (function (x) { return x; }); }
        ScalesMap[scaleType] = scaleClass;
        ConfigMap[scaleType] = configInterceptor;
        return scalesRegistry;
    },
    get: function (scaleType) {
        return ScalesMap[scaleType];
    },
    instance: function (settings) {
        if (settings === void 0) { settings = {}; }
        return {
            create: function (scaleType, dataFrame, scaleConfig) {
                var ScaleClass = scalesRegistry.get(scaleType);
                var configFunc = ConfigMap[scaleType];
                return new ScaleClass(dataFrame, configFunc(scaleConfig, settings));
            }
        };
    }
};


/***/ }),

/***/ "./src/scales/base.ts":
/*!****************************!*\
  !*** ./src/scales/base.ts ***!
  \****************************/
/*! exports provided: BaseScale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseScale", function() { return BaseScale; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");

var map_value = function (dimType) {
    return (dimType === 'date') ?
        (function (v) { return (new Date(v)).getTime(); }) :
        (function (v) { return v; });
};
var generateHashFunction = function (varSet, interval) {
    return _utils_utils__WEBPACK_IMPORTED_MODULE_0__["generateHash"]([varSet, interval].map(function (v) {
        return JSON.stringify;
    }).join(''));
};
var BaseScale = /** @class */ (function () {
    function BaseScale(dataFrame, scaleConfig) {
        var _this = this;
        this._fields = {};
        var data;
        if (Array.isArray(scaleConfig.fitToFrameByDims) && scaleConfig.fitToFrameByDims.length) {
            var leaveDimsInWhereArgsOrEx = function (f) {
                var r = {};
                if (f.type === 'where' && f.args) {
                    r.type = f.type;
                    r.args = scaleConfig
                        .fitToFrameByDims
                        .reduce(function (memo, d) {
                        if (f.args.hasOwnProperty(d)) {
                            memo[d] = f.args[d];
                        }
                        return memo;
                    }, {});
                }
                else {
                    r = f;
                }
                return r;
            };
            data = dataFrame.part(leaveDimsInWhereArgsOrEx);
        }
        else {
            data = dataFrame.full();
        }
        var vars = this.getVarSet(data, scaleConfig);
        if (scaleConfig.order) {
            vars = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["union"](_utils_utils__WEBPACK_IMPORTED_MODULE_0__["intersection"](scaleConfig.order, vars), vars);
        }
        this.vars = vars;
        var originalSeries = vars.map(function (row) { return (row); });
        this.scaleConfig = scaleConfig;
        // keep for backward compatibility with "autoScale"
        this.scaleConfig.nice = ((this.scaleConfig.hasOwnProperty('nice')) ?
            (this.scaleConfig.nice) :
            (this.scaleConfig.autoScale));
        this.addField('dim', this.scaleConfig.dim)
            .addField('scaleDim', this.scaleConfig.dim)
            .addField('scaleType', this.scaleConfig.type)
            .addField('source', this.scaleConfig.source)
            .addField('domain', (function () { return _this.vars; }))
            .addField('isInteger', originalSeries.every(Number.isInteger))
            .addField('originalSeries', (function () { return originalSeries; }))
            .addField('isContains', (function (x) { return _this.isInDomain(x); }))
            .addField('isEmptyScale', (function () { return _this.isEmpty(); }))
            .addField('fixup', function (fn) {
            var cfg = _this.scaleConfig;
            cfg.__fixup__ = cfg.__fixup__ || {};
            cfg.__fixup__ = Object.assign(cfg.__fixup__, fn(Object.assign({}, cfg, cfg.__fixup__)));
        })
            .addField('commit', function () {
            _this.scaleConfig = Object.assign(_this.scaleConfig, _this.scaleConfig.__fixup__);
            delete _this.scaleConfig.__fixup__;
        });
    }
    BaseScale.prototype.isInDomain = function (val) {
        return (this.domain().indexOf(val) >= 0);
    };
    BaseScale.prototype.addField = function (key, val) {
        this._fields[key] = val;
        this[key] = val;
        return this;
    };
    BaseScale.prototype.getField = function (key) {
        return this._fields[key];
    };
    BaseScale.prototype.isEmpty = function () {
        return !Boolean(this._fields.dim);
    };
    BaseScale.prototype.toBaseScale = function (func, dynamicProps) {
        var _this = this;
        if (dynamicProps === void 0) { dynamicProps = null; }
        var scaleFn = Object
            .keys(this._fields)
            .reduce(function (memo, k) {
            memo[k] = _this._fields[k];
            return memo;
        }, func);
        scaleFn.getHash = (function () { return generateHashFunction(_this.vars, dynamicProps); });
        scaleFn.value = scaleFn;
        return scaleFn;
    };
    BaseScale.prototype.getVarSet = function (arr, scale) {
        var series = scale.hasOwnProperty('series') ?
            scale.series :
            arr.map(function (row) { return row[scale.dim]; });
        return _utils_utils__WEBPACK_IMPORTED_MODULE_0__["unique"](series, map_value(scale.dimType));
    };
    return BaseScale;
}());



/***/ }),

/***/ "./src/scales/color.ts":
/*!*****************************!*\
  !*** ./src/scales/color.ts ***!
  \*****************************/
/*! exports provided: ColorScale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorScale", function() { return ColorScale; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/scales/base.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-array */ "d3-array");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3_array__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-scale */ "d3-scale");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(d3_scale__WEBPACK_IMPORTED_MODULE_3__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};




var d3 = __assign({}, d3_array__WEBPACK_IMPORTED_MODULE_2__, d3_scale__WEBPACK_IMPORTED_MODULE_3__);
var ColorScale = /** @class */ (function (_super) {
    __extends(ColorScale, _super);
    function ColorScale(xSource, scaleConfig) {
        var _this = _super.call(this, xSource, scaleConfig) || this;
        var discrete = (scaleConfig.dimType !== 'measure');
        var scaleBrewer = (_this.scaleConfig.brewer
            ||
                (discrete ?
                    _utils_utils__WEBPACK_IMPORTED_MODULE_1__["range"](20).map(function (i) { return 'color20-' + (1 + i); }) :
                    ['#eee', '#000']));
        var props = _this.scaleConfig;
        if (!discrete) {
            var vars = d3.extent(_this.vars);
            var isNum = function (num) { return (Number.isFinite(num) || _utils_utils__WEBPACK_IMPORTED_MODULE_1__["isDate"](num)); };
            var min = isNum(props.min) ? props.min : vars[0];
            var max = isNum(props.max) ? props.max : vars[1];
            var mins = [min, vars[0]].filter(isNum);
            var maxs = [max, vars[1]].filter(isNum);
            vars = [
                mins.sort(function (a, b) { return a - b; })[0],
                maxs.sort(function (a, b) { return b - a; })[0]
            ];
            if (props.nice) {
                if ((vars[0] < 0) && (vars[1] > 0)) {
                    // symmetry
                    var maxPart = Math.max.apply(Math, vars.map(Math.abs));
                    vars = [-maxPart, maxPart];
                }
            }
            _this.vars = vars;
        }
        _this.addField('scaleType', 'color')
            .addField('discrete', discrete)
            .addField('brewer', scaleBrewer)
            .addField('toColor', _utils_utils__WEBPACK_IMPORTED_MODULE_1__["extRGBColor"])
            .addField('toClass', _utils_utils__WEBPACK_IMPORTED_MODULE_1__["extCSSClass"]);
        return _this;
    }
    ColorScale.prototype.create = function () {
        var discrete = this.discrete;
        var varSet = this.vars;
        var brewer = this.getField('brewer');
        var func = discrete ?
            this.createDiscreteScale(varSet, brewer) :
            this.createContinuesScale(varSet, brewer);
        return this.toBaseScale(func);
    };
    ColorScale.prototype.createDiscreteScale = function (varSet, brewer) {
        var defaultColorClass = function () { return 'color-default'; };
        var buildArrayGetClass = function (domain, brewer) {
            var fullDomain = domain.map(function (x) { return String(x).toString(); });
            return d3.scaleOrdinal().range(brewer).domain(fullDomain);
        };
        var buildObjectGetClass = function (brewer, defaultGetClass) {
            var domain = Object.keys(brewer);
            var range = domain.map(function (x) { return brewer[x]; });
            var calculateClass = d3.scaleOrdinal().range(range).domain(domain);
            return function (d) { return brewer.hasOwnProperty(d) ? calculateClass(String(d)) : defaultGetClass(d); };
        };
        var wrapString = function (f) { return (function (d) { return f(String(d).toString()); }); };
        var func;
        if (Array.isArray(brewer)) {
            func = wrapString(buildArrayGetClass(varSet, brewer));
        }
        else if (typeof brewer === 'function') {
            func = function (d) { return brewer(d, wrapString(buildArrayGetClass(varSet, _utils_utils__WEBPACK_IMPORTED_MODULE_1__["range"](20).map(function (i) { return 'color20-' + (1 + i); })))); };
        }
        else if (_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"](brewer)) {
            func = buildObjectGetClass(brewer, defaultColorClass);
        }
        else {
            throw new Error('This brewer is not supported');
        }
        return func;
    };
    ColorScale.prototype.createContinuesScale = function (varSet, brewer) {
        var func;
        if (Array.isArray(brewer)) {
            func = d3.scaleLinear()
                .domain(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["splitEvenly"](varSet.map(function (x) { return x - 0; }), brewer.length))
                .range(brewer);
        }
        else {
            throw new Error('This brewer is not supported');
        }
        return func;
    };
    return ColorScale;
}(_base__WEBPACK_IMPORTED_MODULE_0__["BaseScale"]));



/***/ }),

/***/ "./src/scales/fill.ts":
/*!****************************!*\
  !*** ./src/scales/fill.ts ***!
  \****************************/
/*! exports provided: FillScale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillScale", function() { return FillScale; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/scales/base.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-array */ "d3-array");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3_array__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-scale */ "d3-scale");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(d3_scale__WEBPACK_IMPORTED_MODULE_3__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};




var d3 = __assign({}, d3_array__WEBPACK_IMPORTED_MODULE_2__, d3_scale__WEBPACK_IMPORTED_MODULE_3__);
var FillScale = /** @class */ (function (_super) {
    __extends(FillScale, _super);
    function FillScale(xSource, scaleConfig) {
        var _this = _super.call(this, xSource, scaleConfig) || this;
        var props = _this.scaleConfig;
        var vars = d3.extent(_this.vars);
        var min = Number.isFinite(props.min) ? props.min : vars[0];
        var max = Number.isFinite(props.max) ? props.max : vars[1];
        vars = [
            Math.min(min, vars[0]),
            Math.max(max, vars[1])
        ];
        _this.vars = (props.nice) ? _utils_utils__WEBPACK_IMPORTED_MODULE_1__["niceZeroBased"](vars) : d3.extent(vars);
        var opacityStep = (1 - 0.2) / 9;
        var defBrewer = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["range"](10).map(function (i) { return "rgba(90,180,90," + (0.2 + i * opacityStep).toFixed(2) + ")"; });
        var brewer = props.brewer || defBrewer;
        _this.addField('scaleType', 'fill')
            .addField('brewer', brewer);
        return _this;
    }
    FillScale.prototype.isInDomain = function (x) {
        var domain = this.domain();
        var min = domain[0];
        var max = domain[domain.length - 1];
        return (!Number.isNaN(min) && !Number.isNaN(max) && (x <= max) && (x >= min));
    };
    FillScale.prototype.create = function () {
        var varSet = this.vars;
        var brewer = this.getField('brewer');
        if (!Array.isArray(brewer)) {
            throw new Error('This brewer is not supported');
        }
        var size = brewer.length;
        var step = (varSet[1] - varSet[0]) / size;
        var domain = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["range"](size - 1).map(function (i) { return i + 1; })
            .reduce(function (memo, i) { return memo.concat([varSet[0] + (i * step)]); }, []);
        var func = d3.scaleThreshold().domain(domain).range(brewer);
        return this.toBaseScale(func);
    };
    return FillScale;
}(_base__WEBPACK_IMPORTED_MODULE_0__["BaseScale"]));



/***/ }),

/***/ "./src/scales/identity.ts":
/*!********************************!*\
  !*** ./src/scales/identity.ts ***!
  \********************************/
/*! exports provided: IdentityScale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityScale", function() { return IdentityScale; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/scales/base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var IdentityScale = /** @class */ (function (_super) {
    __extends(IdentityScale, _super);
    function IdentityScale(xSource, scaleConfig) {
        var _this = _super.call(this, xSource, scaleConfig) || this;
        _this._references = scaleConfig.references;
        _this._refCounter = scaleConfig.refCounter;
        _this.addField('scaleType', 'identity');
        return _this;
    }
    IdentityScale.prototype.create = function () {
        var refs = this._references;
        var next = this._refCounter;
        return this.toBaseScale((function (x, row) {
            if (x == null) {
                var i = refs.get(row);
                if (i == null) {
                    i = next();
                    refs.set(row, i);
                }
            }
            else {
                i = x;
            }
            return i;
        }));
    };
    return IdentityScale;
}(_base__WEBPACK_IMPORTED_MODULE_0__["BaseScale"]));



/***/ }),

/***/ "./src/scales/linear.ts":
/*!******************************!*\
  !*** ./src/scales/linear.ts ***!
  \******************************/
/*! exports provided: LinearScale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinearScale", function() { return LinearScale; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/scales/base.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-array */ "d3-array");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3_array__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-scale */ "d3-scale");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(d3_scale__WEBPACK_IMPORTED_MODULE_3__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};




var d3 = __assign({}, d3_array__WEBPACK_IMPORTED_MODULE_2__, d3_scale__WEBPACK_IMPORTED_MODULE_3__);
var LinearScale = /** @class */ (function (_super) {
    __extends(LinearScale, _super);
    function LinearScale(xSource, scaleConfig) {
        var _this = _super.call(this, xSource, scaleConfig) || this;
        var props = _this.scaleConfig;
        var vars = d3.extent(_this.vars);
        var min = Number.isFinite(props.min) ? props.min : vars[0];
        var max = Number.isFinite(props.max) ? props.max : vars[1];
        vars = [
            Math.min.apply(Math, [min, vars[0]].filter(Number.isFinite)),
            Math.max.apply(Math, [max, vars[1]].filter(Number.isFinite))
        ];
        _this.vars = (props.nice) ? _utils_utils__WEBPACK_IMPORTED_MODULE_1__["niceZeroBased"](vars) : d3.extent(vars);
        if (_this.vars[0] === _this.vars[1]) {
            var e = Math.pow(10, Math.floor(Math.log(_this.vars[0]) / Math.LN10));
            _this.vars[0] -= (e);
            _this.vars[1] += (e || 10);
        }
        _this.addField('scaleType', 'linear')
            .addField('discrete', false);
        return _this;
    }
    LinearScale.prototype.isInDomain = function (x) {
        var domain = this.domain();
        var min = domain[0];
        var max = domain[domain.length - 1];
        return (!Number.isNaN(min) && !Number.isNaN(max) && (x <= max) && (x >= min));
    };
    LinearScale.prototype.create = function (interval) {
        var domain = this.vars;
        var scale = this.extendScale(d3.scaleLinear());
        scale
            .domain(domain)
            .range(interval)
            .clamp(true);
        return this.toBaseScale(scale, interval);
    };
    LinearScale.prototype.extendScale = function (scale) {
        var _this = this;
        // have to copy properties since d3 produce Function with methods
        var d3ScaleCopy = scale.copy;
        var d3ScaleTicks = scale.ticks;
        Object.assign(scale, {
            stepSize: function () { return 0; },
            copy: function () { return _this.extendScale(d3ScaleCopy.call(scale)); },
            ticks: (this.getField('isInteger') ?
                function (n) { return d3ScaleTicks.call(scale, n).filter(Number.isInteger); } :
                scale.ticks)
        });
        return scale;
    };
    return LinearScale;
}(_base__WEBPACK_IMPORTED_MODULE_0__["BaseScale"]));



/***/ }),

/***/ "./src/scales/logarithmic.ts":
/*!***********************************!*\
  !*** ./src/scales/logarithmic.ts ***!
  \***********************************/
/*! exports provided: LogarithmicScale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogarithmicScale", function() { return LogarithmicScale; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/scales/base.ts");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../error */ "./src/error.ts");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-array */ "d3-array");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3_array__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-scale */ "d3-scale");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(d3_scale__WEBPACK_IMPORTED_MODULE_3__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};




var d3 = __assign({}, d3_array__WEBPACK_IMPORTED_MODULE_2__, d3_scale__WEBPACK_IMPORTED_MODULE_3__);
var LogarithmicScale = /** @class */ (function (_super) {
    __extends(LogarithmicScale, _super);
    function LogarithmicScale(xSource, scaleConfig) {
        var _this = _super.call(this, xSource, scaleConfig) || this;
        var props = _this.scaleConfig;
        var domain = d3.extent(_this.vars);
        var min = Number.isFinite(props.min) ? props.min : domain[0];
        var max = Number.isFinite(props.max) ? props.max : domain[1];
        domain = [
            Math.min.apply(Math, [min, domain[0]].filter(Number.isFinite)),
            Math.max.apply(Math, [max, domain[1]].filter(Number.isFinite))
        ];
        throwIfCrossesZero(domain);
        if (props.nice) {
            domain = niceLog10(domain);
        }
        _this.vars = domain;
        _this.addField('scaleType', 'logarithmic')
            .addField('discrete', false);
        return _this;
    }
    LogarithmicScale.prototype.isInDomain = function (x) {
        var domain = this.domain();
        var min = domain[0];
        var max = domain[domain.length - 1];
        return (!Number.isNaN(min) && !Number.isNaN(max) && (x <= max) && (x >= min));
    };
    LogarithmicScale.prototype.create = function (interval) {
        var domain = this.vars;
        throwIfCrossesZero(domain);
        var d3Scale = extendLogScale(d3.scaleLog())
            .domain(domain)
            .range(interval);
        d3Scale.stepSize = (function () { return 0; });
        return this.toBaseScale(d3Scale, interval);
    };
    return LogarithmicScale;
}(_base__WEBPACK_IMPORTED_MODULE_0__["BaseScale"]));

function log10(x) {
    return Math.log(x) / Math.LN10;
}
function throwIfCrossesZero(domain) {
    if (domain[0] * domain[1] <= 0) {
        throw new _error__WEBPACK_IMPORTED_MODULE_1__["TauChartError"]('Logarithmic scale domain cannot cross zero.', _error__WEBPACK_IMPORTED_MODULE_1__["errorCodes"].INVALID_LOG_DOMAIN);
    }
}
function extendLogScale(scale) {
    var d3ScaleCopy = scale.copy;
    // NOTE: D3 log scale ticks count is not configurable
    // and returns 10 ticks per each exponent.
    // So here we make it return 10 ticks per each
    // step of 1, 2 or more exponents, according to
    // necessary ticks count.
    scale.ticks = function (n) {
        var ticksPerExp = 10;
        var ticks = [];
        var extent = d3.extent(scale.domain());
        var lowExp = Math.floor(log10(extent[0]));
        var topExp = Math.ceil(log10(extent[1]));
        var step = Math.ceil((topExp - lowExp) * ticksPerExp /
            (Math.ceil(n / ticksPerExp) * ticksPerExp));
        for (var e = lowExp; e <= topExp; e += step) {
            for (var t = 1; t <= ticksPerExp; t++) {
                var tick = Math.pow(t, step) * Math.pow(10, e);
                tick = parseFloat(tick.toExponential(0));
                if (tick >= extent[0] && tick <= extent[1]) {
                    ticks.push(tick);
                }
            }
        }
        return ticks;
    };
    scale.copy = function () {
        var copy = d3ScaleCopy.call(scale);
        extendLogScale(copy);
        return copy;
    };
    return scale;
}
function niceLog10(domain) {
    var isPositive = domain[0] > 0;
    var absDomain = domain.map(function (d) { return Math.abs(d); });
    var top = Math.max.apply(Math, absDomain);
    var low = Math.min.apply(Math, absDomain);
    var lowExp = low.toExponential().split('e');
    var topExp = top.toExponential().split('e');
    var niceLow = parseFloat(Math.floor(Number(lowExp[0])) + 'e' + lowExp[1]);
    var niceTop = parseFloat(Math.ceil(Number(topExp[0])) + 'e' + topExp[1]);
    return (isPositive ?
        [niceLow, niceTop] :
        [-niceTop, -niceLow]);
}


/***/ }),

/***/ "./src/scales/ordinal.ts":
/*!*******************************!*\
  !*** ./src/scales/ordinal.ts ***!
  \*******************************/
/*! exports provided: OrdinalScale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdinalScale", function() { return OrdinalScale; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/scales/base.ts");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-scale */ "d3-scale");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3_scale__WEBPACK_IMPORTED_MODULE_1__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var OrdinalScale = /** @class */ (function (_super) {
    __extends(OrdinalScale, _super);
    function OrdinalScale(xSource, scaleConfig) {
        var _this = _super.call(this, xSource, scaleConfig) || this;
        _this.addField('scaleType', 'ordinal')
            .addField('discrete', true);
        return _this;
    }
    OrdinalScale.prototype.create = function (interval) {
        var props = this.scaleConfig;
        var varSet = this.vars;
        var d3Domain = d3_scale__WEBPACK_IMPORTED_MODULE_1__["scalePoint"]().domain(varSet);
        var d3Scale = d3Domain.range(interval)
            .padding(0.5);
        var size = Math.max.apply(Math, interval);
        var fnRatio = function (key) {
            if (typeof props.ratio === 'function') {
                return props.ratio(key, size, varSet);
            }
            else if (typeof props.ratio === 'object') {
                return props.ratio[key];
            }
            else {
                // uniform distribution
                return 1 / varSet.length;
            }
        };
        var scale = function (x) {
            var r;
            if (!props.ratio) {
                r = d3Scale(x);
            }
            else {
                r = size - varSet.slice(varSet.indexOf(x) + 1).reduce(function (acc, v) { return (acc + (size * fnRatio(v))); }, (size * fnRatio(x) * 0.5));
            }
            return r;
        };
        // have to copy properties since d3 produce Function with methods
        Object.keys(d3Scale).forEach(function (p) { return (scale[p] = d3Scale[p]); });
        scale.stepSize = function (x) { return (fnRatio(x) * size); };
        return this.toBaseScale(scale, interval);
    };
    return OrdinalScale;
}(_base__WEBPACK_IMPORTED_MODULE_0__["BaseScale"]));



/***/ }),

/***/ "./src/scales/period.ts":
/*!******************************!*\
  !*** ./src/scales/period.ts ***!
  \******************************/
/*! exports provided: PeriodScale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeriodScale", function() { return PeriodScale; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/scales/base.ts");
/* harmony import */ var _unit_domain_period_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../unit-domain-period-generator */ "./src/unit-domain-period-generator.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-array */ "d3-array");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(d3_array__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-scale */ "d3-scale");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(d3_scale__WEBPACK_IMPORTED_MODULE_4__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};





var d3 = __assign({}, d3_array__WEBPACK_IMPORTED_MODULE_3__, d3_scale__WEBPACK_IMPORTED_MODULE_4__);
var PeriodScale = /** @class */ (function (_super) {
    __extends(PeriodScale, _super);
    function PeriodScale(xSource, scaleConfig) {
        var _this = _super.call(this, xSource, scaleConfig) || this;
        var props = _this.scaleConfig;
        var vars = _this.vars;
        var domain = d3.extent(vars);
        var min = (props.min === null || props.min === undefined) ? domain[0] : new Date(props.min).getTime();
        var max = (props.max === null || props.max === undefined) ? domain[1] : new Date(props.max).getTime();
        var range = [
            new Date(Math.min(min, domain[0])),
            new Date(Math.max(max, domain[1]))
        ];
        var periodGenerator = _unit_domain_period_generator__WEBPACK_IMPORTED_MODULE_1__["UnitDomainPeriodGenerator"].get(props.period, { utc: props.utcTime });
        if (props.fitToFrameByDims || (periodGenerator === null)) {
            _this.vars = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["unique"](vars.map(function (x) { return new Date(x); }), function (x) { return x.getTime(); })
                .sort(function (date1, date2) { return Number(date2) - Number(date1); });
        }
        else {
            _this.vars = _unit_domain_period_generator__WEBPACK_IMPORTED_MODULE_1__["UnitDomainPeriodGenerator"].generate(range[0], range[1], props.period, { utc: props.utcTime });
        }
        _this.periodGenerator = periodGenerator;
        _this.addField('scaleType', 'period')
            .addField('utcTime', _this.scaleConfig.utcTime)
            .addField('period', _this.scaleConfig.period)
            .addField('discrete', true);
        return _this;
    }
    PeriodScale.prototype.isInDomain = function (aTime) {
        var gen = this.periodGenerator;
        var date = new Date(aTime);
        var val = (gen ? gen.cast(date) : date).getTime();
        return (this.domain().map(function (x) { return x.getTime(); }).indexOf(val) >= 0);
    };
    PeriodScale.prototype.create = function (interval) {
        var gen = this.periodGenerator;
        var varSet = this.vars;
        var varSetTicks = this.vars.map(function (t) { return t.getTime(); });
        var props = this.scaleConfig;
        var d3Domain = d3.scalePoint().domain(varSet);
        var d3Scale = d3Domain.range(interval)
            .padding(0.5);
        var d3DomainTicks = d3.scalePoint().domain(varSetTicks.map(String));
        var d3ScaleTicks = d3DomainTicks.range(interval)
            .padding(0.5);
        var size = Math.max.apply(Math, interval);
        var fnRatio = function (key) {
            var tick = new Date(key).getTime();
            if (typeof props.ratio === 'function') {
                return props.ratio(tick, size, varSetTicks);
            }
            else if (typeof props.ratio === 'object') {
                return props.ratio[tick];
            }
            else {
                // uniform distribution
                return 1 / varSet.length;
            }
        };
        var scale = (function (x) {
            var r;
            var dx = new Date(x);
            var px = (gen ? gen.cast(dx) : dx);
            var tx = px.getTime();
            if (!props.ratio) {
                r = d3ScaleTicks(String(tx));
            }
            else {
                r = size - varSetTicks.slice(varSetTicks.indexOf(tx) + 1).reduce(function (acc, v) { return (acc + (size * fnRatio(v))); }, (size * fnRatio(x) * 0.5));
            }
            return r;
        });
        // have to copy properties since d3 produce Function with methods
        Object.keys(d3Scale).forEach(function (p) { return (scale[p] = d3Scale[p]); });
        scale.stepSize = function (x) { return (fnRatio(x) * size); };
        return this.toBaseScale(scale, interval);
    };
    return PeriodScale;
}(_base__WEBPACK_IMPORTED_MODULE_0__["BaseScale"]));



/***/ }),

/***/ "./src/scales/size.ts":
/*!****************************!*\
  !*** ./src/scales/size.ts ***!
  \****************************/
/*! exports provided: SizeScale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizeScale", function() { return SizeScale; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/scales/base.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-array */ "d3-array");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3_array__WEBPACK_IMPORTED_MODULE_2__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var funcTypes = {
    sqrt: function (x) { return Math.sqrt(x); },
    linear: function (x) { return (x); }
};
var SizeScale = /** @class */ (function (_super) {
    __extends(SizeScale, _super);
    function SizeScale(xSource, scaleConfig) {
        var _this = _super.call(this, xSource, scaleConfig) || this;
        var props = _this.scaleConfig;
        var vars = d3_array__WEBPACK_IMPORTED_MODULE_2__["extent"](_this.vars);
        var min = Number.isFinite(props.min) ? props.min : vars[0];
        var max = Number.isFinite(props.max) ? props.max : vars[1];
        _this.vars = [
            Math.min.apply(Math, [min, vars[0]].filter(Number.isFinite)),
            Math.max.apply(Math, [max, vars[1]].filter(Number.isFinite))
        ];
        _this.addField('scaleType', 'size');
        _this.addField('funcType', scaleConfig.func || 'sqrt');
        return _this;
    }
    SizeScale.prototype.isInDomain = function (x) {
        var domain = this.domain().sort();
        var min = domain[0];
        var max = domain[domain.length - 1];
        return (!Number.isNaN(min) && !Number.isNaN(max) && (x <= max) && (x >= min));
    };
    SizeScale.prototype.create = function () {
        var props = this.scaleConfig;
        var varSet = this.vars;
        var p = _utils_utils__WEBPACK_IMPORTED_MODULE_1__["defaults"]({}, props, { func: 'sqrt', minSize: 0, maxSize: 1 });
        var funType = p.func;
        var minSize = p.minSize;
        var maxSize = p.maxSize;
        var f = funcTypes[funType];
        var values = varSet.filter(function (x) { return Number.isFinite(Number(x)); });
        var func;
        if (values.length === 0) {
            func = (function () { return maxSize; });
        }
        else {
            var k = 1;
            var xMin = 0;
            var min = Math.min.apply(Math, values);
            var max = Math.max.apply(Math, values);
            var len = f(Math.max(Math.abs(min), Math.abs(max), (max - min)));
            xMin = (min < 0) ? min : 0;
            k = (len === 0) ? 1 : ((maxSize - minSize) / len);
            func = function (x) {
                var numX = (x !== null) ? parseFloat(x) : 0;
                if (!Number.isFinite(numX)) {
                    return maxSize;
                }
                var posX = (numX - xMin); // translate to positive x domain
                return (minSize + (f(posX) * k));
            };
        }
        return this.toBaseScale(func);
    };
    return SizeScale;
}(_base__WEBPACK_IMPORTED_MODULE_0__["BaseScale"]));



/***/ }),

/***/ "./src/scales/time.ts":
/*!****************************!*\
  !*** ./src/scales/time.ts ***!
  \****************************/
/*! exports provided: TimeScale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeScale", function() { return TimeScale; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/scales/base.ts");
/* harmony import */ var _unit_domain_period_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../unit-domain-period-generator */ "./src/unit-domain-period-generator.ts");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-array */ "d3-array");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3_array__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-scale */ "d3-scale");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(d3_scale__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-time */ "d3-time");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(d3_time__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};





var d3 = __assign({}, d3_array__WEBPACK_IMPORTED_MODULE_2__, d3_scale__WEBPACK_IMPORTED_MODULE_3__, d3_time__WEBPACK_IMPORTED_MODULE_4__);

var TimeScale = /** @class */ (function (_super) {
    __extends(TimeScale, _super);
    function TimeScale(xSource, scaleConfig) {
        var _this = _super.call(this, xSource, scaleConfig) || this;
        var props = _this.scaleConfig;
        var vars = _this.vars;
        var period = (props.period ?
            _unit_domain_period_generator__WEBPACK_IMPORTED_MODULE_1__["UnitDomainPeriodGenerator"].get(_this.scaleConfig.period, { utc: props.utcTime }) :
            null);
        var domain = d3.extent(vars).map(period ?
            function (v) { return period.cast(new Date(v)); } :
            function (v) { return new Date(v); });
        var min = (props.min == null) ? domain[0] : new Date(props.min).getTime();
        var max = (props.max == null) ? domain[1] : new Date(props.max).getTime();
        vars = [
            new Date(Math.min(min, Number(domain[0]))),
            new Date(Math.max(max, Number(domain[1])))
        ];
        _this.niceIntervalFn = null;
        if (props.nice && !period) {
            var niceInterval = props.niceInterval;
            // Todo: Some map for d3 intervals.
            var d3TimeInterval = (niceInterval && getD3Interval(niceInterval) ?
                (props.utcTime ? getD3UtcInterval(niceInterval) : getD3Interval(niceInterval)) :
                null);
            if (d3TimeInterval) {
                _this.niceIntervalFn = d3TimeInterval;
            }
            else {
                // TODO: show warning?
                _this.niceIntervalFn = null;
            }
            _this.vars = _utils_utils__WEBPACK_IMPORTED_MODULE_5__["niceTimeDomain"](vars, _this.niceIntervalFn, { utc: props.utcTime });
        }
        else {
            _this.vars = vars;
        }
        if (period && Number(_this.vars[0]) === Number(_this.vars[1])) {
            // Note: If domain start and end are the same
            // extend domain with one time interval at each side
            var mid = _this.vars[0];
            _this.vars[0] = period.cast(new Date(Number(mid) - 1));
            _this.vars[1] = period.next(mid);
        }
        _this.periodGenerator = period;
        _this.addField('scaleType', 'time')
            .addField('utcTime', _this.scaleConfig.utcTime)
            .addField('period', _this.scaleConfig.period);
        return _this;
    }
    TimeScale.prototype.isInDomain = function (aTime) {
        var x = new Date(aTime);
        if (this.scaleConfig.period) {
            x = this.periodGenerator.cast(x);
        }
        var domain = this.domain();
        var min = domain[0];
        var max = domain[domain.length - 1];
        return (!Number.isNaN(min) && !Number.isNaN(max) && (x <= max) && (x >= min));
    };
    TimeScale.prototype.create = function (interval) {
        var _this = this;
        var varSet = this.vars;
        var utcTime = this.scaleConfig.utcTime;
        var period = this.periodGenerator;
        var d3TimeScale = (utcTime ? d3.scaleUtc : d3.scaleTime);
        var d3Scale = d3TimeScale()
            .domain(varSet)
            .range(interval);
        var scale = (function (x) {
            var min = varSet[0];
            var max = varSet[1];
            if (x > max) {
                x = max;
            }
            if (x < min) {
                x = min;
            }
            return d3Scale(new Date(x));
        });
        if (this.scaleConfig.period) {
            var min_1 = varSet[0], max_1 = varSet[1];
            var d3Ticks = d3Scale.ticks;
            d3Scale.ticks = function (count) {
                if (typeof count !== 'number') {
                    count = 10;
                }
                return getPeriodTicks([min_1, max_1], _this.scaleConfig.period, utcTime, count);
            };
            var floorMin_1 = period.cast(min_1);
            while (floorMin_1 < min_1) {
                floorMin_1 = period.next(floorMin_1);
            }
            var floorMax_1 = period.cast(max_1);
            scale = (function (x) {
                var floor = period.cast(x);
                if (floor < floorMin_1) {
                    floor = floorMin_1;
                }
                if (floor > floorMax_1) {
                    floor = floorMax_1;
                }
                return d3Scale(floor);
            });
        }
        // have to copy properties since d3 produce Function with methods
        Object.keys(d3Scale).forEach(function (p) { return (scale[p] = d3Scale[p]); });
        scale.stepSize = (function () { return 0; });
        return this.toBaseScale(scale, interval);
    };
    return TimeScale;
}(_base__WEBPACK_IMPORTED_MODULE_0__["BaseScale"]));

function getD3Interval(name) {
    return d3["time" + name[0].toUpperCase() + name.slice(1)];
}
function getD3UtcInterval(name) {
    return d3["utc" + name[0].toUpperCase() + name.slice(1)];
}
function getPeriodTicks(domain, period, utc, count) {
    if (count === void 0) { count = 10; }
    var start = domain[0], end = domain[1];
    var gen = _unit_domain_period_generator__WEBPACK_IMPORTED_MODULE_1__["UnitDomainPeriodGenerator"].get(period, { utc: utc });
    var n0 = Number(start);
    var n1 = Number(end);
    var interval = ((n1 - n0) / count);
    var periodInterval = (Number(gen.next(gen.cast(start))) - Number(gen.cast(start)));
    var periodCount = ((n1 - n0) / periodInterval);
    if (periodCount <= count) {
        return _unit_domain_period_generator__WEBPACK_IMPORTED_MODULE_1__["UnitDomainPeriodGenerator"].generate(start, end, period, { utc: utc })
            .filter(function (t) { return t >= start && t <= end; });
    }
    return getTimeTicks(domain, utc, count);
}
var time = (function () {
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var week = day * 7;
    var month = day * 30;
    var year = day * 365;
    return {
        second: { duration: second, interval: d3.timeSecond, utc: d3.utcSecond },
        minute: { duration: minute, interval: d3.timeMinute, utc: d3.utcMinute },
        hour: { duration: hour, interval: d3.timeHour, utc: d3.utcHour },
        day: { duration: day, interval: d3.timeDay, utc: d3.utcDay },
        week: { duration: week, interval: d3.timeWeek, utc: d3.utcWeek },
        month: { duration: month, interval: d3.timeMonth, utc: d3.utcMonth },
        year: { duration: year, interval: d3.timeYear, utc: d3.utcYear },
    };
})();
var intervals = (function () {
    var info = function (time, step) {
        var duration = (step * time.duration);
        return { time: time, step: step, duration: duration };
    };
    return [
        info(time.second, 1),
        info(time.second, 5),
        info(time.second, 15),
        info(time.second, 30),
        info(time.minute, 1),
        info(time.minute, 5),
        info(time.minute, 15),
        info(time.minute, 30),
        info(time.hour, 1),
        info(time.hour, 3),
        info(time.hour, 6),
        info(time.hour, 12),
        info(time.day, 1),
        info(time.day, 2),
        info(time.week, 1),
        info(time.month, 1),
        info(time.month, 3),
        info(time.year, 1),
    ];
})();
function getTimeTicks(domain, utc, count) {
    if (count === void 0) { count = 10; }
    var d0 = Number(domain[0]);
    var d1 = Number(domain[1]);
    var target = Math.abs(d1 - d0) / count;
    var interval;
    var step;
    var i = d3.bisector(function (i) { return i.duration; }).right(intervals, target);
    if (i === intervals.length) {
        interval = (utc ? d3.utcYear : d3.timeYear);
        step = d3.tickStep((d0 / time.year.duration), (d1 / time.year.duration), count);
    }
    else if (i) {
        var before = (target / intervals[i - 1].duration);
        var after = (intervals[i].duration / target);
        var ti = intervals[before < after ? i - 1 : i];
        interval = (utc ? ti.time.utc : ti.time.interval);
        step = ti.step;
    }
    else {
        interval = (utc ? d3.utcMillisecond : d3.timeMillisecond);
        step = d3.tickStep(d0, d1, count);
    }
    return interval
        .every(step)
        .range(new Date(d0), new Date(d1 + 1));
}


/***/ }),

/***/ "./src/scales/value.ts":
/*!*****************************!*\
  !*** ./src/scales/value.ts ***!
  \*****************************/
/*! exports provided: ValueScale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueScale", function() { return ValueScale; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/scales/base.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ValueScale = /** @class */ (function (_super) {
    __extends(ValueScale, _super);
    function ValueScale(xSource, scaleConfig) {
        var _this = _super.call(this, xSource, scaleConfig) || this;
        _this.addField('scaleType', 'value')
            .addField('georole', scaleConfig.georole);
        return _this;
    }
    ValueScale.prototype.create = function () {
        return this.toBaseScale((function (x) { return x; }));
    };
    return ValueScale;
}(_base__WEBPACK_IMPORTED_MODULE_0__["BaseScale"]));



/***/ }),

/***/ "./src/spec-converter.ts":
/*!*******************************!*\
  !*** ./src/spec-converter.ts ***!
  \*******************************/
/*! exports provided: SpecConverter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecConverter", function() { return SpecConverter; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _unit_domain_period_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unit-domain-period-generator */ "./src/unit-domain-period-generator.ts");


var SpecConverter = /** @class */ (function () {
    function SpecConverter(spec) {
        this.spec = spec;
        this.dist = {
            sources: {
                '?': {
                    dims: {},
                    data: [{}]
                },
                '/': {
                    dims: {},
                    data: []
                }
            },
            scales: {
                // jscs:disable disallowQuotedKeysInObjects
                'x_null': { type: 'ordinal', source: '?' },
                'y_null': { type: 'ordinal', source: '?' },
                'size_null': { type: 'size', source: '?' },
                'color_null': { type: 'color', source: '?' },
                'split_null': { type: 'value', source: '?' },
                'pos:default': { type: 'ordinal', source: '?' },
                'size:default': { type: 'size', source: '?' },
                'label:default': { type: 'value', source: '?' },
                'color:default': { type: 'color', source: '?' },
                'split:default': { type: 'value', source: '?' }
                // jscs:enable disallowQuotedKeysInObjects
            },
            settings: spec.settings
        };
    }
    SpecConverter.prototype.convert = function () {
        var srcSpec = this.spec;
        var gplSpec = this.dist;
        this.ruleAssignSourceDims(srcSpec, gplSpec);
        this.ruleAssignStructure(srcSpec, gplSpec);
        this.ruleAssignSourceData(srcSpec, gplSpec);
        this.ruleApplyDefaults(gplSpec);
        return gplSpec;
    };
    SpecConverter.prototype.ruleApplyDefaults = function (spec) {
        var settings = spec.settings || {};
        var traverse = function (node, iterator, parentNode) {
            iterator(node, parentNode);
            (node.units || []).map(function (x) { return traverse(x, iterator, node); });
        };
        var iterator = function (childUnit, root) {
            childUnit.namespace = 'chart';
            childUnit.guide = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["defaults"]((childUnit.guide || {}), {
                animationSpeed: settings.animationSpeed || 0,
                utcTime: settings.utcTime || false
            });
            // leaf elements should inherit coordinates properties
            if (root && !childUnit.hasOwnProperty('units')) {
                childUnit = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["defaults"](childUnit, { x: root.x, y: root.y });
                var parentGuide = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["clone"](root.guide) || {};
                childUnit.guide.x = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["defaults"](childUnit.guide.x || {}, parentGuide.x);
                childUnit.guide.y = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["defaults"](childUnit.guide.y || {}, parentGuide.y);
                childUnit.expression.inherit = root.expression.inherit;
            }
            if (root && !(childUnit.guide && childUnit.guide.hasOwnProperty('obsoleteVerticalStackOrder'))) {
                childUnit.guide = Object.assign(childUnit.guide || {}, {
                    obsoleteVerticalStackOrder: (root.guide || {}).obsoleteVerticalStackOrder
                });
            }
            return childUnit;
        };
        traverse(spec.unit, iterator, null);
    };
    SpecConverter.prototype.ruleAssignSourceData = function (srcSpec, gplSpec) {
        var meta = srcSpec.spec.dimensions || {};
        var dims = gplSpec.sources['/'].dims;
        var reduceIterator = function (row, key) {
            var rowKey = row[key];
            if (_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"](rowKey) && !_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isDate"](rowKey)) {
                Object.keys(rowKey).forEach(function (k) { return (row[key + '.' + k] = rowKey[k]); });
            }
            return row;
        };
        gplSpec.sources['/'].data = srcSpec
            .data
            .map(function (rowN) {
            var row = (Object.keys(rowN).reduce(reduceIterator, rowN));
            return (Object.keys(dims).reduce(function (r, k) {
                if (!r.hasOwnProperty(k)) {
                    r[k] = null;
                }
                if ((r[k] !== null) && meta[k] && (['period', 'time'].indexOf(meta[k].scale) >= 0)) {
                    r[k] = new Date(r[k]);
                }
                return r;
            }, row));
        });
    };
    SpecConverter.prototype.ruleAssignSourceDims = function (srcSpec, gplSpec) {
        var dims = srcSpec.spec.dimensions;
        gplSpec.sources['/'].dims = Object
            .keys(dims)
            .reduce(function (memo, k) {
            memo[k] = { type: dims[k].type };
            return memo;
        }, {});
    };
    SpecConverter.prototype.ruleAssignStructure = function (srcSpec, gplSpec) {
        var _this = this;
        var walkStructure = function (srcUnit) {
            var gplRoot = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["clone"](_utils_utils__WEBPACK_IMPORTED_MODULE_0__["omit"](srcUnit, 'unit'));
            _this.ruleCreateScales(srcUnit, gplRoot, gplSpec.settings);
            gplRoot.expression = _this.ruleInferExpression(srcUnit);
            if (srcUnit.unit) {
                gplRoot.units = srcUnit.unit.map(walkStructure);
            }
            return gplRoot;
        };
        var root = walkStructure(srcSpec.spec.unit);
        root.expression.inherit = false;
        gplSpec.unit = root;
    };
    SpecConverter.prototype.ruleCreateScales = function (srcUnit, gplRoot, settings) {
        var _this = this;
        var guide = srcUnit.guide || {};
        ['identity', 'color', 'size', 'label', 'x', 'y', 'split'].forEach(function (p) {
            if (srcUnit.hasOwnProperty(p)) {
                gplRoot[p] = _this.scalesPool(p, srcUnit[p], guide[p] || {}, settings);
            }
        });
    };
    SpecConverter.prototype.ruleInferDim = function (dimName, guide) {
        var r = dimName;
        var dims = this.spec.spec.dimensions;
        if (!dims.hasOwnProperty(r)) {
            return r;
        }
        if (guide.hasOwnProperty('tickLabel')) {
            r = dimName + "." + guide.tickLabel;
        }
        else if (dims[dimName].value) {
            r = dimName + "." + dims[dimName].value;
        }
        var myDims = this.dist.sources['/'].dims;
        if (!myDims.hasOwnProperty(r)) {
            myDims[r] = { type: myDims[dimName].type };
            delete myDims[dimName];
        }
        return r;
    };
    SpecConverter.prototype.scalesPool = function (scaleType, dimName, guide, settings) {
        var k = scaleType + "_" + dimName;
        if (this.dist.scales.hasOwnProperty(k)) {
            return k;
        }
        var dims = this.spec.spec.dimensions;
        var item = {};
        if (scaleType === 'color' && dimName !== null) {
            item = {
                type: 'color',
                source: '/',
                dim: this.ruleInferDim(dimName, guide)
            };
            if (guide.hasOwnProperty('brewer')) {
                item.brewer = guide.brewer;
            }
            if (dims[dimName] && dims[dimName].hasOwnProperty('order')) {
                item.order = dims[dimName].order;
            }
            if (guide.hasOwnProperty('min')) {
                item.min = guide.min;
            }
            if (guide.hasOwnProperty('max')) {
                item.max = guide.max;
            }
            if (guide.hasOwnProperty('nice')) {
                item.nice = guide.nice;
            }
        }
        if (scaleType === 'size' && dimName !== null) {
            item = {
                type: 'size',
                source: '/',
                dim: this.ruleInferDim(dimName, guide)
            };
            if (guide.hasOwnProperty('func')) {
                item.func = guide.func;
            }
            if (guide.hasOwnProperty('min')) {
                item.min = guide.min;
            }
            if (guide.hasOwnProperty('max')) {
                item.max = guide.max;
            }
            if (guide.hasOwnProperty('minSize')) {
                item.minSize = guide.minSize;
            }
            if (guide.hasOwnProperty('maxSize')) {
                item.maxSize = guide.maxSize;
            }
        }
        if (scaleType === 'label' && dimName !== null) {
            item = {
                type: 'value',
                source: '/',
                dim: this.ruleInferDim(dimName, guide)
            };
        }
        if (scaleType === 'split' && dimName !== null) {
            item = {
                type: 'value',
                source: '/',
                dim: this.ruleInferDim(dimName, guide)
            };
        }
        if (scaleType === 'identity' && dimName !== null) {
            item = {
                type: 'identity',
                source: '/',
                dim: this.ruleInferDim(dimName, guide)
            };
        }
        if (dims.hasOwnProperty(dimName) && (scaleType === 'x' || scaleType === 'y')) {
            item = {
                type: dims[dimName].scale,
                source: '/',
                dim: this.ruleInferDim(dimName, guide)
            };
            if (dims[dimName].hasOwnProperty('order')) {
                item.order = dims[dimName].order;
            }
            if (guide.hasOwnProperty('min')) {
                item.min = guide.min;
            }
            if (guide.hasOwnProperty('max')) {
                item.max = guide.max;
            }
            if (guide.hasOwnProperty('autoScale')) {
                item.autoScale = guide.autoScale;
            }
            else {
                item.autoScale = true;
            }
            if (guide.hasOwnProperty('nice')) {
                item.nice = guide.nice;
            }
            else {
                // #121763
                // for backward compatibility with "autoScale" property
                item.nice = item.autoScale;
            }
            if (guide.hasOwnProperty('niceInterval')) {
                item.niceInterval = guide.niceInterval;
            }
            else {
                item.niceInterval = null;
            }
            if (guide.hasOwnProperty('tickPeriod')) {
                item.period = guide.tickPeriod;
                item.type = 'period';
            }
            if (guide.hasOwnProperty('tickPeriod') && guide.hasOwnProperty('timeInterval')) {
                throw new Error('Use "tickPeriod" for period scale, "timeInterval" for time scale, but not both');
            }
            if (guide.hasOwnProperty('timeInterval')) {
                item.period = guide.timeInterval;
                item.type = 'time';
                var gen = _unit_domain_period_generator__WEBPACK_IMPORTED_MODULE_1__["UnitDomainPeriodGenerator"].get(item.period, { utc: settings.utcTime });
                if (guide.hasOwnProperty('min')) {
                    item.min = gen.cast(new Date(guide.min));
                }
                if (guide.hasOwnProperty('max')) {
                    item.max = gen.cast(new Date(guide.max));
                }
            }
            item.fitToFrameByDims = guide.fitToFrameByDims;
            item.ratio = guide.ratio;
        }
        this.dist.scales[k] = item;
        return k;
    };
    SpecConverter.prototype.getScaleConfig = function (scaleType, dimName) {
        var k = scaleType + "_" + dimName;
        return this.dist.scales[k];
    };
    SpecConverter.prototype.ruleInferExpression = function (srcUnit) {
        var expr = {
            operator: 'none',
            params: []
        };
        var g = srcUnit.guide || {};
        var gx = g.x || {};
        var gy = g.y || {};
        var scaleX = this.getScaleConfig('x', srcUnit.x);
        var scaleY = this.getScaleConfig('y', srcUnit.y);
        if (srcUnit.type.indexOf('ELEMENT.') === 0) {
            if (srcUnit.color) {
                expr = {
                    operator: 'groupBy',
                    params: [
                        this.ruleInferDim(srcUnit.color, g.color || {})
                    ]
                };
            }
        }
        else if (srcUnit.type === 'COORDS.RECT') {
            if (srcUnit.unit.length === 1 && srcUnit.unit[0].type === 'COORDS.RECT') {
                // jshint ignore:start
                // jscs:disable requireDotNotation
                if (scaleX.period || scaleY.period) {
                    expr = {
                        operator: 'cross_period',
                        params: [
                            this.ruleInferDim(srcUnit.x, gx),
                            this.ruleInferDim(srcUnit.y, gy),
                            scaleX.period,
                            scaleY.period
                        ]
                    };
                }
                else {
                    expr = {
                        operator: 'cross',
                        params: [
                            this.ruleInferDim(srcUnit.x, gx),
                            this.ruleInferDim(srcUnit.y, gy)
                        ]
                    };
                }
                // jscs:enable requireDotNotation
                // jshint ignore:end
            }
        }
        return Object.assign({ inherit: true, source: '/' }, expr);
    };
    return SpecConverter;
}());



/***/ }),

/***/ "./src/spec-transform-apply-ratio.ts":
/*!*******************************************!*\
  !*** ./src/spec-transform-apply-ratio.ts ***!
  \*******************************************/
/*! exports provided: SpecTransformApplyRatio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecTransformApplyRatio", function() { return SpecTransformApplyRatio; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.ts");

var SpecTransformApplyRatio = /** @class */ (function () {
    function SpecTransformApplyRatio(spec) {
        this.spec = spec;
        this.isApplicable = spec.settings.autoRatio && _utils_utils__WEBPACK_IMPORTED_MODULE_0__["isSpecRectCoordsOnly"](spec.unit);
    }
    SpecTransformApplyRatio.prototype.transform = function (chartInstance) {
        var refSpec = this.spec;
        if (!this.isApplicable) {
            return refSpec;
        }
        try {
            this.ruleApplyRatio(refSpec, chartInstance);
        }
        catch (ex) {
            if (ex.message !== 'Not applicable') {
                throw ex;
            }
        }
        return refSpec;
    };
    SpecTransformApplyRatio.prototype.ruleApplyRatio = function (spec, chartInstance) {
        var isCoordsRect = function (unitRef) {
            return (unitRef.type === 'COORDS.RECT' || unitRef.type === 'RECT');
        };
        var isElement = function (unitRef) {
            return (unitRef.type.indexOf('ELEMENT.') === 0);
        };
        var traverse = function (root, enterFn, exitFn, level) {
            if (level === void 0) { level = 0; }
            var shouldContinue = enterFn(root, level);
            if (shouldContinue) {
                (root.units || []).map(function (rect) { return traverse(rect, enterFn, exitFn, level + 1); });
            }
            exitFn(root, level);
        };
        var xs = [];
        var ys = [];
        var enterIterator = function (unitRef, level) {
            if ((level > 1) || !isCoordsRect(unitRef)) {
                throw new Error('Not applicable');
            }
            xs.push(unitRef.x);
            ys.push(unitRef.y);
            var units = unitRef.units || [];
            var rects = units
                .map(function (x) {
                if (!(isCoordsRect(x) || isElement(x))) {
                    throw new Error('Not applicable');
                }
                return x;
            })
                .filter(isCoordsRect);
            return (rects.length === 1);
        };
        traverse(spec.unit, enterIterator, (function () { return 0; }));
        var toScaleConfig = (function (scaleName) { return spec.scales[scaleName]; });
        var isValidScale = (function (scale) { return ((scale.source === '/') && !scale.ratio && !scale.fitToFrameByDims); });
        var isOrdinalScale = (function (scale) {
            return scale.type === 'ordinal' || (scale.type === 'period' && !scale.period);
        });
        var realXs = xs.map(toScaleConfig).filter(isValidScale);
        var realYs = ys.map(toScaleConfig).filter(isValidScale);
        var xyProd = 2;
        if ([realXs.length, realYs.length].some(function (l) { return l === xyProd; })) {
            var exDim_1 = (function (s) { return s.dim; });
            var scalesIterator_1 = (function (s, i, list) {
                s.fitToFrameByDims = list.slice(0, i).map(exDim_1);
            });
            var tryApplyRatioToScales = function (axis, scalesRef) {
                if (scalesRef.filter(isOrdinalScale).length === xyProd) {
                    scalesRef.forEach(scalesIterator_1);
                    scalesRef[0].ratio = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["generateRatioFunction"](axis, scalesRef.map(exDim_1), chartInstance);
                }
            };
            tryApplyRatioToScales('x', realXs);
            tryApplyRatioToScales('y', realYs);
        }
    };
    return SpecTransformApplyRatio;
}());



/***/ }),

/***/ "./src/spec-transform-auto-layout.ts":
/*!*******************************************!*\
  !*** ./src/spec-transform-auto-layout.ts ***!
  \*******************************************/
/*! exports provided: SpecTransformAutoLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecTransformAutoLayout", function() { return SpecTransformAutoLayout; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _formatter_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatter-registry */ "./src/formatter-registry.ts");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-scale */ "d3-scale");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3_scale__WEBPACK_IMPORTED_MODULE_2__);



var sum = (function (arr) { return arr.reduce(function (sum, x) { return (sum + x); }, 0); });
function extendGuide(guide, targetUnit, dimension, properties) {
    var guide_dim = guide.hasOwnProperty(dimension) ? guide[dimension] : {};
    guide_dim = guide_dim || {};
    properties.forEach(function (prop) {
        Object.assign(targetUnit.guide[dimension][prop], guide_dim[prop]);
    });
}
var applyCustomProps = function (targetUnit, customUnit) {
    var guide = customUnit.guide || {};
    var config = {
        x: ['label'],
        y: ['label'],
        size: ['label'],
        color: ['label'],
        padding: []
    };
    Object.keys(config).forEach(function (name) {
        var properties = config[name];
        extendGuide(guide, targetUnit, name, properties);
    });
    Object.assign(targetUnit.guide, Object.keys(guide).reduce(function (obj, k) {
        if (!config.hasOwnProperty(k)) {
            obj[k] = guide[k];
        }
        return obj;
    }, {}));
    return targetUnit;
};
var extendLabel = function (guide, dimension, extend) {
    guide[dimension] = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["defaults"](guide[dimension] || {}, {
        label: ''
    });
    guide[dimension].label = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"](guide[dimension].label) ?
        guide[dimension].label :
        { text: guide[dimension].label };
    guide[dimension].label = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["defaults"](guide[dimension].label, extend || {}, {
        padding: 32,
        rotate: 0,
        textAnchor: 'middle',
        cssClass: 'label',
        dock: null
    });
    return guide[dimension];
};
var extendAxis = function (guide, dimension, extend) {
    guide[dimension] = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["defaults"](guide[dimension], extend || {}, {
        padding: 0,
        density: 30,
        rotate: 0,
        tickPeriod: null,
        tickFormat: null,
        autoScale: true
    });
    guide[dimension].tickFormat = guide[dimension].tickFormat || guide[dimension].tickPeriod;
    guide[dimension].nice = guide[dimension].hasOwnProperty('nice') ?
        guide[dimension].nice :
        guide[dimension].autoScale;
    return guide[dimension];
};
var applyNodeDefaults = function (node) {
    node.options = node.options || {};
    node.guide = node.guide || {};
    node.guide.padding = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["defaults"](node.guide.padding || {}, { l: 0, b: 0, r: 0, t: 0 });
    node.guide.x = extendLabel(node.guide, 'x');
    node.guide.x = extendAxis(node.guide, 'x', {
        cssClass: 'x axis',
        scaleOrient: 'bottom',
        textAnchor: 'middle'
    });
    node.guide.y = extendLabel(node.guide, 'y', { rotate: -90 });
    node.guide.y = extendAxis(node.guide, 'y', {
        cssClass: 'y axis',
        scaleOrient: 'left',
        textAnchor: 'end'
    });
    node.guide.size = extendLabel(node.guide, 'size');
    node.guide.color = extendLabel(node.guide, 'color');
    return node;
};
var inheritProps = function (childUnit, root) {
    childUnit.guide = childUnit.guide || {};
    childUnit.guide.padding = childUnit.guide.padding || { l: 0, t: 0, r: 0, b: 0 };
    // leaf elements should inherit coordinates properties
    if (!childUnit.hasOwnProperty('units')) {
        childUnit = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["defaults"](childUnit, root);
        childUnit.guide = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["defaults"](childUnit.guide, _utils_utils__WEBPACK_IMPORTED_MODULE_0__["clone"](root.guide));
        childUnit.guide.x = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["defaults"](childUnit.guide.x, _utils_utils__WEBPACK_IMPORTED_MODULE_0__["clone"](root.guide.x));
        childUnit.guide.y = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["defaults"](childUnit.guide.y, _utils_utils__WEBPACK_IMPORTED_MODULE_0__["clone"](root.guide.y));
    }
    return childUnit;
};
var createSelectorPredicates = function (root) {
    var children = root.units || [];
    var isLeaf = !root.hasOwnProperty('units');
    var isLeafParent = !children.some(function (c) { return c.hasOwnProperty('units'); });
    return {
        type: root.type,
        isLeaf: isLeaf,
        isLeafParent: !isLeaf && isLeafParent
    };
};
var getMaxTickLabelSize = function (domainValues, formatter, fnCalcTickLabelSize, axisLabelLimit) {
    if (domainValues.length === 0) {
        return { width: 0, height: 0 };
    }
    if (formatter === null) {
        var size = fnCalcTickLabelSize('TauChart Library');
        size.width = axisLabelLimit * 0.625; // golden ratio
        return size;
    }
    if (domainValues.every(function (d) { return (typeof d === 'number'); })) {
        domainValues = d3_scale__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]().domain(domainValues).ticks();
    }
    var maxXTickText = domainValues.reduce(function (prev, value) {
        var computed = formatter(value).toString().length;
        if (!prev.computed || computed > prev.computed) {
            return {
                value: value,
                computed: computed
            };
        }
        return prev;
    }, {}).value;
    return fnCalcTickLabelSize(formatter(maxXTickText));
};
var getTickFormat = function (dim, defaultFormats) {
    var dimType = dim.dimType;
    var scaleType = dim.scaleType;
    var specifier = '*';
    var key = [dimType, scaleType, specifier].join(':');
    var tag = [dimType, scaleType].join(':');
    return defaultFormats[key] || defaultFormats[tag] || defaultFormats[dimType] || null;
};
var getSettings = function (settings, prop, dimType) {
    return settings.hasOwnProperty(prop + ":" + dimType) ?
        settings[prop + ":" + dimType] :
        settings["" + prop];
};
var shortFormat = function (format, utc) {
    var timeFormats = ['day', 'week', 'month'];
    if (timeFormats.indexOf(format) >= 0) {
        format += "-short" + (utc ? '-utc' : '');
    }
    return format;
};
var rotateBox = function (_a, angle) {
    var width = _a.width, height = _a.height;
    var rad = Math.abs(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["toRadian"](angle));
    return {
        width: Math.max(Math.cos(rad) * width, height),
        height: Math.max(Math.sin(rad) * width, height)
    };
};
var getTextAnchorByAngle = function (xAngle, xOrY) {
    if (xOrY === void 0) { xOrY = 'x'; }
    var angle = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["normalizeAngle"](xAngle);
    var xRules = (xOrY === 'x') ?
        ([
            [0, 45, 'middle'],
            [45, 135, 'start'],
            [135, 225, 'middle'],
            [225, 315, 'end'],
            [315, 360, 'middle']
        ]) :
        ([
            [0, 90, 'end'],
            [90, 135, 'middle'],
            [135, 225, 'start'],
            [225, 315, 'middle'],
            [315, 360, 'end']
        ]);
    var i = xRules.findIndex(function (r) { return (angle >= r[0] && angle < r[1]); });
    return xRules[i][2];
};
var wrapLine = function (box, lineWidthLimit, linesCountLimit) {
    var guessLinesCount = Math.ceil(box.width / lineWidthLimit);
    var koeffLinesCount = Math.min(guessLinesCount, linesCountLimit);
    return {
        height: koeffLinesCount * box.height,
        width: lineWidthLimit
    };
};
function calcXYGuide(guide, settings, xMeta, yMeta, inlineLabels, isFacetUnit) {
    var xValues = xMeta.values;
    var yValues = yMeta.values;
    var xIsEmptyAxis = (xMeta.isEmpty || guide.x.hideTicks);
    var yIsEmptyAxis = (yMeta.isEmpty || guide.y.hideTicks);
    var maxXTickBox = getMaxTickLabelSize(xValues, _formatter_registry__WEBPACK_IMPORTED_MODULE_1__["FormatterRegistry"].get(guide.x.tickFormat, guide.x.tickFormatNullAlias), settings.getAxisTickLabelSize, settings.xAxisTickLabelLimit);
    var maxYTickBox = getMaxTickLabelSize(yValues, _formatter_registry__WEBPACK_IMPORTED_MODULE_1__["FormatterRegistry"].get(guide.y.tickFormat, guide.y.tickFormatNullAlias), settings.getAxisTickLabelSize, settings.yAxisTickLabelLimit);
    var multiLinesXBox = maxXTickBox;
    var multiLinesYBox = maxYTickBox;
    if (maxXTickBox.width > settings.xAxisTickLabelLimit) {
        guide.x.tickFormatWordWrap = true;
        guide.x.tickFormatWordWrapLines = settings.xTickWordWrapLinesLimit;
        multiLinesXBox = wrapLine(maxXTickBox, settings.xAxisTickLabelLimit, settings.xTickWordWrapLinesLimit);
    }
    if (maxYTickBox.width > settings.yAxisTickLabelLimit) {
        guide.y.tickFormatWordWrap = true;
        guide.y.tickFormatWordWrapLines = settings.yTickWordWrapLinesLimit;
        multiLinesYBox = wrapLine(maxYTickBox, settings.yAxisTickLabelLimit, settings.yTickWordWrapLinesLimit);
    }
    if (isFacetUnit) {
        guide.y.tickFormatWordWrap = false;
        guide.y.tickFormatWordWrapLines = 1;
        multiLinesYBox = wrapLine(maxYTickBox, settings.yAxisTickLabelLimit * 2, 1);
        multiLinesYBox.width = 20;
    }
    var kxAxisW = xIsEmptyAxis ? 0 : 1;
    var kyAxisW = yIsEmptyAxis ? 0 : 1;
    var xLabel = guide.x.label;
    var yLabel = guide.y.label;
    var kxLabelW = (xLabel.text && !xLabel.hide) ? 1 : 0;
    var kyLabelW = (yLabel.text && !yLabel.hide) ? 1 : 0;
    var rotXBox = rotateBox(multiLinesXBox, guide.x.rotate);
    var rotYBox = rotateBox(multiLinesYBox, guide.y.rotate);
    if (inlineLabels) {
        xLabel.padding = (-settings.xAxisPadding - settings.xFontLabelHeight) / 2 + settings.xFontLabelHeight;
        xLabel.paddingNoTicks = xLabel.padding;
        yLabel.padding = (-settings.yAxisPadding - settings.yFontLabelHeight) / 2;
        yLabel.paddingNoTicks = yLabel.padding;
        kxLabelW = 0;
        kyLabelW = 0;
    }
    else {
        xLabel.padding = sum([
            (kxAxisW * (settings.xTickWidth + rotXBox.height)),
            (kxLabelW * (settings.distToXAxisLabel + settings.xFontLabelHeight))
        ]);
        xLabel.paddingNoTicks = (kxLabelW * (settings.distToXAxisLabel + settings.xFontLabelHeight));
        yLabel.padding = sum([
            (kyAxisW * (settings.yTickWidth + rotYBox.width)),
            (kyLabelW * settings.distToYAxisLabel)
        ]);
        yLabel.paddingNoTicks = (kyLabelW * settings.distToYAxisLabel);
    }
    if (isFacetUnit) {
        yLabel.padding = 0;
        yLabel.paddingNoTicks = 0;
    }
    var bottomBorder = settings.xFontLabelDescenderLineHeight; // for font descender line
    guide.padding = Object.assign((guide.padding), {
        b: (guide.x.hide) ?
            (0) :
            sum([
                (guide.x.padding),
                (kxAxisW * (settings.xTickWidth + rotXBox.height)),
                (kxLabelW * (settings.distToXAxisLabel + settings.xFontLabelHeight + bottomBorder))
            ]),
        l: (guide.y.hide) ?
            (0) :
            sum([
                (guide.y.padding),
                (isFacetUnit ? 0 : (kyAxisW * (settings.yTickWidth + rotYBox.width))),
                (kyLabelW * (settings.distToYAxisLabel + settings.yFontLabelHeight))
            ])
    });
    guide.paddingNoTicks = Object.assign({}, (guide.paddingNoTicks), {
        b: (guide.x.hide) ?
            (0) :
            sum([
                (guide.x.padding),
                (kxLabelW * (settings.distToXAxisLabel + settings.xFontLabelHeight + bottomBorder))
            ]),
        l: (guide.y.hide) ?
            (0) :
            sum([
                (guide.y.padding),
                (kyLabelW * (settings.distToYAxisLabel + settings.yFontLabelHeight))
            ])
    });
    guide.x = Object.assign((guide.x), {
        density: (rotXBox.width + getSettings(settings, 'xDensityPadding', xMeta.dimType) * 2),
        tickFontHeight: maxXTickBox.height,
        $minimalDomain: xValues.length,
        $maxTickTextW: multiLinesXBox.width,
        $maxTickTextH: multiLinesXBox.height,
        tickFormatWordWrapLimit: settings.xAxisTickLabelLimit
    });
    guide.y = Object.assign((guide.y), {
        density: (rotYBox.height + getSettings(settings, 'yDensityPadding', yMeta.dimType) * 2),
        tickFontHeight: maxYTickBox.height,
        $minimalDomain: yValues.length,
        $maxTickTextW: multiLinesYBox.width,
        $maxTickTextH: multiLinesYBox.height,
        tickFormatWordWrapLimit: settings.yAxisTickLabelLimit
    });
    return guide;
}
var calcUnitGuide = function (_a) {
    var unit = _a.unit, meta = _a.meta, settings = _a.settings, allowXVertical = _a.allowXVertical, allowYVertical = _a.allowYVertical, inlineLabels = _a.inlineLabels;
    var dimX = meta.dimension(unit.x);
    var dimY = meta.dimension(unit.y);
    var xMeta = meta.scaleMeta(unit.x, unit.guide.x);
    var yMeta = meta.scaleMeta(unit.y, unit.guide.y);
    var xIsEmptyAxis = (xMeta.isEmpty);
    var yIsEmptyAxis = (yMeta.isEmpty);
    unit.guide.x.tickFormat = shortFormat((unit.guide.x.tickFormat || getTickFormat(dimX, settings.defaultFormats)), settings.utcTime);
    unit.guide.y.tickFormat = shortFormat((unit.guide.y.tickFormat || getTickFormat(dimY, settings.defaultFormats)), settings.utcTime);
    var isXVertical = allowXVertical ? !(dimX.dimType === 'measure') : false;
    var isYVertical = allowYVertical ? !(dimY.dimType === 'measure') : false;
    unit.guide.x.padding = xIsEmptyAxis ? 0 : settings.xAxisPadding;
    unit.guide.x.paddingNoTicks = unit.guide.x.padding;
    unit.guide.y.padding = yIsEmptyAxis ? 0 : settings.yAxisPadding;
    unit.guide.y.paddingNoTicks = unit.guide.y.padding;
    unit.guide.x.rotate = isXVertical ? -90 : 0;
    unit.guide.x.textAnchor = getTextAnchorByAngle(unit.guide.x.rotate, 'x');
    unit.guide.y.rotate = isYVertical ? -90 : 0;
    unit.guide.y.textAnchor = getTextAnchorByAngle(unit.guide.y.rotate, 'y');
    unit.guide = calcXYGuide(unit.guide, settings, xMeta, yMeta, inlineLabels, _utils_utils__WEBPACK_IMPORTED_MODULE_0__["isFacetUnit"](unit));
    if (inlineLabels) {
        var xLabel = unit.guide.x.label;
        var yLabel = unit.guide.y.label;
        xLabel.cssClass += ' inline';
        xLabel.dock = 'right';
        xLabel.textAnchor = 'end';
        yLabel.cssClass += ' inline';
        yLabel.dock = 'right';
        yLabel.textAnchor = 'end';
    }
    return unit;
};
var SpecEngineTypeMap = {
    NONE: function (srcSpec, meta, settings) {
        var spec = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["clone"](srcSpec);
        fnTraverseSpec(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["clone"](spec.unit), spec.unit, function (selectorPredicates, unit) {
            unit.guide.x.tickFontHeight = settings.getAxisTickLabelSize('X').height;
            unit.guide.y.tickFontHeight = settings.getAxisTickLabelSize('Y').height;
            unit.guide.x.tickFormatWordWrapLimit = settings.xAxisTickLabelLimit;
            unit.guide.y.tickFormatWordWrapLimit = settings.yAxisTickLabelLimit;
            return unit;
        });
        return spec;
    },
    'BUILD-LABELS': function (srcSpec, meta) {
        var spec = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["clone"](srcSpec);
        var xLabels = [];
        var yLabels = [];
        var xUnit = null;
        var yUnit = null;
        _utils_utils__WEBPACK_IMPORTED_MODULE_0__["traverseJSON"](spec.unit, 'units', createSelectorPredicates, function (selectors, unit) {
            if (selectors.isLeaf) {
                return unit;
            }
            if (!xUnit && unit.x) {
                xUnit = unit;
            }
            if (!yUnit && unit.y) {
                yUnit = unit;
            }
            unit.guide = unit.guide || {};
            unit.guide.x = unit.guide.x || { label: { text: '' } };
            unit.guide.y = unit.guide.y || { label: { text: '' } };
            unit.guide.x.label = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"](unit.guide.x.label)
                ? unit.guide.x.label
                : { text: unit.guide.x.label && unit.guide.x.label.text ? unit.guide.x.label.text : '' };
            unit.guide.y.label = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"](unit.guide.y.label)
                ? unit.guide.y.label
                : { text: unit.guide.y.label && unit.guide.y.label.text ? unit.guide.y.label.text : '' };
            if (unit.x) {
                unit.guide.x.label.text = unit.guide.x.label.text || meta.dimension(unit.x).dimName;
            }
            if (unit.y) {
                unit.guide.y.label.text = unit.guide.y.label.text || meta.dimension(unit.y).dimName;
            }
            var x = unit.guide.x.label.text;
            if (x) {
                xLabels.push(x);
                unit.guide.x.tickFormatNullAlias = unit.guide.x.hasOwnProperty('tickFormatNullAlias') ?
                    unit.guide.x.tickFormatNullAlias :
                    'No ' + x;
                unit.guide.x.label.text = '';
                unit.guide.x.label._original_text = x;
            }
            var y = unit.guide.y.label.text;
            if (y) {
                yLabels.push(y);
                unit.guide.y.tickFormatNullAlias = unit.guide.y.hasOwnProperty('tickFormatNullAlias') ?
                    unit.guide.y.tickFormatNullAlias :
                    'No ' + y;
                unit.guide.y.label.text = '';
                unit.guide.y.label._original_text = y;
            }
            return unit;
        });
        var rightArrow = ' \u2192 ';
        if (xUnit) {
            xUnit.guide.x.label.text = (xUnit.guide.x.label.hide) ? '' : xLabels.join(rightArrow);
        }
        if (yUnit) {
            yUnit.guide.y.label.text = (yUnit.guide.y.label.hide) ? '' : yLabels.join(rightArrow);
        }
        return spec;
    },
    'BUILD-GUIDE': function (srcSpec, meta, settings) {
        var spec = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["clone"](srcSpec);
        fnTraverseSpec(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["clone"](spec.unit), spec.unit, function (selectorPredicates, unit) {
            if (selectorPredicates.isLeaf) {
                return unit;
            }
            var isFacetUnit = (!selectorPredicates.isLeaf && !selectorPredicates.isLeafParent);
            var xMeta = meta.scaleMeta(unit.x, unit.guide.x);
            var yMeta = meta.scaleMeta(unit.y, unit.guide.y);
            var isXVertical = !isFacetUnit && (Boolean(xMeta.dimType) && xMeta.dimType !== 'measure');
            unit.guide.x.rotate = (isXVertical ? -90 : 0);
            unit.guide.x.textAnchor = getTextAnchorByAngle(unit.guide.x.rotate);
            unit.guide.x.tickFormat = unit.guide.x.tickFormat || getTickFormat(xMeta, settings.defaultFormats);
            unit.guide.y.tickFormat = unit.guide.y.tickFormat || getTickFormat(yMeta, settings.defaultFormats);
            unit.guide.x.padding = (isFacetUnit ? 0 : settings.xAxisPadding);
            unit.guide.x.paddingNoTicks = unit.guide.x.padding;
            unit.guide.y.padding = (isFacetUnit ? 0 : settings.yAxisPadding);
            unit.guide.y.paddingNoTicks = unit.guide.y.padding;
            unit.guide = calcXYGuide(unit.guide, _utils_utils__WEBPACK_IMPORTED_MODULE_0__["defaults"]({
                distToXAxisLabel: (xMeta.isEmpty) ? settings.xTickWidth : settings.distToXAxisLabel,
                distToYAxisLabel: (yMeta.isEmpty) ? settings.yTickWidth : settings.distToYAxisLabel
            }, settings), xMeta, yMeta, null, _utils_utils__WEBPACK_IMPORTED_MODULE_0__["isFacetUnit"](unit));
            unit.guide.x = Object.assign((unit.guide.x), {
                cssClass: (isFacetUnit) ? (unit.guide.x.cssClass + ' facet-axis') : (unit.guide.x.cssClass),
                avoidCollisions: (isFacetUnit) ? true : (unit.guide.x.avoidCollisions)
            });
            unit.guide.y = Object.assign((unit.guide.y), {
                cssClass: (isFacetUnit) ? (unit.guide.y.cssClass + ' facet-axis') : (unit.guide.y.cssClass),
                avoidCollisions: (isFacetUnit) ? false : (unit.guide.y.avoidCollisions)
            });
            unit.guide = Object.assign((unit.guide), {
                showGridLines: ((unit.guide.hasOwnProperty('showGridLines')) ?
                    (unit.guide.showGridLines) :
                    (selectorPredicates.isLeafParent ? 'xy' : ''))
            });
            return unit;
        });
        return spec;
    },
    'BUILD-COMPACT': function (srcSpec, meta, settings) {
        var spec = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["clone"](srcSpec);
        fnTraverseSpec(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["clone"](spec.unit), spec.unit, function (selectorPredicates, unit) {
            if (selectorPredicates.isLeaf) {
                return unit;
            }
            if (!unit.guide.hasOwnProperty('showGridLines')) {
                unit.guide.showGridLines = selectorPredicates.isLeafParent ? 'xy' : '';
            }
            if (selectorPredicates.isLeafParent) {
                return calcUnitGuide({
                    unit: unit,
                    meta: meta,
                    settings: _utils_utils__WEBPACK_IMPORTED_MODULE_0__["defaults"]({
                        xTickWordWrapLinesLimit: 1,
                        yTickWordWrapLinesLimit: 1
                    }, settings),
                    allowXVertical: true,
                    allowYVertical: false,
                    inlineLabels: true
                });
            }
            // facet level
            unit.guide.x.cssClass += ' facet-axis compact';
            unit.guide.x.avoidCollisions = true;
            unit.guide.y.cssClass += ' facet-axis compact';
            unit.guide.y.avoidCollisions = true;
            return calcUnitGuide({
                unit: unit,
                meta: meta,
                settings: _utils_utils__WEBPACK_IMPORTED_MODULE_0__["defaults"]({
                    xAxisPadding: 0,
                    yAxisPadding: 0,
                    distToXAxisLabel: 0,
                    distToYAxisLabel: 0,
                    xTickWordWrapLinesLimit: 1,
                    yTickWordWrapLinesLimit: 1
                }, settings),
                allowXVertical: false,
                allowYVertical: true,
                inlineLabels: false
            });
        });
        return spec;
    }
};
SpecEngineTypeMap.AUTO = function (srcSpec, meta, settings) {
    return ['BUILD-LABELS', 'BUILD-GUIDE'].reduce(function (spec, engineName) { return SpecEngineTypeMap[engineName](spec, meta, settings); }, srcSpec);
};
SpecEngineTypeMap.COMPACT = function (srcSpec, meta, settings) {
    return ['BUILD-LABELS', 'BUILD-COMPACT'].reduce(function (spec, engineName) { return SpecEngineTypeMap[engineName](spec, meta, settings); }, srcSpec);
};
var fnTraverseSpec = function (orig, specUnitRef, transformRules) {
    var xRef = applyNodeDefaults(specUnitRef);
    xRef = transformRules(createSelectorPredicates(xRef), xRef);
    xRef = applyCustomProps(xRef, orig);
    var prop = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["omit"](xRef, 'units');
    (xRef.units || []).forEach(function (unit) { return fnTraverseSpec(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["clone"](unit), inheritProps(unit, prop), transformRules); });
    return xRef;
};
var SpecEngineFactory = {
    get: function (typeName, settings, srcSpec, fnCreateScale) {
        var engine = (SpecEngineTypeMap[typeName] || SpecEngineTypeMap.NONE);
        var meta = {
            dimension: function (scaleId) {
                var scaleCfg = srcSpec.scales[scaleId];
                var dim = srcSpec.sources[scaleCfg.source].dims[scaleCfg.dim] || {};
                return {
                    dimName: scaleCfg.dim,
                    dimType: dim.type,
                    scaleType: scaleCfg.type
                };
            },
            scaleMeta: function (scaleId) {
                var scale = fnCreateScale('pos', scaleId);
                var values = scale.domain();
                var scaleCfg = srcSpec.scales[scaleId];
                var dim = srcSpec.sources[scaleCfg.source].dims[scaleCfg.dim] || {};
                return {
                    dimName: scaleCfg.dim,
                    dimType: dim.type,
                    scaleType: scaleCfg.type,
                    values: values,
                    isEmpty: (dim.type == null)
                    // isEmpty: (source == '?')
                    // isEmpty: ((values.filter((x) => !(x === undefined)).length) === 0)
                };
            }
        };
        var unitSpec = { unit: _utils_utils__WEBPACK_IMPORTED_MODULE_0__["clone"](srcSpec.unit) };
        var fullSpec = engine(unitSpec, meta, settings);
        srcSpec.unit = fullSpec.unit;
        return srcSpec;
    }
};
var SpecTransformAutoLayout = /** @class */ (function () {
    function SpecTransformAutoLayout(spec) {
        this.spec = spec;
        this.isApplicable = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["isSpecRectCoordsOnly"](spec.unit);
    }
    SpecTransformAutoLayout.prototype.transform = function (chart) {
        var spec = this.spec;
        if (!this.isApplicable) {
            return spec;
        }
        var size = spec.settings.size;
        var rule = spec.settings.specEngine.find(function (rule) { return ((size.width <= rule.width) ||
            (size.height <= rule.height)); });
        return SpecEngineFactory.get(rule.name, spec.settings, spec, function (type, alias) { return chart.getScaleInfo(alias || type + ":default"); });
    };
    return SpecTransformAutoLayout;
}());



/***/ }),

/***/ "./src/spec-transform-calc-size.ts":
/*!*****************************************!*\
  !*** ./src/spec-transform-calc-size.ts ***!
  \*****************************************/
/*! exports provided: SpecTransformCalcSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecTransformCalcSize", function() { return SpecTransformCalcSize; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _spec_transform_optimize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spec-transform-optimize */ "./src/spec-transform-optimize.ts");


var byOptimisticMaxText = (function (gx) { return gx.$maxTickTextW; });
var byPessimisticMaxText = (function (gx) { return ((gx.rotate == 0) ? gx.$maxTickTextW : gx.$maxTickTextH); });
var byDensity = (function (gx) { return gx.density; });
var getFacetCount = function (specRef) {
    var xFacetKeys = [];
    var yFacetKeys = [];
    var getFacetKeys = function (root) {
        // TODO: Maybe there is an API to
        // determine X and Y facet keys.
        if (root.type === 'COORDS.RECT' &&
            root.units &&
            root.units[0] &&
            root.units[0].type === 'COORDS.RECT') {
            var x = root.x.replace(/^x_/, '');
            var y = root.y.replace(/^y_/, '');
            if (x !== 'null') {
                xFacetKeys.push(x);
            }
            if (y !== 'null') {
                yFacetKeys.push(y);
            }
            root.units.forEach(getFacetKeys);
        }
    };
    getFacetKeys(specRef.unit);
    var xFacetGroups = {};
    var yFacetGroups = {};
    var getFacetGroups = function (root) {
        if (root.type === 'COORDS.RECT') {
            root.frames.forEach(function (f) {
                if (f.key) {
                    var keys = Object.keys(f.key);
                    keys.forEach(function (key) {
                        if (xFacetKeys.indexOf(key) >= 0) {
                            if (!xFacetGroups.hasOwnProperty(key)) {
                                xFacetGroups[key] = [];
                            }
                            if (xFacetGroups[key].indexOf(f.key[key]) < 0) {
                                xFacetGroups[key].push(f.key[key]);
                            }
                        }
                        if (yFacetKeys.indexOf(key) >= 0) {
                            if (!yFacetGroups.hasOwnProperty(key)) {
                                yFacetGroups[key] = [];
                            }
                            if (yFacetGroups[key].indexOf(f.key[key]) < 0) {
                                yFacetGroups[key].push(f.key[key]);
                            }
                        }
                    });
                    if (f.units) {
                        f.units.forEach(getFacetGroups);
                    }
                }
            });
        }
    };
    getFacetGroups(specRef.unit);
    return {
        xFacetCount: Object.keys(xFacetGroups).reduce(function (sum, key) { return sum * xFacetGroups[key].length; }, 1),
        yFacetCount: Object.keys(yFacetGroups).reduce(function (sum, key) { return sum * yFacetGroups[key].length; }, 1)
    };
};
var fitModelStrategies = {
    'entire-view': function (srcSize, calcSize, specRef, tryOptimizeSpec) {
        var g = specRef.unit.guide;
        var _a = getFacetCount(specRef), xFacetCount = _a.xFacetCount, yFacetCount = _a.yFacetCount;
        if (yFacetCount > 0) {
            _spec_transform_optimize__WEBPACK_IMPORTED_MODULE_1__["SpecTransformOptimize"].facetsLabelsAtTop(specRef.unit, specRef.settings);
        }
        var ticksLPad = (g.paddingNoTicks ? (g.padding.l - g.paddingNoTicks.l) : 0);
        var ticksBPad = (g.paddingNoTicks ? (g.padding.b - g.paddingNoTicks.b) : 0);
        var shouldHideXAxis = ((g.paddingNoTicks &&
            (srcSize.height - ticksBPad < specRef.settings.minChartHeight)) ||
            (yFacetCount * specRef.settings.minFacetHeight + ticksBPad > srcSize.height) ||
            (xFacetCount * specRef.settings.minFacetWidth + ticksLPad > srcSize.width));
        var shouldHideYAxis = ((g.paddingNoTicks &&
            (srcSize.width - ticksLPad < specRef.settings.minChartWidth)) ||
            (yFacetCount * specRef.settings.minFacetHeight + ticksBPad > srcSize.height) ||
            (xFacetCount * specRef.settings.minFacetWidth + ticksLPad > srcSize.width));
        if (shouldHideXAxis) {
            _spec_transform_optimize__WEBPACK_IMPORTED_MODULE_1__["SpecTransformOptimize"].hideAxisTicks(specRef.unit, specRef.settings, 'x');
        }
        if (shouldHideYAxis) {
            _spec_transform_optimize__WEBPACK_IMPORTED_MODULE_1__["SpecTransformOptimize"].hideAxisTicks(specRef.unit, specRef.settings, 'y');
        }
        var normalW = srcSize.width;
        var widthByMaxText = calcSize('x', specRef.unit, byOptimisticMaxText);
        if (widthByMaxText <= srcSize.width) {
            tryOptimizeSpec(specRef.unit, specRef.settings);
        }
        else {
            var pessimisticWidthByMaxText = calcSize('x', specRef.unit, byPessimisticMaxText);
            if (pessimisticWidthByMaxText > srcSize.width) {
                var widthByDensity = Math.max(srcSize.width, calcSize('x', specRef.unit, byDensity));
                normalW = Math.min(pessimisticWidthByMaxText, widthByDensity);
            }
        }
        var normalH = Math.max(srcSize.height, calcSize('y', specRef.unit, byDensity));
        if (!shouldHideXAxis && (normalW > srcSize.width)) {
            _spec_transform_optimize__WEBPACK_IMPORTED_MODULE_1__["SpecTransformOptimize"].hideAxisTicks(specRef.unit, specRef.settings, 'x');
        }
        if (!shouldHideYAxis && (normalH > srcSize.height)) {
            _spec_transform_optimize__WEBPACK_IMPORTED_MODULE_1__["SpecTransformOptimize"].hideAxisTicks(specRef.unit, specRef.settings, 'y');
        }
        var newW = srcSize.width;
        var newH = srcSize.height;
        return { newW: newW, newH: newH };
    },
    minimal: function (srcSize, calcSize, specRef) {
        var newW = calcSize('x', specRef.unit, byDensity);
        var newH = calcSize('y', specRef.unit, byDensity);
        return { newW: newW, newH: newH };
    },
    normal: function (srcSize, calcSize, specRef, tryOptimizeSpec) {
        var yFacetCount = getFacetCount(specRef).yFacetCount;
        if (yFacetCount > 0) {
            _spec_transform_optimize__WEBPACK_IMPORTED_MODULE_1__["SpecTransformOptimize"].facetsLabelsAtTop(specRef.unit, specRef.settings);
        }
        var g = specRef.unit.guide;
        if (g.paddingNoTicks) {
            if (srcSize.width - g.padding.l + g.paddingNoTicks.l < specRef.settings.minChartWidth) {
                _spec_transform_optimize__WEBPACK_IMPORTED_MODULE_1__["SpecTransformOptimize"].hideAxisTicks(specRef.unit, specRef.settings, 'y');
            }
            if (srcSize.height - g.padding.b + g.paddingNoTicks.b < specRef.settings.minChartHeight) {
                _spec_transform_optimize__WEBPACK_IMPORTED_MODULE_1__["SpecTransformOptimize"].hideAxisTicks(specRef.unit, specRef.settings, 'x');
            }
        }
        var newW = srcSize.width;
        var optimisticWidthByMaxText = calcSize('x', specRef.unit, byOptimisticMaxText);
        if (optimisticWidthByMaxText <= srcSize.width) {
            tryOptimizeSpec(specRef.unit, specRef.settings);
        }
        else {
            var pessimisticWidthByMaxText = calcSize('x', specRef.unit, byPessimisticMaxText);
            if (pessimisticWidthByMaxText > srcSize.width) {
                var widthByDensity = Math.max(srcSize.width, calcSize('x', specRef.unit, byDensity));
                newW = Math.min(pessimisticWidthByMaxText, widthByDensity);
            }
        }
        var newH = Math.max(srcSize.height, calcSize('y', specRef.unit, byDensity));
        return { newW: newW, newH: newH };
    },
    'fit-width': function (srcSize, calcSize, specRef, tryOptimizeSpec) {
        var g = specRef.unit.guide;
        var ticksLPad = (g.paddingNoTicks ? (g.padding.l - g.paddingNoTicks.l) : 0);
        if ((g.paddingNoTicks &&
            (srcSize.width - ticksLPad < specRef.settings.minChartWidth)) ||
            (getFacetCount(specRef).xFacetCount * specRef.settings.minFacetWidth + ticksLPad > srcSize.width)) {
            _spec_transform_optimize__WEBPACK_IMPORTED_MODULE_1__["SpecTransformOptimize"].hideAxisTicks(specRef.unit, specRef.settings, 'y');
        }
        var widthByMaxText = calcSize('x', specRef.unit, byOptimisticMaxText);
        if (widthByMaxText <= srcSize.width) {
            tryOptimizeSpec(specRef.unit, specRef.settings);
        }
        var newW = srcSize.width;
        var newH = calcSize('y', specRef.unit, byDensity);
        return { newW: newW, newH: newH };
    },
    'fit-height': function (srcSize, calcSize, specRef) {
        var g = specRef.unit.guide;
        var ticksBPad = (g.paddingNoTicks ? (g.padding.b - g.paddingNoTicks.b) : 0);
        if ((g.paddingNoTicks &&
            (srcSize.height - ticksBPad < specRef.settings.minChartHeight)) ||
            (getFacetCount(specRef).yFacetCount * specRef.settings.minFacetHeight + ticksBPad > srcSize.height)) {
            _spec_transform_optimize__WEBPACK_IMPORTED_MODULE_1__["SpecTransformOptimize"].hideAxisTicks(specRef.unit, specRef.settings, 'x');
        }
        var newW = calcSize('x', specRef.unit, byDensity);
        var newH = srcSize.height;
        return { newW: newW, newH: newH };
    }
};
var SpecTransformCalcSize = /** @class */ (function () {
    function SpecTransformCalcSize(spec) {
        this.spec = spec;
        this.isApplicable = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["isSpecRectCoordsOnly"](spec.unit);
    }
    SpecTransformCalcSize.prototype.transform = function (chart) {
        var specRef = this.spec;
        if (!this.isApplicable) {
            return specRef;
        }
        var fitModel = specRef.settings.fitModel;
        if (!fitModel) {
            return specRef;
        }
        var scales = specRef.scales;
        var groupFramesBy = function (frames, dim) {
            return frames
                .reduce(function (memo, f) {
                var fKey = f.key || {};
                var fVal = fKey[dim];
                memo[fVal] = memo[fVal] || [];
                memo[fVal].push(f);
                return memo;
            }, {});
        };
        var calcScaleSize = function (scaleInfo, maxTickText) {
            var r = 0;
            if (scaleInfo.discrete) {
                r = maxTickText * scaleInfo.domain().length;
            }
            else {
                r = maxTickText * 4;
            }
            return r;
        };
        var calcSizeRecursively = function (prop, root, takeStepSizeStrategy, frame) {
            if (frame === void 0) { frame = null; }
            var xCfg = (prop === 'x') ? root.x : root.y;
            var yCfg = (prop === 'x') ? root.y : root.x;
            var guide = root.guide;
            var xSize = (prop === 'x') ? takeStepSizeStrategy(guide.x) : takeStepSizeStrategy(guide.y);
            var firstUnit = root.units[0];
            var resScaleSize = (prop === 'x') ?
                (guide.padding.l + guide.padding.r) :
                (guide.padding.b + guide.padding.t);
            if (firstUnit.type === 'ELEMENT.INTERVAL' &&
                (prop === 'y') === Boolean(firstUnit.flip) &&
                firstUnit.label &&
                !chart.getScaleInfo(firstUnit.label, frame).isEmpty()) {
                var labelFontSize = (guide.label && guide.label.fontSize ? guide.label.fontSize : 10);
                var labelHeight_1 = (labelFontSize * 2);
                var xScale_1 = chart.getScaleInfo(xCfg, frame);
                var distributeByColor = (xScale_1.discrete && (firstUnit.guide.enableColorToBarPosition == null ?
                    !firstUnit.stack :
                    firstUnit.guide.enableColorToBarPosition));
                var xColorScale_1;
                if (distributeByColor) {
                    var colorCfg = firstUnit.color;
                    if (colorCfg) {
                        var colorScale = chart.getScaleInfo(colorCfg, frame);
                        if (colorScale.discrete) {
                            var allColors = colorScale.domain();
                            xColorScale_1 = colorScale;
                        }
                    }
                }
                var getFrameHeight_1 = (function (f) {
                    var data = f.part();
                    var allX = data.map(function (d) { return d[xScale_1.dim]; });
                    var xCount = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["unique"](allX).length;
                    var kColor = 1;
                    if (xColorScale_1) {
                        var xColors_1 = data.reduce(function (map, d) {
                            var x = d[xScale_1.dim];
                            var color = d[xColorScale_1.dim];
                            map[x] = map[x] || {};
                            if (!map[x][color]) {
                                map[x][color] = true;
                            }
                            return map;
                        }, {});
                        var colorsCounts = Object.keys(xColors_1).map(function (x) { return Object.keys(xColors_1[x]).length; });
                        kColor = Math.max.apply(Math, colorsCounts);
                    }
                    return (xCount * kColor * labelHeight_1);
                });
                var rowsTotal = root.frames.reduce(function (sum, f) { return sum + getFrameHeight_1(f); }, 0);
                var scaleSize = calcScaleSize(xScale_1, xSize);
                return resScaleSize + Math.max(rowsTotal, scaleSize);
            }
            else if (firstUnit.type !== 'COORDS.RECT') {
                var xScale = chart.getScaleInfo(xCfg, frame);
                return resScaleSize + calcScaleSize(xScale, xSize);
            }
            else {
                var rows = groupFramesBy(root.frames, scales[yCfg].dim);
                var rowsSizes = Object
                    .keys(rows)
                    .map(function (kRow) {
                    return rows[kRow]
                        .map(function (f) { return calcSizeRecursively(prop, f.units[0], takeStepSizeStrategy, f); })
                        .reduce(function (sum, size) { return (sum + size); }, 0);
                });
                // pick up max row size
                var maxRowSize = Math.max.apply(Math, rowsSizes);
                return resScaleSize + maxRowSize;
            }
        };
        var srcSize = specRef.settings.size;
        var newW = srcSize.width;
        var newH = srcSize.height;
        var strategy = fitModelStrategies[fitModel];
        if (strategy) {
            var newSize = strategy(srcSize, calcSizeRecursively, specRef, _spec_transform_optimize__WEBPACK_IMPORTED_MODULE_1__["SpecTransformOptimize"].optimizeXAxisLabel);
            newW = newSize.newW;
            newH = newSize.newH;
        }
        var prettifySize = function (srcSize, newSize, rScroll) {
            var scrollSize = specRef.settings.getScrollbarSize(chart.getLayout().contentContainer);
            var recommendedWidth = ((newSize.width > srcSize.width && newSize.width <= srcSize.width * rScroll) ?
                srcSize.width :
                newSize.width);
            var recommendedHeight = ((newSize.height > srcSize.height && newSize.height <= srcSize.height * rScroll) ?
                srcSize.height :
                newSize.height);
            var deltaW = (srcSize.width - recommendedWidth);
            var deltaH = (srcSize.height - recommendedHeight);
            var scrollW = (deltaH >= 0) ? 0 : scrollSize.width;
            var scrollH = (deltaW >= 0) ? 0 : scrollSize.height;
            return {
                height: recommendedHeight - scrollH,
                width: recommendedWidth - scrollW
            };
        };
        specRef.settings.size = prettifySize(srcSize, { width: newW, height: newH }, specRef.settings.avoidScrollAtRatio);
        return specRef;
    };
    return SpecTransformCalcSize;
}());



/***/ }),

/***/ "./src/spec-transform-extract-axes.ts":
/*!********************************************!*\
  !*** ./src/spec-transform-extract-axes.ts ***!
  \********************************************/
/*! exports provided: SpecTransformExtractAxes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecTransformExtractAxes", function() { return SpecTransformExtractAxes; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.ts");

var SpecTransformExtractAxes = /** @class */ (function () {
    function SpecTransformExtractAxes(spec) {
        this.spec = spec;
        this.isApplicable = (spec.settings.layoutEngine === 'EXTRACT') && _utils_utils__WEBPACK_IMPORTED_MODULE_0__["isSpecRectCoordsOnly"](spec.unit);
    }
    SpecTransformExtractAxes.prototype.transform = function () {
        var refSpec = this.spec;
        if (!this.isApplicable) {
            return refSpec;
        }
        try {
            this.ruleExtractAxes(refSpec);
        }
        catch (ex) {
            if (ex.message === 'Not applicable') {
                console.log("[TauCharts]: can't extract axes for the given chart specification"); // tslint:disable-line
            }
            else {
                throw ex;
            }
        }
        return refSpec;
    };
    SpecTransformExtractAxes.prototype.ruleExtractAxes = function (spec) {
        var isCoordsRect = function (unitRef) {
            return (unitRef.type === 'COORDS.RECT' || unitRef.type === 'RECT');
        };
        var isElement = function (unitRef) {
            return (unitRef.type.indexOf('ELEMENT.') === 0);
        };
        var pad = function (x) { return (x ? 10 : 0); };
        var ttl = { l: 0, r: 10, t: 10, b: 0 };
        var ttlNoTicks = { l: 0, b: 0 };
        var seq = [];
        var seqNoTicks = [];
        var enterIterator = function (unitRef, level) {
            if ((level > 1) || !isCoordsRect(unitRef)) {
                throw new Error('Not applicable');
            }
            unitRef.guide = unitRef.guide || {};
            var guide = unitRef.guide;
            var p = guide.padding || { l: 0, r: 0, t: 0, b: 0 };
            var pNoTicks = guide.paddingNoTicks || { l: 0, b: 0 };
            ttl.l += p.l;
            ttl.r += p.r;
            ttl.t += p.t;
            ttl.b += p.b;
            ttlNoTicks.l += pNoTicks.l;
            ttlNoTicks.b += pNoTicks.b;
            seq.push(Object.assign({}, ttl));
            seqNoTicks.push(Object.assign({}, ttlNoTicks));
            var units = unitRef.units || [];
            var rects = units
                .map(function (x) {
                if (!(isCoordsRect(x) || isElement(x))) {
                    throw new Error('Not applicable');
                }
                return x;
            })
                .filter(isCoordsRect);
            return (rects.length === 1);
        };
        var exitIterator = function (unitRef) {
            var lvl = seq.pop();
            var lvlNoTicks = seqNoTicks.pop();
            var guide = unitRef.guide || {};
            guide.x = guide.x || {};
            guide.x.padding = guide.x.padding || 0;
            guide.x.paddingNoTicks = guide.x.paddingNoTicks || 0;
            guide.y = guide.y || {};
            guide.y.padding = guide.y.padding || 0;
            guide.y.paddingNoTicks = guide.y.paddingNoTicks || 0;
            guide.padding = {
                l: pad(unitRef.y),
                r: pad(1),
                t: pad(1),
                b: pad(unitRef.x)
            };
            guide.paddingNoTicks = {
                l: 0,
                b: 0
            };
            guide.autoLayout = 'extract-axes';
            guide.x.padding += (ttl.b - lvl.b);
            guide.y.padding += (ttl.l - lvl.l);
            guide.x.paddingNoTicks += (ttlNoTicks.b - lvlNoTicks.b);
            guide.y.paddingNoTicks += (ttlNoTicks.l - lvlNoTicks.l);
        };
        _utils_utils__WEBPACK_IMPORTED_MODULE_0__["traverseSpec"](spec.unit, enterIterator, exitIterator);
        spec.unit.guide.padding = ttl;
        spec.unit.guide.paddingNoTicks = ttlNoTicks;
    };
    return SpecTransformExtractAxes;
}());



/***/ }),

/***/ "./src/spec-transform-optimize.ts":
/*!****************************************!*\
  !*** ./src/spec-transform-optimize.ts ***!
  \****************************************/
/*! exports provided: SpecTransformOptimize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecTransformOptimize", function() { return SpecTransformOptimize; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.ts");

var SpecTransformOptimize = /** @class */ (function () {
    function SpecTransformOptimize() {
    }
    SpecTransformOptimize.optimizeXAxisLabel = function (root, settings) {
        var xAxisTickLabelLimit = settings.xAxisTickLabelLimit;
        var enterSpec = function (rootUnit) {
            if (!rootUnit.guide.x.hide &&
                !rootUnit.guide.x.hideTicks &&
                rootUnit.guide.x.rotate !== 0) {
                rootUnit.guide.x.rotate = 0;
                rootUnit.guide.x.textAnchor = 'middle';
                var tickTextWidth = Math.min(xAxisTickLabelLimit, rootUnit.guide.x.$maxTickTextW);
                var tickTextDelta = (0 - tickTextWidth + rootUnit.guide.x.$maxTickTextH);
                improvePadding(rootUnit, tickTextDelta);
            }
            (rootUnit.units || [])
                .filter(function (u) { return u.type === 'COORDS.RECT'; })
                .forEach(function (u) { return enterSpec(u); });
        };
        var improvePadding = (function (unit, tickTextDelta) {
            if ((root !== unit) && (unit.guide.autoLayout === 'extract-axes')) {
                root.guide.x.padding += tickTextDelta;
                root.guide.padding.b += tickTextDelta;
            }
            else {
                unit.guide.x.label.padding += (unit.guide.x.label.padding > 0) ? tickTextDelta : 0;
                unit.guide.padding.b += (unit.guide.padding.b > 0) ? tickTextDelta : 0;
            }
        });
        enterSpec(root);
    };
    SpecTransformOptimize.hideAxisTicks = function (root, settings, axis) {
        var enterSpec = function (rootUnit) {
            var pad = (axis === 'x' ? 'b' : 'l');
            var g = rootUnit.guide;
            if (!g[axis].hide && !g[axis].hideTicks) {
                var isFacetContainer = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["isFacetUnit"](rootUnit);
                if (!(isFacetContainer && axis === 'y')) {
                    g[axis].hideTicks = true;
                }
                var hasLabel = (g[axis].label.text && !g[axis].label.hide);
                g.padding[pad] = (g.paddingNoTicks ? g.paddingNoTicks[pad] : 0);
                g[axis].padding = (g[axis].paddingNoTicks || 0);
                g[axis].label.padding = (hasLabel ? g[axis].label.paddingNoTicks : 0);
            }
            (rootUnit.units || [])
                .filter(function (u) { return u.type === 'COORDS.RECT'; })
                .forEach(function (u) { return enterSpec(u); });
        };
        enterSpec(root);
    };
    SpecTransformOptimize.facetsLabelsAtTop = function (root, settings) {
        var enterSpec = function (unit) {
            var children = (unit.units || []);
            var isFacetContainer = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["isFacetUnit"](unit);
            if (isFacetContainer) {
                var g = unit.guide;
                g.y.facetAxis = true;
                g.y.rotate = 0;
                g.y.textAnchor = 'start';
                children.forEach(function (c) {
                    c.guide.padding.t = 20;
                });
            }
            children
                .filter(function (u) { return u.type === 'COORDS.RECT'; })
                .forEach(function (u) { return enterSpec(u); });
        };
        enterSpec(root);
    };
    return SpecTransformOptimize;
}());



/***/ }),

/***/ "./src/tau.charts.ts":
/*!***************************!*\
  !*** ./src/tau.charts.ts ***!
  \***************************/
/*! exports provided: GPL, Plot, Chart, api, version, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "api", function() { return api; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony import */ var _utils_utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils-dom */ "./src/utils/utils-dom.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _utils_utils_draw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/utils-draw */ "./src/utils/utils-draw.ts");
/* harmony import */ var _charts_tau_gpl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./charts/tau.gpl */ "./src/charts/tau.gpl.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GPL", function() { return _charts_tau_gpl__WEBPACK_IMPORTED_MODULE_3__["GPL"]; });

/* harmony import */ var _charts_tau_plot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./charts/tau.plot */ "./src/charts/tau.plot.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Plot", function() { return _charts_tau_plot__WEBPACK_IMPORTED_MODULE_4__["Plot"]; });

/* harmony import */ var _charts_tau_chart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./charts/tau.chart */ "./src/charts/tau.chart.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return _charts_tau_chart__WEBPACK_IMPORTED_MODULE_5__["Chart"]; });

/* harmony import */ var _unit_domain_period_generator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./unit-domain-period-generator */ "./src/unit-domain-period-generator.ts");
/* harmony import */ var _formatter_registry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./formatter-registry */ "./src/formatter-registry.ts");
/* harmony import */ var _units_registry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./units-registry */ "./src/units-registry.ts");
/* harmony import */ var _scales_registry__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scales-registry */ "./src/scales-registry.ts");
/* harmony import */ var _grammar_registry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./grammar-registry */ "./src/grammar-registry.ts");
/* harmony import */ var _elements_coords_cartesian__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./elements/coords.cartesian */ "./src/elements/coords.cartesian.js");
/* harmony import */ var _elements_coords_parallel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./elements/coords.parallel */ "./src/elements/coords.parallel.js");
/* harmony import */ var _elements_coords_geomap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./elements/coords.geomap */ "./src/elements/coords.geomap.js");
/* harmony import */ var _elements_element_generic_cartesian__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./elements/element.generic.cartesian */ "./src/elements/element.generic.cartesian.ts");
/* harmony import */ var _elements_element_point__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./elements/element.point */ "./src/elements/element.point.ts");
/* harmony import */ var _elements_element_area__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./elements/element.area */ "./src/elements/element.area.ts");
/* harmony import */ var _elements_element_path__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./elements/element.path */ "./src/elements/element.path.js");
/* harmony import */ var _elements_element_line__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./elements/element.line */ "./src/elements/element.line.js");
/* harmony import */ var _elements_element_interval__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./elements/element.interval */ "./src/elements/element.interval.js");
/* harmony import */ var _elements_element_parallel_line__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./elements/element.parallel.line */ "./src/elements/element.parallel.line.js");
/* harmony import */ var _scales_identity__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./scales/identity */ "./src/scales/identity.ts");
/* harmony import */ var _scales_color__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./scales/color */ "./src/scales/color.ts");
/* harmony import */ var _scales_size__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./scales/size */ "./src/scales/size.ts");
/* harmony import */ var _scales_ordinal__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./scales/ordinal */ "./src/scales/ordinal.ts");
/* harmony import */ var _scales_period__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./scales/period */ "./src/scales/period.ts");
/* harmony import */ var _scales_time__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./scales/time */ "./src/scales/time.ts");
/* harmony import */ var _scales_linear__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./scales/linear */ "./src/scales/linear.ts");
/* harmony import */ var _scales_logarithmic__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./scales/logarithmic */ "./src/scales/logarithmic.ts");
/* harmony import */ var _scales_value__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./scales/value */ "./src/scales/value.ts");
/* harmony import */ var _scales_fill__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./scales/fill */ "./src/scales/fill.ts");
/* harmony import */ var _chart_alias_registry__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./chart-alias-registry */ "./src/chart-alias-registry.ts");
/* harmony import */ var _api_chart_map__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./api/chart-map */ "./src/api/chart-map.ts");
/* harmony import */ var _api_chart_interval__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./api/chart-interval */ "./src/api/chart-interval.ts");
/* harmony import */ var _api_chart_scatterplot__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./api/chart-scatterplot */ "./src/api/chart-scatterplot.ts");
/* harmony import */ var _api_chart_line__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./api/chart-line */ "./src/api/chart-line.ts");
/* harmony import */ var _api_chart_area__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./api/chart-area */ "./src/api/chart-area.ts");
/* harmony import */ var _api_chart_parallel__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./api/chart-parallel */ "./src/api/chart-parallel.ts");
/* harmony import */ var _utils_d3_decorators__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./utils/d3-decorators */ "./src/utils/d3-decorators.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./error */ "./src/error.ts");
/* harmony import */ var _plugins_sdk__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./plugins-sdk */ "./src/plugins-sdk.ts");
/* harmony import */ var _utils_polyfills__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./utils/polyfills */ "./src/utils/polyfills.js");
/* harmony import */ var _utils_polyfills__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(_utils_polyfills__WEBPACK_IMPORTED_MODULE_41__);










































var colorBrewers = {};
var plugins = {};
var __api__ = {
    UnitDomainPeriodGenerator: _unit_domain_period_generator__WEBPACK_IMPORTED_MODULE_6__["UnitDomainPeriodGenerator"]
};
var api = {
    errorCodes: _error__WEBPACK_IMPORTED_MODULE_39__["errorCodes"],
    unitsRegistry: _units_registry__WEBPACK_IMPORTED_MODULE_8__["unitsRegistry"],
    scalesRegistry: _scales_registry__WEBPACK_IMPORTED_MODULE_9__["scalesRegistry"],
    grammarRegistry: _grammar_registry__WEBPACK_IMPORTED_MODULE_10__["GrammarRegistry"],
    tickFormat: _formatter_registry__WEBPACK_IMPORTED_MODULE_7__["FormatterRegistry"],
    isChartElement: _utils_utils__WEBPACK_IMPORTED_MODULE_1__["isChartElement"],
    utils: _utils_utils__WEBPACK_IMPORTED_MODULE_1__,
    svgUtils: _utils_utils_draw__WEBPACK_IMPORTED_MODULE_2__,
    domUtils: _utils_utils_dom__WEBPACK_IMPORTED_MODULE_0__,
    tickPeriod: _unit_domain_period_generator__WEBPACK_IMPORTED_MODULE_6__["UnitDomainPeriodGenerator"],
    colorBrewers: {
        add: function (name, brewer) {
            if (!colorBrewers.hasOwnProperty(name)) {
                colorBrewers[name] = brewer;
            }
        },
        get: function (name) {
            return colorBrewers[name];
        }
    },
    d3_animationInterceptor: _utils_d3_decorators__WEBPACK_IMPORTED_MODULE_38__["d3_animationInterceptor"],
    pluginsSDK: _plugins_sdk__WEBPACK_IMPORTED_MODULE_40__["PluginsSDK"],
    plugins: {
        add: function (name, plugin) {
            if (!plugins.hasOwnProperty(name)) {
                plugins[name] = plugin;
            }
            else {
                throw new Error('Plugin is already registered.');
            }
        },
        get: function (name) {
            return plugins[name] || (function (x) {
                throw new Error("\"" + name + "\" plugin is not defined");
            });
        }
    },
    chartTypesRegistry: _chart_alias_registry__WEBPACK_IMPORTED_MODULE_31__["chartTypesRegistry"],
    globalSettings: {
        animationSpeed: 750,
        renderingTimeout: 10000,
        asyncRendering: true,
        syncRenderingInterval: 50,
        syncPointerEvents: false,
        handleRenderingErrors: false,
        experimentalShouldAnimate: function (spec) {
            var createSvg = function (tag, attrs) {
                var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
                Object.keys(attrs).forEach(function (k) { return el.setAttribute(k, String(attrs[k])); });
                return el;
            };
            var div = document.createElement('div');
            div.style.position = 'absolute';
            div.style.visibility = 'hidden';
            document.body.appendChild(div);
            var svg = createSvg('svg', {
                width: 100,
                height: 100
            });
            div.appendChild(svg);
            var start = performance.now();
            var i, j, c;
            for (i = 0; i < 10; i++) {
                for (j = 0; j < 10; j++) {
                    c = createSvg('circle', {
                        fill: 'black',
                        r: 5,
                        cx: i * 10,
                        cy: j * 10
                    });
                    svg.appendChild(c);
                }
            }
            var duration = (performance.now() - start);
            document.body.removeChild(div);
            return (spec.sources['/'].data.length * duration < 500);
        },
        defaultNiceColor: true,
        // tslint:disable
        defaultColorBrewer: ["#fde725", "#fbe723", "#f8e621", "#f6e620", "#f4e61e", "#f1e51d", "#efe51c", "#ece51b", "#eae51a", "#e7e419", "#e5e419", "#e2e418", "#dfe318", "#dde318", "#dae319", "#d8e219", "#d5e21a", "#d2e21b", "#d0e11c", "#cde11d", "#cae11f", "#c8e020", "#c5e021", "#c2df23", "#c0df25", "#bddf26", "#bade28", "#b8de29", "#b5de2b", "#b2dd2d", "#b0dd2f", "#addc30", "#aadc32", "#a8db34", "#a5db36", "#a2da37", "#a0da39", "#9dd93b", "#9bd93c", "#98d83e", "#95d840", "#93d741", "#90d743", "#8ed645", "#8bd646", "#89d548", "#86d549", "#84d44b", "#81d34d", "#7fd34e", "#7cd250", "#7ad151", "#77d153", "#75d054", "#73d056", "#70cf57", "#6ece58", "#6ccd5a", "#69cd5b", "#67cc5c", "#65cb5e", "#63cb5f", "#60ca60", "#5ec962", "#5cc863", "#5ac864", "#58c765", "#56c667", "#54c568", "#52c569", "#50c46a", "#4ec36b", "#4cc26c", "#4ac16d", "#48c16e", "#46c06f", "#44bf70", "#42be71", "#40bd72", "#3fbc73", "#3dbc74", "#3bbb75", "#3aba76", "#38b977", "#37b878", "#35b779", "#34b679", "#32b67a", "#31b57b", "#2fb47c", "#2eb37c", "#2db27d", "#2cb17e", "#2ab07f", "#29af7f", "#28ae80", "#27ad81", "#26ad81", "#25ac82", "#25ab82", "#24aa83", "#23a983", "#22a884", "#22a785", "#21a685", "#21a585", "#20a486", "#20a386", "#1fa287", "#1fa187", "#1fa188", "#1fa088", "#1f9f88", "#1f9e89", "#1e9d89", "#1e9c89", "#1e9b8a", "#1f9a8a", "#1f998a", "#1f988b", "#1f978b", "#1f968b", "#1f958b", "#1f948c", "#20938c", "#20928c", "#20928c", "#21918c", "#21908d", "#218f8d", "#218e8d", "#228d8d", "#228c8d", "#228b8d", "#238a8d", "#23898e", "#23888e", "#24878e", "#24868e", "#25858e", "#25848e", "#25838e", "#26828e", "#26828e", "#26818e", "#27808e", "#277f8e", "#277e8e", "#287d8e", "#287c8e", "#297b8e", "#297a8e", "#29798e", "#2a788e", "#2a778e", "#2a768e", "#2b758e", "#2b748e", "#2c738e", "#2c728e", "#2c718e", "#2d718e", "#2d708e", "#2e6f8e", "#2e6e8e", "#2e6d8e", "#2f6c8e", "#2f6b8e", "#306a8e", "#30698e", "#31688e", "#31678e", "#31668e", "#32658e", "#32648e", "#33638d", "#33628d", "#34618d", "#34608d", "#355f8d", "#355e8d", "#365d8d", "#365c8d", "#375b8d", "#375a8c", "#38598c", "#38588c", "#39568c", "#39558c", "#3a548c", "#3a538b", "#3b528b", "#3b518b", "#3c508b", "#3c4f8a", "#3d4e8a", "#3d4d8a", "#3e4c8a", "#3e4a89", "#3e4989", "#3f4889", "#3f4788", "#404688", "#404588", "#414487", "#414287", "#424186", "#424086", "#423f85", "#433e85", "#433d84", "#443b84", "#443a83", "#443983", "#453882", "#453781", "#453581", "#463480", "#46337f", "#46327e", "#46307e", "#472f7d", "#472e7c", "#472d7b", "#472c7a", "#472a7a", "#482979", "#482878", "#482677", "#482576", "#482475", "#482374", "#482173", "#482071", "#481f70", "#481d6f", "#481c6e", "#481b6d", "#481a6c", "#48186a", "#481769", "#481668", "#481467", "#471365", "#471164", "#471063", "#470e61", "#470d60", "#460b5e", "#460a5d", "#46085c", "#46075a", "#450559", "#450457", "#440256", "#440154"],
        // tslint:enable
        defaultClassBrewer: _utils_utils__WEBPACK_IMPORTED_MODULE_1__["range"](20).map(function (i) { return 'color20-' + (1 + i); }),
        log: function (msg, type) {
            type = type || 'INFO';
            if (!Array.isArray(msg)) {
                msg = [msg];
            }
            console[type.toLowerCase()].apply(console, msg); // eslint-disable-line
        },
        facetLabelDelimiter: ' \u2192 ',
        excludeNull: true,
        minChartWidth: 300,
        minChartHeight: 200,
        minFacetWidth: 150,
        minFacetHeight: 100,
        specEngine: [
            {
                name: 'COMPACT',
                width: 600,
                height: 400
            },
            {
                name: 'AUTO',
                width: Number.MAX_VALUE,
                height: Number.MAX_VALUE
            }
        ],
        fitModel: 'normal',
        layoutEngine: 'EXTRACT',
        autoRatio: true,
        defaultSourceMap: [
            'https://raw.githubusercontent.com',
            'TargetProcess/tauCharts/master/src/addons',
            'world-countries.json'
        ].join('/'),
        getAxisTickLabelSize: _utils_utils__WEBPACK_IMPORTED_MODULE_1__["memoize"](_utils_utils_dom__WEBPACK_IMPORTED_MODULE_0__["getAxisTickLabelSize"], function (text) { return String(String(text).length); }),
        getScrollbarSize: _utils_utils_dom__WEBPACK_IMPORTED_MODULE_0__["getScrollbarSize"],
        avoidScrollAtRatio: 1.5,
        xAxisTickLabelLimit: 150,
        yAxisTickLabelLimit: 150,
        xTickWordWrapLinesLimit: 2,
        yTickWordWrapLinesLimit: 2,
        xTickWidth: 6 + 3,
        yTickWidth: 6 + 3,
        distToXAxisLabel: 10,
        distToYAxisLabel: 10,
        xAxisPadding: 20,
        yAxisPadding: 20,
        xFontLabelDescenderLineHeight: 4,
        xFontLabelHeight: 10,
        yFontLabelHeight: 10,
        xDensityPadding: 2,
        yDensityPadding: 2,
        'xDensityPadding:measure': 8,
        'yDensityPadding:measure': 8,
        utcTime: false,
        defaultFormats: {
            measure: 'x-num-auto',
            'measure:time': 'x-time-auto'
        }
    }
};
_charts_tau_plot__WEBPACK_IMPORTED_MODULE_4__["Plot"].__api__ = api;
_charts_tau_plot__WEBPACK_IMPORTED_MODULE_4__["Plot"].globalSettings = api.globalSettings;
api.unitsRegistry
    .reg('COORDS.RECT', _elements_coords_cartesian__WEBPACK_IMPORTED_MODULE_11__["Cartesian"])
    .reg('COORDS.MAP', _elements_coords_geomap__WEBPACK_IMPORTED_MODULE_13__["GeoMap"])
    .reg('COORDS.PARALLEL', _elements_coords_parallel__WEBPACK_IMPORTED_MODULE_12__["Parallel"])
    .reg('ELEMENT.GENERIC.CARTESIAN', _elements_element_generic_cartesian__WEBPACK_IMPORTED_MODULE_14__["GenericCartesian"])
    .reg('ELEMENT.POINT', _elements_element_point__WEBPACK_IMPORTED_MODULE_15__["Point"], 'ELEMENT.GENERIC.CARTESIAN')
    .reg('ELEMENT.LINE', _elements_element_line__WEBPACK_IMPORTED_MODULE_18__["Line"], 'ELEMENT.GENERIC.CARTESIAN')
    .reg('ELEMENT.PATH', _elements_element_path__WEBPACK_IMPORTED_MODULE_17__["Path"], 'ELEMENT.GENERIC.CARTESIAN')
    .reg('ELEMENT.AREA', _elements_element_area__WEBPACK_IMPORTED_MODULE_16__["Area"], 'ELEMENT.GENERIC.CARTESIAN')
    .reg('ELEMENT.INTERVAL', _elements_element_interval__WEBPACK_IMPORTED_MODULE_19__["Interval"], 'ELEMENT.GENERIC.CARTESIAN')
    .reg('ELEMENT.INTERVAL.STACKED', _elements_element_interval__WEBPACK_IMPORTED_MODULE_19__["Interval"], 'ELEMENT.GENERIC.CARTESIAN')
    .reg('ELEMENT.INTERVAL.STACKED', _elements_element_interval__WEBPACK_IMPORTED_MODULE_19__["Interval"], 'ELEMENT.GENERIC.CARTESIAN')
    .reg('PARALLEL/ELEMENT.LINE', _elements_element_parallel_line__WEBPACK_IMPORTED_MODULE_20__["ParallelLine"]);
api.scalesRegistry
    .reg('identity', _scales_identity__WEBPACK_IMPORTED_MODULE_21__["IdentityScale"], (function (config, settings) { return _utils_utils__WEBPACK_IMPORTED_MODULE_1__["defaults"](config, {
    references: settings.references,
    refCounter: settings.refCounter
}); }))
    .reg('color', _scales_color__WEBPACK_IMPORTED_MODULE_22__["ColorScale"], (function (config, settings) { return _utils_utils__WEBPACK_IMPORTED_MODULE_1__["defaults"](config, {
    nice: settings.defaultNiceColor,
    brewer: (config.dimType === 'measure' ?
        (settings.defaultColorBrewer) :
        (settings.defaultClassBrewer))
}); }))
    .reg('fill', _scales_fill__WEBPACK_IMPORTED_MODULE_30__["FillScale"])
    .reg('size', _scales_size__WEBPACK_IMPORTED_MODULE_23__["SizeScale"])
    .reg('ordinal', _scales_ordinal__WEBPACK_IMPORTED_MODULE_24__["OrdinalScale"])
    .reg('period', _scales_period__WEBPACK_IMPORTED_MODULE_25__["PeriodScale"], (function (config, settings) { return _utils_utils__WEBPACK_IMPORTED_MODULE_1__["defaults"](config, {
    utcTime: settings.utcTime
}); }))
    .reg('time', _scales_time__WEBPACK_IMPORTED_MODULE_26__["TimeScale"], (function (config, settings) { return _utils_utils__WEBPACK_IMPORTED_MODULE_1__["defaults"](config, {
    utcTime: settings.utcTime
}); }))
    .reg('linear', _scales_linear__WEBPACK_IMPORTED_MODULE_27__["LinearScale"])
    .reg('logarithmic', _scales_logarithmic__WEBPACK_IMPORTED_MODULE_28__["LogarithmicScale"])
    .reg('value', _scales_value__WEBPACK_IMPORTED_MODULE_29__["ValueScale"]);
var commonRules = [
    (function (config) { return ((!config.data) ? ['[data] must be specified'] : []); })
];
api.chartTypesRegistry
    .add('scatterplot', _api_chart_scatterplot__WEBPACK_IMPORTED_MODULE_34__["ChartScatterplot"], commonRules)
    .add('line', _api_chart_line__WEBPACK_IMPORTED_MODULE_35__["ChartLine"], commonRules)
    .add('area', _api_chart_area__WEBPACK_IMPORTED_MODULE_36__["ChartArea"], commonRules)
    .add('stacked-area', function (cfg) { return Object(_api_chart_area__WEBPACK_IMPORTED_MODULE_36__["ChartArea"])(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["defaults"](cfg, { stack: true })); }, commonRules)
    .add('bar', function (cfg) { return Object(_api_chart_interval__WEBPACK_IMPORTED_MODULE_33__["ChartInterval"])(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["defaults"](cfg, { flip: false })); }, commonRules)
    .add('horizontalBar', function (cfg) { return Object(_api_chart_interval__WEBPACK_IMPORTED_MODULE_33__["ChartInterval"])(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["defaults"]({ flip: true }, cfg)); }, commonRules)
    .add('horizontal-bar', function (cfg) { return Object(_api_chart_interval__WEBPACK_IMPORTED_MODULE_33__["ChartInterval"])(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["defaults"]({ flip: true }, cfg)); }, commonRules)
    .add('stacked-bar', function (cfg) { return Object(_api_chart_interval__WEBPACK_IMPORTED_MODULE_33__["ChartInterval"])(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["defaults"]({ flip: false, stack: true }, cfg)); }, commonRules)
    .add('horizontal-stacked-bar', function (cfg) { return Object(_api_chart_interval__WEBPACK_IMPORTED_MODULE_33__["ChartInterval"])(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["defaults"]({ flip: true, stack: true }, cfg)); }, commonRules)
    .add('map', _api_chart_map__WEBPACK_IMPORTED_MODULE_32__["ChartMap"], commonRules.concat([
    function (config) {
        var shouldSpecifyFillWithCode = (config.fill && config.code);
        if (config.fill && !shouldSpecifyFillWithCode) {
            return '[code] must be specified when using [fill]';
        }
    },
    function (config) {
        var shouldSpecifyBothLatLong = (config.latitude && config.longitude);
        if ((config.latitude || config.longitude) && !shouldSpecifyBothLatLong) {
            return '[latitude] and [longitude] both must be specified';
        }
    }
]))
    .add('parallel', _api_chart_parallel__WEBPACK_IMPORTED_MODULE_37__["ChartParallel"], commonRules.concat([
    function (config) {
        var shouldSpecifyColumns = (config.columns && config.columns.length > 1);
        if (!shouldSpecifyColumns) {
            return '[columns] property must contain at least 2 dimensions';
        }
    }
]));
var version = "2.1.0";

/* harmony default export */ __webpack_exports__["default"] = ({
    GPL: _charts_tau_gpl__WEBPACK_IMPORTED_MODULE_3__["GPL"],
    Plot: _charts_tau_plot__WEBPACK_IMPORTED_MODULE_4__["Plot"],
    Chart: _charts_tau_chart__WEBPACK_IMPORTED_MODULE_5__["Chart"],
    api: api,
    version: "2.1.0"
});


/***/ }),

/***/ "./src/unit-domain-period-generator.ts":
/*!*********************************************!*\
  !*** ./src/unit-domain-period-generator.ts ***!
  \*********************************************/
/*! exports provided: UnitDomainPeriodGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitDomainPeriodGenerator", function() { return UnitDomainPeriodGenerator; });
var PERIODS_MAP = {
    day: {
        cast: function (d) {
            var date = new Date(d);
            return new Date(date.setHours(0, 0, 0, 0));
        },
        next: function (d) {
            var prev = new Date(d);
            var next = new Date(prev.setDate(prev.getDate() + 1));
            return this.cast(next);
        }
    },
    week: {
        cast: function (d) {
            var date = new Date(d);
            date = new Date(date.setHours(0, 0, 0, 0));
            return new Date(date.setDate(date.getDate() - date.getDay()));
        },
        next: function (d) {
            var prev = new Date(d);
            var next = (new Date(prev.setDate(prev.getDate() + 7)));
            return this.cast(next);
        }
    },
    month: {
        cast: function (d) {
            var date = new Date(d);
            date = new Date(date.setHours(0, 0, 0, 0));
            date = new Date(date.setDate(1));
            return date;
        },
        next: function (d) {
            var prev = new Date(d);
            var next = new Date(prev.setMonth(prev.getMonth() + 1));
            return this.cast(next);
        }
    },
    quarter: {
        cast: function (d) {
            var date = new Date(d);
            date = new Date(date.setHours(0, 0, 0, 0));
            date = new Date(date.setDate(1));
            var currentMonth = date.getMonth();
            var firstQuarterMonth = currentMonth - (currentMonth % 3);
            return new Date(date.setMonth(firstQuarterMonth));
        },
        next: function (d) {
            var prev = new Date(d);
            var next = new Date(prev.setMonth(prev.getMonth() + 3));
            return this.cast(next);
        }
    },
    year: {
        cast: function (d) {
            var date = new Date(d);
            date = new Date(date.setHours(0, 0, 0, 0));
            date = new Date(date.setDate(1));
            date = new Date(date.setMonth(0));
            return date;
        },
        next: function (d) {
            var prev = new Date(d);
            var next = new Date(prev.setFullYear(prev.getFullYear() + 1));
            return this.cast(next);
        }
    }
};
var PERIODS_MAP_UTC = {
    day: {
        cast: function (d) {
            var date = new Date(d);
            return new Date(date.setUTCHours(0, 0, 0, 0));
        },
        next: function (d) {
            var prev = new Date(d);
            var next = new Date(prev.setUTCDate(prev.getUTCDate() + 1));
            return this.cast(next);
        }
    },
    week: {
        cast: function (d) {
            var date = new Date(d);
            date = new Date(date.setUTCHours(0, 0, 0, 0));
            return new Date(date.setUTCDate(date.getUTCDate() - date.getUTCDay()));
        },
        next: function (d) {
            var prev = new Date(d);
            var next = (new Date(prev.setUTCDate(prev.getUTCDate() + 7)));
            return this.cast(next);
        }
    },
    month: {
        cast: function (d) {
            var date = new Date(d);
            date = new Date(date.setUTCHours(0, 0, 0, 0));
            date = new Date(date.setUTCDate(1));
            return date;
        },
        next: function (d) {
            var prev = new Date(d);
            var next = new Date(prev.setUTCMonth(prev.getUTCMonth() + 1));
            return this.cast(next);
        }
    },
    quarter: {
        cast: function (d) {
            var date = new Date(d);
            date = new Date(date.setUTCHours(0, 0, 0, 0));
            date = new Date(date.setUTCDate(1));
            var currentMonth = date.getUTCMonth();
            var firstQuarterMonth = currentMonth - (currentMonth % 3);
            return new Date(date.setUTCMonth(firstQuarterMonth));
        },
        next: function (d) {
            var prev = new Date(d);
            var next = new Date(prev.setUTCMonth(prev.getUTCMonth() + 3));
            return this.cast(next);
        }
    },
    year: {
        cast: function (d) {
            var date = new Date(d);
            date = new Date(date.setUTCHours(0, 0, 0, 0));
            date = new Date(date.setUTCDate(1));
            date = new Date(date.setUTCMonth(0));
            return date;
        },
        next: function (d) {
            var prev = new Date(d);
            var next = new Date(prev.setUTCFullYear(prev.getUTCFullYear() + 1));
            return this.cast(next);
        }
    }
};
var UnitDomainPeriodGenerator = {
    add: function (periodAlias, obj, _a) {
        var utc = (_a === void 0 ? { utc: false } : _a).utc;
        (utc ? PERIODS_MAP_UTC : PERIODS_MAP)[periodAlias.toLowerCase()] = obj;
        return this;
    },
    get: function (periodAlias, _a) {
        var utc = (_a === void 0 ? { utc: false } : _a).utc;
        var alias = periodAlias || '';
        return (utc ? PERIODS_MAP_UTC : PERIODS_MAP)[alias.toLowerCase()] || null;
    },
    generate: function (lTick, rTick, periodAlias, _a) {
        var utc = (_a === void 0 ? { utc: false } : _a).utc;
        var r = [];
        var period = UnitDomainPeriodGenerator.get(periodAlias, { utc: utc });
        if (period) {
            var last = period.cast(new Date(rTick));
            var curr = period.cast(new Date(lTick));
            r.push(curr);
            while ((curr = period.next(new Date(curr))) <= last) {
                r.push(curr);
            }
        }
        return r;
    }
};



/***/ }),

/***/ "./src/units-registry.ts":
/*!*******************************!*\
  !*** ./src/units-registry.ts ***!
  \*******************************/
/*! exports provided: unitsRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unitsRegistry", function() { return unitsRegistry; });
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error */ "./src/error.ts");

var UnitsMap = {};
var SeedsMap = {};
var unitsRegistry = {
    reg: function (unitType, xUnit, xSeed) {
        if (xSeed) {
            SeedsMap[unitType] = xSeed;
            UnitsMap[unitType] = function (config, Base) {
                this.___tauchartsseed___ = new Base(this.init(config));
            };
            UnitsMap[unitType].prototype = Object.assign({
                init: function (config) {
                    return config;
                },
                defineGrammarModel: function (params) {
                    return this.node().defineGrammarModel(params);
                },
                getGrammarRules: function (grammarModel) {
                    return this.node().getGrammarRules(grammarModel);
                },
                getAdjustScalesRules: function (grammarModel) {
                    return this.node().getAdjustScalesRules(grammarModel);
                },
                createScreenModel: function (grammarModel) {
                    return this.node().createScreenModel(grammarModel);
                },
                addInteraction: function () {
                    this.node().addInteraction();
                },
                node: function () {
                    return this.___tauchartsseed___;
                },
                draw: function () {
                    this.node().draw();
                }
            }, xUnit);
        }
        else {
            UnitsMap[unitType] = xUnit;
        }
        return this;
    },
    get: function (unitType) {
        if (!UnitsMap.hasOwnProperty(unitType)) {
            throw new _error__WEBPACK_IMPORTED_MODULE_0__["TauChartError"]('Unknown unit type: ' + unitType, _error__WEBPACK_IMPORTED_MODULE_0__["errorCodes"].UNKNOWN_UNIT_TYPE);
        }
        return UnitsMap[unitType];
    },
    create: function (unitType, unitConfig) {
        var Unit = this.get(unitType);
        var node;
        if (SeedsMap[unitType]) {
            var Base = this.get(SeedsMap[unitType]);
            node = new Unit(unitConfig, Base);
        }
        else {
            node = new Unit(unitConfig);
        }
        return node;
    }
};



/***/ }),

/***/ "./src/utils/css-class-map.ts":
/*!************************************!*\
  !*** ./src/utils/css-class-map.ts ***!
  \************************************/
/*! exports provided: getLineClassesByWidth, getLineClassesByCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLineClassesByWidth", function() { return getLineClassesByWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLineClassesByCount", function() { return getLineClassesByCount; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/const.js");

var arrayNumber = [1, 2, 3, 4, 5];
var countLineClasses = arrayNumber.map(function (i) { return _const__WEBPACK_IMPORTED_MODULE_0__["CSS_PREFIX"] + 'line-opacity-' + i; });
var widthLineClasses = arrayNumber.map(function (i) { return _const__WEBPACK_IMPORTED_MODULE_0__["CSS_PREFIX"] + 'line-width-' + i; });
function getLineClassesByCount(count) {
    return countLineClasses[count - 1] || countLineClasses[4];
}
function getLineClassesByWidth(width) {
    var index = 0;
    if (width >= 160 && width < 320) {
        index = 1;
    }
    else if (width >= 320 && width < 480) {
        index = 2;
    }
    else if (width >= 480 && width < 640) {
        index = 3;
    }
    else if (width >= 640) {
        index = 4;
    }
    return widthLineClasses[index];
}



/***/ }),

/***/ "./src/utils/d3-decorators.js":
/*!************************************!*\
  !*** ./src/utils/d3-decorators.js ***!
  \************************************/
/*! exports provided: avoidTickTextCollision, d3_animationInterceptor, d3_createPathTween, d3_selectAllImmediate, d3_setAttrs, d3_setClasses, d3_transition, wrapText, cutText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "avoidTickTextCollision", function() { return avoidTickTextCollision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d3_animationInterceptor", function() { return d3_animationInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d3_createPathTween", function() { return d3_createPathTween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d3_selectAllImmediate", function() { return d3_selectAllImmediate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d3_setAttrs", function() { return d3_setAttrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d3_setClasses", function() { return d3_setClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d3_transition", function() { return d3_transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapText", function() { return wrapText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cutText", function() { return cutText; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/utils.ts");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils-dom */ "./src/utils/utils-dom.ts");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-selection */ "d3-selection");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3_selection__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-transition */ "d3-transition");
/* harmony import */ var d3_transition__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(d3_transition__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _path_interpolators_path_points__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./path/interpolators/path-points */ "./src/utils/path/interpolators/path-points.ts");
/* harmony import */ var _path_interpolators_interpolators_registry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./path/interpolators/interpolators-registry */ "./src/utils/path/interpolators/interpolators-registry.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};




var d3 = __assign({}, d3_selection__WEBPACK_IMPORTED_MODULE_2__, d3_transition__WEBPACK_IMPORTED_MODULE_3__);


var d3getComputedTextLength = function () { return _utils__WEBPACK_IMPORTED_MODULE_0__["memoize"](function (d3Text) { return d3Text.node().getComputedTextLength(); }, function (d3Text) { return d3Text.node().textContent.length; }); };
var cutText = function (textString, getScaleStepSize, getComputedTextLength) {
    getComputedTextLength = getComputedTextLength || d3getComputedTextLength();
    textString.each(function () {
        var tickNode = d3.select(this.parentNode);
        var tickData = tickNode.data()[0];
        var stepSize = getScaleStepSize(tickData);
        var textD3 = d3.select(this);
        var tokens = textD3.text().split(/\s+/);
        var stop = false;
        var parts = tokens.reduce(function (memo, t, i) {
            if (stop) {
                return memo;
            }
            var text = (i > 0) ? [memo, t].join(' ') : t;
            var len = getComputedTextLength(textD3.text(text));
            if (len < stepSize) {
                memo = text;
            }
            else {
                var available = Math.floor(stepSize / len * text.length);
                memo = text.substr(0, available - 4) + '...';
                stop = true;
            }
            return memo;
        }, '');
        textD3.text(parts);
    });
};
var wrapText = function (textNode, getScaleStepSize, linesLimit, tickLabelFontHeight, isY, getComputedTextLength) {
    getComputedTextLength = getComputedTextLength || d3getComputedTextLength();
    var addLine = function (targetD3, text, lineHeight, x, y, dy, lineNumber) {
        var dyNew = (lineNumber * lineHeight) + dy;
        return targetD3
            .append('tspan')
            .attr('x', x)
            .attr('y', y)
            .attr('dy', dyNew + 'em')
            .text(text);
    };
    textNode.each(function () {
        var tickNode = d3.select(this.parentNode);
        var tickData = tickNode.data()[0];
        var stepSize = getScaleStepSize(tickData);
        var textD3 = d3.select(this), tokens = textD3.text().split(/\s+/), lineHeight = 1.1, // ems
        x = textD3.attr('x'), y = textD3.attr('y'), dy = parseFloat(textD3.attr('dy'));
        textD3.text(null);
        var tempSpan = addLine(textD3, null, lineHeight, x, y, dy, 0);
        var stopReduce = false;
        var tokensCount = (tokens.length - 1);
        var lines = tokens
            .reduce(function (memo, next, i) {
            if (stopReduce) {
                return memo;
            }
            var isLimit = (memo.length === linesLimit) || (i === tokensCount);
            var last = memo[memo.length - 1];
            var text = (last !== '') ? (last + ' ' + next) : next;
            var tLen = getComputedTextLength(tempSpan.text(text));
            var over = tLen > stepSize;
            if (over && isLimit) {
                var available = Math.floor(stepSize / tLen * text.length);
                memo[memo.length - 1] = text.substr(0, available - 4) + '...';
                stopReduce = true;
            }
            if (over && !isLimit) {
                memo.push(next);
            }
            if (!over) {
                memo[memo.length - 1] = text;
            }
            return memo;
        }, [''])
            .filter(function (l) { return l.length > 0; });
        y = isY ? (-1 * (lines.length - 1) * Math.floor(tickLabelFontHeight * 0.5)) : y;
        lines.forEach(function (text, i) { return addLine(textD3, text, lineHeight, x, y, dy, i); });
        tempSpan.remove();
    });
};
function avoidTickTextCollision(ticks, isHorizontal) {
    var textOffsetStep = 11;
    var refOffsetStart = isHorizontal ? -10 : 20;
    var translateParam = isHorizontal ? 0 : 1;
    var directionKoeff = isHorizontal ? 1 : -1;
    var layoutModel = [];
    ticks
        .each(function () {
        var tick = d3.select(this);
        var translateXStr = tick
            .attr('transform')
            .replace('translate(', '')
            .replace(' ', ',') // IE specific
            .split(',')[translateParam];
        var translateX = directionKoeff * parseFloat(translateXStr);
        var tNode = tick.select('text');
        var textWidth = tNode.node().getBBox().width;
        var halfText = (textWidth / 2);
        var s = translateX - halfText;
        var e = translateX + halfText;
        layoutModel.push({ c: translateX, s: s, e: e, l: 0, textRef: tNode, tickRef: tick });
    });
    var iterateByTriples = function (coll, iterator) {
        return coll.map(function (curr, i, list) {
            return iterator(list[i - 1] || { e: -Infinity, s: -Infinity, l: 0 }, curr, list[i + 1] || { e: Infinity, s: Infinity, l: 0 });
        });
    };
    var resolveCollide = function (prevLevel, prevCollide) {
        var rules = {
            '[T][1]': -1,
            '[T][-1]': 0,
            '[T][0]': 1,
            '[F][0]': -1
        };
        var k = "[" + prevCollide.toString().toUpperCase().charAt(0) + "][" + prevLevel + "]";
        return (rules.hasOwnProperty(k)) ? rules[k] : 0;
    };
    var axisLayoutModel = layoutModel.sort(function (a, b) { return (a.c - b.c); });
    iterateByTriples(axisLayoutModel, function (prev, curr, next) {
        var collideL = (prev.e > curr.s);
        var collideR = (next.s < curr.e);
        if (collideL || collideR) {
            curr.l = resolveCollide(prev.l, collideL);
            var size = curr.textRef.size();
            var text = curr.textRef.text();
            if (size > 1) {
                text = text.replace(/([\.]*$)/gi, '') + '...';
            }
            var dy = (curr.l * textOffsetStep); // -1 | 0 | +1
            var newY = parseFloat(curr.textRef.attr('y')) + dy;
            var tx = isHorizontal ? 0 : dy;
            var ty = isHorizontal ? dy : 0;
            var tr = (function (transform) {
                var rotate = 0;
                if (!transform) {
                    return rotate;
                }
                var rs = transform.indexOf('rotate(');
                if (rs >= 0) {
                    var re = transform.indexOf(')', rs + 7);
                    var rotateStr = transform.substring(rs + 7, re);
                    rotate = parseFloat(rotateStr.trim());
                }
                return rotate;
            })(curr.textRef.attr('transform'));
            curr.textRef
                .text(function (d, i) { return i === 0 ? text : ''; })
                .attr('transform', 'translate(' + tx + ',' + ty + ') rotate(' + tr + ')');
            var attrs = {
                x1: 0,
                x2: 0,
                y1: newY + (isHorizontal ? -1 : 5),
                y2: refOffsetStart
            };
            if (!isHorizontal) {
                attrs.transform = 'rotate(-90)';
            }
            _utils_dom__WEBPACK_IMPORTED_MODULE_1__["selectOrAppend"](curr.tickRef, 'line.label-ref')
                .call(d3_setAttrs(attrs));
        }
        else {
            curr.tickRef.selectAll('line.label-ref').remove();
        }
        return curr;
    });
}
var d3_transition = function (selection, animationSpeed, nameSpace) {
    if (animationSpeed > 0 && !document.hidden) {
        selection = selection.transition(nameSpace).duration(animationSpeed);
        selection.attr = d3_transition_attr;
    }
    selection.onTransitionEnd = function (callback) {
        d3_add_transition_end_listener(this, callback);
        return this;
    };
    return selection;
};
var d3_transition_attr = function (keyOrMap, value) {
    var _this = this;
    var d3AttrResult = d3.transition.prototype.attr.apply(this, arguments);
    if (arguments.length === 0) {
        throw new Error('Unexpected `transition().attr()` arguments.');
    }
    var attrs;
    if (arguments.length === 1) {
        attrs = keyOrMap;
    }
    else if (arguments.length > 1) {
        attrs = (_a = {}, _a[keyOrMap] = value, _a);
    }
    // Store transitioned attributes values
    // until transition ends.
    var store = '__transitionAttrs__';
    var idStore = '__lastTransitions__';
    var id = getTransitionAttrId();
    this.each(function () {
        var _this = this;
        var newAttrs = {};
        for (var key in attrs) {
            if (typeof attrs[key] === 'function') {
                newAttrs[key] = attrs[key].apply(this, arguments);
            }
            else {
                newAttrs[key] = attrs[key];
            }
        }
        this[store] = Object.assign(this[store] || {}, newAttrs);
        // NOTE: As far as d3 `interrupt` event is called asynchronously,
        // we have to store ID to prevent removing attribute value from store,
        // when new transition is applied for the same attribute.
        if (!this[store][idStore]) {
            Object.defineProperty(this[store], idStore, { value: {} });
        }
        Object.keys(newAttrs).forEach(function (key) { return _this[store][idStore][key] = id; });
    });
    var onTransitionEnd = function () {
        var _this = this;
        if (this[store]) {
            Object.keys(attrs)
                .filter(function (k) { return _this[store][idStore][k] === id; })
                .forEach(function (k) { return delete _this[store][k]; });
            if (Object.keys(this[store]).length === 0) {
                delete this[store];
            }
        }
    };
    this.on("interrupt." + id, function () { return _this.each(onTransitionEnd); });
    this.on("end." + id, function () { return _this.each(onTransitionEnd); });
    return d3AttrResult;
    var _a;
};
var transitionsCounter = 0;
var getTransitionAttrId = function () {
    return ++transitionsCounter;
};
var d3_add_transition_end_listener = function (selection, callback) {
    if (!d3.transition.prototype.isPrototypeOf(selection) || selection.empty()) {
        // If selection is not transition or empty,
        // execute callback immediately.
        callback.call(null, selection);
        return;
    }
    var onTransitionEnd = function () { return callback.call(null, selection); };
    selection.on('interrupt.d3_on_transition_end', onTransitionEnd);
    selection.on('end.d3_on_transition_end', onTransitionEnd);
    return selection;
};
var d3_animationInterceptor = function (speed, initAttrs, doneAttrs, afterUpdate) {
    var xAfterUpdate = afterUpdate || (function (x) { return x; });
    var afterUpdateIterator = function () {
        xAfterUpdate(this);
    };
    return function (selection) {
        var flow = selection;
        if (initAttrs) {
            flow = flow.call(d3_setAttrs(_utils__WEBPACK_IMPORTED_MODULE_0__["defaults"](initAttrs, doneAttrs)));
        }
        flow = d3_transition(flow, speed);
        flow = flow.call(d3_setAttrs(doneAttrs));
        if (speed > 0) {
            flow.on('end.d3_animationInterceptor', function () { return flow.each(afterUpdateIterator); });
        }
        else {
            flow.each(afterUpdateIterator);
        }
        return flow;
    };
};
var d3_selectAllImmediate = function (container, selector) {
    var node = container.node();
    return container.selectAll(selector).filter(function () {
        return this.parentNode === node;
    });
};
var d3_createPathTween = function (attr, pathStringBuilder, pointConvertors, idGetter, interpolationType) {
    if (interpolationType === void 0) { interpolationType = 'linear'; }
    var pointStore = '__pathPoints__';
    return function (data) {
        var _this = this;
        if (!this[pointStore]) {
            this[pointStore] = pointConvertors.map(function () { return []; });
        }
        var frames = pointConvertors.map(function (convertor, i) {
            var points = _utils__WEBPACK_IMPORTED_MODULE_0__["unique"](data, idGetter).map(convertor);
            var interpolateLine = (Object(_path_interpolators_interpolators_registry__WEBPACK_IMPORTED_MODULE_5__["getLineInterpolator"])(interpolationType) ||
                Object(_path_interpolators_interpolators_registry__WEBPACK_IMPORTED_MODULE_5__["getLineInterpolator"])('linear'));
            var pointsTo = interpolateLine(points);
            var pointsFrom = _this[pointStore][i];
            var interpolate = Object(_path_interpolators_path_points__WEBPACK_IMPORTED_MODULE_4__["default"])(pointsFrom, pointsTo, Object(_path_interpolators_interpolators_registry__WEBPACK_IMPORTED_MODULE_5__["getInterpolatorSplineType"])(interpolationType));
            return {
                pointsFrom: pointsFrom,
                pointsTo: pointsTo,
                interpolate: interpolate
            };
        });
        return function (t) {
            if (t === 0) {
                var pointsFrom = frames.map(function (f) { return f.pointsFrom; });
                return pathStringBuilder.apply(void 0, pointsFrom);
            }
            if (t === 1) {
                var pointsTo = frames.map(function (f) { return f.pointsTo; });
                _this[pointStore] = pointsTo;
                return pathStringBuilder.apply(void 0, pointsTo);
            }
            var intermediate = frames.map(function (f) { return f.interpolate(t); });
            // Save intermediate points to be able
            // to continue transition after interrupt
            _this[pointStore] = intermediate;
            return pathStringBuilder.apply(void 0, intermediate);
        };
    };
};
var d3_setAttrs = function (attrs) {
    return function (sel) {
        Object.keys(attrs).forEach(function (k) { return sel.attr(k, attrs[k]); });
        return sel;
    };
};
var d3_setClasses = function (classMap) {
    return function (sel) {
        Object.keys(classMap).forEach(function (k) { return sel.classed(k, classMap[k]); });
        return sel;
    };
};



/***/ }),

/***/ "./src/utils/d3-labeler.js":
/*!*********************************!*\
  !*** ./src/utils/d3-labeler.js ***!
  \*********************************/
/*! exports provided: d3Labeler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d3Labeler", function() { return d3Labeler; });
var d3Labeler = function () {
    var lab = [], anc = [], w = 1, // box width
    h = 1, // box width
    labeler = {};
    var max_move = 5.0, max_angle = 0.5, acc = 0, rej = 0;
    // weights
    var w_len = 0.2, // leader line length
    w_inter = 1.0, // leader line intersenpm testction
    w_lab2 = 30.0, // label-label overlap
    w_lab_anc = 30.0, // label-anchor overlap
    w_orient = 3.0; // orientation bias
    // booleans for user defined functions
    var user_energy = false;
    var user_defined_energy;
    var energy = function (index) {
        // energy function, tailored for label placement
        var m = lab.length, ener = 0, dx = lab[index].x - anc[index].x, dy = anc[index].y - lab[index].y, dist = Math.sqrt(dx * dx + dy * dy), overlap = true;
        // penalty for length of leader line
        if (dist > 0) {
            ener += dist * w_len;
        }
        // label orientation bias
        dx /= dist;
        dy /= dist;
        if (dx > 0 && dy > 0) {
            ener += 0 * w_orient;
        }
        else if (dx < 0 && dy > 0) {
            ener += 1 * w_orient;
        }
        else if (dx < 0 && dy < 0) {
            ener += 2 * w_orient;
        }
        else {
            ener += 3 * w_orient;
        }
        var x21 = lab[index].x, y21 = lab[index].y - lab[index].height + 2.0, x22 = lab[index].x + lab[index].width, y22 = lab[index].y + 2.0;
        var x11, x12, y11, y12, x_overlap, y_overlap, overlap_area;
        for (var i = 0; i < m; i++) {
            if (i != index) {
                // penalty for intersection of leader lines
                overlap = intersect(anc[index].x, lab[index].x, anc[i].x, lab[i].x, anc[index].y, lab[index].y, anc[i].y, lab[i].y);
                if (overlap) {
                    ener += w_inter;
                }
                // penalty for label-label overlap
                x11 = lab[i].x;
                y11 = lab[i].y - lab[i].height + 2.0;
                x12 = lab[i].x + lab[i].width;
                y12 = lab[i].y + 2.0;
                x_overlap = Math.max(0, Math.min(x12, x22) - Math.max(x11, x21));
                y_overlap = Math.max(0, Math.min(y12, y22) - Math.max(y11, y21));
                overlap_area = x_overlap * y_overlap;
                ener += (overlap_area * w_lab2);
            }
            // penalty for label-anchor overlap
            x11 = anc[i].x - anc[i].r;
            y11 = anc[i].y - anc[i].r;
            x12 = anc[i].x + anc[i].r;
            y12 = anc[i].y + anc[i].r;
            x_overlap = Math.max(0, Math.min(x12, x22) - Math.max(x11, x21));
            y_overlap = Math.max(0, Math.min(y12, y22) - Math.max(y11, y21));
            overlap_area = x_overlap * y_overlap;
            ener += (overlap_area * w_lab_anc);
        }
        return ener;
    };
    var mcmove = function (currT) {
        // Monte Carlo translation move
        // select a random label
        var i = Math.floor(Math.random() * lab.length);
        // save old coordinates
        var x_old = lab[i].x;
        var y_old = lab[i].y;
        // old energy
        var old_energy;
        if (user_energy) {
            old_energy = user_defined_energy(i, lab, anc);
        }
        else {
            old_energy = energy(i);
        }
        // random translation
        lab[i].x += (Math.random() - 0.5) * max_move;
        lab[i].y += (Math.random() - 0.5) * max_move;
        // hard wall boundaries
        if (lab[i].x > w) {
            lab[i].x = x_old;
        }
        if (lab[i].x < 0) {
            lab[i].x = x_old;
        }
        if (lab[i].y > h) {
            lab[i].y = y_old;
        }
        if (lab[i].y < 0) {
            lab[i].y = y_old;
        }
        // new energy
        var new_energy;
        if (user_energy) {
            new_energy = user_defined_energy(i, lab, anc);
        }
        else {
            new_energy = energy(i);
        }
        // delta E
        var delta_energy = new_energy - old_energy;
        if (Math.random() < Math.exp(-delta_energy / currT)) {
            acc += 1;
        }
        else {
            // move back to old coordinates
            lab[i].x = x_old;
            lab[i].y = y_old;
            rej += 1;
        }
    };
    var mcrotate = function (currT) {
        // Monte Carlo rotation move
        // select a random label
        var i = Math.floor(Math.random() * lab.length);
        // save old coordinates
        var x_old = lab[i].x;
        var y_old = lab[i].y;
        // old energy
        var old_energy;
        if (user_energy) {
            old_energy = user_defined_energy(i, lab, anc);
        }
        else {
            old_energy = energy(i);
        }
        // random angle
        var angle = (Math.random() - 0.5) * max_angle;
        var s = Math.sin(angle);
        var c = Math.cos(angle);
        // translate label (relative to anchor at origin):
        lab[i].x -= anc[i].x;
        lab[i].y -= anc[i].y;
        // rotate label
        var x_new = lab[i].x * c - lab[i].y * s, y_new = lab[i].x * s + lab[i].y * c;
        // translate label back
        lab[i].x = x_new + anc[i].x;
        lab[i].y = y_new + anc[i].y;
        // hard wall boundaries
        if (lab[i].x > w) {
            lab[i].x = x_old;
        }
        if (lab[i].x < 0) {
            lab[i].x = x_old;
        }
        if (lab[i].y > h) {
            lab[i].y = y_old;
        }
        if (lab[i].y < 0) {
            lab[i].y = y_old;
        }
        // new energy
        var new_energy;
        if (user_energy) {
            new_energy = user_defined_energy(i, lab, anc);
        }
        else {
            new_energy = energy(i);
        }
        // delta E
        var delta_energy = new_energy - old_energy;
        if (Math.random() < Math.exp(-delta_energy / currT)) {
            acc += 1;
        }
        else {
            // move back to old coordinates
            lab[i].x = x_old;
            lab[i].y = y_old;
            rej += 1;
        }
    };
    var intersect = function (x1, x2, x3, x4, y1, y2, y3, y4) {
        // returns true if two lines intersect, else false
        // from http://paulbourke.net/geometry/lineline2d/
        var mua, mub;
        var denom, numera, numerb;
        denom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
        numera = (x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3);
        numerb = (x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3);
        /* Is the intersection along the the segments */
        mua = numera / denom;
        mub = numerb / denom;
        if (!(mua < 0 || mua > 1 || mub < 0 || mub > 1)) {
            return true;
        }
        return false;
    };
    var cooling_schedule = function (currT, initialT, nsweeps) {
        // linear cooling
        return (currT - (initialT / nsweeps));
    };
    labeler.start = function (nsweeps) {
        // main simulated annealing function
        var m = lab.length, currT = 1.0, initialT = 1.0;
        for (var i = 0; i < nsweeps; i++) {
            for (var j = 0; j < m; j++) {
                if (Math.random() < 0.5) {
                    mcmove(currT);
                }
                else {
                    mcrotate(currT);
                }
            }
            currT = cooling_schedule(currT, initialT, nsweeps);
        }
    };
    labeler.width = function (x) {
        // users insert graph width
        if (!arguments.length) {
            return w;
        }
        w = x;
        return labeler;
    };
    labeler.height = function (x) {
        // users insert graph height
        if (!arguments.length) {
            return h;
        }
        h = x;
        return labeler;
    };
    labeler.label = function (x) {
        // users insert label positions
        if (!arguments.length) {
            return lab;
        }
        lab = x;
        return labeler;
    };
    labeler.anchor = function (x) {
        // users insert anchor positions
        if (!arguments.length) {
            return anc;
        }
        anc = x;
        return labeler;
    };
    labeler.alt_energy = function (x) {
        // user defined energy
        if (!arguments.length) {
            return energy;
        }
        user_defined_energy = x;
        user_energy = true;
        return labeler;
    };
    labeler.alt_schedule = function () {
        // user defined cooling_schedule
        if (!arguments.length) {
            return cooling_schedule;
        }
        return labeler;
    };
    return labeler;
};



/***/ }),

/***/ "./src/utils/layout-template.ts":
/*!**************************************!*\
  !*** ./src/utils/layout-template.ts ***!
  \**************************************/
/*! exports provided: getLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLayout", function() { return getLayout; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/const.js");

var createElement = function (cssClass, parent) {
    var tag = 'div';
    var element = document.createElement(tag);
    element.classList.add(_const__WEBPACK_IMPORTED_MODULE_0__["CSS_PREFIX"] + cssClass);
    if (parent) {
        parent.appendChild(element);
    }
    return element;
};
var getLayout = function () {
    var layout = createElement('layout');
    var header = createElement('layout__header', layout);
    var centerContainer = createElement('layout__container', layout);
    var leftSidebar = createElement('layout__sidebar', centerContainer);
    var contentContainer = createElement('layout__content', centerContainer);
    var content = createElement('layout__content__wrap', contentContainer);
    var rightSidebarContainer = createElement('layout__sidebar-right', centerContainer);
    var rightSidebar = createElement('layout__sidebar-right__wrap', rightSidebarContainer);
    var footer = createElement('layout__footer', layout);
    /* jshint ignore:start */
    return {
        layout: layout,
        header: header,
        content: content,
        contentContainer: contentContainer,
        leftSidebar: leftSidebar,
        rightSidebar: rightSidebar,
        rightSidebarContainer: rightSidebarContainer,
        footer: footer
    };
    /* jshint ignore:end */
};



/***/ }),

/***/ "./src/utils/path/bezier.ts":
/*!**********************************!*\
  !*** ./src/utils/path/bezier.ts ***!
  \**********************************/
/*! exports provided: bezier, getBezierPoint, splitCubicSegment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bezier", function() { return bezier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBezierPoint", function() { return getBezierPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitCubicSegment", function() { return splitCubicSegment; });
function bezier(t) {
    var p = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        p[_i - 1] = arguments[_i];
    }
    if (p.length === 2) {
        return (p[0] * (1 - t) + p[1] * t);
    }
    if (p.length === 3) {
        return (p[0] * (1 - t) * (1 - t) +
            2 * p[1] * (1 - t) * t
            + p[2] * t * t);
    }
    return (p[0] * (1 - t) * (1 - t) * (1 - t) +
        3 * p[1] * (1 - t) * (1 - t) * t +
        3 * p[2] * (1 - t) * t * t +
        p[3] * t * t * t);
}
function getBezierPoint(t) {
    var p = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        p[_i - 1] = arguments[_i];
    }
    var x = p.map(function (p) { return p.x; });
    var y = p.map(function (p) { return p.y; });
    return {
        x: bezier.apply(void 0, [t].concat(x)),
        y: bezier.apply(void 0, [t].concat(y))
    };
}
function splitCubicSegment(t, p0, c0, c1, p1) {
    var c2 = getBezierPoint(t, p0, c0);
    var c3 = getBezierPoint(t, p0, c0, c1);
    var c4 = getBezierPoint(t, c0, c1, p1);
    var c5 = getBezierPoint(t, c1, p1);
    var m = getBezierPoint(t, c3, c4);
    return [p0, c2, c3, m, c4, c5, p1];
}


/***/ }),

/***/ "./src/utils/path/interpolators/interpolators-registry.ts":
/*!****************************************************************!*\
  !*** ./src/utils/path/interpolators/interpolators-registry.ts ***!
  \****************************************************************/
/*! exports provided: getLineInterpolator, getInterpolatorSplineType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLineInterpolator", function() { return getLineInterpolator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInterpolatorSplineType", function() { return getInterpolatorSplineType; });
/* harmony import */ var _smooth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smooth */ "./src/utils/path/interpolators/smooth.ts");
/* harmony import */ var _step__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step */ "./src/utils/path/interpolators/step.ts");


var polylineInterpolators = {
    linear: function (d) { return d; },
    step: _step__WEBPACK_IMPORTED_MODULE_1__["getStepLine"],
    'step-before': _step__WEBPACK_IMPORTED_MODULE_1__["getStepBeforeLine"],
    'step-after': _step__WEBPACK_IMPORTED_MODULE_1__["getStepAfterLine"]
};
var curveInterpolators = {
    smooth: _smooth__WEBPACK_IMPORTED_MODULE_0__["getCurve"],
    'smooth-keep-extremum': _smooth__WEBPACK_IMPORTED_MODULE_0__["getCurveKeepingExtremums"]
};
function getLineInterpolator(type) {
    return (polylineInterpolators[type] || curveInterpolators[type]);
}
function getInterpolatorSplineType(type) {
    if (curveInterpolators[type] !== undefined) {
        return 'cubic';
    }
    return 'polyline';
}


/***/ }),

/***/ "./src/utils/path/interpolators/path-points.ts":
/*!*****************************************************!*\
  !*** ./src/utils/path/interpolators/path-points.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return interpolatePathPoints; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/utils/utils.ts");
/* harmony import */ var _bezier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bezier */ "./src/utils/path/bezier.ts");


/**
 * Returns intermediate line or curve between two sources.
 */
function interpolatePathPoints(pointsFrom, pointsTo, type) {
    if (type === void 0) { type = 'polyline'; }
    var interpolate;
    return function (t) {
        if (t === 0) {
            return pointsFrom;
        }
        if (t === 1) {
            return pointsTo;
        }
        if (!interpolate) {
            interpolate = (type === 'cubic' ?
                getCubicInterpolator :
                getLinearInterpolator)(pointsFrom, pointsTo);
        }
        return interpolate(t);
    };
}
/**
 * Creates intermediate points array, so that the number of points
 * remains the same and added or excluded points are situated between
 * existing points.
 */
function getLinearInterpolator(pointsFrom, pointsTo) {
    // TODO: Continue unfinished transition of ending points.
    pointsFrom = pointsFrom.filter(function (d) { return !d.isInterpolated; });
    // NOTE: Suppose data is already sorted by X.
    var idsFrom = pointsFrom.map(function (d) { return d.id; });
    var idsTo = pointsTo.map(function (d) { return d.id; });
    var remainingIds = idsFrom
        .filter(function (id) { return idsTo.indexOf(id) >= 0; });
    //
    // Determine start and end scales difference to apply
    // to initial target position of newly added points
    // (or end position of deleted points)
    var stableFrom = pointsFrom.filter(function (d) { return !d.positionIsBeingChanged; });
    var stableTo = pointsTo.filter(function (d) { return !d.positionIsBeingChanged; });
    var toEndScale = getScaleDiffFn(stableFrom, stableTo);
    var toStartScale = getScaleDiffFn(stableTo, stableFrom);
    var interpolators = [];
    remainingIds.forEach(function (id, i) {
        var indexFrom = idsFrom.indexOf(id);
        var indexTo = idsTo.indexOf(id);
        if (i === 0 &&
            (indexFrom > 0 || indexTo > 0)) {
            interpolators.push(getEndingInterpolator({
                isCubic: false,
                polylineFrom: pointsFrom.slice(0, indexFrom + 1),
                polylineTo: pointsTo.slice(0, indexTo + 1),
                toOppositeScale: indexTo === 0 ? toEndScale : toStartScale
            }));
        }
        if (i > 0) {
            var prevIndexFrom = idsFrom.indexOf(remainingIds[i - 1]);
            var prevIndexTo = idsTo.indexOf(remainingIds[i - 1]);
            if (indexFrom - prevIndexFrom > 1 || indexTo - prevIndexTo > 1) {
                interpolators.push(getInnerInterpolator({
                    isCubic: false,
                    polylineFrom: pointsFrom.slice(prevIndexFrom, indexFrom + 1),
                    polylineTo: pointsTo.slice(prevIndexTo, indexTo + 1)
                }));
            }
        }
        interpolators.push(getRemainingPointInterpolator({
            pointFrom: pointsFrom[indexFrom],
            pointTo: pointsTo[indexTo]
        }));
        if (i === remainingIds.length - 1 &&
            (pointsFrom.length - indexFrom - 1 > 0 ||
                pointsTo.length - indexTo - 1 > 0)) {
            interpolators.push(getEndingInterpolator({
                isCubic: false,
                polylineFrom: pointsFrom.slice(indexFrom),
                polylineTo: pointsTo.slice(indexTo),
                toOppositeScale: pointsTo.length - indexTo === 1 ? toEndScale : toStartScale
            }));
        }
    });
    if (interpolators.length === 0 && (pointsTo.length > 0 && remainingIds.length === 0 ||
        pointsFrom.length > 0 && remainingIds.length === 0)) {
        interpolators.push(getNonRemainingPathInterpolator({
            isCubic: false,
            polylineFrom: pointsFrom.slice(0),
            polylineTo: pointsTo.slice(0)
        }));
    }
    return function (t) {
        var intermediate = [];
        interpolators.forEach(function (interpolator) {
            var points = interpolator(t);
            push(intermediate, points);
        });
        return intermediate;
    };
}
/**
 * Creates intermediate cubic points array, so that the number of points
 * remains the same and added or excluded points are situated between
 * existing points.
 */
function getCubicInterpolator(pointsFrom, pointsTo) {
    for (var i = 2; i < pointsFrom.length - 1; i += 3) {
        pointsFrom[i - 1].isCubicControl = true;
        pointsFrom[i].isCubicControl = true;
    }
    for (i = 2; i < pointsTo.length - 1; i += 3) {
        pointsTo[i - 1].isCubicControl = true;
        pointsTo[i].isCubicControl = true;
    }
    // Replace interpolated points sequence with straight segment
    // TODO: Continue unfinished transition of ending points.
    pointsFrom = pointsFrom.filter(function (d) { return !d.isInterpolated; });
    var d, p;
    for (i = pointsFrom.length - 2; i >= 0; i--) {
        p = pointsFrom[i + 1];
        d = pointsFrom[i];
        if (!d.isCubicControl && !p.isCubicControl) {
            pointsFrom.splice(i + 1, 0, Object(_bezier__WEBPACK_IMPORTED_MODULE_1__["getBezierPoint"])(1 / 3, p, d), Object(_bezier__WEBPACK_IMPORTED_MODULE_1__["getBezierPoint"])(2 / 3, p, d));
            pointsFrom[i + 1].isCubicControl = true;
            pointsFrom[i + 2].isCubicControl = true;
        }
    }
    // NOTE: Suppose data is already sorted by X.
    // var anchorsFrom = pointsFrom.filter(d => !d.isCubicControl);
    // var anchorsTo = pointsTo.filter(d => !d.isCubicControl);
    var anchorsFrom = pointsFrom.filter(function (d, i) { return i % 3 === 0; });
    var anchorsTo = pointsTo.filter(function (d, i) { return i % 3 === 0; });
    var idsFrom = anchorsFrom.map(function (d) { return d.id; });
    var idsTo = anchorsTo.map(function (d) { return d.id; });
    var indicesFrom = idsFrom.reduce(function (memo, id) { return ((memo[id] = pointsFrom.findIndex(function (d) { return d.id === id; }), memo)); }, {});
    var indicesTo = idsTo.reduce(function (memo, id) { return ((memo[id] = pointsTo.findIndex(function (d) { return d.id === id; }), memo)); }, {});
    var remainingIds = idsFrom
        .filter(function (id) { return idsTo.indexOf(id) >= 0; });
    //
    // Determine start and end scales difference to apply
    // to initial target position of newly added points
    // (or end position of deleted points)
    var stableFrom = anchorsFrom.filter(function (d) { return !d.positionIsBeingChanged; });
    var stableTo = anchorsTo.filter(function (d) { return !d.positionIsBeingChanged; });
    var toEndScale = getScaleDiffFn(stableFrom, stableTo);
    var toStartScale = getScaleDiffFn(stableTo, stableFrom);
    var interpolators = [];
    remainingIds.forEach(function (id, i) {
        var indexFrom = indicesFrom[id];
        var indexTo = indicesTo[id];
        if (i === 0 &&
            (indexFrom > 0 || indexTo > 0)) {
            interpolators.push(getEndingInterpolator({
                polylineFrom: pointsFrom.slice(0, indexFrom + 1),
                polylineTo: pointsTo.slice(0, indexTo + 1),
                toOppositeScale: indexTo === 0 ? toEndScale : toStartScale,
                isCubic: true
            }));
        }
        if (i > 0) {
            var prevIndexFrom = indicesFrom[remainingIds[i - 1]];
            var prevIndexTo = indicesTo[remainingIds[i - 1]];
            if (indexFrom - prevIndexFrom > 3 || indexTo - prevIndexTo > 3) {
                interpolators.push(getInnerInterpolator({
                    polylineFrom: pointsFrom.slice(prevIndexFrom, indexFrom + 1),
                    polylineTo: pointsTo.slice(prevIndexTo, indexTo + 1),
                    isCubic: true
                }));
            }
            else {
                interpolators.push(getControlsBetweenRemainingInterpolator({
                    polylineFrom: pointsFrom.slice(prevIndexFrom, indexFrom + 1),
                    polylineTo: pointsTo.slice(prevIndexTo, indexTo + 1)
                }));
            }
        }
        interpolators.push(getRemainingPointInterpolator({
            pointFrom: pointsFrom[indexFrom],
            pointTo: pointsTo[indexTo]
        }));
        if (i === remainingIds.length - 1 &&
            (pointsFrom.length - indexFrom - 1 > 0 ||
                pointsTo.length - indexTo - 1 > 0)) {
            interpolators.push(getEndingInterpolator({
                polylineFrom: pointsFrom.slice(indexFrom),
                polylineTo: pointsTo.slice(indexTo),
                toOppositeScale: pointsTo.length - indexTo === 1 ? toEndScale : toStartScale,
                isCubic: true
            }));
        }
    });
    if (interpolators.length === 0 && (pointsTo.length > 0 && remainingIds.length === 0 ||
        pointsFrom.length > 0 && remainingIds.length === 0)) {
        interpolators.push(getNonRemainingPathInterpolator({
            polylineFrom: pointsFrom.slice(0),
            polylineTo: pointsTo.slice(0),
            isCubic: true
        }));
    }
    return function (t) {
        var intermediate = [];
        interpolators.forEach(function (ipl) {
            var points = ipl(t);
            push(intermediate, points);
        });
        return intermediate;
    };
}
function getEndingInterpolator(_a) {
    var polylineFrom = _a.polylineFrom, polylineTo = _a.polylineTo, isCubic = _a.isCubic, toOppositeScale = _a.toOppositeScale;
    var polyline = (polylineFrom.length > polylineTo.length ? polylineFrom : polylineTo);
    var decreasing = (polylineTo.length === 1);
    var isLeftEnding = (polylineFrom[0].id !== polylineTo[0].id);
    var rightToLeft = Boolean(isLeftEnding !== decreasing);
    return function (t) {
        var interpolated = (isCubic ? interpolateCubicEnding : interpolateEnding)({
            t: t, polyline: polyline,
            decreasing: decreasing,
            rightToLeft: rightToLeft
        });
        if (decreasing === rightToLeft) {
            interpolated.shift();
        }
        else {
            interpolated.pop();
        }
        var diffed = interpolated.map(toOppositeScale);
        var points = interpolatePoints(diffed, interpolated, (decreasing ? 1 - t : t));
        points.forEach(function (d) { return d.positionIsBeingChanged = true; });
        return points;
    };
}
function getInnerInterpolator(_a) {
    var polylineFrom = _a.polylineFrom, polylineTo = _a.polylineTo, isCubic = _a.isCubic;
    var oldCount = polylineFrom.length;
    var newCount = polylineTo.length;
    if (newCount !== oldCount) {
        var decreasing = newCount < oldCount;
        var smallerPolyline = decreasing ? polylineTo : polylineFrom;
        var biggerPolyline = decreasing ? polylineFrom : polylineTo;
        var filledPolyline = (isCubic ? fillSmallerCubicLine : fillSmallerPolyline)({
            smallerPolyline: smallerPolyline,
            biggerPolyline: biggerPolyline,
            decreasing: decreasing
        });
        var biggerInnerPoints = biggerPolyline.slice(1, biggerPolyline.length - 1);
        var filledInnerPoints = filledPolyline.slice(1, filledPolyline.length - 1);
        return function (t) {
            var points = interpolatePoints(filledInnerPoints, biggerInnerPoints, (decreasing ? 1 - t : t));
            points.forEach(function (d) { return d.positionIsBeingChanged = true; });
            return points;
        };
    }
    else {
        var innerPointsFrom = polylineFrom.slice(1, polylineFrom.length - 1);
        var innerPointsTo = polylineTo.slice(1, polylineTo.length - 1);
        return function (t) {
            var points = interpolatePoints(innerPointsFrom, innerPointsTo, t);
            points.forEach(function (d) { return d.positionIsBeingChanged = true; });
            return points;
        };
    }
}
function getRemainingPointInterpolator(_a) {
    var pointFrom = _a.pointFrom, pointTo = _a.pointTo;
    return function (t) {
        return [interpolatePoint(pointFrom, pointTo, t)];
    };
}
function getControlsBetweenRemainingInterpolator(_a) {
    var polylineFrom = _a.polylineFrom, polylineTo = _a.polylineTo;
    return function (t) {
        return interpolatePoints(polylineFrom.slice(1, 3), polylineTo.slice(1, 3), t);
    };
}
function getNonRemainingPathInterpolator(_a) {
    var polylineFrom = _a.polylineFrom, polylineTo = _a.polylineTo, isCubic = _a.isCubic;
    var decreasing = polylineTo.length === 0;
    var rightToLeft = decreasing;
    var polyline = (decreasing ? polylineFrom : polylineTo);
    return function (t) {
        var points = (isCubic ? interpolateCubicEnding : interpolateEnding)({
            t: t,
            polyline: polyline,
            decreasing: decreasing,
            rightToLeft: rightToLeft
        });
        points.forEach(function (d, i) {
            if (i > 0) {
                d.positionIsBeingChanged = true;
            }
        });
        return points;
    };
}
function push(target, items) {
    return Array.prototype.push.apply(target, items);
}
function interpolateValue(a, b, t) {
    if (b === undefined) {
        return a;
    }
    if (typeof b === 'number') {
        return (a + t * (b - a));
    }
    return b;
}
function interpolatePoint(a, b, t) {
    if (a === b) {
        return b;
    }
    var c = {};
    var props = Object.keys(a);
    props.forEach(function (k) { return c[k] = interpolateValue(a[k], b[k], t); });
    if (b.id !== undefined) {
        c.id = b.id;
    }
    return c;
}
function interpolatePoints(pointsFrom, pointsTo, t) {
    var result = pointsFrom.map(function (a, i) { return interpolatePoint(a, pointsTo[i], t); });
    return result;
}
/**
 * Returns a polyline with points that move along line
 * from start point to full line (or vice versa).
 */
function interpolateEnding(_a) {
    var t = _a.t, polyline = _a.polyline, decreasing = _a.decreasing, rightToLeft = _a.rightToLeft;
    var reverse = Boolean(decreasing) !== Boolean(rightToLeft);
    var result = (function getLinePiece(t, line) {
        var q = 0;
        if (t > 0) {
            var distance = [0];
            var totalDistance = 0;
            for (var i = 1, x, y, x0, y0, d; i < line.length; i++) {
                x0 = line[i - 1].x;
                y0 = line[i - 1].y;
                x = line[i].x;
                y = line[i].y;
                d = Math.sqrt((x - x0) * (x - x0) + (y - y0) * (y - y0));
                totalDistance += d;
                distance.push(totalDistance);
            }
            var passedDistance = t * totalDistance;
            for (i = 1; i < distance.length; i++) {
                if (passedDistance <= distance[i]) {
                    q = Math.min(1, (i - 1 +
                        (passedDistance - distance[i - 1]) /
                            (distance[i] - distance[i - 1])) /
                        (line.length - 1));
                    break;
                }
            }
        }
        var existingCount = Math.floor((line.length - 1) * q) + 1;
        var tempCount = line.length - existingCount;
        var tempStartIdIndex = existingCount;
        var result = line.slice(0, existingCount);
        if (q < 1) {
            var qi = (q * (line.length - 1)) % 1;
            var midPt = interpolatePoint(line[existingCount - 1], line[existingCount], qi);
            push(result, _utils__WEBPACK_IMPORTED_MODULE_0__["range"](tempCount).map(function (i) { return Object.assign({}, midPt, {
                id: line[tempStartIdIndex + i].id,
                isInterpolated: true
            }); }));
        }
        return result;
    })((decreasing ? 1 - t : t), (reverse ? polyline.slice(0).reverse() : polyline));
    if (reverse) {
        result.reverse();
    }
    return result;
}
/**
 * Returns a cubic line with points that move along line
 * from start point to full line (or vice versa).
 */
function interpolateCubicEnding(_a) {
    var t = _a.t, polyline = _a.polyline, decreasing = _a.decreasing, rightToLeft = _a.rightToLeft;
    var reverse = Boolean(decreasing) !== Boolean(rightToLeft);
    var result = (function getLinePiece(t, line) {
        var pointsCount = (line.length - 1) / 3 + 1;
        var q = 0;
        if (t > 0) {
            var distance = [0];
            var totalDistance = 0;
            for (var i = 1, x1, y1, x0, y0, cx0, cy0, cx1, cy1, d; i < pointsCount; i++) {
                x0 = line[i * 3 - 3].x;
                y0 = line[i * 3 - 3].y;
                cx0 = line[i * 3 - 2].x;
                cy0 = line[i * 3 - 2].y;
                cx1 = line[i * 3 - 1].x;
                cy1 = line[i * 3 - 1].y;
                x1 = line[i * 3].x;
                y1 = line[i * 3].y;
                d = (getDistance(x0, y0, cx0, cy0) +
                    getDistance(cx0, cy0, cx1, cy1) +
                    getDistance(cx1, cy1, x1, y1) +
                    getDistance(x1, y1, x0, y0)) / 2;
                totalDistance += d;
                distance.push(totalDistance);
            }
            var passedDistance = t * totalDistance;
            for (i = 1; i < distance.length; i++) {
                if (passedDistance <= distance[i]) {
                    q = Math.min(1, (i - 1 +
                        (passedDistance - distance[i - 1]) /
                            (distance[i] - distance[i - 1])) /
                        (pointsCount - 1));
                    break;
                }
            }
        }
        var existingCount = Math.floor((pointsCount - 1) * q) + 1;
        var tempCount = pointsCount - existingCount;
        var tempStartIdIndex = existingCount * 3;
        var result = line.slice(0, (existingCount - 1) * 3 + 1);
        if (q < 1) {
            var qi = (q * (pointsCount - 1)) % 1;
            var spl = splitCubicSegment(qi, line.slice((existingCount - 1) * 3, existingCount * 3 + 1));
            var newPiece = spl.slice(1, 4);
            newPiece.forEach(function (p) { return p.isInterpolated = true; });
            newPiece[2].id = line[tempStartIdIndex].id;
            push(result, newPiece);
            _utils__WEBPACK_IMPORTED_MODULE_0__["range"](1, tempCount).forEach(function (i) {
                push(result, [
                    { x: newPiece[2].x, y: newPiece[2].y, isCubicControl: true, isInterpolated: true },
                    { x: newPiece[2].x, y: newPiece[2].y, isCubicControl: true, isInterpolated: true },
                    Object.assign({}, newPiece[2], {
                        id: line[tempStartIdIndex + i * 3].id,
                        isInterpolated: true
                    })
                ]);
            });
        }
        return result;
    })((decreasing ? 1 - t : t), (reverse ? polyline.slice(0).reverse() : polyline));
    if (reverse) {
        result.reverse();
    }
    return result;
}
/**
 * Returns a polyline filled with points, so that number of points
 * becomes the same on both start and end polylines.
 */
function fillSmallerPolyline(_a) {
    var smallerPolyline = _a.smallerPolyline, biggerPolyline = _a.biggerPolyline, decreasing = _a.decreasing;
    var smallerSegCount = smallerPolyline.length - 1;
    var biggerSegCount = biggerPolyline.length - 1;
    var minSegmentPointsCount = Math.floor(biggerSegCount / smallerSegCount) + 1;
    var restPointsCount = biggerSegCount % smallerSegCount;
    var segmentsPointsCount = _utils__WEBPACK_IMPORTED_MODULE_0__["range"](smallerSegCount)
        .map(function (i) { return (minSegmentPointsCount + Number(i < restPointsCount)); });
    var result = [smallerPolyline[0]];
    var smallPtIndex = 1;
    segmentsPointsCount.forEach(function (segPtCount) {
        _utils__WEBPACK_IMPORTED_MODULE_0__["range"](1, segPtCount).forEach(function (i) {
            var newPt;
            if (i === segPtCount - 1) {
                newPt = Object.assign({}, smallerPolyline[smallPtIndex]);
                if (!decreasing) {
                    newPt.id = biggerPolyline[result.length].id;
                }
            }
            else {
                newPt = interpolatePoint(smallerPolyline[smallPtIndex - 1], smallerPolyline[smallPtIndex], (i / (segPtCount - 1)));
                newPt.id = biggerPolyline[result.length].id;
                if (decreasing) {
                    newPt.isInterpolated = true;
                }
            }
            result.push(newPt);
        });
        smallPtIndex++;
    });
    return result;
}
/**
 * Returns a cubic line filled with points, so that number of points
 * becomes the same on both start and end cubic lines.
 */
function fillSmallerCubicLine(_a) {
    var smallerPolyline = _a.smallerPolyline, biggerPolyline = _a.biggerPolyline, decreasing = _a.decreasing;
    var smallerSegCount = (smallerPolyline.length - 1) / 3;
    var biggerSegCount = (biggerPolyline.length - 1) / 3;
    var minSegmentPointsCount = Math.floor(biggerSegCount / smallerSegCount) + 1;
    var restPointsCount = biggerSegCount % smallerSegCount;
    var segmentsPointsCount = _utils__WEBPACK_IMPORTED_MODULE_0__["range"](smallerSegCount)
        .map(function (i) { return (minSegmentPointsCount + Number(i < restPointsCount)); });
    var result = [smallerPolyline[0]];
    var smallPtIndex = 3;
    segmentsPointsCount.forEach(function (segPtCount) {
        if (segPtCount > 2) {
            var spl = multipleSplitCubicSegment(_utils__WEBPACK_IMPORTED_MODULE_0__["range"](1, segPtCount - 1).map(function (i) { return i / (segPtCount - 1); }), smallerPolyline.slice(smallPtIndex - 3, smallPtIndex + 1));
            _utils__WEBPACK_IMPORTED_MODULE_0__["range"](segPtCount - 2)
                .forEach(function (i) { return spl[(i + 1) * 3].id = biggerPolyline[result.length - 1 + i * 3].id; });
            if (decreasing) {
                spl.forEach(function (p, i) {
                    if (i > 0 && i < spl.length - 1) {
                        p.isInterpolated = true;
                    }
                });
            }
            push(result, spl.slice(1));
        }
        else {
            var newC0 = Object.assign({}, smallerPolyline[smallPtIndex - 2]);
            var newC1 = Object.assign({}, smallerPolyline[smallPtIndex - 1]);
            var newPt = Object.assign({}, smallerPolyline[smallPtIndex]);
            if (!decreasing) {
                newPt.id = biggerPolyline[result.length + 2].id;
            }
            result.push(newC0, newC1, newPt);
        }
        smallPtIndex += 3;
    });
    return result;
}
/**
 * Returns a function which moves a point from it's scale
 * to opposite scale (e.g. from start scale to end scale).
 */
function getScaleDiffFn(points1, points2) {
    // Find remaining points with predictable position
    var src = [];
    var dst = [];
    var i, j, a, b, matchJ = 0;
    var len1 = points1.length;
    var len2 = points2.length;
    for (i = 0; i < len1; i++) {
        a = points1[i];
        for (j = matchJ; j < len2; j++) {
            b = points2[j];
            if (a.id === b.id) {
                matchJ = j + 1;
                src.push(a);
                dst.push(b);
                break;
            }
        }
    }
    if (src.length < 1 || dst.length < 1) {
        // Applying scale difference will not be possible
        return (function (d) { return d; });
    }
    var numProps = Object.keys(src[0])
        .filter(function (prop) { return typeof src[0][prop] === 'number'; })
        .filter(function (prop) { return prop !== 'id'; });
    var propDiffs = {};
    var createPropDiffFn = function (a0, b0, a, b) { return function (c0) { return (b +
        (c0 - b0) *
            (b - a) /
            (b0 - a0)); }; };
    var createSimpleDiffFn = function (a0, a) { return function (c0) { return (c0 - a0 + a); }; };
    numProps.forEach(function (prop) {
        var a0 = src[0][prop];
        var a = dst[0][prop];
        for (var i = src.length - 1, b0, b; i > 0; i--) {
            b0 = src[i][prop];
            if (b0 !== a0) {
                b = dst[i][prop];
                propDiffs[prop] = createPropDiffFn(a0, b0, a, b);
                return;
            }
        }
        propDiffs[prop] = createSimpleDiffFn(a0, a);
    });
    return function (c0) {
        var c = Object.assign({}, c0);
        numProps.forEach(function (p) {
            c[p] = propDiffs[p](c0[p]);
        });
        return c;
    };
}
function getDistance(x0, y0, x, y) {
    return Math.sqrt((x - x0) * (x - x0) + (y - y0) * (y - y0));
}
function splitCubicSegment(t, _a) {
    var p0 = _a[0], c0 = _a[1], c1 = _a[2], p1 = _a[3];
    var seg = Object(_bezier__WEBPACK_IMPORTED_MODULE_1__["splitCubicSegment"])(t, p0, c0, c1, p1);
    [seg[1], seg[2], seg[4], seg[5]].forEach(function (c) { return c.isCubicControl = true; });
    Object.keys(p1).forEach(function (k) {
        if (k !== 'x' && k !== 'y' && k !== 'id') {
            seg[3][k] = interpolateValue(p0[k], p1[k], t);
        }
    });
    return seg;
}
function multipleSplitCubicSegment(ts, seg) {
    var result = [seg[0]];
    for (var i = 0, t, spl; i < ts.length; i++) {
        t = i === 0 ? ts[0] : ts[i] / (1 - ts[i - 1]);
        spl = splitCubicSegment(t, seg);
        push(result, spl.slice(1, 4));
        seg = spl.slice(3);
    }
    push(result, seg.slice(1));
    return result;
}


/***/ }),

/***/ "./src/utils/path/interpolators/smooth.ts":
/*!************************************************!*\
  !*** ./src/utils/path/interpolators/smooth.ts ***!
  \************************************************/
/*! exports provided: getCurve, getCurveKeepingExtremums */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurve", function() { return getCurve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurveKeepingExtremums", function() { return getCurveKeepingExtremums; });
/* harmony import */ var _bezier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bezier */ "./src/utils/path/bezier.ts");

/**
 * Returns smooth cubic spline.
 * Applicable to math functions.
 */
function getCurve(points) {
    return getCubicSpline(points, false);
}
/**
 * Returns cubic spline that never exceeds extremums.
 * Applicable to business data.
 */
function getCurveKeepingExtremums(points) {
    return getCubicSpline(points, true);
}
// TODO: Smooth sengments junctions (try preserve curve radius).
function getCubicSpline(points, limited) {
    if (points.length < 2) {
        return points.slice(0);
    }
    if (points.length === 2) {
        return [
            points[0],
            {
                x: interpolate(points[0].x, points[1].x, 1 / 3),
                y: interpolate(points[0].y, points[1].y, 1 / 3)
            },
            {
                x: interpolate(points[0].x, points[1].x, 2 / 3),
                y: interpolate(points[0].y, points[1].y, 2 / 3)
            },
            points[1]
        ];
    }
    var curve = new Array((points.length - 1) * 3 + 1);
    var c0, p1, c3, c1x, c1y, c2x, c2y, qx, qy, qt, tan, dx1, dx2, kl;
    var last = curve.length - 1;
    for (var i = 0; i < points.length; i++) {
        curve[i * 3] = points[i];
        if (i > 0) {
            curve[i * 3 - 2] = Object(_bezier__WEBPACK_IMPORTED_MODULE_0__["getBezierPoint"])(1 / 3, points[i - 1], points[i]);
            curve[i * 3 - 1] = Object(_bezier__WEBPACK_IMPORTED_MODULE_0__["getBezierPoint"])(2 / 3, points[i - 1], points[i]);
        }
    }
    var result = curve.slice(0);
    for (var j = 0; j < 3; j++) {
        curve[1] = {
            x: interpolate(curve[0].x, curve[3].x, 1 / 3),
            y: interpolate(curve[0].y, interpolate(curve[3].y, curve[2].y, 3 / 2), 2 / 3)
        };
        curve[last - 1] = {
            x: interpolate(curve[last].x, curve[last - 3].x, 1 / 3),
            y: interpolate(curve[last].y, interpolate(curve[last - 3].y, curve[last - 2].y, 3 / 2), 2 / 3)
        };
        if (limited) {
            if ((curve[1].y - curve[0].y) * (curve[3].y - curve[2].y) < 0) {
                curve[1] = { x: curve[1].x, y: curve[0].y };
            }
            if ((curve[last - 1].y - curve[last].y) * (curve[last - 3].y - curve[last - 2].y) < 0) {
                curve[last - 1] = { x: curve[last - 1].x, y: curve[last].y };
            }
        }
        for (i = 6; i < result.length; i += 3) {
            c0 = result[i - 5];
            p1 = result[i - 3];
            c3 = result[i - 1];
            if ((p1.x - c0.x) * (c3.x - p1.x) * 1e12 < 1) {
                c1x = interpolate(c0.x, p1.x, 0.5);
                c2x = interpolate(p1.x, c3.x, 0.5);
                c1y = interpolate(c0.y, p1.y, 0.5);
                c2y = interpolate(p1.y, c3.y, 0.5);
            }
            else {
                qt = (p1.x - c0.x) / (c3.x - c0.x);
                qx = (p1.x - c0.x * (1 - qt) * (1 - qt) - c3.x * qt * qt) / (2 * (1 - qt) * qt);
                qy = (p1.y - c0.y * (1 - qt) * (1 - qt) - c3.y * qt * qt) / (2 * (1 - qt) * qt);
                c1x = interpolate(c0.x, qx, qt);
                c2x = interpolate(qx, c3.x, qt);
                c1y = interpolate(c0.y, qy, qt);
                c2y = interpolate(qy, c3.y, qt);
                if (limited) {
                    dx1 = (p1.x - c1x);
                    dx2 = (c2x - p1.x);
                    tan = (c2y - p1.y) / dx2;
                    if ((p1.y - c0.y) * (c3.y - p1.y) <= 0) {
                        tan = 0;
                    }
                    else {
                        if (p1.y > c0.y === c2y > c3.y) {
                            kl = ((c3.y - p1.y) / (c2y - p1.y));
                            dx2 = interpolate(dx2 * kl, dx2, 1 / (1 + Math.abs(kl)));
                            tan = (c3.y - p1.y) / dx2;
                        }
                        if (p1.y > c0.y === c1y < c0.y) {
                            kl = ((p1.y - c0.y) / (p1.y - c1y));
                            dx1 = interpolate(dx1 * kl, dx1, 1 / (1 + Math.abs(kl)));
                            tan = (p1.y - c0.y) / dx1;
                        }
                    }
                    c1x = p1.x - dx1;
                    c2x = p1.x + dx2;
                    c1y = p1.y - tan * dx1;
                    c2y = p1.y + tan * dx2;
                }
            }
            curve[i - 4] = { x: c1x, y: c1y };
            curve[i - 2] = { x: c2x, y: c2y };
        }
        result = curve.slice(0);
    }
    return result;
}
function interpolate(a, b, t) {
    return a + t * (b - a);
}


/***/ }),

/***/ "./src/utils/path/interpolators/step.ts":
/*!**********************************************!*\
  !*** ./src/utils/path/interpolators/step.ts ***!
  \**********************************************/
/*! exports provided: getStepLine, getStepBeforeLine, getStepAfterLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStepLine", function() { return getStepLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStepBeforeLine", function() { return getStepBeforeLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStepAfterLine", function() { return getStepAfterLine; });
function getStepLine(points) {
    var result = [];
    var hasId = (points[0].id !== undefined);
    var hasSize = (points[0].size !== undefined);
    for (var i = 1, p0, p1, m0, m1; i < points.length; i++) {
        p0 = points[i - 1];
        p1 = points[i];
        m0 = {
            x: (p0.x + p1.x) / 2,
            y: p0.y
        };
        m1 = {
            x: (p0.x + p1.x) / 2,
            y: p1.y
        };
        if (hasId) {
            m0.id = p0.id + "-" + p1.id + "-1";
            m1.id = p0.id + "-" + p1.id + "-2";
        }
        if (hasSize) {
            m0.size = p0.size;
            m1.size = p1.size;
        }
        if (i === 1) {
            result.push(p0);
        }
        result.push(m0, m1, p1);
    }
    return result;
}
function getStepBeforeLine(points) {
    var result = [];
    var hasId = (points[0].id !== undefined);
    var hasSize = (points[0].size !== undefined);
    for (var i = 1, p0, p1, m; i < points.length; i++) {
        p0 = points[i - 1];
        p1 = points[i];
        m = {
            x: p0.x,
            y: p1.y
        };
        if (hasId) {
            m.id = p0.id + "-" + p1.id;
        }
        if (hasSize) {
            m.size = p1.size;
        }
        if (i === 1) {
            result.push(p0);
        }
        result.push(m, p1);
    }
    return result;
}
function getStepAfterLine(points) {
    var result = [];
    var hasId = (points[0].id !== undefined);
    var hasSize = (points[0].size !== undefined);
    for (var i = 1, p0, p1, m; i < points.length; i++) {
        p0 = points[i - 1];
        p1 = points[i];
        m = {
            x: p1.x,
            y: p0.y
        };
        if (hasId) {
            m.id = p0.id + "-" + p1.id;
        }
        if (hasSize) {
            m.size = p0.size;
        }
        if (i === 1) {
            result.push(p0);
        }
        result.push(m, p1);
    }
    return result;
}


/***/ }),

/***/ "./src/utils/path/svg/area-path.ts":
/*!*****************************************!*\
  !*** ./src/utils/path/svg/area-path.ts ***!
  \*****************************************/
/*! exports provided: getAreaPolygon, getSmoothAreaPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAreaPolygon", function() { return getAreaPolygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSmoothAreaPath", function() { return getSmoothAreaPath; });
function getAreaPolygon(dirPoints, revPoints) {
    if (dirPoints.length < 2) {
        return '';
    }
    var path = String.prototype.concat.apply('', dirPoints
        .concat(revPoints.slice().reverse())
        .map(function (d, i) { return "" + (i === 0 ? '' : ' ') + d.x + "," + d.y; }));
    return path;
}
function getSmoothAreaPath(dirPoints, revPoints) {
    if (dirPoints.length < 2) {
        return '';
    }
    var getPath = function (points) {
        var items = points.map(function (d, i) {
            var command = ((i - 1) % 3 === 0 ? 'C' : '');
            return "" + command + d.x + "," + d.y + " ";
        });
        return String.prototype.concat.apply('', items);
    };
    var dirPath = getPath(dirPoints);
    var revPath = getPath(revPoints.slice().reverse());
    var path = "M" + dirPath + "L" + revPath + "Z";
    return path;
}


/***/ }),

/***/ "./src/utils/path/svg/brush-line.ts":
/*!******************************************!*\
  !*** ./src/utils/path/svg/brush-line.ts ***!
  \******************************************/
/*! exports provided: getBrushLine, getBrushCurve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBrushLine", function() { return getBrushLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBrushCurve", function() { return getBrushCurve; });
/* harmony import */ var _bezier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bezier */ "./src/utils/path/bezier.ts");

/**
 * Returns line with variable width.
 * @param points Linear points.
 */
function getBrushLine(points) {
    if (points.length === 0) {
        return '';
    }
    if (points.length === 1) {
        return getCirclePath(points[0]);
    }
    var segments = [];
    for (var i = 1; i < points.length; i++) {
        segments.push(getStraightSegmentPath(points[i - 1], points[i]));
    }
    return segments.join(' ');
}
/**
 * Returns curve with variable width.
 * @param points Cubic spline points.
 */
function getBrushCurve(points) {
    if (points.length === 0) {
        return '';
    }
    if (points.length === 1) {
        return getCirclePath(points[0]);
    }
    var segments = [];
    for (var i = 3; i < points.length; i += 3) {
        segments.push(getCurveSegmentPath(points[i - 3], points[i - 2], points[i - 1], points[i]));
    }
    return segments.join(' ');
}
function getCirclePath(pt) {
    var r = (pt.size / 2);
    return [
        "M" + pt.x + "," + (pt.y - r),
        "A" + r + "," + r + " 0 0 1",
        pt.x + "," + (pt.y + r),
        "A" + r + "," + r + " 0 0 1",
        pt.x + "," + (pt.y - r),
        'Z'
    ].join(' ');
}
function getStraightSegmentPath(a, b) {
    var tan = getCirclesTangents(a, b);
    if (!tan) {
        return getCirclePath((a.size > b.size ? a : b));
    }
    return [
        "M" + tan.left[0].x + "," + tan.left[0].y,
        "L" + tan.left[1].x + "," + tan.left[1].y,
        "A" + b.size / 2 + "," + b.size / 2 + " 0 " + Number(a.size < b.size) + " 1",
        tan.right[1].x + "," + tan.right[1].y,
        "L" + tan.right[0].x + "," + tan.right[0].y,
        "A" + a.size / 2 + "," + a.size / 2 + " 0 " + Number(a.size > b.size) + " 1",
        tan.left[0].x + "," + tan.left[0].y,
        'Z'
    ].join(' ');
}
function getCurveSegmentPath(a, ca, cb, b) {
    var ctan = getCirclesCurveTangents(a, ca, cb, b);
    if (!ctan) {
        return getStraightSegmentPath(a, b);
    }
    var qa = rotation(angle(a, ctan.right[0]), angle(a, ctan.left[0]));
    var qb = rotation(angle(b, ctan.right[1]), angle(b, ctan.left[1]));
    return [
        "M" + ctan.left[0].x + "," + ctan.left[0].y,
        "C" + ctan.left[1].x + "," + ctan.left[1].y,
        ctan.left[2].x + "," + ctan.left[2].y,
        ctan.left[3].x + "," + ctan.left[3].y,
        "A" + b.size / 2 + "," + b.size / 2 + " 0 " + Number(qa > Math.PI) + " 1",
        ctan.right[3].x + "," + ctan.right[3].y,
        "C" + ctan.right[2].x + "," + ctan.right[2].y,
        ctan.right[1].x + "," + ctan.right[1].y,
        ctan.right[0].x + "," + ctan.right[0].y,
        "A" + a.size / 2 + "," + a.size / 2 + " 0 " + Number(qb > Math.PI) + " 1",
        ctan.left[0].x + "," + ctan.left[0].y,
        'Z'
    ].join(' ');
}
function angle(a, b) {
    return Math.atan2(b.y - a.y, b.x - a.x);
}
function rotation(a, b) {
    if (b < a) {
        b += 2 * Math.PI;
    }
    return (b - a);
}
function dist() {
    var p = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        p[_i] = arguments[_i];
    }
    var total = 0;
    for (var i = 1; i < p.length; i++) {
        total += Math.sqrt((p[i].x - p[i - 1].x) * (p[i].x - p[i - 1].x) +
            (p[i].y - p[i - 1].y) * (p[i].y - p[i - 1].y));
    }
    return total;
}
function polar(start, d, a) {
    return {
        x: (start.x + d * Math.cos(a)),
        y: (start.y + d * Math.sin(a))
    };
}
function splitCurveSegment(t, p0, c0, c1, p1) {
    var seg = Object(_bezier__WEBPACK_IMPORTED_MODULE_0__["splitCubicSegment"])(t, p0, c0, c1, p1);
    var tl = 1 / (1 +
        dist(seg[3], seg[4], seg[5], seg[6], seg[3]) /
            dist(seg[0], seg[1], seg[2], seg[3], seg[0]));
    seg[3].size = (p0.size * (1 - tl) + p1.size * tl);
    return seg;
}
function approximateQuadCurve(p0, p1, p2) {
    var m = Object(_bezier__WEBPACK_IMPORTED_MODULE_0__["getBezierPoint"])(dist(p0, p1) / dist(p0, p1, p2), p0, p2);
    var c = Object(_bezier__WEBPACK_IMPORTED_MODULE_0__["getBezierPoint"])(2, m, p1);
    return [p0, c, p2];
}
function getCirclesTangents(a, b) {
    var d = dist(a, b);
    if (d === 0 ||
        (d + a.size / 2 <= b.size / 2) ||
        (d + b.size / 2 <= a.size / 2)) {
        return null;
    }
    var ma = angle(a, b);
    var ta = Math.asin((a.size - b.size) / d / 2);
    var aleft = (ma - Math.PI / 2 + ta);
    var aright = (ma + Math.PI / 2 - ta);
    return {
        left: [
            polar(a, a.size / 2, aleft),
            polar(b, b.size / 2, aleft)
        ],
        right: [
            polar(a, a.size / 2, aright),
            polar(b, b.size / 2, aright)
        ]
    };
}
function getCirclesCurveTangents(a, ca, cb, b) {
    var d = dist(a, b);
    if (d === 0 ||
        (d + a.size / 2 <= b.size / 2) ||
        (d + b.size / 2 <= a.size / 2)) {
        return null;
    }
    // Get approximate endings tangents
    // TODO: Use formulas instead of approximate equations.
    var kt = 1 / 12;
    var getTangentsVectors = function (isEnd) {
        var curve = (isEnd ? [b, cb, ca, a] : [a, ca, cb, b]);
        var seg1 = splitCurveSegment.apply(void 0, [2 * kt].concat(curve));
        var seg2 = splitCurveSegment.apply(void 0, [0.5].concat(seg1.slice(0, 4)));
        var m = seg2[3];
        var n = seg2[6];
        var mtan = getCirclesTangents(curve[0], m);
        var ntan = getCirclesTangents(m, n);
        var lpoints = [
            mtan.left[0],
            Object(_bezier__WEBPACK_IMPORTED_MODULE_0__["getBezierPoint"])(0.5, mtan.left[1], ntan.left[0]),
            ntan.left[1]
        ];
        var rpoints = [
            mtan.right[0],
            Object(_bezier__WEBPACK_IMPORTED_MODULE_0__["getBezierPoint"])(0.5, mtan.right[1], ntan.right[0]),
            ntan.right[1]
        ];
        var lq = approximateQuadCurve.apply(void 0, lpoints)[1];
        var rq = approximateQuadCurve.apply(void 0, rpoints)[1];
        var lc = Object(_bezier__WEBPACK_IMPORTED_MODULE_0__["getBezierPoint"])(1 / 3 / kt, mtan.left[0], lq);
        var rc = Object(_bezier__WEBPACK_IMPORTED_MODULE_0__["getBezierPoint"])(1 / 3 / kt, mtan.right[0], rq);
        return {
            left: (isEnd ? [rc, rpoints[0]] : [lpoints[0], lc]),
            right: (isEnd ? [lc, lpoints[0]] : [rpoints[0], rc])
        };
    };
    var tstart = getTangentsVectors(false);
    var tend = getTangentsVectors(true);
    return {
        left: tstart.left.concat(tend.left),
        right: tstart.right.concat(tend.right)
    };
}


/***/ }),

/***/ "./src/utils/path/svg/line.ts":
/*!************************************!*\
  !*** ./src/utils/path/svg/line.ts ***!
  \************************************/
/*! exports provided: getPolyline, getCurve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPolyline", function() { return getPolyline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurve", function() { return getCurve; });
function getPolyline(p) {
    if (p.length < 2) {
        return '';
    }
    var result = '';
    for (var i = 0; i < p.length; i++) {
        result += "" + (i === 0 ? 'M' : ' L') + p[i].x + "," + p[i].y;
    }
    return result;
}
function getCurve(p) {
    if (p.length < 4) {
        return '';
    }
    var result = "M" + p[0].x + "," + p[0].y;
    for (var i = 3; i < p.length; i += 3) {
        result += " C" + p[i - 2].x + "," + p[i - 2].y + " " + p[i - 1].x + "," + p[i - 1].y + " " + p[i].x + "," + p[i].y;
    }
    return result;
}


/***/ }),

/***/ "./src/utils/polyfills.js":
/*!********************************!*\
  !*** ./src/utils/polyfills.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

if (!window.requestAnimationFrame) {
    (function () {
        var lastTime = 0;
        window.requestAnimationFrame = function (fn) {
            var currTime = Date.now();
            var delay = Math.max(0, 16 - currTime + lastTime);
            lastTime = currTime + delay;
            return setTimeout(function () {
                fn.call(null, currTime + delay);
            }, delay);
        };
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
    })();
}
if (!window.requestIdleCallback) {
    window.requestIdleCallback = function (callback, options) {
        return setTimeout(callback, options && options.timeout ? options.timeout : 0);
    };
    window.cancelIdleCallback = function (id) {
        clearTimeout(id);
    };
}
if (!Number.isFinite) {
    Object.defineProperty(Number, 'isFinite', {
        value: function (value) {
            return typeof value === 'number' && isFinite(value);
        },
        configurable: true,
        enumerable: false,
        writable: true
    });
}
if (!Number.isNaN) {
    Object.defineProperty(Number, 'isNaN', {
        value: function (value) {
            return typeof value === 'number' && isNaN(value);
        },
        configurable: true,
        enumerable: false,
        writable: true
    });
}
if (!Number.isInteger) {
    Object.defineProperty(Number, 'isInteger', {
        value: function (value) {
            return typeof value === 'number' &&
                isFinite(value) &&
                Math.floor(value) === value;
        },
        configurable: true,
        enumerable: false,
        writable: true
    });
}
if (!Number.MAX_SAFE_INTEGER) {
    Object.defineProperty(Number, 'MAX_SAFE_INTEGER', {
        value: 9007199254740991,
        configurable: false,
        enumerable: false,
        writable: false
    });
}
if (!Math.sign) {
    Math.sign = function (x) {
        return ((x > 0) - (x < 0)) || Number(x);
    };
}
if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
        value: function (predicate) {
            if (this == null) {
                throw new TypeError('Array.prototype.find called on null or undefined');
            }
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }
            var list = Object(this);
            var length = list.length >>> 0;
            var thisArg = arguments[1];
            var value;
            for (var i = 0; i < length; i++) {
                value = list[i];
                if (predicate.call(thisArg, value, i, list)) {
                    return value;
                }
            }
            return undefined;
        },
        configurable: true,
        enumerable: false,
        writable: true
    });
}
if (!Array.prototype.findIndex) {
    Object.defineProperty(Array.prototype, 'findIndex', {
        value: function (predicate) {
            if (this == null) {
                throw new TypeError('Array.prototype.findIndex called on null or undefined');
            }
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }
            var list = Object(this);
            var length = list.length >>> 0;
            var thisArg = arguments[1];
            var value;
            for (var i = 0; i < length; i++) {
                value = list[i];
                if (predicate.call(thisArg, value, i, list)) {
                    return i;
                }
            }
            return -1;
        },
        configurable: true,
        enumerable: false,
        writable: true
    });
}
if (!Array.from) {
    Object.defineProperty(Array, 'from', {
        value: (function () {
            var toStr = Object.prototype.toString;
            var isCallable = function (fn) {
                return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
            };
            var toInteger = function (value) {
                var number = Number(value);
                if (isNaN(number)) {
                    return 0;
                }
                if (number === 0 || !isFinite(number)) {
                    return number;
                }
                return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
            };
            var maxSafeInteger = Math.pow(2, 53) - 1;
            var toLength = function (value) {
                var len = toInteger(value);
                return Math.min(Math.max(len, 0), maxSafeInteger);
            };
            return function from(arrayLike /*, mapFn, thisArg */) {
                var C = this;
                var items = Object(arrayLike);
                if (arrayLike == null) {
                    throw new TypeError('Array.from requires an array-like object - not null or undefined');
                }
                var mapFn = arguments.length > 1 ? arguments[1] : undefined;
                var T;
                if (typeof mapFn !== 'undefined') {
                    if (!isCallable(mapFn)) {
                        throw new TypeError('Array.from: when provided, the second argument must be a function');
                    }
                    if (arguments.length > 2) {
                        T = arguments[2];
                    }
                }
                var len = toLength(items.length);
                var A = isCallable(C) ? Object(new C(len)) : new Array(len);
                var k = 0;
                var kValue;
                while (k < len) {
                    kValue = items[k];
                    if (mapFn) {
                        A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
                    }
                    else {
                        A[k] = kValue;
                    }
                    k += 1;
                }
                A.length = len;
                return A;
            };
        }()),
        configurable: true,
        enumerable: false,
        writable: true
    });
    // Assume `Array.from` is only missing in IE11, same for Map methods.
    var ieMapSet = Map.prototype.set;
    Object.defineProperty(Map.prototype, 'set', {
        value: function () {
            ieMapSet.apply(this, arguments);
            return this;
        },
        configurable: true,
        enumerable: false,
        writable: true
    });
    Object.defineProperty(Map.prototype, 'values', {
        value: function () {
            var obj = {};
            var i = 0;
            this.forEach(function (v) { return obj[String(i++)] = v; });
            obj.length = i;
            return obj;
        },
        configurable: true,
        enumerable: false,
        writable: true
    });
    Object.defineProperty(Map.prototype, 'entries', {
        value: function () {
            var obj = {};
            var i = 0;
            this.forEach(function (v, k) { return obj[String(i++)] = [k, v]; });
            obj.length = i;
            return obj;
        },
        configurable: true,
        enumerable: false,
        writable: true
    });
}
if (!Object.assign) {
    Object.defineProperty(Object, 'assign', {
        value: function (target) {
            if (target === undefined || target === null) {
                throw new TypeError('Cannot convert undefined or null to object');
            }
            var output = Object(target);
            for (var index = 1; index < arguments.length; index++) {
                var source = arguments[index];
                if (source !== undefined && source !== null) {
                    for (var nextKey in source) {
                        if (source.hasOwnProperty(nextKey)) {
                            output[nextKey] = source[nextKey];
                        }
                    }
                }
            }
            return output;
        },
        configurable: true,
        enumerable: false,
        writable: true
    });
}
if (!Element.prototype.matches) {
    Object.defineProperty(Element.prototype, 'matches', {
        value: Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
        configurable: true,
        enumerable: true,
        writable: true
    });
}


/***/ }),

/***/ "./src/utils/utils-dom.ts":
/*!********************************!*\
  !*** ./src/utils/utils-dom.ts ***!
  \********************************/
/*! exports provided: appendTo, getScrollbarSize, setScrollPadding, getStyle, getStyleAsNum, getContainerSize, getAxisTickLabelSize, getLabelSize, getCharSize, selectOrAppend, selectImmediate, selectAllImmediate, sortChildren, classes, dispatchMouseEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendTo", function() { return appendTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScrollbarSize", function() { return getScrollbarSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setScrollPadding", function() { return setScrollPadding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyleAsNum", function() { return getStyleAsNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContainerSize", function() { return getContainerSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAxisTickLabelSize", function() { return getAxisTickLabelSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLabelSize", function() { return getLabelSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCharSize", function() { return getCharSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectOrAppend", function() { return selectOrAppend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectImmediate", function() { return selectImmediate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllImmediate", function() { return selectAllImmediate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortChildren", function() { return sortChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classes", function() { return classes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatchMouseEvent", function() { return dispatchMouseEvent; });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "d3-selection");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3_selection__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils/utils.ts");
/**
 * Internal method to return CSS value for given element and property
 */

var tempDiv = document.createElement('div');

var scrollbarSizes = new WeakMap();
function appendTo(el, container) {
    var node;
    if (el instanceof Node) {
        node = el;
    }
    else {
        tempDiv.insertAdjacentHTML('afterbegin', el);
        node = tempDiv.childNodes[0];
    }
    container.appendChild(node);
    return node;
}
function getScrollbarSize(container) {
    if (scrollbarSizes.has(container)) {
        return scrollbarSizes.get(container);
    }
    var initialOverflow = container.style.overflow;
    container.style.overflow = 'scroll';
    var size = {
        width: (container.offsetWidth - container.clientWidth),
        height: (container.offsetHeight - container.clientHeight)
    };
    container.style.overflow = initialOverflow;
    scrollbarSizes.set(container, size);
    return size;
}
/**
 * Sets padding as a placeholder for scrollbars.
 * @param el Target element.
 * @param [direction=both] Scrollbar direction ("horizontal", "vertical" or "both").
 */
function setScrollPadding(el, direction) {
    direction = direction || 'both';
    var isBottom = direction === 'horizontal' || direction === 'both';
    var isRight = direction === 'vertical' || direction === 'both';
    var scrollbars = getScrollbarSize(el);
    var initialPaddingRight = isRight ? scrollbars.width + "px" : '0';
    var initialPaddingBottom = isBottom ? scrollbars.height + "px" : '0';
    el.style.overflow = 'hidden';
    el.style.padding = "0 " + initialPaddingRight + " " + initialPaddingBottom + " 0";
    var hasBottomScroll = el.scrollWidth > el.clientWidth;
    var hasRightScroll = el.scrollHeight > el.clientHeight;
    var paddingRight = isRight && !hasRightScroll ? scrollbars.width + "px" : '0';
    var paddingBottom = isBottom && !hasBottomScroll ? scrollbars.height + "px" : '0';
    el.style.padding = "0 " + paddingRight + " " + paddingBottom + " 0";
    // NOTE: Manually set scroll due to overflow:auto Chrome 53 bug
    // https://bugs.chromium.org/p/chromium/issues/detail?id=644450
    el.style.overflow = '';
    el.style.overflowX = hasBottomScroll ? 'scroll' : 'hidden';
    el.style.overflowY = hasRightScroll ? 'scroll' : 'hidden';
    return scrollbars;
}
function getStyle(el, prop) {
    return window.getComputedStyle(el).getPropertyValue(prop);
}
function getStyleAsNum(el, prop) {
    return parseInt(getStyle(el, prop) || '0', 10);
}
function getContainerSize(el) {
    var pl = getStyleAsNum(el, 'padding-left');
    var pr = getStyleAsNum(el, 'padding-right');
    var pb = getStyleAsNum(el, 'padding-bottom');
    var pt = getStyleAsNum(el, 'padding-top');
    var borderWidthT = getStyleAsNum(el, 'border-top-width');
    var borderWidthL = getStyleAsNum(el, 'border-left-width');
    var borderWidthR = getStyleAsNum(el, 'border-right-width');
    var borderWidthB = getStyleAsNum(el, 'border-bottom-width');
    var bw = borderWidthT + borderWidthL + borderWidthR + borderWidthB;
    var rect = el.getBoundingClientRect();
    return {
        width: rect.width - pl - pr - 2 * bw,
        height: rect.height - pb - pt - 2 * bw
    };
}
function getAxisTickLabelSize(text) {
    var div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.visibility = 'hidden';
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.border = '1px solid green';
    div.style.top = '0';
    document.body.appendChild(div);
    div.innerHTML = "<svg class=\"tau-chart__svg\">\n                <g class=\"tau-chart__cell cell\">\n                <g class=\"x axis\">\n                <g class=\"tick\"><text>" + text + "</text></g>\n                </g>\n                </g>\n                </svg>";
    var textNode = div.querySelector('.x.axis .tick text');
    var size = {
        width: 0,
        height: 0
    };
    // Internet Explorer, Firefox 3+, Google Chrome, Opera 9.5+, Safari 4+
    var rect = textNode.getBoundingClientRect();
    size.width = rect.right - rect.left;
    size.height = rect.bottom - rect.top;
    var avgLetterSize = (text.length !== 0) ? (size.width / text.length) : 0;
    size.width = size.width + (1.5 * avgLetterSize);
    document.body.removeChild(div);
    return size;
}
function getLabelSize(text, _a) {
    var fontSize = _a.fontSize, fontFamily = _a.fontFamily, fontWeight = _a.fontWeight;
    var xFontSize = typeof (fontSize) === 'string' ? fontSize : (fontSize + "px");
    var w = 0;
    var h = 0;
    var l = text.length - 1;
    for (var i = 0; i <= l; i++) {
        var char = text.charAt(i);
        var s = getCharSize(char, { fontSize: xFontSize, fontFamily: fontFamily, fontWeight: fontWeight });
        w += s.width;
        h = Math.max(h, s.height);
    }
    return { width: w, height: parseInt(xFontSize) };
}
var getCharSize = _utils__WEBPACK_IMPORTED_MODULE_1__["memoize"](function (char, _a) {
    var fontSize = _a.fontSize, fontFamily = _a.fontFamily, fontWeight = _a.fontWeight;
    var div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.visibility = 'hidden';
    div.style.border = '0px';
    div.style.top = '0';
    div.style.fontSize = fontSize;
    div.style.fontFamily = fontFamily;
    div.style.fontWeight = fontWeight;
    document.body.appendChild(div);
    div.innerHTML = (char === ' ') ? '&nbsp;' : char;
    var size = {
        width: 0,
        height: 0
    };
    // Internet Explorer, Firefox 3+, Google Chrome, Opera 9.5+, Safari 4+
    var rect = div.getBoundingClientRect();
    size.width = rect.right - rect.left;
    size.height = rect.bottom - rect.top;
    document.body.removeChild(div);
    return size;
}, function (char, props) { return char + "_" + JSON.stringify(props); });
function selectOrAppend(_container, selector) {
    var delimitersActions = {
        '.': function (text, el) { return el.classed(text, true); },
        '#': function (text, el) { return el.attr('id', text); }
    };
    var delimiters = Object.keys(delimitersActions).join('');
    if (selector.indexOf(' ') >= 0) {
        throw new Error('Selector should not contain whitespaces.');
    }
    if (delimiters.indexOf(selector[0]) >= 0) {
        throw new Error('Selector must have tag at the beginning.');
    }
    var isElement = (_container instanceof Element);
    var container = isElement ? d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"](_container) : _container;
    var result = function (d3El) { return (isElement ? d3El.node() : d3El); };
    // Search for existing immediate child
    var child = container.selectAll(selector)
        .filter(function () {
        return (this.parentNode === container.node());
    })
        .filter(function (d, i) { return i === 0; });
    if (!child.empty()) {
        return result(child);
    }
    // Create new element
    var element;
    var lastFoundIndex = -1;
    var lastFoundDelimiter = null;
    for (var i = 1, l = selector.length, text; i <= l; i++) {
        if (i == l || delimiters.indexOf(selector[i]) >= 0) {
            text = selector.substring(lastFoundIndex + 1, i);
            if (lastFoundIndex < 0) {
                element = container.append(text);
            }
            else {
                delimitersActions[lastFoundDelimiter].call(null, text, element);
            }
            lastFoundDelimiter = selector[i];
            lastFoundIndex = i;
        }
    }
    return result(element);
}
function selectImmediate(container, selector) {
    return selectAllImmediate(container, selector)[0] || null;
}
function selectAllImmediate(container, selector) {
    var results = [];
    var matches = (Element.prototype.matches ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.webkitMatchesSelector);
    for (var child = container.firstElementChild; Boolean(child); child = child.nextElementSibling) {
        if (matches.call(child, selector)) {
            results.push(child);
        }
    }
    return results;
}
function sortChildren(parent, sorter) {
    if (parent.childElementCount > 0) {
        // Note: move DOM elements with
        // minimal number of iterations
        // and affected nodes to prevent
        // unneccessary repaints.
        // Get from/to index pairs.
        var unsorted = Array.prototype.filter.call(parent.childNodes, function (el) { return el.nodeType === Node.ELEMENT_NODE; });
        var sorted_1 = unsorted.slice().sort(sorter);
        var unsortedIndices_1 = unsorted.reduce(function (map, el, i) {
            map.set(el, i);
            return map;
        }, new Map());
        // Get groups (sequences of elements with unchanged order)
        var currGroup;
        var currDiff;
        var groups_1 = sorted_1.reduce(function (groupsInfo, el, to) {
            var from = unsortedIndices_1.get(el);
            var diff = (to - from);
            if (diff !== currDiff) {
                if (currGroup) {
                    groupsInfo.push(currGroup);
                }
                currDiff = diff;
                currGroup = {
                    from: from,
                    to: to,
                    elements: []
                };
            }
            currGroup.elements.push(el);
            if (to === sorted_1.length - 1) {
                groupsInfo.push(currGroup);
            }
            return groupsInfo;
        }, []);
        var unsortedGroups = groups_1.slice().sort(function (a, b) {
            return (a.from - b.from);
        });
        var unsortedGroupsIndices_1 = unsortedGroups.reduce(function (map, g, i) {
            map.set(g, i);
            return map;
        }, new Map());
        // Get required iterations
        var createIterations = function (forward) {
            var iterations = groups_1
                .map(function (g, i) {
                return {
                    elements: g.elements,
                    from: unsortedGroupsIndices_1.get(g),
                    to: i
                };
            })
                .sort(_utils__WEBPACK_IMPORTED_MODULE_1__["createMultiSorter"]((function (a, b) { return a.elements.length - b.elements.length; }), (forward ? (function (a, b) { return b.to - a.to; }) : (function (a, b) { return a.to - b.to; }))));
            for (var i = 0, j, g, h; i < iterations.length; i++) {
                g = iterations[i];
                if (g.from > g.to) {
                    for (j = i + 1; j < iterations.length; j++) {
                        h = iterations[j];
                        if (h.from >= g.to && h.from < g.from) {
                            h.from++;
                        }
                    }
                }
                if (g.from < g.to) {
                    for (j = i + 1; j < iterations.length; j++) {
                        h = iterations[j];
                        if (h.from > g.from && h.from <= g.to) {
                            h.from--;
                        }
                    }
                }
            }
            return iterations.filter(function (g) { return g.from !== g.to; });
        };
        var forwardIterations = createIterations(true);
        var backwardIterations = createIterations(false);
        var iterations = (forwardIterations.length < backwardIterations.length ?
            forwardIterations :
            backwardIterations);
        // Finally sort DOM nodes
        var mirror_1 = unsortedGroups.map(function (g) { return g.elements; });
        iterations
            .forEach(function (g) {
            var targetGroup = mirror_1.splice(g.from, 1)[0];
            var groupAfter = mirror_1[g.to];
            var siblingAfter = (groupAfter ? groupAfter[0] : null);
            var targetNode;
            if (g.elements.length === 1) {
                targetNode = targetGroup[0];
            }
            else {
                targetNode = document.createDocumentFragment();
                targetGroup.forEach(function (el) {
                    targetNode.appendChild(el);
                });
            }
            parent.insertBefore(targetNode, siblingAfter);
            mirror_1.splice(g.to, 0, targetGroup);
        });
    }
}
/**
 * Generates "class" attribute string.
 */
function classes() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var classes = [];
    args.filter(function (c) { return Boolean(c); })
        .forEach(function (c) {
        if (typeof c === 'string') {
            classes.push(c);
        }
        else if (typeof c === 'object') {
            classes.push.apply(classes, Object.keys(c)
                .filter(function (key) { return Boolean(c[key]); }));
        }
    });
    return (_utils__WEBPACK_IMPORTED_MODULE_1__["unique"](classes)
        .join(' ')
        .trim()
        .replace(/\s{2,}/g, ' '));
}
function dispatchMouseEvent(target, eventName) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var event = document.createEvent('MouseEvents');
    var defaults = [true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null];
    var results = args.concat(defaults.slice(args.length));
    (_a = event).initMouseEvent.apply(_a, [eventName].concat(results));
    target.dispatchEvent(event);
    var _a;
}


/***/ }),

/***/ "./src/utils/utils-draw.ts":
/*!*********************************!*\
  !*** ./src/utils/utils-draw.ts ***!
  \*********************************/
/*! exports provided: translate, rotate, getOrientation, isIntersect, getDeepTransformTranslate, raiseElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrientation", function() { return getOrientation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIntersect", function() { return isIntersect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDeepTransformTranslate", function() { return getDeepTransformTranslate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raiseElements", function() { return raiseElements; });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "d3-selection");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3_selection__WEBPACK_IMPORTED_MODULE_0__);

function translate(left, top) {
    return "translate(" + left + "," + top + ")";
}
function rotate(angle) {
    return "rotate(" + angle + ")";
}
function getOrientation(scaleOrient) {
    return ((['bottom', 'top'].indexOf(scaleOrient.toLowerCase()) >= 0) ? 'h' : 'v');
}
function isIntersect(ax0, ay0, ax1, ay1, bx0, by0, bx1, by1) {
    var s1_x, s1_y, s2_x, s2_y;
    s1_x = ax1 - ax0;
    s1_y = ay1 - ay0;
    s2_x = bx1 - bx0;
    s2_y = by1 - by0;
    var s, t;
    s = (-s1_y * (ax0 - bx0) + s1_x * (ay0 - by0)) / (-s2_x * s1_y + s1_x * s2_y);
    t = (s2_x * (ay0 - by0) - s2_y * (ax0 - bx0)) / (-s2_x * s1_y + s1_x * s2_y);
    return (s >= 0 && s <= 1 && t >= 0 && t <= 1);
}
function getDeepTransformTranslate(node) {
    var parseTransformTranslate = function (transform) {
        var result = { x: 0, y: 0 };
        var ts = transform.indexOf('translate(');
        if (ts >= 0) {
            var te = transform.indexOf(')', ts + 10);
            var translateStr = transform.substring(ts + 10, te);
            var translateParts = translateStr.trim().replace(',', ' ').replace(/\s+/, ' ').split(' ');
            result.x = parseFloat(translateParts[0]);
            if (translateParts.length > 1) {
                result.y = parseFloat(translateParts[1]);
            }
        }
        return result;
    };
    var translate = { x: 0, y: 0 };
    var parent = node;
    var tr, attr;
    while (parent && parent.nodeName.toUpperCase() !== 'SVG') {
        attr = parent.getAttribute('transform');
        if (attr) {
            tr = parseTransformTranslate(attr);
            translate.x += tr.x;
            translate.y += tr.y;
        }
        parent = parent.parentNode;
    }
    return translate;
}
function raiseElements(container, selector, filter) {
    var highlighted = container
        .selectAll(selector)
        .filter(filter);
    if (highlighted.empty()) {
        return;
    }
    var untargeted = d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"](highlighted.node().parentNode)
        .selectAll(selector)
        .filter(function (d) { return !filter(d); }).nodes();
    var lastUntargeted = untargeted[untargeted.length - 1];
    if (lastUntargeted) {
        var untargetedIndex_1 = Array.prototype.indexOf.call(lastUntargeted.parentNode.childNodes, lastUntargeted);
        var nextSibling_1 = lastUntargeted.nextSibling;
        highlighted.each(function () {
            var index = Array.prototype.indexOf.call(this.parentNode.childNodes, this);
            if (index > untargetedIndex_1) {
                return;
            }
            this.parentNode.insertBefore(this, nextSibling_1);
        });
    }
}


/***/ }),

/***/ "./src/utils/utils-grammar.ts":
/*!************************************!*\
  !*** ./src/utils/utils-grammar.ts ***!
  \************************************/
/*! exports provided: syntheticRecordField, isNonSyntheticRecord, useFillGapsRule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syntheticRecordField", function() { return syntheticRecordField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNonSyntheticRecord", function() { return isNonSyntheticRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFillGapsRule", function() { return useFillGapsRule; });
/* harmony import */ var _grammar_registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../grammar-registry */ "./src/grammar-registry.ts");

var syntheticRecordField = 'taucharts_synthetic_record';
function isNonSyntheticRecord(row) {
    return (row[syntheticRecordField] !== true);
}
function useFillGapsRule(config) {
    return function (model) {
        var isStack = config.stack;
        var xPeriod = model.scaleX.period;
        var isYValue = model.scaleY.scaleType === 'linear';
        var isAuto = (!config.guide.x || config.guide.x.fillGaps == null);
        if ((!isAuto && config.guide.x.fillGaps) ||
            (isAuto && (isStack || (xPeriod && isYValue)))) {
            return _grammar_registry__WEBPACK_IMPORTED_MODULE_0__["GrammarRegistry"].get('fillGaps')(model, {
                isStack: isStack,
                xPeriod: xPeriod,
                utc: config.guide.utcTime
            });
        }
        return {};
    };
}


/***/ }),

/***/ "./src/utils/utils-position.ts":
/*!*************************************!*\
  !*** ./src/utils/utils-position.ts ***!
  \*************************************/
/*! exports provided: getClosestPointInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClosestPointInfo", function() { return getClosestPointInfo; });
/**
 * Returns closest point info.
 * If multiple points have the same position,
 * chooses one of points according to angle
 * of vector from point to cursor.
 */
function getClosestPointInfo(cursorX, cursorY, bestMatchItems) {
    var items = bestMatchItems
        .sort(function (a, b) { return (a.distance === b.distance ?
        (a.secondaryDistance - b.secondaryDistance) :
        (a.distance - b.distance)); });
    var largerDistIndex = items.findIndex(function (d) { return ((d.distance !== items[0].distance) ||
        (d.secondaryDistance !== items[0].secondaryDistance)); });
    var sameDistItems = (largerDistIndex < 0 ? items : items.slice(0, largerDistIndex));
    if (sameDistItems.length === 1) {
        return sameDistItems[0];
    }
    var mx = (sameDistItems.reduce(function (sum, item) { return sum + item.x; }, 0) / sameDistItems.length);
    var my = (sameDistItems.reduce(function (sum, item) { return sum + item.y; }, 0) / sameDistItems.length);
    var angle = (Math.atan2(my - cursorY, mx - cursorX) + Math.PI);
    var closest = sameDistItems[Math.round((sameDistItems.length - 1) * angle / 2 / Math.PI)];
    return closest;
}


/***/ }),

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/*! exports provided: traverseJSON, traverseSpec, clone, isDate, isObject, niceZeroBased, niceTimeDomain, generateHash, generateRatioFunction, isSpecRectCoordsOnly, throttleLastEvent, splitEvenly, extRGBColor, extCSSClass, toRadian, normalizeAngle, range, flatten, unique, groupBy, union, intersection, defaults, omit, memoize, createMultiSorter, pick, escape, template, escapeHtml, xml, take, isChartElement, isFacetUnit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traverseJSON", function() { return traverseJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traverseSpec", function() { return traverseSpec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return isDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "niceZeroBased", function() { return niceZeroBased; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "niceTimeDomain", function() { return niceTimeDomain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateHash", function() { return generateHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRatioFunction", function() { return generateRatioFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSpecRectCoordsOnly", function() { return isSpecRectCoordsOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttleLastEvent", function() { return throttleLastEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitEvenly", function() { return splitEvenly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extRGBColor", function() { return extRGBColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extCSSClass", function() { return extCSSClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRadian", function() { return toRadian; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeAngle", function() { return normalizeAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unique", function() { return unique; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return groupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "union", function() { return union; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersection", function() { return intersection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return defaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return omit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return memoize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMultiSorter", function() { return createMultiSorter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return escape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "template", function() { return template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeHtml", function() { return escapeHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xml", function() { return xml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "take", function() { return take; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isChartElement", function() { return isChartElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFacetUnit", function() { return isFacetUnit; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "d3-array");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-scale */ "d3-scale");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3_scale__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elements_element_generic_cartesian__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements/element.generic.cartesian */ "./src/elements/element.generic.cartesian.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var d3 = __assign({}, d3_array__WEBPACK_IMPORTED_MODULE_0__, d3_scale__WEBPACK_IMPORTED_MODULE_1__);
function traverseJSON(srcObject, byProperty, fnSelectorPredicates, funcTransformRules) {
    var rootRef = funcTransformRules(fnSelectorPredicates(srcObject), srcObject);
    (rootRef[byProperty] || []).forEach(function (unit) { return traverseJSON(unit, byProperty, fnSelectorPredicates, funcTransformRules); });
    return rootRef;
}
function traverseSpec(root, enterFn, exitFn, level) {
    if (level === void 0) { level = 0; }
    var shouldContinue = enterFn(root, level);
    if (shouldContinue) {
        (root.units || []).map(function (rect) { return traverseSpec(rect, enterFn, exitFn, level + 1); });
    }
    exitFn(root, level);
}
var deepClone = (function () {
    // clone objects, skip other types.
    function clone(target) {
        if (typeof target == 'object') {
            return JSON.parse(JSON.stringify(target));
        }
        else {
            return target;
        }
    }
    // Deep Copy
    var deepCopiers = [];
    function DeepCopier(config) {
        for (var key in config) {
            this[key] = config[key];
        }
    }
    DeepCopier.prototype = {
        constructor: DeepCopier,
        // determines if this DeepCopier can handle the given object.
        canCopy: function (source) {
            return false;
        },
        // starts the deep copying process by creating the copy object.  You
        // can initialize any properties you want, but you can't call recursively
        // into the DeeopCopyAlgorithm.
        create: function (source) {
        },
        // Completes the deep copy of the source object by populating any properties
        // that need to be recursively deep copied.  You can do this by using the
        // provided deepCopyAlgorithm instance's deepCopy() method.  This will handle
        // cyclic references for objects already deepCopied, including the source object
        // itself.  The "result" passed in is the object returned from create().
        populate: function (deepCopyAlgorithm, source, result) {
        }
    };
    function DeepCopyAlgorithm() {
        // copiedObjects keeps track of objects already copied by this
        // deepCopy operation, so we can correctly handle cyclic references.
        this.copiedObjects = [];
        var thisPass = this;
        this.recursiveDeepCopy = function (source) {
            return thisPass.deepCopy(source);
        };
        this.depth = 0;
    }
    DeepCopyAlgorithm.prototype = {
        constructor: DeepCopyAlgorithm,
        maxDepth: 256,
        // add an object to the cache.  No attempt is made to filter duplicates;
        // we always check getCachedResult() before calling it.
        cacheResult: function (source, result) {
            this.copiedObjects.push([source, result]);
        },
        // Returns the cached copy of a given object, or undefined if it's an
        // object we haven't seen before.
        getCachedResult: function (source) {
            var copiedObjects = this.copiedObjects;
            var length = copiedObjects.length;
            for (var i = 0; i < length; i++) {
                if (copiedObjects[i][0] === source) {
                    return copiedObjects[i][1];
                }
            }
            return undefined;
        },
        // deepCopy handles the simple cases itself: non-objects and object's we've seen before.
        // For complex cases, it first identifies an appropriate DeepCopier, then calls
        // applyDeepCopier() to delegate the details of copying the object to that DeepCopier.
        deepCopy: function (source) {
            // null is a special case: it's the only value of type 'object' without properties.
            if (source === null) {
                return null;
            }
            // All non-objects use value semantics and don't need explict copying.
            if (typeof source !== 'object') {
                return source;
            }
            var cachedResult = this.getCachedResult(source);
            // we've already seen this object during this deep copy operation
            // so can immediately return the result.  This preserves the cyclic
            // reference structure and protects us from infinite recursion.
            if (cachedResult) {
                return cachedResult;
            }
            // objects may need special handling depending on their class.  There is
            // a class of handlers call "DeepCopiers"  that know how to copy certain
            // objects.  There is also a final, generic deep copier that can handle any object.
            for (var i = 0; i < deepCopiers.length; i++) {
                var deepCopier = deepCopiers[i];
                if (deepCopier.canCopy(source)) {
                    return this.applyDeepCopier(deepCopier, source);
                }
            }
            // the generic copier can handle anything, so we should never reach this line.
            throw new Error('no DeepCopier is able to copy ' + source);
        },
        // once we've identified which DeepCopier to use, we need to call it in a very
        // particular order: create, cache, populate.  This is the key to detecting cycles.
        // We also keep track of recursion depth when calling the potentially recursive
        // populate(): this is a fail-fast to prevent an infinite loop from consuming all
        // available memory and crashing or slowing down the browser.
        applyDeepCopier: function (deepCopier, source) {
            // Start by creating a stub object that represents the copy.
            var result = deepCopier.create(source);
            // we now know the deep copy of source should always be result, so if we encounter
            // source again during this deep copy we can immediately use result instead of
            // descending into it recursively.
            this.cacheResult(source, result);
            // only DeepCopier::populate() can recursively deep copy.  So, to keep track
            // of recursion depth, we increment this shared counter before calling it,
            // and decrement it afterwards.
            this.depth++;
            if (this.depth > this.maxDepth) {
                throw new Error('Exceeded max recursion depth in deep copy.');
            }
            // It's now safe to let the deepCopier recursively deep copy its properties.
            deepCopier.populate(this.recursiveDeepCopy, source, result);
            this.depth--;
            return result;
        }
    };
    // entry point for deep copy.
    // source is the object to be deep copied.
    // maxDepth is an optional recursion limit. Defaults to 256.
    function deepCopy(source, maxDepth) {
        var deepCopyAlgorithm = new DeepCopyAlgorithm();
        if (maxDepth) {
            deepCopyAlgorithm.maxDepth = maxDepth;
        }
        return deepCopyAlgorithm.deepCopy(source);
    }
    // publicly expose the DeepCopier class.
    deepCopy.DeepCopier = DeepCopier;
    // publicly expose the list of deepCopiers.
    deepCopy.deepCopiers = deepCopiers;
    // make deepCopy() extensible by allowing others to
    // register their own custom DeepCopiers.
    deepCopy.register = function (deepCopier) {
        if (!(deepCopier instanceof DeepCopier)) {
            deepCopier = new DeepCopier(deepCopier);
        }
        deepCopiers.unshift(deepCopier);
    };
    // Generic Object copier
    // the ultimate fallback DeepCopier, which tries to handle the generic case.  This
    // should work for base Objects and many user-defined classes.
    deepCopy.register({
        canCopy: function () {
            return true;
        },
        create: function (source) {
            if (source instanceof source.constructor) {
                return clone(source.constructor.prototype);
            }
            else {
                return {};
            }
        },
        populate: function (deepCopy, source, result) {
            for (var key in source) {
                if (source.hasOwnProperty(key)) {
                    result[key] = deepCopy(source[key]);
                }
            }
            return result;
        }
    });
    // Array copier
    deepCopy.register({
        canCopy: function (source) {
            return (source instanceof Array);
        },
        create: function (source) {
            return new source.constructor();
        },
        populate: function (deepCopy, source, result) {
            for (var i = 0; i < source.length; i++) {
                result.push(deepCopy(source[i]));
            }
            return result;
        }
    });
    // Date copier
    deepCopy.register({
        canCopy: function (source) {
            return (source instanceof Date);
        },
        create: function (source) {
            return new Date(source);
        }
    });
    return deepCopy;
})();
var testColorCode = (function (x) { return (/^(#|rgb\(|rgba\()/.test(x)); });
// TODO Remove this configs and its associated methods
// which are just for templating in some plugins
var noMatch = /(.)^/;
var map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&#x27;',
    '`': '&#x60;'
};
var escapes = {
    '\'': '\'',
    '\\': '\\',
    '\r': 'r',
    '\n': 'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
};
var escaper = /\\|'|\r|\n|\u2028|\u2029/g;
var source = '(?:' + Object.keys(map).join('|') + ')';
var testRegexp = RegExp(source);
var replaceRegexp = RegExp(source, 'g');
var templateSettings = {
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
    escape: /<%-([\s\S]+?)%>/g
};
function clone(obj) {
    return deepClone(obj);
}
function isDate(obj) {
    return obj instanceof Date && !isNaN(Number(obj));
}
function isObject(obj) {
    return obj != null && typeof obj === 'object';
}
function niceZeroBased(domain) {
    var m = 10;
    var low = parseFloat(Math.min.apply(Math, domain).toFixed(15));
    var top = parseFloat(Math.max.apply(Math, domain).toFixed(15));
    if (low === top) {
        var k = (top >= 0) ? -1 : 1;
        var d = (top || 1);
        top = top - k * d / m;
    }
    // include 0 by default
    low = Math.min(0, low);
    top = Math.max(0, top);
    var extent = [low, top];
    var span = extent[1] - extent[0];
    var step = Math.pow(10, Math.floor(Math.log(span / m) / Math.LN10));
    var err = m / span * step;
    var correction = [
        [0.15, 10],
        [0.35, 5],
        [0.75, 2],
        [1.00, 1],
        [2.00, 1]
    ];
    var i = -1;
    /*eslint-disable */
    while (err > correction[++i][0]) {
    } // jscs:ignore disallowEmptyBlocks
    /*eslint-enable */
    step *= correction[i][1];
    extent[0] = Math.floor(extent[0] / step) * step;
    extent[1] = Math.ceil(extent[1] / step) * step;
    var deltaLow = low - extent[0];
    var deltaTop = extent[1] - top;
    var limit = (step / 2);
    if (low < 0) {
        var koeffLow = (deltaLow >= limit) ? -deltaLow : 0;
        extent[0] = (extent[0] - koeffLow);
    }
    if (top > 0) {
        var koeffTop = (deltaTop >= limit) ? -deltaTop : 0;
        extent[1] = extent[1] + koeffTop;
    }
    return [
        parseFloat(extent[0].toFixed(15)),
        parseFloat(extent[1].toFixed(15))
    ];
}
function niceTimeDomain(domain, niceIntervalFn, _a) {
    var utc = (_a === void 0 ? { utc: false } : _a).utc;
    var _b = d3.extent(domain), low = _b[0], top = _b[1];
    var span = (+top - +low);
    var d3TimeScale = (utc ? d3.scaleUtc : d3.scaleTime);
    if (span === 0) {
        var oneDay = 24 * 60 * 60 * 1000;
        low = new Date(low.getTime() - oneDay);
        top = new Date(top.getTime() + oneDay);
        return d3TimeScale().domain([low, top]).nice(niceIntervalFn).domain();
    }
    var niceScale = d3TimeScale().domain([low, top]).nice(niceIntervalFn);
    if (niceIntervalFn) {
        return niceScale.domain();
    }
    var _c = d3TimeScale().domain([low, top]).nice(niceIntervalFn).domain(), niceLow = _c[0], niceTop = _c[1];
    var ticks = niceScale.ticks();
    var last = ticks.length - 1;
    if ((+low - +niceLow) / (+ticks[1] - +niceLow) < 0.5) {
        low = niceLow;
    }
    if ((+niceTop - +top) / (+niceTop - +ticks[last - 1]) < 0.5) {
        top = niceTop;
    }
    return [low, top];
}
var hashGen = 0;
var hashMap = {};
function generateHash(str) {
    var r = btoa(encodeURIComponent(str)).replace(/=/g, '_');
    if (!hashMap.hasOwnProperty(r)) {
        hashMap[r] = ("H" + ++hashGen);
    }
    return hashMap[r];
}
function generateRatioFunction(dimPropName, paramsList, chartInstanceRef) {
    var unify = function (v) { return isDate(v) ? v.getTime() : v; };
    var dataNewSnap = 0;
    var dataPrevRef = null;
    var xHash = memoize(function (data, keys) {
        return unique(data.map(function (row) { return (keys.reduce(function (r, k) { return (r.concat(unify(row[k]))); }, [])); }), function (t) { return JSON.stringify(t); })
            .reduce(function (memo, t) {
            var k = t[0];
            memo[k] = memo[k] || 0;
            memo[k] += 1;
            return memo;
        }, {});
    }, function (data, keys) {
        var seed = (dataPrevRef === data) ? dataNewSnap : (++dataNewSnap);
        dataPrevRef = data;
        return keys.join('') + "-" + seed;
    });
    return function (key, size, varSet) {
        var facetSize = varSet.length;
        var chartSpec = chartInstanceRef.getSpec();
        var data = chartSpec.sources['/'].data;
        var level2Guide = chartSpec.unit.units[0].guide || {};
        level2Guide.padding = level2Guide.padding || { l: 0, r: 0, t: 0, b: 0 };
        var pad = 0;
        if (dimPropName === 'x') {
            pad = level2Guide.padding.l + level2Guide.padding.r;
        }
        else if (dimPropName === 'y') {
            pad = level2Guide.padding.t + level2Guide.padding.b;
        }
        var xTotal = function (keys) {
            var arr = xHash(data, keys);
            return Object.keys(arr).reduce(function (sum, k) { return (sum + arr[k]); }, 0);
        };
        var xPart = (function (keys, k) { return (xHash(data, keys)[k]); });
        var totalItems = xTotal(paramsList);
        var tickPxSize = (size - (facetSize * pad)) / totalItems;
        var countOfTicksInTheFacet = xPart(paramsList, key);
        return (countOfTicksInTheFacet * tickPxSize + pad) / size;
    };
}
function isSpecRectCoordsOnly(root) {
    var isApplicable = true;
    try {
        traverseSpec((root), function (unit) {
            if ((unit.type.indexOf('COORDS.') === 0) && (unit.type !== 'COORDS.RECT')) {
                throw new Error('Not applicable');
            }
        }, function (unit) { return (unit); });
    }
    catch (e) {
        if (e.message === 'Not applicable') {
            isApplicable = false;
        }
    }
    return isApplicable;
}
function throttleLastEvent(last, eventType, handler, limitFromPrev) {
    if (limitFromPrev === void 0) { limitFromPrev = 0; }
    if (limitFromPrev === 'requestAnimationFrame') {
        var frameRequested = false;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!frameRequested) {
                requestAnimationFrame(function () {
                    frameRequested = false;
                });
                // NOTE: Have to call sync cause
                // D3 event info disappears later.
                handler.apply(this, args);
                frameRequested = true;
            }
            last.e = eventType;
            last.ts = Date.now();
        };
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var curr = { e: eventType, ts: Date.now() };
        var diff = ((last.e && (last.e === curr.e)) ? (curr.ts - last.ts) : (limitFromPrev));
        if (diff >= limitFromPrev) {
            handler.apply(this, args);
        }
        last.e = curr.e;
        last.ts = curr.ts;
    };
}
function splitEvenly(domain, parts) {
    var min = domain[0];
    var max = domain[1];
    var segment = ((max - min) / (parts - 1));
    var chunks = parts >= 2 ?
        range(parts - 2).map(function (n) { return (min + segment * (n + 1)); })
        : [];
    return [min].concat(chunks, [max]);
}
function extRGBColor(x) {
    return (testColorCode(x) ? x : '');
}
function extCSSClass(x) {
    return (testColorCode(x) ? '' : x);
}
function toRadian(degree) {
    return (degree / 180) * Math.PI;
}
function normalizeAngle(angle) {
    if (Math.abs(angle) >= 360) {
        angle = (angle % 360);
    }
    if (angle < 0) {
        angle = (360 + angle);
    }
    return angle;
}
function range(start, end) {
    if (arguments.length === 1) {
        end = start;
        start = 0;
    }
    var arr = [];
    for (var i = start; i < end; i++) {
        arr.push(i);
    }
    return arr;
}
function flatten(array) {
    if (!Array.isArray(array)) {
        return array;
    }
    return [].concat.apply([], array.map(function (x) { return flatten(x); }));
}
function unique(array, func) {
    var hash = {};
    var result = [];
    var len = array.length;
    var hasher = func || (function (x) { return String(x); });
    for (var i = 0; i < len; ++i) {
        var item = array[i];
        var key = hasher(item);
        if (!hash.hasOwnProperty(key)) {
            hash[key] = true;
            result.push(item);
        }
    }
    return result;
}
function groupBy(array, func) {
    return array.reduce(function (obj, v) {
        var group = func(v);
        obj[group] = obj[group] || [];
        obj[group].push(v);
        return obj;
    }, {});
}
function union(arr1, arr2) {
    return unique(arr1.concat(arr2));
}
function intersection(arr1, arr2) {
    return arr1.filter(function (x) { return arr2.indexOf(x) !== -1; });
}
function defaults(obj) {
    var defaultObjs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        defaultObjs[_i - 1] = arguments[_i];
    }
    var length = defaultObjs.length;
    if (length === 0 || !obj) {
        return obj;
    }
    for (var index = 0; index < length; index++) {
        var source = defaultObjs[index], keys = isObject(source) ? Object.keys(source) : [], l = keys.length;
        for (var i = 0; i < l; i++) {
            var key = keys[i];
            if (obj[key] === undefined) {
                obj[key] = source[key];
            }
        }
    }
    return obj;
}
function omit(obj) {
    var props = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        props[_i - 1] = arguments[_i];
    }
    var newObj = Object.assign({}, obj);
    props.forEach(function (prop) {
        delete newObj[prop];
    });
    return newObj;
}
function memoize(func, hasher) {
    var memoize = function (key) {
        var cache = memoize.cache;
        var address = String(hasher ? hasher.apply(this, arguments) : key);
        if (!cache.hasOwnProperty(address)) {
            cache[address] = func.apply(this, arguments);
        }
        return cache[address];
    };
    memoize.cache = {};
    return memoize;
}
function createMultiSorter() {
    var sorters = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sorters[_i] = arguments[_i];
    }
    return function (a, b) {
        var result = 0;
        sorters.every(function (s) {
            result = s(a, b);
            return (result === 0);
        });
        return result;
    };
}
// TODO Remove this methods and its associated configs
// which are just for templating in some plugins
function pick(object) {
    var props = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        props[_i - 1] = arguments[_i];
    }
    var result = {};
    if (object == null) {
        return result;
    }
    return props.reduce(function (result, prop) {
        var value = object[prop];
        if (value) {
            result[prop] = value;
        }
        return result;
    }, {});
}
function escape(string) {
    string = string == null ? '' : String(string);
    return testRegexp.test(string) ? string.replace(replaceRegexp, function (match) { return map[match]; }) : string;
}
function template(text, settings, oldSettings) {
    if (!settings && oldSettings) {
        settings = oldSettings;
    }
    settings = defaults({}, settings, templateSettings);
    var matcher = RegExp([
        (settings.escape || noMatch).source,
        (settings.interpolate || noMatch).source,
        (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');
    var index = 0;
    var source = '__p+=\'';
    text.replace(matcher, function (match, escape, interpolate, evaluate, offset) {
        source += text.slice(index, offset).replace(escaper, function (match) { return '\\' + escapes[match]; });
        index = offset + match.length;
        if (escape) {
            source += '\'+\n((__t=(' + escape + '))==null?\'\':utils.escape(__t))+\n\'';
        }
        else if (interpolate) {
            source += '\'+\n((__t=(' + interpolate + '))==null?\'\':__t)+\n\'';
        }
        else if (evaluate) {
            source += '\';\n' + evaluate + '\n__p+=\'';
        }
        return match;
    });
    source += '\';\n';
    if (!settings.variable) {
        source = 'with(obj||{}){\n' + source + '}\n';
    }
    source = 'var __t,__p=\'\',__j=Array.prototype.join,' +
        'print=function(){__p+=__j.call(arguments,\'\');};\n' +
        source + 'return __p;\n';
    try {
        var render = new Function(settings.variable || 'obj', source);
    }
    catch (e) {
        e.source = source;
        throw e;
    }
    var template = function (data) {
        return render.call(this, data);
    };
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';
    return template;
}
function escapeHtml(x) {
    return String(x)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
var XML_INDENT = '  ';
var XML_ATTR_WRAP = 32;
var VOID_TAGS = [
    'img',
    'input',
    'br',
    'embed',
    'link',
    'meta',
    'area',
    'base',
    'basefont',
    'bgsound',
    'col',
    'command',
    'frame',
    'hr',
    'image',
    'isindex',
    'keygen',
    'menuitem',
    'nextid',
    'param',
    'source',
    'track',
    'wbr',
    'circle',
    'ellipse',
    'line',
    'path',
    'polygon',
    'rect'
].reduce(function (map, tag) { return (map[tag] = true, map); }, {});
function xml(tag) {
    var childrenArgIndex = 2;
    var attrs = arguments[1];
    if (typeof arguments[1] !== 'object' || Array.isArray(arguments[1])) {
        childrenArgIndex = 1;
        attrs = {};
    }
    var children = flatten(Array.prototype.slice.call(arguments, childrenArgIndex));
    var hasSingleTextChild = (children.length === 1 && children[0].trim()[0] !== '<');
    var isVoidTag = VOID_TAGS[tag];
    if (isVoidTag && children.length > 0) {
        throw new Error("Tag \"" + tag + "\" is void but content is assigned to it");
    }
    var tagBeginning = "<" + tag;
    var attrsString = Object.keys(attrs).map(function (key) {
        return " " + key + "=\"" + attrs[key] + "\"";
    }).join('');
    if (attrsString.length > XML_ATTR_WRAP) {
        attrsString = Object.keys(attrs).map(function (key) {
            return "\n" + XML_INDENT + key + "=\"" + attrs[key] + "\"";
        }).join('');
    }
    var childrenString = (hasSingleTextChild ?
        children[0] :
        ('\n' + children
            .map(function (c) {
            var content = String(c);
            return content
                .split('\n')
                .map(function (line) { return "" + XML_INDENT + line; })
                .join('\n');
        })
            .join('\n') + '\n'));
    var tagEnding = (isVoidTag ?
        '/>' :
        (">" + childrenString + "</" + tag + ">"));
    return "" + tagBeginning + attrsString + tagEnding;
}
function take(src) {
    var result = src;
    var obj = {
        then: function (fn) {
            result = fn(result);
            return obj;
        },
        result: function () {
            return result;
        },
    };
    return obj;
}

var chartElements = [
    _elements_element_generic_cartesian__WEBPACK_IMPORTED_MODULE_2__["GenericCartesian"]
];
function isChartElement(element) {
    return chartElements.some(function (E) { return element instanceof E; });
}
function isFacetUnit(unit) {
    return (unit.units || []).some(function (c) { return c.hasOwnProperty('units'); });
}


/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./src/tau.charts.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dorian/Code/github/tauCharts/src/tau.charts.ts */"./src/tau.charts.ts");


/***/ }),

/***/ "d3-array":
/*!********************************************************************************************!*\
  !*** external {"commonjs":"d3-array","amd":"d3-array","commonjs2":"d3-array","root":"d3"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_d3_array__;

/***/ }),

/***/ "d3-axis":
/*!*****************************************************************************************!*\
  !*** external {"commonjs":"d3-axis","amd":"d3-axis","commonjs2":"d3-axis","root":"d3"} ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_d3_axis__;

/***/ }),

/***/ "d3-brush":
/*!********************************************************************************************!*\
  !*** external {"commonjs":"d3-brush","amd":"d3-brush","commonjs2":"d3-brush","root":"d3"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_d3_brush__;

/***/ }),

/***/ "d3-color":
/*!********************************************************************************************!*\
  !*** external {"commonjs":"d3-color","amd":"d3-color","commonjs2":"d3-color","root":"d3"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_d3_color__;

/***/ }),

/***/ "d3-format":
/*!***********************************************************************************************!*\
  !*** external {"commonjs":"d3-format","amd":"d3-format","commonjs2":"d3-format","root":"d3"} ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_d3_format__;

/***/ }),

/***/ "d3-geo":
/*!**************************************************************************************!*\
  !*** external {"commonjs":"d3-geo","amd":"d3-geo","commonjs2":"d3-geo","root":"d3"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_d3_geo__;

/***/ }),

/***/ "d3-quadtree":
/*!*****************************************************************************************************!*\
  !*** external {"commonjs":"d3-quadtree","amd":"d3-quadtree","commonjs2":"d3-quadtree","root":"d3"} ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_d3_quadtree__;

/***/ }),

/***/ "d3-request":
/*!**************************************************************************************************!*\
  !*** external {"commonjs":"d3-request","amd":"d3-request","commonjs2":"d3-request","root":"d3"} ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_d3_request__;

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

/***/ "d3-shape":
/*!********************************************************************************************!*\
  !*** external {"commonjs":"d3-shape","amd":"d3-shape","commonjs2":"d3-shape","root":"d3"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_d3_shape__;

/***/ }),

/***/ "d3-time":
/*!*****************************************************************************************!*\
  !*** external {"commonjs":"d3-time","amd":"d3-time","commonjs2":"d3-time","root":"d3"} ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_d3_time__;

/***/ }),

/***/ "d3-time-format":
/*!**************************************************************************************************************!*\
  !*** external {"commonjs":"d3-time-format","amd":"d3-time-format","commonjs2":"d3-time-format","root":"d3"} ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_d3_time_format__;

/***/ }),

/***/ "d3-transition":
/*!***********************************************************************************************************!*\
  !*** external {"commonjs":"d3-transition","amd":"d3-transition","commonjs2":"d3-transition","root":"d3"} ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_d3_transition__;

/***/ }),

/***/ "topojson-client":
/*!***********************************************************************************************************************!*\
  !*** external {"commonjs":"topojson-client","amd":"topojson-client","commonjs2":"topojson-client","root":"topojson"} ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_topojson_client__;

/***/ })

/******/ });
});