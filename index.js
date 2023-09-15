'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./firebase');
const { Timestamp } = require('firebase-admin/firestore');


const app = express();


app.use(express.json());
app.use(bodyParser.json());
app.use(cors({origin: true}));


const today = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
app.post("/api", async (req, res) => {
    const person = req.body;
    person.created = new Date();
    const dbRes = await db.collection("people").add(person);
    res.status(201).json({"type": "success", "message": dbRes.id});
});

app.get("/api", async (req, res) => {
    const { user_id } = req.query;

    if (user_id) {
        const userRef = db.collection("people").doc(user_id);
        const dbRes = await userRef.get();
        if (!dbRes.exists) {
           res.status(404).json({
            "type": "error",
            "message": "Person does not exist",
           });
        } else {
           res.status(200).json(
            {
                "type": "success",
                "message": "Person retrieved successfully",
                "data": {"id": dbRes.id, ...dbRes.data()}
            }); 
        }
    } else {
        res.status(400).json({
            "type": "error",
            "message": "Invalid Request",
        });
    }
});

app.put("/api", async (req, res) => {
    const { user_id } = req.query;

    if (user_id) {
        const userRef = db.collection("people").doc(user_id);
        const dbRes = await userRef.get();
        if (!dbRes.exists) {
            res.status(404).json({
                "type": "error",
                "message": "Person doesn't exist",
            });
        } else {
            const updateRes = await userRef.update(req.body);
            res.status(200).json({
                "type": "success",
                "message": "User Updated Successfully"
            }); 
        }
    } else {
        res.status(400).json({
            "type": "error",
            "message": "Invalid Request",
        });
    }
});

app.delete("/api", async (req, res) => {
    const { user_id } = req.query;

    if (user_id) {
        const userRef = db.collection("people").doc(user_id);
        const dbRes = await userRef.get();
        if (!dbRes.exists) {
            res.status(404).json({
                "type": "error",
                "message": "Person doesn't exist",
            });
        } else {
            const deleteRes = await userRef.delete(req.body);
            res.status(200).json({
                "type": "success",
                "message": "Person deleted successfully"
            }); 
        }
    } else {
        res.status(400).json({
            "type": "error",
            "message": "Invalid Request",
        });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));

module.exports = app;