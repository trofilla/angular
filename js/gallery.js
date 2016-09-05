angular.module('exampleApp')
  .controller('MainCtrl', function ($scope) {

    // Set of Photos
    $scope.photos = [
        {src: '../images/zanza.jpg',  desc: 'Image 01'},
        {src: '../images/iguasu.jpg', desc: 'Image 02'},
        {src: '../images/machu.jpg',  desc: 'Image 03'},
        {src: '../images/rio.jpg',    desc: 'Image 04'},
        {src: '../images/rome.jpg',   desc: 'Image 05'},
        {src: '../images/tanz.jpg',   desc: 'Image 06'},
        {src: '../images/uyuni.jpg',  desc: 'Image 07'}
    ];

    // initial image index
    $scope._Index = 0;

    // if a current image is the same as requested image
    $scope.isActive = function (index) {
        return $scope._Index === index;
    };

    // show prev image
    $scope.showPrev = function () {
        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
    };

    // show next image
    $scope.showNext = function () {
        $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
    };

    // show a certain image
    $scope.showPhoto = function (index) {
        $scope._Index = index;
    };
});
