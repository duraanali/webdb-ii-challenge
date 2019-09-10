const express = require('express');


const db = require('../data/dbConfig');


const router = express.Router();


router.post('/', (req, res) => {
    const postData = req.body;

    db('cars')
        .insert(postData, 'name, budget')
        .then(([name, budget]) => {
            db('posts')
                .where({ name, budget })
                .first()
                .then(accounts => {
                    res.status(200).json(accounts);
                });
        })
        .catch(err => {
            res.json(err);
        });
});



router.get('/', (req, res) => {
    db('cars')
        .select('vin', 'make', 'model', 'milleage', 'transmission_type', 'title_status')
        .then(cars => {
            res.status(200).json(cars);
        })
        .catch(err => {
            res.json(err);
        });
});

router.put('/:id', (req, res) => {
    const changes = req.body;
    db('accounts')
        .where('id', req.params.id)
        .update(changes)
        .then(count => {
            res.status(200).json({ message: `updated ${count} record` });
        })
        .catch(err => {
            res.json(err);
        });
});

router.delete('/:id', (req, res) => {

    db('accounts')
        .where({ id: req.params.id })
        .del()
        .then(count => {
            res.status(200).json({ message: `deleted ${count} records` });
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;