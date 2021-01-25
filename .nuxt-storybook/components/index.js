export { default as Logo } from '../../components/Logo.vue'
export { default as Test } from '../../components/Test.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
export const LazyTest = import('../../components/Test.vue' /* webpackChunkName: "components/test" */).then(c => c.default || c)
