import {SideNavigationController} from './controllers/SideNavigationController';

require('./styles/sideNav');
export class SideNavigationDirective {
    constructor() {
        this.scope = {};
        this.controller = SideNavigationController;
        this.controllerAs = '$sideNav';
        this.template = require('./templates/sideNavigation');
    }

    static factory() {
        return new SideNavigationDirective();
    }
}
angular.module('app')
    .directive('sideNavigation', SideNavigationDirective.factory);