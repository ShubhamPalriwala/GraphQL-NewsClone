const { GraphQLServer } = require('graphql-yoga');

const typeDefs=`
type Query{
    info: String!
}
`

const resolvers={
    Query:{
        info:()=>`This is an API of Hackernews Clone`
    }
}

const server= new GraphQLServer({
    typeDefs,
    resolvers,
})
server.start(()=>console.log(`Server is up and running on Port 4000`))
