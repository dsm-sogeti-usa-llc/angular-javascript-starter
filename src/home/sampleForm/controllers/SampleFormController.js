// This is often how you will see sample applications for angular.
// However, I'm not sure this is the best way to organize your application logic.
angular.module('app')
    .controller('SampleFormController', [
        '$scope',
        '$http',
        // Notice above the string names. The order must match the function parameter order.
        function($scope, $http) {
            // Generally inside of the controller constructor function you will set/add everything you need to the $scope object.
            $scope.search = 'TDD';
            
            $scope.submit = function() {
                $http.get('https://api-sogetiacademy.azurewebsites.net/topics')
                    .then(getTopicsDone, getTopicsFail)
            }
            
            function getTopicsDone(response) {
                $scope.topics = response.data.topics.map(t => t.name);
            }
            
            function getTopicsFail(response) {
                
            }
        }
    ]);
    
 // Or you could do this instead...
 export class SampleFormController {
     constructor($http) {
         this.$http = $http;
         this.form = this.form || {};
         this.search = 'TDD';
     }
     
     submit() {
         this.$http.get('https://api-sogetiacademy.azurewebsites.net/topics')
            .then((response) => this.getTopicsDone(response), (response) => this.getTopicsFail(response));
     }
     
     getTopicsDone(response) {
         this.topics = response.data.topics.map(t => t.name);
     }
     
     getTopicsFail(response) {
         
     }
 }
 
 SampleFormController.$inject = ['$http'];