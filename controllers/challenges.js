/**
 * GET /challenges
 * Challenges page.
 */

exports.getChallenges = function(req, res) {
  res.render('challenges', {
    title: 'Challenges'
  });
};

/**
 * GET /challenges/1
 * Challenge 1 page.
 */

exports.getChallenge1 = function(req, res) {
  res.render('challenges/1', {
    title: 'Challenge #1'
  });
};