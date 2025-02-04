import express from 'express'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

import { validationResult } from 'express-validator';
import { registerValidator } from './validations/auth.js';

import UserModel from './models/User.js';

mongoose.connect('mongodb+srv://vzts2005:T1tw1idZ26trSDK8@cluster0.sgy9j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
).then(()=> console.log('DB ok'))
.catch((err)=> console.log('DB error', err));

const app = express();


app.use(express.json()) ;

app.post('/auth/register', registerValidator,async(req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    }
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password,salt)
    const doc = new UserModel({
        email: req.body.email ,
        fullName: req.body.fullName,
        passwordHash,
        avatarUrl: req.body.avatarUrl,
    });

    const user = await doc.save();

    res.json(user);
});



app.listen(4444,(err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server ok');
});
