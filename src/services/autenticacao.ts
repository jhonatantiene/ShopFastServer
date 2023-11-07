import dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
dotenv.config()

class autenticacao {

    static async singToken(req: Request, res: Response, next: NextFunction) {
        const secretKey: any = process.env.SECRET_KEY
        const token = jwt.sign(req.headers.token!, secretKey, { expiresIn: '1h' })
        console.log(token)

        jwt.verify(token, secretKey, (err: any, decoded: any) => {
            if (err) {
                res.status(404)
                return { msg: 'erro ao verificar o token' }
            }
        })
    }
}
export default autenticacao;