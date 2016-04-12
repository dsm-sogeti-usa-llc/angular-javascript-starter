import {FamilyController} from './controllers/FamilyController';

import './FamilyMemberDirective';
export class FamilyDirective {
    constructor() {
        this.restrict = 'E';
        this.scope = {};
        this.controller = FamilyController;
        this.controllerAs = '$fam';
        this.template = require('./templates/family');
        this.bindToController = {
            family: '='
        }
    }
    
    static factory() {
        return new FamilyDirective();
    }
}

angular.module('app')
    .directive('family', FamilyDirective.factory);