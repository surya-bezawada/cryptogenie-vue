import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
 import contact from '../components/contact.vue'
import  MainView from '../views/MainView.vue'
import PredictionsView from '../views/PredictionsView'
import  Settings from '../components/Settings.vue'
import  Signup from '../components/Signup.vue'
import  Modal from '../components/Modal.vue'
import  Piechart from '../components/Piechart.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
      path: '/signup',
      name: 'signup',
      component: Signup

    },
     {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/modal',
      name: 'modal',
      component: Modal
    },
    {
      path: '/pie',
      name: 'pie',
      component: Piechart
    },
   
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
