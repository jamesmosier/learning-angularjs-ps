'use strict';

eventsApp.controller('EventController',
	function EventController($scope) {
        
        //example of using Sanitize...it strips out the style
        $scope.snippet = '<span style="color:red">hi there</span>';
        //example of a show/hide by setting boolValue and calling ng-hide & ng-show
        $scope.boolValue = true;
        //example of using ngStyle & ngClass (there is also ngClassOdd & ngClassEven
        $scope.mystyle = {color: 'blue'};
        $scope.myclass = "white";
        $scope.buttonDisabled = true;
        
		$scope.event = {
			name: 'Angular Boot Camp',
			date: '1/1/2013',
			time: '10:30am',
			location: {
				address: 'Google Headquarters',
				city: 'Mountain View',
				province: 'CA'
			},
			imageUrl: 'img/heisencat.png',

			sessions: [
				{
					name: 'Directives Masterclass',
					creatorName: 'Bob Smith',
					duration: '1 hr',
					level: 'Advanced',
					abstract: 'Messenger bag lo-fi selfies, chambray ethical Echo Park trust fund PBR&B actually meggings ennui 8-bit. Wes Anderson tattooed actually irony, meh bespoke keytar tofu farm-to-table authentic shabby chic pork belly photo booth pickled. Wes Anderson Helvetica street art, fingerstache Vice skateboard YOLO American Apparel art party Banksy forage narwhal VHS. ',
                    upVoteCount: 0
				},
				{
					name: 'Scope for fun and profit',
					creatorName: 'John Doe',
					duration: '30 mins',
					level: 'Intro',
					abstract: 'Pinterest meggings fixie vegan mumblecore gluten-free. Banksy meh scenester tousled four loko stumptown, shabby chic readymade. Beard YOLO banjo whatever flannel selvage, Truffaut Vice Williamsburg organic literally. Swag master cleanse Helvetica organic literally Williamsburg.',
                    upVoteCount: 0
				},
				{
					name: 'Well Behaved Conrollers',
					creatorName: 'Jane Doe',
					duration: '2 hours',
					level: 'Intermediate',
					abstract: 'Odd Future. High Life photo booth hella, skateboard fashion axe occupy Echo Park wolf brunch. Mumblecore fanny pack sriracha, lo-fi swag Brooklyn pork belly. 3 wolf moon small batch before they sold out fingerstache Banksy.',
                    upVoteCount: 0
				}
			]
		}
        
        $scope.upVoteSession = function(session) {
            session.upVoteCount++;   
        };
        
        $scope.downVoteSession = function(session) {
            session.upVoteCount--;   
        };
	}
);