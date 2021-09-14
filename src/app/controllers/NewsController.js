

class NewsController {

    //GET action: /news
    index(req, res){
        res.render('news');
    }

    //GET action: /news/:slug

    show(req, res){
        res.send('Đây là slug 1');
    }
    show1(req, res){
        res.send('Đây là slug 2');
    }
}

    module.exports = new NewsController; 