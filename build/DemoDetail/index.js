(function(){
      
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(9)
	var $app_style$ = __webpack_require__(10)
	var $app_script$ = __webpack_require__(11)
	
	$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})
	
	$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	!function (e, t) {
	  "object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.Bmob = t() : e.Bmob = t();
	}("undefined" != typeof self ? self : undefined, function () {
	  return function (e) {
	    var t = {};function n(r) {
	      if (t[r]) return t[r].exports;var o = t[r] = { i: r, l: !1, exports: {} };return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
	    }return n.m = e, n.c = t, n.d = function (e, t, r) {
	      n.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: r });
	    }, n.n = function (e) {
	      var t = e && e.__esModule ? function () {
	        return e.default;
	      } : function () {
	        return e;
	      };return n.d(t, "a", t), t;
	    }, n.o = function (e, t) {
	      return Object.prototype.hasOwnProperty.call(e, t);
	    }, n.p = "", n(n.s = 16);
	  }([function (e, t, n) {
	    (function (t) {
	      var r = n(3),
	          o = t.Bmob || {};o.utils = r, o._config = r.getConfig(), o.initialize = function (e, t, n) {
	        o._config.applicationId = e, o._config.applicationKey = t;
	      }, e.exports = o;
	    }).call(t, n(8));
	  }, function (e, t, n) {
	    "use strict";
	    var r = n(11),
	        o = n(22),
	        s = Object.prototype.toString;function i(e) {
	      return "[object Array]" === s.call(e);
	    }function a(e) {
	      return null !== e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e));
	    }function c(e) {
	      return "[object Function]" === s.call(e);
	    }function u(e, t) {
	      if (null !== e && void 0 !== e) if ("object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && (e = [e]), i(e)) for (var n = 0, r = e.length; n < r; n++) {
	        t.call(null, e[n], n, e);
	      } else for (var o in e) {
	        Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e);
	      }
	    }e.exports = { isArray: i, isArrayBuffer: function isArrayBuffer(e) {
	        return "[object ArrayBuffer]" === s.call(e);
	      }, isBuffer: o, isFormData: function isFormData(e) {
	        return "undefined" != typeof FormData && e instanceof FormData;
	      }, isArrayBufferView: function isArrayBufferView(e) {
	        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer;
	      }, isString: function isString(e) {
	        return "string" == typeof e;
	      }, isNumber: function isNumber(e) {
	        return "number" == typeof e;
	      }, isObject: a, isUndefined: function isUndefined(e) {
	        return void 0 === e;
	      }, isDate: function isDate(e) {
	        return "[object Date]" === s.call(e);
	      }, isFile: function isFile(e) {
	        return "[object File]" === s.call(e);
	      }, isBlob: function isBlob(e) {
	        return "[object Blob]" === s.call(e);
	      }, isFunction: c, isStream: function isStream(e) {
	        return a(e) && c(e.pipe);
	      }, isURLSearchParams: function isURLSearchParams(e) {
	        return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams;
	      }, isStandardBrowserEnv: function isStandardBrowserEnv() {
	        return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document;
	      }, forEach: u, merge: function e() {
	        var t = {};function n(n, r) {
	          "object" == _typeof(t[r]) && "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) ? t[r] = e(t[r], n) : t[r] = n;
	        }for (var r = 0, o = arguments.length; r < o; r++) {
	          u(arguments[r], n);
	        }return t;
	      }, extend: function extend(e, t, n) {
	        return u(t, function (t, o) {
	          e[o] = n && "function" == typeof t ? r(t, n) : t;
	        }), e;
	      }, trim: function trim(e) {
	        return e.replace(/^\s*/, "").replace(/\s*$/, "");
	      } };
	  }, function (e, t) {
	    e.exports = { isObject: function isObject(e) {
	        return "[object Object]" == Object.prototype.toString.call(e);
	      }, isNumber: function isNumber(e) {
	        return "[object Number]" == Object.prototype.toString.call(e);
	      }, isString: function isString(e) {
	        return "[object String]" == Object.prototype.toString.call(e);
	      }, isUndefined: function isUndefined(e) {
	        return "[object Undefined]" == Object.prototype.toString.call(e);
	      }, isBoolean: function isBoolean(e) {
	        return "[object Boolean]" == Object.prototype.toString.call(e);
	      }, isArray: function isArray(e) {
	        return "[object Array]" == Object.prototype.toString.call(e);
	      }, isFunction: function isFunction(e) {
	        return "[object Function]" == Object.prototype.toString.call(e);
	      } };
	  }, function (e, t, n) {
	    (function (t, r) {
	      var o = void 0;try {
	        o = n(17);
	      } catch (e) {
	        o = n(19);
	      }var s = function s() {
	        return o;
	      };e.exports = { getConfig: s, getAppType: function getAppType() {
	          var e = s();var n = void 0;return n = "undefined" != typeof wx ? "wx" : "undefined" != typeof window ? "h5" : 3 == e.type ? "hap" : t === r.process ? "nodejs" : "h5";
	        } };
	    }).call(t, n(6), n(8));
	  }, function (e, t, n) {
	    var r = void 0;var o = n(3).getAppType();"h5" == o ? r = n(10) : "wx" == o ? r = n(39) : "hap" == o ? r = n(40) : "nodejs" == o && (r = n(10)), e.exports = r;
	  }, function (e, t) {
	    e.exports = function () {
	      function _class(e, t) {
	        _classCallCheck(this, _class);
	
	        var n = new Error();return n.code = e, n.message = t ? "Bmob.Error:{code:" + e + ", message:" + t + "}" : "Bmob.Error:{code:" + e + ", message:" + this.errorMsg(e) + "}", n;
	      }
	
	      _createClass(_class, [{
	        key: "errorMsg",
	        value: function errorMsg(e) {
	          switch (e) {case 415:
	              return "incorrect parameter type.";case 416:
	              return "Parameter is null.";case 417:
	              return "There is no upload content.";case 418:
	              return "Log in failure.";default:
	              return "unknown error";}
	        }
	      }]);
	
	      return _class;
	    }();
	  }, function (e, t) {
	    var n,
	        r,
	        o = e.exports = {};function s() {
	      throw new Error("setTimeout has not been defined");
	    }function i() {
	      throw new Error("clearTimeout has not been defined");
	    }function a(e) {
	      if (n === setTimeout) return setTimeout(e, 0);if ((n === s || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);try {
	        return n(e, 0);
	      } catch (t) {
	        try {
	          return n.call(null, e, 0);
	        } catch (t) {
	          return n.call(this, e, 0);
	        }
	      }
	    }!function () {
	      try {
	        n = "function" == typeof setTimeout ? setTimeout : s;
	      } catch (e) {
	        n = s;
	      }try {
	        r = "function" == typeof clearTimeout ? clearTimeout : i;
	      } catch (e) {
	        r = i;
	      }
	    }();var c,
	        u = [],
	        p = !1,
	        l = -1;function f() {
	      p && c && (p = !1, c.length ? u = c.concat(u) : l = -1, u.length && h());
	    }function h() {
	      if (!p) {
	        var e = a(f);p = !0;for (var t = u.length; t;) {
	          for (c = u, u = []; ++l < t;) {
	            c && c[l].run();
	          }l = -1, t = u.length;
	        }c = null, p = !1, function (e) {
	          if (r === clearTimeout) return clearTimeout(e);if ((r === i || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);try {
	            r(e);
	          } catch (t) {
	            try {
	              return r.call(null, e);
	            } catch (t) {
	              return r.call(this, e);
	            }
	          }
	        }(e);
	      }
	    }function d(e, t) {
	      this.fun = e, this.array = t;
	    }function m() {}o.nextTick = function (e) {
	      var t = new Array(arguments.length - 1);if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
	        t[n - 1] = arguments[n];
	      }u.push(new d(e, t)), 1 !== u.length || p || a(h);
	    }, d.prototype.run = function () {
	      this.fun.apply(null, this.array);
	    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = m, o.addListener = m, o.once = m, o.off = m, o.removeListener = m, o.removeAllListeners = m, o.emit = m, o.prependListener = m, o.prependOnceListener = m, o.listeners = function (e) {
	      return [];
	    }, o.binding = function (e) {
	      throw new Error("process.binding is not supported");
	    }, o.cwd = function () {
	      return "/";
	    }, o.chdir = function (e) {
	      throw new Error("process.chdir is not supported");
	    }, o.umask = function () {
	      return 0;
	    };
	  }, function (e, t, n) {
	    "use strict";
	    (function (t) {
	      var r = n(1),
	          o = n(24),
	          s = { "Content-Type": "application/x-www-form-urlencoded" };function i(e, t) {
	        !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
	      }var a,
	          c = { adapter: ("undefined" != typeof XMLHttpRequest ? a = n(12) : void 0 !== t && (a = n(12)), a), transformRequest: [function (e, t) {
	          return o(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (i(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) ? (i(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e;
	        }], transformResponse: [function (e) {
	          if ("string" == typeof e) try {
	            e = JSON.parse(e);
	          } catch (e) {}return e;
	        }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, validateStatus: function validateStatus(e) {
	          return e >= 200 && e < 300;
	        } };c.headers = { common: { Accept: "application/json, text/plain, */*" } }, r.forEach(["delete", "get", "head"], function (e) {
	        c.headers[e] = {};
	      }), r.forEach(["post", "put", "patch"], function (e) {
	        c.headers[e] = r.merge(s);
	      }), e.exports = c;
	    }).call(t, n(6));
	  }, function (e, t) {
	    var n;n = function () {
	      return this;
	    }();try {
	      n = n || Function("return this")() || (0, eval)("this");
	    } catch (e) {
	      "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
	    }e.exports = n;
	  }, function (e, t, n) {
	    var r = n(0);var o = n(4),
	        _n = n(2),
	        s = _n.isObject,
	        i = _n.isString,
	        a = _n.isNumber,
	        c = _n.isUndefined,
	        u = _n.isArray,
	        p = n(5);function l(e, t, n) {
	      var r = {},
	          o = {};o[t] = n, r[e] = o;var s = r;return Object.keys(this.queryData).length ? c(this.queryData.$and) ? this.queryData = { $and: [this.queryData, s] } : this.queryData.$and.push(s) : this.queryData = s, s;
	    }e.exports = function () {
	      function _class2(e) {
	        _classCallCheck(this, _class2);
	
	        this.tableName = r._config.parameters.QUERY + "/" + e, this.init(), this.addArray = {}, this.setData = {};
	      }
	
	      _createClass(_class2, [{
	        key: "init",
	        value: function init() {
	          this.queryData = {}, this.andData = {}, this.orData = {}, this.limitNum = 100, this.skipNum = 0, this.includes = "", this.orders = null, this.keys = null;
	        }
	      }, {
	        key: "get",
	        value: function get(e) {
	          var _this = this;
	
	          if (!i(e)) throw new p(415);var t = {};var n = {},
	              r = {},
	              l = {},
	              f = function f(e, t) {
	            if (!i(e) || !u(t)) throw new p(415);l[e] = { __op: "Add", objects: t };
	          },
	              h = function h(e, t) {
	            if (!i(e) || !u(t)) throw new p(415);l[e] = { __op: "AddUnique", objects: t };
	          },
	              d = function d(e, t) {
	            if (!i(e) || !u(t)) throw new p(415);l[e] = { __op: "Remove", objects: t };
	          },
	              m = function m(e) {
	            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	            if (!i(e) || !a(t)) throw new p(415);n[e] = { __op: "Increment", amount: t };
	          },
	              w = function w(t) {
	            if (!i(e)) throw new p(415);r[t] = { __op: "Delete" };
	          },
	              g = function g(e, n) {
	            if (!i(e) || c(n)) throw new p(415);if (s(n)) {
	              var _r = n.filename,
	                  _o = n.cdn,
	                  _s = n.url;
	              c(_r) || c(_o) || c(_s) || (t[e] = { __type: "File", group: _o, filename: _r, url: _s });
	            } else t[e] = n;
	          },
	              y = function y() {
	            var s = Object.assign(r, t, n, l);return o(_this.tableName + "/" + e, "put", s);
	          };return new Promise(function (t, n) {
	            o(_this.tableName + "/" + e).then(function (n) {
	              Object.defineProperty(n, "set", { value: g }), Object.defineProperty(n, "unset", { value: w }), Object.defineProperty(n, "save", { value: y }), Object.defineProperty(n, "increment", { value: m }), Object.defineProperty(n, "add", { value: f }), Object.defineProperty(n, "remove", { value: d }), Object.defineProperty(n, "addUnique", { value: h }), Object.defineProperty(n, "destroy", { value: function value() {
	                  return _this.destroy(e);
	                } }), t(n);
	            }).catch(function (e) {
	              n(e);
	            });
	          });
	        }
	      }, {
	        key: "destroy",
	        value: function destroy(e) {
	          if (!i(e)) throw new p(415);return o(this.tableName + "/" + e, "delete");
	        }
	      }, {
	        key: "set",
	        value: function set(e, t) {
	          if (!i(e) || c(t)) throw new p(415);if (s(t)) {
	            var _n2 = t.filename,
	                _r2 = t.cdn,
	                _o2 = t.url;
	            c(_n2) || c(_r2) || c(_o2) || (this.setData[e] = { __type: "File", group: _r2, filename: _n2, url: _o2 });
	          } else this.setData[e] = t;
	        }
	      }, {
	        key: "add",
	        value: function add(e, t) {
	          if (!i(e) || !u(t)) throw new p(415);this.addArray[e] = { __op: "Add", objects: t };
	        }
	      }, {
	        key: "addUnique",
	        value: function addUnique(e, t) {
	          if (!i(e) || !u(t)) throw new p(415);this.addArray[e] = { __op: "AddUnique", objects: t };
	        }
	      }, {
	        key: "save",
	        value: function save() {
	          var _this2 = this;
	
	          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	          if (!s(e)) throw new p(415);var t = this.setData.id ? "PUT" : "POST",
	              n = this.setData.id ? this.setData.id : "";var r = Object.assign(e, this.setData, this.addArray);return new Promise(function (e, s) {
	            o(_this2.tableName + "/" + n, t, r).then(function (t) {
	              _this2.addArray = {}, _this2.setData = {}, e(t);
	            }).catch(function (e) {
	              s(e);
	            });
	          });
	        }
	      }, {
	        key: "saveAll",
	        value: function saveAll(e) {
	          var _this3 = this;
	
	          if (!u(e)) throw new p(415);if (e.length < 1) throw new p(416);var t = void 0,
	              n = void 0,
	              s = "put",
	              i = new Array();e.map(function (e) {
	            return "/undefined" == (t = "/" + e.objectId) && (t = "", s = "post"), n = { method: s, path: "" + _this3.tableName + t, body: e.setData }, i.push(n), e;
	          });var a = { requests: i },
	              c = r._config.parameters.BATCH;return o(c, "POST", a);
	        }
	      }, {
	        key: "equalTo",
	        value: function equalTo(e, t, n) {
	          if (!i(e)) throw new p(415);var r = function (e, t, n) {
	            var r = {},
	                o = null;switch (o = "createdAt" == e || "updateAt" == e ? { __type: "Date", iso: n } : n, t) {case "==":
	                r[e] = o;break;case "!=":
	                r[e] = { $ne: o };break;case "<":
	                r[e] = { $lt: o };break;case "<=":
	                r[e] = { $lte: o };break;case ">":
	                r[e] = { $gt: o };case ">=":
	                r[e] = { $gte: o };break;default:
	                throw new p(415);}return r;
	          }(e, t, n);return Object.keys(this.queryData).length ? c(this.queryData.$and) ? this.queryData = { $and: [this.queryData, r] } : this.queryData.$and.push(r) : this.queryData = r, r;
	        }
	      }, {
	        key: "containedIn",
	        value: function containedIn(e, t) {
	          if (!i(e) || !u(t)) throw new p(415);return l.call(this, e, "$in", t);
	        }
	      }, {
	        key: "notContainedIn",
	        value: function notContainedIn(e, t) {
	          if (!i(e) || !u(t)) throw new p(415);return l.call(this, e, "$nin", t);
	        }
	      }, {
	        key: "exists",
	        value: function exists(e) {
	          if (!i(e)) throw new p(415);return l.call(this, e, "$exists", !0);
	        }
	      }, {
	        key: "doesNotExist",
	        value: function doesNotExist(e) {
	          if (!i(e)) throw new p(415);return l.call(this, e, "$exists", !1);
	        }
	      }, {
	        key: "or",
	        value: function or() {
	          for (var _len = arguments.length, e = Array(_len), _key = 0; _key < _len; _key++) {
	            e[_key] = arguments[_key];
	          }
	
	          e.map(function (e, t) {
	            if (!s(e)) throw new p(415);
	          });var t = this.queryData.$and;if (!c(t)) for (var _n3 = 0; _n3 < t.length; _n3++) {
	            for (var _r3 = 0; _r3 < e.length; _r3++) {
	              JSON.stringify(t[_n3]) == JSON.stringify(e[_r3]) && this.queryData.$and.splice(_n3, 1);
	            }
	          }this.orData = { $or: e };
	        }
	      }, {
	        key: "and",
	        value: function and() {
	          for (var _len2 = arguments.length, e = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	            e[_key2] = arguments[_key2];
	          }
	
	          e.map(function (e, t) {
	            if (!s(e)) throw new p(415);
	          }), this.andData = { $and: e };
	        }
	      }, {
	        key: "limit",
	        value: function limit(e) {
	          if (!a(e)) throw new p(415);e > 1e3 && (e = 1e3), this.limitNum = e;
	        }
	      }, {
	        key: "skip",
	        value: function skip(e) {
	          if (!a(e)) throw new p(415);this.skipNum = e;
	        }
	      }, {
	        key: "order",
	        value: function order() {
	          for (var _len3 = arguments.length, e = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	            e[_key3] = arguments[_key3];
	          }
	
	          e.map(function (e) {
	            if (!i(e)) throw new p(415);
	          }), this.orders = e.join(",");
	        }
	      }, {
	        key: "include",
	        value: function include() {
	          for (var _len4 = arguments.length, e = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	            e[_key4] = arguments[_key4];
	          }
	
	          e.map(function (e) {
	            if (!i(e)) throw new p(415);
	          }), this.includes = e.join(",");
	        }
	      }, {
	        key: "select",
	        value: function select() {
	          for (var _len5 = arguments.length, e = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	            e[_key5] = arguments[_key5];
	          }
	
	          e.map(function (e) {
	            if (!i(e)) throw new p(415);
	          }), this.keys = e.join(",");
	        }
	      }, {
	        key: "find",
	        value: function find() {
	          var _this4 = this;
	
	          var e = {},
	              t = {},
	              n = {};Object.keys(this.queryData).length && (t.where = this.queryData), Object.keys(this.andData).length && (t.where = Object.assign(this.andData, this.queryData)), Object.keys(this.orData).length && (t.where = Object.assign(this.orData, this.queryData)), t.limit = this.limitNum, t.skip = this.skipNum, t.include = this.includes, t.order = this.orders, t.keys = this.keys;for (var _e in t) {
	            (t.hasOwnProperty(_e) && null == t[_e] || 0 == t[_e]) && delete t[_e];
	          }var s = function s(t, n) {
	            if (!t || c(n)) throw new p(415);e[t] = n;
	          },
	              i = function i() {
	            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "updata";
	            if (console.log(t), n.length < 1) throw new p(416);var s = void 0,
	                i = void 0,
	                a = "put",
	                c = new Array();n.map(function (n) {
	              return "/undefined" == (s = "/" + n.objectId) && (s = "", a = "post"), i = { method: a, path: "" + _this4.tableName + s, body: e }, "delete" == t && (i = { method: "DELETE", path: "" + _this4.tableName + s }), c.push(i), n;
	            });var u = { requests: c };Object.assign(e);var l = r._config.parameters.BATCH;return o(l, "POST", u);
	          };return new Promise(function (e, r) {
	            o("" + _this4.tableName, "get", t).then(function (_ref) {
	              var t = _ref.results;
	              _this4.init(), Object.defineProperty(t, "set", { value: s }), Object.defineProperty(t, "saveAll", { value: function value() {
	                  return i();
	                } }), Object.defineProperty(t, "destroyAll", { value: function value() {
	                  return i("delete");
	                } }), n = t, e(t);
	            }).catch(function (e) {
	              r(e);
	            });
	          });
	        }
	      }, {
	        key: "count",
	        value: function count() {
	          var _this5 = this;
	
	          return new Promise(function (e, t) {
	            o("" + _this5.tableName, "get", { count: 1 }).then(function (_ref2) {
	              var t = _ref2.count;
	              e(t);
	            }).catch(function (e) {
	              t(e);
	            });
	          });
	        }
	      }]);
	
	      return _class2;
	    }();
	  }, function (e, t, n) {
	    var r = n(20);var o = n(0);n(3);var s;e.exports = function (e) {
	      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "get";
	      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	      return new Promise(function (a, c) {
	        void 0 == o.User && (o = n(0));var u = { "content-type": "application/json", "X-Bmob-SDK-Type": "wechatApp", "X-Bmob-Application-Id": (s = o._config).applicationId, "X-Bmob-REST-API-Key": s.applicationKey };var p = o.User.current();p && (u["X-Bmob-Session-Token"] = p.sessionToken);var l = r.create({ baseURL: o._config.host, headers: u, validateStatus: function validateStatus(e) {
	            return e < 500;
	          } }),
	            f = { url: e, method: t };"get" == f.method ? f.params = i : f.data = i, l(f).then(function (_ref3) {
	          var e = _ref3.data;
	          e.code && c(e), a(e);
	        }).catch(function (e) {
	          c(e);
	        });
	      });
	    };
	  }, function (e, t, n) {
	    "use strict";
	    e.exports = function (e, t) {
	      return function () {
	        for (var n = new Array(arguments.length), r = 0; r < n.length; r++) {
	          n[r] = arguments[r];
	        }return e.apply(t, n);
	      };
	    };
	  }, function (e, t, n) {
	    "use strict";
	    (function (t) {
	      var r = n(1),
	          o = n(25),
	          s = n(27),
	          i = n(28),
	          a = n(29),
	          c = n(13),
	          u = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || n(30);e.exports = function (e) {
	        return new Promise(function (p, l) {
	          var f = e.data,
	              h = e.headers;r.isFormData(f) && delete h["Content-Type"];var d = new XMLHttpRequest(),
	              m = "onreadystatechange",
	              w = !1;if ("test" === t.env.NODE_ENV || "undefined" == typeof window || !window.XDomainRequest || "withCredentials" in d || a(e.url) || (d = new window.XDomainRequest(), m = "onload", w = !0, d.onprogress = function () {}, d.ontimeout = function () {}), e.auth) {
	            var g = e.auth.username || "",
	                y = e.auth.password || "";h.Authorization = "Basic " + u(g + ":" + y);
	          }if (d.open(e.method.toUpperCase(), s(e.url, e.params, e.paramsSerializer), !0), d.timeout = e.timeout, d[m] = function () {
	            if (d && (4 === d.readyState || w) && (0 !== d.status || d.responseURL && 0 === d.responseURL.indexOf("file:"))) {
	              var t = "getAllResponseHeaders" in d ? i(d.getAllResponseHeaders()) : null,
	                  n = { data: e.responseType && "text" !== e.responseType ? d.response : d.responseText, status: 1223 === d.status ? 204 : d.status, statusText: 1223 === d.status ? "No Content" : d.statusText, headers: t, config: e, request: d };o(p, l, n), d = null;
	            }
	          }, d.onerror = function () {
	            l(c("Network Error", e, null, d)), d = null;
	          }, d.ontimeout = function () {
	            l(c("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", d)), d = null;
	          }, r.isStandardBrowserEnv()) {
	            var b = n(31),
	                S = (e.withCredentials || a(e.url)) && e.xsrfCookieName ? b.read(e.xsrfCookieName) : void 0;S && (h[e.xsrfHeaderName] = S);
	          }if ("setRequestHeader" in d && r.forEach(h, function (e, t) {
	            void 0 === f && "content-type" === t.toLowerCase() ? delete h[t] : d.setRequestHeader(t, e);
	          }), e.withCredentials && (d.withCredentials = !0), e.responseType) try {
	            d.responseType = e.responseType;
	          } catch (t) {
	            if ("json" !== e.responseType) throw t;
	          }"function" == typeof e.onDownloadProgress && d.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && d.upload && d.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function (e) {
	            d && (d.abort(), l(e), d = null);
	          }), void 0 === f && (f = null), d.send(f);
	        });
	      };
	    }).call(t, n(6));
	  }, function (e, t, n) {
	    "use strict";
	    var r = n(26);e.exports = function (e, t, n, o, s) {
	      var i = new Error(e);return r(i, t, n, o, s);
	    };
	  }, function (e, t, n) {
	    "use strict";
	    e.exports = function (e) {
	      return !(!e || !e.__CANCEL__);
	    };
	  }, function (e, t, n) {
	    "use strict";
	    function r(e) {
	      this.message = e;
	    }r.prototype.toString = function () {
	      return "Cancel" + (this.message ? ": " + this.message : "");
	    }, r.prototype.__CANCEL__ = !0, e.exports = r;
	  }, function (e, t, n) {
	    var r = n(0),
	        o = n(9),
	        s = n(41),
	        i = n(47),
	        a = n(48),
	        c = n(49),
	        _n4 = n(50),
	        u = _n4.generateCode,
	        p = _n4.sendMessage,
	        l = _n4.getAccessToken,
	        f = _n4.sendWeAppMessage,
	        h = _n4.refund,
	        d = _n4.notifyMsg,
	        m = _n4.functions,
	        w = _n4.timestamp,
	        g = _n4.requestPasswordReset,
	        y = _n4.resetPasswordBySmsCode,
	        b = _n4.updateUserPassword,
	        S = _n4.push,
	        _n5 = n(51),
	        E = _n5.requestSmsCode,
	        v = _n5.verifySmsCode;r.generateCode = u, r.sendMessage = p, r.getAccessToken = l, r.sendWeAppMessage = f, r.refund = h, r.notifyMsg = d, r.requestSmsCode = E, r.verifySmsCode = v, r.functions = m, r.timestamp = w, r.requestPasswordReset = g, r.resetPasswordBySmsCode = y, r.updateUserPassword = b, r.push = S, r.Pay = new a(), r.User = new s(), r.Socket = c, r.Query = function (e) {
	      return new o(e);
	    }, r.File = function (e, t) {
	      return new i(e, t);
	    }, r.request = n(4), r.type = r.utils.getAppType(), "wx" == r.type ? wx.Bmob = r : "h5" == r.type ? window.Bmob = r : "hap" == r.type || r.type, e.exports = r;
	  }, function (e, t, n) {
	    var r = "v" + n(18).version;e.exports = { host: "http://api.bmobcloud.com", applicationId: "", applicationKey: "", parameters: { GENERATECODE: "/1/wechatApp/qr/generatecode", GETACCESSTOKEN: "/1/wechatApp/getAccessToken", SENDWEAPPMESSAGE: "/1/wechatApp/SendWeAppMessage", NOTIFYMSG: "/1/wechatApp/notifyMsg", REFUND: "/1/pay/refund", REQUESTSMSCODE: "/1/requestSmsCode", VERIFYSMSCODE: "/1/verifySmsCode", FUNCTIONS: "/1/functions", REQUESTPASSWORDRESET: "/1/requestPasswordReset", RESETPASSWORDBYSMSCODE: "/1/resetPasswordBySmsCode", UPDATEUSERPASSWORD: "/1/updateUserPassword", PUSH: "/1/push", FILES: "/2/files", DELFILES: "/2/cdnBatchDelete", TIMESTAMP: "/1/timestamp", LOGIN: "/1/login", REGISTER: "/1/users", REQUEST_EMAIL_VERIFY: "/1/requestEmailVerify", USERS: "/1/users", PAY: "/1/pay", WECHAT_APP: "/1/wechatApp/", BATCH: "/1/batch", QUERY: "/1/classes" }, version: r, type: 3 };
	  }, function (e, t) {
	    e.exports = { name: "js-sdk", version: "1.1.1", description: "Bmob SDK", main: "./src/lib/app.js", scripts: { test: 'echo "Error: no test specified" && exit 1', build: "webpack --config config/prod.env.js", watch: "webpack --watch --config config/prod.env.js", dev: "webpack-dev-server --config config/dev.env.js" }, repository: { type: "git", url: "git+https://github.com/bmob/bmob-js-sdk-es6" }, author: "Bmob", license: "ISC", bugs: { url: "https://github.com/bmob/bmob-js-sdk-es6/issues" }, homepage: "https://github.com/bmob/bmob-js-sdk-es6#readme", dependencies: { axios: "^0.18.0", "node.extend": "^2.0.0", webpack: "^3.10.0" }, devDependencies: { "clean-webpack-plugin": "^0.1.17", "html-webpack-plugin": "^2.30.1", "uglifyjs-webpack-plugin": "^1.1.6", "webpack-dev-server": "^2.9.7" } };
	  }, function (e, t) {
	    e.exports = { host: "https://api.bmobcloud.com", applicationId: "", applicationKey: "", parameters: { GENERATECODE: "/1/wechatApp/qr/generatecode", GETACCESSTOKEN: "/1/wechatApp/getAccessToken", SENDWEAPPMESSAGE: "/1/wechatApp/SendWeAppMessage", NOTIFYMSG: "/1/wechatApp/notifyMsg", REFUND: "/1/pay/refund", REQUESTSMSCODE: "/1/requestSmsCode", VERIFYSMSCODE: "/1/verifySmsCode", FUNCTIONS: "/1/functions", REQUESTPASSWORDRESET: "/1/requestPasswordReset", RESETPASSWORDBYSMSCODE: "/1/resetPasswordBySmsCode", UPDATEUSERPASSWORD: "/1/updateUserPassword", PUSH: "/1/push", FILES: "/2/files", DELFILES: "/2/cdnBatchDelete", TIMESTAMP: "/1/timestamp", LOGIN: "/1/login", REGISTER: "/1/users", REQUEST_EMAIL_VERIFY: "/1/requestEmailVerify", USERS: "/1/users", QUERY: "/1/classes" }, version: 1, type: 1 };
	  }, function (e, t, n) {
	    e.exports = n(21);
	  }, function (e, t, n) {
	    "use strict";
	    var r = n(1),
	        o = n(11),
	        s = n(23),
	        i = n(7);function a(e) {
	      var t = new s(e),
	          n = o(s.prototype.request, t);return r.extend(n, s.prototype, t), r.extend(n, t), n;
	    }var c = a(i);c.Axios = s, c.create = function (e) {
	      return a(r.merge(i, e));
	    }, c.Cancel = n(15), c.CancelToken = n(37), c.isCancel = n(14), c.all = function (e) {
	      return Promise.all(e);
	    }, c.spread = n(38), e.exports = c, e.exports.default = c;
	  }, function (e, t) {
	    function n(e) {
	      return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
	    }e.exports = function (e) {
	      return null != e && (n(e) || "function" == typeof (t = e).readFloatLE && "function" == typeof t.slice && n(t.slice(0, 0)) || !!e._isBuffer);var t;
	    };
	  }, function (e, t, n) {
	    "use strict";
	    var r = n(7),
	        o = n(1),
	        s = n(32),
	        i = n(33);function a(e) {
	      this.defaults = e, this.interceptors = { request: new s(), response: new s() };
	    }a.prototype.request = function (e) {
	      "string" == typeof e && (e = o.merge({ url: arguments[0] }, arguments[1])), (e = o.merge(r, { method: "get" }, this.defaults, e)).method = e.method.toLowerCase();var t = [i, void 0],
	          n = Promise.resolve(e);for (this.interceptors.request.forEach(function (e) {
	        t.unshift(e.fulfilled, e.rejected);
	      }), this.interceptors.response.forEach(function (e) {
	        t.push(e.fulfilled, e.rejected);
	      }); t.length;) {
	        n = n.then(t.shift(), t.shift());
	      }return n;
	    }, o.forEach(["delete", "get", "head", "options"], function (e) {
	      a.prototype[e] = function (t, n) {
	        return this.request(o.merge(n || {}, { method: e, url: t }));
	      };
	    }), o.forEach(["post", "put", "patch"], function (e) {
	      a.prototype[e] = function (t, n, r) {
	        return this.request(o.merge(r || {}, { method: e, url: t, data: n }));
	      };
	    }), e.exports = a;
	  }, function (e, t, n) {
	    "use strict";
	    var r = n(1);e.exports = function (e, t) {
	      r.forEach(e, function (n, r) {
	        r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r]);
	      });
	    };
	  }, function (e, t, n) {
	    "use strict";
	    var r = n(13);e.exports = function (e, t, n) {
	      var o = n.config.validateStatus;n.status && o && !o(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n);
	    };
	  }, function (e, t, n) {
	    "use strict";
	    e.exports = function (e, t, n, r, o) {
	      return e.config = t, n && (e.code = n), e.request = r, e.response = o, e;
	    };
	  }, function (e, t, n) {
	    "use strict";
	    var r = n(1);function o(e) {
	      return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
	    }e.exports = function (e, t, n) {
	      if (!t) return e;var s;if (n) s = n(t);else if (r.isURLSearchParams(t)) s = t.toString();else {
	        var i = [];r.forEach(t, function (e, t) {
	          null !== e && void 0 !== e && (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, function (e) {
	            r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), i.push(o(t) + "=" + o(e));
	          }));
	        }), s = i.join("&");
	      }return s && (e += (-1 === e.indexOf("?") ? "?" : "&") + s), e;
	    };
	  }, function (e, t, n) {
	    "use strict";
	    var r = n(1),
	        o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];e.exports = function (e) {
	      var t,
	          n,
	          s,
	          i = {};return e ? (r.forEach(e.split("\n"), function (e) {
	        if (s = e.indexOf(":"), t = r.trim(e.substr(0, s)).toLowerCase(), n = r.trim(e.substr(s + 1)), t) {
	          if (i[t] && o.indexOf(t) >= 0) return;i[t] = "set-cookie" === t ? (i[t] ? i[t] : []).concat([n]) : i[t] ? i[t] + ", " + n : n;
	        }
	      }), i) : i;
	    };
	  }, function (e, t, n) {
	    "use strict";
	    var r = n(1);e.exports = r.isStandardBrowserEnv() ? function () {
	      var e,
	          t = /(msie|trident)/i.test(navigator.userAgent),
	          n = document.createElement("a");function o(e) {
	        var r = e;return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), { href: n.href, protocol: n.protocol ? n.protocol.replace(/:$/, "") : "", host: n.host, search: n.search ? n.search.replace(/^\?/, "") : "", hash: n.hash ? n.hash.replace(/^#/, "") : "", hostname: n.hostname, port: n.port, pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname };
	      }return e = o(window.location.href), function (t) {
	        var n = r.isString(t) ? o(t) : t;return n.protocol === e.protocol && n.host === e.host;
	      };
	    }() : function () {
	      return !0;
	    };
	  }, function (e, t, n) {
	    "use strict";
	    var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function o() {
	      this.message = "String contains an invalid character";
	    }o.prototype = new Error(), o.prototype.code = 5, o.prototype.name = "InvalidCharacterError", e.exports = function (e) {
	      for (var t, n, s = String(e), i = "", a = 0, c = r; s.charAt(0 | a) || (c = "=", a % 1); i += c.charAt(63 & t >> 8 - a % 1 * 8)) {
	        if ((n = s.charCodeAt(a += .75)) > 255) throw new o();t = t << 8 | n;
	      }return i;
	    };
	  }, function (e, t, n) {
	    "use strict";
	    var r = n(1);e.exports = r.isStandardBrowserEnv() ? { write: function write(e, t, n, o, s, i) {
	        var a = [];a.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), r.isString(o) && a.push("path=" + o), r.isString(s) && a.push("domain=" + s), !0 === i && a.push("secure"), document.cookie = a.join("; ");
	      }, read: function read(e) {
	        var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));return t ? decodeURIComponent(t[3]) : null;
	      }, remove: function remove(e) {
	        this.write(e, "", Date.now() - 864e5);
	      } } : { write: function write() {}, read: function read() {
	        return null;
	      }, remove: function remove() {} };
	  }, function (e, t, n) {
	    "use strict";
	    var r = n(1);function o() {
	      this.handlers = [];
	    }o.prototype.use = function (e, t) {
	      return this.handlers.push({ fulfilled: e, rejected: t }), this.handlers.length - 1;
	    }, o.prototype.eject = function (e) {
	      this.handlers[e] && (this.handlers[e] = null);
	    }, o.prototype.forEach = function (e) {
	      r.forEach(this.handlers, function (t) {
	        null !== t && e(t);
	      });
	    }, e.exports = o;
	  }, function (e, t, n) {
	    "use strict";
	    var r = n(1),
	        o = n(34),
	        s = n(14),
	        i = n(7),
	        a = n(35),
	        c = n(36);function u(e) {
	      e.cancelToken && e.cancelToken.throwIfRequested();
	    }e.exports = function (e) {
	      return u(e), e.baseURL && !a(e.url) && (e.url = c(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = o(e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
	        delete e.headers[t];
	      }), (e.adapter || i.adapter)(e).then(function (t) {
	        return u(e), t.data = o(t.data, t.headers, e.transformResponse), t;
	      }, function (t) {
	        return s(t) || (u(e), t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t);
	      });
	    };
	  }, function (e, t, n) {
	    "use strict";
	    var r = n(1);e.exports = function (e, t, n) {
	      return r.forEach(n, function (n) {
	        e = n(e, t);
	      }), e;
	    };
	  }, function (e, t, n) {
	    "use strict";
	    e.exports = function (e) {
	      return (/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
	      );
	    };
	  }, function (e, t, n) {
	    "use strict";
	    e.exports = function (e, t) {
	      return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
	    };
	  }, function (e, t, n) {
	    "use strict";
	    var r = n(15);function o(e) {
	      if ("function" != typeof e) throw new TypeError("executor must be a function.");var t;this.promise = new Promise(function (e) {
	        t = e;
	      });var n = this;e(function (e) {
	        n.reason || (n.reason = new r(e), t(n.reason));
	      });
	    }o.prototype.throwIfRequested = function () {
	      if (this.reason) throw this.reason;
	    }, o.source = function () {
	      var e;return { token: new o(function (t) {
	          e = t;
	        }), cancel: e };
	    }, e.exports = o;
	  }, function (e, t, n) {
	    "use strict";
	    e.exports = function (e) {
	      return function (t) {
	        return e.apply(null, t);
	      };
	    };
	  }, function (e, t, n) {
	    var r = n(0);n(3);var o;e.exports = function (e) {
	      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "get";
	      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	      return new Promise(function (i, a) {
	        var c = { "content-type": "application/json", "X-Bmob-SDK-Type": "wechatApp", "X-Bmob-Application-Id": (o = r._config).applicationId, "X-Bmob-REST-API-Key": o.applicationKey };void 0 == r.User && (r = n(0));var u = r.User.current();u && (c["X-Bmob-Session-Token"] = u.sessionToken), wx.request({ url: r._config.host + e, method: t, data: s, header: c, success: function success(e) {
	            i(e.data);
	          }, fail: function fail(e) {
	            console.log(e);
	          } });
	      });
	    };
	  }, function (e, t, n) {
	    var r = n(0);n(3);var o;e.exports = function (e) {
	      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "get";
	      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	      return console.log("request"), new Promise(function (i, a) {
	        var c = { "content-type": "application/json", "X-Bmob-SDK-Type": "wechatApp", "X-Bmob-Application-Id": (o = r._config).applicationId, "X-Bmob-REST-API-Key": o.applicationKey };void 0 == r.User && (r = n(0));var u = r.User.current();u && (c["X-Bmob-Session-Token"] = u.sessionToken), $app_require$('@app-module/system.fetch').fetch({ url: r._config.host + e, header: c, method: t, data: s, success: function success(e) {
	            i(JSON.parse(e.data));
	          }, fail: function fail(e, t) {
	            console.log("handling fail, code = " + t), a(e);
	          } });
	      });
	    };
	  }, function (e, t, n) {
	    var r = n(4),
	        o = n(42),
	        s = n(9),
	        i = n(0),
	        a = n(5),
	        _n6 = n(2),
	        c = _n6.isObject,
	        u = _n6.isString,
	        p = _n6.isNumber;e.exports = function (_s2) {
	      _inherits(_class3, _s2);
	
	      function _class3() {
	        _classCallCheck(this, _class3);
	
	        return _possibleConstructorReturn(this, (_class3.__proto__ || Object.getPrototypeOf(_class3)).call(this, "_User"));
	      }
	
	      _createClass(_class3, [{
	        key: "set",
	        value: function set(e) {
	          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
	          u(e) && (this.setData[e] = t);
	        }
	      }, {
	        key: "requestEmailVerify",
	        value: function requestEmailVerify(e) {
	          if (!u(e)) throw new a(415);this.setData = Object.assign({}, { email: e }), console.log(this.setData);var t = i._config.parameters.REQUEST_EMAIL_VERIFY;return r(t, "post", this.setData);
	        }
	      }, {
	        key: "register",
	        value: function register(e) {
	          if (!c(e)) throw new a(415);this.setData = Object.assign(this.setData, e), console.log(this.setData);var t = i._config.parameters.REGISTER;return r(t, "post", this.setData);
	        }
	      }, {
	        key: "login",
	        value: function login(e, t) {
	          var _this7 = this;
	
	          if (!u(e) || !u(t)) throw new a(415);this.setData = Object.assign({}, { username: e, password: t });var n = i._config.parameters.LOGIN;return new Promise(function (e, t) {
	            r(n, "get", _this7.setData).then(function (t) {
	              o.save("bmob", t), e(t);
	            }).catch(function (e) {
	              console.log("登陆失败"), t(e);
	            });
	          });
	        }
	      }, {
	        key: "users",
	        value: function users() {
	          var e = i._config.parameters.USERS;return r(e, "get");
	        }
	      }, {
	        key: "signOrLoginByMobilePhone",
	        value: function signOrLoginByMobilePhone(e, t) {
	          if (!p(e) || !p(t)) throw new a(415);this.setData = Object.assign({}, { mobilePhoneNumber: e, smsCode: t });var n = i._config.parameters.LOGIN;return r(n, "get", this.setData);
	        }
	      }, {
	        key: "requestOpenId",
	        value: function requestOpenId(e) {
	          var t = i._config.parameters.WECHAT_APP;return r(t + e, "POST", {});
	        }
	      }, {
	        key: "linkWith",
	        value: function linkWith(e) {
	          var t = { authData: e },
	              n = i._config.parameters.USERS;return r(n, "POST", t);
	        }
	      }, {
	        key: "loginWithWeapp",
	        value: function loginWithWeapp(e) {
	          var _this8 = this;
	
	          return new Promise(function (t, n) {
	            _this8.requestOpenId(e).then(function (e) {
	              var n = { weapp: e },
	                  r = _this8.linkWith(n);t(r);
	            }).catch(function (e) {
	              n(e);
	            });
	          });
	        }
	      }, {
	        key: "current",
	        value: function current() {
	          if (i.utils.getAppType(), "hap" != i.type) {
	            var _e2 = o.fetch("bmob");return "object" == (typeof _e2 === "undefined" ? "undefined" : _typeof(_e2)) ? _e2 : JSON.parse(_e2);
	          }return new Promise(function (e, t) {
	            return o.fetch("bmob").then(function (t) {
	              e(t);
	            }).catch(function (e) {
	              t(e);
	            });
	          });
	        }
	      }, {
	        key: "upInfo",
	        value: function upInfo(e) {
	          var _this9 = this;
	
	          return new Promise(function (t, n) {
	            var r = e.nickName,
	                s = e.avatarUrl,
	                i = _this9.current();i || (console.log("未获取到用户信息"), n("未获取到用户信息"));var a = o.fetch("openid");_this9.get(i.objectId).then(function (e) {
	              e.set("nickName", r), e.set("userPic", s), e.set("openid", a), e.save().then(function (e) {
	                t(e);
	              }).catch(function (e) {
	                console.log(e), n(e);
	              });
	            }).catch(function (e) {
	              console.log(e), n(e);
	            });
	          });
	        }
	      }, {
	        key: "auth",
	        value: function auth() {
	          var e = this;return new Promise(function (t, n) {
	            var r = function r() {
	              wx.login({ success: function success(r) {
	                  e.loginWithWeapp(r.code).then(function (e) {
	                    if (e.error) throw new a(415);var n = e.authData.weapp.openid;o.save("openid", n), o.save("bmob", e), t(e);
	                  }, function (e) {
	                    n(e);
	                  });
	                } });
	            };wx.checkSession({ success: function success() {
	                console.log("用户在线中"), t("用户在线中"), r();
	              }, fail: function fail() {
	                r();
	              } });
	          });
	        }
	      }]);
	
	      return _class3;
	    }(s);
	  }, function (e, t, n) {
	    var r = void 0;var o = n(3).getAppType();"h5" == o ? r = n(43) : "wx" == o ? r = n(44) : "hap" == o ? r = n(45) : "nodejs" == o && (r = n(46)), e.exports = r;
	  }, function (e, t, n) {
	    var _n7 = n(2),
	        r = _n7.isObject,
	        o = _n7.isString,
	        s = _n7.isNumber,
	        i = {
	      save: function save(e, t) {
	        if (!o(e) || !t) throw new error(415);localStorage.setItem(e, JSON.stringify(t));
	      },
	      fetch: function fetch(e) {
	        if (!o(e)) throw new error(415);return JSON.parse(localStorage.getItem(e)) || null;
	      },
	      remove: function remove(e) {
	        if (!o(e)) throw new error(415);localStorage.removeItem(e);
	      },
	      clear: function clear() {
	        localStorage.clear();
	      }
	    };
	
	    e.exports = i;
	  }, function (e, t, n) {
	    var _n8 = n(2),
	        r = _n8.isObject,
	        o = _n8.isString,
	        s = _n8.isNumber,
	        i = {
	      save: function save(e, t) {
	        if (!o(e) || !t) throw new error(415);return wx.setStorageSync(e, JSON.stringify(t));
	      },
	      fetch: function fetch(e) {
	        if (!o(e)) throw new error(415);return wx.getStorageSync(e) || null;
	      },
	      remove: function remove(e) {
	        if (!o(e)) throw new error(415);return wx.removeStorageSync(e);
	      },
	      clear: function clear() {
	        return wx.clearStorageSync();
	      } };
	
	    e.exports = i;
	  }, function (e, t, n) {
	    var _n9 = n(2),
	        r = _n9.isObject,
	        o = _n9.isString,
	        s = _n9.isNumber,
	        i = $app_require$('@app-module/system.storage'),
	        a = {
	      save: function save(e, t) {
	        if (!o(e) || !t) throw new error(415);i.set({ key: e, value: JSON.stringify(t), success: function success(e) {
	            return console.log("handling success"), e;
	          }, fail: function fail(e, t) {
	            console.log("handling fail, code = " + t);
	          } });
	      },
	      fetch: function fetch(e) {
	        if (!o(e)) throw new error(415);return new Promise(function (t, n) {
	          return i.get({ key: e, success: function success(e) {
	              t(e || null);
	            }, fail: function fail(e, t) {
	              console.log("handling fail, code = " + t), n(e);
	            } });
	        });
	      },
	      remove: function remove(e) {
	        if (!o(e)) throw new error(415);i.delete({ key: e, success: function success(e) {
	            console.log("handling success");
	          }, fail: function fail(e, t) {
	            console.log("handling fail, code = " + t);
	          } });
	      },
	      clear: function clear() {
	        i.clear({ success: function success(e) {
	            console.log("handling success");
	          }, fail: function fail(e, t) {
	            console.log("handling fail, code = " + t);
	          } });
	      }
	    };
	
	    e.exports = a;
	  }, function (e, t, n) {
	    var _n10 = n(2),
	        r = _n10.isObject,
	        o = _n10.isString,
	        s = _n10.isNumber,
	        i = {
	      save: function save(e, t) {},
	      fetch: function fetch(e) {
	        return null;
	      }, remove: function remove(e) {},
	      clear: function clear() {}
	    };
	
	    e.exports = i;
	  }, function (e, t, n) {
	    var r = n(4);var o = n(0);var s = n(5),
	        i = n(3),
	        a = $app_require$('@app-module/system.request'),
	        _n11 = n(2),
	        c = _n11.isObject,
	        u = _n11.isString,
	        p = _n11.isArray;var l = [];e.exports = function () {
	      function _class4(e, t) {
	        _classCallCheck(this, _class4);
	
	        if (e && t) {
	          if (!u(e)) throw new s(415);l.push({ name: e, route: o._config.parameters.FILES + "/" + e, data: t });
	        }
	      }
	
	      _createClass(_class4, [{
	        key: "save",
	        value: function save() {
	          if (!l.length) throw new s(417);var e = void 0;var t = i.getAppType();return "h5" == t || "nodejs" == t ? e = new Promise(function (e, t) {
	            var n = [];var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	              for (var _iterator = l[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var _o3 = _step.value;
	                r(_o3.route, "post", _o3.data).then(function (r) {
	                  n.push(r), n.length == l.length && (l = [], e(n), t(n));
	                }).catch(function (e) {
	                  n.push(e);
	                });
	              }
	            } catch (err) {
	              _didIteratorError = true;
	              _iteratorError = err;
	            } finally {
	              try {
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                  _iterator.return();
	                }
	              } finally {
	                if (_didIteratorError) {
	                  throw _iteratorError;
	                }
	              }
	            }
	          }) : "wx" == t ? e = new Promise(function (e, t) {
	            void 0 == o.User && (o = n(0));var r = o.User.current();if (!r) throw new s(418);var i = [],
	                a = { _ApplicationId: o._config.applicationId, _RestKey: o._config.applicationKey, _SessionToken: r.sessionToken },
	                c = Object.assign({ _ContentType: "text/plain", mime_type: "text/plain", category: "wechatApp", _ClientVersion: "js3.6.1", _InstallationId: "bmob" }, a);var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;
	
	            try {
	              for (var _iterator2 = l[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                var _n12 = _step2.value;
	                wx.uploadFile({ url: o._config.host + _n12.route, filePath: _n12.data, name: "file", header: { "X-Bmob-SDK-Type": "wechatApp" }, formData: c, success: function success(n) {
	                    var r = n.data;i.push(r), i.length == l.length && (l = [], e(i), t(i));
	                  }, fail: function fail(e) {
	                    i.push(e);
	                  } });
	              }
	            } catch (err) {
	              _didIteratorError2 = true;
	              _iteratorError2 = err;
	            } finally {
	              try {
	                if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                  _iterator2.return();
	                }
	              } finally {
	                if (_didIteratorError2) {
	                  throw _iteratorError2;
	                }
	              }
	            }
	          }) : "hap" == t && (e = new Promise(function (e, t) {
	            void 0 == o.User && (o = n(0));var r = o.User.current();if (!r) throw new s(418);var i = [],
	                c = { _ApplicationId: o._config.applicationId, _RestKey: o._config.applicationKey, _SessionToken: r.sessionToken },
	                u = Object.assign({ _ContentType: "text/plain", mime_type: "text/plain", category: "wechatApp", _ClientVersion: "js3.6.1", _InstallationId: "bmob" }, c);var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;
	
	            try {
	              for (var _iterator3 = l[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                var _n13 = _step3.value;
	                a.upload({ url: o._config.host + _n13.route, files: [{ uri: _n13.data, name: "file", filename: _n13.name }], header: { "X-Bmob-SDK-Type": "wechatApp" }, data: u, success: function success(n) {
	                    console.log("handling success" + i);var r = n.data;i.push(r), i.length == l.length && (l = [], e(i), t(i));
	                  }, fail: function fail(e, t) {
	                    console.log("handling fail, code = " + t);
	                  } });
	              }
	            } catch (err) {
	              _didIteratorError3 = true;
	              _iteratorError3 = err;
	            } finally {
	              try {
	                if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                  _iterator3.return();
	                }
	              } finally {
	                if (_didIteratorError3) {
	                  throw _iteratorError3;
	                }
	              }
	            }
	          })), e;
	        }
	      }, {
	        key: "destroy",
	        value: function destroy(e) {
	          if (u(e)) return r(o._config.parameters.FILES + "/upyun/" + e.split(".com/")[1], "delete");if (p(e)) {
	            var _t = [];return e.map(function (e) {
	              _t.push(e.split(".com/")[1]);
	            }), r(o._config.parameters.DELFILES, "post", { upyun: _t });
	          }throw new s(415);
	        }
	      }]);
	
	      return _class4;
	    }();
	  }, function (e, t, n) {
	    var r = n(4),
	        o = n(0),
	        s = n(5),
	        _n14 = n(2),
	        i = _n14.isObject,
	        a = _n14.isString,
	        c = _n14.isArray;e.exports = function () {
	      function _class5() {
	        _classCallCheck(this, _class5);
	      }
	
	      _createClass(_class5, [{
	        key: "weApp",
	        value: function weApp(e, t, n) {
	          var i = wx.getStorageSync("openid");if (!(e && t && n && i)) throw new s(416);var a = { order_price: e, product_name: t, body: n, open_id: i, pay_type: 4 };var c = o._config.parameters.PAY;return r(c, "post", a);
	        }
	      }]);
	
	      return _class5;
	    }();
	  }, function (t, n, r) {
	    var o = r(0),
	        s = r(5),
	        i = {
	      setup: function setup(e) {
	        var t = [];Object.assign(e, {
	          on: function on(e, n) {
	            "function" == typeof n && t.push([e, n]);
	          },
	          emit: function emit(e) {
	            for (var _len6 = arguments.length, n = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
	              n[_key6 - 1] = arguments[_key6];
	            }
	
	            t.forEach(function (_ref4) {
	              var _ref5 = _slicedToArray(_ref4, 2),
	                  t = _ref5[0],
	                  r = _ref5[1];
	
	              return e == t && r.apply(undefined, _toConsumableArray(n));
	            });
	          },
	          removeAllListeners: function removeAllListeners() {
	            t = [];
	          }
	        });
	      }
	    };t.exports = function () {
	      function _class6() {
	        _classCallCheck(this, _class6);
	
	        if (!o._config.applicationId) throw new s(415);this.config = { host: "wss.bmobcloud.com" }, i.setup(this.emitter = {}), this.applicationId = o._config.applicationId, this.initialize();
	      }
	
	      _createClass(_class6, [{
	        key: "handshake",
	        value: function handshake() {
	          var t = "https://" + this.config.host + "/socket.io/1/?t=" + new Date().getTime(),
	              n = JSON.stringify({});return new Promise(function (r, o) {
	            wx.request({ method: "GET", url: t, data: n, header: { "content-type": "text/plain" }, success: function success(t) {
	                return t.data && t.data.statusCode ? r("request error", e) : 200 != t.statusCode ? r("request error", e) : r(function (e) {
	                  if (!(e instanceof Error)) return e.split(":")[0];self.connecting = !1, self.onError(e.message);
	                }(t.data));
	              }, fail: function fail(e) {
	                return r("request error", e);
	              } });
	          });
	        }
	      }, {
	        key: "initialize",
	        value: function initialize() {
	          var _this10 = this;
	
	          return this.handshake().then(function (e) {
	            try {
	              _this10.connect("wss://" + _this10.config.host + "/socket.io/1/websocket/" + e, {});
	            } catch (e) {
	              throw console.error({ connectError: e }), e;
	            }
	          }), this.on("close", function () {
	            console.log("连接已中断");
	          }), new Promise(function (e, t) {
	            _this10.on("server_pub", function (e) {
	              switch (e.action) {case "updateTable":
	                  _this10.onUpdateTable(e.tableName, e.data);break;case "updateRow":
	                  _this10.onUpdateRow(e.tableName, e.objectId, e.data);break;case "deleteTable":
	                  _this10.onDeleteTable(e.tableName, e.data);break;case "deleteRow":
	                  _this10.onDeleteRow(e.tableName, e.objectId, e.data);}
	            }), _this10.on("client_send_data", function (e) {
	              _this10.onInitListen();
	            });
	          });
	        }
	      }, {
	        key: "onInitListen",
	        value: function onInitListen() {}
	      }, {
	        key: "connect",
	        value: function connect(e, t) {
	          var _this11 = this;
	
	          var n = Object.keys(t).map(function (e) {
	            return e + "=" + encodeURIComponent(t[e]);
	          }).join("&"),
	              r = e.indexOf("?") > -1 ? "&" : "?";return e = [e, n].join(r), new Promise(function (n, r) {
	            wx.onSocketOpen(n), wx.onSocketError(r), wx.onSocketMessage(function (e) {
	              try {
	                var _t2 = function _t2(e) {
	                  var _JSON$parse = JSON.parse(e),
	                      t = _JSON$parse.name,
	                      n = _JSON$parse.args;
	
	                  return { name: t, args: n };
	                },
	                    _n15 = e.data;if ("2:::" === _n15.slice(0, 4) && _this11.emit(!1, !0), null == (_n15 = _n15.slice(4)) || "" == _n15) return;
	                var _t3 = _t2(_n15),
	                    _r4 = _t3.name,
	                    _o4 = _t3.args;
	
	                var _s3 = null == _o4 ? "" : JSON.parse(_o4[0]);_this11.emitter.emit(_r4, _s3);
	              } catch (t) {
	                console.log("Handle packet failed: " + e.data, t);
	              }
	            }), wx.onSocketClose(function () {
	              return _this11.emitter.emit("close");
	            }), wx.connectSocket({ url: e, header: t });
	          });
	        }
	      }, {
	        key: "on",
	        value: function on(e, t) {
	          this.emitter.on(e, t);
	        }
	      }, {
	        key: "emit",
	        value: function emit(e, t) {
	          t = void 0 == t ? "5:::" : "2:::", e = e ? JSON.stringify(e) : "", wx.sendSocketMessage({ data: t + e });
	        }
	      }, {
	        key: "emitData",
	        value: function emitData(e, t) {
	          return { name: e, args: [t = JSON.stringify(t)] };
	        }
	      }, {
	        key: "updateTable",
	        value: function updateTable(e) {
	          var t = { appKey: this.applicationId, tableName: e, objectId: "", action: "updateTable" };t = this.emitData("client_sub", t), this.emit(t);
	        }
	      }, {
	        key: "unsubUpdateTable",
	        value: function unsubUpdateTable(e) {
	          var t = { appKey: this.applicationId, tableName: e, objectId: "", action: "unsub_updateTable" };t = this.emitData("client_sub", t), this.emit(t);
	        }
	      }, {
	        key: "updateRow",
	        value: function updateRow(e, t) {
	          var n = { appKey: this.applicationId, tableName: e, objectId: t, action: "updateRow" };n = this.emitData("client_sub", n), this.emit(n);
	        }
	      }, {
	        key: "unsubUpdateRow",
	        value: function unsubUpdateRow(e, t) {
	          var n = { appKey: this.applicationId, tableName: e, objectId: t, action: "unsub_updateRow" };n = this.emitData("client_sub", n), this.emit(n);
	        }
	      }, {
	        key: "deleteTable",
	        value: function deleteTable(e) {
	          var t = { appKey: this.applicationId, tableName: e, objectId: "", action: "deleteTable" };t = this.emitData("client_sub", t), this.emit(t);
	        }
	      }, {
	        key: "unsubDeleteTable",
	        value: function unsubDeleteTable(e) {
	          var t = { appKey: this.applicationId, tableName: e, objectId: "", action: "unsub_deleteTable" };t = this.emitData("client_sub", t), this.emit(t);
	        }
	      }, {
	        key: "deleteRow",
	        value: function deleteRow(e, t) {
	          var n = { appKey: this.applicationId, tableName: e, objectId: t, action: "deleteRow" };n = this.emitData("client_sub", n), this.emit(n);
	        }
	      }, {
	        key: "unsubDeleteRow",
	        value: function unsubDeleteRow(e, t) {
	          var n = { appKey: this.applicationId, tableName: e, objectId: t, action: "unsub_deleteRow" };n = this.emitData("client_sub", n), this.emit(n);
	        }
	      }, {
	        key: "onUpdateTable",
	        value: function onUpdateTable(e, t) {}
	      }, {
	        key: "onUpdateRow",
	        value: function onUpdateRow(e, t, n) {}
	      }, {
	        key: "onDeleteTable",
	        value: function onDeleteTable(e, t) {}
	      }, {
	        key: "onDeleteRow",
	        value: function onDeleteRow(e, t, n) {}
	      }]);
	
	      return _class6;
	    }();
	  }, function (e, t, n) {
	    var r = n(4),
	        o = n(0),
	        s = n(5),
	        _n16 = n(2),
	        i = _n16.isObject,
	        a = _n16.isString;e.exports = { generateCode: function generateCode(e) {
	        if (!i(e)) throw new s(415);var t = o._config.parameters.GENERATECODE;return r(t, "post", e);
	      }, sendMessage: function sendMessage(e) {
	        return 1;
	      }, getAccessToken: function getAccessToken(e) {
	        var t = o._config.parameters.GETACCESSTOKEN;return r(t, "get");
	      }, sendWeAppMessage: function sendWeAppMessage(e) {
	        if (!i(e)) throw new s(415);var t = o._config.parameters.SENDWEAPPMESSAGE;return r(t, "post", e);
	      }, refund: function refund(e) {
	        if (!i(e)) throw new s(415);var t = o._config.parameters.REFUND;return r(t, "post", e);
	      }, notifyMsg: function notifyMsg(e) {
	        if (!i(e)) throw new s(415);var t = o._config.parameters.NOTIFYMSG;return r(t, "post", e);
	      }, functions: function functions(e, t) {
	        if (t || (t = {}), !a(e)) throw new s(415);var n = o._config.parameters.FUNCTIONS + "/" + e;return r(n, "post", t);
	      }, timestamp: function timestamp() {
	        var e = o._config.parameters.TIMESTAMP;return r(e, "get");
	      }, requestPasswordReset: function requestPasswordReset(e) {
	        if (!i(e)) throw new s(415);var t = o._config.parameters.REQUESTPASSWORDRESET;return r(t, "post", e);
	      }, resetPasswordBySmsCode: function resetPasswordBySmsCode(e, t) {
	        if (!a(e)) throw new s(415);var n = o._config.parameters.RESETPASSWORDBYSMSCODE + "/" + e;return r(n, "put", t);
	      }, updateUserPassword: function updateUserPassword(e, t) {
	        if (!i(t) || !a(e)) throw new s(415);var n = o._config.parameters.UPDATEUSERPASSWORD + "/" + e;return r(n, "put", t);
	      }, push: function push(e) {
	        if (!i(e)) throw new s(415);var t = o._config.parameters.PUSH;return r(t, "post", e);
	      } };
	  }, function (e, t, n) {
	    var r = n(4),
	        o = n(0),
	        s = n(5),
	        _n17 = n(2),
	        i = _n17.isObject,
	        a = _n17.isString;e.exports = { requestSmsCode: function requestSmsCode(e, t) {
	        if (!i(e)) throw new s(415);var n = o._config.parameters.REQUESTSMSCODE;return r(n, "post", e);
	      }, verifySmsCode: function verifySmsCode(e, t) {
	        if (!a(e)) throw new s(415);var n = o._config.parameters.VERIFYSMSCODE + "/" + e;return r(n, "post");
	      } };
	  }]);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "demo-page"
	  ],
	  "children": [
	    {
	      "type": "text",
	      "attr": {
	        "value": function () {return this.text}
	      },
	      "classList": [
	        "title"
	      ]
	    },
	    {
	      "type": "text",
	      "attr": {
	        "tid": "id"
	      },
	      "repeat": function () {return this.list},
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.$idx}
	          }
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.$item.id}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = {
	  ".demo-page": {
	    "flexDirection": "column",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  ".title": {
	    "fontSize": "40px",
	    "textAlign": "center"
	  }
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _BmobHap111Min = __webpack_require__(7);
	
	var _BmobHap111Min2 = _interopRequireDefault(_BmobHap111Min);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: {
	    text: '登陆后你的用户信息，打印在console'
	  },
	  onInit: function onInit() {
	    _BmobHap111Min2.default.User.current().then(function (res) {
	      console.log('您的用户信息', JSON.stringify(res));
	    }).catch(function (err) {
	      console.log('err', JSON.stringify(err));
	    });
	  },
	  onMenuPress: function onMenuPress() {
	    this.$app.showMenu();
	  }
	};
	
	
	var moduleOwn = exports.default || module.exports;
	var accessors = ['public', 'protected', 'private'];
	
	if (moduleOwn.data && accessors.some(function (acc) {
	  return moduleOwn[acc];
	})) {
	  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
	} else if (!moduleOwn.data) {
	  moduleOwn.data = {};
	  moduleOwn._descriptor = {};
	  accessors.forEach(function (acc) {
	    var accType = _typeof(moduleOwn[acc]);
	    if (accType === 'object') {
	      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
	      for (var name in moduleOwn[acc]) {
	        moduleOwn._descriptor[name] = { access: acc };
	      }
	    } else if (accType === 'function') {
	      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
	    }
	  });
	}}

/***/ }
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map