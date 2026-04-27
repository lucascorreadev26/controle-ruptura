import express from 'express' 
import { prisma } from '../lib/prisma'

const router = express.Router(); 


// Rota Cadastro
router.post('/cadastro', (req, res) => {


})




// Rota Login
router.post('/login', (req, res) => {
    const user = req.body

    res.status(200).json({ message: "Login realizado com Sucesso!" })

})



export default router 