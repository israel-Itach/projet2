const express = require("express");
const router = express.Router();
const pool = require("../config/db");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/", (req, res) => {
  const { username, password } = req.body;
  // בדיקת האימות במסד הנתונים
  const query = "SELECT * FROM maneger WHERE username = ? AND password = ?";
  pool.query(query, [username, password], (error, results) => {
    if (error) {
      console.error("Error executing query:", error);
      res.status(500).json({ error: "שגיאה בבדיקת האימות" });
    } else {
      // בדיקה שם משתמש וסיסמה
      if (results.length > 0) {
        // המשתמש מורשה - יכול לגשת לאיזור האישי
        res.status(200).json({ message: "התחברת בהצלחה!" });
        console.log("התחברת בהצלחה!");
      } else {
        // שגיאה בפרטי הכניסה
        res.status(401).json({ error: "שם משתמש או סיסמה שגויים" });
      }
    }
  });
});

// לקבל את כל האופניים
router.get("/bike", (req, res) => {
  pool.query("SELECT * FROM bike", (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
