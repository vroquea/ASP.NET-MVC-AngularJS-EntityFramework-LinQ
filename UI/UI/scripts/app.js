var app = angular.module("Dhamyc", ['ngRoute']);

app.filter('roundUp', function () {
    return function (input) {
        var output = Math.ceil(input);
        return output;
    }
});
app.controller('mainCtrl',function($scope){
});
app.controller('ProductsCtrl', function ($scope,$http) {
    $scope.products = [];
    swal({
        showLoaderOnConfirm: true,
        type: 'info',
        title: 'Cargando',
        text: 'Esto puede tomar unos segundos',
        showConfirmButton: false
    });
    $http.get('http://localhost:61510/api/Productos')
            .success(function (data) {
                $scope.products = data;
                swal.close();
            })
            .error(function () {
                swal({
                    showLoaderOnConfirm: true,
                    type: 'error',
                    title: 'Error',
                    text: 'Ha ocurrido un error, pruebe mas tarde',
                    showCancelButton: false,
                    showConfirmButton:false
                });
            });
    $scope.position = 10;
    $scope.nextProducts = function () {
        if ($scope.products.length > $scope.position) {
            $scope.position += 10;
        }
    };
    $scope.previousProducts = function () {
        if ($scope.position > 10) {
            $scope.position -= 10;
        }
    };
});
app.controller('CategoriesCtrl', function ($scope, $http) {
    $scope.categories = [];
    swal({
        showLoaderOnConfirm: true,
        type: 'info',
        title: 'Cargando',
        text: 'Esto puede tomar unos segundos',
        showConfirmButton: false
    });
    $http.get('http://localhost:61510/api/Categorias')
            .success(function (data) {
                $scope.categories = data;
                swal.close();
            })
            .error(function () {
                swal({
                    showLoaderOnConfirm: true,
                    type: 'error',
                    title: 'Error',
                    text: 'Ha ocurrido un error, pruebe mas tarde',
                    showCancelButton: false,
                    showConfirmButton: false
                });
            });
    $scope.position = 10;
    $scope.nextCategories = function () {
        if ($scope.categories.length > $scope.position) {
            $scope.position += 10;
        }
    };
    $scope.previousCategories= function () {
        if ($scope.position > 10) {
            $scope.position -= 10;
        }
    };
});

app.config(function ($routeProvider) {
    $routeProvider
         .when('/', {
            templateUrl: '/Home/Home',
            controller: 'mainCtrl'
        })
        .when('/Productos', {
            templateUrl: '/Productos/Index',
            controller: 'ProductsCtrl'
        })
        .when('/Categorias', {
            templateUrl: '/Categorias/Index',
            controller: 'CategoriesCtrl'
        })
        .otherwise({
            templateUrl: '/Home/Home',
            controller: 'mainCtrl'
        })
});