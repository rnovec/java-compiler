import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    symbolTable: [],
    tokensFile: [],
    semerrors: [],
    errors: [],
    taddc: [],
  },
  mutations: {
    SET_TOKENS (state, data) {
      state.symbolTable = data.simbolTable.filter(t => !/ERR/.test(t.type))
      let filteredList = [...new Set(data.errors.map(JSON.stringify))].map(
        JSON.parse
      )
      state.errors = filteredList.filter(e => !/ERRSEM/.test(e.type))
      state.semerrors = filteredList.filter(e => /ERRSEM/.test(e.type))
      state.taddc = data.taddc
    },

    CLEAR_TOKENS (state) {
      state.symbolTable = []
      state.errors = []
      state.semerrors = []
    }
  },
  actions: {},
  modules: {}
})
