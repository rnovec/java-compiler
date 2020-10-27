<template>
  <div class="container">
    <div class="section">
      <div class="box">
        <div class="field">
          <div class="control is-expanded">
            <textarea
              style="overflow:hidden"
              v-autosize
              class="textarea has-text-left"
              :class="{ 'is-danger': !match }"
              type="search"
              rows="7"
              v-model="text"
              @input="submit()"
              @change="submit()"
              placeholder="» » » enter your code « « «"
            ></textarea>
          </div>
        </div>

        <div class="field">
          <div id="file" class="file has-name">
            <label class="file-label">
              <input
                class="file-input"
                type="file"
                ref="myFile"
                accept="text/plain"
                name="resume"
                @change="selectedFile(), submit()"
              />
              <span class="file-cta">
                <span class="file-icon">
                  <i class="fas fa-upload"></i>
                </span>
                <span class="file-label">Choose File...</span>
              </span>
              <span class="file-name">{{
                fileName || 'No file uploaded'
              }}</span>
            </label>
          </div>
        </div>
        <div class="field">
          <div class="control is-expanded">
            <button
              @click="submit()"
              class="button is-dark is-medium is-fullwidth"
              :class="isLoading ? ' is-loading ' : ''"
            >
              Compilar<i class="fas fa-cogs"></i>
            </button>
          </div>
        </div>
      </div>
      <!-- Developers -->
      <div v-if="text && match" class="columns is-desktop">
        <div class="column">
          <div class="card">
            <header class="card-header">
              <h5 class="card-header-title">
                <i class="fas fa-table"></i>Tabla de símbolos
              </h5>
            </header>
            <div class="content">
              <table class="table">
                <thead>
                  <tr>
                    <th>LEX</th>
                    <th>TOKEN</th>
                    <th>
                      <abbr title="Type">Type</abbr>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(token, i) in symbolTable" :key="i">
                    <th>{{ token.value }}</th>
                    <td>{{ token.type }}</td>
                    <td>{{ token.vartype }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="column">
          <div v-if="errors.length || semerrors.length" class="card" style="margin-bottom: 5%">
            <header class="card-header">
              <h5 class="card-header-title">
                <i class="fas fa-bug"></i>Tabla de errores
              </h5>
            </header>
            <div class="content">
              <table class="table">
                <thead>
                  <tr>
                    <th>
                      <abbr title="Token Error">ERR</abbr>
                    </th>
                    <th>
                      <abbr title="Lexema">LEX</abbr>
                    </th>
                    <th>LINEA</th>
                    <th>
                      <abbr title="Descripción">DESC</abbr>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(err, i) in semerrors" :key="i">
                    <th>{{ err.type }}{{ i+1 }}</th>
                    <td>{{ err.value }}</td>
                    <td>{{ err.line }}</td>
                    <td>{{ err.desc }}</td>
                  </tr>
                  <tr v-for="(err, i) in errors" :key="i">
                    <th>{{ err.type }}</th>
                    <td>{{ err.value }}</td>
                    <td>{{ err.line }}</td>
                    <td>{{ err.desc }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="card">
            <header class="card-header">
              <h5 class="card-header-title">Archivo de tokens</h5>
            </header>
            <div class="field" v-if="tokensFile">
              <div class="control is-expanded">
                <textarea
                  style="overflow:hidden"
                  v-autosize
                  class="textarea has-text-left"
                  :value="tokensFile"
                  disabled
                ></textarea>
              </div>
              <footer class="card-footer">
                <a
                  :href="encodedToken"
                  download="tokens.txt"
                  class="card-footer-item"
                  >Descargar tokens.txt</a
                >
              </footer>
            </div>
          </div>
        </div>
      </div>
      <!-- End Developers -->
    </div>
  </div>
</template>

<style scoped>
svg {
  margin: 0 5px !important;
}
textarea {
  background: url('http://i.imgur.com/2cOaJ.png');
  background-attachment: local;
  background-repeat: no-repeat;
  padding-left: 35px;
  padding-top: 10px;
  border-color: #ccc;
  font-size: 13px;
  line-height: 16px;
}
</style>

<script>
import { compile } from '@/api/java'
import { mapState } from 'vuex'

export default {
  name: 'App',
  data () {
    return {
      fileName: '',
      encodedToken: '',
      tokensFile: '',
      text: `void prueba1 () { a = a + b * 5; while ( a < b) { a = a * 5; }}`,
      isLoading: false,
      symbols: [],
      match: true
    }
  },
  created () {
    this.submit()
  },
  computed: {
    ...mapState(['symbolTable', 'errors', 'semerrors'])
  },
  methods: {
    async submit () {
      this.isLoading = true
      if (!this.text) {
        this.isLoading = false
        this.$store.commit('CLEAR_TOKENS')
        return
      }
      try {
        const data = await compile({ program: this.text })
        console.log(data)
        this.$store.commit('SET_TOKENS', data)
        this.tokensFile = data.tokensFile
        this.encodedToken =
          'data:text/plain;charset=utf-8,' + encodeURIComponent(this.tokensFile)
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    selectedFile () {
      let file = this.$refs.myFile.files[0]
      this.fileName = this.$refs.myFile.files[0].name
      // if (!file || file.type !== 'text/plain') return
      // Credit: https://stackoverflow.com/a/754398/52160
      let reader = new FileReader()
      reader.readAsText(file, 'UTF-8')
      reader.onload = evt => {
        this.text = evt.target.result
      }
      reader.onerror = evt => {
        console.error(evt)
      }
    }
  },
  directives: {
    autosize: {
      inserted: function (el) {
        el.style.height = el.scrollHeight + 'px'
        el.style.overflow = 'hidden'
        el.style.resize = 'none'
        function OnInput () {
          el.style.height = 'auto'
          el.style.height = el.scrollHeight + 'px'
          el.scrollTop = el.scrollHeight
          window.scrollTo(window.scrollLeft, el.scrollTop + el.scrollHeight)
        }
        el.addEventListener('textarea', OnInput, false)
      }
    }
  }
}
</script>
