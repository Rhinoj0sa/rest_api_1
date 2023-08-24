const User = require('../models/User');


exports.newUser = async (req, res) => {
    const user = new User(req.body);
    console.log(`the req body is ${req.body}`);
    if (user) {
        try {
            await user.save();
            res.status(201).json({ text: 'User added successfully', user });
        }
        catch (error) {
            console.log(error);
            next();
        }
    }
    else {
        res.status(400).json({ mensaje: 'malformed user' });
    }
}

exports.seed = async (req, res) => {
    const users = await User.find({});

    console.log(`the users in the database: ${users}`)
    if (users.length === 0) {
        console.log(`the users that come from import are ${user_list}`)
        try {
            await User.insertMany(user_list);
            console.log('pass the insert many')
        } catch (error) {
            console.log(error);
            res.status(400).json({ text: 'Error adding users', error });
        }
        res.status(201).json({ text: 'Users added successfully', user_list });
    }
    else {
        res.status(200).json({ text: 'Users already exist you have to delete all first', users });
    }
}

const user_list = [
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