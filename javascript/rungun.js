var bullets = 10;
var choices = 1;
var copHealth = 3;
var robberHealth = 5;
var scorpionHealth = 7;
var robberVictoryCache = 10;
var choices2 = 1;
var choices3 = 1;
var choices4 = 1;
var choices5 = 1;
var bulletStorage = 0;

var desertPuzzlePhase = 0;
	
var wolfPlate = false;
var lizardPlate = false;
var birdPlate = false;
var snakePlate = false;
	
var wolfPlateText = "";
var lizardPlateText = "";
var birdPlateText = "";
var snakePlateText = "";

function changeBGC(color){
document.bgColor = color;
}

function gunshotCounter() {
var myCounter = document.getElementById("ammo");
myCounter.innerHTML = "Gunshots Remaining: " + bullets + "";
}

function copHealthCounter() {
var copCounter = document.getElementById("copboss");
copCounter.innerHTML = "";
}

function copHealthClear () {
var copCounter2 = document.getElementById("copboss");
copCounter2.innterHTML = "";
}

function robberHealthCounter() {
var copCounter = document.getElementById("copboss");
copCounter.innerHTML = "";
}

function robberHealthClear () {
var copCounter2 = document.getElementById("copboss");
copCounter2.innterHTML = "";
}

function gunshotCheck() {
if (bullets==0)
	{
	alert('You have run out of bullets.');
	window.location.reload(true);
	}
}

function changeText(color)
{
var myPara = document.getElementById("text");
myPara.style.color = color;
var myPara2 = document.getElementById("ammo");
myPara2.style.color = color;
}

if (x==undefined)
var x=146;
var hp=7;

function myRun()
{
var t=""
var chance = Math.floor(Math.random()*3)
switch (x)
{
case 0: {x=1; break}
case 1: {x=6; break}
case 2: {x=3; break}
case 3: {x=5; break}
case 4: {x=3; break}
case 5: {x=7; break}
case 6: {x=7; break}
case 7: {x=9; break}
case 8: {x=7; break}
case 9: {x=10; break}
case 10: {x=12; break}
case 11: {x=15; break}
case 12: {x=16; break}
case 13: {x=12; break}
case 14: {x=15; break}
case 15: {x=16; break}
case 16: {x=18; break}
case 17: {x=18; break}
case 18: {x=20; break}
case 19: {x=20; break}
case 20: {x=22; break}
case 21: {x=22; break}
case 22: {x=23; break}
case 23: {x=24; break}
case 25: {x=24; break}
case 26: {x=28; break}
case 27: {x=28; break}
case 28: {x=30; break}
case 29: {x=30; break}
case 30: {x=32; break}
case 31: {x=32; break}
case 32: {x=33; break}
case 33: {x=32; break}
case 34: {x=32; break}
case 35: {x=36; break}
case 36: {x=37; break}
case 37: {x=39; break}
case 38: {x=37; break}
case 39: {x=40; break}
case 41: {x=44; break}
case 42: {x=44; break}
case 43: {x=44; break}
case 45: {x=23; break}
case 44: {x=46; break}
case 46: {x=49; break}
case 47: {x=46; break}
case 48: {x=46; break}
case 49: {x=50; break}
case 50: {x=50; break}
case 51: {x=53; break}
case 52: {x=53; break}
case 53: {x=54; break}
case 54: {x=54; break}
case 55: {x=57; break}
case 56: {x=58; break}
case 57: {x=57; break}
case 58: {x=59; break}
case 59: {x=61; break}
case 60: {x=61; break}
case 61: {x=62; break}
case 62: {x=65; break}
case 63: {x=62; break}
case 64: {x=69; break}
case 65: {x=67; break}
case 66: {x=69; break}
case 67: {x=67; break}
case 68: {x=69; break}
case 69: {x=70; break}
case 70: {x=72; break}
case 71: {x=72; break}
case 72: {x=73; break}
case 73: {x=72; break}
case 74: {x=72; break}
case 75: {x=78; break}
case 76: {x=78; break}
case 77: {x=79; break}
case 78: {x=81; break}
case 79: {x=81; break}
case 80: {x=81; break}
case 81: {x=83; break}
case 82: {x=83; break}
case 83: {x=85; break}
case 84: {x=85; break}
case 85: {x=87; break}
case 86: {x=87; break}
case 87: {x=88; break}
case 88: {x=89; break}
case 89: {x=90; break}
case 90: {x=91; break}
case 91: {x=92; break}
case 92: {x=89; break}
case 93: {x=90; break}
case 94: {x=91; break}
case 95: {x=92; break}
case 96: {x=89; break}
case 97: {x=99; break}
case 98: {x=99; break}
case 99: {x=100; break}
case 100: {x=101; break}
case 101: {x=101; break}
case 102: {x=101; break}
case 103: {x=105; break}
case 104: {x=105; break}
case 105: {x=107; break}
case 106: {x=107; break}
case 107: {x=108; break}
case 108: {x=110; break}
case 109: {x=110; break}
case 110: {x=111; break}
case 111: {x=112; break}
case 112: {x=113; break}
case 113: {x=114; break}
case 114: {x=117; break}
case 115: {x=117; break}
case 116: {x=117; break}
case 117: {x=119; break}
case 118: {x=119; break}
case 119: {x=121; break}
case 120: {x=121; break}
case 121: {x=122; break}
case 122: {x=121; break}
case 123: {x=121; break}
case 123: {x=121; break}
case 124: {x=126; break}
case 125: {x=126; break}
case 126: {x=128; break}
case 127: {x=128; break}
case 128: {x=130; break}
case 129: {x=130; break}
case 130: {x=131; break}
case 131: {x=131; break}
case 132: {x=133; break}
case 133: {x=133; break}
case 134: {x=136; break}
case 135: {x=136; break}
case 136: {x=137; break}
case 137: {x=139; break}
case 139: {x=140; break}
case 140: {x=142; break}
case 142: {x=143; break}
case 143: {x=145; break}
case 144: {x=145; break}
case 145: {x=146; break}
case 146: {x=148; break}
case 147: {x=148; break}
case 148: {x=149; break}
case 149: {x=148; break}
case 150: {x=148; break}
case 151: {x=153; break}
case 152: {x=153; break}
case 153: {x=154; break}
case 154: {x=154; break}
case 155: {x=156; break}
case 156: {x=156; break}
case 157: {x=159; break}
case 158: {x=159; break}
}

myText();
}
function myGun()
{
var t=""
var chance = Math.floor(Math.random()*3)
switch (x)
{
case 0: {x=2; break}
case 1: {x=2; break}
case 2: {x=4; break}
case 4: {x=4; break}
case 3: {x=4; break}
case 5: {x=8; break}
case 6: {x=8; break}
case 7: {x=8; break}
case 9: {x=11; break}
case 10: {x=13; break}
case 11: {x=14; break}
case 12: {x=13; break}
case 14: {x=14; break}
case 15: {x=14; break}
case 16: {x=17; break}
case 18: {x=19; break}
case 20: {x=21; break}
case 23: {x=25; break}
case 24: {x=25; break}
case 25: {x=26; break}
case 26: {x=27; break}
case 28: {x=29; break}
case 30: {x=31; break}
case 31: {x=32; break}
case 32: {x=34; break}
case 33: {x=32; break}
case 34: {x=32; break}
case 35: {x=36; break}
case 36: {x=38; break}
case 37: {x=41; break}
case 39: {x=42; break}
case 40: {x=42; break}
case 41: {x=43; break}
case 42: {x=43; break}
case 22: {x=45; break}
case 45: {x=45; break}
case 44: {x=47; break}
case 46: {x=48; break}
case 47: {x=47; break}
case 48: {x=48; break}
case 49: {x=50; break}
case 50: {x=51; break}
case 51: {x=52; break}
case 52: {x=52; break}
case 53: {x=55; break}
case 54: {x=55; break}
case 55: {x=56; break}
case 56: {x=56; break}
case 57: {x=56; break}
case 58: {x=60; break}
case 59: {x=60; break}
case 60: {x=60; break}
case 61: {x=63; break}
case 62: {x=64; break}
case 63: {x=64; break}
case 64: {x=68; break}
case 65: {x=66; break}
case 66: {x=68; break}
case 67: {x=66; break}
case 68: {x=69; break}
case 69: {x=70; break}
case 70: {x=71; break}
case 71: {x=72; break}
case 72: {x=74; break}
case 73: {x=72; break}
case 74: {x=72; break}
case 75: {x=76; break}
case 76: {x=77; break}
case 77: {x=77; break}
case 78: {x=80; break}
case 79: {x=80; break}
case 80: {x=80; break}
case 81: {x=82; break}
case 82: {x=82; break}
case 83: {x=84; break}
case 84: {x=84; break}
case 85: {x=86; break}
case 86: {x=86; break}
case 87: {x=88; break}
case 88: {x=89; break}
case 89: {x=93; break}
case 90: {x=94; break}
case 91: {x=95; break}
case 92: {x=96; break}
case 93: {x=93; break}
case 94: {x=94; break}
case 95: {x=95; break}
case 96: {x=96; break}
case 97: {x=98; break}
case 98: {x=98; break}
case 99: {x=102; break}
case 100: {x=102; break}
case 101: {x=102; break}
case 102: {x=103; break}
case 103: {x=104; break}
case 104: {x=104; break}
case 105: {x=106; break}
case 106: {x=106; break}
case 107: {x=109; break}
case 108: {x=115; break}
case 109: {x=115; break}
case 110: {x=115; break}
case 111: {x=115; break}
case 112: {x=115; break}
case 113: {x=115; break}
case 114: {x=116; break}
case 115: {x=117; break}
case 116: {x=116; break}
case 117: {x=118; break}
case 118: {x=118; break}
case 119: {x=120; break}
case 120: {x=120; break}
case 121: {x=123; break}
case 122: {x=121; break}
case 123: {x=121; break}
case 124: {x=125; break}
case 125: {x=125; break}
case 126: {x=127; break}
case 127: {x=127; break}
case 128: {x=129; break}
case 129: {x=129; break}
case 130: {x=132; break}
case 131: {x=132; break}
case 132: {x=134; break}
case 133: {x=134; break}
case 134: {x=135; break}
case 135: {x=135; break}
case 136: {x=137; break}
case 137: {x=138; break}
case 139: {x=138; break}
case 140: {x=141; break}
case 142: {x=138; break}
case 143: {x=144; break}
case 144: {x=144; break}
case 145: {x=147; break}
case 146: {x=148; break}
case 147: {x=148; break}
case 148: {x=150; break}
case 149: {x=148; break}
case 150: {x=148; break}
case 151: {x=152; break}
case 152: {x=152; break}
case 153: {x=155; break}
case 154: {x=155; break}
case 155: {x=155; break}
case 156: {x=157; break}
case 157: {x=158; break}
case 158: {x=158; break}
}

myText();
}
function myText()
{
gunshotCheck();
if (desertPuzzlePhase==1) { x=97; }
if (x==1){t="<code>You grab your gun and walk over to your door. Do you dare exit the safety of your garage?</code>"};
if (x==2)
	{
	t="<code>You take the gun and shoot the light out on accident. Good luck navigating in the dark!</code>"
	changeBGC('#000000');
	bullets = bullets - 1;
	};
if (x==3){t="<code>You stumble around aimlessly in the dark, stubbing your toe in the process.</code>"};
if (x==4)
	{
	t="<code>You randomly shoot in the dark. Stop wasting your ammo like that!</code>"
	bullets = bullets - 1;
	};
if (x==5)
	{
	t="<code>You manage to find the way out of your garage and step into the blinding light.</code>"
	changeBGC('#FFFFFF');
	};
if (x==6){t="<code>You calmly exit your garage into the outside world.</code>"};
if (x==7){t="<code>You walk down the street, your gun firmly grasped in your hand.</code>"};
if (x==8)
	{
	t="<code>You shoot one of your neighboors on accident.<br><b>OOPSIES.</b></br></code>"
	bullets = bullets - 1;
	};
if (x==9){t="<code>You notice a car heading towards you!</code>"};
if (x==10){t="<code>You jump out of the way as the car speeds past you.</code>"};
if (x==11)
	{
	t="<code>You panic and shoot at the driver. You shoot him and accidentally kill him. At least you stopped the car.</code>"
	bullets = bullets - 1;
	};
if (x==12){t="<code>As the car sputters off into the distance, you continue your walk down the street.</code>"};
if (x==13)
	{
	t="<code>You shoot at the car as it drives away. What a waste of precious ammunition.</code>"
	bullets = bullets - 1;
	};
if (x==14)
	{
	t="<code>You shoot the cadaver of the motorist again. Shooting him won't help, and you lack a magical vacuum gun to revive him. He's dead. Stop that.</code>"
	bullets = bullets - 1;
	};
if (x==15){t="<code>You slowly back away, then run from the crime scene. As far as you are concerned, you were never aware some guy driving a Prius was shot to death.</code>"};
if (x==16)
	{
	t="<code>You reach the end of your street, and a path into a forest begins at your feet.</code>"
	};
if (x==17)
	{
	t="<code>You shoot a few gunshots into the forest. Nothing happens.</code>"
	bullets = bullets - 1;
	};
if (x==18){t="<code>You're walking in the woods. There's no one around, and it's rather quiet.</code>"};
if (x==19)
	{
	t="<code>You shoot around and at the ground. What a waste of ammo.</code>"
	bullets = bullets - 1;
	};
if (x==20)
	{
	t="<code>You run and trip over a small box of bullets.<br>+5 bullets.</code>"
	bullets = bullets + 5;
	};
if (x==21)
	{
	t="<code>You shoot the box of bullets... wait, what the hell is wrong with you.</code>"
	bullets = bullets - 1;
	};
if (x==22){t="<code>You run through the forest, gun in tow.</code>"};
if (x==23){t="<code>You bump into a rather large man blocking your path.</code>"};
if (x==24){t="<code>Unfortunately, you cannot simply run past the man.</code>"};
if (x==25)
	{
	t="<code>You shoot the man. His astonishing girth absorbs the impact of the bullet.</code>"
	bullets = bullets - 1;
	};
if (x==26)
	{
	t="<code>You shoot him again. This time, the man falls to the ground.</code>"
	bullets = bullets - 1;
	};
if (x==27)
	{
	t="<code>Shooting dead people doesn't do anything, you know.</code>"
	bullets = bullets - 1;
	};
if (x==28)
	{
	t="<code>You run past the morbidly obese man's cadaver and towards the edge of the forest.</code>"
	}
if (x==29)
	{
	t="<code>Shooting dead people doesn't do anything, you know.</code>"
	bullets = bullets - 1;
	};
if (x==30)
	{
	t="<code>A cop approaches you. He's not too happy you've been wantonly shooting people.</code>"
	};
if (x==31)
	{
	t="<code>The cop deflects your gunshot with ease. Looks like you're in for a fight!</code>"
	bullets = bullets - 1;
	};
if (x==32)
	{
	chances = Math.floor(Math.random()*2)
	if (chances!==1)
		{
		t="<code>The cop raises his gun and points it at you.<br>(Cop health: " + copHealth + "/3) </code>"
		}
	else
		{
		t="<code>The cop reloads his gun, lowering his arms.<br>(Cop health: " + copHealth + "/3) </code>"
		}
	copHealthCounter()
	};
if (x==33)
	{
	if (chances!==1)
		{
		t="<code>You nimbly dodge the cop's bullet!</code>"
		}
	else
		{
		t="<code>As you run, the cop finishes reloading and shoots you. The bullet grazes your arm, leaving a small scrape.</code>"
		}
	chances = Math.floor(Math.random()*2);
	copHealthCounter();
	};
if (x==34)
	{
	if (chances!==1)
		{
		t="<code>The cop dodges the bullet with minimal effort. Best to wait until he's vulnerable...</code>"
		bullets = bullets - 1;
		}
	else
		{
		t="<code>You successfully shoot the cop!</code>"
		copHealth = copHealth - 1;
		bullets = bullets - 1;
		}
	if (copHealth==0){x=35};
	chances = Math.floor(Math.random()*2);
	copHealthCounter();
	};
if (x==35)
	{
	t="<code>You shoot the cop and he falls over, dead.<br><br><b>VICTORY!</b><br><br>You loot eight bullets off the cop's body.<br>+8 bullets</code>"
	bullets = bullets + 8;
	};
if (x==36)
	{
	t="<code>You are now out of the forest, and find yourself next to an empty highway.</code>"
	var copCounter3 = document.getElementById("copboss");
	copCounter3.innterHTML = "";
	copHealthClear();
	};
if (x==37)
	{
	t="<code>You run along the highway and spot a car in the distance coming down the highway. Perhaps you can get a ride.</code>"
	}
if (x==38)
	{
	t="<code>You shoot your gun into the air out of sheer boredom. Like that will accomplish anything.</code>"
	bullets = bullets - 1;
	}
if (x==39){t="<code>The car passes you as you chase after it. Your legs slowly begin to feel like jelly.</code>"};
if (x==40){t="<code>Dude. You can't run at fifty miles an hour. That car is long gone, bro.</code>"};
if (x==41)
	{
	t="<code>You shoot your gun into the air, signaling the car to stop for you.</code>"
	bullets = bullets - 1;
	};
if (x==42)
	{
	t="<code>You fire your gun in a desperate attempt to get the car to stop for you. The driver brakes and slows to a stop."
	bullets = bullets - 1;
	};
if (x==43)
	{
	t="<code>Stop firing bullets into the air. The car has already stopped for you.</code>"
	bullets = bullets - 1;
	}
if (x==44){t="<code>You run up and climb into the car.</code>"};
<!--the next line is disjointed, do not associate it with nearby events-->
if (x==45)
	{
	t="<code>You shoot and kill a defenseless bird. Another bird calls the police.</code>"
	bullets = bullets - 1;
	};
if (x==46)
	{
	t="<code>You patiently wait as the man drives you around.</code>"
	}
if (x==47)
	{
	t="<code>You shoot your gun, and startle the cab driver. Relax!</code>"
	bullets = bullets - 1;
	}
if (x==48)
	{
	t="<code>You shoot again. The driver asks you to stop. You're making him nervous.</code>"
	bullets = bullets - 1;
	}
if (x==49)
	{
	var nameLoop = 1;
	while (nameLoop==1)
		{	
		var playerName = prompt("The driver politely asks for your name.","John");
		if (playerName==null)
			{
			playerName = prompt("Hah, downright hilarious, you card you. No, seriously, enter your name.","John");
			}
		else
			{
			nameLoop=3;
			}
		}
	t="<code>The man thanks you, " + playerName + ", and continues driving.</code>"
	}
if (x==50)
	{
	t="<code>The driver simply continues to drive you around, occasionally fiddling with the radio.</code>"
	}
if (x==51)
	{
	t="<code>You shoot again, and this time, you kill the driver in the process. The car skids out of control and crashes in a dirt ditch. Congratulations, you know how to perpetually screw up!</code>"
	bullets = bullets - 1;
	}
if (x==52)
	{
	t="<code>You shoot the driver's body. Stop doing that to everyone you kill.</code>"
	bullets = bullets - 1;
	}
if (x==53)
	{
	t="<code>You make an attempt to exit the car. Much to your displeasure, the doors are locked shut and the keys are broken and mangled from the car wreck.</code>"
	}
if (x==54)
	{
	t="<code>Haven't you learned by now solid objects are impassable to mere mortals such as you?</code>"
	}
if (x==55)
	{
	t="<code>You fire a bullet into one of the windows, shattering it.</code>"
	bullets = bullets - 1;
	}
if (x==56)
	{
	t="<code>Wasting more ammo, you eliminate more glass fragments where the window once was.</code>"
	bullets = bullets - 1;
	}
if (x==57)
	{
	t="<code>You try to climb out of the car, but a quick observation tells you trying to climb through the window's broken glass would likely cut you to ribbons. Therefore, you do not exit through the window.</code>"
	}
if (x==58)
	{
	t="<code>You finally escape the deathtrap which the car has become. From now on, no hitchhiking.</code>"
	}
if (x==59)
	{
	t="<code>You walk away from the burning wreck.</code>"
	}
if (x==60)
	{
	t="<code>You shoot what is left of the car.</code>"
	bullets = bullets - 1;
	}
if (x==61)
	{
	t="<code>You run along the highway, taking a good look at your surroundings. It appears you decided to kill the driver and make the car crash in the middle of an empty, soul-crushingly barren desert wasteland.</code>"
	}
if (x==62)
	{
	t="<code>You keep running in the hopes you will discover some sign of human civilization.</code>"
	}
if (x==63)
	{
	t="<code>You shoot and kill a poisonous scorpion. One less thing to worry about.</code>"
	bullets = bullets - 1;
	}
if (x==64)
	{
	t="<code>Another untimely shot from you manages to clear out a cactus that happened to be in your path.</code>"
	bullets = bullets - 1;
	}
if (x==65)
	{
	t="<code>You run headfirst into a cactus. Moron.</code>"
	}
if (x==66)
	{
	t="<code>You shoot the cactus blocking your path.</code>"
	bullets = bullets - 1;
	}
if (x==67)
	{
	t="<code>You cannot just walk through the cactus. The cactus is not Platform 9 3/4. Get your head out of the clouds.</code>"
	}
if (x==68)
	{
	t="<code>You shoot a small lizard. A member of a committe for the preservation of desert wildlife yells at you, then runs off. The committeeperson refuses to let you follow her, as no unintelligent jackass like you should ever get out of the desert. Nor should you be toting that gun. Do you even have a legal gun license?</code>"
	bullets = bullets - 1;
	}
if (x==69)
	{
	t="<code>You run past the remains of the cactus and spot a gas station in the distance.</code>"
	}
if (x==70)
	{
	t="<code>Upon approaching, it appears the gas station is being held up by a robber! He has a gun and looks pretty angry.</code>"
	}
if (x==71)
	{
	t="<code>The robber leaps out of the way, and your bullet hits a gas tank. The resulting explosion nearly kills both of you. The robber, not to happy, immediately rushes in to fight you.</code>"
	bullets = bullets - 1;
	}
if (x==72)
	{
	choices2 = Math.floor(Math.random()*2);
	choices3 = Math.floor(Math.random()*2);
	if (choices2==0)
		{
		t="<code>The robber raises his gun and points it at you.<br>(Robber health: " + robberHealth + "/5) </code>"
		}
	else
		{
		if (choices3==0)
			{
			t="<code>The robber reloads his gun, lowering his arms.<br>(Robber health: " + robberHealth + "/5) </code>"
			}
		else
			{
			t="<code>The robber lowers his arms, similing. His grin is kind of unsettling...<br>(Robber health: " + robberHealth + "/5)</code>"
			}
		}
	}
if (x==73)
	{
	if (choices2==0)
		{
		t="<code>You nimbly dodge the robber's bullet!</code>"
		}
	else
		{
		if (choices3==0)
			{
			t="<code>As you run, the robber finishes reloading and shoots you. The bullet grazes your arm, leaving a small scrape.</code>"
			}
		else
			{
			t="<code>You refuse to shoot him. The smile fades, and he readies his gun again.</code>"
			}
		}
	choices2 = Math.floor(Math.random()*2);
	}
if (x==74)
	{
	if (choices2==0)
		{
		t="<code>The robber, being prepared, dodges the bullet with minimal effort.</code>"
		bullets = bullets - 1;
		}
	else
		{
		if (choices3==0)
			{
			t="<code>You successfully shoot the robber!</code>"
			robberHealth = robberHealth - 1;
			bullets = bullets - 1;
			}
		else
			{
			t="<code>The robber leaps out of the way, and you hit another gas tank! More of the building goes up in flames. It's probably best not to play into his ruse, especially when he makes it obvious by smirking.</code>"
			if (robberVictoryCache!=0)
				{
				robberVictoryCache = robberVictoryCache - 1;
				}
			bullets = bullets - 1;
			}
		}
	if (robberHealth==0){
		gunshotCheck();
		document.getElementById("text").innerHTML=t;
		x=75;
		}
	}
if (x==75)
	{
	t="<code>You shoot the robber, killing him once and for all. The management cheers.<br><br><b>VICTORY!</b><br><br>The management gives you " + robberVictoryCache + " bullet(s) from the storeroom in the back. Some of the bullets were ruined by the gas explosions the robber caused.<br><br>+" + robberVictoryCache + " bullets</code>"
	bullets = bullets + robberVictoryCache;
	}
if (x==76)
	{
	t="<code>You shoot another gas tank. But that's okay, the management likes you and they promptly forgive you.</code>"
	bullets = bullets - 1;
	}
if (x==77)
	{
	t="<code>You shoot into the air at random.</code>"
	bullets = bullets - 1;
	}
if (x==78)
	{
	t="<code>As you run forward, you hear a faint but sincere voice asking you to come again.</code>"
	}
if (x==79)
	{
	t="<code>The bullets you fired into the air fall from above and kill an unlucky sap. As you walk away from the crime scene, you hear a faint but sincere voice requesting you come again.</code>"
	}
if (x==80)
	{
	t="<code>For all that is good and cherishable, stop shooting everywhere, anywhere, at anything.</code>"
	bullets = bullets - 1;
	}
if (x==81)
	{
	t="<code>You proceed in your trek through the barren wasteland of a desert this is. Thankfully, you find a few bullets lodged into the side of a nearby cactus.<br>+3 bullets.</code>"
	bullets = bullets + 3;
	}
if (x==82)
	{
	t="<code>You put another poor, defenseless cactus out of his/her misery. Do plants even have gender?</code>"
	bullets = bullets - 1;
	}
if (x==83)
	{
	t="<code>Your depressing trek through the desert resumes.</code>"
	}
if (x==84)
	{
	t="<code>You shoot the air randomly. Being in the desert sucks.</code>"
	bullets = bullets - 1;
	}
if (x==85)
	{
	t="<code>As you run along, you spot an opening in the sand. It appears to lead into a temple of some sort.</code>"
	}
if (x==86)
	{
	t="<code>You shoot a warning bullet into the temple. Nothing appears to stir within.</code>"
	bullets = bullets - 1;
	}
if (x==87)
	{
	t="<code>You fearlessly march into the desert temple. Everything you've seen in movies tells you this is a terrible idea, but you proceed anyways.</code>"
	}
if (x==88)
	{
	t="<code>At the bottom of a temple, you find yourself in a circular room with four markings - the WOLF PLATE, the LIZARD PLATE, the BIRD PLATE, and the SNAKE PLATE. Markings on the wall appear to depict a wolf eating a bird, and a snake eating a lizard. You feel the compulsion to protect the prey from the predators.</code>"
	}
if (x==89)
	{
	t="<code>You walk around the room in a circular motion.<br>You are standing in front of the WOLF PLATE.</code>"
	}
if (x==90)
	{
	t="<code>You walk around the room in a circular motion.<br>You are standing in front of the LIZARD PLATE.</code>"
	}
if (x==91)
	{
	t="<code>You walk around the room in a circular motion.<br>You are standing in front of the BIRD PLATE.</code>"
	}
if (x==92)
	{
	t="<code>You walk around the room in a circular motion.<br>You are standing in front of the SNAKE PLATE.</code>"
	}
if (x==93)
	{
	wolfPlate = !wolfPlate;
	if (wolfPlate==true) { wolfPlateText="The eyes of the wolf light up." } else { wolfPlateText="The eyes of the wolf fade and stop glowing." }
	t="<code>You lift your gun and shoot the WOLF PLATE. " + wolfPlateText + "<br>You are standing in front of the WOLF PLATE."
	bullets = bullets - 1;
	if (wolfPlate==true && lizardPlate==false && birdPlate==false && snakePlate==true)
		{
		desertPuzzlePhase = 1;
		}
	}
if (x==94)
	{
	lizardPlate = !lizardPlate;
	if (lizardPlate==true) { lizardPlateText="The eyes of the lizard light up."; } else { lizardPlateText="The eyes of the lizard fade and stop glowing."; }
	t="<code>You lift your gun and shoot the LIZARD PLATE. " + lizardPlateText + "<br>You are standing in front of the LIZARD PLATE.</code>"
	bullets = bullets - 1;
	if (wolfPlate==true && lizardPlate==false && birdPlate==false && snakePlate==true)
		{
		desertPuzzlePhase = 1;
		}
	}
if (x==95)
	{
	birdPlate = !birdPlate;
	if (birdPlate==true) { birdPlateText="The eyes of the bird light up."; } else { birdPlateText="The eyes of the bird fade and stop glowing."; }
	t="<code>You lift your gun and shoot the BIRD PLATE. " + birdPlateText + "<br>You are standing in front of the BIRD PLATE.</code>"
	bullets = bullets - 1;
	if (wolfPlate==true && lizardPlate==false && birdPlate==false && snakePlate==true)
		{
			desertPuzzlePhase = 1;
		}
	}
if (x==96)
	{
	snakePlate = !snakePlate;
	if (snakePlate==true) { snakePlateText="The eyes of the snake light up."; } else { snakePlateText="The eyes of the snake fade and stop glowing."; }
	t="<code>You lift your gun and shoot the SNAKE PLATE. " + snakePlateText + "<br>You are standing in front of the SNAKE PLATE.</code>"
	bullets = bullets - 1;
	if (wolfPlate==true && lizardPlate==false && birdPlate==false && snakePlate==true)
		{
		desertPuzzlePhase = 1;
		}
	}
if (x==97)
	{
	t="<code>Before you can react, the floor drops suddenly. A doorway is revealed. It looks like you solved this puzzle, somehow.</code>"
	desertPuzzlePhase = 0;
	}
if (x==98)
	{
	t="<code>You shoot upwards at the plates, but the floor refuses to rise.</code>"
	bullets = bullets - 1;
	}
if (x==99)
	{
	changeBGC('#000000');
	t="<code>You wander through the doorway, deeper into the desert temple. The door behind you slowly slides shut, leaving you sealed inside. It has suddenly become very, very dark in here. You find this darkness quite unsettling.</code>"
	}
if (x==100)
	{
	t="<code>You walk down the dark hallway, looking for an exit. There does not appear to be one...</code>"
	}
if (x==101)
	{
	t="<code>You stub your toe on a rock. Ow.</code>"
	}
if (x==102)
	{
	t="<code>You shoot a loose brick, which cracks. A sliver of light shines through the crack.</code>"
	bullets = bullets - 1;
	}
if (x==103)
	{
	t="<code>You shoot the wall's weak point again, causing a collapse which reveals an exit!</code>"
	changeBGC('#FFFFFF');
	bullets = bullets - 1;
	}
if (x==104)
	{
	t="<code>You put a bullet elsewhere in the wall to look for more hidden exits, but no other paths present themselves.</code>"
	bullets = bullets - 1;
	}
if (x==105)
	{
	t="<code>You proceed down the corridor. It is dimly lit by torches running along the walls.</code>"
	}
if (x==106)
	{
	t="<code>You shoot out a torch on accident.</code>"
	bullets = bullets - 1;
	}
if (x==107)
	{
	t="<code>You spot a really nice little glass vase in the middle of the hallway. Do you take the treasure?</code>"	
	}
if (x==108)
	{
	t="<code>You run past the treasure, deciding to ignore it. The wind you generate while running, though, knocks the little vase off to the side and it breaks. The pedestal was a pressure plate, and OH GOD NOW THERE'S A GIANT ROLLING BOULDER COMING AT YOU! RUN FOR YOUR LIFE!</code>"
	}
if (x==109)
	{
	t="<code>You shoot the vase, and it explodes into a million harmful glass fragments. The pedestal was a pressure plate, and OH GOD THERES NOW A GIANT ROLLING BOULDER COMING AT YOU! RUN FOR YOUR LIFE!</code>"
	}
if (x==110)
	{
	t="<code>THERE'S A GIANT BOULDER. IT'S COMING AT YOU. DON'T EVEN THINK JUST KEEP RUNNING.</code>"
	}
if (x==111)
	{
	t="<code>SERIOUSLY RUN LIKE YOU'VE NEVER RUN BEFORE. DON'T STOP AT ALL, OR YOU WILL DIE. OH CRAP OH CRAP OH CRAP.</code>"
	}
if (x==112)
	{
	t="<code>I DON'T CARE HOW IMPOLITE CAPS LOCK IS BUT I MUST REINFORCE THE FACT THAT YOU WILL DIE IF YOU STOP RUNNING FOR EVEN A SPLIT SECOND.</code>"
	}
if (x==113)
	{
	t="<code>ALMOST SAFE. ALMOST THERE. COME ON YOU CAN DO IT.</code>"
	}
if (x==114)
	{
	t="<code>With one last, proud stride, you bolt back into the dark hallway. The boulder slams the hidden exit shut, and then the floor under it gives way. Looks like you can jump down from there.</code>"
	}
if (x==115)
	{
	t="<code>You try to break the boulder with your gun, but that merely results in you nearly getting steamrolled. The floor beneath the rolling rock of death gives away, much to your favor. You fall down with it into the lower level.</code>"
	bullets = bullets - 1;
	}
if (x==116)
	{
	t="<code>There is nothing to shoot. Stop firing, please. You're wasting precious ammunition.</code>"
	bullets = bullets - 1;
	}
if (x==117)
	{
	t="<code>You land and find yourself in the lower level. After you get up, you see another entrance leading to another torch-lit corridor that proceeds deeper into the temple.</code>"
	}
if (x==118)
	{
	t="<code>You cautiously shoot down the corridor to ensure there are no traps.</code>"
	bullets = bullets - 1;
	}
if (x==119)
	{
	t="<code>You walk into the next room, and find a giant scorpion breathing heavily in your direction. He doesn't look happy.</code>"
	}
if (x==120)
	{
	t="<code>Your bullet reflects off the scorpion's natural exoskeleton! This is gonna be one hell of a fight, isn't it?</code>"
	bullets = bullets - 1;
	}
if (x==121)
	{
	choices4 = Math.floor(Math.random()*2);
	choices5 = Math.floor(Math.random()*2);
	if (choices4==0)
		{
		t="<code>The scorpion stands, ready to attack.<br>(Scorpion health: " + scorpionHealth + "/7) </code>"
		}
	else
		{
		if (choices5==0)
			{
			t="<code>The scorpion stands on its back legs, ready to strike. A soft, pink underbelly is exposed.<br>(Scorpion health: " + scorpionHealth + "/7) </code>"
			}
		else	
			{
			t="<code>The scorpion crouches into its armor, and charges directly at you!<br>(Scorpion health: " + scorpionHealth + "/7) </code>"
			}
		}
	}
if (x==122)
	{
	if (choices4==0)
		{
		t="<code>You run around a bit, but the scorpion does not seem to come after you. It merely continues to wait for the opprotunity to strike.</code>"
		}
	else
		{
		if (choices5==0)
			{
			t="<code>The scorpion comes down and strikes, its poisonous stinger missing your weak human head by about three centimeters.</code>"
			}
		else
			{
			t="<code>You cannot outrun the scorpion! You are flung across the room with a swipe of its pincher, some bullets spilling out of your pockets.<br>-2 bullets</code>"
			bullets-=2;
			}
		}
	choices4 = Math.floor(Math.random()*2);
	}
if (x==123)
	{
	if (choices4==0)
		{
		t="<code>The scorpion's tough natural armor effortlessly reflects your bullet. Better wait until he's vulnerable.</code>"
		bullets = bullets - 1;
		}
	else
		{
		if (choices5==0)
			{
			t="<code>You successfully shoot the scorpion!</code>"
			scorpionHealth = scorpionHealth - 1;
			bullets = bullets - 1;
			}
		else
			{
			t="<code>In a panic, you fire directly between the scorpion's eyes. The great insect is momentarily stunned, and you run for cover. As the scorpion turns to face you, the bullet dislodges from its body and you pick it up once it rolls towards you.";
			}
		}
		if (scorpionHealth==0){
		gunshotCheck();
		document.getElementById("text").innerHTML=t;
		x=124;
		}
	choices4 = Math.floor(Math.random()*2);
	}
if (x==124)
	{
	t="<code>The scorpion lets out an insectile cry, then collapses, dead at last.<br><br><b>VICTORY!</b><br><br>You recover the seven bullets from its soft, squishy abdomen.<br><br>+7 bullets</code>"
	bullets = bullets + 7;
	}
if (x==125)
	{
	t="<code>Just to make sure of it, you shoot the scorpion's gut another time to ensure it is dead. Never hurts to be safe.</code>"
	bullets = bullets - 1;
	}
if (x==126)
	{
	t="<code>Out of the corner of your eye, you spot a door along one of the walls. You climb up the scorpion's corpse and jump to the door, and proceed down the proceeding corridor as normal.</code>"
	}
if (x==127)
	{
	t="<code>Just to be REALLY sure, you shoot down the hallway. Can't hurt to check if there's another trap like that rolling boulder, now is there?</code>"
	bullets = bullets - 1;
	}
if (x==128)
	{
    t="<code>You proceed down the hallway. The stench of this hallway is absolutely repulsive.</code>"
	}
if (x==129)
    {
    t="<code>You try shooting things to see if some hideous beast is the cause of this smell. Unfortunatey, nothing you do seems to work.</code>"
    bullets = bullets - 1;
    }
if (x==130)
    {
    t="<code>You soon find an opening above your head as you venture through this foul-smelling dungeon. Light is filtering in from above.</code>"
    }
if (x==131)
    {
    t="<code>Hahaha, where do you think you're going, hotshot? It's a dead end.</code>"
    }
if (x==132)
    {
    t="<code>You put a bullet into the ceiling where the light is coming in from. It looks like there's a hatch of some sort.</code>"
    bullets = bullets - 1;
    }
if (x==133)
    {
    t="<code>Because you lack the mental capability to solve even the simplest of puzzles, you run around in circles like an incapacitated chicken.</code>"
    }
if (x==134)
    {
    t="<code>You shoot at the opening again, and a manhole cover falls down. Hard to believe some crypt led you into a sewer.</code>"
    bullets = bullets - 1;
    }
if (x==135)
    {
    t="<code>You shoot the fallen manhole cover, just for good measure.</code>"
    bullets = bullets - 1;
    }
if (x==136)
    {
    t="<code>You climb up and out of the manhole, and you survery your surroundings. It seems you emerged on a dead end street, next to a crowded highway. There are a few stores on this small sidestreet.</code>"
    }
if (x==137)
    {
    bulletStorage = bullets - 1;
    t="<code>As you are taking in your surroundings, a cop runs up to you. He informs you that you are presently carring " + bullets + " more bullets than is legal for someone lacking a gun license. He tries to confiscate all of your bullets, but you manage to hold onto one bullet.<br>-" + (bullets - 1) + " bullets</code>"
    bullets = 1;
    }
if (x==138)
    {
    t="<code>As you put your plan to retrieve your bullets in motion, you fire your last bullet on accident. Alas, this game was fun while it lasted.</code>"
    bullets = bullets - 1;
    }
if (x==139)
    {
    t="<code>You think for a moment, and then you run back and behind one of the stores, into an alleyway. At the end of the path, you think you see the cop who stole your bullets. He remains vigilant and on patrol, unaware of your presence.</code>"
    }
if (x==140)
    {
    t="<code>You creep up behind the police officer, gun at the ready...</code>"
    }
if (x==141)
    {
    t="<code>You fire your gun, killing the officer. As your frisk his corpse for bullets, you realize you shot the wrong officer. Another police officer, the one who took your bullets, shows up and beats you unconscious, then drags you to jail.</code>"
    bullets = bullets - 1;
    }
if (x==142)
    {
    t="<code>...wait, no. This isn't the right officer. Instead, you run back through the alley and up the stairs into the backroom of a hunting supply store.</code>"
    }
if (x==143)
    {
    t="<code>Inside the store, you locate a box of bullets. You take as many as you need to compensate for your loss of bullets earler.<br>+" + (bulletStorage - 1) + " bullets</code>"
    bullets = bulletStorage;
    bulletStorage = 0;
    }
if (x==144)
	{
	t="<code>You shoot your gun on accident. The owner of the hunting store is hearing grunting loudly. Better get out of here...</code>"
	bullets = bullets - 1;
	}
if (x==145)
	{
	t="<code>You quickly get out of the hunting supply store before the growling owner is likely to find and then proceed to maul you. You find yourself back on the street.</code>"
	copHealth = 3;
	}
if (x==146)
	{
	t="<code>You run down the steps and into the alleyway, where a cop waits to assault you! This time, it actually is the cop that took your bullets earlier.</code>"
	}
if (x==147)
	{
	t="<code>You shoot into the air randomly, and a cop runs up to fight you. It's the cop that took your bullets earlier.</code>"
	bullets = bullets - 1;
	}
if (x==148)
	{
	chances = Math.floor(Math.random()*2)
	if (chances!==1)
		{
		t="<code>The cop raises his gun and points it at you.<br>(Cop health: " + copHealth + "/3) </code>"
		}
	else
		{
		t="<code>The cop reloads his gun, lowering his arms.<br>(Cop health: " + copHealth + "/3) </code>"
		}
	copHealthCounter()
	};
if (x==149)
	{
	if (chances!==1)
		{
		t="<code>You nimbly dodge the cop's bullet!</code>"
		}
	else
		{
		t="<code>As you run, the cop finishes reloading and shoots you. The bullet grazes your arm, leaving a small scrape.</code>"
		}
	chances = Math.floor(Math.random()*2);
	copHealthCounter();
	};
if (x==150)
	{
	if (chances!==1)
		{
		t="<code>The cop dodges the bullet with minimal effort. Best to wait until he's vulnerable...</code>"
		bullets = bullets - 1;
		}
	else
		{
		t="<code>You successfully shoot the cop!</code>"
		copHealth = copHealth - 1;
		bullets = bullets - 1;
		}
	if (copHealth==0){x=151};
	chances = Math.floor(Math.random()*2);
	copHealthCounter();
	};
if (x==151)
	{
	t="<code>You shoot the cop and he falls over, dead.<br><br><b>VICTORY!</b><br><br>You loot six bullets off the cop's body.<br>+6 bullets</code>"
	bullets = bullets + 6;
	};
if (x==152)
	{
	t="<code>You shoot the corpse of this officer in celebration. You've fought this boss twice, you deserve some sort of achievement.</code>"
	bullets = bullets - 1;
	}
if (x==153)
	{
	t="<code>You walk out of the alleyway and find yourself surrounded by SWAT officers. Good luck thinking your way out of this one... oh wait you still have a gun.</code>"
	}
if (x==154)
	{
	t="<code>You try to look for a break in the crowd, but these SWAT officers are packed together tight.</code>"
	}
if (x==155)
	{
	t="<code>You fire to try and clear the way, but to no avail. It's like these police officers are wearing bulletproof vests!</code>"
	bullets = bullets - 1;
	}
if (x==156)
	{
	t="<code>Still no way out of this crowd. If only you could find another means of escape...</code>"
	}
if (x==157)
	{
	t="<code>You look down at your feet and shoot at a manhole cover as the SWAT team closes in on you. Have you found a way to escape?</code>"
	bullets = bullets - 1;
	}
if (x==158)
	{
	t="<code>No matter what you do, you can't fight these guys off with bullets. They laugh as they bounce off the riot shields. Get out of there now!!!</code>"
	bullets = bullets - 1;
	}
if (x==159)
	{
	t="<code>You hastily jump into the sewer and close the manhole behind you. Even though they could just pry the lid off and chase you, you feel safe knowing these unintelligent game constructs will not chase you down through this absurdly spacious sewer tunnel.</code>"
	}
	
gunshotCounter();
document.getElementById("text").innerHTML=t;
}