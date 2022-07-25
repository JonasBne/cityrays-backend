import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { config } from './config';
import pkg from '../package.json';

const startServer = async () => {
  const app = express();

  app.get('/', (req, res) => {
    res.json({ name: 'cityrays-backend', version: pkg.version });
  });

  const typeDefs = gql`
    type Query {
      hello: String
    }
  `;

  const resolvers = {
    Query: {
      hello: () => 'Hello world 9999!',
    },
  };

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
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
