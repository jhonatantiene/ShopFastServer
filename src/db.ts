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

    static consult(query: string) {
        return new Promise((resolve, reject) => {
            this.pool.getConnection((err, connection) => {
                if (err) {
                    console.error(err)
                    reject(err)
                    return
                }

                connection.query(query, (queryErr, result) => {
                    connection.release()
                    if (queryErr) {
                        console.error(queryErr)
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