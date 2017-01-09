import {EntryFormImage} from "./entry-form-image";
import {HouseholdUser} from "./household-user";
export class JournalEntryForm {

    constructor(public title: string = null,
                public content: string = null,
                public createdDateTime: string = null,
                public entryFormImages: EntryFormImage[] = [],
                public taggedUsers: HouseholdUser[] = []
    ){ }
}