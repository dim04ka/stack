(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");





class AppComponent {
    constructor() {
    }
    ngOnInit() { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _create_quest_create_quest_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-quest/create-quest.component */ "./src/app/create-quest/create-quest.component.ts");
/* harmony import */ var _view_create_quest_view_create_quest_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view-create-quest/view-create-quest.component */ "./src/app/view-create-quest/view-create-quest.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _redux_quest_reducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./redux/quest.reducer */ "./src/app/redux/quest.reducer.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _quest_details_quest_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./quest-details/quest-details.component */ "./src/app/quest-details/quest-details.component.ts");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/__ivy_ngcc__/fesm2015/ngx-quill.js");




















const routes = [
    { path: '', component: _view_create_quest_view_create_quest_component__WEBPACK_IMPORTED_MODULE_7__["ViewCreateQuestComponent"] },
    { path: 'create', component: _create_quest_create_quest_component__WEBPACK_IMPORTED_MODULE_6__["CreateQuestComponent"] },
    { path: 'question/:id', component: _quest_details_quest_details_component__WEBPACK_IMPORTED_MODULE_13__["QuestDetailsComponent"] },
    { path: 'error', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"] },
    { path: '**', redirectTo: '/error' }
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forRoot({ questPage: _redux_quest_reducer__WEBPACK_IMPORTED_MODULE_11__["default"] }),
            ngx_quill__WEBPACK_IMPORTED_MODULE_15__["QuillModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
        _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _create_quest_create_quest_component__WEBPACK_IMPORTED_MODULE_6__["CreateQuestComponent"],
        _view_create_quest_view_create_quest_component__WEBPACK_IMPORTED_MODULE_7__["ViewCreateQuestComponent"],
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"],
        _quest_details_quest_details_component__WEBPACK_IMPORTED_MODULE_13__["QuestDetailsComponent"],
        _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_14__["FilterPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreRootModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_15__["QuillModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                    _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                    _create_quest_create_quest_component__WEBPACK_IMPORTED_MODULE_6__["CreateQuestComponent"],
                    _view_create_quest_view_create_quest_component__WEBPACK_IMPORTED_MODULE_7__["ViewCreateQuestComponent"],
                    _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"],
                    _quest_details_quest_details_component__WEBPACK_IMPORTED_MODULE_13__["QuestDetailsComponent"],
                    _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_14__["FilterPipe"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forRoot({ questPage: _redux_quest_reducer__WEBPACK_IMPORTED_MODULE_11__["default"] }),
                    ngx_quill__WEBPACK_IMPORTED_MODULE_15__["QuillModule"].forRoot()
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/create-quest/create-quest.component.ts":
/*!********************************************************!*\
  !*** ./src/app/create-quest/create-quest.component.ts ***!
  \********************************************************/
/*! exports provided: CreateQuestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateQuestComponent", function() { return CreateQuestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _question_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../question.service */ "./src/app/question.service.ts");
/* harmony import */ var _redux_quest_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/quest.action */ "./src/app/redux/quest.action.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/__ivy_ngcc__/fesm2015/ngx-quill.js");











function CreateQuestComponent_div_8_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041F\u043E\u043B\u0435 \u043D\u0435 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateQuestComponent_div_8_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043A\u043E\u0440\u043E\u0447\u0435 15 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432. \u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C \u0432\u0432\u0435\u0441\u0442\u0438 ", ctx_r7.form.get("title").errors.minlength.actualLength, " \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432 ");
} }
function CreateQuestComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateQuestComponent_div_8_span_1_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateQuestComponent_div_8_span_2_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.form.get("title").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.form.get("title").errors.minlength);
} }
function CreateQuestComponent_div_13_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0442\u0435\u043B\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateQuestComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateQuestComponent_div_13_span_1_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.form.get("disc").errors.required);
} }
class CreateQuestComponent {
    constructor(store, router, QCounter) {
        this.store = store;
        this.router = router;
        this.QCounter = QCounter;
    }
    ngOnInit() {
        this.counter = this.QCounter.counter;
        //console.log(this.counter)
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            disc: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])
        });
    }
    sendForm() {
        const quest = {
            id: this.counter,
            vote: 12,
            answer: 3,
            impressions: 18,
            title: this.form.value.title,
            disc: this.form.value.disc,
            tags: ['html', 'js', 'react', 'css3', 'html5', 'scss', 'angular', 'vue'],
            date: new Date(),
            author: `Dim04ka ${this.counter}`,
            authorRating: 298
        };
        this.store.dispatch(new _redux_quest_action__WEBPACK_IMPORTED_MODULE_2__["AddQuest"](quest));
        this.QCounter.increase();
        this.form.reset();
        this.router.navigate(['/']);
    }
}
CreateQuestComponent.ɵfac = function CreateQuestComponent_Factory(t) { return new (t || CreateQuestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_question_service__WEBPACK_IMPORTED_MODULE_1__["QuestionInc"])); };
CreateQuestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateQuestComponent, selectors: [["app-create-quest"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_question_service__WEBPACK_IMPORTED_MODULE_1__["QuestionService"]])], decls: 19, vars: 8, consts: [[1, "wrapper"], [3, "formGroup", "ngSubmit"], ["type", "text", "placeholder", "\u0412 \u0447\u0451\u043C \u0437\u0430\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u0432\u0430\u0448 \u0432\u043E\u043F\u0440\u043E\u0441? \u0411\u0443\u0434\u044C\u0442\u0435 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B.", "formControlName", "title", 1, "input-title", "input-title-validate"], ["class", "validator", 4, "ngIf"], ["formControlName", "disc"], ["type", "text", "placeholder", "\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, [jquery wpf \u0430\u043B\u0433\u043E\u0440\u0438\u0442\u043C]", 1, "input-title"], ["type", "submit", "value", "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441", 1, "button", 3, "disabled"], [1, "validator"], [4, "ngIf"]], template: function CreateQuestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0417\u0430\u0434\u0430\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreateQuestComponent_Template_form_ngSubmit_3_listener($event) { return ctx.sendForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CreateQuestComponent_div_8_Template, 3, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u0447\u0430\u0441\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "quill-editor", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CreateQuestComponent_div_13_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u041C\u0435\u0442\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("warning", ctx.form.get("title").invalid && ctx.form.get("title").touched && ctx.form.get("title").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("title").invalid && ctx.form.get("title").touched && ctx.form.get("title").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("warning", ctx.form.get("disc").invalid && ctx.form.get("disc").touched && ctx.form.get("disc").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.get("disc").invalid && ctx.form.get("disc").touched && ctx.form.get("disc").dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.form.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ngx_quill__WEBPACK_IMPORTED_MODULE_7__["QuillEditorComponent"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n.wrapper[_ngcontent-%COMP%]   .input-title[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n  padding: 0.6em 0.7em;\n  border: 1px solid #b1abab;\n  border-radius: 3px;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.wrapper[_ngcontent-%COMP%]   .input-title[_ngcontent-%COMP%]:focus {\n  border: 1px solid #6cbbf7;\n  box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);\n}\n.wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 20px;\n  display: block;\n}\n.wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-weight: 700;\n  cursor: pointer;\n}\n.wrapper[_ngcontent-%COMP%]   .textarea[_ngcontent-%COMP%] {\n  height: 200px;\n  line-height: 1.3;\n  width: 100%;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.wrapper[_ngcontent-%COMP%]   .textarea[_ngcontent-%COMP%]:focus {\n  border: 1px solid #6cbbf7;\n  box-shadow: 0 0 0 4px rgba(0, 149, 255, 0.15);\n}\n.wrapper[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #0095ff;\n  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.4);\n  border-radius: 3px;\n  font-size: 13px;\n  border: none;\n  padding: 10px;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  text-decoration: none;\n}\n.wrapper[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover {\n  background-color: #0077cc;\n  cursor: pointer;\n}\n.wrapper[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  background-color: #8a8e90;\n}\n.input-title-validate.ng-invalid.ng-touched.ng-dirty[_ngcontent-%COMP%], .textarea-validate.ng-invalid.ng-touched.ng-dirty[_ngcontent-%COMP%] {\n  border: 1px solid red !important;\n}\n.input-title-validate.ng-valid.ng-touched.ng-dirty[_ngcontent-%COMP%], .textarea-validate.ng-valid.ng-touched.ng-dirty[_ngcontent-%COMP%] {\n  border: 1px solid green !important;\n}\n.validator[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: red;\n}\n.warning[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLXF1ZXN0L0Y6XFxXT1JLX0JJWlVQX1NUVURJT1xc0KHQsNC50YLRi1xcYW5ndWxhclxcbXktYXBwL3NyY1xcYXBwXFxjcmVhdGUtcXVlc3RcXGNyZWF0ZS1xdWVzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY3JlYXRlLXF1ZXN0L2NyZWF0ZS1xdWVzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjtBRENFO0VBQ0UsbUJBQUE7QUNDSjtBREVFO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFFQSw0QkFBQTtFQUFBLG9CQUFBO0FDREo7QURHSTtFQUNFLHlCQUFBO0VBQ0EsNkNBQUE7QUNETjtBREtFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNISjtBRE1FO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDSko7QURPRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0FDTEo7QURPSTtFQUNFLHlCQUFBO0VBQ0EsNkNBQUE7QUNMTjtBRFNFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0RBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7RUFDQSxxQkFBQTtBQ1BKO0FEU0k7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUNQTjtBRFVJO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtBQ1JOO0FEZUU7O0VBQ0UsZ0NBQUE7QUNYSjtBRGFFOztFQUNFLGtDQUFBO0FDVko7QURhQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0FDVkY7QURhQTtFQUNFLFVBQUE7QUNWRiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1xdWVzdC9jcmVhdGUtcXVlc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgcGFkZGluZzogMjRweDtcclxuXHJcbiAgaDEge1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICB9XHJcblxyXG4gIC5pbnB1dC10aXRsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IC42ZW0gLjdlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiMWFiYWI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzZjYmJmNztcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDAgNHB4IHJnYmEoMCwxNDksMjU1LC4xNSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGxhYmVsIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgbGFiZWwgZGl2IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAudGV4dGFyZWEge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM2Y2JiZjc7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDRweCByZ2JhKDAsMTQ5LDI1NSwuMTUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk1ZmY7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIDAgcmdiYSgyNTUsMjU1LDI1NSwuNCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzdjYztcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGE4ZTkwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmlucHV0LXRpdGxlLXZhbGlkYXRlLFxyXG4udGV4dGFyZWEtdmFsaWRhdGUge1xyXG4gICYubmctaW52YWxpZC5uZy10b3VjaGVkLm5nLWRpcnR5IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAmLm5nLXZhbGlkLm5nLXRvdWNoZWQubmctZGlydHkge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW4gIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLnZhbGlkYXRvciB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi53YXJuaW5nIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbiIsIi53cmFwcGVyIHtcbiAgcGFkZGluZzogMjRweDtcbn1cbi53cmFwcGVyIGgxIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi53cmFwcGVyIC5pbnB1dC10aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAuNmVtIDAuN2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjFhYmFiO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLndyYXBwZXIgLmlucHV0LXRpdGxlOmZvY3VzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzZjYmJmNztcbiAgYm94LXNoYWRvdzogMCAwIDAgNHB4IHJnYmEoMCwgMTQ5LCAyNTUsIDAuMTUpO1xufVxuLndyYXBwZXIgbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLndyYXBwZXIgbGFiZWwgZGl2IHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLndyYXBwZXIgLnRleHRhcmVhIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLndyYXBwZXIgLnRleHRhcmVhOmZvY3VzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzZjYmJmNztcbiAgYm94LXNoYWRvdzogMCAwIDAgNHB4IHJnYmEoMCwgMTQ5LCAyNTUsIDAuMTUpO1xufVxuLndyYXBwZXIgLmJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTVmZjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi53cmFwcGVyIC5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3N2NjO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ud3JhcHBlciAuYnV0dG9uOmRpc2FibGVkIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhhOGU5MDtcbn1cblxuLmlucHV0LXRpdGxlLXZhbGlkYXRlLm5nLWludmFsaWQubmctdG91Y2hlZC5uZy1kaXJ0eSxcbi50ZXh0YXJlYS12YWxpZGF0ZS5uZy1pbnZhbGlkLm5nLXRvdWNoZWQubmctZGlydHkge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQgIWltcG9ydGFudDtcbn1cbi5pbnB1dC10aXRsZS12YWxpZGF0ZS5uZy12YWxpZC5uZy10b3VjaGVkLm5nLWRpcnR5LFxuLnRleHRhcmVhLXZhbGlkYXRlLm5nLXZhbGlkLm5nLXRvdWNoZWQubmctZGlydHkge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbiAhaW1wb3J0YW50O1xufVxuXG4udmFsaWRhdG9yIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogcmVkO1xufVxuXG4ud2FybmluZyB7XG4gIGNvbG9yOiByZWQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateQuestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-quest',
                templateUrl: './create-quest.component.html',
                styleUrls: ['./create-quest.component.scss'],
                providers: [_question_service__WEBPACK_IMPORTED_MODULE_1__["QuestionService"]]
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _question_service__WEBPACK_IMPORTED_MODULE_1__["QuestionInc"] }]; }, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 93, vars: 0, consts: [[1, "footer"], [1, "container"], [1, "footer-content"], [1, "footer-item"], [1, "footer-title"], ["href", "#"], ["href", "#", 1, "network"], [1, "footer-item", "footer-item__copyr"], [1, "footer-group"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Stack Overflow \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0422\u0443\u0440");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0421\u043F\u0440\u0430\u0432\u043A\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0427\u0430\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0430\u043C\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0437\u044B\u0432");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u041E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u044B\u0439 \u0434\u0438\u0437\u0430\u0439\u043D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Stack Overflow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Stack Overflow Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u0412\u0430\u043A\u0430\u043D\u0441\u0438\u0438 \u0434\u043B\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u0432");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u0423\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u044F \u0432 \u0421\u041C\u0418");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Stack Exchange ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "network");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Life / Arts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Culture / Recreation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Science");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\u0411\u043B\u043E\u0433");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "\u0422\u0432\u0438\u0442\u0442\u0435\u0440");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "LinkedIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " \u0434\u0438\u0437\u0430\u0439\u043D \u0441\u0430\u0439\u0442\u0430 / \u043B\u043E\u0433\u043E\u0442\u0438\u043F \u00A9 2020 Stack Exchange Inc; \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u043F\u043E\u043F\u0430\u0434\u0430\u0435\u0442 \u043F\u043E\u0434 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\n  background-color: #242729;\n}\n.footer-content[_ngcontent-%COMP%] {\n  padding: 24px 12px;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n@media (min-width: 480px) {\n  .footer-content[_ngcontent-%COMP%] {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n  }\n}\n.footer-item[_ngcontent-%COMP%] {\n  padding-right: 12px;\n  padding-bottom: 24px;\n}\n@media (min-width: 768px) {\n  .footer-item[_ngcontent-%COMP%] {\n    width: 25%;\n  }\n}\n@media (min-width: 768px) {\n  .footer-item__copyr[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n}\n@media (min-width: 768px) {\n  .footer-item__copyr[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: auto;\n  }\n}\n.footer-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #848d95;\n  font-size: 11px;\n}\n.footer-item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n.footer-item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #848d95;\n  font-size: 11px;\n  line-height: 12px;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.footer-item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #edf1f4;\n}\n.footer-item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .network[_ngcontent-%COMP%]::after {\n  content: \">\";\n  max-width: 12px;\n  width: 12px;\n  height: 12px;\n  background-color: rgba(132, 141, 149, 0.35);\n  opacity: 0.5;\n  border-radius: 3px;\n  padding: 1px 2px;\n  font-size: 10px;\n  margin-left: 5px;\n}\n.footer-group[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.footer-group[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 10px;\n}\n.footer-title[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-bottom: 12px;\n}\n.footer-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #bbc0c4;\n  text-decoration: none;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  text-transform: uppercase;\n}\n.footer-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #edf1f4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0Y6XFxXT1JLX0JJWlVQX1NUVURJT1xc0KHQsNC50YLRi1xcYW5ndWxhclxcbXktYXBwL3NyY1xcYXBwXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0Y7QURDRTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0NKO0FEQ0k7RUFORjtJQU9JLDhCQUFBO0lBQUEsNkJBQUE7WUFBQSxtQkFBQTtJQUNBLHlCQUFBO1lBQUEsOEJBQUE7RUNFSjtBQUNGO0FEQ0U7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0FDQ0o7QURDSTtFQUpGO0lBS0ksVUFBQTtFQ0VKO0FBQ0Y7QURFTTtFQUZGO0lBR0ksb0JBQUE7SUFBQSxhQUFBO0lBQ0EsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0VDQ047QUFDRjtBREVRO0VBREY7SUFFSSxnQkFBQTtFQ0NSO0FBQ0Y7QURHSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDRE47QURJSTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7QUNGTjtBRE1RO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBRUEsNEJBQUE7RUFBQSxvQkFBQTtBQ0xWO0FET1U7RUFDRSxjQUFBO0FDTFo7QURXVTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDVFo7QURpQkU7RUFDRSxxQkFBQTtBQ2ZKO0FEaUJJO0VBQ0Usa0JBQUE7QUNmTjtBRG9CRTtFQUNFLFNBQUE7RUFDQSxtQkFBQTtBQ2xCSjtBRG9CSTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7RUFDQSx5QkFBQTtBQ2xCTjtBRG9CTTtFQUNFLGNBQUE7QUNsQlIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjcyOTtcclxuXHJcbiAgJi1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDI0cHggMTJweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIEBtZWRpYShtaW4td2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYtaXRlbSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI0cHg7XHJcblxyXG4gICAgQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgd2lkdGg6IDI1JTtcclxuICAgIH1cclxuXHJcbiAgICAmX19jb3B5ciB7XHJcblxyXG4gICAgICBAbWVkaWEobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGNvbG9yOiAjODQ4ZDk1O1xyXG4gICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB9XHJcblxyXG4gICAgdWwge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuXHJcbiAgICAgIGxpIHtcclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogIzg0OGQ5NTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG5cclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZWRmMWY0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5ldHdvcmsge1xyXG5cclxuICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogXCI+XCI7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzIsMTQxLDE0OSwuMzUpO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAuNTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcHggMnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgJi1ncm91cCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gICYtdGl0bGUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuXHJcbiAgICBhe1xyXG4gICAgICBjb2xvcjogI2JiYzBjNDtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICNlZGYxZjQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI3Mjk7XG59XG4uZm9vdGVyLWNvbnRlbnQge1xuICBwYWRkaW5nOiAyNHB4IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkge1xuICAuZm9vdGVyLWNvbnRlbnQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG59XG4uZm9vdGVyLWl0ZW0ge1xuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuZm9vdGVyLWl0ZW0ge1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuZm9vdGVyLWl0ZW1fX2NvcHlyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuZm9vdGVyLWl0ZW1fX2NvcHlyIHAge1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gIH1cbn1cbi5mb290ZXItaXRlbSBwIHtcbiAgY29sb3I6ICM4NDhkOTU7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cbi5mb290ZXItaXRlbSB1bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuLmZvb3Rlci1pdGVtIHVsIGxpIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjODQ4ZDk1O1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbi5mb290ZXItaXRlbSB1bCBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICNlZGYxZjQ7XG59XG4uZm9vdGVyLWl0ZW0gdWwgbGkgLm5ldHdvcms6OmFmdGVyIHtcbiAgY29udGVudDogXCI+XCI7XG4gIG1heC13aWR0aDogMTJweDtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzIsIDE0MSwgMTQ5LCAwLjM1KTtcbiAgb3BhY2l0eTogMC41O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDFweCAycHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5mb290ZXItZ3JvdXAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uZm9vdGVyLWdyb3VwOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uZm9vdGVyLXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuLmZvb3Rlci10aXRsZSBhIHtcbiAgY29sb3I6ICNiYmMwYzQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uZm9vdGVyLXRpdGxlIGE6aG92ZXIge1xuICBjb2xvcjogI2VkZjFmNDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _question_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../question.service */ "./src/app/question.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





class HeaderComponent {
    constructor(searchInput) {
        this.searchInput = searchInput;
        this.search = '';
        this.showMobileMenu = false;
        this.showSearchBlock = false;
        this.showSearchBlockHint = false;
    }
    ngOnInit() {
    }
    mobileMenu() {
        this.showMobileMenu = !this.showMobileMenu;
        this.showSearchBlock = false;
    }
    searchBlock() {
        this.showSearchBlock = !this.showSearchBlock;
        this.showMobileMenu = false;
        this.showSearchBlockHint = true;
    }
    searchFormFocus() {
        this.showSearchBlockHint = true;
    }
    searchFormBlur() {
        this.showSearchBlockHint = false;
    }
    searchUpdate() {
        this.searchInput.setSearch(this.search);
        if (this.showSearchBlockHint) {
            this.searchFormBlur();
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_question_service__WEBPACK_IMPORTED_MODULE_1__["QuestSearch"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 75, vars: 7, consts: [[1, "container"], [1, "header-wrap"], [1, "header-btn", 3, "click"], [1, "header-menu__mobile"], [1, "active"], ["routerLink", ""], ["href", "#"], ["routerLink", "/", 1, "header-logo"], ["action", "#", 1, "header-form"], [1, "header-search__wrap"], ["type", "text", "placeholder", "\u041F\u043E\u0438\u0441\u043A ...", "name", "searchInput", 1, "header-search", 3, "ngModel", "ngModelChange", "input", "focus", "blur"], [1, "header-quest"], [1, "header-wrapper"], [1, "header-question"], [1, "header-panel", "panel"], ["href", "#", 1, "panel-item", "panel-item__search", 3, "click"], ["href", "#", 1, "panel-item", "panel-item__avatar"], [1, "panel-item__stat"], [1, "rating"], [1, "silver"], [1, "bronze"], ["href", "#", 1, "panel-item", "panel-item__driver"], ["href", "#", 1, "panel-item", "panel-item__cup"], ["href", "#", 1, "panel-item", "panel-item__question"], ["href", "#", 1, "panel-item", "panel-item__message"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_3_listener($event) { return ctx.mobileMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0412\u043E\u043F\u0440\u043E\u0441\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u041C\u0435\u0442\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeaderComponent_Template_input_ngModelChange_22_listener($event) { return ctx.search = $event; })("input", function HeaderComponent_Template_input_input_22_listener($event) { return ctx.searchUpdate(); })("focus", function HeaderComponent_Template_input_focus_22_listener($event) { return ctx.searchFormFocus(); })("blur", function HeaderComponent_Template_input_blur_22_listener($event) { return ctx.searchFormBlur(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " [\u043C\u0435\u0442\u043A\u0430] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u043F\u043E\u0438\u0441\u043A \u043F\u043E \u043C\u0435\u0442\u043A\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " user:1234 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u043F\u043E\u0438\u0441\u043A \u043F\u043E \u0430\u0432\u0442\u043E\u0440\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " \"\u0441\u043B\u043E\u0432\u0430 \u0432 \u043A\u0430\u0432\u044B\u0447\u043A\u0430\u0445\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u0442\u043E\u0447\u043D\u0430\u044F \u0444\u0440\u0430\u0437\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " answers:0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u043D\u0435\u043E\u0442\u0432\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " score:3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0441 \u0440\u0435\u0439\u0442\u0438\u043D\u0433\u043E\u043C 3+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " isaccepted:yes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u043F\u043E\u0438\u0441\u043A \u043F\u043E \u0441\u0442\u0430\u0442\u0443\u0441\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u0417\u0430\u0434\u0430\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\u0421\u043F\u0440\u0430\u0432\u043A\u0430 \u043F\u043E \u043F\u043E\u0438\u0441\u043A\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_56_listener($event) { return ctx.searchBlock(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "284");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "14");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("header-menu__mobile-active", ctx.showMobileMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("header-form-active", ctx.showSearchBlock);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("header-wrapper-active", ctx.showSearchBlockHint);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["body[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\n}\n\n.container[_ngcontent-%COMP%] {\n  max-width: 1180px;\n  margin: 0 auto;\n}\n\n@media (max-width: 1180px) {\n  .container[_ngcontent-%COMP%] {\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n}\n\nheader[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 8px rgba(12, 13, 14, 0.15);\n  background-color: #fafafb;\n  position: fixed;\n  z-index: 999;\n  width: 100%;\n  border-top: 3px solid #f48024;\n}\n\n.header-btn[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 47px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  position: relative;\n}\n\n.header-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f1f1f1;\n  cursor: pointer;\n}\n\n@media (min-width: 768px) {\n  .header-btn[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.header-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  width: 18px;\n  height: 2px;\n  background-color: black;\n  opacity: 0.5;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  position: relative;\n}\n\n.header-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 18px;\n  height: 2px;\n  background-color: black;\n  display: block;\n  position: absolute;\n  top: -6px;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n\n.header-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 18px;\n  height: 2px;\n  background-color: black;\n  display: block;\n  position: absolute;\n  top: 6px;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n\n.header-btn[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n\n.header-btn[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%]::before {\n  top: 0;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n\n.header-btn[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%]::after {\n  top: 0;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n\n.header-menu__mobile[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  top: 46px;\n  left: 0;\n  border-left: 1px solid #e4e6e8;\n  border-right: 1px solid #e4e6e8;\n  border-bottom: 1px solid #e4e6e8;\n  background-color: white;\n  width: 250px;\n  box-shadow: 0 2px 2px rgba(12, 13, 14, 0.2);\n}\n\n.header-menu__mobile-active[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.header-menu__mobile[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 20px 0;\n  margin: 0;\n}\n\n.header-menu__mobile[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: block;\n  padding: 3px 0;\n}\n\n.header-menu__mobile[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: Arial;\n  font-size: 13px;\n  color: black;\n  text-decoration: none;\n  padding: 4px 4px 4px 8px;\n  opacity: 0.9;\n}\n\n.header-menu__mobile[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  border-right: 3px solid #f48024;\n  background-color: #eff0f1;\n}\n\n.header-menu__mobile[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.header-logo[_ngcontent-%COMP%] {\n  background-image: url('sprites.svg');\n  display: block;\n  width: 35px;\n  height: 45px;\n  background-position: 7px 100%;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n\n.header-logo[_ngcontent-%COMP%]:hover {\n  background-color: #f1f1f1;\n}\n\n@media (min-width: 768px) {\n  .header-logo[_ngcontent-%COMP%] {\n    min-width: 170px;\n    height: auto;\n    background-position: 7px 101%;\n  }\n}\n\n.panel[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  margin-left: auto;\n}\n\n.panel-item[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 0 8px;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n}\n\n.panel-item[_ngcontent-%COMP%]:hover {\n  background-color: #f1f1f1;\n}\n\n.panel-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background-position: center;\n  background-size: contain;\n  width: 20px;\n  height: 20px;\n  display: block;\n  opacity: 0.5;\n}\n\n.panel-item__stat[_ngcontent-%COMP%] {\n  display: none;\n  color: #535a60;\n  font-size: 12px;\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n}\n\n.panel-item__stat[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%] {\n  padding-left: 8px;\n  font-weight: bold;\n  color: #535a60;\n}\n\n.panel-item__stat[_ngcontent-%COMP%]   .silver[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  color: #8c9298;\n  position: relative;\n}\n\n.panel-item__stat[_ngcontent-%COMP%]   .silver[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 6px;\n  height: 6px;\n  background-color: #b9bcbf;\n  border-radius: 50%;\n  position: absolute;\n  top: 6px;\n  left: 6px;\n}\n\n.panel-item__stat[_ngcontent-%COMP%]   .bronze[_ngcontent-%COMP%] {\n  padding-left: 14px;\n  color: #c38b5f;\n  position: relative;\n}\n\n.panel-item__stat[_ngcontent-%COMP%]   .bronze[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 6px;\n  height: 6px;\n  background-color: #c38b5f;\n  border-radius: 50%;\n  position: absolute;\n  top: 6px;\n  left: 6px;\n}\n\n@media (min-width: 768px) {\n  .panel-item__stat[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n  }\n}\n\n.panel-item__search[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background-image: url('lupa.svg');\n}\n\n@media (min-width: 768px) {\n  .panel-item__search[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.panel-item__avatar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background-image: url('avatar.png');\n}\n\n.panel-item__driver[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background-image: url('driver.svg');\n}\n\n.panel-item__cup[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background-image: url('cup.svg');\n}\n\n.panel-item__question[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background-image: url('question.svg');\n}\n\n.panel-item__message[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background-image: url('message.svg');\n}\n\n.header-wrap[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n}\n\n.header-form[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  left: 0;\n  top: 50px;\n  width: 100%;\n  padding: 8px 12px;\n  background: #eff0f1;\n}\n\n.header-form-active[_ngcontent-%COMP%] {\n  display: block;\n}\n\n@media (min-width: 768px) {\n  .header-form[_ngcontent-%COMP%] {\n    display: block;\n    position: static;\n    background: transparent;\n  }\n}\n\n.header-search[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 30px;\n  padding: 5px;\n  padding-left: 32px;\n  border-radius: 3px;\n  background-position: 8px center;\n  border: 1px solid #c1bdbd;\n}\n\n.header-search__wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.header-search__wrap[_ngcontent-%COMP%]::before {\n  content: \"\";\n  background-image: url('lupa.svg');\n  background-repeat: no-repeat;\n  background-size: 15px 15px;\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  opacity: 0.4;\n  top: 8px;\n  left: 12px;\n  z-index: 1;\n}\n\n.header-search[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  opacity: 0.5;\n}\n\n.header-search[_ngcontent-%COMP%]::-moz-placeholder {\n  opacity: 0.5;\n}\n\n.header-search[_ngcontent-%COMP%]::-ms-input-placeholder {\n  opacity: 0.5;\n}\n\n.header-search[_ngcontent-%COMP%]::placeholder {\n  opacity: 0.5;\n}\n\n.header-quest[_ngcontent-%COMP%] {\n  \n  position: fixed;\n  width: 100%;\n  left: 0;\n  top: 97px;\n  padding: 0 12px;\n}\n\n@media (min-width: 768px) {\n  .header-quest[_ngcontent-%COMP%] {\n    top: 50px;\n  }\n}\n\n.header-quest[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 12px;\n  margin: 0;\n  list-style: none;\n  border-bottom: 1px solid #d8d2d2;\n}\n\n.header-quest[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n.header-quest[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #9fa6ad;\n  padding-left: 5px;\n}\n\n.header-quest[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 8px;\n}\n\n.header-wrapper[_ngcontent-%COMP%] {\n  border: 1px solid #e4e6e8;\n  background-color: white;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);\n  display: none;\n}\n\n.header-wrapper-active[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.header-question[_ngcontent-%COMP%] {\n  padding: 12px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.header-question[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0077cc;\n  text-decoration: none;\n  font-size: 11px;\n}\n\n.header-question[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #39739d;\n  background-color: #e1ecf4;\n  border-color: #7aa7c7;\n  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.7);\n  padding: 6px;\n  border-radius: 5px;\n  font-size: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0Y6XFxXT1JLX0JJWlVQX1NUVURJT1xc0KHQsNC50YLRi1xcYW5ndWxhclxcbXktYXBwL3NyY1xcYXBwXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyREFBQTtBQ0NGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FDQUY7O0FERUU7RUFKRjtJQUtJLGtCQUFBO0lBQ0EsbUJBQUE7RUNDRjtBQUNGOztBREVBO0VBQ0UsNENBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURDRTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVFO0VBYkY7SUFjSSxhQUFBO0VDQ0Y7QUFDRjs7QURDRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENJO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7RUFBQSxvQkFBQTtBQ0NOOztBREVJO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsNEJBQUE7RUFBQSxvQkFBQTtBQ0FOOztBRElFO0VBQ0UsNkJBQUE7QUNGSjs7QURJSTtFQUNFLE1BQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0FDRk47O0FES0k7RUFDRSxNQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtBQ0hOOztBRFNBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLDJDQUFBO0FDTkY7O0FEUUU7RUFDRSxjQUFBO0FDTko7O0FEU0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FDUEo7O0FEU0k7RUFDRSxjQUFBO0VBQ0EsY0FBQTtBQ1BOOztBRFVNO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0FDUlI7O0FEY0U7RUFDRSwrQkFBQTtFQUNBLHlCQUFBO0FDWko7O0FEY0k7RUFDRSxpQkFBQTtBQ1pOOztBRG1CQTtFQUNFLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0FDaEJGOztBRGtCRTtFQUNFLHlCQUFBO0FDaEJKOztBRG1CRTtFQVpGO0lBYUksZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsNkJBQUE7RUNoQkY7QUFDRjs7QURxQkE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxpQkFBQTtBQ2xCRjs7QURvQkU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtBQ2xCSjs7QURvQkk7RUFDRSx5QkFBQTtBQ2xCTjs7QURxQkk7RUFDRSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ25CTjs7QURzQkk7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0FDcEJOOztBRHNCTTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDcEJSOztBRHVCTTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDckJSOztBRHVCUTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDckJWOztBRDBCTTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDeEJSOztBRDBCUTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDeEJWOztBRDhCTTtFQWpERjtJQWtESSxvQkFBQTtJQUFBLGFBQUE7RUMzQk47QUFDRjs7QURnQ007RUFDRSxpQ0FBQTtBQzlCUjs7QURnQ1E7RUFIRjtJQUlJLGFBQUE7RUM3QlI7QUFDRjs7QURtQ007RUFDRSxtQ0FBQTtBQ2pDUjs7QUR1Q007RUFDRSxtQ0FBQTtBQ3JDUjs7QUQ0Q007RUFDRSxnQ0FBQTtBQzFDUjs7QURnRE07RUFDRSxxQ0FBQTtBQzlDUjs7QURvRE07RUFDRSxvQ0FBQTtBQ2xEUjs7QUQyREU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7QUN4REo7O0FEMkRFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDekRKOztBRDJESTtFQUNFLGNBQUE7QUN6RE47O0FENkRJO0VBZEY7SUFlSSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSx1QkFBQTtFQzFESjtBQUNGOztBRDZERTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0FDM0RKOztBRDZESTtFQUNFLGtCQUFBO0FDM0ROOztBRDZETTtFQUNFLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQzNEUjs7QURnRUU7RUFDRSxZQUFBO0FDOURKOztBRDZERTtFQUNFLFlBQUE7QUM5REo7O0FENkRFO0VBQ0UsWUFBQTtBQzlESjs7QUQ2REU7RUFDRSxZQUFBO0FDOURKOztBRGlFRTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUMvREo7O0FEaUVJO0VBUkY7SUFTSSxTQUFBO0VDOURKO0FBQ0Y7O0FEaUVJO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FDL0ROOztBRGlFTTtFQUNFLGVBQUE7QUMvRFI7O0FEaUVRO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDL0RWOztBRG1FTTtFQUNFLGtCQUFBO0FDakVSOztBRHNFRTtFQUNFLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQ0FBQTtFQU1BLGFBQUE7QUN6RUo7O0FEMkVJO0VBQ0UsY0FBQTtBQ3pFTjs7QUQ2RUU7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQzNFSjs7QUQ2RUk7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDM0VOOztBRDhFSTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0RBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDNUVOIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHksIGh0bWwge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLFwiSGVsdmV0aWNhIE5ldWVcIixIZWx2ZXRpY2Esc2Fucy1zZXJpZjtcclxuXHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogMTE4MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTE4MHB4KSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuaGVhZGVye1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDhweCByZ2JhKDEyLDEzLDE0LC4xNSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCAjZjQ4MDI0O1xyXG59XHJcblxyXG4uaGVhZGVyLWJ0biB7XHJcbiAgd2lkdGg6IDQ0cHg7XHJcbiAgaGVpZ2h0OiA0N3B4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIEBtZWRpYShtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIG9wYWNpdHk6IC41O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICB3aWR0aDogMThweDtcclxuICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IC02cHg7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICB3aWR0aDogMThweDtcclxuICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDZweDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNwYW4uYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5oZWFkZXItbWVudV9fbW9iaWxlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDQ2cHg7XHJcbiAgbGVmdDogMDtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlNGU2ZTg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2U0ZTZlODtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZTZlODtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IHJnYmEoMTIsMTMsMTQsLjIpO1xyXG5cclxuICAmLWFjdGl2ZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgbGkge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgcGFkZGluZzogM3B4IDA7XHJcblxyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDRweCA0cHggNHB4IDhweDtcclxuICAgICAgICBvcGFjaXR5OiAuOTtcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hY3RpdmUge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgI2Y0ODAyNDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmYwZjE7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbn1cclxuXHJcblxyXG4uaGVhZGVyLWxvZ28ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2ltZy9zcHJpdGVzLnN2Z1wiKTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMzVweDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogN3B4IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIG1pbi13aWR0aDogMTcwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA3cHggMTAxJTtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuLnBhbmVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cclxuICAmLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgOHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiBub25lO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG9wYWNpdHk6IC41O1xyXG4gICAgfVxyXG5cclxuICAgICZfX3N0YXQge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICBjb2xvcjogIzUzNWE2MDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogbm9uZTtcclxuXHJcbiAgICAgIC5yYXRpbmcge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAjNTM1YTYwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2lsdmVyIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgY29sb3I6ICM4YzkyOTg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgIHdpZHRoOiA2cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDZweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiOWJjYmY7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDZweDtcclxuICAgICAgICAgIGxlZnQ6IDZweDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYnJvbnplIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6ICNjMzhiNWY7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgIHdpZHRoOiA2cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDZweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjMzhiNWY7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDZweDtcclxuICAgICAgICAgIGxlZnQ6IDZweDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fc2VhcmNoe1xyXG5cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vaW1nL2x1cGEuc3ZnXCIpO1xyXG5cclxuICAgICAgICBAbWVkaWEobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19hdmF0YXIge1xyXG5cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vaW1nL2F2YXRhci5wbmdcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19kcml2ZXIge1xyXG5cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vaW1nL2RyaXZlci5zdmdcIik7XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fY3VwIHtcclxuXHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2ltZy9jdXAuc3ZnXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fcXVlc3Rpb24ge1xyXG5cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vaW1nL3F1ZXN0aW9uLnN2Z1wiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX21lc3NhZ2Uge1xyXG5cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vaW1nL21lc3NhZ2Uuc3ZnXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLmhlYWRlciB7XHJcblxyXG4gICYtd3JhcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuXHJcbiAgJi1mb3JtIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiA1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcclxuICAgIGJhY2tncm91bmQ6ICNlZmYwZjE7XHJcblxyXG4gICAgJi1hY3RpdmUge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcblxyXG4gICAgQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi1zZWFyY2gge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA4cHggY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2MxYmRiZDtcclxuXHJcbiAgICAmX193cmFwIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1nL2x1cGEuc3ZnJyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDE1cHggMTVweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIG9wYWNpdHk6IC40O1xyXG4gICAgICAgIHRvcDogOHB4O1xyXG4gICAgICAgIGxlZnQ6IDEycHg7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi1zZWFyY2g6OnBsYWNlaG9sZGVyIHtcclxuICAgIG9wYWNpdHk6IC41O1xyXG4gIH1cclxuXHJcbiAgJi1xdWVzdCB7XHJcbiAgICAvKiBkaXNwbGF5OiBub25lOyAqL1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiA5N3B4O1xyXG4gICAgcGFkZGluZzogMCAxMnB4O1xyXG5cclxuICAgIEBtZWRpYShtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIHRvcDogNTBweDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdWwge1xyXG4gICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDhkMmQyO1xyXG5cclxuICAgICAgbGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBjb2xvcjogIzlmYTZhZDtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgbGk6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLXdyYXBwZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U0ZTZlODtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDJweCByZ2JhKDAsMCwwLC41KTtcclxuXHJcbiAgICAvL0BtZWRpYShtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAvLyAgZGlzcGxheTogbm9uZTtcclxuICAgIC8vfVxyXG5cclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gICAgJi1hY3RpdmUge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYtcXVlc3Rpb24ge1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIGNvbG9yOiAjMDA3N2NjO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBjb2xvcjogIzM5NzM5ZDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UxZWNmNDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjN2FhN2M3O1xyXG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIDAgcmdiYSgyNTUsMjU1LDI1NSwuNyk7XHJcbiAgICAgIHBhZGRpbmc6IDZweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCJib2R5LCBodG1sIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDExODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE4MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICB9XG59XG5cbmhlYWRlciB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDhweCByZ2JhKDEyLCAxMywgMTQsIDAuMTUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZiO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCAjZjQ4MDI0O1xufVxuXG4uaGVhZGVyLWJ0biB7XG4gIHdpZHRoOiA0NHB4O1xuICBoZWlnaHQ6IDQ3cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaGVhZGVyLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaGVhZGVyLWJ0biB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLmhlYWRlci1idG4gc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBvcGFjaXR5OiAwLjU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaGVhZGVyLWJ0biBzcGFuOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC02cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLmhlYWRlci1idG4gc3Bhbjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDZweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4uaGVhZGVyLWJ0biBzcGFuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmhlYWRlci1idG4gc3Bhbi5hY3RpdmU6OmJlZm9yZSB7XG4gIHRvcDogMDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuLmhlYWRlci1idG4gc3Bhbi5hY3RpdmU6OmFmdGVyIHtcbiAgdG9wOiAwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuXG4uaGVhZGVyLW1lbnVfX21vYmlsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA0NnB4O1xuICBsZWZ0OiAwO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlNGU2ZTg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlNGU2ZTg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlNmU4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDI1MHB4O1xuICBib3gtc2hhZG93OiAwIDJweCAycHggcmdiYSgxMiwgMTMsIDE0LCAwLjIpO1xufVxuLmhlYWRlci1tZW51X19tb2JpbGUtYWN0aXZlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaGVhZGVyLW1lbnVfX21vYmlsZSB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgbWFyZ2luOiAwO1xufVxuLmhlYWRlci1tZW51X19tb2JpbGUgdWwgbGkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogM3B4IDA7XG59XG4uaGVhZGVyLW1lbnVfX21vYmlsZSB1bCBsaSBhIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiA0cHggNHB4IDRweCA4cHg7XG4gIG9wYWNpdHk6IDAuOTtcbn1cbi5oZWFkZXItbWVudV9fbW9iaWxlIC5hY3RpdmUge1xuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAjZjQ4MDI0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmMGYxO1xufVxuLmhlYWRlci1tZW51X19tb2JpbGUgLmFjdGl2ZSBhIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5oZWFkZXItbG9nbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2ltZy9zcHJpdGVzLnN2Z1wiKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDdweCAxMDAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbi5oZWFkZXItbG9nbzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmhlYWRlci1sb2dvIHtcbiAgICBtaW4td2lkdGg6IDE3MHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA3cHggMTAxJTtcbiAgfVxufVxuXG4ucGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbi5wYW5lbC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgOHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XG59XG4ucGFuZWwtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG59XG4ucGFuZWwtaXRlbSBzcGFuIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvcGFjaXR5OiAwLjU7XG59XG4ucGFuZWwtaXRlbV9fc3RhdCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGNvbG9yOiAjNTM1YTYwO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiBub25lO1xufVxuLnBhbmVsLWl0ZW1fX3N0YXQgLnJhdGluZyB7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM1MzVhNjA7XG59XG4ucGFuZWwtaXRlbV9fc3RhdCAuc2lsdmVyIHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBjb2xvcjogIzhjOTI5ODtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnBhbmVsLWl0ZW1fX3N0YXQgLnNpbHZlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDZweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOWJjYmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDZweDtcbiAgbGVmdDogNnB4O1xufVxuLnBhbmVsLWl0ZW1fX3N0YXQgLmJyb256ZSB7XG4gIHBhZGRpbmctbGVmdDogMTRweDtcbiAgY29sb3I6ICNjMzhiNWY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wYW5lbC1pdGVtX19zdGF0IC5icm9uemU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzM4YjVmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2cHg7XG4gIGxlZnQ6IDZweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAucGFuZWwtaXRlbV9fc3RhdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxufVxuLnBhbmVsLWl0ZW1fX3NlYXJjaCBzcGFuIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vaW1nL2x1cGEuc3ZnXCIpO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5wYW5lbC1pdGVtX19zZWFyY2ggc3BhbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLnBhbmVsLWl0ZW1fX2F2YXRhciBzcGFuIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vaW1nL2F2YXRhci5wbmdcIik7XG59XG4ucGFuZWwtaXRlbV9fZHJpdmVyIHNwYW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9pbWcvZHJpdmVyLnN2Z1wiKTtcbn1cbi5wYW5lbC1pdGVtX19jdXAgc3BhbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2ltZy9jdXAuc3ZnXCIpO1xufVxuLnBhbmVsLWl0ZW1fX3F1ZXN0aW9uIHNwYW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9pbWcvcXVlc3Rpb24uc3ZnXCIpO1xufVxuLnBhbmVsLWl0ZW1fX21lc3NhZ2Ugc3BhbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2ltZy9tZXNzYWdlLnN2Z1wiKTtcbn1cblxuLmhlYWRlci13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5oZWFkZXItZm9ybSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGJhY2tncm91bmQ6ICNlZmYwZjE7XG59XG4uaGVhZGVyLWZvcm0tYWN0aXZlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmhlYWRlci1mb3JtIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG59XG4uaGVhZGVyLXNlYXJjaCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDhweCBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMWJkYmQ7XG59XG4uaGVhZGVyLXNlYXJjaF9fd3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5oZWFkZXItc2VhcmNoX193cmFwOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9pbWcvbHVwYS5zdmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTVweCAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIG9wYWNpdHk6IDAuNDtcbiAgdG9wOiA4cHg7XG4gIGxlZnQ6IDEycHg7XG4gIHotaW5kZXg6IDE7XG59XG4uaGVhZGVyLXNlYXJjaDo6cGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwLjU7XG59XG4uaGVhZGVyLXF1ZXN0IHtcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbiAgdG9wOiA5N3B4O1xuICBwYWRkaW5nOiAwIDEycHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmhlYWRlci1xdWVzdCB7XG4gICAgdG9wOiA1MHB4O1xuICB9XG59XG4uaGVhZGVyLXF1ZXN0IHVsIHtcbiAgcGFkZGluZzogMTJweDtcbiAgbWFyZ2luOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q4ZDJkMjtcbn1cbi5oZWFkZXItcXVlc3QgdWwgbGkge1xuICBmb250LXNpemU6IDEzcHg7XG59XG4uaGVhZGVyLXF1ZXN0IHVsIGxpIHNwYW4ge1xuICBjb2xvcjogIzlmYTZhZDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG4uaGVhZGVyLXF1ZXN0IHVsIGxpOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4uaGVhZGVyLXdyYXBwZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTRlNmU4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAwIDJweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uaGVhZGVyLXdyYXBwZXItYWN0aXZlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaGVhZGVyLXF1ZXN0aW9uIHtcbiAgcGFkZGluZzogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmhlYWRlci1xdWVzdGlvbiBhIHtcbiAgY29sb3I6ICMwMDc3Y2M7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuLmhlYWRlci1xdWVzdGlvbiBidXR0b24ge1xuICBjb2xvcjogIzM5NzM5ZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZWNmNDtcbiAgYm9yZGVyLWNvbG9yOiAjN2FhN2M3O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICBwYWRkaW5nOiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxMXB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _question_service__WEBPACK_IMPORTED_MODULE_1__["QuestSearch"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function MainComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.numbers);
} }
function MainComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const znak_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "medal-" + znak_r3.medal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", znak_r3.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](znak_r3.name);
} }
class MainComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.metka = this.store.select('questPage');
        this.metka.subscribe(data => {
            this.metka = data.metka;
            this.znaks = data.znaks;
        });
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 67, vars: 2, consts: [[1, "main"], [1, "main-wrap"], [1, "main-menu__mobile"], [1, "active"], ["routerLink", "/"], ["href", "#"], [1, "main-section"], [1, "main-aside"], [1, "content"], [1, "content-important", "important"], [1, "important__title"], [1, "important-block"], [1, "important-icon", "important-icon__message"], ["href", "#", 1, "important-title"], [1, "important-icon", "important-icon__stack"], [1, "important-num"], [1, "content-filter", "filter"], [1, "filter-title"], [1, "content-metka", "metka"], ["class", "metka-block", 4, "ngFor", "ngForOf"], [1, "content-sign", "sign"], ["class", "sign-block", 4, "ngFor", "ngForOf"], [1, "metka-block"], [1, "metka-name"], [1, "metka-count"], [1, "sign-block"], [1, "sign-name"], [1, "medal", 3, "ngClass"], [1, "sign-subname"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0412\u043E\u043F\u0440\u043E\u0441\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u041C\u0435\u0442\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0412\u0430\u0436\u043D\u043E\u0435 \u0432 \u041C\u0435\u0442\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "TLS 1.0 and TLS 1.1 removal for Stack Exchange services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0430\u043A\u0442\u0438\u0432\u0438\u0440\u0443\u0435\u043C \u043D\u043E\u0432\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u0430!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u0412\u043E\u0437\u0432\u0440\u0430\u0449\u0435\u043D\u0438\u0435 \u043F\u0440\u0438\u0447\u0438\u043D\u044B \u0437\u0430\u043A\u0440\u044B\u0442\u0438\u044F \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u00AB\u0443\u0447\u0435\u0431\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F\u00BB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u041E\u0431\u0441\u0443\u0436\u0434\u0430\u0435\u043C\u043E\u0435 \u0432 \u041C\u0435\u0442\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u041F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u044E \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u0430\u0442\u044C \u0437\u0430 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0435\u043D\u0438\u0435 \u043F\u0440\u0438\u0447\u0438\u043D\u044B \u0443\u0447\u0435\u0431\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "16");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u0427\u0442\u043E \u0431\u0443\u0434\u0435\u043C \u0434\u0435\u043B\u0430\u0442\u044C \u0441 \u043F\u0440\u0438\u0447\u0438\u043D\u043E\u0439 \u0437\u0430\u043A\u0440\u044B\u0442\u0438\u044F \u201C\u0443\u0447\u0435\u0431\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F\u201D?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u0444\u0438\u043B\u044C\u0442\u0440\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u0444\u0438\u043B\u044C\u0442\u0440");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\u0418\u0433\u043D\u043E\u0440\u0438\u0440\u0443\u0435\u043C\u044B\u0435 \u043C\u0435\u0442\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043C\u0435\u0442\u043A\u0443 \u0432 \u0438\u0433\u043D\u043E\u0440\u0438\u0440\u0443\u0435\u043C\u044B\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\u041D\u0435\u0434\u0430\u0432\u043D\u0438\u0435 \u043C\u0435\u0442\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, MainComponent_div_62_Template, 5, 2, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\u041D\u0435\u0434\u0430\u0432\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u044B\u0435 \u0437\u043D\u0430\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, MainComponent_div_66_Template, 6, 3, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.metka);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.znaks);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["@charset \"UTF-8\";\n.main[_ngcontent-%COMP%] {\n  padding-top: 70px;\n}\n@media (min-width: 1024px) {\n  .main[_ngcontent-%COMP%] {\n    padding-top: 50px;\n  }\n}\n.main-section[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (min-width: 1024px) {\n  .main-section[_ngcontent-%COMP%] {\n    border-left: 1px solid #d8dbdd;\n    padding-top: 20px;\n  }\n}\n.main[_ngcontent-%COMP%]   .row-title[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 20px;\n}\n@media (min-width: 1180px) {\n  .main[_ngcontent-%COMP%]   .row-title[_ngcontent-%COMP%] {\n    padding-left: 15px;\n  }\n}\n.main[_ngcontent-%COMP%]   .row-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin: 0;\n  font-weight: normal;\n}\n.main[_ngcontent-%COMP%]   .row-title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #0095ff;\n  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.4);\n  border-radius: 3px;\n  font-size: 13px;\n  border: none;\n  padding: 10px;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.main[_ngcontent-%COMP%]   .row-title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #0077cc;\n  cursor: pointer;\n}\n@media (min-width: 768px) {\n  .main-wrap[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n  }\n}\n@media (min-width: 1170px) {\n  .main-wrap[_ngcontent-%COMP%] {\n    max-width: 1170px;\n    margin: 0 auto;\n  }\n}\n.main[_ngcontent-%COMP%]   .row-btnGroup[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  margin-bottom: 12px;\n}\n@media (min-width: 460px) {\n  .main[_ngcontent-%COMP%]   .row-btnGroup[_ngcontent-%COMP%] {\n    -webkit-box-pack: end;\n            justify-content: flex-end;\n  }\n}\n.main[_ngcontent-%COMP%]   .row-btnGroup[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: 1px solid #848d95;\n  color: #3c4146;\n  white-space: nowrap;\n  padding: 8px 5px;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.main[_ngcontent-%COMP%]   .row-btnGroup[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #e4e6e8;\n  cursor: pointer;\n}\n.main[_ngcontent-%COMP%]   .row-btnGroup[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child {\n  border-radius: 3px 0 0 3px;\n}\n.main[_ngcontent-%COMP%]   .row-btnGroup[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 3px 3px 0;\n}\n.main[_ngcontent-%COMP%]   .row-btnGroup[_ngcontent-%COMP%]   button.competition[_ngcontent-%COMP%] {\n  padding-left: 30px;\n  position: relative;\n}\n.main[_ngcontent-%COMP%]   .row-btnGroup[_ngcontent-%COMP%]   button.competition[_ngcontent-%COMP%]::before {\n  content: \"7\";\n  position: absolute;\n  left: 7px;\n  background-color: #0077cc;\n  color: white;\n  padding: 3px;\n  width: 14px;\n  height: 18px;\n  font-size: 10px;\n  border-radius: 3px;\n}\n.questions[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-top: 1px solid #eff0f1;\n  border-bottom: 1px solid #eff0f1;\n}\n.questions[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.questions[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #848d95;\n  padding: 4px 5px;\n}\n.questions[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   span.answer[_ngcontent-%COMP%] {\n  color: #48a868;\n  border: 1px solid #48a868;\n  border-radius: 5px;\n}\n.questions[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-bottom: 8px;\n}\n.questions[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n  font-size: 16px;\n  color: #0077cc;\n  line-height: 20px;\n  display: block;\n  font-weight: normal;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.questions[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #47a7ec;\n}\n.questions[_ngcontent-%COMP%]   .row-link[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.questions[_ngcontent-%COMP%]   .row-link[_ngcontent-%COMP%]   .href[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n.questions[_ngcontent-%COMP%]   .row-link[_ngcontent-%COMP%]   .href[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #39739d;\n  background-color: #e1ecf4;\n  border-color: #e1ecf4;\n  border-radius: 5px;\n  padding: 3px 6px;\n  display: inline-block;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.questions[_ngcontent-%COMP%]   .row-link[_ngcontent-%COMP%]   .href[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  background-color: #cad5dd;\n  cursor: pointer;\n}\n.questions[_ngcontent-%COMP%]   .row-link[_ngcontent-%COMP%]   .answer[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9199a1;\n  margin-left: auto;\n  padding-top: 5px;\n}\n.questions[_ngcontent-%COMP%]   .row-link[_ngcontent-%COMP%]   .answer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0077cc;\n  text-decoration: none;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.questions[_ngcontent-%COMP%]   .row-link[_ngcontent-%COMP%]   .answer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #47a7ec;\n}\n.questions[_ngcontent-%COMP%]   .row-link[_ngcontent-%COMP%]   .answer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.main-disc[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #242729;\n  margin: 25px 0;\n}\n@media (min-width: 1180px) {\n  .main-disc[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    padding: 35px 20px 0;\n  }\n}\n.main-disc[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #0077cc;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.main-disc[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #389be3;\n}\n@media (min-width: 768px) {\n  .main-aside[_ngcontent-%COMP%] {\n    padding: 0 15px;\n    min-width: 300px;\n  }\n}\n@media (min-width: 1024px) {\n  .main-aside[_ngcontent-%COMP%] {\n    padding-top: 20px;\n  }\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  max-width: 300px;\n  margin: 0 auto;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .important[_ngcontent-%COMP%] {\n  background-color: #fdf7e3;\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);\n  border-radius: 3px;\n  font-size: 13px;\n  color: #3c4146;\n  margin-bottom: 15px;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .important__title[_ngcontent-%COMP%] {\n  padding: 12px 15px;\n  font-size: 12px;\n  color: #6A737C;\n  background-color: #fbf2d4;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .important-block[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  display: -webkit-box;\n  display: flex;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .important-block[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #3c4146;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .important-block[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #676b6e;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .important-icon__message[_ngcontent-%COMP%] {\n  background-image: url('message2.svg');\n  min-width: 15px;\n  height: 15px;\n  display: block;\n  background-position: center;\n  background-size: cover;\n  margin-right: 10px;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .important-icon__stack[_ngcontent-%COMP%] {\n  background-image: url('stack.png');\n  min-width: 15px;\n  height: 15px;\n  display: block;\n  background-position: center;\n  background-size: cover;\n  margin-right: 10px;\n  opacity: 0.5;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .important-num[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6a737c;\n  margin-right: 10px;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%] {\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);\n  border-radius: 3px;\n  font-size: 13px;\n  color: #3c4146;\n  margin-bottom: 15px;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .filter-title[_ngcontent-%COMP%] {\n  padding: 12px 15px;\n  font-size: 12px;\n  color: #6A737C;\n  border-bottom: 1px solid #e4e6e8;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #0077cc;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  padding: 12px 15px;\n  display: inline-block;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #389be3;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background-image: url('stop.svg');\n  width: 15px;\n  height: 15px;\n  background-position: center;\n  background-size: cover;\n  display: inline-block;\n  opacity: 0.5;\n  margin-right: 8px;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .metka[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .metka[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-bottom: 18px;\n  color: #3C4146;\n  font-weight: normal;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .metka-block[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 6px;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .metka-name[_ngcontent-%COMP%] {\n  color: #39739d;\n  background-color: #e1ecf4;\n  border-color: #e1ecf4;\n  font-size: 12px;\n  padding: 5px 7px;\n  border-radius: 3px;\n  margin-right: 10px;\n  display: inline-block;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .metka-name[_ngcontent-%COMP%]:hover {\n  background-color: #cfdde7;\n  cursor: pointer;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .metka-count[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6a737c;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .metka-count[_ngcontent-%COMP%]::before {\n  content: \"\u00D7\";\n  position: relative;\n  left: -4px;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sign[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sign[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-bottom: 18px;\n  color: #3C4146;\n  font-weight: normal;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sign-block[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 6px;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sign-name[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #2f3337;\n  font-size: 12px;\n  padding: 5px 7px;\n  border-radius: 3px;\n  margin-right: 10px;\n  display: inline-block;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sign-name[_ngcontent-%COMP%]:hover {\n  background-color: #18191a;\n  cursor: pointer;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sign-name[_ngcontent-%COMP%]   .medal[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  display: inline-block;\n  border-radius: 50%;\n  margin-right: 5px;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sign-name[_ngcontent-%COMP%]   .medal-bronze[_ngcontent-%COMP%] {\n  background-color: #cc9966;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sign-name[_ngcontent-%COMP%]   .medal-gold[_ngcontent-%COMP%] {\n  background-color: #ffcc00;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sign-name[_ngcontent-%COMP%]   .medal-silver[_ngcontent-%COMP%] {\n  background-color: #c5c5c5;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sign-subname[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #0077cc;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sign-subname[_ngcontent-%COMP%]:hover {\n  color: #44a0e2;\n  cursor: pointer;\n}\n.main-menu__mobile[_ngcontent-%COMP%] {\n  display: none;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 77px;\n  background-color: white;\n  width: 250px;\n}\n@media (min-width: 1024px) {\n  .main-menu__mobile[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.main-menu__mobile[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n}\n.main-menu__mobile[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: block;\n  padding: 3px 0;\n}\n.main-menu__mobile[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  border-right: 3px solid #f48024;\n  background-color: #eff0f1;\n}\n.main-menu__mobile[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: Arial;\n  font-size: 13px;\n  color: black;\n  text-decoration: none;\n  padding: 4px 4px 4px 8px;\n  opacity: 0.9;\n}\n.main-menu__mobile[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  border-right: 3px solid #f48024;\n  background-color: #eff0f1;\n}\n.main-menu__mobile[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL0Y6XFxXT1JLX0JJWlVQX1NUVURJT1xc0KHQsNC50YLRi1xcYW5ndWxhclxcbXktYXBwL3NyY1xcYXBwXFxtYWluXFxtYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLGlCQUFBO0FERUY7QUNBRTtFQUhGO0lBSUksaUJBQUE7RURHRjtBQUNGO0FDREU7RUFDRSxXQUFBO0FER0o7QUNESTtFQUhGO0lBSUksOEJBQUE7SUFDQSxpQkFBQTtFRElKO0FBQ0Y7QUNERTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsbUJBQUE7QURHSjtBQ0RJO0VBTkY7SUFPSSxrQkFBQTtFRElKO0FBQ0Y7QUNGSTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QURJTjtBQ0RJO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0RBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7QURHTjtBQ0RNO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FER1I7QUNJSTtFQURGO0lBRUksb0JBQUE7SUFBQSxhQUFBO0VEREo7QUFDRjtBQ0dJO0VBTEY7SUFNSSxpQkFBQTtJQUNBLGNBQUE7RURBSjtBQUNGO0FDR0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7VUFBQSwyQkFBQTtFQUNBLG1CQUFBO0FEREo7QUNHSTtFQU5GO0lBT0kscUJBQUE7WUFBQSx5QkFBQTtFREFKO0FBQ0Y7QUNFSTtFQUNFLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7QURBTjtBQ0VNO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FEQVI7QUNJSTtFQUNFLDBCQUFBO0FERk47QUNLSTtFQUNFLDBCQUFBO0FESE47QUNNSTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QURKTjtBQ01NO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBREpSO0FDVUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBRFBGO0FDU0U7RUFDRSxrQkFBQTtBRFBKO0FDU0k7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FEUE47QUNVSTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FEUk47QUNZRTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtBRFZKO0FDWUk7RUFDRSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7QURWTjtBQ1lNO0VBQ0UsY0FBQTtBRFZSO0FDZUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QURiSjtBQ2VJO0VBQ0Usa0JBQUE7QURiTjtBQ2VNO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0FEYlI7QUNlUTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBRGJWO0FDbUJJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FEakJOO0FDbUJNO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFBQSxvQkFBQTtBRGpCUjtBQ21CUTtFQUNFLGNBQUE7QURqQlY7QUNvQlE7RUFDRSxVQUFBO0FEbEJWO0FDMkJFO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUR4Qko7QUMwQkk7RUFKRjtJQUtJLG9CQUFBO0VEdkJKO0FBQ0Y7QUN5Qkk7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0FEdkJOO0FDeUJNO0VBQ0UsY0FBQTtBRHZCUjtBQytCRTtFQUZGO0lBR0ksZUFBQTtJQUNBLGdCQUFBO0VEM0JGO0FBQ0Y7QUM2QkU7RUFQRjtJQVFJLGlCQUFBO0VEMUJGO0FBQ0Y7QUM0QkU7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUQxQko7QUM0Qkk7RUFDRSx5QkFBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FEMUJOO0FDNEJNO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FEMUJSO0FDOEJNO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUQ1QlI7QUM4QlE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0FENUJWO0FDOEJVO0VBQ0UsY0FBQTtBRDVCWjtBQ21DUTtFQUNFLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FEakNWO0FDb0NRO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FEbENWO0FDc0NNO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBRHBDUjtBQ3dDSTtFQUNFLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FEdENOO0FDd0NNO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBRHRDUjtBQzBDTTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FEeENSO0FDMENRO0VBQ0UsY0FBQTtBRHhDVjtBQzRDTTtFQUNFLGlDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUQxQ1I7QUM4Q0k7RUFDRSxtQkFBQTtBRDVDTjtBQzhDTTtFQUNFLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBRDVDUjtBQytDTTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtBRDdDUjtBQ2lETTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFBQSxvQkFBQTtBRC9DUjtBQ2lEUTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBRC9DVjtBQ3FETTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FEbkRSO0FDcURRO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBRG5EVjtBQ3lESTtFQUNFLG1CQUFBO0FEdkROO0FDeURNO0VBQ0UsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FEdkRSO0FDMERNO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0FEeERSO0FDNERNO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFBQSxvQkFBQTtBRDFEUjtBQzREUTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBRDFEVjtBQzZEUTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBRUEscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FENURWO0FDOERVO0VBQ0UseUJBQUE7QUQ1RFo7QUMrRFU7RUFDRSx5QkFBQTtBRDdEWjtBQ2dFVTtFQUNFLHlCQUFBO0FEOURaO0FDcUVNO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0FEbkVSO0FDcUVRO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QURuRVY7QUMyRUE7RUFDRSxhQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUR4RUY7QUMwRUU7RUFQRjtJQVFJLGNBQUE7RUR2RUY7QUFDRjtBQ3lFRTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtBRHZFSjtBQ3lFSTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FEdkVOO0FDeUVNO0VBQ0UsZUFBQTtFQUNBLCtCQUFBO0VBQ0EseUJBQUE7QUR2RVI7QUMyRU07RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7QUR6RVI7QUMrRUU7RUFDRSwrQkFBQTtFQUNBLHlCQUFBO0FEN0VKO0FDK0VJO0VBQ0UsaUJBQUE7QUQ3RU4iLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4ubWFpbiB7XG4gIHBhZGRpbmctdG9wOiA3MHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAubWFpbiB7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gIH1cbn1cbi5tYWluLXNlY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLm1haW4tc2VjdGlvbiB7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZDhkYmRkO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICB9XG59XG4ubWFpbiAucm93LXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDExODBweCkge1xuICAubWFpbiAucm93LXRpdGxlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIH1cbn1cbi5tYWluIC5yb3ctdGl0bGUgaDEge1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5tYWluIC5yb3ctdGl0bGUgYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5NWZmO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbi5tYWluIC5yb3ctdGl0bGUgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzdjYztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5tYWluLXdyYXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMTcwcHgpIHtcbiAgLm1haW4td3JhcCB7XG4gICAgbWF4LXdpZHRoOiAxMTcwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cbi5tYWluIC5yb3ctYnRuR3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0NjBweCkge1xuICAubWFpbiAucm93LWJ0bkdyb3VwIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG59XG4ubWFpbiAucm93LWJ0bkdyb3VwIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjODQ4ZDk1O1xuICBjb2xvcjogIzNjNDE0NjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgcGFkZGluZzogOHB4IDVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4ubWFpbiAucm93LWJ0bkdyb3VwIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGU2ZTg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tYWluIC5yb3ctYnRuR3JvdXAgYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XG59XG4ubWFpbiAucm93LWJ0bkdyb3VwIGJ1dHRvbjpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XG59XG4ubWFpbiAucm93LWJ0bkdyb3VwIGJ1dHRvbi5jb21wZXRpdGlvbiB7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW4gLnJvdy1idG5Hcm91cCBidXR0b24uY29tcGV0aXRpb246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiN1wiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzdjYztcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAzcHg7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4ucXVlc3Rpb25zIHtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZmYwZjE7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZmMGYxO1xufVxuLnF1ZXN0aW9ucyAucm93IHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLnF1ZXN0aW9ucyAucm93IHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjODQ4ZDk1O1xuICBwYWRkaW5nOiA0cHggNXB4O1xufVxuLnF1ZXN0aW9ucyAucm93IHNwYW4uYW5zd2VyIHtcbiAgY29sb3I6ICM0OGE4Njg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0OGE4Njg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5xdWVzdGlvbnMgLnRpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4ucXVlc3Rpb25zIC50aXRsZSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMwMDc3Y2M7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4ucXVlc3Rpb25zIC50aXRsZSBhOmhvdmVyIHtcbiAgY29sb3I6ICM0N2E3ZWM7XG59XG4ucXVlc3Rpb25zIC5yb3ctbGluayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnF1ZXN0aW9ucyAucm93LWxpbmsgLmhyZWYge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4ucXVlc3Rpb25zIC5yb3ctbGluayAuaHJlZiBzcGFuIHtcbiAgY29sb3I6ICMzOTczOWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWVjZjQ7XG4gIGJvcmRlci1jb2xvcjogI2UxZWNmNDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAzcHggNnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLnF1ZXN0aW9ucyAucm93LWxpbmsgLmhyZWYgc3Bhbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYWQ1ZGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5xdWVzdGlvbnMgLnJvdy1saW5rIC5hbnN3ZXIge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjOTE5OWExO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cbi5xdWVzdGlvbnMgLnJvdy1saW5rIC5hbnN3ZXIgYSB7XG4gIGNvbG9yOiAjMDA3N2NjO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLnF1ZXN0aW9ucyAucm93LWxpbmsgLmFuc3dlciBhOmhvdmVyIHtcbiAgY29sb3I6ICM0N2E3ZWM7XG59XG4ucXVlc3Rpb25zIC5yb3ctbGluayAuYW5zd2VyIGEgc3BhbiB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tYWluLWRpc2MgLnRpdGxlIHtcbiAgY29sb3I6ICMyNDI3Mjk7XG4gIG1hcmdpbjogMjVweCAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDExODBweCkge1xuICAubWFpbi1kaXNjIC50aXRsZSB7XG4gICAgcGFkZGluZzogMzVweCAyMHB4IDA7XG4gIH1cbn1cbi5tYWluLWRpc2MgLnRpdGxlIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMDA3N2NjO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbi5tYWluLWRpc2MgLnRpdGxlIGE6aG92ZXIge1xuICBjb2xvcjogIzM4OWJlMztcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5tYWluLWFzaWRlIHtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAubWFpbi1hc2lkZSB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gIH1cbn1cbi5tYWluLWFzaWRlIC5jb250ZW50IHtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ubWFpbi1hc2lkZSAuY29udGVudCAuaW1wb3J0YW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZjdlMztcbiAgYm94LXNoYWRvdzogMCAwIDNweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzNjNDE0NjtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5tYWluLWFzaWRlIC5jb250ZW50IC5pbXBvcnRhbnRfX3RpdGxlIHtcbiAgcGFkZGluZzogMTJweCAxNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNkE3MzdDO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmMmQ0O1xufVxuLm1haW4tYXNpZGUgLmNvbnRlbnQgLmltcG9ydGFudC1ibG9jayB7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5tYWluLWFzaWRlIC5jb250ZW50IC5pbXBvcnRhbnQtYmxvY2sgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMzYzQxNDY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLm1haW4tYXNpZGUgLmNvbnRlbnQgLmltcG9ydGFudC1ibG9jayBhOmhvdmVyIHtcbiAgY29sb3I6ICM2NzZiNmU7XG59XG4ubWFpbi1hc2lkZSAuY29udGVudCAuaW1wb3J0YW50LWljb25fX21lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9pbWcvbWVzc2FnZTIuc3ZnXCIpO1xuICBtaW4td2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLm1haW4tYXNpZGUgLmNvbnRlbnQgLmltcG9ydGFudC1pY29uX19zdGFjayB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2ltZy9zdGFjay5wbmdcIik7XG4gIG1pbi13aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5tYWluLWFzaWRlIC5jb250ZW50IC5pbXBvcnRhbnQtbnVtIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzZhNzM3YztcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLm1haW4tYXNpZGUgLmNvbnRlbnQgLmZpbHRlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICMzYzQxNDY7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4ubWFpbi1hc2lkZSAuY29udGVudCAuZmlsdGVyLXRpdGxlIHtcbiAgcGFkZGluZzogMTJweCAxNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNkE3MzdDO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZTZlODtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tYWluLWFzaWRlIC5jb250ZW50IC5maWx0ZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMwMDc3Y2M7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBwYWRkaW5nOiAxMnB4IDE1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5tYWluLWFzaWRlIC5jb250ZW50IC5maWx0ZXIgYTpob3ZlciB7XG4gIGNvbG9yOiAjMzg5YmUzO1xufVxuLm1haW4tYXNpZGUgLmNvbnRlbnQgLmZpbHRlciBzcGFuIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vaW1nL3N0b3Auc3ZnXCIpO1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3BhY2l0eTogMC41O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbi5tYWluLWFzaWRlIC5jb250ZW50IC5tZXRrYSB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4ubWFpbi1hc2lkZSAuY29udGVudCAubWV0a2EgaDQge1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gIGNvbG9yOiAjM0M0MTQ2O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLm1haW4tYXNpZGUgLmNvbnRlbnQgLm1ldGthLWJsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuLm1haW4tYXNpZGUgLmNvbnRlbnQgLm1ldGthLW5hbWUge1xuICBjb2xvcjogIzM5NzM5ZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZWNmNDtcbiAgYm9yZGVyLWNvbG9yOiAjZTFlY2Y0O1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDVweCA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLm1haW4tYXNpZGUgLmNvbnRlbnQgLm1ldGthLW5hbWU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkZGU3O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWFpbi1hc2lkZSAuY29udGVudCAubWV0a2EtY291bnQge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjNmE3MzdjO1xufVxuLm1haW4tYXNpZGUgLmNvbnRlbnQgLm1ldGthLWNvdW50OjpiZWZvcmUge1xuICBjb250ZW50OiBcIsOXXCI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTRweDtcbn1cbi5tYWluLWFzaWRlIC5jb250ZW50IC5zaWduIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5tYWluLWFzaWRlIC5jb250ZW50IC5zaWduIGg0IHtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICBjb2xvcjogIzNDNDE0NjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5tYWluLWFzaWRlIC5jb250ZW50IC5zaWduLWJsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuLm1haW4tYXNpZGUgLmNvbnRlbnQgLnNpZ24tbmFtZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmMzMzNztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiA1cHggN3B4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbi5tYWluLWFzaWRlIC5jb250ZW50IC5zaWduLW5hbWU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxOTFhO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWFpbi1hc2lkZSAuY29udGVudCAuc2lnbi1uYW1lIC5tZWRhbCB7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4ubWFpbi1hc2lkZSAuY29udGVudCAuc2lnbi1uYW1lIC5tZWRhbC1icm9uemUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2M5OTY2O1xufVxuLm1haW4tYXNpZGUgLmNvbnRlbnQgLnNpZ24tbmFtZSAubWVkYWwtZ29sZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmNjMDA7XG59XG4ubWFpbi1hc2lkZSAuY29udGVudCAuc2lnbi1uYW1lIC5tZWRhbC1zaWx2ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzVjNWM1O1xufVxuLm1haW4tYXNpZGUgLmNvbnRlbnQgLnNpZ24tc3VibmFtZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICMwMDc3Y2M7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLm1haW4tYXNpZGUgLmNvbnRlbnQgLnNpZ24tc3VibmFtZTpob3ZlciB7XG4gIGNvbG9yOiAjNDRhMGUyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tYWluLW1lbnVfX21vYmlsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogNzdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAyNTBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLm1haW4tbWVudV9fbW9iaWxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuLm1haW4tbWVudV9fbW9iaWxlIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuLm1haW4tbWVudV9fbW9iaWxlIHVsIGxpIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDNweCAwO1xufVxuLm1haW4tbWVudV9fbW9iaWxlIHVsIGxpOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAjZjQ4MDI0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmMGYxO1xufVxuLm1haW4tbWVudV9fbW9iaWxlIHVsIGxpIGEge1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDRweCA0cHggNHB4IDhweDtcbiAgb3BhY2l0eTogMC45O1xufVxuLm1haW4tbWVudV9fbW9iaWxlIC5hY3RpdmUge1xuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAjZjQ4MDI0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmMGYxO1xufVxuLm1haW4tbWVudV9fbW9iaWxlIC5hY3RpdmUgYSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSIsIi5tYWlue1xyXG4gIHBhZGRpbmctdG9wOiA3MHB4O1xyXG5cclxuICBAbWVkaWEobWluLXdpZHRoOiAxMDI0cHgpe1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgfVxyXG5cclxuICAmLXNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgQG1lZGlhKG1pbi13aWR0aDogMTAyNHB4KXtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZDhkYmRkO1xyXG4gICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5yb3ctdGl0bGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAgIEBtZWRpYShtaW4td2lkdGg6IDExODBweCl7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICBoMSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbntcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5NWZmO1xyXG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIDAgcmdiYSgyNTUsMjU1LDI1NSwuNCk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3N2NjO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gICYtd3JhcCB7XHJcbiAgICBAbWVkaWEobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhKG1pbi13aWR0aDogMTE3MHB4KSB7XHJcbiAgICAgIG1heC13aWR0aDogMTE3MHB4O1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5yb3ctYnRuR3JvdXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcblxyXG4gICAgQG1lZGlhKG1pbi13aWR0aDogNDYwcHgpe1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjODQ4ZDk1O1xyXG4gICAgICBjb2xvcjogIzNjNDE0NjtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgcGFkZGluZzogOHB4IDVweDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNGU2ZTg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uOmZpcnN0LWNoaWxkIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uOmxhc3QtY2hpbGQge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24uY29tcGV0aXRpb24ge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCI3XCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDdweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3N2NjO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgd2lkdGg6IDE0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5xdWVzdGlvbnMge1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZmYwZjE7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZmYwZjE7XHJcblxyXG4gIC5yb3cge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGNvbG9yOiAjODQ4ZDk1O1xyXG4gICAgICBwYWRkaW5nOiA0cHggNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4uYW5zd2VyIHtcclxuICAgICAgY29sb3I6ICM0OGE4Njg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0OGE4Njg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiBub25lO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGNvbG9yOiAjMDA3N2NjO1xyXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogIzQ3YTdlYztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnJvdy1saW5rIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIC5ocmVmIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG5cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6ICMzOTczOWQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UxZWNmNDtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNlMWVjZjQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDNweCA2cHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NhZDVkZDtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmFuc3dlciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgY29sb3I6ICM5MTk5YTE7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICMwMDc3Y2M7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICM0N2E3ZWM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubWFpbi1kaXNjIHtcclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIGNvbG9yOiAjMjQyNzI5O1xyXG4gICAgbWFyZ2luOiAyNXB4IDA7XHJcblxyXG4gICAgQG1lZGlhKG1pbi13aWR0aDogMTE4MHB4KSB7XHJcbiAgICAgIHBhZGRpbmc6IDM1cHggMjBweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIGEge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAjMDA3N2NjO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzOztcclxuXHJcbiAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6ICMzODliZTM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5tYWluLWFzaWRlIHtcclxuXHJcbiAgQG1lZGlhKG1pbi13aWR0aDo3NjhweCkge1xyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgbWluLXdpZHRoOiAzMDBweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYShtaW4td2lkdGg6MTAyNHB4KSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgICAuaW1wb3J0YW50IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZjdlMztcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDNweCByZ2JhKDAsMCwwLC41KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIGNvbG9yOiAjM2M0MTQ2O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cclxuICAgICAgJl9fdGl0bGUge1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggMTVweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICM2QTczN0M7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZjJkNDtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYtYmxvY2sge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiAjM2M0MTQ2O1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICM2NzZiNmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLWljb24ge1xyXG5cclxuICAgICAgICAmX19tZXNzYWdlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2ltZy9tZXNzYWdlMi5zdmdcIik7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmX19zdGFja3tcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2ltZy9zdGFjay5wbmdcIik7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICBvcGFjaXR5OiAuNTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYtbnVtIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgY29sb3I6ICM2YTczN2M7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZpbHRlcntcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDNweCByZ2JhKDAsMCwwLC41KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIGNvbG9yOiAjM2M0MTQ2O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cclxuICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgcGFkZGluZzogMTJweCAxNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzZBNzM3QztcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZTZlODtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICBhIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICMwMDc3Y2M7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAgICAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgY29sb3I6ICMzODliZTM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9pbWcvc3RvcC5zdmdcIik7XHJcbiAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBvcGFjaXR5OiAuNTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5tZXRrYSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblxyXG4gICAgICBoNCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgICAgICAgY29sb3I6ICMzQzQxNDY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi1ibG9jayB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYtbmFtZSB7XHJcbiAgICAgICAgY29sb3I6ICMzOTczOWQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UxZWNmNDtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNlMWVjZjQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCA3cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkZGU3O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLWNvdW50IHtcclxuICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgY29sb3I6ICM2YTczN2M7XHJcblxyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIlxcZDdcIjtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGxlZnQ6IC00cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zaWduIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHJcbiAgICAgIGg0IHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuICAgICAgICBjb2xvcjogIzNDNDE0NjtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLWJsb2NrIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgJi1uYW1lIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJmMzMzNztcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDdweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxODE5MWE7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWVkYWwge1xyXG4gICAgICAgICAgd2lkdGg6IDhweDtcclxuICAgICAgICAgIGhlaWdodDogOHB4O1xyXG5cclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG5cclxuICAgICAgICAgICYtYnJvbnplIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjOTk2NjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmLWdvbGQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjYzAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICYtc2lsdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2M1YzVjNTtcclxuICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi1zdWJuYW1lIHtcclxuICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDc3Y2M7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogIzQ0YTBlMjtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubWFpbi1tZW51X19tb2JpbGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDc3cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG5cclxuICBAbWVkaWEobWluLXdpZHRoOiAxMDI0cHgpe1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG5cclxuICAgIGxpIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBhZGRpbmc6IDNweCAwO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICNmNDgwMjQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjBmMTtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIGEge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiA0cHggNHB4IDRweCA4cHg7XHJcbiAgICAgICAgb3BhY2l0eTogLjk7XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWN0aXZlIHtcclxuICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICNmNDgwMjQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmMGYxO1xyXG5cclxuICAgIGEge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class NotFoundComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 12, vars: 0, consts: [[1, "wrap"], [1, "err-img"], [1, "err-text"], [1, "help"], ["routerLink", "/"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u043C\u044B \u043D\u0435 \u043C\u043E\u0436\u0435\u043C \u043D\u0430\u0439\u0442\u0438 \u0437\u0430\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043C\u0443\u044E \u0432\u0430\u043C\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0433\u043B\u0430\u0432\u043D\u0443\u044E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".wrap[_ngcontent-%COMP%] {\n  padding: 24px;\n  text-align: center;\n}\n.wrap[_ngcontent-%COMP%]   .err-img[_ngcontent-%COMP%] {\n  color: #9bd4ea;\n  font-size: 130px;\n}\n.wrap[_ngcontent-%COMP%]   .err-text[_ngcontent-%COMP%] {\n  margin-bottom: 35px;\n}\n.wrap[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.wrap[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #37b2e2;\n  text-decoration: none;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.wrap[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0e6789;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90LWZvdW5kL0Y6XFxXT1JLX0JJWlVQX1NUVURJT1xc0KHQsNC50YLRi1xcYW5ndWxhclxcbXktYXBwL3NyY1xcYXBwXFxub3QtZm91bmRcXG5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQ0NKO0FER1E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUNEWjtBREtRO0VBQ0ksbUJBQUE7QUNIWjtBRE9JO0VBQ0ksZUFBQTtBQ0xSO0FET1E7RUFDSSxjQUFBO0VBRUEscUJBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0FDTlo7QURRWTtFQUNJLGNBQUE7QUNOaEIiLCJmaWxlIjoic3JjL2FwcC9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXAge1xyXG4gICAgcGFkZGluZzogMjRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAmIC5lcnIge1xyXG5cclxuICAgICAgICAmLWltZyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOWJkNGVhO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzMHB4O1xyXG4gICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYtdGV4dCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDM1cHg7O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmIC5oZWxwIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogIzM3YjJlMjs7XHJcblxyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMGU2Nzg5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLndyYXAge1xuICBwYWRkaW5nOiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ud3JhcCAuZXJyLWltZyB7XG4gIGNvbG9yOiAjOWJkNGVhO1xuICBmb250LXNpemU6IDEzMHB4O1xufVxuLndyYXAgLmVyci10ZXh0IHtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cbi53cmFwIC5oZWxwIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLndyYXAgLmhlbHAgYSB7XG4gIGNvbG9yOiAjMzdiMmUyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLndyYXAgLmhlbHAgYTpob3ZlciB7XG4gIGNvbG9yOiAjMGU2Nzg5O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pipes/filter.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FilterPipe {
    transform(question, search = '') {
        if (!search.trim()) {
            return question;
        }
        return question.filter(quest => {
            return quest.title.toLowerCase().includes(search.toLowerCase());
        });
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: FilterPipe, pure: false });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'filter',
                pure: false
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/quest-details/quest-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/quest-details/quest-details.component.ts ***!
  \**********************************************************/
/*! exports provided: QuestDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestDetailsComponent", function() { return QuestDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _redux_quest_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/quest.action */ "./src/app/redux/quest.action.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/__ivy_ngcc__/fesm2015/ngx-quill.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function QuestDetailsComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r19);
} }
class QuestDetailsComponent {
    constructor(router, routers, store) {
        this.router = router;
        this.routers = routers;
        this.store = store;
    }
    ngOnInit() {
        let id = +(this.router.snapshot.paramMap.get('id'));
        this.questId = id;
        this.questState = this.store.select('questPage');
        this.questState.subscribe(data => this.questDelail = data.questions);
        this.questDelail = this.questDelail.filter(el => el.id === id);
    }
    delete() {
        this.routers.navigate(['/']);
        this.store.dispatch(new _redux_quest_action__WEBPACK_IMPORTED_MODULE_1__["DeleteQuest"](this.questDelail[0].id));
    }
}
QuestDetailsComponent.ɵfac = function QuestDetailsComponent_Factory(t) { return new (t || QuestDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
QuestDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuestDetailsComponent, selectors: [["app-quest-details"]], decls: 10, vars: 3, consts: [[1, "wrapper"], [3, "content"], [1, "href"], [4, "ngFor", "ngForOf"], ["type", "button", 3, "click"]], template: function QuestDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "quill-view-html", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, QuestDetailsComponent_span_6_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestDetailsComponent_Template_button_click_8_listener($event) { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.questDelail[0].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx.questDelail[0].disc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.questDelail[0].tags);
    } }, directives: [ngx_quill__WEBPACK_IMPORTED_MODULE_4__["QuillViewHTMLComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #3c4146;\n  font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\n  line-height: 1.35;\n  font-weight: normal;\n}\n.wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background-color: #eff0f1;\n  padding: 10px;\n}\n.wrapper[_ngcontent-%COMP%]   .href[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n.wrapper[_ngcontent-%COMP%]   .href[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #39739d;\n  background-color: #e1ecf4;\n  border-color: #e1ecf4;\n  border-radius: 5px;\n  padding: 3px 6px;\n  display: inline-block;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  margin-right: 5px;\n  font-size: 12px;\n}\n.wrapper[_ngcontent-%COMP%]   .href[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  background-color: #cad5dd;\n  cursor: pointer;\n}\n.wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #848d95;\n  background-color: transparent;\n  margin-top: 30px;\n  border: none;\n  cursor: pointer;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #636a6f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVlc3QtZGV0YWlscy9GOlxcV09SS19CSVpVUF9TVFVESU9cXNCh0LDQudGC0YtcXGFuZ3VsYXJcXG15LWFwcC9zcmNcXGFwcFxccXVlc3QtZGV0YWlsc1xccXVlc3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcXVlc3QtZGV0YWlscy9xdWVzdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKO0FEQ0k7RUFDSSxjQUFBO0VBQ0EsMkRBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDQ1I7QURFSTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtBQ0FSO0FER0k7RUFDSSxrQkFBQTtBQ0RSO0FER1E7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNEWjtBREdZO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0FDRGhCO0FET0k7RUFDSSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFBQSxvQkFBQTtBQ0xSO0FET1E7RUFDSSxjQUFBO0FDTFoiLCJmaWxlIjoic3JjL2FwcC9xdWVzdC1kZXRhaWxzL3F1ZXN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiAyNHB4O1xyXG5cclxuICAgIGgyIHtcclxuICAgICAgICBjb2xvcjogIzNjNDE0NjtcclxuICAgICAgICBmb250LWZhbWlseTogQXJpYWwsXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxzYW5zLXNlcmlmO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM1O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjBmMTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ocmVmIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBjb2xvcjogIzM5NzM5ZDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UxZWNmNDtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZTFlY2Y0O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweCA2cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NhZDVkZDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBjb2xvcjogIzg0OGQ5NTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuXHJcbiAgICAgICAgJjpob3ZlciB7IFxyXG4gICAgICAgICAgICBjb2xvcjogIzYzNmE2ZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIud3JhcHBlciB7XG4gIHBhZGRpbmc6IDI0cHg7XG59XG4ud3JhcHBlciBoMiB7XG4gIGNvbG9yOiAjM2M0MTQ2O1xuICBmb250LWZhbWlseTogQXJpYWwsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS4zNTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi53cmFwcGVyIHAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmMGYxO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLndyYXBwZXIgLmhyZWYge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4ud3JhcHBlciAuaHJlZiBzcGFuIHtcbiAgY29sb3I6ICMzOTczOWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWVjZjQ7XG4gIGJvcmRlci1jb2xvcjogI2UxZWNmNDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAzcHggNnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLndyYXBwZXIgLmhyZWYgc3Bhbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYWQ1ZGQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi53cmFwcGVyIGJ1dHRvbiB7XG4gIGNvbG9yOiAjODQ4ZDk1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLndyYXBwZXIgYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICM2MzZhNmY7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quest-details',
                templateUrl: './quest-details.component.html',
                styleUrls: ['./quest-details.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/question.service.ts":
/*!*************************************!*\
  !*** ./src/app/question.service.ts ***!
  \*************************************/
/*! exports provided: QuestionService, QuestionInc, QuestSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function() { return QuestionService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionInc", function() { return QuestionInc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestSearch", function() { return QuestSearch; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class QuestionService {
}
class QuestionInc {
    constructor() {
        this.counter = 10;
    }
    increase() {
        this.counter++;
    }
}
QuestionInc.ɵfac = function QuestionInc_Factory(t) { return new (t || QuestionInc)(); };
QuestionInc.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: QuestionInc, factory: QuestionInc.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionInc, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
class QuestSearch {
    constructor() {
        this.search = '';
    }
    setSearch(str) {
        this.search = str;
    }
}
QuestSearch.ɵfac = function QuestSearch_Factory(t) { return new (t || QuestSearch)(); };
QuestSearch.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: QuestSearch, factory: QuestSearch.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestSearch, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/redux/quest.action.ts":
/*!***************************************!*\
  !*** ./src/app/redux/quest.action.ts ***!
  \***************************************/
/*! exports provided: QUEST_ACTION, AddQuest, DeleteQuest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUEST_ACTION", function() { return QUEST_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddQuest", function() { return AddQuest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteQuest", function() { return DeleteQuest; });
var QUEST_ACTION;
(function (QUEST_ACTION) {
    QUEST_ACTION.ADD_QUEST = 'ADD_QUEST';
    QUEST_ACTION.DELETE_QUEST = 'DELETE_QUEST';
})(QUEST_ACTION || (QUEST_ACTION = {}));
class AddQuest {
    constructor(payload) {
        this.payload = payload;
        this.type = QUEST_ACTION.ADD_QUEST;
    }
}
class DeleteQuest {
    constructor(payload) {
        this.payload = payload;
        this.type = QUEST_ACTION.DELETE_QUEST;
    }
}


/***/ }),

/***/ "./src/app/redux/quest.reducer.ts":
/*!****************************************!*\
  !*** ./src/app/redux/quest.reducer.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return questReducer; });
/* harmony import */ var _quest_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quest.action */ "./src/app/redux/quest.action.ts");

const initialState = {
    questions: [
        {
            id: 1,
            vote: 1,
            answer: 1,
            impressions: 8,
            title: 'Как правильно сравнить данные из двух CSV файлов? Отрисовка точек попадающих между графиками',
            disc: 'Cайт выдает ошибку Сайт выполнил переадресацию слишком много раз после переноса WordPress и постоянно обновляется по себе. Как это можно исправить и за чего такое. Первый раз с таким сталкиваюсь , обычно такой код очень хорошо работал',
            tags: ['html', 'css', 'css', 'css3', 'html5', 'scss'],
            date: new Date(),
            author: 'Daniel qwaqwaqwa',
            authorRating: 98
        },
        {
            id: 2,
            vote: 12,
            answer: 3,
            impressions: 18,
            title: 'Как перевести время в timestamp?',
            disc: 'Данный код генерит 10-знаковый timestamp. А мне нужно 16\n' +
                '\n' +
                'int unixTime = (int)(DateTime.UtcNow - new DateTime(1970, 1, 1)).TotalSeconds;\n' +
                'Нашёл в инете код для операции преобразования 16-значного в timestamp\n' +
                '\n' +
                'var timestamp = 1582799824092200;\n' +
                'var epoch = new DateTime(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc);\n' +
                'var myDate = epoch.AddMilliseconds(timestamp / 1000);',
            tags: ['C', 'C#'],
            date: new Date(),
            author: 'Dim04ka',
            authorRating: 298
        },
        {
            id: 3,
            vote: 22,
            answer: 13,
            impressions: 1,
            title: 'Как получить data attr к datalist(option)?',
            disc: 'нужно получить data id выбранной опции. Важно, значение в поле value могут дублироваться, но айди будут разные. Как это сделать?',
            tags: ['js', 'jquery'],
            date: new Date(),
            author: 'Olga',
            authorRating: 298
        },
        {
            id: 4,
            vote: 2,
            answer: 3,
            impressions: 1,
            title: 'Задача по структурам и функциям',
            disc: 'Суть задачи: создать и проинициализировать 3 структуры описываюшие автомобили. в структуре поля: наименование, скорость, год выпуска. Написать функцию которая будет определять максимальную скорость и выводить название и год выпуска авто с макс. скоростью. Написать функцию которая будет считать среднюю скорость для 3 автомобилей использую на вход массив структур. (потом массив указателей на структуры) Вызвать эти функции. и вывести в консоль результаты.\n' +
                '\n' +
                'Также для надо написать функцию инициализации структуры. и написать функцию которая будет инициализировать структуры с использованием предыдущей функции. (потом написать функцию которая будет инитить структуры и формировать массив структур, а еще потом массив указателей на структуры) Возникла проблема, я не могу нормально написать функции с использованием структуры, целый день сижу и не могу ничего придумать. Можете не писать код просто подскажите в каком направлении двигаться и что делать, а то я просто не могу придумать ничего',
            tags: ['функции', 'структуры'],
            date: new Date(),
            author: 'mariya',
            authorRating: 8
        },
        {
            id: 5,
            vote: 1,
            answer: 1,
            impressions: 8,
            title: 'Как правильно сравнить данные из двух CSV файлов? Отрисовка точек попадающих между графиками',
            disc: 'Cайт выдает ошибку Сайт выполнил переадресацию слишком много раз после переноса WordPress и постоянно обновляется по себе. Как это можно исправить и за чего такое. Первый раз с таким сталкиваюсь , обычно такой код очень хорошо работал',
            tags: ['html', 'css', 'css', 'css3', 'html5', 'scss'],
            date: new Date(),
            author: 'Daniel qwaqwaqwa',
            authorRating: 98
        },
        {
            id: 6,
            vote: 12,
            answer: 3,
            impressions: 18,
            title: 'Как перевести время в timestamp?',
            disc: 'Данный код генерит 10-знаковый timestamp. А мне нужно 16\n' +
                '\n' +
                'int unixTime = (int)(DateTime.UtcNow - new DateTime(1970, 1, 1)).TotalSeconds;\n' +
                'Нашёл в инете код для операции преобразования 16-значного в timestamp\n' +
                '\n' +
                'var timestamp = 1582799824092200;\n' +
                'var epoch = new DateTime(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc);\n' +
                'var myDate = epoch.AddMilliseconds(timestamp / 1000);',
            tags: ['C', 'C#'],
            date: new Date(),
            author: 'Dim04ka',
            authorRating: 298
        },
        {
            id: 7,
            vote: 22,
            answer: 13,
            impressions: 1,
            title: 'Как получить data attr к datalist(option)?',
            disc: 'нужно получить data id выбранной опции. Важно, значение в поле value могут дублироваться, но айди будут разные. Как это сделать?',
            tags: ['js', 'jquery'],
            date: new Date(),
            author: 'Olga',
            authorRating: 998
        },
        {
            id: 8,
            vote: 2,
            answer: 3,
            impressions: 1,
            title: 'Задача по структурам и функциям',
            disc: 'Суть задачи: создать и проинициализировать 3 структуры описываюшие автомобили. в структуре поля: наименование, скорость, год выпуска. Написать функцию которая будет определять максимальную скорость и выводить название и год выпуска авто с макс. скоростью. Написать функцию которая будет считать среднюю скорость для 3 автомобилей использую на вход массив структур. (потом массив указателей на структуры) Вызвать эти функции. и вывести в консоль результаты.\n' +
                '\n' +
                'Также для надо написать функцию инициализации структуры. и написать функцию которая будет инициализировать структуры с использованием предыдущей функции. (потом написать функцию которая будет инитить структуры и формировать массив структур, а еще потом массив указателей на структуры) Возникла проблема, я не могу нормально написать функции с использованием структуры, целый день сижу и не могу ничего придумать. Можете не писать код просто подскажите в каком направлении двигаться и что делать, а то я просто не могу придумать ничего',
            tags: ['функции', 'структуры'],
            date: new Date(),
            author: 'mariya',
            authorRating: 8
        }
    ],
    metka: [
        {
            title: 'javascript',
            numbers: '124'
        },
        {
            title: 'css',
            numbers: '44'
        },
        {
            title: 'html',
            numbers: '424'
        },
        {
            title: 'python',
            numbers: '190'
        },
        {
            title: 'jquery',
            numbers: '424'
        },
        {
            title: 'php',
            numbers: '34'
        },
        {
            title: 'java',
            numbers: '45'
        },
        {
            title: 'C++',
            numbers: '10'
        },
        {
            title: 'C#',
            numbers: '24'
        },
        {
            title: 'avg',
            numbers: '44'
        },
        {
            title: 'qt',
            numbers: '12'
        },
        {
            title: 'массивы',
            numbers: '190'
        },
        {
            title: 'алгоритм',
            numbers: '33'
        },
        {
            title: 'mysql',
            numbers: '31'
        },
        {
            title: 'верстка',
            numbers: '57'
        },
        {
            title: 'docker',
            numbers: '10'
        }
    ],
    znaks: [
        {
            name: 'kinder91',
            medal: 'silver',
            title: 'Информарованный'
        },
        {
            name: 'Lebovski',
            medal: 'gold',
            title: 'Годовалый'
        },
        {
            name: ' MoloF',
            medal: 'silver',
            title: ' Хороший ответ'
        },
        {
            name: 'Илья Слободян',
            medal: 'bronze',
            title: ' Промоутер'
        },
        {
            name: 'kinder91',
            medal: 'silver',
            title: 'Информарованный'
        },
        {
            name: 'Lebovski',
            medal: 'gold',
            title: 'Годовалый'
        },
        {
            name: ' MoloF',
            medal: 'silver',
            title: ' Хороший ответ'
        },
        {
            name: 'Илья Слободян',
            medal: 'bronze',
            title: ' Промоутер'
        },
        {
            name: 'kinder91',
            medal: 'silver',
            title: 'Информарованный'
        },
        {
            name: 'Lebovski',
            medal: 'gold',
            title: 'Годовалый'
        },
        {
            name: ' MoloF',
            medal: 'silver',
            title: ' Хороший ответ'
        },
        {
            name: 'Илья Слободян',
            medal: 'bronze',
            title: ' Промоутер'
        },
        {
            name: 'kinder91',
            medal: 'silver',
            title: 'Информарованный'
        },
        {
            name: 'Lebovski',
            medal: 'gold',
            title: 'Годовалый'
        },
        {
            name: ' MoloF',
            medal: 'silver',
            title: ' Хороший ответ'
        },
        {
            name: 'Илья Слободян',
            medal: 'bronze',
            title: ' Промоутер'
        },
        {
            name: 'kinder91',
            medal: 'silver',
            title: 'Информарованный'
        },
        {
            name: 'Lebovski',
            medal: 'silver',
            title: 'Годовалый'
        },
        {
            name: ' MoloF',
            medal: 'silver',
            title: ' Хороший ответ'
        },
        {
            name: 'Илья Слободян',
            medal: 'bronze',
            title: ' Промоутер'
        },
        {
            name: 'kinder91',
            medal: 'silver',
            title: 'Информарованный'
        },
        {
            name: 'Lebovski',
            medal: 'silver',
            title: 'Годовалый'
        },
        {
            name: ' MoloF',
            medal: 'silver',
            title: ' Хороший ответ'
        },
        {
            name: 'Илья Слободян',
            medal: 'bronze',
            title: ' Промоутер'
        }
    ]
};
function questReducer(state = initialState, action) {
    switch (action.type) {
        case _quest_action__WEBPACK_IMPORTED_MODULE_0__["QUEST_ACTION"].ADD_QUEST:
            return Object.assign(Object.assign({}, state), { questions: [action.payload, ...state.questions] });
        case _quest_action__WEBPACK_IMPORTED_MODULE_0__["QUEST_ACTION"].DELETE_QUEST:
            return Object.assign(Object.assign({}, state), { questions: [...state.questions.filter(el => el.id !== action.payload)] });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/view-create-quest/view-create-quest.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/view-create-quest/view-create-quest.component.ts ***!
  \******************************************************************/
/*! exports provided: ViewCreateQuestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCreateQuestComponent", function() { return ViewCreateQuestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _question_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../question.service */ "./src/app/question.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");







function ViewCreateQuestComponent_div_17_div_1_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r15);
} }
function ViewCreateQuestComponent_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewCreateQuestComponent_div_17_div_1_Template_a_click_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const quest_r13 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.onSelect(quest_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ViewCreateQuestComponent_div_17_div_1_span_13_Template, 2, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u043E\u0442\u0432\u0435\u0442 \u0434\u0430\u043D 30 \u043C\u0438\u043D\u0443\u0442 \u043D\u0430\u0437\u0430\u0434 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const quest_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", quest_r13.vote, " \u0433\u043E\u043B\u043E\u0441\u043E\u0432");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", quest_r13.answer, " \u043E\u0442\u0432\u0435\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", quest_r13.impressions, " \u043F\u043E\u043A\u0430\u0437\u043E\u0432");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", quest_r13.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", quest_r13.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", quest_r13.author, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](quest_r13.authorRating);
} }
function ViewCreateQuestComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewCreateQuestComponent_div_17_div_1_Template, 20, 7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx_r9.questState).questions, ctx_r9.search));
} }
function ViewCreateQuestComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041D\u0435\u0442 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 ...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ViewCreateQuestComponent {
    constructor(store, router, searchInput) {
        this.store = store;
        this.router = router;
        this.searchInput = searchInput;
        this.search = '';
    }
    ngOnInit() {
        this.questState = this.store.select('questPage');
    }
    ngDoCheck() {
        this.search = this.searchInput.search;
    }
    onSelect(quest) {
        this.router.navigate(['/question', quest.id]);
    }
}
ViewCreateQuestComponent.ɵfac = function ViewCreateQuestComponent_Factory(t) { return new (t || ViewCreateQuestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_question_service__WEBPACK_IMPORTED_MODULE_3__["QuestSearch"])); };
ViewCreateQuestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewCreateQuestComponent, selectors: [["app-view-create-quest"]], decls: 33, vars: 4, consts: [[1, "container"], [1, "row-title"], ["routerLink", "/create", 1, "button"], [1, "row-btnGroup"], [1, "competition"], [4, "ngIf", "ngIfElse"], ["noQuest", ""], [1, "main-disc"], [1, "title"], ["href", "#"], ["class", "main-questions questions", 4, "ngFor", "ngForOf"], [1, "main-questions", "questions"], [1, "row"], [1, "answer"], [3, "click"], [1, "row", "row-link"], [1, "href"], [4, "ngFor", "ngForOf"], [1, "noQuest"]], template: function ViewCreateQuestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0412\u043E\u043F\u0440\u043E\u0441\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0417\u0430\u0434\u0430\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0418\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u044B\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u041A\u043E\u043D\u043A\u0443\u0440\u0441\u043D\u044B\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0417\u0430 \u043D\u0435\u0434\u0435\u043B\u044E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0417\u0430 \u043C\u0435\u0441\u044F\u0446");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ViewCreateQuestComponent_div_17_Template, 4, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ViewCreateQuestComponent_ng_template_19_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u0418\u0449\u0435\u0442\u0435 \u0447\u0442\u043E-\u0442\u043E \u0435\u0449\u0451? \u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u043F\u043E\u043B\u043D\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " \u0438\u043B\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u043C\u0435\u0442\u043A\u0438.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " \u041F\u043E\u043C\u043E\u0433\u0438\u0442\u0435 \u043D\u0430\u043C \u043E\u0442\u0432\u0435\u0442\u0438\u0442\u044C \u043D\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u043D\u0435\u043E\u0442\u0432\u0435\u0447\u0435\u043D\u043D\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 2, ctx.questState).questions.length > 0)("ngIfElse", _r10);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_5__["FilterPipe"]], styles: ["@charset \"UTF-8\";\n.main-section[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (min-width: 1024px) {\n  .main-section[_ngcontent-%COMP%] {\n    border-left: 1px solid #d8dbdd;\n    padding-top: 20px;\n  }\n}\n.row-title[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 20px;\n}\n@media (min-width: 1180px) {\n  .row-title[_ngcontent-%COMP%] {\n    padding-left: 15px;\n  }\n}\n.row-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin: 0;\n  font-weight: normal;\n}\n.row-title[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #0095ff;\n  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.4);\n  border-radius: 3px;\n  font-size: 13px;\n  border: none;\n  padding: 10px;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  text-decoration: none;\n}\n.row-title[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover {\n  background-color: #0077cc;\n  cursor: pointer;\n}\n@media (min-width: 768px) {\n  .main-wrap[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n  }\n}\n@media (min-width: 1170px) {\n  .main-wrap[_ngcontent-%COMP%] {\n    max-width: 1170px;\n    margin: 0 auto;\n  }\n}\n.row-btnGroup[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  margin-bottom: 12px;\n}\n@media (min-width: 460px) {\n  .row-btnGroup[_ngcontent-%COMP%] {\n    -webkit-box-pack: end;\n            justify-content: flex-end;\n  }\n}\n.row-btnGroup[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: 1px solid #848d95;\n  color: #3c4146;\n  white-space: nowrap;\n  padding: 8px 5px;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.row-btnGroup[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #e4e6e8;\n  cursor: pointer;\n}\n.row-btnGroup[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child {\n  border-radius: 3px 0 0 3px;\n}\n.row-btnGroup[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 3px 3px 0;\n}\n.row-btnGroup[_ngcontent-%COMP%]   button.competition[_ngcontent-%COMP%] {\n  padding-left: 30px;\n  position: relative;\n}\n.row-btnGroup[_ngcontent-%COMP%]   button.competition[_ngcontent-%COMP%]::before {\n  content: \"7\";\n  position: absolute;\n  left: 7px;\n  background-color: #0077cc;\n  color: white;\n  padding: 3px;\n  width: 14px;\n  height: 18px;\n  font-size: 10px;\n  border-radius: 3px;\n}\n.questions[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-top: 1px solid #eff0f1;\n  border-bottom: 1px solid #eff0f1;\n}\n.questions[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.questions[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #848d95;\n  padding: 4px 5px;\n}\n.questions[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   span.answer[_ngcontent-%COMP%] {\n  color: #48a868;\n  border: 1px solid #48a868;\n  border-radius: 5px;\n}\n.questions[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-bottom: 8px;\n}\n.questions[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n  font-size: 16px;\n  color: #0077cc;\n  line-height: 20px;\n  display: block;\n  font-weight: normal;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  cursor: pointer;\n}\n.questions[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #47a7ec;\n}\n.questions[_ngcontent-%COMP%]   .row-link[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  flex-wrap: wrap;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.questions[_ngcontent-%COMP%]   .row-link[_ngcontent-%COMP%]   .href[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n.questions[_ngcontent-%COMP%]   .row-link[_ngcontent-%COMP%]   .href[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #39739d;\n  background-color: #e1ecf4;\n  border-color: #e1ecf4;\n  border-radius: 5px;\n  padding: 3px 6px;\n  display: inline-block;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  margin-right: 5px;\n}\n.questions[_ngcontent-%COMP%]   .row-link[_ngcontent-%COMP%]   .href[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  background-color: #cad5dd;\n  cursor: pointer;\n}\n.questions[_ngcontent-%COMP%]   .row-link[_ngcontent-%COMP%]   .answer[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9199a1;\n  margin-left: auto;\n  padding-top: 5px;\n}\n.questions[_ngcontent-%COMP%]   .row-link[_ngcontent-%COMP%]   .answer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0077cc;\n  text-decoration: none;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.questions[_ngcontent-%COMP%]   .row-link[_ngcontent-%COMP%]   .answer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #47a7ec;\n}\n.questions[_ngcontent-%COMP%]   .row-link[_ngcontent-%COMP%]   .answer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.main-disc[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #242729;\n  margin: 25px 0;\n}\n@media (min-width: 1180px) {\n  .main-disc[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    padding: 35px 20px 0;\n  }\n}\n.main-disc[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #0077cc;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.main-disc[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #389be3;\n}\n@media (min-width: 768px) {\n  .main-aside[_ngcontent-%COMP%] {\n    padding: 0 15px;\n    min-width: 300px;\n  }\n}\n@media (min-width: 1024px) {\n  .main-aside[_ngcontent-%COMP%] {\n    padding-top: 20px;\n  }\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  max-width: 300px;\n  margin: 0 auto;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .important[_ngcontent-%COMP%] {\n  background-color: #fdf7e3;\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);\n  border-radius: 3px;\n  font-size: 13px;\n  color: #3c4146;\n  margin-bottom: 15px;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .important__title[_ngcontent-%COMP%] {\n  padding: 12px 15px;\n  font-size: 12px;\n  color: #6A737C;\n  background-color: #fbf2d4;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .important-block[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  display: -webkit-box;\n  display: flex;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .important-block[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #3c4146;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .important-block[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #676b6e;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .important-icon__message[_ngcontent-%COMP%] {\n  background-image: url('message2.svg');\n  min-width: 15px;\n  height: 15px;\n  display: block;\n  background-position: center;\n  background-size: cover;\n  margin-right: 10px;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .important-icon__stack[_ngcontent-%COMP%] {\n  background-image: url('stack.png');\n  min-width: 15px;\n  height: 15px;\n  display: block;\n  background-position: center;\n  background-size: cover;\n  margin-right: 10px;\n  opacity: 0.5;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .important-num[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6a737c;\n  margin-right: 10px;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%] {\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);\n  border-radius: 3px;\n  font-size: 13px;\n  color: #3c4146;\n  margin-bottom: 15px;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .filter-title[_ngcontent-%COMP%] {\n  padding: 12px 15px;\n  font-size: 12px;\n  color: #6A737C;\n  border-bottom: 1px solid #e4e6e8;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #0077cc;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  padding: 12px 15px;\n  display: inline-block;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #389be3;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background-image: url('stop.svg');\n  width: 15px;\n  height: 15px;\n  background-position: center;\n  background-size: cover;\n  display: inline-block;\n  opacity: 0.5;\n  margin-right: 8px;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .metka[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .metka[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-bottom: 18px;\n  color: #3C4146;\n  font-weight: normal;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .metka-block[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 6px;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .metka-name[_ngcontent-%COMP%] {\n  color: #39739d;\n  background-color: #e1ecf4;\n  border-color: #e1ecf4;\n  font-size: 12px;\n  padding: 5px 7px;\n  border-radius: 3px;\n  margin-right: 10px;\n  display: inline-block;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .metka-name[_ngcontent-%COMP%]:hover {\n  background-color: #cfdde7;\n  cursor: pointer;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .metka-count[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6a737c;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .metka-count[_ngcontent-%COMP%]::before {\n  content: \"\u00D7\";\n  position: relative;\n  left: -4px;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sign[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sign[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-bottom: 18px;\n  color: #3C4146;\n  font-weight: normal;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sign-block[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 6px;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sign-name[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #2f3337;\n  font-size: 12px;\n  padding: 5px 7px;\n  border-radius: 3px;\n  margin-right: 10px;\n  display: inline-block;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sign-name[_ngcontent-%COMP%]:hover {\n  background-color: #18191a;\n  cursor: pointer;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sign-name[_ngcontent-%COMP%]   .medal[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  display: inline-block;\n  border-radius: 50%;\n  margin-right: 5px;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sign-name[_ngcontent-%COMP%]   .medal-bronze[_ngcontent-%COMP%] {\n  background-color: #cc9966;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sign-name[_ngcontent-%COMP%]   .medal-gold[_ngcontent-%COMP%] {\n  background-color: #ffcc00;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sign-name[_ngcontent-%COMP%]   .medal-silver[_ngcontent-%COMP%] {\n  background-color: #c5c5c5;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sign-subname[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #0077cc;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.main-aside[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .sign-subname[_ngcontent-%COMP%]:hover {\n  color: #44a0e2;\n  cursor: pointer;\n}\n.main-menu__mobile[_ngcontent-%COMP%] {\n  display: none;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 77px;\n  background-color: white;\n  width: 250px;\n}\n@media (min-width: 1024px) {\n  .main-menu__mobile[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.main-menu__mobile[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n}\n.main-menu__mobile[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: block;\n  padding: 3px 0;\n}\n.main-menu__mobile[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  border-right: 3px solid #f48024;\n  background-color: #eff0f1;\n}\n.main-menu__mobile[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: Arial;\n  font-size: 13px;\n  color: black;\n  text-decoration: none;\n  padding: 4px 4px 4px 8px;\n  opacity: 0.9;\n}\n.main-menu__mobile[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  border-right: 3px solid #f48024;\n  background-color: #eff0f1;\n}\n.main-menu__mobile[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.noQuest[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 50px 0;\n  color: #6c5f5f;\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1jcmVhdGUtcXVlc3Qvdmlldy1jcmVhdGUtcXVlc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXctY3JlYXRlLXF1ZXN0L0Y6XFxXT1JLX0JJWlVQX1NUVURJT1xc0KHQsNC50YLRi1xcYW5ndWxhclxcbXktYXBwL3NyY1xcYXBwXFx2aWV3LWNyZWF0ZS1xdWVzdFxcdmlldy1jcmVhdGUtcXVlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWQ7RUFDRSxXQUFBO0FERUo7QUNBSTtFQUhGO0lBSUksOEJBQUE7SUFDQSxpQkFBQTtFREdKO0FBQ0Y7QUNBRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsbUJBQUE7QURHSjtBQ0RJO0VBTkY7SUFPSSxrQkFBQTtFRElKO0FBQ0Y7QUNGSTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QURJTjtBQ0RJO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0RBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7RUFDQSxxQkFBQTtBREdOO0FDRE07RUFDRSx5QkFBQTtFQUNBLGVBQUE7QURHUjtBQ0lJO0VBREY7SUFFSSxvQkFBQTtJQUFBLGFBQUE7RURBSjtBQUNGO0FDRUk7RUFMRjtJQU1JLGlCQUFBO0lBQ0EsY0FBQTtFRENKO0FBQ0Y7QUNFRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtVQUFBLDJCQUFBO0VBQ0EsbUJBQUE7QURDSjtBQ0NJO0VBTkY7SUFPSSxxQkFBQTtZQUFBLHlCQUFBO0VERUo7QUFDRjtBQ0FJO0VBQ0UsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFBQSxvQkFBQTtBREVOO0FDQU07RUFDRSx5QkFBQTtFQUNBLGVBQUE7QURFUjtBQ0VJO0VBQ0UsMEJBQUE7QURBTjtBQ0dJO0VBQ0UsMEJBQUE7QURETjtBQ0lJO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBREZOO0FDSU07RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FERlI7QUNRQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FETEY7QUNPRTtFQUNFLGtCQUFBO0FETEo7QUNPSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QURMTjtBQ1FJO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUROTjtBQ1VFO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0FEUko7QUNVSTtFQUNFLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFBQSxvQkFBQTtFQUNBLGVBQUE7QURSTjtBQ1VNO0VBQ0UsY0FBQTtBRFJSO0FDYUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QURYSjtBQ2FJO0VBQ0Usa0JBQUE7QURYTjtBQ2FNO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0VBQ0EsaUJBQUE7QURYUjtBQ2FRO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FEWFY7QUNpQkk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QURmTjtBQ2lCTTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7QURmUjtBQ2lCUTtFQUNFLGNBQUE7QURmVjtBQ2tCUTtFQUNFLFVBQUE7QURoQlY7QUN5QkU7RUFDRSxjQUFBO0VBQ0EsY0FBQTtBRHRCSjtBQ3dCSTtFQUpGO0lBS0ksb0JBQUE7RURyQko7QUFDRjtBQ3VCSTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7QURyQk47QUN1Qk07RUFDRSxjQUFBO0FEckJSO0FDNkJFO0VBRkY7SUFHSSxlQUFBO0lBQ0EsZ0JBQUE7RUR6QkY7QUFDRjtBQzJCRTtFQVBGO0lBUUksaUJBQUE7RUR4QkY7QUFDRjtBQzBCRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBRHhCSjtBQzBCSTtFQUNFLHlCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUR4Qk47QUMwQk07RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUR4QlI7QUM0Qk07RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBRDFCUjtBQzRCUTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7QUQxQlY7QUM0QlU7RUFDRSxjQUFBO0FEMUJaO0FDaUNRO0VBQ0UscUNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUQvQlY7QUNrQ1E7RUFDRSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QURoQ1Y7QUNvQ007RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FEbENSO0FDc0NJO0VBQ0Usc0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QURwQ047QUNzQ007RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FEcENSO0FDd0NNO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFBQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUR0Q1I7QUN3Q1E7RUFDRSxjQUFBO0FEdENWO0FDMENNO0VBQ0UsaUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBRHhDUjtBQzRDSTtFQUNFLG1CQUFBO0FEMUNOO0FDNENNO0VBQ0UsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FEMUNSO0FDNkNNO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0FEM0NSO0FDK0NNO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0FEN0NSO0FDK0NRO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FEN0NWO0FDbURNO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QURqRFI7QUNtRFE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FEakRWO0FDdURJO0VBQ0UsbUJBQUE7QURyRE47QUN1RE07RUFDRSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QURyRFI7QUN3RE07RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7QUR0RFI7QUMwRE07RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0FEeERSO0FDMERRO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FEeERWO0FDMkRRO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFFQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUQxRFY7QUM0RFU7RUFDRSx5QkFBQTtBRDFEWjtBQzZEVTtFQUNFLHlCQUFBO0FEM0RaO0FDOERVO0VBQ0UseUJBQUE7QUQ1RFo7QUNtRU07RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7QURqRVI7QUNtRVE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBRGpFVjtBQ3lFQTtFQUNFLGFBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBRHRFRjtBQ3dFRTtFQVBGO0lBUUksY0FBQTtFRHJFRjtBQUNGO0FDdUVFO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0FEckVKO0FDdUVJO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QURyRU47QUN1RU07RUFDRSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSx5QkFBQTtBRHJFUjtBQ3lFTTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtBRHZFUjtBQzRFRTtFQUNFLCtCQUFBO0VBQ0EseUJBQUE7QUQxRUo7QUM0RUk7RUFDRSxpQkFBQTtBRDFFTjtBQ2dGQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FEN0VGIiwiZmlsZSI6InNyYy9hcHAvdmlldy1jcmVhdGUtcXVlc3Qvdmlldy1jcmVhdGUtcXVlc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4ubWFpbi1zZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC5tYWluLXNlY3Rpb24ge1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2Q4ZGJkZDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgfVxufVxuXG4ucm93LXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDExODBweCkge1xuICAucm93LXRpdGxlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIH1cbn1cbi5yb3ctdGl0bGUgaDEge1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5yb3ctdGl0bGUgLmJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTVmZjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5yb3ctdGl0bGUgLmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDc3Y2M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5tYWluLXdyYXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMTcwcHgpIHtcbiAgLm1haW4td3JhcCB7XG4gICAgbWF4LXdpZHRoOiAxMTcwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cblxuLnJvdy1idG5Hcm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDQ2MHB4KSB7XG4gIC5yb3ctYnRuR3JvdXAge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cbn1cbi5yb3ctYnRuR3JvdXAgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4NDhkOTU7XG4gIGNvbG9yOiAjM2M0MTQ2O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBwYWRkaW5nOiA4cHggNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbi5yb3ctYnRuR3JvdXAgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTZlODtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJvdy1idG5Hcm91cCBidXR0b246Zmlyc3QtY2hpbGQge1xuICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcbn1cbi5yb3ctYnRuR3JvdXAgYnV0dG9uOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcbn1cbi5yb3ctYnRuR3JvdXAgYnV0dG9uLmNvbXBldGl0aW9uIHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucm93LWJ0bkdyb3VwIGJ1dHRvbi5jb21wZXRpdGlvbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCI3XCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3N2NjO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDNweDtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMThweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5xdWVzdGlvbnMge1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VmZjBmMTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZmYwZjE7XG59XG4ucXVlc3Rpb25zIC5yb3cge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4ucXVlc3Rpb25zIC5yb3cgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4NDhkOTU7XG4gIHBhZGRpbmc6IDRweCA1cHg7XG59XG4ucXVlc3Rpb25zIC5yb3cgc3Bhbi5hbnN3ZXIge1xuICBjb2xvcjogIzQ4YTg2ODtcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ4YTg2ODtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnF1ZXN0aW9ucyAudGl0bGUge1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5xdWVzdGlvbnMgLnRpdGxlIGEge1xuICB0ZXh0LWRlY29yYXRpb24tbGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzAwNzdjYztcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnF1ZXN0aW9ucyAudGl0bGUgYTpob3ZlciB7XG4gIGNvbG9yOiAjNDdhN2VjO1xufVxuLnF1ZXN0aW9ucyAucm93LWxpbmsge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5xdWVzdGlvbnMgLnJvdy1saW5rIC5ocmVmIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuLnF1ZXN0aW9ucyAucm93LWxpbmsgLmhyZWYgc3BhbiB7XG4gIGNvbG9yOiAjMzk3MzlkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlY2Y0O1xuICBib3JkZXItY29sb3I6ICNlMWVjZjQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogM3B4IDZweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4ucXVlc3Rpb25zIC5yb3ctbGluayAuaHJlZiBzcGFuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NhZDVkZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnF1ZXN0aW9ucyAucm93LWxpbmsgLmFuc3dlciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM5MTk5YTE7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuLnF1ZXN0aW9ucyAucm93LWxpbmsgLmFuc3dlciBhIHtcbiAgY29sb3I6ICMwMDc3Y2M7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4ucXVlc3Rpb25zIC5yb3ctbGluayAuYW5zd2VyIGE6aG92ZXIge1xuICBjb2xvcjogIzQ3YTdlYztcbn1cbi5xdWVzdGlvbnMgLnJvdy1saW5rIC5hbnN3ZXIgYSBzcGFuIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLm1haW4tZGlzYyAudGl0bGUge1xuICBjb2xvcjogIzI0MjcyOTtcbiAgbWFyZ2luOiAyNXB4IDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTE4MHB4KSB7XG4gIC5tYWluLWRpc2MgLnRpdGxlIHtcbiAgICBwYWRkaW5nOiAzNXB4IDIwcHggMDtcbiAgfVxufVxuLm1haW4tZGlzYyAudGl0bGUgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMwMDc3Y2M7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLm1haW4tZGlzYyAudGl0bGUgYTpob3ZlciB7XG4gIGNvbG9yOiAjMzg5YmUzO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm1haW4tYXNpZGUge1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC5tYWluLWFzaWRlIHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgfVxufVxuLm1haW4tYXNpZGUgLmNvbnRlbnQge1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5tYWluLWFzaWRlIC5jb250ZW50IC5pbXBvcnRhbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmN2UzO1xuICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjM2M0MTQ2O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLm1haW4tYXNpZGUgLmNvbnRlbnQgLmltcG9ydGFudF9fdGl0bGUge1xuICBwYWRkaW5nOiAxMnB4IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM2QTczN0M7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmYyZDQ7XG59XG4ubWFpbi1hc2lkZSAuY29udGVudCAuaW1wb3J0YW50LWJsb2NrIHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm1haW4tYXNpZGUgLmNvbnRlbnQgLmltcG9ydGFudC1ibG9jayBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzNjNDE0NjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4ubWFpbi1hc2lkZSAuY29udGVudCAuaW1wb3J0YW50LWJsb2NrIGE6aG92ZXIge1xuICBjb2xvcjogIzY3NmI2ZTtcbn1cbi5tYWluLWFzaWRlIC5jb250ZW50IC5pbXBvcnRhbnQtaWNvbl9fbWVzc2FnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2ltZy9tZXNzYWdlMi5zdmdcIik7XG4gIG1pbi13aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ubWFpbi1hc2lkZSAuY29udGVudCAuaW1wb3J0YW50LWljb25fX3N0YWNrIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vaW1nL3N0YWNrLnBuZ1wiKTtcbiAgbWluLXdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgb3BhY2l0eTogMC41O1xufVxuLm1haW4tYXNpZGUgLmNvbnRlbnQgLmltcG9ydGFudC1udW0ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjNmE3MzdjO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ubWFpbi1hc2lkZSAuY29udGVudCAuZmlsdGVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDNweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzNjNDE0NjtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5tYWluLWFzaWRlIC5jb250ZW50IC5maWx0ZXItdGl0bGUge1xuICBwYWRkaW5nOiAxMnB4IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM2QTczN0M7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlNmU4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1haW4tYXNpZGUgLmNvbnRlbnQgLmZpbHRlciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzAwNzdjYztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHBhZGRpbmc6IDEycHggMTVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLm1haW4tYXNpZGUgLmNvbnRlbnQgLmZpbHRlciBhOmhvdmVyIHtcbiAgY29sb3I6ICMzODliZTM7XG59XG4ubWFpbi1hc2lkZSAuY29udGVudCAuZmlsdGVyIHNwYW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9pbWcvc3RvcC5zdmdcIik7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvcGFjaXR5OiAwLjU7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLm1haW4tYXNpZGUgLmNvbnRlbnQgLm1ldGthIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5tYWluLWFzaWRlIC5jb250ZW50IC5tZXRrYSBoNCB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgY29sb3I6ICMzQzQxNDY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4ubWFpbi1hc2lkZSAuY29udGVudCAubWV0a2EtYmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG4ubWFpbi1hc2lkZSAuY29udGVudCAubWV0a2EtbmFtZSB7XG4gIGNvbG9yOiAjMzk3MzlkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlY2Y0O1xuICBib3JkZXItY29sb3I6ICNlMWVjZjQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogNXB4IDdweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4ubWFpbi1hc2lkZSAuY29udGVudCAubWV0a2EtbmFtZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmRkZTc7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tYWluLWFzaWRlIC5jb250ZW50IC5tZXRrYS1jb3VudCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICM2YTczN2M7XG59XG4ubWFpbi1hc2lkZSAuY29udGVudCAubWV0a2EtY291bnQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiw5dcIjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAtNHB4O1xufVxuLm1haW4tYXNpZGUgLmNvbnRlbnQgLnNpZ24ge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLm1haW4tYXNpZGUgLmNvbnRlbnQgLnNpZ24gaDQge1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gIGNvbG9yOiAjM0M0MTQ2O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLm1haW4tYXNpZGUgLmNvbnRlbnQgLnNpZ24tYmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG4ubWFpbi1hc2lkZSAuY29udGVudCAuc2lnbi1uYW1lIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYzMzM3O1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDVweCA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLm1haW4tYXNpZGUgLmNvbnRlbnQgLnNpZ24tbmFtZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxODE5MWE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tYWluLWFzaWRlIC5jb250ZW50IC5zaWduLW5hbWUgLm1lZGFsIHtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5tYWluLWFzaWRlIC5jb250ZW50IC5zaWduLW5hbWUgLm1lZGFsLWJyb256ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYzk5NjY7XG59XG4ubWFpbi1hc2lkZSAuY29udGVudCAuc2lnbi1uYW1lIC5tZWRhbC1nb2xkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2MwMDtcbn1cbi5tYWluLWFzaWRlIC5jb250ZW50IC5zaWduLW5hbWUgLm1lZGFsLXNpbHZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNWM1YzU7XG59XG4ubWFpbi1hc2lkZSAuY29udGVudCAuc2lnbi1zdWJuYW1lIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogIzAwNzdjYztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG4ubWFpbi1hc2lkZSAuY29udGVudCAuc2lnbi1zdWJuYW1lOmhvdmVyIHtcbiAgY29sb3I6ICM0NGEwZTI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1haW4tbWVudV9fbW9iaWxlIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiA3N3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDI1MHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAubWFpbi1tZW51X19tb2JpbGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG4ubWFpbi1tZW51X19tb2JpbGUgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG4ubWFpbi1tZW51X19tb2JpbGUgdWwgbGkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogM3B4IDA7XG59XG4ubWFpbi1tZW51X19tb2JpbGUgdWwgbGk6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICNmNDgwMjQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmYwZjE7XG59XG4ubWFpbi1tZW51X19tb2JpbGUgdWwgbGkgYSB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogNHB4IDRweCA0cHggOHB4O1xuICBvcGFjaXR5OiAwLjk7XG59XG4ubWFpbi1tZW51X19tb2JpbGUgLmFjdGl2ZSB7XG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICNmNDgwMjQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmYwZjE7XG59XG4ubWFpbi1tZW51X19tb2JpbGUgLmFjdGl2ZSBhIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ub1F1ZXN0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1MHB4IDA7XG4gIGNvbG9yOiAjNmM1ZjVmO1xuICBmb250LXNpemU6IDIycHg7XG59IiwiICAubWFpbi1zZWN0aW9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIEBtZWRpYShtaW4td2lkdGg6IDEwMjRweCl7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2Q4ZGJkZDtcclxuICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucm93LXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICBAbWVkaWEobWluLXdpZHRoOiAxMTgwcHgpe1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaDEge1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9ue1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk1ZmY7XHJcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgMCByZ2JhKDI1NSwyNTUsMjU1LC40KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzdjYztcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAubWFpbi13cmFwIHtcclxuICAgIEBtZWRpYShtaW4td2lkdGg6IDc2OHB4KXtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEobWluLXdpZHRoOiAxMTcwcHgpIHtcclxuICAgICAgbWF4LXdpZHRoOiAxMTcwcHg7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnJvdy1idG5Hcm91cCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuXHJcbiAgICBAbWVkaWEobWluLXdpZHRoOiA0NjBweCl7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM4NDhkOTU7XHJcbiAgICAgIGNvbG9yOiAjM2M0MTQ2O1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICBwYWRkaW5nOiA4cHggNXB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTZlODtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBidXR0b246Zmlyc3QtY2hpbGQge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b246bGFzdC1jaGlsZCB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbi5jb21wZXRpdGlvbiB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIjdcIjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogN3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc3Y2M7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICB3aWR0aDogMTRweDtcclxuICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuLy99XHJcblxyXG4ucXVlc3Rpb25zIHtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWZmMGYxO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZmMGYxO1xyXG5cclxuICAucm93IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBjb2xvcjogIzg0OGQ5NTtcclxuICAgICAgcGFkZGluZzogNHB4IDVweDtcclxuICAgIH1cclxuXHJcbiAgICBzcGFuLmFuc3dlciB7XHJcbiAgICAgIGNvbG9yOiAjNDhhODY4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjNDhhODY4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGl0bGUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG5cclxuICAgIGEge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogbm9uZTtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBjb2xvcjogIzAwNzdjYztcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogIzQ3YTdlYztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnJvdy1saW5rIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIC5ocmVmIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG5cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6ICMzOTczOWQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UxZWNmNDtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNlMWVjZjQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDNweCA2cHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NhZDVkZDtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmFuc3dlciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgY29sb3I6ICM5MTk5YTE7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICMwMDc3Y2M7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICM0N2E3ZWM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubWFpbi1kaXNjIHtcclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIGNvbG9yOiAjMjQyNzI5O1xyXG4gICAgbWFyZ2luOiAyNXB4IDA7XHJcblxyXG4gICAgQG1lZGlhKG1pbi13aWR0aDogMTE4MHB4KSB7XHJcbiAgICAgIHBhZGRpbmc6IDM1cHggMjBweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIGEge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAjMDA3N2NjO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzOztcclxuXHJcbiAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6ICMzODliZTM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5tYWluLWFzaWRlIHtcclxuXHJcbiAgQG1lZGlhKG1pbi13aWR0aDo3NjhweCkge1xyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgbWluLXdpZHRoOiAzMDBweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYShtaW4td2lkdGg6MTAyNHB4KSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgICAuaW1wb3J0YW50IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZjdlMztcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDNweCByZ2JhKDAsMCwwLC41KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIGNvbG9yOiAjM2M0MTQ2O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cclxuICAgICAgJl9fdGl0bGUge1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHggMTVweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICM2QTczN0M7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZjJkNDtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYtYmxvY2sge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiAjM2M0MTQ2O1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICM2NzZiNmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLWljb24ge1xyXG5cclxuICAgICAgICAmX19tZXNzYWdlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2ltZy9tZXNzYWdlMi5zdmdcIik7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmX19zdGFja3tcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2ltZy9zdGFjay5wbmdcIik7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICBvcGFjaXR5OiAuNTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYtbnVtIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgY29sb3I6ICM2YTczN2M7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZpbHRlcntcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDNweCByZ2JhKDAsMCwwLC41KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIGNvbG9yOiAjM2M0MTQ2O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cclxuICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgcGFkZGluZzogMTJweCAxNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzZBNzM3QztcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZTZlODtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICBhIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICMwMDc3Y2M7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAgICAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgY29sb3I6ICMzODliZTM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9pbWcvc3RvcC5zdmdcIik7XHJcbiAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBvcGFjaXR5OiAuNTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5tZXRrYSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblxyXG4gICAgICBoNCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgICAgICAgY29sb3I6ICMzQzQxNDY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi1ibG9jayB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYtbmFtZSB7XHJcbiAgICAgICAgY29sb3I6ICMzOTczOWQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UxZWNmNDtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNlMWVjZjQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCA3cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkZGU3O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLWNvdW50IHtcclxuICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgY29sb3I6ICM2YTczN2M7XHJcblxyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIlxcZDdcIjtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIGxlZnQ6IC00cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zaWduIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHJcbiAgICAgIGg0IHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuICAgICAgICBjb2xvcjogIzNDNDE0NjtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLWJsb2NrIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgJi1uYW1lIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJmMzMzNztcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDdweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxODE5MWE7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWVkYWwge1xyXG4gICAgICAgICAgd2lkdGg6IDhweDtcclxuICAgICAgICAgIGhlaWdodDogOHB4O1xyXG5cclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG5cclxuICAgICAgICAgICYtYnJvbnplIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjOTk2NjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmLWdvbGQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjYzAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICYtc2lsdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2M1YzVjNTtcclxuICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi1zdWJuYW1lIHtcclxuICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDc3Y2M7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogIzQ0YTBlMjtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubWFpbi1tZW51X19tb2JpbGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDc3cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG5cclxuICBAbWVkaWEobWluLXdpZHRoOiAxMDI0cHgpe1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG5cclxuICAgIGxpIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBhZGRpbmc6IDNweCAwO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICNmNDgwMjQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjBmMTtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIGEge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiA0cHggNHB4IDRweCA4cHg7XHJcbiAgICAgICAgb3BhY2l0eTogLjk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hY3RpdmUge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgI2Y0ODAyNDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmYwZjE7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbn1cclxuXHJcbi5ub1F1ZXN0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNTBweCAwO1xyXG4gIGNvbG9yOiAjNmM1ZjVmO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewCreateQuestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-create-quest',
                templateUrl: './view-create-quest.component.html',
                styleUrls: ['./view-create-quest.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _question_service__WEBPACK_IMPORTED_MODULE_3__["QuestSearch"] }]; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\WORK_BIZUP_STUDIO\Сайты\angular\my-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map