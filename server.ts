import express from 'express'

import publicRoutes from './routes/public'
import privateRoutes from './routes/private'



const app = express()
app.use(express.json())

app.use('/', publicRoutes)
app.use('/', privateRoutes)




app.listen(3000, () => {
    console.log("Servidor Rodando com Sucesso!")
})