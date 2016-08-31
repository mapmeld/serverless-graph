# serverless-graph-queries

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

## License

Open source, MIT license
