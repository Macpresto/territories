const home_page = (req, res) => {
    res.render('index', { title : 'Home' });
};

module.exports = {
    home_page
}