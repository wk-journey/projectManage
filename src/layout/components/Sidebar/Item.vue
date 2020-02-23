<script>
// 构造一个包含title和icon的菜单描述项组件
export default {
  name: 'MenuItem',
  functional: true,  // 函数化组件 -> 无状态、无实例，只是函数，所以开销较小。详见：https://www.jianshu.com/p/367ba1a7729b
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  render(h, context) {
    const { title } = context.props
    const vnodes = []

    if (title) {
      vnodes.push(<span slot="title">{(title)}</span>)
    }

    return vnodes
  }
}
</script>
