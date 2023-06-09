const express = require('express');
const app = express();
const PORT = 5000;
const mongoose = require('mongoose');
const { MONGO_URI } = require('./keys');




mongoose.connect(MONGO_URI);
mongoose.connection.on('connected', () => {
    console.log("connected to mongo")
})
mongoose.connection.on('error', (err) => {
    console.log("error", err)
})

require('./models/user');
require('./models/post')

app.use(express.json());
app.use(require('./routes/auth'));
app.use(require('./routes/post'))

app.listen(PORT, () => {
    console.log("server is running on", PORT)
});