//Define Angular app

var app = angular.module("TodoListApp", []);

//Define controller
x = []

app.controller("todoListController", ['$scope', function($scope) {

    $scope.todos = []
    $scope.addTodo = function(todo) {
        if (todo != '' || typeof todo == undefined) {
	        $scope.todos.push(todo);
	        $scope.newItem = '';
	    }
        else { return false; }
        
    console.log($scope.todos)
    x = $scope.todos
    }
}]);


function myfunc(){
    console.log('hello, world')
    console.log(x)
    if(document.getElementById("emailer").value === '' || x.length === 0){
        console.log('its here')
        $('#todolister').css({'border': '3px solid #ff0000'});
        // alert('press enter')
    }
    else{      
        const tz = Date()
        console.log(tz);
        var url = 'http://18.212.10.40:8080/api/addGoals'
        var request = new XMLHttpRequest();
        var parm = {
            email: document.getElementById("emailer").value,
            time: document.getElementById('timer').value,
            todo: (x),
            date: Date()
        }
        var params = JSON.stringify(parm)
        request.open('POST', url, true);
        // request.onreadystatechange = function() {if (request.readyState==4) alert("It worked!");};
        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
                if (this.responseText === 'hello'){
                    window.location.href = "final.html";
                }
            }
        };
        request.setRequestHeader("Content-type", "application/json");
        request.send(params);
    }
}