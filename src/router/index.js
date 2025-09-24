import { createRouter, createWebHistory } from 'vue-router'
import NProgress from '@/utils/progress'
import { useTitle } from '@vueuse/core'
import Layout from '@/layout/Default.vue'
import { isPc, isMobile } from '@/utils/ua'

const title = useTitle()

/**
 * type: 'pc'-PC端 'mobile'-移动端 'both'-两端兼容
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: isPc() ? '/p' : '/m',
    },
    {
      path: '/p',
      component: Layout,
      meta: {
        type: 'pc',
      },
      children: [
        {
          path: '',
          name: 'PCHome',
          component: () => import('@/views/pc/home/index.vue'),
          meta: {
            title: '首页',
          },
        },
        {
          path: 'about',
          name: 'PCAbout',
          component: () => import('@/views/pc/about/index.vue'),
          meta: {
            title: '关于',
          },
        },
      ],
    },
    {
      path: '/m',
      component: Layout,
      meta: {
        type: 'mobile',
      },
      children: [
        {
          path: '',
          name: 'MobileHome',
          component: () => import('@/views/mobile/home/index.vue'),
          meta: {
            title: '首页',
          },
        },
        {
          path: 'about',
          name: 'MobileAbout',
          component: () => import('@/views/mobile/about/index.vue'),
          meta: {
            title: '关于',
          },
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/error/index.vue'),
      meta: {
        title: '页面不存在',
        type: 'both',
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  title.value = to.meta.title
  let path = to.fullPath
  if (isMobile() && to.meta.type === 'pc') {
    path = path.replace('/p', '/m')
    next(path)
    return
  }
  if (isPc() && to.meta.type === 'mobile') {
    path = path.replace('/m', '/p')
    next(path)
    return
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
