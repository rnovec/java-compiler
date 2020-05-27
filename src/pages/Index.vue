<template>
  <div class="container">
    <div class="section">
      <div class="box">
        <div class="field">
          <div class="control is-expanded">
            <textarea
              class="textarea has-text-left"
              type="search"
              rows="5"
              v-model="text"
              @change="test()"
              @input="test()"
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
                @change="selectedFile(), test()"
                name="resume"
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
              @click="test()"
              class="button is-dark is-medium is-fullwidth"
              :class="isLoading ? ' is-loading ' : ''"
            >
              Verificar&nbsp;&nbsp;<i class="fas fa-check"></i>
            </button>
          </div>
        </div>
        <div class="field" v-if="tokensFile">
          <div class="control is-expanded">
            <textarea
              class="textarea has-text-left"
              :value="tokensFile"
              disabled
            >
            </textarea>
          </div>
          <hr>
          <span> Descargar <a href="">tokens.txt</a> </span>
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
              <tr
                v-for="(token, i) in tokens.filter(
                  el => el.type !== 'SEP' && el.type !== 'Unexpected Token'
                )"
                :key="i"
              >
                <th>{{ token.token }}</th>
                <td>
                  {{ token.type }}
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
              <tr
                v-for="(token, i) in tokens.filter(
                  el => el.type === 'Unexpected Token'
                )"
                :key="i"
              >
                <th>SYNTAXERROR</th>
                <td>
                  {{ token.token }}
                </td>
                <td></td>
                <td>
                  {{ token.type }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- End Developers -->
    </div>
  </div>
</template>

<script>
import { getTokens } from './main'
import { ARIT } from './main'
export default {
  name: 'IndexPage',
  data () {
    return {
      fileName: '',
      tokensFile: '',
      text: 'int abc(int a, int b)\n  a = b * c / 2',
      isLoading: false,
      tokens: []
    }
  },
  created () {
    this.test()
  },
  methods: {
    test () {
      console.log(this.text.search(ARIT))
      console.log(ARIT.test(this.text))
      console.log(ARIT.exec(this.text))
      this.tokens = getTokens(this.text)
      this.tokensFile = ''
      this.tokens
        .forEach(t => {
          if (t.type === 'SEP')
            this.tokensFile += t.token
          else
            this.tokensFile += t.type + ' '
        })


    },
    selectedFile () {
      console.log('selected a file')
      let file = this.$refs.myFile.files[0]
      this.fileName = this.$refs.myFile.files[0].name
      console.log(file)
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
  }
}
</script>
