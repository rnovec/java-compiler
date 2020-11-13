<template>
  <div class="section">
    <div class="columns is-desktop is-centered">
      <div class="column is-half-desktop">
        <div class="box">
          <div class="tags is-centered">
            <span
              v-for="name in Object.keys(examples)"
              :key="name"
              class="tag is-dark"
              ><a class="has-text-white" href="#" @click="loadFile(name)"
                >{{ name }}.java</a
              ></span
            >
          </div>

          <div class="field">
            <div class="control is-expanded">
              <textarea
                style="overflow:hidden"
                class="textarea has-text-left"
                :class="{ 'is-danger': !match }"
                type="search"
                :rows="textLines <= 5 ? 5 : textLines"
                v-model="text"
                @change="submit()"
                placeholder="» » » enter your code « « «"
              ></textarea>
            </div>
          </div>
          <div class="field">
            <div id="file" class="file has-name is-expanded">
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
        <div v-if="errors.length || semerrors.length" class="card">
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
                  <th>{{ err.type }}{{ i + 1 }}</th>
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
        <div class="card" v-if="tokensFile">
          <header class="card-header">
            <h5 class="card-header-title">Archivo de tokens</h5>
          </header>
          <div class="field">
            <div class="control is-expanded">
              <textarea
                style="overflow:hidden"
                :rows="tokensLines"
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
              <a @click="exportTriploAsCVS" class="card-footer-item"
                >Descargar triplo.csv</a
              >
            </footer>
          </div>
        </div>
        <div class="card" v-show="taddc.length && showTriplo">
          <header class="card-header">
            <h5 class="card-header-title">
              <i class="fas fa-table"></i>Triplos
            </h5>
          </header>
          <div class="content">
            <table id="triplo" class="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>
                    <abbr title="Type">Operador</abbr>
                  </th>

                  <th>Dato Objeto</th>
                  <th>Fuente</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, i) in taddc" :key="i">
                  <th>{{ i + 1 }}</th>
                  <td>{{ row.op }}</td>
                  <td>{{ row.obj }}</td>
                  <td>{{ row.fuente }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div
        class="column"
        v-if="errors.length || semerrors.length || tokensFile"
      >
        <div class="card" v-if="symbolTable.length">
          <header class="card-header">
            <h3 class="card-header-title">
              <i class="fas fa-table"></i>Tabla de símbolos
            </h3>
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
    </div>
  </div>
</template>

<style scoped>
.tags:not(:last-child) {
  margin-bottom: 0rem;
}

svg {
  margin: 0 5px !important;
}
.card {
  margin-bottom: 5%;
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
import ejemplo1 from '@/examples/ejemplo1.java'
import ejemplo2 from '@/examples/ejemplo2.java'
import ejemplo3 from '@/examples/ejemplo3.java'
import ejemplo4 from '@/examples/ejemplo4.java'
import exportDataMixin from '@/mixins/export-data'
import { export_table_to_csv } from '@/vendor/HtmlTable2Excel'

export default {
  name: 'App',
  mixins: [exportDataMixin],
  data () {
    return {
      fileName: '',
      encodedToken: '',
      tokensFile: '',
      text: '',
      isLoading: false,
      examples: {
        ejemplo1,
        ejemplo2,
        ejemplo3,
        ejemplo4
      },
      match: true
    }
  },
  created () {
    this.submit()
  },
  computed: {
    ...mapState(['symbolTable', 'errors', 'semerrors', 'taddc']),
    textLines () {
      return this.text.split(/\r\n|\r|\n/).length
    },
    tokensLines () {
      return this.tokensFile.split(/\r\n|\r|\n/).length
    },
    showTriplo () {
      return process.env.NODE_ENV === 'development'
    }
  },
  methods: {
    loadFile (fileName) {
      this.fileName = fileName + '.java'
      this.text = this.examples[fileName]
      this.submit()
    },
    async submit () {
      this.isLoading = true
      this.$store.commit('CLEAR_TOKENS')
      this.tokensFile = ''
      if (!this.text) {
        this.isLoading = false
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
    exportTriploAsCVS () {
      export_table_to_csv('triplo', 'triplo.csv')
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
  }
}
</script>
