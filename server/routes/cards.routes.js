let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();
let user = require('../models/user-schema');
const Card = require('../models/card-schema');


router.route('/').get((req, res, next) => {
    try{
        const cards = Card.find();
        res.json(cards);
    }
    catch(error) {
        res.send(error);
    }
    console.log('cards', cards);
})

router.route('/create').post((req, res, next) => {
    Card.create(req.body).then()
        .then((result) => {
            res.send({ kq: 1, msg: 'Đã thêm thành công' })
        })
        .catch((err) => {
            res.send({ kq: 0, msg: 'kết nối DB thất bại' });
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

router.route('/update/:id').put((req, res, next) => {
    user.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('User updated successfully !')
        }
    })
})
router.route('/delete/:id').delete((req, res, next) => {
    user.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})
module.exports = router;