var Team = function (newCountry, newCode, newHemisphere, newRanking) {
	"use strict";
	this.country = newCountry;
	this.code = newCode;
	this.hemisphere = newHemisphere;
	this.ranking = newRanking;
	this.teamPoints = null;
};

Team.prototype.increasePoints = function (newPoints) {
	'use strict';
	this.teamPoints += newPoints;	
};

Team.prototype.getPoints = function () {
	'use strict';
	return this.teamPoints;
};

Team.prototype.toString = function () {
	"use strict";
	var result;
	result =  this.country ;
	return result;
};