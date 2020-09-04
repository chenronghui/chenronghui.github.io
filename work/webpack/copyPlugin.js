const fs = require('fs')
const path = require('path')

fs.copyFile(path.resolve(__dirname, '../dist'), path.resolve(__dirname, '../../'), (err) => {
  console.log(err)
  console.log('copy finish')
})

class CopyPlugin {
  constructor (options) {
    this.options = options
  }
  apply (compiler) {
    compiler.hooks.afterEmit.tap('CopyPlugin', (stats) => {
      console.log(this.options)
      fs.stat(this.options.from)
      fs.copyFile(this.options.from, this.options.to, () => {
        console.log('copy finish')
      })
    })
  }
}

module.exports = CopyPlugin
