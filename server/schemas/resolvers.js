const { User } = require('../models')
const { AuthenticationError, signToken } = require('../utils/auth')
const stripe = require('stripe')('sk_test_51OrCNcAbCSGhtMT22UeFJovoyXwGceiab6o95R0yJQ6AJHCBb2Bdt96kc3HAIxKJHGbM5TyBEeVtGlJMaUz94NSy00fZiiX2ZR');
const url = "http://localhost:3000"


const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return await User.findOne({ _id: context.user._id })
      }
      throw AuthenticationError
    },

    //code for stipe to donate
    createCheckoutSession: async () => {
      // const url = new URL(context.headers.referer).origin;
      // await Donate.create({ amount: args.amount })
      

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{
          price: 'price_1OrCZeAbCSGhtMT2v36rIHt4',
          quantity: 1,
        }],

        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return JSON.stringify({
        url: session.url
      });
    },

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
    saveDog: async (parent, { dogInput }, context) => {

      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedDogs: dogInput } },
          { new: true, runValidators: true }
        );
        return dogInput
      }
      throw AuthenticationError
    },
    removeDog: async (parent, { id }, context) => {

      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { adopted: { _id: id } } },
          { new: true }
        );
        return updatedUser
      }
      throw AuthenticationError
    },
  }
}



module.exports = resolvers
