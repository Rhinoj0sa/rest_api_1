const User = require('../models/User');

exports.getUsers = async (req, res) => {
    const users = await User.find({});
    if (users.length === 0) {
        res.status(404).json({ text: 'No users found' });
    }
    else {
        res.status(200).json({ text: 'Users found', users });
    }
}

exports.newUser = async (req, res) => {
    const user = new User(req.body);
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
    if (users.length === 0) {
        try {
            await User.insertMany(user_list);
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
        "name": "Johnny Bravo",
        "email": "john@abc.com",
        "phone": "1234567890",
        "subscribed": ["Sports"],
        "channels": ["SMS"]
    },
    {
        "name": "Miguel Gonzalez",
        "email": "miguel@abc.com",
        "phone": "1234567890",
        "subscribed": ["Films"],
        "channels": ["Email"]
    },
    {
        "name": "Arturo Perez",
        "email": "arturog@abc.com",
        "phone": "1234567890",
        "subscribed": ["Sports", "Finance"],
        "channels": ["Push"]
    },
    {
        "name": "Ricardo Perez",
        "email": "ricardo@abc.com",
        "phone": "1234567890",
        "subscribed": ["Films"],
        "channels": ["Email"]
    },
    {
        "name": "Julio Martinez",
        "email": "julio@abc.com",
        "phone": "1234567890",
        "subscribed": ["Sports", "Finance", "Films"],
        "channels": ["Push"]
    },
    {
        "name": "Brian Wilson",
        "email": "brian@abc.com",
        "phone": "1234567890",
        "subscribed": ["Sports", "Finance", "Films"],
        "channels": ["SMS",]
    },
    {
        "name": "John Smith",
        "email": "johnny@abc.com",
        "phone": "1234567890",
        "subscribed": ["Sports", "Finance", "Films"],
        "channels": ["SMS", "Push",'Email']
    }

]