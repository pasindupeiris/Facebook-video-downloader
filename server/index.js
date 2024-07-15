// server.js
const express = require('express');
const getFbVideoInfo = require('fb-downloader-scrapper');

const app = express();

app.get('/getFbVideoInfo', (req, res) => {
    const url = req.query.url;

    getFbVideoInfo(url).then((result) => {
            console.log(res.json(result));
        }).catch((err) => {
            console.log(err);
        })
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
