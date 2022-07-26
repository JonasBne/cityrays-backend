import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { config } from './config';
import pkg from '../package.json';
import { schema } from './graphql/schema';

// TODO: NEXT STEPS
// create a schema: https://www.graphql-tools.com/docs/introduction
// test the resolvers

const startServer = async () => {
  const app = express();

  app.get('/', (req, res) => {
    res.json({ name: 'cityrays-backend', version: pkg.version });
  });

  const apolloServer = new ApolloServer({
    schema,
    formatError: (error) => error,
    introspection: true,
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({
    app,
    path: '/api/graphql',
  });

  app.listen({ port: config.port }, () =>
    console.log(`Server listening on http://localhost:${config.port}${apolloServer.graphqlPath}`),
  );
};

startServer();
