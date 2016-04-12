import './ContactDirective';

const ContactPage = {
    url: '/contact',
    name: 'contact',
    title: 'Contact',
    order: 2,
    template: '<contact></contact>'
};

angular.module('app')
    .config([
        '$stateProvider', 
        ($stateProvider) => {
            $stateProvider.state(ContactPage);
        }
    ])

export {ContactPage};