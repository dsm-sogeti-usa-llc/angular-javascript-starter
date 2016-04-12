import {HomePage} from './HomePage';

describe('HomePage', () => {
    var $state;

    beforeEach(angular.mock.module('app'));

    beforeEach(angular.mock.inject((_$state_) => {
        $state = _$state_;
    }));

    it('should specify template', () => {
        expect(HomePage.template).toBe('<home></home>');
    });

    it('should specify url', () => {
        expect(HomePage.url).toBe('/home');
    });

    it('should specify title', () => {
        expect(HomePage.title).toBe('Home');
    });

    it('should specify name', () => {
        expect(HomePage.name).toBe('home');
    });

    it('should specify order', () => {
        expect(HomePage.order).toBe(1);
    });

    it('should register state', () => {
        expect($state.get(HomePage)).toBeTruthy();
    });
});