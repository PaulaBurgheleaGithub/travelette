const express = require('express');
const router = express.Router();
const db = require("../model/helper");

//helper functions
const getAllTransaction = (req, res) => {
  db("SELECT * FROM transactions ORDER BY date ASC;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
};

//CRUD
/* Create a new transaction */
//mysql> INSERT INTO transactions (date, category, merchant, description, amount, currency)
//     VALUES ('2022-12-07', 'food', 'Stakehouse', 'fantastic steak', '50','USD');

router.post("/", async function(req, res, next) {
  const {date, category, merchant, description, amount, currency} = req.body;
  try {
    await db(`INSERT INTO transactions (date, category, merchant, description, amount, currency) 
    VALUES ('${date}', '${category}', '${merchant}', '${description}', '${amount}', '${currency}');`);
    getAllTransaction(req, res);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

/* GET All trasnsaction list. */
router.get('/', function(req, res) {
  getAllTransaction(req, res);
});

/* GET  transaction by id*/

router.get('/:id', async function(req, res) {
  const id = req.params.id;
  try {
    const result = await db(`SELECT * FROM transactions WHERE id = ${id};`);
    res.send(result.data);
  } catch (error) {
    res.status(500).send({ error: error.message });
    // res.status(404).send({ error: "This transaction does not exist!"});
  }
});

/* NOT WORKING _ SQL query tested  - Update Transaction category by serching for ID */
router.put("/:id", async (res, req) => {
  const id = req.params.id;
  const { category }  = req.body;
  try {
    const result = await db(`UPDATE transactions SET category = ${category} WHERE id = ${id};`);
    res.send(result.data);
  } catch (error) {
    res.status(500).send({error: error.message});
  }
});

module.exports = router;
