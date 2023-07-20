let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();
let user = require('../models/user-schema');
const Card = require('../models/card-schema');


router.route('/').get(async (req, res, next) => {
    try{
        const cards = await Card.find();
        res.json(cards);
    }
    catch(error) {
        res.send(error);
    }
})

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

router.route('/edit/:id').get((req, res) => {
    user.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/update/:id').put(async (req, res, next) => {
    try {
        const data = await Card.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.json(data);
    }
    catch(error) {
        return next(error);
    }
})

router.route('/delete/:id').delete(async (req, res, next) => {
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