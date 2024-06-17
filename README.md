Steps to run the project locally:

1. Go to https://github.com/visky-krisztina/birthday-app and copy the url (https://github.com/visky-krisztina/birthday-app.git)
2. Open a terminal and: git clone https://github.com/visky-krisztina/birthday-app.git
3. cd birthday-app
4. cd client
5. npm i
6. cd ..
7. npm i
8. create a .env file
9. Write inside: Add the NODE_ENV and MongoDb Atlas account connection string into your application code, like example below. Please visit https://www.mongodb.com/docs/guides/atlas/connection-string/, create an atlas account if you don't have one, and paste the correct connection string. Please keep the names of the variables.

NODE_ENV=development
MONGO_URL=mongodb+srv://<user>:<password>@taskmanager.j9jfe2j.mongodb.net/?retryWrites=true&w=majority&appName=TaskManager

10. In the terminal: node populate.js
    //this will populate your database
11. npm run dev
