import db from '../db';

class servicesDb {
    
    static simplifiedQuery(query: string, param: any[] = []) {
        return new Promise(async (resolve, reject) => {
            try {
                return resolve(await db.consult(query, param))
            } catch (err) {
                reject(err);
                throw err;
            }
        })
    }

}

export default servicesDb;