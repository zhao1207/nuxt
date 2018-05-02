import axios from 'axios'

export const state = () => ({
	user: {}
})

export const actions = {
	async logininInfo({ commit }, { userName }) {
		try {
			const {data} = await axios.post('/user/logininInfo', { userName })
			if (data.success) {
				commit('SET_USER', data.user)
			}
			return data
		} catch (err) {
			throw new Error(err)
		}
	},
	async save({ commit }, { userInfo }){
		try {
			const {data} = await axios.post('/user/save', { userInfo });
			return data;
		} catch (err){
			throw new Error(err);
		}
	}
};

export const mutations = {
	SET_USER: (state, user) => {
		state.user = user
	}
}