const express = require("express");
const prep = require("./data_prep.js");
const app = express();
const PORT = 8080;

app.get("/cpa", (req, res) => {
    prep.cpa().then(cpas => {
        res.send(cpas);
    }).catch(e => {
        res.send(e);
    });
});

app.get("/gpa", (req, res) => {
    prep.highGPA().then(highest => {
        res.send(highest);
    }).catch(e => {
        res.send(e);
    });
});

prep.prep()
.then(() => {

    app.listen(PORT, () => {
        console.log("listening on port " + PORT + "...");
    });

}).catch(err => {
    console.log(err);
});
 