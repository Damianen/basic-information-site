import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res) => {
    const options = {
        root: path.join(__dirname)
    };

    res.sendFile("index.html", options);
});

app.get("/:name", (req, res) => {
    const options = {
        root: path.join(__dirname)
    };

    let fileName = req.params.name;

    res.sendFile(fileName, options, (err) => {
        res.sendFile('404.html', options);
    });
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});