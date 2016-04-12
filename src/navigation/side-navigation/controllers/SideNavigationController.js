require('../../services/NavigationService');
export class SideNavigationController {
    get isDockedOpen() {
        return this.$mdMedia('gt-md');
    }
    
    constructor($state, $mdMedia, $mdSidenav, NavigationService) {
        this.$state = $state;
        this.$mdMedia = $mdMedia;
        this.$mdSidenav = $mdSidenav;
        NavigationService.getPages().then((pages) => {
            this.pages = pages; 
        });
    }
    
    goToPage(page) {
        this.$state.go(page);
        this.$mdSidenav('left').close();
    }
    
    isActive(page) {
        return this.$state.current === page;
    }
}
SideNavigationController.$inject = [
    '$state', 
    '$mdMedia', 
    '$mdSidenav',
    'NavigationService'
];