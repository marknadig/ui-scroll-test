var appModule = angular.module('scrollerTestApp', ['ui.scroll'])
  .controller('ScrollerController', ['$scope', '$log', '$timeout', function($scope, $log, $timeout) {

    var self = this;
    $scope.imageDataSourceAdapter = {};

    $scope.imageDataSource = {
      get : function (index, count, callback) {
        var i, items = [], item;

        $log.info ("data source get : index=" + index + ", count=" + count);

        // Catch cases where all requested items are below our lower limit
        if (index < 1 && index > -count) {
          count = count + index - 1;
          index = 1;
        }

        for (i = index; i < index + count; i++) {
          item = {
            description: "Item : " + i,
            imageURL: "http://placehold.it/96x96&text=" + i
          };
          items.push(item);
        }
        // no help: $timeout( function() {callback(items);})
        callback(items);
      }
    }
  }]);
