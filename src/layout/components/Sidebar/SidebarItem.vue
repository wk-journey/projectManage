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
    return {}
  },
  methods: {
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
  render(h) {
    if (this.item.hidden === true) {
      return
    }

    // console.log('SidebarItem======== path=' + this.item.path
    //   + '\thidden=' + this.item.hidden
    //   + '\tchildren=' + (this.item.children || []))

    const showingChildren = (this.item.children || []).filter(child => child.hidden !== true)

    let onlyOneChild = null
    if (showingChildren.length === 1) {
      onlyOneChild = showingChildren[0]
    } else if (showingChildren.length === 0) {
      onlyOneChild = { ...this.item, path: '', noShowChildren: true }
    }

    // let description = "";
    // for (let i in onlyOneChild) {
    //   description += i + " = " + onlyOneChild[i] + "\n"
    // }
    // console.log('onlyOneChild--------- ' + description)
    // console.log(onlyOneChild && (!onlyOneChild.children || onlyOneChild.noShowChildren) && !this.item.alwaysShow)

    let sidebarItem
    if (onlyOneChild && (!onlyOneChild.children || onlyOneChild.noShowChildren) && !this.item.alwaysShow) {
      sidebarItem =
        <el-menu-item index={this.resolvePath(onlyOneChild.path)}>
          <item title={onlyOneChild.meta.title}></item>
        </el-menu-item>
    } else {
      sidebarItem = <el-submenu index={this.resolvePath(this.item.path)}>
        <template slot="title">
          <item title={this.item.meta.title}></item>
        </template>
        {
          showingChildren.map(child =>
            <sidebar-item
              key={child.path}
              item={child}
              base-path={child.path}>
            </sidebar-item>
          )
        }
      </el-submenu>
    }
    return <div class="menu-wrapper">{sidebarItem}</div>
  }
}
</script>
