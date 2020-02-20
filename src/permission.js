import router from './router'
import store from './store'
import {
  Message
} from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'
import {
  getToken
} from 'utils/auth'
// import getPageTitle from '@/utils/get-page-title'

NProgress.configure({
  showSpinner: false
})

const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start()
  // set to page title
  // document.title = getPageTitle(to.meta.title)

  // whether user logged in
  const token = getToken()

  if (token) {
    if (to.path === '/login') {
      // if is logged in, redirect to home page
      next({
        path: "/"
      })
      NProgress.done()
    } else {
      const hasRole = store.getters.roles && store.getters.roles.length > 0
      if (hasRole) {
        next()
      } else {
        try {
          // get user information(main: roles, must be an array)
          const {
            roles
          } = await store.dispatch('user/getInfo')

          // generate accessible routes map based on roles
          const accessRoutes = await store.dispatch('permission/generateRoutes')

          // dynamically add accessible routes
          router.addRoutes(accessRoutes)

          // hack method to ensure that addRoutes is complete
          // set the replace: true, so the navigation will not leave a history record
          next({
            ...to,
            replace: true
          })
        } catch (error) {
          // resetToken
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has error!')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      // common page which need not login
      next()
    } else {
      // have no permission, redirect to login page
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }

  next();
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
