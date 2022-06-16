<template>

    <!-- Main Layout Start -->
    <div class="main-layout">
        <!-- Navigation Start -->
        <TheSideBar :routes="getSideBarRoutes" @logout="logout()" class="sideBar" />
        <div class="content w-100">
            <Header class="header"/>
            <div class="route-content">
              <router-view />
            </div>
        </div>
    </div>
</template>

<script>
import TheSideBar from "@/components/TheSideBar" 
import Header from '@/components/header.vue'
import { client } from '@/api'
export default {
  components:{
    TheSideBar,
    Header
  },
  mounted() {
  },
  methods: {
    logout () {
      client.deleteCookies('auth_session')
      this.$router.push({ name: 'login'})
    }
  },
  computed: {
    getSideBarRoutes() {
      const all_routes = this.$router.options.routes;
      let routes = [];
      all_routes.forEach((route) => {
        if (route.meta !== undefined && route.meta !== null) {
          if (route.meta.sidebar && route.meta.sidebar.display == true) {
            routes.push(route)
          }
        }
      });
      return routes;
    },
  },
 
}
  



</script>
 
 <style scoped>

 .sideBar{
     position: fixed;
     width:4.375rem ;
     left: 0 !important;

 }

.content .header{
     position: fixed;
    z-index: 9999 !important;
    left: 4.375rem !important;
    width: calc(100% - 4.375rem);
 }
 .route-content{
     padding-left: 4.375rem;
     padding-top: 4.375rem;

 }

 </style>