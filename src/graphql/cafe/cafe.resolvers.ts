export const cafeResolvers = {
  Query: {
    findAllCafes: () => {
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

      return {
        cafes: MOCK_CAFES,
      };
    },
  },
};
