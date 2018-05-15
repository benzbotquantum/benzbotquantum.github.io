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

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"header\" class=\"header\" >\n  <img src=\"/assets/images/logo.jpg\" id=\"logo\" class=\"logo\" />\n  <img src=\"/assets/images/MBLogo.jpg\" id=\"logo_m\" class=\"logo_m\" />\n  <!-- <p id=\"header_p\" class=\"header_p\"><b>Amanda</b> - A Virtual Assistant</p> -->\n  <p id=\"header_p\" class=\"header_p\"><span class=\"qua\" >QUANTUM</span> AI TECHNOLOGIES</p>\n</div>\n\n<div id=\"chatbox\" class=\"chatbox\" >\n    <i class=\"fas fa-arrow-circle-down icon2\"></i>\n  <p id=\"start\" class=\"start\" ><span class=\"start_p\">Type Something to get started.</span></p>\n  <div id=\"chat\" class=\"chat\" ngx-auto-scroll lock-y-offset=\"10\" observe-attributes>\n    <div   *ngFor=\"let bot of total_message; let i = index;\" >\n        <div *ngIf = \"bot.message_ui\"  >\n\n          <div  class=\"user\" *ngIf = \"bot.message_ui[0].side == 'user' \" >\n\n            <span class=\"write\">{{bot.message_ui[0].name}}<div class=\"U\">U</div></span>\n\n          </div>\n\n          <div  class=\"bot\" *ngIf = \"bot.message_ui[0].side == 'bot' \" >\n              <span class=\"write\">{{ bot.message_ui[0].name }}</span>\n              <div class=\"C\">A</div>\n          </div>\n\n        </div>\n        <!--card -->\n        <div *ngIf = \"bot.attachment1\" class=\"set\">\n            <div id=\"card\"  *ngFor = \"let card of bot.attachment1\" >\n              <div *ngFor = \"let image of card.image_url\" >\n                <img src=\"{{ image.url }}\" class=\"card_image\" />\n              </div>\n              <p class=\"card-text\">{{card.title}}</p>\n              <div *ngFor = \"let butt of card.button\" >\n\t\t\t  <div *ngIf = \"butt.title == 'Specs & features'\" >\n                <a href=\"{{butt.value}}\" target=\"_blank\" class=\"info_a\" >{{butt.title}}</a>\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf = \"butt.title != 'Specs & features'\">\n                <button (click)=\"readmore(butt.value)\" class=\"info\" >{{butt.title}}</button>\n\t\t\t\t</div>\n              </div>\n            </div>\n        </div>\n        <!-- card -->\n<!-- adaptive card -->\n        <div *ngIf = \"bot.attachment2\" class=\"adapt\" >\n          <div id=\"bgcolored\" >\n            <p class=\"details\" >Contact Details</p>\n          <div id=\"adapt-card\" *ngFor = \"let card of bot.attachment2\" >\n            <!-- <p class=\"adapt-text\"> {{ card.text }} </p> -->\n            <input type=\"text\" id=\"{{ card.text }}\" class=\"adapt-input\" placeholder=\"{{ card.text }}\" /><br>\n          </div>\n          <input type=\"submit\" id=\"attch2-submit\" class=\"submit-btn\"  (click)=\"card_submit(bot)\" />\n        </div>\n      </div>\n\n\n      <!-- adaptive card -->\n      <!-- Service -->\n      <div *ngIf = \"bot.attachment3\" class=\"set\">\n        <div id=\"card\" >\n          <p class=\"card-text\" *ngFor = \"let card of bot.attachment3\">{{ card.text }}</p>\n          <!-- <button (click)=\"readmore(card.text)\" class=\"info\" >More Info</button> -->\n        </div>\n\n    </div>\n    <div *ngIf=\"bot.attachment4\" class=\"set\">\n      <div id=\"card\" >\n          <iframe  class=\"isize\" [src]=\"video | safe\">\n            </iframe>\n\n      </div>\n    </div>\n\n      <!-- Service -->\n        <div *ngIf = \"bot.buttons\"   class=\"bot_but\">\n\n            <div *ngFor = \"let card of bot.buttons\" >\n              <button id=\"btn\" (click)=\"readmore(card.title)\"  >{{ card.title }}</button>\n            </div>\n        </div>\n    </div>\n  </div>\n\n    <i class=\"fas fa-microphone icon3\" (click)=\"mic(event)\"></i>\n\n    <input type=\"text\" id=\"input_value\" class=\"input_value\" role=\"user\" placeholder=\"Ask me Something ...\" (keydown.enter)=\"onKeydown($event)\" />\n    <input type=\"submit\" (click)=\"send()\" value=\"Send\" id=\"sendbtn\" class=\"sendbtn\" />\n\n</div>\n<div id=\"sidebox\" class=\"sidebox\">\n    <i class=\"fas fa-times icon\" (click)=\"cross()\" ></i>\n<img src=\"../assets/images/avatar_3.jpg\" id=\"lady\" class=\"lady\" />\n<i class=\"fas fa-volume-up icon4\" (click)= \"mute()\" ></i>\n<i class=\"fas fa-volume-off icon7\" (click)= \"volume()\" ></i>\n</div>\n<div class=\"menu\"><i class=\"fas fa-bars icon5\" (click)=\"cross_no()\"></i>\n  <i class=\"far fa-hand-point-left icon6\"></i><p class=\"amanda\">Wanna Meet Amanda, Your Virtual Assistant.</p>\n</div>\n\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SafePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_botframework_directlinejs__ = __webpack_require__("../../../../botframework-directlinejs/built/directLine.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_botframework_directlinejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_botframework_directlinejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({ name: 'safe' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]])
    ], SafePipe);
    return SafePipe;
}());

var webkitSpeechRecognition = window.webkitSpeechRecognition;
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.total_message = [];
        this.cards = [];
        this.text_ui = [];
        this.OnLine = navigator.onLine;
        this.first_char = /\S/;
        this.muted = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.directLine = new __WEBPACK_IMPORTED_MODULE_1_botframework_directlinejs__["DirectLine"]({
            secret: 'HzA2pvI2Q-U.cwA.Glo.huF_gs2n_i52zgfuPcwatpLY8ilk1czp0EwDjA8uCBs',
            webSocket: true,
            pollingInterval: 1000
        });
        // this.message_speak.onstart = function (event) {
        // $('#lady').attr("src", "../assets/images/avatar.gif");
        // }
        // this.message_speak.onend = function (event) {
        // $('#lady').attr("src", "../assets/images/avatar_3.jpg");
        // }
        this.directLine.activity$.filter(function (activity) { return activity.type === 'message'; }).subscribe(function (message) {
            console.log(message);
            if (message.from['name'] == "naveen_bot_dev") {
                if (message.text) {
                    _this.text_ui = [];
                    _this.message_from_drestline = message.text;
                    console.log("message from rohan_bot_asking :-", _this.message_from_drestline);
                    console.log(_this.message_from_drestline[0]);
                    if (!_this.muted) {
                        if (_this.message_from_drestline[0] == '_') {
                            _this.message_from_drestline = _this.message_from_drestline.substr(1).slice(0, _this.message_from_drestline.length);
                        }
                        else {
                            // var message_speak_local = new texttospeech({
                            //   text:this.message_from_drestline
                            // });
                            // message_speak_local.speech_speak();
                            responsiveVoice.speak(_this.message_from_drestline);
                            // responsiveVoice.speak("hello world");
                        }
                    }
                    _this.text_ui.push({ name: _this.message_from_drestline, side: 'bot' });
                    _this.total_message.push({ message_ui: _this.text_ui });
                }
                if (message.attachments) {
                    _this.text_ui = [];
                    // I want a car
                    if (message.attachments[0].content.images || message.attachments[0].content.media) {
                        if (message.attachments[0].content.buttons) {
                            console.log('It worded');
                            console.log(message.attachments[1]);
                            var i = void 0;
                            for (i = 0; i < message.attachments.length; i++) {
                                var buttons = [];
                                var image = [];
                                if (!_this.muted) {
                                    // responsiveVoice.speak(message.attachments[i].content.title);
                                }
                                var j = void 0, k = void 0;
                                for (j = 0; j < message.attachments[i].content.buttons.length; j++) {
                                    buttons.push({ value: message.attachments[i].content.buttons[j].value, title: message.attachments[i].content.buttons[j].title });
                                }
                                for (k = 0; k < message.attachments[i].content.images.length; k++) {
                                    image.push({ url: message.attachments[i].content.images[k].url });
                                }
                                _this.text_ui.push({ button: buttons, image_url: image, title: message.attachments[i].content.title, text: message.attachments[i].content.text, });
                            }
                            _this.total_message.push({ attachment1: _this.text_ui });
                            console.log(_this.total_message);
                        }
                        else if (message.attachments[0].content.media) {
                            console.log('It worded');
                            console.log(message.attachments[1]);
                            var i = void 0;
                            var j = void 0;
                            for (i = 0; i < message.attachments.length; i++) {
                                console.log('Inside for loop of media');
                                console.log(message.attachments[i].content.media);
                                console.log(message.attachments[i].content.media.length);
                                for (j = 0; j < message.attachments[i].content.media.length; j++) {
                                    console.log(message.attachments[i].content.media[j].url);
                                    _this.video = message.attachments[i].content.media[j].url;
                                    _this.text_ui.push({ url: message.attachments[i].content.media[j].url });
                                }
                                _this.total_message.push({ attachment4: _this.text_ui });
                            }
                        }
                        else {
                        }
                    }
                    else {
                        console.log('hellolololo');
                        if (message.attachments[0].content.actions && message.attachments[0].content.body) {
                            console.log(message.attachments[0].content.body[1].text);
                            console.log(message.attachments[0].content.body.length);
                            var i = void 0;
                            for (i = 0; i < message.attachments[0].content.body.length; i++) {
                                console.log(message.attachments[0].content.body[i].type);
                                if (message.attachments[0].content.body[i].type == "TextBlock") {
                                    console.log(message.attachments[0].content.body[i].text);
                                    _this.text_ui.push({ text: message.attachments[0].content.body[i].text });
                                }
                            }
                            _this.total_message.push({ attachment2: _this.text_ui });
                            console.log(_this.total_message);
                        }
                        else {
                            console.log('service');
                            var i = void 0;
                            for (i = 0; i < message.attachments[0].content.body.length; i++) {
                                console.log(message.attachments[0].content.body[i].type);
                                if (message.attachments[0].content.body[i].type == "TextBlock") {
                                    console.log(message.attachments[0].content.body[i].text);
                                    _this.text_ui.push({ text: message.attachments[0].content.body[i].text });
                                }
                            }
                            _this.total_message.push({ attachment3: _this.text_ui });
                            console.log(_this.total_message);
                        }
                    }
                }
                if (message.suggestedActions) {
                    _this.text_ui = [];
                    console.log(_this.text_ui);
                    console.log(message.suggestedActions.actions.length);
                    var i = void 0;
                    for (i = 0; i < message.suggestedActions.actions.length; i++) {
                        if (!_this.muted) {
                            // responsiveVoice.speak(message.suggestedActions.actions[i].title);
                        }
                        _this.text_ui.push({ title: message.suggestedActions.actions[i].title, text: message.suggestedActions.actions[i].value });
                    }
                    _this.total_message.push({ buttons: _this.text_ui });
                }
            }
            console.log(_this.total_message);
        });
    };
    AppComponent.prototype.send = function () {
        responsiveVoice.cancel();
        this.user_message = __WEBPACK_IMPORTED_MODULE_2_jquery__('.input_value').val();
        if (this.user_message != "") {
            this.directline_message(this.user_message);
        }
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".icon2").css("display", "none");
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".start").css("display", "none");
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".input_value").val("");
    };
    AppComponent.prototype.readmore = function (text) {
        responsiveVoice.cancel();
        this.directline_message(text);
    };
    AppComponent.prototype.card_submit = function (bot) {
        var i;
        console.log(bot.attachment2.length);
        console.log(bot.attachment2);
        for (i = 0; i < bot.attachment2.length; i++) {
            console.log(i);
            var json1 = [];
            var text = bot.attachment2[i].text;
            console.log('cvcbsyuc0');
            console.log(text);
            json1.push({ text: __WEBPACK_IMPORTED_MODULE_2_jquery__('.' + text).val() });
        }
        console.log(json1);
        this.directLine.postActivity({
            from: { id: Math.random().toString(36).substring(7), name: 'You' },
            type: 'message',
            text: json1,
        }).subscribe(function (id) { return console.log("Posted activity, assigned ID ", id); }, function (error) { return console.log("Error posting activity", error); });
    };
    AppComponent.prototype.directline_message = function (text_input) {
        this.type_key = null;
        console.log(this.type_key);
        this.internet_connection();
        this.text_ui = [];
        this.text_ui.push({ name: text_input, side: 'user' });
        this.total_message.push({ message_ui: this.text_ui });
        console.log(text_input);
        this.directLine.postActivity({
            from: { id: 'arpit', name: 'You' },
            type: 'message',
            text: text_input,
        }).subscribe(function (id) { return console.log("Posted activity, assigned ID ", id); }, function (error) { return console.log("Error posting activity", error); });
    };
    AppComponent.prototype.internet_connection = function () {
        this.OnLine = navigator.onLine;
        if (this.OnLine)
            console.log('internet');
        else
            alert('no internet');
    };
    AppComponent.prototype.keyboard_press = function () {
        this.type_key = 'TYPING....';
        console.log(this.type_key);
    };
    AppComponent.prototype.mic = function (event) {
        if (/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor) == true) {
            var recognizing = false;
            var recognition = new webkitSpeechRecognition();
            console.log('event', event);
            recognizing = true;
            recognition.lang = "en_US";
            recognition.start();
            recognition.continuous = true;
            recognition.interimResults = true;
            var temp = this;
            var final_transcript = "";
            recognition.onresult = function (event) {
                var interim_transcript = '';
                for (var i = event.resultIndex; i < event.results.length; ++i) {
                    if (event.results[i].isFinal) {
                        final_transcript += event.results[i][0].transcript;
                    }
                    else {
                        interim_transcript += event.results[i][0].transcript;
                    }
                }
                console.log(final_transcript);
                if (final_transcript) {
                    console.log("*", final_transcript);
                    __WEBPACK_IMPORTED_MODULE_2_jquery__('.input_value').val(final_transcript);
                    // temp.directline_message(final_transcript);
                    temp.send();
                    final_transcript = "";
                    recognition.stop();
                    return;
                }
                final_transcript = "";
            };
            this.ignore_onend = false;
            console.log('ignore');
        }
        else {
            alert("Mic is not supported in your Broswer !!!");
        }
    };
    AppComponent.prototype.showButtons = function (style) {
        if (style == this.current_style) {
            return;
        }
        this.current_style = style;
    };
    AppComponent.prototype.cross = function () {
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".sidebox").css("width", "0vw");
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".lady").css("width", "0vw");
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".menu").css("display", "block");
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".chatbox").css("left", "14vw");
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".icon6").css("display", "none");
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".amanda").css("display", "none");
    };
    AppComponent.prototype.cross_no = function () {
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".sidebox").css("width", "25vw");
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".lady").css("width", "22vw");
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".menu").css("display", "none");
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".chatbox").css("left", "28vw");
    };
    AppComponent.prototype.mute = function () {
        responsiveVoice.cancel();
        console.log('hello@@');
        this.muted = true;
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".icon4").css("display", "none");
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".icon7").css("display", "block");
    };
    AppComponent.prototype.volume = function () {
        this.muted = false;
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".icon4").css("display", "block");
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".icon7").css("display", "none");
    };
    AppComponent.prototype.onKeydown = function (event) {
        this.send();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
        // export interface IWindow extends Window {
        //   webkitSpeechRecognition: any;
        //   const {webkitSpeechRecognition} : IWindow = <IWindow>window;
        //   this.recognition = new webkitSpeechRecognition();
        // }
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_auto_scroll__ = __webpack_require__("../../../../ngx-auto-scroll/ngx-auto-scroll.es5.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__app_component__["b" /* SafePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_auto_scroll__["a" /* NgxAutoScrollModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
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