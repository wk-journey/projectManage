import Layout from 'layout'

const tableRouter = {
  path: '/table',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'Table',
  meta: {
    title: 'Table',
    icon: 'table'
  },
  children: [{
      path: 'dynamic-table',
      component: () => import('views/table/dynamic-table/index'),
      name: 'DynamicTable',
      meta: {
        title: 'Dynamic Table'
      }
    },
    {
      path: 'complex-table',
      component: () => import('views/table/complex-table'),
      name: 'ComplexTable',
      meta: {
        title: 'Complex Table'
      }
    }
  ]
}

export default tableRouter
