import { barTypeDefs } from './bar/bar.typeDefs';
import { barResolvers } from './bar/bar.resolvers';
import { makeExecutableSchema } from '@graphql-tools/schema';

export const schema = makeExecutableSchema({
  typeDefs: [barTypeDefs],
  resolvers: [barResolvers],
});
