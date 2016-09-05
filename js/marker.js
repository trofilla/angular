angular.module('exampleApp')
      .config(function(uiGmapGoogleMapApiProvider) {
          uiGmapGoogleMapApiProvider.configure({
              v: '3.20', //defaults to latest 3.X anyhow
              libraries: 'weather,geometry,visualization'
          });
      })
      .controller('markerCtrl', function($scope, $http) {
         $scope.map = {
            center: { latitude: 49.823882, longitude: 24.034922 },
            zoom: 11
         };

         $scope.markers = [];
         $http.get('../js/markers.json')
         .then(function(response) {
           var markers = response.data;

           _.each(markers, function(marker) {
             marker.coords = {
               latitude: marker.latitude,
               longitude: marker.longitude
             }
           })
          //  $scope.name=$rootScope.name
          //   console.log($scope.name);

          $scope.markers = markers;
         })


      })
