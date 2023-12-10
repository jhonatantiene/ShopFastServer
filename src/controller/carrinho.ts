import serviceDb from '../services/servicesDb';
import usuarios from './usuarios';

export class carrinho {

    static async carrinhoRead(param: any): Promise<any> {
        return await serviceDb.simplifiedQuery('select * from carrinho')
    }

    static async carrinhoCreate(param: any[]) {
        return await serviceDb.simplifiedQuery('INSERT INTO carrinho (idProduto, idCliente, qtd, data) VALUES (?, ?, ?, ?)', [])
    }

    static async carrinhoUpdate(param: any) {
        let carrinho: any = await this.carrinhoRead('param.user')
        let resultRead: any = 0
        carrinho.forEach((v: any) => { resultRead = v.qtd + 1/*param.qtd*/ })
        console.log(resultRead)
        return await serviceDb.simplifiedQuery('UPDATE carrinho SET qtd = ?', [resultRead])
    }
}

export default carrinho;