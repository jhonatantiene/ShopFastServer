import express, { Request, Response } from "express";
import carrinho from './controller/carrinho';
import usuarios from './controller/usuarios';
import produtos from './controller/produtos';

const rota = express()

rota.post('/produtos/read', async (req: Request, res: Response) => { res.json(await produtos.produtosRead()) })

rota.post('/carrinho/login', async (req: Request, res: Response) => { res.json(await usuarios.login()) })
rota.post('/carrinho/read', async (req: Request, res: Response) => { res.json(await carrinho.carrinhoRead(2)) });
rota.post('/carrinho/create', async (req: Request, res: Response) => { res.json(await carrinho.carrinhoCreate(req.body)) });
rota.post('/carrinho/update', async (req: Request, res: Response) => { res.json(await carrinho.carrinhoUpdate(1)) });

export default rota;