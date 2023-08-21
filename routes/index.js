// we need to solve the following problem/ Challenge:
// ▪ Challenge: Create a notification system API using node JS and express.
// which is capable of receiving a message and depending on the category of the message and the users subscribed to them,
// said users will be notified to the medium that they themselves chose.
// 3 categories of messages will be handled:
// • Sports
// • Finance
// • Films
// And it is required to send 3 types of notifications:
// • SMS
// • E-mail
// • Push Notification
// It is not required that any message is actually sent or communicates with any external API, only the
// sending of said notification will be recorded in a Logs file or in the database.
// In the log it is required to save all the necessary information to identify that the correct notification
// was made to the corresponding user. Save information such as the type of message, type of
// notification, user data, time, etc.
// User administration is not required, a Mock of users can be managed in the system, they must have the
// following information:
// • ID
// • Name
// • E-mail
// • Phone
// • Subscribed [ ] List of categories you are subscribed to
// • Channels [ ] List of user notification types (SMS | Email | PushNotification)
// The API will receive 2 parameters:
// 1. Category. Validate from the list of available categories
// 2. Message. Just validate that the message is not empty.

// 1. Create a new project with npm init
// 2. Install express and nodemon
// 3. Create a new file index.js
// 4. Create a new folder routes
// 5. Create a new file index.js inside routes folder
// 6. Create a new folder controllers
// 7. Create a new file index.js inside controllers folder
// 8. Create a new folder services
// 9. Create a new file index.js inside services folder
// 10. Create a new folder utils
// 11. Create a new file index.js inside utils folder
// 12. Create a new folder logs
// 13. Create a new file index.js inside logs folder
// 14. Create a new folder database
// 15. Create a new file index.js inside database folder
// 16. Create a new folder models
// 17. Create a new file index.js inside models folder
// 18. Create a new folder middlewares
// 19. Create a new file index.js inside middlewares folder
// 20. Create a new folder tests
// 21. Create a new file index.js inside tests folder
// 22. Create a new folder config
// 23. Create a new file index.js inside config folder
// 24. Create a new folder public
// 25. Create a new file index.html inside public folder
// 26. Create a new folder views
// 27. Create a new file index.html inside views folder
// 28. Create a new folder node_modules
// 29. Create a new file .gitignore
// 30. Create a new file .env
// 31. Create a new file .env.example
// 32. Create a new file .gitignore
// 33. Create a new file .editorconfig
// 34. Create a new file .eslintrc
// 35. Create a new file .prettierrc
// 36. Create a new file .prettierignore
// 37. Create a new file .sequelizerc
// 38. Create a new file .sequelizerc


// Path: routes/index.js
const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/restapis', {
//     useNewUrlParser: true,
// });
const clientesController = require('../controllers/clientesController.js');
const messageController = require('../controllers/messageController.js');
const userController = require('../controllers/userController.js');

module.exports = function () {
    router.post('/clientes', clientesController.nuevoCliente)
    router.post('/messages', messageController.newMessage);
    router.post('/user', userController.newUser);
    return router;
}
