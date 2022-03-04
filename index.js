const express = require('express');

// utils
const sanitize = require('./utils/sanitize');
const parser = require('./utils/parser');

// scrapers
const defiMediaScraper = require('./utils/scrapers/defiMedia');
const lexpressScraper = require('./utils/scrapers/lexpress');
const starScraper = require('./utils/scrapers/star');
const IONNewsScraper = require('./utils/scrapers/IONNews');

const app = express();

const response = {
  numberOfArticles: 0,
  results: []
}

app.get('/:query', (req, res) => {
  if (sanitize(req.params.query)) {
    const parsedQuery = parser(req.params.query);
    const articleSets = [defiMediaScraper(parsedQuery),
                        lexpressScraper(parsedQuery),
                        starScraper(parsedQuery),
                        IONNewsScraper(parsedQuery)]

    articleSets.forEach((articleSet) => {
      articleSet.forEach((article) => {
        response.results.push(article);
        response.numberOfArticles += 1;
      });
    });

    res.json(response);
  } else {
    res.status(500).send("Invalid Endpoint Parameters");
  }
});

app.listen(3000, () => console.log("API Is Running..."));
