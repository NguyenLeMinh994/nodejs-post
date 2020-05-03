const router = require('express').Router();

router.get('/',function (req,res) {  
    res.render('home/index',{
        title:'Home page'
    });
});

module.exports = router;