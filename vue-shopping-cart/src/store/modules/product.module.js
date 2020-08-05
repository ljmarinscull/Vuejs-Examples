import { productService } from '../../services/product.service';

const state = {
	products: null,
};

const getters = {
	products: (state) => state.products
};

const actions = {
	async getProducts({ commit }) {
		try {
			const products = await productService.getProducts();
			commit('SET_PRODUCTS', products)
		} catch (error) {
          console.log('error '+ error)
		}
	}
};

const mutations = {
	SET_PRODUCTS(state, products) {
		state.products = products;
		localStorage.setItem('products',JSON.stringify(products))
	}
};

export const product = {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};