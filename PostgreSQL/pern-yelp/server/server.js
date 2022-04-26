require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.json());

app.get("/api/v1/restaurants", (req, res) => {
    console.log("route handler ran");
    res.status(200).json({
        staus: "success",
        data: {
            restaurant: ["mcdonalds", "wendys"],
        },
    })
});

// get a restaurant
app.get("/api/v1/restaurants/:restaurantid", (req, res) => {
    console.log(req.params);
});

// create a restaurant
app.post("/api/v1/restaurants/", (req, res) => {
    console.log(req.body);
    res.status(201).json({
        status: "success",
        data: {
            restaurant: "mcdonalds",
        },
    });
});

// Update Restaurants
app.put("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    res.status(200).json({
        status: "success",
        data: {
            restaurant: "mcdonalds",
        },
    });
});

// Delete Restaurant
app.delete("/api/v1/restaurants/:id", (req, res) => {
    res.status(204).json({
        status: "success",
    });
})

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
})