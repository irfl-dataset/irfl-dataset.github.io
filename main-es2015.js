(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/1tQ":
/*!********************************************************************************!*\
  !*** ./src/app/pages/personal-details-form/personal-details-form.component.ts ***!
  \********************************************************************************/
/*! exports provided: PersonalDetailsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalDetailsFormComponent", function() { return PersonalDetailsFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_personal_details_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./personal-details-form.component.html */ "x78e");
/* harmony import */ var _personal_details_form_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./personal-details-form.component.scss */ "kEJ5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _types_experiment_mode_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../types/experiment-mode.enum */ "UElU");






let PersonalDetailsFormComponent = class PersonalDetailsFormComponent {
    constructor(fb) {
        this.fb = fb;
        this.personalDetails$ = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.isCreate = false;
        this.experimentMode = _types_experiment_mode_enum__WEBPACK_IMPORTED_MODULE_5__["ExperimentModeEnum"].DEFAULT;
        this.skipPersonalDetails = false;
        this.experimentModes = new Object(_types_experiment_mode_enum__WEBPACK_IMPORTED_MODULE_5__["ExperimentModeEnum"]);
        this.ages = [...Array(101).keys()].slice(-93).map(num => { return { value: num, viewValue: num }; });
        this.gender = [{ value: 'female', viewValue: 'Female' }, { value: 'male', viewValue: 'Male' }, { viewValue: 'Non-binary', value: 'non-binary' },
            { viewValue: 'Transgender', value: 'transgender' }, { viewValue: 'Intersex', value: 'intersex' }, { viewValue: 'I prefer not to say', value: 'None' }];
        this.education = [{ value: 'None', viewValue: 'None' }, { value: 'ElementarySchool', viewValue: 'Elementary School' }, { value: 'HighSchool', viewValue: 'High School' },
            { value: 'Bachelor', viewValue: 'College or University Bachelor' }, { value: 'Master', viewValue: 'College or University Master' }];
        this.speaker = [{ value: 'Native', viewValue: 'Yes' }, { value: 'NoneNative', viewValue: 'No' }];
        this.instructionsOk = false;
        this.personalDetailsForm = this.fb.group({
            ages: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            education: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            speaker: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    ngOnInit() {
    }
    onSubmit(event) {
        if (this.personalDetailsForm.valid) {
            this.personalDetails$.next(this.personalDetailsForm.value);
            console.log(this.personalDetailsForm.value);
        }
    }
    setInstructions() {
        this.instructionsOk = true;
        if (this.skipPersonalDetails) {
            this.personalDetails$.next({});
        }
    }
};
PersonalDetailsFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
PersonalDetailsFormComponent.propDecorators = {
    personalDetails$: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    isCreate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    experimentMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    skipPersonalDetails: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PersonalDetailsFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-personal-details-form',
        template: _raw_loader_personal_details_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_personal_details_form_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], PersonalDetailsFormComponent);



/***/ }),

/***/ "/s1f":
/*!**********************************************!*\
  !*** ./src/app/pages/main/main.component.ts ***!
  \**********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_main_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./main.component.html */ "bBbC");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.scss */ "3/XB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _types_task_dictionary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../types/task-dictionary */ "x+8Y");






let MainComponent = class MainComponent {
    constructor(router, changeDetectorRef) {
        this.router = router;
        this.changeDetectorRef = changeDetectorRef;
        this.simile = Object(_types_task_dictionary__WEBPACK_IMPORTED_MODULE_5__["getIRFLTask"])('simile');
        this.idiom = Object(_types_task_dictionary__WEBPACK_IMPORTED_MODULE_5__["getIRFLTask"])('idiom');
        this.metaphor = Object(_types_task_dictionary__WEBPACK_IMPORTED_MODULE_5__["getIRFLTask"])('metaphor');
        this.selectedFigureOfSpeech = 'an idiom';
        this.imageClassification = _types_task_dictionary__WEBPACK_IMPORTED_MODULE_5__["imageClassificationExampleTask"];
        this.window = window;
        window.name = 'IRFL';
    }
    ngOnInit() {
        this.changeDetectorRef.detectChanges();
    }
    ngOnDestroy() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
    }
    navigateHome() {
        this.router.navigateByUrl(this.router.url);
    }
    onSimileTabSelected() {
        this.idiom.clearCandidates();
        this.selectedFigureOfSpeech = 'a simile';
    }
    onIdiomTabSelected() {
        this.simile.clearCandidates();
        this.selectedFigureOfSpeech = 'an idiom';
    }
    onMetaphorTabSelected() {
        this.metaphor.clearCandidates();
        this.selectedFigureOfSpeech = 'a metaphor';
    }
};
MainComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
MainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-main',
        template: _raw_loader_main_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_main_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]])
], MainComponent);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\devel\IRFL-website\src\main.ts */"zUnb");


/***/ }),

/***/ "0Exn":
/*!************************************************************************************!*\
  !*** ./src/app/image-classification-board/image-classification-board.component.ts ***!
  \************************************************************************************/
/*! exports provided: ImageClassificationBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageClassificationBoardComponent", function() { return ImageClassificationBoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_image_classification_board_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./image-classification-board.component.html */ "FkAs");
/* harmony import */ var _image_classification_board_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-classification-board.component.scss */ "NzOQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _types_image_classification_task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types/image-classification-task */ "wAWi");
/* harmony import */ var _types_image_categories_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../types/image-categories-enum */ "OZMB");
/* harmony import */ var _types_magnify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../types/magnify */ "koS4");








let ImageClassificationBoardComponent = class ImageClassificationBoardComponent extends _types_magnify__WEBPACK_IMPORTED_MODULE_7__["Magnify"] {
    constructor(changeDetectionRef) {
        super(String(Math.floor(Math.random() * 10000000000)));
        this.changeDetectionRef = changeDetectionRef;
        this.secondaryCategories = Object.values(_types_image_categories_enum__WEBPACK_IMPORTED_MODULE_6__["SimilesConceptsCategoriesEnum"]);
        this.categories = Object.values(_types_image_categories_enum__WEBPACK_IMPORTED_MODULE_6__["ImageCategoriesEnum"]);
        this._imageClassificationTask = null;
        this.isSimile = false;
        this.noSelection = true;
        this.showInfo = false;
        this.showTree = false;
        this.annotations = null;
        this.annotationsAgreement = null;
        this.workerStar = null;
        this.imageLoaded = false;
        this._submit = false;
        this.title = '';
        this.showHint = false;
        this.showCorrectAnswer = false;
        this.isFirst = false;
        this.reviewMode = false;
        this.selected$ = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.phraseFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.secondaryCategories.pop();
    }
    ngOnInit() {
        this.onImageLoad();
    }
    ngAfterViewInit() {
        this.magnify();
        this.hideZoom();
    }
    init() {
        const phrase = this.isSimile ? `The ${this._imageClassificationTask.serverData['target_concept']} is ${this._imageClassificationTask.phrase}` :
            this._imageClassificationTask.phrase;
        this.phraseFormControl.setValue(phrase);
        this.detectChanges();
    }
    set imageClassificationTask(task) {
        var _a;
        this._imageClassificationTask = task;
        this.isSimile = this._imageClassificationTask.type === 'simile';
        this.categories = this.isSimile ? Object.values(_types_image_categories_enum__WEBPACK_IMPORTED_MODULE_6__["SimilesImagesCategoriesEnum"]) : Object.values(_types_image_categories_enum__WEBPACK_IMPORTED_MODULE_6__["ImageCategoriesEnum"]);
        this.categories.pop();
        const annotationsData = (_a = this._imageClassificationTask) === null || _a === void 0 ? void 0 : _a.serverData['annotations'];
        this.annotations = annotationsData ?
            JSON.stringify(annotationsData.map(annotation => { return { worker: annotation['worker_id'], category: annotation['category'] }; })) :
            null;
        if (this.annotations != null) {
            const annotationDetails = this.getAgreementDetails(this.annotations);
            this.annotationsAgreement = annotationDetails.agreement;
            this.workerStar = annotationDetails.star;
        }
        this.init();
    }
    set submit(status) {
        this._submit = status;
    }
    selectCategory(category, secondCategory = null) {
        if (!this._submit && this.imageLoaded) {
            this._imageClassificationTask.category = !!category ? category : this._imageClassificationTask.category;
            this._imageClassificationTask.secondaryCategory = !!secondCategory ? secondCategory : this._imageClassificationTask.secondaryCategory;
            if (!!secondCategory) {
                this._imageClassificationTask.category = _types_image_categories_enum__WEBPACK_IMPORTED_MODULE_6__["SimilesImagesCategoriesEnum"].Default;
                this.categories = Object.values(_types_image_categories_enum__WEBPACK_IMPORTED_MODULE_6__["SimilesImagesCategoriesEnum"]);
                this.categories.pop();
                if (this._imageClassificationTask.secondaryCategory === _types_image_categories_enum__WEBPACK_IMPORTED_MODULE_6__["SimilesConceptsCategoriesEnum"].Source) {
                    const natural = this.categories.pop();
                    this.categories.pop();
                    this.categories.push(natural);
                }
                else if (this._imageClassificationTask.secondaryCategory === _types_image_categories_enum__WEBPACK_IMPORTED_MODULE_6__["SimilesConceptsCategoriesEnum"].None) {
                    this.categories = [_types_image_categories_enum__WEBPACK_IMPORTED_MODULE_6__["SimilesImagesCategoriesEnum"].Natural];
                    this._imageClassificationTask.category = _types_image_categories_enum__WEBPACK_IMPORTED_MODULE_6__["SimilesImagesCategoriesEnum"].Natural;
                }
            }
            if (this._imageClassificationTask.isClassified()) {
                this.selected$.emit(this._imageClassificationTask);
            }
            this.detectChanges();
        }
    }
    toggleInfo() {
        this.showInfo = !this.showInfo;
        this.detectChanges();
    }
    toggleTree() {
        this.showTree = !this.showTree;
        this.detectChanges();
    }
    detectChanges() {
        this.changeDetectionRef.markForCheck();
        this.changeDetectionRef.detectChanges();
    }
    showZoom() {
        this.glass.style.display = 'block';
    }
    hideZoom() {
        this.glass.style.display = 'none';
    }
    onImageLoad() {
        const logo = document.getElementById(this.imageId);
        logo.onload = () => {
            this.imageLoaded = true;
            this.img.style.backgroundImage = 'none';
        };
    }
    getAgreementDetails(annotations) {
        const parsedAnnotations = JSON.parse(annotations);
        const annotatedCategories = parsedAnnotations.map(annotation => annotation['category']);
        const mostCommon = this.getMostCommonElement(annotatedCategories);
        const agreement = annotatedCategories.filter(x => x === mostCommon).length / annotatedCategories.length;
        if (agreement < 0.5) {
            const leastCommon = this.getMostCommonElement(annotatedCategories, true);
            return { agreement, star: parsedAnnotations.find(anot => anot['category'] === leastCommon)['worker'] };
        }
        return { agreement, star: null };
    }
    getMostCommonElement(arr, revert = false) {
        const store = {};
        arr.forEach((num) => store[num] ? store[num] += 1 : store[num] = 1);
        const arrSorted = Object.keys(store).sort((a, b) => store[b] - store[a]);
        return revert ? arrSorted.reverse()[0] : arrSorted[0];
    }
};
ImageClassificationBoardComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
ImageClassificationBoardComponent.propDecorators = {
    _submit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    showHint: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    showCorrectAnswer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    isFirst: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    reviewMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    selected$: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    imageClassificationTask: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    submit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ImageClassificationBoardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-image-classification-board',
        template: _raw_loader_image_classification_board_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_image_classification_board_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]])
], ImageClassificationBoardComponent);



/***/ }),

/***/ "13OI":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/mturk-personal-profile/murk-personal-profile.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MurkPersonalProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MurkPersonalProfileComponent", function() { return MurkPersonalProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_murk_personal_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./murk-personal-profile.component.html */ "mM1V");
/* harmony import */ var _murk_personal_profile_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./murk-personal-profile.component.scss */ "m6ph");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_server_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/server-request.service */ "dXuD");
/* harmony import */ var _types_mturk_task__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../types/mturk-task */ "Y9Oq");
/* harmony import */ var _types_task_dictionary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../types/task-dictionary */ "x+8Y");
/* harmony import */ var confetti_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! confetti-js */ "+3QO");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");











let MurkPersonalProfileComponent = class MurkPersonalProfileComponent extends _types_mturk_task__WEBPACK_IMPORTED_MODULE_7__["MturkTask"] {
    constructor(router, activeRouter, changeDetectorRef, serverRequestService) {
        super();
        this.router = router;
        this.activeRouter = activeRouter;
        this.changeDetectorRef = changeDetectorRef;
        this.serverRequestService = serverRequestService;
        this.hint = '';
        this.date = new Date();
        this.pagination = 3;
        this.pagination1 = 1;
        this.answers = new Map();
        this.practiceMode = false;
        this._submit = false;
        // goodJobHint = 'Good Job!';
        this.turkSubmitTo = '';
        this.assignmentId = '';
        this.solveCreate = false;
        this.confettiShown = false;
        this.confettiSettings = { target: 'confetti', height: document.documentElement.scrollHeight };
        this.timerSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.example = _types_task_dictionary__WEBPACK_IMPORTED_MODULE_8__["imageClassificationExampleTask"];
        this.imageClassificationTasks = null;
        this.updateConfettiSettings$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        window.name = 'IRFL';
        this.id = this.activeRouter.snapshot.params.id;
        if (this.id && typeof this.id === 'string') {
            const plusAnalysis = this.id.includes('+');
            this.id = this.id.split('+')[0];
            this.serverRequestService.getWorkerStats(this.id).subscribe(stats => this.workerStats = stats);
            this.serverRequestService.getWorkerSpacialAnswers(this.id).subscribe((tasks) => {
                this.imageClassificationTasks = tasks.filter((task) => plusAnalysis || !task.serverData['answer_family_different_from_two_options_with_different_family']);
                this.turkSubmitTo = this.activeRouter.snapshot.queryParams.turkSubmitTo;
                this.assignmentId = this.activeRouter.snapshot.queryParams.assignmentId;
            });
        }
        console.log(this.activeRouter.snapshot);
    }
    ngOnInit() {
        this.changeDetectorRef.detectChanges();
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('index-page');
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        this.initConfettiUpdater();
    }
    ngOnDestroy() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    submit() {
        this.taskSubmit();
    }
    trainingSubmit() {
        this._submit = this.imageClassificationTasks.map(task => task.isClassified()).every(val => val === true);
        if (this._submit) {
            const allClassifiedCorrectly = this.imageClassificationTasks.map(task => task.isClassifiedCorrect()).every(val => val === true);
            if (allClassifiedCorrectly) {
                this.renderConfetti();
                this.showHint('Good Job! You passed the training!', 30000);
            }
            else {
                this.showHint('There were some incorrect classifications. Try again after reviewing the hints!', 30000);
            }
        }
        else {
            this.showHint('Please choose one of the categories in all of the instances.', 10000);
        }
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(50).subscribe(() => window.scrollTo(0, document.body.scrollHeight));
    }
    taskSubmit() {
        this._submit = this.imageClassificationTasks.map(task => task.isClassified()).every(val => val === true);
        if (this._submit) { // regular case
            this.handleSubmit(this.assignmentId, this.turkSubmitTo, this.imageClassificationTasks);
        }
        else {
            this.showHint('Please choose one of the categories in all of the instances.');
        }
    }
    showHint(hint, time = 3000) {
        this.hint = hint;
        this.timerSubscription.unsubscribe();
        this.timerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(time).subscribe(() => {
            this.hint = '';
        });
    }
    restart() {
        this.clearConfetti();
        this.imageClassificationTasks.forEach(task => task.init());
        this._submit = false;
    }
    initConfettiUpdater() {
        this.updateConfettiSettings$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.unsubscribe$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["throttleTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])((num) => num !== this.confettiSettings.height))
            .subscribe((num) => {
            this.confettiSettings = { target: 'confetti', max: 200, height: document.documentElement.scrollHeight };
        });
    }
    renderConfetti() {
        if (!this.confettiShown) {
            if (!this.confetti) {
                this.confetti = new confetti_js__WEBPACK_IMPORTED_MODULE_9__["default"](this.confettiSettings);
            }
            this.confetti.render();
            this.confettiShown = true;
        }
    }
    clearConfetti() {
        if (!this.confetti) {
            this.confetti = new confetti_js__WEBPACK_IMPORTED_MODULE_9__["default"](this.confettiSettings);
        }
        if (this.confettiShown) {
            this.confetti.clear();
            this.confettiShown = false;
            this.confetti = new confetti_js__WEBPACK_IMPORTED_MODULE_9__["default"](this.confettiSettings);
        }
    }
};
MurkPersonalProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _services_server_request_service__WEBPACK_IMPORTED_MODULE_6__["ServerRequestService"] }
];
MurkPersonalProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-mturk-personal-profile',
        template: _raw_loader_murk_personal_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_murk_personal_profile_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"],
        _services_server_request_service__WEBPACK_IMPORTED_MODULE_6__["ServerRequestService"]])
], MurkPersonalProfileComponent);



/***/ }),

/***/ "3/XB":
/*!**************************************!*\
  !*** ./src/app/pages/main/main.scss ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".confetti, #confetti {\n  width: 100% !important;\n  position: absolute !important;\n  left: 50% !important;\n  transform: translate(-50%, 0) !important;\n}\n\n.col-6 {\n  padding-bottom: 30px !important;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n\n.nav-tabs-danger {\n  padding-top: 1rem;\n}\n\n::ng-deep .tab-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n::ng-deep .nav-tabs {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 390px;\n}\n\n::ng-deep .tab-content {\n  padding-top: 0 !important;\n}\n\n::ng-deep .nav-tabs > li {\n  transform: scale(1.2);\n}\n\nh1, h3 {\n  color: #4d5568 !important;\n}\n\n.img-fluid {\n  width: 150px;\n  height: 203.469px;\n}\n\n@media (max-width: 800px) {\n  .stats-row {\n    width: 93% !important;\n  }\n}\n\n@media (max-width: 980px) {\n  .h1-seo {\n    font-size: 2em;\n  }\n}\n\n.stats-row {\n  width: 75%;\n  display: flex;\n  flex-basis: 33.3333333%;\n  justify-content: space-around;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n  margin: auto;\n}\n\nsmall {\n  font-size: 1rem;\n}\n\na {\n  color: #4d5568;\n  font-weight: inherit;\n}\n\n:host ::ng-deep small {\n  margin-bottom: 0.5rem !important;\n}\n\n.stats-block {\n  padding: 1.5rem;\n}\n\n.stats-container {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n\n.stats-lower-label {\n  font-size: 1.5rem;\n  text-align: center;\n  padding-bottom: 4rem;\n}\n\n.stat-label {\n  font-size: 2rem;\n  text-align: center;\n  font-weight: 700;\n}\n\n.stat-description {\n  text-align: center;\n}\n\n.abstract {\n  cursor: pointer;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n  width: 100%;\n  height: 153px;\n  display: flex;\n  justify-content: center;\n}\n\n.content-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 13rem;\n}\n\n.uni-logo, .bgu-logo, .unc-logo {\n  margin-right: 7px;\n  height: 30px;\n  width: 23px;\n}\n\n.bgu-logo, .unc-logo {\n  width: 30px !important;\n}\n\n.flex {\n  display: flex !important;\n}\n\n.sub-title {\n  font-size: 2rem;\n}\n\n.stats-page-ref {\n  color: #fd969e !important;\n}\n\nh3 {\n  text-transform: none !important;\n}\n\n.analogies-board {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-bottom: 1rem;\n  padding-top: 0rem !important;\n}\n\n@media (max-width: 450px) {\n  .stats-block {\n    padding: 0.5rem !important;\n  }\n\n  .stat-label {\n    font-size: 1.3rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYWluLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3Q0FBQTtBQUNGOztBQUVBO0VBQ0UsK0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0MscUJBQUE7QUFDRDs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UscUJBQUE7RUFDRjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxjQUFBO0VBQUY7QUFDRjs7QUFHQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLDZDQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0FBREY7O0FBSUE7RUFDRSxnQ0FBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtBQURGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUtBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBRkY7O0FBS0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7QUFGRjs7QUFNQTtFQUNFLGVBQUE7RUFDQSw2Q0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBSEY7O0FBTUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFIRjs7QUFNQTtFQUNFLHNCQUFBO0FBSEY7O0FBTUE7RUFDRSx3QkFBQTtBQUhGOztBQU1BO0VBQ0UsZUFBQTtBQUhGOztBQU1BO0VBQ0UseUJBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtBQUhGOztBQU1BO0VBQ0U7SUFDRSwwQkFBQTtFQUhGOztFQU1BO0lBQ0UsaUJBQUE7RUFIRjtBQUNGIiwiZmlsZSI6Im1haW4uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb25mZXR0aSwgI2NvbmZldHRpIHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gIGxlZnQ6IDUwJSAhaW1wb3J0YW50O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb2wtNiB7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHggIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdi10YWJzLWRhbmdlciB7XHJcbiAgcGFkZGluZy10b3A6IDFyZW07XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudGFiLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubmF2LXRhYnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgd2lkdGg6IDM5MHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnRhYi1jb250ZW50IHtcclxuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm5hdi10YWJzID4gbGkge1xyXG4gdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG59XHJcblxyXG5oMSwgaDMge1xyXG4gIGNvbG9yOiAjNGQ1NTY4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbWctZmx1aWQge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDIwMy40NjlweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgLnN0YXRzLXJvdyB7XHJcbiAgICB3aWR0aDogOTMlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTgwcHgpIHtcclxuICAuaDEtc2VvIHtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gIH1cclxufVxyXG5cclxuLnN0YXRzLXJvdyB7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtYmFzaXM6IDMzLjMzMzMzMzMlO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiKDAgMCAwIC8gMTUlKTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbnNtYWxsIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiAjNGQ1NTY4O1xyXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgc21hbGwge1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5zdGF0cy1ibG9jayB7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG5cclxufVxyXG5cclxuLnN0YXRzLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdGF0cy1sb3dlci1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiA0cmVtO1xyXG59XHJcblxyXG4uc3RhdC1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uc3RhdC1kZXNjcmlwdGlvbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmFic3RyYWN0IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2IoMCAwIDAgLyAxNSUpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTUzcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRlbnQtY2VudGVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxM3JlbTtcclxufVxyXG5cclxuLnVuaS1sb2dvLCAuYmd1LWxvZ28sLnVuYy1sb2dvIHtcclxuICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDIzcHg7XHJcbn1cclxuXHJcbi5iZ3UtbG9nbywgLnVuYy1sb2dvIHtcclxuICB3aWR0aDogMzBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleCB7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3ViLXRpdGxlIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbi5zdGF0cy1wYWdlLXJlZiB7XHJcbiAgY29sb3I6ICNmZDk2OWUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaDMge1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hbmFsb2dpZXMtYm9hcmQge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gIHBhZGRpbmctdG9wOiAwcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gIC5zdGF0cy1ibG9jayB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5zdGF0LWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIH1cclxuXHJcbn0iXX0= */");

/***/ }),

/***/ "4vH2":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/explore/explore.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar [isCollapsed]=\"isCollapsed\" (click)=\"onNavbarClick($event)\"></app-navbar>\r\n<div class=\"wrapper\">\r\n    <div class=\"page-header header-filter\">\r\n        <div class=\"container center-container\">\r\n            <div class=\"content-center brand\">\r\n                <h3 class=\"main-label\">\r\n                    IRFL Task\r\n                </h3>\r\n                <div class=\"label hint\"\r\n                     [style]=\"{'background-color': responseBackgroundColor, visibility: responseBackgroundColor ? 'visible' : 'hidden', color: responseTextColor}\">\r\n                    {{hint}}\r\n                </div>\r\n                <div class=\"task-container\">\r\n                    <div *ngIf=\"loadingFirstExample\" class=\"lds-facebook\"><div></div><div></div><div></div></div>\r\n                    <app-task-board class=\"analogies-board\" [irflTask]=\"irflTask\"\r\n                                    [enablePointer]=\"true\" [submit]=\"_submit\"\r\n                                    [info]=\"'Several images are presented below. \\n A figurative phrase and number of associated images are given. \\n                     Choose the images that best visualize the figurative phrase.'\"\r\n                                    *ngIf=\"this.irflTask\"></app-task-board>\r\n                    <div class=\"test-me-container\">\r\n                        <div>\r\n                            <div [style]=\"{'color': 'black !important'}\">Candidates </div>\r\n                            <select (change)=\"onCandidatesSelect($event.target.value)\" >\r\n                                <option *ngFor=\"let candidate of candidates\" [value]=\"candidate.value\" [style.color]=\"'black'\">\r\n                                    {{candidate.viewValue}}\r\n                                </option>\r\n                            </select>\r\n                        </div>\r\n                        <button class=\"btn btn-neutral btn-big\" [disabled]=\"exampleIndex === 1\" (click)=\"moveLeft()\">\r\n                            <li class=\"fas fa-arrow-left\"></li>\r\n                        </button>\r\n                        <button class=\"btn btn-neutral btn-big\" [ngClass]=\"{'submitted': _submit}\"\r\n                                (click)=\"submit()\">{{ 'Submit' }}</button>\r\n                        <button class=\"btn btn-neutral btn-big\" (click)=\"restartPractice()\">\r\n                            <li class=\"fas fa-redo-alt\"></li>\r\n                        </button>\r\n                        <button class=\"btn btn-neutral btn-big\" (click)=\"moveRight()\">\r\n                            <li class=\"fas fa-arrow-right\"></li>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"label hint\" [ngClass]=\"{'no-clue': hint === '' || responseBackgroundColor}\">\r\n                        <i style=\"color: red\" class=\"fas fa-times\"\r\n                           *ngIf=\"hint != '' && hint != goodJobHint\"></i>\r\n                        <i style=\"color: green\" class=\"fas fa-check\"\r\n                           *ngIf=\"hint == goodJobHint\"></i>\r\n                        {{hint}}\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <footer class=\"footer\">\r\n        <div class=\"container\">\r\n            <div class=\"footer-row\">\r\n                <a>Maintained by Lampent</a>\r\n            </div>\r\n        </div>\r\n    </footer>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "6S4h":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/mturk-image-classification-task/mturk-image-classification-task.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: MturkImageClassificationTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MturkImageClassificationTaskComponent", function() { return MturkImageClassificationTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_mturk_image_classification_task_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./mturk-image-classification-task.component.html */ "8eSX");
/* harmony import */ var _mturk_image_classification_task_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mturk-image-classification-task.component.scss */ "V/EO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_server_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/server-request.service */ "dXuD");
/* harmony import */ var _types_mturk_task__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../types/mturk-task */ "Y9Oq");
/* harmony import */ var _types_task_dictionary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../types/task-dictionary */ "x+8Y");
/* harmony import */ var confetti_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! confetti-js */ "+3QO");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");











let MturkImageClassificationTaskComponent = class MturkImageClassificationTaskComponent extends _types_mturk_task__WEBPACK_IMPORTED_MODULE_7__["MturkTask"] {
    constructor(router, activeRouter, changeDetectorRef, serverRequestService) {
        super();
        this.router = router;
        this.activeRouter = activeRouter;
        this.changeDetectorRef = changeDetectorRef;
        this.serverRequestService = serverRequestService;
        this.hint = '';
        this.date = new Date();
        this.pagination = 3;
        this.pagination1 = 1;
        this.answers = new Map();
        this.practiceMode = false;
        this._submit = false;
        // goodJobHint = 'Good Job!';
        this.turkSubmitTo = '';
        this.assignmentId = '';
        this.solveCreate = false;
        this.isTrain = false;
        this.confettiShown = false;
        this.confettiSettings = { target: 'confetti', height: document.documentElement.scrollHeight };
        this.timerSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.example = _types_task_dictionary__WEBPACK_IMPORTED_MODULE_8__["imageClassificationExampleTask"];
        this.imageClassificationTasks = null;
        this.updateConfettiSettings$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        window.name = 'IRFL';
        this.id = this.activeRouter.snapshot.params.id;
        if (this.id && typeof this.id === 'string') {
            this.isTrain = this.id === 'train';
            this.serverRequestService.getIRFLImageClassificationTasks(this.id).subscribe((tasks) => {
                this.turkSubmitTo = this.activeRouter.snapshot.queryParams.turkSubmitTo;
                this.assignmentId = this.activeRouter.snapshot.queryParams.assignmentId;
                console.log(this.turkSubmitTo);
                console.log(this.assignmentId);
                this.imageClassificationTasks = tasks;
            });
        }
        console.log(this.activeRouter.snapshot);
    }
    ngOnInit() {
        this.changeDetectorRef.detectChanges();
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('index-page');
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        this.initConfettiUpdater();
    }
    ngOnDestroy() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    ngAfterContentChecked() {
        if (this.isTrain) {
            this.updateConfettiSettings$.next(document.documentElement.scrollHeight);
        }
    }
    submit() {
        if (this.isTrain) { // train case
            this.trainingSubmit();
        }
        else {
            this.taskSubmit();
        }
    }
    trainingSubmit() {
        this._submit = this.imageClassificationTasks.map(task => task.isClassified()).every(val => val === true);
        if (this._submit) {
            const allClassifiedCorrectly = this.imageClassificationTasks.map(task => task.isClassifiedCorrect()).every(val => val === true);
            if (allClassifiedCorrectly) {
                this.renderConfetti();
                this.showHint('Good Job! You passed the training!', 30000);
            }
            else {
                this.showHint('There were some incorrect classifications. Try again after reviewing the hints!', 30000);
            }
        }
        else {
            this.showHint('Please choose one of the categories in all of the instances.', 10000);
        }
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(50).subscribe(() => window.scrollTo(0, document.body.scrollHeight));
    }
    taskSubmit() {
        this._submit = this.imageClassificationTasks.map(task => task.isClassified()).every(val => val === true);
        if (this._submit) { // regular case
            this.handleSubmit(this.assignmentId, this.turkSubmitTo, this.imageClassificationTasks);
        }
        else {
            this.showHint('Please choose one of the categories in all of the instances.');
        }
    }
    showHint(hint, time = 3000) {
        this.hint = hint;
        this.timerSubscription.unsubscribe();
        this.timerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(time).subscribe(() => {
            this.hint = '';
        });
    }
    restart() {
        this.clearConfetti();
        this.imageClassificationTasks.forEach(task => task.init());
        this._submit = false;
    }
    initConfettiUpdater() {
        this.updateConfettiSettings$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.unsubscribe$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["throttleTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])((num) => num !== this.confettiSettings.height))
            .subscribe((num) => {
            this.confettiSettings = { target: 'confetti', max: 200, height: document.documentElement.scrollHeight };
        });
    }
    renderConfetti() {
        if (!this.confettiShown) {
            if (!this.confetti) {
                this.confetti = new confetti_js__WEBPACK_IMPORTED_MODULE_9__["default"](this.confettiSettings);
            }
            this.confetti.render();
            this.confettiShown = true;
        }
    }
    clearConfetti() {
        if (!this.confetti) {
            this.confetti = new confetti_js__WEBPACK_IMPORTED_MODULE_9__["default"](this.confettiSettings);
        }
        if (this.confettiShown) {
            this.confetti.clear();
            this.confettiShown = false;
            this.confetti = new confetti_js__WEBPACK_IMPORTED_MODULE_9__["default"](this.confettiSettings);
        }
    }
};
MturkImageClassificationTaskComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _services_server_request_service__WEBPACK_IMPORTED_MODULE_6__["ServerRequestService"] }
];
MturkImageClassificationTaskComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-mturk-image-classification-task',
        template: _raw_loader_mturk_image_classification_task_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_mturk_image_classification_task_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"],
        _services_server_request_service__WEBPACK_IMPORTED_MODULE_6__["ServerRequestService"]])
], MturkImageClassificationTaskComponent);



/***/ }),

/***/ "8eSX":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mturk-image-classification-task/mturk-image-classification-task.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <canvas id=\"confetti\" [ngStyle]=\"{position: 'absolute', 'pointer-events': 'none'}\"></canvas>\n    <div class=\"page-header header-filter\">\n        <div class=\"container center-container\" *ngIf=\"imageClassificationTasks?.length\">\n            <div class=\"content-center brand\">\n                <div class=\"task-container\">\n<!--                    <app-image-classification-board [imageClassificationTask]=\"example\" [_submit]=\"_submit\"></app-image-classification-board>-->\n                    <app-image-classification-board *ngFor=\"let task of imageClassificationTasks; let i = index;\" class=\"analogies-board\" [imageClassificationTask]=\"task\"\n                                                    [showHint]=\"isTrain && _submit\" [showCorrectAnswer]=\"isTrain && _submit\" [submit]=\"_submit\" [isFirst]=\"i === 0\">\n                    </app-image-classification-board>\n                    <div class=\"test-me-container\">\n                        <button class=\"btn btn-neutral btn-big\" [ngClass]=\"{'submitted': _submit}\"\n                                (click)=\"submit()\">{{ 'Submit' }}</button>\n                        <button class=\"btn btn-neutral btn-big\" *ngIf=\"isTrain\"\n                                (click)=\"restart()\"><li class=\"fas fa-redo-alt\"></li></button>\n                    </div>\n                    <div class=\"label hint\" [ngClass]=\"{'no-clue': hint === ''}\">\n                        {{hint}}\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n    <footer class=\"footer\">\n        <div class=\"container\">\n            <div class=\"footer-row\">\n                <a>Maintained by Lampent</a>\n            </div>\n        </div>\n    </footer>\n</div>\n\n\n");

/***/ }),

/***/ "9/AZ":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/leaderboard/leaderboard.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar [isCollapsed]=\"isCollapsed\"></app-navbar>\r\n<div class=\"wrapper\">\r\n    <div class=\"page-header header-filter\">\r\n        <div class=\"container center-container\">\r\n            <div class=\"nav-tabs-danger\">\r\n                    <div class=\"content-center brand ai-leaderboard\">\r\n                        <h4 class=\"main-label\">\r\n                            AI Models Leaderboard 🏆\r\n                        </h4>\r\n                        <div class=\"submit-label\">To submit your model performance to our leaderboard, send us the details to <a href=\"mailto:irfl.dataset@gmail.com\r\n\">irfl.dataset@gmail.com</a>.\r\n\r\n                        </div>\r\n                        <tabset class=\"task-tabs\">\r\n                            <tab heading=\"Detection Task\" (selectTab)=\"onUnderstandingTaskSelected()\">\r\n\r\n                            </tab>\r\n                            <tab heading=\"Retrieval Task\" (selectTab)=\"onPreferenceTaskSelected()\">\r\n\r\n                            </tab>\r\n                        </tabset>\r\n                        <div class=\"leaderboard-container\">\r\n                            <div class=\"container\">\r\n                                <ul class=\"responsive-table\">\r\n                                    <li class=\"table-header\">\r\n                                        <div class=\"col-leaderboard col-2-AI-leaderboard\">Model</div>\r\n                                        <div class=\"col-leaderboard col-3-leaderboard\">Idiom - Figurative</div>\r\n                                        <div class=\"col-leaderboard col-3-leaderboard\">Idiom - Figurative Literal</div>\r\n                                        <div class=\"col-leaderboard col-5-leaderboard\">Metaphor</div>\r\n                                        <div class=\"col-leaderboard col-4-leaderboard\">Open <br> Simile</div>\r\n                                        <div class=\"col-leaderboard col-4-leaderboard\">Closed <br> Simile</div>\r\n                                    </li>\r\n\r\n                                    <li class=\"table-row\" *ngFor=\"let model of (selectedTask == 'understanding' ? understandingTaskModels : preferenceTaskModels)\">\r\n                                        <div class=\"col-leaderboard col-2-AI-leaderboard\" data-label=\"Model\">{{model.name}}</div>\r\n                                        <div class=\"col-leaderboard col-3-leaderboard\" data-label=\"Idiom - Figurative\">{{model[\"IdiomFigurative\"] != '-' && selectedTask == 'understanding' ? (model[\"IdiomFigurative\"] + '%') : model[\"IdiomFigurative\"]}}</div>\r\n                                        <div class=\"col-leaderboard col-3-leaderboard\" data-label=\"Idiom - Figurative Literal\">{{model[\"IdiomFigurativeLiteral\"] != '-' && selectedTask == 'understanding' ? (model[\"IdiomFigurativeLiteral\"] + '%') : model[\"IdiomFigurativeLiteral\"]}}</div>\r\n                                        <div class=\"col-leaderboard col-4-leaderboard\" data-label=\"Metaphor\">{{selectedTask == 'understanding' ? (model[\"Metaphor\"] + '%') : model[\"Metaphor\"]}}</div>\r\n                                        <div class=\"col-leaderboard col-5-leaderboard\" data-label=\"Open Simile\">{{selectedTask == 'understanding' ? (model[\"OpenSimile\"] + '%') : model[\"OpenSimile\"]}}</div>\r\n                                        <div class=\"col-leaderboard col-5-leaderboard\" data-label=\"Closed Simile\">{{selectedTask == 'understanding' ? (model[\"ClosedSimile\"] + '%') : model[\"ClosedSimile\"]}}</div>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <footer class=\"footer\">\r\n        <div class=\"container\">\r\n            <div class=\"footer-row\">\r\n                <a>Maintained by Lampent</a>\r\n            </div>\r\n        </div>\r\n    </footer>\r\n</div>");

/***/ }),

/***/ "AytR":
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

/***/ "B4BR":
/*!******************************************************!*\
  !*** ./src/app/pages/explore/explore.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1, h3 {\n  color: #4d5568 !important;\n}\n\n.stat-label {\n  font-size: 2rem;\n  text-align: center;\n  font-weight: 700;\n}\n\n.stat-description {\n  text-align: center;\n}\n\n.abstract {\n  display: flex;\n  justify-content: center;\n}\n\n.abstract > img {\n  height: 16rem;\n}\n\n.content-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 13rem;\n}\n\n.test-me-container ::ng-deep select {\n  border: solid black 1px !important;\n  border-radius: 3px;\n}\n\n.page-header {\n  max-height: -webkit-max-content !important;\n  max-height: -moz-max-content !important;\n  max-height: max-content !important;\n}\n\n.sub-title {\n  font-size: 2rem;\n}\n\n.test-me-container ::ng-deep .mat-form-field-wrapper {\n  width: 100px !important;\n}\n\n@media (max-width: 800px) {\n  .explore-nav {\n    justify-content: center;\n  }\n}\n\n@media (max-width: 500px) {\n  .results-nav {\n    width: 85vw;\n    overflow-y: scroll;\n  }\n}\n\n@media (max-width: 760px) {\n  .test-nav {\n    width: 100% !important;\n  }\n}\n\n.test-nav {\n  width: 40%;\n  justify-content: space-between;\n  align-items: center;\n  display: flex;\n  padding-top: 1rem;\n}\n\n.btn-neutral {\n  background: #fab1b45c !important;\n  color: #222a42 !important;\n}\n\n.btn-neutral:hover {\n  background: #fab1b4a6 !important;\n}\n\n@media (max-width: 500px) {\n  .test-me-container {\n    flex-direction: column;\n  }\n}\n\n.test-me-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 600px;\n  padding-bottom: 20px;\n}\n\n.example-label {\n  width: 125%;\n  padding-bottom: 2.2rem;\n}\n\n.explore-nav {\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  padding-bottom: 5rem;\n}\n\n@media (max-width: 600px) {\n  .practice-box {\n    padding-bottom: 10px;\n    width: 100% !important;\n  }\n\n  .explore-nav {\n    flex-direction: column;\n  }\n}\n\n.practice-box {\n  padding-bottom: 20px;\n  width: 45%;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n}\n\n.got-it-container {\n  width: 400px;\n  height: 180px;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n}\n\n.got-it-title {\n  color: #fd969e !important;\n}\n\n.practice-text, .practice-title {\n  color: #222a42 !important;\n}\n\n.got-it-container, .practice-title {\n  padding: 20px;\n  font-size: 24px;\n}\n\n.practice-title {\n  font-weight: bold;\n}\n\n.task-container, .got-it-container, .practice-text {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.hint {\n  color: black;\n  height: 1.7rem;\n  width: 100%;\n  font-size: 1.2rem;\n}\n\n.guess-clue-hint {\n  color: black;\n  width: 100%;\n  height: 60px;\n  font-size: 20px;\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 700;\n}\n\n.no-clue {\n  visibility: hidden !important;\n}\n\n.submitted {\n  pointer-events: none;\n}\n\n.text-row {\n  padding: 20px;\n  color: #222a42 !important;\n  font-size: 0.875rem;\n}\n\n.main-label {\n  font-weight: 600;\n  text-transform: none !important;\n  font-size: 4rem;\n  color: #fd969e !important;\n}\n\n.main-description {\n  font-size: 1rem;\n  color: #222a42 !important;\n  padding-bottom: 3rem;\n}\n\n.padding-bottom {\n  padding-bottom: 5rem;\n}\n\n.selected-button {\n  -webkit-transform: translateY(-1px);\n  background: #fab1b4d1 !important;\n}\n\n.disabled-button, .disabled-button:hover {\n  -webkit-transform: translateY(-1px);\n  background: #fab1b42e !important;\n}\n\n.fas-big {\n  font-size: 2.5rem;\n  /* font-weight: bold; */\n  color: #fd969e !important;\n  display: inline-block;\n  cursor: pointer;\n}\n\n.report-container {\n  left: 0;\n  position: absolute;\n  color: black;\n  margin-top: 4px;\n  margin-left: 55px;\n}\n\n.fa-triangle-exclamation {\n  color: #ff3e3e;\n  font-size: 40px;\n  text-shadow: 2px 5px rgba(0, 0, 0, 0.03);\n  cursor: pointer;\n}\n\n.task-container ::ng-deep .btn-big {\n  font-size: 1.5rem;\n}\n\n.wrong-answer, .wrong-answer:hover, .wrong-answer:visited, .wrong-answer:active .wrong-answer:target, .wrong-answer:focus {\n  background: #ff3c3ce0 !important;\n  transform: none !important;\n}\n\n.correct-answer, .correct-answer:hover, .correct-answer:visited, .correct-answer:active, .correct-answer:target, .correct-answer:focus {\n  background: #63ff3ce0 !important;\n  transform: none !important;\n}\n\n.bs-tooltip-top {\n  background: #00bbff !important;\n}\n\n.tooltip-inner {\n  font-size: 1rem !important;\n}\n\n.lds-facebook {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n\n.lds-facebook div {\n  display: inline-block;\n  position: absolute;\n  left: 8px;\n  width: 16px;\n  background: #fd969e;\n  -webkit-animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n          animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n}\n\n.lds-facebook div:nth-child(1) {\n  left: 8px;\n  -webkit-animation-delay: -0.24s;\n          animation-delay: -0.24s;\n}\n\n.lds-facebook div:nth-child(2) {\n  left: 32px;\n  -webkit-animation-delay: -0.12s;\n          animation-delay: -0.12s;\n}\n\n.lds-facebook div:nth-child(3) {\n  left: 56px;\n  -webkit-animation-delay: 0;\n          animation-delay: 0;\n}\n\n@-webkit-keyframes lds-facebook {\n  0% {\n    top: 8px;\n    height: 64px;\n  }\n  50%, 100% {\n    top: 24px;\n    height: 32px;\n  }\n}\n\n@keyframes lds-facebook {\n  0% {\n    top: 8px;\n    height: 64px;\n  }\n  50%, 100% {\n    top: 24px;\n    height: 32px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxleHBsb3JlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UseUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFJQTtFQUNFLGtDQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLDBDQUFBO0VBQUEsdUNBQUE7RUFBQSxrQ0FBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtBQURGOztBQUlBO0VBQ0UsdUJBQUE7QUFERjs7QUFJQTtFQUNFO0lBQ0UsdUJBQUE7RUFERjtBQUNGOztBQUtBO0VBQ0U7SUFDRSxXQUFBO0lBQ0Esa0JBQUE7RUFIRjtBQUNGOztBQU9BO0VBQ0U7SUFDRSxzQkFBQTtFQUxGO0FBQ0Y7O0FBUUE7RUFDRSxVQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQU5GOztBQVVBO0VBQ0UsZ0NBQUE7RUFDQSx5QkFBQTtBQVBGOztBQVVBO0VBQ0UsZ0NBQUE7QUFQRjs7QUFVQTtFQUNFO0lBQ0Usc0JBQUE7RUFQRjtBQUNGOztBQVdBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFURjs7QUFhQTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtBQVZGOztBQWFBO0VBQ0UsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBVkY7O0FBYUE7RUFDRTtJQUNFLG9CQUFBO0lBQ0Esc0JBQUE7RUFWRjs7RUFhQTtJQUNFLHNCQUFBO0VBVkY7QUFDRjs7QUFhQTtFQUNFLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLDZDQUFBO0FBWEY7O0FBY0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDZDQUFBO0FBWEY7O0FBY0E7RUFDRSx5QkFBQTtBQVhGOztBQWNBO0VBQ0UseUJBQUE7QUFYRjs7QUFjQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBWEY7O0FBY0E7RUFDRSxpQkFBQTtBQVhGOztBQWNBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQVhGOztBQWNBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFYRjs7QUFjQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFYRjs7QUFjQTtFQUNFLDZCQUFBO0FBWEY7O0FBY0E7RUFDRSxvQkFBQTtBQVhGOztBQWNBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFYRjs7QUFlQTtFQUNFLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFaRjs7QUFlQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FBWkY7O0FBZUE7RUFDRSxvQkFBQTtBQVpGOztBQWVBO0VBQ0UsbUNBQUE7RUFDQSxnQ0FBQTtBQVpGOztBQWVBO0VBQ0UsbUNBQUE7RUFDQSxnQ0FBQTtBQVpGOztBQWVBO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBWkY7O0FBZUE7RUFDRSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBWkY7O0FBZUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0VBQ0EsZUFBQTtBQVpGOztBQWVBO0VBQ0UsaUJBQUE7QUFaRjs7QUFlQTtFQUNFLGdDQUFBO0VBQ0EsMEJBQUE7QUFaRjs7QUFlQTtFQUNFLGdDQUFBO0VBQ0EsMEJBQUE7QUFaRjs7QUFlQTtFQUNFLDhCQUFBO0FBWkY7O0FBZUE7RUFDRSwwQkFBQTtBQVpGOztBQWVBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBWkY7O0FBY0E7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDBFQUFBO1VBQUEsa0VBQUE7QUFYRjs7QUFhQTtFQUNFLFNBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0FBVkY7O0FBWUE7RUFDRSxVQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtBQVRGOztBQVdBO0VBQ0UsVUFBQTtFQUNBLDBCQUFBO1VBQUEsa0JBQUE7QUFSRjs7QUFVQTtFQUNFO0lBQ0UsUUFBQTtJQUNBLFlBQUE7RUFQRjtFQVNBO0lBQ0UsU0FBQTtJQUNBLFlBQUE7RUFQRjtBQUNGOztBQURBO0VBQ0U7SUFDRSxRQUFBO0lBQ0EsWUFBQTtFQVBGO0VBU0E7SUFDRSxTQUFBO0lBQ0EsWUFBQTtFQVBGO0FBQ0YiLCJmaWxlIjoiZXhwbG9yZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5oMSwgaDMge1xyXG4gIGNvbG9yOiAjNGQ1NTY4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdGF0LWxhYmVsIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5zdGF0LWRlc2NyaXB0aW9uIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hYnN0cmFjdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmFic3RyYWN0ID4gaW1nIHtcclxuICBoZWlnaHQ6IDE2cmVtO1xyXG59XHJcblxyXG4uY29udGVudC1jZW50ZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDEzcmVtO1xyXG59XHJcblxyXG5cclxuLnRlc3QtbWUtY29udGFpbmVyIDo6bmctZGVlcCBzZWxlY3Qge1xyXG4gIGJvcmRlcjogc29saWQgYmxhY2sgMXB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4ucGFnZS1oZWFkZXIge1xyXG4gIG1heC1oZWlnaHQ6IG1heC1jb250ZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuLnRlc3QtbWUtY29udGFpbmVyIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIC5leHBsb3JlLW5hdiB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAucmVzdWx0cy1uYXYge1xyXG4gICAgd2lkdGg6IDg1dnc7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2MHB4KSB7XHJcbiAgLnRlc3QtbmF2IHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4udGVzdC1uYXYge1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nLXRvcDogMXJlbTtcclxufVxyXG5cclxuXHJcbi5idG4tbmV1dHJhbCB7XHJcbiAgYmFja2dyb3VuZDogI2ZhYjFiNDVjIWltcG9ydGFudDtcclxuICBjb2xvcjogIzIyMmE0MiAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5idG4tbmV1dHJhbDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2ZhYjFiNGE2ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC50ZXN0LW1lLWNvbnRhaW5lciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi50ZXN0LW1lLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogNjAwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcblxyXG4uZXhhbXBsZS1sYWJlbCB7XHJcbiAgd2lkdGg6IDEyNSU7XHJcbiAgcGFkZGluZy1ib3R0b206IDIuMnJlbTtcclxufVxyXG5cclxuLmV4cGxvcmUtbmF2IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLnByYWN0aWNlLWJveCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuZXhwbG9yZS1uYXYge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbn1cclxuXHJcbi5wcmFjdGljZS1ib3gge1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIHdpZHRoOiA0NSU7XHJcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2IoMCAwIDAgLyAxNSUpO1xyXG59XHJcblxyXG4uZ290LWl0LWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogMTgwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2IoMCAwIDAgLyAxNSUpO1xyXG59XHJcblxyXG4uZ290LWl0LXRpdGxlIHtcclxuICBjb2xvcjogI2ZkOTY5ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHJhY3RpY2UtdGV4dCwgLnByYWN0aWNlLXRpdGxlIHtcclxuICBjb2xvcjogIzIyMmE0MiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZ290LWl0LWNvbnRhaW5lciwgLnByYWN0aWNlLXRpdGxlIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLnByYWN0aWNlLXRpdGxlIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnRhc2stY29udGFpbmVyLCAuZ290LWl0LWNvbnRhaW5lciwgLnByYWN0aWNlLXRleHQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uaGludCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGhlaWdodDogMS43cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4uZ3Vlc3MtY2x1ZS1oaW50IHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5uby1jbHVlIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN1Ym1pdHRlZCB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi50ZXh0LXJvdyB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBjb2xvcjogIzIyMmE0MiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbn1cclxuXHJcblxyXG4ubWFpbi1sYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogNHJlbTtcclxuICBjb2xvcjogI2ZkOTY5ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWFpbi1kZXNjcmlwdGlvbiB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGNvbG9yOiAjMjIyYTQyICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDNyZW07XHJcbn1cclxuXHJcbi5wYWRkaW5nLWJvdHRvbSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDVyZW07XHJcbn1cclxuXHJcbi5zZWxlY3RlZC1idXR0b24ge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gIGJhY2tncm91bmQ6ICNmYWIxYjRkMSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGlzYWJsZWQtYnV0dG9uLCAuZGlzYWJsZWQtYnV0dG9uOmhvdmVyIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICBiYWNrZ3JvdW5kOiAjZmFiMWI0MmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZhcy1iaWcge1xyXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gIC8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xyXG4gIGNvbG9yOiAjZmQ5NjllICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnJlcG9ydC1jb250YWluZXIge1xyXG4gIGxlZnQ6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDU1cHg7XHJcbn1cclxuXHJcbi5mYS10cmlhbmdsZS1leGNsYW1hdGlvbiB7XHJcbiAgY29sb3I6ICNmZjNlM2U7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIHRleHQtc2hhZG93OiAycHggNXB4IHJnYigwIDAgMCAvIDMlKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50YXNrLWNvbnRhaW5lciA6Om5nLWRlZXAgLmJ0bi1iaWcge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4ud3JvbmctYW5zd2VyLCAud3JvbmctYW5zd2VyOmhvdmVyLCAud3JvbmctYW5zd2VyOnZpc2l0ZWQsIC53cm9uZy1hbnN3ZXI6YWN0aXZlIC53cm9uZy1hbnN3ZXI6dGFyZ2V0LCAud3JvbmctYW5zd2VyOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kOiAjZmYzYzNjZTAgIWltcG9ydGFudDtcclxuICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvcnJlY3QtYW5zd2VyLCAuY29ycmVjdC1hbnN3ZXI6aG92ZXIsIC5jb3JyZWN0LWFuc3dlcjp2aXNpdGVkLCAuY29ycmVjdC1hbnN3ZXI6YWN0aXZlLCAuY29ycmVjdC1hbnN3ZXI6dGFyZ2V0LCAuY29ycmVjdC1hbnN3ZXI6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQ6ICM2M2ZmM2NlMCAhaW1wb3J0YW50O1xyXG4gIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnMtdG9vbHRpcC10b3Age1xyXG4gIGJhY2tncm91bmQ6ICMwMGJiZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRvb2x0aXAtaW5uZXIge1xyXG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGRzLWZhY2Vib29rIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogODBweDtcclxufVxyXG4ubGRzLWZhY2Vib29rIGRpdiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA4cHg7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZkOTY5ZTtcclxuICBhbmltYXRpb246IGxkcy1mYWNlYm9vayAxLjJzIGN1YmljLWJlemllcigwLCAwLjUsIDAuNSwgMSkgaW5maW5pdGU7XHJcbn1cclxuLmxkcy1mYWNlYm9vayBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICBsZWZ0OiA4cHg7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yNHM7XHJcbn1cclxuLmxkcy1mYWNlYm9vayBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICBsZWZ0OiAzMnB4O1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTJzO1xyXG59XHJcbi5sZHMtZmFjZWJvb2sgZGl2Om50aC1jaGlsZCgzKSB7XHJcbiAgbGVmdDogNTZweDtcclxuICBhbmltYXRpb24tZGVsYXk6IDA7XHJcbn1cclxuQGtleWZyYW1lcyBsZHMtZmFjZWJvb2sge1xyXG4gIDAlIHtcclxuICAgIHRvcDogOHB4O1xyXG4gICAgaGVpZ2h0OiA2NHB4O1xyXG4gIH1cclxuICA1MCUsIDEwMCUge1xyXG4gICAgdG9wOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "BiWK":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mturk-irfl-task/mturk-solve.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n    <div class=\"page-header header-filter\">\r\n        <div *ngFor=\"let irflTask of irflTasks; let i = index\" class=\"container center-container\">\r\n            <div class=\"content-center brand\">\r\n                <div class=\"task-container\">\r\n                    <app-task-board class=\"analogies-board\" [irflTask]=\"irflTask\" [enablePointer]=\"false\"\r\n                                    [testMode]=\"testMode\" [submit]=\"_submit\" [disableSolutionIcons]=\"!solveCreate\"\r\n                                    [info]=\"'Several images are presented below. \\n A cue word and number of associated images are given. \\n                     Choose the images that best associates with the cue word.'\">\r\n                    </app-task-board>\r\n                    <div class=\"test-me-container\">\r\n                        <button class=\"btn btn-neutral btn-big\" *ngIf=\"testMode\" [ngClass]=\"{'submitted': _submit}\"\r\n                                (click)=\"submit(i)\">{{ 'Submit' }}</button>\r\n                    </div>\r\n                    <div class=\"label hint\" [ngClass]=\"{'no-clue': hint === ''}\">\r\n                        {{hint}}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <footer class=\"footer\">\r\n        <div class=\"container\">\r\n            <div class=\"footer-row\">\r\n                <a>Maintained by Lampent</a>\r\n            </div>\r\n        </div>\r\n    </footer>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "D65W":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/report-form/report-form.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"personal-details-form-container\">\r\n    <div class=\"personal-details-form\" [ngClass]=\"{'instructions-form': !instructionsOk}\">\r\n        <i class=\"fa-solid fa-circle-xmark\" (click)=\"close$.emit()\"></i>\r\n        <form [formGroup]=\"personalDetailsForm\" (submit)=\"onSubmit($event)\">\r\n            <div class=\"input-label main-label\">Please fill in the following details and submit them if you encounter a problem. Our team will review the report form and act accordingly.</div>\r\n            <div class=\"input-label\">Please select the report reason </div>\r\n            <mat-form-field appearance=\"fill\">\r\n                <mat-label>Report reason</mat-label>\r\n                <mat-select [formControlName]=\"'reason'\">\r\n                    <mat-option *ngFor=\"let age of reportReasons\" [value]=\"age.value\">\r\n                        {{age.viewValue}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <div class=\"input-label\">Please provide a short description of the problem </div>\r\n            <mat-form-field appearance=\"fill\" class=\"fill-container\">\r\n                <textarea [formControl]=\"$any(personalDetailsForm.controls.details)\"  matInput [matTextareaAutosize]=\"false\"></textarea>\r\n            </mat-form-field>\r\n            <div class=\"button-container\">\r\n                <button mat-raised-button>Register</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "F+NP":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/task-bord/task-board.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<canvas [id]=\"confettiID\" class=\"confetti\" [ngStyle]=\"{position: 'absolute', 'pointer-events': 'none'}\"></canvas>\r\n<h3 style=\"text-transform: none;\">{{title}}</h3>\r\n<div class=\"analogy-container\">\r\n    <div class=\"cue-line-container\" style=\"padding-bottom: 10px\">\r\n        <div class=\"right-board-container\">\r\n            <div class=\"board top-board\">\r\n                <div class=\"main-description\" *ngIf=\"showInfo\" [innerHTML]=\"info\">\r\n                </div>\r\n                <div class=\"cue-board\" [ngStyle]=\"{'width': '100%'}\">\r\n<!--                    <div class=\"label board-title\">{{_irflTask.type}}</div>-->\r\n                    <form class=\"example-form\">\r\n                        <div class=\"example-full-width no-underline-mat-field figurative-phrase\" style=\"color: black\" appearance=\"fill\">\r\n                            {{figurativePhrase}}\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n                <div class=\"associations-board\" *ngIf=\"false\">\r\n                    <div class=\"label board-title\"> Solutions</div>\r\n                    <div class=\"bold-text\"> {{this._irflTask.numOfSolution}} </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"right-board-container\" *ngIf=\"this._irflTask.type === 'idiom' && this._irflTask.definitions.length > 0\">\r\n            <div class=\"definitions-board\">\r\n<!--                <div class=\"label board-title\">Definitions</div>-->\r\n                <div class=\"example-full-width\">\r\n                    <ul class=\"definitions-list\">\r\n                        <li *ngFor=\"let definition of this._irflTask.definitions; let i = index;\">{{i+1 +'. ' + definition}}</li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n<!--    <div class=\"AI-response-label-container\"-->\r\n<!--         [style]=\"{'visibility': (!_submit) ? 'hidden' : 'visible'}\">-->\r\n<!--        &lt;!&ndash;        *ngIf=\"_giveCueTask && (_giveCueTask.score | async) !== null\"&ndash;&gt;-->\r\n<!--        <div class=\"AI-response-label\">AI Response <img src=\"assets/robot-head/robot-head.png\"></div>-->\r\n<!--    </div>-->\r\n    <div class=\"left-board-container\">\r\n        <div class=\"board left-board\">\r\n            <div class=\"images-board\" [ngClass]=\"{'images-board-pointer': enablePointer}\">\r\n                <div [ngClass]=\"{'analogy-image-container': !isSixCandidates, 'analogy-image-container-six': isSixCandidates , 'analogy-image-container-twelve': isTwelveCandidates}\"\r\n                     *ngFor=\"let candidate of _candidates\"\r\n                     (click)=\"selectCandidate(candidate)\">\r\n                    <img src=\"{{candidate.img}}\" [ngClass]=\"{'candidate-selected': candidate.userChoice}\">\r\n                    <i [style.color]=\"(candidate.userChoice && candidate.userChoice !== candidate.answer) ? 'red' : 'transparent'\"\r\n                       class=\"fas fa-times\"\r\n                       *ngIf=\"(!disableSolutionIcons && (testMode ? _submit : true)) && (candidate.userChoice !== candidate.answer) \"></i>\r\n                    <i [style.color]=\"(candidate.userChoice && candidate.userChoice === candidate.answer) ? 'green' : 'transparent'\"\r\n                       class=\"fas fa-check\"\r\n                       *ngIf=\"(!disableSolutionIcons && (testMode ? _submit : true)) && (candidate.userChoice === candidate.answer)\"></i>\r\n                </div>\r\n                <div class=\"pointer-container\" *ngIf=\"noSelection && enablePointer\">\r\n                    <div style=\"position:relative; width: 110px;\">\r\n                        <span class=\"moving-pointer\">  👉 </span>\r\n                        <!--                        <i class=\"fa-solid fa-hand-point-left moving-pointer fa-flip-horizontal\"></i>-->\r\n                    </div>\r\n                    <div class=\"pointer-label\">\r\n                        Choose here!\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "FC7a":
/*!************************************************************!*\
  !*** ./src/app/pages/report-form/report-form.component.ts ***!
  \************************************************************/
/*! exports provided: ReportFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportFormComponent", function() { return ReportFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_report_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./report-form.component.html */ "D65W");
/* harmony import */ var _report_form_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report-form.component.scss */ "FwLI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





let ReportFormComponent = class ReportFormComponent {
    constructor(fb) {
        this.fb = fb;
        this.skipPersonalDetails = false;
        this.submit$ = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.close$ = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.reportReasons = [{ value: 'inappropriateImage', viewValue: 'Inappropriate Image' }, { value: 'missingImage', viewValue: 'Missing Image' },
            { value: 'inappropriateCue', viewValue: 'Inappropriate Cue' }, { value: 'other', viewValue: 'Other' }];
        this.instructionsOk = false;
        this.personalDetailsForm = this.fb.group({
            reason: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            details: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    ngOnInit() {
    }
    onSubmit(event) {
        if (this.personalDetailsForm.valid) {
            this.submit$.next(this.personalDetailsForm.value);
            console.log(this.personalDetailsForm.value);
        }
    }
};
ReportFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
ReportFormComponent.propDecorators = {
    skipPersonalDetails: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    submit$: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    close$: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
ReportFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-report-form',
        template: _raw_loader_report_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_report_form_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], ReportFormComponent);



/***/ }),

/***/ "FkAs":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/image-classification-board/image-classification-board.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<canvas id=\"confetti\" [ngStyle]=\"{position: 'absolute', 'pointer-events': 'none'}\"></canvas>\r\n<h3 style=\"text-transform: none;\">{{title}}</h3>\r\n<div class=\"analogy-container\">\r\n    <div class=\"cue-line-container\" style=\"padding-bottom: 20px\">\r\n        <div class=\"flex-center\" style=\"padding-bottom: 10px; width: 100%;\">\r\n            <div class=\"main-description first-main-description\" id=\"pink-box\" *ngIf=\"isFirst && !isSimile && !reviewMode\">\r\n                <p style=\"padding-bottom: 7px;\">Choose the most correct category that describe the relation between the\r\n                    image and the phrase.</p>\r\n                <p style=\"padding-bottom: 8px;\"><b>Figurative Literal:</b> The image conveys one or more definitions of the idiom to some extent, <b>and</b> it literally illustrates the <b>phrase </b>\r\n                    <u>or</u> visualizes the <b>phrase</b> objects/entities.</p>\r\n                <p style=\"padding-bottom: 8px;\"><b>Figurative:</b> The image conveys one or more definitions of the idiom to some extent, <b>and it does <u>not</u></b> literally illustrate the phrase\r\n                    or visualize its objects/entities.</p>\r\n                <p style=\"padding-bottom: 8px;\"><b>Caption:</b> The image is not <u>Figurative Literal</u> and <u>Figurative</u>. It illustrates the <u>phrase</u> (not the definitions) literally.</p>\r\n                <p style=\"padding-bottom: 8px;\"><b>Partial Objects:</b> The image is not <u>Figurative Literal</u>, <u>Figurative</u>, or <u>Caption</u>. The main objects/entities of the phrase are visualized in the image.</p>\r\n                <p style=\"padding-bottom: 8px;\"><b>None:</b> The image is not <u>Figurative Literal</u>, <u>Figurative</u>, <u>Caption</u>, or <u>Partial Objects</u>.</p>\r\n                <!--                <p><b>Incomprehensible:</b> It does not contain objects or entities, <u>or</u> it is unclear what the-->\r\n                <!--                    image represents.</p>-->\r\n                <p style=\"padding-top: 16px;\"><b>You can view the full instructions by clicking <a\r\n                        style=\"font-weight: 500\"\r\n                        href=\"https://drive.google.com/file/d/1MvHDd9lFaU10lDoqlqXwlEjzoBVAvYcA/view?usp=sharing\"\r\n                        target=\"_blank\">here</a>.</b></p>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"board top-board box-shadow\">\r\n            <div class=\"main-description\" *ngIf=\"showTree\">\r\n                <i class=\"close-icon fa-solid fa-circle-xmark\" (click)=\"toggleTree()\"></i>\r\n                <img src=\"assets/img/steps%20tree.PNG\">\r\n            </div>\r\n            <div class=\"main-description\" *ngIf=\"showInfo && !isSimile\">\r\n                <i class=\"close-icon fa-solid fa-circle-xmark\" (click)=\"toggleInfo()\"></i>\r\n                <p style=\"padding-bottom: 7px;\">Choose the most correct category that describe the relation between the\r\n                    image and the phrase.</p>\r\n                <p style=\"padding-bottom: 8px;\"><b>Figurative Literal:</b> The image conveys one or more definitions of the idiom to some extent, <b>and</b> it literally illustrates the <b>phrase </b>\r\n                    <u>or</u> visualizes the <b>phrase</b> objects/entities.</p>\r\n                <p style=\"padding-bottom: 8px;\"><b>Figurative:</b> The image conveys one or more definitions of the idiom to some extent, <b>and it does <u>not</u></b> literally illustrate the phrase\r\n                    or visualize its objects/entities.</p>\r\n                <p style=\"padding-bottom: 8px;\"><b>Caption:</b> The image is not <u>Figurative Literal</u> and <u>Figurative</u>. It illustrates the <u>phrase</u> (not the definitions) literally.</p>\r\n                <p style=\"padding-bottom: 8px;\"><b>Partial Objects:</b> The image is not <u>Figurative Literal</u>, <u>Figurative</u>, or <u>Caption</u>. The main objects/entities of the phrase are visualized in the image.</p>\r\n                <p style=\"padding-bottom: 8px;\"><b>None:</b> The image is not <u>Figurative Literal</u>, <u>Figurative</u>, <u>Caption</u>, or <u>Partial Objects</u>.</p>\r\n                <!--                <p><b>Incomprehensible:</b> It does not contain objects or entities, <u>or</u> it is unclear what the-->\r\n                <!--                    image represents.</p>-->\r\n                <p style=\"padding-top: 16px;\"><b>You can view the full instructions by clicking <a\r\n                        style=\"font-weight: 500\"\r\n                        href=\"https://drive.google.com/file/d/1MvHDd9lFaU10lDoqlqXwlEjzoBVAvYcA/view?usp=sharing\"\r\n                        target=\"_blank\">here</a>.</b></p>\r\n            </div>\r\n            <div class=\"cue-board\">\r\n                <div class=\"label board-title pink-box\" id='phrase-title'>Phrase</div>\r\n                <form class=\"example-form\">\r\n                    <mat-form-field class=\"example-full-width no-underline-mat-field\" appearance=\"fill\">\r\n                        <input matInput [formControl]=\"phraseFormControl\" [readonly]=\"true\" autocomplete=\"off\"/>\r\n                        <mat-error *ngIf=\"!phraseFormControl.valid && phraseFormControl.value != ''\">\r\n                            Error\r\n                        </mat-error>\r\n                    </mat-form-field>\r\n                </form>\r\n            </div>\r\n            <img *ngIf=\"!isSimile\" class=\"tree-icon\" src=\"assets/img/tree%20icon.png\" id=\"tree-button\" (click)=\"toggleTree()\">\r\n            <i class=\"fas fa-info-circle\" aria-hidden=\"true\" id='instructions-icon'  (click)=\"toggleInfo()\"></i>\r\n        </div>\r\n\r\n        <div style=\"padding-top: 10px\" *ngIf=\"this._imageClassificationTask.definitions.length > 0 && !isSimile\">\r\n            <div class=\"definitions-board box-shadow\">\r\n                <!--                <div class=\"label board-title\">Definitions</div>-->\r\n                <div class=\"example-full-width\">\r\n                    <ul class=\"definitions-list\">\r\n                        <li style=\"color: #4d5568 !important;\" id=\"definitions-title\">Definitions:</li>\r\n                        <li style=\"word-break: break-word\"\r\n                            *ngFor=\"let definition of this._imageClassificationTask.definitions; let i = index;\">{{i + 1 + '. ' + definition}}</li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"left-board\">\r\n        <div class=\"images-board box-shadow\">\r\n            <div>\r\n                <img class=\"task-image\" [id]=imageId (mouseout)=\"hideZoom()\" (mouseover)=\"showZoom()\"\r\n                     src=\"{{_imageClassificationTask.irflImage.img}}\">\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"images-board\" >\r\n            <ul class=\"secondary-category-list\" *ngIf=\"!reviewMode && isSimile\">\r\n                <li class=\"irfl-category irfl-secondary-category\" (click)=\"selectCategory(null, category)\"\r\n                    *ngFor=\"let category of secondaryCategories; let i = index;\"\r\n                    [ngClass]=\"{\r\n                    'selected-category': this._imageClassificationTask.secondaryCategory == category,\r\n                    'correct-category': this._imageClassificationTask.correctSecondaryCategory == category && showCorrectAnswer\r\n                    }\">{{category}}</li>\r\n            </ul>\r\n            <ul class=\"category-list\" [style]=\"{'padding-top': isSimile ? '12px !important' : '0'}\" *ngIf=\"!reviewMode\">\r\n                <li class=\"irfl-category\" (click)=\"selectCategory(category)\"\r\n                    *ngFor=\"let category of categories; let i = index;\"\r\n                    [ngClass]=\"{\r\n                    'selected-category': this._imageClassificationTask.category == category,\r\n                    'correct-category': this._imageClassificationTask.correctCategory == category && showCorrectAnswer\r\n                    }\">{{category}}</li>\r\n            </ul>\r\n            <ul class=\"category-list\" *ngIf=\"reviewMode\">\r\n                <li class=\"irfl-review-div\" *ngIf=\"_imageClassificationTask.serverData['no_agreement_with_majority_of_four']\">\r\n                    <div class=\"irfl-review-div-item\">\r\n                        <u>Four annotators</u> chose <b>{{_imageClassificationTask.serverData['category']}}</b>\r\n                    </div>\r\n                    <div class=\"irfl-review-div-item\">\r\n                        You chose <b>{{_imageClassificationTask.serverData['worker_label']}}</b>\r\n                    </div>\r\n                </li>\r\n                <li class=\"irfl-review-div\" *ngIf=\"_imageClassificationTask.serverData['answer_family_different_from_two_options_with_different_family']\">\r\n                    <div class=\"irfl-review-div-item\">\r\n                        There was a split decision (2 vs 2) between two <u>unrelated</u> types <b>{{_imageClassificationTask.serverData['options'][0]}}</b> and  <b>{{_imageClassificationTask.serverData['options'][1]}}</b>\r\n                    </div>\r\n                    <div class=\"irfl-review-div-item\">\r\n                        You chose <b>{{_imageClassificationTask.serverData['worker_label']}}</b>\r\n                    </div>\r\n                </li>\r\n                <li class=\"irfl-review-div\" *ngIf=\"_imageClassificationTask.serverData['answer_family_different_from_two_options_with_same_family']\">\r\n                    <div class=\"irfl-review-div-item\">\r\n                        There was a split decision (2 vs 2) between two <u>related</u> types <b>{{_imageClassificationTask.serverData['options'][0]}}</b> and  <b>{{_imageClassificationTask.serverData['options'][1]}}</b>\r\n                    </div>\r\n                    <div class=\"irfl-review-div-item\">\r\n                        You chose <b>{{_imageClassificationTask.serverData['worker_label']}}</b>\r\n                    </div>\r\n                </li>\r\n                <li class=\"irfl-review-div\" *ngIf=\"_imageClassificationTask.serverData['answer_specified']\">\r\n                    <div class=\"irfl-review-div-item\">\r\n                        There correct category is <b>{{_imageClassificationTask.serverData['category']}}</b>\r\n                    </div>\r\n                    <div class=\"irfl-review-div-item\">\r\n                        You chose <b>{{_imageClassificationTask.serverData['worker_label']}}</b>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"annotations\" class=\"annotations-details\">{{annotations}}</div>\r\n    <div *ngIf=\"annotations\" class=\"annotations-details\">{{'Agreement: ' + annotationsAgreement}}</div>\r\n    <div *ngIf=\"workerStar\" class=\"annotations-details\">{{'Star: ' + workerStar}}</div>\r\n    <div *ngIf=\"annotations\" class=\"annotations-details\">{{'IRFL_id: ' + this._imageClassificationTask.irflImage.name + '_' + this._imageClassificationTask.phrase}}</div>\r\n    <div *ngIf=\"annotations\" class=\"annotations-details\">{{'Query: ' + _imageClassificationTask.serverData['definition']}}</div>\r\n    <div *ngIf=\"annotations\" class=\"annotations-details\">{{'UUID: ' + this._imageClassificationTask.id + '_' + this._imageClassificationTask.phrase}}</div>\r\n\r\n    <div class=\"hint\" [ngStyle]=\"{'opacity': showHint ? 1 : 0}\">\r\n        <div style=\"position: absolute\">\r\n            <i *ngIf=\"_imageClassificationTask.correctCategory !== this._imageClassificationTask.category\"\r\n               [style.color]=\"'red'\" class=\"fas fa-times\"></i>\r\n            <i *ngIf=\"this._imageClassificationTask.correctCategory === this._imageClassificationTask.category\"\r\n               [style.color]=\"'green'\" class=\"fas fa-check\"></i>\r\n        </div>\r\n        <div style=\"margin-left: 35px;\">\r\n            <u>Hint:</u> {{this._imageClassificationTask.hint}}\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "FwLI":
/*!**************************************************************!*\
  !*** ./src/app/pages/report-form/report-form.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".personal-details-form {\n  max-height: 555px !important;\n  overflow-y: scroll;\n}\n\n.mat-form-field {\n  width: 100% !important;\n}\n\n.button-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.instructions {\n  color: black;\n  font-size: 16px;\n  padding-bottom: 20px;\n}\n\n@media (max-width: 450px) {\n  .instructions-form {\n    width: 300px !important;\n  }\n\n  .personal-details-form {\n    top: 50% !important;\n  }\n}\n\n.fa-circle-xmark {\n  position: absolute;\n  right: 0;\n  font-size: 18px;\n  margin-top: -5px;\n  color: #000000b8;\n  cursor: pointer;\n}\n\n:host ::ng-deep .mat-form-field-flex {\n  background-color: #f0f0f0 !important;\n}\n\n@media (max-width: 540px) {\n  ::ng-deep .mat-select-panel {\n    width: 300px !important;\n    min-width: 300px !important;\n  }\n\n  ::ng-deep .cdk-overlay-pane {\n    transform: translateX(-42px) translateY(-55px) !important;\n  }\n}\n\n.main-label {\n  font-weight: 600;\n}\n\n.input-label {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.fill-container ::ng-deep textarea {\n  height: 120px;\n}\n\n.instructions-form {\n  width: 415px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZXBvcnQtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSx1QkFBQTtFQUNGOztFQUVBO0lBQ0UsbUJBQUE7RUFDRjtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxvQ0FBQTtBQUFGOztBQUdBO0VBQ0U7SUFDRSx1QkFBQTtJQUNBLDJCQUFBO0VBQUY7O0VBR0E7SUFDRSx5REFBQTtFQUFGO0FBQ0Y7O0FBSUE7RUFDRSxnQkFBQTtBQUZGOztBQUtBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtBQUZGOztBQUtBO0VBQ0UsWUFBQTtBQUZGIiwiZmlsZSI6InJlcG9ydC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBlcnNvbmFsLWRldGFpbHMtZm9ybSB7XHJcbiAgbWF4LWhlaWdodDogNTU1cHggIWltcG9ydGFudDtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ1dHRvbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmluc3RydWN0aW9ucyB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgLmluc3RydWN0aW9ucy1mb3JtIHtcclxuICAgIHdpZHRoOiAzMDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnBlcnNvbmFsLWRldGFpbHMtZm9ybSB7XHJcbiAgICB0b3A6IDUwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmZhLWNpcmNsZS14bWFyayB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gIGNvbG9yOiAjMDAwMDAwYjg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjAgIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU0MHB4KSB7XHJcbiAgOjpuZy1kZWVwIC5tYXQtc2VsZWN0LXBhbmVsIHtcclxuICAgIHdpZHRoOiAzMDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiAzMDBweCAhaW1wb3J0YW50OztcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAuY2RrLW92ZXJsYXktcGFuZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQycHgpIHRyYW5zbGF0ZVkoLTU1cHgpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLm1haW4tbGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5pbnB1dC1sYWJlbCB7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5maWxsLWNvbnRhaW5lciA6Om5nLWRlZXAgdGV4dGFyZWEge1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbn1cclxuXHJcbi5pbnN0cnVjdGlvbnMtZm9ybSB7XHJcbiAgd2lkdGg6IDQxNXB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "KHnd":
/*!************************************!*\
  !*** ./src/app/types/candidate.ts ***!
  \************************************/
/*! exports provided: Candidate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Candidate", function() { return Candidate; });
/* harmony import */ var _IRFLImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IRFLImage */ "qsz/");

class Candidate extends _IRFLImage__WEBPACK_IMPORTED_MODULE_0__["IRFLImage"] {
    constructor(image, name, answer = false, userChoice = false) {
        super(image, name);
        this.answer = answer;
        this.userChoice = userChoice;
    }
}


/***/ }),

/***/ "LT8s":
/*!***************************************************!*\
  !*** ./src/app/task-bord/task-board.component.ts ***!
  \***************************************************/
/*! exports provided: TaskBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskBoardComponent", function() { return TaskBoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_task_board_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./task-board.component.html */ "F+NP");
/* harmony import */ var _task_board_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-board.component.scss */ "eRxr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var confetti_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! confetti-js */ "+3QO");
/* harmony import */ var _types_irfl_task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types/irfl-task */ "QhCX");






let TaskBoardComponent = class TaskBoardComponent {
    constructor(changeDetectionRef) {
        this.changeDetectionRef = changeDetectionRef;
        this._candidates = [];
        this._irflTask = null;
        this.confettiID = 'confetti-' + String(Math.floor(Math.random() * 10000000000));
        this.confettiSettings = { target: this.confettiID };
        this.confettiShown = false;
        this.noSelection = true;
        this.showInfo = false;
        this.isSixCandidates = false;
        this.isTwelveCandidates = false;
        this.figurativePhrase = '';
        this.enableSelection = true;
        this.testMode = false;
        this.disableSolutionIcons = false;
        this._submit = false;
        this.title = '';
        this.enablePointer = false;
        this.info = '';
        this.selected$ = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ngOnInit() {
    }
    init() {
        this.clearConfetti();
        this.figurativePhrase = this._irflTask.phrase;
        this.detectChanges();
    }
    set irflTask(task) {
        this._irflTask = task;
        this._candidates = task.candidates;
        this.isSixCandidates = !(this._irflTask.candidates.length % 6);
        this.isTwelveCandidates = this._irflTask.candidates.length === 12;
        this.init();
    }
    set submit(status) {
        this._submit = status;
    }
    selectCandidate(candidate) {
        if (this.enableSelection && !this._submit) {
            candidate.userChoice = !candidate.userChoice;
            this.noSelection = false;
            this.setConfetti();
            if (this._irflTask.isTaskSolved()) {
                if (!this.testMode) {
                    this.renderConfetti();
                }
            }
            this.detectChanges();
        }
    }
    setConfetti() {
        if (!this.confetti) {
            this.confetti = new confetti_js__WEBPACK_IMPORTED_MODULE_4__["default"](this.confettiSettings);
        }
        this.clearConfetti();
    }
    renderConfetti() {
        if (!this.confettiShown) {
            this.confetti.render();
            this.confettiShown = true;
        }
    }
    clearConfetti() {
        if (this.confettiShown) {
            this.confetti.clear();
            this.confettiShown = false;
            this.confetti = new confetti_js__WEBPACK_IMPORTED_MODULE_4__["default"](this.confettiSettings);
        }
    }
    toggleInfo() {
        this.showInfo = !this.showInfo;
        this.detectChanges();
    }
    detectChanges() {
        this.changeDetectionRef.markForCheck();
        this.changeDetectionRef.detectChanges();
    }
};
TaskBoardComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
TaskBoardComponent.propDecorators = {
    enableSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    testMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    disableSolutionIcons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    _submit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    enablePointer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    info: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    selected$: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    irflTask: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    submit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
TaskBoardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-task-board',
        template: _raw_loader_task_board_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_task_board_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]])
], TaskBoardComponent);



/***/ }),

/***/ "MVLG":
/*!******************************************************************!*\
  !*** ./src/app/pages/mturk-irfl-task/mturk-solve.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1, h3 {\n  color: #4d5568 !important;\n}\n\n.stat-label {\n  font-size: 2rem;\n  text-align: center;\n  font-weight: 700;\n}\n\n.stat-description {\n  text-align: center;\n}\n\n.abstract {\n  display: flex;\n  justify-content: center;\n}\n\n.abstract > img {\n  height: 16rem;\n}\n\n.content-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  max-width: 787px;\n}\n\n.page-header {\n  max-height: -webkit-max-content !important;\n  max-height: -moz-max-content !important;\n  max-height: max-content !important;\n}\n\n.sub-title {\n  font-size: 2rem;\n}\n\n@media (max-width: 800px) {\n  .explore-nav {\n    justify-content: center;\n  }\n}\n\n@media (max-width: 500px) {\n  .results-nav {\n    width: 85vw;\n    overflow-y: scroll;\n  }\n}\n\n@media (max-width: 760px) {\n  .test-nav {\n    width: 100% !important;\n  }\n}\n\n.test-nav {\n  width: 40%;\n  justify-content: space-between;\n  align-items: center;\n  display: flex;\n  padding-top: 1rem;\n}\n\n.btn-neutral {\n  background: #fab1b45c !important;\n  color: #222a42 !important;\n}\n\n.btn-neutral:hover {\n  background: #fab1b4a6 !important;\n}\n\n.test-me-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 300px;\n  padding-bottom: 20px;\n}\n\n.example-label {\n  width: 125%;\n  padding-bottom: 2.2rem;\n}\n\n.explore-nav {\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  padding-bottom: 5rem;\n}\n\n.got-it-container {\n  width: 400px;\n  height: 180px;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n}\n\n.got-it-title {\n  color: #fd969e !important;\n}\n\n.practice-text, .practice-title {\n  color: #222a42 !important;\n}\n\n.got-it-container, .practice-title {\n  padding: 20px;\n  font-size: 24px;\n}\n\n.practice-title {\n  font-weight: bold;\n}\n\n.task-container, .got-it-container, .practice-text {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.hint {\n  color: black;\n  height: 1.7rem;\n  width: 100%;\n  font-size: 1.2rem;\n}\n\n.guess-clue-hint {\n  color: black;\n  width: 100%;\n  height: 60px;\n  font-size: 20px;\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 700;\n}\n\n.no-clue {\n  visibility: hidden !important;\n}\n\n.submitted {\n  pointer-events: none;\n}\n\n.text-row {\n  padding: 20px;\n  color: #222a42 !important;\n  font-size: 0.875rem;\n}\n\n.main-label {\n  font-weight: 600;\n  text-transform: none !important;\n  font-size: 4rem;\n  color: #fd969e !important;\n}\n\n.main-description {\n  font-size: 1rem;\n  color: #222a42 !important;\n  padding-bottom: 3rem;\n}\n\n.padding-bottom {\n  padding-bottom: 5rem;\n}\n\n.selected-button {\n  -webkit-transform: translateY(-1px);\n  background: #fab1b4d1 !important;\n}\n\n.disabled-button, .disabled-button:hover {\n  -webkit-transform: translateY(-1px);\n  background: #fab1b42e !important;\n}\n\n.fas-big {\n  font-size: 2.5rem;\n  /* font-weight: bold; */\n  color: #fd969e !important;\n  display: inline-block;\n  cursor: pointer;\n}\n\n.task-container ::ng-deep .btn-big {\n  font-size: 1.5rem;\n}\n\n.wrong-answer, .wrong-answer:hover, .wrong-answer:visited, .wrong-answer:active .wrong-answer:target, .wrong-answer:focus {\n  background: #ff3c3ce0 !important;\n  transform: none !important;\n}\n\n.correct-answer, .correct-answer:hover, .correct-answer:visited, .correct-answer:active, .correct-answer:target, .correct-answer:focus {\n  background: #63ff3ce0 !important;\n  transform: none !important;\n}\n\n.bs-tooltip-top {\n  background: #00bbff !important;\n}\n\n.tooltip-inner {\n  font-size: 1rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtdHVyay1zb2x2ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsMENBQUE7RUFBQSx1Q0FBQTtFQUFBLGtDQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0FBQUY7O0FBR0E7RUFDRTtJQUNFLHVCQUFBO0VBQUY7QUFDRjs7QUFJQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGtCQUFBO0VBRkY7QUFDRjs7QUFNQTtFQUNFO0lBQ0Usc0JBQUE7RUFKRjtBQUNGOztBQU9BO0VBQ0UsVUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFMRjs7QUFTQTtFQUNFLGdDQUFBO0VBQ0EseUJBQUE7QUFORjs7QUFTQTtFQUNFLGdDQUFBO0FBTkY7O0FBU0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQU5GOztBQVNBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0FBTkY7O0FBU0E7RUFDRSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFORjs7QUFTQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNkNBQUE7QUFORjs7QUFTQTtFQUNFLHlCQUFBO0FBTkY7O0FBU0E7RUFDRSx5QkFBQTtBQU5GOztBQVNBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFORjs7QUFTQTtFQUNFLGlCQUFBO0FBTkY7O0FBU0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBTkY7O0FBU0E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQU5GOztBQVNBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQU5GOztBQVNBO0VBQ0UsNkJBQUE7QUFORjs7QUFTQTtFQUNFLG9CQUFBO0FBTkY7O0FBU0E7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQU5GOztBQVVBO0VBQ0UsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQVBGOztBQVVBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUFQRjs7QUFVQTtFQUNFLG9CQUFBO0FBUEY7O0FBVUE7RUFDRSxtQ0FBQTtFQUNBLGdDQUFBO0FBUEY7O0FBVUE7RUFDRSxtQ0FBQTtFQUNBLGdDQUFBO0FBUEY7O0FBVUE7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFQRjs7QUFVQTtFQUNFLGlCQUFBO0FBUEY7O0FBVUE7RUFDRSxnQ0FBQTtFQUNBLDBCQUFBO0FBUEY7O0FBVUE7RUFDRSxnQ0FBQTtFQUNBLDBCQUFBO0FBUEY7O0FBVUE7RUFDRSw4QkFBQTtBQVBGOztBQVVBO0VBQ0UsMEJBQUE7QUFQRiIsImZpbGUiOiJtdHVyay1zb2x2ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5oMSwgaDMge1xyXG4gIGNvbG9yOiAjNGQ1NTY4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdGF0LWxhYmVsIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5zdGF0LWRlc2NyaXB0aW9uIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hYnN0cmFjdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmFic3RyYWN0ID4gaW1nIHtcclxuICBoZWlnaHQ6IDE2cmVtO1xyXG59XHJcblxyXG4uY29udGVudC1jZW50ZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXgtd2lkdGg6IDc4N3B4O1xyXG59XHJcblxyXG4ucGFnZS1oZWFkZXIge1xyXG4gIG1heC1oZWlnaHQ6IG1heC1jb250ZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgLmV4cGxvcmUtbmF2IHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC5yZXN1bHRzLW5hdiB7XHJcbiAgICB3aWR0aDogODV2dztcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzYwcHgpIHtcclxuICAudGVzdC1uYXYge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi50ZXN0LW5hdiB7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xyXG59XHJcblxyXG5cclxuLmJ0bi1uZXV0cmFsIHtcclxuICBiYWNrZ3JvdW5kOiAjZmFiMWI0NWMhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjMjIyYTQyICFpbXBvcnRhbnRcclxufVxyXG5cclxuLmJ0bi1uZXV0cmFsOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmFiMWI0YTYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRlc3QtbWUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1sYWJlbCB7XHJcbiAgd2lkdGg6IDEyNSU7XHJcbiAgcGFkZGluZy1ib3R0b206IDIuMnJlbTtcclxufVxyXG5cclxuLmV4cGxvcmUtbmF2IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcclxufVxyXG5cclxuLmdvdC1pdC1jb250YWluZXIge1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBoZWlnaHQ6IDE4MHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiKDAgMCAwIC8gMTUlKTtcclxufVxyXG5cclxuLmdvdC1pdC10aXRsZSB7XHJcbiAgY29sb3I6ICNmZDk2OWUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnByYWN0aWNlLXRleHQsIC5wcmFjdGljZS10aXRsZSB7XHJcbiAgY29sb3I6ICMyMjJhNDIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmdvdC1pdC1jb250YWluZXIsIC5wcmFjdGljZS10aXRsZSB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi5wcmFjdGljZS10aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50YXNrLWNvbnRhaW5lciwgLmdvdC1pdC1jb250YWluZXIsIC5wcmFjdGljZS10ZXh0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmhpbnQge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBoZWlnaHQ6IDEuN3JlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuLmd1ZXNzLWNsdWUtaGludCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4ubm8tY2x1ZSB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdWJtaXR0ZWQge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4udGV4dC1yb3cge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgY29sb3I6ICMyMjJhNDIgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG59XHJcblxyXG5cclxuLm1haW4tbGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDRyZW07XHJcbiAgY29sb3I6ICNmZDk2OWUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1haW4tZGVzY3JpcHRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBjb2xvcjogIzIyMmE0MiAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzcmVtO1xyXG59XHJcblxyXG4ucGFkZGluZy1ib3R0b20ge1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cmVtO1xyXG59XHJcblxyXG4uc2VsZWN0ZWQtYnV0dG9uIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICBiYWNrZ3JvdW5kOiAjZmFiMWI0ZDEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRpc2FibGVkLWJ1dHRvbiwgLmRpc2FibGVkLWJ1dHRvbjpob3ZlciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgYmFja2dyb3VuZDogI2ZhYjFiNDJlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mYXMtYmlnIHtcclxuICBmb250LXNpemU6IDIuNXJlbTtcclxuICAvKiBmb250LXdlaWdodDogYm9sZDsgKi9cclxuICBjb2xvcjogI2ZkOTY5ZSAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50YXNrLWNvbnRhaW5lciA6Om5nLWRlZXAgLmJ0bi1iaWcge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4ud3JvbmctYW5zd2VyLCAud3JvbmctYW5zd2VyOmhvdmVyLCAud3JvbmctYW5zd2VyOnZpc2l0ZWQsIC53cm9uZy1hbnN3ZXI6YWN0aXZlIC53cm9uZy1hbnN3ZXI6dGFyZ2V0LCAud3JvbmctYW5zd2VyOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kOiAjZmYzYzNjZTAgIWltcG9ydGFudDtcclxuICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvcnJlY3QtYW5zd2VyLCAuY29ycmVjdC1hbnN3ZXI6aG92ZXIsIC5jb3JyZWN0LWFuc3dlcjp2aXNpdGVkLCAuY29ycmVjdC1hbnN3ZXI6YWN0aXZlLCAuY29ycmVjdC1hbnN3ZXI6dGFyZ2V0LCAuY29ycmVjdC1hbnN3ZXI6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQ6ICM2M2ZmM2NlMCAhaW1wb3J0YW50O1xyXG4gIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnMtdG9vbHRpcC10b3Age1xyXG4gIGJhY2tncm91bmQ6ICMwMGJiZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRvb2x0aXAtaW5uZXIge1xyXG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "NONO":
/*!*************************************************!*\
  !*** ./src/app/services/leaderboard.service.ts ***!
  \*************************************************/
/*! exports provided: LeaderboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderboardService", function() { return LeaderboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _server_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./server-request.service */ "dXuD");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





let LeaderboardService = class LeaderboardService {
    constructor(requestService) {
        this.requestService = requestService;
        this.pollInterval = 30 * 1000;
        this.leaderboard = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
    }
    init() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, this.pollInterval)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(some => this.requestService.getLeaderboard()))
            .subscribe((leaderboard) => this.leaderboard.next(leaderboard));
    }
};
LeaderboardService.ctorParameters = () => [
    { type: _server_request_service__WEBPACK_IMPORTED_MODULE_2__["ServerRequestService"] }
];
LeaderboardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_server_request_service__WEBPACK_IMPORTED_MODULE_2__["ServerRequestService"]])
], LeaderboardService);



/***/ }),

/***/ "NzOQ":
/*!**************************************************************************************!*\
  !*** ./src/app/image-classification-board/image-classification-board.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".analogy-container {\n  max-width: 670px;\n  height: 100%;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n}\n\n.definitions-board {\n  display: flex;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 15px;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.secondary-category-list {\n  display: flex;\n  text-align: start;\n  font-size: 1rem;\n  padding-bottom: 5px;\n  max-height: 60px;\n  height: 100%;\n  width: 230px;\n  padding-left: 0 !important;\n}\n\n.category-list, .definitions-list {\n  text-align: start;\n  font-size: 1.2rem;\n  padding-bottom: 5px;\n  max-height: 280px;\n}\n\n.category-list {\n  height: 100%;\n  padding-left: 0 !important;\n}\n\n.irfl-secondary-category {\n  border: solid 2px #e2e2e2 !important;\n  height: 100% !important;\n}\n\n.irfl-category, .irfl-review-div {\n  width: 230px;\n  height: 20%;\n  padding: 4px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  border-top: solid 2px #e2e2e2;\n  border-right: solid 2px #e2e2e2;\n  border-left: solid 2px #e2e2e2;\n}\n\n.irfl-review-div {\n  flex-direction: column;\n  height: auto;\n  border: none;\n}\n\n.irfl-review-div-item {\n  font-size: 20px;\n  padding: 10px;\n  background-color: #00a0b463;\n  margin-top: 10px;\n  border-radius: 4px;\n}\n\n.selected-category {\n  background-color: #fd969e52;\n}\n\n.hint {\n  text-align: left;\n  position: relative;\n  color: black;\n  font-size: 18px;\n  padding-top: 12px;\n}\n\n.correct-category {\n  background-color: lightgreen !important;\n}\n\n.irfl-category:last-child {\n  border-bottom: solid 2px #e2e2e2;\n}\n\n.category-list, .definitions-list:last-child {\n  padding-bottom: 0;\n}\n\n.board {\n  display: flex;\n  padding: 15px;\n}\n\n.no-underline-mat-field ::ng-deep .mat-form-field-underline {\n  visibility: hidden !important;\n}\n\n@media (max-width: 835px) {\n  .top-board {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n  }\n\n  .cue-board {\n    height: 120px !important;\n  }\n}\n\n.top-board {\n  align-items: center;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  margin: 0;\n}\n\n.close-icon {\n  position: absolute;\n  right: 15px;\n  cursor: pointer;\n  transform: scale(1.2);\n}\n\n.main-description > p {\n  margin-bottom: 0 !important;\n  font-size: 16px;\n}\n\n.first-main-description {\n  position: relative !important;\n  right: auto !important;\n  top: auto !important;\n  bottom: auto !important;\n  left: auto !important;\n}\n\n.annotations-details {\n  width: 400px;\n  padding-top: 17px;\n  color: black;\n  font-size: 18px;\n  -webkit-user-select: text !important;\n     -moz-user-select: text !important;\n          user-select: text !important;\n}\n\n.main-description {\n  color: black;\n  position: absolute;\n  right: -260px;\n  width: 563px;\n  height: 468px;\n  top: 0;\n  text-align: start;\n  z-index: 9999999999999;\n  background: #feebec;\n  padding: 10px;\n  border-radius: 10px;\n  box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.3);\n}\n\n@media (max-width: 660px) {\n  .left-board {\n    width: auto !important;\n    flex-direction: column !important;\n  }\n\n  .cue-line-container {\n    padding-bottom: 60px !important;\n  }\n\n  input {\n    font-size: 1.5rem !important;\n  }\n}\n\n.left-board, .right-board {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.cue-board {\n  width: 600px;\n}\n\n.associations-board {\n  width: 200px;\n}\n\n.associations-board, .cue-board {\n  height: 100px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.example-full-width {\n  width: 95%;\n}\n\n::ng-deep .mat-form-field-flex {\n  padding: 0 !important;\n}\n\ninput {\n  border: 0;\n  outline: 0;\n  background: transparent;\n  text-align: center;\n}\n\n.images-board {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n\n.fas {\n  font-size: 33px;\n}\n\n@media (max-width: 1210px) {\n  .main-description {\n    left: 0;\n    right: 0;\n    margin-left: auto;\n    margin-right: auto;\n    width: 298px;\n    bottom: -250px;\n    z-index: 9999;\n    height: 755px !important;\n  }\n}\n\n@media (max-width: 1080px) {\n  .analogy-image-container {\n    flex: 1 0 99% !important;\n    /* explanation below */\n  }\n\n  .center-separator {\n    display: none !important;\n  }\n}\n\n.analogy-image-container {\n  flex: 1 0 20%;\n  /* explanation below */\n  height: auto;\n  width: auto;\n  padding: 0.5rem;\n  cursor: pointer;\n}\n\n.analogy-image-container-six {\n  flex: 1 0 33%;\n  /* explanation below */\n  height: auto;\n  width: auto;\n  padding: 0.5rem;\n  cursor: pointer;\n}\n\n.analogy-image-container-twelve {\n  flex: 1 0 25% !important;\n  /* explanation below */\n  height: auto;\n  width: auto;\n  padding: 0.5rem;\n  cursor: pointer;\n}\n\n.label {\n  color: #4d5568;\n}\n\n.board-title {\n  font-size: 2rem;\n  font-family: \"Cambria Math\", serif;\n}\n\ninput, .bold-text {\n  font-size: 1.8rem;\n  color: black;\n  font-weight: bold;\n}\n\n.shake {\n  -webkit-animation-name: shake-animation;\n          animation-name: shake-animation;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n}\n\n@-webkit-keyframes shake-animation {\n  10%, 90% {\n    transform: translate3d(-0.5px, 0, 0);\n  }\n  20%, 80% {\n    transform: translate3d(2px, 0, 0);\n  }\n  30%, 50%, 70% {\n    transform: translate3d(-3px, 0, 0);\n  }\n  40%, 60% {\n    transform: translate3d(3px, 0, 0);\n  }\n}\n\n@keyframes shake-animation {\n  10%, 90% {\n    transform: translate3d(-0.5px, 0, 0);\n  }\n  20%, 80% {\n    transform: translate3d(2px, 0, 0);\n  }\n  30%, 50%, 70% {\n    transform: translate3d(-3px, 0, 0);\n  }\n  40%, 60% {\n    transform: translate3d(3px, 0, 0);\n  }\n}\n\n.remove-pointer {\n  display: none !important;\n}\n\n@media (max-width: 1375px) {\n  .pointer-container {\n    display: none !important;\n  }\n}\n\n.pointer-container {\n  color: black;\n  position: absolute;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  left: -160px;\n}\n\n.moving-pointer {\n  font-weight: 500 !important;\n  font-size: 80px;\n  -webkit-animation-name: moving-pointer;\n          animation-name: moving-pointer;\n  -webkit-animation-duration: 0.8s;\n          animation-duration: 0.8s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  color: black;\n}\n\n.AI-response-label-container {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.AI-response-label {\n  color: #666666;\n  font-size: 30px;\n}\n\n.AI-response-label > img {\n  width: 50px;\n  height: 50px;\n}\n\n@-webkit-keyframes moving-pointer {\n  from {\n    margin-left: 20px;\n  }\n  to {\n    margin-right: 30px;\n  }\n}\n\n@keyframes moving-pointer {\n  from {\n    margin-left: 20px;\n  }\n  to {\n    margin-right: 30px;\n  }\n}\n\n.pointer-label {\n  font-size: 19px;\n}\n\n.separator-label {\n  text-align: center;\n  font-size: 100px;\n  color: black;\n}\n\n.cue-line-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  justify-content: center;\n}\n\n@media (max-width: 880px) {\n  .fas-container {\n    width: 30px !important;\n    height: 110px;\n    display: flex;\n    flex-direction: column-reverse;\n    justify-content: space-between;\n    padding-left: 44px;\n  }\n\n  .dashboard-icon {\n    display: none;\n  }\n}\n\n@media (max-width: 520px) {\n  .cue-line-container {\n    max-width: 100vw;\n    display: flex;\n    width: auto;\n    justify-content: center;\n    flex-direction: column;\n  }\n\n  .fas-container {\n    width: 200px !important;\n    padding-top: 10px;\n    display: flex;\n    flex-direction: row !important;\n    justify-content: space-between;\n    padding-left: 0;\n    margin: auto;\n  }\n}\n\n.fas-container {\n  width: 270px;\n  display: flex;\n  justify-content: space-between;\n  padding-left: 44px;\n}\n\n.dashboard-icon {\n  width: 50px;\n  height: 50px;\n}\n\n.fa-sign-out-alt {\n  color: black;\n}\n\n.fa-info-circle {\n  color: #fd969e;\n  cursor: pointer;\n}\n\n.box-shadow {\n  box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.3);\n}\n\n.center-separator {\n  height: auto;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n}\n\n.candidate-selected {\n  border: #ff8d72 solid 5px;\n}\n\n.AI-selected {\n  border: #ffdc00 solid 5px;\n}\n\n.alerts-border {\n  border: #ff8d72 solid 5px;\n  -webkit-animation: blink 2s;\n          animation: blink 2s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n@-webkit-keyframes blink {\n  50% {\n    border-color: #fff;\n  }\n}\n\n@keyframes blink {\n  50% {\n    border-color: #fff;\n  }\n}\n\n::ng-deep .mat-form-field-flex {\n  background-color: transparent !important;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.img-magnifier-container {\n  position: relative;\n}\n\n::ng-deep .img-magnifier-glass {\n  position: absolute;\n  border: 3px solid #000;\n  border-radius: 50%;\n  cursor: none !important;\n  /*Set the size of the magnifier glass:*/\n  width: 100px;\n  height: 100px;\n  pointer-events: none;\n}\n\n.tree-icon {\n  width: 36px;\n  margin-right: 4px;\n  cursor: pointer;\n}\n\n@media (max-width: 500px) {\n  .task-image {\n    width: 300px;\n    height: 300px;\n  }\n}\n\n.task-image {\n  width: 430px;\n  height: 430px;\n  border: 2px transparent solid;\n  cursor: none !important;\n  background-size: cover !important;\n  background-position-x: center !important;\n  background: url(\"/assets/img/loading.gif\") no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGltYWdlLWNsYXNzaWZpY2F0aW9uLWJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSwwQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0NBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1Q0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsOEJBQUE7RUFDRjs7RUFFQTtJQUNFLHdCQUFBO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFBRjs7QUFHQTtFQUNFLDJCQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtLQUFBLGlDQUFBO1VBQUEsNEJBQUE7QUFBRjs7QUFHQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtBQUFBOztBQUdBO0VBQ0E7SUFDRSxzQkFBQTtJQUNBLGlDQUFBO0VBQUE7O0VBR0Y7SUFDRSwrQkFBQTtFQUFBOztFQUdGO0lBQ0UsNEJBQUE7RUFBQTtBQUNGOztBQUdBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFEQTs7QUFJQTtFQUNBLFlBQUE7QUFEQTs7QUFJQTtFQUNBLFlBQUE7QUFEQTs7QUFJQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQURBOztBQUlBO0VBQ0EsVUFBQTtBQURBOztBQUlBO0VBQ0EscUJBQUE7QUFEQTs7QUFJQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQURBOztBQUlBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Usc0JBQUE7QUFERjs7QUFJQTtFQUNBLGVBQUE7QUFEQTs7QUFJQTtFQUNBO0lBQ0UsT0FBQTtJQUNBLFFBQUE7SUFFQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7SUFDQSxhQUFBO0lBQ0Esd0JBQUE7RUFGQTtBQUNGOztBQUtBO0VBQ0E7SUFDRSx3QkFBQTtJQUEwQixzQkFBQTtFQUYxQjs7RUFLQTtJQUNFLHdCQUFBO0VBRkY7QUFDRjs7QUFLQTtFQUNFLGFBQUE7RUFBZSxzQkFBQTtFQUNmLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFBZSxzQkFBQTtFQUNmLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNFLHdCQUFBO0VBQTRCLHNCQUFBO0VBQzVCLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxrQ0FBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLHVDQUFBO1VBQUEsK0JBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0FBQUY7O0FBR0E7RUFDRTtJQUNFLG9DQUFBO0VBQUY7RUFHQTtJQUNFLGlDQUFBO0VBREY7RUFJQTtJQUNFLGtDQUFBO0VBRkY7RUFLQTtJQUNFLGlDQUFBO0VBSEY7QUFDRjs7QUFaQTtFQUNFO0lBQ0Usb0NBQUE7RUFBRjtFQUdBO0lBQ0UsaUNBQUE7RUFERjtFQUlBO0lBQ0Usa0NBQUE7RUFGRjtFQUtBO0lBQ0UsaUNBQUE7RUFIRjtBQUNGOztBQU9BO0VBQ0Usd0JBQUE7QUFMRjs7QUFRQTtFQUNFO0lBQ0Usd0JBQUE7RUFMRjtBQUNGOztBQVFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBTkY7O0FBU0E7RUFDRSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxzQ0FBQTtVQUFBLDhCQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7RUFDQSx5Q0FBQTtVQUFBLGlDQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtFQUNBLFlBQUE7QUFORjs7QUFTQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUFORjs7QUFTQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBTkY7O0FBU0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQU5GOztBQVNBO0VBQ0U7SUFDRSxpQkFBQTtFQU5GO0VBU0E7SUFDRSxrQkFBQTtFQVBGO0FBQ0Y7O0FBQUE7RUFDRTtJQUNFLGlCQUFBO0VBTkY7RUFTQTtJQUNFLGtCQUFBO0VBUEY7QUFDRjs7QUFXQTtFQUNFLGVBQUE7QUFURjs7QUFZQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBVEY7O0FBWUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUFURjs7QUFZQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSxhQUFBO0lBQ0EsYUFBQTtJQUNBLDhCQUFBO0lBQ0EsOEJBQUE7SUFDQSxrQkFBQTtFQVRGOztFQVlBO0lBQ0UsYUFBQTtFQVRGO0FBQ0Y7O0FBWUE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLFdBQUE7SUFDQSx1QkFBQTtJQUNBLHNCQUFBO0VBVkY7O0VBYUE7SUFDRSx1QkFBQTtJQUNBLGlCQUFBO0lBQ0EsYUFBQTtJQUNBLDhCQUFBO0lBQ0EsOEJBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtFQVZGO0FBQ0Y7O0FBY0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUFaRjs7QUFlQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBWkY7O0FBZUE7RUFDRSxZQUFBO0FBWkY7O0FBZUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQVpGOztBQWVBO0VBQ0UseUNBQUE7QUFaRjs7QUFlQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQVpGOztBQWVBO0VBQ0UseUJBQUE7QUFaRjs7QUFlQTtFQUNFLHlCQUFBO0FBWkY7O0FBZUE7RUFDRSx5QkFBQTtFQUVBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0FBYkY7O0FBZ0JBO0VBQ0U7SUFDRSxrQkFBQTtFQWJGO0FBQ0Y7O0FBVUE7RUFDRTtJQUNFLGtCQUFBO0VBYkY7QUFDRjs7QUFpQkE7RUFDRSx3Q0FBQTtBQWZGOztBQW1CQTtFQUFHLHNCQUFBO0FBZkg7O0FBaUJBO0VBQ0Usa0JBQUE7QUFkRjs7QUFpQkE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQWRGOztBQWlCQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFkRjs7QUFpQkE7RUFDRTtJQUVFLFlBQUE7SUFDQSxhQUFBO0VBZkY7QUFDRjs7QUFrQkE7RUFFRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQ0FBQTtFQUNBLHdDQUFBO0VBQ0Esb0RBQUE7QUFqQkYiLCJmaWxlIjoiaW1hZ2UtY2xhc3NpZmljYXRpb24tYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW5hbG9neS1jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogNjcwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kZWZpbml0aW9ucy1ib2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnNlY29uZGFyeS1jYXRlZ29yeS1saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIG1heC1oZWlnaHQ6IDYwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAyMzBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhdGVnb3J5LWxpc3QsIC5kZWZpbml0aW9ucy1saXN0IHtcclxuICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIG1heC1oZWlnaHQ6IDI4MHB4O1xyXG59XHJcblxyXG4uY2F0ZWdvcnktbGlzdCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaXJmbC1zZWNvbmRhcnktY2F0ZWdvcnkge1xyXG4gIGJvcmRlcjogc29saWQgMnB4ICNlMmUyZTIgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlyZmwtY2F0ZWdvcnksIC5pcmZsLXJldmlldy1kaXYge1xyXG4gIHdpZHRoOiAyMzBweDtcclxuICBoZWlnaHQ6IDIwJTtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItdG9wOiBzb2xpZCAycHggI2UyZTJlMjtcclxuICBib3JkZXItcmlnaHQ6IHNvbGlkIDJweCAjZTJlMmUyO1xyXG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAycHggI2UyZTJlMjtcclxufVxyXG5cclxuLmlyZmwtcmV2aWV3LWRpdiB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uaXJmbC1yZXZpZXctZGl2LWl0ZW0ge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGEwYjQ2MztcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLnNlbGVjdGVkLWNhdGVnb3J5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmQ5NjllNTI7XHJcbn1cclxuXHJcbi5oaW50IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMnB4O1xyXG59XHJcblxyXG4uY29ycmVjdC1jYXRlZ29yeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaXJmbC1jYXRlZ29yeTpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggI2UyZTJlMjtcclxufVxyXG5cclxuLmNhdGVnb3J5LWxpc3QsIC5kZWZpbml0aW9ucy1saXN0Omxhc3QtY2hpbGQge1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcblxyXG4uYm9hcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLm5vLXVuZGVybGluZS1tYXQtZmllbGQgOjpuZy1kZWVwICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lICB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MzVweCkge1xyXG4gIC50b3AtYm9hcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5cclxuICAuY3VlLWJvYXJkIHtcclxuICAgIGhlaWdodDogMTIwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi50b3AtYm9hcmQge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY2xvc2UtaWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbn1cclxuXHJcbi5tYWluLWRlc2NyaXB0aW9uID4gcCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmZpcnN0LW1haW4tZGVzY3JpcHRpb24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gIHJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgdG9wOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgbGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYW5ub3RhdGlvbnMtZGV0YWlscyB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxN3B4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgdXNlci1zZWxlY3Q6IHRleHQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1haW4tZGVzY3JpcHRpb24ge1xyXG5jb2xvcjogYmxhY2s7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxucmlnaHQ6IC0yNjBweDtcclxud2lkdGg6IDU2M3B4O1xyXG5oZWlnaHQ6IDQ2OHB4O1xyXG50b3A6IDA7XHJcbnRleHQtYWxpZ246IHN0YXJ0O1xyXG56LWluZGV4OiA5OTk5OTk5OTk5OTk5O1xyXG5iYWNrZ3JvdW5kOiAjZmVlYmVjO1xyXG5wYWRkaW5nOiAxMHB4O1xyXG5ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5ib3gtc2hhZG93OiAwIDAgMC4ycmVtIHJnYigwIDAgMCAvIDMwJSk7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2NjBweCkge1xyXG4ubGVmdC1ib2FyZCB7XHJcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdWUtbGluZS1jb250YWluZXIge1xyXG4gIHBhZGRpbmctYm90dG9tOiA2MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBmb250LXNpemU6IDEuNXJlbSAhaW1wb3J0YW50O1xyXG59XHJcbn1cclxuXHJcbi5sZWZ0LWJvYXJkLCAucmlnaHQtYm9hcmQge1xyXG53aWR0aDogMTAwJTtcclxuaGVpZ2h0OiAxMDAlO1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5jdWUtYm9hcmQge1xyXG53aWR0aDogNjAwcHg7XHJcbn1cclxuXHJcbi5hc3NvY2lhdGlvbnMtYm9hcmQge1xyXG53aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5hc3NvY2lhdGlvbnMtYm9hcmQsIC5jdWUtYm9hcmQge1xyXG5oZWlnaHQ6IDEwMHB4O1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG53aWR0aDogOTUlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xyXG5wYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuYm9yZGVyOiAwO1xyXG5vdXRsaW5lOiAwO1xyXG5iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW1hZ2VzLWJvYXJkIHtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG5kaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5mYXMge1xyXG5mb250LXNpemU6IDMzcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjEwcHgpIHtcclxuLm1haW4tZGVzY3JpcHRpb24ge1xyXG4gIGxlZnQ6MDtcclxuICByaWdodDowO1xyXG5cclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDI5OHB4O1xyXG4gIGJvdHRvbTogLTI1MHB4O1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbiAgaGVpZ2h0OiA3NTVweCAhaW1wb3J0YW50O1xyXG59XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDgwcHgpIHtcclxuLmFuYWxvZ3ktaW1hZ2UtY29udGFpbmVyIHtcclxuICBmbGV4OiAxIDAgOTklICFpbXBvcnRhbnQ7IC8qIGV4cGxhbmF0aW9uIGJlbG93ICovXHJcbiAgfVxyXG5cclxuICAuY2VudGVyLXNlcGFyYXRvciB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uYW5hbG9neS1pbWFnZS1jb250YWluZXIge1xyXG4gIGZsZXg6IDEgMCAyMCU7IC8qIGV4cGxhbmF0aW9uIGJlbG93ICovXHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hbmFsb2d5LWltYWdlLWNvbnRhaW5lci1zaXgge1xyXG4gIGZsZXg6IDEgMCAzMyU7IC8qIGV4cGxhbmF0aW9uIGJlbG93ICovXHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hbmFsb2d5LWltYWdlLWNvbnRhaW5lci10d2VsdmUge1xyXG4gIGZsZXg6IDEgMCAyNSUgIWltcG9ydGFudDsgOyAvKiBleHBsYW5hdGlvbiBiZWxvdyAqL1xyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogYXV0bztcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubGFiZWwge1xyXG4gIGNvbG9yOiAjNGQ1NTY4O1xyXG59XHJcblxyXG4uYm9hcmQtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LWZhbWlseTogXCJDYW1icmlhIE1hdGhcIiwgc2VyaWY7XHJcbn1cclxuXHJcbmlucHV0LCAuYm9sZC10ZXh0IHtcclxuICBmb250LXNpemU6IDEuOHJlbTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5zaGFrZSB7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHNoYWtlLWFuaW1hdGlvbjtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2hha2UtYW5pbWF0aW9uIHtcclxuICAxMCUsIDkwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0wLjVweCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICAyMCUsIDgwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICAzMCUsIDUwJSwgNzAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTNweCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICA0MCUsIDYwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDNweCwgMCwgMCk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLnJlbW92ZS1wb2ludGVyIHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMzc1cHgpIHtcclxuICAucG9pbnRlci1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLnBvaW50ZXItY29udGFpbmVyIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBsZWZ0OiAtMTYwcHg7XHJcbn1cclxuXHJcbi5tb3ZpbmctcG9pbnRlciB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogODBweDtcclxuICBhbmltYXRpb24tbmFtZTogbW92aW5nLXBvaW50ZXI7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjhzO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uQUktcmVzcG9uc2UtbGFiZWwtY29udGFpbmVyIHtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLkFJLXJlc3BvbnNlLWxhYmVsIHtcclxuICBjb2xvcjogIzY2NjY2NjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi5BSS1yZXNwb25zZS1sYWJlbCA+IGltZyB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG1vdmluZy1wb2ludGVyIHtcclxuICBmcm9tIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5wb2ludGVyLWxhYmVsIHtcclxuICBmb250LXNpemU6IDE5cHg7XHJcbn1cclxuXHJcbi5zZXBhcmF0b3ItbGFiZWwge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEwMHB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmN1ZS1saW5lLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODgwcHgpIHtcclxuICAuZmFzLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQ0cHg7XHJcbiAgfVxyXG5cclxuICAuZGFzaGJvYXJkLWljb24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MjBweCkge1xyXG4gIC5jdWUtbGluZS1jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC5mYXMtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5mYXMtY29udGFpbmVyIHtcclxuICB3aWR0aDogMjcwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZy1sZWZ0OiA0NHB4O1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLWljb24ge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLmZhLXNpZ24tb3V0LWFsdCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uZmEtaW5mby1jaXJjbGUge1xyXG4gIGNvbG9yOiAjZmQ5NjllO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJveC1zaGFkb3cge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwLjJyZW0gcmdiKDAgMCAwIC8gMzAlKTtcclxufVxyXG5cclxuLmNlbnRlci1zZXBhcmF0b3Ige1xyXG4gIGhlaWdodDogYXV0bztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5jYW5kaWRhdGUtc2VsZWN0ZWQge1xyXG4gIGJvcmRlcjogI2ZmOGQ3MiBzb2xpZCA1cHg7XHJcbn1cclxuXHJcbi5BSS1zZWxlY3RlZCB7XHJcbiAgYm9yZGVyOiAjZmZkYzAwIHNvbGlkIDVweDtcclxufVxyXG5cclxuLmFsZXJ0cy1ib3JkZXIge1xyXG4gIGJvcmRlcjogI2ZmOGQ3MiBzb2xpZCA1cHg7XHJcblxyXG4gIGFuaW1hdGlvbjogYmxpbmsgMnM7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYmxpbmsge1xyXG4gIDUwJSB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XHJcbiAgfVxyXG59XHJcblxyXG4vL01hdGVyaWFsXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZmxleCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8gSW1hZ2UgbWFnbmlmaWVyIGdsYXNzXHJcbioge2JveC1zaXppbmc6IGJvcmRlci1ib3g7fVxyXG5cclxuLmltZy1tYWduaWZpZXItY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5pbWctbWFnbmlmaWVyLWdsYXNzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgIzAwMDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgY3Vyc29yOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgLypTZXQgdGhlIHNpemUgb2YgdGhlIG1hZ25pZmllciBnbGFzczoqL1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4udHJlZS1pY29uIHtcclxuICB3aWR0aDogMzZweDtcclxuICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC50YXNrLWltYWdlIHtcclxuICAgIC8vYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnRhc2staW1hZ2Uge1xyXG4gIC8vYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgd2lkdGg6IDQzMHB4O1xyXG4gIGhlaWdodDogNDMwcHg7XHJcbiAgYm9yZGVyOiAycHggdHJhbnNwYXJlbnQgc29saWQ7XHJcbiAgY3Vyc29yOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWcvbG9hZGluZy5naWZcIikgbm8tcmVwZWF0O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "OZMB":
/*!************************************************!*\
  !*** ./src/app/types/image-categories-enum.ts ***!
  \************************************************/
/*! exports provided: ImageCategoriesEnum, SimilesImagesCategoriesEnum, SimilesConceptsCategoriesEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCategoriesEnum", function() { return ImageCategoriesEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimilesImagesCategoriesEnum", function() { return SimilesImagesCategoriesEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimilesConceptsCategoriesEnum", function() { return SimilesConceptsCategoriesEnum; });
var ImageCategoriesEnum;
(function (ImageCategoriesEnum) {
    ImageCategoriesEnum["Figurative_Literal"] = "Figurative Literal";
    ImageCategoriesEnum["Figurative"] = "Figurative";
    ImageCategoriesEnum["Caption"] = "Caption";
    ImageCategoriesEnum["Partial_Object"] = "Partial Objects";
    ImageCategoriesEnum["None"] = "None";
    ImageCategoriesEnum["Default"] = "Default";
})(ImageCategoriesEnum || (ImageCategoriesEnum = {}));
var SimilesImagesCategoriesEnum;
(function (SimilesImagesCategoriesEnum) {
    SimilesImagesCategoriesEnum["Figurative"] = "Figurative";
    SimilesImagesCategoriesEnum["Opposite"] = "Opposite";
    SimilesImagesCategoriesEnum["Natural"] = "Natural";
    SimilesImagesCategoriesEnum["Default"] = "Default";
})(SimilesImagesCategoriesEnum || (SimilesImagesCategoriesEnum = {}));
var SimilesConceptsCategoriesEnum;
(function (SimilesConceptsCategoriesEnum) {
    SimilesConceptsCategoriesEnum["Target"] = "Target";
    SimilesConceptsCategoriesEnum["Source"] = "Source";
    SimilesConceptsCategoriesEnum["None"] = "None";
    SimilesConceptsCategoriesEnum["Default"] = "Default";
})(SimilesConceptsCategoriesEnum || (SimilesConceptsCategoriesEnum = {}));


/***/ }),

/***/ "QhCX":
/*!************************************!*\
  !*** ./src/app/types/irfl-task.ts ***!
  \************************************/
/*! exports provided: IRFLTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IRFLTask", function() { return IRFLTask; });
/* harmony import */ var _assets_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/constants */ "xVX4");

class IRFLTask {
    constructor(type, candidates, phrase = '', numOfSolution = 0, definitions = [], serverData = {}, id = '') {
        this.id = '';
        this.type = type;
        this.id = id;
        this.candidates = candidates;
        this.phrase = phrase;
        this.definitions = definitions.filter((query) => !_assets_constants__WEBPACK_IMPORTED_MODULE_0__["QUERIES_BLACKLIST"].includes(query.toLowerCase())).map(this.capitalizeFirstLetter);
        this.numOfSolution = numOfSolution;
        this.serverData = serverData;
    }
    static clone(task) {
        return new IRFLTask(task.type, JSON.parse(JSON.stringify(task.candidates)), task.phrase, task.numOfSolution, task.definitions, task.serverData, task.id);
    }
    static jaccard_similarity(list1, list2) {
        const intersection = list1.filter(item => list2.includes(item));
        return Number((((intersection.length) / (new Set([...list1, ...list2])).size) * 100).toFixed(0));
    }
    init() {
        this.clearCandidates();
    }
    capitalizeFirstLetter(sentence) {
        try {
            return sentence.charAt(0).toUpperCase() + sentence.slice(1);
        }
        catch (e) {
            return sentence;
        }
    }
    isTaskSolved(mturk = false) {
        if (mturk) {
            return this.numberOfChosenCandidates() === this.numOfSolution;
        }
        return !this.candidates.map((candidate) => candidate.userChoice === candidate.answer).includes(false);
    }
    getHint(game = false) {
        if (this.isTaskSolved()) {
            return '';
        }
        else {
            if (this.numberOfChosenCandidates() !== this.numOfSolution) {
                return 'Please choose ' + this.numOfSolution + ' candidates';
            }
            else if (!game) {
                return 'Candidates should visualize the figurative phrase ' + this.phrase;
            }
        }
    }
    clearCandidates() {
        this.candidates.forEach((candidate) => candidate.userChoice = false);
    }
    numberOfChosenCandidates() {
        return this.candidates.map((candidate) => candidate.userChoice).filter((elem) => elem).length;
    }
    getJSON() {
        return Object.assign({}, this);
    }
    getUserChoices() {
        return this.candidates.filter((candidate) => candidate.userChoice).map(candidate => candidate.name);
    }
    getLabels() {
        return this.candidates.filter(candidate => candidate.answer).map(candidate => candidate.name);
    }
    getSolveFormat() {
        const userChoice = this.getUserChoices();
        const labels = this.getLabels();
        return {
            association_id: this.id,
            associations: this.candidates.map(candidate => candidate.name),
            candidates: this.candidates.map(candidate => candidate.name),
            user_predictions: userChoice,
            labels,
            jaccard: IRFLTask.jaccard_similarity(userChoice, labels),
            cue: this.phrase,
            type: 'solve_game'
        };
    }
}


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
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
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






let AppComponent = class AppComponent {
    constructor(renderer, location, document) {
        this.renderer = renderer;
        this.location = location;
    }
    onWindowScroll(e) {
        if (window.pageYOffset > 100) {
            let element = document.getElementById('navbar-top');
            if (element) {
                element.classList.remove('navbar-transparent');
                element.classList.add('bg-danger');
            }
        }
        else {
            let element = document.getElementById('navbar-top');
            if (element) {
                element.classList.add('navbar-transparent');
                element.classList.remove('bg-danger');
            }
        }
    }
    ngOnInit() {
        this.onWindowScroll(event);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] }
];
AppComponent.propDecorators = {
    onWindowScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['window:scroll', ['$event'],] }]
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], Object])
], AppComponent);



/***/ }),

/***/ "Titn":
/*!************************************************************************!*\
  !*** ./src/app/pages/mturk leaderboard/mturk-leaderboard.component.ts ***!
  \************************************************************************/
/*! exports provided: MturkLeaderboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MturkLeaderboardComponent", function() { return MturkLeaderboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_mturk_leaderboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./mturk-leaderboard.component.html */ "al74");
/* harmony import */ var _mturk_leaderboard_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mturk-leaderboard.component.scss */ "fe5k");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_server_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/server-request.service */ "dXuD");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");







let MturkLeaderboardComponent = class MturkLeaderboardComponent {
    // ].sort((a,b) => Number(b.cat_1) - Number(a.cat_1))
    constructor(serverRequestService) {
        this.serverRequestService = serverRequestService;
        this.isCollapsed = true;
        this.leaderboard$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"](1);
        this.Math = Math;
        serverRequestService.getMturkLeaderboard().subscribe(leaderboard => this.leaderboard$.next(leaderboard));
        this.indexes$ = this.leaderboard$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(table => [...Array(table['worker_id'].length).keys()]
            .filter((index) => table['images_annotated'][index] > 250)
            .sort((a, b) => this.calculate_worker_score(table, b) - this.calculate_worker_score(table, a))));
        this.leaderboard$.subscribe(l => console.log(l));
        this.indexes$.subscribe(l => console.log(l));
    }
    calculate_worker_score(table, index) {
        const scalar = (100 / 5) / 100;
        return table['Figurative_Literal_agreement'][index] * scalar +
            table['Figurative_agreement'][index] * scalar +
            table['Caption_agreement'][index] * scalar +
            table['Partial_Objects_agreement'][index] * scalar +
            table['None_agreement'][index] * scalar;
    }
    ngOnInit() {
    }
};
MturkLeaderboardComponent.ctorParameters = () => [
    { type: _services_server_request_service__WEBPACK_IMPORTED_MODULE_5__["ServerRequestService"] }
];
MturkLeaderboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-leaderboard',
        template: _raw_loader_mturk_leaderboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_mturk_leaderboard_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_server_request_service__WEBPACK_IMPORTED_MODULE_5__["ServerRequestService"]])
], MturkLeaderboardComponent);



/***/ }),

/***/ "UElU":
/*!***********************************************!*\
  !*** ./src/app/types/experiment-mode.enum.ts ***!
  \***********************************************/
/*! exports provided: ExperimentModeEnum, get_experiment_mode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperimentModeEnum", function() { return ExperimentModeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_experiment_mode", function() { return get_experiment_mode; });
var ExperimentModeEnum;
(function (ExperimentModeEnum) {
    ExperimentModeEnum["RG"] = "RG";
    ExperimentModeEnum["ONLY_AI"] = "OA";
    ExperimentModeEnum["ONLY_HUMAN"] = "OH";
    ExperimentModeEnum["NO_REWARD"] = "NR";
    ExperimentModeEnum["DEFAULT"] = "DEFAULT";
})(ExperimentModeEnum || (ExperimentModeEnum = {}));
function get_experiment_mode(mode) {
    mode = mode === null || mode === void 0 ? void 0 : mode.toUpperCase();
    switch (mode) {
        case ExperimentModeEnum.RG:
            return ExperimentModeEnum.RG;
        case ExperimentModeEnum.ONLY_AI:
            return ExperimentModeEnum.ONLY_AI;
        case ExperimentModeEnum.ONLY_HUMAN:
            return ExperimentModeEnum.ONLY_HUMAN;
        case ExperimentModeEnum.NO_REWARD:
            return ExperimentModeEnum.NO_REWARD;
        default:
            return ExperimentModeEnum.DEFAULT;
    }
}


/***/ }),

/***/ "UhhV":
/*!**************************************************************!*\
  !*** ./src/app/pages/leaderboard/leaderboard.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-header .content-center {\n  color: black !important;\n  width: 90%;\n  max-width: none;\n  margin: auto;\n}\n\n.content-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 1rem;\n}\n\n.submit-label {\n  padding-bottom: 4rem;\n}\n\n.task-tabs {\n  padding-bottom: 1rem;\n}\n\n.main-label {\n  font-weight: 600;\n  text-transform: none !important;\n  font-size: 3.6rem;\n  color: #fd969e !important;\n}\n\n.leaderboard-container {\n  width: 100%;\n  min-height: 400px;\n  box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.05);\n}\n\nul li, ol li {\n  color: black;\n}\n\nbody {\n  font-family: \"lato\", sans-serif;\n}\n\n.container {\n  max-width: 1000px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nh2 {\n  font-size: 26px;\n  margin: 20px 0;\n  text-align: center;\n}\n\nh2 small {\n  font-size: 0.5em;\n}\n\n@media (max-width: 767px) {\n  .main-label {\n    font-size: 3rem !important;\n  }\n}\n\n.ai-leaderboard > .main-label {\n  font-size: 3.5rem;\n}\n\n.stats-page-ref {\n  color: #fd969e !important;\n}\n\n::ng-deep .nav-tabs {\n  width: 460px;\n  display: flex;\n  justify-content: space-around;\n}\n\n::ng-deep .tab-content {\n  width: 100%;\n}\n\n.nav-tabs-danger {\n  padding-top: 13rem !important;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n}\n\n.col-2-AI-leaderboard {\n  width: 70%;\n  text-align: left;\n  margin-left: 16px;\n}\n\n.small-note {\n  margin-top: 15px;\n  color: grey;\n  font-size: 0.8rem;\n}\n\n.responsive-table {\n  padding: 0;\n}\n\n.responsive-table li {\n  border-radius: 3px;\n  padding: 25px 30px;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n}\n\n.responsive-table .table-row, .responsive-table .table-header {\n  width: 100%;\n  background-color: #fbdddf;\n  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);\n}\n\n.responsive-table .col-1-leaderboard {\n  width: 5%;\n}\n\n.responsive-table .col-2-leaderboard {\n  width: 50%;\n  text-align: left;\n  margin-left: 16px;\n}\n\n.responsive-table .col-3-leaderboard, .responsive-table .col-4-leaderboard, .responsive-table .col-5-leaderboard {\n  width: 15%;\n}\n\n.responsive-table .table-header .col-3-leaderboard, .responsive-table .table-header .col-4-leaderboard, .responsive-table .table-header .col-5-leaderboard {\n  font-size: 12px;\n}\n\n@media all and (max-width: 767px) {\n  .responsive-table .col-2-leaderboard {\n    margin-left: 0px;\n  }\n  .responsive-table .col-1-leaderboard, .responsive-table .col-2-leaderboard, .responsive-table .col-3-leaderboard, .responsive-table .col-4-leaderboard, .responsive-table .col-5-leaderboard {\n    width: 134px;\n  }\n  .responsive-table .table-header {\n    display: none;\n  }\n  .responsive-table li {\n    display: block;\n  }\n  .responsive-table .col-leaderboard {\n    flex-basis: 100%;\n  }\n  .responsive-table .col-leaderboard {\n    display: flex;\n    padding: 10px 0;\n    justify-content: space-between;\n  }\n  .responsive-table .col-leaderboard:before {\n    color: #6C7A89;\n    width: 20px;\n    content: attr(data-label);\n    text-align: right;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsZWFkZXJib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLCtDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSwrQkFBQTtBQUNGOztBQUNBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUVGOztBQURFO0VBQ0UsZ0JBQUE7QUFHSjs7QUFDQTtFQUNFO0lBQ0UsMEJBQUE7RUFFRjtBQUNGOztBQUNBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFBRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUVKOztBQU1FO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsOENBQUE7QUFKSjs7QUFNRTtFQUNFLFNBQUE7QUFKSjs7QUFNRTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBSko7O0FBTUU7RUFDRSxVQUFBO0FBSko7O0FBUUk7RUFDRSxlQUFBO0FBTk47O0FBV0U7RUFDRTtJQUNFLGdCQUFBO0VBVEo7RUFZRTtJQUNFLFlBQUE7RUFWSjtFQWFFO0lBQ0UsYUFBQTtFQVhKO0VBZ0JFO0lBQ0UsY0FBQTtFQWRKO0VBZ0JFO0lBRUUsZ0JBQUE7RUFmSjtFQWtCRTtJQUNFLGFBQUE7SUFDQSxlQUFBO0lBQ0EsOEJBQUE7RUFoQko7RUFpQkk7SUFDRSxjQUFBO0lBQ0EsV0FBQTtJQUNBLHlCQUFBO0lBQ0EsaUJBQUE7RUFmTjtBQUNGIiwiZmlsZSI6ImxlYWRlcmJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtaGVhZGVyIC5jb250ZW50LWNlbnRlciB7XHJcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXgtd2lkdGg6IG5vbmU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uY29udGVudC1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xyXG59XHJcblxyXG4uc3VibWl0LWxhYmVsIHtcclxuICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcclxufVxyXG5cclxuLnRhc2stdGFicyB7XHJcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5tYWluLWxhYmVsIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAzLjZyZW07XHJcbiAgY29sb3I6ICNmZDk2OWUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxlYWRlcmJvYXJkLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMC41cmVtIHJnYigwIDAgMCAvIDUlKTtcclxufVxyXG5cclxudWwgbGksIG9sIGxpIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiAnbGF0bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBzbWFsbCB7XHJcbiAgICBmb250LXNpemU6IDAuNWVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLm1haW4tbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAzcmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uYWktbGVhZGVyYm9hcmQgPiAubWFpbi1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAzLjVyZW07XHJcbn1cclxuXHJcbi5zdGF0cy1wYWdlLXJlZiB7XHJcbiAgY29sb3I6ICNmZDk2OWUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5uYXYtdGFicyB7XHJcbiAgd2lkdGg6IDQ2MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudGFiLWNvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubmF2LXRhYnMtZGFuZ2VyIHtcclxuICBwYWRkaW5nLXRvcDogMTNyZW0gIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbC0yLUFJLWxlYWRlcmJvYXJkIHtcclxuICB3aWR0aDogNzAlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbn1cclxuXHJcbi5zbWFsbC1ub3RlIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGNvbG9yOiBncmV5O1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG59XHJcblxyXG4ucmVzcG9uc2l2ZS10YWJsZSB7XHJcbiAgcGFkZGluZzogMDtcclxuICBsaSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBwYWRkaW5nOiAyNXB4IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICB9XHJcbiAgLy8udGFibGUtaGVhZGVyIHtcclxuICAvLyAgYmFja2dyb3VuZC1jb2xvcjogIzk1QTVBNjtcclxuICAvLyAgZm9udC1zaXplOiAxNHB4O1xyXG4gIC8vICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIC8vICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xyXG4gIC8vfVxyXG4gIC50YWJsZS1yb3csIC50YWJsZS1oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJkZGRmO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA5cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICB9XHJcbiAgLmNvbC0xLWxlYWRlcmJvYXJkIHtcclxuICAgIHdpZHRoOiA1JTtcclxuICB9XHJcbiAgLmNvbC0yLWxlYWRlcmJvYXJkIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgfVxyXG4gIC5jb2wtMy1sZWFkZXJib2FyZCwgLmNvbC00LWxlYWRlcmJvYXJkLCAuY29sLTUtbGVhZGVyYm9hcmQge1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICB9XHJcblxyXG4gIC50YWJsZS1oZWFkZXIge1xyXG4gICAgLmNvbC0zLWxlYWRlcmJvYXJkLCAuY29sLTQtbGVhZGVyYm9hcmQsIC5jb2wtNS1sZWFkZXJib2FyZCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLmNvbC0yLWxlYWRlcmJvYXJkIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLTEtbGVhZGVyYm9hcmQsIC5jb2wtMi1sZWFkZXJib2FyZCwgLmNvbC0zLWxlYWRlcmJvYXJkLCAuY29sLTQtbGVhZGVyYm9hcmQsIC5jb2wtNS1sZWFkZXJib2FyZCB7XHJcbiAgICAgIHdpZHRoOiAxMzRweDtcclxuICAgIH1cclxuXHJcbiAgICAudGFibGUtaGVhZGVyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC50YWJsZS1yb3d7XHJcblxyXG4gICAgfVxyXG4gICAgbGkge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5jb2wtbGVhZGVyYm9hcmQge1xyXG5cclxuICAgICAgZmxleC1iYXNpczogMTAwJTtcclxuXHJcbiAgICB9XHJcbiAgICAuY29sLWxlYWRlcmJvYXJkIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICBjb2xvcjogIzZDN0E4OTtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtbGFiZWwpO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "V/EO":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/mturk-image-classification-task/mturk-image-classification-task.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1, h3 {\n  color: #4d5568 !important;\n}\n\n.stat-label {\n  font-size: 2rem;\n  text-align: center;\n  font-weight: 700;\n}\n\n.stat-description {\n  text-align: center;\n}\n\n.abstract {\n  display: flex;\n  justify-content: center;\n}\n\n.abstract > img {\n  height: 16rem;\n}\n\n.content-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 2.5rem;\n}\n\n.page-header {\n  max-height: -webkit-max-content !important;\n  max-height: -moz-max-content !important;\n  max-height: max-content !important;\n}\n\n.sub-title {\n  font-size: 2rem;\n}\n\n@media (max-width: 800px) {\n  .explore-nav {\n    justify-content: center;\n  }\n}\n\n@media (max-width: 500px) {\n  .results-nav {\n    width: 85vw;\n    overflow-y: scroll;\n  }\n}\n\n@media (max-width: 760px) {\n  .test-nav {\n    width: 100% !important;\n  }\n}\n\n.test-nav {\n  width: 40%;\n  justify-content: space-between;\n  align-items: center;\n  display: flex;\n  padding-top: 1rem;\n}\n\n.btn-neutral {\n  background: #fab1b45c !important;\n  color: #222a42 !important;\n}\n\n.btn-neutral:hover {\n  background: #fab1b4a6 !important;\n}\n\n.test-me-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 300px;\n  padding-bottom: 20px;\n}\n\n.example-label {\n  width: 125%;\n  padding-bottom: 2.2rem;\n}\n\n.explore-nav {\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  padding-bottom: 5rem;\n}\n\n.got-it-container {\n  width: 400px;\n  height: 180px;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n}\n\n.got-it-title {\n  color: #fd969e !important;\n}\n\n.practice-text, .practice-title {\n  color: #222a42 !important;\n}\n\n.got-it-container, .practice-title {\n  padding: 20px;\n  font-size: 24px;\n}\n\n.practice-title {\n  font-weight: bold;\n}\n\n.task-container, .got-it-container, .practice-text {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.hint {\n  color: black;\n  width: 100%;\n  font-size: 1.3rem;\n}\n\n.guess-clue-hint {\n  color: black;\n  width: 100%;\n  height: 60px;\n  font-size: 20px;\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 700;\n}\n\n.no-clue {\n  visibility: hidden !important;\n}\n\n.submitted {\n  pointer-events: none;\n}\n\n.text-row {\n  padding: 20px;\n  color: #222a42 !important;\n  font-size: 0.875rem;\n}\n\n.main-label {\n  font-weight: 600;\n  text-transform: none !important;\n  font-size: 4rem;\n  color: #fd969e !important;\n}\n\n.main-description {\n  font-size: 1rem;\n  color: #222a42 !important;\n  padding-bottom: 3rem;\n}\n\n.padding-bottom {\n  padding-bottom: 5rem;\n}\n\n.selected-button {\n  -webkit-transform: translateY(-1px);\n  background: #fab1b4d1 !important;\n}\n\n.disabled-button, .disabled-button:hover {\n  -webkit-transform: translateY(-1px);\n  background: #fab1b42e !important;\n}\n\n.fas-big {\n  font-size: 2.5rem;\n  /* font-weight: bold; */\n  color: #fd969e !important;\n  display: inline-block;\n  cursor: pointer;\n}\n\n.task-container ::ng-deep .btn-big {\n  font-size: 1.5rem;\n}\n\n.wrong-answer, .wrong-answer:hover, .wrong-answer:visited, .wrong-answer:active .wrong-answer:target, .wrong-answer:focus {\n  background: #ff3c3ce0 !important;\n  transform: none !important;\n}\n\n.correct-answer, .correct-answer:hover, .correct-answer:visited, .correct-answer:active, .correct-answer:target, .correct-answer:focus {\n  background: #63ff3ce0 !important;\n  transform: none !important;\n}\n\n.bs-tooltip-top {\n  background: #00bbff !important;\n}\n\n.tooltip-inner {\n  font-size: 1rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtdHVyay1pbWFnZS1jbGFzc2lmaWNhdGlvbi10YXNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UseUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLDBDQUFBO0VBQUEsdUNBQUE7RUFBQSxrQ0FBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtBQUFGOztBQUdBO0VBQ0U7SUFDRSx1QkFBQTtFQUFGO0FBQ0Y7O0FBSUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxrQkFBQTtFQUZGO0FBQ0Y7O0FBTUE7RUFDRTtJQUNFLHNCQUFBO0VBSkY7QUFDRjs7QUFPQTtFQUNFLFVBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBTEY7O0FBU0E7RUFDRSxnQ0FBQTtFQUNBLHlCQUFBO0FBTkY7O0FBU0E7RUFDRSxnQ0FBQTtBQU5GOztBQVNBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFORjs7QUFTQTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtBQU5GOztBQVNBO0VBQ0UsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBTkY7O0FBU0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDZDQUFBO0FBTkY7O0FBU0E7RUFDRSx5QkFBQTtBQU5GOztBQVNBO0VBQ0UseUJBQUE7QUFORjs7QUFTQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBTkY7O0FBU0E7RUFDRSxpQkFBQTtBQU5GOztBQVNBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQU5GOztBQVNBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQU5GOztBQVNBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQU5GOztBQVNBO0VBQ0UsNkJBQUE7QUFORjs7QUFTQTtFQUNFLG9CQUFBO0FBTkY7O0FBU0E7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQU5GOztBQVVBO0VBQ0UsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQVBGOztBQVVBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUFQRjs7QUFVQTtFQUNFLG9CQUFBO0FBUEY7O0FBVUE7RUFDRSxtQ0FBQTtFQUNBLGdDQUFBO0FBUEY7O0FBVUE7RUFDRSxtQ0FBQTtFQUNBLGdDQUFBO0FBUEY7O0FBVUE7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFQRjs7QUFVQTtFQUNFLGlCQUFBO0FBUEY7O0FBVUE7RUFDRSxnQ0FBQTtFQUNBLDBCQUFBO0FBUEY7O0FBVUE7RUFDRSxnQ0FBQTtFQUNBLDBCQUFBO0FBUEY7O0FBVUE7RUFDRSw4QkFBQTtBQVBGOztBQVVBO0VBQ0UsMEJBQUE7QUFQRiIsImZpbGUiOiJtdHVyay1pbWFnZS1jbGFzc2lmaWNhdGlvbi10YXNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmgxLCBoMyB7XHJcbiAgY29sb3I6ICM0ZDU1NjggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN0YXQtbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLnN0YXQtZGVzY3JpcHRpb24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFic3RyYWN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYWJzdHJhY3QgPiBpbWcge1xyXG4gIGhlaWdodDogMTZyZW07XHJcbn1cclxuXHJcbi5jb250ZW50LWNlbnRlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMi41cmVtO1xyXG59XHJcblxyXG4ucGFnZS1oZWFkZXIge1xyXG4gIG1heC1oZWlnaHQ6IG1heC1jb250ZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgLmV4cGxvcmUtbmF2IHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC5yZXN1bHRzLW5hdiB7XHJcbiAgICB3aWR0aDogODV2dztcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzYwcHgpIHtcclxuICAudGVzdC1uYXYge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi50ZXN0LW5hdiB7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xyXG59XHJcblxyXG5cclxuLmJ0bi1uZXV0cmFsIHtcclxuICBiYWNrZ3JvdW5kOiAjZmFiMWI0NWMhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjMjIyYTQyICFpbXBvcnRhbnRcclxufVxyXG5cclxuLmJ0bi1uZXV0cmFsOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmFiMWI0YTYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRlc3QtbWUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtbGFiZWwge1xyXG4gIHdpZHRoOiAxMjUlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyLjJyZW07XHJcbn1cclxuXHJcbi5leHBsb3JlLW5hdiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgcGFkZGluZy1ib3R0b206IDVyZW07XHJcbn1cclxuXHJcbi5nb3QtaXQtY29udGFpbmVyIHtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiAxODBweDtcclxuICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYigwIDAgMCAvIDE1JSk7XHJcbn1cclxuXHJcbi5nb3QtaXQtdGl0bGUge1xyXG4gIGNvbG9yOiAjZmQ5NjllICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wcmFjdGljZS10ZXh0LCAucHJhY3RpY2UtdGl0bGUge1xyXG4gIGNvbG9yOiAjMjIyYTQyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5nb3QtaXQtY29udGFpbmVyLCAucHJhY3RpY2UtdGl0bGUge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4ucHJhY3RpY2UtdGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4udGFzay1jb250YWluZXIsIC5nb3QtaXQtY29udGFpbmVyLCAucHJhY3RpY2UtdGV4dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5oaW50IHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbn1cclxuXHJcbi5ndWVzcy1jbHVlLWhpbnQge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLm5vLWNsdWUge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3VibWl0dGVkIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLnRleHQtcm93IHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGNvbG9yOiAjMjIyYTQyICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxufVxyXG5cclxuXHJcbi5tYWluLWxhYmVsIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiA0cmVtO1xyXG4gIGNvbG9yOiAjZmQ5NjllICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYWluLWRlc2NyaXB0aW9uIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY29sb3I6ICMyMjJhNDIgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcclxufVxyXG5cclxuLnBhZGRpbmctYm90dG9tIHtcclxuICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcclxufVxyXG5cclxuLnNlbGVjdGVkLWJ1dHRvbiB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgYmFja2dyb3VuZDogI2ZhYjFiNGQxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kaXNhYmxlZC1idXR0b24sIC5kaXNhYmxlZC1idXR0b246aG92ZXIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gIGJhY2tncm91bmQ6ICNmYWIxYjQyZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmFzLWJpZyB7XHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgLyogZm9udC13ZWlnaHQ6IGJvbGQ7ICovXHJcbiAgY29sb3I6ICNmZDk2OWUgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udGFzay1jb250YWluZXIgOjpuZy1kZWVwIC5idG4tYmlnIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLndyb25nLWFuc3dlciwgLndyb25nLWFuc3dlcjpob3ZlciwgLndyb25nLWFuc3dlcjp2aXNpdGVkLCAud3JvbmctYW5zd2VyOmFjdGl2ZSAud3JvbmctYW5zd2VyOnRhcmdldCwgLndyb25nLWFuc3dlcjpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZDogI2ZmM2MzY2UwICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb3JyZWN0LWFuc3dlciwgLmNvcnJlY3QtYW5zd2VyOmhvdmVyLCAuY29ycmVjdC1hbnN3ZXI6dmlzaXRlZCwgLmNvcnJlY3QtYW5zd2VyOmFjdGl2ZSwgLmNvcnJlY3QtYW5zd2VyOnRhcmdldCwgLmNvcnJlY3QtYW5zd2VyOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kOiAjNjNmZjNjZTAgIWltcG9ydGFudDtcclxuICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJzLXRvb2x0aXAtdG9wIHtcclxuICBiYWNrZ3JvdW5kOiAjMDBiYmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50b29sdGlwLWlubmVyIHtcclxuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "WMJr":
/*!************************************************************!*\
  !*** ./src/app/pages/leaderboard/leaderboard.component.ts ***!
  \************************************************************/
/*! exports provided: LeaderboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderboardComponent", function() { return LeaderboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_leaderboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./leaderboard.component.html */ "9/AZ");
/* harmony import */ var _leaderboard_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leaderboard.component.scss */ "UhhV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_leaderboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/leaderboard.service */ "NONO");





let LeaderboardComponent = class LeaderboardComponent {
    constructor(leaderboardService) {
        this.leaderboardService = leaderboardService;
        this.isCollapsed = true;
        this.selectedTask = 'understanding';
        this.understandingTaskModels = [
            {
                name: 'Humans',
                IdiomFigurative: '97',
                Metaphor: '99.7',
                OpenSimile: '100',
                ClosedSimile: '100',
                IdiomFigurativeLiteral: '90'
            },
            {
                name: 'CLIP-VIT-L/14',
                IdiomFigurative: '17',
                Metaphor: '25',
                OpenSimile: '40',
                ClosedSimile: '52',
                IdiomFigurativeLiteral: '56'
            },
            {
                name: 'CLIP-VIT-B/32',
                IdiomFigurative: '16',
                Metaphor: '23',
                OpenSimile: '38',
                ClosedSimile: '45',
                IdiomFigurativeLiteral: '44'
            },
            {
                name: 'CLIP-RN50',
                IdiomFigurative: '14',
                Metaphor: '27',
                OpenSimile: '35',
                ClosedSimile: '47',
                IdiomFigurativeLiteral: '37'
            },
            {
                name: 'CLIP-RN50x64/14',
                IdiomFigurative: '22',
                Metaphor: '30',
                OpenSimile: '41',
                ClosedSimile: '52',
                IdiomFigurativeLiteral: '56'
            },
            {
                name: 'BLIP',
                IdiomFigurative: '18',
                Metaphor: '22',
                OpenSimile: '44',
                ClosedSimile: '66',
                IdiomFigurativeLiteral: '57'
            },
            {
                name: 'BLIP2',
                IdiomFigurative: '19',
                Metaphor: '22',
                OpenSimile: '40',
                ClosedSimile: '57',
                IdiomFigurativeLiteral: '53'
            },
            {
                name: 'CoCa ViLT-L-14',
                IdiomFigurative: '17',
                Metaphor: '18',
                OpenSimile: '33',
                ClosedSimile: '45',
                IdiomFigurativeLiteral: '53'
            },
            {
                name: 'ViLT',
                IdiomFigurative: '-',
                Metaphor: '23',
                OpenSimile: '33',
                ClosedSimile: '40',
                IdiomFigurativeLiteral: '-'
            }
        ].sort((a, b) => (Number(b.IdiomFigurative) - Number(a.IdiomFigurative)) + (Number(b.Metaphor) - Number(a.Metaphor)) + (Number(b.OpenSimile) - Number(a.OpenSimile)));
        this.preferenceTaskModels = [
            {
                name: 'CLIP-VIT-L/14',
                IdiomFigurative: '37',
                Metaphor: '26',
                OpenSimile: '34',
                ClosedSimile: '44',
                IdiomFigurativeLiteral: '57'
            },
            {
                name: 'CLIP-VIT-B/32',
                IdiomFigurative: '36',
                Metaphor: '22',
                OpenSimile: '30',
                ClosedSimile: '38',
                IdiomFigurativeLiteral: '54'
            },
            {
                name: 'CLIP-RN50',
                IdiomFigurative: '37',
                Metaphor: '25',
                OpenSimile: '31',
                ClosedSimile: '38',
                IdiomFigurativeLiteral: '54'
            },
            {
                name: 'CLIP-RN50x64/14',
                IdiomFigurative: '39',
                Metaphor: '29',
                OpenSimile: '32',
                ClosedSimile: '43',
                IdiomFigurativeLiteral: '61'
            },
            {
                name: 'BLIP',
                IdiomFigurative: '39',
                Metaphor: '24',
                OpenSimile: '33',
                ClosedSimile: '54',
                IdiomFigurativeLiteral: '58'
            },
            {
                name: 'BLIP2',
                IdiomFigurative: '39',
                Metaphor: '22',
                OpenSimile: '29',
                ClosedSimile: '42',
                IdiomFigurativeLiteral: '57'
            },
            {
                name: 'CoCa ViT-L-14',
                IdiomFigurative: '36',
                Metaphor: '20',
                OpenSimile: '24',
                ClosedSimile: '39',
                IdiomFigurativeLiteral: '56'
            },
            {
                name: 'ViLT',
                IdiomFigurative: '-',
                Metaphor: '25',
                OpenSimile: '28',
                ClosedSimile: '34',
                IdiomFigurativeLiteral: '-'
            }
            // {
            //     name: 'X-VLM',
            //     cat_1: '46',
            //     cat_2: '53',
            //     cat_3: '68'
            // }
        ].sort((a, b) => (Number(b.IdiomFigurative) - Number(a.IdiomFigurative)) + (Number(b.Metaphor) - Number(a.Metaphor)) + (Number(b.OpenSimile) - Number(a.OpenSimile)));
        this.leaderboard$ = this.leaderboardService.leaderboard;
    }
    ngOnInit() {
    }
    onPreferenceTaskSelected() {
        this.selectedTask = 'preference';
    }
    onUnderstandingTaskSelected() {
        this.selectedTask = 'understanding';
    }
};
LeaderboardComponent.ctorParameters = () => [
    { type: _services_leaderboard_service__WEBPACK_IMPORTED_MODULE_4__["LeaderboardService"] }
];
LeaderboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-leaderboard',
        template: _raw_loader_leaderboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_leaderboard_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_leaderboard_service__WEBPACK_IMPORTED_MODULE_4__["LeaderboardService"]])
], LeaderboardComponent);



/***/ }),

/***/ "Y0Yk":
/*!****************************************************!*\
  !*** ./src/app/pages/explore/explore.component.ts ***!
  \****************************************************/
/*! exports provided: ExploreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreComponent", function() { return ExploreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_explore_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./explore.component.html */ "4vH2");
/* harmony import */ var _explore_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./explore.component.scss */ "B4BR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_server_request_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/server-request.service */ "dXuD");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");









let ExploreComponent = class ExploreComponent {
    constructor(router, activeRouter, changeDetectorRef, dialog, serverRequestService) {
        this.router = router;
        this.activeRouter = activeRouter;
        this.changeDetectorRef = changeDetectorRef;
        this.dialog = dialog;
        this.serverRequestService = serverRequestService;
        this.hint = '';
        this.answers = new Map();
        this.practiceMode = false;
        this.isCollapsed = true;
        this._submit = false;
        this.goodJobHint = 'Good Job!';
        this.timerSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subscription"]();
        this.exampleIndex = 1;
        this.responseBackgroundColor = '';
        this.responseTextColor = '';
        this.cancel$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.selectedCandidates = 'idiom';
        this.beatTheAIMode = false;
        this.loadingFirstExample = false;
        this.candidates = [
            { value: 'idiom', viewValue: 'Idioms' },
            { value: 'simile', viewValue: 'Similes' },
            { value: 'metaphor', viewValue: 'Metaphors' },
            { value: 'random', viewValue: 'Random' }
        ];
    }
    ngOnInit() {
        this.changeDetectorRef.detectChanges();
        window.name = 'IRFL';
        this.practice();
    }
    init() {
        this.practiceMode = false;
        this.exampleIndex = 1;
        this.initExample(1);
    }
    initExample(index) {
        this.cancel$.next();
        this._submit = false;
        const loadingTimer$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["timer"])(500).subscribe(() => this.loadingFirstExample = true);
        this.showHint('');
        this.getTaskFromServer(index).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.cancel$)).subscribe((task) => {
            this.irflTask = task;
            loadingTimer$.unsubscribe();
            this.loadingFirstExample = false;
        });
    }
    onNavbarClick(event) {
        if (event === 'beat-the-ai') {
            this.init();
        }
        else if (event === 'explore') {
            this.init();
            this.practice();
        }
    }
    onCandidatesSelect(candidateOption) {
        this.selectedCandidates = candidateOption;
    }
    getTaskFromServer(index) {
        return this.serverRequestService.getIRFLTaskEXPLORE(this.selectedCandidates, index);
    }
    ngOnDestroy() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
    }
    restartPractice() {
        var _a;
        this._submit = false;
        this.showHint('');
        (_a = this.irflTask) === null || _a === void 0 ? void 0 : _a.init();
    }
    submit() {
        var _a, _b;
        this._submit = (_a = this.irflTask) === null || _a === void 0 ? void 0 : _a.isTaskSolved();
        if (this._submit) {
            this.showHint(this.goodJobHint);
        }
        else {
            this.showHint((_b = this.irflTask) === null || _b === void 0 ? void 0 : _b.getHint());
        }
    }
    showHint(hint, time = 3000, responseBackgroundColor = '', responseTextColor = 'black') {
        this.hint = hint;
        this.responseTextColor = responseTextColor;
        this.responseBackgroundColor = responseBackgroundColor;
        this.timerSubscription.unsubscribe();
        this.timerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["timer"])(time).subscribe(() => {
            this.hint = '';
            this.responseBackgroundColor = '';
            this.responseTextColor = 'black';
        });
    }
    moveLeft() {
        if (this.exampleIndex > 1) {
            this.exampleIndex--;
            this.move();
        }
    }
    moveRight() {
        this.exampleIndex++;
        this.move();
    }
    move() {
        var _a;
        (_a = this.irflTask) === null || _a === void 0 ? void 0 : _a.init();
        this.initExample(this.exampleIndex);
    }
    practice() {
        this.initExample(this.exampleIndex);
        this.practiceMode = true;
    }
};
ExploreComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _services_server_request_service__WEBPACK_IMPORTED_MODULE_7__["ServerRequestService"] }
];
ExploreComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-explore',
        template: _raw_loader_explore_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_explore_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
        _services_server_request_service__WEBPACK_IMPORTED_MODULE_7__["ServerRequestService"]])
], ExploreComponent);



/***/ }),

/***/ "Y9Oq":
/*!*************************************!*\
  !*** ./src/app/types/mturk-task.ts ***!
  \*************************************/
/*! exports provided: MturkTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MturkTask", function() { return MturkTask; });
class MturkTask {
    constructor() {
        this.turkSubmitTo = '';
        this.assignmentId = '';
        this.id = '';
    }
    showAIScore(score) {
        // const bonus = Number((score / 100) * 0.03).toFixed(3)
        if (score === 100) {
            this.showHint(`Perfect! AI Was Fooled! \n Your score: ${score}`, Math.pow(10, 10), '#e2f0d9', '#548235');
        }
        else if (score !== 0) {
            this.showHint(`AI Was almost Fooled! \n Your score: ${score}`, Math.pow(10, 10), '#fde3e4', '#f7931e');
        }
        else if (score === 0) {
            this.showHint(`You wre beaten by the AI! \n Maybe next time!`, Math.pow(10, 10), '#fff2cc', '#f96c7b');
        }
    }
    handleSubmit(assignmentId, turkSubmitTo, summaryJson) {
        console.log('JSON to send');
        console.log(summaryJson);
        if (!(assignmentId && turkSubmitTo)) {
            console.log('assignmentId and turkSubmitTo not good');
            return;
        }
        console.log(summaryJson);
        /****************************** MUST ******************************** */
        // const urlParams = new URLSearchParams(window.location.search)
        // create the form element and point it to the correct endpoint
        const form = document.createElement('form');
        // form.action = (new URL('mturk/externalSubmit', urlParams.get('turkSubmitTo'))).href
        form.action = turkSubmitTo + '/mturk/externalSubmit';
        form.method = 'post';
        // attach the assignmentId
        const inputAssignmentId = document.createElement('input');
        inputAssignmentId.name = 'assignmentId';
        // inputAssignmentId.value = urlParams.get('assignmentId')
        inputAssignmentId.value = assignmentId;
        inputAssignmentId.hidden = true;
        form.appendChild(inputAssignmentId);
        /******************************************************************** */
        /****************************** for you to choose  ******************************** */
        const inputSummaryJson = document.createElement('input');
        inputSummaryJson.name = 'summary_json';
        inputSummaryJson.value = JSON.stringify(summaryJson);
        inputSummaryJson.hidden = true;
        form.appendChild(inputSummaryJson);
        /******************************************************************** */
        /****************************** MUST ******************************** */
        // attach the form to the HTML document and trigger submission
        document.body.appendChild(form);
        form.submit();
        /******************************************************************** */
    }
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/pages.module */ "dgmN");
/* harmony import */ var _services_server_request_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/server-request.service */ "dXuD");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");












let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _pages_pages_module__WEBPACK_IMPORTED_MODULE_8__["PagesModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"]
        ],
        providers: [_services_server_request_service__WEBPACK_IMPORTED_MODULE_9__["ServerRequestService"]],
        exports: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "al74":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mturk leaderboard/mturk-leaderboard.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar [isCollapsed]=\"isCollapsed\"></app-navbar>\r\n<div class=\"wrapper\">\r\n    <div class=\"page-header header-filter\">\r\n        <div class=\"container center-container\">\r\n            <div class=\"nav-tabs-danger\">\r\n                    <div class=\"content-center brand ai-leaderboard\">\r\n                        <h4 class=\"main-label\">\r\n                            Mturk Leaderboard 🏆\r\n                        </h4>\r\n                        <div class=\"leaderboard-container\">\r\n                            <div class=\"container\">\r\n                                <ul class=\"responsive-table\">\r\n                                    <li class=\"table-header\">\r\n                                        <div class=\"col-leaderboard col-2-AI-leaderboard\">Worker</div>\r\n                                        <div class=\"col-leaderboard col-3-leaderboard\">Figurative Literal</div>\r\n                                        <div class=\"col-leaderboard col-3-leaderboard\">Figurative</div>\r\n                                        <div class=\"col-leaderboard col-3-leaderboard\">Caption</div>\r\n                                        <div class=\"col-leaderboard col-3-leaderboard\">Partial Objects</div>\r\n                                        <div class=\"col-leaderboard col-3-leaderboard\">None</div>\r\n                                        <div class=\"col-leaderboard col-3-leaderboard\">Images</div>\r\n                                    </li>\r\n\r\n                                    <li class=\"table-row\" *ngFor=\"let index of indexes$ | async\">\r\n                                        <div class=\"col-leaderboard col-2-AI-leaderboard\" data-label=\"Worker\">{{(leaderboard$ | async)?.worker_id[index]}}</div>\r\n                                        <div class=\"col-leaderboard\" data-label=\"Figurative Literal\">{{((leaderboard$ | async)?.Figurative_Literal_agreement[index] * 100).toFixed(2)}}</div>\r\n                                        <div class=\"col-leaderboard\" data-label=\"Figurative\">{{((leaderboard$ | async)?.Figurative_agreement[index] * 100).toFixed(2)}}</div>\r\n                                        <div class=\"col-leaderboard\" data-label=\"Caption\">{{((leaderboard$ | async)?.Caption_agreement[index] * 100).toFixed(2)}}</div>\r\n                                        <div class=\"col-leaderboard\" data-label=\"Partial Objects\">{{((leaderboard$ | async)?.Partial_Objects_agreement[index] * 100).toFixed(2)}}</div>\r\n                                        <div class=\"col-leaderboard\" data-label=\"None\">{{((leaderboard$ | async)?.None_agreement[index] * 100).toFixed(2)}}</div>\r\n                                        <div class=\"col-leaderboard\" data-label=\"Images\">{{(leaderboard$ | async)?.images_annotated[index]}}</div>\r\n<!--                                        <div class=\"col-leaderboard col-4-leaderboard\" data-label=\"cat_2\">{{model['cat_2']}}</div>-->\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <footer class=\"footer\">\r\n        <div class=\"container\">\r\n            <div class=\"footer-row\">\r\n                <a>Maintained by Lampent</a>\r\n            </div>\r\n        </div>\r\n    </footer>\r\n</div>");

/***/ }),

/***/ "bBbC":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main/main.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<div class=\"wrapper\">\r\n    <div class=\"page-header header-filter\">\r\n        <div class=\"container center-container\">\r\n            <div class=\"content-center brand\">\r\n                <h4 class=\"h1-seo\">IRFL: Image Recognition of Figurative Language\r\n                </h4>\r\n                <h3 style=\"padding-top: 2rem\">\r\n                    Four images and {{selectedFigureOfSpeech}} are presented below.\r\n                    <br/>\r\n                    <h3 *ngIf=\"selectedFigureOfSpeech === 'an idiom'\"> Choose the image that conveys one or more definitions of the idiom. </h3>\r\n                    <h3 *ngIf=\"selectedFigureOfSpeech === 'a metaphor'\"> Choose the image that conveys the metaphorical message. </h3>\r\n                    <h3 *ngIf=\"selectedFigureOfSpeech === 'a simile'\"> Choose the image that matches the simile. </h3>\r\n                    <br/>\r\n                </h3>\r\n                <tabset class=\"nav-tabs-danger\">\r\n                    <tab heading=\"Idiom\" (selectTab)=\"onIdiomTabSelected()\">\r\n                        <app-task-board *ngIf=\"selectedFigureOfSpeech === 'an idiom'\" class=\"analogies-board\" [irflTask]=\"idiom\" [enablePointer]=\"true\"></app-task-board>\r\n                    </tab>\r\n                    <tab heading=\"Metaphor\" (selectTab)=\"onMetaphorTabSelected()\">\r\n                        <app-task-board *ngIf=\"selectedFigureOfSpeech === 'a metaphor'\" class=\"analogies-board\" [irflTask]=\"metaphor\" [enablePointer]=\"true\"></app-task-board>\r\n                    </tab>\r\n                    <tab heading=\"Simile\" (selectTab)=\"onSimileTabSelected()\">\r\n                        <app-task-board *ngIf=\"selectedFigureOfSpeech === 'a simile'\" class=\"analogies-board\" [irflTask]=\"simile\" [enablePointer]=\"true\"></app-task-board>\r\n                    </tab>\r\n                </tabset>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"main\">\r\n        <div class=\"section\">\r\n            <div class=\"container stats-container\">\r\n                <div class=\"stats-lower-label\">\r\n                    Explore the different task types in the IRFL dataset on the <a class=\"stats-page-ref\" href=\"./explore\">Explore</a> page.\r\n                </div>\r\n                <div class=\"stats-row\">\r\n                    <div class=\"stats-block\">\r\n                        <div class=\"stat-label\">10K+</div>\r\n                        <div class=\"stat-description\">Images</div>\r\n                    </div>\r\n                    <div class=\"stats-block\">\r\n                        <div class=\"stat-label\"><52%</div>\r\n                        <div class=\"stat-description\">Model Success Rate</div>\r\n                    </div>\r\n                    <div class=\"stats-block\">\r\n                        <div class=\"stat-label\">>97%</div>\r\n                        <div class=\"stat-description\">Human Successes Rate</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n        </div>\r\n        <div class=\"section\" style=\"padding-bottom: 0;\">\r\n            <div class=\"container\">\r\n                <h3 class=\"mb-5 sub-title\">Paper</h3>\r\n                <div class=\"abstract\">\r\n                    <img src=\"/assets/img/paper/ACL23__IRFL%20(7)_page-0001.jpg\"/>\r\n                    <img src=\"/assets/img/paper/ACL23__IRFL%20(7)_page-0002.jpg\"/>\r\n                    <img src=\"/assets/img/paper/ACL23__IRFL%20(7)_page-0003.jpg\"/>\r\n                    <img src=\"/assets/img/paper/ACL23__IRFL%20(7)_page-0004.jpg\"/>\r\n                    <img src=\"/assets/img/paper/ACL23__IRFL%20(7)_page-0005.jpg\"/>\r\n                    <img src=\"/assets/img/paper/ACL23__IRFL%20(7)_page-0006.jpg\"/>\r\n                    <img src=\"/assets/img/paper/ACL23__IRFL%20(7)_page-0007.jpg\"/>\r\n                    <img src=\"/assets/img/paper/ACL23__IRFL%20(7)_page-0008.jpg\"/>\r\n                    <img src=\"/assets/img/paper/ACL23__IRFL%20(7)_page-0009.jpg\"/>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"section\">\r\n            <div class=\"container\">\r\n                <div id=\"images\">\r\n                    <h3 class=\"mb-5 sub-title\">Authors</h3>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-3 col-6 mt-5 mt-sm-0\">\r\n                            <small class=\"d-block text-uppercase font-weight-bold mb-4\">\r\n                                <a href=\"https://ron-yosef.com/\" class=\"flex\">\r\n<!--                                Lampent-->\r\n                                <img class=\"uni-logo\" src=\"assets/img/hebrew-university-logo.jpg\"> Ron Yosef\r\n                                </a>\r\n                            </small>\r\n                            <a href=\"https://ron-yosef.com/\" class=\"flex\">\r\n                                <img\r\n                                        alt=\"Raised image\"\r\n                                        class=\"img-fluid rounded shadow-lg\"\r\n                                        src=\"/assets/img/Ron%20Yosef.png\"\r\n                                        style=\"width: 150px;\"\r\n                                />\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"col-sm-3 col-6 mt-5 mt-sm-0\">\r\n                            <small class=\"d-block text-uppercase font-weight-bold mb-4\">\r\n                                <a href=\"https://yonatanbitton.github.io/\" class=\"flex\">\r\n                                    <img class=\"uni-logo\" src=\"assets/img/hebrew-university-logo.jpg\"> Yonatan Bitton\r\n                                </a>\r\n                            </small>\r\n                            <a href=\"https://yonatanbitton.github.io/\">\r\n                                <img\r\n                                        alt=\"Raised image\"\r\n                                        class=\"img-fluid rounded shadow-lg\"\r\n                                        src=\"/assets/img/Yonatan%20Bitton.png\"\r\n                                        style=\"width: 150px;\"\r\n                                />\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"col-sm-3 col-6 mt-5 mt-sm-0\">\r\n                            <small class=\"d-block text-uppercase font-weight-bold mb-4\">\r\n                                <a href=\"http://www.hyadatalab.com/people.html\" class=\"flex\">\r\n                                    <img class=\"uni-logo\" src=\"assets/img/hebrew-university-logo.jpg\"> Dafna Shahaf\r\n<!--                                    Pikachu-->\r\n                                </a>\r\n                            </small>\r\n                            <a href=\"http://www.hyadatalab.com/people.html\" class=\"flex\">\r\n                                <img\r\n                                        alt=\"Raised image\"\r\n                                        class=\"img-fluid rounded shadow-lg\"\r\n                                        src=\"/assets/img/dafna-shahaf.jpg\"\r\n                                        style=\"width: 150px;\"\r\n                                />\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    <footer class=\"footer\">\r\n        <div class=\"container\">\r\n            <div class=\"footer-row\">\r\n                <a>Maintained by Lampent</a>\r\n            </div>\r\n        </div>\r\n    </footer>\r\n</div>\r\n");

/***/ }),

/***/ "crnd":
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
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "dXuD":
/*!****************************************************!*\
  !*** ./src/app/services/server-request.service.ts ***!
  \****************************************************/
/*! exports provided: ServerRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerRequestService", function() { return ServerRequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _types_candidate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/candidate */ "KHnd");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _types_irfl_task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types/irfl-task */ "QhCX");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _types_image_classification_task__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../types/image-classification-task */ "wAWi");
/* harmony import */ var _types_IRFLImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../types/IRFLImage */ "qsz/");
/* harmony import */ var _types_image_categories_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../types/image-categories-enum */ "OZMB");










// mock
const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
    'Content-Type': 'application/json',
    Accept: 'application/json'
});
function getImagePath(imgName) {
    // return awsURL+imgName+'.jpg';
    return imgName;
}
// https://irfl-app.herokuapp.com/
// http://127t.0.0.1:1235
// const serverURL: string = 'http://127.0.0.1:1235'
const serverURL = 'https://irfl.fly.dev';
let ServerRequestService = class ServerRequestService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    getWorkerStats(id) {
        const url = `${serverURL}/statistics/${id}`;
        return this.httpService.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((task) => {
            return task;
        }));
    }
    getWorkerSpacialAnswers(id) {
        const url = `${serverURL}/spacial-answers/${id}`;
        return this.httpService.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((serverTaskGroup) => {
            return serverTaskGroup.tasks.map((task) => {
                const irflImage = new _types_IRFLImage__WEBPACK_IMPORTED_MODULE_8__["IRFLImage"](task.image_url, task.image_name);
                return new _types_image_classification_task__WEBPACK_IMPORTED_MODULE_7__["ImageClassificationTask"](irflImage, task.type, task.phrase, task.type === 'idiom' ? task.definitions.map((definition) => (definition === null || definition === void 0 ? void 0 : definition.definition) || definition)
                    .sort((a, b) => a.length - b.length) : [], _types_image_categories_enum__WEBPACK_IMPORTED_MODULE_9__["ImageCategoriesEnum"].Default, task.id, task.category, task.hint, task, serverTaskGroup.ID, task.secondary_category, task.correct_secondary_category);
            });
        }));
    }
    getIRFLTaskEXPLORE(type, index) {
        const url = `${serverURL}/task/${type}/${index}`;
        return this.httpService.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((task) => {
            return new _types_irfl_task__WEBPACK_IMPORTED_MODULE_5__["IRFLTask"](task['type'], task['candidates'].map(candidate => new _types_candidate__WEBPACK_IMPORTED_MODULE_3__["Candidate"](candidate['image'], candidate['name'], candidate['answer'])), task['phrase'], task['numOfSolution'], task['definitions'] ? task['definitions'].sort((a, b) => a.length - b.length) : [], task, task['id']);
        }));
    }
    getIRFLTask(id, example = false) {
        const url = `${serverURL}/task/${id}`;
        return this.httpService.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((task) => {
            return task;
        }));
    }
    getIRFLTasks(id) {
        const url = `${serverURL}/task/${id}`;
        return this.httpService.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((task) => {
            if (task['number_of_tasks'] === 200) {
                return task['tasks'].map((subTask) => {
                    return new _types_irfl_task__WEBPACK_IMPORTED_MODULE_5__["IRFLTask"](subTask['type'], subTask['candidates'].map(candidate => new _types_candidate__WEBPACK_IMPORTED_MODULE_3__["Candidate"](candidate['image'], candidate['name'], candidate['answer'])), subTask['phrase'], subTask['numOfSolution'], subTask['definitions'] ? subTask['definitions'].sort((a, b) => a.length - b.length) : [], task, subTask['id']);
                });
            }
            else {
                return [new _types_irfl_task__WEBPACK_IMPORTED_MODULE_5__["IRFLTask"](task['type'], task['candidates'].map(candidate => new _types_candidate__WEBPACK_IMPORTED_MODULE_3__["Candidate"](candidate['image'], candidate['name'], candidate['answer'])), task['phrase'], task['numOfSolution'], task['definitions'] ? task['definitions'].sort((a, b) => a.length - b.length) : [], task, task['id'])];
            }
        }));
    }
    getIRFLImageClassificationTasks(id, example = false) {
        const url = `${serverURL}/task/image/${id}`;
        return this.httpService.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((serverTaskGroup) => {
            return serverTaskGroup.tasks.map((task) => {
                const irflImage = new _types_IRFLImage__WEBPACK_IMPORTED_MODULE_8__["IRFLImage"](task.image_url, task.image_name);
                return new _types_image_classification_task__WEBPACK_IMPORTED_MODULE_7__["ImageClassificationTask"](irflImage, task.type, task.phrase, task.type === 'idiom' ? task.definitions.map((definition) => (definition === null || definition === void 0 ? void 0 : definition.definition) || definition)
                    .sort((a, b) => a.length - b.length) : [], _types_image_categories_enum__WEBPACK_IMPORTED_MODULE_9__["ImageCategoriesEnum"].Default, task.ID, task.correct_category, task.hint, task, serverTaskGroup.ID, task.secondary_category, task.correct_secondary_category);
            });
        }));
    }
    getMturkLeaderboard() {
        const url = `${serverURL}/mturk/leaderboard`;
        return this.httpService.get(url);
    }
    sendReportForm(data) {
        this.httpService.post('https://gvlab-backend.herokuapp.com/report', JSON.stringify(data), { headers }).subscribe((response) => {
            console.log('Report form was sent');
        });
    }
    getLeaderboard() {
        // const url = `https://gvlab-backend.herokuapp.com/leaderboard`
        // return this.httpService.get<any>(url).pipe(map((leaderboard: any[]) => {
        //     return leaderboard.map(((serverUserDetails, index) => new UserStats(index+1, serverUserDetails?.player_username, serverUserDetails['fool-the-ai'], serverUserDetails['solvable-by-humans'], serverUserDetails['solving-existing-associations'])));
        // }));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
    }
};
ServerRequestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ServerRequestService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ServerRequestService);



/***/ }),

/***/ "dgmN":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "yyhP");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "Mfq2");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "+Cnu");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "44PX");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "Lm2G");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/alert */ "psEu");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "hzby");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "LYaK");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "yQBb");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/popover */ "EDFS");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./main/main.component */ "/s1f");
/* harmony import */ var _task_bord_task_board_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../task-bord/task-board.component */ "LT8s");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _explore_explore_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./explore/explore.component */ "Y0Yk");
/* harmony import */ var _download_download_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./download/download.component */ "wxMe");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _mturk_irfl_task_mturk_solve_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./mturk-irfl-task/mturk-solve.component */ "xmEk");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _personal_details_form_personal_details_form_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./personal-details-form/personal-details-form.component */ "/1tQ");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../app-routing.module */ "vY5A");
/* harmony import */ var _navbar_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../navbar/navbar/navbar.component */ "tZhi");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _report_form_report_form_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./report-form/report-form.component */ "FC7a");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./leaderboard/leaderboard.component */ "WMJr");
/* harmony import */ var _services_leaderboard_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../services/leaderboard.service */ "NONO");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! primeng/chart */ "f48r");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! primeng/accordion */ "yhG/");
/* harmony import */ var _image_classification_board_image_classification_board_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../image-classification-board/image-classification-board.component */ "0Exn");
/* harmony import */ var _mturk_image_classification_task_mturk_image_classification_task_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./mturk-image-classification-task/mturk-image-classification-task.component */ "6S4h");
/* harmony import */ var _mturk_personal_profile_murk_personal_profile_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./mturk-personal-profile/murk-personal-profile.component */ "13OI");
/* harmony import */ var _mturk_leaderboard_mturk_leaderboard_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./mturk leaderboard/mturk-leaderboard.component */ "Titn");












































const routes = [
    { path: _app_routing_module__WEBPACK_IMPORTED_MODULE_30__["IRFLTaskPath"], component: _explore_explore_component__WEBPACK_IMPORTED_MODULE_22__["ExploreComponent"] },
    { path: 'explore', component: _explore_explore_component__WEBPACK_IMPORTED_MODULE_22__["ExploreComponent"] },
    { path: _app_routing_module__WEBPACK_IMPORTED_MODULE_30__["leaderboard"], component: _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_35__["LeaderboardComponent"] },
    { path: 'mturk/leaderboard', component: _mturk_leaderboard_mturk_leaderboard_component__WEBPACK_IMPORTED_MODULE_43__["MturkLeaderboardComponent"] },
    { path: 'download', component: _download_download_component__WEBPACK_IMPORTED_MODULE_23__["DownloadComponent"] },
    { path: 'mturk/image/:id', component: _mturk_image_classification_task_mturk_image_classification_task_component__WEBPACK_IMPORTED_MODULE_41__["MturkImageClassificationTaskComponent"] },
    { path: 'mturk/task/:id', component: _mturk_irfl_task_mturk_solve_component__WEBPACK_IMPORTED_MODULE_25__["MturkSolveComponent"] },
    { path: '**', component: _main_main_component__WEBPACK_IMPORTED_MODULE_19__["MainComponent"] },
];
let PagesModule = class PagesModule {
    constructor(leaderboardService) {
        this.leaderboardService = leaderboardService;
        this.leaderboardService.init();
    }
};
PagesModule.ctorParameters = () => [
    { type: _services_leaderboard_service__WEBPACK_IMPORTED_MODULE_36__["LeaderboardService"] }
];
PagesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
            primeng_chart__WEBPACK_IMPORTED_MODULE_38__["ChartModule"],
            primeng_accordion__WEBPACK_IMPORTED_MODULE_39__["AccordionModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' }),
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__["BsDropdownModule"].forRoot(),
            ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_8__["ProgressbarModule"].forRoot(),
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_9__["TooltipModule"].forRoot(),
            ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_18__["PopoverModule"].forRoot(),
            ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_10__["CollapseModule"].forRoot(),
            jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_17__["JwBootstrapSwitchNg2Module"],
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_11__["TabsModule"].forRoot(),
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_12__["PaginationModule"].forRoot(),
            ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_13__["AlertModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_15__["CarouselModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_16__["ModalModule"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatOptionModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_27__["MatSelectModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_29__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__["MatFormFieldModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_34__["MatCheckboxModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_37__["MatTooltipModule"]
        ],
        declarations: [
            _main_main_component__WEBPACK_IMPORTED_MODULE_19__["MainComponent"],
            _navbar_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_31__["NavbarComponent"],
            _task_bord_task_board_component__WEBPACK_IMPORTED_MODULE_20__["TaskBoardComponent"],
            _image_classification_board_image_classification_board_component__WEBPACK_IMPORTED_MODULE_40__["ImageClassificationBoardComponent"],
            _explore_explore_component__WEBPACK_IMPORTED_MODULE_22__["ExploreComponent"],
            _download_download_component__WEBPACK_IMPORTED_MODULE_23__["DownloadComponent"],
            _mturk_irfl_task_mturk_solve_component__WEBPACK_IMPORTED_MODULE_25__["MturkSolveComponent"],
            _personal_details_form_personal_details_form_component__WEBPACK_IMPORTED_MODULE_28__["PersonalDetailsFormComponent"],
            _report_form_report_form_component__WEBPACK_IMPORTED_MODULE_33__["ReportFormComponent"],
            _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_35__["LeaderboardComponent"],
            _mturk_image_classification_task_mturk_image_classification_task_component__WEBPACK_IMPORTED_MODULE_41__["MturkImageClassificationTaskComponent"],
            _mturk_personal_profile_murk_personal_profile_component__WEBPACK_IMPORTED_MODULE_42__["MurkPersonalProfileComponent"],
            _mturk_leaderboard_mturk_leaderboard_component__WEBPACK_IMPORTED_MODULE_43__["MturkLeaderboardComponent"]
        ],
        exports: [
            _main_main_component__WEBPACK_IMPORTED_MODULE_19__["MainComponent"],
            _navbar_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_31__["NavbarComponent"],
            _task_bord_task_board_component__WEBPACK_IMPORTED_MODULE_20__["TaskBoardComponent"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
        ],
        providers: [
            _services_leaderboard_service__WEBPACK_IMPORTED_MODULE_36__["LeaderboardService"],
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["APP_BASE_HREF"], useValue: document.getElementsByTagName('base')[0].href }
        ]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_leaderboard_service__WEBPACK_IMPORTED_MODULE_36__["LeaderboardService"]])
], PagesModule);



/***/ }),

/***/ "eRxr":
/*!*****************************************************!*\
  !*** ./src/app/task-bord/task-board.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".analogy-container {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n}\n\n.definitions-board {\n  display: flex;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 15px;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.category-list, .definitions-list {\n  text-align: start;\n  font-size: 1.2rem;\n  padding-bottom: 5px;\n  max-height: 280px;\n}\n\n.definitions-list {\n  font-size: 1.2rem;\n  padding-bottom: 5px;\n}\n\n.definitions-list:last-child {\n  padding-bottom: 0px;\n}\n\n.no-underline-mat-field ::ng-deep .mat-form-field-underline {\n  visibility: hidden !important;\n}\n\n@media (max-width: 835px) {\n  .analogy-container {\n    max-width: 100vw;\n  }\n\n  .figurative-phrase {\n    padding-top: 10px;\n  }\n\n  .top-board {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n  }\n\n  .cue-board {\n    height: 120px !important;\n  }\n}\n\n.top-board {\n  width: 100%;\n  justify-content: start;\n  align-items: center;\n  position: relative;\n}\n\n.main-description {\n  color: black;\n  position: absolute;\n  right: -260px;\n  width: 420px;\n  bottom: 80px;\n  background: #feebec;\n  padding: 10px;\n  border-radius: 10px;\n  box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.3);\n}\n\n.cue-board {\n  width: 600px;\n}\n\n.associations-board {\n  width: 200px;\n}\n\n.associations-board, .cue-board {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.figurative-phrase {\n  font-size: 1.8rem;\n  color: #000;\n  font-weight: 700;\n}\n\n.example-full-width {\n  width: 95%;\n}\n\n::ng-deep .mat-form-field-flex {\n  padding: 0 !important;\n}\n\ninput {\n  border: 0;\n  outline: 0;\n  background: transparent;\n  text-align: center;\n}\n\n.images-board {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  width: 1188px;\n  justify-content: center;\n}\n\n@media (max-width: 1200px) {\n  .images-board {\n    width: 670px;\n  }\n}\n\n.fas {\n  font-size: 25px;\n  margin-top: 10px;\n}\n\n@media (max-width: 1080px) {\n  .main-description {\n    left: 0;\n    right: 0;\n    margin-left: auto;\n    margin-right: auto;\n    width: 298px;\n    bottom: -250px;\n    z-index: 9999;\n  }\n}\n\n@media (max-width: 680px) {\n  .images-board {\n    width: 400px;\n  }\n\n  .analogy-image-container {\n    flex: 1 0 99% !important;\n    /* explanation below */\n  }\n\n  .center-separator {\n    display: none !important;\n  }\n}\n\n.analogy-image-container {\n  height: auto;\n  width: auto;\n  padding: 0.5rem;\n  cursor: pointer;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.analogy-image-container-six {\n  flex: 1 0 49%;\n  /* explanation below */\n  height: auto;\n  width: auto;\n  padding: 0.5rem;\n  cursor: pointer;\n}\n\n.analogy-image-container-twelve {\n  flex: 1 0 25% !important;\n  /* explanation below */\n  height: auto;\n  width: auto;\n  padding: 0.5rem;\n  cursor: pointer;\n}\n\n.label {\n  color: #4d5568;\n}\n\n.board-title {\n  font-size: 2rem;\n  font-family: \"Cambria Math\", serif;\n}\n\ninput, .bold-text {\n  font-size: 1.8rem;\n  color: black;\n  font-weight: bold;\n}\n\n.shake {\n  -webkit-animation-name: shake-animation;\n          animation-name: shake-animation;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n}\n\n@-webkit-keyframes shake-animation {\n  10%, 90% {\n    transform: translate3d(-0.5px, 0, 0);\n  }\n  20%, 80% {\n    transform: translate3d(2px, 0, 0);\n  }\n  30%, 50%, 70% {\n    transform: translate3d(-3px, 0, 0);\n  }\n  40%, 60% {\n    transform: translate3d(3px, 0, 0);\n  }\n}\n\n@keyframes shake-animation {\n  10%, 90% {\n    transform: translate3d(-0.5px, 0, 0);\n  }\n  20%, 80% {\n    transform: translate3d(2px, 0, 0);\n  }\n  30%, 50%, 70% {\n    transform: translate3d(-3px, 0, 0);\n  }\n  40%, 60% {\n    transform: translate3d(3px, 0, 0);\n  }\n}\n\n.remove-pointer {\n  display: none !important;\n}\n\n@media (max-width: 1375px) {\n  .pointer-container {\n    display: none !important;\n  }\n}\n\n.pointer-container {\n  color: black;\n  position: absolute;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  left: -160px;\n}\n\n.moving-pointer {\n  font-weight: 500 !important;\n  font-size: 80px;\n  -webkit-animation-name: moving-pointer;\n          animation-name: moving-pointer;\n  -webkit-animation-duration: 0.8s;\n          animation-duration: 0.8s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  color: black;\n}\n\n@-webkit-keyframes moving-pointer {\n  from {\n    margin-left: 20px;\n  }\n  to {\n    margin-right: 30px;\n  }\n}\n\n@keyframes moving-pointer {\n  from {\n    margin-left: 20px;\n  }\n  to {\n    margin-right: 30px;\n  }\n}\n\n.pointer-label {\n  font-size: 19px;\n}\n\nimg {\n  width: 280px;\n  height: 280px;\n  cursor: pointer;\n  border: 2px transparent solid;\n}\n\n.separator-label {\n  text-align: center;\n  font-size: 100px;\n  color: black;\n}\n\n.cue-line-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  justify-content: center;\n}\n\n@media (max-width: 880px) {\n  .fas-container {\n    width: 30px !important;\n    height: 110px;\n    display: flex;\n    flex-direction: column-reverse;\n    justify-content: space-between;\n    padding-left: 44px;\n  }\n\n  .dashboard-icon {\n    display: none;\n  }\n}\n\n@media (max-width: 520px) {\n  .cue-line-container {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n  }\n\n  .fas-container {\n    width: 200px !important;\n    padding-top: 10px;\n    display: flex;\n    flex-direction: row !important;\n    justify-content: space-between;\n    padding-left: 0;\n    margin: auto;\n  }\n}\n\n.fas-container {\n  width: 270px;\n  display: flex;\n  justify-content: space-between;\n  padding-left: 44px;\n}\n\n.dashboard-icon {\n  width: 50px;\n  height: 50px;\n}\n\n.fas {\n  font-size: 40px;\n  cursor: pointer;\n}\n\n.fa-sign-out-alt {\n  color: black;\n}\n\n.fa-info-circle {\n  color: #fd969e;\n}\n\n.right-board-container {\n  box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.3);\n}\n\n.left-board-container {\n  padding-top: 0;\n  box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.3);\n}\n\n.center-separator {\n  height: auto;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n}\n\n.candidate-selected {\n  border: #ff3d0f85 solid 5px;\n}\n\n.AI-selected {\n  border: #ffdc00 solid 5px;\n}\n\n.alerts-border {\n  border: #ff8d72 solid 5px;\n  -webkit-animation: blink 2s;\n          animation: blink 2s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n@-webkit-keyframes blink {\n  50% {\n    border-color: #fff;\n  }\n}\n\n@keyframes blink {\n  50% {\n    border-color: #fff;\n  }\n}\n\n::ng-deep .mat-form-field-flex {\n  background-color: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhc2stYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUlBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7QUFERjs7QUFVQTtFQUNJLDZCQUFBO0FBUEo7O0FBVUE7RUFDRTtJQUNFLGdCQUFBO0VBUEY7O0VBVUE7SUFDRSxpQkFBQTtFQVBGOztFQVVBO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsOEJBQUE7RUFQRjs7RUFVQTtJQUNFLHdCQUFBO0VBUEY7QUFDRjs7QUFVQTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFSRjs7QUFXQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7QUFSRjs7QUFrQkE7RUFDRSxZQUFBO0FBZkY7O0FBa0JBO0VBQ0UsWUFBQTtBQWZGOztBQWtCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBZkY7O0FBb0JBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFqQkY7O0FBb0JBO0VBQ0UsVUFBQTtBQWpCRjs7QUFvQkE7RUFDRSxxQkFBQTtBQWpCRjs7QUFvQkE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFqQkY7O0FBb0JBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQWpCRjs7QUFvQkE7RUFDRTtJQUNFLFlBQUE7RUFqQkY7QUFDRjs7QUFvQkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFsQkY7O0FBcUJBO0VBQ0U7SUFDRSxPQUFBO0lBQ0EsUUFBQTtJQUVBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtJQUNBLGFBQUE7RUFuQkY7QUFDRjs7QUFzQkE7RUFDRTtJQUNFLFlBQUE7RUFwQkY7O0VBc0JBO0lBQ0Usd0JBQUE7SUFBMEIsc0JBQUE7RUFsQjVCOztFQXFCQTtJQUNFLHdCQUFBO0VBbEJGO0FBQ0Y7O0FBcUJBO0VBRUUsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUFwQkY7O0FBdUJBO0VBQ0UsYUFBQTtFQUFlLHNCQUFBO0VBQ2YsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQW5CRjs7QUFzQkE7RUFDRSx3QkFBQTtFQUE0QixzQkFBQTtFQUM1QixZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBbEJGOztBQXFCQTtFQUNFLGNBQUE7QUFsQkY7O0FBcUJBO0VBQ0UsZUFBQTtFQUNBLGtDQUFBO0FBbEJGOztBQXFCQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBbEJGOztBQXFCQTtFQUNFLHVDQUFBO1VBQUEsK0JBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0FBbEJGOztBQXFCQTtFQUNFO0lBQ0Usb0NBQUE7RUFsQkY7RUFxQkE7SUFDRSxpQ0FBQTtFQW5CRjtFQXNCQTtJQUNFLGtDQUFBO0VBcEJGO0VBdUJBO0lBQ0UsaUNBQUE7RUFyQkY7QUFDRjs7QUFNQTtFQUNFO0lBQ0Usb0NBQUE7RUFsQkY7RUFxQkE7SUFDRSxpQ0FBQTtFQW5CRjtFQXNCQTtJQUNFLGtDQUFBO0VBcEJGO0VBdUJBO0lBQ0UsaUNBQUE7RUFyQkY7QUFDRjs7QUF5QkE7RUFDRSx3QkFBQTtBQXZCRjs7QUEwQkE7RUFDRTtJQUNFLHdCQUFBO0VBdkJGO0FBQ0Y7O0FBMEJBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBeEJGOztBQTJCQTtFQUNFLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO1VBQUEsOEJBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLHlDQUFBO1VBQUEsaUNBQUE7RUFDQSxzQ0FBQTtVQUFBLDhCQUFBO0VBQ0EsWUFBQTtBQXhCRjs7QUEyQkE7RUFDRTtJQUNFLGlCQUFBO0VBeEJGO0VBMkJBO0lBQ0Usa0JBQUE7RUF6QkY7QUFDRjs7QUFrQkE7RUFDRTtJQUNFLGlCQUFBO0VBeEJGO0VBMkJBO0lBQ0Usa0JBQUE7RUF6QkY7QUFDRjs7QUE2QkE7RUFDRSxlQUFBO0FBM0JGOztBQStCQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FBNUJGOztBQStCQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBNUJGOztBQStCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQTVCRjs7QUErQkE7RUFDRTtJQUNFLHNCQUFBO0lBQ0EsYUFBQTtJQUNBLGFBQUE7SUFDQSw4QkFBQTtJQUNBLDhCQUFBO0lBQ0Esa0JBQUE7RUE1QkY7O0VBK0JBO0lBQ0UsYUFBQTtFQTVCRjtBQUNGOztBQStCQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLHVCQUFBO0lBQ0Esc0JBQUE7RUE3QkY7O0VBZ0NBO0lBQ0UsdUJBQUE7SUFDQSxpQkFBQTtJQUNBLGFBQUE7SUFDQSw4QkFBQTtJQUNBLDhCQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7RUE3QkY7QUFDRjs7QUFpQ0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUEvQkY7O0FBa0NBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUEvQkY7O0FBa0NBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUEvQkY7O0FBa0NBO0VBQ0UsWUFBQTtBQS9CRjs7QUFrQ0E7RUFDRSxjQUFBO0FBL0JGOztBQWtDQTtFQUNFLHlDQUFBO0FBL0JGOztBQWtDQTtFQUNFLGNBQUE7RUFDQSx5Q0FBQTtBQS9CRjs7QUFrQ0E7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUEvQkY7O0FBa0NBO0VBQ0UsMkJBQUE7QUEvQkY7O0FBa0NBO0VBQ0UseUJBQUE7QUEvQkY7O0FBa0NBO0VBQ0UseUJBQUE7RUFFQSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtBQWhDRjs7QUFtQ0E7RUFDRTtJQUNFLGtCQUFBO0VBaENGO0FBQ0Y7O0FBNkJBO0VBQ0U7SUFDRSxrQkFBQTtFQWhDRjtBQUNGOztBQW9DQTtFQUNFLHdDQUFBO0FBbENGIiwiZmlsZSI6InRhc2stYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW5hbG9neS1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC8vdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG59XHJcblxyXG4uZGVmaW5pdGlvbnMtYm9hcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXRlZ29yeS1saXN0LCAuZGVmaW5pdGlvbnMtbGlzdCB7XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICBtYXgtaGVpZ2h0OiAyODBweDtcclxufVxyXG5cclxuXHJcbi5kZWZpbml0aW9ucy1saXN0IHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uZGVmaW5pdGlvbnMtbGlzdDpsYXN0LWNoaWxkIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG5cclxuLmJvYXJkIHtcclxuICAvL2Rpc3BsYXk6IGZsZXg7XHJcbiAgLy9wYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4ubm8tdW5kZXJsaW5lLW1hdC1maWVsZCA6Om5nLWRlZXAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUgIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODM1cHgpIHtcclxuICAuYW5hbG9neS1jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcclxuICB9XHJcblxyXG4gIC5maWd1cmF0aXZlLXBocmFzZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICB9XHJcblxyXG4gIC50b3AtYm9hcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5cclxuICAuY3VlLWJvYXJkIHtcclxuICAgIGhlaWdodDogMTIwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi50b3AtYm9hcmQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5tYWluLWRlc2NyaXB0aW9uIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAtMjYwcHg7XHJcbiAgd2lkdGg6IDQyMHB4O1xyXG4gIGJvdHRvbTogODBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmVlYmVjO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAwIDAgMC4ycmVtIHJnYigwIDAgMCAvIDMwJSk7XHJcbn1cclxuXHJcbi5sZWZ0LWJvYXJkLCAucmlnaHQtYm9hcmQge1xyXG4gIC8vd2lkdGg6IDEwMCU7XHJcbiAgLy9oZWlnaHQ6IDEwMCU7XHJcbiAgLy9kaXNwbGF5OiBmbGV4O1xyXG4gIC8vZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmN1ZS1ib2FyZCB7XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG59XHJcblxyXG4uYXNzb2NpYXRpb25zLWJvYXJkIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5hc3NvY2lhdGlvbnMtYm9hcmQsIC5jdWUtYm9hcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcblxyXG5cclxuLmZpZ3VyYXRpdmUtcGhyYXNlIHtcclxuICBmb250LXNpemU6IDEuOHJlbTtcclxuICBjb2xvcjogIzAwMDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogOTUlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGJvcmRlcjogMDtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmltYWdlcy1ib2FyZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIHdpZHRoOiAxMTg4cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAuaW1hZ2VzLWJvYXJkIHtcclxuICAgIHdpZHRoOiA2NzBweDtcclxuICB9XHJcbn1cclxuXHJcbi5mYXMge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTA4MHB4KSB7XHJcbiAgLm1haW4tZGVzY3JpcHRpb24ge1xyXG4gICAgbGVmdDowO1xyXG4gICAgcmlnaHQ6MDtcclxuXHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAyOThweDtcclxuICAgIGJvdHRvbTogLTI1MHB4O1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2ODBweCkge1xyXG4gIC5pbWFnZXMtYm9hcmQge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gIH1cclxuICAuYW5hbG9neS1pbWFnZS1jb250YWluZXIge1xyXG4gICAgZmxleDogMSAwIDk5JSAhaW1wb3J0YW50OyAvKiBleHBsYW5hdGlvbiBiZWxvdyAqL1xyXG4gIH1cclxuXHJcbiAgLmNlbnRlci1zZXBhcmF0b3Ige1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmFuYWxvZ3ktaW1hZ2UtY29udGFpbmVyIHtcclxuICAvL2ZsZXg6IDEgMCA0OSU7IC8qIGV4cGxhbmF0aW9uIGJlbG93ICovXHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5hbmFsb2d5LWltYWdlLWNvbnRhaW5lci1zaXgge1xyXG4gIGZsZXg6IDEgMCA0OSU7IC8qIGV4cGxhbmF0aW9uIGJlbG93ICovXHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hbmFsb2d5LWltYWdlLWNvbnRhaW5lci10d2VsdmUge1xyXG4gIGZsZXg6IDEgMCAyNSUgIWltcG9ydGFudDsgOyAvKiBleHBsYW5hdGlvbiBiZWxvdyAqL1xyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogYXV0bztcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubGFiZWwge1xyXG4gIGNvbG9yOiAjNGQ1NTY4O1xyXG59XHJcblxyXG4uYm9hcmQtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LWZhbWlseTogXCJDYW1icmlhIE1hdGhcIiwgc2VyaWY7XHJcbn1cclxuXHJcbmlucHV0LCAuYm9sZC10ZXh0IHtcclxuICBmb250LXNpemU6IDEuOHJlbTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5zaGFrZSB7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHNoYWtlLWFuaW1hdGlvbjtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2hha2UtYW5pbWF0aW9uIHtcclxuICAxMCUsIDkwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0wLjVweCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICAyMCUsIDgwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICAzMCUsIDUwJSwgNzAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTNweCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICA0MCUsIDYwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDNweCwgMCwgMCk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLnJlbW92ZS1wb2ludGVyIHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMzc1cHgpIHtcclxuICAucG9pbnRlci1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLnBvaW50ZXItY29udGFpbmVyIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBsZWZ0OiAtMTYwcHg7XHJcbn1cclxuXHJcbi5tb3ZpbmctcG9pbnRlciB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogODBweDtcclxuICBhbmltYXRpb24tbmFtZTogbW92aW5nLXBvaW50ZXI7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjhzO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG1vdmluZy1wb2ludGVyIHtcclxuICBmcm9tIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5wb2ludGVyLWxhYmVsIHtcclxuICBmb250LXNpemU6IDE5cHg7XHJcbn1cclxuXHJcblxyXG5pbWcge1xyXG4gIHdpZHRoOiAyODBweDtcclxuICBoZWlnaHQ6IDI4MHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXI6IDJweCB0cmFuc3BhcmVudCBzb2xpZDtcclxufVxyXG5cclxuLnNlcGFyYXRvci1sYWJlbCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uY3VlLWxpbmUtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4ODBweCkge1xyXG4gIC5mYXMtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmctbGVmdDogNDRweDtcclxuICB9XHJcblxyXG4gIC5kYXNoYm9hcmQtaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUyMHB4KSB7XHJcbiAgLmN1ZS1saW5lLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgLmZhcy1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLmZhcy1jb250YWluZXIge1xyXG4gIHdpZHRoOiAyNzBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nLWxlZnQ6IDQ0cHg7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtaWNvbiB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uZmFzIHtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZmEtc2lnbi1vdXQtYWx0IHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5mYS1pbmZvLWNpcmNsZSB7XHJcbiAgY29sb3I6ICNmZDk2OWU7XHJcbn1cclxuXHJcbi5yaWdodC1ib2FyZC1jb250YWluZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwLjJyZW0gcmdiKDAgMCAwIC8gMzAlKTtcclxufVxyXG5cclxuLmxlZnQtYm9hcmQtY29udGFpbmVyIHtcclxuICBwYWRkaW5nLXRvcDogMDtcclxuICBib3gtc2hhZG93OiAwIDAgMC4ycmVtIHJnYigwIDAgMCAvIDMwJSk7XHJcbn1cclxuXHJcbi5jZW50ZXItc2VwYXJhdG9yIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uY2FuZGlkYXRlLXNlbGVjdGVkIHtcclxuICBib3JkZXI6ICNmZjNkMGY4NSBzb2xpZCA1cHg7XHJcbn1cclxuXHJcbi5BSS1zZWxlY3RlZCB7XHJcbiAgYm9yZGVyOiAjZmZkYzAwIHNvbGlkIDVweDtcclxufVxyXG5cclxuLmFsZXJ0cy1ib3JkZXIge1xyXG4gIGJvcmRlcjogI2ZmOGQ3MiBzb2xpZCA1cHg7XHJcblxyXG4gIGFuaW1hdGlvbjogYmxpbmsgMnM7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYmxpbmsge1xyXG4gIDUwJSB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XHJcbiAgfVxyXG59XHJcblxyXG4vL01hdGVyaWFsXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZmxleCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "eaPZ":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\r\n        class=\"navbar navbar-expand-lg fixed-top navbar-transparent\"\r\n        color-on-scroll=\"100\"\r\n        id=\"navbar-top\"\r\n>\r\n    <div class=\"container\">\r\n        <div class=\"navbar-translate\">\r\n            <a\r\n                    class=\"navbar-brand\"\r\n                    placement=\"bottom\"\r\n                    [routerLink]=\"['/']\"\r\n                    target=\"IRFL\"\r\n                    (click)=\"click.emit('menu')\"\r\n            >\r\n                <span> IRFL </span>\r\n            </a>\r\n            <button\r\n                    aria-controls=\"navigation-index\"\r\n                    aria-label=\"Toggle navigation\"\r\n                    class=\"navbar-toggler navbar-toggler\"\r\n                    [attr.aria-expanded]=\"!isCollapsed\"\r\n                    (click)=\"isCollapsed = !isCollapsed\"\r\n                    type=\"button\"\r\n            >\r\n                <span class=\"navbar-toggler-bar bar1\"> </span>\r\n                <span class=\"navbar-toggler-bar bar2\"> </span>\r\n                <span class=\"navbar-toggler-bar bar3\"> </span>\r\n            </button>\r\n        </div>\r\n        <div\r\n                class=\"navbar-collapse justify-content-end\"\r\n                [collapse]=\"isCollapsed\"\r\n                id=\"navigation\"\r\n        >\r\n            <ul class=\"navbar-nav\">\r\n                <li class=\"nav-item  p-0\">\r\n                    <a\r\n                            class=\"nav-link\"\r\n                            placement=\"bottom\"\r\n                            target=\"_blank\"\r\n                            href=\"https://github.com/irfl-dataset/IRFL\"\r\n                    >\r\n                        <i class=\"fab fa-github\"> </i>\r\n                        <p class=\"d-lg-none d-xl-none\">Github</p>\r\n                    </a>\r\n                </li>\r\n                                <li class=\"nav-item\">\r\n                    <a\r\n                            class=\"nav-link\"\r\n                            href=\"https://huggingface.co/datasets/lampent/IRFL\"\r\n                            placement=\"bottom\"\r\n                            target=\"_blank\"\r\n                    >\r\n                        <img style=\"width: 25px; height: 25px;\" src=\"https://huggingface.co/front/assets/huggingface_logo-noborder.svg\">\r\n                        <p class=\"d-lg-none d-xl-none\">Huggingface</p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item \">\r\n                    <a\r\n                            class=\"nav-link\"\r\n                            href=\"javascript:void(0)\"\r\n                            (click)=\"click.emit('leaderboard')\"\r\n                            [routerLink]=\"['/leaderboard']\"\r\n                    >\r\n                        Leaderboard\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a\r\n                            class=\"nav-link\"\r\n                            target=\"_blank\"\r\n                            href=\"https://arxiv.org/abs/2303.15445\"\r\n                    >\r\n                        Paper\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a\r\n                            [style]=\"{'color': selectedTab === 'explore' ? '#fd969e !important' : ''}\"\r\n                            class=\"nav-link\"\r\n                            (click)=\"click.emit('explore')\"\r\n                            href=\"javascript:void(0)\"\r\n                            [routerLink]=\"['/explore']\"\r\n                    >\r\n                        Explore\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>");

/***/ }),

/***/ "fe5k":
/*!**************************************************************************!*\
  !*** ./src/app/pages/mturk leaderboard/mturk-leaderboard.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-header .content-center {\n  color: black !important;\n  width: 90%;\n  max-width: none;\n  margin: auto;\n}\n\n.content-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 1rem;\n}\n\n.padding-bottom {\n  padding-bottom: 5rem;\n}\n\n.main-label {\n  font-weight: 600;\n  text-transform: none !important;\n  font-size: 3.6rem;\n  color: #fd969e !important;\n}\n\n.leaderboard-container {\n  width: 100%;\n  min-height: 400px;\n  box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.05);\n}\n\nul li, ol li {\n  color: black;\n}\n\nbody {\n  font-family: \"lato\", sans-serif;\n}\n\n.container {\n  max-width: 1000px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nh2 {\n  font-size: 26px;\n  margin: 20px 0;\n  text-align: center;\n}\n\nh2 small {\n  font-size: 0.5em;\n}\n\n@media (max-width: 767px) {\n  .main-label {\n    font-size: 3rem !important;\n  }\n}\n\n.ai-leaderboard > .main-label {\n  font-size: 3.5rem;\n}\n\n.stats-page-ref {\n  color: #fd969e !important;\n}\n\n::ng-deep .nav-tabs {\n  width: 300px;\n  display: flex;\n  justify-content: space-around;\n}\n\n::ng-deep .tab-content {\n  width: 100%;\n}\n\n.nav-tabs-danger {\n  padding-top: 13rem !important;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n}\n\n.col-2-AI-leaderboard {\n  width: 20%;\n  text-align: left;\n  margin-left: 16px;\n}\n\n.small-note {\n  margin-top: 15px;\n  color: grey;\n  font-size: 0.8rem;\n}\n\n.responsive-table {\n  padding: 0;\n}\n\n.responsive-table li {\n  border-radius: 3px;\n  padding: 25px 30px;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n}\n\n.responsive-table .table-row, .responsive-table .table-header {\n  width: 100%;\n  background-color: #fbdddf;\n  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);\n}\n\n.responsive-table .col-1-leaderboard {\n  width: 5%;\n}\n\n.responsive-table .col-2-leaderboard {\n  width: 50%;\n  text-align: left;\n  margin-left: 16px;\n}\n\n.responsive-table .col-3-leaderboard, .responsive-table .col-4-leaderboard, .responsive-table .col-5-leaderboard {\n  width: 15%;\n}\n\n.responsive-table .table-header .col-3-leaderboard, .responsive-table .table-header .col-4-leaderboard, .responsive-table .table-header .col-5-leaderboard {\n  font-size: 12px;\n}\n\n@media all and (max-width: 767px) {\n  .responsive-table .col-2-leaderboard {\n    margin-left: 0px;\n  }\n  .responsive-table .col-1-leaderboard, .responsive-table .col-2-leaderboard, .responsive-table .col-3-leaderboard, .responsive-table .col-4-leaderboard, .responsive-table .col-5-leaderboard {\n    width: 134px;\n  }\n  .responsive-table .table-header {\n    display: none;\n  }\n  .responsive-table li {\n    display: block;\n  }\n  .responsive-table .col-leaderboard {\n    flex-basis: 100%;\n  }\n  .responsive-table .col-leaderboard {\n    display: flex;\n    padding: 10px 0;\n    justify-content: space-between;\n  }\n  .responsive-table .col-leaderboard:before {\n    color: #6C7A89;\n    width: 20px;\n    content: attr(data-label);\n    text-align: right;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxtdHVyayUyMGxlYWRlcmJvYXJkXFxtdHVyay1sZWFkZXJib2FyZC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxtdHVyay1sZWFkZXJib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsK0NBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLCtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDRUY7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDRUY7O0FEREU7RUFDRSxnQkFBQTtBQ0dKOztBRENBO0VBQ0U7SUFDRSwwQkFBQTtFQ0VGO0FBQ0Y7O0FEQ0E7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURNQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUNIRjs7QURNQTtFQUNFLFdBQUE7QUNIRjs7QURNQTtFQUNFLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNIRjs7QURNQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDSEY7O0FETUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0hGOztBRE1BO0VBQ0UsVUFBQTtBQ0hGOztBRElFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDRko7O0FEVUU7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSw4Q0FBQTtBQ1JKOztBRFVFO0VBQ0UsU0FBQTtBQ1JKOztBRFVFO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNSSjs7QURVRTtFQUNFLFVBQUE7QUNSSjs7QURZSTtFQUNFLGVBQUE7QUNWTjs7QURlRTtFQUNFO0lBQ0UsZ0JBQUE7RUNiSjtFRGdCRTtJQUNFLFlBQUE7RUNkSjtFRGlCRTtJQUNFLGFBQUE7RUNmSjtFRG9CRTtJQUNFLGNBQUE7RUNsQko7RURvQkU7SUFFRSxnQkFBQTtFQ25CSjtFRHNCRTtJQUNFLGFBQUE7SUFDQSxlQUFBO0lBQ0EsOEJBQUE7RUNwQko7RURxQkk7SUFDRSxjQUFBO0lBQ0EsV0FBQTtJQUNBLHlCQUFBO0lBQ0EsaUJBQUE7RUNuQk47QUFDRiIsImZpbGUiOiJtdHVyay1sZWFkZXJib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWhlYWRlciAuY29udGVudC1jZW50ZXIge1xyXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWF4LXdpZHRoOiBub25lO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmNvbnRlbnQtY2VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMXJlbTtcclxufVxyXG5cclxuLnBhZGRpbmctYm90dG9tIHtcclxuICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcclxufVxyXG5cclxuLm1haW4tbGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDMuNnJlbTtcclxuICBjb2xvcjogI2ZkOTY5ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGVhZGVyYm9hcmQtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICBib3gtc2hhZG93OiAwIDAuNXJlbSAwLjVyZW0gcmdiKDAgMCAwIC8gNSUpO1xyXG59XHJcblxyXG51bCBsaSwgb2wgbGkge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6ICdsYXRvJywgc2Fucy1zZXJpZjtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHNtYWxsIHtcclxuICAgIGZvbnQtc2l6ZTogMC41ZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAubWFpbi1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDNyZW0gIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5haS1sZWFkZXJib2FyZCA+IC5tYWluLWxhYmVsIHtcclxuICBmb250LXNpemU6IDMuNXJlbTtcclxufVxyXG5cclxuLnN0YXRzLXBhZ2UtcmVmIHtcclxuICBjb2xvcjogI2ZkOTY5ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWVkaXVtLW5vdGUge1xyXG4gIC8vbWF4LXdpZHRoOiA1OTBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5uYXYtdGFicyB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudGFiLWNvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubmF2LXRhYnMtZGFuZ2VyIHtcclxuICBwYWRkaW5nLXRvcDogMTNyZW0gIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbC0yLUFJLWxlYWRlcmJvYXJkIHtcclxuICB3aWR0aDogMjAlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbn1cclxuXHJcbi5zbWFsbC1ub3RlIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGNvbG9yOiBncmV5O1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG59XHJcblxyXG4ucmVzcG9uc2l2ZS10YWJsZSB7XHJcbiAgcGFkZGluZzogMDtcclxuICBsaSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBwYWRkaW5nOiAyNXB4IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICB9XHJcbiAgLy8udGFibGUtaGVhZGVyIHtcclxuICAvLyAgYmFja2dyb3VuZC1jb2xvcjogIzk1QTVBNjtcclxuICAvLyAgZm9udC1zaXplOiAxNHB4O1xyXG4gIC8vICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIC8vICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xyXG4gIC8vfVxyXG4gIC50YWJsZS1yb3csIC50YWJsZS1oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJkZGRmO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA5cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICB9XHJcbiAgLmNvbC0xLWxlYWRlcmJvYXJkIHtcclxuICAgIHdpZHRoOiA1JTtcclxuICB9XHJcbiAgLmNvbC0yLWxlYWRlcmJvYXJkIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgfVxyXG4gIC5jb2wtMy1sZWFkZXJib2FyZCwgLmNvbC00LWxlYWRlcmJvYXJkLCAuY29sLTUtbGVhZGVyYm9hcmQge1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICB9XHJcblxyXG4gIC50YWJsZS1oZWFkZXIge1xyXG4gICAgLmNvbC0zLWxlYWRlcmJvYXJkLCAuY29sLTQtbGVhZGVyYm9hcmQsIC5jb2wtNS1sZWFkZXJib2FyZCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLmNvbC0yLWxlYWRlcmJvYXJkIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLTEtbGVhZGVyYm9hcmQsIC5jb2wtMi1sZWFkZXJib2FyZCwgLmNvbC0zLWxlYWRlcmJvYXJkLCAuY29sLTQtbGVhZGVyYm9hcmQsIC5jb2wtNS1sZWFkZXJib2FyZCB7XHJcbiAgICAgIHdpZHRoOiAxMzRweDtcclxuICAgIH1cclxuXHJcbiAgICAudGFibGUtaGVhZGVyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC50YWJsZS1yb3d7XHJcblxyXG4gICAgfVxyXG4gICAgbGkge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5jb2wtbGVhZGVyYm9hcmQge1xyXG5cclxuICAgICAgZmxleC1iYXNpczogMTAwJTtcclxuXHJcbiAgICB9XHJcbiAgICAuY29sLWxlYWRlcmJvYXJkIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICBjb2xvcjogIzZDN0E4OTtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtbGFiZWwpO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iLCIucGFnZS1oZWFkZXIgLmNvbnRlbnQtY2VudGVyIHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA5MCU7XG4gIG1heC13aWR0aDogbm9uZTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY29udGVudC1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDFyZW07XG59XG5cbi5wYWRkaW5nLWJvdHRvbSB7XG4gIHBhZGRpbmctYm90dG9tOiA1cmVtO1xufVxuXG4ubWFpbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMy42cmVtO1xuICBjb2xvcjogI2ZkOTY5ZSAhaW1wb3J0YW50O1xufVxuXG4ubGVhZGVyYm9hcmQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICBib3gtc2hhZG93OiAwIDAuNXJlbSAwLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxudWwgbGksIG9sIGxpIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwibGF0b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDI2cHg7XG4gIG1hcmdpbjogMjBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5oMiBzbWFsbCB7XG4gIGZvbnQtc2l6ZTogMC41ZW07XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAubWFpbi1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAzcmVtICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5haS1sZWFkZXJib2FyZCA+IC5tYWluLWxhYmVsIHtcbiAgZm9udC1zaXplOiAzLjVyZW07XG59XG5cbi5zdGF0cy1wYWdlLXJlZiB7XG4gIGNvbG9yOiAjZmQ5NjllICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubmF2LXRhYnMge1xuICB3aWR0aDogMzAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG46Om5nLWRlZXAgLnRhYi1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5uYXYtdGFicy1kYW5nZXIge1xuICBwYWRkaW5nLXRvcDogMTNyZW0gIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29sLTItQUktbGVhZGVyYm9hcmQge1xuICB3aWR0aDogMjAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cblxuLnNtYWxsLW5vdGUge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBjb2xvcjogZ3JleTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5yZXNwb25zaXZlLXRhYmxlIHtcbiAgcGFkZGluZzogMDtcbn1cbi5yZXNwb25zaXZlLXRhYmxlIGxpIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiAyNXB4IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5yZXNwb25zaXZlLXRhYmxlIC50YWJsZS1yb3csIC5yZXNwb25zaXZlLXRhYmxlIC50YWJsZS1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZGRkZjtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA5cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5yZXNwb25zaXZlLXRhYmxlIC5jb2wtMS1sZWFkZXJib2FyZCB7XG4gIHdpZHRoOiA1JTtcbn1cbi5yZXNwb25zaXZlLXRhYmxlIC5jb2wtMi1sZWFkZXJib2FyZCB7XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuLnJlc3BvbnNpdmUtdGFibGUgLmNvbC0zLWxlYWRlcmJvYXJkLCAucmVzcG9uc2l2ZS10YWJsZSAuY29sLTQtbGVhZGVyYm9hcmQsIC5yZXNwb25zaXZlLXRhYmxlIC5jb2wtNS1sZWFkZXJib2FyZCB7XG4gIHdpZHRoOiAxNSU7XG59XG4ucmVzcG9uc2l2ZS10YWJsZSAudGFibGUtaGVhZGVyIC5jb2wtMy1sZWFkZXJib2FyZCwgLnJlc3BvbnNpdmUtdGFibGUgLnRhYmxlLWhlYWRlciAuY29sLTQtbGVhZGVyYm9hcmQsIC5yZXNwb25zaXZlLXRhYmxlIC50YWJsZS1oZWFkZXIgLmNvbC01LWxlYWRlcmJvYXJkIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnJlc3BvbnNpdmUtdGFibGUgLmNvbC0yLWxlYWRlcmJvYXJkIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICB9XG4gIC5yZXNwb25zaXZlLXRhYmxlIC5jb2wtMS1sZWFkZXJib2FyZCwgLnJlc3BvbnNpdmUtdGFibGUgLmNvbC0yLWxlYWRlcmJvYXJkLCAucmVzcG9uc2l2ZS10YWJsZSAuY29sLTMtbGVhZGVyYm9hcmQsIC5yZXNwb25zaXZlLXRhYmxlIC5jb2wtNC1sZWFkZXJib2FyZCwgLnJlc3BvbnNpdmUtdGFibGUgLmNvbC01LWxlYWRlcmJvYXJkIHtcbiAgICB3aWR0aDogMTM0cHg7XG4gIH1cbiAgLnJlc3BvbnNpdmUtdGFibGUgLnRhYmxlLWhlYWRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAucmVzcG9uc2l2ZS10YWJsZSBsaSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLnJlc3BvbnNpdmUtdGFibGUgLmNvbC1sZWFkZXJib2FyZCB7XG4gICAgZmxleC1iYXNpczogMTAwJTtcbiAgfVxuICAucmVzcG9uc2l2ZS10YWJsZSAuY29sLWxlYWRlcmJvYXJkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbiAgLnJlc3BvbnNpdmUtdGFibGUgLmNvbC1sZWFkZXJib2FyZDpiZWZvcmUge1xuICAgIGNvbG9yOiAjNkM3QTg5O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYWJlbCk7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "kEJ5":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/personal-details-form/personal-details-form.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".personal-details-form {\n  max-height: 555px !important;\n  overflow-y: scroll;\n}\n\n.mat-form-field {\n  width: 100% !important;\n}\n\n.button-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.instructions {\n  color: black;\n  font-size: 16px;\n  padding-bottom: 20px;\n}\n\n@media (max-width: 450px) {\n  .instructions-form {\n    width: 300px !important;\n  }\n\n  .personal-details-form {\n    top: 50% !important;\n  }\n}\n\n@media (max-width: 540px) {\n  ::ng-deep .mat-select-panel {\n    width: 300px !important;\n    min-width: 300px !important;\n  }\n\n  ::ng-deep .cdk-overlay-pane {\n    transform: translateX(-42px) translateY(-55px) !important;\n  }\n}\n\n.instructions-form {\n  width: 415px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwZXJzb25hbC1kZXRhaWxzLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsdUJBQUE7RUFDRjs7RUFFQTtJQUNFLG1CQUFBO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsdUJBQUE7SUFDQSwyQkFBQTtFQUFGOztFQUdBO0lBQ0UseURBQUE7RUFBRjtBQUNGOztBQUtBO0VBQ0UsWUFBQTtBQUhGIiwiZmlsZSI6InBlcnNvbmFsLWRldGFpbHMtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wZXJzb25hbC1kZXRhaWxzLWZvcm0ge1xyXG4gIG1heC1oZWlnaHQ6IDU1NXB4ICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idXR0b24tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnN0cnVjdGlvbnMge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gIC5pbnN0cnVjdGlvbnMtZm9ybSB7XHJcbiAgICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5wZXJzb25hbC1kZXRhaWxzLWZvcm0ge1xyXG4gICAgdG9wOiA1MCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NDBweCkge1xyXG4gIDo6bmctZGVlcCAubWF0LXNlbGVjdC1wYW5lbCB7XHJcbiAgICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogMzAwcHggIWltcG9ydGFudDs7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLmNkay1vdmVybGF5LXBhbmUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00MnB4KSB0cmFuc2xhdGVZKC01NXB4KSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG4uaW5zdHJ1Y3Rpb25zLWZvcm0ge1xyXG4gIHdpZHRoOiA0MTVweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "koS4":
/*!**********************************!*\
  !*** ./src/app/types/magnify.ts ***!
  \**********************************/
/*! exports provided: Magnify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Magnify", function() { return Magnify; });
class Magnify {
    constructor(imageID = 'task-image', zoom = 3) {
        this.imageId = imageID;
        this.zoom = zoom;
    }
    magnify() {
        this.img = document.getElementById(this.imageId);
        /*create magnifier glass:*/
        this.glass = document.createElement('DIV');
        this.glass.setAttribute('class', 'img-magnifier-glass');
        /*insert magnifier glass:*/
        this.img.parentElement.insertBefore(this.glass, this.img);
        /*set background properties for the magnifier glass:*/
        this.glass.style.backgroundImage = 'url(\'' + this.img.src + '\')';
        this.glass.style.backgroundRepeat = 'no-repeat';
        this.glass.style.backgroundSize =
            this.img.width * this.zoom + 'px ' + this.img.height * this.zoom + 'px';
        this.bw = 3;
        this.w = this.glass.offsetWidth / 2;
        this.h = this.glass.offsetHeight / 2;
        /*execute a function when someone moves the magnifier glass over the image:*/
        this.glass.addEventListener('mousemove', this.moveMagnifier.bind(this));
        this.img.addEventListener('mousemove', this.moveMagnifier.bind(this));
        /*and also for touch screens:*/
        this.glass.addEventListener('touchmove', this.moveMagnifier.bind(this));
        this.img.addEventListener('touchmove', this.moveMagnifier.bind(this));
    }
    moveMagnifier(e) {
        let pos, x, y;
        /*prevent any other actions that may occur when moving over the image*/
        e.preventDefault();
        /*get the cursor's x and y positions:*/
        pos = this.getCursorPos(e);
        x = pos.x;
        y = pos.y;
        /*prevent the magnifier glass from being positioned outside the image:*/
        if (x > this.img.width - this.w / this.zoom) {
            x = this.img.width - this.w / this.zoom;
        }
        if (x < this.w / this.zoom) {
            x = this.w / this.zoom;
        }
        if (y > this.img.height - this.h / this.zoom) {
            y = this.img.height - this.h / this.zoom;
        }
        if (y < this.h / this.zoom) {
            y = this.h / this.zoom;
        }
        /*set the position of the magnifier glass:*/
        this.glass.style.left = x - this.w + 'px';
        this.glass.style.top = y - this.h + 'px';
        /*display what the magnifier glass "sees":*/
        this.glass.style.backgroundPosition =
            '-' + (x * this.zoom - this.w + this.bw) + 'px -' + (y * this.zoom - this.h + this.bw) + 'px';
    }
    getCursorPos(e) {
        let a, x = 0, y = 0;
        e = e || window.event;
        /*get the x and y positions of the image:*/
        a = this.img.getBoundingClientRect();
        /*calculate the cursor's x and y coordinates, relative to the image:*/
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        /*consider any page scrolling:*/
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return { x, y };
    }
}


/***/ }),

/***/ "m6ph":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/mturk-personal-profile/murk-personal-profile.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1, h3 {\n  color: #4d5568 !important;\n}\n\n.stat-label {\n  font-size: 2rem;\n  text-align: center;\n  font-weight: 700;\n}\n\n.stat-description {\n  text-align: center;\n}\n\n.abstract {\n  display: flex;\n  justify-content: center;\n}\n\n.abstract > img {\n  height: 16rem;\n}\n\n.content-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 2.5rem;\n}\n\n.uncommon-scenarios-list::ng-deep li, ul {\n  list-style: initial !important;\n}\n\n.page-header {\n  max-height: -webkit-max-content !important;\n  max-height: -moz-max-content !important;\n  max-height: max-content !important;\n}\n\n.sub-title {\n  font-size: 2rem;\n}\n\n@media (max-width: 800px) {\n  .explore-nav {\n    justify-content: center;\n  }\n}\n\n@media (max-width: 500px) {\n  .results-nav {\n    width: 85vw;\n    overflow-y: scroll;\n  }\n}\n\n@media (max-width: 760px) {\n  .test-nav {\n    width: 100% !important;\n  }\n}\n\n.test-nav {\n  width: 40%;\n  justify-content: space-between;\n  align-items: center;\n  display: flex;\n  padding-top: 1rem;\n}\n\n.btn-neutral {\n  background: #fab1b45c !important;\n  color: #222a42 !important;\n}\n\n.btn-neutral:hover {\n  background: #fab1b4a6 !important;\n}\n\n.test-me-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 300px;\n  padding-bottom: 20px;\n}\n\n.example-label {\n  width: 125%;\n  padding-bottom: 2.2rem;\n}\n\n.explore-nav {\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  padding-bottom: 5rem;\n}\n\n.got-it-container {\n  width: 400px;\n  height: 180px;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n}\n\n.got-it-title {\n  color: #fd969e !important;\n}\n\n.practice-text, .practice-title {\n  color: #222a42 !important;\n}\n\n.got-it-container, .practice-title {\n  padding: 20px;\n  font-size: 24px;\n}\n\n.practice-title {\n  font-weight: bold;\n}\n\n.task-container, .got-it-container, .practice-text {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.hint {\n  color: black;\n  width: 100%;\n  font-size: 1.3rem;\n}\n\n.guess-clue-hint {\n  color: black;\n  width: 100%;\n  height: 60px;\n  font-size: 20px;\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 700;\n}\n\n.no-clue {\n  visibility: hidden !important;\n}\n\n.submitted {\n  pointer-events: none;\n}\n\n.text-row {\n  padding: 20px;\n  color: #222a42 !important;\n  font-size: 0.875rem;\n}\n\n.main-label {\n  font-weight: 600;\n  text-transform: none !important;\n  font-size: 4rem;\n  color: #fd969e !important;\n}\n\n.main-description {\n  font-size: 1rem;\n  color: #222a42 !important;\n  padding-bottom: 3rem;\n}\n\n.padding-bottom {\n  padding-bottom: 5rem;\n}\n\n.selected-button {\n  -webkit-transform: translateY(-1px);\n  background: #fab1b4d1 !important;\n}\n\n.disabled-button, .disabled-button:hover {\n  -webkit-transform: translateY(-1px);\n  background: #fab1b42e !important;\n}\n\n.fas-big {\n  font-size: 2.5rem;\n  /* font-weight: bold; */\n  color: #fd969e !important;\n  display: inline-block;\n  cursor: pointer;\n}\n\n.task-container ::ng-deep .btn-big {\n  font-size: 1.5rem;\n}\n\n.wrong-answer, .wrong-answer:hover, .wrong-answer:visited, .wrong-answer:active .wrong-answer:target, .wrong-answer:focus {\n  background: #ff3c3ce0 !important;\n  transform: none !important;\n}\n\n.correct-answer, .correct-answer:hover, .correct-answer:visited, .correct-answer:active, .correct-answer:target, .correct-answer:focus {\n  background: #63ff3ce0 !important;\n  transform: none !important;\n}\n\n.bs-tooltip-top {\n  background: #00bbff !important;\n}\n\n.tooltip-inner {\n  font-size: 1rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtdXJrLXBlcnNvbmFsLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSx5QkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsOEJBQUE7QUFBRjs7QUFHQTtFQUNFLDBDQUFBO0VBQUEsdUNBQUE7RUFBQSxrQ0FBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtBQUFGOztBQUdBO0VBQ0U7SUFDRSx1QkFBQTtFQUFGO0FBQ0Y7O0FBSUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxrQkFBQTtFQUZGO0FBQ0Y7O0FBTUE7RUFDRTtJQUNFLHNCQUFBO0VBSkY7QUFDRjs7QUFPQTtFQUNFLFVBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBTEY7O0FBU0E7RUFDRSxnQ0FBQTtFQUNBLHlCQUFBO0FBTkY7O0FBU0E7RUFDRSxnQ0FBQTtBQU5GOztBQVNBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFORjs7QUFTQTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtBQU5GOztBQVNBO0VBQ0UsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBTkY7O0FBU0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDZDQUFBO0FBTkY7O0FBU0E7RUFDRSx5QkFBQTtBQU5GOztBQVNBO0VBQ0UseUJBQUE7QUFORjs7QUFTQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBTkY7O0FBU0E7RUFDRSxpQkFBQTtBQU5GOztBQVNBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQU5GOztBQVNBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQU5GOztBQVNBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQU5GOztBQVNBO0VBQ0UsNkJBQUE7QUFORjs7QUFTQTtFQUNFLG9CQUFBO0FBTkY7O0FBU0E7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQU5GOztBQVVBO0VBQ0UsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQVBGOztBQVVBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUFQRjs7QUFVQTtFQUNFLG9CQUFBO0FBUEY7O0FBVUE7RUFDRSxtQ0FBQTtFQUNBLGdDQUFBO0FBUEY7O0FBVUE7RUFDRSxtQ0FBQTtFQUNBLGdDQUFBO0FBUEY7O0FBVUE7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFQRjs7QUFVQTtFQUNFLGlCQUFBO0FBUEY7O0FBVUE7RUFDRSxnQ0FBQTtFQUNBLDBCQUFBO0FBUEY7O0FBVUE7RUFDRSxnQ0FBQTtFQUNBLDBCQUFBO0FBUEY7O0FBVUE7RUFDRSw4QkFBQTtBQVBGOztBQVVBO0VBQ0UsMEJBQUE7QUFQRiIsImZpbGUiOiJtdXJrLXBlcnNvbmFsLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaDEsIGgzIHtcclxuICBjb2xvcjogIzRkNTU2OCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3RhdC1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uc3RhdC1kZXNjcmlwdGlvbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYWJzdHJhY3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hYnN0cmFjdCA+IGltZyB7XHJcbiAgaGVpZ2h0OiAxNnJlbTtcclxufVxyXG5cclxuLmNvbnRlbnQtY2VudGVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAyLjVyZW07XHJcbn1cclxuXHJcbi51bmNvbW1vbi1zY2VuYXJpb3MtbGlzdDo6bmctZGVlcCAgbGksIHVsIHtcclxuICBsaXN0LXN0eWxlOiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wYWdlLWhlYWRlciB7XHJcbiAgbWF4LWhlaWdodDogbWF4LWNvbnRlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN1Yi10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAuZXhwbG9yZS1uYXYge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgLnJlc3VsdHMtbmF2IHtcclxuICAgIHdpZHRoOiA4NXZ3O1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjBweCkge1xyXG4gIC50ZXN0LW5hdiB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLnRlc3QtbmF2IHtcclxuICB3aWR0aDogNDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZy10b3A6IDFyZW07XHJcbn1cclxuXHJcblxyXG4uYnRuLW5ldXRyYWwge1xyXG4gIGJhY2tncm91bmQ6ICNmYWIxYjQ1YyFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICMyMjJhNDIgIWltcG9ydGFudFxyXG59XHJcblxyXG4uYnRuLW5ldXRyYWw6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmYWIxYjRhNiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGVzdC1tZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1sYWJlbCB7XHJcbiAgd2lkdGg6IDEyNSU7XHJcbiAgcGFkZGluZy1ib3R0b206IDIuMnJlbTtcclxufVxyXG5cclxuLmV4cGxvcmUtbmF2IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcclxufVxyXG5cclxuLmdvdC1pdC1jb250YWluZXIge1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBoZWlnaHQ6IDE4MHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiKDAgMCAwIC8gMTUlKTtcclxufVxyXG5cclxuLmdvdC1pdC10aXRsZSB7XHJcbiAgY29sb3I6ICNmZDk2OWUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnByYWN0aWNlLXRleHQsIC5wcmFjdGljZS10aXRsZSB7XHJcbiAgY29sb3I6ICMyMjJhNDIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmdvdC1pdC1jb250YWluZXIsIC5wcmFjdGljZS10aXRsZSB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi5wcmFjdGljZS10aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50YXNrLWNvbnRhaW5lciwgLmdvdC1pdC1jb250YWluZXIsIC5wcmFjdGljZS10ZXh0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmhpbnQge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG5cclxuLmd1ZXNzLWNsdWUtaGludCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4ubm8tY2x1ZSB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdWJtaXR0ZWQge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4udGV4dC1yb3cge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgY29sb3I6ICMyMjJhNDIgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG59XHJcblxyXG5cclxuLm1haW4tbGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDRyZW07XHJcbiAgY29sb3I6ICNmZDk2OWUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1haW4tZGVzY3JpcHRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBjb2xvcjogIzIyMmE0MiAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzcmVtO1xyXG59XHJcblxyXG4ucGFkZGluZy1ib3R0b20ge1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cmVtO1xyXG59XHJcblxyXG4uc2VsZWN0ZWQtYnV0dG9uIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICBiYWNrZ3JvdW5kOiAjZmFiMWI0ZDEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRpc2FibGVkLWJ1dHRvbiwgLmRpc2FibGVkLWJ1dHRvbjpob3ZlciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgYmFja2dyb3VuZDogI2ZhYjFiNDJlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mYXMtYmlnIHtcclxuICBmb250LXNpemU6IDIuNXJlbTtcclxuICAvKiBmb250LXdlaWdodDogYm9sZDsgKi9cclxuICBjb2xvcjogI2ZkOTY5ZSAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50YXNrLWNvbnRhaW5lciA6Om5nLWRlZXAgLmJ0bi1iaWcge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4ud3JvbmctYW5zd2VyLCAud3JvbmctYW5zd2VyOmhvdmVyLCAud3JvbmctYW5zd2VyOnZpc2l0ZWQsIC53cm9uZy1hbnN3ZXI6YWN0aXZlIC53cm9uZy1hbnN3ZXI6dGFyZ2V0LCAud3JvbmctYW5zd2VyOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kOiAjZmYzYzNjZTAgIWltcG9ydGFudDtcclxuICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvcnJlY3QtYW5zd2VyLCAuY29ycmVjdC1hbnN3ZXI6aG92ZXIsIC5jb3JyZWN0LWFuc3dlcjp2aXNpdGVkLCAuY29ycmVjdC1hbnN3ZXI6YWN0aXZlLCAuY29ycmVjdC1hbnN3ZXI6dGFyZ2V0LCAuY29ycmVjdC1hbnN3ZXI6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQ6ICM2M2ZmM2NlMCAhaW1wb3J0YW50O1xyXG4gIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnMtdG9vbHRpcC10b3Age1xyXG4gIGJhY2tncm91bmQ6ICMwMGJiZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRvb2x0aXAtaW5uZXIge1xyXG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "mM1V":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mturk-personal-profile/murk-personal-profile.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <canvas id=\"confetti\" [ngStyle]=\"{position: 'absolute', 'pointer-events': 'none'}\"></canvas>\n    <div class=\"page-header header-filter\">\n        <div class=\"container center-container\" *ngIf=\"imageClassificationTasks?.length || workerStats\">\n            <div class=\"content-center brand\">\n                <div style=\"color:black; font-size: 30px; padding-bottom: 20px\">\n                    Dear worker, this is your personal profile page.<br>\n                    Below you will find your statistics and some uncommon annotation scenarios.\n                </div>\n                <div style=\"color:black; font-size: 28px; padding-bottom: 20px\">\n                    <b>Statistics</b>\n                </div>\n                Small disclaimers\n                <div style=\"color:black; font-size: 22px; text-align: left;  padding-bottom: 20px\">\n                    Number of Figurative Literal annotated {{workerStats['Figurative Literal']}}<br>\n                    Number of Figurative annotated {{workerStats['Figurative']}}<br>\n                    Number of Caption annotated {{workerStats['Caption']}}<br>\n                    Number of Partial Objects annotated {{workerStats['Partial Objects']}}<br>\n                    Number of None annotated {{workerStats['None']}}<br>\n                </div>\n                <div style=\"color:black; font-size: 28px; padding-bottom: 20px\">\n                    <b>Agreement</b>\n                </div>\n                <div style=\"color:black; font-size: 22px; padding-bottom: 20px\">\n                    Agreement is the parentage of images you annotated \"correctly\"<br> (by majority of 3 annotators or more)\n                </div>\n                <div style=\"color:black; font-size: 22px; text-align: left; padding-bottom: 20px\">\n                    Total Agreement {{(workerStats['agreement'].toFixed(2)*100).toFixed(1)}}%<br>\n                    Figurative Literal Agreement {{(workerStats['Figurative Literal_agreement']*100).toFixed(1)}}%<br>\n                    Figurative Agreement {{(workerStats['Figurative_agreement']*100).toFixed(1)}}%<br>\n                    Caption Agreement {{(workerStats['Caption_agreement']*100).toFixed(1)}}%<br>\n                    Partial Objects Agreement {{(workerStats['Partial Objects_agreement']*100).toFixed(1)}}%<br>\n                    None Agreement {{(workerStats['None_agreement']*100).toFixed(1)}}%<br>\n                </div>\n                <div style=\"color:black; font-size: 30px; padding-bottom: 20px\">\n                    <b>Spacial annotation cases</b>\n                </div>\n                <div class=\"task-container\">\n<!--                    <app-image-classification-board [imageClassificationTask]=\"example\" [_submit]=\"_submit\"></app-image-classification-board>-->\n                    <app-image-classification-board *ngFor=\"let task of imageClassificationTasks; let i = index;\" class=\"analogies-board\" [imageClassificationTask]=\"task\"\n                                                    [reviewMode]=\"true\" [showHint]=\"_submit\" [showCorrectAnswer]=\"_submit\" [submit]=\"_submit\" [isFirst]=\"i === 0\">\n                    </app-image-classification-board>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n    <footer class=\"footer\">\n        <div class=\"container\">\n            <div class=\"footer-row\">\n                <a>Maintained by Lampent</a>\n            </div>\n        </div>\n    </footer>\n</div>\n\n\n");

/***/ }),

/***/ "nR2Z":
/*!*****************************************************!*\
  !*** ./src/app/navbar/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar-brand {\n  font-size: 0.85rem;\n}\n\n.navbar-toggler {\n  background-color: #fda1ab;\n}\n\n@media (max-width: 750px) {\n  .title-description {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBQTtBQUNEOztBQUVBO0VBQ0MseUJBQUE7QUFDRDs7QUFFQTtFQUNDO0lBQ0UsYUFBQTtFQUNEO0FBQ0YiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1icmFuZCB7XHJcbiBmb250LXNpemU6IDAuODVyZW07XHJcbn1cclxuXHJcbi5uYXZiYXItdG9nZ2xlciB7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRhMWFiO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcclxuIC50aXRsZS1kZXNjcmlwdGlvbiB7XHJcbiAgIGRpc3BsYXk6IG5vbmU7XHJcbiB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTgwcHgpIHtcclxuXHJcbn1cclxuIl19 */");

/***/ }),

/***/ "qsz/":
/*!************************************!*\
  !*** ./src/app/types/IRFLImage.ts ***!
  \************************************/
/*! exports provided: IRFLImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IRFLImage", function() { return IRFLImage; });
class IRFLImage {
    constructor(image, name) {
        this.img = image;
        this.name = name;
    }
}


/***/ }),

/***/ "tZhi":
/*!***************************************************!*\
  !*** ./src/app/navbar/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "eaPZ");
/* harmony import */ var _navbar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.component.scss */ "nR2Z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");





let NavbarComponent = class NavbarComponent {
    constructor() {
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.selectedTab = 'beat-the-ai';
        this.isCollapsed = true;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
    }
    ngAfterViewInit() {
        this.subscription = this.click.subscribe(() => this.isCollapsed = true);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    changeNavbarColor() {
    }
};
NavbarComponent.ctorParameters = () => [];
NavbarComponent.propDecorators = {
    click: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    selectedTab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    isCollapsed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-navbar',
        template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_navbar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], NavbarComponent);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: IRFLTaskPath, leaderboard, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IRFLTaskPath", function() { return IRFLTaskPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leaderboard", function() { return leaderboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/main/main.component */ "/s1f");
/* harmony import */ var _pages_explore_explore_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/explore/explore.component */ "Y0Yk");
/* harmony import */ var _pages_mturk_irfl_task_mturk_solve_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/mturk-irfl-task/mturk-solve.component */ "xmEk");
/* harmony import */ var _pages_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/leaderboard/leaderboard.component */ "WMJr");
/* harmony import */ var _pages_mturk_image_classification_task_mturk_image_classification_task_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/mturk-image-classification-task/mturk-image-classification-task.component */ "6S4h");
/* harmony import */ var _pages_mturk_personal_profile_murk_personal_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/mturk-personal-profile/murk-personal-profile.component */ "13OI");
/* harmony import */ var _pages_mturk_leaderboard_mturk_leaderboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/mturk leaderboard/mturk-leaderboard.component */ "Titn");












const IRFLTaskPath = 'task';
const leaderboard = 'leaderboard';
const routes = [
    { path: '*', component: _pages_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"] },
    { path: 'main', component: _pages_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"] },
    { path: 'explore', component: _pages_explore_explore_component__WEBPACK_IMPORTED_MODULE_6__["ExploreComponent"] },
    { path: leaderboard, component: _pages_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_8__["LeaderboardComponent"] },
    { path: 'mturk/leaderboard', component: _pages_mturk_leaderboard_mturk_leaderboard_component__WEBPACK_IMPORTED_MODULE_11__["MturkLeaderboardComponent"] },
    { path: 'mturk/task/:id', component: _pages_mturk_irfl_task_mturk_solve_component__WEBPACK_IMPORTED_MODULE_7__["MturkSolveComponent"] },
    { path: 'mturk/image/:id', component: _pages_mturk_image_classification_task_mturk_image_classification_task_component__WEBPACK_IMPORTED_MODULE_9__["MturkImageClassificationTaskComponent"] },
    { path: 'profile/:id', component: _pages_mturk_personal_profile_murk_personal_profile_component__WEBPACK_IMPORTED_MODULE_10__["MurkPersonalProfileComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, {
                useHash: true,
                onSameUrlNavigation: 'reload'
            })
        ],
        exports: []
    })
], AppRoutingModule);



/***/ }),

/***/ "wAWi":
/*!****************************************************!*\
  !*** ./src/app/types/image-classification-task.ts ***!
  \****************************************************/
/*! exports provided: ImageClassificationTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageClassificationTask", function() { return ImageClassificationTask; });
/* harmony import */ var _image_categories_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-categories-enum */ "OZMB");
/* harmony import */ var _assets_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/constants */ "xVX4");


class ImageClassificationTask {
    constructor(irflImage, type, phrase = '', definitions = [], category = _image_categories_enum__WEBPACK_IMPORTED_MODULE_0__["ImageCategoriesEnum"].Default, id = '', correctCategory = _image_categories_enum__WEBPACK_IMPORTED_MODULE_0__["ImageCategoriesEnum"].Default, hint = '', serverData = {}, groupID = '', secondaryCategory = _image_categories_enum__WEBPACK_IMPORTED_MODULE_0__["SimilesConceptsCategoriesEnum"].Default, correctSecondaryCategory = _image_categories_enum__WEBPACK_IMPORTED_MODULE_0__["SimilesConceptsCategoriesEnum"].Default) {
        this.id = '';
        this.groupID = '';
        this.id = id;
        this.serverData = serverData;
        this.irflImage = irflImage;
        this.phrase = phrase;
        this.category = category;
        this.secondaryCategory = secondaryCategory;
        this.correctSecondaryCategory = correctSecondaryCategory;
        this.correctCategory = correctCategory;
        this.hint = hint;
        this.definitions = definitions.filter((query) => !_assets_constants__WEBPACK_IMPORTED_MODULE_1__["QUERIES_BLACKLIST"].includes(query.toLowerCase())).map(this.capitalizeFirstLetter);
        this.groupID = groupID;
    }
    static clone(task) {
        return new ImageClassificationTask(JSON.parse(JSON.stringify(task.irflImage)), task.type, task.phrase, task.definitions, task.category, task.id, task.correctCategory, task.hint, task.serverData, task.groupID, task.secondaryCategory, task.correctSecondaryCategory);
    }
    capitalizeFirstLetter(sentence) {
        try {
            return sentence.charAt(0).toUpperCase() + sentence.slice(1);
        }
        catch (e) {
            return sentence;
        }
    }
    init() {
        this.clear();
    }
    isClassified() {
        return this.type === 'simile' ? (this.category !== _image_categories_enum__WEBPACK_IMPORTED_MODULE_0__["ImageCategoriesEnum"].Default && this.secondaryCategory !== _image_categories_enum__WEBPACK_IMPORTED_MODULE_0__["SimilesConceptsCategoriesEnum"].Default)
            : this.category !== _image_categories_enum__WEBPACK_IMPORTED_MODULE_0__["ImageCategoriesEnum"].Default;
    }
    isClassifiedCorrect() {
        if (this.isClassified()) {
            if (this.type === 'simile') {
                return this.category === this.correctCategory && this.secondaryCategory === this.correctSecondaryCategory;
            }
            else {
                return this.category === this.correctCategory;
            }
        }
    }
    getHint() {
        if (this.isClassified()) {
            return '';
        }
        else {
            return 'Please choose one of the categories';
        }
    }
    clear() {
        this.category = _image_categories_enum__WEBPACK_IMPORTED_MODULE_0__["ImageCategoriesEnum"].Default;
        this.secondaryCategory = _image_categories_enum__WEBPACK_IMPORTED_MODULE_0__["SimilesConceptsCategoriesEnum"].Default;
    }
    getJSON() {
        return Object.assign({}, this);
    }
    getSolveFormat() {
        return this.getJSON();
    }
}


/***/ }),

/***/ "wE2a":
/*!********************************************************!*\
  !*** ./src/app/pages/download/download.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1, h3 {\n  color: #4d5568 !important;\n}\n\n.stats-row {\n  width: 75%;\n  display: flex;\n  flex-basis: 33.3333333%;\n  justify-content: space-around;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n  padding: 1rem;\n  margin: auto;\n}\n\n.stats-block {\n  padding: 1.5rem;\n}\n\n.stat-label {\n  font-size: 2rem;\n  text-align: center;\n  font-weight: 700;\n}\n\n.stat-description {\n  text-align: center;\n}\n\n.abstract {\n  display: flex;\n  justify-content: center;\n}\n\n.abstract > img {\n  height: 16rem;\n}\n\n.content-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 13rem;\n}\n\n.sub-title {\n  font-size: 2rem;\n}\n\n@media (max-width: 400px) {\n  :host::ng-deep .nav {\n    flex-direction: column;\n  }\n}\n\n.explore-nav {\n  width: 120%;\n  justify-content: space-between;\n  align-items: center;\n  display: flex;\n  padding-bottom: 3rem;\n}\n\n.nav-tabs-danger {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n}\n\n::ng-deep .tab-content {\n  width: 100%;\n}\n\n.btn-neutral:hover {\n  background: #fab1b4a6 !important;\n}\n\n.card {\n  background: #fbfbff;\n  width: 100%;\n  text-align: left;\n}\n\n@media (max-width: 800px) {\n  .card {\n    height: auto;\n  }\n}\n\n.highlight {\n  width: 70vw;\n  max-width: 804px;\n  padding: 0.5rem;\n  background-color: rgba(0, 0, 0, 0.1);\n  border: 1px solid black;\n  border-radius: 5px;\n}\n\n.download-icon {\n  top: 3px !important;\n  left: -5px !important;\n}\n\n.card-header {\n  height: 100%;\n  color: black;\n  padding-bottom: 20px;\n}\n\n.row {\n  display: block;\n}\n\n.tab-pane, .tab-pane > p, .text-uppercase, .font-weight-bold {\n  color: #222a42 !important;\n}\n\n.col-xl-6 {\n  max-width: 100%;\n}\n\n.btn-neutral, .btn-neutral:hover, .btn-neutral:visited, .btn-neutral:active, .btn-neutral:target, .btn-neutral:focus {\n  background-color: #fbfbff !important;\n  border: 2px solid #fab1b4 !important;\n  color: #222a42 !important;\n}\n\n.button-container {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkb3dubG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2Q0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0FBQUY7O0FBUUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUxGOztBQVFBO0VBQ0Usa0JBQUE7QUFMRjs7QUFRQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUxGOztBQVFBO0VBQ0UsYUFBQTtBQUxGOztBQVFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBTEY7O0FBU0E7RUFDRSxlQUFBO0FBTkY7O0FBU0E7RUFDRTtJQUNFLHNCQUFBO0VBTkY7QUFDRjs7QUFVQTtFQUNFLFdBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FBUkY7O0FBV0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBUkY7O0FBV0E7RUFDRSxXQUFBO0FBUkY7O0FBYUE7RUFDRSxnQ0FBQTtBQVZGOztBQWFBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFWRjs7QUFhQTtFQUNFO0lBQ0UsWUFBQTtFQVZGO0FBQ0Y7O0FBYUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBWEY7O0FBY0E7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0FBWEY7O0FBY0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBWEY7O0FBY0E7RUFDRSxjQUFBO0FBWEY7O0FBY0E7RUFDRSx5QkFBQTtBQVhGOztBQWNBO0VBQ0UsZUFBQTtBQVhGOztBQWNBO0VBQ0Usb0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0FBWEY7O0FBZUE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FBWkYiLCJmaWxlIjoiZG93bmxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaDEsIGgzIHtcclxuICBjb2xvcjogIzRkNTU2OCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3RhdHMtcm93IHtcclxuICB3aWR0aDogNzUlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1iYXNpczogMzMuMzMzMzMzMyU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2IoMCAwIDAgLyAxNSUpO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uc3RhdHMtYmxvY2sge1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxuXHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG5cclxufVxyXG5cclxuLnN0YXQtbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLnN0YXQtZGVzY3JpcHRpb24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFic3RyYWN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYWJzdHJhY3QgPiBpbWcge1xyXG4gIGhlaWdodDogMTZyZW07XHJcbn1cclxuXHJcbi5jb250ZW50LWNlbnRlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMTNyZW07XHJcbn1cclxuXHJcblxyXG4uc3ViLXRpdGxlIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gIDpob3N0OjpuZy1kZWVwIC5uYXYge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgfVxyXG59XHJcblxyXG4uZXhwbG9yZS1uYXYge1xyXG4gIHdpZHRoOiAxMjAlO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZy1ib3R0b206IDNyZW07XHJcbn1cclxuXHJcbi5uYXYtdGFicy1kYW5nZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC50YWItY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG5cclxuLmJ0bi1uZXV0cmFsOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmFiMWI0YTYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJhY2tncm91bmQ6ICNmYmZiZmY7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgLmNhcmQge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuLmhpZ2hsaWdodCB7XHJcbiAgd2lkdGg6IDcwdnc7XHJcbiAgbWF4LXdpZHRoOiA4MDRweDtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjEpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmRvd25sb2FkLWljb24ge1xyXG4gIHRvcDogM3B4ICFpbXBvcnRhbnQ7XHJcbiAgbGVmdDogLTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4udGFiLXBhbmUsIC50YWItcGFuZSA+IHAsIC50ZXh0LXVwcGVyY2FzZSwgLmZvbnQtd2VpZ2h0LWJvbGQge1xyXG4gIGNvbG9yOiAjMjIyYTQyICFpbXBvcnRhbnRcclxufVxyXG5cclxuLmNvbC14bC02IHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5idG4tbmV1dHJhbCwgLmJ0bi1uZXV0cmFsOmhvdmVyLCAuYnRuLW5ldXRyYWw6dmlzaXRlZCwgLmJ0bi1uZXV0cmFsOmFjdGl2ZSwgLmJ0bi1uZXV0cmFsOnRhcmdldCwgLmJ0bi1uZXV0cmFsOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZmICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2ZhYjFiNCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjMjIyYTQyICFpbXBvcnRhbnRcclxufVxyXG5cclxuXHJcbi5idXR0b24tY29udGFpbmVyIHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "wxMe":
/*!******************************************************!*\
  !*** ./src/app/pages/download/download.component.ts ***!
  \******************************************************/
/*! exports provided: DownloadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadComponent", function() { return DownloadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_download_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./download.component.html */ "yzWU");
/* harmony import */ var _download_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./download.component.scss */ "wE2a");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let DownloadComponent = class DownloadComponent {
    constructor() {
        this.isCollapsed = true;
        this.date = new Date();
        this.pagination = 3;
        this.pagination1 = 1;
        this.selectedTab = 'Idioms';
        window.name = 'IRFL';
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
    }
    onSelectedTab(event) {
        this.selectedTab = event['heading'];
    }
};
DownloadComponent.ctorParameters = () => [];
DownloadComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-download',
        template: _raw_loader_download_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_download_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], DownloadComponent);



/***/ }),

/***/ "x+8Y":
/*!******************************************!*\
  !*** ./src/app/types/task-dictionary.ts ***!
  \******************************************/
/*! exports provided: imageClassificationExampleTask, createQualificationIndexIDMap, solveQualificationIndexIDMap, createExampleIndexIDMap, irflExampleIndexIDMap, getIRFLTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageClassificationExampleTask", function() { return imageClassificationExampleTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createQualificationIndexIDMap", function() { return createQualificationIndexIDMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "solveQualificationIndexIDMap", function() { return solveQualificationIndexIDMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createExampleIndexIDMap", function() { return createExampleIndexIDMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "irflExampleIndexIDMap", function() { return irflExampleIndexIDMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIRFLTask", function() { return getIRFLTask; });
/* harmony import */ var _candidate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./candidate */ "KHnd");
/* harmony import */ var _irfl_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./irfl-task */ "QhCX");
/* harmony import */ var _image_classification_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-classification-task */ "wAWi");
/* harmony import */ var _IRFLImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IRFLImage */ "qsz/");




const guessTheAssociationsDictionary = new Map();
const assetsImgPath = '/assets/img/';
const defaultCue = 'idiom';
const imageClassificationExampleTask = new _image_classification_task__WEBPACK_IMPORTED_MODULE_2__["ImageClassificationTask"](new _IRFLImage__WEBPACK_IMPORTED_MODULE_3__["IRFLImage"](assetsImgPath + 'slow-snail.jpeg', 'slow-snail'), 'simile', 'as slow as snail');
const createQualificationIndexIDMap = new Map();
createQualificationIndexIDMap.set(1, 'ablation_1');
createQualificationIndexIDMap.set(2, 'ablation_2');
createQualificationIndexIDMap.set(3, 'ablation_3');
createQualificationIndexIDMap.set(4, 'ablation_4');
createQualificationIndexIDMap.set(5, 'ablation_5');
createQualificationIndexIDMap.set(6, 'ablation_6');
createQualificationIndexIDMap.set(7, 'ablation_7');
createQualificationIndexIDMap.set(8, 'ablation_8');
createQualificationIndexIDMap.set(9, 'ablation_9');
createQualificationIndexIDMap.set(10, 'ablation_10');
const solveQualificationIndexIDMap = new Map();
solveQualificationIndexIDMap.set(1, '16');
solveQualificationIndexIDMap.set(2, '11');
solveQualificationIndexIDMap.set(3, '18');
solveQualificationIndexIDMap.set(4, '8');
solveQualificationIndexIDMap.set(5, '1');
solveQualificationIndexIDMap.set(6, '24');
solveQualificationIndexIDMap.set(7, '25');
solveQualificationIndexIDMap.set(8, '30');
solveQualificationIndexIDMap.set(9, '37');
solveQualificationIndexIDMap.set(10, '39');
const createExampleIndexIDMap = new Map();
const irflExampleIndexIDMap = new Map();
function getIRFLTask(figurativePhrase) {
    if (guessTheAssociationsDictionary.has(figurativePhrase)) {
        console.log(`Loading ${figurativePhrase} task`);
        return _irfl_task__WEBPACK_IMPORTED_MODULE_1__["IRFLTask"].clone(guessTheAssociationsDictionary.get(figurativePhrase));
    }
    return _irfl_task__WEBPACK_IMPORTED_MODULE_1__["IRFLTask"].clone(guessTheAssociationsDictionary.get(defaultCue));
}
// Guess the associations
// examples
guessTheAssociationsDictionary.set('metaphor', new _irfl_task__WEBPACK_IMPORTED_MODULE_1__["IRFLTask"]('simile', [
    new _candidate__WEBPACK_IMPORTED_MODULE_0__["Candidate"]('https://d3f6n9ckq6wheg.cloudfront.net/36744670862470155497506491464655066946444157754124231517934597776014629841407.jpeg', 'answer_1', true),
    new _candidate__WEBPACK_IMPORTED_MODULE_0__["Candidate"]('https://d3f6n9ckq6wheg.cloudfront.net/52288967107188279750550127343755254242956664383648015428849282822431101617588.jpeg', 'random_1'),
    new _candidate__WEBPACK_IMPORTED_MODULE_0__["Candidate"]('https://d3f6n9ckq6wheg.cloudfront.net/111273200017433720975817290298617695688707084380559820045777847633001713148558.jpeg', 'random_3'),
    new _candidate__WEBPACK_IMPORTED_MODULE_0__["Candidate"]('https://d3f6n9ckq6wheg.cloudfront.net/1449179304419101242365574356623624414168632003493781599709689619578193643031.jpeg', 'random_2'),
], 'Heart of gold', 1));
guessTheAssociationsDictionary.set('simile', new _irfl_task__WEBPACK_IMPORTED_MODULE_1__["IRFLTask"]('simile', [
    new _candidate__WEBPACK_IMPORTED_MODULE_0__["Candidate"]('https://d3f6n9ckq6wheg.cloudfront.net/105794735729343558758791773159209313980420667188564839483272499642914406345873.jpeg', 'random_1'),
    new _candidate__WEBPACK_IMPORTED_MODULE_0__["Candidate"]('https://d3f6n9ckq6wheg.cloudfront.net/70943955354752672470954323413718219290641183553464951812863941201688356128994.jpeg', 'random_2'),
    new _candidate__WEBPACK_IMPORTED_MODULE_0__["Candidate"]('https://d3f6n9ckq6wheg.cloudfront.net/35585095411820107275112939303214814215267273998842620789697502632451909082380.jpeg', 'random_3'),
    new _candidate__WEBPACK_IMPORTED_MODULE_0__["Candidate"]('https://d3f6n9ckq6wheg.cloudfront.net/4430939744430221964616925504651660373662400747811679665458586737286802240835.jpeg', 'answer_2', true),
], 'The car is as fast as a cheetah', 1));
guessTheAssociationsDictionary.set('idiom', new _irfl_task__WEBPACK_IMPORTED_MODULE_1__["IRFLTask"]('idiom', [
    new _candidate__WEBPACK_IMPORTED_MODULE_0__["Candidate"]('https://d3f6n9ckq6wheg.cloudfront.net/66020487709109997092215777699719991374741530395205454421118838028195257364402.jpeg', 'random_1'),
    new _candidate__WEBPACK_IMPORTED_MODULE_0__["Candidate"]('https://d3f6n9ckq6wheg.cloudfront.net/24885222685426153086889657229090037687514005093093887827369836047343411742552.jpeg', 'random_2'),
    new _candidate__WEBPACK_IMPORTED_MODULE_0__["Candidate"]('https://d3f6n9ckq6wheg.cloudfront.net/43961378535185985650180900584580673046708862632076695614527595777841577655561.jpeg', 'answer_1', true),
    new _candidate__WEBPACK_IMPORTED_MODULE_0__["Candidate"]('https://d3f6n9ckq6wheg.cloudfront.net/87000359395187297123922380769873951446814264510785151267015015874517313800304.jpeg', 'random_3'),
], 'Up a tree', 1, ['Cornered', 'At a loss', 'In or into a disadvantaged or difficult situation']));


/***/ }),

/***/ "x78e":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/personal-details-form/personal-details-form.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"personal-details-form-container\">\r\n    <div class=\"personal-details-form\" [ngClass]=\"{'instructions-form': !instructionsOk}\">\r\n        <form [formGroup]=\"personalDetailsForm\" (submit)=\"onSubmit($event)\">\r\n            <div class=\"instructions\" *ngIf=\"!instructionsOk && !isCreate\">\r\n                Please do the qualification test <b>only once</b>.<br>\r\n                You will need to solve Visual Associations. Check out our <a href=\"https://winogavil.github.io/\">project website</a>,\r\n                and try to solve the first example: Find two images associated with the word “Honey”!\r\n                <br>\r\n                <br>\r\n                Make sure to <a href=\"https://winogavil.github.io/challenge-the-ai\">exercise</a> before starting the qualification (Guess The Associations option).\r\n                <br>\r\n                <br>\r\n                Full HITs will be published for annotators who pass the test.<br><br>\r\n                Please send us an email with your worker ID when you finish the test: <a href=\"mailto:nlphuji@gmail.com\">nlphuji@gmail.com</a>.\r\n            </div>\r\n            <div class=\"instructions\" *ngIf=\"!instructionsOk && isCreate && experimentMode === experimentModes.DEFAULT\">\r\n                Please do the qualification test <b>only once</b>.<br>\r\n                This time, your goal is to <b>create</b> visual associations that a rival AI cannot solve, but other humans can. You will need to compose a <b>new</b> cue for given images.\r\n                <br>\r\n                <br>\r\n                The new cue should: <br>(1) fool an AI model (be creative and difficult)<br> (2) still be solvable by other humans.\r\n                <br>\r\n                <br>\r\n                Make sure to <a href=\"https://winogavil.github.io/challenge-the-ai\">exercise</a> before starting the qualification (Give The Cue option).\r\n                <br>\r\n                <br>\r\n                Full HITs will be published for annotators who pass the test. We will inform you by mail.<br><br>\r\n                Please send us a message if anything is unclear: <a href=\"mailto:nlphuji@gmail.com\">nlphuji@gmail.com</a>.\r\n            </div>\r\n\r\n            <div class=\"instructions\" *ngIf=\"!instructionsOk && isCreate && experimentMode === experimentModes.NO_REWARD\">\r\n                Please do the qualification test <b>only once</b>.<br>\r\n                Your goal is to <b>create</b> visual associations that a rival AI cannot solve, but other humans can. You will need to compose a <b>new</b> cue for given images.\r\n                <br>\r\n                <br>\r\n                The new cue should: <br>(1) fool an AI model (be creative and difficult)<br> (2) still be solvable by other humans.\r\n                <br>\r\n                <br>\r\n                Make sure to <a href=\"https://winogavil.github.io/challenge-the-ai\">exercise</a> before starting the qualification (Give The Cue option).\r\n                <br>\r\n                <br>\r\n                Full HITs will be published for annotators who pass the test. We will inform you by mail.<br><br>\r\n                Please send us a message if anything is unclear: <a href=\"mailto:nlphuji@gmail.com\">nlphuji@gmail.com</a>.\r\n            </div>\r\n\r\n            <div class=\"instructions\" *ngIf=\"!instructionsOk && isCreate && experimentMode === experimentModes.RG\">\r\n                Please do the qualification test <b>only once</b>.<br>\r\n                Your goal is to <b>create</b> visual associations that a rival AI cannot solve, but other humans can. You will need to compose a <b>new</b> cue for given images.\r\n                <br>\r\n                <br>\r\n                The new cue should: <br>(1) fool an AI model (be creative and hard)<br> (2) still be solvable by other humans (<u>we will send your associations to other annotators to solve</u>).\r\n                <br>\r\n                <br>\r\n                Make sure to <a href=\"https://winogavil.github.io/challenge-the-ai\">exercise</a> before starting the qualification (Give The Cue option).\r\n                <br>\r\n                <br>\r\n                Full HITs will be published for annotators who pass the test. We will inform you by mail.<br><br>\r\n                <b>BONUS</b>: Given that 'solvable by human score' is above 80%, you will receive a bonus according to the 'fool-the-AI' score <b>for each of the associations you create</b>.\r\n                <br><br>\r\n                If 50% <= fool-the-ai-score < 60%, you will receive 0.03$.<br>\r\n                If 60% <= fool-the-ai-score < 67%, you will receive 0.07$.<br>\r\n                If 67% <= fool-the-ai-score < 80%, you will receive 0.12$.<br>\r\n                If 80% <= fool-the-ai-score, you will receive 0.18$.<br><br>\r\n                The bonuses will be paid retroactively, because we'll need to compute a solver score ('solvable by human score') for the associations you create.\r\n                <br>\r\n                <br>\r\n                Please send us a message if anything is unclear: <a href=\"mailto:nlphuji@gmail.com\">nlphuji@gmail.com</a>.\r\n            </div>\r\n\r\n            <div class=\"instructions\" *ngIf=\"!instructionsOk && isCreate && experimentMode === experimentModes.ONLY_HUMAN\">\r\n                Please do the qualification test <b>only once</b>.<br>\r\n                Your goal is to <b>create</b> visual associations that a rival AI cannot solve, but other humans can. You will need to compose a <b>new</b> cue for given images.\r\n                <br>\r\n                <br>\r\n                The new cue should: <br><b>(1) be solvable by other humans</b> (<u>we will send your associations to other annotators to solve</u>).<br> (1) fool an AI model (be creative and hard)\r\n                <br>\r\n                <br>\r\n                Make sure to <a href=\"https://winogavil.github.io/challenge-the-ai\">exercise</a> before starting the qualification (Give The Cue option).\r\n                <br>\r\n                <br>\r\n                Full HITs will be published for annotators who pass the test. We will inform you by mail.<br><br>\r\n                <b>BONUS</b>: If 'solvable by human score' is above 90%, you will receive a bonus of 0.1$ <b>for each of the associations you create</b>.\r\n                <br><br>\r\n                The bonuses will be paid retroactively, because we'll need to compute a solver score ('solvable by human score') for the associations you create.\r\n                <br>\r\n                <br>\r\n                Please send us a message if anything is unclear: <a href=\"mailto:nlphuji@gmail.com\">nlphuji@gmail.com</a>.\r\n            </div>\r\n\r\n            <div class=\"instructions\" *ngIf=\"!instructionsOk && isCreate && experimentMode === experimentModes.ONLY_AI\">\r\n                Please do the qualification test <b>only once</b>.<br>\r\n                Your goal is to <b>create</b> visual associations that a rival AI cannot solve, but other humans can. You will need to compose a <b>new</b> cue for given images.\r\n                <br>\r\n                <br>\r\n                The new cue should: <br><b>(1) fool an AI model (be creative and hard)</b><br> (2) still be solvable by other humans.\r\n                <br>\r\n                <br>\r\n                Make sure to <a href=\"https://winogavil.github.io/challenge-the-ai\">exercise</a> before starting the qualification (Give The Cue option).\r\n                <br>\r\n                <br>\r\n                Full HITs will be published for annotators who pass the test. We will inform you by mail.<br><br>\r\n                <b>BONUS</b>: You will receive a bonus according to the 'fool-the-AI' score <b>for each of the associations you create</b>.\r\n                <br><br>\r\n                If 50% <= fool-the-ai-score < 60%, you will receive 0.03$.<br>\r\n                If 60% <= fool-the-ai-score < 67%, you will receive 0.07$.<br>\r\n                If 67% <= fool-the-ai-score < 80%, you will receive 0.12$.<br>\r\n                If 80% <= fool-the-ai-score, you will receive 0.18$.<br><br>\r\n                The bonuses will be paid retroactively.\r\n                <br>\r\n                <br>\r\n                Please send us a message if anything is unclear: <a href=\"mailto:nlphuji@gmail.com\">nlphuji@gmail.com</a>.\r\n            </div>\r\n            <mat-form-field appearance=\"fill\" *ngIf=\"instructionsOk \">\r\n                <mat-label>Age</mat-label>\r\n                <mat-select [formControlName]=\"'ages'\">\r\n                    <mat-option *ngFor=\"let age of ages\" [value]=\"age.value\">\r\n                        {{age.viewValue}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field appearance=\"fill\" *ngIf=\"instructionsOk\">\r\n                <mat-label>Gender</mat-label>\r\n                <mat-select  [formControlName]=\"'gender'\">\r\n                    <mat-option *ngFor=\"let item of gender\" [value]=\"item.value\">\r\n                        {{item.viewValue}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field appearance=\"fill\" *ngIf=\"instructionsOk\">\r\n                <mat-label>Level of Education</mat-label>\r\n                <mat-select [formControlName]=\"'education'\">\r\n                    <mat-option *ngFor=\"let item of education\" [value]=\"item.value\">\r\n                        {{item.viewValue}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field appearance=\"fill\" *ngIf=\"instructionsOk\">\r\n                <mat-label>Are you a native English speaker?</mat-label>\r\n                <mat-select [formControlName]=\"'speaker'\">\r\n                    <mat-option *ngFor=\"let item of speaker\" [value]=\"item.value\">\r\n                        {{item.viewValue}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <div class=\"button-container\" *ngIf=\"instructionsOk\">\r\n                <button mat-raised-button>Submit</button>\r\n            </div>\r\n\r\n        </form>\r\n        <div class=\"button-container\" *ngIf=\"!instructionsOk\">\r\n            <button mat-raised-button (click)=\"setInstructions()\">OK</button>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "xVX4":
/*!*********************************!*\
  !*** ./src/assets/constants.ts ***!
  \*********************************/
/*! exports provided: QUERIES_BLACKLIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERIES_BLACKLIST", function() { return QUERIES_BLACKLIST; });
const QUERIES_BLACKLIST = [
    'to delay sexual ejaculation',
    'to give somebody oral sex',
    'to achieve erection for sexual intercourse',
    'associated with the high church (the church of england and other anglican traditions, in reference to their \"high\" political position in england and \"dry\"/austere mode of worship), as opposed to the \"low and slow\" evangelical party and the \"broad and shallow\" broad church',
    'to reveal that one has fabricated or deliberately misrepresented one\'s own behavior, situation, or identity for an ulterior motive',
    'in the game of cribbage, to reach the point at which one is safe from being lurched',
    'a discreet, unassuming reference to freemasonry',
    'dirty',
    'to overcome obstacles and make a beginning',
    'blunt',
    'moving',
    'to note',
    'synonym of out of one\'s own pocket',
    'not available',
    'of or pertaining to the spending of cash rather than using credit',
    'to disillusion',
    '',
    'synonym of go down the toilet: to fail'
];


/***/ }),

/***/ "xmEk":
/*!****************************************************************!*\
  !*** ./src/app/pages/mturk-irfl-task/mturk-solve.component.ts ***!
  \****************************************************************/
/*! exports provided: MturkSolveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MturkSolveComponent", function() { return MturkSolveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_mturk_solve_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./mturk-solve.component.html */ "BiWK");
/* harmony import */ var _mturk_solve_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mturk-solve.component.scss */ "MVLG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_server_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/server-request.service */ "dXuD");
/* harmony import */ var _types_mturk_task__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../types/mturk-task */ "Y9Oq");








let MturkSolveComponent = class MturkSolveComponent extends _types_mturk_task__WEBPACK_IMPORTED_MODULE_7__["MturkTask"] {
    constructor(router, activeRouter, changeDetectorRef, serverRequestService) {
        super();
        this.router = router;
        this.activeRouter = activeRouter;
        this.changeDetectorRef = changeDetectorRef;
        this.serverRequestService = serverRequestService;
        this.hint = '';
        this.date = new Date();
        this.pagination = 3;
        this.pagination1 = 1;
        this.answers = new Map();
        this.testMode = true;
        this._submit = false;
        // goodJobHint = 'Good Job!';
        this.turkSubmitTo = '';
        this.assignmentId = '';
        this.solveCreate = false;
        this.timerSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.irflTasks = [];
        window.name = 'IRFL';
        this.id = this.activeRouter.snapshot.params.id;
        if (this.id && typeof this.id === 'string') {
            this.serverRequestService.getIRFLTasks(this.id).subscribe((tasks) => {
                this.turkSubmitTo = this.activeRouter.snapshot.queryParams.turkSubmitTo;
                this.assignmentId = this.activeRouter.snapshot.queryParams.assignmentId;
                console.log(this.turkSubmitTo);
                console.log(this.assignmentId);
                this.irflTasks = tasks;
            });
        }
        console.log(this.activeRouter.snapshot);
    }
    ngOnInit() {
        this.changeDetectorRef.detectChanges();
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('index-page');
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    ngOnDestroy() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
    }
    restartPractice(index) {
        var _a;
        this._submit = false;
        this.showHint('');
        (_a = this.irflTasks[index]) === null || _a === void 0 ? void 0 : _a.init();
    }
    submit(index) {
        var _a;
        this._submit = this.irflTasks[index].isTaskSolved(true);
        if (this._submit) {
            this.handleSubmit(this.assignmentId, this.turkSubmitTo, this.irflTasks[index]);
        }
        else {
            this.showHint((_a = this.irflTasks[index]) === null || _a === void 0 ? void 0 : _a.getHint());
        }
    }
    showHint(hint, time = 3000) {
        this.hint = hint;
        this.timerSubscription.unsubscribe();
        this.timerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(time).subscribe(() => {
            this.hint = '';
        });
    }
};
MturkSolveComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _services_server_request_service__WEBPACK_IMPORTED_MODULE_6__["ServerRequestService"] }
];
MturkSolveComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-mturk-solve',
        template: _raw_loader_mturk_solve_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_mturk_solve_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"],
        _services_server_request_service__WEBPACK_IMPORTED_MODULE_6__["ServerRequestService"]])
], MturkSolveComponent);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "yzWU":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/download/download.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<div class=\"wrapper\">\r\n    <div class=\"page-header header-filter\">\r\n\r\n        <div class=\"container center-container\">\r\n\r\n            <div class=\"content-center brand\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-10 ml-auto col-xl-6 mr-auto\">\r\n                        <div class=\"card\">\r\n                            <div class=\"card-header\">\r\n                                <tabset class=\"nav-tabs-danger\">\r\n                                    <h2>Dataset</h2>\r\n                                    <tab heading=\"Idioms\" (selectTab)=\"onSelectedTab($event)\">\r\n                                        <b>Current dataset version:</b> v1.0 (released in March 2023)<br>\r\n                                        This JSON contains the dataset of idioms and their matching images.<br><br>\r\n                                        <a href=\"https://github.com/irfl-dataset/IRFL/blob/main/assets/dataset/idioms.json\" target=\"_blank\">\r\n                                            <button class=\"btn btn-neutral\"><i class=\"download-icon tim-icons icon-cloud-download-93\"></i>Download </button>\r\n                                        </a><br>\r\n                                        This file is under the CC-BY 4.0 license.<br/>\r\n                                        The keys are idioms and the values are a list of matching images. Each image looks as follow:\r\n                                    </tab>\r\n                                    <tab heading=\"Metaphors\" (selectTab)=\"onSelectedTab($event)\">\r\n                                        <b>Current dataset version:</b> v1.0 (released in March 2023)<br>\r\n                                        This JSON contains the dataset of metaphors and their matching images.<br><br>\r\n                                        <a href=\"https://github.com/irfl-dataset/IRFL/blob/main/assets/dataset/metaphors.json\" target=\"_blank\">\r\n                                            <button class=\"btn btn-neutral\"><i class=\"download-icon tim-icons icon-cloud-download-93\"></i>Download </button>\r\n                                        </a><br>\r\n                                        This file is under the CC-BY 4.0 license.<br/>\r\n                                        The keys are metaphors and the values are a list of matching images. Each image looks as follow:\r\n                                    </tab>\r\n                                    <tab heading=\"Similes\" (selectTab)=\"onSelectedTab($event)\">\r\n                                        <b>Current dataset version:</b> v1.0 (released in March 2023)<br>\r\n                                        This JSON contains the dataset of similes and their matching images.<br><br>\r\n                                        <a href=\"https://github.com/irfl-dataset/IRFL/blob/main/assets/dataset/similes.json\" target=\"_blank\">\r\n                                            <button class=\"btn btn-neutral\"><i class=\"download-icon tim-icons icon-cloud-download-93\"></i>Download </button>\r\n                                        </a><br>\r\n                                        This file is under the CC-BY 4.0 license.<br/>\r\n                                        The keys are similes and the values are a list of matching images. Each image looks as follow:\r\n                                    </tab>\r\n                                    <div class=\"highlight\">\r\n                                        <code [style.color]=\"'black'\">\r\n                                            annotations:       ...<br>\r\n                                            category:       ...<br>\r\n                                            definitions:                                                        ...<br>\r\n                                            img:                                                          ...<br>\r\n                                            literal_candidate:                                                          ...<br>\r\n                                            phrase:                                  ....<br>\r\n                                            query:                                                 ...<br>\r\n                                            rank:                                                   ...<br>\r\n                                            source:                                                                    ...<br>\r\n                                            uuid:                                                                   ...<br>\r\n                                            IRFL_id:                                                                   ...<br>\r\n                                        </code>\r\n                                    </div>\r\n                                    <br>\r\n                                    <b>Note:</b> We do not distribute image files as we do not legally own them. The annotation files contain image URLs.<br>\r\n                                    <b>Usage Restrictions:</b> IRFL should only be used for non-commercial research.<br><br>\r\n                                    <h2>Detection Task</h2>\r\n                                    <div *ngIf=\"selectedTab === 'Idioms'\">\r\n                                        This CSV contains the detection task of idioms.<br><br>\r\n                                        <a href=\"https://github.com/irfl-dataset/IRFL/blob/main/assets/tasks/idiom_understanding_task.csv\" target=\"_blank\">\r\n                                            <button class=\"btn btn-neutral\"><i class=\"download-icon tim-icons icon-cloud-download-93\"></i>Download </button>\r\n                                        </a><br>\r\n                                        This file is under the CC-BY 4.0 license.<br/>\r\n                                    </div>\r\n                                    <div *ngIf=\"selectedTab === 'Metaphors'\">\r\n                                        This CSV contains the detection task of metaphors.<br><br>\r\n                                        <a href=\"https://github.com/irfl-dataset/IRFL/blob/main/assets/tasks/metaphor_understanding_task.csv\" target=\"_blank\">\r\n                                            <button class=\"btn btn-neutral\"><i class=\"download-icon tim-icons icon-cloud-download-93\"></i>Download </button>\r\n                                        </a><br>\r\n                                        This file is under the CC-BY 4.0 license.<br/>\r\n                                    </div>\r\n                                    <div *ngIf=\"selectedTab === 'Similes'\">\r\n                                        This CSV contains the detection task of similes.<br><br>\r\n                                        <a href=\"https://github.com/irfl-dataset/IRFL/blob/main/assets/tasks/simile_understanding_task.csv\" target=\"_blank\">\r\n                                            <button class=\"btn btn-neutral\"><i class=\"download-icon tim-icons icon-cloud-download-93\"></i>Download </button>\r\n                                        </a><br>\r\n                                        This file is under the CC-BY 4.0 license.<br/>\r\n                                    </div>\r\n                                    <div class=\"highlight\" *ngIf=\"selectedTab == 'Idioms'\">\r\n                                        <code [style.color]=\"'black'\">\r\n                                            phrase: ...<br>\r\n                                            query:  ...<br>\r\n                                            distractors:  ...<br>\r\n                                            answer: ...<br>\r\n                                            figurative_type: ...<br>\r\n                                            images_metadata: ...<br>\r\n                                            type: ...<br>\r\n                                            definition: ...<br>\r\n                                        </code>\r\n                                    </div>\r\n                                    <div class=\"highlight\" *ngIf=\"selectedTab != 'Idioms'\">\r\n                                        <code [style.color]=\"'black'\">\r\n                                            phrase: ...<br>\r\n                                            distractors:  ...<br>\r\n                                            answer: ...<br>\r\n                                            figurative_type: ...<br>\r\n                                            images_metadata: ...<br>\r\n                                            type: ...<br>\r\n                                        </code>\r\n                                    </div>\r\n                                    <br>\r\n                                    <b>Note:</b> We do not distribute image files as we do not legally own them. The annotation files contain image URLs.<br>\r\n                                    <b>Usage Restrictions:</b> IRFL should only be used for non-commercial research.<br><br>\r\n                                    <h2>Retrieval Task</h2>\r\n                                    <div *ngIf=\"selectedTab === 'Idioms'\">\r\n                                        This CSV contains the retrieval task of idioms.<br><br>\r\n                                        <a href=\"https://github.com/irfl-dataset/IRFL/blob/main/assets/tasks/idiom_preference_task.csv\" target=\"_blank\">\r\n                                            <button class=\"btn btn-neutral\"><i class=\"download-icon tim-icons icon-cloud-download-93\"></i>Download </button>\r\n                                        </a><br>\r\n                                        This file is under the CC-BY 4.0 license.<br/>\r\n                                    </div>\r\n                                    <div *ngIf=\"selectedTab === 'Metaphors'\">\r\n                                        This CSV contains the retrieval task of metaphors.<br><br>\r\n                                        <a href=\"https://github.com/irfl-dataset/IRFL/blob/main/assets/tasks/metaphor_preference_task.csv\" target=\"_blank\">\r\n                                            <button class=\"btn btn-neutral\"><i class=\"download-icon tim-icons icon-cloud-download-93\"></i>Download </button>\r\n                                        </a><br>\r\n                                        This file is under the CC-BY 4.0 license.<br/>\r\n                                    </div>\r\n                                    <div *ngIf=\"selectedTab === 'Similes'\">\r\n                                        This CSV contains the retrieval task of similes.<br><br>\r\n                                        <a href=\"https://github.com/irfl-dataset/IRFL/blob/main/assets/tasks/simile_preference_task.csv\" target=\"_blank\">\r\n                                            <button class=\"btn btn-neutral\"><i class=\"download-icon tim-icons icon-cloud-download-93\"></i>Download </button>\r\n                                        </a><br>\r\n                                        This file is under the CC-BY 4.0 license.<br/>\r\n                                    </div>\r\n                                    <div class=\"highlight\" *ngIf=\"selectedTab == 'Idioms'\">\r\n                                        <code [style.color]=\"'black'\">\r\n                                            phrase: ...<br>\r\n                                            definition: ...<br>\r\n                                            first_category: ...<br>\r\n                                            second_category: ...<br>\r\n                                            type: ...<br>\r\n                                            figurative_type: ...<br>\r\n                                            images_metadata: ...<br>\r\n                                        </code>\r\n                                    </div>\r\n                                    <div class=\"highlight\" *ngIf=\"selectedTab != 'Idioms'\">\r\n                                        <code [style.color]=\"'black'\">\r\n                                            phrase: ...<br>\r\n                                            first_category: ...<br>\r\n                                            second_category: ...<br>\r\n                                            type: ...<br>\r\n                                            figurative_type: ...<br>\r\n                                            images_metadata: ...<br>\r\n                                        </code>\r\n                                    </div>\r\n                                    <br>\r\n                                    <b>Note:</b> We do not distribute image files as we do not legally own them. The annotation files contain image URLs.<br>\r\n                                    <b>Usage Restrictions:</b> IRFL should only be used for non-commercial research.<br><br>\r\n                                </tabset>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <footer class=\"footer\">\r\n        <div class=\"container\">\r\n            <div class=\"footer-row\">\r\n                <a>Maintained by Lampent</a>\r\n            </div>\r\n        </div>\r\n    </footer>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/*
=========================================================
* BLK Design System Angular - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-angular
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map