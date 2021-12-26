import faker from 'faker';

export const robots = new Array(10000).fill().map((value, index) => ({
  id: index,
  name: faker.name.findName(),
  username: faker.internet.userName(),
  email: faker.internet.email(),
}));
