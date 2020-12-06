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
    program: '',
    asm: ''
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
      state.program = data.program.join('\n')
      state.asm = data.asm.join('\n')
    },

    CLEAR_TOKENS (state) {
      state.symbolTable = []
      state.tokensFile = []
      state.semerrors = []
      state.errors = []
      state.taddc = []
    }
  },
  actions: {},
  modules: {}
})
