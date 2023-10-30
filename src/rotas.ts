import express, { Request, Response } from "express";
import carrinho from './controller/carrinho';
import usuarios from './controller/usuarios';

const rota = express()

rota.post('/carrinho/login', async (req: Request, res: Response) => { res.json(await usuarios.login()) })
rota.post('/carrinho/read', async (req: Request, res: Response) => { res.json(await carrinho.carrinhoRead(2)) });
rota.post('/carrinho/create', async (req: Request, res: Response) => { res.json(await carrinho.carrinhoCreate(2)) });
rota.post('/carrinho/update', async (req: Request, res: Response) => { res.json(await carrinho.carrinhoUpdate(1)) });

export default rota;