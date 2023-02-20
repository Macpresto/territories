const login_page = (req,res) =>{
          res.render('login', { title : 'Login', error : null });
      };


module.exports = {
          login_page
}