require("dotenv").config();
const express = require("express");
const readdirp = require("readdirp");

const app = express();

app.use(express.json());

readdirp(".", {
    fileFilter: "*Route.js",
    directoryFilter: ["!.git", "!*modules"],
}).on("data", (entry) => {
    const path = `./${entry.path}`;
    const route = require(path);
    app.use(route);
    console.log(`${path} is loaded!`);
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`\n=_= App running on port:${process.env.PORT || 3000} =_=\n`);
});
