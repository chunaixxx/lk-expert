import { createRouter, createWebHistory } from 'vue-router'
import Registration from '../views/Registration.vue'
import Login from '../views/Login.vue'
import ExpertList from '../views/ExpertList.vue'
import ExpertInfo from '../views/ExpertInfo.vue'
import Catalog from '../views/Catalog.vue'

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
		name: 'ExpertInfo',
		component: ExpertInfo,
		path: '/experts/:id'
	},
	{
		name: 'Catalog',
		component: Catalog,
		path: '/catalog'
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	linkExactActiveClass: 'header__nav-link_active',
	routes
})

export default router
