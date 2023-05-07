require("dotenv").config();

const express = require("express");
const app = express();
const cors = require('cors')
const controllers = require('./controllers/index')

let dbconnect = require('./db.connect')
let userRoutes = require('./routes/userRoutes')
let itemRoutes = require('./routes/itemRoutes')
let vehicleRoutes = require('./routes/vehicleRoutes')

app.use(cors());
app.use(express.json());
app.use("/", express.static("public"));


app.get("/", (req, res) => {
    res.json({ message: "The Server says: Hello!" });
});

app.use('/users', userRoutes)
app.use('/items', itemRoutes)
app.use('/vehicles', vehicleRoutes)


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
    controllers.userController.createAdminUser() // To create an admin user for first time use
});