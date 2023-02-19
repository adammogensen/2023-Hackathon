const { ApolloServer, gql } = require("apollo-server");

//Scalar: String, Int, Bool... Array: [Scalar], Object
const typeDefs = gql`
    type Query{
        countries: [Country!]!
        }

    type Country{
        name: String!
        population: Int!
        education: Int!
        corruption: Int!
    }
    type Development{
        lifeExpect: Int
        electricity: Int
        waterAccess: Int
        performance: Int
        internet: Int
    }
`
const resolvers = {

    Query:{
    countries: () => {
        return [{
        name: "Canada",
        population: 200000,
        education: 5,
        corruption: 8,
        },
        {
        name: "usa",
        population: 1000,
        education: 9,
        corruption: 100
        },
        
    
        ]},
    }
}


const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url}) =>{
    console.log('Server is ready at ' + url)
})




