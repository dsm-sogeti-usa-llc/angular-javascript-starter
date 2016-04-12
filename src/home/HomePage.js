import './HomeDirective';

const HomePage = {
    name: 'home',
    title: 'Home',
    url: '/home',
    template: '<home></home>',
    order: 1
};

angular.module('app')
    .config([
        '$stateProvider', 
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $stateProvider.state(HomePage);
            $urlRouterProvider.otherwise(HomePage.url);
        }
    ])

export {HomePage};