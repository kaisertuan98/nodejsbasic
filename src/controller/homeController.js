import connection from '../configs/connectDB.js';
let getHomePage = (req, res) => {
  //logic
  let data = [];
  connection.query ('SELECT * FROM `users`', function (err, results, fields) {
    // results contains rows returned by server
    results.map (rows => {
      data.push ({
        id: rows.id,
        email: rows.email,
        address: rows.address,
        firstName: rows.firstName,
        lastName: rows.lastName,
      });
    });

    return res.render ('index.ejs', {dataUser: data});
  });
};

let createNewUser = async (req, res) => {
  let {firstName, lastName, email, address} = req.body;
  await connection.execute (
    'insert into users(firstName, lastName, email, address) values (?, ?, ?, ?)',
    [firstName, lastName, email, address]
  );

  return res.redirect ('/');
};

export default {getHomePage, createNewUser};
