const router = require('express').Router();

router.get('/',function (req,res) {  
    res.render('posts/index',{
        title:'View Post'
    });
});

module.exports = router;