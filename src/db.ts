import mysql2, { Pool } from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

class db {
    static pool: Pool = mysql2.createPool({
        host: process.env.DBHOST, 
        user: process.env.DBUSER,
        password: process.env.DBPASSWORD,
        database: process.env.DBNAME,
        connectionLimit: 10
    });

    static consult(query: string, param: any[] = []) {
        return new Promise((resolve, reject) => {
            this.pool.getConnection((err, connection) => {
                if (err) {
                    reject(err)
                    return
                }

                connection.query(query, param, (queryErr, result) => {
                    connection.release()
                    if (queryErr) {
                        console.error('Possivel erro na query!!')
                        reject(queryErr)
                    } else {
                        resolve(result)
                    }
                })
            })
        })
    }
}

export default db;