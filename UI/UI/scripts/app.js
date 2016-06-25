var app = angular.module("Dhamyc", []);

app.controller('ProductsCtrl', function ($scope,$http) {
    $scope.products = {};
    swal({
        showLoaderOnConfirm: true,
        type: 'info',
        title: 'Cargando',
        text: 'Esto puede tomar unos segundos'
    });
    $http.get('http://localhost:61510/api/Productos')
            .success(function (data) {
                console.info(data);
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

});