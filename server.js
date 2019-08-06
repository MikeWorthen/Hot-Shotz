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
        reservedFor: " ",
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