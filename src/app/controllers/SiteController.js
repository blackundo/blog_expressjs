class SiteController {

    // [Get] /news
    index(req, res) {
        res.render('home', {
            title: 'homepage'
        });
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;