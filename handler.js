'use strict';

var neo4j = require('neo4j');
var db = new neo4j.GraphDatabase(process.env.GRAPHENEDB_URL);

module.exports.hello = (event, context, cb) => {
  db.cypher({
    query: 'MATCH (a:Artist) RETURN COUNT(a) AS count'
  }, function(err, responses) {
    cb(null, {
      message: 'Currently stores ' + responses[0].count + ' artists', event
    });
  });
};

// You can add more handlers here, and reference them in serverless.yml
