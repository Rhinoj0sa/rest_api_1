const Clientes = require('../models/Clientes');

exports.nuevoCliente = async (req, res, next) => {
    console.log(`the req body is ${req.body} ${req.query}`)
    const cliente = new Clientes(req.body);
    console.log(`the req body is ${req.body} ${req.query}`);
    if (req.body) {
        try {
            await cliente.save();
            res.json({ mensaje: 'Se agrego un nuevo cliente' });
        } catch (error) {
            console.log(error);
            next();
        }
    }
    else {
        res.json({ mensaje: 'El objecto es obligatorio' });
    }
};