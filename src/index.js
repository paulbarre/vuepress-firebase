const { resolve } = require('path')

module.exports = (options) => ({
    name: 'vuepress-plugin-firebase',

    async clientDynamicModules () {
        return {
            name: 'vue-firebase-options.js',
            content: `export default ${JSON.stringify(options)}`
        }
    },

    enhanceAppFiles: resolve(__dirname, 'enhanceApp.js')
})