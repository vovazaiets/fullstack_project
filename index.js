import express from 'express'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://vzts2005:T1tw1idZ26trSDK8@cluster0.sgy9j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
).then(()=> console.log('DB ok'))
.catch((err)=> console.log('DB error', err));

const app = express();


app.use(express.json()) ;

app.post('/auth/register', (req,res) => {
    
});



app.listen(4444,(err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server ok');
});
