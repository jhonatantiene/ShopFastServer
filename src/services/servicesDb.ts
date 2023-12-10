import db from '../db';

class servicesDb {

    static async simplifiedQuery(query: string, param: any[] = []) {
        try {
            return await db.consult(query, param)
        } catch (err) {
            throw err;
        }
    }
}
export default servicesDb;