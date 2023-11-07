import serviceDb from '../services/servicesDb';

export class carrinho {

    static async carrinhoRead(param: any): Promise<any> {
        return await serviceDb.simplifiedQuery('select * from carrinho WHERE idCliente = ?', [param.user])
    }

    static async carrinhoCreate(param: any) {
        if ('idCliente == clienteAtual') {
            if ('idproduto == produtoAtual') {
                return this.carrinhoUpdate(param)
            }
        }
        return await serviceDb.simplifiedQuery('INSERT INTO carrinho (idcarrinho, idProduto, idCliente, qtd, data) VALUES (?, ?, ?, ?, ?)', [2, 2, 2, 4, '20231025'])
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