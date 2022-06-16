import axios from 'axios'
import store from '@/store'
import Cookies from 'js-cookie'
import router from '@/router'
const client = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 80000
})
client.interceptors.request.use((request) => {
  if (getCookies('auth_session')) {
    request.headers['Authorization'] = `Bearer ${getCookies('auth_session')}`;
    request.headers.common['Authorization'] = `Bearer ${getCookies('auth_session')}`;
  }
  return request
});
client.interceptors.response.use((response) => {
  if (response.status === 200 && (response.data.error || response.data.internal_error)) {
    if (response.data.error) {
      store.state.current_error = response.data.error
      if (response.data.code == 401) {
        deleteCookies('auth_session')
        router.push({ name: 'login' })
      }
    } else if (response.data.internal_error) {
      store.state.current_error = response.data.internal_error
    }
  }
  return response
}, function (error) {
  console.log('', error)
  store.state.current_error = 'Erreur. Veuillez réessayer.'
});
export function setCookies(cookie_name, cookies, life_time_secondes,) {
  var expire_date = new Date(new Date().getTime() + life_time_secondes * 1000)
  Cookies.set(`${cookie_name}`, cookies, {
    expires: expire_date
  })
  if (cookie_name.toLowerCase() == 'auth_session') {
    console.log('...????? HEADER')
    client.defaults.headers.common['Bearer'] = `${cookies}`
    console.log('.....', client.defaults.headers)
  }
}
export function getCookies(cookies_name) {
  return Cookies.get(`${cookies_name}`)
}
export function deleteCookies(cookies_name) {
  return Cookies.remove(`${cookies_name}`)
}
export function deleteAllTheCookies() {
}
export default client
export const clientInstall = {
  install(Vue) {
    Vue.prototype.$client = client
  }
}




