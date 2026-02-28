import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../pages/Dashboard.vue'
import Accounts from '../pages/Accounts.vue'
import Budgets from '../pages/Budgets.vue'
import Transactions from '../pages/Transactions.vue'
import Goals from '../pages/Goals.vue'
import Insights from '../pages/Insights.vue'
import Settings from '../pages/Settings.vue'
import Profile from '../pages/Profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Dashboard },
    { path: '/accounts', component: Accounts },
    { path: '/budgets', component: Budgets },
    { path: '/transactions', component: Transactions },
    { path: '/goals', component: Goals },
    { path: '/insights', component: Insights },
    { path: '/settings', component: Settings },
    { path: '/profile', component: Profile },
  ],
})

export default router
