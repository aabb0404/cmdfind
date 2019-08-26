import mysql from 'mysql';
require('dotenv').config();

// create connection pool
const {DB_HOST, DB_USER, DB_PWD, DB_NAME, DB_PORT} = process.env;
const connectConfig = {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PWD,
    database: DB_NAME,
    timezone: 'utc',
    port: DB_PORT,
};

const pool = mysql.createPool(connectConfig);

const queryPromise = (sql, params = []) => {
    let sqlString = escapeString(sql);
    return new Promise((resolve, reject) => {
        pool.query(sqlString, params, (err, results, fields) => {
            if (err) {
                console.error(err);
                reject(err);
                return;
            }
            resolve(JSON.parse(JSON.stringify(results)), fields);
        });
    });
};

const escapeString = (strings, ...values) => {
    if (values.length > 0) {
        let queryString;
        if (values.length) {
            values = values.map((value) => mysql.escape(value));
        }
        queryString = strings.reduce(function(result, string, index) {
            return result + string + (values[index] ? values[index] : '');
        }, '');

        return queryString;
    } else {
        return strings;
    }
};

export {queryPromise};