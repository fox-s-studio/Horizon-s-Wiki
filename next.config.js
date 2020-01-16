const withOffline = require('next-offline')
const withSass = require('@zeit/next-sass')

const nextConfig = withSass({})

module.exports = withOffline(nextConfig)