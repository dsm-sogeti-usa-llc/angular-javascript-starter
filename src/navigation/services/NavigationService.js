require('../../core/array/quickSort');
var context = require.context('../..', true, /Page$/);
var pages = context.keys().map(context)
    .map(function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return obj[key];
        }
        return obj; 
    })
    .filter(function(s) { return s !== undefined; })
    .filter(function(s) { return s.title !== undefined; })
    .filter(function(s) { return s.parent === undefined; })
    .quickSort(function(p) { return p.order; });

export class NavigationService {
    constructor($q) {
        this.$q = $q;
    }
    
    getPages() {
        return this.$q.resolve(pages);
    }
}
NavigationService.$inject = ['$q'];

angular.module('app').service('NavigationService', NavigationService);