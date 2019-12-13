(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Slides</title>\n    <script type=\"module\" src=\"https://cdn.jsdelivr.net/npm/@ionic/core@4.7.4/dist/ionic/ionic.esm.js\"></script>\n    <script nomodule src=\"https://cdn.jsdelivr.net/npm/@ionic/core@4.7.4/dist/ionic/ionic.js\"></script>\n    <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/@ionic/core@4.7.4/css/ionic.bundle.css\"/>\n  <ion-toolbar color=\"tertiary\">\n    <ion-title>Películas</ion-title>\n\n    <div class=\"botones\">\n\n        <ion-button  color=\"tertiary\" (click)=\"favorito()\">\n            <ion-icon block outline ios=\"ios-heart\" md=\"md-heart\" color=\"danger\"></ion-icon>\n          </ion-button>\n          <ion-button color=\"white\" (click)=\"exitUser()\">\n            <ion-icon ios=\"ios-exit\" md=\"md-exit\"></ion-icon>\n          </ion-button>\n    </div>\n  \n  </ion-toolbar>\n\n\n</ion-header>\n\n\n  <ion-router-outlet main></ion-router-outlet>\n<ion-content>\n\n \n  \n  <ion-card>\n    <ion-item-sliding *ngFor=\"let pelis of pelisRooms\" >\n   \n        <ion-item lines=\"inset\" button [routerLink]=\"['/info-pelis', pelis.id]\">\n\n            <ion-img class=\"img\" src={{pelis.img}}></ion-img>\n  \n        <ion-label class=\"descripcion\">\n          <h2><b>{{pelis.Titulo}}</b></h2>\n          <h3>Rating: {{pelis.Director}}/5</h3>\n          <h3>Genero: {{pelis.Genero}}</h3>\n          <h3>Descripcion: {{pelis.Descripcion}}</h3> \n          \n          \n      </ion-label>\n        </ion-item>\n         \n    </ion-item-sliding>\n  \n    \n  </ion-card>\n\n \n    \n</ion-content>\n<ion-fab-button size=\"large\" color=\"warning\" vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" (click)=\"add()\" >\n    <ion-icon class=\"add\" ios=\"ios-add-circle\" md=\"md-add-circle\"></ion-icon>\n\n  </ion-fab-button>\n"

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".con-cajas {\n  background-color: rgba(34, 32, 32, 0.692);\n}\n\n.img {\n  width: 60px;\n  height: 100px;\n}\n\n.add {\n  width: 30px;\n  height: 35px;\n}\n\n:root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\n.swiper-slide {\n  display: block;\n}\n\nion-slide > h2 {\n  margin-top: 2.8rem;\n}\n\nion-slide > img {\n  max-height: 50%;\n  max-width: 60%;\n  margin: 36px 0;\n}\n\n.descripcion {\n  margin-left: 20px;\n}\n\n.botones {\n  margin-left: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXEphaW1lXFxEZXNrdG9wXFxNZW93TW92aWVzXFxteUFwcC9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5Q0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLDRCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxjQUFBO0FDRUo7O0FEQUU7RUFDRSxrQkFBQTtBQ0dKOztBRERFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDSUo7O0FERkU7RUFDRSxpQkFBQTtBQ0tKOztBREZFO0VBQ0Usa0JBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29uLWNhamFzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM0LCAzMiwgMzIsIDAuNjkyKTtcbn1cblxuLmltZ3tcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uYWRke1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzVweDtcbn1cblxuOnJvb3Qge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcbiAgfVxuICAuc3dpcGVyLXNsaWRlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBpb24tc2xpZGUgPiBoMiB7XG4gICAgbWFyZ2luLXRvcDogMi44cmVtO1xuICB9XG4gIGlvbi1zbGlkZSA+IGltZyB7XG4gICAgbWF4LWhlaWdodDogNTAlO1xuICAgIG1heC13aWR0aDogNjAlO1xuICAgIG1hcmdpbjogMzZweCAwO1xuICB9XG4gIC5kZXNjcmlwY2lvbntcbiAgICBtYXJnaW4tbGVmdCA6IDIwcHg7XG4gIH1cblxuICAuYm90b25lc3tcbiAgICBtYXJnaW4tbGVmdCA6IDI1MHB4O1xuICB9IiwiLmNvbi1jYWphcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzQsIDMyLCAzMiwgMC42OTIpO1xufVxuXG4uaW1nIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi5hZGQge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG46cm9vdCB7XG4gIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XG4gIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW9uLXNsaWRlID4gaDIge1xuICBtYXJnaW4tdG9wOiAyLjhyZW07XG59XG5cbmlvbi1zbGlkZSA+IGltZyB7XG4gIG1heC1oZWlnaHQ6IDUwJTtcbiAgbWF4LXdpZHRoOiA2MCU7XG4gIG1hcmdpbjogMzZweCAwO1xufVxuXG4uZGVzY3JpcGNpb24ge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmJvdG9uZXMge1xuICBtYXJnaW4tbGVmdDogMjUwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_peliculas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/peliculas.service */ "./src/app/services/peliculas.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");









let HomePage = class HomePage {
    constructor(nav, afAuth, authSvc, route, peliservice, modal, router) {
        this.nav = nav;
        this.afAuth = afAuth;
        this.authSvc = authSvc;
        this.route = route;
        this.peliservice = peliservice;
        this.modal = modal;
        this.router = router;
        this.pelisRooms = [];
    }
    ngOnInit() {
        this.peliservice.getpeliculasRooms().subscribe(pelis => {
            this.pelisRooms = pelis;
            this.peliId = this.route.snapshot.params['id'];
        });
    }
    exitUser() {
        console.log("salir");
        console.log('Logout');
        this.afAuth.auth.signOut();
        location.replace("/login");
    }
    favorito() {
        this.nav.navigateForward('/favoritos');
    }
    ionViewWillEnter() {
        this.peliservice.getpeliculasRooms().subscribe(pelis => {
            this.pelisRooms = pelis;
            this.peliId = this.route.snapshot.params['id'];
        });
    }
    openPelis(pelis) {
        this.router.navigateByUrl('info-pelis');
    }
    add() {
        this.router.navigateByUrl('add-peliculas');
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_peliculas_service__WEBPACK_IMPORTED_MODULE_2__["PeliculasService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"], _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_peliculas_service__WEBPACK_IMPORTED_MODULE_2__["PeliculasService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map