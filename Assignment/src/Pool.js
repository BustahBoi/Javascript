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

Pool.prototype.sortTeamByPoints = function () {
	"use strict";
	this.allTeams.sort(function (a, b) {
		return b.teamPoints-a.teamPoints ; 
	});
};

Pool.prototype.getTeam = function () {
	"use strict";
	var result, aTeam;
	result = this.toString();
	this.sortTeamByPoints();
	for (aTeam of this.allTeams) {
		result += TAB+ aTeam.getPoints() + ' ' + aTeam.toString() + '<br>';
	}
	return result;
};

Pool.prototype.getMatch = function () {
	"use strict";
	var result, aMatch, poolA, poolB;
	poolA = + 1;
	poolB = + 16;
	result = this.toString() + '<br>';
	for (aMatch of this.allMatches) {
		if (this.name ==='A') {
		result += TAB + (this.allMatches.indexOf(aMatch) + poolA) + aMatch.toString() + '<br>';
		} else {
		result += TAB + (this.allMatches.indexOf(aMatch) + poolB) + aMatch.toString() + '<br>';
		}
	}
	return result;
};

Pool.prototype.getPointDetails = function () {
	var result, aMatch;
	result= this.toString() + '<br>';
	for (aMatch of this.allMatches) {
		result += TAB + aMatch.teamA + ' ' +aMatch.scoreA + '  ' +  aMatch.pointsA;
		result += ' ' +  aMatch.outcome(aMatch.pointsA, aMatch.pointsB) + ' vs' ;
		result += ' ' + aMatch.teamB + ' ' + aMatch.scoreB + '  ' +  aMatch.pointsB;
		result += ' ' +  aMatch.outcome(aMatch.pointsB, aMatch.pointsA) + '<br>';
	}
	return result;
};

Pool.prototype.toString = function () {
	"use strict";
	var result;
	result = TAB + 'Pool ' + this.name + '<br>';
	return result;
};