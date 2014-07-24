'use strict';

eventsApp.controller('EventController',
	function EventController($scope, eventData) {
        
        $scope.sortorder = 'name'
		// eventData.getEvent().then(
        // function(event){ $scope.event = event; },
        // function(statusCode){ console.log(statusCode) }
        // );

        //replaced code above with this below
        eventData.getEvent()
            .$promise.then(
                function(event) {$scope.event = event; console.log(event);},
                function(response) {console.log(response);}
            );
        
        
        $scope.upVoteSession = function(session) {
            session.upVoteCount++;   
        };
        
        $scope.downVoteSession = function(session) {
            session.upVoteCount--;   
        };
	}
);