import {NgModule, ModuleWithProviders} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JournalComponent} from "../component/journal.component";
import {DashboardComponent} from "../component/dashboard.component";
import {MessagesComponent} from "../component/messages.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/dashboard",
        pathMatch: "full"
    },
    {
        path: "journal/:id",
        component: JournalComponent
    },
    {
        path: "dashboard",
        component: DashboardComponent
    },
    {
        path: "messages",
        component: MessagesComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule]
})
export class AppRoutingModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AppRoutingModule,
        }
    }
}