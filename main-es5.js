function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'learn-angular';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _pages_page_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/page.module */
    "./src/app/pages/page.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-zorro-antd */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/locales/en */
    "./node_modules/@angular/common/locales/en.js");
    /* harmony import */


    var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_10__);

    Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_10___default.a);

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NZ_I18N"],
        useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["vi_VN"]
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([{
        path: '',
        redirectTo: 'page/home',
        pathMatch: 'full'
      }, {
        path: '**',
        redirectTo: 'page/home'
      }], {
        useHash: true
      }), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _pages_page_module__WEBPACK_IMPORTED_MODULE_5__["PageModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _pages_page_module__WEBPACK_IMPORTED_MODULE_5__["PageModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([{
            path: '',
            redirectTo: 'page/home',
            pathMatch: 'full'
          }, {
            path: '**',
            redirectTo: 'page/home'
          }], {
            useHash: true
          }), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _pages_page_module__WEBPACK_IMPORTED_MODULE_5__["PageModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]],
          providers: [{
            provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NZ_I18N"],
            useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["vi_VN"]
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent() {
        _classCallCheck(this, LoginComponent);
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)();
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 2,
      vars: 0,
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "login works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/page.module.ts":
  /*!**************************************!*\
    !*** ./src/app/pages/page.module.ts ***!
    \**************************************/

  /*! exports provided: PageModule */

  /***/
  function srcAppPagesPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageModule", function () {
      return PageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./page/page.component */
    "./src/app/pages/page/page.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-zorro-antd */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js"); // import { NzLayoutModule } from 'ng-zorro-antd/layout';


    var PageModule = function PageModule() {
      _classCallCheck(this, PageModule);
    };

    PageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PageModule
    });
    PageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PageModule_Factory(t) {
        return new (t || PageModule)();
      },
      imports: [[ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzBreadCrumbModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzLayoutModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMenuModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzDropDownModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
      }, {
        path: 'page',
        component: _page_page_component__WEBPACK_IMPORTED_MODULE_2__["PageComponent"],
        children: [{
          path: 'home',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | home-home-module */
            "home-home-module").then(__webpack_require__.bind(null,
            /*! ./home/home.module */
            "./src/app/pages/home/home.module.ts")).then(function (x) {
              return x.HomeModule;
            });
          }
        }, {
          path: 'product',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | product-product-module */
            "product-product-module").then(__webpack_require__.bind(null,
            /*! ./product/product.module */
            "./src/app/pages/product/product.module.ts")).then(function (x) {
              return x.ProductModule;
            });
          }
        }]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageModule, {
        declarations: [_page_page_component__WEBPACK_IMPORTED_MODULE_2__["PageComponent"]],
        imports: [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzBreadCrumbModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzLayoutModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMenuModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzDropDownModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_page_page_component__WEBPACK_IMPORTED_MODULE_2__["PageComponent"]],
          imports: [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzBreadCrumbModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzLayoutModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzMenuModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzDropDownModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
            path: 'login',
            component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
          }, {
            path: 'page',
            component: _page_page_component__WEBPACK_IMPORTED_MODULE_2__["PageComponent"],
            children: [{
              path: 'home',
              loadChildren: function loadChildren() {
                return __webpack_require__.e(
                /*! import() | home-home-module */
                "home-home-module").then(__webpack_require__.bind(null,
                /*! ./home/home.module */
                "./src/app/pages/home/home.module.ts")).then(function (x) {
                  return x.HomeModule;
                });
              }
            }, {
              path: 'product',
              loadChildren: function loadChildren() {
                return __webpack_require__.e(
                /*! import() | product-product-module */
                "product-product-module").then(__webpack_require__.bind(null,
                /*! ./product/product.module */
                "./src/app/pages/product/product.module.ts")).then(function (x) {
                  return x.ProductModule;
                });
              }
            }]
          }])]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/page/page.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/page/page.component.ts ***!
    \**********************************************/

  /*! exports provided: PageComponent */

  /***/
  function srcAppPagesPagePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageComponent", function () {
      return PageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng-zorro-antd */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PageComponent =
    /*#__PURE__*/
    function () {
      function PageComponent() {
        _classCallCheck(this, PageComponent);

        this.isCollapsed = false;
      }

      _createClass(PageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageComponent;
    }();

    PageComponent.ɵfac = function PageComponent_Factory(t) {
      return new (t || PageComponent)();
    };

    PageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageComponent,
      selectors: [["app-page"]],
      decls: 48,
      vars: 3,
      consts: [[1, "app-header"], [1, "triggerShow"], ["nz-icon", "", "nzType", "menu", 1, "trigger", 3, "click"], [1, "logo"], ["src", "assets/images/logos/logo.png", "alt", ""], ["nzWidth", "250px", "nzTheme", "dark", "nzCollapsible", "", 3, "nzCollapsedWidth", "nzCollapsed", "nzTrigger", "nzCollapsedChange"], ["nz-menu", "", "nzMode", "inline", "nzTheme", "dark", 1, "sider-menu"], ["nz-submenu", "", "nzOpen", "", "nzIcon", "appstore", "nzTitle", "Qu\u1EA3n l\xFD s\u1EA3n ph\u1EA9m"], ["nz-menu-item", "", "nzSelected", ""], ["routerLink", "/page/product"], ["nz-icon", "", "nzType", "unordered-list", "nzTheme", "outline"], ["nz-menu-item", ""], ["nz-icon", "", "nzType", "check-circle", "nzTheme", "outline"], ["nz-submenu", "", "nzTitle", "Qu\u1EA3n l\xFD ng\u01B0\u1EDDi d\xF9ng", "nzIcon", "user"], ["nz-submenu", "", "nzTitle", "Qu\u1EA3n l\xFD giao d\u1ECBch trao \u0111\u1ED5i", "nzIcon", "notification"], [1, "inner-layout"]],
      template: function PageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-layout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageComponent_Template_i_click_3_listener() {
            return ctx.isCollapsed = !ctx.isCollapsed;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-layout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-sider", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzCollapsedChange", function PageComponent_Template_nz_sider_nzCollapsedChange_7_listener($event) {
            return ctx.isCollapsed = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Danh s\xE1ch s\u1EA3n ph\u1EA9m");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Duy\u1EC7t s\u1EA3n ph\u1EA9m");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "option5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "option6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "option7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "option8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Danh s\xE1ch \u0111\u1ED5i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "option10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "option11");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "option12");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "nz-layout", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "nz-breadcrumb");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "nz-breadcrumb-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "nz-breadcrumb-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "nz-breadcrumb-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "App");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "nz-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCollapsedWidth", 0)("nzCollapsed", ctx.isCollapsed)("nzTrigger", null);
        }
      },
      directives: [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzLayoutComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzHeaderComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzIconDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzSiderComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMenuDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzSubMenuComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMenuItemDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzBreadCrumbComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzBreadCrumbItemComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzContentComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["[_nghost-%COMP%] {\n  background-color: red;\n  font-size: 0.85rem;\n}\nnz-header[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  border-bottom: 1px solid #ddd;\n  padding: 0px;\n}\n.app-header[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1020;\n  width: 100%;\n}\n.logo[_ngcontent-%COMP%] {\n  width: 135px;\n  height: 50px;\n  margin: 4px 30px 16px 0;\n  float: left;\n  position: relative;\n}\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.header-menu[_ngcontent-%COMP%] {\n  line-height: 64px;\n}\n.sider-menu[_ngcontent-%COMP%] {\n  height: 100%;\n  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);\n  padding-top: 64px;\n}\n.inner-layout[_ngcontent-%COMP%] {\n  padding: 64px 24px 24px 274px;\n}\nnz-breadcrumb[_ngcontent-%COMP%] {\n  margin: 16px 0;\n}\nnz-content[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 24px;\n  min-height: 280px;\n}\nnz-sider[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  position: fixed;\n}\n.trigger[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 64px;\n  padding: 0 24px;\n  cursor: pointer;\n  transition: color 0.3s;\n}\n.trigger[_ngcontent-%COMP%]:hover {\n  color: #1890ff;\n}\n.triggerShow[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  float: left;\n}\n.triggerShow[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kdWNoZW5yeS9EZXNrdG9wL2R1Yy1wcm9qZWN0L2xlYXJuLWFuZ3VsYXIvc3JjL2FwcC9wYWdlcy9wYWdlL3BhZ2UuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3BhZ2VzL3BhZ2UvcGFnZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUNBRjtBREVBO0VBQ0UseUJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7QUNBRjtBREdBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFFQSxXQUFBO0FDRkY7QURJQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNGRjtBREhBO0VBUUksa0JBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQ0hKO0FET0E7RUFDRSxpQkFBQTtBQ0xGO0FEUUE7RUFDRSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxpQkFBQTtBQ05GO0FEU0E7RUFDRSw2QkFBQTtBQ1BGO0FEVUE7RUFDRSxjQUFBO0FDUkY7QURXQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDVEY7QURZQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ1ZGO0FEWUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FDVkY7QURhQTtFQUNFLGNBQUE7QUNYRjtBRGNBO0VBRUksV0FBQTtBQ2JKO0FEV0E7RUFLSSxXQUFBO0FDYkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYWdlL3BhZ2UuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbjpob3N0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBmb250LXNpemU6IC44NXJlbTtcbn1cbm56LWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nOiAwcHg7XG4gXG59XG4uYXBwLWhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAyMDtcbiAgLy8gdG9wIDogMTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmxvZ28ge1xuICB3aWR0aDogMTM1cHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luOiA0cHggMzBweCAxNnB4IDA7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGltZyB7XG4gICAgLy8gbGVmdDogMTAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vIHRvcDogNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB9XG59XG5cbi5oZWFkZXItbWVudSB7XG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xufVxuXG4uc2lkZXItbWVudSB7XG4gIGhlaWdodDogMTAwJTtcbiAgYm94LXNoYWRvdzogMnB4IDAgNnB4IHJnYmEoMCwgMjEsIDQxLCAuMzUpO1xuICBwYWRkaW5nLXRvcDogNjRweDtcbn1cblxuLmlubmVyLWxheW91dCB7XG4gIHBhZGRpbmc6IDY0cHggMjRweCAyNHB4IDI3NHB4O1xufVxuXG5uei1icmVhZGNydW1iIHtcbiAgbWFyZ2luOiAxNnB4IDA7XG59XG5cbm56LWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAyNHB4O1xuICBtaW4taGVpZ2h0OiAyODBweDtcbn1cblxubnotc2lkZXIge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuLnRyaWdnZXIge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICBwYWRkaW5nOiAwIDI0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcbn1cblxuLnRyaWdnZXI6aG92ZXIge1xuICBjb2xvcjogIzE4OTBmZjtcbn1cblxuLnRyaWdnZXJTaG93IHtcbiAgaXtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICAubG9nbyB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbn0iLCI6aG9zdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xufVxubnotaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5hcHAtaGVhZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDIwO1xuICB3aWR0aDogMTAwJTtcbn1cbi5sb2dvIHtcbiAgd2lkdGg6IDEzNXB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbjogNHB4IDMwcHggMTZweCAwO1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmxvZ28gaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4uaGVhZGVyLW1lbnUge1xuICBsaW5lLWhlaWdodDogNjRweDtcbn1cbi5zaWRlci1tZW51IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3gtc2hhZG93OiAycHggMCA2cHggcmdiYSgwLCAyMSwgNDEsIDAuMzUpO1xuICBwYWRkaW5nLXRvcDogNjRweDtcbn1cbi5pbm5lci1sYXlvdXQge1xuICBwYWRkaW5nOiA2NHB4IDI0cHggMjRweCAyNzRweDtcbn1cbm56LWJyZWFkY3J1bWIge1xuICBtYXJnaW46IDE2cHggMDtcbn1cbm56LWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAyNHB4O1xuICBtaW4taGVpZ2h0OiAyODBweDtcbn1cbm56LXNpZGVyIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cbi50cmlnZ2VyIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogNjRweDtcbiAgcGFkZGluZzogMCAyNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XG59XG4udHJpZ2dlcjpob3ZlciB7XG4gIGNvbG9yOiAjMTg5MGZmO1xufVxuLnRyaWdnZXJTaG93IGkge1xuICBmbG9hdDogbGVmdDtcbn1cbi50cmlnZ2VyU2hvdyAubG9nbyB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page',
          templateUrl: './page.component.html',
          styleUrls: ['./page.component.less']
        }]
      }], function () {
        return [];
      }, null);
    })();
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
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
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
    /*! /Users/duchenry/Desktop/duc-project/learn-angular/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map