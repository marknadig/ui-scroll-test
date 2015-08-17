var appModule = angular.module('scrollerTestApp', ['ui.scroll'])
  .controller('ScrollerController', ['$scope', '$log', function($scope, $log) {

    var self = this;
    $scope.imageDataSourceAdapter = {};

    $scope.imageDataSource = {
      get : function (index, count, callback) {
        var i, items = [], item;

        $log.info ("data source get : index=" + index + ", count=" + count);

        // Catch cases where all requested items are below our lower limit
        if (index + count <= 1) {
          callback ([]);
          return;
        }

        // Limit to items# >= 1
        if (index < 1)
          index = 1;

        // bail if infinite
        if (index > 100) {
          $log.warn("too many requests");
        } else {
          for (i = index; i < index + count; i++) {
            item = {
              description: "Item : " + i,
              imageURL: "http://placehold.it/96x96&text=" + i
            };
            items.push(item);
          }
        }
        callback (items);
      }
    }
  }]);
