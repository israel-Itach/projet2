const express = require("express");
const router = express.Router();
const pool = require("../config/db");

//לקבל את כל האופניים
router.get("/", (req, res) => {
  pool.query("SELECT * FROM bike", (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(results);
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

  pool.query(
    `UPDATE bike SET isAvailable = ? WHERE id = ?`,
    [isAvailable ? 1 : 0, id],
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
      } else {
        console.log(results);
        res.status(200).end();
      }
    }
  );
});

// Add a new bike
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
