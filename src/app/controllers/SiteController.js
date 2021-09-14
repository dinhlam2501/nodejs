
class SiteController {

    //GET action: /home or /
    index(req, res){
        res.render('home')
    }

    //GET action: /search
    search(req, res){
        res.render('search')
    }
}

module.exports = new SiteController;