var Match = function (teamA, teamB) {
	"use strict";
	this.teamA = teamA;
	this.teamB = teamB;
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
	pointsA = 0;
	pointsB = 0;
	pointsA += this.setPoints(scoreA, scoreB);
	pointsB += this.setPoints(scoreB, scoreA);
	pointsA += this.tryPoints(tryA, tryB);
	pointsB += this.tryPoints(tryB, tryA);
	this.teamA.increasePoints(pointsA);
	this.teamB.increasePoints(pointsB);
	this.pointsA = pointsA;
	this.pointsB = pointsB;
};

Match.prototype.setPoints = function (scoreA, scoreB) {
	'use strict';
	var win, scoreOffset, bonus, draw, pointsA, pointsB;
	pointsA = 0;
	pointsB = 0;
	win = 4;
	scoreOffset = 8;
	bonus = 1;
	draw = 2;
	if (scoreA > scoreB) {
		pointsA += win;
		if (scoreA - scoreB < scoreOffset) {
			pointsB += bonus;
		}
	} else if (scoreB > scoreA) {
		pointsB += win;
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

Match.prototype.tryPoints = function (tryA, tryB) {
	'use strict';
	var tryOffset, bonus, pointsA, pointsB;
	tryOffset = 3;
	bonus = 1;
	pointsA = 0;
	pointsB = 0;
	if (tryA > tryOffset) {
		pointsA += bonus;
	} else if (tryB > tryOffset) {
		pointsB += bonus;
	}
	return pointsA;
	return pointsB;
};

Match.prototype.outcome = function (a, b) {
	'use strict';
	var result;
	result = '';
	if (a > b) {
		result += 'win';
	} else if (b > a) {
		result +='loss';
	} else {
		result += 'draw'
	}
	return result;
};

Match.prototype.toString = function () {
	"use strict";
	var result, teamA;
	result =   " : " + this.teamA + " vs " + this.teamB;
	return result;
};