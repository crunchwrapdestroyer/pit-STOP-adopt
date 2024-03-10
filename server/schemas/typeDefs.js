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
        _id: ID
        description: String
        name: String!
        email: String!
        amount: Float!
        quantity: Int
        category: User
    }



    type Query {
        me: User
        createCheckoutSession: String # '( url: "STRIPEURL.com")'
        # categories: [User]
        # order(_id: ID!): User
        # user: User
        # checkout(products: [DonateInput]): Checkout
    }

       type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        adoptDog(dogInput: DogInput): User
        saveDog(newDog: DogInput!): User
        removeDog(dogId: ID!): User
        donate(name: String!, email: String, price: Float!): Auth
    }
`

module.exports = typeDefs
