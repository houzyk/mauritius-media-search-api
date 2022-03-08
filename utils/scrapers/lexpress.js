const puppeteer = require('puppeteer');
const { availableEndpoints: {
          lexpress : {
            url,
            emptySpace
          }
        }
      } = require('../../data/endpoints.json');
const searchURLBuilder = require('./utils/searchURLBuilder');

module.exports = async function lexpressScraper(query) {
  const result = []
  const searchURL = searchURLBuilder(query, url, emptySpace);

  // todo
  return result;
}
