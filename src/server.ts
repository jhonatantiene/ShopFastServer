import express from "express";
import dotenv from 'dotenv';
import rotas from './rotas';
import cors from 'cors';
dotenv.config()

const x = express()

x.use(cors({ origin: '*' }))
x.use('/', rotas)

x.listen(process.env.PORTA, () => {
    console.log('running!!!')
})