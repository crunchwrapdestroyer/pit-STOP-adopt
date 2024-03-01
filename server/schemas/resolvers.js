const { User } = require('../models')
const { AuthenticationError, signToken } = require('../utils/auth')

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return await User.findOne({ _id: context.user._id })
      }
      throw AuthenticationError
    }
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email })

      if (!user) {
        throw AuthenticationError
      }

      const correctPw = await user.isCorrectPassword(password)

      if (!correctPw) {
        throw AuthenticationError
      }

      const token = signToken(user)
      return { token, user }
    },
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password })
      const token = signToken(user)

      return { token, user }
    },
    adoptDog: async (parent, { dogInput }, context) => {

      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { adopted: dogInput } },
          { new: true, runValidators: true }
        );
        return dogInput
      }
      throw AuthenticationError
    },
    // removeBook: async (parent, { bookId }, context) => {

    //     if (context.user) {
    //         const updatedUser = await User.findOneAndUpdate(
    //             { _id: context.user._id },
    //             { $pull: { savedBooks: { bookId: bookId } } },
    //             { new: true}
    //         );
    //         return updatedUser
    //     }
    //     throw AuthenticationError
    // },
  }
}

module.exports = resolvers
