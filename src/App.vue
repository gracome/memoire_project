<template>
  <component :is="layout">
    <transition :name="'zoom-fade'">
      <router-view />
    </transition>
  </component>
</template>
<script>
import AuthLayout from "@/layouts/auth.vue";
import DashboardLayout from "@/layouts/dashboard.vue";
export default {
  components: {
    AuthLayout,
    DashboardLayout
  },
  data() {
    return {};
  },
  async created() {
  },
  methods: {},
  computed: {
    layout() {
      if (!this.$route.name && this.$route.path === "/") {
        return "div";
      }
      let layoutName = "";
      const routeWithLayout = this.$route.matched.find(
        (route) => !!route.meta.layout
      );
      if (routeWithLayout && routeWithLayout.meta.layout) {
        layoutName = routeWithLayout.meta.layout;
        return `${layoutName}-layout`;
      } else {
        return "";
      }
    },
  },
  watch: {},
};
</script>
<style lang="scss" scoped>
</style>















