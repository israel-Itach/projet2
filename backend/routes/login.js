var express = require("express");
var router = express.Router();
const pool = require("../config/db");

router.post('/', (req, res) => {
    const { email, password } = req.body; 
  
    const sql = `SELECT * FROM users WHERE email = ? AND password = ?`;
    pool.query(sql, [email, password], (err, results) => {
      if (err) {
        res.status(500).send('שגיאה בבדיקת ההתחברות');
      } else if (results.length > 0) {
        res.status(200).send('התחברת בהצלחה');
      } else {
        res.status(401).send('פרטי ההתחברות שגויים');
      }
    });
  });
module.exports = router;