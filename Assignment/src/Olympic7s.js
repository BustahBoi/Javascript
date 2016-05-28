const BLANK = " ";
const SPACE = "&nbsp;";
const TAB = SPACE.repeat(4);
const NEWLINE = "<br>";

var Olympic7s = function () {
	this.allMyTeams = [];
	this.poolA = new Pool ("A");
	this.poolB = new Pool ("B");
};

Olympic7s.prototype.addTeam = function (newCountry, newCode, newHemisphere, newRanking, poolCode) {
	"use strict";
	var newTeam;
	newTeam = new Team (newCountry, newCode, newHemisphere, newRanking);
	this.allMyTeams.push(newTeam);
	if (poolCode === "A") {
		this.poolA.addTeam(newTeam);
	}
	else {
		this.poolB.addTeam(newTeam);
	}
	return newTeam;
};

Olympic7s.prototype.findMatch = function (targetMatch) {
	'use strict';
	var foundMatch, aMatch, aOffset, bOffset;
	foundMatch = null;
	aOffset = 1;
	bOffset = 16;
	if (targetMatch < bOffset) {
	foundMatch = this.poolA.findMatch(targetMatch, aOffset);
	} else {
	foundMatch = this.poolB.findMatch(targetMatch, bOffset);
	}
	return foundMatch;
};

Olympic7s.prototype.getMatchByPool = function () {
	"use strict";
	var result;
	result = '(A) Matches by Pool with Index' + '<br>' + '<br>';
	result += this.poolA.getMatch() + '<br>';
	result += this.poolB.getMatch() + '<br>';
	return result;
};

Olympic7s.prototype.getTeamsByPoints = function () {
	'use strict';
	var result = '(B) All Teams by Points' + '<br><br>';
	result += this.poolA.getTeam() + '<br>';
	result += this.poolB.getTeam() + '<br>';
	return result;
};

Olympic7s.prototype.getMatchDetails = function () {
	'use strict';
	var result = '(C) Point details by Match' + '<br><br>';
	result += this.poolA.getPointDetails() + '<br>';
	result += this.poolB.getPointDetails() + '<br>';
	return result;
};

Olympic7s.prototype.getAll = function() {
	"use strict";
	var result;
	result = this.getMatchByPool() + '<br>';
	result += this.getTeamsByPoints() + '<br>';
	result += this.getMatchDetails() + '<br>';
	return result;
};