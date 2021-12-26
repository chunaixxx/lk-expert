import { createRouter, createWebHistory } from 'vue-router'
import Registration from '../views/Registration.vue'

const routes = [
	{
		name: 'Registration',
		component: Registration,
		path: '/registration'
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	linkExactActiveClass: 'header__nav-link_active',
	routes
})

export default router
