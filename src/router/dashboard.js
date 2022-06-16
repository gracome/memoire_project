import { page } from '@/helpers/routing'
export default[
    {
        path: '/',
        name: 'dashboard',
        component: page('dashboard/index'),
        meta: {
          layout: "dashboard",
          requireAuth: true,
          sidebar: {
            display: true,
            icon: 'mdi-view-dashboard',
            title: 'Dashboard'
          }
        }
      },
      {
        path: '/profile',
        name: 'profile',
        component: page('dashboard/Profile'),
        meta:{
         layout: "dashboard",
         requireAuth: true,
         sidebar: {
          display: false,
          icon: 'mdi-account-circle-outline',
          title: 'Profile'
        }
        }
      },
      {
        path: '/users',
        name: 'Liste_users',
        component: page('dashboard/Users'),
        meta:{
         layout: "dashboard",
         requireAuth: true,
         sidebar: {
          display: true,
          icon: 'mdi-account-group-outline',
          title: 'Utilisateurs'
        }
        }
      },
      {
        path: '/add',
        name: 'add',
        component: page('dashboard/Add'),
        meta:{
         layout: "dashboard",
         requireAuth: true,
         sidebar: {
          display: true,
          icon: 'mdi-account-plus',
          title: 'Ajouter un utilisateur'
        }
        }
      },

      {
        path: '/chats',
        name: 'chats',
        component: page('dashboard/Chats'),
        meta:{
         layout: "dashboard",
         requireAuth: true,
         sidebar: {
          display: true,
          icon: 'mdi-chat-processing',
          title: 'Chats'
        }
        }
      }
]