import express from 'express'
import { prisma }from '../lib/prisma'

const router = express.Router(); 


// Dashboard 


router.post('/dashboard', (req, res) => {

    const user = req.body 

    res.status(200).json({ message: "Bem vindo ao Dashboard da aplicação"});

})


export default router 