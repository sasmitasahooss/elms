const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');

const db = require('./Database/mongooseConnection');
const employeesRoute = require('./routes/employeesRoute');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.get('/', (req, res) => {
  res.render(employeesRoute);
});

app.use('/employees', employeesRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

