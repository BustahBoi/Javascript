var Match = function (teamA, teamB) {
	"use strict";
	var pointsA, pointsB, scoreA, scoreB, tryA, tryB;
	this.teamA = teamA;
	this.teamB = teamB;
	this.pointsA = pointsA;
	this.pointsB = pointsB;
	this.scoreA = scoreA;
	this.tryA = tryA;
	this.scoreB = scoreB;
	this.tryB = tryB;
};

Match.prototype.setScores = function (scoreA, tryA, scoreB, tryB) {
	"use strict";
	this.scoreA = scoreA;
	this.tryA = tryA;
	this.scoreB = scoreB;
	this.tryB = tryB;
	this.calculatePoints(scoreA, tryA, scoreB, tryB);
};

Match.prototype.calculatePoints = function (scoreA, tryA, scoreB, tryB) {
	'use strict';
	var pointsA, pointsB;
	this.winner(scoreA, scoreB);
	this.tries(tryA, tryB);
	this.teamA.increasePoints(pointsA);
	this.teamB.increasePoints(pointsB);
	this.pointsA = pointsA;
	this.pointsB = pointsB;
};

Match.prototype.winner = function (scoreA, scoreB) {
	'use strict';
	var aWin, scoreOffset, bonus, draw, pointsA, pointsB;
	aWin = 4;
	scoreOffset = 8;
	bonus = 1;
	draw = 2;
	if (scoreA > scoreB) {
		pointsA += aWin;
		if (scoreA - scoreB < scoreOffset) {
			pointsB += bonus;
		}
	} else if (scoreB > scoreA) {
		pointsB += aWin;
		if (scoreB - scoreA < scoreOffset) {
			pointsA += bonus;
		}
	} else {
		pointsA += draw;
		pointsB += draw;
	}
	return pointsA;
	return pointsB;
};

Match.prototype.tries = function (tryA, tryB) {
	'use strict';
	var tryOffset, bonus, pointsA, pointsB;
	tryOffset = 3;
	bonus = 1;
	if (tryA > tryOffset) {
		pointsA += bonus;
	} else if (tryB > tryOffset) {
		pointsB += bonus;
	}
	return pointsA;
	return pointsB;
};


Match.prototype.toString = function () {
	"use strict";
	var result, teamA;
	result =   " : " + this.teamA + " vs " + this.teamB;
	return result;
};

Match.prototype.winLossDrawA = function (team) {
	'use strict';
	var result;
	result = '';
	if (this.pointsA > this.pointsB) {
		result += 'win';
	} else if (this.pointsB > this.pointsA) {
		result +='loss';
	} else {
		result += 'draw'
	}
	return result;
};

Match.prototype.winLossDrawB = function () {
	'use strict';
	var result;
	result = '';
	if (this.pointsB > this.pointsA) {
		result += 'win';
	} else if (this.pointsA > this.pointsB) {
		result +='loss';
	} else {
		result += 'draw'
	}
	return result;
};