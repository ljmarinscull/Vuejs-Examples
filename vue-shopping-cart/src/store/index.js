import Vue from 'vue'
import Vuex from 'vuex';
import { app } from './modules/app.module';
import { cart } from './modules/cart.module';
import { product } from './modules/product.module';

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        app,
        cart,
        product,
    }
});

export default store