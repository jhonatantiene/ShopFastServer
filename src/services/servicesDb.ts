import db from '../db';

class servicesDb {
    
    static simplifiedQuery(query: string) {
        return new Promise(async (resolve, reject) => {
            try {
                return resolve(await db.consult(query))
            } catch (err) {
                reject(err);
                throw err;
            }
        })
    }

}

export default servicesDb;