<template>
  <div>
    <el-menu-item index="1">只含根菜单</el-menu-item>

    <el-submenu index="2">
      <template slot="title">
        <item title="item函数化组件测试" />
      </template>
      <el-menu-item index="2-1">一级子菜单</el-menu-item>
    </el-submenu>
  </div>
</template>

<script>
import Item from './Item'

export default {
  name: 'SidebarItem',
  components: {
    Item
  },
  props: {
    // route object
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
