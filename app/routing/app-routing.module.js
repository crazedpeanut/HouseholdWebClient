"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var journal_component_1 = require("../component/journal.component");
var dashboard_component_1 = require("../component/dashboard.component");
var messages_component_1 = require("../component/messages.component");
var routes = [
    {
        path: "",
        redirectTo: "/dashboard",
        pathMatch: "full"
    },
    {
        path: "journal/:id",
        component: journal_component_1.JournalComponent
    },
    {
        path: "dashboard",
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: "messages",
        component: messages_component_1.MessagesComponent
    }
];
var AppRoutingModule = AppRoutingModule_1 = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.forRoot = function () {
        return {
            ngModule: AppRoutingModule_1,
        };
    };
    return AppRoutingModule;
}());
AppRoutingModule = AppRoutingModule_1 = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
var AppRoutingModule_1;
//# sourceMappingURL=app-routing.module.js.map