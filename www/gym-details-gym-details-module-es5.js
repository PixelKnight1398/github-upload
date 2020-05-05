(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gym-details-gym-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/gym-details/gym-details.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gym-details/gym-details.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGymDetailsGymDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>gym-details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/gym-details/profile/profile.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gym-details/profile/profile.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGymDetailsProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  profile works!\n</p>\n";
    /***/
  },

  /***/
  "./src/app/gym-details/gym-details-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/gym-details/gym-details-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: GymDetailsPageRoutingModule */

  /***/
  function srcAppGymDetailsGymDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GymDetailsPageRoutingModule", function () {
      return GymDetailsPageRoutingModule;
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


    var _gym_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./gym-details.page */
    "./src/app/gym-details/gym-details.page.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/gym-details/profile/profile.component.ts");

    const routes = [{
      path: '',
      component: _gym_details_page__WEBPACK_IMPORTED_MODULE_3__["GymDetailsPage"]
    }, {
      path: ':id',
      component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]
    }];
    let GymDetailsPageRoutingModule = class GymDetailsPageRoutingModule {};
    GymDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], GymDetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/gym-details/gym-details.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/gym-details/gym-details.module.ts ***!
    \***************************************************/

  /*! exports provided: GymDetailsPageModule */

  /***/
  function srcAppGymDetailsGymDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GymDetailsPageModule", function () {
      return GymDetailsPageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _gym_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./gym-details-routing.module */
    "./src/app/gym-details/gym-details-routing.module.ts");
    /* harmony import */


    var _gym_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./gym-details.page */
    "./src/app/gym-details/gym-details.page.ts");

    let GymDetailsPageModule = class GymDetailsPageModule {};
    GymDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _gym_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["GymDetailsPageRoutingModule"]],
      declarations: [_gym_details_page__WEBPACK_IMPORTED_MODULE_6__["GymDetailsPage"]]
    })], GymDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/gym-details/gym-details.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/gym-details/gym-details.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGymDetailsGymDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2d5bS1kZXRhaWxzL2d5bS1kZXRhaWxzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/gym-details/gym-details.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/gym-details/gym-details.page.ts ***!
    \*************************************************/

  /*! exports provided: GymDetailsPage */

  /***/
  function srcAppGymDetailsGymDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GymDetailsPage", function () {
      return GymDetailsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let GymDetailsPage = class GymDetailsPage {
      constructor() {}

      ngOnInit() {}

    };
    GymDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-gym-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./gym-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/gym-details/gym-details.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./gym-details.page.scss */
      "./src/app/gym-details/gym-details.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], GymDetailsPage);
    /***/
  },

  /***/
  "./src/app/gym-details/profile/profile.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/gym-details/profile/profile.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGymDetailsProfileProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2d5bS1kZXRhaWxzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/gym-details/profile/profile.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/gym-details/profile/profile.component.ts ***!
    \**********************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppGymDetailsProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let ProfileComponent = class ProfileComponent {
      constructor() {}

      ngOnInit() {}

    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/gym-details/profile/profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.scss */
      "./src/app/gym-details/profile/profile.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ProfileComponent);
    /***/
  }
}]);
//# sourceMappingURL=gym-details-gym-details-module-es5.js.map