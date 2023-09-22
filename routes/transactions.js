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

//returns a transaction based on the key you are serching for, eg /transactions/categorys
const selectTransactionByKey = (req, res, key, value) => {
  db(`SELECT * FROM transactions WHERE ${key} = "${value}";`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
}

//Not using this at the moment
function constructSQLUpdate(query, tableName, id) {
	const updateFields = [];
	// Check if the query is not empty 
	if (!query || !Object.keys(query).length ) {
		return
	}
	// Construct the SET clause and gather query parameters
	for (let key in query) {
		updateFields.push(`${key} = '${query[key]}'`);
	}
	let sql = `UPDATE ${tableName} SET ${updateFields.join(", ")} WHERE id = ${id}`;
	return sql;
}


//CRUD

/* POST - Create a new transaction */

router.post("/", async function(req, res, next) {
  const {date, category_id, merchant, description, amount, currency, user_id, trip_id} = req.body;
  try {
    await db(`INSERT INTO transactions (date, category, merchant, description, amount, currency) 
    VALUES ('${date}', '${category_id}', '${merchant}', '${description}', '${amount}', '${currency}, ${user_id}, ${trip_id}');`);
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

// router.get('/:id', (req, res) => {
//   const key = "id";
//   const value = req.params.id;
//   selectTransactionByKey(req, res, key, value);
// });

router.get('/:id', (req, res) => {
  const {id} = req.params;
  db(`SELECT * FROM transactions JOIN categories ON transactions.category_id = categories.id WHERE transactions.id = ${id};`)
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
});

/* GET transactions by category */

// router.get('/category/:value', (req, res) => {
//   const key = "category";
//   const value = req.params.value;
//   selectTransactionByKey(req, res, key, value);
// });

router.get('/category/:name', async (req, res) => {
  const {name} = req.params;

  try {
    const categoryResults = await db(`SELECT * FROM categories WHERE name = "${name}";`);
    const transactionResults = await db(`SELECT * FROM transactions JOIN categories ON transactions.category_id = categories.id WHERE categories.name = "${name}"`);
    const category = categoryResults.data[0];
    const transaction = transactionResults.data;
    res.send({ category, transaction });
  } catch (error) {
    res.status(500).send({ err: err.message });
  }
});

/* GET transactions by currency */

router.get('/currency/:value', (req, res) => {
  const key = "currency";
  const value = req.params.value;
  selectTransactionByKey(req, res, key, value);
});

/* GET transactions by user firstname */
router.get('/user/:username', async (req, res) => {
  const {username} = req.params;

  try {
    const userResults = await db(`SELECT * FROM users WHERE username = "${username}";`);
    const transactionResults = await db(`SELECT * FROM transactions JOIN users ON transactions.user_id = users.id JOIN categories ON transactions.category_id = categories.id WHERE users.username = "${username}";`);

    const user = userResults.data[0];
    const transaction = transactionResults.data;

    res.send({ user, transaction });
  } catch (error) {
    res.status(500).send({ err: err.message });
  }
});

/* GET transactions by trip */
router.get('/trip/:id', async (req, res) => {
  const {id} = req.params;

  try {
    const tripResults = await db(`SELECT * FROM users JOIN trip_user_relationship ON users.id = trip_user_relationship.user_id JOIN trips ON trips.id = trip_user_relationship.trip_id WHERE trips.id = ${id};`);
    const transactionResults = await db(`SELECT * FROM transactions JOIN trips ON transactions.trip_id = trips.id JOIN users ON transactions.user_id = users.id JOIN categories ON transactions.category_id = categories.id WHERE users.id = transactions.user_id AND trips.id = ${id} ORDER BY date ASC;`);
    // add also userResults and categoryResults

    const trip = tripResults.data;
    console.log("trip destination:", trip.destination);
    const transaction = transactionResults.data;
    console.log("transaction[0].destination:", transaction[0].destination);


    res.send({ trip, transaction });
  } catch (error) {
    res.status(500).send({ err: err.message });
  }
});


/* PUT - Update category OR amount OR currency - Not quite correct as there should be a patch for all of these updates*/

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
