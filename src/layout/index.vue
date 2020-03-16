<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div>
        <navbar />
      </div>
      <app-main />
    </div>
  </div>
</template>

<script>
import { AppMain, Navbar, Sidebar } from "./components"

export default {
  name: "Layout",
  components: {
    AppMain,
    Navbar,
    Sidebar
  }
}
</script>

<style lang="scss" scope>
@import "~@/styles/mixin.scss";

.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
