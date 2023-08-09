const express = require('express');
const router = express.Router();
const db = require("../model/helper");

//helper functions

//returns all the transactions in ascending order
const getAllTransaction = (req, res) => {
  db("SELECT * FROM transactions ORDER BY date ASC;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
};

//returns a transaction based on the key you are serching for, eg /transactions/categories
const selectTransactionByKey = (req, res, key, value) => {
  db(`SELECT * FROM transactions WHERE ${key} = "${value}";`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
}

//CRUD

/* POST - Create a new transaction */

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


/* GET transactions by id */

router.get('/:id', (req, res) => {
  const key = "id";
  const value = req.params.id;
  selectTransactionByKey(req, res, key, value);
});

/* GET transactions by category */

router.get('/category/:value', (req, res) => {
  const key = "category";
  const value = req.params.value;
  selectTransactionByKey(req, res, key, value);
});

/* GET transactions by currency */

router.get('/currency/:value', (req, res) => {
  const key = "currency";
  const value = req.params.value;
  selectTransactionByKey(req, res, key, value);
});

// NOT FULLY WORKING, IT'S NOT UPDATING THE CURRENCY
// `UPDATE transactions SET amount = ${amount}, currency = "${currency}" WHERE id = ${id};`
//UPDATE transactions SET amount =240, currency = "USD" WHERE id = 3;
/* PUT - Update category OR amount OR currency*/

router.put('/:id', async function(req, res) {
  const id = req.params.id;
  const { category, amount, currency } = req.body;
  try {
    if (category && amount && currency) {
      await db(`UPDATE transactions SET category = "${category}", amount = ${amount}, currency = "${currency}" WHERE id = ${id};`);
    } else if (amount && category) {
      await db(`UPDATE transactions SET category = "${category}", amount = ${amount} WHERE id = ${id};`);
    } else if (amount && currency) {
      await db(`UPDATE transactions SET amount = ${amount}, currency = "${currency}" WHERE id = ${id};`);
    } else if (amount) {
      await db(`UPDATE transactions SET amount = ${amount} WHERE id = ${id};`);
    } else if (category) {
      await db(`UPDATE transactions SET category = "${category}" WHERE id = ${id};`);
    } else if (currency) {
      await db(`UPDATE transactions SET currency = "${currency}" WHERE id = ${id};`);
    }
    const result = await db(`SELECT * FROM transactions WHERE id = ${id};`);
    res.send(result.data);
  } catch (error) {
    res.status(500).send({error: error.message});
  }
});

router.delete('/:id', async function(req, res) {
  const value = req.params.id;
  try {
    await db(`DELETE FROM transactions WHERE id=${value};`);
    getAllTransaction(req, res)
  } catch (error) {
    res.status(500).send({ err: err.message });
  }
});

module.exports = router;
