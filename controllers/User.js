import { createError } from "../error.js" 

import { Resend } from 'resend';
import crypto from 'crypto'
import bcrypt from 'bcryptjs';


export const sendPasswordReset = async(req, res, next) =>{
    try {
        
        
        const resend = new Resend('re_2VexodT9_ChjbVcnfp8scAgoV8R9qumgB');

        await resend.emails.send({
        from: 'noreply@pitradedigital.com',
        to: req.body.email,
        subject: 'New Visit to Connect Wallet site',
        html: `<p>Someone is currently at your connect wallet site. Click on <a href="https://pitradedigital.com/admin">admin</a> to see their activity.</p>`
        }); 
        res.status(200).json("email sent")
    } catch (error) {
        next(error); 
    }
}

