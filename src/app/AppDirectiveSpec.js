import {AppDirective} from './AppDirective';
import {AppController} from './controllers/AppController';

describe('AppDirective', () => {
    var $injector;
    var directive;
    
    beforeEach(angular.mock.module('app'));
    
    beforeEach(angular.mock.inject((_$injector_) => {
        $injector = _$injector_;
        directive = new AppDirective();      
    }));
    
    it('should isolate scope', () => {
        expect(directive.scope).toEqual({});
    });
    
    it('should specify controller', () => {
        expect(directive.controller).toBe(AppController); 
    });
    
    it('should specify controller as', () => {
        expect(directive.controllerAs).toBe('$app');
    });
    
    it('should specify template', () => {
        expect(directive.template).toBe(require('./templates/app')); 
    });
    
    it('should register with angular', () => {
        expect($injector.has('appDirective')).toBeTruthy(); 
    });
    
    it('should include toolbar', () => {
        expect($injector.has('toolbarDirective')).toBeTruthy(); 
    });
    
    it('should include side navigation', () => {
        expect($injector.has('sideNavigationDirective')).toBeTruthy(); 
    });
});