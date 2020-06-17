<template>
  <video-background
    overlay="rgba(0, 0, 0, 0.5)"
    :src="video"
    style="width: 100vw; height: 100vh;"
    :autoplay="true"
  >
    <div class="contenedor">
      <h1 class="font">Gii Studio</h1>
      <h1 class="font2">{{ idioma }}</h1>
      <div class="divi">
        <a href="https://www.instagram.com/giistudio" target="_blank"
          ><img class="logo" src="../assets/instagram-brands.svg"
        /></a>
        <a href="https://www.vimeo.com/giistudio" target="_blank"
          ><img class="logo" src="../assets/vimeo-v-brands.svg"
        /></a>
      </div>
      <div class="divi font3">
        <span class="cickleable" v-on:click="espanol()">Es</span>/<span
          class="cickleable"
          v-on:click="ingles()"
          >En</span
        >
      </div>
    </div>
  </video-background>
</template>

<script>
// @ is an alias to /src
import VideoBackground from 'vue-responsive-video-background-player'
import video from '../assets/video.mp4'

export default {
  name: 'Home',
  data: () => ({
    video,
    idioma: 'Próximamente'
  }),
  methods: {
    espanol() {
      this.idioma = 'Próximamente'
    },
    ingles() {
      this.idioma = 'Coming Soon'
    }
  },
  components: {
    VideoBackground
  }
}
</script>
<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@100&display=swap')
.contenedor
  display: flex !important
  flex-direction: column !important
  justify-content: center !important
  align-items: center !important
  height: 100vh
  width: 100vw

.font
  font-family: 'Spartan', sans-serif
  color: white
  font-size: 6rem

.font2
  font-family: 'Spartan', sans-serif
  color: white
  font-size: 2rem
  margin-top: 2rem

.font3
  font-family: 'Spartan', sans-serif
  color: white
  font-size: 1.5rem
  margin-top: 2rem

.logo
  height: 3rem
  margin-top: 2rem
  margin-left: 1rem

.divi
  display: inline

.cickleable
  cursor: pointer
@media only screen and (max-width: 600px)
  .font
    font-size: 3rem

  .font2
    font-size: 1.5rem
</style>
