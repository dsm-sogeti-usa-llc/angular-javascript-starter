import {AppController} from './controllers/AppController';

require('../navigation/side-navigation/SideNavigationDirective');
require('../toolbar/ToolbarDirective');

export class AppDirective {
    constructor() {
        this.controller = AppController;
        this.scope = {};
        this.controllerAs = '$app';
        this.template = require('./templates/app');
    }
    
    static factory() {
        return new AppDirective();    
    }    
}

angular.module('app')
    .directive('app', AppDirective.factory);