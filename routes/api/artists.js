const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const router = express.Router();


router.get("/:letter", (req, res)=>{
    let url = `http://www.plyrics.com/${req.params.letter}.html`

request(url, function (error, response, body) {
  const $ = cheerio.load(body)
  let artists = [];
  $(".artistlist").each(function(i, element) {
        let text = $(this).text();
        let href = $(this).attr("href");
        let artistInfo = {
            name:text,
            href:href
        }
        artists.push(artistInfo)
  })
    console.log("Hello World")
    res.send(artists);
});
})


module.exports = router;