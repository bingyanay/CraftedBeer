/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(334)
	var __weex_style__ = __webpack_require__(335)
	var __weex_script__ = __webpack_require__(336)

	__weex_define__('@weex-component/57149a60f7adc2c59f854a64fcdbb31a', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/57149a60f7adc2c59f854a64fcdbb31a',undefined,undefined)

/***/ },

/***/ 334:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "events": {
	    "click": "update"
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "a"
	      ],
	      "attr": {
	        "value": "Hello"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "b"
	      ],
	      "attr": {
	        "value": "Hello"
	      }
	    },
	    {
	      "type": "text",
	      "classList": function () {return ['a', this.x]},
	      "attr": {
	        "value": "Hello"
	      }
	    }
	  ]
	}

/***/ },

/***/ 335:
/***/ function(module, exports) {

	module.exports = {
	  "a": {
	    "fontSize": 48
	  },
	  "b": {
	    "color": "#ff0000"
	  }
	}

/***/ },

/***/ 336:
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    x: ''
	  }},
	  methods: {
	    update: function update(e) {
	      this.x = 'b';
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ }

/******/ });