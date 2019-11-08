# Vuepress Plugin to setup Firebase

## Introduction

This plugin installs [@paulbarre/vue-firebase](https://github.com/paulbarre/vue-firebase) package into your Vuepress application.

Check out the documentation for further information on this plugin options, they are the same.

## Installation

Install the package into your Vue application:

```
npm i @paulbarre/vuepress-plugin-firebase @paulbarre/vue-firebase firebase
```

Next step needs to configure the plugin into your application. Edit your `.vuepress\config.js` file:

```js
module.exports = {
    plugins: [
        ...
        [
            '@paulbarre/firebase',
            {
                config: {
                    ...
                },
                firestore: {
                    ...
                }
            }
        ]
    ]
}
```

> Check out [Vuepress' official documentation](https://vuepress.vuejs.org/plugin/using-a-plugin.html) to see how to setup a plugin.