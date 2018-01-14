var fs = require('fs');

exports.readUserJson = function(req, res) {
    var response = {
        "name": "Akshay Pathare",
        "countriesVisited": ["India", "South Africa"]
    }

    res.send(response);
    //res.sendFile('../data.txt');
}

exports.readUserJsonForPost = function(req, res) {
    var response = {
        "name": "Akshay Pathare",
        "countriesVisited": ["India", "South Africa"],
        "id": req.body || []
    }

    res.send(response);
    //res.sendFile('../data.txt');
}