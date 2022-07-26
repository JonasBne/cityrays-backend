import { gql } from 'apollo-server-express';

export const barTypeDefs = gql`
  type Bar {
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
    getAllBars: [Bar!]!
    getSingleBar(id: ID!): Bar
  }
`;
