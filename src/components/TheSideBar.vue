<template>
  <div id="sidebar">
    <div class="navigation navbar navbar-light bg-dark">
      <a @click="$router.push({ name: 'dashboard' })" class="logo">
        <svg viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 3C6.5 3 2 6.58 2 11C2.05 13.15 3.06 15.17 4.75 16.5C4.75 17.1 4.33 18.67 2 21C4.37 20.89 6.64 20 8.47 18.5C9.61 18.83 10.81 19 12 19C17.5 19 22 15.42 22 11S17.5 3 12 3M12 17C7.58 17 4 14.31 4 11S7.58 5 12 5 20 7.69 20 11 16.42 17 12 17M17 12V10H15V12H17M13 12V10H11V12H13M9 12V10H7V12H9Z"
          />
        </svg>
      </a>
      <ul
        class="
          nav nav-minimal
          flex-row flex-grow-1
          justify-content-between
          flex-xl-column
          justify-content-xl-center
        "
        id="mainNavTab"
        role="tablist"
      >
        <li class="nav-item" v-for="(route, index) in routes" :key="index">
          <a
            class="nav-link p-0 py-xl-3"
            :class="route.name === $route.name ? 'active' : ''"
            @click="$router.push({ name: route.name })"
            :title="route.meta.sidebar.title"
          >
            <i class="mdi" :class="route.meta.sidebar.icon"></i>
          </a>
        </li>
      </ul>
      <ul
        class="
          nav nav-minimal
          flex-row flex-grow-1
          justify-content-between
          flex-xl-column
          justify-content-xl-center
        "
        id="mainNavTab"
        role="tablist"
      >
        <li class="nav-item">
          <a class="nav-link p-0 py-xl-3" :title="'Déconnexion'" @click="$emit('logout')">
            <i class="mdi mdi-logout"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    routes: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style scoped lang="scss">
#sidebar {
  .nav-link {
  color: #ffffff !important;
  cursor: pointer !important;
  &.active {
    color: #aea9fe !important;
  }
  i {
    font-size: 24px !important;
  }
}
.logo {
  svg {
    height: 40px;
    width: 40px;
    color: #ffffff !important;
  }
}
}
</style>

 