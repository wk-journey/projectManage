<template>
  <div>
    <!-- <div>Sidebar</div> -->
    <!-- <div>{{permission_routes}}</div> -->
    <el-menu>
      <sidebar-item
        v-for="route in permission_routes"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
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
