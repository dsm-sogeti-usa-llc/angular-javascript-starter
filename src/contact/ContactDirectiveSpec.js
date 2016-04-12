import {ContactDirective} from './ContactDirective';

describe('ContactDirective', () => {
    var $injector;
    var directive;
    
    beforeEach(angular.mock.module('app'));
    
    beforeEach(angular.mock.inject((_$injector_) => {
        $injector = _$injector_;
        directive = new ContactDirective();
    }));
    
    it('should isolate scope', () => {
        expect(directive.scope).toEqual({}); 
    });
    
    it('should specify template', () => {
        expect(directive.template).toBe(require('./templates/contact')); 
    });
});