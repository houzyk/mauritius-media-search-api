module.exports = function sanitize (query) {
  return /^[A-Za-z0-9-]*$/.test(query);
}
