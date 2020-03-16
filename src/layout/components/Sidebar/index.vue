<template>
  <div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu :background-color="variables.menuBg">
        <sidebar-item
          v-for="route in permission_routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
  components: {
    SidebarItem
  },
  computed: {
    ...mapGetters([
      'permission_routes'
    ]),
    variables() {
      return variables
    }
  }
}
</script>
