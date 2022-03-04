const express = require('express');
import sanitize from "./utils/sanitize";
import parser from "./utils/parser";

const app = express();

const response = {
  results: []
}

app.get('/:query', (req, res) => {
  if (sanitize(req.params.query)) {
    const parsedQuery = parser(req.params.query);

    try {
      // todo
      res.json(response);
    } catch (error) {
      // todo
    }

  }
});

app.listen(3000, () => console.log("API Is Running..."));
