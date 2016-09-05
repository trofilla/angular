var mapPositioningApp = angular.module('exampleApp');
mapPositioningApp.controller('MapPositioning', ['$scope', '$http', function($scope, $http) {
    $scope.cities = [];

    $scope.map;
    $scope.infoBox = new google.maps.InfoWindow();
    var mapContainer = document.getElementById('map');
    mapContainer.style.width = '70%';
    mapContainer.style.height = '500px';

    $http.get('../js/data.json').success(function(data) {
        $scope.cities = data;
    });

    $scope.initialize = function() {
        var mapOptions = {
            center: new google.maps.LatLng(49.85, 24.03),
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        $scope.map = new google.maps.Map(mapContainer, mapOptions);

      }


    $scope.showCity = function(city) {
        var coords = new google.maps.LatLng(city.lat, city.lng);
        $scope.infoBox.setContent(city.city + ' - ' + city.desc);
        $scope.infoBox.setPosition(coords);
        $scope.infoBox.open($scope.map);
        $scope.map.setCenter(coords);
    }

}]);

// angular.element(document).ready(function() {
// angular.bootstrap(document.getElementById("App2"), ['mapPositioningApp']);
//  });
