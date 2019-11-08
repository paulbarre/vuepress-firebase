import VueFirebasePlugin from '@paulbarre/vue-firebase'
import options from '@dynamic/vue-firebase-options'

export default ({
    Vue,
}) => {
    Vue.use(VueFirebasePlugin, options)
}