const request = require('request');
const cheerio = require('cheerio');

let url = "http://www.plyrics.com/lyrics/"
let band = "Have Heart"

request(url, function (error, response, body) {
  const $ = cheerio.load(body)
  // let test = $(".content_lyr").remove("h3").remove("h4").remove("h1").remove("script")
  // $(test).each(function(i, element) {
  //     let text = $(this).text();
  //     let stuff = text.replace(/\n/g,'').replace("                 Print     Email","").split("Thanks")
  //     let content = stuff[0].split("LYRICS")
  //     let band = content[0].replace("Print","").replace("Email","").trim()
  //     let title = "The Same Son"
  //     let lyrics = content[1].split(title)
  //     console.log("Band: " + band);
  //     console.log("Lyrics: " + lyrics);
  // })
  let stuff = $(".lyrics p").text();
  console.log(stuff)
});