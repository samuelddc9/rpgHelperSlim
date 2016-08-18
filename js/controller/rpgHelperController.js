app.controller('rpgHelperController', function ($scope, rpgHelperService, soundService) {
	//loads encounter's characters, enemies and heroes 
	$scope.heroes = rpgHelperService.heroes;
	$scope.whichTeam = "heroes"; //Var used to filter heroes 
	$scope.CalcNumber = 10; //Initial Value for damage\heal field
	$scope.soundEffects = soundService.soundEffects;
	// var tags = []; // collection of <audio> tags
	var combo = false;
	$scope.show = {
		// false to skip menu
		intro: true
	};
	$scope.playThis = function (sound) {
		soundService.playThis(sound);
	};
	//Main menu slide function
	$scope.showOrHideMenu = function () {
		$("#mainMenu").toggleClass('slidedRight');
	};
	//dice roll function
	$scope.rollDice = function (dice) {
		soundService.diceSound.play();
		$scope.CalcNumber = Math.floor((Math.random() * dice) + 1);
	};
	
	/*if the user types the numbers in quick succession(<1500ms), the number will  be appended (up to 3 digits) 
	if the user types a number after 1500ms, instead of appending, the number will replace the current contet. 
	TODO: feedback to tell when this time has passed
	
	This is so the user is not required to hit the clear button after every damage\heal operation, 

		*/
	$scope.buttonValue = function (value) {
		
		
		soundService.clickSound.play();
		if ((combo === false) || ($scope.CalcNumber > 99)) {
			$scope.CalcNumber = value;
			combo = true;
		}
		else if (combo === true) {
			$scope.CalcNumber = "" + $scope.CalcNumber + value;
			setTimeout(function () {
				combo = false;
			}, 1500);
		}
	};
	//Sets damage field to 0
	$scope.resetField = function () {
		$scope.CalcNumber = 0;
		combo = false;
	};
	
	
	//Plays soundtrack depending on the combobox value
	$scope.soundTrackManager = function (id) {
		if ($scope.soundTrackOption == "rainSoundtrack") {
			$("#selectedSong").attr('src', "./sounds/chuva.wav").load();
		}
		if ($scope.soundTrackOption == "citySoundtrack") {
			$("#selectedSong").attr('src', "./sounds/cidade.wav");
		}
		//Pause or play 
		soundService.soundTrackManager(id);
	};
	//"Close overlay button" hides overlay window and background
	$scope.hideMy2Parents = function () {
		$(event.target).parent().parent('div').hide();
	};
	//"Close overlay" background click,  hides overlay window and background
	$scope.hideMyParent = function () {
		$(event.target).parent().hide();
	};
	//Shows character information in overlay screen,  Argument wichTeam team refers to which team the character will be shown, Monster or heroes
	$scope.showThisWindow = function (whichTeam) {
		$scope.whichTeam = whichTeam;
		$("#overlayHeroContainer").show();
	};
	//TODO Add Characters to the team according to data on form - Arg team refers to which team the character will be add, Monster or heroes
	$scope.addCharacter = function (whichTeam) {
		var newChar = {
			"name": "jhon"
			, "ident": "18"
			, "pvs": "16"
		};
		newChar.team = whichTeam;
		$scope.heroes.push(newChar);
	};
	
	//Just a simple random Name generator
	$scope.nameGenerator = function () {
		var firstNames = ["joao", "pedro", "lucas", "ze", "rinaldo", "palo", "nick", "auro", "andre"];
		var surNames = ["Silva", "Campos", "costa", "bueno", "fernandes", "mota", "moura", "rouseff"];
		var fullName = "";
		for (var k = 1; k < 10; k++) {
			var i = Math.floor((Math.random() * firstNames.length));
			var j = Math.floor((Math.random() * surNames.length));
			fullName = "<div>" + fullName + firstNames[i] + " " + surNames[j] + "</div> ";
		}
		$("#namesListContainer").show();
		$("#namesList").html(fullName);
	};
	
	//Starts turn 
//	$scope.turn = 0;
//	$scope.rollInitiative = function () {
//		$scope.nextTurn($scope.turn);
//		$scope.turn++;
//	};
//	
//	//Changes which character acts on current turn
//	$scope.nextTurn = function (index) {
//		if ($scope.heroes[index + 1] === null) {
//			alert("End of Turn");
//			$scope.turn = 0;
//		}
//		var currentHero = $scope.heroes[index];
//		var nextHero = $scope.heroes[index + 1];
//		//alert("current hero is" + $scope.heroes[indice].name );	
//		//alert("next hero is " + nextHero.name);
//		currentHero.turn = false;
//		nextHero.turn = true;
//		$scope.$apply();
//	};

	function initEvents() {
		//just makes Damage\Heal field dragable; 
		$('.damageValue').draggable({
			containment: 'document'
			, opacity: '0.70'
			, revert: true
		});
		//TODO? Drag and throw dices
		$('.dice').draggable({
			containment: 'document'
			, cursor: 'pointer'
			, revert: true
			, revertDuration: 1000
			, start: function (event, ui) {
				$(this).addClass("beingDragged");
			}
			, stop: function (event, ui) {
				$(this).removeClass("beingDragged");
				$(this).css("border-color", "black");
			}
		, });
		//function to apply the damage\healing of the draggable number to the character
		$(".EachHeroContainer").droppable({
			hoverClass: 'border'
			, tolerance: 'pointer'
			, drop: function (event, ui) {
				//		alert(ui.draggable.html() + ' was dropped to ' + $(this).attr('myTrack'));
				//		alert($scope.heroes[id].name);
				//		alert($scope.heroes[id].name + 'Tem agora' + $scope.heroes[id].hp);
				var id = $(this).attr('myTrack');
				$scope.$apply(function () {
					//applies damage/heall
					var currentDamage = -ui.draggable.html();
					//check if is a killing blow
					if ($scope.heroes[id].hp <= currentDamage) {
						soundService.damageSound.play();
						$("#" + "HeroImageFilter" + id).show();
					} //if not below 0, hide red filter 
					else {
						$("#" + "HeroImageFilter" + id).hide();
					}
					$scope.heroes[id].hp = $scope.heroes[id].hp - currentDamage;
					//check for min hp
					if ($scope.heroes[id].hp < -10) {
						$scope.heroes[id].hp = -10;
					}
					//check for max hp 
					if ($scope.heroes[id].hp > $scope.heroes[id].maxHp) {
						$scope.heroes[id].hp = $scope.heroes[id].maxHp;
					}
					//check for bleeding condition
					if ($scope.heroes[id].hp < $scope.heroes[id].maxHp / 2) {
						$scope.heroes[id].status = "red";
					}
					//check if is healing
					if (currentDamage < 0) {
						soundService.healSound.play();
					}
				});
				//drop function return;
				return false;
			}
		});
	}
	//On doc ready
	$(document).ready(function () {
		initEvents();
	});
});