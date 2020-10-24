const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UsersController = require('../controllers/UsersController');



passport.use(
  'local',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, done) => {
      try {
        
        const user = await UsersController.findByEmailAndPassword(email,password);

        if (!user)
          return done(null, false, { message: 'User not found' });


        return done(null, user, { message: 'Logged in Successfully' });
      } catch (error) {
        return done(error);
      }
    }
  )
);


passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
