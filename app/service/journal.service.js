"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var journal_1 = require("../model/journal");
var journal_image_1 = require("../model/journal-image");
var JournalService = (function () {
    function JournalService() {
    }
    JournalService.prototype.getJournalById = function (id) {
        console.log("Getting journal with id: " + id);
        return Promise.resolve(new journal_1.Journal(0, []));
    };
    JournalService.prototype.createJournalEntry = function (journalEntry) {
        journalEntry.createdDateTime = '2003-06-20T23:23:00.003Z';
        return Promise.resolve(journalEntry);
    };
    JournalService.prototype.createJournalImage = function (imageFile) {
        return Promise.resolve(new journal_image_1.JournalImage(0, 'http://thumb1.shutterstock.com/display_pic_with_logo/2117717/285854987/stock-photo-food-table-healthy-delicious-organic-meal-concept-285854987.jpg', 'http://thumb1.shutterstock.com/display_pic_with_logo/2117717/285854987/stock-photo-food-table-healthy-delicious-organic-meal-concept-285854987.jpg'));
    };
    return JournalService;
}());
JournalService = __decorate([
    core_1.Injectable()
], JournalService);
exports.JournalService = JournalService;
//# sourceMappingURL=journal.service.js.map