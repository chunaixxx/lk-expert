import { createRouter, createWebHistory } from 'vue-router'
import Registration from '../views/Registration.vue'
import Login from '../views/Login.vue'
import ExpertList from '../views/ExpertList.vue'
import ExpertProfile from '../views/ExpertProfile.vue'

const routes = [
	{
		name: 'Registration',
		component: Registration,
		path: '/registration'
	},
	{
		name: 'Login',
		component: Login,
		path: '/login'
	},
	{
		name: 'ExpertList',
		component: ExpertList,
		path: '/experts'
	},
	{
		name: 'ExpertProfile',
		component: ExpertProfile,
		path: '/experts/:id'
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	linkExactActiveClass: 'header__nav-link_active',
	routes
})

export default router
