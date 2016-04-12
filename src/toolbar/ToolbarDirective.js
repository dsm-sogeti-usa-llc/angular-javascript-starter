import {ToolbarController} from './controllers/ToolbarController';

export class ToolbarDirective {
    constructor() {
        this.scope = {};
        this.controller = ToolbarController;
        this.controllerAs = '$toolbar';
        this.template = require('./templates/toolbar');
    }

    static factory() {
        return new ToolbarDirective();    
    }
}

angular.module('app')
    .directive('toolbar', ToolbarDirective.factory);