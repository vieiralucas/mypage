'use strict';

/**
 * @ngdoc function
 * @name app.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the app
 */
angular.module('app')
    .controller('HomeCtrl', function ($scope) {
        var imgs = [];

        $.getJSON('lolcommits.json', function(data) {

            $.each(data, function(repo, commits) {
                $.each(commits, function(commit, img) {
                    imgs.push(img);
                });
            });

            $scope.lolcommits = shuffle(imgs);
            $scope.$apply();

            $('#myCarousel').carousel({
                interval: 500
            });
        });

        // THANKS TO STACKOVERFLOW
        function shuffle(a,b,c,d){
            //array,placeholder,placeholder,placeholder
            c=a.length;while(c)b=Math.random()*(--c+1)|0,d=a[c],a[c]=a[b],a[b]=d;
            return a;
        }
  });
