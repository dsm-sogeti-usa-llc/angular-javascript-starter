import {SideNavigationController} from './SideNavigationController';

describe('SideNavigationController', () => {
    var $q;
    var $state;
    var $rootScope;
    var createController;
    var navigationService;
    
    beforeEach(angular.mock.module('app'))
    
    beforeEach(angular.mock.inject(function(_$controller_, _$q_, _$rootScope_, _$state_, _$mdMedia_, _$mdSidenav_, _NavigationService_) {
        $q = _$q_;
        $state = _$state_;
        $rootScope = _$rootScope_;
        navigationService = _NavigationService_;
        
        this.$mdMedia = _$mdMedia_;
        this.$mdSidenav = _$mdSidenav_;
        
        createController = () => {
            return _$controller_(SideNavigationController, {
                $state: $state,
                $mdMedia: this.$mdMedia,
                $mdSidenav: this.$mdSidenav,
                NavigationService: navigationService 
            });
        }
    }));
    
    it('should be docked open', function() {
       spyOn(this, '$mdMedia').and.callFake(function(size) {
           return size === 'gt-md';
       });
       
       var controller = createController();
       expect(controller.isDockedOpen).toBeTruthy();
    });
    
    it('should get all pages', function() {
        var pages = [{}, {}, {}]
         spyOn(navigationService, 'getPages').and.returnValue($q.resolve(pages));
         
         var controller = createController();
         $rootScope.$digest();
         
         expect(controller.pages).toEqual(pages);
    });
    
    it('should go to page', function() {
        spyOn($state, 'go').and.callFake(function() {});
        
        var sideNav = jasmine.createSpyObj('sideNav', ['close']);
        spyOn(this, '$mdSidenav').and.callFake(function() {return sideNav; });
        
        var controller = createController();
        controller.goToPage({url: '/something'});
        expect($state.go).toHaveBeenCalledWith({
            url: '/something'
        });
        expect(this.$mdSidenav).toHaveBeenCalledWith('left');
        expect(sideNav.close).toHaveBeenCalled();
    });
    
    it('should be active', function() {
        $state.current = { name: 'stuff' };
        
        var controller = createController();
        expect(controller.isActive($state.current)).toBeTruthy();   
    });
});