const resolvers = (models) => ({
  Query: {
    users(parent, args, context) {
      return models.User.find();
    },

  },

  User: {

  },
  Mutation: {
    createUser(parent, args, context) {
      const user = new models.User(args);
      return user.save();
    }
  },
});

module.exports = resolvers;
