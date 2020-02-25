<template>
  <div v-if="!item.hidden">
    <template
      v-if="hasOneShowingChild(item.chilren, item)
      && (!onlyOneChild.children || onlyOneChild.noShowChildren)
      && !item.alwaysShow"
    >
      <el-menu-item :index="resolvePath(onlyOneChild.path)">
        <item :title="onlyOneChild.meta.title"></item>
      </el-menu-item>
    </template>

    <el-submenu v-else :index="resolvePath(item.path)">
      <template slot="title">
        <item v-if="item.meta" :title="item.meta.title" />
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :base-path="child.path"
      />
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'
import { isExternal } from 'utils/validate'
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
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    // this.onlyOneChild = null
    return {}
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item
          return true
        }
      })

      // When there is only one child router, the child router is display by default
      if (showingChildren.length == 1) {
        return true
      }

      // Show parent if there is no child router to display
      if (showingChildren.length == 0) {
        onlyOneChild = { ...parent, path: '', noShowChildren: true }
        return true
      }

      return false
    },
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    }
  },
  // render(h) {
  //   if (this.item.hidden === true) {
  //     return
  //   }

  //   const showingChildren = (this.item.children || []).filter(item => { item.hidden !== true })

  //   let onlyOneChild = null
  //   if (showingChildren.length === 1) {
  //     onlyOneChild = showingChildren[0]
  //   } else if (showingChildren.length === 0) {
  //     onlyOneChild = { ...thie.item, path: '', noShowChildren: true }
  //   }

  //   let sidebarItem
  //   if (onlyOneChild && (!onlyOneChild.children || onlyOneChild.noShowChildren) && !this.item.alwaysShow) {
  //     sidebarItem =
  //       <el-menu-item index={this.resolvePath(onlyOneChild.path)}>
  //         <item title={onlyOneChild.meta.title}></item>
  //       </el-menu-item>
  //   } else {
  //     <el-submenu index={this.resolvePath(this.item.path)}>
  //       <template slot="title">
  //         <item title={this.item.meta.title}></item>
  //       </template>
  //       {
  //         showingChildren.map(child =>
  //           <sidebar-item
  //             key={child.path}
  //             item={child}
  //             base-path={child.path}>
  //           </sidebar-item>
  //         )
  //       }
  //     </el-submenu>
  //   }
  //   return <div class="menu-wrapper">{sidebarItem}</div>
  // }
}
</script>
