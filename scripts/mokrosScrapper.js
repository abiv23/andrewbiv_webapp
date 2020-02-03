const rp = require('request-promise');
const url = 'https://www.otcmarkets.com/learn/service-providers';
const $ = require('cheerio');

rp(url)
  .then(function(html){
    console.log($('big > a', html).length);
    console.log($('big > a', html));
    //success!
  })
  .catch(function(err){
    //handle error
  });