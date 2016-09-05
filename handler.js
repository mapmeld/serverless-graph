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

module.exports.artistid = (event, context, cb) => {
  db.cypher({
    query: 'MATCH (a:Artist { moma_id: {MOMA_ID} }) RETURN a',
    params: {
      MOMA_ID: event.id
    }
  }, function(err, responses) {
    cb(null, {
      artist: (responses[0] || {}).a,
      event
    });
  });
};

// You can add more handlers here, and reference them in serverless.yml
