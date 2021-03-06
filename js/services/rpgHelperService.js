app.factory('rpgHelperService', function() {
var service = {};
    
	//TODO Create Database
	service.heroes = [
		{
			name: "Dagor",
			team: "heroes",
			ident: 0,
			turn: false,
			hp: 30,
			image: "./images/Weinstock.jpg",
			maxHp: 35,
			level: 2,
			class: "Mage",
			initiative: 17,
			ac: 17,
			fortitude: 14,
			willpower: 11,
			reflexes: 14,
			dice: 8,
			hitModifier : 7,
			damageModifier: 5,
			status: "green",
			perception: 15,
			insight: 13,
			str: 10,
			dex: 10,
			con: 10,
			int: 10,
			wis: 10,
			cha: 10,
			xpValue: 150,

		},

		{
			name: "Geralt",
			team: "heroes",
			ident: 1,
			turn: false,
			hp: 0,
			image: "./images/ninja.jpg",
			level: 2,
			class: "Ninja",
			initiative: 23,
			maxHp: 35,
			ac: 17,
			fortitude: 14,
			willpower: 11,
			reflexes: 14,
			dice: 8,
			hitModifier: 7,
			damageModifier: 5,
			status: "red",
			perception: 15,
			insight: 13,
			str: 10,
			dex: 10,
			con: 10,
			int: 10,
			wis: 10,
			cha: 10,
			xpValue: 150,
		},
		{
			name: "StarKiller",
			team: "heroes",
			turn: false,
			ident: 2,
			hp: 12,
			image: "./images/NOAH.jpg",
			level: 2,
			class: "Mage",
			initiative: 15,
			maxHp: 35,
			ac: 17,
			fortitude: 14,
			willpower: 11,
			reflexes: 14,
			dice: 8,
			hitModifier: 7,
			damageModifier: 5,
			status: "gray",
			perception: 15,
			insight: 13,
			str: 10,
			dex: 10,
			con: 10,
			int: 10,
			wis: 10,
			cha: 10,
			xpValue: 150,
		},
		{
			name: "Jim",
			team: "heroes",
			ident: 3,
			turn: false,
			hp: 32,
			image: "./images/kkkk.jpg",
			level: 2,
			class: "Mage",
			initiative: 13,
			maxHp: 35,
			ac: 17,
			fortitude: 14,
			willpower: 11,
			reflexes: 14,
			dice: 8,
			hitModifier: 7,
			damageModifier: 5,
			status: "green",
			perception: 12,
			xpValue: 150,

		},
		{
			name: "jack",
			team: "heroes",
			ident: 4,
			hp: 32,
			image: "./images/swordmage.jpg",
			level: 2,
			class: "Mage",
			initiative: 13,
			maxHp: 35,
			ac: 17,
			fortitude: 14,
			willpower: 11,
			reflexes: 14,
			dice: 8,
			hitModifier: 7,
			damageModifier: 5,
			status: "green",
			perception: 12,
			xpValue: 150,

		},


		//monster insertions

		{
			name: "orc",
			team: "monsters",
			ident: 5,
			turn: false,
			hp: 30,
			image: "./images/orc.jpg",
			maxHp: 35,
			level: 2,
			class: "Mage",
			initiative: 17,
			ac: 17,
			fortitude: 14,
			willpower: 11,
			reflexes: 14,
			dice: 8,
			hitModifier: 7,
			damageModifier: 5,
			status: "green",
			perception: 15,
			insight: 13,
			str: 10,
			dex: 10,
			con: 10,
			int: 10,
			wis: 10,
			cha: 10,
			xpValue: 150,
		},
		{
			name: "orc2",
			team: "monsters",
			hp: 30,
			ident: 6,
			turn: false,
			image: "./images/orc.jpg",
			maxHp: 35,
			level: 2,
			class: "Mage",
			initiative: 17,
			ac: 17,
			fortitude: 14,
			willpower: 11,
			reflexes: 14,
			dice: 8,
			hitModifier: 7,
			damageModifier: 5,
			status: "green",
			perception: 15,
			insight: 13,
			str: 10,
			dex: 10,
			con: 10,
			int: 10,
			wis: 10,
			cha: 10,
			xpValue: 150,
		},
		{
			name: "orc3",
			team: "monsters",
			hp: 30,
			ident: 7,
			turn: false,
			image: "./images/orc.jpg",
			maxHp: 35,
			level: 2,
			class: "Mage",
			initiative: 17,
			ac: 17,
			fortitude: 14,
			willpower: 11,
			reflexes: 14,
			dice: 8,
			hitModifier: 7,
			damageModifier: 5,
			status: "green",
			perception: 15,
			insight: 13,
			str: 10,
			dex: 10,
			con: 10,
			int: 10,
			wis: 10,
			cha: 10,
			xpValue: 150,
		},

	];
    
    return service;

});