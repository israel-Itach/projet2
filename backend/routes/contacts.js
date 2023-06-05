const express = require("express");
const router = express.Router();
const pool = require("../config/db");

//לקבל את כל ההודעות 

router.get("/", (req, res) => {
  pool.query("SELECT * FROM contacts", (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(results);
    }
  });
});

// קבלת בקשות POST מהלקוחות ושמירת הנתונים במסד הנתונים
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  
  const sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";
  const values = [name, email, message];

  try {
    await queryAsync(sql, values);
    console.log("Data inserted successfully");
    res.json({ message: "Data inserted successfully" });
  } catch (err) {
    console.error("Error inserting data:", err);
    res.status(500).json({ error: "An error occurred" });
  }
});

function queryAsync(sql, values) {
  return new Promise((resolve, reject) => {
    pool.query(sql, values, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM contacts WHERE id = ${id}`;
  pool.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

module.exports = router;
