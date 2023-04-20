const Response = require("../models/Response");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = require("graphql");

//Client Type
const ResponseType = new GraphQLObjectType({
  name: "Response",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    yesno: { type: GraphQLString },
    day: { type: GraphQLString },
    location: { type: GraphQLString },
    venue: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    responses: {
      type: new GraphQLList(ResponseType),
      resolve(parent, args) {
        return Response.find();
      },
    },
  },
});

//Mutations
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addResponse: {
      type: ResponseType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        yesno: { type: GraphQLNonNull(GraphQLString) },
        day: { type: GraphQLNonNull(GraphQLString) },
        location: { type: GraphQLNonNull(GraphQLString) },
        venue: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let response = new Response({
          name: args.name,
          yesno: args.yesno,
          day: args.day,
          location: args.location,
          venue: args.venue,
        });
        return response.save();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
