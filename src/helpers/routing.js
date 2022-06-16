export const page = path => () => import(`@/views/${path}`)
export const component = path => () => import(`@/components/${path}`)