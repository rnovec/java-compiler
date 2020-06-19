<template>
  <div class="container">
    <div class="section">
      <table class="table is-bordered is-striped is-narrow is-fullwidth">
        <thead>
          <tr>
            <th>Tipo de instrucción</th>
            <th>
              <abbr title="Ejemplo de lexemas">Ejemplo de lexemas</abbr>
            </th>
            <th>Prefijo token</th>
            <th>Contador</th>
          </tr>
        </thead>

        <tbody id="yui_3_17_2_2_1592261207050_122">
          <tr id="yui_3_17_2_2_1592261207050_121">
            <td height="39">
              <p>
                <span>Tipos de datos</span>
              </p>
            </td>
            <td>int, string, float, void</td>
            <td>
              <p>
                <span>TD</span>
              </p>
            </td>
            <td class="oa3">
              <p>
                <span>{{ counter['TD'] }}</span>
              </p>
            </td>
          </tr>
          <tr id="yui_3_17_2_2_1592261207050_132">
            <td>
              <p>
                <span>Operadores aritméticos</span>
              </p>
            </td>
            <td>
              <p>
                <span>+, -, *, /</span>
              </p>
            </td>
            <td>
              <p>
                <span>OP</span>
              </p>
            </td>
            <td>
              <p>
                <span>{{ counter['OP'] }}</span>
              </p>
            </td>
          </tr>
          <tr height="39">
            <td height="39">
              <p>
                <span>Delimitadores</span>
              </p>
            </td>
            <td>
              <p>
                <span>(, )</span>
              </p>
            </td>
            <td>
              <p>DEL</p>
            </td>
            <td>
              <p>
                <span>{{ counter['DEL'] }}</span>
              </p>
            </td>
          </tr>
          <tr height="39">
            <td height="39">
              <p>
                <span>Misceláneos</span>
              </p>
            </td>
            <td>
              <p>,</p>
            </td>
            <td>
              <p>
                <span>SEP</span>
              </p>
            </td>
            <td>
              <p>
                <span>
                  <span>{{ counter['SEP'] }}</span>
                </span>
              </p>
            </td>
          </tr>
          <tr height="39">
            <td height="39">
              <p>
                <span>Identificadores</span>
              </p>
            </td>
            <td>
              <p>
                <span>Variables y nombre de funciones</span>
              </p>
            </td>
            <td>
              <p>
                <span>ID</span>
              </p>
            </td>
            <td>
              <p>
                <span>
                  <span>{{ counter['ID'] }}</span>
                </span>
              </p>
            </td>
          </tr>
          <tr height="39">
            <td height="39">
              <p>
                <span>Constantes numéricas</span>
              </p>
            </td>
            <td>
              <p>
                <span>0, 1, 23, 7887</span>
              </p>
            </td>
            <td>
              <p>
                <span>CNE</span>
              </p>
            </td>
            <td>
              <p>
                <span>
                  <span>{{ counter['CNE'] }}</span>
                </span>
              </p>
            </td>
          </tr>
          <tr height="39">
            <td height="39">
              <p>
                <span>Operador asignación</span>
              </p>
            </td>
            <td>
              <p>
                <span>=</span>
              </p>
            </td>
            <td>
              <p>
                <span>AS</span>
              </p>
            </td>
            <td>
              <p>
                <span>
                  <span>{{ counter['AS'] }}</span>
                </span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>

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
              @input="compile()"
              @change="compile()"
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
                @change="selectedFile(), compile()"
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
              @click="compile()"
              class="button is-dark is-medium is-fullwidth"
              :class="isLoading ? ' is-loading ' : ''"
            >
              Verificar&nbsp;&nbsp;
              <i class="fas fa-check"></i>
            </button>
          </div>
        </div>
      </div>
      <!-- Developers -->
      <div v-if="text && match" class="columns is-desktop">
        <div class="column">
          <div class="card">
            <header class="card-header">
              <h5 class="card-header-title">Tabla de símbolos</h5>
            </header>
            <div class="content">
              <table class="table">
                <thead>
                  <tr>
                    <th>Lexema</th>
                    <th>
                      <abbr title="Token">Token</abbr>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(token, i) in symbolsTable" :key="i">
                    <th>{{ token.lex }}</th>
                    <td>{{ token.token }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="column">
          <div v-if="errors.length" class="card" style="margin-bottom: 5%">
            <header class="card-header">
              <h5 class="card-header-title">Tabla de errores</h5>
            </header>
            <div class="content">
              <table class="table">
                <thead>
                  <tr>
                    <th>
                      <abbr title="Token Error">Token err</abbr>
                    </th>
                    <th>
                      <abbr title="Lexema">Lexema</abbr>
                    </th>
                    <th>Linea</th>
                    <th>
                      <abbr title="Descripción">Desc</abbr>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(token, i) in errors" :key="i">
                    <th>{{ token.token }}</th>
                    <td>{{ token.lex }}</td>
                    <td>{{ token.line + 1 }}</td>
                    <td>{{ token.message }}</td>
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
import { getTokens, createTokensFile, getErrors } from '../lexical/main'
export default {
  name: 'App',
  data () {
    return {
      fileName: '',
      encodedToken: '',
      tokensFile: '',
      text: `void abc()\n a = ab + 1 + bb\n\nvo2id int(float a)\n a = ab + 1 / 2 * 4\n\nvoid d(int a, string b, int a)\n a = b + c /* d`,
      isLoading: false,
      symbols: [],
      counter: { TD: 0, ID: 0, CNE: 0, DEL: 0, AS: 0, OP: 0, SEP: 0 },
      match: true
    }
  },
  created () {
    this.compile()
  },
  computed: {
    symbolsTable () {
      return this.symbols.filter(el => el.lex !== '\n' && !el.error)
    },
    errors () {
      return this.symbols.filter(t => t.error)
    }
  },
  methods: {
    compile () {
      const { tokens, counters } = getTokens(this.text)
      if (!tokens.length) this.match = false
      else {
        this.match = true
        this.counter = counters
        this.symbols = tokens.filter(t => t.first)
        this.tokensFile = createTokensFile(tokens)
        this.encodedToken =
          'data:text/plain;charset=utf-8,' + encodeURIComponent(this.tokensFile)
      }
    },
    selectedFile () {
      let file = this.$refs.myFile.files[0]
      this.fileName = this.$refs.myFile.files[0].name
      if (!file || file.type !== 'text/plain') return

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
