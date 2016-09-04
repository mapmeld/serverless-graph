'use strict';

var neo4j = require('neo4j');
var db = new neo4j.GraphDatabase('http://app54430255-PFYkCV:TucLNepPzfueVUc2cnhE@app54430255pfykcv.sb10.stations.graphenedb.com:24789');

// Your first function handler
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
