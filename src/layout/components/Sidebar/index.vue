<template>
  <div>
    <el-menu>
      <sidebar-item />
      <!-- <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" /> -->
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'

export default {
  components: {
    SidebarItem
  },
  computed: {
    ...mapGetters([
      'permission_routes'
    ])
  }
}
</script>
