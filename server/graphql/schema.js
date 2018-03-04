const { makeExecutableSchema } = require('graphql-tools');
const models = require('../models');
const createResolvers = require('./resolvers');

const schema = `
  scalar Date
  type User {
    id: ID!
    email: String!
  }
  type Query {
    users: [User]
  }
  type Mutation {
    createUser(email: String!): User
  }
  schema {
    query: Query
    mutation: Mutation
  }
`;


const executableSchema = makeExecutableSchema({
  typeDefs: [schema],
  resolvers: createResolvers(models),
});

module.exports = executableSchema;
