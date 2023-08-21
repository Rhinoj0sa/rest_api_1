const User = require('../models/User');

exports.newUser = async (req, res) => {
        const user = new User(req.body);
        console.log(`the req body is ${req.body}`);
        if (user) {
            try {
                await user.save();
                res.json({ text: 'Se agrego un nuevo usuario', user });
            }
            catch (error) {
                console.log(error);
                next();
            }
        }
        else {
            res.json({ mensaje: 'El objecto es obligatorio' });
        }
    }