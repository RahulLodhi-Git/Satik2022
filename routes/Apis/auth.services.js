// const { db } = require("../../index")


const mysql=require('mysql');
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'satikElectric'
});
console.log(db)

module.exports = {
    getUserByUserEmail: (email, callback) => {
        console.log(email)
        db.query(`SELECT * FROM users WHERE email=?`,[email],
            (error, results, fields) => {
                console.log('results', results)
                if (error) {
                    callback(error)
                }
                return callback(null, results[0])
            }
        )
    }
}