import { createRouter, createWebHistory } from 'vue-router'
// import { useAuthStore } from '@/stores'

// import layouts
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PageNotFound from '@/views/PageNotFoundView.vue'

// import views
import HomeView from '@/views/HomeView.vue'
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
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: PageNotFound,
      meta: {
        title: 'Page Lost in Space'
      }
    }
  ]
})

export default router
