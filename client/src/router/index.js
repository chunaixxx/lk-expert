import { createRouter, createWebHistory } from 'vue-router'
import test from '../views/test.vue'

const routes = [
	{
		name: 'test',
		component: test,
		path: '/'
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	linkExactActiveClass: 'header__nav-link_active',
	routes
})

export default router
