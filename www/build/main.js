webpackJsonp([0],{

/***/ 146:
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
webpackEmptyAsyncContext.id = 146;

/***/ }),

/***/ 162:
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
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(570);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Hui\Documents\UTVCO-Trabajos\Administración de base de datos\App-SB\App\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Connect" tabIcon="bluetooth"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Dashboard" tabIcon="easel"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Alerts" tabIcon="alert"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\Hui\Documents\UTVCO-Trabajos\Administración de base de datos\App-SB\App\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(884);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_bluetooth_storage_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Storage } from '@ionic/storage'



var AboutPage = (function () {
    //valorDeLS: string = 'blabla';
    function AboutPage(navCtrl, bluetoothStorageService) {
        // get data from localStorage
        // this.processData(dataStored);
        // console.log('storageData > !! ');
        // console.log(dataStored);
        // let a  = storage.get('arduino');
        // console.log(' Esto es storage data en about');
        // console.log(a)
        //this.processData();
        //var dataStored = new Array(JSON.parse(storage.get('arduino')));
        var _this = this;
        this.navCtrl = navCtrl;
        this.bluetoothStorageService = bluetoothStorageService;
        this.bdata = [];
        this.arrayTemperature = [];
        this.arrayPulse = [];
        this.arrayTimeStamp = [];
        this.lastSteps = [];
        this.datesStep = [];
        this.readAll = function () {
            console.log('dentro del readAll');
            var date = __WEBPACK_IMPORTED_MODULE_4_moment__().format("YYYY-MM-DD HH:mm:ss");
            var lastDay = __WEBPACK_IMPORTED_MODULE_4_moment__(date).subtract(1, 'day').format("YYYY-MM-DD HH:mm:ss");
            _this.bluetoothStorageService.getPerDay(lastDay)
                .then(function (data) {
                console.log('bd data ' + JSON.stringify(data));
                _this.showBD(_this.bdata = data);
            })
                .catch(function (error) {
                console.log('error getAll' + error);
            });
            //  arrayTemperatura.map(item => [item.temperature , item.timeStamp]);
            //  this.getMax();
        };
    }
    AboutPage.prototype.getStep = function () {
        var _this = this;
        var date = __WEBPACK_IMPORTED_MODULE_4_moment__().format("YYYY-MM-DD HH:mm:ss");
        var lastDay = __WEBPACK_IMPORTED_MODULE_4_moment__(date).subtract(7, 'day').format("YYYY-MM-DD HH:mm:ss");
        this.bluetoothStorageService.getStepPerDay(lastDay)
            .then(function (data) {
            console.log(' step data ' + JSON.stringify(data));
            _this.proceessStep(data);
        })
            .catch(function (error) {
            console.log('step data error' + error);
        });
    };
    AboutPage.prototype.proceessStep = function (data) {
        var temp = [];
        var date = __WEBPACK_IMPORTED_MODULE_4_moment__().format("YYYY-MM-DD HH:mm:ss");
        this.lastSteps = [];
        var td = [];
        console.log('data entry' + data);
        var _loop_1 = function (i) {
            this_1.datesStep.push(__WEBPACK_IMPORTED_MODULE_4_moment__(date).subtract(i, 'day').format("YYYY-MM-DD HH:mm:ss"));
            data.forEach(function (item) {
                var a = __WEBPACK_IMPORTED_MODULE_4_moment__(date).subtract(i + 1, 'day').format("YYYY-MM-DD HH:mm:ss");
                var b = __WEBPACK_IMPORTED_MODULE_4_moment__(date).subtract(i - 1, 'day').format("YYYY-MM-DD HH:mm:ss");
                if (item.timeStamp > a && item.timeStamp < b) {
                    td.push(item);
                }
            });
            this_1.lastSteps.push(td.length);
            //  this.lastSteps.push( temp.map(item => item.timeStamp < moment(date).subtract(i,'day').format("YYYY-MM-DD HH:mm:ss") ).length)
        };
        var this_1 = this;
        for (var i = 7; i > 0; i--) {
            _loop_1(i);
        }
        this.currentStep = this.lastSteps[6];
        this.datesStep = this.datesStep.map(function (item) { return __WEBPACK_IMPORTED_MODULE_4_moment__(item).format("DD-MM-YYYY"); });
        console.log('lastSteps length' + JSON.stringify(this.lastSteps));
    };
    AboutPage.prototype.showBD = function (items) {
        this.getStep();
        console.log('datos bd' + JSON.stringify(items));
        var currentSample = items[items.length - 1];
        //currentSample of the day
        this.currentPulse = JSON.stringify(currentSample.pulso / 10);
        this.currentTemperature = JSON.stringify(currentSample.temperatura);
        this.arrayTemperature = items.map(function (item) { return item.temperatura; });
        this.arrayPulse = items.map(function (item) { return item.pulso / 10; });
        this.arrayTimeStamp = items.map(function (item) { return __WEBPACK_IMPORTED_MODULE_4_moment__(item.timeStamp).format("HH:mm:ss"); });
        console.log(' array of temp' + this.arrayTemperature);
        console.log(' array of pulse' + this.arrayPulse);
        this.drawGraph();
    };
    AboutPage.prototype.drawGraph = function () {
        this.barChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: this.datesStep,
                datasets: [{
                        label: 'Steps',
                        data: this.lastSteps,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 211, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 99, 211, 0.2)'
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
        this.lineChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.lineCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: this.arrayTimeStamp,
                datasets: [
                    {
                        label: ["temp"],
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(3, 169, 244,0.4)",
                        borderColor: "rgba(3, 169, 244,1.0)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(3, 169, 244,1.0)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(3, 169, 244,1.0)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: this.arrayTemperature,
                        spanGaps: false,
                    },
                    {
                        label: ["pulse"],
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(244, 67, 54,0.4)",
                        borderColor: "rgba(244, 67, 54,1.0)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(244, 67, 54,1.0)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(244, 67, 54,1.0)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: this.arrayPulse,
                        spanGaps: false,
                    }
                ]
            }
        });
        // this.lineChart2 = new Chart(this.lineCanvas2.nativeElement, {
        //     type: 'line',
        //     data: {
        //         labels: this.arrayTimeStamp,
        //         datasets: [
        //             {
        //                 label: "My second dataset",
        //                 fill: false,
        //                 lineTension: 0.1,
        //                 backgroundColor: "rgba(75,192,192,0.4)",
        //                 borderColor: "rgba(75,192,192,1)",
        //                 borderCapStyle: 'butt',
        //                 borderDash: [],
        //                 borderDashOffset: 0.0,
        //                 borderJoinStyle: 'miter',
        //                 pointBorderColor: "rgba(75,192,192,1)",
        //                 pointBackgroundColor: "#fff",
        //                 pointBorderWidth: 1,
        //                 pointHoverRadius: 5,
        //                 pointHoverBackgroundColor: "rgba(75,192,192,1)",
        //                 pointHoverBorderColor: "rgba(220,220,220,1)",
        //                 pointHoverBorderWidth: 2,
        //                 pointRadius: 1,
        //                 pointHitRadius: 10,
        //                 data: this.arrayTemperature,
        //                 spanGaps: false,
        //             }
        //         ]
        //     }
        //
        // });
    };
    return AboutPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('lineCanvas'),
    __metadata("design:type", Object)
], AboutPage.prototype, "lineCanvas", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('barCanvas'),
    __metadata("design:type", Object)
], AboutPage.prototype, "barCanvas", void 0);
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"C:\Users\Hui\Documents\UTVCO-Trabajos\Administración de base de datos\App-SB\App\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Stadistics of OpenSmartBand\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-buttons end>\n    <button (click) = "test()" >SYNC</button>\n  </ion-buttons> -->\n  <button ion-button primary (click) = "readAll()" >SYNC</button>\n\n    <ion-card class="temperature">\n      <ion-card-header class="color-white">\n        <ion-icon name="medkit"></ion-icon>\n        TEMPERATURA\n      </ion-card-header>\n      <ion-card-content class="color-white">\n        <span> {{currentTemperature}} </span>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card class="pulse">\n      <ion-card-header class="color-white">\n        <ion-icon name="pulse"></ion-icon>\n        Pulso\n      </ion-card-header>\n      <ion-card-content class="color-white">\n        <span> {{currentPulse}} </span>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card class="step">\n      <ion-card-header class="color-white">\n        <ion-icon name="walk"></ion-icon>\n        Pasos\n      </ion-card-header>\n      <ion-card-content class="color-white">\n        <span> {{currentStep}} </span>\n      </ion-card-content>\n    </ion-card>\n\n\n    <ion-card>\n      <ion-card-header>\n        Temperaturas\n      </ion-card-header>\n      <ion-card-content>\n        <canvas #lineCanvas></canvas>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        Pasos\n        <span> {{objectString}} </span>\n      </ion-card-header>\n      <ion-card-content>\n        <canvas #barCanvas></canvas>\n      </ion-card-content>\n    </ion-card>\n\n\n    <!-- <ion-card>\n      <ion-card-header>\n        Doughnut Chart\n      </ion-card-header>\n      <ion-card-content>\n        <canvas #doughnutCanvas></canvas>\n      </ion-card-content>\n    </ion-card> -->\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Hui\Documents\UTVCO-Trabajos\Administración de base de datos\App-SB\App\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_bluetooth_storage_service__["a" /* BluetoothStorageService */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Hui\Documents\UTVCO-Trabajos\Administración de base de datos\App-SB\App\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Alerts\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class="temperature">\n    <ion-card-header class="color-white">\n      <ion-icon name="medkit"></ion-icon>\n      TEMPERATURA\n    </ion-card-header>\n    <ion-card-content class="color-white">\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="pulse">\n    <ion-card-header class="color-white">\n      <ion-icon name="pulse"></ion-icon>\n      Pulso\n    </ion-card-header>\n    <ion-card-content class="color-white">\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="step">\n    <ion-card-header class="color-white">\n      <ion-icon name="walk"></ion-icon>\n      Pasos\n    </ion-card-header>\n    <ion-card-content class="color-white">\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Hui\Documents\UTVCO-Trabajos\Administración de base de datos\App-SB\App\src\pages\contact\contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_bluetooth_storage_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 ///bluetooth-serial';


var HomePage = (function () {
    function HomePage(navCtrl, bluetoothStorageService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.bluetoothStorageService = bluetoothStorageService;
        this.devicesArray = [];
        this.isScanning = false;
        this.valorDeLS = 'blabla';
        this.messages = [];
        this.readAll = function () {
            console.log('dentro del readAll');
            _this.bluetoothStorageService.getAll()
                .then(function (data) {
                console.log('bd data ' + JSON.stringify(data));
            })
                .catch(function (error) {
                console.log('error getAll' + error);
            });
            //  arrayTemperatura.map(item => [item.temperature , item.timeStamp]);
        };
        this.text = "no connected!";
    }
    // clearStore(){
    //   let a = window.localStorage.getItem('arduino');
    //   console.log(a);
    //   window.localStorage.clear();
    //   let b = window.localStorage.getItem('arduino');
    //   console.log(b);
    // }
    HomePage.prototype.startScanning = function () {
        var _this = this;
        var arrayDevices = [];
        console.log("Scanning Started");
        this.isScanning = true;
        __WEBPACK_IMPORTED_MODULE_2_ionic_native__["b" /* BluetoothSerial */].discoverUnpaired()
            .then(function (devices) {
            devices.forEach(function (device) {
                console.log('!! !! !! devices json >> ');
                console.log(JSON.stringify(devices));
                console.log('!! !! !! device json  !! !! !!>> ');
                console.log(JSON.stringify(device));
                arrayDevices.push(device);
            });
            setTimeout(function () {
                console.log("Scanning has stopped");
                //console.log(JSON.stringify(this.devices));
                _this.devicesArray = arrayDevices;
                _this.isScanning = false;
            }, 3000);
        });
    };
    HomePage.prototype.connectToDevice = function (device) {
        var _this = this;
        var dataStored = [];
        // connect to device
        __WEBPACK_IMPORTED_MODULE_2_ionic_native__["b" /* BluetoothSerial */].connect(device.address).subscribe(function (result) {
            if (result === "OK") {
                // si connect OK -> leemos datos
                __WEBPACK_IMPORTED_MODULE_2_ionic_native__["b" /* BluetoothSerial */].subscribe("\n").subscribe(function (value) { return _this.saveMessage(value); }, function (error) { return console.log('ERROR! message not found'); });
            }
        });
    };
    HomePage.prototype.saveMessage = function (bluetoothSerialData) {
        console.log("Recibido:    " + bluetoothSerialData);
        var messageData = JSON.parse(bluetoothSerialData);
        var date = __WEBPACK_IMPORTED_MODULE_4_moment__().format("YYYY-MM-DD HH:mm:ss");
        messageData.timeStamp = date;
        //
        // console.log('moment formar date ' + a);
        this.bluetoothStorageService.openDB();
        this.bluetoothStorageService.insert(messageData)
            .then(function (data) {
            console.log('insert result' + JSON.stringify(data));
        })
            .catch(function (error) {
            console.log('error insert result');
        });
        if (messageData.accel[0] != 0 && messageData.accel[1] != 0) {
            console.log('messageData.accel[0]' + JSON.stringify(messageData.accel[0]));
            console.log('messageData.accel[1]' + JSON.stringify(messageData.accel[1]));
            var date_1 = __WEBPACK_IMPORTED_MODULE_4_moment__().format("YYYY-MM-DD HH:mm:ss");
            var paso = {
                step: 1,
                timeStamp: date_1
            };
            this.bluetoothStorageService.insertStep(paso);
        }
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Hui\Documents\UTVCO-Trabajos\Administración de base de datos\App-SB\App\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <h2 style=" display:flex; margin:0 auto ">OPEN SMARTBAND!</h2>\n  <img  src="assets/images/logo_vertical.jpg" alt="Smiley face"  style=" display:flex; margin:0 auto " height="150" width="150">\n  <p style=" display:flex; margin:0 auto ">\n      Trabajo de Fin de Grado.\n      Universidad de La Laguna.\n  </p>\n\n  <!-- <p style=" display:flex; margin:0 auto ">\n    Press "SCAN" to find bluetooth devices\n  </p> -->\n\n  <ion-card>\n    <ion-card-header>\n      Press "SCAN" to find bluetooth devices\n    </ion-card-header>\n    <ion-card-content>\n      <ion-buttons end>\n        <button ion-button primary (click) = "startScanning()" >SCAN</button>\n      </ion-buttons>\n    </ion-card-content>\n  </ion-card>\n\n\n\n\n\n\n\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let device of devicesArray">\n      <button ion-item (click)="connectToDevice(device)">\n        <h2>{{device.name}}</h2>\n        <p>{{device.id}}</p>\n        <p>{{device.rssi}}</p>\n      </button>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-spinner *ngIf="isScanning==true" name="circles"></ion-spinner>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Hui\Documents\UTVCO-Trabajos\Administración de base de datos\App-SB\App\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_bluetooth_storage_service__["a" /* BluetoothStorageService */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(576);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_native_storage__ = __webpack_require__(887);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_sqlite__ = __webpack_require__(888);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_bluetooth_storage_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_device_device__ = __webpack_require__(889);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











//import { Storage } from '@ionic/storage';




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_device_device__["a" /* DevicePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_13__providers_bluetooth_storage_service__["a" /* BluetoothStorageService */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_native_storage__["a" /* NativeStorage */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_bluetooth_storage_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(432);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, bluetoothStorageService) {
        this.splashScreen = splashScreen;
        this.bluetoothStorageService = bluetoothStorageService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            bluetoothStorageService.openDB();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Hui\Documents\UTVCO-Trabajos\Administración de base de datos\App-SB\App\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Hui\Documents\UTVCO-Trabajos\Administración de base de datos\App-SB\App\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_4__providers_bluetooth_storage_service__["a" /* BluetoothStorageService */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BluetoothStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_native__ = __webpack_require__(129);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BluetoothStorageService = (function () {
    function BluetoothStorageService(http) {
        this.http = http;
        this.db = null;
        if (this.db === null) {
            this.db = new __WEBPACK_IMPORTED_MODULE_3_ionic_native__["c" /* SQLite */];
        }
    }
    BluetoothStorageService.prototype.openDB = function () {
        var _this = this;
        console.log('en openDB');
        this.db.openDatabase({
            name: 'samples.db',
            location: 'default'
        })
            .then(function () {
            console.log('OPENED DATA BASE!');
            _this.createTable();
            _this.createTableStep();
        });
    };
    // add new message to db
    BluetoothStorageService.prototype.insert = function (sample) {
        console.log('> > Service.insert ! ');
        var asam = JSON.stringify(sample);
        var item = JSON.parse(asam);
        var p, t, acx, acy, acz, gx, gy, gz, ts;
        if (item.pulse) {
            p = item.pulse;
        }
        if (item.temperature) {
            t = item.temperature;
        }
        if (item.accel[0]) {
            acx = item.accel[0];
        }
        if (item.accel[1]) {
            acy = item.accel[1];
        }
        if (item.accel[2]) {
            acz = item.accel[2];
        }
        if (item.gyro[0]) {
            gx = item.gyro[0];
        }
        if (item.gyro[1]) {
            gy = item.gyro[1];
        }
        if (item.gyro[2]) {
            gz = item.gyro[2];
        }
        if (item.timeStamp) {
            ts = item.timeStamp;
        }
        console.log('sample sent' + JSON.stringify(item));
        var sql = "INSERT INTO BtoothSamples (pulso,temperatura,acx,acy,acz,gx,gy,gz,timeStamp) VALUES (?,?,?,?,?,?,?,?,?)";
        return this.db.executeSql(sql, [p, t, acx, acy, acz, gx, gy, gz, ts]).then(function (value) { return console.log("retorno insert BtoothSamples OK "); }, function (error) { return console.log('ERROR! BtoothSamples message not inserted'); });
    };
    BluetoothStorageService.prototype.insertStep = function (sample) {
        console.log('> > INSERT STEP ! ');
        var asam = JSON.stringify(sample);
        console.log('step sample' + asam);
        var item = JSON.parse(asam);
        var s, ts;
        if (item.step) {
            s = item.step;
        }
        if (item.timeStamp) {
            ts = item.timeStamp;
        }
        console.log('sample sent' + JSON.stringify(item));
        var sql = "INSERT INTO steps (step,timeStamp) VALUES (?,?)";
        return this.db.executeSql(sql, [s, ts]).then(function (value) { return console.log("retorno insert Steps Ok"); }, function (error) { return console.log('ERROR! Steps message not inserted'); });
    };
    BluetoothStorageService.prototype.createTable = function () {
        var sql = " CREATE TABLE IF NOT EXISTS BtoothSamples (id INTEGER PRIMARY KEY AUTOINCREMENT,pulso INTEGER,temperatura INTEGER,acx INTEGER,acy INTEGER,acz INTEGER,gx INTEGER,gy INTEGER,gz INTEGER, timeStamp TEXT)";
        return this.db.executeSql(sql, []).then(function (value) { return console.log('bd BtoothSamples OK'); }, function (error) { return console.log('bd BtoothSamples ERROR'); });
    };
    BluetoothStorageService.prototype.createTableStep = function () {
        var sql = " CREATE TABLE IF NOT EXISTS steps (id INTEGER PRIMARY KEY AUTOINCREMENT,step INTEGER, timeStamp TEXT)";
        return this.db.executeSql(sql, []).then(function (value) { return console.log('bd steps OK'); }, function (error) { return console.log('bd steps ERROR'); });
    };
    BluetoothStorageService.prototype.delete = function (sample) {
        var sql = 'DELETE FROM BtoothSamples WHERE id=?';
        return this.db.executeSql(sql, [sample.id]);
    };
    BluetoothStorageService.prototype.getPerDay = function (date) {
        console.log('> > Service.getAll ! ');
        var sql = 'SELECT * FROM BtoothSamples WHERE timeStamp>?';
        return this.db.executeSql(sql, [date])
            .then(function (response) {
            console.log('response getPerDay() :', response.rows);
            var messages = [];
            for (var index = 0; index < response.rows.length; index++) {
                messages.push(response.rows.item(index));
            }
            return Promise.resolve(messages);
        });
    };
    BluetoothStorageService.prototype.getStepPerDay = function (date) {
        console.log('> > Service.getStep ! ');
        var sql = 'SELECT * FROM steps WHERE timeStamp>?';
        return this.db.executeSql(sql, [date])
            .then(function (response) {
            console.log('response getStepsPerDay() :', response.rows);
            var messages = [];
            for (var index = 0; index < response.rows.length; index++) {
                messages.push(response.rows.item(index));
            }
            return Promise.resolve(messages);
        });
    };
    BluetoothStorageService.prototype.getAll = function () {
        console.log('> > Service.getAll ! ');
        var sql = 'SELECT * FROM BtoothSamples';
        return this.db.executeSql(sql, [])
            .then(function (response) {
            console.log('response getAll() :', response.rows);
            var messages = [];
            for (var index = 0; index < response.rows.length; index++) {
                messages.push(response.rows.item(index));
            }
            return Promise.resolve(messages);
        });
    };
    BluetoothStorageService.prototype.countRows = function () {
        var sql = 'SELECT COUNT(*) FROM BtoothSamples';
        return this.db.executeSql(sql, []).then(function (response) {
            console.log('response getAll() :', response);
        });
    };
    return BluetoothStorageService;
}());
BluetoothStorageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], BluetoothStorageService);

//# sourceMappingURL=bluetooth-storage-service.js.map

/***/ }),

/***/ 886:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 434,
	"./af.js": 434,
	"./ar": 435,
	"./ar-dz": 436,
	"./ar-dz.js": 436,
	"./ar-kw": 437,
	"./ar-kw.js": 437,
	"./ar-ly": 438,
	"./ar-ly.js": 438,
	"./ar-ma": 439,
	"./ar-ma.js": 439,
	"./ar-sa": 440,
	"./ar-sa.js": 440,
	"./ar-tn": 441,
	"./ar-tn.js": 441,
	"./ar.js": 435,
	"./az": 442,
	"./az.js": 442,
	"./be": 443,
	"./be.js": 443,
	"./bg": 444,
	"./bg.js": 444,
	"./bm": 445,
	"./bm.js": 445,
	"./bn": 446,
	"./bn-bd": 447,
	"./bn-bd.js": 447,
	"./bn.js": 446,
	"./bo": 448,
	"./bo.js": 448,
	"./br": 449,
	"./br.js": 449,
	"./bs": 450,
	"./bs.js": 450,
	"./ca": 451,
	"./ca.js": 451,
	"./cs": 452,
	"./cs.js": 452,
	"./cv": 453,
	"./cv.js": 453,
	"./cy": 454,
	"./cy.js": 454,
	"./da": 455,
	"./da.js": 455,
	"./de": 456,
	"./de-at": 457,
	"./de-at.js": 457,
	"./de-ch": 458,
	"./de-ch.js": 458,
	"./de.js": 456,
	"./dv": 459,
	"./dv.js": 459,
	"./el": 460,
	"./el.js": 460,
	"./en-au": 461,
	"./en-au.js": 461,
	"./en-ca": 462,
	"./en-ca.js": 462,
	"./en-gb": 463,
	"./en-gb.js": 463,
	"./en-ie": 464,
	"./en-ie.js": 464,
	"./en-il": 465,
	"./en-il.js": 465,
	"./en-in": 466,
	"./en-in.js": 466,
	"./en-nz": 467,
	"./en-nz.js": 467,
	"./en-sg": 468,
	"./en-sg.js": 468,
	"./eo": 469,
	"./eo.js": 469,
	"./es": 470,
	"./es-do": 471,
	"./es-do.js": 471,
	"./es-mx": 472,
	"./es-mx.js": 472,
	"./es-us": 473,
	"./es-us.js": 473,
	"./es.js": 470,
	"./et": 474,
	"./et.js": 474,
	"./eu": 475,
	"./eu.js": 475,
	"./fa": 476,
	"./fa.js": 476,
	"./fi": 477,
	"./fi.js": 477,
	"./fil": 478,
	"./fil.js": 478,
	"./fo": 479,
	"./fo.js": 479,
	"./fr": 480,
	"./fr-ca": 481,
	"./fr-ca.js": 481,
	"./fr-ch": 482,
	"./fr-ch.js": 482,
	"./fr.js": 480,
	"./fy": 483,
	"./fy.js": 483,
	"./ga": 484,
	"./ga.js": 484,
	"./gd": 485,
	"./gd.js": 485,
	"./gl": 486,
	"./gl.js": 486,
	"./gom-deva": 487,
	"./gom-deva.js": 487,
	"./gom-latn": 488,
	"./gom-latn.js": 488,
	"./gu": 489,
	"./gu.js": 489,
	"./he": 490,
	"./he.js": 490,
	"./hi": 491,
	"./hi.js": 491,
	"./hr": 492,
	"./hr.js": 492,
	"./hu": 493,
	"./hu.js": 493,
	"./hy-am": 494,
	"./hy-am.js": 494,
	"./id": 495,
	"./id.js": 495,
	"./is": 496,
	"./is.js": 496,
	"./it": 497,
	"./it-ch": 498,
	"./it-ch.js": 498,
	"./it.js": 497,
	"./ja": 499,
	"./ja.js": 499,
	"./jv": 500,
	"./jv.js": 500,
	"./ka": 501,
	"./ka.js": 501,
	"./kk": 502,
	"./kk.js": 502,
	"./km": 503,
	"./km.js": 503,
	"./kn": 504,
	"./kn.js": 504,
	"./ko": 505,
	"./ko.js": 505,
	"./ku": 506,
	"./ku.js": 506,
	"./ky": 507,
	"./ky.js": 507,
	"./lb": 508,
	"./lb.js": 508,
	"./lo": 509,
	"./lo.js": 509,
	"./lt": 510,
	"./lt.js": 510,
	"./lv": 511,
	"./lv.js": 511,
	"./me": 512,
	"./me.js": 512,
	"./mi": 513,
	"./mi.js": 513,
	"./mk": 514,
	"./mk.js": 514,
	"./ml": 515,
	"./ml.js": 515,
	"./mn": 516,
	"./mn.js": 516,
	"./mr": 517,
	"./mr.js": 517,
	"./ms": 518,
	"./ms-my": 519,
	"./ms-my.js": 519,
	"./ms.js": 518,
	"./mt": 520,
	"./mt.js": 520,
	"./my": 521,
	"./my.js": 521,
	"./nb": 522,
	"./nb.js": 522,
	"./ne": 523,
	"./ne.js": 523,
	"./nl": 524,
	"./nl-be": 525,
	"./nl-be.js": 525,
	"./nl.js": 524,
	"./nn": 526,
	"./nn.js": 526,
	"./oc-lnc": 527,
	"./oc-lnc.js": 527,
	"./pa-in": 528,
	"./pa-in.js": 528,
	"./pl": 529,
	"./pl.js": 529,
	"./pt": 530,
	"./pt-br": 531,
	"./pt-br.js": 531,
	"./pt.js": 530,
	"./ro": 532,
	"./ro.js": 532,
	"./ru": 533,
	"./ru.js": 533,
	"./sd": 534,
	"./sd.js": 534,
	"./se": 535,
	"./se.js": 535,
	"./si": 536,
	"./si.js": 536,
	"./sk": 537,
	"./sk.js": 537,
	"./sl": 538,
	"./sl.js": 538,
	"./sq": 539,
	"./sq.js": 539,
	"./sr": 540,
	"./sr-cyrl": 541,
	"./sr-cyrl.js": 541,
	"./sr.js": 540,
	"./ss": 542,
	"./ss.js": 542,
	"./sv": 543,
	"./sv.js": 543,
	"./sw": 544,
	"./sw.js": 544,
	"./ta": 545,
	"./ta.js": 545,
	"./te": 546,
	"./te.js": 546,
	"./tet": 547,
	"./tet.js": 547,
	"./tg": 548,
	"./tg.js": 548,
	"./th": 549,
	"./th.js": 549,
	"./tk": 550,
	"./tk.js": 550,
	"./tl-ph": 551,
	"./tl-ph.js": 551,
	"./tlh": 552,
	"./tlh.js": 552,
	"./tr": 553,
	"./tr.js": 553,
	"./tzl": 554,
	"./tzl.js": 554,
	"./tzm": 555,
	"./tzm-latn": 556,
	"./tzm-latn.js": 556,
	"./tzm.js": 555,
	"./ug-cn": 557,
	"./ug-cn.js": 557,
	"./uk": 558,
	"./uk.js": 558,
	"./ur": 559,
	"./ur.js": 559,
	"./uz": 560,
	"./uz-latn": 561,
	"./uz-latn.js": 561,
	"./uz.js": 560,
	"./vi": 562,
	"./vi.js": 562,
	"./x-pseudo": 563,
	"./x-pseudo.js": 563,
	"./yo": 564,
	"./yo.js": 564,
	"./zh-cn": 565,
	"./zh-cn.js": 565,
	"./zh-hk": 566,
	"./zh-hk.js": 566,
	"./zh-mo": 567,
	"./zh-mo.js": 567,
	"./zh-tw": 568,
	"./zh-tw.js": 568
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 886;

/***/ }),

/***/ 889:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native__ = __webpack_require__(129);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by yeradiaz on 1/6/17.
 */


//import {CharacteristicPage} from '../characteristic/characteristic';

var DevicePage = (function () {
    function DevicePage(navParams, nav) {
        this.navParams = navParams;
        this.nav = nav;
        this.connecting = true;
        this.characteristics = [];
        this.device = this.navParams.get('device');
        this.connecting = true;
        this.connect(this.device.id);
    }
    DevicePage.prototype.connect = function (deviceID) {
        var _this = this;
        this.characteristics = [];
        __WEBPACK_IMPORTED_MODULE_2_ionic_native__["a" /* BLE */].connect(deviceID).subscribe(function (peripheralData) {
            console.log(peripheralData.characteristics);
            _this.characteristics = peripheralData.characteristics;
            _this.connecting = false;
        }, function (peripheralData) {
            console.log("disconnected");
        });
    };
    DevicePage.prototype.connectToCharacteristic = function (deviceID, characteristic) {
        console.log("Connect To Characteristic");
        console.log(deviceID);
        console.log(characteristic);
    };
    return DevicePage;
}());
DevicePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Hui\Documents\UTVCO-Trabajos\Administración de base de datos\App-SB\App\src\pages\device\device.html"*/'<!--<ion-header>\n  <ion-navbar #navbar>\n  <ion-title>{{device.name}}</ion-title>\n</ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list inset>\n    <ion-item-sliding *ngFor="#characteristic of characteristics" #slidingItem>\n      <button ion-item (click)="connectToCharacteristic(device.id,characteristic)">\n        <h2>{{characteristic.characteristic}}</h2>\n        <p>{{characteristic.properties}}</p>\n        <p>{{characteristic.isNotifying}}</p>\n        <p>{{characteristic.service}}</p>\n      </button>\n    </ion-item-sliding>\n  </ion-list>\n  <ion-spinner *ngIf="connecting==true" name="circles"></ion-spinner>\n</ion-content>\n-->\n'/*ion-inline-end:"C:\Users\Hui\Documents\UTVCO-Trabajos\Administración de base de datos\App-SB\App\src\pages\device\device.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], DevicePage);

//# sourceMappingURL=device.js.map

/***/ })

},[571]);
//# sourceMappingURL=main.js.map