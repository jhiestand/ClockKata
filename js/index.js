function MyController($scope) {
  $scope.clock = {
    time : new Date()
  }
    var updateClock = function () {
        $scope.clock.now = new Date();
		};

    setInterval(function () {
        $scope.$apply(updateClock);
    });
		
    updateClock();
}