var Controller = function () {
"use strict";
};
Controller.prototype.setup = function () {
"use strict";
var the2016OlympicMens7s, bra, fij, usa, nzl, arg, jpn, rsa, aus, gbr, ken, fra, col, poolA, poolB, match;
the2016OlympicMens7s = new Olympic7s();
// Add teams
bra = the2016OlympicMens7s.addTeam("Brazil", "BRA", "Southern", 11, "A");
fij = the2016OlympicMens7s.addTeam("Fiji", "FIJ", "Southern", 1, "A");
nzl = the2016OlympicMens7s.addTeam("New Zealand", "NZL", "Southern", 3, "A");
usa = the2016OlympicMens7s.addTeam("United States", "USA", "Northern", 5, "A");
arg = the2016OlympicMens7s.addTeam("Argentina", "ARG", "Southern", 6, "A");
jpn = the2016OlympicMens7s.addTeam("Japan", "JPN", "Northern", 9, "A");
rsa = the2016OlympicMens7s.addTeam("South Africa", "RSA", "Southern", 2, "B");
aus = the2016OlympicMens7s.addTeam("Australia", "AUS", "Southern", 4, "B");
gbr = the2016OlympicMens7s.addTeam("Great Britain", "GBR", "Northern", 7, "B");
ken = the2016OlympicMens7s.addTeam("Kenya", "KEN", "Northern", 8, "B");
fra = the2016OlympicMens7s.addTeam("France", "FRA", "Northern", 10, "B");
col = the2016OlympicMens7s.addTeam("Columbia", "COL", "Southern", 12, "B");
// Add the Pool Matches
poolA = the2016OlympicMens7s.poolA;
poolB = the2016OlympicMens7s.poolB;
poolA.addMatch(bra,fij); //01
poolA.addMatch(bra, nzl); //02
poolA.addMatch(bra, arg);//03
poolA.addMatch(bra, jpn);//04
poolA.addMatch(bra, usa);//05
poolA.addMatch(fij, nzl);//06
poolA.addMatch(fij, arg);//07
poolA.addMatch(fij, jpn);//08
poolA.addMatch(fij, usa);//09
poolA.addMatch(nzl, arg);//10
poolA.addMatch(nzl, jpn);//11
poolA.addMatch(nzl, usa);//12
poolA.addMatch(arg, jpn);//13
poolA.addMatch(arg, usa);//14
poolA.addMatch(jpn, usa);//15
poolB.addMatch(rsa, aus);//16
poolB.addMatch(rsa, gbr);//17
poolB.addMatch(rsa, ken);//18
poolB.addMatch(rsa, fra);//19
poolB.addMatch(rsa, col);//20
poolB.addMatch(aus, gbr);//21
poolB.addMatch(aus, ken);//22
poolB.addMatch(aus, fra);//23
poolB.addMatch(aus, col);//24
poolB.addMatch(gbr, ken);//25
poolB.addMatch(gbr, fra);//26
poolB.addMatch(gbr, col);//27
poolB.addMatch(ken, fra);//28
poolB.addMatch(ken, col);//29
poolB.addMatch(fra, col);//30
// ADD MATCH RESULTS
// pool A
match = the2016OlympicMens7s.findMatch(1);//bra,fij - teamA wins
match.setScores(21, 3, 7, 1);
match = the2016OlympicMens7s.findMatch(2);//bra, nzl - team B wins
match.setScores(7, 1, 21, 3);
match = the2016OlympicMens7s.findMatch(3);//bra, arg - draw
match.setScores(7, 1, 7, 1);
match = the2016OlympicMens7s.findMatch(4);//bra, jpn - team A just bonus 1
match.setScores(20, 4, 5, 1);
match = the2016OlympicMens7s.findMatch(5);//bra, usa - Team B just bounus 1
match.setScores(5, 1, 20, 4);
match = the2016OlympicMens7s.findMatch(6);//fij, nzl - both teams get a just bonus 1
match.setScores(22, 4, 42, 4);
match = the2016OlympicMens7s.findMatch(7);//fij, arg - draw team A just bonus 1
match.setScores(22, 4, 22, 2);
match = the2016OlympicMens7s.findMatch(8);//fij, jpn - draw team B just bonus 1
match.setScores(22, 2, 22, 4);
match = the2016OlympicMens7s.findMatch(9);//fij, usa - team A good bonus 1
match.setScores(42, 6, 7, 1);
match = the2016OlympicMens7s.findMatch(10);//nzl, arg - team B good bonus 1
match.setScores(22, 3, 42, 6);
match = the2016OlympicMens7s.findMatch(11);//nzl, jpn - both teams good bonus 1
match.setScores(47, 6, 30, 6);
match = the2016OlympicMens7s.findMatch(12);//nzl, usa - team B bonus 2 just
match.setScores(21, 3, 15, 3);
match = the2016OlympicMens7s.findMatch(13);//arg, jpn - team A - bonus 1 just
match.setScores(15, 3, 21, 3);
match = the2016OlympicMens7s.findMatch(14);//arg, usa
match.setScores(14, 2, 7, 1);
match = the2016OlympicMens7s.findMatch(15);//jpn, usa
match.setScores(7, 1, 14, 2);
match = the2016OlympicMens7s.findMatch(16);//rsa, aus
match.setScores(7, 1, 12, 2);
match = the2016OlympicMens7s.findMatch(17);//rsa, gbr - bonus 1 & 2
match.setScores(32, 6, 30, 6);
match = the2016OlympicMens7s.findMatch(18);//rsa, ken
match.setScores(33, 6, 32, 6);
match = the2016OlympicMens7s.findMatch(19);//rsa, fra
match.setScores(25, 2, 24, 1);
match = the2016OlympicMens7s.findMatch(20);//rsa, col
match.setScores(55, 6, 7, 1);
match = the2016OlympicMens7s.findMatch(21);//aus, gbr
match.setScores(49, 7, 42, 6);
match = the2016OlympicMens7s.findMatch(22);//aus, ken
match.setScores(49, 7, 7, 1);
match = the2016OlympicMens7s.findMatch(23);//aus, fra
match.setScores(7, 1, 7, 1);
match = the2016OlympicMens7s.findMatch(24);//aus, col
match.setScores(56, 7, 14, 2);
match = the2016OlympicMens7s.findMatch(25);//gbr, ken
match.setScores(56, 7, 49, 6);
match = the2016OlympicMens7s.findMatch(26);//gbr, fra
match.setScores(7, 1, 9, 1);
match = the2016OlympicMens7s.findMatch(27);//gbr, col
match.setScores(5, 0, 55, 1);
match = the2016OlympicMens7s.findMatch(28);//ken, fra
match.setScores(5, 1, 7, 1);
match = the2016OlympicMens7s.findMatch(29);//ken, col
match.setScores(0, 0, 0, 0);
match = the2016OlympicMens7s.findMatch(30);//fra, col
match.setScores(21, 3, 7, 1);
return the2016OlympicMens7s;
};