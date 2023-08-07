# Trade Track

## IOD Software Engineering Capstone project

![Alt text](<capstone-app/public/TradeTrack image.jpeg>)

### App Description:

TradeTrack is a simple app designed for Tradie companies. It allows the admin user to add multiple staff members, items, and vehicle details to a database. The admin user can then assign items and vehciles to individul users. Each user can then login on their own device and see items and vehicles assigned to them, the user can choose to lend the item to another user or report a fault with the item. The report is sent to the admin user as an alert.

**Pre-requisites:**

Following are the pre-requisite applications that are required:

**Visual Studio Code:** [https://code.visualstudio.com/](https://code.visualstudio.com/)

**Node.js:** [https://docs.npmjs.com/downloading-and-installing-node-js-and-npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

**MongoDb Community Edition:** - https://www.mongodb.com/try/download/community

**MongoDb Compass (A GUI for MongoDB):** - [https://www.mongodb.com/try/download/compass](https://www.mongodb.com/try/download/compass)

**Application Setup:**

Either clone the repo or download locally.

- Use VSCODE
- For the front end, change the directory to the capstone-app folder using the terminal and enter :
  npm install

- For backend, change the directory to the server folder and enter :
  npm install

- create a .env in the server folder and add the following to it :

DB_URI=mongodb://localhost/capstone

PORT=8009 (The frontend axios requests use this port number)

JWT*KEY=*(A key of your choice, it can be anything)\_

IMG_PATH=http://localhost:8009/images/ (you will need to have a public/images folders in the server folder)

**Running The App**

- Start the server - open an intergrated terminal for the server folder and enter npm start

- Start the Front end - change the directory to the capstone-app folder and enter npm run dev, there should now be a local address displaying in the terminal, copy and paste that address into your browser

- Login in as admin. email = admin@user.com, password = admin
