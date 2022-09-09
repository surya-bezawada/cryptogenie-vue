import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from '../views/SignupView.vue'
import  MainView from '../views/MainView.vue'
import PredictionsView from '../views/PredictionsView'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/main',
      name: 'main',
      component: MainView
    },
    {
      path: '/prediction',
      name: 'prediction',
      component: PredictionsView
    },
    
 
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
