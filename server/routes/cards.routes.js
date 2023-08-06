let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();
let user = require('../models/user-schema');
const Card = require('../models/card-schema');
const auth = require("../middleware/auth");

router.route('/').get(async (req, res, next) => {
    try{
        const cards = await Card.find();
        res.json(cards);
    }
    catch(error) {
        res.send(error);
    }
})

router.route('/my-cards').get(async (req, res, next) => {
    try{
        const cards = await Card.find();
        res.json(cards);
    }
    catch(error) {
        res.send(error);
    }
})

router.patch('/:id', auth, async (req, res)=>{
    try {
        const card = await Card.findById(req.params.id);
        const index = card.likes.findIndex(like => like == req.user._id);
        if(index >= 0) {
            card.likes.splice(index, 1);
        }
        else {
            card.likes.push(req.user._id);
        }
        card.save();
        res.json(card);
    }
    catch(error) {
        res.send(error);
    }
});

// router.route('/:id').patch( async (req, res, next) => {
//     try{
//         const card = await Card.findById(req.params.id);
//         console.log('user',req.user);
//         const index = card.likes.findIndex(like => like == req.params.id);
//         if(index >= 0) {
//             card.likes.splice(index, 1);
//         }
//         else {
//             card.likes.push(req.params.id);
//         }
//         card.save();
//         res.json(card);
//     }
//     catch(error) {
//         res.send(error);
//     }
// });

router.route('/create').post((req, res, next) => {
    Card.create(req.body).then()
        .then((result) => {
            res.send({ kq: 1, msg: 'New card was created' })
        })
        .catch((err) => {
            res.send({ kq: 0, msg: err });
            return next(error);
        })
});

router.route('/cards').get((req, res, next) => {
    user.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


router.route('/:id').get(async (req, res, next) => {
    try {
        const data = await Card.findById(req.params.id);
        res.json(data);
    }
    catch(error){
        return next(error)        
    }
})

router.route('/edit/:id').put(async (req, res) => {
    user.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/:id').put(async (req, res, next) => {
    try {
        const data = await Card.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.json(data);
    }
    catch(error) {
        return next(error);
    }
})

router.route('/:id').delete(async (req, res, next) => {
    try {
        const data = await Card.findByIdAndRemove(req.params.id);
        res.status(200).json({
            msg: data
        })
    }
    catch(err) {
        return next(error);
    }
})

module.exports = router;