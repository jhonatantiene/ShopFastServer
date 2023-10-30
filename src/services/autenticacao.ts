import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config()

class autenticacao {
    static async auth() {
        const payload = {
            userId: 123,
            username: 'exampleUser'
        };
        const secretKey: any = process.env.SECRET_KEY
        const token = jwt.sign(payload, secretKey, {expiresIn: '1h'})
        console.log(token)
    }
}
export default autenticacao;