let express = require('express');
const mainRouter = require('./App/routes');
var cors = require('cors')
let app = express();
app.use(cors())

app.use(express.json());

app.use(mainRouter)

app.listen('8000'); 


