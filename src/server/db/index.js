const mysql = require("mysql");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "mysql@123",
  database: "upaay",
  connectionLimit: 10,
});
let rootdb = {};

rootdb.bookings = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      `select * from bookings where added_on=?`,
      [added_on],
      (err, result) => {
        if (err) {
          return reject(err);
        }
        console.log(result);
        return resolve(result);
      }
    );
  });
};

module.exports = rootdb;
