import { createRouter, createWebHistory } from 'vue-router'
import Registration from '../views/Registration.vue'
import ExpertList from '../views/ExpertList.vue'

const routes = [
	{
		name: 'Registration',
		component: Registration,
		path: '/registration'
	},
	{
		name: 'ExpertList',
		component: ExpertList,
		path: '/experts'
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	linkExactActiveClass: 'header__nav-link_active',
	routes
})

export default router
