var app = angular.module("Dhamyc", []);

app.filter('roundUp', function () {
    return function (input) {
        var output = Math.ceil(input);
        return output;
    }
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
                    text: 'Ha ocurrido un error, pruebe mas tade',
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