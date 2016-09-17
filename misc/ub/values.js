function randomToken(array) {
	return array[Math.floor(Math.random() * array.length)];
}

function getSpellImage(spell) {
	return "images/" + spell + ".png";
}

function getItemImage(item, array, champion) {
	if (array == "jung-slot") {
		var temp_string = item.replace(/ /g,'_') + "_";
		if (document.getElementById("summoner-1").innerHTML == '<img src="images/Smite.png">' || document.getElementById("summoner-2").innerHTML == '<img src="images/Smite.png">') {
			temp_string += "(" + randomToken(smite_enchantments).replace(/ /g, '_') + ")_item.png";
		}
		else {
			temp_string += "item.png";
		}
		return temp_string;
	}
	else if (array == "itm1-slot") {
		if (champion != "Viktor")
			var temp_string = item.replace(/ /g,'_');
		else
			var temp_string = "Perfect_Hex_Core";
		temp_string += "_item.png";
		return temp_string;
	}
	else {
		var temp_string = item.replace(/ /g,'_');
		temp_string += "_item.png";
		return temp_string;
	}
	
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function championEdgeCases(str) {
	if (str == "Fiddlesticks")
		return "FiddleSticks";
	else if (str == "Xinzhao")
		return "XinZhao";
	else if (str == "Tahmkench")
		return "TahmKench";
	else if (str == "Kogmaw")
		return "KogMaw";
	else if (str == "Aurelionsol")
		return "AurelionSol";
	else if (str == "Reksai")
		return "RekSai";
	else if (str == "Missfortune")
		return "MissFortune";
	else if (str == "Masteryi")
		return "MasterYi";
	else if (str == "Wukong")
		return "MonkeyKing";
	else if (str == "Jarvaniv")
		return "JarvanIV";
	else if (str == "Twistedfate")
		return "TwistedFate";
	else if (str == "Dr.mundo")
		return "DrMundo";
	else if (str == "Leesin")
		return "LeeSin";
	return str;
}

function setExtraInfo() {
	var skill = randomToken(["Q", "W", "E"]);

	var mastery_amount_1 = 0, mastery_amount_2 = 0, mastery_amount_3 = 0;

	for (var i = 0; i < 30; i++) {
		switch (randomToken([1, 2, 3])) {
			case 1: {mastery_amount_1++; break;}
			case 2: {mastery_amount_2++; break;}
			case 3: {mastery_amount_3++; break;}
			}
		if (mastery_amount_1 > 18) {
			mastery_amount_1--;
			i--;
		}
		if (mastery_amount_2 > 18) {
			mastery_amount_2--;
			i--;
		}
		if (mastery_amount_3 > 18) {
			mastery_amount_3--;
			i--;
		}
	}

	document.getElementById("info").innerHTML = 'Max <em class="skill">' + skill + '</em> with masteries <em class="ferocity">' + mastery_amount_1 + '</em>/<em class="cunning">' + mastery_amount_2 + '</em>/<em class="resolve">' + mastery_amount_3 + '</em>';
}

//random generation
var champions = ["Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Ashe", "Aurelion Sol", "Azir", "Bard", "Blitzcrank", "Brand", "Braum", "Caitlyn", "Cassiopeia", "Cho'Gath", "Corki", "Darius", "Diana", "Dr. Mundo", "Draven", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Janna", "Jarvan IV", "Jax", "Jayce", "Jhin", "Jinx", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kennen", "Kha'Zix", "Kindred", "Kog'Maw", "LeBlanc", "Lee Sin", "Leona", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi", "Miss Fortune", "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus", "Nidalee", "Nocturne", "Nunu", "Olaf", "Orianna", "Pantheon", "Poppy", "Quinn", "Rammus", "Rek'Sai", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Sejuani", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Syndra", "Tahm Kench", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Vel'Koz", "Vi", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xerath", "Xin Zhao", "Yasuo", "Yorick", "Zac", "Zed", "Ziggs", "Zilean", "Zyra"];

var boots = ["Ionian Boots of Lucidity", "Boots of Mobility", "Boots of Swiftness", "Mercury's Treads", "Sorcerer's Shoes", "Ninja Tabi", "Berserker's Greaves"];
var boot_enchantments = ["Alacrity", "Furor", "Distortion", "Captain"];

var smites = ["Stalker's Blade", "Skirmisher's Sabre", "Tracker's Knife"];
var smite_enchantments = ["Warrior", "Runic Echoes", "Cinderhulk", "Devourer"];

var items = ["Banner of Command", "Blade of the Ruined King", "Hextech Gunblade", "Locket of the Iron Solari", "Muramana", "Ohmwrecker", "Seraph's Embrace", "Zz'Rot Portal", "Guinsoo's Rageblade", "Infinity Edge", "Mejai's Soulstealer", "Rabadon's Deathcap", "Void Staff", "Wit's End", "Abyssal Scepter", "Ardent Censer", "Athene's Unholy Grail", "Banshee's Veil", "Dead Man's Plate", "Death's Dance", "Essence Reaver", "Frozen Heart", "Frozen Mallet", "Guardian Angel", "Iceborn Gauntlet", "Liandry's Torment", "Lich Bane", "Lord Dominik's Regards", "Luden's Echo", "Maw of Malmortius", "Morellonomicon", "Mortal Reminder", "Nashor's Tooth", "Phantom Dancer", "Randuin's Omen", "Rapid Firecannon", "Ravenous Hydra", "Righteous Glory", "Rod of Ages", "Runaan's Hurricane", "Rylai's Crystal Scepter", "Spirit Visage", "Statikk Shiv", "Sterak's Gage", "Sunfire Cape", "The Black Cleaver", "The Bloodthirster", "Thornmail", "Titanic Hydra", "Trinity Force", "Warmog's Armor", "Will of the Ancients", "Youmuu's Ghostblade", "Zeke's Harbinger", "Zhonya's Hourglass", "Eye of the Equinox", "Eye of the Oasis", "Eye of the Watchers", "Face of the Mountain", "Frost Queen's Claim", "Talisman of Ascension", "Ruby Sightstone", "Mercurial Scimitar"];

var summoners = ["Ghost", "Heal", "Barrier", "Exhaust", "Cleanse", "Teleport", "Flash", "Ignite", "Smite"];

var adjectives = ["Weeaboo", "Tryhard", "Unskilled", "Garbage", "Feeder", "L2P", "Newbie", "Flamer", "WTF", "1v5", "OP", "Brainless", "Unfortunate", "Casual", "Insane", "Ragequit", "Bad", "Leaver", "Dyrus's", "Worst", "Duelist", "Pls Stop KSing", "Useless", "Press R", "Troll", "Lucky", "Faceroll", "Headsmash", "Kappa", "Noob", "Imbalanced", "Cyka", "No Skill", "Huehuehue", "Carry", "'Support'", "Roaming", "Proxy", "Splitpush", "Teamfight", "Fountain", "Bronze", "Silver", "Gold", "Platinum", "Diamond", "Master", "Challenger", "NA", "EU", "KR", "CN", "TR", "Wildcard", "Season 2", "Season 3", "Season 4", "Season 5", "Season 6", "Trench", "3.7K MMR", "6.3k MMR", "3k ELO", "Freelo", "New Meta", "$6 Million", "Rito Approved", "World Class", "GG"];

//page ids
var item_slots = ["boot-slot", "jung-slot", "itm1-slot", "itm2-slot", "itm3-slot", "itm4-slot"];
var item_slot_types = [boots, smites, items, items, items, items];