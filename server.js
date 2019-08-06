// Reqired 
var express = require("express");
var path = require("path");

// server
var app = express();
var PORT = 3001;

// app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// create tables

var table = [
    {
        tableNum: "Robert Brownie Jr.",
        reservedFor: "",
        name: "",
        email: "",
        phone: ""
    },
    {
        tableNum: "Macrelmore",
        reservedFor: "",
        name: "",
        email: "",
        phone: ""
    },
    {
        tableNum: "Miley Fryrus",
        reservedFor: " ",
        name: "",
        email: "",
        phone: ""
    },
    {
        tableNum: "Tom Bready",
        reservedFor: " ",
        email: "",
        phone: ""
    },
    {
        tableNum: "Olvia Fig Newton John",
        reservedFor: " ",
        name: "",
        email: "",
        phone: ""
    },
]

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/reservationForm.html"));
});
app.get("/view", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/reservationViews.html"));
});

// Displays all characters
app.get("/api/tables", function (req, res) {
    return res.json(table);
});




// // Displays a single character, or returns false
// app.get("/api/table/:tables", function (req, res) {
//     var chosen = req.params.character;

app.listen(PORT, function () {
    console.log("App listening on PORT http://localhost:" + PORT);
});