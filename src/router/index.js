import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from '../views/SignupView.vue'
import  MainView from '../views/MainView.vue'
import PredictionsView from '../views/PredictionsView'
import  Settings from '../components/Settings.vue'
import  Logout from '../components/Logout.vue'
import  Modal from '../components/Modal.vue'

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
    {
      path: '/setting',
      name: 'setting',
      component: Settings
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/modal',
      name: 'modal',
      component:Modal
    },
    
    
 
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
