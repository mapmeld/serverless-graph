# serverless-graph-queries

[![Greenkeeper badge](https://badges.greenkeeper.io/mapmeld/serverless-graph.svg)](https://greenkeeper.io/)

Using <a href="http://serverless.com">Serverless platform</a>
and AWS Lambda to make queries on a Neo4j database

Tutorial

## Creating the graph data

Create a Heroku app with a Graphene add-on (may need to use paid plan, depending on size of your dataset)

See <a href="https://github.com/mapmeld/graph">mapmeld/graph</a> repo, including
scrape-heroku.py

```
heroku run:detached scrape-heroku.py
```

Copy the Neo4j graph credentials URL for use in the serverless script

## Explaining Serverless

https://medium.com/p/deploying-your-next-api-with-serverless-92ebea11d799

## License

Open source, MIT license
