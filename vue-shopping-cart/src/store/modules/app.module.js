import { set, toggle } from '@/utils/vuex'

const state = {
    drawer: null,
};

const mutations = {
    setDrawer: set('drawer'),
}
  
export const app = {
    namespaced: true,
    state,
    mutations
};