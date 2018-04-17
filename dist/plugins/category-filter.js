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
/******/ 	return __webpack_require__(__webpack_require__.s = "./plugins/category-filter.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./plugins/category-filter.ts":
/*!************************************!*\
  !*** ./plugins/category-filter.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CategoryFilterPlugin; });
/* harmony import */ var taucharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! taucharts */ "taucharts");
/* harmony import */ var taucharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(taucharts__WEBPACK_IMPORTED_MODULE_0__);

var utils = taucharts__WEBPACK_IMPORTED_MODULE_0___default.a.api.utils;
var pluginsSDK = taucharts__WEBPACK_IMPORTED_MODULE_0___default.a.api.pluginsSDK;
var CLS = 'tau-chart__category-filter';
var CLS_VALUE = CLS + "__value";
var CLS_VALUE_CHECKED = CLS_VALUE + "_checked";
var CLS_VALUE_TOGGLE = CLS_VALUE + "__toggle";
var joinLines = function (lines) { return lines.join('\n'); };
var rootTemplate = function (_a) {
    var categories = _a.categories;
    return "\n    <div class=\"" + CLS + "\">\n        " + joinLines(categories.map(function (category) { return categoryTemplate(category); })) + "\n    </div>\n";
};
var categoryTemplate = function (_a) {
    var label = _a.label, values = _a.values;
    return "\n    <div class=\"" + CLS + "__category\">\n        <div class=\"" + CLS + "__category__label\">" + label + "</div>\n        <div class=\"" + CLS + "__category__values\">\n            " + joinLines(values.map(function (v) { return valueTemplate(v); })) + "\n    </div>\n\n";
};
var valueTemplate = function (_a) {
    var key = _a.key, label = _a.label, checked = _a.checked;
    return "\n    <div class=\"" + CLS_VALUE + (checked ? " " + CLS_VALUE_CHECKED : '') + "\" data-key=\"" + key + "\">\n        " + toggleIconTemplate() + "\n        <span class=\"" + CLS_VALUE + "__label\">" + label + "</span>\n    </div>\n";
};
var toggleIconTemplate = function () { return [
    "<span class=\"" + CLS_VALUE_TOGGLE + "\">",
    "<span class=\"" + CLS_VALUE_TOGGLE + "__icon\"></span>",
    '</span>'
].join(''); };
var createElement = function (html) {
    var el = document.createElement('div');
    el.innerHTML = html;
    return el.firstElementChild;
};
var delegateEvent = function (element, eventName, selector, callback) {
    element.addEventListener(eventName, function (e) {
        var target = e.target;
        while (target !== e.currentTarget && target !== null) {
            if (target.matches(selector)) {
                callback(e, target);
            }
            target = target.parentNode;
        }
    });
};
var createRowPredicate = function (dim, value) {
    var isEmpty = function (x) { return x == null || x === ''; };
    var stringify = function (x) { return JSON.stringify(isEmpty(x) ? null : x); };
    var v = stringify(value);
    return function (row) {
        var d = row[dim];
        var r = stringify(d);
        return (v === r);
    };
};
var CategoryFilter = /** @class */ (function () {
    function CategoryFilter(settings) {
        this.settings = utils.defaults(settings || {}, {
            formatters: {},
            fields: null,
            skipColorDim: true,
        });
        this._filters = {};
        this.onRender = this._createRenderHandler();
    }
    CategoryFilter.prototype.init = function (chart) {
        var _this = this;
        this._chart = chart;
        var filterScales = function (predicate) {
            var scales = chart.getSpec().scales;
            return Object.keys(scales)
                .map(function (name) {
                var config = scales[name];
                return { name: name, config: config };
            })
                .filter(predicate);
        };
        var categoryScales = filterScales(function (_a) {
            var config = _a.config, name = _a.name;
            return (config.type === 'ordinal' && config.dim);
        });
        var fields = utils.unique(categoryScales.map(function (_a) {
            var config = _a.config;
            return config.dim;
        }));
        if (this.settings.fields) {
            fields = fields.filter(function (f) { return _this.settings.fields.indexOf(f) >= 0; });
        }
        if (this.settings.skipColorDim) {
            var colorDims_1 = filterScales(function (_a) {
                var config = _a.config, name = _a.name;
                return (config.type === 'color' && config.dim);
            }).map(function (_a) {
                var config = _a.config;
                return config.dim;
            });
            fields = fields.filter(function (dim) {
                return colorDims_1.indexOf(dim) < 0;
            });
        }
        categoryScales = categoryScales.filter(function (scale) {
            return fields.indexOf(scale.config.dim) >= 0;
        });
        this._categoryScales = categoryScales;
        this._render();
    };
    CategoryFilter.prototype.destroy = function () {
        var filters = this._filters;
        var chart = this._chart;
        Object.keys(filters)
            .forEach(function (id) { return chart.removeFilter(filters[id]); });
        var remove = function (node) { return node && node.parentElement && node.parentElement.removeChild(node); };
        remove(this._node);
    };
    CategoryFilter.prototype._createRenderHandler = function () {
        return function () {
            if (this._lastClickedScrollInfo) {
                var key = this._lastClickedScrollInfo.key;
                var el = this._node.querySelector("[data-key=\"" + key + "\"]");
                if (el) {
                    var top = this._lastClickedScrollInfo.top;
                    var elTop = el.getBoundingClientRect().top;
                    var container = this._getScrollContainer();
                    var boxTop = container.getBoundingClientRect().top;
                    container.scrollTop = (container.scrollTop - top - boxTop + elTop);
                }
                this._lastClickedScrollInfo = null;
            }
        };
    };
    CategoryFilter.prototype._getContent = function (categories) {
        return rootTemplate({ categories: categories });
    };
    CategoryFilter.prototype._getCategoriesInfo = function () {
        var _this = this;
        var scales = this._categoryScales.map(function (_a) {
            var name = _a.name;
            return _this._chart.getScaleInfo(name);
        });
        var categories = scales.map(function (scale) {
            var dim = scale.dim;
            var label = _this._getFieldLabel(dim);
            var format = _this._getFieldFormat(dim);
            var dataSource = _this._chart.getDataSources({ excludeFilter: ['category-filter'] });
            var domain = utils.unique(dataSource[scale.source].data.map(function (d) { return d[dim]; }));
            var values = domain.map(function (value) {
                var label = format(value);
                var key = _this._getFilterKey(dim, value);
                var checked = !_this._filters[key];
                return { label: label, checked: checked, key: key, value: value };
            });
            return { dim: dim, label: label, values: values };
        });
        return categories;
    };
    CategoryFilter.prototype._render = function () {
        this._clear();
        this._formatters = pluginsSDK.getFieldFormatters(this._chart.getSpec(), this.settings.formatters);
        var categories = this._getCategoriesInfo();
        var content = this._getContent(categories);
        var node = createElement(content);
        this._node = node;
        this._chart.insertToRightSidebar(node);
        this._subscribeToEvents();
        this._filterKeys = categories.reduce(function (map, category) {
            var dim = category.dim;
            category.values.forEach(function (_a) {
                var key = _a.key, value = _a.value;
                map[key] = { dim: dim, value: value };
            });
            return map;
        }, {});
    };
    CategoryFilter.prototype._subscribeToEvents = function () {
        var _this = this;
        var node = this._node;
        delegateEvent(node, 'click', "." + CLS_VALUE, function (e, target) {
            var key = target.getAttribute('data-key');
            var toggle = e.target.matches("." + CLS_VALUE_TOGGLE);
            _this._toggleCategory(key, toggle ? 'toggle' : 'focus');
        });
        delegateEvent(node, 'mouseover', "." + CLS_VALUE, function (e, target) {
            var key = target.getAttribute('data-key');
            _this._toggleHighlight(key, true);
        });
        delegateEvent(node, 'mouseout', "." + CLS_VALUE, function (e, target) {
            var key = target.getAttribute('data-key');
            _this._toggleHighlight(key, false);
        });
    };
    CategoryFilter.prototype._isFilteredOut = function (key) {
        return (key in this._filters);
    };
    CategoryFilter.prototype._toggleCategory = function (key, type) {
        var _this = this;
        var nodes = Array.from(this._node.querySelectorAll("." + CLS_VALUE))
            .reduce(function (map, node) {
            var k = node.getAttribute('data-key');
            map[k] = node;
            return map;
        }, {});
        var items = Object.keys(this._filterKeys)
            .map(function (k) {
            var _a = _this._filterKeys[k], dim = _a.dim, value = _a.value;
            return {
                node: nodes[k],
                key: k,
                dim: dim,
                value: value,
                isChecked: !_this._isFilteredOut(k)
            };
        });
        var itemsMap = items
            .reduce(function (map, item) {
            map[item.key] = item;
            return map;
        }, {});
        var target = itemsMap[key];
        var dimItems = items.filter(function (item) { return item.dim === target.dim; });
        var toggleNode = function (node, checked) {
            if (checked) {
                node.classList.add(CLS_VALUE_CHECKED);
            }
            else {
                node.classList.remove(CLS_VALUE_CHECKED);
            }
        };
        switch (type) {
            case 'toggle': {
                if (target.isChecked) {
                    this._addFilter(key);
                    toggleNode(target.node, false);
                }
                else {
                    this._removeFilter(key);
                    toggleNode(target.node, true);
                }
                break;
            }
            case 'focus': {
                var allOthersAreFilteredOut = (target.isChecked && dimItems.every(function (item) {
                    return (item === target || !item.isChecked);
                }));
                if (allOthersAreFilteredOut) {
                    dimItems.forEach(function (item) {
                        if (!item.isChecked) {
                            toggleNode(item.node, true);
                            _this._removeFilter(item.key);
                        }
                    });
                }
                else {
                    dimItems.forEach(function (item) {
                        if (item !== target && item.isChecked) {
                            toggleNode(item.node, false);
                            _this._addFilter(item.key);
                        }
                    });
                    if (!target.isChecked) {
                        toggleNode(target.node, true);
                        this._removeFilter(target.key);
                    }
                }
                break;
            }
        }
        this._lastClickedScrollInfo = {
            key: key,
            top: (target.node.getBoundingClientRect().top -
                this._getScrollContainer().getBoundingClientRect().top)
        };
        this._chart.refresh();
    };
    CategoryFilter.prototype._toggleHighlight = function (key, highlight) {
        if (this._isFilteredOut(key)) {
            return;
        }
        var _a = this._filterKeys[key], dim = _a.dim, value = _a.value;
        var matches = (highlight ?
            createRowPredicate(dim, value) :
            (function (row) { return null; }));
        this._chart
            .select(function (unit) { return true; })
            .forEach(function (unit) { return unit.fire('highlight', matches); });
    };
    CategoryFilter.prototype._clear = function () {
        var node = this._node;
        if (node && node.parentElement) {
            node.parentElement.removeChild(node);
        }
    };
    CategoryFilter.prototype._getScrollContainer = function () {
        return this._node.parentElement.parentElement;
    };
    CategoryFilter.prototype._getFilterKey = function (dim, value) {
        return dim + "__" + value;
    };
    CategoryFilter.prototype._addFilter = function (key) {
        var _a = this._filterKeys[key], dim = _a.dim, value = _a.value;
        var matches = createRowPredicate(dim, value);
        this._filters[key] = this._chart.addFilter({
            tag: 'category-filter',
            predicate: function (row) {
                return !matches(row);
            }
        });
    };
    CategoryFilter.prototype._removeFilter = function (key) {
        var filterId = this._filters[key];
        delete this._filters[key];
        this._chart.removeFilter(filterId);
    };
    CategoryFilter.prototype._getFieldLabel = function (k) {
        return (this._formatters[k] ? this._formatters[k].label : k);
    };
    CategoryFilter.prototype._getFieldFormat = function (k) {
        return (this._formatters[k] ? this._formatters[k].format : function (x) { return String(x); });
    };
    return CategoryFilter;
}());
taucharts__WEBPACK_IMPORTED_MODULE_0___default.a.api.plugins.add('category-filter', CategoryFilterPlugin);
function CategoryFilterPlugin(settings) {
    return new CategoryFilter(settings);
}


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