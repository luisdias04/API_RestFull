const express = require ('express')
const app = express()
const mongoose = require('mongoose')
const home = require('/backend/routers/home')
const login = require('/backend/routers/login')


app.use(express.json())
app.use(home)
app.use(login)





app.listen(3000,()=>{
    console.log('API em construção da emiolo esta rodando')
})