// const { gql } = require('apollo-server-express')

const typeDefs = `#graphql
    type User {
        _id: ID!
        username: String!
        email: String!
        adopted: [Dog]
    }
    type Dog{
      name: String!
      description: String!
      image: String!
      type: String!
      weight: String
      height: String
      family: String
    }

    input DogInput{
      name: String!
      description: String!
      image: String!
      type: String!
      weight: String
      height: String
      family: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        adoptDog(dogInput: DogInput): Dog
    }
`

module.exports = typeDefs
