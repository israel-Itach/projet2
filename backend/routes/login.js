const express = require("express");
const router = express.Router();
const pool = require("../config/db");

router.post("/", (req, res) => {
  const { email, password } = req.body;

  const sql = `SELECT * FROM users WHERE email = ? AND password = ?`;
  pool.query(sql, [email, password], (err, results) => {
    if (err) {
      res.status(500).send("שגיאה בבדיקת ההתחברות");
    } else if (results.length > 0) {
      const { id, email, name } = results[0];
      res.status(200).json({ id, email, name });
    } else {
      res.status(401).send("פרטי ההתחברות שגויים");
    }
  });
});
module.exports = router;
