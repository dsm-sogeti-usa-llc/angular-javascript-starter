import {FamilyMemberController} from './controllers/FamilyMemberController';

export class FamilyMemberDirective {
    constructor() {
        this.restrict = 'E';
        this.scope = {};
        this.controller = FamilyMemberController;
        this.controllerAs = '$famMember';
        this.template = require('./templates/familyMember');
        this.bindToController = {
            familyMember: '='
        }
    }
    
    static factory() {
        return new FamilyMemberDirective();
    }
}

angular.module('app')
    .directive('familyMember', FamilyMemberDirective.factory);