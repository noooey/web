require("dotenv").config();
const express = require("express");
const db = require('./db')
const morgan = require("morgan");

const app = express();

app.use(express.json());

app.get("/api/v1/restaurants", async (req, res) => {
    try {
        const results = await db.query("select * from restaurants");
        res.status(200).json({
            staus: "success",
            results: results.rows.length,
            data: {
                restaurants: results.rows,
            },
        });
    } catch (err) {
        console.log(err);
    }
});

// get a restaurant
app.get("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const results = await db.query('select * from restaurants where id = $1', [req.params.id]);
        // select * from restaurants where id = req.params.id
        res.status(200).json({
            staus: "success",
            data: {
                restaurants: results.rows[0],
            },
        });
    } catch (err) {
        console.log(err);
    }
});

// create a restaurant
app.post("/api/v1/restaurants/", async (req, res) => {
    try {
        const { name, location, price_range } = req.body;
        await db.query('insert into restaurants (name, location, price_range) values ($1, $2, $3)', [name, location, price_range]);
        res.status(201).json({
            status: "success",
            data: req.body,
        });
    } catch (err) {
        console.log(err);
    }
});

// Update Restaurants
app.put("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const { name, location, price_range } = req.body;
        await db.query('UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4;', [name, location, price_range, req.params.id]);
        res.status(200).json({
            status: "success",
            data: {
                restaurant: req.body,
            },
        });
    } catch (err) {
    }
});

// Delete Restaurant
app.delete("/api/v1/restaurants/:id", async (req, res) => {
    try {
        await db.query(`DELETE FROM restaurants WHERE id = ${req.params.id};`);
        res.status(204).json({
            status: "success",
        });
    } catch (err) {
        console.log(err);
    }
})

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
})