import { createRouter, createWebHistory } from 'vue-router'
import Registration from '../views/Registration.vue'
import Login from '../views/Login.vue'
import ExpertList from '../views/ExpertList.vue'
import ExpertInfo from '../views/ExpertInfo.vue'
import ApplicationList from '../views/ApplicationList.vue'
import Reports from '../views/Reports.vue'
import LoadReports from '../views/LoadReports.vue'
import NotFound from '../views/NotFound.vue'
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
		name: 'ApplicationList',
		component: ApplicationList,
		path: '/applications'
	},
	{
		name: 'Reports',
		component: Reports,
		path: '/reports'
	},
	{
		name: 'Catalog',
		component: Catalog,
		path: '/catalog'
	},
	{
		name: 'LoadReports',
		component: LoadReports,
		path: '/reports/load'
	},
	{
		name: '404',
		component: NotFound,
		path: '/:pathMatch(.*)*'
	}
]

const router = createRouter({
	history: createWebHistory('/lk-expert/'),
	linkExactActiveClass: 'header__nav-link_active',
	routes
})

export default router
