//import './sampleForm/controllers/SampleFormController';
import './sampleForm/SampleFormDirective';

export class HomeDirective {
    constructor() {
        this.scope = {};
        this.template = require('./templates/home');
    }
    
    static factory() {
        return new HomeDirective();
    }
}
angular.module('app')
    .directive('home', HomeDirective.factory);