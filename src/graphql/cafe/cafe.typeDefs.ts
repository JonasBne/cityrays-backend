import { gql } from 'apollo-server-express';

export const cafeTypeDefs = gql`
  type Cafe {
    id: ID!
    name: String!
    street: String!
    houseNumber: String!
    city: String!
    postalCode: String!
    latitude: String!
    longitude: String!
  }

  type Query {
    findAllCafes: [Cafe!]!
  }
`;
