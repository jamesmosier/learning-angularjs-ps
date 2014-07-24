eventsApp.factory('eventData', function ($resource) {
	return {
		getEvent: function() {
			// var deferred = $q.defer();
			// $http({method: 'GET', url: './data/event/1.json'}).
			// 	success(function(data, status, headers, config) {
			// 		//successcb(data);
			// 		deferred.resolve(data);
			// }).
			// 	error(function(data, status, headers, config){
			// 		//$log.warn(data, status, headers, config);
			// 		deferred.reject(status);
			// });

			// return deferred.promise;
			
			//replaced code above with $resource
			return $resource('./data/event/:id.json', {id:'@id'}).get({id:1});


		}
	};

});