app.factory('soundService', function() {
	var service = {};

		service.diceSound = document.createElement('audio');
		service.diceSound.setAttribute('src', './sounds/diceroll.wav');

		service.clickSound = document.createElement('audio');
		service.clickSound.setAttribute('src', './sounds/click2.wav');

		service.damageSound = document.createElement('audio');
		service.damageSound.setAttribute('src', './sounds/grito.mp3');

		service.healSound = document.createElement('audio');
		service.healSound.setAttribute('src', './sounds/click.m4r');

		service.dieSound = document.createElement('audio');
		service.dieSound.setAttribute('src', './sounds/grito.mp3');

		service.soundtrack = document.createElement('audio');
		service.soundtrack.setAttribute('src', './sounds/chuva.wav');

		service.soundtrack.loop = true;

		var tags = []; // collection of <audio> tags

		//Soundeffects and soundtrack functions

		service.soundEffects = [
			{
				id: 3,
				name: "passos",
				source: "./sounds/passos.wav",
				selected: "yes",
			},
			{
				id: 4,
				name: "pombas",
				source: "./sounds/pombas.mp3",
				selected: "yes",
			},
			{
				id: 6,
				name: "espada",
				source: "./sounds/indio.wav",
				selected: "yes",
			},
			{
				id: 7,
				name: "arco",
				source: "./sounds/diceroll.wav",
				selected: "yes",
			},
			{
				id: 8,
				name: "moeda",
				source: "./sounds/click.m4r",
				selected: "yes",
			},
			{
				id: 9,
				name: "marcha",
				source: "./sounds/Marcha.wav",
				selected: "yes",
			},
			{
				id: 10,
				name: "revoada",
				source: "./sounds/revoada.wav",
				selected: "yes",
			},
			{
				id: 11,
				name: "dor",
				source: "./sounds/grito.mp3",
				selected: "no",
			}
			//		{id:0,name:"porta",source:"/../sounds/porta.mp3",selected:"yes",},
			//		{id:1,name:"vitoria",source:"/../sounds/triunfo.m4r",selected:"yes",	},
			//		{id:2,name:"grito",source:"./sounds/grito.mp3",selected:"yes",},
			//		{id:5,name:"socorro",source:"./sounds/grito.mp3",selected:"yes",	},

		];

		service.soundEffects.forEach(function (a) {
			var aud = new Audio();
			tags.push(aud); // add this track to collection

			//				aud.controls=true; // only so we can see the player's time display to verify it works

			$("#soundEffects").append(aud);
			aud.src = a.source;
			console.log("load audio tag: ", aud);
		});

		service.playThis = function (sound) {
			//		alert(sound.id);
			if (tags[sound.id].paused) {
				tags[sound.id].play();
				$(event.target).attr('src', 'images/icons/pausePixel.png');

			} else {
				tags[sound.id].pause();
				tags[sound.id].currentTime = 0;
				$(event.target).attr('src', 'images/icons/playPixel.png');

			}
		};

		service.soundTrackManager = function (id) {
			if (document.getElementById(id).paused) {
				$("#soundTrackPlayButton").attr('src', 'images/icons/pausePixel.png');
				document.getElementById(id).play();
			}
			else {
				document.getElementById(id).pause();
				$("#soundTrackPlayButton").attr('src', 'images/icons/playPixel.png');
			}
		};


		return service;

	});