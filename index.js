import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';


const app  = express();
const PORT = 3000;

app.get('/', (req, res) => 
    res.send(`Node and Express is running on ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`My server is running on ${PORT}`)
);

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb',{    
    useNewUrlParser: true
});

//body-parser setup
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

routes(app);

//Serve static file
app.use(express.static('public'))


