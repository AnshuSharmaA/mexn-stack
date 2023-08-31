const express = require('express');
const app = express();
require('dotenv').config();

app.use('/assets', express.static('resources/assets'));

app.get('/',(req,resp)=>{
    resp.render(__dirname+'/resources/views/guest/index.ejs');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});