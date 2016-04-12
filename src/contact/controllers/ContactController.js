import '../services/FamilyService';

export class ContactController {
    constructor(FamilyService) {
        FamilyService.getFamilies()
            .then((families) => this.families = families); 
    }
}
ContactController.$inject = ['FamilyService'];