bestRestaurant.controller('RestaurantCtrl', function RestaurantCtrl($scope) {
  $scope.restaurants = [];
  $scope.addRestaurant = function() {
    $scope.restaurants.push({ name: $scope.restaurantName, type: $scope.restaurantType, price: $scope.restaurantPrice, comments: $scope.restaurantComments });
    $scope.restaurantName = null;
    $scope.restaurantType = null;
    $scope.restaurantPrice = null;
    $scope.restaurantComments = null;
  };
});
