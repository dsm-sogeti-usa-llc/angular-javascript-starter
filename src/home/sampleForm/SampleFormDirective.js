import {SampleFormController} from './controllers/SampleFormController';

export class SampleFormDirective {
    constructor() {
        this.scope = {};
        this.template = require('./templates/sampleForm');
        this.controller = SampleFormController;
        this.controllerAs = '$ctrl';
    }
    
    static factory() {
        return new SampleFormDirective();
    }
}

angular.module('app')
    .directive('sampleForm', SampleFormDirective.factory);