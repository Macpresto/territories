const { default: axios } = require("axios");

const login_page = (req,res) =>{
          console.log('im here=e');
          res.render('login', { title : 'Login', error : null });
      };


//Use axios module to make api call, pass username and password stirng credential as object 
//start a session and redirect if api returns 200
//return to login page and display error otherwise
const account_login = (req, res) => {
    const { username, password } = req.body;

    axios.post('https://netzwelt-devtest.azurewebsites.net/Account/SignIn', { username, password })
    .then(response => {
                //console.log(`this is the status ${response.status}`);
                if(response.status === 200) {
                console.log('User Logged in');
                req.session.user = req.body.username;
                res.redirect('/');
                } else {
                res.render('login', { title : 'Login', error : 'invalid credentials'});
                }
    })
    .catch(err => {
                console.log(err);
                res.render('login', { title : 'Login', error : 'invalid credentials'});
    });
};

module.exports = {
          login_page,
          account_login
}