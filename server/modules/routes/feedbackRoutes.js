const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// router.get('/', (req, res) => {
//     console.log('GET /api/pizza');
//     pool.query('SELECT * from "pizza";').then((result) => {
//         res.send(result.rows);
//     }).catch((error) => {
//         console.log('Error GET /api/pizza', error)
//         res.sendStatus(500);
//     });
// })

//GET


// router.put('/like/:id', (req, res) => {
//     console.log('id?', req.params.id);
//     const sqlText = `
//     UPDATE galleryinfo SET likes = likes + 1
//       Where id=$1
//     `
//     const sqlValues = [req.params.id]
//     pool.query(sqlText, sqlValues)
//     .then((dbRes) => {
//         res.sendStatus(200)
//     })
//     .catch((dbErr) => {
//         console.log('SQL failed in PUT: ', dbErr)
//         res.sendStatus(500)
//     })
    
// }); 

//POST
router.post('/', (req, res) => {
    const sqlText = `
    INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
      VALUES($1, $2, $3, $4)
    `
    const sqlValues = [req.body.feeling, req.body.understanding, req.body.support, req.body.comments]
    pool.query(sqlText, sqlValues)
    .then((dbRes) => {
        res.sendStatus(200)
    }).catch((dbErr) => {
        console.log('SS POST FAILED', dbErr)
        res.sendStatus(500)
    })
})


//PUT


//DELETE
module.exports = router;