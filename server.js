const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');
const guestRoutes = require('./routes/guest/guest');
app.use('/assets', express.static('resources/assets'));
app.set('views', path.join(__dirname, 'resources', 'views'));
app.use('',guestRoutes);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`INFO  Server running on  [http://localhost:${port}]`);
    console.log("\x1b[33m%s\x1b[0m", "Press Ctrl+C to stop the server");
});