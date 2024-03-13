const axios = require('axios')
const cheerio = require('cheerio')

const covid = async () => {
const res = await axios.get(`https://sinhala.newsfirst.lk/`) 
const $ = cheerio.load(res.data)
results = []
a = $('div#maincounter-wrap')
title = $(a).find('div > span').eq(0).text()
url = $(a).find('div > span').eq(1).text() 
description = $(a).find('div > span').eq(2).text() 
results.push({ titel, url, description}) 
return results
}


module.exports = { covid }
