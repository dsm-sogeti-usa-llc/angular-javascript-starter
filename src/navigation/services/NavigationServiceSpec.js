describe('NavigationService', () => {
    var $q;
    var $rootScope;
    var navigationService;
    
    beforeEach(angular.mock.module('app'));
    
    beforeEach(angular.mock.inject(function(_$q_, _$rootScope_, _NavigationService_) {
        $q = _$q_;
        $rootScope = _$rootScope_;
        navigationService = _NavigationService_;    
    }));   
    
    it('should find return all pages', (done) => {
        var expectedPages = getPages();
            
        navigationService.getPages().then(function(pages) {
             expect(pages.length).toBe(expectedPages.length);
             done();
        }); 
        $rootScope.$digest();
    });
    
    it('should order pages by order', (done) => {
        var expectedPages = getPages().quickSort(function(p) { return p.order; });
        
        navigationService.getPages().then(function(pages) {
            for(var i = 0; i < expectedPages.length; i++) 
                expect(pages[i].title).toBe(expectedPages[i].title);
            done();
        });
        $rootScope.$digest();
    })
    
    function getPages() {
        var context = require.context('../..', true, /Page$/);
        return context.keys().map(context)
            .map(function(item) {
                for (var key in item) {
                    if (item.hasOwnProperty(key))
                        return item[key];
                }
                return item;
            })
            .filter(function(s) { return s !== undefined; })
            .filter(function(s) { return s.title !== undefined; })
            .filter(function(s) { return s.parent === undefined; });
    }
});