const typeDefs = `#graphql
    type User {
        _id: ID!
        username: String!
        email: String!
        adopted: [Dog]
        saveDog: [Dog]
    }

    type Dog {
      _id: ID!
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

    type Donate {
        _id: ID
        description: String
        name: String!
        email: String!
        amount: Float!
        quantity: Int
        category: User
    }

#     type Checkout {
#     session: ID
#   }

# #   input DonateInput {
# #     _id: ID
# #     purchaseQuantity: Int
# #     name: String
# #     price: Float
# #     quantity: Int
#   }

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
        saveDog(dogInput: DogInput): User
        removeDog(id: ID!): User
        # donate(name: String!, email: String!, amount: Float!,id: ID, quantity: Int!): User
    }
`

module.exports = typeDefs
