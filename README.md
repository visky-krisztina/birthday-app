Github repository: (https://github.com/visky-krisztina/birthday-app )

Steps to run the project locally:

1. Open a terminal and: git clone https://github.com/visky-krisztina/birthday-app.git
2. cd birthday-app
3. cd client
4. npm i
5. cd ..
6. npm i
7. create a .env file
8. Write inside: Add the NODE_ENV and MongoDb Atlas account connection string into your application code, like in the example below. Please visit https://www.mongodb.com/docs/guides/atlas/connection-string/, create an atlas account if you don't have one, and paste the correct connection string. Please keep the names of the variables. 

NODE_ENV=development
MONGO_URL=mongodb+srv://<user>:<password>@<appName>.j9jfe2j.mongodb.net/birthday-DB?retryWrites=true&w=majority

10. Before this step, please be sure there is no other collection with the name of birthday-app in the mongo database, if it is, delete it. Then in the terminal: node populate.js
    //this will populate your database
11. npm run dev

In the terminal is the link for your localhost, click on it. Enjoy the app.. it is not a perfect one, but I hope it is what was required from me.
