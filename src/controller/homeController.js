import connection from '../configs/connectDB.js';
let getHomePage = (req, res) => {
  //logic
  let data = [];
  connection.query ('SELECT * FROM `users`', function (err, results, fields) {
    console.log ('check mySQL');
    console.log (results); // results contains rows returned by server
    results.map (rows => {
      data.push ({
        id: rows.id,
        email: rows.email,
        address: rows.address,
        firstName: rows.firstName,
        lastName: rows.lastName,
      });
    });

    return res.render ('test/index.ejs', {dataUser: JSON.stringify (data)});
  });
};

export default {getHomePage};
