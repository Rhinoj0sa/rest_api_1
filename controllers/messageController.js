const Message = require('../models/Message');
const User = require('../models/User');
const Notification = require('../models/Notification');
const MsgCategories = require('../models/MsgCategories');

exports.getMessages = async (req, res) => {
    const messages = await Message.find({});
    if (messages.length === 0) {
        res.status(404).json({ text: 'No messages found' });
    }
    else {
        res.status(200).json({ text: 'Messages found', messages });
    }
}
exports.getNotifications = async (req, res) => {
    const notifications = await Notification.find({});
    if (notifications.length === 0) {
        res.status(404).json({ text: 'No notifications found' });
    }
    else {
        res.status(200).json({  notifications });
    }
}

exports.newMessage = async (req, res) => {
    const valid_categories = ['Sports', 'Finance', 'Films'];
    if (valid_categories.indexOf(req.body.category) < 0) {
        res.status(400).send('category field is required')
    } else {
        if (req.body.message.length === 0) {
            res.status(400).send('message is required')
        } else {
            const msg = new Message(req.body);
            try {
                await msg.save();
            } catch (error) {
                console.log(error);
            }
            const list_users = await User.find({'suscribed': {'$in': [req.body.category]}})
            for (let i = 0; i < list_users.length; i++) {
                for (let j = 0; j < list_users[i].channels.length; j++) {
                    const notification = new Notification({
                        name: list_users[i].name,
                        email: list_users[i].email,
                        phone: list_users[i].phone,
                        message: req.body.message,
                        category: req.body.category,
                        channel: list_users[i].channels[j],
                        sent: false
                    });
                    try {
                        await notification.save();
                    } catch (error) {
                        console.log(error);
                    }
                }
            }
            res.status(201).json({message: 'new message added', msg})
        }
    }
}