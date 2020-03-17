<template>
  <div class="navbar">
    <hamburger
      id="hamburger-container"
      :is-active="testTrue"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />
  </div>
</template>

<script>
import Hamburger from 'components/Hamburger'

export default {
  components: {
    Hamburger
  },
  computed: {
    testTrue() {
      return true
    }
  },
  methods: {
    toggleSideBar() {

    }
  }
}
</script>

<style lang="scss" scope>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    // cursor: pointer;
    // transition: background .3s;
    // -webkit-tap-highlight-color: transparent;
  }
}
</style>
