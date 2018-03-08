const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const { graphiqlExpress, graphqlExpress } = require('apollo-server-express');
const graphqlSchema = require('./graphql/schema');
// enable cors
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost:27017/graphql-ll');

const port = process.env.PORT || 8080;

const router = express.Router();


app.use(function(err, req, res, next){
  console.error(err.stack);
  return res.status(err.status).json({ message: err.message });
});

app.use('/api', router);
app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress((req, res) => ({
    context: req.context,
    schema: graphqlSchema,
    rootValue: req,
  }))
);

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

app.listen(port);
console.log('Magic happens on port ' + port);
