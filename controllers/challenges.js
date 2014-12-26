/**
 * GET /challenges
 * Challenges page.
 */

exports.getChallenges = function(req, res) {
  res.render('challenges', {
    title: 'Challenges'
  });
};
