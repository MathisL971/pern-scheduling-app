const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// Middleware
app.use(cors());
app.use(express.json());


// ROUTES //

// Create an event
app.post("/events", async(req, res) => {
    try {
        const { event_name, event_minhour, event_maxhour, event_duration, event_minnumplayers, event_maxnumplayers } = req.body;
        const newEvent = await pool.query("INSERT INTO events (event_name, event_minhour, event_maxhour, event_duration, event_minnumplayers, event_maxnumplayers) VALUES($1, $2, $3, $4, $5, $6) RETURNING *", [event_name, event_minhour, event_maxhour, event_duration, event_minnumplayers, event_maxnumplayers]);
        res.json(newEvent.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// Get an event


// Get all events


// Update an event


// Delete an event



// Create a participant


// Get a participant



// 



app.listen(5000, () => {
    console.log("Server has started on port 5000")
});