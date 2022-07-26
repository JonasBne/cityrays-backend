const MOCK_CAFES = [
  {
    id: '1',
    name: 'Cafe 1',
  },
  {
    id: '2',
    name: 'Cafe 2',
  },
];

export const barResolvers = {
  Query: {
    getAllBars: () => MOCK_CAFES,
  },
};
