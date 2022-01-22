import { createStore } from 'vuex'

export default createStore({
	state: {
		experts: [
			{
				id: 1,
				img: 'https://img.ubu.ru/gal_v_ofis_trebuetsya_mladshiy_ofisnyy_sotrudnik_100675312.jpg',
				name: 'Иванов Иван Иванович',
				email: 'ivanov@mail.ru',
				birthday: '11.11.1981',
				age: 32,
				workExperience: 8,
				advantages: 'Объективно и достойно оценивает инновационные продукты',
				count: 21,
				certificates: [
					'https://ros-test.info/images/article/5b03f6af4cd63.png',
					'https://dspipe.ru/upload/iblock/a92/a92f5d00c3d5076d5ba62c25d3f0c5fc.png'
				],
				top: 7,
				needAccept: 'ESET Dynamic Threat Defense'
			}
		]
	},
	getters: {
		getExperts: state => state.experts,
		getExpertById: state => id => state.experts.find(expert => expert.id == id)
	},
	mutations: {},
	actions: {}
})
