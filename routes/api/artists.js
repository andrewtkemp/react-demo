const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const router = express.Router();


router.get("/:letter", (req, res)=>{
    let url = `http://www.plyrics.com/${req.params.letter.toLowerCase()}.html`
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
    res.send(artists);
});
})

router.get("/:letter/:artist", (req, res) => {
    let url = `http://www.plyrics.com/${req.params.letter}/${req.params.artist}.html`

    request(url, function (error, response, body) {
      const $ = cheerio.load(body)
      let artistAlbums = [];
      $("#listAlbum div").each(function(i, element) {
            let albumInfo = $(this).text().split(/(\r\n|\n|\r)/gm);
            let album = {
                album:albumInfo
            }
            artistAlbums.push(album)
      })
      res.send(artistAlbums);
    });
})

module.exports = router;