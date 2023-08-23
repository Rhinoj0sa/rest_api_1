const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true,
});
const User = require('./models/User');
// const new_user = require('./controllers/userController')
const customer_list = [
    {
        "name": "johnny Canales",
        "email": "john@abc.com",
        "phone": "1234567890",
        "suscribed": ["Sports", "Finance"],
        "channels": ["SMS"]
    },
    {
        "name": "Miguel Gonzalez",
        "email": "miguel@abc.com",
        "phone": "1234567890",
        "suscribed": ["Sports", "Finance"],
        "channels": ["SMS", "Email"]
    },
    {
        "name": "Arturo Perez",
        "email": "arturog@abc.com",
        "phone": "1234567890",
        "suscribed": ["Sports", "Finance"],
        "channels": ["SMS", "Email"]
    },
    {
        "name": "Ricardo Perez",
        "email": "ricardo@abc.com",
        "phone": "1234567890",
        "suscribed": ["Sports", "Finance", "Films"],
        "channels": ["SMS", "Email"]
    },
    {
        "name": "Julio Martinez",
        "email": "julio@abc.com",
        "phone": "1234567890",
        "suscribed": ["Sports", "Finance", "Films"],
        "channels": ["SMS", "Email"]
    },
    {
        "name": "Brian Wilson",
        "email": "brian@abc.com",
        "phone": "1234567890",
        "suscribed": ["Sports", "Finance", "Films"],
        "channels": ["SMS", "Email"]
    },
    {
        "name": "John Smith",
        "email": "johnny@abc.com",
        "phone": "1234567890",
        "suscribed": ["Sports", "Finance", "Films"],
        "channels": ["SMS", "Email"]
    }

]
const seed = async () => {
    // await User.deleteMany({});
    for (let i = 0; i < customer_list.length; i++) {
        const user = new User(customer_list[i]);
        if (user) {
            try {
                await user.save();
            } catch (error) {
                console.log(error);
            }
            console.log('DB seeded');
        }
    }
}
seed().then(r => console.log(r)).catch(e => console.log(e));

