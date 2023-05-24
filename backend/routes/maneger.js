var express = require("express");
var router = express.Router();
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

module.exports = router;
