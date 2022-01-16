import { createStore } from 'vuex'

export default createStore({
	state: {
		experts: [
			{
				id: 1,
				img: 'https://img.ubu.ru/gal_v_ofis_trebuetsya_mladshiy_ofisnyy_sotrudnik_100675312.jpg',
				name: 'Иванов Иван Иванович',
				age: 32,
				workExperience: 8,
				advantages: 'Объективно и достойно оценивает инновационные продукты',
				count: 21
			}
		]
	},
	getters: {
		getExperts: state => state.experts,
		getExpertById: state => id => state.experts.find(expert => expert.id == id)
	},
	mutations: {},
	actions: {},
	modules: {}
})
