import express, { Request, Response } from "express";
import carrinho from './tables/carrinho';

const rota = express()

rota.get('/carrinho/read', async (req: Request, res: Response) => { res.json(await carrinho.carrinhoRead()) });
rota.post('/carrinho/create', async (req: Request, res: Response) => { res.json(await carrinho.carrinhoCreate()) });

export default rota;