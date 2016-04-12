export class ToolbarController {
    get title() {
        return this.$state.current.title;
    }
    
    get showNavToggle() {
        return !this.$mdMedia('gt-md');
    }
    
    constructor($state, $mdMedia, $mdSidenav) {
        this.$state = $state;
        this.$mdMedia = $mdMedia;
        this.$mdSidenav = $mdSidenav;
    }
    
    toggleNav() {
        this.$mdSidenav('left').toggle();
    }
}
ToolbarController.$inject = [
    '$state',
    '$mdMedia',
    '$mdSidenav'
];