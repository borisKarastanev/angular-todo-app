/**
 * Created by boris on 7/15/16.
 */

var app = angular.module('todoApp', []);

app.controller('app', function ($scope, $http) {

    $scope.getAllTodos = function () {
        $http.get('/api/todos/').then(function(res) {
            console.log(res);
            $scope.myTasks = res.data;
        }, function (err) {
            console.log(err);
        });
    };

    $scope.addTask = function (task) {
        $scope.newTask = {};
        var newTask = $scope.newTask = angular.copy(task);
        newTask = JSON.stringify(newTask);
        $http.post('/api/todos/', newTask).then(function(res){
            console.log(res);

        }, function (err){
            console.log(err);
        });
        $scope.getAllTodos();
    };
});

