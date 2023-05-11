const data = require("./data.json");

exports.load = (from, to) => data.slice(from, to);
