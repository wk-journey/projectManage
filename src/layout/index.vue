<template>
  <div class="layout-m">
    <sidebar />
    <div>
      <div>
        <navbar />
      </div>
      <div>
        <app-main />
      </div>
    </div>
    <!-- <h2>Layout</h2> -->
    <!-- <router-view /> -->
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

<style scope></style>
