const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
const withFonts = require('next-fonts')
const withOffline = require('next-offline')

module.exports = withOffline(withSass(withImages(withFonts())))