import Vuex from 'vuex';
import Vue from 'vue';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    cargoes: [
      {
        id: 1,
        name: 'Cargo #1',
        project: 'Project #1',
        status: 'Registered',
        width: 2,
        height: 2,
        length: 10,
        weight: 50
      },
      {
        id: 2,
        name: 'Cargo #2',
        project: 'Project #1',
        status: 'Registered',
        width: 1.5,
        height: 2,
        length: 8,
        weight: 38
      },
      {
        id: 3,
        name: 'Cargo #3',
        project: 'Project #1',
        status: 'Registered',
        width: 10,
        height: 2,
        length: 10,
        weight: 75
      },
      {
        id: 4,
        name: 'Cargo #4',
        project: 'Project #2',
        status: 'Registered',
        width: 2,
        height: 2,
        length: 2,
        weight: 12
      },
      {
        id: 5,
        name: 'Cargo #5',
        project: 'Project #2',
        status: 'Registered',
        width: 5,
        height: 5,
        length: 5,
        weight: 59
      }
    ]
  },
  getters: {
    cargoes: state => {
      return state.cargoes
    }
  },
  mutations: {
    addItem(state, item) {
      state.cargoes.push(item)
    },
    editItem(state, item) {
      state.cargoes[state.cargoes.findIndex(storedItem => storedItem.id === item.id)] = item
    },
    deleteItems(state, items) {
      state.cargoes = state.cargoes.filter(storedItem => !items.includes(storedItem))
    }
  },
  actions: {
    addItem(context, item) {
      if (item)
        context.commit('addItem', item)
    },
    editItem(context, item) {
      if (item)
        context.commit('editItem', item)
    },
    deleteItems(context, items) {
      context.commit('deleteItems', items)
    }
  }
});