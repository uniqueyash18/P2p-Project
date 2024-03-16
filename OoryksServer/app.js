const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://yash18chouhan:J2sqQkZObeONVgco@cluster0.a6fmka5.mongodb.net/MyOoryks?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to the database');
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define your routes and middleware here

const authRoutes = require('./routes/authRoutes')
app.use('/', authRoutes);

app.listen(port,'192.168.1.14', () => {
  console.log(`Server is running on http://localhost:${port}`);
});
