module.exports = {
    serverRuntimeConfig: {
      // Will only be available on the server side
      mySecret: 'secret',
      secondSecret: process.env.SECOND_SECRET, // Pass through env variables
    },
    publicRuntimeConfig: {
      // Will be available on both server and client
      staticFolder: '/static',
      API_URL : 'http://localhost:1337'
    },
  }