var app = angular.module("myApp", ['ngRoute']);

	app.config(function($routeProvider) {
	    $routeProvider
	    .when("/", {
	        templateUrl : "index_content.php",
	        controller: "myCtrl"
	    })
	    .when("/listusers", {
	        templateUrl : "list_users.php",
	        controller: "listusersCtrl"
	        // controller: "myCtrl";
	    })
	});

	app.controller("myCtrl", function($scope, $http) {
		$scope.temp = [];
		$http.get("api/user/getUser.php").then(function(response) {
			$scope.users = response.data.users;
		});
	    $scope.listusers = [];
	    $scope.searchInput = function(){
	    	if (!$scope.input) {
	    		$scope.y = "";
	    	}
	    }
	    $scope.search= function(){
	    	$scope.y = $scope.input;
	    }
	    $scope.clickusers = function(x){
   			if (x.checked == true) {
   				$scope.temp.push({id: x.id,name: x.name, age: x.age, email: x.email});
   				if ($scope.temp.length == $scope.users.length) {
   					$scope.checkAll = true;
   					$scope.all = true;
   				}
   			}else{                            
   				var i=0;                            
   				while(i < $scope.temp.length){                                
   					if($scope.temp[i].id == x.id){                                    
   						$scope.temp.splice(i, 1);                                
   					}                                
   					i ++;                            
   				}
   				if ($scope.temp.length < $scope.users.length) {
   					$scope.all = false;
   				}                       
   			}
	    }
	    $scope.checkedAll = function(){
	    	if ($scope.users.length != 0 && $scope.checkAll == true) {
	    		$scope.temp = angular.copy($scope.users);
	    	}else{
	    		$scope.temp = [];
	    	}
	    }
	    $scope.addusers = function(){
	    	if ($scope.temp.length != 0) {
	    		$scope.listusers = $scope.listusers.concat($scope.temp);
		    	for (var i = 0; i < $scope.temp.length; i++) {
		    		for (var j = 0; j < $scope.users.length; j++) {
		    			if ($scope.users[j].id == $scope.temp[i].id) {
		    				$scope.users.splice(j,1);
		    			}			
		    		}
		    	}
		    	$scope.temp.splice(0,$scope.temp.length);
		    	$scope.checkAll = false;
	    	}else{
	    		
	    		// angular.element("#alertModal").modal({show:true});
	    		$("#alertModal").modal({show:true});

	    	}
	    }
	    $scope.requestundo = function(x){
	    	$scope.undo_x = x;
	    }
	    $scope.undo = function(){
	    		
	    		$scope.users.push({id: $scope.undo_x.id,name: $scope.undo_x.name, age: $scope.undo_x.age, email: $scope.undo_x.email});
		    	for (var j = 0; j < $scope.listusers.length; j++) {
		    		if ($scope.listusers[j].id == $scope.undo_x.id) {
		    			$scope.listusers.splice(j,1);
		    		}			
		    	}
	    	
	    }
	    $scope.sortid = function(){
	    	$scope.fil = $scope.vec;
	    	if($scope.vec == "id"){
	    		$scope.vec = "-id";
	    	}else{
	    		$scope.vec = "id";
	    	}
	    }
	    $scope.sortname = function(){
	    	$scope.fil = $scope.vec;
	    	if($scope.vec == "name"){
	    		$scope.vec = "-name";
	    	}else{
	    		$scope.vec = "name";
	    	}
	    }
	    $scope.sortage = function(){
	    	$scope.fil = $scope.vec;
	    	if($scope.vec == "1*age"){
	    		$scope.vec = "1*-age";
	    	}else{
	    		$scope.vec = "1*age";
	    	}
	    }
	    $scope.sortemail = function(){
	    	$scope.fil = $scope.vec;
	    	if($scope.vec == "email"){
	    		$scope.vec = "-email";
	    	}else{
	    		$scope.vec = "email";
	    	}
	    }
	});
	
	app.controller("listusersCtrl", function($scope, $http){
		$http.get("api/user/getUser.php").then(function(response) {
			$scope.users = response.data.users;
		});
		$scope.searchInput = function(){
	    	if (!$scope.input) {
	    		$scope.y = "";
	    	}else{
	    		$scope.y = $scope.input;
	    	}
	    }
	    $scope.search = function(){
	    	$scope.y = $scope.input;
	    }
		$scope.requestupdate = function(x){
			$scope.id_edit = x.id;
			$scope.name_edit = x.name;
			$scope.age_edit = x.age;
			$scope.email_edit = x.email;

		}
		$scope.saveupdate = function(){
			var user_update = {
	 			id: $scope.id_edit,
	 			name: $scope.name_edit,
	 			age: $scope.age_edit,
	 			email: $scope.email_edit
	 		};
	 		$http.post("api/user/updateUsers.php",user_update).then(function(response) {
			});
			$("#updateModal").modal('hide');
	 		window.location.href= "#!listusers";
		}

		$scope.saveadd = function(){
			var user = {
	 			id: $scope.id_add,
	 			name: $scope.name_add,
	 			age: $scope.age_add,
	 			email: $scope.email_add
	 		};
	 		$http.post("api/user/addUsers.php",user).then(function(response) {
			});
			$("#addModal").modal('hide');
	 		window.location.href= "#!listusers";
		}
		$scope.requestdelete = function(x){
			$scope.delete_id = x.id;
		}
		$scope.delete = function(){
			var user_delete = {
	 			id: $scope.delete_id
	 		};
	 		$http.post("api/user/deleteUsers.php",user_delete).then(function(response) {
			});
			window.location.href= "#!listusers";
		}
		$scope.sortid = function(){
	    	$scope.fil = $scope.vec;
	    	if($scope.vec == "id"){
	    		$scope.vec = "-id";
	    	}else{
	    		$scope.vec = "id";
	    	}
	    }
	    $scope.sortname = function(){
	    	$scope.fil = $scope.vec;
	    	if($scope.vec == "name"){
	    		$scope.vec = "-name";
	    	}else{
	    		$scope.vec = "name";
	    	}
	    }
	    $scope.sortage = function(){
	    	$scope.fil = $scope.vec;
	    	if($scope.vec == "1*age"){
	    		$scope.vec = "1*-age";
	    	}else{
	    		$scope.vec = "1*age";
	    	}
	    }
	    $scope.sortemail = function(){
	    	$scope.fil = $scope.vec;
	    	if($scope.vec == "email"){
	    		$scope.vec = "-email";
	    	}else{
	    		$scope.vec = "email";
	    	}
	    }
	});

	app.controller("addusersCtrl", function($scope, $http){
	 	$scope.addusers = function (){
	 		var user = {
	 			id: $scope.id,
	 			name: $scope.name,
	 			age: $scope.age,
	 			email: $scope.email
	 		};
	 		$http.post("api/user/addUsers.php",user).then(function(response) {
			});
	 	}
	 	
	});


	