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
              type="search"
              rows="7"
              v-model="text"
              @input="compile()"
              @change="compile()"
              placeholder="» » » enter your code « « «"
            >
            </textarea>
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
                <span class="file-label">
                  Choose File...
                </span>
              </span>
              <span class="file-name">
                {{ fileName || 'No file uploaded' }}
              </span>
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
              Verificar&nbsp;&nbsp;<i class="fas fa-check"></i>
            </button>
          </div>
        </div>
      </div>
      <!-- Developers -->
      <div class="columns is-desktop">
        <div class="column">
          <h5>Tabla de simbolos</h5>
          <table class="table">
            <thead>
              <tr>
                <th>Lexema</th>
                <th><abbr title="Token">Token</abbr></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(token, i) in symbols" :key="i">
                <th>{{ token.lex }}</th>
                <td>
                  {{ token.token }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="column">
          <h5>Tabla de errores</h5>
          <table class="table">
            <thead>
              <tr>
                <th><abbr title="Token Error">Token err</abbr></th>
                <th><abbr title="Lexema">Lexema</abbr></th>
                <th>Linea</th>
                <th><abbr title="Descripción">Desc</abbr></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(token, i) in errors" :key="i">
                <th>{{ token.token }}</th>
                <td>
                  {{ token.lex }}
                </td>
                <td>{{ token.line + 1 }}</td>
                <td>
                  {{ token.message }}
                </td>
              </tr>
            </tbody>
          </table>
          <div class="field" v-if="tokensFile">
            <div class="control is-expanded">
              <textarea
                style="overflow:hidden"
                v-autosize
                class="textarea has-text-left"
                :value="tokensFile"
                disabled
              >
              </textarea>
            </div>
            <br />
            <span>
              Descargar
              <a download="tokens.txt" :href="encodedToken"> tokens.txt</a>
            </span>
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
  name: 'IndexPage',
  data () {
    return {
      fileName: '',
      encodedToken: '',
      tokensFile: '',
      text: `void abc()\n a = ab + 1 + bb\n\nvo2id int(int a)\n a = ab + 1 / 2 * 4\n\nvoid abc(int a, int b, int a)\n a = b + c /* d`,
      isLoading: false,
      tokens: []
    }
  },
  created () {
    this.compile()
  },
  computed: {
    symbols () {
      return this.tokens.filter(el => el.lex !== '\n' && !el.error)
    },
    errors () {
      return this.tokens.filter(t => t.error)
    }
  },
  methods: {
    compile () {
      this.tokens = getTokens(this.text)
      this.tokensFile = createTokensFile(this.tokens)
      this.encodedToken =
        'data:text/plain;charset=utf-8,' + encodeURIComponent(this.tokensFile)
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
      inserted: function (el)  {
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
