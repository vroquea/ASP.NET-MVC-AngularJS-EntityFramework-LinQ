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
    $scope.init = function () {
        swal({
            showLoaderOnConfirm: true,
            type: 'info',
            title: 'Cargando',
            text: 'Esto puede tomar unos segundos',
            showConfirmButton: false
        });
        $http.get(document.location.origin + '/' + 'api/Productos', { headers: { 'Cache-Control': 'no-cache' } })
                .success(function (data) {
                    $scope.products = data;
                    console.info('Cargado');
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
    }

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
app.controller('ProductDetailCtrl', function ($scope, $http, $routeParams) {
    swal({
        showLoaderOnConfirm: true,
        type: 'info',
        title: 'Cargando',
        text: 'Esto puede tomar unos segundos',
        showConfirmButton: false
    });
    $scope.product = {};
    $scope.categories = [];
    $scope.productFinal = {};
    $scope.init = function () {
        $http.get(document.location.origin + '/' + 'api/Productos/' + $routeParams.ProductID)
        .success(function (data) {
            $scope.product = data;
            angular.copy(data, $scope.productFinal);
            $http.get(document.location.origin + '/' + 'api/Categorias')
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
            swal.close();
        })
        .error(function (data) {
            swal({
                showLoaderOnConfirm: true,
                type: 'error',
                title: 'Error',
                text: 'Ha ocurrido un error, pruebe mas tarde',
                showCancelButton: false,
                showConfirmButton: false
            });
        });
    };
    
    $scope.edit = true;

    $scope.enableEdit = function () {
        $scope.edit = false;
    };
    $scope.cancelEdit = function () {
        $scope.edit = true;
        angular.copy($scope.productFinal, $scope.product);
    };
    $scope.saveEdit = function () {

        swal({
            title: "¿Esta seguro?",
            text: "Se cambiara la información de este producto",
            type: "warning", showCancelButton: true,
            confirmButtonColor: "#009688",
            confirmButtonText: "Si",
            cancelButtonText: "No",
            closeOnConfirm: false,
            closeOnCancel: false
        }, function (isConfirm) {
            if (isConfirm) {
                angular.copy($scope.product, $scope.productFinal);
                swal({
                    showLoaderOnConfirm: true,
                    type: 'info',
                    title: 'Guardando',
                    text: 'Esto puede tomar unos segundos',
                    showConfirmButton: false
                });
                $http.post(document.location.origin + '/' + 'api/Productos', $scope.productFinal)
                    .success(function () {
                        swal({
                            title: "Actualizado!", text: "Se ha modificado el producto", type: 'success', timer: 1000, showConfirmButton: false
                        });
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
            }
            else {

                swal("Cancelado", "Se ha cancelado", "info");
            }
        });






        $scope.edit = true;
    };
});
app.controller('ProductNewCtrl', function ($scope, $http) {
    $scope.product = {};
    $scope.categories = [];
    $scope.init = function () {

        $http.get(document.location.origin + '/' + 'api/Categorias')
                    .success(function (data) {
                        $scope.categories = data;
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
    };
    $scope.save = function () {
        swal({
            title: "¿Esta seguro?",
            text: "Esta seguro de que desea insertar este nuevo producto",
            type: "warning", showCancelButton: true,
            confirmButtonColor: "#009688",
            confirmButtonText: "Si",
            cancelButtonText: "No",
            closeOnConfirm: false,
            closeOnCancel: false
        }, function (isConfirm) {
            if (isConfirm) {
                swal({
                    showLoaderOnConfirm: true,
                    type: 'info',
                    title: 'Guardando',
                    text: 'Esto puede tomar unos segundos',
                    showConfirmButton: false
                });
                $http.post(document.location.origin + '/' + 'api/Productos', $scope.product)
                    .success(function () {
                        swal({
                            title: "Guardado!", text: "Se ha insertado el producto", type: 'success', timer: 1000, showConfirmButton: false
                        });
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
            }
            else {

                swal("Cancelado", "Se ha cancelado", "info");
            }
        });

        $scope.edit = true;
    };
});
app.controller('CategoriesCtrl', function ($scope, $http) {
    $scope.categories = [];
    $scope.init = function () {
        swal({
            showLoaderOnConfirm: true,
            type: 'info',
            title: 'Cargando',
            text: 'Esto puede tomar unos segundos',
            showConfirmButton: false
        });
        $http.get(document.location.origin + '/' + 'api/Categorias')
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
    };
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
        .when('/Productos/Nuevo', {
            templateUrl: '/Productos/Nuevo',
            controller: 'ProductNewCtrl'
        })
        .when('/Producto/:ProductID', {
            templateUrl: 'Productos/Detalle',
            controller: 'ProductDetailCtrl'
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