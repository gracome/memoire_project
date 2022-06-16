import { page } from '@/helpers/routing'
export default[
    {
        path: '/login',
        name: 'login',
        component: page('auth/login'),
        meta: {
          layout: "auth"
        }
      },
      {
        path: '/reset-password',
        name: 'reset_password',
        component: page('auth/reset_password'),
        meta:{
         layout: "auth"
        }
      }
]