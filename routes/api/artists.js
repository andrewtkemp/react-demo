const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const router = express.Router();


router.get("/:letter", (req, res)=>{
    let url = `http://www.plyrics.com/${req.params.letter}.html`

request(url, function (error, response, body) {
  console.log("Hello World")
  const $ = cheerio.load(body)
  let artists = [];
  $(".artistlist").each(function(i, element) {
        let text = $(this).text();
        let href = $(this).attr("href");
        console.log(text);
        console.log(href);
        let artistInfo = {
            name:text,
            href:href
        }
        artists.push(artistInfo)
  })
    res.send(artists);
});
})



module.exports = router;