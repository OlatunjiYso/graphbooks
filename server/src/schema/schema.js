import grapgql from 'graphql';
import { resolve } from 'path';
import _ from 'lodash';

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = grapgql;

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLString },
    name: {type: GraphQLString},
    genre: {type: GraphQLString}
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: {id: {type: GraphQLString }},
      resolve(parent, args) {
        // code to fetch data
        return _.find(books, { id: args.id });
      }
    }
  }
});


module.exports = new GraphQLSchema({
  query: RootQuery
})