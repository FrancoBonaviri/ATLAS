const express = require('express');
const app = express();
const cors = require('cors')
////Import BodyParser
const bodyParser = require('body-parser');
//Configure express to user BodyParser ->
app.use(bodyParser.urlencoded( {extended: false} ));
app.use(bodyParser.json());

//Import and user FileUpload in Express -> 
const fileUpload = require('express-fileupload');
app.use(fileUpload());
app.use(cors());
app.use( require('./FilesRoutes') );




app.listen(8000, () => {
    console.log('server runing on port 8000');
})