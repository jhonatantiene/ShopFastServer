import serviceDb from '../services/servicesDb';

class produtos {
    static async produtosRead() {
        return await serviceDb.simplifiedQuery('select * from produtos')
    }
}

export default produtos;