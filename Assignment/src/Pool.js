var Pool = function (newName) {
	this.name = newName;
	this.allTeams = [];
	this.allMatches = [];
};

Pool.prototype.addTeam = function (aTeam) {
	"use strict";
	this.allTeams.push (aTeam);
};

Pool.prototype.addMatch = function (teamA, teamB) {
	"use strict";
	var newMatch;
	newMatch = new Match (teamA, teamB);
	this.allMatches.push (newMatch);
};

Pool.prototype.setScores = function (scoreA, tryA, scoreB, tryB) {
	"use strict";
	var newScore;
	newScore = newScore (scoreA, tryA, scoreB, tryB)
	this.allMatches.push(newScore);
};

Pool.prototype.findMatch = function (targetMatch, offset) {
	'use strict';
	var foundMatch, aMatch;
	foundMatch = null;
	for (aMatch of this.allMatches) {
			if ((this.allMatches.indexOf(aMatch)+offset)=== targetMatch) {
				foundMatch = aMatch;
				break;
			}
	}
	return foundMatch;
};

Pool.prototype.sortTeamByPoints = function () {
	"use strict";
	this.allTeams.sort(function (a, b) {
		return b.teamPoints-a.teamPoints ; 
	});
};

Pool.prototype.getTeam = function () {
	"use strict";
	var result, aTeam, aMatch;
	result = this.toString();
	this.sortTeamByPoints();
	for (aTeam of this.allTeams) {
		result += TAB+ aTeam.getPoints() + ' ' + aTeam.toString() + '<br>';
	}
	return result;
};

Pool.prototype.getPointDetails = function () {
	var result, aMatch;
	result= this.toString() + '<br>';
	for (aMatch of this.allMatches) {
		result += TAB + aMatch.teamA + ' ' +aMatch.scoreA + '  ' +  aMatch.pointsA;
		result += ' ' +  aMatch.winLossDraw(aMatch.pointsA, aMatch.pointsB) + ' vs' ;
		result += ' ' + aMatch.teamB + ' ' + aMatch.scoreB + '  ' +  aMatch.pointsB;
		result += ' ' +  aMatch.winLossDraw(aMatch.pointsB, aMatch.pointsA) + '<br>';
	}
	return result;
};

Pool.prototype.getMatch = function () {
	"use strict";
	var result, aMatch, aOffset, bOffset;
	aOffset = + 1;
	bOffset = + 16;
	result = this.toString() + '<br>';
	for (aMatch of this.allMatches) {
		if (this.name ==='A') {
		result += TAB + (this.allMatches.indexOf(aMatch)+aOffset) + aMatch.toString() + '<br>';
		} else {
		result += TAB + (this.allMatches.indexOf(aMatch)+bOffset) + aMatch.toString() + '<br>';
		}
	}
	return result;
};

Pool.prototype.toString = function () {
	"use strict";
	var result;
	result = TAB + 'Pool ' + this.name + '<br>';
	return result;
};

