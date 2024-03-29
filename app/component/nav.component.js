"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var session_service_1 = require("../service/session.service");
var NavComponent = (function () {
    function NavComponent(sessionService) {
        this.sessionService = sessionService;
        this.isCollapsed = false;
    }
    NavComponent.prototype.ngOnInit = function () {
        this.currentUser = this.sessionService.getLoggedInUser();
        this.currentHousehold = this.sessionService.getCurrentHousehold();
    };
    return NavComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], NavComponent.prototype, "title", void 0);
NavComponent = __decorate([
    core_1.Component({
        selector: 'household-nav',
        templateUrl: 'app/template/nav.template.html',
        providers: [session_service_1.SessionService]
    }),
    __metadata("design:paramtypes", [session_service_1.SessionService])
], NavComponent);
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map