const puppeteer = require('puppeteer');
const { availableEndpoints: {
          IONNews : {
            url,
            emptySpace
          }
        }
      } = require('../../data/endpoints.json');
const searchURLBuilder = require('./utils/searchURLBuilder');

module.exports = async function IONNewsScraper(query) {
  const result = []
  const searchURL = searchURLBuilder(query, url, emptySpace);

  // todo
  return result;
}
