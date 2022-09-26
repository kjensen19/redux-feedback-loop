const express = require('express');
const router = express.Router();
const pool = require('../pool');

//POST
router.post('/', (req, res) => {
    const sqlText = `
    INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
      VALUES($1, $2, $3, $4)
    `
    const sqlValues = [req.body.feeling, req.body.understanding, req.body.support, req.body.comments]
    pool.query(sqlText, sqlValues)
    .then((dbRes) => {
        res.sendStatus(201)
    }).catch((dbErr) => {
        console.log('SS POST FAILED', dbErr)
        res.sendStatus(500)
    })
})

//GET
router.get('/', (req, res) => {
    const sqlText = `
    SELECT * FROM feedback
      order by id
    `
    pool.query(sqlText)
    .then((dbRes) => {
        res.send(dbRes)
    }).catch((dbErr) => {
        console.log('Error in get', dbErr)
        res.sendStatus(500)
    })
})


//DEL
router.delete('/:id', (req, res) => {
    id = req.params.id
    sqlText = `
    DELETE FROM feedback
      WHERE id=$1
    `
    sqlValues = [id]
    pool.query(sqlText, sqlValues)
    .then((dbRes) => {
        res.sendStatus(201)
    }).catch((dbErr) => {
        console.log('Error in delete', dbErr)
    })
})

//PUT
router.put('/:id', (req, res) => {
    const sqlText = `
    UPDATE feedback 
    SET flagged = NOT flagged
    WHERE id=$1
    `
    const sqlValues = [req.params.id]
    pool.query(sqlText, sqlValues)
    .then((dbRes) => {
        res.sendStatus(201)
    }).catch((dbErr) => {
        console.log('Error in put', dbErr)
    })
})


module.exports = router;

