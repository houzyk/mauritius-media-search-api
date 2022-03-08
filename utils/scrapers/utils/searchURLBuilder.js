module.exports = function urlBuilder (query, url, emptySpace) {
  if (query.length === 1) {
    url += query[0];
  } else {
    query.forEach((term, index) => {
      url += term;
      if (index !== query.length - 1) url += emptySpace;
    });
  }
  return url;
}
