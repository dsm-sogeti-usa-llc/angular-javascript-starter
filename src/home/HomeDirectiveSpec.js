import {HomeDirective} from './HomeDirective';

describe('HomeDirective', () => {
     var $injector;
     var directive;
     
     beforeEach(angular.mock.module('app'));
     
     beforeEach(angular.mock.inject((_$injector_) => {
        $injector = _$injector_;
        directive = new HomeDirective();
     }));
     
     it('should isolate scope', () => {
        expect(directive.scope).toEqual({});
     });
     
     it('should specify template', () => {
        expect(directive.template).toBe(require('./templates/home'));
     });
     
     it('should register with angular', () => {
        expect($injector.has('homeDirective')).toBeTruthy();
     });
});