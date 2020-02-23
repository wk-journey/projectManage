<template>
  <div class="layout-m">
    <sidebar />
    <!-- <h2>Layout</h2> -->
    <!-- <router-view /> -->
  </div>
</template>

<script>
import { Sidebar } from './components'

export default {
  name: 'Layout',
  components: {
    Sidebar
  }
}
  </script>

<style scope>
</style>
