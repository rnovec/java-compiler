<template>
  <div>
    <!-- START NAV
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="../">
            <img alt="Logo" />
          </a>
          <span class="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenu" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active">
              Home
            </a>
            <a class="navbar-item">
              Examples
            </a>
            <a class="navbar-item">
              Features
            </a>
            <a class="navbar-item">
              Team
            </a>
            <a class="navbar-item">
              Archives
            </a>
            <a class="navbar-item">
              Help
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                Account
              </a>
              <div class="navbar-dropdown">
                <a class="navbar-item">
                  Dashboard
                </a>
                <a class="navbar-item">
                  Profile
                </a>
                <a class="navbar-item">
                  Settings
                </a>
                <hr class="navbar-divider" />
                <div class="navbar-item">
                  Logout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
     END NAV -->
    <div class="hero is-medium has-text-centered is-dark is-bold">
      <div class="hero-body">
        <div class="container">
          <p class="title is-size-1">
            Analizador Léxico & Sintáctico
          </p>
          <p class="subtitle">
            Lenguajes y Automátas I
          </p>
        </div>
        <div id="flow">
          <span class="flow-1"></span>
          <span class="flow-2"></span>
          <span class="flow-3"></span>
        </div>

        <div class="container">
          <div class="section">
            <div class="box">
              <div class="field">
                <div class="control is-expanded">
                  <textarea
                    class="textarea has-text-left"
                    type="search"
                    v-model="text"
                    placeholder="» » » » » » enter your code « « « « « «"
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
                  <button class="button is-dark is-large is-fullwidth">
                    Test&nbsp;&nbsp;
                    <svg
                      class="svg-inline--fa fa-paper-plane fa-w-16"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="paper-plane"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
                      ></path></svg
                    ><!-- <i class="fas fa-paper-plane"></i> -->
                  </button>
                </div>
              </div>
            </div>
            <!-- Developers -->
            <div class="row columns">
              <div class="column is-half">
                <div class="card large">
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
                </div>
              </div>
              <div class="column is-half">
                <div class="card large">
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
                </div>
              </div>
              <div class="column is-half">
                <div class="card large">
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
                </div>
              </div>
              <div class="column is-half">
                <div class="card large">
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
                </div>
              </div>
            </div>
            <!-- End Developers -->
          </div>
        </div>
      </div>
    </div>

    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <div class="soc">
            <a href="#"
              ><i class="fa fa-github-alt fa-2x" aria-hidden="true"></i
            ></a>
            <a href="#"
              ><i class="fa fa-youtube fa-2x" aria-hidden="true"></i
            ></a>
            <a href="#"
              ><i class="fa fa-facebook fa-2x" aria-hidden="true"></i
            ></a>
            <a href="#"
              ><i class="fa fa-twitter fa-2x" aria-hidden="true"></i
            ></a>
          </div>
          <p>
            <strong>Bulma</strong> by
            <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is
            licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
            <br />
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'GooglePlayLayout',
  methods: {
    selectedFile () {
      console.log('selected a file')
      console.log(this.$refs.myFile.files[0])

      let file = this.$refs.myFile.files[0]
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
      leftDrawerOpen: false,
      tab: 'mails',
      search: '',
      storage: 0.26,

      links1: [
        { text: 'Account' },
        { text: 'Payment methods' },
        { text: 'My subscriptions' },
        { text: 'Redeem' },
        { text: 'Buy gift card' },
        { text: 'My wishlist' },
        { text: 'My Play activity' },
        { text: 'Parent guide' }
      ]
    }
  }
}
</script>

<style>
body {
  background-color: #041221;
  font-family: 'Inconsolata', monospace;
}
/* Card start*/
.card {
  overflow: hidden;
}
.card.large {
  height: 600px;
  -webkit-backface-visibility: hidden;
  backface-visibility: initial;
  border-radius: 5px;
}
/* Card end */
.media-content {
  overflow: hidden;
}
.title.no-padding {
  margin-bottom: 0 !important;
}
#flow span {
  display: block;
  width: 200vw;
  height: 210vw;
  position: absolute;
  top: -180vw;
  left: -50vw;
  border-radius: 90vw;
  opacity: 0.1;
}
.flow-1 {
  background: yellowgreen;
  -webkit-animation: rotating 20s linear infinite;
  -moz-animation: rotating 20s linear infinite;
  -ms-animation: rotating 20s linear infinite;
  -o-animation: rotating 20s linear infinite;
  animation: rotating 20s linear infinite;
}
.flow-2 {
  background: #f442ee;
  position: absolute;
  -webkit-animation: rotating 15s linear infinite;
  -moz-animation: rotating 15s linear infinite;
  -ms-animation: rotating 15s linear infinite;
  -o-animation: rotating 15s linear infinite;
  animation: rotating 15s linear infinite;
}
.flow-3 {
  background: #42eef4;
  position: absolute;
  -webkit-animation: rotating 7s linear infinite;
  -moz-animation: rotating 7s linear infinite;
  -ms-animation: rotating 7s linear infinite;
  -o-animation: rotating 7s linear infinite;
  animation: rotating 7s linear infinite;
}
@-webkit-keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.rotating {
  -webkit-animation: rotating 2s linear infinite;
  -moz-animation: rotating 2s linear infinite;
  -ms-animation: rotating 2s linear infinite;
  -o-animation: rotating 2s linear infinite;
  animation: rotating 2s linear infinite;
}
.footer {
  background-color: #222831;
  color: lemonchiffon;
}
.footer p,
strong {
  color: lemonchiffon;
}
.footer a:hover {
  color: crimson;
}
.fa {
  color: lemonchiffon;
  margin: 10px;
}

::selection {
  background-color: #def4ff;
}
</style>
