<template>
  <div class="container">
    <div class="section">
      <div class="box">
        <div class="field">
          <div class="control is-expanded">
            <textarea
              class="textarea has-text-left"
              type="search"
              rows="7"
              v-model="text"
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
                @change="selectedFile"
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
            <button @click="isLoading = !isLoading" class="button is-dark is-large is-fullwidth">
              Test&nbsp;&nbsp;<i :class="isLoading ? 'fas fa-circle-notch fa-spin' : 'fas fa-check'"></i>
            </button>
          </div>
        </div>
      </div>
      <!-- Developers -->
      <div class="row columns">
        <div class="column is-half">
          <!-- <div class="card large">
                  <div class="card-image">
                    <figure class="image">
                      <img
                        src="https://images.unsplash.com/photo-1475778057357-d35f37fa89dd?dpr=1&auto=compress,format&fit=crop&w=1920&h=&q=80&cs=tinysrgb&crop="
                        alt="Image"
                      />
                    </figure>
                  </div>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-left">
                        <figure class="image is-96x96">
                          <img
                            src="https://i.imgsafe.org/a4/a4bb9acc5e.jpeg"
                            alt="Image"
                          />
                        </figure>
                      </div>
                      <div class="media-content">
                        <p class="title is-4 no-padding">Okinami</p>
                        <p>
                          <span class="title is-6"
                            ><a href="http://twitter.com/#">@twitterid</a></span
                          >
                        </p>
                        <p class="subtitle is-6">Lead Developer</p>
                      </div>
                    </div>
                    <div class="content">
                      The Beast stumbled in the dark for it could no longer see
                      the path. It started to fracture and weaken, trying to
                      reshape itself into the form of metal. Even the witches
                      would no longer lay eyes upon it, for it had become
                      hideous and twisted.
                      <div class="background-icon">
                        <span class="icon-twitter"></span>
                      </div>
                    </div>
                  </div>
                </div> -->
        </div>
        <div class="column is-half">
          <!-- <div class="card large">
                  <div class="card-image">
                    <figure class="image">
                      <img
                        src="https://source.unsplash.com/uzDLtlPY8kQ"
                        alt="Image"
                      />
                    </figure>
                  </div>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-left">
                        <figure class="image is-96x96">
                          <img
                            src="https://cdn.discordapp.com/avatars/244932903530659841/0c924a19fcf1b5c59bc9dc1b58b61bb0.jpg?size=1024"
                            alt="Image"
                          />
                        </figure>
                      </div>
                      <div class="media-content">
                        <p class="title is-4 no-padding">McSocks</p>
                        <p>
                          <span class="title is-6"
                            ><a href="http://twitter.com/#">@twitterid</a></span
                          >
                        </p>
                        <p class="subtitle is-6">Developer</p>
                      </div>
                    </div>
                    <div class="content">
                      The soul of the Beast seemed lost forever. Then, by the
                      full moon's light, a child was born; child with the
                      unbridled soul of the Beast that would make all others
                      pale in comparison.
                      <div class="background-icon">
                        <span class="icon-facebook"></span>
                      </div>
                    </div>
                  </div>
                </div> -->
        </div>
        <div class="column is-half">
          <!-- <div class="card large">
                  <div class="card-image">
                    <figure class="image">
                      <img
                        src="https://source.unsplash.com/pe_R74hldW4"
                        alt="Image"
                      />
                    </figure>
                  </div>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-left">
                        <figure class="image is-96x96">
                          <img
                            src="https://i.imgsafe.org/a5/a5e978ce20.jpeg"
                            alt="Image"
                          />
                        </figure>
                      </div>
                      <div class="media-content">
                        <p class="title is-4 no-padding">The Conceptionist</p>
                        <p>
                          <span class="title is-6"
                            ><a href="http://twitter.com/#">@twitterid</a></span
                          >
                        </p>
                        <p class="subtitle is-6">Developer</p>
                      </div>
                    </div>
                    <div class="content">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dolorum consequatur numquam aliquam tenetur ad amet
                      inventore hic beatae, quas accusantium perferendis
                      sapiente explicabo, corporis totam! Labore reprehenderit
                      beatae magnam animi!
                      <div class="background-icon">
                        <span class="icon-barcode"></span>
                      </div>
                    </div>
                  </div>
                </div> -->
        </div>
        <div class="column is-half">
          <!-- <div class="card large">
                  <div class="card-image">
                    <figure class="image">
                      <img
                        src="https://source.unsplash.com/pe_R74hldW4"
                        alt="Image"
                      />
                    </figure>
                  </div>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-left">
                        <figure class="image is-96x96">
                          <img
                            src="https://i.imgsafe.org/a5/a5e978ce20.jpeg"
                            alt="Image"
                          />
                        </figure>
                      </div>
                      <div class="media-content">
                        <p class="title is-4 no-padding">The Conceptionist</p>
                        <p>
                          <span class="title is-6"
                            ><a href="http://twitter.com/#">@twitterid</a></span
                          >
                        </p>
                        <p class="subtitle is-6">Developer</p>
                      </div>
                    </div>
                    <div class="content">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dolorum consequatur numquam aliquam tenetur ad amet
                      inventore hic beatae, quas accusantium perferendis
                      sapiente explicabo, corporis totam! Labore reprehenderit
                      beatae magnam animi!
                      <div class="background-icon">
                        <span class="icon-barcode"></span>
                      </div>
                    </div>
                  </div>
                </div> -->
        </div>
      </div>
      <!-- End Developers -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  methods: {
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
  },
  data () {
    return {
      fileName: '',
      text: '',
      isLoading: false,
      tab: 'mails',
      search: '',
      storage: 0.26
    }
  }
}
</script>
