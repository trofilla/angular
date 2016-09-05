var validationApp = angular.module('exampleApp');

  validationApp.controller('mainController', function($scope) {

      $scope.submitForm = function() {

            if ($scope.userForm.$valid) {
                alert('Все работает');
            }

        };

    });
