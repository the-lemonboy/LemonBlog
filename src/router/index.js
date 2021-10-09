import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
{
  path:'/',
  name: 'home',
  component: () => import('../views/home')
},
{
  path: '/editorArticle',
  name: 'editorArticle',
  component: ()=> import('../views/writerArticle'),
  beforeEnter: (to, from, next) => {
    const tokenStr = window.sessionStorage.getItem('token')
    if(!tokenStr) return next('/login')
    else return next()
  }
 
},
{
  path: '/login',
  name: 'login',
  component: ()=> import('../views/login')
},
{
  path: '/showArticle/:id',
  name: 'showArticle',
  component: ()=> import('../views/showArticle')
},

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
