(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");




var routes = [
    {
        path: '', component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"panel panel-info\">\n    <div class=\"panel-heading\">\n      <div class=\"panel-title\">\n        <h3 class=\"text-center\">Phone Book</h3>\n\n      </div>\n    </div>\n    <div class=\"panel-body\">\n      <form class=\"form-horizontal\">\n        <div class=\"form-group has-info has-feedback\">\n          <label for=\"seacrh\" class=\"col-sm-2 control-label\">Search: </label>\n          <div class=\"col-sm-5\">\n            <input type=\"text\" name=\"search\" class=\"form-control\" [(ngModel)]=\"searchItem\">\n            <button *ngIf=\"!searchMode\" class=\"glyphicon glyphicon-search \"  (click)=\"search(searchItem)\"></button>\n            <button class=\"glyphicon glyphicon-remove \" *ngIf=\"searchMode\" (click)=\"getUsers()\"></button>\n\n          </div>\n        </div>\n      </form>\n\n      <div class=\"table-responsive\" *ngIf=\"this.allData?.length > 0\">\n\n        <table class=\"table table-striped\">\n          <thead>\n            <tr>\n              <th>Contacts</th>\n              <th>Phone Number</th>\n              <th>Handle</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let data of allData \">\n\n              <td ><span *ngIf=\"editId!== data.id\">{{data.name}}</span>\n              <input text=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"nameEdit\"  *ngIf=\"editId === data.id\">\n            </td>\n              <td > <span *ngIf=\"editId!== data.id\">{{data.phone}}</span>\n                <input text=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"phoneEdit\"  *ngIf=\"editId === data.id\">\n              </td>\n              <td><a (click)=\"delete(data.id)\"><span class=\"glyphicon glyphicon-trash\">\n                  </span>&nbsp;</a>\n                </td>\n                <td>\n                <a (click)=\"edit(data)\" *ngIf=\"editId!== data.id\">\n                <span class=\"glyphicon glyphicon-edit\"></span></a>\n              <a (click)=\"update(data.id,nameEdit,phoneEdit)\" *ngIf=\"editId=== data.id\">&nbsp;\n                <span class=\"glyphicon glyphicon-ok\"></span></a>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n    <div class=\"panel-footer\">\n      <form class=\"form-inline\" [formGroup]=\"dataGroup\">\n        <div class=\"form-group\">\n          <span>Name：</span>\n          <input type=\"text\" class=\"form-control\" formControlName=\"name\">\n        </div>\n        <div class=\"form-group\">\n          <span>Tel：</span>\n          <input type=\"text\" class=\"form-control\" formControlName=\"phone\">\n        </div>\n        <input (click)=\"save()\" type=\"button\" class=\"btn btn-primary btn-sm\" value=\"Add\">\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel {\n  width: 80%;\n  margin: 50px auto; }\n\ntd:nth-of-type(1) {\n  width: 30%; }\n\ntd:nth-of-type(2) {\n  width: 35%; }\n\ninput[type=\"text\"] {\n  width: 80%;\n  display: inline-block; }\n\n@media (min-width: 768px) and (max-width: 992px) {\n  .form-inline .form-control {\n    width: 150px; } }\n\nbutton {\n  cursor: pointer;\n  background: transparent;\n  border: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2toYW1pcy9EZXNrdG9wL0xvb3BCYS9sb29wYmFjay1mcm9udC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQVU7RUFDVixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxVQUFVLEVBQUE7O0FBRWQ7RUFDSSxVQUFVLEVBQUE7O0FBRWQ7RUFDSSxVQUFTO0VBQ1QscUJBQXFCLEVBQUE7O0FBRXpCO0VBQ0k7SUFDQyxZQUFZLEVBQUEsRUFDWjs7QUFFTDtFQUNJLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsU0FBUyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhbmVse1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XG59XG50ZDpudGgtb2YtdHlwZSgxKXtcbiAgICB3aWR0aDogMzAlO1xufVxudGQ6bnRoLW9mLXR5cGUoMil7XG4gICAgd2lkdGg6IDM1JTtcbn1cbmlucHV0W3R5cGU9XCJ0ZXh0XCJde1xuICAgIHdpZHRoOjgwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCl7XG4gICAgLmZvcm0taW5saW5lIC5mb3JtLWNvbnRyb2wge1xuICAgICB3aWR0aDogMTUwcHg7ICAgXG4gICAgfSAgXG59IFxuYnV0dG9ue1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDA7XG5cbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);





var AppComponent = /** @class */ (function () {
    function AppComponent(fb, http) {
        this.fb = fb;
        this.http = http;
        this.title = 'loopback-front';
        this.dataGroup = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            phone: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.phoneExist = false;
        this.isphoneExist = false;
        this.editId = -1;
        this.searchMode = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    AppComponent.prototype.edit = function (data) {
        this.editId = data.id;
        this.nameEdit = data.name;
        this.phoneEdit = data.phone;
    };
    AppComponent.prototype.save = function () {
        var _this = this;
        var obj = {
            "name": this.dataGroup.get('name').value,
            "phone": this.dataGroup.get('phone').value
        };
        var name = this.dataGroup.get('name').value;
        var phone = this.dataGroup.get('phone').value;
        if (name.length < 3) {
            alert("name must bigger than 3 character");
        }
        else if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(name) || Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(phone)) {
            alert("name of phone must not empty");
        }
        else {
            var index = this.allData.findIndex(function (x) { return x.phone == _this.dataGroup.get('phone').value; });
            if (index == -1) {
                this.http.post('http://localhost:3000/api/model1s', obj).subscribe(function (res) {
                    _this.allData.push(res);
                    _this.dataGroup.reset();
                });
            }
            else {
                alert("phone exist");
            }
        }
    };
    AppComponent.prototype.getUsers = function () {
        var _this = this;
        this.http.get('http://localhost:3000/api/model1s').subscribe(function (res) {
            _this.allData = res;
            _this.searchMode = false;
        });
    };
    AppComponent.prototype.delete = function (id) {
        var _this = this;
        var url = 'http://localhost:3000/api/model1s' + "/" + id;
        this.http.delete(url).subscribe(function (res) {
            if (res["count"] > 0) {
                var index = _this.allData.findIndex(function (x) { return x.id === id; });
                _this.allData.splice(index, 1);
            }
            else {
                alert("not deleted");
            }
        });
    };
    AppComponent.prototype.update = function (id, name, phone) {
        var _this = this;
        var obj = {
            "name": name,
            "phone": phone
        };
        var url = 'http://localhost:3000/api/model1s' + "/" + id + "/" + 'replace';
        this.http.post(url, obj).subscribe(function (res) {
            var index = _this.allData.findIndex(function (x) { return x.id === _this.editId; });
            _this.allData[index] = res;
            _this.editId = -1;
        });
    };
    // findOne?
    AppComponent.prototype.search = function (name) {
        var _this = this;
        this.searchMode = true;
        this.http.get('http://localhost:3000/api/model1s').subscribe(function (res) {
            _this.allData = res;
            var result = [];
            for (var index = 0; index < _this.allData.length; index++) {
                if (_this.allData[index].name === name) {
                    result.push(_this.allData[index]);
                }
            }
            _this.allData = [];
            _this.allData = result;
        });
    };
    AppComponent.prototype.checkPhoneExist = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/khamis/Desktop/LoopBa/loopback-front/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map