const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// לקבל את כל האופניים
router.get("/", (req, res) => {
  const isAdmin = true; // לאמת מנהל
  pool.query("SELECT * FROM bike", (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(
        results.map((b) => ({
          ...b,
          isAvailable: b.user_id ? false : true,
          user_id: isAdmin ? b.user_id : undefined,
        }))
      );
    }
  });
});

// Get a bike by id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM bike WHERE id = ${id}`;
  pool.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results[0]);
  });
});

router.put("/:id", (req, res) => {
  // מזהה אופנים
  const { id } = req.params;
  const { isAvailable } = req.body;

  pool.query(`UPDATE bike SET isAvailable = ? WHERE id = ?`, [isAvailable ? 1 : 0, id], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    } else {
      console.log(results);
      res.status(200).end();
    }
  });
});

// Order Bike
router.put("/order/:id", (req, res) => {
  // מזהה אופנים
  const { id } = req.params;
  // מזהה משתמש
  const { userId } = req.body;

  // לקבל את האופניים ע"פ מזהה האופנים
  const sql = `SELECT * FROM bike WHERE id = ?`;
  pool.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: "Internal server error" });
    // אם זמין, להזמין
    else if (results.length && results[0].isAvailable) {
      pool.query(`UPDATE bike SET user_id = ? WHERE id = ?`, [userId, id], (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).json({ error: "Internal server error" });
        } else {
          console.log(results);
          res.status(204).end();
        }
      });
      // אם לא זמין, להחזיר הודעת שגיאה
    } else {
      res.status(400).json({ error: "האופניים לא זמינות" });
    }
  });
});

// // Add a new bike
router.post("/", (req, res) => {
  const { name, description, image_url } = req.body;
  const sql = `INSERT INTO bike ( name, description, image_url) VALUES ('${name}', '${description}', '${image_url}')`;
  pool.query(sql, (err, results) => {
    if (err) console.log(err);
    else {
      // send the new bike from db
      const sql = `SELECT * FROM bike WHERE id = ${results.insertId}`;
      pool.query(sql, (err, results) => {
        res.json(results[0]);
      });
    }
  });
});

// Delete a bike
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM bike WHERE id = ${id}`;
  pool.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

module.exports = router;
