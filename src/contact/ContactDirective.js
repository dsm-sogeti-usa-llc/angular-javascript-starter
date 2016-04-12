import {ContactController} from './controllers/ContactController';

import './family/FamilyDirective';
export class ContactDirective {
    constructor() {
        this.scope = {};
        this.controller = ContactController;
        this.controllerAs = '$contact';
        this.template = require('./templates/contact');
    }
    
    static factory() {
        return new ContactDirective();    
    }
}

angular.module('app')
    .directive('contact', ContactDirective.factory);