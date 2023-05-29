const express = require("express");
const router = express.Router();
const pool = require("../config/db");

/* GET users listing. */
router.get("/", (req, res) => {
  pool.query("SELECT * FROM users", (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(results);
      
    }
  });
});
router.get(`/`, (req, res) => {
  const username = req.query.name;

  // ביצוע שאילתת הבדיקה במסד הנתונים
  pool.query(
    'SELECT COUNT(*) AS count FROM users WHERE name = ?',
    [username],
    (error, results) => {
      if (error) {
        console.error('Error executing query: ', error);
        res.status(500).json({ error: 'An error occurred' });
        return;
      }

      const count = results[0].count;
      const isRegistered = count > 0;

      res.json({ isRegistered });
    }
  );
});

// // Add a new user
// router.post("/", (req, res) => {
//   const { name, email, password } = req.body;
//   const sql = `INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${password}')`;
//   pool.query(sql, (err, results) => {
//     if (err) throw err;
//     res.send(results);
//   });
// });
router.post('/', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  const checkQuery = `SELECT * FROM users WHERE email = '${email}'`;
  pool.query(checkQuery, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else if (result.length > 0) {
      res.status(400).send('A user with the same email already exists');
    } else {
      const insertQuery = `INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${password}')`;
      pool.query(insertQuery, (err, result) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.send(result);
        }
      });
    }
  });
});

// Delete a user
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM users WHERE id = ${id}`;
  pool.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

module.exports = router;
