const Message = require('../models/Message');
const User = require('../models/User');
const Notification = require('../models/Notification');
const MsgCategories = require('../models/MsgCategories');

exports.newMessage = async (req, res) => {
    const valid_categories = ['Sports', 'Finance', 'Films'];
    if (req.body.text === undefined || req.body.text === null) {
        res.json({message: 'text is required'})
    }
    if ( valid_categories.indexOf(req.body.category) < 0) {
        console.log(`req.body.category err ${req.body.category} ${valid_categories}`)
        res.json({message: 'category is required'})

    }
    const msg = new Message(req.body);
    try {
        await msg.save();
    } catch (error) {
        console.log(error);
    }
    const list_users = await User.find({'suscribed': {'$in': [req.body.category]}})
    console.log(`list_users ${list_users}`)
    for (let i = 0; i < list_users.length; i++) {
        console.log(`user ${i} is ${list_users[i]}`)
        for (let j = 0; j < list_users[i].channels.length; j++) {
            console.log(` ${i} ${j} ${list_users[i].channels[j]}`)
            const notification = new Notification({
                name: list_users[i].name,
                email: list_users[i].email,
                phone: list_users[i].phone,
                text: req.body.text,
                category: req.body.category,
                channel: list_users[i].channels[j],
                sent: false
            });
            console.log(`notification.name ${notification}`);
            try {
                await notification.save();
            } catch (error) {
                console.log(error);
            }
        }
    }
    res.json({text: 'new message added', msg})
}