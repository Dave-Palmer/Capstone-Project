# Trade Track
## IOD Software Engineering Capstone project
### App Description:

TradeTrack is a simple app designed for Tradie companies. It allows the user to add multiple staff members, items, and vehicle details to a data base and then assign items or vehciles to individul users. Each user can then login on their own device and see items and vehicles assigned to them, the user can choose to lend the item to another user or report a fault with the item. The report is send to admin users account. 


**Pre-requisites:**  
  
Following are the pre-requisite applications that are required:  
  
**Visual Studio Code:** [https://code.visualstudio.com/](https://code.visualstudio.com/)

  
**Node.js:** [https://docs.npmjs.com/downloading-and-installing-node-js-and-npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)


**MongoDb Community Edition:** - https://www.mongodb.com/try/download/community


**MongoDb Compass (A GUI for MongoDB):** - [https://www.mongodb.com/try/download/compass](https://www.mongodb.com/try/download/compass)

  




**Application Setup:**




Either clone the repo or download locally.
-   Use VSCODE
-   For the front end, change the directory to the capstone-app folder using the terminal and enter :
npm install

-   For backend, change the directory to the server folder and enter :
npm install

-   create a .env in the server folder and add the following to it :

DB_URI=mongodb://localhost/capstone

PORT=8009 (The frontend axios requests use this port number)

JWT_KEY=*(A key of your choice, it can be anything)*

IMG_PATH=http://localhost:8009/images/

**Running The App**

-   Start the server, change the directory to the server folder and enter npm start

-   Start the Front end, change the directory to the capstone-app folder and enter npm run dev, there should now be a local address displaying in the terminal, copy and paste that address into your browser

**please note**
Until this app is updated, you will need to create an admin user using an API Platform such as PostMan [https://www.postman.com/](https://www.postman.com/)


First you will use VSCODE and go to "server/routes/userRoutes.js" and remove 'auth' from router.post('/create'....

From post man, creat a new post request to http://localhost:8009/users/create and send raw JSON in the body in the following format:


{
  "firstName": "(first name)",
  "lastName":"(last name)",
  "email": "(email address)",
  "password": "(a password)",
}

then use that email and password to login on the app
