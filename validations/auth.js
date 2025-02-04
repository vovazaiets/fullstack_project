import  { body } from 'express-validator'

export const registerValidator = [
    body('email', 'wrong format email').isEmail(),
    body('password', 'Password need be >5 symbols').isLength({min:5}),
    body('fullName', 'Name need be >3 symbols').isLength({min:3}),
    body('avatarUrl').optional().isURL(),
];