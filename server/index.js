// server.js
const express = require('express');
const getFbVideoInfo = require('fb-downloader-scrapper');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/getFbVideoInfo', (req, res) => {

    const url = req.query.url;
    console.log(url);

    getFbVideoInfo(url).then((result) => {
            console.log(result)
            res.json(result);
        }).catch((err) => {
            res.json("Error");
        })
});

app.listen(8090, () => {
    console.log('Server is running on port 8090');
});
