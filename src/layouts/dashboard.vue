<template>
  <!-- Main Layout Start -->
  <div class="main-layout">
    <!-- Navigation Start -->
    <TheSideBar :routes="getSideBarRoutes" @logout="logout()" class="sideBar" > hello</TheSideBar>
    <div class="content w-100"> 
      <Header class="header" :username="getUserName" :userRole="user.role"  />
      <div class="route-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import TheSideBar from "@/components/TheSideBar";
import Header from "@/components/header.vue";
import { client, services } from "@/api";
export default {
  components: {
    TheSideBar,
    Header,
  },
  data () {
    return{
      user: {
        lastname: '',
        firstname: '',
        role: ''
      }
    }
  },
  async mounted() {
    const user_id = client.getCookies("yinwe");
    if (_.isEmpty(this.$store.state.user_infos)) {
      console.log("store vide");
      if (!_.isNil(user_id)) {
        await services.my_profile(user_id).then((res) => {
          if (res.status == 200) {
            this.user = res.data;
            this.$store.state.user_infos = res.data
          }
        });
      }
    }
  },
  methods: {
    logout() {
      client.deleteCookies("auth_session");
      this.$router.push({ name: "login" });
    },
  },
  computed: {
    getSideBarRoutes() {
      const all_routes = this.$router.options.routes;
      let routes = [];
      all_routes.forEach((route) => {
        if (route.meta !== undefined && route.meta !== null) {
          if (route.meta.sidebar && route.meta.sidebar.display == true) {
            routes.push(route);
          }
        }
      });
      return routes;
    },
    getUserName () {
      return this.user.lastname + ' ' + this.user.firstname
    }
  },
};
</script>
 
 <style scoped>
.sideBar {
  position: fixed;
  width: 4.375rem;
  left: 0 !important;
}

.content .header {
  position: fixed;
  z-index: 9999 !important;
  left: 4.375rem !important;
  width: calc(100% - 4.375rem);
}
.route-content {
  padding-left: 4.375rem;
  padding-top: 4.375rem;
}
</style>