const {
  makeExecutableSchema
} = require('graphql-tools');
const models = require('../models');
const createResolvers = require('./resolvers');

const schema = `
  type Author {
    id: ID!
    email: String!
    name: String!
    posts: [Post]
  }
  type Post {
    id: ID!
    title: String!
    body: String!
    author: Author,
    category: Category
  }
  type Category {
    id: ID!
    name: String!
  }
  type Query {
    authors: [Author]
    author(id: ID!): Author
    post(id: ID!): Post
    category(id: ID!): Category
    categories: [Category]
    postsByCategoryId(categoryId: ID!): [Post]
  }
  type Mutation {
    createAuthor(email: String!, name: String): Author
    createPost(title: String!, body: String!, author: ID!, category: ID!): Post
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
