export class FamilyService {
    constructor($q) {
        this.$q = $q;
    }
    
    getFamilies() {
        return this.$q.resolve(this.createFamilies(4));
    }
    
    createFamilies(count) {
        return [
            {
                name: 'Klinker',
                members: [
                    {
                        name: 'Kris',
                        family: {
                            name: 'Klinker',
                            members: [
                                {
                                    name: 'Bryce',
                                    family: {
                                        name: 'Klinker',
                                        members: [
                                            { name: 'Sophia' },
                                            { name: 'Wyatt' }
                                        ]
                                    }
                                },
                                {
                                    name: 'Stacey',
                                    family: {
                                        name: 'Hale',
                                        members: [
                                            { name: 'Sophia'},
                                            { name: 'Wyatt' }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        ];
    }
}

FamilyService.$inject = ['$q'];

angular.module('app')
    .service('FamilyService', FamilyService);