function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn-bd": "./node_modules/moment/locale/bn-bd.js",
      "./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-mx": "./node_modules/moment/locale/es-mx.js",
      "./es-mx.js": "./node_modules/moment/locale/es-mx.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/add-slots/add-slots.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/add-slots/add-slots.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAddSlotsAddSlotsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <div class=\"row\">\n    <div class=\"col\">\n      <form\n      method=\"POST\"\n      [formGroup]=\"form\"\n      (submit)=\"addTotalSlots()\"\n    >\n      <mat-card>\n        <mat-card-actions>\n          <div class=\"row\">\n            <div class=\"col-8\">\n              <mat-form-field appearance=\"outline\">\n              <mat-label>Total number of slots</mat-label>\n              <input matInput type=\"number\" class=\"totalSlots\" formControlName=\"totalSlots\" />\n              <mat-error>Enter  number from 1 to 300</mat-error>\n            </mat-form-field>\n           </div>\n            <div class=\"col-4\">\n              <button mat-raised-button class=\"button\" [disabled]=\"form.invalid\">\n                Submit\n              </button>\n            </div>\n          </div>\n        </mat-card-actions>\n      </mat-card>\n    </form>\n    </div>\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/add-update/add-update.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/add-update/add-update.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAddUpdateAddUpdateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mdb-card>\n  <mdb-card-body>\n    <mdb-card-title>{{btnName}} Study Center</mdb-card-title>\n    <form method=\"POST\" [formGroup]=\"form\" (submit)=\"addUpdateStudyCenter()\">\n      <div class=\"row\">\n        <div class=\"col-md-6 col-sm-12\">\n          <div class=\"md-form md-outline\">\n            <input\n              type=\"text\"\n              id=\"name\"\n              class=\"form-control\"\n              name=\"title\"\n              required\n              mdbInput\n              formControlName=\"title\"\n            />\n            <label for=\"name\">Enter Name of Center</label>\n            <mat-error\n              *ngIf=\"\n                this.form.get('title').invalid && this.form.get('title').touched\n              \"\n            >\n              Please enter atleast 3 characters</mat-error\n            >\n          </div>\n          <div class=\"md-form md-outline\">\n            <input\n              type=\"text\"\n              id=\"add\"\n              class=\"form-control\"\n              mdbInput\n              formControlName=\"address\"\n              name=\"address\"\n              required\n            />\n            <label for=\"add\">Address</label>\n            <mat-error\n              *ngIf=\"\n                this.form.get('address').invalid &&\n                this.form.get('address').touched\n              \"\n              >Please enter address</mat-error\n            >\n          </div>\n          <div class=\"md-form md-outline\">\n            <input\n              type=\"text\"\n              id=\"pin\"\n              class=\"form-control\"\n              mdbInput\n              formControlName=\"pincode\"\n              name=\"pincode\"\n              required\n            />\n            <label for=\"pin\">Pincode</label>\n            <mat-error\n              *ngIf=\"\n                this.form.get('pincode').invalid &&\n                this.form.get('pincode').touched\n              \"\n              >Please enter 6 number pincode</mat-error\n            >\n          </div>\n          <div class=\"md-form md-outline\">\n            <input\n              type=\"email\"\n              id=\"email\"\n              class=\"form-control\"\n              mdbInput\n              formControlName=\"email\"\n              name=\"email\"\n              required\n            />\n            <label for=\"email\">Emailid</label>\n            <mat-error\n              *ngIf=\"\n                this.form.get('email').invalid && this.form.get('email').touched\n              \"\n              >Please enter emailid</mat-error\n            >\n          </div>\n          <div class=\"md-form md-outline\">\n            <input\n              type=\"number\"\n              id=\"mob\"\n              class=\"form-control\"\n              mdbInput\n              formControlName=\"mobileno\"\n              name=\"mobileno\"\n              required\n            />\n            <label for=\"mob\">Mobile</label>\n            <mat-error\n              *ngIf=\"\n                this.form.get('mobileno').invalid &&\n                this.form.get('mobileno').touched\n              \"\n              >Please enter 10 digit mobile number</mat-error\n            >\n          </div>\n          <div class=\"md-form md-outline\">\n            <input\n              type=\"text\"\n              id=\"seats\"\n              class=\"form-control\"\n              mdbInput\n              formControlName=\"totalSlots\"\n              name=\"totalSlots\"\n              required\n            />\n            <label for=\"seats\">Total number of seats</label>\n            <mat-error\n              *ngIf=\"\n                this.form.get('totalSlots').invalid &&\n                this.form.get('totalSlots').touched\n              \"\n              >Please enter total number of slots</mat-error\n            >\n          </div>\n        </div>\n        <div class=\"col-md-6 col-sm-12\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label>Select state</mat-label>\n            <mat-select\n              name=\"state\"\n              formControlName=\"state\"\n              (selectionChange)=\"stateSelected(stateSelect.value)\"\n              [value]=\"form.get('state').value\"\n              #stateSelect\n            >\n              <mat-option\n                *ngFor=\"let state of allStateDist\"\n                [value]=\"state.name\"\n                >{{ state.name }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <mat-form-field *ngIf=\"allDists.length > 0\" appearance=\"outline\">\n            <mat-label>Select district</mat-label>\n            <mat-select name=\"district\" formControlName=\"district\">\n              <mat-option *ngFor=\"let dist of allDists\" [value]=\"dist.name\"\n                >{{ dist.name }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n          <div class=\"md-form md-outline\">\n            <input\n              type=\"text\"\n              id=\"city\"\n              class=\"form-control\"\n              mdbInput\n              formControlName=\"city\"\n              name=\"city\"\n              required\n            />\n            <label for=\"city\"> City </label>\n            <mat-error\n              *ngIf=\"\n                this.form.get('city').invalid && this.form.get('city').touched\n              \"\n              >Please enter city name</mat-error\n            >\n          </div>\n          <div class=\"md-form md-outline\">\n            <input\n              type=\"text\"\n              id=\"area\"\n              class=\"form-control\"\n              mdbInput\n              formControlName=\"area\"\n              name=\"area\"\n              required\n            />\n            <label for=\"area\">Area </label>\n            <mat-error\n              *ngIf=\"\n                this.form.get('area').invalid && this.form.get('area').touched\n              \"\n            >\n              Please enter area of the center\n            </mat-error>\n          </div>\n          <div>\n            <div class=\"row\">\n              <div class=\"col-4\">\n                <button\n                  mat-stroked-button\n                  color=\"primary\"\n                  type=\"button\"\n                  name=\"btn\"\n                  (click)=\"file.click()\"\n                >\n                  Choose image\n                </button>\n              </div>\n              <div class=\"col-8\" style=\"display: flex;\">\n                <div class=\"image_preview\" *ngIf=\"imagePreview\">\n                  <img [src]=\"imagePreview\" alt=\"File not found\" />\n                </div>\n               </div>\n            </div>\n            <input\n            type=\"file\"\n            name=\"enteredFile\"\n            (change)=\"onImagePicked($event)\"\n            #file\n          />\n          <mat-error\n            *ngIf=\"form.get('image').invalid && form.get('image').touched\"\n            >Please select image</mat-error >\n           </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-md-12\">\n          <button\n            type=\"submit\"\n            color=\"accent\"\n            mat-raised-button\n            [disabled]=\"form.invalid\"\n          >\n            Submit\n          </button>\n          <button type=\"submit\" color=\"accent\" mat-raised-button routerLink=\"/\">\n            cancel\n          </button>\n        </div>\n      </div>\n    </form>\n  </mdb-card-body>\n</mdb-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/assign-slot/assign-slot.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/assign-slot/assign-slot.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAssignSlotAssignSlotComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-spinner *ngIf=\"this.isLoading\"></mat-spinner>\n<mat-card *ngIf=\"!this.isLoading\">\n  <form method=\"POST\" [formGroup]=\"form\" *ngIf=\"isSelected()\" (submit)=\"allotSlot()\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label >Slot No</mat-label>\n      <input type=\"text\" matInput formControlName=\"slotId\" [value]=\"slot.slotId\" readonly >\n    </mat-form-field>\n\n    <mat-form-field appearance=\"outline\" *ngIf=\"slot.isBooked\">\n      <mat-label >Email Id</mat-label>\n      <input type=\"text\" matInput  hidden formControlName=\"studId\"  readonly  >\n      {{studData.email}}\n    </mat-form-field>\n    <mat-form-field appearance=\"outline\" *ngIf=\"slot.isBooked\">\n      <mat-label >Balance</mat-label>\n      <input type=\"text\" matInput   formControlName=\"balance\"  readonly  >\n    </mat-form-field>\n    <mat-form-field appearance=\"outline\" *ngIf=\"!slot.isBooked\">\n      <mat-label class=\"studLablel\" *ngIf=\"studList.length>0\">Select Student</mat-label>\n      <mat-label class=\"studLablel\" *ngIf=\"!(studList.length>0)\" color=\"warn\">Please add more students to allot</mat-label>\n      <mat-select  appearance=\"outline\" formControlName=\"studId\" [disabled]=\"!(studList.length>0)\">\n        <mat-option *ngFor=\"let stud of studList\" [value]=\"stud._id\" [disabled]=\"!(studList.length>0)\">{{stud.email}} </mat-option>\n      </mat-select>\n    </mat-form-field>\n   <mat-form-field appearance=\"outline\" (click)=\"bookedDatepicker.open()\">\n    <mat-label>Booked Date</mat-label>\n    <input formControlName=\"bookedDate\" matInput [matDatepicker]=\"bookedDatepicker\"   (keypress)=\"bookedDatepicker.open()\" [min]=\"currentDate\">\n    <mat-datepicker-toggle matSuffix [for]=\"bookedDatepicker\"></mat-datepicker-toggle>\n    <mat-datepicker #bookedDatepicker></mat-datepicker>\n  </mat-form-field>\n  <mat-form-field appearance=\"outline\" (click)=\"endDatePicker.open()\" *ngIf=\"form.get('bookedDate').valid\" >\n    <mat-label>End Date</mat-label>\n    <input  formControlName=\"endDate\" matInput [matDatepicker]=\"endDatePicker\" [matDatepickerFilter]=\"myFilter\" (keypress)=\"endDatePicker.open()\">\n    <mat-datepicker-toggle matSuffix [for]=\"endDatePicker\"></mat-datepicker-toggle>\n    <mat-datepicker #endDatePicker></mat-datepicker>\n  </mat-form-field>\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Total Fees</mat-label>\n    <input   type=\"number\" formControlName=\"totalFees\" matInput>\n  </mat-form-field>\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Fees Paid</mat-label>\n    <input type=\"number\" formControlName=\"paidFees\" matInput  >\n  </mat-form-field>\n    <button type=\"submit\"     mat-raised-button color=\"accent\" [disabled]=\"form.invalid\">Add</button>\n    <button mat-button (click)=\"redTransaction()\" type=\"button\">All Transactions </button>\n\n  </form>\n</mat-card>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/comments/comments.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/comments/comments.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminCommentsCommentsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <h3 class=\"text-center\">{{comments.length>0?\"Student comments\":\"No comments added\"}}</h3>\n    </div>\n  </div>\n  <div class=\"row row-2\" *ngIf=\"isStudAuthed\">\n    <div class=\"col-md-12 col-sm-12 col-lg-12 \">\n      <div class=\"new-comment\">\n      <div class=\"img-area\" *ngIf=\"studData\">\n        <img [src]=\"studData.image\" class=\"review-img\" alt=\"\" />\n      </div>\n      <div class=\"comment-field\">\n        <form [formGroup]=\"form\"  >\n          <mat-form-field>\n            <input\n              matInput\n              placeholder=\"Add a public comment\"\n              formControlName=\"comment\"\n            />\n          </mat-form-field>\n          <div class=\"review-action\" >\n            <button mat-button type=\"button\" (click)='resetForm()'>Cancel</button>\n            <button\n            type=\"button\"\n              mat-stroked-button\n              color=\"primary\"\n              [disabled]=\"form.invalid\"\n              (click)=\"createComments()\"\n            >\n              Comment\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n    </div>\n  </div>\n\n  <div class=\"row row-2\" *ngFor=\"let comment of comments\">\n    <div class=\"col-md-12 col-sm-12 col-lg-12 \">\n      <div class=\"main-area\">\n      <div class=\"img-area\">\n        <img [src]=\"comment.studId.image\" class=\"review-img\" alt=\"\" />\n      </div>\n      <div class=\"review-text\" [class.review-text2]=\"!isAdmin\">\n        <h6>{{ comment.studId.name }}</h6>\n        <p>{{ comment.comment }}</p>\n      </div>\n      <div class=\"admin-review-action\" *ngIf=\"isAdmin||isStudAuthed\">\n        <button *ngIf=\"studId==comment.studId._id || isAdmin\" mat-stroked-button color=\"warn\" (click)=\"deleteComment(comment._id)\" >Delete</button>\n        <button\n        *ngIf=\"isAdmin\"\n          mat-stroked-button\n          color=\"primary\"\n          (click)=\"toggleComment(comment._id, !comment.isValid)\"\n        >\n           {{ !comment.isValid ? \"Accept\" : \"Block\" }}\n        </button>\n      </div>\n    </div>\n  </div>\n  </div>\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/facilities/add-updatefacs/add-updatefacs.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/facilities/add-updatefacs/add-updatefacs.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminFacilitiesAddUpdatefacsAddUpdatefacsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mdb-card>\n  <mdb-card-body>\n    <mdb-card-title>{{btnName}} Facility</mdb-card-title>\n    <form method=\"POST\" [formGroup]=\"form\" (submit)=\"addFacilities()\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <mat-form-field *ngIf=\"btnName==='Add'\" appearance=\"outline\" >\n          <mat-label class=\"facLabel\" facLabel>Select Facility</mat-label>\n          <mat-select  name=\"title\" formControlName=\"title\">\n            <mat-option value=\"CC Camera\">CC Camera  </mat-option>\n            <mat-option value=\"WIFI\">WIFI  </mat-option>\n            <mat-option   value=\"Security\">Security </mat-option>\n            <mat-option value=\"News Papers\">News papers  </mat-option>\n            <mat-option value=\"Drinking Water\">Drinking Water </mat-option>\n            <mat-option value=\"Open24/7\">24/7 accessability  </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field *ngIf=\"btnName==='Update'\" appearance=\"outline\">\n          <input matInput type=\"text\" name='title' readonly formControlName=\"title\">\n        </mat-form-field>\n         <div class=\"md-form md-outline\">\n          <input type=\"text\" id=\"Subtitle\" class=\"form-control\" mdbInput formControlName='subtitle' name=\"subtitle\" required >\n          <label for=\"Subtitle\">Subtitle</label>\n          <mat-error *ngIf=\"this.form.get('subtitle').invalid && this.form.get('subtitle').touched\"\n          >Subtitle Required</mat-error>\n        </div>\n        <div class=\"md-form md-outline\">\n          <textarea rows=\"3\" cols=\"8\" type=\"text\" id=\"description\" class=\"form-control\" mdbInput formControlName='description' name=\"description\" required ></textarea>\n          <label for=\"description\">Description</label>\n          <mat-error *ngIf=\"this.form.get('description').invalid &&this.form.get('description').touched\"\n          >Please enter description</mat-error>\n        </div>\n        <div>\n          <div class=\"row\">\n            <div class=\"col-5\">\n              Select an Image of {{form.get(\"title\").value}} facility\n          </div>\n            <div class=\"col-2\"><button type=\"button\" mat-raised-button color=\"primary\" (click)=\"file.click()\">Pick image</button></div>\n          <div class=\"col-5\">\n            <img [src]=\"imagePreview\" width=\"200px\" height=\"200px\" *ngIf=\"imagePreview\">\n          </div>\n          </div>\n          <input id=\"image\" type=\"file\" name=\"file\" #file required (change)=\"onImagePicked($event)\">\n        </div>\n      </div>\n    </div>\n    <button type=\"submit\" mat-raised-button [disabled]=\"form.invalid\" color=\"primary\"  >{{btnName}}</button>\n    <a   mat-raised-button  routerLink=\"/\" color=\"primary\"  class=\"cancel\">cancel</a>\n  </form>\n </mdb-card-body>\n</mdb-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/facilities/viewfac/viewfac.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/facilities/viewfac/viewfac.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminFacilitiesViewfacViewfacComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row no-facilities\" *ngIf=\"facilities.length == 0 && !isLoading\">\n  <div class=\"col\">\n    <h4>No Facilities added</h4>\n  </div>\n  <div class=\"col\">\n    <button mat-stroked-button routerLink=\"/addUpdateFacility\">Add Now!</button>\n  </div>\n</div>\n<div class=\"row\" *ngIf=\"facilities.length != 0 && !isLoading\">\n  <div\n    class=\"col-md-4 col-lg-4 col-sm-12\"\n    (mouseleave)=\"toggle(null)\"\n    *ngFor=\"let fac of facilities; index as index\"\n  >\n    <div\n      [id]=\"'fac' + index\"\n      class=\"all\"\n      [class.full-text]=\"(index + 1) % 3 !== 0\"\n      [class.isLeft]=\"(index + 1) % 3 === 0\"\n    >\n      <p>\n        {{ fac.description }}\n      </p>\n    </div>\n    <mat-card\n      class=\"example-card\"\n      (mouseenter)=\"toggle(index)\"\n      [class.mat-card-admin]=\"isAdmin\"\n    >\n      <mat-card-header>\n        <mat-card-title>{{ fac.title }}</mat-card-title>\n        <mat-card-subtitle>{{ fac.subtitle | summary: 20 }}</mat-card-subtitle>\n      </mat-card-header>\n      <img\n        mat-card-image\n        [src]=\"fac.image\"\n        [alt]=\"fac.title\"\n        style=\"height: 150px\"\n      />\n\n      <mat-card-content>\n        <p>\n          {{ fac.description | summary: 100 }}\n        </p>\n      </mat-card-content>\n      <mat-card-actions *ngIf=\"isAdmin\">\n        <a\n          mat-stroked-button\n          color=\"accent\"\n          [routerLink]=\"['/addUpdateFacility']\"\n          [queryParams]=\"fac\"\n        >\n          Edit</a\n        >\n        <a mat-stroked-button color=\"warn\" (click)=\"deleteFac(fac._id)\">\n          Delete</a\n        >\n      </mat-card-actions>\n    </mat-card>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/payment/update-payment/update-payment.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/payment/update-payment/update-payment.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminPaymentUpdatePaymentUpdatePaymentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card>\n  <form method=\"POST\" [formGroup]=\"form\" *ngIf=\"isSelected()\" (submit)=\"allotSlot()\">\n    <mat-form-field appearance=\"outline\">\n      <mat-label >Slot No</mat-label>\n      <input type=\"text\" matInput formControlName=\"slotId\" [value]=\"slot.slotId\" readonly >\n    </mat-form-field>\n\n    <mat-form-field appearance=\"outline\" *ngIf=\"slot.isBooked\">\n      <mat-label >Email Id</mat-label>\n      <input type=\"text\" matInput  hidden formControlName=\"studId\"  readonly  >\n      {{studData.email}}\n    </mat-form-field>\n    <mat-form-field appearance=\"outline\" *ngIf=\"slot.isBooked\">\n      <mat-label >Balance</mat-label>\n      <input type=\"text\" matInput   formControlName=\"balance\"  readonly  >\n    </mat-form-field>\n\n   <mat-form-field appearance=\"outline\" (click)=\"bookedDatepicker.open()\">\n    <mat-label>Transaction Date</mat-label>\n    <input formControlName=\"bookedDate\" matInput [matDatepicker]=\"bookedDatepicker\" (keypress)=\"bookedDatepicker.open()\" >\n    <mat-datepicker-toggle matSuffix [for]=\"bookedDatepicker\"></mat-datepicker-toggle>\n    <mat-datepicker #bookedDatepicker></mat-datepicker>\n  </mat-form-field>\n  <mat-form-field appearance=\"outline\" (click)=\"endDatePicker.open()\">\n    <mat-label>End Date</mat-label>\n    <input formControlName=\"endDate\" matInput [matDatepicker]=\"endDatePicker\" (keypress)=\"endDatePicker.open()\">\n    <mat-datepicker-toggle matSuffix [for]=\"endDatePicker\"></mat-datepicker-toggle>\n    <mat-datepicker #endDatePicker></mat-datepicker>\n  </mat-form-field>\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Total Fees</mat-label>\n    <input   type=\"number\" formControlName=\"totalFees\" matInput>\n  </mat-form-field>\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Fees Paid</mat-label>\n    <input type=\"number\" formControlName=\"paidFees\" matInput  >\n  </mat-form-field>\n    <button type=\"submit\"     mat-raised-button color=\"accent\">Add</button>\n  </form>\n</mat-card>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/view-allotted/view-allotted.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/view-allotted/view-allotted.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminViewAllottedViewAllottedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n\n<mat-card class=\"example-card\" *ngIf=\"isLoaded()&&!isLoading\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\" [style.backgroundImage]=\"'url('+studData.image+')'\"></div>\n\n    <mat-card-title>{{studData.name}} </mat-card-title>\n    <mat-card-subtitle >{{studData.mobile}}<br>{{studData.email}}\n      <span class=\"rem-days\">{{ remDays }} Days Left</span>\n    </mat-card-subtitle>\n\n  </mat-card-header>\n   <mat-card-content>\n    <table class=\"table table-borderless\">\n      <tr>\n        <td>Fees Balance </td>\n        <td>{{selectedSlot.balance}}</td>\n      </tr>\n      <tr>\n        <td>Admission Date</td>\n        <td>{{selectedSlot.bookedDate|date:\"mediumDate\"}}</td>\n      </tr>\n      <tr>\n        <td>End Date</td>\n        <td>{{selectedSlot.endDate|date:\"mediumDate\"}}</td>\n      </tr>\n      <tr>\n        <td>Slot ID</td>\n        <td>{{selectedSlot.slotId}}</td>\n      </tr>\n      <tr>\n        <td></td>\n        <td></td>\n      </tr>\n    </table>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button (click)=\"onUpdate()\" *ngIf=\"isAdmin\">Update</button>\n    <button mat-button (click)=\"onDelete()\" *ngIf=\"isAdmin\">Delete</button>\n    <button mat-button (click)=\"redTransaction()\">All Transactions </button>\n  </mat-card-actions>\n</mat-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/view-slots/view-slots.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/view-slots/view-slots.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminViewSlotsViewSlotsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n<div class=\"container\" *ngIf=\"!isLoading\">\n  <app-add-slots *ngIf=\"slotList.length===0\" (slotAdded)=\"getSlots()\"></app-add-slots>\n\n  <div class=\"row\" *ngIf=\"slotList.length>0\">\n    <div class=\"col-md-6 col-sm-12\">\n      <mat-card>\n        <mat-card-title>All Slots</mat-card-title>\n        <section>\n          <div class=\"example-button-row\">\n            <div class=\"example-flex-container\">\n              <div\n                class=\"example-button-container\"\n                *ngFor=\"let slot of slotList\"\n              >\n                <button\n                  color=\"primary\"\n                  [class.btn-booked]=\"slot.isBooked\"\n                  [class.btn-selected]=\"slot._id == selectedSlot._id\"\n                  mat-mini-fab\n                  aria-label=\"Example icon button with a menu icon\"\n                  (click)=\"onSlotSelected(slot)\"\n                >\n                  {{ slot.slotId }}\n                </button>\n              </div>\n              <div class=\"example-button-container\">\n                <button\n                  mat-mini-fab\n                  color=\"primary\"\n                  (click)=\"addExtraSlot()\"\n                  aria-label=\"Example icon button with a menu icon\"\n                >\n                  <mat-icon>add</mat-icon>\n                </button>\n              </div>\n            </div>\n          </div>\n        </section>\n      </mat-card>\n    </div>\n    <div\n      class=\"col col-md-6 col-sm-12 slotStud\"\n      *ngIf=\"(isSelected() && !selectedSlot.isBooked) || isUpdating\"\n    >\n      <app-assign-slot\n        [slot]=\"selectedSlot\"\n        [studData]=\"studData\"\n        (onAllot)=\"onAllot()\"\n      ></app-assign-slot>\n    </div>\n    <div\n      class=\"col col-md-6 col-sm-12 slotStud\"\n      *ngIf=\"isSelected() && selectedSlot.isBooked && !isUpdating\"\n    >\n       <app-view-allotted\n        [selectedSlot]=\"selectedSlot\"\n        [studData]=\"studData\"\n        [remDays]=\"remDays\"\n        (onStudSelect)=\"onStudSelect()\"\n      ></app-view-allotted>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/view-transactions/view-transactions.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/view-transactions/view-transactions.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminViewTransactionsViewTransactionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-spinner *ngIf=\"isLoading\" ></mat-spinner>\n\n<div class=\"container\" *ngIf=\"transList.length > 0 && !isLoading\" >\n  <h4>Slot {{selectedSlot.slotId}}  <span *ngIf=\"studId!==null\">and {{this.transList[0].name}} </span>Transactions</h4>\n <div class=\"row\">\n   <div class=\"col-md-6 col-sm-12\"><mat-form-field>\n    <mat-label>Search here</mat-label>\n    <input\n      matInput\n      (keyup)=\"applyFilter($event)\"\n      placeholder=\"Ex. Ram\"\n      #input\n    />\n  </mat-form-field>\n  </div>\n  <div class=\"col-md-3 col-sm-5\"  *ngIf=\"isAdmin\">\n    <button mat-stroked-button (click)=\"ngOnInit()\"   [class.btn-trans]=\"studId\">     Current  Transactions</button>\n  </div>\n  <div class=\"col-md-3 col-sm-5\" *ngIf=\"isAdmin\">\n    <button mat-stroked-button (click)=\"getAll()\" [class.btn-trans]=\"!studId\" >All Slot {{selectedSlot.slotId}} Transactions</button>\n  </div>\n </div>\n  <div class=\"mat-elevation-z8\" *ngIf=\"dataSource.filteredData.length>0\">\n    <table mat-table [dataSource]=\"dataSource\" matSort>\n      <!-- ID Column -->\n\n      <!-- Progress Column -->\n      <ng-container matColumnDef=\"name\" *ngIf=\"this.studId===null\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\n        <td mat-cell *matCellDef=\"let row\">{{ row.name }}</td>\n      </ng-container>\n\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"tDate\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Date</th>\n        <td mat-cell *matCellDef=\"let row\">{{ row.tDate.split(\"T\")[0] }}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"bookedTime\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Time</th>\n        <td mat-cell *matCellDef=\"let row\">{{ row.bookTime }}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"totalFees\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Total</th>\n        <td mat-cell *matCellDef=\"let row\">{{ row.totalFees }}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"paidFees\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Paid</th>\n        <td mat-cell *matCellDef=\"let row\">{{ row.paidFees }}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"balance\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Balance</th>\n        <td mat-cell *matCellDef=\"let row\">{{ row.balance }}</td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n\n      <!-- Row shown when there is no matching data. -->\n      <tr class=\"mat-row\" *matNoDataRow>\n        <td class=\"mat-cell\" colspan=\"8\">\n          No data matching the filter \"{{ input.value }}\"\n        </td>\n      </tr>\n    </table>\n\n    <mat-paginator\n      [pageSizeOptions]=\"[2,4,5, 10, 25, 100]\"\n      [pageSize]=\"perPage\"\n      [length]=\"totalSlots\"\n      (page)=\"onPageChange($event)\"\n    ></mat-paginator>\n  </div>\n  <h6 *ngIf=\"dataSource.filteredData.length===0\" class=\"text-center\">No results for search</h6>\n</div>\n<h5 *ngIf=\"transList.length ===0 && !isLoading\" class=text-center>\n      No transactions done\n</h5>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<main>\n  <router-outlet></router-outlet>\n</main>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-spinner *ngIf=\"isLoding\"></mat-spinner>\n<div class=\"container\" *ngIf=\"!isLoding\">\n  <div class=\"row\">\n    <div class=\"col-md-6 col-sm-12 card\">\n       <div class=\"row\" style=\"margin-top: 1rem; \">\n        <div class=\"col text-center\" >\n          <button mat-stroked-button [class.btn-cust]=\"loginType\" (click)=\"loginType=true;form.reset()\"> Student</button>\n        </div>\n        <div class=\"col text-center\">\n          <button mat-stroked-button [class.btn-cust]=\"!loginType\" (click)=\"loginType=false;form.reset()\"> Admin</button>\n        </div>\n      </div>\n          <form class=\"card-body\" [formGroup]=\"form\" (submit)=\"onSubmit()\">\n            <div class=\"form-group\">\n              <label for=\"email\">Email Id</label>\n              <input\n                type=\"email\"\n                id=\"email\"\n                class=\"form-control\"\n                formControlName=\"email\"\n              />\n              <mat-error\n                *ngIf=\"\n                  this.form.get('email').touched && form.get('email').invalid\n                \"\n              >\n                <p *ngIf=\"form.get('email').errors.required\">\n                  Emailid Required\n                </p>\n                <p *ngIf=\"form.get('email').errors.email\">\n                  Please enter a valid emailid\n                </p>\n              </mat-error>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"password\">Password</label>\n              <input\n                type=\"password\"\n                id=\"password\"\n                class=\"form-control\"\n                formControlName=\"password\"\n              />\n              <mat-error\n                *ngIf=\"\n                  this.form.get('password').touched &&\n                  form.get('password').invalid\n                \"\n              >\n                <p *ngIf=\"form.get('password').errors.required\">\n                  Password Required\n                </p>\n                <p *ngIf=\"form.get('password').errors.minlength\">\n                  Password should be atleast 4 characters\n                </p>\n              </mat-error>\n            </div>\n            <div class=\"form-group\">\n              <button\n                type=\"submit\"\n                mat-stroked-button\n                [disabled]=\"this.form.invalid\"\n              >\n                Login\n              </button>\n            </div>\n          </form>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-sm-6 col-lg-4\">\n        <mat-list role=\"list\">\n        <h5>Our Mission</h5>\n          <mat-list-item role=\"listitem\">a) Helping young people to grow more </mat-list-item>\n          <mat-list-item role=\"listitem\">b) Providing the best environment to study more </mat-list-item>\n          <mat-list-item role=\"listitem\">c) Giving the necessary\t facilities to the readers   </mat-list-item>\n          <mat-list-item role=\"listitem\">d) Study more Grow More </mat-list-item>\n        </mat-list>\n      </div>\n      <div class=\"col-md-6 col-sm-6 col-lg-4\">\n        <ul  class=\"cust-ul\">\n        <h5>Contact us</h5>\n          <li><mat-icon>facebook</mat-icon>Facebook</li>\n          <li><mat-icon>center_focus_weak</mat-icon>LinkedIn</li>\n          <li><mat-icon>mediation</mat-icon>Twitter</li>\n          <li><mat-icon>center_focus_weak</mat-icon>Instagram</li>\n          <li><mat-icon>message</mat-icon>Whats app</li>\n        </ul>\n\n      </div>\n      <div class=\"col-md-6 col-sm-6 col-lg-4\">\n        <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d274.01036709714566!2d74.98844253562758!3d15.44914994822458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d2a056d4f52d%3A0x66fa152abd6fd237!2zMTXCsDI2JzU2LjkiTiA3NMKwNTknMTguMyJF!5e0!3m2!1sen!2sin!4v1607523456237!5m2!1sen!2sin\"  frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>\n      </div>\n    </div>\n  </div>\n</footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--Navbar-->\n<mdb-navbar SideClass=\"navbar navbar-expand-md navbar-dark indigo\">\n\n  <!-- Navbar brand -->\n  <mdb-navbar-brand><a class=\"navbar-brand\" routerLink=\"/\">SH<sup>2</sup></a></mdb-navbar-brand>\n  <!-- Collapsible content -->\n  <links>\n      <!-- Links -->\n      <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item active\">\n              <a class=\"nav-link waves-light\"  mdbWavesEffect routerLink=\"/\">Home<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n              <a class=\"nav-link waves-light\" mdbWavesEffect routerLink=\"/addUpdateCenter\" *ngIf=\"isAdmin\">Center</a>\n          </li>\n          <li class=\"nav-item\">\n              <a class=\"nav-link waves-light\" mdbWavesEffect routerLink=\"/addUpdateFacility\" *ngIf=\"isAdmin\">Facilities</a>\n          </li>\n           <li class=\"nav-item\">\n            <a class=\"nav-link waves-light\" mdbWavesEffect routerLink=\"/viewSlots\" *ngIf=\"isAdmin\">Slots</a>\n          </li>\n\n          <!-- Dropdown -->\n          <li class=\"nav-item dropdown\" dropdown   *ngIf=\"isAdmin\" >\n              <a dropdownToggle mdbWavesEffect  #studDD  type=\"button\" class=\"nav-link dropdown-toggle waves-light\" mdbWavesEffect>\n              Student<span class=\"caret\"></span></a>\n              <div *dropdownMenu  class=\"dropdown-menu dropdown dropdown-primary\" role=\"menu\" >\n                  <a class=\"dropdown-item waves-light\" mdbWavesEffect routerLink=\"/studSignup\"  >Add Student</a>\n                  <a class=\"dropdown-item waves-light\" mdbWavesEffect routerLink=\"/viewStud\">View Students</a>\n              </div>\n          </li>\n\n          <li class=\"nav-item\">\n            <a *ngIf=\"isStud\" class=\"nav-link waves-light\" mdbWavesEffect  routerLink=\"/profile\">My Profile</a>\n          </li>\n          <li class=\"nav-item\">\n            <a *ngIf=\"isStud\" class=\"nav-link waves-light\" mdbWavesEffect  routerLink=\"/studslot\">My Seat</a>\n          </li>\n          <li class=\"nav-item\">\n            <a *ngIf=\"isAdmin || isStud\" class=\"nav-link waves-light\" mdbWavesEffect  (click)=\"logout()\">Logout</a>\n          </li>\n\n\n      </ul>\n      <form class=\"form-inline waves-light\" mdbWavesEffect>\n          <div class=\"md-form my-0\">\n          <a mat-stroked-button *ngIf=\"!isAdmin &&!isStud\" class=\"login waves-light\" mdbWavesEffect routerLink=\"/login\" id=\"home\">Login</a>\n\n          </div>\n      </form>\n  </links>\n  <!-- Collapsible content -->\n\n</mdb-navbar>\n<!--/.Navbar-->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n<mdb-carousel class=\"carousel slide carousel-fade\"  [animation]=\"'fade'\" *ngIf=\"!this.isLoading\">\n  <mdb-carousel-item>\n    <div class=\"view w-100\">\n      <img class=\"d-block w-100\" src=\"http://localhost:3000/assets/slider-img/study-center3.png\" alt=\"First slide\">\n      <div class=\"mask rgba-black-light waves-light\" mdbWavesEffect></div>\n    </div>\n    <div class=\"carousel-caption\">\n      <h3 class=\"h3-responsive\"> </h3>\n      <p> </p>\n    </div>\n  </mdb-carousel-item>\n  <mdb-carousel-item>\n    <div class=\"view w-100\">\n      <img class=\"d-block w-100\" src=\"http://localhost:3000/assets/slider-img/study-center1.png\" alt=\"Second slide\">\n      <div class=\"mask rgba-black-strong waves-light\" mdbWavesEffect></div>\n    </div>\n    <div class=\"carousel-caption\">\n      <h3 class=\"h3-responsive\"></h3>\n      <p></p>\n    </div>\n  </mdb-carousel-item>\n  <mdb-carousel-item>\n    <div class=\"view w-100\">\n      <img class=\"d-block w-100\" src=\"http://localhost:3000/assets/slider-img/study-center2.png\" alt=\"Third slide\">\n      <div class=\"mask rgba-black-slight waves-light\" mdbWavesEffect></div>\n    </div>\n    <div class=\"carousel-caption\">\n      <h3 class=\"h3-responsive\"> </h3>\n      <p> </p>\n    </div>\n  </mdb-carousel-item>\n</mdb-carousel>\n<div class=\"container \" id=\"facilities\"  *ngIf=\"!this.isLoading\">\n  <mat-tab-group dynamicHeight  mat-align-tabs=\"center\" tabindex=\"1\" >\n    <mat-tab label=\"Facilities\" >\n      <app-viewfac></app-viewfac>\n    </mat-tab>\n    <mat-tab label=\"Student Feedbacks\" >\n      <app-comments></app-comments>\n    </mat-tab>\n    <mat-tab label=\"Instructions\">\n      <h4 class=\"inst-tab\">Please follow the instructions </h4>\n      <mat-list role=\"list\" >\n        <mat-list-item role=\"listitem\">a) While entering the hall make sure to turn on  airoplane mode in your mobile</mat-list-item>\n        <mat-list-item role=\"listitem\">b) While leaving please switch off the light and fan if no need </mat-list-item>\n        <mat-list-item role=\"listitem\">c) No talks in the hall  </mat-list-item>\n        <mat-list-item role=\"listitem\">d) Please make sure to clear all the fees </mat-list-item>\n      </mat-list>\n    </mat-tab>\n  </mat-tab-group>\n</div>\n<div>\n  <app-footer></app-footer>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNotFoundNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n  <div class=\"row\" style=\"margin-top: 5rem;\">\r\n    <div class=\"col-7\">\r\n      <h2 class='primary'><span class='primary-main'>Oops! </span><span class='primary-sub'>We can't seem to find the</span> page  you're looking for.</h2>\r\n      <button class=\"text-center\" mat-raised-button routerLink=\"/\">Go to Home Page</button>\r\n    </div>\r\n    <div class=\"col-5\">\r\n      <img class=\"img-404\" src=\"http://localhost:3000/assets/slider-img/anim404.gif\" alt=\"Third slide\">\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/student/profile/profile.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/profile/profile.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudentProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-spinner *ngIf=\"!studData\" class=\"text-center\"></mat-spinner>\n<div class=\"profile-section\" *ngIf=\"studData\">\n<div class=\"container\"  >\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-md-6 col-lg-7\">\n      <img [src]=\"studData.image\" alt=\"Student Image\" class=\"stud-img\">\n    </div>\n    <div class=\"col-sm-12 col-md-6 col-lg-5 details\">\n      <h3 class=\"text-center\">Welcome  {{studData.name}}</h3>\n      <table class=\"table table-borderless\">\n        <tr>\n          <td>Email ID</td>\n          <td>{{studData.email}}</td>\n        </tr>\n        <tr>\n          <td>Mobile No</td>\n          <td>{{studData.mobile}}</td>\n        </tr>\n        <tr>\n          <td>Qualification</td>\n          <td>{{studData.qualification}}</td>\n        </tr>\n        <tr>\n          <td>Date of birth</td>\n          <td>{{studData.dob.split(\"T\")[0]}}</td>\n        </tr>\n        <tr>\n          <td>Marriage status</td>\n          <td>{{studData.marrageStatus}}</td>\n        </tr>\n      </table>\n    </div>\n  </div>\n</div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/student/stud-signup/stud-signup.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/stud-signup/stud-signup.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudentStudSignupStudSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-spinner *ngIf=\"isLoading\" style=\"margin:2rem auto;\"></mat-spinner>\n<mat-card *ngIf=\"!isLoading\">\n  <form method=\"POST\" [formGroup]=\"form\" (submit)=\"addStudent()\" >\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Name</mat-label>\n      <input type=\"text\" matInput formControlName=\"name\" />\n    </mat-form-field>\n    <mat-form-field appearance=\"outline\" (click)=\"dp3.open()\">\n      <mat-label>Select Date of birth</mat-label>\n      <input matInput formControlName=\"dob\"  [matDatepickerFilter]=\"dateFilter\" [matDatepicker]=\"dp3\" (focus)=\"dp3.open()\"  (keypress)=\"dp3.open()\"  >\n      <mat-datepicker-toggle matSuffix [for]=\"dp3\"></mat-datepicker-toggle>\n      <mat-datepicker #dp3 startView=\"year\" [startAt]=\"startDate\"></mat-datepicker>\n    </mat-form-field>\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Mobile No</mat-label>\n      <input type=\"number\" matInput formControlName=\"mobile\" />\n    </mat-form-field>\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Email Id</mat-label>\n      <input type=\"email\" matInput formControlName=\"email\" />\n    </mat-form-field>\n    <mat-form-field appearance=\"outline\" *ngIf=\"!(studID)\">\n      <mat-label>Password</mat-label>\n      <input type=\"password\" matInput formControlName=\"password\" />\n    </mat-form-field>\n    <mat-form-field appearance=\"outline\">\n      <mat-label>Qualification</mat-label>\n      <input type=\"text\" matInput formControlName=\"qualification\" />\n    </mat-form-field>\n    <div class=\"formRadio\">\n      <label>Select Gender </label>\n      <mat-radio-group formControlName=\"gender\">\n        <mat-radio-button value=\"Male\">Male</mat-radio-button>\n        <mat-radio-button value=\"Female\">Female</mat-radio-button>\n        <mat-radio-button value=\"Other\">Other</mat-radio-button>\n      </mat-radio-group>\n    </div>\n    <div class=\"formRadio\">\n      <label>Marriage status </label>\n      <mat-radio-group formControlName=\"marrageStatus\">\n        <mat-radio-button value=\"Married\">Married</mat-radio-button>\n        <mat-radio-button value=\"Unmarried\">Unmarried</mat-radio-button>\n      </mat-radio-group>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3\">Select Photo</div>\n      <div class=\"col-md-3\">\n        <button\n          type=\"button\"\n          mat-stroked-button\n          color=\"primary\"\n          (click)=\"file.click()\"\n        >\n          Pick Image\n        </button>\n      </div>\n      <div class=\"col-md-6\" *ngIf=\"imagePreview\">\n        <img [src]=\"imagePreview\" width=\"200px\" />\n      </div>\n      <input\n        type=\"file\"\n        #file\n        (change)=\"onImagePicked($event)\"\n      />\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n        <button type=\"submit\" mat-stroked-button color=\"primary\" [disabled]=\"form.invalid\">{{btnName}}</button>\n      </div>\n      <div class=\"col\">\n        <a mat-stroked-button color=\"warn\" routerLink=\"/viewStud\">Cancel</a>\n      </div>\n    </div>\n\n\n  </form>\n</mat-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/student/studslot/studslot.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/studslot/studslot.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudentStudslotStudslotComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n<div class=\"container\" *ngIf=\"!isLoading&&!selectedSlot\">\n  <h5>Your not assigned to any seat</h5>\n</div>\n<div class=\"container\" *ngIf=\"!isLoading&&selectedSlot\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-sm-12 col-lg-12\">\n    <h4 class=\"text-center \">Your seat details</h4>\n    <app-view-allotted [selectedSlot]=\"selectedSlot\" [studData]=\"studData\" ></app-view-allotted>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/student/viewstud/viewstud.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/viewstud/viewstud.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppStudentViewstudViewstudComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-spinner *ngIf=\"isLoading\" style=\"margin: auto;\"></mat-spinner>\r\n<div *ngIf=\"!isLoading&&studList.length==0\" class=\"container\">\r\n<div  class=\"row\">\r\n  <div class=\"col\">\r\n  <h4>No students registered yet </h4>\r\n  </div>\r\n  <div class=\"col\">\r\n    <button mat-raised-button routerLink=\"/studSignup\">Add student </button>\r\n  </div>\r\n</div>\r\n</div>\r\n<div class=\"container\" *ngIf=\"!isLoading&&studList.length>0\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4 col-sm-6 col-lg-3\" *ngFor=\"let stud of studList\" style=\"margin:1rem auto\">\r\n    <mat-card class=\"example-card\" >\r\n      <img\r\n        mat-card-image\r\n        [src]=\"stud.image\"\r\n        [alt]=\"stud.name\"\r\n        style=\"height: 150px\"\r\n      />\r\n\r\n      <mat-card-header>\r\n        <mat-card-title>{{ stud.name }}</mat-card-title>\r\n        <mat-card-subtitle>{{ stud.mobile }}</mat-card-subtitle>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n        <p>\r\n        </p>\r\n      </mat-card-content>\r\n      <mat-card-actions>\r\n        <a mat-stroked-button color=\"accent\" [routerLink]=\"['/studSignup']\"  [queryParams]=\"{id:stud._id}\" > Edit</a>\r\n        <a mat-stroked-button color=\"warn\" (click)=\"deleteStud(stud._id)\">\r\n          Delete</a\r\n        >\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/admin/add-slots/add-slots.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/admin/add-slots/add-slots.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAddSlotsAddSlotsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-card {\r\n  width: 60%;\r\n  margin: auto;\r\n}\r\n\r\n.container {\r\n  margin-top: 1.5rem;\r\n}\r\n\r\nmat-card-actions {\r\n  margin-left: 1rem;\r\n  position: relative;\r\n}\r\n\r\nmat-form-field {\r\n  width: 100%;\r\n}\r\n\r\n.row{\r\n  display: flex;\r\n}\r\n\r\n.mat-raised-button{\r\n  margin-top: .5rem !important;\r\n}\r\n\r\n::ng-deep .mat-form-field-flex > .mat-form-field-infix {\r\n  padding: 0.5em 0px !important;\r\n}\r\n\r\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-label {\r\n  margin-top: -15px;\r\n}\r\n\r\n::ng-deep .ng-valid .mat-form-field-label,\r\n::ng-deep\r\n  .mat-form-field-appearance-outline:focus-within\r\n  .mat-form-field-label {\r\n  margin-top: -5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRkLXNsb3RzL2FkZC1zbG90cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUM7RUFDQyw2QkFBNkI7QUFDL0I7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7Ozs7RUFJRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZGQtc2xvdHMvYWRkLXNsb3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcclxufVxyXG5cclxubWF0LWNhcmQtYWN0aW9ucyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4ucm93e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLm1hdC1yYWlzZWQtYnV0dG9ue1xyXG4gIG1hcmdpbi10b3A6IC41cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWZsZXggPiAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gIHBhZGRpbmc6IDAuNWVtIDBweCAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubmctdmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxyXG46Om5nLWRlZXBcclxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lOmZvY3VzLXdpdGhpblxyXG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgbWFyZ2luLXRvcDogLTVweDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin/add-slots/add-slots.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/admin/add-slots/add-slots.component.ts ***!
    \********************************************************/

  /*! exports provided: AddSlotsComponent */

  /***/
  function srcAppAdminAddSlotsAddSlotsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddSlotsComponent", function () {
      return AddSlotsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_slots_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/slots.service */
    "./src/app/services/slots.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_snack_popup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/snack-popup.service */
    "./src/app/services/snack-popup.service.ts");

    var AddSlotsComponent = /*#__PURE__*/function () {
      function AddSlotsComponent(slotService, snackBar) {
        _classCallCheck(this, AddSlotsComponent);

        this.slotService = slotService;
        this.snackBar = snackBar;
        this.slotAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"](true);
      }

      _createClass(AddSlotsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            totalSlots: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(300)]
            })
          });
        }
      }, {
        key: "addTotalSlots",
        value: function addTotalSlots() {
          var _this = this;

          this.slotService.addToSlots(this.form.value).subscribe(function (result) {
            _this.snackBar.openSnack(result.msg);

            _this.slotAdded.emit();
          });
        }
      }]);

      return AddSlotsComponent;
    }();

    AddSlotsComponent.ctorParameters = function () {
      return [{
        type: _services_slots_service__WEBPACK_IMPORTED_MODULE_1__["SlotsService"]
      }, {
        type: src_app_services_snack_popup_service__WEBPACK_IMPORTED_MODULE_4__["SanckBar"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])("slotAdded")], AddSlotsComponent.prototype, "slotAdded", void 0);
    AddSlotsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-add-slots',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-slots.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/add-slots/add-slots.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-slots.component.css */
      "./src/app/admin/add-slots/add-slots.component.css"))["default"]]
    })], AddSlotsComponent);
    /***/
  },

  /***/
  "./src/app/admin/add-update/add-update.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/admin/add-update/add-update.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAddUpdateAddUpdateComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mdb-card {\r\n  width: 80%;\r\n  margin: auto;\r\n}\r\n\r\nmat-form-field {\r\n  width: 100%;\r\n  margin: 1.3rem auto auto;\r\n  height: 20px;\r\n}\r\n\r\ninput[type=\"file\"] {\r\n  visibility: hidden;\r\n}\r\n\r\n.image_preview {\r\n  height: 6rem;\r\n  margin: 1rem auto;\r\n}\r\n\r\n.image_preview img {\r\n  height: 100%;\r\n}\r\n\r\nmat-error {\r\n  margin-left: 5px;\r\n}\r\n\r\nbutton {\r\n  margin: 1rem;\r\n}\r\n\r\n::ng-deep .mat-form-field-flex > .mat-form-field-infix {\r\n  padding: 0.4em 0px !important;\r\n}\r\n\r\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-label {\r\n  margin-top: -15px;\r\n}\r\n\r\n::ng-deep .ng-valid .mat-form-field-label,\r\n::ng-deep\r\n  .mat-form-field-appearance-outline:focus-within\r\n  .mat-form-field-label {\r\n  margin-top: -5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRkLXVwZGF0ZS9hZGQtdXBkYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLHdCQUF3QjtFQUN4QixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUNBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBOzs7O0VBSUUsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRkLXVwZGF0ZS9hZGQtdXBkYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtZGItY2FyZCB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDEuM3JlbSBhdXRvIGF1dG87XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcbmlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuLmltYWdlX3ByZXZpZXcge1xyXG4gIGhlaWdodDogNnJlbTtcclxuICBtYXJnaW46IDFyZW0gYXV0bztcclxufVxyXG4uaW1hZ2VfcHJldmlldyBpbWcge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5tYXQtZXJyb3Ige1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG59XHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZmxleCA+IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XHJcbiAgcGFkZGluZzogMC40ZW0gMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICBtYXJnaW4tdG9wOiAtMTVweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5uZy12YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXHJcbjo6bmctZGVlcFxyXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmU6Zm9jdXMtd2l0aGluXHJcbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICBtYXJnaW4tdG9wOiAtNXB4O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin/add-update/add-update.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/admin/add-update/add-update.component.ts ***!
    \**********************************************************/

  /*! exports provided: AddUpdateComponent */

  /***/
  function srcAppAdminAddUpdateAddUpdateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddUpdateComponent", function () {
      return AddUpdateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _mimeType_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./mimeType-validators */
    "./src/app/admin/add-update/mimeType-validators.ts");
    /* harmony import */


    var _resources_state_dist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../resources/state-dist.service */
    "./src/app/resources/state-dist.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_study_center_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/study-center.service */
    "./src/app/services/study-center.service.ts");

    var AddUpdateComponent = /*#__PURE__*/function () {
      function AddUpdateComponent(stateDist, studyCenter, _snackBar, router) {
        _classCallCheck(this, AddUpdateComponent);

        this.stateDist = stateDist;
        this.studyCenter = studyCenter;
        this._snackBar = _snackBar;
        this.router = router;
        this.allStateDist = [];
        this.allDists = [];
        this.btnName = "Add";
      }

      _createClass(AddUpdateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.btnName = "Add";
          this.allStateDist = this.stateDist.getStates();
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3)]
            }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              asyncValidators: [_mimeType_validators__WEBPACK_IMPORTED_MODULE_3__["mimeType"]]
            }),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3)]
            }),
            pincode: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3)]
            }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3)]
            }),
            mobileno: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3)]
            }),
            totalSlots: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(1)]
            }),
            area: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3)]
            }),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3)]
            }),
            district: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3)]
            }),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3)]
            })
          });
          this.getCenter();
        }
      }, {
        key: "stateSelected",
        value: function stateSelected(stateName) {
          for (var i = 0; i < this.allStateDist.length; i++) {
            if (this.allStateDist[i].name == stateName) {
              this.allDists = this.allStateDist[i].districts;
            }
          }
        }
      }, {
        key: "openSnackBar",
        value: function openSnackBar(msg) {
          this._snackBar.open(msg, "Okay", {
            duration: 1000,
            horizontalPosition: "center",
            verticalPosition: "top"
          });
        }
      }, {
        key: "getCenter",
        value: function getCenter() {
          var _this2 = this;

          this.btnName = "Update";
          this.centerSubscription = this.studyCenter.getCenter().subscribe(function (centerDetails) {
            if (centerDetails.result.length > 0) {
              var cd = centerDetails.result[0];
              _this2.centerId = cd._id;

              _this2.stateSelected(cd.state);

              _this2.imagePreview = cd.image;

              _this2.form.patchValue(Object.assign({}, cd, {
                image: null
              }));
            }
          });
        }
      }, {
        key: "addUpdateStudyCenter",
        value: function addUpdateStudyCenter() {
          var _this3 = this;

          if (this.form.valid) {
            this.updateSubscription = this.studyCenter.addUpdateStudyCenter(this.form.value, this.centerId).subscribe(function (res) {
              _this3.openSnackBar(res.msg);

              _this3.router.navigateByUrl("");
            });
          }
        }
      }, {
        key: "onImagePicked",
        value: function onImagePicked($event) {
          var _this4 = this;

          var file = event.target.files[0];
          this.form.patchValue({
            image: file
          });
          this.form.get("image").updateValueAndValidity();
          var reader = new FileReader();

          reader.onload = function () {
            _this4.imagePreview = reader.result;
          };

          if (file) reader.readAsDataURL(file);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.centerSubscription.unsubscribe();
          if (typeof this.updateSubscription !== 'undefined') this.updateSubscription.unsubscribe();
        }
      }]);

      return AddUpdateComponent;
    }();

    AddUpdateComponent.ctorParameters = function () {
      return [{
        type: _resources_state_dist_service__WEBPACK_IMPORTED_MODULE_4__["StateDistService"]
      }, {
        type: src_app_services_study_center_service__WEBPACK_IMPORTED_MODULE_7__["StudyCenterService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    AddUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
      selector: "app-add-update",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-update.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/add-update/add-update.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-update.component.css */
      "./src/app/admin/add-update/add-update.component.css"))["default"]]
    })], AddUpdateComponent);
    /***/
  },

  /***/
  "./src/app/admin/add-update/mimeType-validators.ts":
  /*!*********************************************************!*\
    !*** ./src/app/admin/add-update/mimeType-validators.ts ***!
    \*********************************************************/

  /*! exports provided: mimeType */

  /***/
  function srcAppAdminAddUpdateMimeTypeValidatorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mimeType", function () {
      return mimeType;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var mimeType = function mimeType(control) {
      if (typeof control.value === 'string') {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
      }

      var file = control.value;
      var fileReader = new FileReader();
      var frObs = rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
        fileReader.addEventListener("loadend", function () {
          var arr = new Uint8Array(fileReader.result).subarray(0, 4);
          var header = "";
          var isValid = false;

          for (var i = 0; i < arr.length; i++) {
            header += arr[i].toString(16);
          }

          switch (header) {
            case "89504e47":
              isValid = true;
              break;

            case "ffd8ffe0":
            case "ffd8ffe1":
            case "ffd8ffe2":
            case "ffd8ffe3":
            case "ffd8ffe8":
              isValid = true;
              break;

            default:
              isValid = false; // Or you can use the blob.type as fallback

              break;
          }

          if (isValid) {
            observer.next(null);
          } else {
            observer.next({
              invalidMimeType: true
            });
          }

          observer.complete();
        });
        fileReader.readAsArrayBuffer(file);
      });
      return frObs;
    };
    /***/

  },

  /***/
  "./src/app/admin/assign-slot/assign-slot.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/admin/assign-slot/assign-slot.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAssignSlotAssignSlotComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-form-field,mat-card{\r\n  width: 100%;\r\n}\r\n.mat-spinner{\r\n  margin: 1rem auto;\r\n}\r\n::ng-deep .mat-form-field-flex > .mat-form-field-infix { padding: 0.4em 0px !important;}\r\n::ng-deep .ng-invalid .mat-form-field-appearance-outline .mat-form-field-label {\r\n  margin-top: -15px;\r\n}\r\n::ng-deep .ng-valid  .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .mat-form-field-label-wrapper .mat-form-field-label,::ng-deep .mat-focused .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .mat-form-field-label-wrapper .mat-form-field-label\r\n{\r\n  margin-top: -5px;\r\n}\r\n/*\r\n::ng-deep .ng-invalid .ng-touched .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .mat-form-field-label-wrapper .mat-form-field-label{\r\n  margin-top:-5px;\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYXNzaWduLXNsb3QvYXNzaWduLXNsb3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0EseURBQXlELDZCQUE2QixDQUFDO0FBQ3ZGO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7OztHQUdHIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYXNzaWduLXNsb3QvYXNzaWduLXNsb3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkLG1hdC1jYXJke1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5tYXQtc3Bpbm5lcntcclxuICBtYXJnaW46IDFyZW0gYXV0bztcclxufVxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWZsZXggPiAubWF0LWZvcm0tZmllbGQtaW5maXggeyBwYWRkaW5nOiAwLjRlbSAwcHggIWltcG9ydGFudDt9XHJcbjo6bmctZGVlcCAubmctaW52YWxpZCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubmctdmFsaWQgIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1mbGV4IC5tYXQtZm9ybS1maWVsZC1pbmZpeCAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwsOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtZmxleCAubWF0LWZvcm0tZmllbGQtaW5maXggLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsXHJcbntcclxuICBtYXJnaW4tdG9wOiAtNXB4O1xyXG59XHJcbi8qXHJcbjo6bmctZGVlcCAubmctaW52YWxpZCAubmctdG91Y2hlZCAubWF0LWZvcm0tZmllbGQtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtZmxleCAubWF0LWZvcm0tZmllbGQtaW5maXggLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse1xyXG4gIG1hcmdpbi10b3A6LTVweDtcclxufSAqL1xyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin/assign-slot/assign-slot.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/admin/assign-slot/assign-slot.component.ts ***!
    \************************************************************/

  /*! exports provided: AssignSlotComponent */

  /***/
  function srcAppAdminAssignSlotAssignSlotComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssignSlotComponent", function () {
      return AssignSlotComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_services_snack_popup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/snack-popup.service */
    "./src/app/services/snack-popup.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_assign_slot_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../services/assign-slot.service */
    "./src/app/services/assign-slot.service.ts");
    /* harmony import */


    var _services_slot_detail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../services/slot-detail.service */
    "./src/app/services/slot-detail.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AssignSlotComponent = /*#__PURE__*/function () {
      function AssignSlotComponent(slotAssignService, slotDetailService, _snackBar, router) {
        var _this5 = this;

        _classCallCheck(this, AssignSlotComponent);

        this.slotAssignService = slotAssignService;
        this.slotDetailService = slotDetailService;
        this._snackBar = _snackBar;
        this.router = router;
        this.onAllot = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        this.studList = [];
        this.currentDate = Date.now();
        this.isLoading = true;

        this.myFilter = function (d) {
          var bDate = _this5.form.get("bookedDate").value._i;

          return d._i.year > bDate.year ? true : d._i.year < bDate.year ? false : d._i.month > bDate.month ? true : d._i.month < bDate.month ? false : d._i.date - 5 > bDate.date;
        };
      }

      _createClass(AssignSlotComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createControls();
          this.getList();
        }
      }, {
        key: "isSelected",
        value: function isSelected() {
          return typeof this.slot !== "undefined";
        }
      }, {
        key: "getList",
        value: function getList() {
          var _this6 = this;

          this.listSubscription = this.slotDetailService.getUnAssigned().subscribe(function (unAssignedList) {
            _this6.studList = unAssignedList.slotList;
            _this6.isLoading = false;
          });
        }
      }, {
        key: "createControls",
        value: function createControls() {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            slotId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](true, {
              validators: []
            }),
            studId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            }),
            bookedDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            }),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            }),
            totalFees: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            }),
            paidFees: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            }),
            balance: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](true, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            })
          });
          this.patchInit();
        }
      }, {
        key: "patchInit",
        value: function patchInit() {
          this.form.patchValue({
            studId: this.slot.studId,
            balance: this.slot.isBooked ? this.slot.balance : 0
          });
        }
      }, {
        key: "allotSlot",
        value: function allotSlot() {
          var _this7 = this;

          this.isLoading = true;
          var date = new Date();
          var bookTime = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          });
          var isBooked = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          });
          this.form.addControl("bookTime", bookTime);
          this.form.addControl("isBooked", isBooked);
          var balance = this.slot.isBooked ? this.slot.balance - this.form.get("paidFees").value + this.form.get("totalFees").value : this.form.get("totalFees").value - this.form.get("paidFees").value;
          if (this.isSelected()) this.form.patchValue({
            balance: balance,
            isBooked: true,
            slotId: this.slot.slotId,
            bookTime: date.toLocaleTimeString()
          });
          if (this.form.invalid) return this.isLoading = false;

          if (balance < 0) {
            this.patchInit();
            this.isLoading = false;
            return this._snackBar.openSnack("We Don't except more money than fees!!");
          }

          this.slotAssignService.assignSlot(this.form.value).subscribe(function () {
            _this7.slotDetailService.getAllSlotDetails();

            _this7.isLoading = false;

            _this7.onAllot.emit();

            _this7.form.reset();
          });
        }
      }, {
        key: "redTransaction",
        value: function redTransaction() {
          this.router.navigate(["/transactions"], {
            queryParams: this.slot
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.listSubscription.unsubscribe();
        }
      }]);

      return AssignSlotComponent;
    }();

    AssignSlotComponent.ctorParameters = function () {
      return [{
        type: _services_assign_slot_service__WEBPACK_IMPORTED_MODULE_3__["AssignSlotService"]
      }, {
        type: _services_slot_detail_service__WEBPACK_IMPORTED_MODULE_4__["SlotDetailService"]
      }, {
        type: src_app_services_snack_popup_service__WEBPACK_IMPORTED_MODULE_1__["SanckBar"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"])("slot")], AssignSlotComponent.prototype, "slot", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"])("studData")], AssignSlotComponent.prototype, "studData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"])("onAllot")], AssignSlotComponent.prototype, "onAllot", void 0);
    AssignSlotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
      selector: "app-assign-slot",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./assign-slot.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/assign-slot/assign-slot.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./assign-slot.component.css */
      "./src/app/admin/assign-slot/assign-slot.component.css"))["default"]]
    })], AssignSlotComponent);
    /***/
  },

  /***/
  "./src/app/admin/comments/comments.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/admin/comments/comments.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminCommentsCommentsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".col h3{\r\n  margin: 1rem auto;\r\n}\r\n.row-2{\r\n  margin:auto auto auto 11%;\r\n}\r\n.new-comment{\r\n  margin:auto;\r\n  display: flex;\r\n}\r\n.img-area{\r\n    width:20%;\r\n}\r\n.review-img{\r\n  width: 70px;\r\n  height: 70px;\r\n  border-radius: 100%;\r\n  float: right;\r\n  margin-right: 1.5rem;\r\n}\r\n.comment-field{\r\n  margin-top: -2.5rem;\r\n  padding: 1rem auto;\r\n}\r\n.main-area{\r\n  display: flex;\r\n  margin: 1rem auto;\r\n}\r\n.review-text  {\r\n  margin-top: .2rem ;\r\n  max-width: 30%;\r\n  width: 30%;\r\n}\r\n.review-text2{\r\n  max-width: 60%;\r\n  width: 60%;\r\n}\r\nh6{\r\n  font-weight: bold;\r\n}\r\nmat-form-field{\r\n  width: 100%;\r\n  margin: 2rem auto auto;\r\n}\r\n.review-action{\r\n  float: right;\r\n}\r\n.review-action button,.admin-review-action button{\r\n  margin: auto 1rem;\r\n}\r\n.admin-review-action{\r\nmargin:2% auto   auto 12%;\r\n}\r\n@media only screen and (max-width: 470px){\r\n  .row-2{\r\n    margin-left: 1rem;\r\n  }\r\n}\r\n@media only screen and (max-width:420px)\r\n{\r\n  .review-action button,.admin-review-action button{\r\n    margin: auto ;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tbWVudHMvY29tbWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmO0FBRUE7SUFDSSxTQUFTO0FBQ2I7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFHQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsVUFBVTtBQUNaO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsVUFBVTtBQUNaO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFHQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7QUFHQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7QUFDQTs7RUFFRTtJQUNFLGFBQWE7RUFDZjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vY29tbWVudHMvY29tbWVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wgaDN7XHJcbiAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbn1cclxuLnJvdy0ye1xyXG4gIG1hcmdpbjphdXRvIGF1dG8gYXV0byAxMSU7XHJcbn1cclxuXHJcbi5uZXctY29tbWVudHtcclxuICBtYXJnaW46YXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uaW1nLWFyZWF7XHJcbiAgICB3aWR0aDoyMCU7XHJcbn1cclxuXHJcbi5yZXZpZXctaW1ne1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIGhlaWdodDogNzBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcclxufVxyXG5cclxuLmNvbW1lbnQtZmllbGR7XHJcbiAgbWFyZ2luLXRvcDogLTIuNXJlbTtcclxuICBwYWRkaW5nOiAxcmVtIGF1dG87XHJcbn1cclxuXHJcblxyXG4ubWFpbi1hcmVhe1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbn1cclxuXHJcbi5yZXZpZXctdGV4dCAge1xyXG4gIG1hcmdpbi10b3A6IC4ycmVtIDtcclxuICBtYXgtd2lkdGg6IDMwJTtcclxuICB3aWR0aDogMzAlO1xyXG59XHJcbi5yZXZpZXctdGV4dDJ7XHJcbiAgbWF4LXdpZHRoOiA2MCU7XHJcbiAgd2lkdGg6IDYwJTtcclxufVxyXG5oNntcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuXHJcbm1hdC1mb3JtLWZpZWxke1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMnJlbSBhdXRvIGF1dG87XHJcbn1cclxuXHJcblxyXG4ucmV2aWV3LWFjdGlvbntcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLnJldmlldy1hY3Rpb24gYnV0dG9uLC5hZG1pbi1yZXZpZXctYWN0aW9uIGJ1dHRvbntcclxuICBtYXJnaW46IGF1dG8gMXJlbTtcclxufVxyXG4uYWRtaW4tcmV2aWV3LWFjdGlvbntcclxubWFyZ2luOjIlIGF1dG8gICBhdXRvIDEyJTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzBweCl7XHJcbiAgLnJvdy0ye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo0MjBweClcclxue1xyXG4gIC5yZXZpZXctYWN0aW9uIGJ1dHRvbiwuYWRtaW4tcmV2aWV3LWFjdGlvbiBidXR0b257XHJcbiAgICBtYXJnaW46IGF1dG8gO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin/comments/comments.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/admin/comments/comments.component.ts ***!
    \******************************************************/

  /*! exports provided: CommentsComponent */

  /***/
  function srcAppAdminCommentsCommentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentsComponent", function () {
      return CommentsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_stud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/stud.service */
    "./src/app/services/stud.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_comment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../services/comment.service */
    "./src/app/services/comment.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_stud_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../services/stud-auth.service */
    "./src/app/services/stud-auth.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CommentsComponent = /*#__PURE__*/function () {
      function CommentsComponent(studAuthService, studService, adminAuthService, commentService) {
        _classCallCheck(this, CommentsComponent);

        this.studAuthService = studAuthService;
        this.studService = studService;
        this.adminAuthService = adminAuthService;
        this.commentService = commentService;
        this.isStudAuthed = false;
        this.isAdmin = false;
        this.comments = [];
      }

      _createClass(CommentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.isStudAuthed = this.studAuthService.isStudAuthenticated();
          this.commentService.getComments();
          this.getComments();
          this.studAuthService.isStudAuthUpdated().subscribe(function (isAuthed) {
            return _this8.isStudAuthed = isAuthed;
          });
          this.isAdmin = this.adminAuthService.getIsAuth();
          this.adminAuthService.getAutoAuth().subscribe(function (isAuthed) {
            return _this8.isAdmin = isAuthed;
          });
          this.createContols();
        }
      }, {
        key: "createContols",
        value: function createContols() {
          if (!this.isStudAuthed) return;
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            commentDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            studId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            })
          });
          this.patchValues();
        }
      }, {
        key: "patchValues",
        value: function patchValues() {
          var _this9 = this;

          this.studId = localStorage.getItem("studId");
          this.form.patchValue({
            studId: this.studId,
            commentDate: Date.now()
          });
          this.studService.getStudent(this.studId).subscribe(function (studData) {
            _this9.studData = studData;
          });
        }
      }, {
        key: "getComments",
        value: function getComments() {
          var _this10 = this;

          this.commentSubscription = this.commentService.getUpdatedComments().subscribe(function (comments) {
            _this10.comments = comments;
          });
        }
      }, {
        key: "createComments",
        value: function createComments() {
          this.commentService.createComment(this.form.value);
          this.resetForm();
        }
      }, {
        key: "resetForm",
        value: function resetForm() {
          this.form.reset();
          this.form.markAsPristine();
          this.form.markAsUntouched();
          this.patchValues();
        }
      }, {
        key: "toggleComment",
        value: function toggleComment(commentId, isValid) {
          this.commentService.toggleComment(commentId, isValid);
        }
      }, {
        key: "deleteComment",
        value: function deleteComment(commentId) {
          this.commentService.deleteComment(commentId);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.commentSubscription.unsubscribe();
        }
      }]);

      return CommentsComponent;
    }();

    CommentsComponent.ctorParameters = function () {
      return [{
        type: _services_stud_auth_service__WEBPACK_IMPORTED_MODULE_5__["StudAuthService"]
      }, {
        type: _services_stud_service__WEBPACK_IMPORTED_MODULE_1__["StudService"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _services_comment_service__WEBPACK_IMPORTED_MODULE_3__["CommentService"]
      }];
    };

    CommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
      selector: "app-comments",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./comments.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/comments/comments.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./comments.component.css */
      "./src/app/admin/comments/comments.component.css"))["default"]]
    })], CommentsComponent);
    /***/
  },

  /***/
  "./src/app/admin/facilities/add-updatefacs/add-updatefacs.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/admin/facilities/add-updatefacs/add-updatefacs.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminFacilitiesAddUpdatefacsAddUpdatefacsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mdb-card{\r\n  width: 80%;\r\n  margin:20px auto;\r\n}\r\n\r\n\r\nmat-error{\r\n  margin-left: 5px;\r\n}\r\n\r\n\r\n.cancel{\r\n  margin-left: 1rem;\r\n}\r\n\r\n\r\ninput[type=\"file\"]{\r\n  visibility: hidden;\r\n}\r\n\r\n\r\nmat-form-field\r\n{\r\n  width: 100%;\r\n  margin: 10px auto auto;\r\n  height: 20px;\r\n}\r\n\r\n\r\n::ng-deep .mat-form-field-flex > .mat-form-field-infix { padding: 0.4em 0px !important;}\r\n\r\n\r\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-label { margin-top:-15px; }\r\n\r\n\r\n::ng-deep .ng-valid .mat-form-field-label,::ng-deep .mat-form-field-appearance-outline:focus-within  .mat-form-field-label{\r\n  margin-top:-5px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZmFjaWxpdGllcy9hZGQtdXBkYXRlZmFjcy9hZGQtdXBkYXRlZmFjcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7O0FBR0E7RUFDRSxnQkFBZ0I7QUFDbEI7OztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7O0FBRUE7O0VBRUUsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7OztBQUNBLHlEQUF5RCw2QkFBNkIsQ0FBQzs7O0FBQ3ZGLHFFQUFxRSxnQkFBZ0IsRUFBRTs7O0FBR3ZGO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2ZhY2lsaXRpZXMvYWRkLXVwZGF0ZWZhY3MvYWRkLXVwZGF0ZWZhY3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1kYi1jYXJke1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOjIwcHggYXV0bztcclxufVxyXG5cclxuXHJcbm1hdC1lcnJvcntcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcbi5jYW5jZWx7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJmaWxlXCJde1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGRcclxue1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMTBweCBhdXRvIGF1dG87XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZmxleCA+IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7IHBhZGRpbmc6IDAuNGVtIDBweCAhaW1wb3J0YW50O31cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHsgbWFyZ2luLXRvcDotMTVweDsgfVxyXG5cclxuXHJcbjo6bmctZGVlcCAubmctdmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lOmZvY3VzLXdpdGhpbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVse1xyXG4gIG1hcmdpbi10b3A6LTVweDtcclxufVxyXG5cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/admin/facilities/add-updatefacs/add-updatefacs.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/admin/facilities/add-updatefacs/add-updatefacs.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: AddUpdatefacsComponent */

  /***/
  function srcAppAdminFacilitiesAddUpdatefacsAddUpdatefacsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddUpdatefacsComponent", function () {
      return AddUpdatefacsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _services_facility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../services/facility.service */
    "./src/app/services/facility.service.ts");
    /* harmony import */


    var _add_update_mimeType_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../add-update/mimeType-validators */
    "./src/app/admin/add-update/mimeType-validators.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_study_center_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/study-center.service */
    "./src/app/services/study-center.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AddUpdatefacsComponent = /*#__PURE__*/function () {
      function AddUpdatefacsComponent(studyCenter, facService, routerActive, router, _snackBar) {
        _classCallCheck(this, AddUpdatefacsComponent);

        this.studyCenter = studyCenter;
        this.facService = facService;
        this.routerActive = routerActive;
        this.router = router;
        this._snackBar = _snackBar;
        this.btnName = "Add";
      }

      _createClass(AddUpdatefacsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            centerId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]
            }),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)],
              asyncValidators: [_add_update_mimeType_validators__WEBPACK_IMPORTED_MODULE_3__["mimeType"]]
            }),
            subtitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]
            }),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]
            })
          });
          this.getCenter();
          this.paramSubscription = this.routerActive.queryParams.subscribe(function (param) {
            _this11.btnName = "Add";
            if (!param._id) return _this11.form.reset();
            _this11.btnName = "Update";
            _this11.imagePreview = param.image;
            _this11.oldImgPath = param.image;
            _this11.facId = param._id;

            _this11.form.patchValue(Object.assign({}, param));

            _this11.form.patchValue({
              image: null
            });
          });
        }
      }, {
        key: "openSnackBar",
        value: function openSnackBar(msg) {
          this._snackBar.open(msg, "", {
            duration: 2000,
            horizontalPosition: "center",
            verticalPosition: "top"
          });
        }
      }, {
        key: "addFacilities",
        value: function addFacilities() {
          var _this12 = this;

          if (this.form.invalid) return console.log(this.form);

          if (this.btnName === "Add") {
            this.facService.addFacilities(this.form.value).subscribe(function (res) {
              _this12.openSnackBar(res.msg);

              _this12.facService.getFacilities();
            }, function (error) {
              _this12.openSnackBar("This facility already added select and update if required");
            });
          }

          if (this.btnName === "Update") {
            this.facService.updateFacility(this.form.value, this.facId, this.oldImgPath);
          }

          this.imagePreview = '';
          this.form.reset();
          this.router.navigate(['/'], {
            queryParams: {
              lebel: "facilities"
            }
          });
        }
      }, {
        key: "getCenter",
        value: function getCenter() {
          var _this13 = this;

          this.addFacSubscription = this.studyCenter.getCenter().subscribe(function (centerDetails) {
            if (centerDetails.result.length > 0) {
              var fc = centerDetails.result[0];
              _this13.centerId = fc._id;
              return fc._id;
            } else {
              _this13.openSnackBar("Please add study center details first");

              _this13.router.navigateByUrl("/addUpdateCenter");
            }
          });
        }
      }, {
        key: "onImagePicked",
        value: function onImagePicked($event) {
          var _this14 = this;

          var file = event.target.files[0];
          this.form.patchValue({
            image: file,
            centerId: this.centerId
          });
          this.form.get("image").updateValueAndValidity();
          var reader = new FileReader();

          reader.onload = function () {
            _this14.imagePreview = reader.result;
          };

          if (file) reader.readAsDataURL(file);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.addFacSubscription.unsubscribe();
          this.paramSubscription.unsubscribe();
        }
      }]);

      return AddUpdatefacsComponent;
    }();

    AddUpdatefacsComponent.ctorParameters = function () {
      return [{
        type: src_app_services_study_center_service__WEBPACK_IMPORTED_MODULE_6__["StudyCenterService"]
      }, {
        type: _services_facility_service__WEBPACK_IMPORTED_MODULE_2__["FacilityService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]
      }];
    };

    AddUpdatefacsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
      selector: "app-add-updatefacs",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-updatefacs.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/facilities/add-updatefacs/add-updatefacs.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-updatefacs.component.css */
      "./src/app/admin/facilities/add-updatefacs/add-updatefacs.component.css"))["default"]]
    })], AddUpdatefacsComponent);
    /***/
  },

  /***/
  "./src/app/admin/facilities/viewfac/viewfac.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/admin/facilities/viewfac/viewfac.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminFacilitiesViewfacViewfacComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".no-facilities{\r\n  width: 30rem;\r\n  margin: 2rem auto;\r\n}\r\n\r\n.mat-card{\r\n  margin: 1rem auto;\r\n  min-height: 350px !important;\r\n  height: 350px;\r\n  position: relative;\r\n}\r\n\r\n.mat-card-admin{\r\n  min-height: 420px !important;\r\n  height: 420px;\r\n}\r\n\r\n.full-text,.isLeft{\r\n  position: absolute;\r\n  top:5%;\r\n  z-index: 1;\r\n  padding: 1rem;\r\n  background-color:white;\r\n  display: none;\r\n}\r\n\r\n.full-text{\r\n  left: 101%;\r\n  width: 92%;\r\n  box-shadow:   5px 0px 20px 5px;\r\n}\r\n\r\n.full-text::after,.isLeft::after{\r\n  content: '';\r\n  position: absolute;\r\n  width: 0;\r\n  height: 0;\r\n  border-left: 20px solid transparent;\r\n  border-right: 20px solid transparent;\r\n  border-top: 20px solid #fff;\r\n  clear: both;\r\n  top: 15%;\r\n\r\n}\r\n\r\n.full-text::after{\r\n  left: -1.9rem;\r\n   transform:rotate(90deg)\r\n}\r\n\r\n.isLeft{\r\n  left: -100%;\r\n  width: 100%;\r\n  box-shadow: -10px 0px 20px 5px;\r\n}\r\n\r\n.isLeft::after{\r\n  left: 94.5%;\r\n  border-left: 25px solid transparent;\r\n  border-right: 25px solid transparent;\r\n  border-top: 25px solid #fff;\r\n  transform:rotate(-90deg);\r\n}\r\n\r\n@media only screen and (max-width:767px){\r\n  .full-text,.isLeft{\r\n  left: 0%;\r\n  top:60%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZmFjaWxpdGllcy92aWV3ZmFjL3ZpZXdmYWMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsVUFBVTtFQUNWLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxtQ0FBbUM7RUFDbkMsb0NBQW9DO0VBQ3BDLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsUUFBUTs7QUFFVjs7QUFDQTtFQUNFLGFBQWE7R0FDWjtBQUNIOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCw4QkFBOEI7QUFDaEM7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsbUNBQW1DO0VBQ25DLG9DQUFvQztFQUNwQywyQkFBMkI7RUFDM0Isd0JBQXdCO0FBQzFCOztBQUdBO0VBQ0U7RUFDQSxRQUFRO0VBQ1IsT0FBTztFQUNQO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9mYWNpbGl0aWVzL3ZpZXdmYWMvdmlld2ZhYy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vLWZhY2lsaXRpZXN7XHJcbiAgd2lkdGg6IDMwcmVtO1xyXG4gIG1hcmdpbjogMnJlbSBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWNhcmR7XHJcbiAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbiAgbWluLWhlaWdodDogMzUwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDM1MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ubWF0LWNhcmQtYWRtaW57XHJcbiAgbWluLWhlaWdodDogNDIwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDQyMHB4O1xyXG59XHJcblxyXG4uZnVsbC10ZXh0LC5pc0xlZnR7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDo1JTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5mdWxsLXRleHR7XHJcbiAgbGVmdDogMTAxJTtcclxuICB3aWR0aDogOTIlO1xyXG4gIGJveC1zaGFkb3c6ICAgNXB4IDBweCAyMHB4IDVweDtcclxufVxyXG5cclxuLmZ1bGwtdGV4dDo6YWZ0ZXIsLmlzTGVmdDo6YWZ0ZXJ7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICBib3JkZXItbGVmdDogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmlnaHQ6IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXRvcDogMjBweCBzb2xpZCAjZmZmO1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIHRvcDogMTUlO1xyXG5cclxufVxyXG4uZnVsbC10ZXh0OjphZnRlcntcclxuICBsZWZ0OiAtMS45cmVtO1xyXG4gICB0cmFuc2Zvcm06cm90YXRlKDkwZGVnKVxyXG59XHJcblxyXG4uaXNMZWZ0e1xyXG4gIGxlZnQ6IC0xMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaGFkb3c6IC0xMHB4IDBweCAyMHB4IDVweDtcclxufVxyXG4uaXNMZWZ0OjphZnRlcntcclxuICBsZWZ0OiA5NC41JTtcclxuICBib3JkZXItbGVmdDogMjVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmlnaHQ6IDI1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXRvcDogMjVweCBzb2xpZCAjZmZmO1xyXG4gIHRyYW5zZm9ybTpyb3RhdGUoLTkwZGVnKTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCl7XHJcbiAgLmZ1bGwtdGV4dCwuaXNMZWZ0e1xyXG4gIGxlZnQ6IDAlO1xyXG4gIHRvcDo2MCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin/facilities/viewfac/viewfac.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/admin/facilities/viewfac/viewfac.component.ts ***!
    \***************************************************************/

  /*! exports provided: ViewfacComponent */

  /***/
  function srcAppAdminFacilitiesViewfacViewfacComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewfacComponent", function () {
      return ViewfacComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_services_snack_popup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/snack-popup.service */
    "./src/app/services/snack-popup.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_facility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../services/facility.service */
    "./src/app/services/facility.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ViewfacComponent = /*#__PURE__*/function () {
      function ViewfacComponent(facService, authService, router, _snackBar) {
        _classCallCheck(this, ViewfacComponent);

        this.facService = facService;
        this.authService = authService;
        this.router = router;
        this._snackBar = _snackBar;
        this.isAdmin = false;
        this.isLoading = true;
        this.facilities = [];
      }

      _createClass(ViewfacComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.facService.getFacilities();
          this.isAdmin = this.authService.getIsAuth();
          this.authService.getAutoAuth().subscribe(function (isAdmin) {
            _this15.isAdmin = isAdmin;
          });
          this.facilitiesSubscription = this.facService.facilitiesSubjectListener.subscribe(function (obs) {
            _this15.facilities = obs.faclities;
            _this15.isLoading = false;
          });
        }
      }, {
        key: "toggle",
        value: function toggle(fac) {
          var facs = document.getElementsByClassName("all");

          for (var i = 0; i < facs.length; i++) {
            if (fac === i) facs[fac].setAttribute('style', 'display:block');else facs[i].setAttribute('style', 'display:none');
          }
        }
      }, {
        key: "deleteFac",
        value: function deleteFac(facId) {
          var _this16 = this;

          this.facService.deleteFacility(facId).subscribe(function (result) {
            _this16.facService.getFacilities();

            _this16._snackBar.openSnack(result.msg);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.facilitiesSubscription.unsubscribe();
        }
      }]);

      return ViewfacComponent;
    }();

    ViewfacComponent.ctorParameters = function () {
      return [{
        type: _services_facility_service__WEBPACK_IMPORTED_MODULE_4__["FacilityService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_services_snack_popup_service__WEBPACK_IMPORTED_MODULE_1__["SanckBar"]
      }];
    };

    ViewfacComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
      selector: "app-viewfac",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./viewfac.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/facilities/viewfac/viewfac.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./viewfac.component.css */
      "./src/app/admin/facilities/viewfac/viewfac.component.css"))["default"]]
    })], ViewfacComponent);
    /***/
  },

  /***/
  "./src/app/admin/payment/update-payment/update-payment.component.css":
  /*!***************************************************************************!*\
    !*** ./src/app/admin/payment/update-payment/update-payment.component.css ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminPaymentUpdatePaymentUpdatePaymentComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-form-field,mat-card{\r\n  width: 100%;\r\n}\r\n\r\n::ng-deep .mat-form-field-flex > .mat-form-field-infix { padding: 0.4em 0px !important;}\r\n\r\n::ng-deep .ng-invalid .mat-form-field-appearance-outline .mat-form-field-label {\r\n  margin-top: -15px;\r\n}\r\n\r\n::ng-deep .ng-valid  .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .mat-form-field-label-wrapper .mat-form-field-label,::ng-deep .mat-focused .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .mat-form-field-label-wrapper .mat-form-field-label\r\n{\r\n  margin-top: -5px;\r\n}\r\n\r\n/*\r\n::ng-deep .ng-invalid .ng-touched .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .mat-form-field-label-wrapper .mat-form-field-label{\r\n  margin-top:-5px;\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcGF5bWVudC91cGRhdGUtcGF5bWVudC91cGRhdGUtcGF5bWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBLHlEQUF5RCw2QkFBNkIsQ0FBQzs7QUFDdkY7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUNBOzs7R0FHRyIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3BheW1lbnQvdXBkYXRlLXBheW1lbnQvdXBkYXRlLXBheW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkLG1hdC1jYXJke1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWZsZXggPiAubWF0LWZvcm0tZmllbGQtaW5maXggeyBwYWRkaW5nOiAwLjRlbSAwcHggIWltcG9ydGFudDt9XHJcbjo6bmctZGVlcCAubmctaW52YWxpZCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubmctdmFsaWQgIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1mbGV4IC5tYXQtZm9ybS1maWVsZC1pbmZpeCAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwsOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtZmxleCAubWF0LWZvcm0tZmllbGQtaW5maXggLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsXHJcbntcclxuICBtYXJnaW4tdG9wOiAtNXB4O1xyXG59XHJcbi8qXHJcbjo6bmctZGVlcCAubmctaW52YWxpZCAubmctdG91Y2hlZCAubWF0LWZvcm0tZmllbGQtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtZmxleCAubWF0LWZvcm0tZmllbGQtaW5maXggLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVse1xyXG4gIG1hcmdpbi10b3A6LTVweDtcclxufSAqL1xyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin/payment/update-payment/update-payment.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/admin/payment/update-payment/update-payment.component.ts ***!
    \**************************************************************************/

  /*! exports provided: UpdatePaymentComponent */

  /***/
  function srcAppAdminPaymentUpdatePaymentUpdatePaymentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdatePaymentComponent", function () {
      return UpdatePaymentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _services_slot_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../services/slot-detail.service */
    "./src/app/services/slot-detail.service.ts");
    /* harmony import */


    var _services_stud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../services/stud.service */
    "./src/app/services/stud.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_assign_slot_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/assign-slot.service */
    "./src/app/services/assign-slot.service.ts");

    var UpdatePaymentComponent = /*#__PURE__*/function () {
      function UpdatePaymentComponent(studService, slotAssignService, slotDetailService, _snackBar) {
        _classCallCheck(this, UpdatePaymentComponent);

        this.studService = studService;
        this.slotAssignService = slotAssignService;
        this.slotDetailService = slotDetailService;
        this._snackBar = _snackBar;
        this.onAllot = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
      }

      _createClass(UpdatePaymentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createControls();
          this.getList();
        }
      }, {
        key: "isSelected",
        value: function isSelected() {
          return typeof this.slot !== "undefined";
        }
      }, {
        key: "getList",
        value: function getList() {
          var _this17 = this;

          this.studService.getUpdatedStudList().subscribe(function (studList) {
            _this17.studList = studList;
          });
        }
      }, {
        key: "createControls",
        value: function createControls() {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            slotId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true, {
              validators: []
            }),
            studId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }),
            bookedDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }),
            bookTime: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }),
            totalFees: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }),
            paidFees: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }),
            balance: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }),
            isBooked: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            })
          });
          this.patchInit();
        }
      }, {
        key: "patchInit",
        value: function patchInit() {
          this.form.patchValue({
            studId: this.slot.studId,
            balance: this.slot.isBooked ? this.slot.balance : 0
          });
        }
      }, {
        key: "allotSlot",
        value: function allotSlot() {
          var _this18 = this;

          var date = new Date();
          var balance = this.slot.isBooked ? this.slot.balance - this.form.get("paidFees").value + this.form.get("totalFees").value : this.form.get("totalFees").value - this.form.get("paidFees").value;
          if (this.isSelected()) this.form.patchValue({
            balance: balance,
            isBooked: true,
            slotId: this.slot.slotId,
            bookTime: date.toLocaleTimeString()
          });
          console.log(this.form.controls);
          if (this.form.invalid) return;

          var bookedDate = this.form.get("bookedDate").value._i.date;

          var endDate = this.form.get("endDate").value._i.date;

          var diffDays = endDate - bookedDate;
          console.log(diffDays);

          if (balance < 0) {
            this.patchInit();
            return this.openSnackBar("We Don't except more money than fees!!");
          }

          ;
          if (diffDays < 0) return this.openSnackBar("You can book seat for at least  7 days!!");
          this.slotAssignService.assignSlot(this.form.value).subscribe(function (result) {
            _this18.form.reset();

            _this18.slotDetailService.getAllSlotDetails();

            _this18.onAllot.emit(_this18.slot);
          });
        }
      }, {
        key: "openSnackBar",
        value: function openSnackBar(msg) {
          this._snackBar.open(msg, "okay", {
            duration: 3000,
            horizontalPosition: "center",
            verticalPosition: "top"
          });
        }
      }]);

      return UpdatePaymentComponent;
    }();

    UpdatePaymentComponent.ctorParameters = function () {
      return [{
        type: _services_stud_service__WEBPACK_IMPORTED_MODULE_4__["StudService"]
      }, {
        type: src_app_services_assign_slot_service__WEBPACK_IMPORTED_MODULE_6__["AssignSlotService"]
      }, {
        type: _services_slot_detail_service__WEBPACK_IMPORTED_MODULE_3__["SlotDetailService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])("slot")], UpdatePaymentComponent.prototype, "slot", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])("studData")], UpdatePaymentComponent.prototype, "studData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"])("onAllot")], UpdatePaymentComponent.prototype, "onAllot", void 0);
    UpdatePaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
      selector: 'app-update-payment',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./update-payment.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/payment/update-payment/update-payment.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./update-payment.component.css */
      "./src/app/admin/payment/update-payment/update-payment.component.css"))["default"]]
    })], UpdatePaymentComponent);
    /***/
  },

  /***/
  "./src/app/admin/view-allotted/view-allotted.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/admin/view-allotted/view-allotted.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminViewAllottedViewAllottedComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".example-card {\r\n  max-width: 400px;\r\n  margin: auto;\r\n}\r\n\r\n.example-header-image {\r\n  background-size: cover;\r\n  width: 7rem;\r\n  height: 7rem;\r\n}\r\n\r\n.mat-spinner{\r\n  margin: 2rem auto;\r\n}\r\n\r\n.rem-days{\r\n  color: rgb(180, 57, 0);\r\n  display: flex;\r\n  font-weight: 500;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdmlldy1hbGxvdHRlZC92aWV3LWFsbG90dGVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3ZpZXctYWxsb3R0ZWQvdmlldy1hbGxvdHRlZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB3aWR0aDogN3JlbTtcclxuICBoZWlnaHQ6IDdyZW07XHJcbn1cclxuXHJcbi5tYXQtc3Bpbm5lcntcclxuICBtYXJnaW46IDJyZW0gYXV0bztcclxufVxyXG4ucmVtLWRheXN7XHJcbiAgY29sb3I6IHJnYigxODAsIDU3LCAwKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/admin/view-allotted/view-allotted.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/admin/view-allotted/view-allotted.component.ts ***!
    \****************************************************************/

  /*! exports provided: ViewAllottedComponent */

  /***/
  function srcAppAdminViewAllottedViewAllottedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewAllottedComponent", function () {
      return ViewAllottedComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_slot_detail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/slot-detail.service */
    "./src/app/services/slot-detail.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");

    var ViewAllottedComponent = /*#__PURE__*/function () {
      function ViewAllottedComponent(router, slotDetailService, authAdminService) {
        _classCallCheck(this, ViewAllottedComponent);

        this.router = router;
        this.slotDetailService = slotDetailService;
        this.authAdminService = authAdminService;
        this.onStudSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.isAdmin = false;
        this.isLoading = true;
      }

      _createClass(ViewAllottedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isAdmin = this.authAdminService.getIsAuth();
          this.isLoading = false;
        }
      }, {
        key: "isLoaded",
        value: function isLoaded() {
          return typeof this.studData !== "undefined";
        }
      }, {
        key: "onUpdate",
        value: function onUpdate() {
          this.onStudSelect.emit();
        }
      }, {
        key: "onDelete",
        value: function onDelete() {
          this.slotDetailService.deleteSlot(this.selectedSlot._id);
        }
      }, {
        key: "redTransaction",
        value: function redTransaction() {
          this.selectedSlot.studOId = this.selectedSlot.studId._id;
          this.router.navigate(["/transactions"], {
            queryParams: this.selectedSlot
          });
        }
      }]);

      return ViewAllottedComponent;
    }();

    ViewAllottedComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_slot_detail_service__WEBPACK_IMPORTED_MODULE_1__["SlotDetailService"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])("selectedSlot")], ViewAllottedComponent.prototype, "selectedSlot", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])("remDays")], ViewAllottedComponent.prototype, "remDays", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])("studData")], ViewAllottedComponent.prototype, "studData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])("onStudSelect")], ViewAllottedComponent.prototype, "onStudSelect", void 0);
    ViewAllottedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-view-allotted',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view-allotted.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/view-allotted/view-allotted.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view-allotted.component.css */
      "./src/app/admin/view-allotted/view-allotted.component.css"))["default"]]
    })], ViewAllottedComponent);
    /***/
  },

  /***/
  "./src/app/admin/view-slots/view-slots.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/admin/view-slots/view-slots.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminViewSlotsViewSlotsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\nsection {\r\n  display: contents;\r\n}\r\n\r\n\r\n.example-button-row {\r\n  display: table-cell;\r\n  width: 100%;\r\n}\r\n\r\n\r\n.example-button-row .mat-button-base {\r\n  margin: 3px 3px 3px 3px;\r\n}\r\n\r\n\r\n.example-flex-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n\r\n.btn-booked{\r\n  background-color: orange;\r\n}\r\n\r\n\r\n.container{\r\n  margin: 1rem auto;\r\n}\r\n\r\n\r\n.btn-selected{\r\n  background-color: orangered;\r\n}\r\n\r\n\r\n.mat-spinner{\r\n  margin: 2rem auto;\r\n}\r\n\r\n\r\n@media only screen and (max-width:767px)  {\r\n  .slotStud{\r\n    margin: 2rem auto;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdmlldy1zbG90cy92aWV3LXNsb3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COzs7QUFHQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7OztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOzs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCOzs7QUFHQTtFQUNFLHdCQUF3QjtBQUMxQjs7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7OztBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCOzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vdmlldy1zbG90cy92aWV3LXNsb3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogY29udGVudHM7XHJcbn1cclxuXHJcblxyXG4uZXhhbXBsZS1idXR0b24tcm93IHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1idXR0b24tcm93IC5tYXQtYnV0dG9uLWJhc2Uge1xyXG4gIG1hcmdpbjogM3B4IDNweCAzcHggM3B4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1mbGV4LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcblxyXG4uYnRuLWJvb2tlZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbn1cclxuLmJ0bi1zZWxlY3RlZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XHJcbn1cclxuXHJcbi5tYXQtc3Bpbm5lcntcclxuICBtYXJnaW46IDJyZW0gYXV0bztcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KSAge1xyXG4gIC5zbG90U3R1ZHtcclxuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xyXG4gIH1cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin/view-slots/view-slots.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/admin/view-slots/view-slots.component.ts ***!
    \**********************************************************/

  /*! exports provided: ViewSlotsComponent */

  /***/
  function srcAppAdminViewSlotsViewSlotsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewSlotsComponent", function () {
      return ViewSlotsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_slot_detail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/slot-detail.service */
    "./src/app/services/slot-detail.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ViewSlotsComponent = /*#__PURE__*/function () {
      function ViewSlotsComponent(slotsDetailService) {
        _classCallCheck(this, ViewSlotsComponent);

        this.slotsDetailService = slotsDetailService;
        this.curDate = new Date();
        this.isUpdating = false;
        this.isLoading = true;
        this.slotList = [];
        this.i = 0;
      }

      _createClass(ViewSlotsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getSlots();
        }
      }, {
        key: "addExtraSlot",
        value: function addExtraSlot() {
          this.slotsDetailService.addExtraSlot(this.slotList.length + 1);
        }
      }, {
        key: "getSlots",
        value: function getSlots() {
          var _this19 = this;

          this.slotsDetailService.getAllSlotDetails();
          this.slotSubscription = this.slotsDetailService.getAllSlotList().subscribe(function (obs) {
            _this19.isLoading = false;
            if (!(obs.allSlots.length > 0)) return;
            _this19.slotList = obs.allSlots;
            _this19.selectedSlot = obs.allSlots[_this19.i];

            _this19.getStud();
          });
        }
      }, {
        key: "onStudSelect",
        value: function onStudSelect() {
          this.isUpdating = true;
        }
      }, {
        key: "getStud",
        value: function getStud() {
          if (typeof this.selectedSlot.studId === "undefined") return;
          this.studData = this.selectedSlot.studId;
          this.isLoading = false;
          var diff = Math.abs(this.curDate.getTime() - new Date(this.selectedSlot.endDate.toString()).getTime());
          this.remDays = Math.ceil(diff / (1000 * 3600 * 24));
        }
      }, {
        key: "isSelected",
        value: function isSelected() {
          return typeof this.selectedSlot !== "undefined";
        }
      }, {
        key: "onAllot",
        value: function onAllot() {
          this.isUpdating = false;
        }
      }, {
        key: "onSlotSelected",
        value: function onSlotSelected(slot) {
          this.i = slot.slotId - 1;
          this.selectedSlot = slot;
          this.isUpdating = false;
          this.getStud();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.slotSubscription.unsubscribe();
        }
      }]);

      return ViewSlotsComponent;
    }();

    ViewSlotsComponent.ctorParameters = function () {
      return [{
        type: _services_slot_detail_service__WEBPACK_IMPORTED_MODULE_1__["SlotDetailService"]
      }];
    };

    ViewSlotsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-view-slots",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view-slots.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/view-slots/view-slots.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view-slots.component.css */
      "./src/app/admin/view-slots/view-slots.component.css"))["default"]]
    })], ViewSlotsComponent);
    /***/
  },

  /***/
  "./src/app/admin/view-transactions/view-transactions.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/admin/view-transactions/view-transactions.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminViewTransactionsViewTransactionsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container{\r\n  margin: 2rem auto;\r\n}\r\n.example-stretched-tabs {\r\n  max-width: 800px;\r\n}\r\ntable {\r\n  width: 100%;\r\n}\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\nmat-spinner{\r\n  margin: auto;\r\n}\r\n.btn-trans{\r\n  background-color: rgb(255, 255, 255);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdmlldy10cmFuc2FjdGlvbnMvdmlldy10cmFuc2FjdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBR0E7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7QUFJQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vdmlldy10cmFuc2FjdGlvbnMvdmlldy10cmFuc2FjdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgbWFyZ2luOiAycmVtIGF1dG87XHJcbn1cclxuLmV4YW1wbGUtc3RyZXRjaGVkLXRhYnMge1xyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbn1cclxuXHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuXHJcbm1hdC1zcGlubmVye1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmJ0bi10cmFuc3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/admin/view-transactions/view-transactions.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/admin/view-transactions/view-transactions.component.ts ***!
    \************************************************************************/

  /*! exports provided: ViewTransactionsComponent */

  /***/
  function srcAppAdminViewTransactionsViewTransactionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewTransactionsComponent", function () {
      return ViewTransactionsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_transaction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../services/transaction.service */
    "./src/app/services/transaction.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var ViewTransactionsComponent = /*#__PURE__*/function () {
      function ViewTransactionsComponent(transactionService, activatedRoute, adminAuthService) {
        _classCallCheck(this, ViewTransactionsComponent);

        this.transactionService = transactionService;
        this.activatedRoute = activatedRoute;
        this.adminAuthService = adminAuthService;
        this.isLoading = true;
        this.displayedColumns = ["tDate", "bookedTime", "totalFees", "paidFees", "balance"];
        this.totalSlots = 0;
        this.perPage = 4;
        this.pageIndex = 0;
        this.isAdmin = true;
        this.studId = null;
        this.transList = [];
        this.filteredList = [];
      }

      _createClass(ViewTransactionsComponent, [{
        key: "applyFilter",
        value: function applyFilter(event) {
          var filterValue = event.target.value;
          this.dataSource.filter = filterValue.trim().toLowerCase();

          if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
          }
        }
      }, {
        key: "onPageChange",
        value: function onPageChange(event) {
          this.perPage = event.pageSize;
          this.pageIndex = event.pageIndex;
          this.getTransactions();
        }
      }, {
        key: "getAll",
        value: function getAll() {
          this.studId = null;
          this.getTransactions();
          this.displayedColumns.length === 5 ? this.displayedColumns.unshift('name') : null;
          this.isLoading = false;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this20 = this;

          this.isAdmin = this.adminAuthService.getIsAuth();
          this.paramsSubscription = this.activatedRoute.queryParams.subscribe(function (obs) {
            _this20.selectedSlot = obs;
            _this20.studId = obs.studOId;
            if (typeof _this20.studId === 'undefined') return _this20.getAll();
            _this20.displayedColumns.length === 6 ? _this20.displayedColumns.shift() : null;

            _this20.getTransactions();
          });
        }
      }, {
        key: "getTransactions",
        value: function getTransactions() {
          var _this21 = this;

          this.transactionService.getStudSlotTransactions({
            slotId: this.selectedSlot.slotId,
            studId: this.studId,
            limit: this.perPage,
            from: this.pageIndex
          });
          this.transactionSubscription = this.transactionService.getUpdatedStudSlotTransactions().subscribe(function (TransactionData) {
            _this21.transList = TransactionData.transactions;
            _this21.totalSlots = TransactionData.transactionsLen;
            _this21.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this21.transList);
            _this21.isLoading = false;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.paramsSubscription.unsubscribe();
          this.transactionSubscription.unsubscribe();
        }
      }]);

      return ViewTransactionsComponent;
    }();

    ViewTransactionsComponent.ctorParameters = function () {
      return [{
        type: _services_transaction_service__WEBPACK_IMPORTED_MODULE_3__["TransactionService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], {
      read: "",
      "static": false
    })], ViewTransactionsComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"], {
      read: "",
      "static": false
    })], ViewTransactionsComponent.prototype, "sort", void 0);
    ViewTransactionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: "app-view-transactions",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view-transactions.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/view-transactions/view-transactions.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view-transactions.component.css */
      "./src/app/admin/view-transactions/view-transactions.component.css"))["default"]]
    })], ViewTransactionsComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _student_studslot_studslot_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./student/studslot/studslot.component */
    "./src/app/student/studslot/studslot.component.ts");
    /* harmony import */


    var _auth_stud_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth/stud.guard */
    "./src/app/auth/stud.guard.ts");
    /* harmony import */


    var _student_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./student/profile/profile.component */
    "./src/app/student/profile/profile.component.ts");
    /* harmony import */


    var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth/auth.guard */
    "./src/app/auth/auth.guard.ts");
    /* harmony import */


    var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auth/login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _admin_view_transactions_view_transactions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./admin/view-transactions/view-transactions.component */
    "./src/app/admin/view-transactions/view-transactions.component.ts");
    /* harmony import */


    var _admin_view_slots_view_slots_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./admin/view-slots/view-slots.component */
    "./src/app/admin/view-slots/view-slots.component.ts");
    /* harmony import */


    var _student_stud_signup_stud_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./student/stud-signup/stud-signup.component */
    "./src/app/student/stud-signup/stud-signup.component.ts");
    /* harmony import */


    var _admin_facilities_add_updatefacs_add_updatefacs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./admin/facilities/add-updatefacs/add-updatefacs.component */
    "./src/app/admin/facilities/add-updatefacs/add-updatefacs.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _admin_add_update_add_update_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./admin/add-update/add-update.component */
    "./src/app/admin/add-update/add-update.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _student_viewstud_viewstud_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./student/viewstud/viewstud.component */
    "./src/app/student/viewstud/viewstud.component.ts");
    /* harmony import */


    var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./not-found/not-found.component */
    "./src/app/not-found/not-found.component.ts");

    var routes = [{
      path: "",
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"]
    }, {
      path: "login",
      component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    }, {
      path: "addUpdateFacility",
      component: _admin_facilities_add_updatefacs_add_updatefacs_component__WEBPACK_IMPORTED_MODULE_9__["AddUpdatefacsComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["Authguard"]]
    }, {
      path: "addUpdateCenter",
      component: _admin_add_update_add_update_component__WEBPACK_IMPORTED_MODULE_11__["AddUpdateComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["Authguard"]]
    }, {
      path: "studSignup",
      component: _student_stud_signup_stud_signup_component__WEBPACK_IMPORTED_MODULE_8__["StudSignupComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["Authguard"]]
    }, {
      path: "viewStud",
      component: _student_viewstud_viewstud_component__WEBPACK_IMPORTED_MODULE_14__["ViewstudComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["Authguard"]]
    }, {
      path: "updateStud/:id",
      component: _student_stud_signup_stud_signup_component__WEBPACK_IMPORTED_MODULE_8__["StudSignupComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["Authguard"]]
    }, {
      path: "viewSlots",
      component: _admin_view_slots_view_slots_component__WEBPACK_IMPORTED_MODULE_7__["ViewSlotsComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["Authguard"]]
    }, {
      path: "studslot",
      component: _student_studslot_studslot_component__WEBPACK_IMPORTED_MODULE_1__["StudslotComponent"],
      canActivate: [_auth_stud_guard__WEBPACK_IMPORTED_MODULE_2__["StudGuard"]]
    }, {
      path: "transactions",
      component: _admin_view_transactions_view_transactions_component__WEBPACK_IMPORTED_MODULE_6__["ViewTransactionsComponent"]
    }, {
      path: "profile",
      component: _student_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"]
    }, {
      path: "**",
      component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__["NotFound"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot(routes, {
        scrollPositionRestoration: 'enabled'
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"]],
      providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["Authguard"], _auth_stud_guard__WEBPACK_IMPORTED_MODULE_2__["StudGuard"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n*{\r\n  background: rgb(230, 228, 228);\r\n  background-size: cover;\r\n  min-height: 94vh;\r\n  margin-top: -5vh;\r\n  padding-top: 5vh;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbip7XHJcbiAgYmFja2dyb3VuZDogcmdiKDIzMCwgMjI4LCAyMjgpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgbWluLWhlaWdodDogOTR2aDtcclxuICBtYXJnaW4tdG9wOiAtNXZoO1xyXG4gIHBhZGRpbmctdG9wOiA1dmg7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_stud_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/stud-auth.service */
    "./src/app/services/stud-auth.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(authservice, studAuthService) {
        _classCallCheck(this, AppComponent);

        this.authservice = authservice;
        this.studAuthService = studAuthService;
        this.title = 'studyCenter';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.authservice.autoAuthAdmin();
          this.studAuthService.autoAuthStud();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _services_stud_auth_service__WEBPACK_IMPORTED_MODULE_1__["StudAuthService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _error_AppErrorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./error/AppErrorHandler */
    "./src/app/error/AppErrorHandler.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _summary_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./summary.pipe */
    "./src/app/summary.pipe.ts");
    /* harmony import */


    var _auth_auth_intercepter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth/auth-intercepter */
    "./src/app/auth/auth-intercepter.ts");
    /* harmony import */


    var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./not-found/not-found.component */
    "./src/app/not-found/not-found.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _admin_add_update_add_update_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./admin/add-update/add-update.component */
    "./src/app/admin/add-update/add-update.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _admin_facilities_add_updatefacs_add_updatefacs_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./admin/facilities/add-updatefacs/add-updatefacs.component */
    "./src/app/admin/facilities/add-updatefacs/add-updatefacs.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _admin_facilities_viewfac_viewfac_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./admin/facilities/viewfac/viewfac.component */
    "./src/app/admin/facilities/viewfac/viewfac.component.ts");
    /* harmony import */


    var _student_stud_signup_stud_signup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./student/stud-signup/stud-signup.component */
    "./src/app/student/stud-signup/stud-signup.component.ts");
    /* harmony import */


    var _student_viewstud_viewstud_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./student/viewstud/viewstud.component */
    "./src/app/student/viewstud/viewstud.component.ts");
    /* harmony import */


    var _admin_add_slots_add_slots_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./admin/add-slots/add-slots.component */
    "./src/app/admin/add-slots/add-slots.component.ts");
    /* harmony import */


    var _admin_view_slots_view_slots_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./admin/view-slots/view-slots.component */
    "./src/app/admin/view-slots/view-slots.component.ts");
    /* harmony import */


    var _admin_assign_slot_assign_slot_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./admin/assign-slot/assign-slot.component */
    "./src/app/admin/assign-slot/assign-slot.component.ts");
    /* harmony import */


    var _admin_view_allotted_view_allotted_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./admin/view-allotted/view-allotted.component */
    "./src/app/admin/view-allotted/view-allotted.component.ts");
    /* harmony import */


    var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material-moment-adapter */
    "./node_modules/@angular/material-moment-adapter/fesm2015/material-moment-adapter.js");
    /* harmony import */


    var _moment_utc_date_adapter__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./moment-utc-date-adapter */
    "./src/app/moment-utc-date-adapter.ts");
    /* harmony import */


    var _admin_payment_update_payment_update_payment_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./admin/payment/update-payment/update-payment.component */
    "./src/app/admin/payment/update-payment/update-payment.component.ts");
    /* harmony import */


    var _admin_view_transactions_view_transactions_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./admin/view-transactions/view-transactions.component */
    "./src/app/admin/view-transactions/view-transactions.component.ts");
    /* harmony import */


    var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./auth/login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _student_profile_profile_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./student/profile/profile.component */
    "./src/app/student/profile/profile.component.ts");
    /* harmony import */


    var _student_studslot_studslot_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./student/studslot/studslot.component */
    "./src/app/student/studslot/studslot.component.ts");
    /* harmony import */


    var _admin_comments_comments_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./admin/comments/comments.component */
    "./src/app/admin/comments/comments.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _services_snack_popup_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./services/snack-popup.service */
    "./src/app/services/snack-popup.service.ts"); // MDB Angular Pro
    // For MDB Angular Free


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _admin_add_update_add_update_component__WEBPACK_IMPORTED_MODULE_12__["AddUpdateComponent"], _admin_facilities_add_updatefacs_add_updatefacs_component__WEBPACK_IMPORTED_MODULE_17__["AddUpdatefacsComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"], _admin_facilities_viewfac_viewfac_component__WEBPACK_IMPORTED_MODULE_19__["ViewfacComponent"], _student_stud_signup_stud_signup_component__WEBPACK_IMPORTED_MODULE_20__["StudSignupComponent"], _student_viewstud_viewstud_component__WEBPACK_IMPORTED_MODULE_21__["ViewstudComponent"], _admin_add_slots_add_slots_component__WEBPACK_IMPORTED_MODULE_22__["AddSlotsComponent"], _admin_view_slots_view_slots_component__WEBPACK_IMPORTED_MODULE_23__["ViewSlotsComponent"], _admin_assign_slot_assign_slot_component__WEBPACK_IMPORTED_MODULE_24__["AssignSlotComponent"], _admin_view_allotted_view_allotted_component__WEBPACK_IMPORTED_MODULE_25__["ViewAllottedComponent"], _admin_payment_update_payment_update_payment_component__WEBPACK_IMPORTED_MODULE_28__["UpdatePaymentComponent"], _admin_view_transactions_view_transactions_component__WEBPACK_IMPORTED_MODULE_29__["ViewTransactionsComponent"], _auth_login_login_component__WEBPACK_IMPORTED_MODULE_30__["LoginComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFound"], _student_profile_profile_component__WEBPACK_IMPORTED_MODULE_31__["ProfileComponent"], _student_studslot_studslot_component__WEBPACK_IMPORTED_MODULE_32__["StudslotComponent"], _admin_comments_comments_component__WEBPACK_IMPORTED_MODULE_33__["CommentsComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_34__["FooterComponent"], _summary_pipe__WEBPACK_IMPORTED_MODULE_3__["SummaryPipe"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["NavbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatListModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["WavesModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["ButtonsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["CardsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["MDBBootstrapModule"].forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]],
      providers: [_services_snack_popup_service__WEBPACK_IMPORTED_MODULE_35__["SanckBar"], {
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_14__["MAT_DATE_LOCALE"],
        useValue: "en-GB"
      }, {
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_14__["MAT_DATE_FORMATS"],
        useValue: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_26__["MAT_MOMENT_DATE_FORMATS"]
      }, {
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_14__["DateAdapter"],
        useClass: _moment_utc_date_adapter__WEBPACK_IMPORTED_MODULE_27__["MomentUtcDateAdapter"]
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HTTP_INTERCEPTORS"],
        useClass: _auth_auth_intercepter__WEBPACK_IMPORTED_MODULE_4__["AuthIntercepter"],
        multi: true
      }, {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"],
        useClass: _error_AppErrorHandler__WEBPACK_IMPORTED_MODULE_1__["AppErrorHandler"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth/auth-intercepter.ts":
  /*!******************************************!*\
    !*** ./src/app/auth/auth-intercepter.ts ***!
    \******************************************/

  /*! exports provided: AuthIntercepter */

  /***/
  function srcAppAuthAuthIntercepterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthIntercepter", function () {
      return AuthIntercepter;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AuthIntercepter = /*#__PURE__*/function () {
      function AuthIntercepter(authSerivce) {
        _classCallCheck(this, AuthIntercepter);

        this.authSerivce = authSerivce;
      }

      _createClass(AuthIntercepter, [{
        key: "intercept",
        value: function intercept(req, next) {
          var token = this.authSerivce.getToken();
          var authRequest = req.clone({
            headers: req.headers.set("authorization", token)
          });
          return next.handle(authRequest);
        }
      }]);

      return AuthIntercepter;
    }();

    AuthIntercepter.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }];
    };

    AuthIntercepter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], AuthIntercepter);
    /***/
  },

  /***/
  "./src/app/auth/auth.guard.ts":
  /*!************************************!*\
    !*** ./src/app/auth/auth.guard.ts ***!
    \************************************/

  /*! exports provided: Authguard */

  /***/
  function srcAppAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Authguard", function () {
      return Authguard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../services/auth.service */
    "./src/app/services/auth.service.ts");

    var Authguard = /*#__PURE__*/function () {
      function Authguard(authService, router) {
        _classCallCheck(this, Authguard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(Authguard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (this.authService.getIsAuth()) {
            return true;
          } else {
            this.router.navigateByUrl("login");
          }
        }
      }]);

      return Authguard;
    }();

    Authguard.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    Authguard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], Authguard);
    /***/
  },

  /***/
  "./src/app/auth/login/login.component.css":
  /*!************************************************!*\
    !*** ./src/app/auth/login/login.component.css ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n.container{\r\n max-height: 90vh;\r\n height: 90vh;\r\n\r\n}\r\n.card{\r\n  margin: 2rem auto auto;\r\n  box-shadow: 0px 0px 20px 5px rgb(37, 6, 6);\r\n  background-size: cover;\r\n}\r\n.btn-cust{\r\n  color: white;\r\n  background-color: rgb(173, 47, 223) !important;\r\n}\r\n.mat-spinner{\r\n  margin: 4rem auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQixZQUFZOztBQUViO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsMENBQTBDO0VBQzFDLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsWUFBWTtFQUNaLDhDQUE4QztBQUNoRDtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jb250YWluZXJ7XHJcbiBtYXgtaGVpZ2h0OiA5MHZoO1xyXG4gaGVpZ2h0OiA5MHZoO1xyXG5cclxufVxyXG4uY2FyZHtcclxuICBtYXJnaW46IDJyZW0gYXV0byBhdXRvO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCA1cHggcmdiKDM3LCA2LCA2KTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uYnRuLWN1c3R7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzMsIDQ3LCAyMjMpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXQtc3Bpbm5lcntcclxuICBtYXJnaW46IDRyZW0gYXV0bztcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/auth/login/login.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/auth/login/login.component.ts ***!
    \***********************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_stud_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/stud-auth.service */
    "./src/app/services/stud-auth.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(authService, studAuthService) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.studAuthService = studAuthService;
        this.isLoding = false;
        this.loginType = true;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4)]
            })
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this22 = this;

          this.isLoding = true;
          if (this.form.invalid) return;
          if (!this.loginType) this.authService.onLogin(this.form.value);else if (this.loginType) this.studAuthService.onLogin(this.form.value);
          this.form.reset();
          setTimeout(function () {
            _this22.isLoding = false;
          }, 500);
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _services_stud_auth_service__WEBPACK_IMPORTED_MODULE_1__["StudAuthService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/auth/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/auth/stud.guard.ts":
  /*!************************************!*\
    !*** ./src/app/auth/stud.guard.ts ***!
    \************************************/

  /*! exports provided: StudGuard */

  /***/
  function srcAppAuthStudGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudGuard", function () {
      return StudGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_stud_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/stud-auth.service */
    "./src/app/services/stud-auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StudGuard = /*#__PURE__*/function () {
      function StudGuard(studAuthService, router) {
        _classCallCheck(this, StudGuard);

        this.studAuthService = studAuthService;
        this.router = router;
      }

      _createClass(StudGuard, [{
        key: "canActivate",
        value: function canActivate(router, state) {
          if (this.studAuthService.isStudAuthenticated()) {
            return true;
          } else {
            this.router.navigateByUrl("login");
          }
        }
      }]);

      return StudGuard;
    }();

    StudGuard.ctorParameters = function () {
      return [{
        type: _services_stud_auth_service__WEBPACK_IMPORTED_MODULE_1__["StudAuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    StudGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()], StudGuard);
    /***/
  },

  /***/
  "./src/app/error/AppErrorHandler.ts":
  /*!******************************************!*\
    !*** ./src/app/error/AppErrorHandler.ts ***!
    \******************************************/

  /*! exports provided: AppErrorHandler */

  /***/
  function srcAppErrorAppErrorHandlerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppErrorHandler", function () {
      return AppErrorHandler;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppErrorHandler = /*#__PURE__*/function () {
      function AppErrorHandler(_snackBar) {
        _classCallCheck(this, AppErrorHandler);

        this._snackBar = _snackBar;
      }

      _createClass(AppErrorHandler, [{
        key: "handleError",
        value: function handleError(error) {
          console.log(error);

          this._snackBar.open(error.error.msg, "Okay", {
            horizontalPosition: "center",
            verticalPosition: "top",
            duration: 2000
          });
        }
      }]);

      return AppErrorHandler;
    }();

    AppErrorHandler.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]
      }];
    };

    AppErrorHandler = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], AppErrorHandler);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.css":
  /*!*********************************************!*\
    !*** ./src/app/footer/footer.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "footer{\r\n  background-color: rgba(29, 28, 28, 0.89);\r\n  color: whitesmoke;\r\n  padding: 2rem 1rem;\r\n}\r\n*{\r\n  color: whitesmoke;\r\n}\r\n.mat-list-item\r\n{\r\n  color: whitesmoke;\r\n}\r\n.cust-ul{\r\n  list-style: none;\r\n}\r\n.cust-ul li{\r\n  display: flex;\r\n  margin: 1rem auto;\r\n}\r\nli mat-icon{\r\n  margin: auto .5rem;\r\n}\r\niframe{\r\nwidth: 100%;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0NBQXdDO0VBQ3hDLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBOztFQUVFLGlCQUFpQjtBQUNuQjtBQUdBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFHQTtBQUNBLFdBQVc7QUFDWCIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI5LCAyOCwgMjgsIDAuODkpO1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcclxufVxyXG4qe1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcbi5tYXQtbGlzdC1pdGVtXHJcbntcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuXHJcbi5jdXN0LXVse1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuLmN1c3QtdWwgbGl7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IDFyZW0gYXV0bztcclxufVxyXG5cclxubGkgbWF0LWljb257XHJcbiAgbWFyZ2luOiBhdXRvIC41cmVtO1xyXG59XHJcblxyXG5cclxuaWZyYW1le1xyXG53aWR0aDogMTAwJTtcclxufVxyXG5cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/footer/footer.component.css"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/header/header.component.css":
  /*!*********************************************!*\
    !*** ./src/app/header/header.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login{\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2lue1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_stud_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/stud-auth.service */
    "./src/app/services/stud-auth.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(authService, studAuthService) {
        _classCallCheck(this, HeaderComponent);

        this.authService = authService;
        this.studAuthService = studAuthService;
        this.isAdmin = false;
        this.isStud = false;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this23 = this;

          this.isAdmin = this.authService.getIsAuth();
          this.authService.getAutoAuth().subscribe(function (isAuth) {
            _this23.isAdmin = isAuth;
          });
          this.isStud = this.studAuthService.isStudAuthenticated();
          this.studAuthService.isStudAuthUpdated().subscribe(function (isStudAuth) {
            _this23.isStud = isStudAuth;
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          if (this.isAdmin) this.authService.logout();else if (this.isStud) this.studAuthService.logout();
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _services_stud_auth_service__WEBPACK_IMPORTED_MODULE_1__["StudAuthService"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/header/header.component.css"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\nimg{\r\n  height:20rem;\r\n}\r\n\r\n/*min-height:  900px*/\r\n\r\n*:focus {\r\n  outline: none !important;\r\n  border: 0 !important;\r\n}\r\n\r\n.container{\r\n  margin: 2rem auto;\r\n}\r\n\r\n.mat-spinner{\r\n  margin:3rem auto;\r\n}\r\n\r\n.app-comments{\r\n  margin: auto ;\r\n}\r\n\r\n.inst-tab{\r\n  margin: 2rem auto auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUVBLHFCQUFxQjs7QUFDckI7RUFDRSx3QkFBd0I7RUFDeEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1ne1xyXG4gIGhlaWdodDoyMHJlbTtcclxufVxyXG5cclxuLyptaW4taGVpZ2h0OiAgOTAwcHgqL1xyXG4qOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgbWFyZ2luOiAycmVtIGF1dG87XHJcbn1cclxuXHJcbi5tYXQtc3Bpbm5lcntcclxuICBtYXJnaW46M3JlbSBhdXRvO1xyXG59XHJcbi5hcHAtY29tbWVudHN7XHJcbiAgbWFyZ2luOiBhdXRvIDtcclxufVxyXG4uaW5zdC10YWJ7XHJcbiAgbWFyZ2luOiAycmVtIGF1dG8gYXV0bztcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(activatedRoute) {
        _classCallCheck(this, HomeComponent);

        this.activatedRoute = activatedRoute;
        this.isLoading = true;
        this.scrollToFacility();
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this24 = this;

          this.activatedRoute.queryParams.subscribe(function (isExist) {
            if (isExist.lebel) setTimeout(function () {
              _this24.scrollToFacility();
            }, 1000);
          });
          this.isLoading = false;
        }
      }, {
        key: "scrollToFacility",
        value: function scrollToFacility() {
          var element = document.getElementById('facilities');
          if (element) element.scrollIntoView();
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/moment-utc-date-adapter.ts":
  /*!********************************************!*\
    !*** ./src/app/moment-utc-date-adapter.ts ***!
    \********************************************/

  /*! exports provided: MomentUtcDateAdapter */

  /***/
  function srcAppMomentUtcDateAdapterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MomentUtcDateAdapter", function () {
      return MomentUtcDateAdapter;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material-moment-adapter */
    "./node_modules/@angular/material-moment-adapter/fesm2015/material-moment-adapter.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);

    var MomentUtcDateAdapter = /*#__PURE__*/function (_angular_material_mom) {
      _inherits(MomentUtcDateAdapter, _angular_material_mom);

      var _super = _createSuper(MomentUtcDateAdapter);

      function MomentUtcDateAdapter(dateLocale) {
        _classCallCheck(this, MomentUtcDateAdapter);

        return _super.call(this, dateLocale);
      }

      _createClass(MomentUtcDateAdapter, [{
        key: "createDate",
        value: function createDate(year, month, date) {
          // Moment.js will create an invalid date if any of the components are out of bounds, but we
          // explicitly check each case so we can throw more descriptive errors.
          if (month < 0 || month > 11) {
            throw Error("Invalid month index \"".concat(month, "\". Month index has to be between 0 and 11."));
          }

          if (date < 1) {
            throw Error("Invalid date \"".concat(date, "\". Date has to be greater than 0."));
          }

          var result = moment__WEBPACK_IMPORTED_MODULE_4__["utc"]({
            year: year,
            month: month,
            date: date
          }).locale(this.locale); // If the result isn't valid, the date must have been out of bounds for this month.

          if (!result.isValid()) {
            throw Error("Invalid date \"".concat(date, "\" for month with index \"").concat(month, "\"."));
          }

          return result;
        }
      }]);

      return MomentUtcDateAdapter;
    }(_angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__["MomentDateAdapter"]);

    MomentUtcDateAdapter.ctorParameters = function () {
      return [{
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_LOCALE"]]
        }]
      }];
    };

    MomentUtcDateAdapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_LOCALE"]))], MomentUtcDateAdapter);
    /***/
  },

  /***/
  "./src/app/not-found/not-found.component.css":
  /*!***************************************************!*\
    !*** ./src/app/not-found/not-found.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNotFoundNotFoundComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container{\r\n  background-color: rgb(223, 224, 246) !important;\r\nmin-height: 60vh;\r\nborder-radius: 1%;\r\n}\r\n.primary\r\n{\r\n  margin: 3rem auto auto 2rem;\r\n  color: rgb(22, 22, 133);\r\n  font-weight: bold;\r\n}\r\n.primary-main{\r\n  display: inline-flex;\r\n  line-height: 1.5;\r\n  color: rgba(255, 0, 0, 0.753);\r\n  width: 100%;\r\n  clear: both;\r\n  font-weight: bold;\r\n}\r\n.primary-sub{\r\n  display: flex;\r\n}\r\nbutton{\r\n  background-color: rgb(57, 21, 187);\r\n  margin: 2rem auto auto 2rem;\r\n  color: white;\r\n}\r\n.img-404{\r\n  margin:  auto;\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0NBQStDO0FBQ2pELGdCQUFnQjtBQUNoQixpQkFBaUI7QUFDakI7QUFDQTs7RUFFRSwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLDJCQUEyQjtFQUMzQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjMsIDIyNCwgMjQ2KSAhaW1wb3J0YW50O1xyXG5taW4taGVpZ2h0OiA2MHZoO1xyXG5ib3JkZXItcmFkaXVzOiAxJTtcclxufVxyXG4ucHJpbWFyeVxyXG57XHJcbiAgbWFyZ2luOiAzcmVtIGF1dG8gYXV0byAycmVtO1xyXG4gIGNvbG9yOiByZ2IoMjIsIDIyLCAxMzMpO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5wcmltYXJ5LW1haW57XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBjb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNzUzKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBjbGVhcjogYm90aDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ucHJpbWFyeS1zdWJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5idXR0b257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU3LCAyMSwgMTg3KTtcclxuICBtYXJnaW46IDJyZW0gYXV0byBhdXRvIDJyZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaW1nLTQwNHtcclxuICBtYXJnaW46ICBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/not-found/not-found.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/not-found/not-found.component.ts ***!
    \**************************************************/

  /*! exports provided: NotFound */

  /***/
  function srcAppNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFound", function () {
      return NotFound;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NotFound = function NotFound() {
      _classCallCheck(this, NotFound);
    };

    NotFound = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "not-found",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./not-found.component.css */
      "./src/app/not-found/not-found.component.css"))["default"]]
    })], NotFound);
    /***/
  },

  /***/
  "./src/app/resources/state-dist.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/resources/state-dist.service.ts ***!
    \*************************************************/

  /*! exports provided: StateDistService */

  /***/
  function srcAppResourcesStateDistServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StateDistService", function () {
      return StateDistService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StateDistService = /*#__PURE__*/function () {
      function StateDistService() {
        _classCallCheck(this, StateDistService);
      }

      _createClass(StateDistService, [{
        key: "getStates",
        value: function getStates() {
          return [{
            id: "1",
            type: "Union Territory",
            capital: "Mayabunder",
            code: "AN",
            name: "Andaman and Nicobar Islands",
            districts: [{
              id: "1",
              name: "Nicobar"
            }, {
              id: "2",
              name: "North and Middle Andaman"
            }, {
              id: "3",
              name: "South Andaman"
            }],
            coordinates: ["92.6586", "11.7401"]
          }, {
            id: "2",
            type: "State",
            capital: "Amaravati",
            code: "AP",
            name: "Andhra Pradesh",
            districts: [{
              id: "1",
              name: "Anantapur"
            }, {
              id: "2",
              name: "Chittoor"
            }, {
              id: "3",
              name: "East Godavari"
            }, {
              id: "4",
              name: "Guntur"
            }, {
              id: "5",
              name: "Krishna"
            }, {
              id: "6",
              name: "Kurnool"
            }, {
              id: "7",
              name: "Nellore"
            }, {
              id: "8",
              name: "Prakasam"
            }, {
              id: "9",
              name: "Srikakulam"
            }, {
              id: "10",
              name: "Visakhapatnam"
            }, {
              id: "11",
              name: "Vizianagaram"
            }, {
              id: "12",
              name: "West Godavari"
            }, {
              id: "13",
              name: "YSR Kadapa"
            }],
            coordinates: ["79.7400", "15.9129"]
          }, {
            id: "3",
            type: "State",
            capital: "Itanagar",
            code: "AR",
            name: "Arunachal Pradesh",
            districts: [{
              id: "1",
              name: "Tawang"
            }, {
              id: "2",
              name: "West Kameng"
            }, {
              id: "3",
              name: "East Kameng"
            }, {
              id: "4",
              name: "Papum Pare"
            }, {
              id: "5",
              name: "Kurung Kumey"
            }, {
              id: "6",
              name: "Kra Daadi"
            }, {
              id: "7",
              name: "Lower Subansiri"
            }, {
              id: "8",
              name: "Upper Subansiri"
            }, {
              id: "9",
              name: "West Siang"
            }, {
              id: "10",
              name: "East Siang"
            }, {
              id: "11",
              name: "Siang"
            }, {
              id: "12",
              name: "Upper Siang"
            }, {
              id: "13",
              name: "Lower Siang"
            }, {
              id: "14",
              name: "Lower Dibang Valley"
            }, {
              id: "15",
              name: "Dibang Valley"
            }, {
              id: "16",
              name: "Anjaw"
            }, {
              id: "17",
              name: "Lohit"
            }, {
              id: "18",
              name: "Namsai"
            }, {
              id: "19",
              name: "Changlang"
            }, {
              id: "20",
              name: "Tirap"
            }, {
              id: "21",
              name: "Longding"
            }],
            coordinates: ["94.7278", "28.2180"]
          }, {
            id: "4",
            type: "State",
            capital: "Dispur",
            code: "AS",
            name: "Assam",
            districts: [{
              id: "1",
              name: "Baksa"
            }, {
              id: "2",
              name: "Barpeta"
            }, {
              id: "3",
              name: "Biswanath"
            }, {
              id: "4",
              name: "Bongaigaon"
            }, {
              id: "5",
              name: "Cachar"
            }, {
              id: "6",
              name: "Charaideo"
            }, {
              id: "7",
              name: "Chirang"
            }, {
              id: "8",
              name: "Darrang"
            }, {
              id: "9",
              name: "Dhemaji"
            }, {
              id: "10",
              name: "Dhubri"
            }, {
              id: "11",
              name: "Dibrugarh"
            }, {
              id: "12",
              name: "Goalpara"
            }, {
              id: "13",
              name: "Golaghat"
            }, {
              id: "14",
              name: "Hailakandi"
            }, {
              id: "15",
              name: "Hojai"
            }, {
              id: "16",
              name: "Jorhat"
            }, {
              id: "17",
              name: "Kamrup Metropolitan"
            }, {
              id: "18",
              name: "Kamrup"
            }, {
              id: "19",
              name: "Karbi Anglong"
            }, {
              id: "20",
              name: "Karimganj"
            }, {
              id: "21",
              name: "Kokrajhar"
            }, {
              id: "22",
              name: "Lakhimpur"
            }, {
              id: "23",
              name: "Majuli"
            }, {
              id: "24",
              name: "Morigaon"
            }, {
              id: "25",
              name: "Nagaon"
            }, {
              id: "26",
              name: "Nalbari"
            }, {
              id: "27",
              name: "Dima Hasao"
            }, {
              id: "28",
              name: "Sivasagar"
            }, {
              id: "29",
              name: "Sonitpur"
            }, {
              id: "30",
              name: "South Salmara-Mankachar"
            }, {
              id: "31",
              name: "Tinsukia"
            }, {
              id: "32",
              name: "Udalguri"
            }, {
              id: "33",
              name: "West Karbi Anglong"
            }],
            coordinates: ["92.9376", "26.2006"]
          }, {
            id: "5",
            type: "State",
            capital: "Patna",
            code: "BR",
            name: "Bihar",
            districts: [{
              id: "1",
              name: "Araria"
            }, {
              id: "2",
              name: "Arwal"
            }, {
              id: "3",
              name: "Aurangabad"
            }, {
              id: "4",
              name: "Banka"
            }, {
              id: "5",
              name: "Begusarai"
            }, {
              id: "6",
              name: "Bhagalpur"
            }, {
              id: "7",
              name: "Bhojpur"
            }, {
              id: "8",
              name: "Buxar"
            }, {
              id: "9",
              name: "Darbhanga"
            }, {
              id: "10",
              name: "East Champaran (Motihari)"
            }, {
              id: "11",
              name: "Gaya"
            }, {
              id: "12",
              name: "Gopalganj"
            }, {
              id: "13",
              name: "Jamui"
            }, {
              id: "14",
              name: "Jehanabad"
            }, {
              id: "15",
              name: "Kaimur (Bhabua)"
            }, {
              id: "16",
              name: "Katihar"
            }, {
              id: "17",
              name: "Khagaria"
            }, {
              id: "18",
              name: "Kishanganj"
            }, {
              id: "19",
              name: "Lakhisarai"
            }, {
              id: "20",
              name: "Madhepura"
            }, {
              id: "21",
              name: "Madhubani"
            }, {
              id: "22",
              name: "Munger (Monghyr)"
            }, {
              id: "23",
              name: "Muzaffarpur"
            }, {
              id: "24",
              name: "Nalanda"
            }, {
              id: "25",
              name: "Nawada"
            }, {
              id: "26",
              name: "Patna"
            }, {
              id: "27",
              name: "Purnia (Purnea)"
            }, {
              id: "28",
              name: "Rohtas"
            }, {
              id: "29",
              name: "Saharsa"
            }, {
              id: "30",
              name: "Samastipur"
            }, {
              id: "31",
              name: "Saran"
            }, {
              id: "32",
              name: "Sheikhpura"
            }, {
              id: "33",
              name: "Sheohar"
            }, {
              id: "34",
              name: "Sitamarhi"
            }, {
              id: "35",
              name: "Siwan"
            }, {
              id: "36",
              name: "Supaul"
            }, {
              id: "37",
              name: "Vaishali"
            }, {
              id: "38",
              name: "West Champaran"
            }],
            coordinates: ["85.3131", "25.0961"]
          }, {
            id: "6",
            type: "Union Territory",
            capital: "Chandigarh",
            code: "CG",
            name: "Chandigarh",
            districts: [{
              id: "1",
              name: "Chandigarh"
            }],
            coordinates: ["76.7794", "30.7333"]
          }, {
            id: "7",
            type: "State",
            capital: "Bilaspur (Judiciary), Raipur",
            code: "CH",
            name: "Chhattisgarh",
            districts: [{
              id: "1",
              name: "Balod"
            }, {
              id: "2",
              name: "Baloda Bazar"
            }, {
              id: "3",
              name: "Balrampur"
            }, {
              id: "4",
              name: "Bastar"
            }, {
              id: "5",
              name: "Bemetara"
            }, {
              id: "6",
              name: "Bijapur"
            }, {
              id: "7",
              name: "Bilaspur"
            }, {
              id: "8",
              name: "Dantewada (South Bastar)"
            }, {
              id: "9",
              name: "Dhamtari"
            }, {
              id: "10",
              name: "Durg"
            }, {
              id: "11",
              name: "Gariyaband"
            }, {
              id: "12",
              name: "Janjgir-Champa"
            }, {
              id: "13",
              name: "Jashpur"
            }, {
              id: "14",
              name: "Kabirdham (Kawardha)"
            }, {
              id: "15",
              name: "Kanker (North Bastar)"
            }, {
              id: "16",
              name: "Kondagaon"
            }, {
              id: "17",
              name: "Korba"
            }, {
              id: "18",
              name: "Korea (Koriya)"
            }, {
              id: "19",
              name: "Mahasamund"
            }, {
              id: "20",
              name: "Mungeli"
            }, {
              id: "21",
              name: "Narayanpur"
            }, {
              id: "22",
              name: "Raigarh"
            }, {
              id: "23",
              name: "Raipur"
            }, {
              id: "24",
              name: "Rajnandgaon"
            }, {
              id: "25",
              name: "Sukma"
            }, {
              id: "26",
              name: "Surajpur  "
            }, {
              id: "27",
              name: "Surguja"
            }],
            coordinates: ["81.8661", "21.2787"]
          }, {
            id: "8",
            type: "Union Territory",
            capital: "Silvassa",
            code: "DH",
            name: "Dadra and Nagar Haveli",
            districts: [{
              id: "1",
              name: "Dadra & Nagar Haveli"
            }],
            coordinates: ["73.0169", "20.1809"]
          }, {
            id: "9",
            type: "Union Territory",
            capital: "Daman",
            code: "DD",
            name: "Daman and Diu",
            districts: [{
              id: "1",
              name: "Daman"
            }, {
              id: "2",
              name: "Diu"
            }],
            coordinates: ["72.8397", "20.4283"]
          }, {
            id: "10",
            type: "National Capital Territory",
            capital: "New Delhi",
            code: "DL",
            name: "Delhi",
            districts: [{
              id: "1",
              name: "Central Delhi"
            }, {
              id: "2",
              name: "East Delhi"
            }, {
              id: "3",
              name: "New Delhi"
            }, {
              id: "4",
              name: "North Delhi"
            }, {
              id: "5",
              name: "North East  Delhi"
            }, {
              id: "6",
              name: "North West  Delhi"
            }, {
              id: "7",
              name: "Shahdara"
            }, {
              id: "8",
              name: "South Delhi"
            }, {
              id: "9",
              name: "South East Delhi"
            }, {
              id: "10",
              name: "South West  Delhi"
            }, {
              id: "11",
              name: "West Delhi"
            }],
            coordinates: ["77.1025", "28.7041"]
          }, {
            id: "11",
            type: "State",
            capital: "Panaji",
            code: "GA",
            name: "Goa",
            districts: [{
              id: "1",
              name: "North Goa"
            }, {
              id: "2",
              name: "South Goa"
            }],
            coordinates: ["74.1240", "15.2993"]
          }, {
            id: "12",
            type: "State",
            capital: "Gandhinagar",
            code: "GJ",
            name: "Gujarat",
            districts: [{
              id: "1",
              name: "Ahmedabad"
            }, {
              id: "2",
              name: "Amreli"
            }, {
              id: "3",
              name: "Anand"
            }, {
              id: "4",
              name: "Aravalli"
            }, {
              id: "5",
              name: "Banaskantha (Palanpur)"
            }, {
              id: "6",
              name: "Bharuch"
            }, {
              id: "7",
              name: "Bhavnagar"
            }, {
              id: "8",
              name: "Botad"
            }, {
              id: "9",
              name: "Chhota Udepur"
            }, {
              id: "10",
              name: "Dahod"
            }, {
              id: "11",
              name: "Dangs (Ahwa)"
            }, {
              id: "12",
              name: "Devbhoomi Dwarka"
            }, {
              id: "13",
              name: "Gandhinagar"
            }, {
              id: "14",
              name: "Gir Somnath"
            }, {
              id: "15",
              name: "Jamnagar"
            }, {
              id: "16",
              name: "Junagadh"
            }, {
              id: "17",
              name: "Kachchh"
            }, {
              id: "18",
              name: "Kheda (Nadiad)"
            }, {
              id: "19",
              name: "Mahisagar"
            }, {
              id: "20",
              name: "Mehsana"
            }, {
              id: "21",
              name: "Morbi"
            }, {
              id: "22",
              name: "Narmada (Rajpipla)"
            }, {
              id: "23",
              name: "Navsari"
            }, {
              id: "24",
              name: "Panchmahal (Godhra)"
            }, {
              id: "25",
              name: "Patan"
            }, {
              id: "26",
              name: "Porbandar"
            }, {
              id: "27",
              name: "Rajkot"
            }, {
              id: "28",
              name: "Sabarkantha (Himmatnagar)"
            }, {
              id: "29",
              name: "Surat"
            }, {
              id: "30",
              name: "Surendranagar"
            }, {
              id: "31",
              name: "Tapi (Vyara)"
            }, {
              id: "32",
              name: "Vadodara"
            }, {
              id: "33",
              name: "Valsad"
            }],
            coordinates: ["71.1924", "22.2587"]
          }, {
            id: "13",
            type: "State",
            capital: "Chandigarh",
            code: "HR",
            name: "Haryana",
            districts: [{
              id: "1",
              name: "Ambala"
            }, {
              id: "2",
              name: "Bhiwani"
            }, {
              id: "3",
              name: "Charkhi Dadri"
            }, {
              id: "4",
              name: "Faridabad"
            }, {
              id: "5",
              name: "Fatehabad"
            }, {
              id: "6",
              name: "Gurgaon"
            }, {
              id: "7",
              name: "Hisar"
            }, {
              id: "8",
              name: "Jhajjar"
            }, {
              id: "9",
              name: "Jind"
            }, {
              id: "10",
              name: "Kaithal"
            }, {
              id: "11",
              name: "Karnal"
            }, {
              id: "12",
              name: "Kurukshetra"
            }, {
              id: "13",
              name: "Mahendragarh"
            }, {
              id: "14",
              name: "Mewat"
            }, {
              id: "15",
              name: "Palwal"
            }, {
              id: "16",
              name: "Panchkula"
            }, {
              id: "17",
              name: "Panipat"
            }, {
              id: "18",
              name: "Rewari"
            }, {
              id: "19",
              name: "Rohtak"
            }, {
              id: "20",
              name: "Sirsa"
            }, {
              id: "21",
              name: "Sonipat"
            }, {
              id: "22",
              name: "Yamunanagar"
            }],
            coordinates: ["76.0856", "29.0588"]
          }, {
            id: "14",
            type: "State",
            capital: "Shimla",
            code: "HP",
            name: "Himachal Pradesh",
            districts: [{
              id: "1",
              name: "Bilaspur"
            }, {
              id: "2",
              name: "Chamba"
            }, {
              id: "3",
              name: "Hamirpur"
            }, {
              id: "4",
              name: "Kangra"
            }, {
              id: "5",
              name: "Kinnaur"
            }, {
              id: "6",
              name: "Kullu"
            }, {
              id: "7",
              name: "Lahaul &amp; Spiti"
            }, {
              id: "8",
              name: "Mandi"
            }, {
              id: "9",
              name: "Shimla"
            }, {
              id: "10",
              name: "Sirmaur (Sirmour)"
            }, {
              id: "11",
              name: "Solan"
            }, {
              id: "12",
              name: "Una"
            }],
            coordinates: ["77.1734", "31.1048"]
          }, {
            id: "15",
            type: "Union Territory",
            capital: "Jammu (Winter), Srinagar (Summer)",
            code: "JK",
            name: "Jammu and Kashmir",
            districts: [{
              id: "1",
              name: "Anantnag"
            }, {
              id: "2",
              name: "Bandipore"
            }, {
              id: "3",
              name: "Baramulla"
            }, {
              id: "4",
              name: "Budgam"
            }, {
              id: "5",
              name: "Doda"
            }, {
              id: "6",
              name: "Ganderbal"
            }, {
              id: "7",
              name: "Jammu"
            }, {
              id: "8",
              name: "Kargil"
            }, {
              id: "9",
              name: "Kathua"
            }, {
              id: "10",
              name: "Kishtwar"
            }, {
              id: "11",
              name: "Kulgam"
            }, {
              id: "12",
              name: "Kupwara"
            }, {
              id: "13",
              name: "Leh"
            }, {
              id: "14",
              name: "Poonch"
            }, {
              id: "15",
              name: "Pulwama"
            }, {
              id: "16",
              name: "Rajouri"
            }, {
              id: "17",
              name: "Ramban"
            }, {
              id: "18",
              name: "Reasi"
            }, {
              id: "19",
              name: "Samba"
            }, {
              id: "20",
              name: "Shopian"
            }, {
              id: "21",
              name: "Srinagar"
            }, {
              id: "22",
              name: "Udhampur"
            }],
            coordinates: ["76.5762", "33.7782"]
          }, {
            id: "16",
            type: "State",
            capital: "Ranchi",
            code: "JH",
            name: "Jharkhand",
            districts: [{
              id: "1",
              name: "Bokaro"
            }, {
              id: "2",
              name: "Chatra"
            }, {
              id: "3",
              name: "Deoghar"
            }, {
              id: "4",
              name: "Dhanbad"
            }, {
              id: "5",
              name: "Dumka"
            }, {
              id: "6",
              name: "East Singhbhum"
            }, {
              id: "7",
              name: "Garhwa"
            }, {
              id: "8",
              name: "Giridih"
            }, {
              id: "9",
              name: "Godda"
            }, {
              id: "10",
              name: "Gumla"
            }, {
              id: "11",
              name: "Hazaribag"
            }, {
              id: "12",
              name: "Jamtara"
            }, {
              id: "13",
              name: "Khunti"
            }, {
              id: "14",
              name: "Koderma"
            }, {
              id: "15",
              name: "Latehar"
            }, {
              id: "16",
              name: "Lohardaga"
            }, {
              id: "17",
              name: "Pakur"
            }, {
              id: "18",
              name: "Palamu"
            }, {
              id: "19",
              name: "Ramgarh"
            }, {
              id: "20",
              name: "Ranchi"
            }, {
              id: "21",
              name: "Sahibganj"
            }, {
              id: "22",
              name: "Seraikela-Kharsawan"
            }, {
              id: "23",
              name: "Simdega"
            }, {
              id: "24",
              name: "West Singhbhum"
            }],
            coordinates: ["85.2799", "23.6102"]
          }, {
            id: "17",
            type: "State",
            capital: "Bengaluru",
            code: "KA",
            name: "Karnataka",
            districts: [{
              id: "1",
              name: "Bagalkot"
            }, {
              id: "2",
              name: "Ballari (Bellary)"
            }, {
              id: "3",
              name: "Belagavi (Belgaum)"
            }, {
              id: "4",
              name: "Bengaluru (Bangalore) Rural"
            }, {
              id: "5",
              name: "Bengaluru (Bangalore) Urban"
            }, {
              id: "6",
              name: "Bidar"
            }, {
              id: "7",
              name: "Chamarajanagar"
            }, {
              id: "8",
              name: "Chikballapur"
            }, {
              id: "9",
              name: "Chikkamagaluru (Chikmagalur)"
            }, {
              id: "10",
              name: "Chitradurga"
            }, {
              id: "11",
              name: "Dakshina Kannada"
            }, {
              id: "12",
              name: "Davangere"
            }, {
              id: "13",
              name: "Dharwad"
            }, {
              id: "14",
              name: "Gadag"
            }, {
              id: "15",
              name: "Hassan"
            }, {
              id: "16",
              name: "Haveri"
            }, {
              id: "17",
              name: "Kalaburagi (Gulbarga)"
            }, {
              id: "18",
              name: "Kodagu"
            }, {
              id: "19",
              name: "Kolar"
            }, {
              id: "20",
              name: "Koppal"
            }, {
              id: "21",
              name: "Mandya"
            }, {
              id: "22",
              name: "Mysuru (Mysore)"
            }, {
              id: "23",
              name: "Raichur"
            }, {
              id: "24",
              name: "Ramanagara"
            }, {
              id: "25",
              name: "Shivamogga (Shimoga)"
            }, {
              id: "26",
              name: "Tumakuru (Tumkur)"
            }, {
              id: "27",
              name: "Udupi"
            }, {
              id: "28",
              name: "Uttara Kannada (Karwar)"
            }, {
              id: "29",
              name: "Vijayapura (Bijapur)"
            }, {
              id: "30",
              name: "Yadgir"
            }],
            coordinates: ["75.7139", "15.3173"]
          }, {
            id: "18",
            type: "State",
            capital: "Thiruvananthapuram",
            code: "KL",
            name: "Kerala",
            districts: [{
              id: "1",
              name: "Alappuzha"
            }, {
              id: "2",
              name: "Ernakulam"
            }, {
              id: "3",
              name: "Idukki"
            }, {
              id: "4",
              name: "Kannur"
            }, {
              id: "5",
              name: "Kasaragod"
            }, {
              id: "6",
              name: "Kollam"
            }, {
              id: "7",
              name: "Kottayam"
            }, {
              id: "8",
              name: "Kozhikode"
            }, {
              id: "9",
              name: "Malappuram"
            }, {
              id: "10",
              name: "Palakkad"
            }, {
              id: "11",
              name: "Pathanamthitta"
            }, {
              id: "12",
              name: "Thiruvananthapuram"
            }, {
              id: "13",
              name: "Thrissur"
            }, {
              id: "14",
              name: "Wayanad"
            }],
            coordinates: ["76.2711", "10.8505"]
          }, {
            id: "19",
            type: "Union Territory",
            capital: "Leh, Kargil",
            code: "LA",
            name: "Ladakh",
            districts: [{
              id: "1",
              name: "Kargil"
            }, {
              id: "2",
              name: "Leh"
            }],
            coordinates: ["77.6151", "34.2095"]
          }, {
            id: "20",
            type: "Union Territory",
            capital: "Kavaratti",
            code: "LD",
            name: "Lakshadweep",
            districts: [{
              id: "1",
              name: "Agatti"
            }, {
              id: "2",
              name: "Amini"
            }, {
              id: "3",
              name: "Androth"
            }, {
              id: "4",
              name: "Bithra"
            }, {
              id: "5",
              name: "Chethlath"
            }, {
              id: "6",
              name: "Kavaratti"
            }, {
              id: "7",
              name: "Kadmath"
            }, {
              id: "8",
              name: "Kalpeni"
            }, {
              id: "9",
              name: "Kilthan"
            }, {
              id: "10",
              name: "Minicoy"
            }],
            coordinates: ["72.1833", "13.7000"]
          }, {
            id: "21",
            type: "State",
            capital: "Bhopal",
            code: "MP",
            name: "Madhya Pradesh",
            districts: [{
              id: "1",
              name: "Agar Malwa"
            }, {
              id: "2",
              name: "Alirajpur"
            }, {
              id: "3",
              name: "Anuppur"
            }, {
              id: "4",
              name: "Ashoknagar"
            }, {
              id: "5",
              name: "Balaghat"
            }, {
              id: "6",
              name: "Barwani"
            }, {
              id: "7",
              name: "Betul"
            }, {
              id: "8",
              name: "Bhind"
            }, {
              id: "9",
              name: "Bhopal"
            }, {
              id: "10",
              name: "Burhanpur"
            }, {
              id: "11",
              name: "Chhatarpur"
            }, {
              id: "12",
              name: "Chhindwara"
            }, {
              id: "13",
              name: "Damoh"
            }, {
              id: "14",
              name: "Datia"
            }, {
              id: "15",
              name: "Dewas"
            }, {
              id: "16",
              name: "Dhar"
            }, {
              id: "17",
              name: "Dindori"
            }, {
              id: "18",
              name: "Guna"
            }, {
              id: "19",
              name: "Gwalior"
            }, {
              id: "20",
              name: "Harda"
            }, {
              id: "21",
              name: "Hoshangabad"
            }, {
              id: "22",
              name: "Indore"
            }, {
              id: "23",
              name: "Jabalpur"
            }, {
              id: "24",
              name: "Jhabua"
            }, {
              id: "25",
              name: "Katni"
            }, {
              id: "26",
              name: "Khandwa"
            }, {
              id: "27",
              name: "Khargone"
            }, {
              id: "28",
              name: "Mandla"
            }, {
              id: "29",
              name: "Mandsaur"
            }, {
              id: "30",
              name: "Morena"
            }, {
              id: "31",
              name: "Narsinghpur"
            }, {
              id: "32",
              name: "Neemuch"
            }, {
              id: "33",
              name: "Panna"
            }, {
              id: "34",
              name: "Raisen"
            }, {
              id: "35",
              name: "Rajgarh"
            }, {
              id: "36",
              name: "Ratlam"
            }, {
              id: "37",
              name: "Rewa"
            }, {
              id: "38",
              name: "Sagar"
            }, {
              id: "39",
              name: "Satna"
            }, {
              id: "40",
              name: "Sehore"
            }, {
              id: "41",
              name: "Seoni"
            }, {
              id: "42",
              name: "Shahdol"
            }, {
              id: "43",
              name: "Shajapur"
            }, {
              id: "44",
              name: "Sheopur"
            }, {
              id: "45",
              name: "Shivpuri"
            }, {
              id: "46",
              name: "Sidhi"
            }, {
              id: "47",
              name: "Singrauli"
            }, {
              id: "48",
              name: "Tikamgarh"
            }, {
              id: "49",
              name: "Ujjain"
            }, {
              id: "50",
              name: "Umaria"
            }, {
              id: "51",
              name: "Vidisha"
            }],
            coordinates: ["78.6569", "22.9734"]
          }, {
            id: "22",
            type: "State",
            capital: "Mumbai",
            code: "MH",
            name: "Maharashtra",
            districts: [{
              id: "1",
              name: "Ahmednagar"
            }, {
              id: "2",
              name: "Akola"
            }, {
              id: "3",
              name: "Amravati"
            }, {
              id: "4",
              name: "Aurangabad"
            }, {
              id: "5",
              name: "Beed"
            }, {
              id: "6",
              name: "Bhandara"
            }, {
              id: "7",
              name: "Buldhana"
            }, {
              id: "8",
              name: "Chandrapur"
            }, {
              id: "9",
              name: "Dhule"
            }, {
              id: "10",
              name: "Gadchiroli"
            }, {
              id: "11",
              name: "Gondia"
            }, {
              id: "12",
              name: "Hingoli"
            }, {
              id: "13",
              name: "Jalgaon"
            }, {
              id: "14",
              name: "Jalna"
            }, {
              id: "15",
              name: "Kolhapur"
            }, {
              id: "16",
              name: "Latur"
            }, {
              id: "17",
              name: "Mumbai City"
            }, {
              id: "18",
              name: "Mumbai Suburban"
            }, {
              id: "19",
              name: "Nagpur"
            }, {
              id: "20",
              name: "Nanded"
            }, {
              id: "21",
              name: "Nandurbar"
            }, {
              id: "22",
              name: "Nashik"
            }, {
              id: "23",
              name: "Osmanabad"
            }, {
              id: "24",
              name: "Palghar"
            }, {
              id: "25",
              name: "Parbhani"
            }, {
              id: "26",
              name: "Pune"
            }, {
              id: "27",
              name: "Raigad"
            }, {
              id: "28",
              name: "Ratnagiri"
            }, {
              id: "29",
              name: "Sangli"
            }, {
              id: "30",
              name: "Satara"
            }, {
              id: "31",
              name: "Sindhudurg"
            }, {
              id: "32",
              name: "Solapur"
            }, {
              id: "33",
              name: "Thane"
            }, {
              id: "34",
              name: "Wardha"
            }, {
              id: "35",
              name: "Washim"
            }, {
              id: "36",
              name: "Yavatmal"
            }],
            coordinates: ["75.7139", "19.7515"]
          }, {
            id: "23",
            type: "State",
            capital: "Imphal",
            code: "MN",
            name: "Manipur",
            districts: [{
              id: "1",
              name: "Bishnupur"
            }, {
              id: "2",
              name: "Chandel"
            }, {
              id: "3",
              name: "Churachandpur"
            }, {
              id: "4",
              name: "Imphal East"
            }, {
              id: "5",
              name: "Imphal West"
            }, {
              id: "6",
              name: "Jiribam"
            }, {
              id: "7",
              name: "Kakching"
            }, {
              id: "8",
              name: "Kamjong"
            }, {
              id: "9",
              name: "Kangpokpi"
            }, {
              id: "10",
              name: "Noney"
            }, {
              id: "11",
              name: "Pherzawl"
            }, {
              id: "12",
              name: "Senapati"
            }, {
              id: "13",
              name: "Tamenglong"
            }, {
              id: "14",
              name: "Tengnoupal"
            }, {
              id: "15",
              name: "Thoubal"
            }, {
              id: "16",
              name: "Ukhrul"
            }],
            coordinates: ["93.9063", "24.6637"]
          }, {
            id: "24",
            type: "State",
            capital: "Shillong",
            code: "ML",
            name: "Meghalaya",
            districts: [{
              id: "1",
              name: "East Garo Hills"
            }, {
              id: "2",
              name: "East Jaintia Hills"
            }, {
              id: "3",
              name: "East Khasi Hills"
            }, {
              id: "4",
              name: "North Garo Hills"
            }, {
              id: "5",
              name: "Ri Bhoi"
            }, {
              id: "6",
              name: "South Garo Hills"
            }, {
              id: "7",
              name: "South West Garo Hills "
            }, {
              id: "8",
              name: "South West Khasi Hills"
            }, {
              id: "9",
              name: "West Garo Hills"
            }, {
              id: "10",
              name: "West Jaintia Hills"
            }, {
              id: "11",
              name: "West Khasi Hills"
            }],
            coordinates: ["91.3662", "25.4670"]
          }, {
            id: "25",
            type: "State",
            capital: "Aizawl",
            code: "MZ",
            name: "Mizoram",
            districts: [{
              id: "1",
              name: "Aizawl"
            }, {
              id: "2",
              name: "Champhai"
            }, {
              id: "3",
              name: "Kolasib"
            }, {
              id: "4",
              name: "Lawngtlai"
            }, {
              id: "5",
              name: "Lunglei"
            }, {
              id: "6",
              name: "Mamit"
            }, {
              id: "7",
              name: "Saiha"
            }, {
              id: "8",
              name: "Serchhip"
            }],
            coordinates: ["92.9376", "23.1645"]
          }, {
            id: "26",
            type: "State",
            capital: "Kohima",
            code: "NL",
            name: "Nagaland",
            districts: [{
              id: "1",
              name: "Dimapur"
            }, {
              id: "2",
              name: "Kiphire"
            }, {
              id: "3",
              name: "Kohima"
            }, {
              id: "4",
              name: "Longleng"
            }, {
              id: "5",
              name: "Mokokchung"
            }, {
              id: "6",
              name: "Mon"
            }, {
              id: "7",
              name: "Peren"
            }, {
              id: "8",
              name: "Phek"
            }, {
              id: "9",
              name: "Tuensang"
            }, {
              id: "10",
              name: "Wokha"
            }, {
              id: "11",
              name: "Zunheboto"
            }],
            coordinates: ["94.5624", "26.1584"]
          }, {
            id: "27",
            type: "State",
            capital: "Bhubaneswar",
            code: "OR",
            name: "Odisha",
            districts: [{
              id: "1",
              name: "Angul"
            }, {
              id: "2",
              name: "Balangir"
            }, {
              id: "3",
              name: "Balasore"
            }, {
              id: "4",
              name: "Bargarh"
            }, {
              id: "5",
              name: "Bhadrak"
            }, {
              id: "6",
              name: "Boudh"
            }, {
              id: "7",
              name: "Cuttack"
            }, {
              id: "8",
              name: "Deogarh"
            }, {
              id: "9",
              name: "Dhenkanal"
            }, {
              id: "10",
              name: "Gajapati"
            }, {
              id: "11",
              name: "Ganjam"
            }, {
              id: "12",
              name: "Jagatsinghapur"
            }, {
              id: "13",
              name: "Jajpur"
            }, {
              id: "14",
              name: "Jharsuguda"
            }, {
              id: "15",
              name: "Kalahandi"
            }, {
              id: "16",
              name: "Kandhamal"
            }, {
              id: "17",
              name: "Kendrapara"
            }, {
              id: "18",
              name: "Kendujhar (Keonjhar)"
            }, {
              id: "19",
              name: "Khordha"
            }, {
              id: "20",
              name: "Koraput"
            }, {
              id: "21",
              name: "Malkangiri"
            }, {
              id: "22",
              name: "Mayurbhanj"
            }, {
              id: "23",
              name: "Nabarangpur"
            }, {
              id: "24",
              name: "Nayagarh"
            }, {
              id: "25",
              name: "Nuapada"
            }, {
              id: "26",
              name: "Puri"
            }, {
              id: "27",
              name: "Rayagada"
            }, {
              id: "28",
              name: "Sambalpur"
            }, {
              id: "29",
              name: "Sonepur"
            }, {
              id: "30",
              name: "Sundargarh"
            }],
            coordinates: ["85.0985", "20.9517"]
          }, {
            id: "28",
            type: "Union Territory",
            capital: "Puducherry",
            code: "PY",
            name: "Puducherry",
            districts: [{
              id: "1",
              name: "Karaikal"
            }, {
              id: "2",
              name: "Mahe"
            }, {
              id: "3",
              name: "Pondicherry"
            }, {
              id: "4",
              name: "Yanam"
            }],
            coordinates: ["79.8083", "11.9416"]
          }, {
            id: "29",
            type: "State",
            capital: "Chandigarh",
            code: "PB",
            name: "Punjab",
            districts: [{
              id: "1",
              name: "Amritsar"
            }, {
              id: "2",
              name: "Barnala"
            }, {
              id: "3",
              name: "Bathinda"
            }, {
              id: "4",
              name: "Faridkot"
            }, {
              id: "5",
              name: "Fatehgarh Sahib"
            }, {
              id: "6",
              name: "Fazilka"
            }, {
              id: "7",
              name: "Ferozepur"
            }, {
              id: "8",
              name: "Gurdaspur"
            }, {
              id: "9",
              name: "Hoshiarpur"
            }, {
              id: "10",
              name: "Jalandhar"
            }, {
              id: "11",
              name: "Kapurthala"
            }, {
              id: "12",
              name: "Ludhiana"
            }, {
              id: "13",
              name: "Mansa"
            }, {
              id: "14",
              name: "Moga"
            }, {
              id: "15",
              name: "Muktsar"
            }, {
              id: "16",
              name: "Nawanshahr (Shahid Bhagat Singh Nagar)"
            }, {
              id: "17",
              name: "Pathankot"
            }, {
              id: "18",
              name: "Patiala"
            }, {
              id: "19",
              name: "Rupnagar"
            }, {
              id: "20",
              name: "Sahibzada Ajit Singh Nagar (Mohali)"
            }, {
              id: "21",
              name: "Sangrur"
            }, {
              id: "22",
              name: "Tarn Taran"
            }],
            coordinates: ["75.3412", "31.1471"]
          }, {
            id: "30",
            type: "State",
            capital: "Jaipur",
            code: "RJ",
            name: "Rajasthan",
            districts: [{
              id: "1",
              name: "Ajmer"
            }, {
              id: "2",
              name: "Alwar"
            }, {
              id: "3",
              name: "Banswara"
            }, {
              id: "4",
              name: "Baran"
            }, {
              id: "5",
              name: "Barmer"
            }, {
              id: "6",
              name: "Bharatpur"
            }, {
              id: "7",
              name: "Bhilwara"
            }, {
              id: "8",
              name: "Bikaner"
            }, {
              id: "9",
              name: "Bundi"
            }, {
              id: "10",
              name: "Chittorgarh"
            }, {
              id: "11",
              name: "Churu"
            }, {
              id: "12",
              name: "Dausa"
            }, {
              id: "13",
              name: "Dholpur"
            }, {
              id: "14",
              name: "Dungarpur"
            }, {
              id: "15",
              name: "Hanumangarh"
            }, {
              id: "16",
              name: "Jaipur"
            }, {
              id: "17",
              name: "Jaisalmer"
            }, {
              id: "18",
              name: "Jalore"
            }, {
              id: "19",
              name: "Jhalawar"
            }, {
              id: "20",
              name: "Jhunjhunu"
            }, {
              id: "21",
              name: "Jodhpur"
            }, {
              id: "22",
              name: "Karauli"
            }, {
              id: "23",
              name: "Kota"
            }, {
              id: "24",
              name: "Nagaur"
            }, {
              id: "25",
              name: "Pali"
            }, {
              id: "26",
              name: "Pratapgarh"
            }, {
              id: "27",
              name: "Rajsamand"
            }, {
              id: "28",
              name: "Sawai Madhopur"
            }, {
              id: "29",
              name: "Sikar"
            }, {
              id: "30",
              name: "Sirohi"
            }, {
              id: "31",
              name: "Sri Ganganagar"
            }, {
              id: "32",
              name: "Tonk"
            }, {
              id: "33",
              name: "Udaipur"
            }],
            coordinates: ["74.2179", "27.0238"]
          }, {
            id: "31",
            type: "State",
            capital: "Gangtok",
            code: "SK",
            name: "Sikkim",
            districts: [{
              id: "1",
              name: "East Sikkim"
            }, {
              id: "2",
              name: "North Sikkim"
            }, {
              id: "3",
              name: "South Sikkim"
            }, {
              id: "4",
              name: "West Sikkim"
            }],
            coordinates: ["88.5122", "27.5330"]
          }, {
            id: "32",
            type: "State",
            capital: "Chennai",
            code: "TN",
            name: "Tamil Nadu",
            districts: [{
              id: "1",
              name: "Ariyalur"
            }, {
              id: "2",
              name: "Chennai"
            }, {
              id: "3",
              name: "Coimbatore"
            }, {
              id: "4",
              name: "Cuddalore"
            }, {
              id: "5",
              name: "Dharmapuri"
            }, {
              id: "6",
              name: "Dindigul"
            }, {
              id: "7",
              name: "Erode"
            }, {
              id: "8",
              name: "Kanchipuram"
            }, {
              id: "9",
              name: "Kanyakumari"
            }, {
              id: "10",
              name: "Karur"
            }, {
              id: "11",
              name: "Krishnagiri"
            }, {
              id: "12",
              name: "Madurai"
            }, {
              id: "13",
              name: "Nagapattinam"
            }, {
              id: "14",
              name: "Namakkal"
            }, {
              id: "15",
              name: "Nilgiris"
            }, {
              id: "16",
              name: "Perambalur"
            }, {
              id: "17",
              name: "Pudukkottai"
            }, {
              id: "18",
              name: "Ramanathapuram"
            }, {
              id: "19",
              name: "Salem"
            }, {
              id: "20",
              name: "Sivaganga"
            }, {
              id: "21",
              name: "Thanjavur"
            }, {
              id: "22",
              name: "Theni"
            }, {
              id: "23",
              name: "Thoothukudi (Tuticorin)"
            }, {
              id: "24",
              name: "Tiruchirappalli"
            }, {
              id: "25",
              name: "Tirunelveli"
            }, {
              id: "26",
              name: "Tiruppur"
            }, {
              id: "27",
              name: "Tiruvallur"
            }, {
              id: "28",
              name: "Tiruvannamalai"
            }, {
              id: "29",
              name: "Tiruvarur"
            }, {
              id: "30",
              name: "Vellore"
            }, {
              id: "31",
              name: "Viluppuram"
            }, {
              id: "32",
              name: "Virudhunagar"
            }],
            coordinates: ["78.6569", "11.1271"]
          }, {
            id: "33",
            type: "State",
            capital: "Hyderabad",
            code: "TS",
            name: "Telangana",
            districts: [{
              id: "1",
              name: "Adilabad"
            }, {
              id: "2",
              name: "Bhadradri Kothagudem"
            }, {
              id: "3",
              name: "Hyderabad"
            }, {
              id: "4",
              name: "Jagtial"
            }, {
              id: "5",
              name: "Jangaon"
            }, {
              id: "6",
              name: "Jayashankar Bhoopalpally"
            }, {
              id: "7",
              name: "Jogulamba Gadwal"
            }, {
              id: "8",
              name: "Kamareddy"
            }, {
              id: "9",
              name: "Karimnagar"
            }, {
              id: "10",
              name: "Khammam"
            }, {
              id: "11",
              name: "Komaram Bheem Asifabad"
            }, {
              id: "12",
              name: "Mahabubabad"
            }, {
              id: "13",
              name: "Mahabubnagar"
            }, {
              id: "14",
              name: "Mancherial"
            }, {
              id: "15",
              name: "Medak"
            }, {
              id: "16",
              name: "Medchal"
            }, {
              id: "17",
              name: "Nagarkurnool"
            }, {
              id: "18",
              name: "Nalgonda"
            }, {
              id: "19",
              name: "Nirmal"
            }, {
              id: "20",
              name: "Nizamabad"
            }, {
              id: "21",
              name: "Peddapalli"
            }, {
              id: "22",
              name: "Rajanna Sircilla"
            }, {
              id: "23",
              name: "Rangareddy"
            }, {
              id: "24",
              name: "Sangareddy"
            }, {
              id: "25",
              name: "Siddipet"
            }, {
              id: "26",
              name: "Suryapet"
            }, {
              id: "27",
              name: "Vikarabad"
            }, {
              id: "28",
              name: "Wanaparthy"
            }, {
              id: "29",
              name: "Warangal (Rural)"
            }, {
              id: "30",
              name: "Warangal (Urban)"
            }, {
              id: "31",
              name: "Yadadri Bhuvanagiri"
            }],
            coordinates: ["79.0193", "18.1124"]
          }, {
            id: "34",
            type: "State",
            capital: "Agartala",
            code: "TR",
            name: "Tripura",
            districts: [{
              id: "1",
              name: "Dhalai"
            }, {
              id: "2",
              name: "Gomati"
            }, {
              id: "3",
              name: "Khowai"
            }, {
              id: "4",
              name: "North Tripura"
            }, {
              id: "5",
              name: "Sepahijala"
            }, {
              id: "6",
              name: "South Tripura"
            }, {
              id: "7",
              name: "Unakoti"
            }, {
              id: "8",
              name: "West Tripura"
            }],
            coordinates: ["91.9882", "23.9408"]
          }, {
            id: "35",
            type: "State",
            capital: "Lucknow",
            code: "UP",
            name: "Uttar Pradesh",
            districts: [{
              id: "1",
              name: "Agra"
            }, {
              id: "2",
              name: "Aligarh"
            }, {
              id: "3",
              name: "Allahabad"
            }, {
              id: "4",
              name: "Ambedkar Nagar"
            }, {
              id: "5",
              name: "Amethi (Chatrapati Sahuji Mahraj Nagar)"
            }, {
              id: "6",
              name: "Amroha (J.P. Nagar)"
            }, {
              id: "7",
              name: "Auraiya"
            }, {
              id: "8",
              name: "Azamgarh"
            }, {
              id: "9",
              name: "Baghpat"
            }, {
              id: "10",
              name: "Bahraich"
            }, {
              id: "11",
              name: "Ballia"
            }, {
              id: "12",
              name: "Balrampur"
            }, {
              id: "13",
              name: "Banda"
            }, {
              id: "14",
              name: "Barabanki"
            }, {
              id: "15",
              name: "Bareilly"
            }, {
              id: "16",
              name: "Basti"
            }, {
              id: "17",
              name: "Bhadohi"
            }, {
              id: "18",
              name: "Bijnor"
            }, {
              id: "19",
              name: "Budaun"
            }, {
              id: "20",
              name: "Bulandshahr"
            }, {
              id: "21",
              name: "Chandauli"
            }, {
              id: "22",
              name: "Chitrakoot"
            }, {
              id: "23",
              name: "Deoria"
            }, {
              id: "24",
              name: "Etah"
            }, {
              id: "25",
              name: "Etawah"
            }, {
              id: "26",
              name: "Faizabad"
            }, {
              id: "27",
              name: "Farrukhabad"
            }, {
              id: "28",
              name: "Fatehpur"
            }, {
              id: "29",
              name: "Firozabad"
            }, {
              id: "30",
              name: "Gautam Buddha Nagar"
            }, {
              id: "31",
              name: "Ghaziabad"
            }, {
              id: "32",
              name: "Ghazipur"
            }, {
              id: "33",
              name: "Gonda"
            }, {
              id: "34",
              name: "Gorakhpur"
            }, {
              id: "35",
              name: "Hamirpur"
            }, {
              id: "36",
              name: "Hapur (Panchsheel Nagar)"
            }, {
              id: "37",
              name: "Hardoi"
            }, {
              id: "38",
              name: "Hathras"
            }, {
              id: "39",
              name: "Jalaun"
            }, {
              id: "40",
              name: "Jaunpur"
            }, {
              id: "41",
              name: "Jhansi"
            }, {
              id: "42",
              name: "Kannauj"
            }, {
              id: "43",
              name: "Kanpur Dehat"
            }, {
              id: "44",
              name: "Kanpur Nagar"
            }, {
              id: "45",
              name: "Kanshiram Nagar (Kasganj)"
            }, {
              id: "46",
              name: "Kaushambi"
            }, {
              id: "47",
              name: "Kushinagar (Padrauna)"
            }, {
              id: "48",
              name: "Lakhimpur - Kheri"
            }, {
              id: "49",
              name: "Lalitpur"
            }, {
              id: "50",
              name: "Lucknow"
            }, {
              id: "51",
              name: "Maharajganj"
            }, {
              id: "52",
              name: "Mahoba"
            }, {
              id: "53",
              name: "Mainpuri"
            }, {
              id: "54",
              name: "Mathura"
            }, {
              id: "55",
              name: "Mau"
            }, {
              id: "56",
              name: "Meerut"
            }, {
              id: "57",
              name: "Mirzapur"
            }, {
              id: "58",
              name: "Moradabad"
            }, {
              id: "59",
              name: "Muzaffarnagar"
            }, {
              id: "60",
              name: "Pilibhit"
            }, {
              id: "61",
              name: "Pratapgarh"
            }, {
              id: "62",
              name: "RaeBareli"
            }, {
              id: "63",
              name: "Rampur"
            }, {
              id: "64",
              name: "Saharanpur"
            }, {
              id: "65",
              name: "Sambhal (Bhim Nagar)"
            }, {
              id: "66",
              name: "Sant Kabir Nagar"
            }, {
              id: "67",
              name: "Shahjahanpur"
            }, {
              id: "68",
              name: "Shamali (Prabuddh Nagar)"
            }, {
              id: "69",
              name: "Shravasti"
            }, {
              id: "70",
              name: "Siddharth Nagar"
            }, {
              id: "71",
              name: "Sitapur"
            }, {
              id: "72",
              name: "Sonbhadra"
            }, {
              id: "73",
              name: "Sultanpur"
            }, {
              id: "74",
              name: "Unnao"
            }, {
              id: "75",
              name: "Varanasi"
            }],
            coordinates: ["80.9462", "26.8467"]
          }, {
            id: "36",
            type: "State",
            capital: "Dehradun",
            code: "UK",
            name: "Uttarakhand",
            districts: [{
              id: "1",
              name: "Almora"
            }, {
              id: "2",
              name: "Bageshwar"
            }, {
              id: "3",
              name: "Chamoli"
            }, {
              id: "4",
              name: "Champawat"
            }, {
              id: "5",
              name: "Dehradun"
            }, {
              id: "6",
              name: "Haridwar"
            }, {
              id: "7",
              name: "Nainital"
            }, {
              id: "8",
              name: "Pauri Garhwal"
            }, {
              id: "9",
              name: "Pithoragarh"
            }, {
              id: "10",
              name: "Rudraprayag"
            }, {
              id: "11",
              name: "Tehri Garhwal"
            }, {
              id: "12",
              name: "Udham Singh Nagar"
            }, {
              id: "13",
              name: "Uttarkashi"
            }],
            coordinates: ["78.0322", "30.3165"]
          }, {
            id: "37",
            type: "State",
            capital: "Kolkata",
            code: "WB",
            name: "West Bengal",
            districts: [{
              id: "1",
              name: "Alipurduar"
            }, {
              id: "2",
              name: "Bankura"
            }, {
              id: "3",
              name: "Birbhum"
            }, {
              id: "4",
              name: "Burdwan (Bardhaman)"
            }, {
              id: "5",
              name: "Cooch Behar"
            }, {
              id: "6",
              name: "Dakshin Dinajpur (South Dinajpur)"
            }, {
              id: "7",
              name: "Darjeeling"
            }, {
              id: "8",
              name: "Hooghly"
            }, {
              id: "9",
              name: "Howrah"
            }, {
              id: "10",
              name: "Jalpaiguri"
            }, {
              id: "11",
              name: "Kalimpong"
            }, {
              id: "12",
              name: "Kolkata"
            }, {
              id: "13",
              name: "Malda"
            }, {
              id: "14",
              name: "Murshidabad"
            }, {
              id: "15",
              name: "Nadia"
            }, {
              id: "16",
              name: "North 24 Parganas"
            }, {
              id: "17",
              name: "Paschim Medinipur (West Medinipur)"
            }, {
              id: "18",
              name: "Purba Medinipur (East Medinipur)"
            }, {
              id: "19",
              name: "Purulia"
            }, {
              id: "20",
              name: "South 24 Parganas"
            }, {
              id: "21",
              name: "Uttar Dinajpur (North Dinajpur)"
            }],
            coordinates: ["87.8550", "22.9868"]
          }];
        }
      }]);

      return StateDistService;
    }();

    StateDistService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], StateDistService);
    /***/
  },

  /***/
  "./src/app/services/assign-slot.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/assign-slot.service.ts ***!
    \*************************************************/

  /*! exports provided: AssignSlotService */

  /***/
  function srcAppServicesAssignSlotServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssignSlotService", function () {
      return AssignSlotService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "slotDetails";

    var AssignSlotService = /*#__PURE__*/function () {
      function AssignSlotService(http) {
        _classCallCheck(this, AssignSlotService);

        this.http = http;
      }

      _createClass(AssignSlotService, [{
        key: "assignSlot",
        value: function assignSlot(assignDetails) {
          return this.http.put(BACKEND_URL, assignDetails);
        }
      }]);

      return AssignSlotService;
    }();

    AssignSlotService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    AssignSlotService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], AssignSlotService);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "auth/login";

    var AuthService = /*#__PURE__*/function () {
      function AuthService(_snackBar, http, router) {
        _classCallCheck(this, AuthService);

        this._snackBar = _snackBar;
        this.http = http;
        this.router = router;
        this.isAuthenticated = false;
        this.token = "";
        this.authListner = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(AuthService, [{
        key: "getIsAuth",
        value: function getIsAuth() {
          return this.isAuthenticated;
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return this.token;
        }
      }, {
        key: "getAutoAuth",
        value: function getAutoAuth() {
          return this.authListner.asObservable();
        }
      }, {
        key: "onLogin",
        value: function onLogin(loginCreds) {
          var _this25 = this;

          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              "Content-Type": "application/json"
            }),
            observe: "response"
          };
          this.http.post(BACKEND_URL, loginCreds).subscribe(function (isValid) {
            if (isValid.token) {
              _this25.token = isValid.token;
              var expiresInDuration = isValid.expiresIn;
              _this25.isAuthenticated = true;
              var now = new Date();
              var expiresInDate = new Date(now.getTime() + expiresInDuration * 1000);

              _this25.setAuthTimer(expiresInDuration);

              _this25.authListner.next(true);

              _this25.saveAuth(isValid.token, expiresInDate);

              _this25.router.navigateByUrl("/");
            } else console.log(isValid);
          });
        }
      }, {
        key: "autoAuthAdmin",
        value: function autoAuthAdmin() {
          var authInfo = this.getAuthData();
          if (!authInfo) return;
          var now = new Date();
          var expiresIn = authInfo.expirationDate.getTime() - now.getTime();

          if (expiresIn > 0) {
            this.isAuthenticated = true;
            this.setAuthTimer(expiresIn / 1000);
            this.authListner.next(true);
            this.token = authInfo.token;
          } else {
            this.logout();
          }
        }
      }, {
        key: "getAuthData",
        value: function getAuthData() {
          var token = localStorage.getItem("token");
          var expiration = localStorage.getItem("expiration");
          if (!token || !expiration) return;
          return {
            token: token,
            expirationDate: new Date(expiration)
          };
        }
      }, {
        key: "setAuthTimer",
        value: function setAuthTimer(expiresInDuration) {
          var _this26 = this;

          this.tokenTimer = setTimeout(function () {
            _this26.logout();
          }, expiresInDuration * 1000);
        }
      }, {
        key: "saveAuth",
        value: function saveAuth(token, expirationDate) {
          localStorage.setItem("token", token);
          localStorage.setItem("expiration", expirationDate.toISOString());
        }
      }, {
        key: "logout",
        value: function logout() {
          this.clearAuth();
          this.isAuthenticated = false;
          this.authListner.next(false);
          this.token = '';
          this.tokenTimer = null;
          this.router.navigate(["/login"]);
        }
      }, {
        key: "clearAuth",
        value: function clearAuth() {
          localStorage.removeItem("token");
          localStorage.removeItem("expiration");
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])({
      providedIn: "root"
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/services/comment.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/comment.service.ts ***!
    \*********************************************/

  /*! exports provided: CommentService */

  /***/
  function srcAppServicesCommentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentService", function () {
      return CommentService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "comments";

    var CommentService = /*#__PURE__*/function () {
      function CommentService(http, _snackbar, authService) {
        _classCallCheck(this, CommentService);

        this.http = http;
        this._snackbar = _snackbar;
        this.authService = authService;
        this.studId = null;
        this.commentsListener = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(CommentService, [{
        key: "getComments",
        value: function getComments() {
          var _this27 = this;

          this.authService.getAutoAuth().subscribe(function (isAdmin) {
            _this27.isAdmin = isAdmin;
          });
          this.isAdmin = this.authService.getIsAuth();
          this.studId = localStorage.getItem("studId");
          if (!this.studId) this.studId = null;
          this.http.get(BACKEND_URL, {
            params: {
              isValid: this.isAdmin,
              studId: this.studId
            }
          }).subscribe(function (comments) {
            _this27.commentsListener.next(comments.comments);
          });
        }
      }, {
        key: "getUpdatedComments",
        value: function getUpdatedComments() {
          return this.commentsListener.asObservable();
        }
      }, {
        key: "deleteComment",
        value: function deleteComment(commentId) {
          var _this28 = this;

          this.http["delete"](BACKEND_URL + "/" + commentId).subscribe(function (isDeleted) {
            _this28.openSnack(isDeleted.msg);

            _this28.getComments();
          });
        }
      }, {
        key: "toggleComment",
        value: function toggleComment(commentId, isValid) {
          var _this29 = this;

          this.http.put(BACKEND_URL, {
            id: commentId,
            isValid: isValid
          }).subscribe(function (isToggeled) {
            _this29.getComments();

            _this29.openSnack(true ? "approved" : undefined);
          });
        }
      }, {
        key: "createComment",
        value: function createComment(commentDetails) {
          var _this30 = this;

          this.http.post(BACKEND_URL, commentDetails).subscribe(function (isAdded) {
            _this30.openSnack(isAdded.msg);

            _this30.getComments();
          });
        }
      }, {
        key: "openSnack",
        value: function openSnack(msg) {
          this._snackbar.open(msg, "Okay", {
            duration: 2000,
            verticalPosition: "top",
            horizontalPosition: "center"
          });
        }
      }]);

      return CommentService;
    }();

    CommentService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }];
    };

    CommentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
      providedIn: 'root'
    })], CommentService);
    /***/
  },

  /***/
  "./src/app/services/facility.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/facility.service.ts ***!
    \**********************************************/

  /*! exports provided: FacilityService */

  /***/
  function srcAppServicesFacilityServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilityService", function () {
      return FacilityService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "facilities";

    var FacilityService = /*#__PURE__*/function () {
      function FacilityService(http) {
        _classCallCheck(this, FacilityService);

        this.http = http;
        this.facilitiesSubjectListener = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(FacilityService, [{
        key: "getFacilities",
        value: function getFacilities() {
          var _this31 = this;

          this.http.get(BACKEND_URL).subscribe(function (result) {
            _this31.facilitiesSubjectListener.next({
              faclities: result
            });
          });
        }
      }, {
        key: "deleteFacility",
        value: function deleteFacility(facId) {
          return this.http["delete"](BACKEND_URL, {
            params: {
              facId: facId
            }
          });
        }
      }, {
        key: "getFacilitiesSubject",
        value: function getFacilitiesSubject() {
          return this.facilitiesSubjectListener.asObservable();
        }
      }, {
        key: "addFacilities",
        value: function addFacilities(facData) {
          var formData = this.getFormData(facData);
          return this.http.post(BACKEND_URL, formData);
        }
      }, {
        key: "updateFacility",
        value: function updateFacility(facData, facId, oldImgPath) {
          var arrfileName = oldImgPath.split("images/");
          var formData = this.getFormData(facData);
          formData.append("_id", facId);
          formData.append("oldImgPath", arrfileName[1]);
          this.http.put(BACKEND_URL, formData).subscribe(function (res) {
            console.log(res);
          });
        }
      }, {
        key: "getFormData",
        value: function getFormData(facData) {
          var formData = new FormData();
          formData.append("centerId", facData.centerId);
          formData.append("title", facData.title);
          formData.append("image", facData.image, facData.title);
          formData.append("subtitle", facData.subtitle);
          formData.append("description", facData.description);
          return formData;
        }
      }]);

      return FacilityService;
    }();

    FacilityService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    FacilityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: "root"
    })], FacilityService);
    /***/
  },

  /***/
  "./src/app/services/slot-detail.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/slot-detail.service.ts ***!
    \*************************************************/

  /*! exports provided: SlotDetailService */

  /***/
  function srcAppServicesSlotDetailServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlotDetailService", function () {
      return SlotDetailService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _snack_popup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./snack-popup.service */
    "./src/app/services/snack-popup.service.ts");

    var BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "slotDetails";

    var SlotDetailService = /*#__PURE__*/function () {
      function SlotDetailService(http, snack) {
        _classCallCheck(this, SlotDetailService);

        this.http = http;
        this.snack = snack;
        this.allSlotListener = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(SlotDetailService, [{
        key: "addBookingDetails",
        value: function addBookingDetails(slotDetails) {
          return this.http.put(BACKEND_URL, slotDetails);
        }
      }, {
        key: "deleteSlot",
        value: function deleteSlot(slotId) {
          var _this32 = this;

          this.http["delete"](BACKEND_URL + "/" + slotId).subscribe(function (result) {
            _this32.getAllSlotDetails();

            _this32.snack.openSnack(result.msg);
          });
        }
      }, {
        key: "getAllSlotDetails",
        value: function getAllSlotDetails() {
          var _this33 = this;

          this.http.get(BACKEND_URL).subscribe(function (result) {
            _this33.allSlotListener.next(result);
          }, function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "getAllSlotList",
        value: function getAllSlotList() {
          return this.allSlotListener.asObservable();
        }
      }, {
        key: "getStudSlot",
        value: function getStudSlot(studId) {
          return this.http.get(BACKEND_URL + "/" + studId);
        }
      }, {
        key: "getUnAssigned",
        value: function getUnAssigned() {
          return this.http.get(BACKEND_URL + "/filter");
        }
      }, {
        key: "addExtraSlot",
        value: function addExtraSlot(slotId) {
          var _this34 = this;

          this.http.post(BACKEND_URL + "/newSlot", {
            slotId: slotId
          }).subscribe(function (res) {
            _this34.getAllSlotDetails();
          });
        }
      }]);

      return SlotDetailService;
    }();

    SlotDetailService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _snack_popup_service__WEBPACK_IMPORTED_MODULE_5__["SanckBar"]
      }];
    };

    SlotDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], SlotDetailService);
    /***/
  },

  /***/
  "./src/app/services/slots.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/slots.service.ts ***!
    \*******************************************/

  /*! exports provided: SlotsService */

  /***/
  function srcAppServicesSlotsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlotsService", function () {
      return SlotsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "slots";

    var SlotsService = /*#__PURE__*/function () {
      function SlotsService(http) {
        _classCallCheck(this, SlotsService);

        this.http = http;
      }

      _createClass(SlotsService, [{
        key: "addToSlots",
        value: function addToSlots(totalSlots) {
          return this.http.post(BACKEND_URL, totalSlots);
        }
      }, {
        key: "getTotalSlots",
        value: function getTotalSlots() {
          return this.http.get(BACKEND_URL);
        }
      }, {
        key: "updateToSlots",
        value: function updateToSlots(totalSlots) {
          return this.http.put(BACKEND_URL, totalSlots);
        }
      }, {
        key: "deleteToSlots",
        value: function deleteToSlots(slotInfo) {
          return this.http["delete"](BACKEND_URL, slotInfo);
        }
      }]);

      return SlotsService;
    }();

    SlotsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    SlotsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], SlotsService);
    /***/
  },

  /***/
  "./src/app/services/snack-popup.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/snack-popup.service.ts ***!
    \*************************************************/

  /*! exports provided: SanckBar */

  /***/
  function srcAppServicesSnackPopupServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SanckBar", function () {
      return SanckBar;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var SanckBar = /*#__PURE__*/function () {
      function SanckBar(snackBar) {
        _classCallCheck(this, SanckBar);

        this.snackBar = snackBar;
      }

      _createClass(SanckBar, [{
        key: "openSnack",
        value: function openSnack(msg) {
          this.snackBar.open(msg, "", {
            duration: 2000,
            verticalPosition: "top",
            horizontalPosition: "center"
          });
        }
      }]);

      return SanckBar;
    }();

    SanckBar.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }];
    };

    SanckBar = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], SanckBar);
    /***/
  },

  /***/
  "./src/app/services/stud-auth.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/stud-auth.service.ts ***!
    \***********************************************/

  /*! exports provided: StudAuthService */

  /***/
  function srcAppServicesStudAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudAuthService", function () {
      return StudAuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "student";

    var StudAuthService = /*#__PURE__*/function () {
      function StudAuthService(http, _snackBar, router) {
        _classCallCheck(this, StudAuthService);

        this.http = http;
        this._snackBar = _snackBar;
        this.router = router;
        this.isStudAuthListner = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.token = '';
        this.tokenTimer = '';
        this.studId = '';
        this.isStudAuthed = false;
      }

      _createClass(StudAuthService, [{
        key: "isStudAuthenticated",
        value: function isStudAuthenticated() {
          return this.isStudAuthed;
        }
      }, {
        key: "getStudId",
        value: function getStudId() {
          return this.studId;
        }
      }, {
        key: "studToken",
        value: function studToken() {
          return this.token;
        }
      }, {
        key: "isStudAuthUpdated",
        value: function isStudAuthUpdated() {
          return this.isStudAuthListner.asObservable();
        }
      }, {
        key: "onLogin",
        value: function onLogin(loginCreds) {
          var _this35 = this;

          this.http.post(BACKEND_URL + "/auth", loginCreds).subscribe(function (isValid) {
            if (isValid.token) {
              _this35.studId = isValid.id;
              _this35.token = isValid.token;
              _this35.isStudAuthed = true;

              _this35.isStudAuthListner.next(true);

              var now = new Date();
              var expiresInDate = new Date(now.getTime() + isValid.expiresIn * 1000);

              _this35.setTimer(isValid.expiresIn);

              _this35.saveStudData(isValid.token, expiresInDate);

              _this35.router.navigateByUrl("/");
            } else {
              _this35.openSnack();
            }
          });
        }
      }, {
        key: "autoAuthStud",
        value: function autoAuthStud() {
          var studData = this.getStudAuthData();
          if (!studData.token) return;
          this.studId = studData.studId;
          var now = new Date();
          var expiresIn = studData.expirationDate.getTime() - now.getTime();

          if (expiresIn > 0) {
            this.isStudAuthListner.next(true);
            this.token = studData.token;
            this.isStudAuthed = true;
            this.setTimer(expiresIn / 1000);
          } else {
            this.logout();
          }
        }
      }, {
        key: "saveStudData",
        value: function saveStudData(token, expirationDate) {
          localStorage.setItem("studId", this.studId);
          localStorage.setItem("studToken", token);
          localStorage.setItem("studExpiresIn", expirationDate);
        }
      }, {
        key: "setTimer",
        value: function setTimer(expiresIn) {
          var _this36 = this;

          setTimeout(function () {
            _this36.logout();
          }, expiresIn * 1000);
        }
      }, {
        key: "getStudAuthData",
        value: function getStudAuthData() {
          return {
            studId: localStorage.getItem("studId"),
            token: localStorage.getItem("studToken"),
            expirationDate: new Date(localStorage.getItem("studExpiresIn"))
          };
        }
      }, {
        key: "logout",
        value: function logout() {
          this.isStudAuthListner.next(false);
          localStorage.removeItem("studId");
          localStorage.removeItem("studToken");
          localStorage.removeItem("studExpiresIn");
          this.isStudAuthed = false;
          this.token = '';
          this.router.navigateByUrl("/");
        }
      }, {
        key: "openSnack",
        value: function openSnack() {
          this._snackBar.open("Invalid login details", "okay", {
            duration: 3000,
            horizontalPosition: "center",
            verticalPosition: "top"
          });
        }
      }]);

      return StudAuthService;
    }();

    StudAuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    StudAuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
      providedIn: 'root'
    })], StudAuthService);
    /***/
  },

  /***/
  "./src/app/services/stud.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/stud.service.ts ***!
    \******************************************/

  /*! exports provided: StudService */

  /***/
  function srcAppServicesStudServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudService", function () {
      return StudService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "student";

    var StudService = /*#__PURE__*/function () {
      function StudService(http, _snackBar) {
        _classCallCheck(this, StudService);

        this.http = http;
        this._snackBar = _snackBar;
        this.studListListener = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(StudService, [{
        key: "addStudent",
        value: function addStudent(studData) {
          this.getAllStudents();
          return this.http.post(BACKEND_URL, this.appendData(studData));
        }
      }, {
        key: "updateStudent",
        value: function updateStudent(studData, studId, oldImgPath) {
          var newStudData = this.appendData(studData);
          newStudData.append("oldImgPath", oldImgPath.split("images/")[1]);
          return this.http.put(BACKEND_URL + "/" + studId, newStudData);
        }
      }, {
        key: "getStudent",
        value: function getStudent(studId) {
          return this.http.get(BACKEND_URL + "/" + studId);
        }
      }, {
        key: "getAllStudents",
        value: function getAllStudents() {
          var _this37 = this;

          this.http.get(BACKEND_URL).subscribe(function (result) {
            _this37.studListListener.next(result);
          });
        }
      }, {
        key: "getUpdatedStudList",
        value: function getUpdatedStudList() {
          this.getAllStudents();
          return this.studListListener.asObservable();
        }
      }, {
        key: "deleteStud",
        value: function deleteStud(studId) {
          var _this38 = this;

          this.http["delete"](BACKEND_URL + "/" + studId).subscribe(function (resp) {
            return _this38.openSnackBar(resp.msg);
          });
        }
      }, {
        key: "appendData",
        value: function appendData(studData) {
          var formData = new FormData();
          formData.append("name", studData.name);
          formData.append("password", studData.password);
          formData.append("mobile", studData.mobile);
          formData.append("email", studData.email);
          formData.append("dob", studData.dob);
          formData.append("qualification", studData.qualification);
          formData.append("marrageStatus", studData.marrageStatus);
          formData.append("gender", studData.gender);
          formData.append("image", studData.image, studData.name);
          return formData;
        }
      }, {
        key: "openSnackBar",
        value: function openSnackBar(msg) {
          this.getAllStudents();

          this._snackBar.open(msg, "Okay", {
            duration: 2000,
            horizontalPosition: "center",
            verticalPosition: "top"
          });
        }
      }]);

      return StudService;
    }();

    StudService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
      }];
    };

    StudService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
      providedIn: "root"
    })], StudService);
    /***/
  },

  /***/
  "./src/app/services/study-center.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/study-center.service.ts ***!
    \**************************************************/

  /*! exports provided: StudyCenterService */

  /***/
  function srcAppServicesStudyCenterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudyCenterService", function () {
      return StudyCenterService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "studyCenter/center";

    var StudyCenterService = /*#__PURE__*/function () {
      function StudyCenterService(http) {
        _classCallCheck(this, StudyCenterService);

        this.http = http;
      }

      _createClass(StudyCenterService, [{
        key: "addUpdateStudyCenter",
        value: function addUpdateStudyCenter(centerData, centerId) {
          var formData = new FormData();
          formData.append("_id", centerId);
          formData.append("title", centerData.title);
          formData.append("address", centerData.address);
          formData.append("pincode", centerData.pincode);
          formData.append("email", centerData.email);
          formData.append("mobileno", centerData.mobileno);
          formData.append("totalSlots", centerData.totalSlots);
          formData.append("area", centerData.area);
          formData.append("city", centerData.city);
          formData.append("district", centerData.district);
          formData.append("state", centerData.state);
          formData.append("image", centerData.image, centerData.title);
          return this.http.post(BACKEND_URL, formData);
        }
      }, {
        key: "getCenter",
        value: function getCenter() {
          return this.http.get(BACKEND_URL);
        }
      }]);

      return StudyCenterService;
    }();

    StudyCenterService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    StudyCenterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: "root"
    })], StudyCenterService);
    /***/
  },

  /***/
  "./src/app/services/transaction.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/transaction.service.ts ***!
    \*************************************************/

  /*! exports provided: TransactionService */

  /***/
  function srcAppServicesTransactionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransactionService", function () {
      return TransactionService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "transactions";

    var TransactionService = /*#__PURE__*/function () {
      function TransactionService(http) {
        _classCallCheck(this, TransactionService);

        this.http = http;
        this.transactionListner = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(TransactionService, [{
        key: "getStudSlotTransactions",
        value: function getStudSlotTransactions(Ids) {
          var _this39 = this;

          this.http.get(BACKEND_URL, {
            params: Ids
          }).subscribe(function (TransactionData) {
            _this39.transactionListner.next(TransactionData);
          });
        }
      }, {
        key: "getUpdatedStudSlotTransactions",
        value: function getUpdatedStudSlotTransactions() {
          return this.transactionListner.asObservable();
        }
      }]);

      return TransactionService;
    }();

    TransactionService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    TransactionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
      providedIn: 'root'
    })], TransactionService);
    /***/
  },

  /***/
  "./src/app/student/profile/profile.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/student/profile/profile.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStudentProfileProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-spinner{\r\n  margin: 2rem auto;\r\n}\r\n .profile-section{\r\n    height: 400px;\r\n    width: 100%;\r\n   position: absolute;\r\n   background: linear-gradient(to right,rgba(90, 8, 243, 0.712),rgba(0, 247, 255, 0.459));\r\n }\r\n .container{\r\n   margin: 5rem auto;\r\n   position: relative;\r\nmin-height: 35rem;\r\nheight: 35rem;\r\n  }\r\n h3{\r\n    font-weight: bold;\r\n  }\r\n .row{\r\n    background-color: white;\r\n      box-shadow: 0px 0px 10px 0px;\r\n      height: 30rem;\r\n      width: 82%;\r\n      margin: auto;\r\n      padding: 1rem 0rem;\r\n      border-radius: 1%;\r\n  }\r\n .stud-img\r\n{\r\n  position: relative;\r\n  width:100%;\r\n  height: 28rem;\r\n}\r\n .details{\r\n  margin: 1rem auto;\r\n  padding: 1rem auto;\r\n}\r\n @media only screen and (max-width:425px){\r\n  .table{\r\n    margin-left: -30px;\r\n  }\r\n\r\n}\r\n @media only screen and (max-width:992px){\r\n  .row{\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjtDQUNDO0lBQ0csYUFBYTtJQUNiLFdBQVc7R0FDWixrQkFBa0I7R0FDbEIsc0ZBQXNGO0NBQ3hGO0NBQ0E7R0FDRSxpQkFBaUI7R0FDakIsa0JBQWtCO0FBQ3JCLGlCQUFpQjtBQUNqQixhQUFhO0VBQ1g7Q0FDQTtJQUNFLGlCQUFpQjtFQUNuQjtDQUNBO0lBQ0UsdUJBQXVCO01BQ3JCLDRCQUE0QjtNQUM1QixhQUFhO01BQ2IsVUFBVTtNQUNWLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsaUJBQWlCO0VBQ3JCO0NBQ0Q7O0VBRUMsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixhQUFhO0FBQ2Y7Q0FFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7Q0FDQTtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCOztBQUVGO0NBQ0E7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc3R1ZGVudC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtc3Bpbm5lcntcclxuICBtYXJnaW46IDJyZW0gYXV0bztcclxufVxyXG4gLnByb2ZpbGUtc2VjdGlvbntcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQscmdiYSg5MCwgOCwgMjQzLCAwLjcxMikscmdiYSgwLCAyNDcsIDI1NSwgMC40NTkpKTtcclxuIH1cclxuIC5jb250YWluZXJ7XHJcbiAgIG1hcmdpbjogNXJlbSBhdXRvO1xyXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbm1pbi1oZWlnaHQ6IDM1cmVtO1xyXG5oZWlnaHQ6IDM1cmVtO1xyXG4gIH1cclxuICBoM3tcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAucm93e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHg7XHJcbiAgICAgIGhlaWdodDogMzByZW07XHJcbiAgICAgIHdpZHRoOiA4MiU7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgcGFkZGluZzogMXJlbSAwcmVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxJTtcclxuICB9XHJcbiAuc3R1ZC1pbWdcclxue1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDogMjhyZW07XHJcbn1cclxuXHJcbi5kZXRhaWxze1xyXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xyXG4gIHBhZGRpbmc6IDFyZW0gYXV0bztcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDI1cHgpe1xyXG4gIC50YWJsZXtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMzBweDtcclxuICB9XHJcblxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTJweCl7XHJcbiAgLnJvd3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/student/profile/profile.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/student/profile/profile.component.ts ***!
    \******************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppStudentProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_stud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/stud.service */
    "./src/app/services/stud.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent(studService) {
        _classCallCheck(this, ProfileComponent);

        this.studService = studService;
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this40 = this;

          this.studSubscription = this.studService.getStudent(localStorage.getItem("studId")).subscribe(function (stud) {
            _this40.studData = stud;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.studSubscription.unsubscribe();
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: _services_stud_service__WEBPACK_IMPORTED_MODULE_1__["StudService"]
      }];
    };

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-profile",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/student/profile/profile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.css */
      "./src/app/student/profile/profile.component.css"))["default"]]
    })], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/student/stud-signup/stud-signup.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/student/stud-signup/stud-signup.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStudentStudSignupStudSignupComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-card{\r\n  width: 60%;\r\n  margin: 2rem auto;\r\n}\r\ninput[type=\"file\"]{\r\n  visibility: hidden;\r\n}\r\n.mat-radio-button {\r\n  margin: 0 12px;\r\n}\r\n.mat-form-field{\r\n  width: 100%;\r\n}\r\n/* .mat-form-field-wrapper{\r\n  margin: -1.25em !important;\r\n} */\r\n.formRadio{\r\n  height: 3rem;\r\n  margin: 1rem auto;\r\n  border-radius: 2%;\r\n  font-size: 13px;\r\n  font-weight: 400;\r\n  border: 1px solid rgb(224, 220, 220);\r\n}\r\n.row{\r\n  margin-left:1px ;\r\n}\r\n.formRadio label,.col{\r\n  padding: .8rem;\r\n}\r\n::ng-deep .mat-form-field-flex > .mat-form-field-infix { padding: 0.4em 0px !important;}\r\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-label { margin-top:-15px; }\r\n::ng-deep .ng-valid .mat-form-field-label,::ng-deep .mat-form-field-appearance-outline:focus-within  .mat-form-field-label{\r\n  margin-top:-5px;\r\n}\r\n::ng-deep .ng-touched .mat-form-field-label{\r\n  margin-top:-5xp;\r\n}\r\n::ng-deep .mat-form-field-hide-placeholder  .mat-form-field-label{\r\n  margin-top:-15px;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9zdHVkLXNpZ251cC9zdHVkLXNpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUM7RUFDQyxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFDQTs7R0FFRztBQUNIO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUdBLHlEQUF5RCw2QkFBNkIsQ0FBQztBQUN2RixxRUFBcUUsZ0JBQWdCLEVBQUU7QUFFdkY7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9zdHVkZW50L3N0dWQtc2lnbnVwL3N0dWQtc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZHtcclxuICB3aWR0aDogNjAlO1xyXG4gIG1hcmdpbjogMnJlbSBhdXRvO1xyXG59XHJcbmlucHV0W3R5cGU9XCJmaWxlXCJde1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuIC5tYXQtcmFkaW8tYnV0dG9uIHtcclxuICBtYXJnaW46IDAgMTJweDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxke1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi8qIC5tYXQtZm9ybS1maWVsZC13cmFwcGVye1xyXG4gIG1hcmdpbjogLTEuMjVlbSAhaW1wb3J0YW50O1xyXG59ICovXHJcbi5mb3JtUmFkaW97XHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIlO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMjQsIDIyMCwgMjIwKTtcclxufVxyXG4ucm93e1xyXG4gIG1hcmdpbi1sZWZ0OjFweCA7XHJcbn1cclxuLmZvcm1SYWRpbyBsYWJlbCwuY29se1xyXG4gIHBhZGRpbmc6IC44cmVtO1xyXG59XHJcblxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4ID4gLm1hdC1mb3JtLWZpZWxkLWluZml4IHsgcGFkZGluZzogMC40ZW0gMHB4ICFpbXBvcnRhbnQ7fVxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtbGFiZWwgeyBtYXJnaW4tdG9wOi0xNXB4OyB9XHJcblxyXG46Om5nLWRlZXAgLm5nLXZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCw6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZTpmb2N1cy13aXRoaW4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtcclxuICBtYXJnaW4tdG9wOi01cHg7XHJcbn1cclxuOjpuZy1kZWVwIC5uZy10b3VjaGVkIC5tYXQtZm9ybS1maWVsZC1sYWJlbHtcclxuICBtYXJnaW4tdG9wOi01eHA7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1oaWRlLXBsYWNlaG9sZGVyICAubWF0LWZvcm0tZmllbGQtbGFiZWx7XHJcbiAgbWFyZ2luLXRvcDotMTVweDtcclxufVxyXG5cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/student/stud-signup/stud-signup.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/student/stud-signup/stud-signup.component.ts ***!
    \**************************************************************/

  /*! exports provided: StudSignupComponent */

  /***/
  function srcAppStudentStudSignupStudSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudSignupComponent", function () {
      return StudSignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_stud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/stud.service */
    "./src/app/services/stud.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_admin_add_update_mimeType_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/admin/add-update/mimeType-validators */
    "./src/app/admin/add-update/mimeType-validators.ts");
    /* harmony import */


    var src_app_services_snack_popup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/snack-popup.service */
    "./src/app/services/snack-popup.service.ts");

    var StudSignupComponent = /*#__PURE__*/function () {
      function StudSignupComponent(studService, route, router, _snackBar) {
        _classCallCheck(this, StudSignupComponent);

        this.studService = studService;
        this.route = route;
        this.router = router;
        this._snackBar = _snackBar;
        this.startDate = new Date(1990, 0, 1);
        this.isLoading = true;
        this.btnName = "Add";

        this.dateFilter = function (d) {
          return d._i.year < 2005;
        };

        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](new Date());
        this.serializedDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](new Date().toISOString());
      }

      _createClass(StudSignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this41 = this;

          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]
            }),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]
            }),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("[0-9 ]{10}")]
            }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              asyncValidators: [src_app_admin_add_update_mimeType_validators__WEBPACK_IMPORTED_MODULE_5__["mimeType"]]
            }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4)]
            }),
            qualification: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            }),
            marrageStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            })
          });
          this.route.queryParamMap.subscribe(function (res) {
            _this41.studID = res.get("id");
            if (!_this41.studID) return _this41.isLoading = false;
            _this41.btnName = "Update";

            _this41.studService.getStudent(_this41.studID).subscribe(function (result) {
              _this41.form.patchValue(Object.assign({}, result, {
                image: null,
                dob: null
              }));

              _this41.oldImgPath = _this41.imagePreview = result.image;
              _this41.isLoading = false;
            });
          });
        }
      }, {
        key: "addStudent",
        value: function addStudent() {
          var _this42 = this;

          this.isLoading = true;
          if (this.form.invalid) return;
          var formObs = this.btnName === "Add" ? this.studService.addStudent(this.form.value) : this.studService.updateStudent(this.form.value, this.studID, this.oldImgPath);
          formObs.subscribe(function (result) {
            _this42.onAddUpdateResult(result);
          }, function (err) {
            var msg = err.error.errors.email ? "Email id already registered!" : "Something Went wrong. Please try again!";
            _this42.isLoading = false;

            _this42._snackBar.openSnack(msg);
          });
        }
      }, {
        key: "onAddUpdateResult",
        value: function onAddUpdateResult(result) {
          this.studService.getAllStudents();

          this._snackBar.openSnack(result.msg);

          this.isLoading = false;
          this.form.reset();
          this.router.navigateByUrl("viewStud");
        }
      }, {
        key: "onImagePicked",
        value: function onImagePicked(event) {
          var _this43 = this;

          var file = event.target.files[0];
          this.form.patchValue({
            image: file
          });
          this.form.get("image").updateValueAndValidity();
          var reader = new FileReader();

          reader.onload = function () {
            _this43.imagePreview = reader.result;
          };

          reader.readAsDataURL(file);
        }
      }]);

      return StudSignupComponent;
    }();

    StudSignupComponent.ctorParameters = function () {
      return [{
        type: _services_stud_service__WEBPACK_IMPORTED_MODULE_2__["StudService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: src_app_services_snack_popup_service__WEBPACK_IMPORTED_MODULE_6__["SanckBar"]
      }];
    };

    StudSignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: "app-stud-signup",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./stud-signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/student/stud-signup/stud-signup.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./stud-signup.component.css */
      "./src/app/student/stud-signup/stud-signup.component.css"))["default"]]
    })], StudSignupComponent);
    /***/
  },

  /***/
  "./src/app/student/studslot/studslot.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/student/studslot/studslot.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStudentStudslotStudslotComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-spinner{\r\n  margin: 5rem auto;\r\n}\r\n\r\nh5{\r\n  margin:10% 30%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9zdHVkc2xvdC9zdHVkc2xvdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvc3R1ZHNsb3Qvc3R1ZHNsb3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtc3Bpbm5lcntcclxuICBtYXJnaW46IDVyZW0gYXV0bztcclxufVxyXG5cclxuaDV7XHJcbiAgbWFyZ2luOjEwJSAzMCU7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/student/studslot/studslot.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/student/studslot/studslot.component.ts ***!
    \********************************************************/

  /*! exports provided: StudslotComponent */

  /***/
  function srcAppStudentStudslotStudslotComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudslotComponent", function () {
      return StudslotComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_slot_detail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/slot-detail.service */
    "./src/app/services/slot-detail.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StudslotComponent = /*#__PURE__*/function () {
      function StudslotComponent(slotDetailService) {
        _classCallCheck(this, StudslotComponent);

        this.slotDetailService = slotDetailService;
        this.isLoading = true;
      }

      _createClass(StudslotComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this44 = this;

          this.slotDetailService.getStudSlot(localStorage.getItem("studId")).subscribe(function (result) {
            _this44.selectedSlot = result;
            _this44.studData = result.studId;
          });
          this.isLoading = false;
        }
      }]);

      return StudslotComponent;
    }();

    StudslotComponent.ctorParameters = function () {
      return [{
        type: _services_slot_detail_service__WEBPACK_IMPORTED_MODULE_1__["SlotDetailService"]
      }];
    };

    StudslotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-studslot',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./studslot.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/student/studslot/studslot.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./studslot.component.css */
      "./src/app/student/studslot/studslot.component.css"))["default"]]
    })], StudslotComponent);
    /***/
  },

  /***/
  "./src/app/student/viewstud/viewstud.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/student/viewstud/viewstud.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppStudentViewstudViewstudComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h4,button{\r\n  margin:2rem auto auto auto ;\r\n  text-align: center;\r\n}\r\n.row{\r\n  margin:  1rem;\r\n}\r\n.col-3\r\n{\r\n  margin: 1rem auto;\r\n}\r\n.mat-card{\r\n  box-shadow: 0px 0px 10px 5px whitesmoke;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC92aWV3c3R1ZC92aWV3c3R1ZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7O0VBRUUsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSx1Q0FBdUM7QUFDekMiLCJmaWxlIjoic3JjL2FwcC9zdHVkZW50L3ZpZXdzdHVkL3ZpZXdzdHVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNCxidXR0b257XHJcbiAgbWFyZ2luOjJyZW0gYXV0byBhdXRvIGF1dG8gO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucm93e1xyXG4gIG1hcmdpbjogIDFyZW07XHJcbn1cclxuXHJcbi5jb2wtM1xyXG57XHJcbiAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbn1cclxuXHJcbi5tYXQtY2FyZHtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggNXB4IHdoaXRlc21va2U7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/student/viewstud/viewstud.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/student/viewstud/viewstud.component.ts ***!
    \********************************************************/

  /*! exports provided: ViewstudComponent */

  /***/
  function srcAppStudentViewstudViewstudComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewstudComponent", function () {
      return ViewstudComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_stud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/stud.service */
    "./src/app/services/stud.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ViewstudComponent = /*#__PURE__*/function () {
      function ViewstudComponent(studService) {
        _classCallCheck(this, ViewstudComponent);

        this.studService = studService;
        this.isLoading = true;
      }

      _createClass(ViewstudComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this45 = this;

          this.studListSubscription = this.studService.getUpdatedStudList().subscribe(function (result) {
            _this45.studList = result;
            _this45.isLoading = false;
          });
        }
      }, {
        key: "deleteStud",
        value: function deleteStud(studId) {
          this.studService.deleteStud(studId);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.studListSubscription.unsubscribe();
        }
      }]);

      return ViewstudComponent;
    }();

    ViewstudComponent.ctorParameters = function () {
      return [{
        type: _services_stud_service__WEBPACK_IMPORTED_MODULE_1__["StudService"]
      }];
    };

    ViewstudComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-viewstud',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./viewstud.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/student/viewstud/viewstud.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./viewstud.component.css */
      "./src/app/student/viewstud/viewstud.component.css"))["default"]]
    })], ViewstudComponent);
    /***/
  },

  /***/
  "./src/app/summary.pipe.ts":
  /*!*********************************!*\
    !*** ./src/app/summary.pipe.ts ***!
    \*********************************/

  /*! exports provided: SummaryPipe */

  /***/
  function srcAppSummaryPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SummaryPipe", function () {
      return SummaryPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SummaryPipe = /*#__PURE__*/function () {
      function SummaryPipe() {
        _classCallCheck(this, SummaryPipe);
      }

      _createClass(SummaryPipe, [{
        key: "transform",
        value: function transform(value, limit) {
          if (!value) return;
          return value.substring(0, limit ? limit : 150) + "...";
        }
      }]);

      return SummaryPipe;
    }();

    SummaryPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: "summary"
    })], SummaryPipe);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: "http://localhost:3000/api/"
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! F:\drem\angular\project\studyCenter\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map