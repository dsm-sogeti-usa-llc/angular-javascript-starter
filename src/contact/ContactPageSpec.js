import {ContactPage} from './ContactPage';

describe('ContactPage', () => {
    var $state;
    
    beforeEach(angular.mock.module('app'));
    
    beforeEach(angular.mock.inject((_$state_) => {
        $state = _$state_;
    }));
    
    it('should specify template', () => {
        expect(ContactPage.template).toBe('<contact></contact>'); 
    });
    
    it('should specify url', () => {
        expect(ContactPage.url).toBe('/contact');
    });
    
    it('should specify title', () => {
        expect(ContactPage.title).toBe('Contact');
    });
    
    it('should specify name', () => {
        expect(ContactPage.name).toBe('contact'); 
    });
    
    it('should specify order', () => {
        expect(ContactPage.order).toBe(2);
    });
    
    it('shoud register state', () => {
        expect($state.get(ContactPage)).toBeTruthy();
    })
});