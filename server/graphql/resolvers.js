const resolvers = (models) => ({
  Query: {
    authors() {
      return models.Author.find();
    },
    author(root, args) {
      return models.Author.findById(args.id);
    },
    post(root, args) {
      return models.Post.findById(args.id);
    },
    posts(root, args) {
      return args.categoryId
        ? models.Post.find({category: args.categoryId})
        : models.Post.find();
    },
  },
  Post: {
    author(root) {
      return models.Author.findById(root.author);
    },
    category(root) {
      return models.Category.findById(root.category);
    }
  },
  Author: {
    posts(root) {
      return models.Post.find({ author: root._id }).sort({startDate: 1});
    }
  },
  Mutation: {
    createAuthor(parent, args) {
      const author = new models.Author(args);
      return author.save();
    },
    createPost(parent, args) {
      const post = new models.Post(args);
      return post.save();
    },
    postsByCategoryId(root, args) {
      return models.Post.find({category: args.categoryId});
    }
  },
});

module.exports = resolvers;
