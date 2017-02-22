angular.module('miniRouting').controller('productsCtrl', function($scope, productService, $stateParams){

  if($stateParams.id === 'shoes'){
    $scope.productHeader = "Shoes";
    $scope.products = productService.shoeData;
  } else if ($stateParams.id === 'socks'){
    $scope.productHeader = "Socks";
    $scope.products = productService.sockData;
  }

});
