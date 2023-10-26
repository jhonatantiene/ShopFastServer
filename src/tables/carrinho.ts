import serviceDb from '../services/servicesDb';

export class carrinho {

    static async carrinhoRead() {
        return await serviceDb.simplifiedQuery('select * from carrinho')
    }

    static async carrinhoCreate() {
        return await serviceDb.simplifiedQuery('select * from carrinho')
    }

}

export default carrinho;