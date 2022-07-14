import { createServer } from 'http';
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
const { config } = require('../config');

const startServer = async () => {
  const app = express();
  const httpServer = createServer(app);

  const typeDefs = gql`
    type Query {
      hello: String
    }
  `;

  const resolvers = {
    Query: {
      hello: () => 'Hello world!',
    },
  };

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({
    app,
    path: `/api/${config.environment}`,
  });

  httpServer.listen({ port: config.port }, () =>
    console.log(`Server listening on localhost:${config.port}${apolloServer.graphqlPath}`),
  );
};

startServer();
