import type { Resolvers } from '../../../resolvers-types';

const MOCK_CAFES = [
  {
    id: '1',
    name: 'Cafe 1',
    street: 'Groenplaats',
    houseNumber: '1',
    postalCode: '2000',
    city: 'Antwerp',
    latitude: '12345',
    longitude: '12345',
  },
  {
    id: '2',
    name: 'Cafe 2',
    street: 'Groenplaats',
    houseNumber: '1',
    postalCode: '2000',
    city: 'Antwerp',
    latitude: '12345',
    longitude: '12345',
  },
];

export const barResolvers: Resolvers = {
  Query: {
    bars() {
      return MOCK_CAFES;
    },
    bar(parent, { id }) {
      return MOCK_CAFES.find((bar) => bar.id === id) || null;
    },
  },
};
