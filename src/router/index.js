import Vue from 'vue'
import VueRouter from 'vue-router'
import Product from "@/views/Product";
import History from "@/views/History";
import FormValidation from "@/views/FormValidation";
import MovementForm from "@/views/MovementForm";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Product
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/history',
    name: 'History',
    component: History
  },
  {
    path: '/movement',
    name: 'MovementForm',
    component: MovementForm
  },
  {
    path: '/form',
    name: 'FormValidation',
    component: FormValidation,
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
