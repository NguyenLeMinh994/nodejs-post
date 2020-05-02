const router = require('express').Router();
// const verify = require('./verifyToken');
// const User = require('../model/User');
const Post = require('../../model/Post');

// router.get('/',verify, async (req, res) => {
//     // res.json({ posts: { title: 'my first post' } });
//     // res.send(req.user);
//     const user = await User.findOne({
//         _id: req.user._id
//     });
//     res.json(user);
    
// });
router.get('/', async (req, res) => {
    
    
        
   
});
router.get('/:idPost', async (req, res) => {
    try {
        const post = await Post.findById(req.params.idPost)
        const data = {
            error:false,
            data:post
        }
        res.json(data);
    } catch (error) {
        res.json({ 
            error: true,
            message: err 
        });
    }
   
   
});
router.post('/',async (req, res) => {
    const { title, description } = req.body;
    const params = {
        title,
        description
    }
});

module.exports = router;