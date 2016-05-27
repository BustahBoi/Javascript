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
	var pointsA, pointsB, scoreOffset, tryOffset, win, underSevenorFour, draw;
	pointsA = 0;
	pointsB = 0;
	scoreOffset = 8;
	tryOffset = 3;
	win = 4;
	underSevenorFour = 1;
	draw = 2;
	if (scoreA > scoreB) {
		pointsA += win;
		if (scoreA - scoreB < scoreOffset) {
			pointsB += underSevenorFour;
		};
		if (tryA > tryOffset) {
			pointsA += underSevenorFour;
		}
		if (tryB > tryOffset) {
			pointsB += underSevenorFour;
		}
		}	
		if (scoreA < scoreB) {
			pointsB += win;
		if (scoreB - scoreA < scoreOffset) {
			pointsA += underSevenorFour;
		};
		if (tryA > tryOffset) {
			pointsA += underSevenorFour;
		}
		if (tryB > tryOffset) {
			pointsB += underSevenorFour;
		}
		}	
		if (scoreA === scoreB) {
		pointsA += draw;
		pointsB += draw;
		if (tryA > tryOffset) {
			pointsA += underSevenorFour;
		}
		if (tryB > tryOffset) {
			pointsB += underSevenorFour;
		}
		}
	this.teamA.increasePoints(pointsA);
	this.teamB.increasePoints(pointsB);
	this.pointsA = pointsA;
	this.pointsB = pointsB;
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