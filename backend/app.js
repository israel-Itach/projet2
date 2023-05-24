const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mySql = require("mysql2");

const usersRouter = require("./routes/users");
const cors = require('cors');
const bikeRouter = require('./routes/Bike');
const manegeRouter = require('./routes/maneger');
const loginRouter = require('./routes/login');

const connection = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "bikeDb",
});

const app = express();
app.use(cors());
app.use(express.json());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/bike', bikeRouter);
app.use("/users", usersRouter);
app.use('/maneger', manegeRouter);
app.use('/login', loginRouter);
// app.use(express.static(path.join(__dirname, 'public')));



// app.use("/", indexRouter);


module.exports = app;
const port = 3001;
app.listen(port, () => console.log(`open in port  ${port}`));
