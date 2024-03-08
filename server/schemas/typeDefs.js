const typeDefs = `#graphql
    type User {
        _id: ID!
        username: String!
        email: String!
        adopted: [Dog]
        savedDogs: [Dog]!
    }

    type Dog {
      dogId: ID
      name: String!
      age: String!
      image: String!
      location: String!
      link: String!
    }

    input DogInput {
      dogId: String
      name: String!
      age: String!
      image: String!
      location: String!
      link: String!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Donate {
        name: String!
        email: String!
        price: Float!
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        adoptDog(dogInput: DogInput): User
        saveDog(newDog: DogInput!): User
        removeDog(dogID: ID!): User
        donate(name: String!, email: String, price: Float!): Auth
    }
`

module.exports = typeDefs
