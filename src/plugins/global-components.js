import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
const requireComponent = require.context('@/components/base', true, /[\w-]+\.vue$/)
// const requireLayout = require.context('@/layouts', true, /[\w-]+\.vue$/)
const pascalCase = (string) => upperFirst(camelCase(string))
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  // Get the PascalCase version of the component name
  const componentName = pascalCase(fileName.replace(/\.\w+$/, '').split('/').pop())
  // Globally register the component
  Vue.component(componentName, componentConfig.default || componentConfig)
})