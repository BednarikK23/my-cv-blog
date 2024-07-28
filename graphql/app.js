const Koa = require('koa');
const {ApolloServer} = require('apollo-server-koa');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const {resolvers, typeDefs} = require('./schemas');
const PORT = 4000;


async function startServer() {

    const server = new ApolloServer({
        schema: makeExecutableSchema({
            typeDefs,
            resolvers
        })
    });

    await server.start();

    const app = new Koa();
    server.applyMiddleware({app});

    app.listen({port: PORT}, () => {
        console.log(`Server ready at http://localhost:${PORT + server.graphqlPath}`);
    })
}

startServer().catch(error => {
  console.error('backend start', error);
})
