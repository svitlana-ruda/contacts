import configuration from '../../data/configuration.json'
import { getContacts } from '../../services/contacts'

export default {
  namespaced: true,

  state: () => ({
    contacts: [],
    tab: null,
    activeId: null
  }),

  mutations: {
    SET_CONTACTS(state, data) {
      state.contacts = data.results
    },
    SET_TAB(state, data) {
      state.tab = data
    },
    SET_ACTIVE_ID(state, data) {
      state.activeId = data
    }
  },

  actions: {
    async fetchContacts({ commit }) {
      try {
        const { data } = await getContacts()
        commit('SET_CONTACTS', data)
      } catch (e) {
        throw new Error(e)
      }
    }
  },

  getters: {
    initialTab: () => {
      return configuration.tabs[0]
    },
    sortedContacts: (state, getters) => {
      return state.contacts.filter(contact =>
        contact.name.last
          .toLowerCase()
          .startsWith(state.tab || getters.initialTab)
      )
    }
  }
}
