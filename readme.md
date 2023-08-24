# Notification system API using node JS and express.


To start the project run the following command after cloning the repository:


docker-compose up --build

## The endpoints are:
http://localhost:3000/message (POST) this endpoint receives a message and process it to send the notifications that are needed.
The notifications are keep in the notifications table in the database.
is intended to send the notifications to the users that are subscribed to the category of the message. Another proccess read the table and send the notifications to the users and set the sent flag to true.

http://localhost:3000/user (POST) this endpoint receives a user and save it in the database.

http://localhost:3000/user/seed (POST) this endpoint populates the customer table with some demo users.

### The link to the postman collection is:
https://blue-trinity-259919.postman.co/workspace/New-Team-Workspace~ac437c91-fe65-4499-abb0-aecb441915d0/collection/7248679-1562b8d5-ed3c-49f2-84b3-b73e962545e5?action=share&creator=7248679

