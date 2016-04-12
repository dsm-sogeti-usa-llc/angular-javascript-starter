import {SideNavigationDirective} from './SideNavigationDirective';
import {SideNavigationController} from './controllers/SideNavigationController';

describe('SideNavigationDirective', () => {
    var $injector;
    var directive;
    
    beforeEach(angular.mock.module('app'));
    
    beforeEach(angular.mock.inject((_$injector_) => {
        $injector = _$injector_;
        directive = new SideNavigationDirective();
    }));
    
    it('should isolate scope', () => {
        expect(directive.scope).toEqual({}); 
    });
    
    it('should specify controller', () => {
        expect(directive.controller).toBe(SideNavigationController); 
    });
    
    it('should specify controller as', () => {
        expect(directive.controllerAs).toBe('$sideNav'); 
    });
    
    it('should specify template', () => {
        expect(directive.template).toBe(require('./templates/sideNavigation'));
    });
    
    it('should register with angular', () => {
        expect($injector.has('sideNavigationDirective')).toBeTruthy(); 
    });
});