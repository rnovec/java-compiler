// <quasar app>/scripts/buildDebian.js
var pak = require('quasar-pak')
var path = require('path')

pak.debian({
  // All options, with a description, are in a table below

  // Your package.json file, location of the the script assumes to be in a script folder
  package: require('../package.json'),

  // Dist is where your electron builds are located
  dist: path.join(__dirname, '../dist/electron/'),

  // Dest is where the deb file will go, in this case "../dist/packagename_version_amd64.deb"
  dest: path.join(__dirname, '../dist')
})

