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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/animations.ts":
/*!*******************************!*\
  !*** ./src/app/animations.ts ***!
  \*******************************/
/*! exports provided: fadeInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInAnimation", function() { return fadeInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fadeInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
    ])
]);


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./board/board.component */ "./src/app/board/board.component.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/intro/intro.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _intro_intro_component__WEBPACK_IMPORTED_MODULE_3__["IntroComponent"] },
    { path: 'play', component: _board_board_component__WEBPACK_IMPORTED_MODULE_2__["BoardComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-flow: column;\n    text-align: center;\n    height: 100%;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app\">\n  <router-outlet></router-outlet>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/intro/intro.component.ts");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./board/board.component */ "./src/app/board/board.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _intro_intro_component__WEBPACK_IMPORTED_MODULE_4__["IntroComponent"],
                _board_board_component__WEBPACK_IMPORTED_MODULE_5__["BoardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/board/board.component.css":
/*!*******************************************!*\
  !*** ./src/app/board/board.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".board {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-flow: column;\n    width: 100vw;\n    height: 100vh;\n}\n\n.cards {\n    width: 100%;\n    display: flex;\n    justify-content: space-around;\n    align-content: center;\n}\n\n.card {\n    position: relative;\n    bottom: -6rem;\n    max-width: 8rem;\n    width: 8rem;\n    height: 10rem;\n    background: white;\n    color: black;\n    font-weight: 700;\n    border-radius: 5px;\n    padding: 1.5rem 1rem 1rem 1rem;\n    text-align: left;\n    transition: bottom 0.3s;\n    font-size: 0.7rem;\n    margin: 0 -1rem;\n    box-shadow: 0 0 4px 2px #000;\n}\n\n.card:hover, .card:active {\n    bottom: 2rem;\n}\n\n.output {\n    padding: 0 1rem;\n}\n\n/* Since a blank is on every other child, use that */\n\n.madlibs:nth-child(2n) {\n    text-decoration: underline;\n    text-transform: uppercase;\n    font-weight: 700;\n}\n"

/***/ }),

/***/ "./src/app/board/board.component.html":
/*!********************************************!*\
  !*** ./src/app/board/board.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"board\">\n  <h1>Game Start</h1>\n  <h1 *ngIf=\"blankCount > 0\">Blanks remaining {{blankCount}}</h1>\n  <div class=\"output\" *ngIf=\"blankCount === 0\">\n    <span class=\"madlibs\" *ngFor=\"let s of story\">{{s}}</span>\n    <br /><button (click)=\"replay()\">Play again?</button>\n  </div>\n  <div class=\"cards\">\n    <div class=\"cards\" *ngIf=\"blankCount > 0\">\n      <div *ngFor=\"let card of currentCards\" (click)=\"getCard(card)\" class=\"card\">{{card}}</div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/board/board.component.ts":
/*!******************************************!*\
  !*** ./src/app/board/board.component.ts ***!
  \******************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _whitecards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../whitecards */ "./src/app/whitecards.ts");
/* harmony import */ var _madlibs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../madlibs */ "./src/app/madlibs.ts");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animations */ "./src/app/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BoardComponent = /** @class */ (function () {
    function BoardComponent() {
        this.currentStory = _madlibs__WEBPACK_IMPORTED_MODULE_2__["madlibs"][this.randomNum(_madlibs__WEBPACK_IMPORTED_MODULE_2__["madlibs"].length)];
        this.currentCards = [];
        this.selectedCards = []; // The hand if you will
        this.blankCount = 0; // How many blanks will be in the story
        this.counter = 0; // Helps properly assemble the story
        this.story = []; // The assembled story
        this.drawCards();
        this.storyWordCount();
    }
    /**
     * Draw a full hand
     */
    BoardComponent.prototype.drawCards = function () {
        var len = _whitecards__WEBPACK_IMPORTED_MODULE_1__["whitecards"].length;
        for (var i = 0; i < 5; i++) {
            this.currentCards.push(_whitecards__WEBPACK_IMPORTED_MODULE_1__["whitecards"][this.randomNum(len)]);
        }
    };
    /**
     * Draw one card
     */
    BoardComponent.prototype.drawCard = function () {
        var len = _whitecards__WEBPACK_IMPORTED_MODULE_1__["whitecards"].length;
        this.currentCards.push(_whitecards__WEBPACK_IMPORTED_MODULE_1__["whitecards"][this.randomNum(len)]);
    };
    /**
     * Return a random number
     * @param n number
     */
    BoardComponent.prototype.randomNum = function (n) {
        return (Math.floor(Math.random() * n));
    };
    /**
     * Get the card selected to put into the blank bank, while removing that one in the hand
     * @param card string
     */
    BoardComponent.prototype.getCard = function (card) {
        var index = this.currentCards.indexOf(card);
        if (index > -1) {
            this.story.push(this.currentStory[this.counter]); // At part of the story
            this.story.push(this.currentCards[index]); // Append the card within the blanks in the story
            this.currentCards.splice(index, 1); // Remove the card selected from the hand
        }
        this.drawCard(); // Draw a new card
        // Increment and deincrement accordingly
        this.blankCount--;
        this.counter++;
        // There's always that one last part of the array that never gets put into the completed story.
        // Even if it's just a punctuation, add it anways
        if (this.counter === (this.currentStory.length - 1)) {
            this.story.push(this.currentStory[this.counter]);
        }
    };
    /**
     * There's this stubborn issue where if there is a sentence after the last blank, then it will do nothing.
     * This is meant to quick-fix the issue for the time being
     */
    BoardComponent.prototype.addOneMore = function () {
        console.log("HI, I'M MISTER MEESEEKS, LOOK AT ME");
        this.counter++;
        this.story.push(this.currentStory[this.counter]);
    };
    /**
     * Get the number of blanks you can put into the story.
     */
    BoardComponent.prototype.storyWordCount = function () {
        this.blankCount = (this.currentStory.length - 1);
    };
    BoardComponent.prototype.replay = function () {
        window.location.reload();
    };
    BoardComponent.prototype.ngOnInit = function () {
    };
    BoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-board',
            template: __webpack_require__(/*! ./board.component.html */ "./src/app/board/board.component.html"),
            styles: [__webpack_require__(/*! ./board.component.css */ "./src/app/board/board.component.css")],
            animations: [_animations__WEBPACK_IMPORTED_MODULE_3__["fadeInAnimation"]],
            host: { '[@fadeInAnimation]': '' }
        }),
        __metadata("design:paramtypes", [])
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "./src/app/intro/intro.component.css":
/*!*******************************************!*\
  !*** ./src/app/intro/intro.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header div {\n    margin: 1rem;\n}\n\n.header div button {\n    margin: 1rem;\n}"

/***/ }),

/***/ "./src/app/intro/intro.component.html":
/*!********************************************!*\
  !*** ./src/app/intro/intro.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <div>\n    <h1>Mad Libs Against Humanity</h1>\n    <h3>The world's most offensive word game!</h3>\n    <small>v0.1</small>\n  </div>\n  <div>\n    <p>Welcome to Mad Libs Against Humanity!  This combines the silly fill-in-the-blank stories similar to Mad Libs, but instead of nouns and adverbs, you're using the white cards from Cards Against Humanity.</p>\n    <p>Every game, you will be given a random story.  The game will give you 5 random cards from official CAH cards, and how many blanks there are.  Your goal is to guess what you think will fit best...or not.</p>\n    <small>WARNING: Just like Cards Against Humanity, this game is not suitable for work!</small>\n  </div>\n  <div>\n    <p>If you are ready to risk it,</p>\n    <button (click)=\"btnClick()\">Click here to play</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/intro/intro.component.ts":
/*!******************************************!*\
  !*** ./src/app/intro/intro.component.ts ***!
  \******************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations */ "./src/app/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IntroComponent = /** @class */ (function () {
    function IntroComponent(router) {
        this.router = router;
        this.btnClick = function () {
            this.router.navigateByUrl('/play');
        };
    }
    IntroComponent.prototype.ngOnInit = function () {
    };
    IntroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-intro',
            template: __webpack_require__(/*! ./intro.component.html */ "./src/app/intro/intro.component.html"),
            styles: [__webpack_require__(/*! ./intro.component.css */ "./src/app/intro/intro.component.css")],
            animations: [_animations__WEBPACK_IMPORTED_MODULE_2__["fadeInAnimation"]],
            host: { '[@fadeInAnimation]': '' }
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "./src/app/madlibs.ts":
/*!****************************!*\
  !*** ./src/app/madlibs.ts ***!
  \****************************/
/*! exports provided: madlibs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "madlibs", function() { return madlibs; });
/**
 *  How to make a Mad Lib for MLAH.
 *  - When you write, all blanks will be placed within each seperated item.
 *      Ex: I love _____.  It's my favorite _____.
 *      Will look like:
 *      ["I love ", ".  It's my favorite ", "."]
 *      Notice: a space will be required in between each blank.  Otherwise, using the same sentence from above, it could look like:
 *      I loveCHEATING.  It's my favoriteMOVIE TO WATCH WITH FRIENDS
 *  - Do a better job than I did if you contribute.
 * */
var madlibs = [
    ["Since I was a young boy, I've played the ", ". From Soho down to Brighton, I must have ", ".  But I ain't seen nothing like him, in any ", ".  That deaf and dumb blind kid.  Sure plays a mean ", "!"],
    ["Ever since I first saw ", " my whole life changed.  It was the pinnacle moment in my life, like ", " but worse.  It was then when I realized", "...and just like that...everything vanished.  No longer did I have control of ", ", or get to ", ".  My life has changed."],
    ["Indeed they say ignorance is bliss, but ", ".  That is something I've always gone by my whole life.  That was, until ", " was brought into my life, and ", "."],
    ["Want to know something terrifying?  ", "...it's something that still haunts me to this day.  Just before that, ", "."],
    ["Apple has done it again!  It has announced ", ", the worlds first ", ", which will rival ", ".  Watch out world, it...has...COME!"],
    ["War.  War has changed.  ", ", ", ", ", ".  It's an endless series of ", "."],
    ["Need to know a great way to prepare for a vacation?  It's easy!  First, you ", ".  Then afterwards, ", ".  Think you're ready?  Have you made sure you packed your ", "?"],
    ["How to obtain the ", " in Mega Man X.  First, you will need to go to Armored Armadillo's stage.  Then, you need to ", " 3 times.  Once you achieved that, you need to jump just before landing on ", " that leads to the boss.  From there, you will be greeted by ", ".  If you see that, congratulations, you have unlocked the best weapon in the game."],
    ["Ever wondered how ", " is made?  It's an ancient family secret that's been carried from generations to generations.  First things first, you will need a lot of ", ", which will be put into a boiling pot.  I do mean a lot.  Then, after 5 minutes, quickly throw in ", ", ", ", ", ", and ", ".  Does it smell like something's burning?  Good, quickly toss it in a bowl.  You're done."]
];


/***/ }),

/***/ "./src/app/whitecards.ts":
/*!*******************************!*\
  !*** ./src/app/whitecards.ts ***!
  \*******************************/
/*! exports provided: whitecards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whitecards", function() { return whitecards; });
var whitecards = [
    "Coat hanger abortions",
    "Man meat",
    "Autocannibalism",
    "Vigorous jazz hands",
    "Flightless birds",
    "Pictures of boobs",
    "Doing the right thing",
    "The violation of our most basic human rights",
    "Viagra™",
    "Self-loathing",
    "Spectacular abs",
    "A balanced breakfast",
    "Roofies",
    "Concealing a boner",
    "Amputees",
    "The Big Bang",
    "Former President George W Bush",
    "The Rev Dr Martin Luther King, Jr",
    "Smegma",
    "Being marginalized",
    "Cuddling",
    "Laying an egg",
    "The Pope",
    "Aaron Burr",
    "Genital piercings",
    "Fingering",
    "A bleached asshole",
    "Horse meat",
    "Fear itself",
    "Science",
    "Elderly Japanese men",
    "Stranger danger",
    "The terrorists",
    "Praying the gay away",
    "Same-sex ice dancing",
    "Ethnic cleansing",
    "Cheating in the Special Olympics",
    "German dungeon porn",
    "Bingeing and purging",
    "Making a pouty face",
    "William Shatner",
    "Heteronormativity",
    "Nickelback",
    "Tom Cruise",
    "The profoundly handicapped",
    "The placenta",
    "Chainsaws for hands",
    "Arnold Schwarzenegger",
    "An icepick lobotomy",
    "Goblins",
    "Object permanence",
    "Dying",
    "Foreskin",
    "A falcon with a cap on its head",
    "Hormone injections",
    "Dying of dysentery",
    "Sexy pillow fights",
    "The invisible hand",
    "A really cool hat",
    "Sean Penn",
    "Heartwarming orphans",
    "The clitoris",
    "The Three-Fifths compromise",
    "A sad handjob",
    "Men",
    "Historically black colleges",
    "A micropenis",
    "Raptor attacks",
    "Agriculture",
    "Vikings",
    "Pretending to care",
    "The Underground Railroad",
    "My humps",
    "Being a dick to children",
    "Geese",
    "Bling",
    "Sniffing glue",
    "The South",
    "An Oedipus complex",
    "Eating all of the cookies before the AIDS bake-sale",
    "Sexting",
    "YOU MUST CONSTRUCT ADDITIONAL PYLONS",
    "Mutually-assured destruction",
    "Sunshine and rainbows",
    "Count Chocula",
    "Sharing needles",
    "Being rich",
    "Skeletor",
    "A sausage festival",
    "Michael Jackson",
    "Emotions",
    "Farting and walking away",
    "The Chinese gymnastics team",
    "Necrophilia",
    "Spontaneous human combustion",
    "Yeast",
    "Leaving an awkward voicemail",
    "Dick Cheney",
    "White people",
    "Penis envy",
    "Teaching a robot to love",
    "Sperm whales",
    "Scrubbing under the folds",
    "Panda sex",
    "Whipping it out",
    "Catapults",
    "Masturbation",
    "Natural selection",
    "Opposable thumbs",
    "A sassy black woman",
    "AIDS",
    "The KKK",
    "Figgy pudding",
    "Seppuku",
    "Gandhi",
    "Preteens",
    "Toni Morrison's vagina",
    "Five-Dollar Footlongs™",
    "Land mines",
    "A sea of troubles",
    "A zesty breakfast burrito",
    "Christopher Walken",
    "Friction",
    "Balls",
    "Dental dams",
    "A can of whoop-ass",
    "A tiny horse",
    "Waiting 'til marriage",
    "Authentic Mexican cuisine",
    "Genghis Khan",
    "Old-people smell",
    "Feeding Rosie O'Donnell",
    "Pixelated bukkake",
    "Friends with benefits",
    "The token minority",
    "The Tempur-Pedic™ Swedish Sleep System™",
    "A thermonuclear detonation",
    "Take-backsies",
    "The Rapture",
    "A cooler full of organs",
    "Sweet, sweet vengeance",
    "RoboCop",
    "Keanu Reeves",
    "Drinking alone",
    "Giving 110%",
    "Flesh-eating bacteria",
    "The American Dream",
    "Taking off your shirt",
    "Me time",
    "A murder most foul",
    "The inevitable heat death of the universe",
    "The folly of man",
    "That thing that electrocutes your abs",
    "Cards Against Humanity",
    "Fiery poops",
    "Poor people",
    "Edible underpants",
    "Britney Spears at 55",
    "All-you-can-eat shrimp for $499",
    "Pooping back and forth Forever",
    "Fancy Feast™",
    "Jewish fraternities",
    "Being a motherfucking sorcerer",
    "Pulling out",
    "Picking up girls at the abortion clinic",
    "The homosexual agenda",
    "The Holy Bible",
    "Passive-agression",
    "Ronald Reagan",
    "Vehicular manslaughter",
    "Nipple blades",
    "Assless chaps",
    "Full frontal nudity",
    "Hulk Hogan",
    "Daddy issues",
    "The hardworking Mexican",
    "Natalie Portman",
    "Waking up half-naked in a Denny's parking lot",
    "God",
    "Sean Connery",
    "Saxophone solos",
    "Gloryholes",
    "The World of Warcraft",
    "Homeless people",
    "Scalping",
    "Darth Vader",
    "Eating the last known bison",
    "Guys who don't call",
    "Hot Pockets™",
    "A time travel paradox",
    "The milk man",
    "Testicular torsion",
    "Dropping a chandelier on your enemies and riding the rope up",
    "World peace",
    "A salty surprise",
    "Poorly-timed Holocaust jokes",
    "Smallpox blankets",
    "Licking things to claim them as your own",
    "The heart of a child",
    "Robert Downey, Jr",
    "Lockjaw",
    "Eugenics",
    "A good sniff",
    "Friendly fire",
    "The taint; the grundle; the fleshy fun-bridge",
    "Wearing underwear inside-out to avoid doing laundry",
    "Hurricane Katrina",
    "Free samples",
    "Jerking off into a pool of children's tears",
    "A foul mouth",
    "The glass ceiling",
    "Republicans",
    "Explosions",
    "Michelle Obama's arms",
    "Getting really high",
    "Attitude",
    "Sarah Palin",
    "The Übermensch",
    "Altar boys",
    "My soul",
    "My sex life",
    "Pedophiles",
    "72 virgins",
    "Pabst Blue Ribbon",
    "Domino's™ Oreo™ Dessert Pizza",
    "A snapping turtle biting the tip of your penis",
    "The Blood of Christ",
    "Half-assed foreplay",
    "My collection of high-tech sex toys",
    "A middle-aged man on roller skates",
    "Bitches",
    "Bill Nye the Science Guy",
    "Italians",
    "A windmill full of corpses",
    "Adderall™",
    "Crippling debt",
    "A stray pube",
    "Prancing",
    "Passing a kidney stone",
    "A brain tumor",
    "Leprosy",
    "Puppies!",
    "Bees?",
    "Frolicking",
    "Repression",
    "Road head",
    "A bag of magic beans",
    "An asymmetric boob job",
    "Dead parents",
    "Public ridicule",
    "A mating display",
    "A mime having a stroke",
    "Stephen Hawking talking dirty",
    "African children",
    "Mouth herpes",
    "Overcompensation",
    "Riding off into the sunset",
    "Being on fire",
    "Tangled Slinkys",
    "Civilian casualties",
    "Auschwitz",
    "My genitals",
    "Not reciprocating oral sex",
    "Lactation",
    "Being fabulous",
    "Shaquille O'Neal's acting career",
    "My relationship status",
    "Asians who aren't good at math",
    "Alcoholism",
    "Incest",
    "Grave robbing",
    "Hope",
    "8 oz of sweet Mexican black-tar heroin",
    "Kids with ass cancer",
    "Winking at old people",
    "The Jews",
    "Justin Bieber",
    "Doin' it in the butt",
    "A lifetime of sadness",
    "The Hamburglar",
    "Swooping",
    "Classist undertones",
    "New Age music",
    "Not giving a shit about the Third World",
    "The Kool-Aid Man",
    "A hot mess",
    "Tentacle porn",
    "Lumberjack fantasies",
    "The gays",
    "Scientology",
    "Estrogen",
    "GoGurt™",
    "Judge Judy",
    "Dick fingers",
    "Racism",
    "Surprise sex!",
    "Police brutality",
    "Passable transvestites",
    "The Virginia Tech Massacre",
    "When you fart and a little bit comes out",
    "Oompa-Loompas",
    "A fetus",
    "Obesity",
    "Tasteful sideboob",
    "Hot people",
    "BATMAN!!!",
    "Black people",
    "A gassy antelope",
    "Sexual tension",
    "Third base",
    "Racially-biased SAT questions",
    "Porn stars",
    "A Super Soaker™ full of cat pee",
    "Muhammed (Praise Be Unto Him)",
    "Puberty",
    "A disappointing birthday party",
    "An erection that lasts longer than four hours",
    "White privilege",
    "Getting so angry that you pop a boner",
    "Wifely duties",
    "Two midgets shitting into a bucket",
    "Queefing",
    "Wiping her butt",
    "Golden showers",
    "Barack Obama",
    "Nazis",
    "A robust mongoloid",
    "An M Night Shyamalan plot twist",
    "Getting drunk on mouthwash",
    "Lunchables™",
    "Women in yogurt commercials",
    "John Wilkes Booth",
    "Powerful thighs",
    "Mr Clean, right behind you",
    "Multiple stab wounds",
    "Cybernetic enhancements",
    "Serfdom",
    "Kanye West",
    "Women's suffrage",
    "Children on leashes",
    "Harry Potter erotica",
    "The Dance of the Sugar Plum Fairy",
    "Lance Armstrong's missing testicle",
    "Parting the Red Sea",
    "The Amish",
    "Dead babies",
    "Child beauty pageants",
    "AXE Body Spray",
    "Centaurs",
    "Copping a feel",
    "Grandma",
    "Famine",
    "The Trail of Tears",
    "The miracle of childbirth",
    "Finger painting",
    "A monkey smoking a cigar",
    "The Make-A-Wish™ Foundation",
    "Anal beads",
    "The Force",
    "Kamikaze pilots",
    "Dry heaving",
    "Active listening",
    "Ghosts",
    "The Hustle",
    "Peeing a little bit",
    "Another goddamn vampire movie",
    "Shapeshifters",
    "The Care Bear Stare",
    "Hot cheese",
    "A mopey zoo lion",
    "A defective condom",
    "Teenage pregnancy",
    "A Bop It™",
    "Expecting a burp and vomiting on the floor",
    "Horrifying laser hair removal accidents",
    "Boogers",
    "Unfathomable stupidity",
    "Breaking out into song and dance",
    "Soup that is too hot",
    "Morgan Freeman's voice",
    "Getting naked and watching Nickelodeon",
    "MechaHitler",
    "Flying sex snakes",
    "The true meaning of Christmas",
    "My inner demons",
    "Pac-Man uncontrollably guzzling cum",
    "My vagina",
    "A homoerotic volleyball montage",
    "Actually taking candy from a baby",
    "Crystal meth",
    "Exactly what you'd expect",
    "Natural male enhancement",
    "Passive-aggressive Post-it notes",
    "Inappropriate yodeling",
    "Lady Gaga",
    "The Little Engine That Could",
    "Vigilante justice",
    "A death ray",
    "Poor life choices",
    "A gentle caress of the inner thigh",
    "Embryonic stem cells",
    "Nicolas Cage",
    "Firing a rifle into the air while balls deep in a squealing hog",
    "Switching to Geico™",
    "The chronic",
    "Erectile dysfunction",
    "Home video of Oprah sobbing into a Lean Cuisine™",
    "A bucket of fish heads",
    "50,000 volts straight to the nipples",
    "Being fat and stupid",
    "Hospice care",
    "A pyramid of severed heads",
    "Getting married, having a few kids, buying some stuff, retiring to Florida, and dying",
    "A subscription to Men's Fitness",
    "Crucifixion",
    "A micropig wearing a tiny raincoat and booties",
    "Some god-damn peace and quiet",
    "Used panties",
    "A tribe of warrior women",
    "The penny whistle solo from \"My Heart Will Go On\"",
    "An oversized lollipop",
    "Helplessly giggling at the mention of Hutus and Tutsis",
    "Not wearing pants",
    "Consensual sex",
    "Her Majesty, Queen Elizabeth II",
    "Funky fresh rhymes",
    "The art of seduction",
    "The Devil himself",
    "Advice from a wise, old black man",
    "Destroying the evidence",
    "The light of a billion suns",
    "Wet dreams",
    "Synergistic management solutions",
    "Growing a pair",
    "Silence",
    "An M16 assault rifle",
    "Poopy diapers",
    "A live studio audience",
    "The Great Depression",
    "A spastic nerd",
    "Rush Limbaugh's soft, shitty body",
    "Tickling Sean Hannity, even after he tells you to stop",
    "Stalin",
    "Brown people",
    "Rehab",
    "Capturing Newt Gingrich and forcing him to dance in a monkey suit",
    "Battlefield amputations",
    "An uppercut",
    "Shiny objects",
    "An ugly face",
    "Menstrual rage",
    "A bitch slap",
    "One trillion dollars",
    "Chunks of dead prostitute",
    "The entire Mormon Tabernacle Choir",
    "The female orgasm",
    "Extremely tight pants",
    "The Boy Scouts of America",
    "Stormtroopers",
    "Throwing a virgin into a volcano",
    "Getting in her pants, politely",
    "Gladiatorial combat",
    "Good grammar",
    "Hipsters",
    "Gandalf",
    "Genetically engineered super-soldiers",
    "George Clooney's musk",
    "Getting abducted by Peter Pan",
    "Eating an albino",
    "Enormous Scandinavian women",
    "Fabricating statistics",
    "Finding a skeleton",
    "Suicidal thoughts",
    "Dancing with a broom",
    "Deflowering the princess",
    "Dorito breath",
    "One thousand Slim Jims",
    "My machete",
    "Overpowering your father",
    "Ominous background music",
    "Media coverage",
    "Making the penises kiss",
    "Moral ambiguity",
    "Medieval Times™ Dinner & Tournament",
    "Mad hacky-sack skills",
    "Just the tip",
    "Literally eating shit",
    "Leveling up",
    "Insatiable bloodlust",
    "Historical revisionism",
    "Jean-Claude Van Damme",
    "Jafar",
    "The boners of the elderly",
    "The economy",
    "Statistically validated stereotypes",
    "Sudden Poop Explosion Disease",
    "Slow motion",
    "Space muffins",
    "Sexual humiliation",
    "Sexy Siamese twins",
    "Santa Claus",
    "Scrotum tickling",
    "Ripping into a man's chest and pulling out his still-beating heart",
    "Ryan Gosling riding in on a white horse",
    "Quivering jowls",
    "Revenge fucking",
    "Pistol-whipping a hostage",
    "Quiche",
    "Zeus's sexual appetites",
    "Words, words, words",
    "Tripping balls",
    "Being a busy adult with many important things to do",
    "The four arms of Vishnu",
    "The shambling corpse of Larry King",
    "The hiccups",
    "The harsh light of day",
    "The Gulags",
    "The Fanta™ girls",
    "A big black dick",
    "A beached whale",
    "A low standard of living",
    "A nuanced critique",
    "A bloody pacifier",
    "A crappy little hand",
    "Shaft",
    "Being a dinosaur",
    "Beating your wives",
    "Neil Patrick Harris",
    "Coughing into a vagina",
    "Carnies",
    "Nubile slave boys",
    "Bosnian chicken farmers",
    "A web of lies",
    "A rival dojo",
    "A passionate Latino lover",
    "Panty raids",
    "Appreciative snapping",
    "Apologizing",
    "Clams",
    "A woman scorned",
    "Being awesome at sex",
    "Spring break!",
    "Another shot of morphine",
    "Dining with cardboard cutouts of the cast of \"Friends\"",
    "A soulful rendition of \"Ol' Man River\"",
    "Making a friend",
    "A sweaty, panting leather daddy",
    "Intimacy problems",
    "The new Radiohead album",
    "Pretty Pretty Princess Dress-Up Board Game™",
    "A man in yoga pants with a ponytail and feather earrings",
    "An army of skeletons",
    "A squadron of moles wearing aviator goggles",
    "Beefin' over turf",
    "The Google",
    "Bullshit",
    "A sweet spaceship",
    "A 55-gallon drum of lube",
    "Special musical guest, Cher",
    "The human body",
    "Mild autism",
    "Nunchuck moves",
    "Whipping a disobedient slave",
    "An ether-soaked rag",
    "Oncoming traffic",
    "A dollop of sour cream",
    "A slightly shittier parallel universe",
    "My first kill",
    "Boris the Soviet Love Hammer",
    "The grey nutrient broth that sustains Mitt Romney",
    "Tiny nipples",
    "Power",
    "Death by Steven Seagal",
    "A Burmese tiger pit",
    "Basic human decency",
    "Grandpa's ashes",
    "One Ring to rule them all",
    "The day the birds attacked",
    "Fetal alcohol syndrome",
    "Graphic violence, adult language, and some sexual content",
    "A bigger, blacker dick",
    "The mere concept of Applebee's™",
    "A sad fat dragon with no friends",
    "A piñata full of scorpions",
    "Existing",
    "Hillary Clinton's death stare",
    "Catastrophic urethral trauma",
    "Double penetration",
    "Daddy's belt",
    "Swiftly achieving orgasm",
    "Mooing",
    "Rising from the grave",
    "Subduing a grizzly bear and making her your wife",
    "Some really fucked-up shit",
    "Weapons-grade plutonium",
    "All of this blood",
    "Scrotal frostbite",
    "Taking a man's eyes and balls out and putting his eyes where his balls go and then his balls in the eye holes",
    "The mixing of the races",
    "Pumping out a baby every nine months",
    "Tongue",
    "Loki, the trickster god",
    "Whining like a little bitch",
    "Wearing an octopus for a hat",
    "An unhinged ferris wheel rolling toward the sea",
    "Finding Waldo",
    "Upgrading homeless people to mobile hotspots",
    "A magic hippie love cloud",
    "Fuck Mountain",
    "Living in a trashcan",
    "The corporations",
    "Getting hilariously gang-banged by the Blue Man Group",
    "Jeff Goldblum",
    "Survivor's guilt",
    "Me",
    "All my friends dying",
    "Shutting the fuck up",
    "An ass disaster",
    "Some kind of bird-man",
    "The entire Internet",
    "Going around punching people",
    "A boo-boo",
    "Indescribable loneliness",
    "Having sex on top of a pizza",
    "Chugging a lava lamp",
    "Warm, velvety muppet sex",
    "Running naked through a mall, pissing and shitting everywhere",
    "Nothing",
    "Samuel L Jackson",
    "Self-flagellation",
    "The systematic destruction of an entire people and their way of life",
    "The Quesadilla Explosion Salad™ from Chili's™",
    "Reverse cowgirl",
    "Vietnam flashbacks",
    "Actually getting shot, for real",
    "Not having sex",
    "Cock",
    "Dying alone and in pain",
    "A cop who is also a dog",
    "The way white people is",
    "Gay aliens",
    "The primal, ball-slapping sex your parents are having right now",
    "A cat video so cute that your eyes roll back and your spine slides out of your anus",
    "A lamprey swimming up the toilet and latching onto your taint",
    "Slapping a racist old lady",
    "A black male in his early 20s, last seen wearing a hoodie",
    "Jumping out at people",
    "Three months in the hole",
    "Blood farts",
    "The Land of Chocolate",
    "A botched circumcision",
    "My manservant, Claude",
    "Vomiting mid-blowjob",
    "Letting everyone down",
    "Having shotguns for legs",
    "Bill Clinton, naked on a bearskin rug with a saxophone",
    "Mufasa's death scene",
    "The Harlem Globetrotters",
    "Demonic possession",
    "Fisting",
    "The thin veneer of situational causality that underlies porn",
    "Girls that always be textin'",
    "Blowing some dudes in an alley",
    "A spontaneous conga line",
    "A vagina that leads to another dimension",
    "Disco fever",
    "Getting your dick stuck in a Chinese finger trap with another dick",
    "Drinking ten 5-hour ENERGYs™ to get fifty continuous hours of energy",
    "Sneezing, farting, and coming at the same time",
    "Some douche with an acoustic guitar",
    "Spending lots of money",
    "Putting an entire peanut butter and jelly sandwich into the VCR",
    "An unstoppable wave of fire ants",
    "A greased-up Matthew McConaughey",
    "Flying robots that kill people",
    "Unlimited soup, salad, and breadsticks",
    "Crying into the pages of Sylvia Plath",
    "The moist, demanding chasm of his mouth",
    "Filling every orifice with butterscotch pudding",
    "An all-midget production of Shakespeare's Richard III",
    "Screaming like a maniac",
    "Not contributing to society in any meaningful way",
    "A pile of squirming bodies",
    "Buying the right pants to be cool",
    "Roland the Farter, flatulist to the king",
    "That ass",
    "A surprising amount of hair",
    "Eating Tom Selleck's mustache to gain his powers",
    "Velcro™",
    "A PowerPoint presentation",
    "Crazy opium eyes",
    "10 Incredible Facts About the Anus",
    "An interracial handshake",
    "Moderate-to-severe joint pain",
    "Finally finishing off the Indians",
    "Sugar madness",
    "Actual mutants with medical conditions and no superpowers",
    "The secret formula for ultimate female satisfaction",
    "The complex geopolitical quagmire that is the Middle East",
    "Fucking a corpse back to life",
    "Neil Diamond's Greatest Hits",
    "Calculating every mannerism so as not to suggest homosexuality",
    "Whatever a McRib™ is made of",
    "No clothes on, penis in vagina",
    "All the single ladies",
    "Whispering all sexy",
    "How awesome I am",
    "Ass to mouth",
    "Smoking crack, for instance",
    "Falling into the toilet",
    "A dance move that's just sex",
    "The size of my penis",
    "Some sort of Asian",
    "A hopeless amount of spiders",
    "Party Mexicans",
    "Drinking responsibly",
    "The safe word",
    "Angelheaded hipsters burning for the ancient heavenly connection to the starry dynamo in the machinery of night",
    "Bouncing up and down",
    "Jizz",
    "Ambiguous sarcasm",
    "A shiny rock that proves I love you",
    "Dem titties",
    "My worthless son",
    "Exploding pigeons",
    "A Ugandan warlord",
    "My sex dungeon",
    "A kiss on the lips",
    "Child Protective Services",
    "A Native American who solves crimes by going into the spirit world",
    "Doo-doo",
    "The peaceful and nonthreatening rise of China",
    "Sports",
    "A fart",
    "Unquestioning obedience",
    "Three consecutive seconds of happiness",
    "Grammar nazis who are also regular Nazis",
    "Snorting coke off a clown's boner",
    "Africa",
    "Depression",
    "A horse with no legs",
    "The euphoric rush of strangling a drifter",
    "Khakis",
    "Interspecies marriage",
    "A gender identity that can only be conveyed through slam poetry",
    "Almost giving money to a homeless person",
    "Stuff a child's face with Fun Dip™ until he starts having fun",
    "What Jesus would do",
    "A for-real lizard that spits blood from its eyes",
    "Blackula",
    "The tiniest shred of evidence that God is real",
    "My dad's dumb fucking face",
    "Prince Ali, fabulous he, Ali Ababwa",
    "A manhole",
    "A sex goblin with a carnival penis",
    "A bunch of idiots playing a card game instead of interacting like normal humans",
    "A sex comet from Neptune that plunges the Earth into eternal sexiness",
    "Sharks with legs",
    "Injecting speed into one arm and horse tranquilizer into the other",
    "Lots and lots of abortions",
    "Seeing things from Hitler's perspective",
    "Too much cocaine",
    "Doing the right stuff to her nipples",
    "Giant sperm from outer space",
    "Oil!",
    "Ennui",
    "A powered exoskeleton",
    "A disappointing salad",
    "Mom's new boyfriend",
    "Unrelenting genital punishment",
    "Denzel",
    "The swim team, all at once",
    "The eight gay warlocks who dictate the rules of fashion",
    "Being nine years old",
    "The unbelievable world of mushrooms",
    "The Abercrombie & Fitch lifestyle",
    "Vegetarian options",
    "My first period",
    "Having been dead for a while",
    "Backwards knees",
    "Being paralyzed from the neck down",
    "Seeing my village burned and my family slaughtered before my eyes",
    "A zero-risk way to make $2,000 from home",
    "A crazy little thing called love",
    "Ancient Athenian boy-fucking",
    "Out-of-this-world bazongas",
    "The ghost of Marlon Brando",
    "The basic suffering that pervades all of existence",
    "Being worshipped as the one true God",
    "Figuring out how to have sex with a dolphin",
    "All these decorative pillows",
    "A mouthful of potato salad",
    "Russian super-tuberculosis",
    "A reason not to commit suicide",
    "Going to a high school reunion on ketamine",
    "The passage of time",
    "Child support payments",
    "Changing a person's mind with logic and facts",
    "My boyfriend's stupid penis",
    "The tiger that killed my father",
    "Genghis Khan's DNA",
    "Boring vaginal sex",
    "40 acres and a mule",
    "A whole new kind of porn",
    "Slowly easing down onto a cucumber",
    "Wearing glasses and sounding smart",
    "AIDS monkeys",
    "A team of lawyers",
    "Getting drive-by shot",
    "Not believing in giraffes",
    "Anal fissures like you wouldn't believe",
    "A giant powdery manbaby",
    "Cutting off a flamingo's legs with garden shears",
    "PF Chang himself",
    "An uninterrupted history of imperialism and exploitation",
    "A one-way ticket to Gary, Indiana",
    "Daddy's credit card",
    "September 11th, 2001",
    "An unforgettable quinceañera",
    "Deez nuts",
    "Social justice warriors with flamethrowers of compassion",
    "Some shit-hot guitar licks",
    "Butt stuff",
    "Blackface",
    "Blowjobs for everyone",
    "Getting eaten alive by Guy Fieri",
    "Western standards of beauty",
    "Ejaculating live bees and the bees are angry",
    "My dead son's baseball glove",
    "Getting caught by the police and going to jail",
    "A face full of horse cum",
    "Free ice cream, yo",
    "The white half of Barack Obama",
    "The black half of Barack Obama",
    "An inability to form meaningful relationships",
    "A bass drop so huge it tears the starry vault asunder to reveal the face of God",
    "Growing up chained to a radiator in perpetual darkness",
    "Shitting all over the floor like a bad, bad girl",
    "A buttload of candy",
    "Sucking all the milk out of a yak",
    "Bullets",
    "A man who is so cool that he rides on a motorcycle",
    "Sudden penis loss",
    "Getting all offended",
    "Crying and shitting and eating spaghetti",
    "One unforgettable night of passion",
    "Being popular and good at sports",
    "Filling a man's anus with concrete",
    "Two whales fucking the shit out of eachother",
    "Cool, relateable cancer teens",
    "The amount of gay I am",
    "A possible Muslim",
    "Unsheathing my massive horse cock",
    "A bowl of gourds",
    "The male gaze",
    "The power of the Dark Side",
    "Ripping a dog in half",
    "A constant need for validation",
    "Meaningless sex",
    "Such a big boy",
    "Throwing stones at a man until he dies",
    "Cancer",
    "Like a million alligators",
    "Eating together like a god damn family for once",
    "Cute boys",
    "Pussy",
    "Being a terrible mother",
    "Never having sex again",
    "A pizza guy who fucked up",
    "A whole lotta woman",
    "The all-new Nissan Pathfinder with 09% APR financing!",
    "A peyote-fueled vision quest",
    "Kale",
    "Breastfeeding a ten year old",
    "Crippling social anxiety",
    "Immortality cream",
    "Texas",
    "Teaching a girl how to handjob the penis",
    "A turd",
    "Shapes and colors",
    "Whatever you wish, mother",
    "The haunting stare of an Iraqi child",
    "Robots who just want to party",
    "A self-microwaving burrito",
    "Forgetting grandma's first name",
    "Our new Buffalo Chicken Dippers™!",
    "Treasures beyond your wildest dreams",
    "Getting shot out of a cannon",
    "The sweet song of sword against and the braying of mighty war beasts",
    "Walking into a glass door",
    "The color \"puce\"",
    "Every ounce of charisma left in Mick Jagger's tired body",
    "The eighth graders",
    "Setting my balls on fire and cartwheeling to Ohio",
    "The dentist",
    "Gwyneth Paltrow's opinions",
    "Turning the rivers red with the blood of infidels",
    "Rabies",
    "Important news about Taylor Swift",
    "Ejaculating inside another man's wife",
    "Owls, the perfect predator",
    "Being John Malkovich",
    "Bathing in moonsblood and dancing around the ancient oak",
    "An oppressed people with a vibrant culture",
    "An overwhelming variety of cheeses",
    "Reading the entire End-User License Agreement",
    "Morpheus",
    "Peeing into a girl's butt to make a baby",
    "Generally having no idea of what's going on",
    "No longer finding any Cards Against Humanity card funny",
    "10 football players with erections barreling towards you at full speed",
    "10,000 shrieking teenage girls",
    "A big ol' plate of fettuccine alfredo",
    "A big, beautiful mouth packed to the brim with sparkling teeth",
    "A black friend",
    "A burrito that's just sour cream",
    "A cheerfulness that belies a deep-seated self-loathing",
    "A cold and indifferent universe",
    "A creature made of penises that must constantly arouse itself to survive",
    "A creepy child singing a nursery rhyme",
    "A dolphin that learns to talk and becomes the Dead of Harvard Law School",
    "A duffel bag full of lizards",
    "A finger up the butt",
    "A genetic predisposition for alcoholism",
    "A gun that shoots cobras",
    "A hug",
    "A long business meeting with no obvious purpose",
    "A man in a suit with perfect hair who tells you beautiful lies",
    "A man with the head of a goat and the body of a goat",
    "A massive collection of child pornography",
    "A medium horchata",
    "A negative body image that is totally justified",
    "A slowly encroaching circle of wolves",
    "A strong horse and enough rations for thirty days",
    "A terrified fat child who won't come out of the bushes",
    "A tiny fireman who puts out tiny fires",
    "A weird guy who says weird stuff and weirds me out",
    "A woman's right to choose",
    "A woman's perspective",
    "Aborting the shit out of a fetus",
    "Albert Einstein but if he had a huge muscles and a rhinoceros cock",
    "All these people I've killed",
    "An arrangement wherein I give a person money they have sex with me",
    "An empowered woman",
    "An incurable homosexual",
    "An old dog full of tumors",
    "An older man",
    "An X-Man whose power is that he has sex with dogs and children",
    "Anal",
    "Antidepressants",
    "Art",
    "Assassinating the president",
    "Awesome pictures of planets and stuff",
    "Bad emotions I don't want",
    "Becoming the President of the United States",
    "Being sexually attracted to children",
    "Being turned into sausages",
    "Beyoncé",
    "Big, smart money boys tap-tapping on their keyboards",
    "Blossoming into a beautiful young woman",
    "Breastfeeding in public like a radiant earth goddess",
    "Brunch",
    "Catching a live salmon in your mouth",
    "Child labor",
    "China",
    "Chipotle",
    "Chris Hemsworth",
    "Comprehensive immigration reform",
    "Condoleezza Rice",
    "Consensual, nonreproductive incest",
    "Content",
    "Crazy anal orgasms",
    "Creamy slices of real, California avocado",
    "Critical thinking",
    "Crushing the patriarchy",
    "Daddy going away forever",
    "Defeating a gorilla in single combat",
    "Denying the Holocaust",
    "Dis bitch",
    "Discovering that what I really want in life is to kill people and have sex with their corpses",
    "Doing a somersault and barfing",
    "Dominating a man by peeing on his eldest son",
    "Doritos and a Fruit Roll-Up",
    "Dropping dead in a Sbarro's bathroom and not being found for 72 hours",
    "Dumpster juice",
    "Eating ass",
    "Eating people",
    "Eating too many Cinnabons and then vomiting and then eating the vomit",
    "Ejaculating at the apex of a cartwheel",
    "Esmeralda, my most beautiful daughter",
    "Eternal screaming madness",
    "Every man's ultimate fantasy: a perfectly cylindrical vagina",
    "Everything",
    "Exploring each other's buttholes",
    "Facilitating dialogue and deconstructing binaries",
    "Falling into a pit of waffles",
    "Farting a huge shit out of my pussy",
    "Farting all over my face with your tight little asshole",
    "Feeling the emotion of anger",
    "Feminism",
    "Film roles for actresses over 40",
    "Finding a nice elevator to poop in",
    "Forty-five minutes of finger blasting",
    "Founding a major world religion",
    "Fucking me good and taking me to Red Lobster™",
    "Fucking my therapist",
    "Gary",
    "Gay thoughts",
    "Gayle from HR",
    "Gazpacho",
    "Getting aborted",
    "Getting blasted in the face by a t-shirt cannon",
    "Getting eaten out by a dog",
    "Getting high with mom",
    "Getting killed and dragged up a tree by a leopard",
    "Getting laid like all the time",
    "Getting naked too soon",
    "Getting pegged",
    "Getting the Dorito crumbs out of my purse",
    "Getting this party started!",
    "Getting trapped in a conversation about Ayn Rand",
    "Going around pulling people's tampons out",
    "Going to bed at a reasonable hour",
    "Gregor, my largest son",
    "Grunting for ten minutes and then peeing sand",
    "Guns",
    "Happy daddies with happy sandals",
    "Hating Jews",
    "Having a vagina",
    "Having an awesome time drinking and driving",
    "Having sex with a beautiful person",
    "Having sex with a man and then eating his head",
    "Having sex with your mom",
    "Holding the proper political beliefs of my time to attract a mate",
    "Homework",
    "Hot lettuce",
    "How good lead paint taste",
    "How great my ass looks in these jeans",
    "How sad it will be when Morgan Freeman dies",
    "How strange it is to be anything at all",
    "Huge big balls full of jizz",
    "Informing you that I am a registered sex offender",
    "ISIS",
    "It being too late to stop having sex with a horse",
    "Jason, the teen mayor",
    "Jazz",
    "Just now finding out about the Armenian Genocide",
    "Late-stage dementia",
    "Libertarians",
    "Loud, scary thunder",
    "Making out and stuff",
    "Math",
    "Meatloaf, the food",
    "Meatloaf, the man",
    "Menopause",
    "Mental illness",
    "Microaggressions",
    "Misogyny",
    "Mixing M&Ms and Skittles like some kind of psychopath",
    "Mommy and daddy fighting all the time",
    "Moon people",
    "Muchin' puss",
    "My brother's hot friends",
    "My dog dying",
    "My huge penis and substantial fortune",
    "Objectifying women",
    "One of them big-city Jew lawyers",
    "One of those \"blow jobs\" I've been hearing so much about",
    "Onions",
    "Opening your mouth to talk and a big penis fops out",
    "Our baby",
    "Out-of-control teenage blowjob parties",
    "Overthrowing the democratically-elected government of Chile",
    "Participating",
    "Period poops",
    "Picking up a glass of water and taking a sip and being the president",
    "Playing my asshole like a trumpet",
    "Plowing that ass like a New England corn farmer",
    "Political correctness",
    "Pooping in a leotard and hoping no one notices",
    "Pooping in the potty",
    "Prematurely ejaculating like a total loser",
    "Pretending to be one of the guys but actually being the spider god",
    "Putting more black people in jail",
    "Quacking like a duck in lieu of a cogent argument",
    "Quinoa",
    "Raising three kids on minimum wage",
    "Reaching an age where barbecue chips are better than sex",
    "Regurgitating a half-digested sparrow",
    "Restoring Germany to its former glory",
    "Rock-hard tits and a huge vagina",
    "Rolling so hard",
    "Rubbing my bush all over your bald head",
    "Salsa Night at Dave's Cantina",
    "Scissoring, if that's a thing",
    "Seizing control of the means of production",
    "Self-identifying as a DJ",
    "Showing all the boys my pussy",
    "Slamming a dunk",
    "Smashing my balls at the moment of climax",
    "Some of that good dick",
    "Some real spicy shrimps",
    "Starting a shitty podcast",
    "Straight blazin' 24\/7",
    "Sucking each other's penises for hours on end",
    "Sudden and unwanted slam poetry",
    "Swearing praise upon the Sultan's hideous daughters",
    "Systems and policies designed to preserve centuries-old power structures",
    "Tables",
    "Taking the form of a falcon",
    "Tender chunks of all-white-meat chicken",
    "That bitch, Stacy",
    "The amount of baby carrots I can fit up my ass",
    "The best, deepest quotes from The Dark Knight",
    "The body of a 46-year-old man",
    "The bond between a woman and her horse",
    "The chicken from Popeyes™",
    "The clown that followed me home from the grocery store",
    "The fear and hatred in men's hearts",
    "The feeling of going to McDonald's as a 6-year-old",
    "The flaming wreckage of the International Space Station",
    "The full blown marginalization of ugly people",
    "The full force of the American military",
    "The government",
    "The graceful path of an autumn leaf as it falls to its earthen cradle",
    "The hottest MILF in Dallas",
    "The LGBT community",
    "The lived experience of African Americans",
    "The mysterious fog rolling into town",
    "The ol' penis-in-the-popcorn surprise",
    "The Rwandan Genocide",
    "The secret to truly resilient hair",
    "The sweet, forbidden meat of the monkey",
    "The wind",
    "Thinking about what eating even is",
    "Three hours of nonstop penetration",
    "Tiny, rancid girl farts",
    "Trees",
    "Trevor, the world's greatest boyfriend",
    "Turning 32",
    "Twenty bucks",
    "Twenty cheerleaders laughing at your tiny penis",
    "Twisting my cock and balls into a balloon poodle",
    "Two beautiful pig sisters",
    "Two shitty kids and a garbage husband",
    "Waking up inside of a tornado",
    "Watching a hot person eat",
    "Watching you die",
    "Water",
    "When the big truck goes \"Toot! Toot!\"",
    "Who really did 9\/11",
    "Whomsoever let the dogs out",
    "Whooping your ass at Mario Kart",
    "Working so hard to have muscles and then having them",
    "You",
    "Several Michael Keatons",
    "A bus that will explode if it goes under 50 miles per hour",
    "Sucking the President's dick",
    "Sunny D! Alright!",
    "A mulatto, an albino, a mosquito, and my libido",
    "Log™",
    "Jerking off to a 10-second RealMedia clip",
    "The Y2K bug",
    "Deregulating the mortgage market",
    "Stabbing the shit out of a Capri Sun",
    "Wearing Nicolas Cage's face",
    "Freeing Willy",
    "Kurt Cobain's death",
    "The Great Cornholio",
    "Liking big butts and not being able to lie about it",
    "Yelling \"girl power!\" and doing a high kick",
    "Pure Moods, Vol 1",
    "Pizza in the morning, pizza in the evening, pizza at supper time",
    "Pamela Anderson's boobs running in slow motion",
    "Getting caught up in the CROSSFIRE™",
    "Angels interfering in an otherwise fair baseball game",
    "Cool 90s up-in-the-front hair",
    "Patti Mayonnaise",
    "The biggest, blackest dick",
    "A box within a box",
    "A boxing match with a giant box",
    "A box",
    "Pandora's vagina",
    "Former President George W Box",
    "Being a motherfucking box",
    "A falcon with a box on its head",
    "Two midgets shitting into a box",
    "A box without hinges, key, or lid, yet golden treasure inside is hid",
    "The J15 Patriot Assault Box",
    "An alternate universe in which boxes store things inside of people",
    "A box that is conscious and wishes it weren't a box",
    "Something that looks like a box but turns out to be a crate",
    "A man-shaped box",
    "A box-shaped man",
    "Boxing up my feelings",
    "A world without boxes",
    "The Boxcar Children",
    "An outbreak of smallbox",
    "A box of biscuits, a box of mixed biscuits, and a biscuit mixer",
    "A CGI dragon",
    "A dwarf who won't leave you alone until you compare penis sizes",
    "A gay sorcerer who turns everyone gay",
    "A ghoul",
    "A Hitachi Magic Wand",
    "A magical kingdom with dragons and elves and no black people",
    "A mysterious, floating orb",
    "A weed elemental who gets everyone high",
    "Accidentally conjuring a legless horse that can't stop ejaculating",
    "Bathing naked in a moonlit grove",
    "Dinosaurs who wear armor and you ride them and they kick ass",
    "Eternal darkness",
    "Freaky, pan-dimensional sex with a demigod",
    "Gender equality",
    "Going on an epic adventure and learning a valuable lesson about friendship",
    "Handcuffing a wizard to a radiator and dousing him with kerosene",
    "Hodor",
    "How hot Orlando Bloom was in Lord of the Rings",
    "Kneeing a wizard in the balls",
    "Make-believe stories for autistic white men,",
    "Reading The Hobbit under the covers while mom and dad scream at each other downstairs",
    "Shitting in a wizard's spell book and jizzing in his hat",
    "Shooting a wizard with a gun",
    "The all-seeing Eye of Sauron",
    "The card game Neil Gaiman wrote: \"Three elves at a time\"",
    "True love's kiss",
    "A sobering quantity of chili cheese fries",
    "Going vegetarian and feeling so great all the time",
    "Kale farts",
    "Licking the cake batter off of grandma's fingers",
    "Real cheese flavor",
    "Swishing the wine around and sniffing it like a big fancy man",
    "The Dial-A-Slice Apple Divider from Williams-Sonoma",
    "What to do with all of this chocolate on my penis",
    "A belly full of hard-boiled eggs",
    "A joyless vegan patty",
    "A table for one at The Cheesecake Factory",
    "Being emotionally and physically dominated by Gordon Ramsay",
    "Kevin Bacon Bits",
    "Not knowing what to believe anymore about butter",
    "Soup that's better than pussy",
    "Sucking down thousands of pounds of krill every day",
    "A Mexican child trapped inside of a burrito",
    "Clamping down on a gazelle's jugular and tasting its warm life waters",
    "Committing suicide at the Old Country Buffet",
    "Father's forbidden chocolates",
    "Jizz Twinkies",
    "The Hellman's Mayonnaise Corporation",
    "The hot dog I put in my vagina ten days ago",
    "The inaudible screams of carrots",
    "A supermassive black hole",
    "Reconciling quantum theory with general relativity",
    "Electroejaculating a capuchin monkey",
    "Insufficient serotonin",
    "Evolving a labyrinthine vagina",
    "Getting really worried about global warming for a few seconds",
    "Infinity",
    "Oxytocin release via manual stimulation of the nipples",
    "Uranus",
    "Being knowledgeable in a narrow domain that nobody understands or cares about",
    "Achieving reproductive success",
    "Slowly evaporating",
    "The quiet majesty of the sea turtle",
    "A 07 waist-to-hip ratio",
    "Fun and interesting facts about rocks",
    "Photosynthesis",
    "Developing secondary sex characteristics",
    "Failing the Turing test",
    "Explosive decompression",
    "Driving into a tornado to learn about tornadoes",
    "David Attenborough watching us mate",
    "37 billion years of evolution",
    "The Sun engulfing the Earth",
    "A complete inability to understand anyone else's perspective",
    "A fun, sexy time at the nude beach",
    "A man from Craigslist",
    "A night of Taco Bell and anal sex",
    "A respectful discussion of race and gender on the Internet",
    "Cat massage",
    "Destroying Dick Cheney's last horcrux",
    "Game of Thrones spoilers",
    "Getting teabagged by a fifth grader in Call of Duty",
    "Goats screaming like people",
    "Googling",
    "Internet porn analysis paralysis",
    "Matching with Mom on Tinder",
    "My browser history",
    "My privileged white penis",
    "Pretending to be black",
    "Smash Mouth",
    "Taking a shit while running at full speed",
    "That thing on the Internet everyone's talking about",
    "Three years of semen in a shoebox",
    "YouTube comments",
    "The Bernie Sanders revolution",
    "Letting Bernie Sanders rest his world-weary head on your lap",
    "A beautiful, ever-expanding circle of inclusivity that will never include Republicans",
    "Black lives mattering",
    "Donald Trump holding his nose while he eats pussy",
    "The fact that Hillary Clinton is a woman",
    "Kicking the middle class in the balls with a regressive tax code",
    "Keeping the government out of my vagina",
    "The systematic disenfranchisement of black voters",
    "Increasing economic and political polarization",
    "Eating the president's pussy",
    "Actually voting for Donald Trump to be President of the actual United States",
    "A liberal bias",
    "Hating Hillary Clinton",
    "Growing up and becoming a Republican",
    "Courageously going ahead with that racist comment",
    "Dispelling this fiction that Barack Obama doesn't know what he's doing",
    "Jeb!",
    "The good, hardworking people of Dubuque, Iowa",
    "Conservative talking points",
    "Shouting the loudest",
    "Sound of fiscal policy",
    "Full-on socialism",
    "A legitimate reason to commit suicide",
    "A back-alley abortion from a Mexican cyborg doctor",
    "Whipping lower-class white men into a xenophobic frenzy",
    "Rage",
    "Trying to remember what music was",
    "Roaming through a wasteland of windblown trash and deserted highways",
    "Bringing millions of dangerous low-paying manufacturing jobs back to America",
    "A gnawing sense of dread",
    "Drinking urine to survive",
    "Nuclear winter",
    "President Donald Trump",
    "Casual dismissiveness",
    "Extra rations for my little girl",
    "World Wars 3 through 5",
    "Finding out that democracy might not be such a great idea",
    "Mild amusement",
    "Burying my only son",
    "The purging of the disloyal",
    "Trying to wake up from this nightmare",
    "A father and son fighting each other over the last scrap of bread",
    "Making Islam illegal",
    "Desperately hurling insults at Donald Trump as he absorbs them into his rapidly expanding body",
    "Santa's heavy sack",
    "Clearing a bloody path through Walmart with a scimitar",
    "Another shitty year",
    "Whatever Kwanzaa is supposed to be about",
    "A Christmas stocking full of coleslaw",
    "Elf cum",
    "The tiny, calloused hands of the Chinese children that made this card",
    "Taking down Santa with a surface-to-air missle",
    "Several intertwining love stories featuring Hugh Grant",
    "Mall Santa",
    "My hot cousin",
    "The Star Wars Holiday Special",
    "Krampus, the Austrian Christmas monster",
    "Pretending to be happy",
    "Socks ",
    "Eating an entire snowman",
    "A toxic family environment",
    "A visually arresting turtleneck",
    "Fucking up \"Silent Night\" in front of 300 parents",
    "Immaculate conception",
    "Space Jam on VHS",
    "Gift-wrapping a live hamster",
    "A Hungry-Man™ Frozen Christmas Dinner for One",
    "Swapping bodies with mom for a day",
    "Making up for 10 years of shitty parenting with a PlayStation",
    "Finding out that Santa isn't real",
    "Slicing a ham in icy silence",
    "The shittier, Jewish version of Christmas",
    "The Hawaiian goddess Kapo and her flying detachable vagina",
    "Having a strong opinion about Obamacare",
    "The royal afterbirth",
    "Congress's flaccid penises withering away beneath their suit pants",
    "Piece of shit Christmas cards with no money in them",
    "Moses gargling Jesus's balls while Shiva and the Buddha penetrate his divine hand holes",
    "Giving money and personal information to strangers on the Internet",
    "These low, low prices!",
    "A magical tablet containing a world of unlimited pornography",
    "People with cake in their mouths talking about how good cake is",
    "Jizzing into Santa's beard",
    "A simultaneous nightmare and wet dream starring Sigourney Weaver",
    "Being blind and deaf and having no limbs",
    "Rudolph's bright red balls",
    "The Grinch's musty, cum-stained pelt",
    "Breeding elves for their priceless semen",
    "Paying the iron price",
    "Jiggle physics",
    "Rotating shapes in mid-air so that they fit into other shapes when they fall",
    "Firefly: Season 2",
    "Getting bitch slapped by Dhalsim",
    "Casting Magic Missile at a bully",
    "Running out of stamina",
    "An immediately regrettable $9 hot dog from the Boston Convention Center",
    "The rocket launcher",
    "Sharpening a foam broadsword on a foam whetstone",
    "Loading from a previous save",
    "The depression that ensues after catching 'em all",
    "Violating the First Law of Robotics",
    "Getting inside the Horadric Cube with a hot babe and pressing the transmute button",
    "Punching a tree to gather wood",
    "Spending the year's insulin budget on Warhammer 40k figurines",
    "Forgetting to eat, and consequently dying",
    "Wil Wheaton crashing an actual spaceship",
    "The Klobb",
    "Charging up all the way",
    "Vespene gas",
    "Judging elves by the color of their skin and not by the content of their character",
    "Smashing all the pottery in a Pottery Barn in search of rupees",
    "Achieving 500 actions per minute",
    "Full HD",
    "The gravity gun",
    "Reading the comments",
    "70,000 gamers sweating and farting inside an airtight steel dome",
    "The Cock Ring of Alacrity",
    "Yoshi's huge egg-laying cloaca",
    "A homemade, cum-stained Star Trek uniform",
    "Offering sexual favors for an ore and a sheep",
    "Mario Kart rage",
    "Bowser's aching heart",
    "An angry stone head that stomps on the floor every three seconds",
    "Nude-modding Super Mario World",
    "Temporary invincibility",
    "Being an attractive elf trapped in an unattractive human's body",
    "Filling every pouch of a UtiliKilt™ with pizza",
    "The Sarlacc",
    "Achieving the manual dexterity and tactical brilliance of a 12-year-old Korean boy",
    "Allowing nacho cheese to curdle in your beard while you creep in League of Legends",
    "The collective wail of every Magic player suddenly realizing that they've spent hundreds of dollars on pieces of cardboard",
    "Rolling a D20 to save a failing marriage",
    "Legendary Creature – Robert Khoo",
    "Winning the approval of Cooking Mama that you never got from actual mama",
    "Never watching, discussing, or thinking about My Little Pony",
    "Turn-of-the-century sky racists",
    "Unlocking a new sex position",
    "The boner hatch in the Iron Man suit",
    "Buying virtual clothes for a Sim family instead of real clothes for a real family",
    "Google Glass + e-cigarette: Ultimate Combo!",
    "The decade of legal inquests following a single hour of Grand Theft Auto",
    "A fully-dressed female videogame character",
    "Getting into a situation with an owlbear",
    "Charles Barkley Shut Up and Jam!",
    "Tapping Sara Angel",
    "Eating a pizza that's lying on the street to gain health",
    "SNES cartridge cleaning fluid",
    "A madman who lives in a policebox and kidnaps women",
    "Grand Theft Auto: Fort Lauderdale",
    "Mistakenly hitting on a League of Legends statue",
    "Ser Jorah Mormont's cerulean-blue balls",
    "The old gods",
    "Stuffing my balls into a Sega Genesis and pressing the power button",
    "Attacking from Kamchatka",
    "Separate drinking fountains for dark elves",
    "Lagging out",
    "Getting bitten by a radioactive spider and then battling leukemia for 30 years",
    "A giant mechanical bird with a tragic backstory",
    "The pure, Zen-like state that exists between micro and macro",
    "Xena, Warrior Princess",
    "Endless ninjas",
    "Whatever Final Fantasy bullshit happened this year",
    "Collecting all seven power crystals",
    "KHAAAAAAAAAN!",
    "Futuristic death sports",
    "The imagination of Peter Jackson",
    "Demons and shit",
    "All of the good times and premium gaming entertainment available to you in the Kickstarter room",
    "A grumpy old Harrison Ford who'd rather be doing anything else",
    "Taking 2d6 emotional damage",
    "The Star Wars Universe",
    "Exciting content!",
    "Rubbing chocolate pudding all over Bill Cosby's nipples",
    "What The Rock was really cooking",
    "Stepping on a god damn friggin' LEGO",
    "All this liquid in my mouth",
    "Giving a dolphin a handjob for science",
    "A floor that is literally made of lava",
    "A neck beard that is 10% cheese",
    "Pelvic sorcery",
    "Pooping as quietly as possible",
    "The beautiful sport of Turkish oil wrestling",
    "No survivors",
    "Go Fuck Yourself",
    "Forcing a handjob on a dying man ",
    "A homoerotic subplot",
    "An origami swan that's some kind of symbol?",
    "25 shitty jokes about House of Cards",
    "My constituents",
    "Punching a congressman in the face",
    "Strangling a dog to make a point to the audience",
    "A childless marriage",
    "A much younger woman",
    "Getting eaten out while on the phone with Dad",
    "Making it look like a suicide",
    "Carbon monoxide poisoning ",
    "Discharging a firearm in a residential area",
    "Ribs so good they transcend race and class",
    "The sensitive European photographer who's fucking my wife",
    "My dick in your mouth",
    "Corn",
    "Carribbean Jesus",
    "Super yoga",
    "Ladles",
    "Ejaculating a pound of tinsel",
    "A heart that is two sizes too small and that therefore cannot pump an adequate amount of blood",
    "The John D and Catherine T MacArthur Foundation",
    "Dividing by zero",
    "Playing an ocarina to summon Ultra-Congress from the sea",
    "Asshole pomegranates that are hard to eat",
    "Becoming so rich that you shed your body and turn to vapor",
    "Faking a jellyfish sting so someone will pee on you",
    "A sexy naked interactive theater thing",
    "A giant squid in a wedding gown",
    "Crawling into a vagina",
    "A dick so big and so black that not even light can escape its pull",
    "A double murder suicide barbeque",
    "A primordial soup and salad bar",
    "A stack of bunnies in a trenchcoat",
    "At least three ducks",
    "Becoming engorged with social justice jelly and secreting a thinkpiece",
    "Being the absolute worst",
    "Disco Mussolini",
    "Greg Kinnear's terrible lightning breath",
    "Mitt Romney's eight sons Kip, Sam, Trot, Fergis, Toolshed, Grisham, Hawkeye, and Thorp",
    "Mr and Mrs Tambourine Man's jingle-jangle morning sex",
    "Mushy tushy",
    "Ringo Starr & His All-Starr Band",
    "Sandwich",
    "Saving the Rainforest Cafe",
    "Sir Thomas More's Fruitopia™",
    "Sweating it out on the streets of a runaway American Dream",
    "That one leftover screw",
    "That thing politicians do with their thumbs when they talk",
    "The spooky skeleton under my skin",
    "The token lesbian",
    "These dolphins",
    "Three hairs from the silver-golden head of Galadriel",
    "Water so cold it turned into a rock",
    "Poutine",
    "Newfies",
    "The Official Languages Act La Loi sur les langues officielles",
    "Terry Fox's prosthetic leg",
    "The FLQ",
    "Canada: America's Hat",
    "Don Cherry's wardrobe",
    "Burning down the White House",
    "Heritage minutes",
    "Homo milk",
    "Naked News",
    "Mr Dressup",
    "Syrupy sex with a maple tree",
    "Being Canadian",
    "Snotsicles",
    "The Famous Five",
    "Schmirler the Curler",
    "Stephen Harper",
    "A Molson muscle",
    "The Royal Canadian Mounted Police",
    "An icy handjob from an Edmonton hooker"
];


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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/zach/Web/mlah/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map