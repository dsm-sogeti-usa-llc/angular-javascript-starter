import {ToolbarController} from './ToolbarController';

describe('ToolbarController', () => {
    var $state;
    var createController;
    
    beforeEach(angular.mock.module('app'));
    
    beforeEach(angular.mock.inject(function(_$controller_, _$state_, _$mdMedia_, _$mdSidenav_) {
        $state = _$state_;
        
        this.$mdMedia = _$mdMedia_;
        this.$mdSidenav = _$mdSidenav_;
        
        createController = () => {
            return _$controller_(ToolbarController, {
                $state: $state,
                $mdMedia: this.$mdMedia,
                $mdSidenav: this.$mdSidenav
            });  
        };
    }));
    
    it('should use title of current state', function() {
        $state.current = { title: 'billy bob' };
        
        var controller = createController();
        expect(controller.title).toBe('billy bob'); 
    });
    
    it('should show nav toggle when less than large', function() {
        spyOn(this, '$mdMedia').and.callFake(function(size) {
            return size !== 'gt-md'; 
        });
        
        var controller = createController();
        expect(controller.showNavToggle).toBeTruthy();
    });
    
    it('should hide nav toggle when greater than medium', function() {
        spyOn(this, '$mdMedia').and.callFake(function(size) {
             return size === 'gt-md'
         });
         
         var controller = createController();
         expect(controller.showNavToggle).toBeFalsy(); 
    });
    
    it('should toggle side nav', function() {
        var sideNav = jasmine.createSpyObj('sideNav', ['toggle']);
        spyOn(this, '$mdSidenav').and.callFake(function() { return sideNav; });
        
        var controller = createController();
        controller.toggleNav();
        expect(this.$mdSidenav).toHaveBeenCalledWith('left');
        expect(sideNav.toggle).toHaveBeenCalled(); 
    });
});