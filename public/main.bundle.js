webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/add-dialog/add-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-dialog/add-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <span style='color:red'>{{err}}</span>\n</div>\n<div>\n    <input id=\"Tittle\" #tit placeholder=\"Title\" type=\"text\" ([ngModel])='title' class=\"validate\">\n    <input id=\"Url\" #url placeholder=\"Url\" type=\"Url\" ([ngModel])='url' class=\"validate\">\n    <div>\n        <span>\n          <button mat-raised-button style='background:green' (click)='addNewPicture(tit.value,url.value)'  color=\"warn\">Add</button>          \n      </span>\n        <span style=\"float:right\">\n          <button mat-raised-button (click)='onNoClick()'  color=\"warn\">Cancel</button>\n      </span>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/add-dialog/add-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AddDialogComponent = (function () {
    function AddDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.title = '';
        this.url = '';
    }
    AddDialogComponent.prototype.ngOnInit = function () {
    };
    AddDialogComponent.prototype.onNoClick = function (data) {
        this.dialogRef.close(data);
    };
    AddDialogComponent.prototype.addNewPicture = function (a, b) {
        this.title = a;
        this.url = b;
        var data = {
            title: this.title,
            url: this.url
        };
        console.log(data);
        if (this.url && this.title) {
            if (!this.ValidURL(this.url)) {
                this.err = 'Enter a Valid URL';
            }
            else if (this.title.length < 2) {
                this.err = 'Tittle Must Be At Least 2 Char long';
            }
            else {
                this.onNoClick(data);
            }
        }
        else {
            this.err = 'Fill All The Fields';
        }
    };
    AddDialogComponent.prototype.ValidURL = function (str) {
        var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
        if (!regex.test(str)) {
            return false;
        }
        else {
            return true;
        }
    };
    AddDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-add-dialog',
            template: __webpack_require__("../../../../../src/app/add-dialog/add-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-dialog/add-dialog.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogRef */], Object])
    ], AddDialogComponent);
    return AddDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mainContainer {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    margin: 0 0 0 0;\r\n    margin-top: 10px;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .col {\r\n        -ms-flex-preferred-size: auto;\r\n            flex-basis: auto;\r\n    }\r\n    .row .col.s8 {\r\n        width: auto;\r\n    }\r\n}\r\n\r\n.img-pro {\r\n    border-radius: 50%;\r\n    -webkit-filter: grayscale(100%);\r\n    -webkit-transition: .5s ease-in-out;\r\n    -moz-filter: grayscale(100%);\r\n    -moz-transition: .5s ease-in-out;\r\n    -o-filter: grayscale(100%);\r\n    -o-transition: .5s ease-in-out;\r\n    -webkit-filter: grayscale(0%);\r\n    -webkit-transition: .5s ease-in-out;\r\n    -moz-filter: grayscale(0%);\r\n    -moz-transition: .5s ease-in-out;\r\n    -o-filter: grayscale(0%);\r\n    -o-transition: .5s ease-in-out;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mainContainer\" *ngIf='show'>\n    <div class=\"row\">\n        <div class=\"input-field col s1\" style=\"max-width:300px\">\n            <mat-card>\n                <input id=\"first_name\" #ser placeholder=\"Search\" type=\"text\" class=\"validate\" (keyup)='search_photos(ser.value)'>\n                <br>\n                <div class=\"collection\">\n                    <a href=\"#!\" class=\"collection-item\"><span class=\"badge\">{{photos.length}}</span>Total Photos Added</a>\n                </div>\n                <br>\n                <div class=\"addbtn\">\n                    <button mat-raised-button (click)='addNewPicture()' color=\"warn\">Add New Photo</button>\n                </div>\n                <br>\n                <div>\n                    <span>Photos Added</span>\n                    <ul class=\"collection\">\n                        <li class=\"collection-item\" *ngFor='let photo of photos'> <a href=\"#{{photo.title}}\">{{photo.title}}</a></li>\n                    </ul>\n                </div>\n            </mat-card>\n        </div>\n\n        <div class=\"col s8\">\n            <mat-card>\n                <app-photo-holder [photos]='view_photos' [searchQuery]='search' (remove)='remove($event)' (update)='update($event)'></app-photo-holder>\n            </mat-card>\n        </div>\n\n    </div>\n\n</div>\n\n<div style='position: absolute;width: 100%;top: 20%' class='hover-field'>\n    <mat-card *ngIf='!show'>\n        <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n\n        <div class='row'>\n\n            <div class='col s3'>\n                <img class=\"img-pro\" src='https://lh6.googleusercontent.com/-aK9qff8dcDM/AAAAAAAAAAI/AAAAAAAAFGE/fdEcAoT7nNE/photo.jpg?sz=328'>\n            </div>\n            <div class=\"profile-content col\">\n                <ul class=\"profile-detail\">\n                    <li><label>Name</label>\n                        <div class=\"value\">\n                            <p>Nijeesh KJ </p>\n                        </div>\n                    </li>\n\n                    <li><label>Social</label>\n                        <div class=\"value\">\n                            <p><a href='http://fb.com/nijeesh.joshy.9'> Facebook</a></p>\n                            <p><a href='http://github.com/nijeesh4all'>GitHub</a></p>\n                            <p><a href='http://linkedin.com/in/nijeesh-joshy'>Linkedin</a></p>\n                            <!--anchor-->\n                        </div>\n                    </li>\n                </ul>\n            </div>\n        </div>\n\n    </mat-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_dialog_add_dialog_component__ = __webpack_require__("../../../../../src/app/add-dialog/add-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(dialog) {
        this.dialog = dialog;
        this.default = {
            title: 'Gamer',
            url: 'http://juicebubble.co.za/wp-content/uploads/2016/02/i-am-a-gamer-black.png',
            id: this.rand()
        };
        this.show = false;
        this.title = 'Photo WearHouse';
        this.photos = [];
        this.search = '';
        this.view_photos = [];
        var that = this;
        setTimeout(function () {
            that.show = true;
        }, 3000);
        if (localStorage.getItem('all_photos')) {
            this.photos = JSON.parse(localStorage.getItem('all_photos'));
        }
        else {
            this.photos.push(this.default);
        }
        this.view_photos = this.photos;
    }
    AppComponent.prototype.rand = function () {
        return Math.random() * 1000;
    };
    AppComponent.prototype.addNewPicture = function () {
        this.openDialog();
    };
    AppComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__add_dialog_add_dialog_component__["a" /* AddDialogComponent */], {
            width: '250px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                result.id = _this.rand();
                _this.photos.push(result);
                localStorage.setItem('all_photos', JSON.stringify(_this.photos));
            }
        });
    };
    AppComponent.prototype.remove = function (index) {
        for (var i = 0; i < this.photos.length; i++) {
            if (index == this.photos[i].id) {
                index = i;
            }
        }
        this.photos.splice(index, 1);
        localStorage.setItem('all_photos', JSON.stringify(this.photos));
        this.view_photos = this.photos;
    };
    AppComponent.prototype.search_photos = function (text) {
        if (!text || text == '' || text == null) {
            this.view_photos = this.photos;
        }
        else {
            this.view_photos = this.photos.filter(function (object) {
                return (object.title.toLowerCase().search(text.toLowerCase()) > -1);
            });
        }
    };
    AppComponent.prototype.update = function (data) {
        var index = data.id;
        for (var i = 0; i < this.photos.length; i++) {
            if (index == this.photos[i].id) {
                index = i;
            }
        }
        this.photos[index].title = data.title;
        this.photos[index].url = data.url;
        localStorage.setItem('all_photos', JSON.stringify(this.photos));
        this.view_photos = this.photos;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialog */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_import_material_import_module__ = __webpack_require__("../../../../../src/app/material-import/material-import.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__photo_viewer_photo_viewer_component__ = __webpack_require__("../../../../../src/app/photo-viewer/photo-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__photo_holder_photo_holder_component__ = __webpack_require__("../../../../../src/app/photo-holder/photo-holder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__remove_dialog_remove_dialog_component__ = __webpack_require__("../../../../../src/app/remove-dialog/remove-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__add_dialog_add_dialog_component__ = __webpack_require__("../../../../../src/app/add-dialog/add-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__edit_dialog_edit_dialog_component__ = __webpack_require__("../../../../../src/app/edit-dialog/edit-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__photo_viewer_photo_viewer_component__["a" /* PhotoViewerComponent */],
                __WEBPACK_IMPORTED_MODULE_5__photo_holder_photo_holder_component__["a" /* PhotoHolderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__remove_dialog_remove_dialog_component__["a" /* RemoveDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_7__add_dialog_add_dialog_component__["a" /* AddDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_8__edit_dialog_edit_dialog_component__["a" /* EditDialogComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__material_import_material_import_module__["a" /* MaterialImportModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__add_dialog_add_dialog_component__["a" /* AddDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_6__remove_dialog_remove_dialog_component__["a" /* RemoveDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_8__edit_dialog_edit_dialog_component__["a" /* EditDialogComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/edit-dialog/edit-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-dialog/edit-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <span style='color:red'>{{err}}</span>\n</div>\n<div>\n    <input id=\"Tittle\" #tit placeholder=\"Title\" type=\"text\" ([ngModel])='title' value='{{data.title}}' class=\"validate\">\n    <input id=\"Url\" #url placeholder=\"Url\" type=\"Url\" ([ngModel])='url' value='{{data.url}}' class=\"validate\">\n    <div>\n        <span>\n        <button mat-raised-button style='background:green' (click)='addNewPicture(tit.value,url.value)'  color=\"warn\">Update</button>          \n    </span>\n        <span style=\"float:right\">\n        <button mat-raised-button (click)='onNoClick()'  color=\"warn\">Cancel</button>\n    </span>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/edit-dialog/edit-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EditDialogComponent = (function () {
    function EditDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.title = '';
        this.url = '';
    }
    EditDialogComponent.prototype.ngOnInit = function () {
    };
    EditDialogComponent.prototype.onNoClick = function (data) {
        this.dialogRef.close(data);
    };
    EditDialogComponent.prototype.addNewPicture = function (a, b) {
        this.title = a;
        this.url = b;
        var data = {
            title: this.title,
            url: this.url
        };
        console.log(data);
        if (this.url && this.title) {
            if (!this.ValidURL(this.url)) {
                this.err = 'Enter a Valid URL';
            }
            else if (this.title.length < 2) {
                this.err = 'Tittle Must Be At Least 2 Char long';
            }
            else {
                this.onNoClick(data);
            }
        }
        else {
            this.err = 'Fill All The Fields';
        }
    };
    EditDialogComponent.prototype.ValidURL = function (str) {
        var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
        if (!regex.test(str)) {
            return false;
        }
        else {
            return true;
        }
    };
    EditDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-edit-dialog',
            template: __webpack_require__("../../../../../src/app/edit-dialog/edit-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/edit-dialog/edit-dialog.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogRef */], Object])
    ], EditDialogComponent);
    return EditDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/material-import/material-import.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialImportModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var list = [
    __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatButtonModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatCheckboxModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatInputModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatCardModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatDialogModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatButtonToggleModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MatTooltipModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatFormFieldModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatIconModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatProgressBarModule */]
];
var MaterialImportModule = (function () {
    function MaterialImportModule() {
    }
    MaterialImportModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: list,
            declarations: [],
            exports: list
        })
    ], MaterialImportModule);
    return MaterialImportModule;
}());



/***/ }),

/***/ "../../../../../src/app/photo-holder/photo-holder.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".edit-btn {\r\n    float: right;\r\n    position: absolute;\r\n    right: 2px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/photo-holder/photo-holder.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"photos.length<1\">\n    <mat-card class=\"Photo-card\" style=\"width:100%;min-width: 200px\" id='noPic'>\n        <img mat-card-image src=\"https://i.imgur.com/v15Q02n.gif\">\n    </mat-card>\n</div>\n\n<div class=\"row\">\n    <div class=\"photoHolder col\" *ngFor='let photo of photos;let i=index'>\n        <mat-card class=\"Photo-card\" style=\"width:100%;min-width: 200px\" id='{{photo.title}}'>\n            <mat-card-header>\n                <div mat-card-avatar class=\"photo-header-image\"></div>\n                <mat-card-title>\n                    <h5>{{photo.title}}</h5>\n                </mat-card-title>\n                <span class='edit-btn'>\n                    <button mat-icon-button>\n                        <mat-icon (click)='openEditDialog(photo.id)'>edit</mat-icon>\n                      </button>\n                </span>\n            </mat-card-header>\n            <img mat-card-image src=\"{{photo.url}}\">\n            <mat-card-actions>\n                <button mat-button (click)='removePhoto(photo.id)'>Remove</button>\n            </mat-card-actions>\n        </mat-card>\n        <br>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/photo-holder/photo-holder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoHolderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__remove_dialog_remove_dialog_component__ = __webpack_require__("../../../../../src/app/remove-dialog/remove-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_dialog_edit_dialog_component__ = __webpack_require__("../../../../../src/app/edit-dialog/edit-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PhotoHolderComponent = (function () {
    function PhotoHolderComponent(dialog, editDialog) {
        this.dialog = dialog;
        this.editDialog = editDialog;
        this.remove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */];
        this.update = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */];
    }
    PhotoHolderComponent.prototype.ngOnInit = function () {
        this.photos;
    };
    PhotoHolderComponent.prototype.removePhoto = function (index) {
        this.openDialog(index);
    };
    PhotoHolderComponent.prototype.openDialog = function (index) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__remove_dialog_remove_dialog_component__["a" /* RemoveDialogComponent */], {
            width: '250px',
            data: { index: index }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.remove.emit(result.index);
            }
        });
    };
    PhotoHolderComponent.prototype.openEditDialog = function (index) {
        var _this = this;
        var val = this.photos.length + 1;
        for (var i = 0; i < this.photos.length; i++) {
            if (index == this.photos[i].id) {
                val = i;
            }
        }
        var data = this.photos[val];
        var dialogRef = this.editDialog.open(__WEBPACK_IMPORTED_MODULE_3__edit_dialog_edit_dialog_component__["a" /* EditDialogComponent */], {
            width: '250px',
            data: data
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result || result == 0) {
                result.id = index;
                _this.update.emit(result);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Array)
    ], PhotoHolderComponent.prototype, "photos", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Object)
    ], PhotoHolderComponent.prototype, "searchQuery", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])(),
        __metadata("design:type", Object)
    ], PhotoHolderComponent.prototype, "remove", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])(),
        __metadata("design:type", Object)
    ], PhotoHolderComponent.prototype, "update", void 0);
    PhotoHolderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-photo-holder',
            template: __webpack_require__("../../../../../src/app/photo-holder/photo-holder.component.html"),
            styles: [__webpack_require__("../../../../../src/app/photo-holder/photo-holder.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialog */]])
    ], PhotoHolderComponent);
    return PhotoHolderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/photo-viewer/photo-viewer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/photo-viewer/photo-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  photo-viewer works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/photo-viewer/photo-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PhotoViewerComponent = (function () {
    function PhotoViewerComponent() {
    }
    PhotoViewerComponent.prototype.ngOnInit = function () {
    };
    PhotoViewerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-photo-viewer',
            template: __webpack_require__("../../../../../src/app/photo-viewer/photo-viewer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/photo-viewer/photo-viewer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PhotoViewerComponent);
    return PhotoViewerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/remove-dialog/remove-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/remove-dialog/remove-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <h6>Are You Sure You Want to remove This Picture ?</h6>\n    <div>\n        <span>\n          <button mat-raised-button style='background:green' (click)='onNoClick(data)'  color=\"warn\">Delete</button>          \n      </span>\n        <span style=\"float:right\">\n          <button mat-raised-button (click)='onNoClick(false)'  color=\"warn\">Cancel</button>\n      </span>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/remove-dialog/remove-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var RemoveDialogComponent = (function () {
    function RemoveDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        console.log(data);
    }
    RemoveDialogComponent.prototype.ngOnInit = function () {
    };
    RemoveDialogComponent.prototype.onNoClick = function (data) {
        this.dialogRef.close(data);
    };
    RemoveDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-remove-dialog',
            template: __webpack_require__("../../../../../src/app/remove-dialog/remove-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/remove-dialog/remove-dialog.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogRef */], Object])
    ], RemoveDialogComponent);
    return RemoveDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map