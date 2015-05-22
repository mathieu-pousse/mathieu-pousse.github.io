'use strict';

angular.module('mathieuPoussegithubiox')
  .controller('MainCtrl', function ($scope, $http) {
     $scope.activities = {};
     $http.get('/app/data/activities.json')
          .success(function(data, status, headers, config) {
            $scope.activities = data;
            $(document).ready(function() {
                $('#fullpage').fullpage({
                    anchors: ['header', 'previously', 'oss', 'social'],
                    menu: '#menu', 
                    css3: true
                  });
            });
          })
          .error(function(data, status, headers, config) {
            // oops...
          });

  });
