const express = require('express');


const db = require('../data/dbConfig');


const router = express.Router();


router.post('/', (req, res) => {
    const postData = req.body;

    db('cars')
        .insert(postData, 'vin', 'make', 'model', 'milleage', 'transmission_type', 'title_status')
        .then(([vin, make, model, milleage]) => {
            db('cars')
                .where({ vin, make, model, milleage })
                .first()
                .then(cars => {
                    res.status(200).json(cars);
                });
        })
        .catch(err => {
            res.json(err);
        });
});



router.get('/', (req, res) => {
    db('cars')
        .select('id', 'vin', 'make', 'model', 'milleage', 'transmission_type', 'title_status')
        .then(cars => {
            res.status(200).json(cars);
        })
        .catch(err => {
            res.json(err);
        });
});

router.put('/:id', (req, res) => {
    const changes = req.body;
    db('cars')
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

    db('cars')
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