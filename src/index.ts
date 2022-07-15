import { createServer } from 'http';
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { config } from './config';
import pkg from '../package.json';

// https://www.tomray.dev/setup-and-deploy-graphql-server#build-your-database-schema-with-prisma

const startServer = async () => {
  const app = express();
  // const httpServer = createServer(app);
  app.get('/', (req, res) => {
    res.json({ name: 'hello world', version: pkg.version });
  });

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
    path: '/api/graphql',
  });

  app.listen({ port: config.port }, () =>
    console.log(`Server listening on http://localhost:${config.port}${apolloServer.graphqlPath}`),
  );
};

startServer();
