<template>
  <div>
    <div class="hero is-small has-text-centered is-dark is-bold">
      <div class="hero-body">
        <div class="container">
          <br />
          <p class="title is-size-1">
            Analizador Léxico & Sintáctico
          </p>
          <p class="subtitle">
            Funciones y Expresiones Aritméticas
          </p>
          <router-view></router-view>
        </div>
        <div id="flow">
          <span class="flow-1"></span>
          <span class="flow-2"></span>
          <span class="flow-3"></span>
        </div>
      </div>
    </div>

    <footer class="footer">
      <div class="container">
        <div class="content has-text-left">
          <h1 class="is-size-2 has-text-white">Acerca de</h1>
          <ul>
            <li>
              Creado por <b>Raúl Novelo</b> & <b>Paul Mena</b>. Instituto
              Tecnológico de Mérida / TecNM, 2020.
            </li>
            <li>
              Analizador léxico para la materia de
              <a
                href="https://es.wikipedia.org/wiki/Teor%C3%ADa_de_aut%C3%B3matas"
                target="_blank"
                >Lenguajes y Automatas I</a
              >.
            </li>
            <li>
              Preguntas, sugerencias, o bugs, envie un e-mail a
              <a href="mailto:raul.novelo@aaaimx.org">raul.novelo@aaaimx.org</a>
              y/o
              <a href="mailto:paul.mena@aaaimx.org">paul.mena@aaaimx.org</a>.
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>
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
