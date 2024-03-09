import { createRouter, createWebHistory } from 'vue-router'
// import { useAuthStore } from '@/stores'

// import layouts
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PageNotFound from '@/views/PageNotFoundView.vue'

// import views
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/Auth/LoginView.vue'
import ProfileView from '@/views/User/ProfileView.vue'
import ContactView from '@/views/ContactView.vue'
import AboutView from '@/views/AboutView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView,
          meta: {
            title: 'Home Page'
          }
        },
        {
          path: '/contact',
          name: 'contact',
          component: ContactView,
          meta: {
            title: 'Contact me'
          }
        },
        {
          path: '/about-me',
          name: 'about-me',
          component: AboutView,
          meta: {
            title: 'About me'
          }
        },
        {
          path: '/user/profile',
          name: 'profile',
          component: ProfileView,
          meta: {
            title: 'Profile Page'
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        title: 'Login Page'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: PageNotFound,
      meta: {
        title: 'Page Lost in Space'
      }
    }
  ]
})

// router.beforeEach(async (to, from, next) => {
//   const publicPages = ['login'] // Use the name instead of path
//   const authStore = useAuthStore()

//   const authRequired = !publicPages.includes(to.name as string)
//   if (authRequired && !authStore.IS_AUTHENTICATED) {
//     authStore.RETURN_URL = to.path
//     return next({ name: 'login' }) // Use the name property in next()
//   } else {
//     document.title = to.meta.title as string
//     next()
//   }
// })
export default router
