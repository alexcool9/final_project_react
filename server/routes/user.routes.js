let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();
let { User, validate } = require('../models/user-schema');
const Joi = require("joi");
const bcrypt = require("bcrypt");


// Register User
router.post("/", async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const user = new User(req.body);

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        user.password = await bcrypt.hash(user.password, salt);
        await user.save();

        res.send(user);
    } catch (error) {
        res.send("An error occured");
    }
});

// User Login
router.post("/login", async (req, res) => {
    try {
        const { error } = validateUser(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(400).send("Invalid email or password");

        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!validPassword)
            return res.status(400).send("Invalid email or password");

        const token = user.generateAuthToken();
        res.send(token);
    } catch (error) {
        res.send("An error occured");
    }
});

const validateUser = (user) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    });
    return schema.validate(user);
};

router.route('/create').post((req, res, next) => {
    user.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});
router.route('/').get(async (req, res) => {
    try {
        const data = await User.find();
        res.json(data);
    }
    catch(error) {
        return next(error)
    }
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
        const data = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        });
        res.json(data);
    }
    catch(error) {
        return next(error);
    }
})
router.route('/delete/:id').delete(async (req, res, next) => {
    try {
        const data = await User.findByIdAndRemove(req.params.id);
        res.status(200).json({
            msg: data
        })
    }
    catch(err) {
        return next(error);
    }
})
module.exports = router;