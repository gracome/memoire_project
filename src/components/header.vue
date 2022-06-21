<template>
  <div>
    <div id="header" class="py-2 px-3 d-flex">
      <a
        @click="redirectAction()"
        class="w-100 d-flex justify-content-end"
      >
        <div class="d-flex align-items-center">
          <div class="avatar avatar-online mr-2">
            <img src="@/styles/theme/img/7.png" alt="" />
          </div>
          <div>
            <span class="user-name">{{ username }}</span>
            <div class="user-role">{{userRole}}</div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
import profile from '@/views/dashboard/Profile'
export default {
  mounted (){
    console.log('LMMMM', this.$route)
  },
  props: {
    username: String,
    userRole: [String]
  },
  methods: {
      redirectAction () {
        if (this.$route.name.toLowerCase() !== 'profile') this.$router.push({name: 'profile'})
      }
  }
}
</script>
<style lang="scss" scoped>
#header {
  background: #ffffff !important;
  box-shadow: 0 2px 4px 0 rgb(42 76 133 / 15%);
  font-size: 14px !important;
  a {
    cursor: pointer !important;
    .user-name {
      font-weight: 600 !important;
    }
  }
}
</style>