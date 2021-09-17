const passport = require('passport');

module.exports = (app) => {
  app.get(
    '/auth/google', //once a user goes to this domain, they will get kicked to the oauth flow
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));
};
