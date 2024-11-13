const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const db = require('./Database/mongooseConnection');
const employeesRoute = require('./routes/employeesRoute');
const adminRoute = require('./routes/adminroute');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.get('/', (req, res) => {
  res.send("Hello World")
});

app.use('/employees', employeesRoute);
app.use('/admin', adminRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});