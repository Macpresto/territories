//middleware for checking if user is authenticated
const isAuthenticated = (req, res, next) => {
          if (req.session.user) {
            console.log('user auth');
            return next();
          } else {
            console.log('user not auth');
            res.redirect('/account/login');
          }
        };


module.exports = isAuthenticated;