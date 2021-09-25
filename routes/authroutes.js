const { get } = require('mongoose');
const passport = require('passport');

module.exports = (app) => {
  app.get(
    '/auth/google', //once a user goes to this domain, they will get kicked to the oauth flow
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'), // middleware will ensure user is authenticated
    (req, res) => {
      res.redirect('/surveys'); // user will get redirected to the surveys page
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
