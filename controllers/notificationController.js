const Notification = require('../models/Notification');

exports.getNotifications = async (req, res) => {
    const notifications = await Notification.find({});
    if (notifications.length === 0) {
        res.status(404).json({ text: 'No notifications found' });
    }
    else {
        res.status(200).json({  notifications });
    }
}

 