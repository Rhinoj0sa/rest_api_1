const Message = require('../models/Message');

exports.newMessage = async (req, res) => {
        const msg = new Message(req.body);
        console.log(`the req body is ${req.body}`);
        if (req.body) {
            try {
                await msg.save();
                res.json({ text: 'Se agrego un nuevo mensaje', msg });
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